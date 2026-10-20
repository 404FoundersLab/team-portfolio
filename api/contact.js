// Vercel serverless function. Recipient addresses and API key live only in environment variables:
//   RESEND_API_KEY  - API key from https://resend.com
//   CONTACT_TO      - comma-separated list of addresses that should receive messages
//   CONTACT_FROM    - (optional) verified sender, e.g. "404FoundersLab <contact@yourdomain.com>"
const dns = require("dns").promises;

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const hits = new Map(); // simple per-instance rate limit

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function domainCanReceiveMail(domain) {
  try {
    const mx = await dns.resolveMx(domain);
    if (mx.length) return true;
  } catch (_) {}
  try {
    const a = await dns.resolve4(domain);
    return a.length > 0;
  } catch (_) {
    return false;
  }
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) return res.status(429).json({ error: "Too many messages. Please try again later." });
  hits.set(ip, [...recent, now]);

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const honeypot = String(body.website || "");

  if (honeypot) return res.status(200).json({ ok: true }); // bots: pretend success
  if (!name || name.length > 100) return res.status(400).json({ error: "Please enter your name." });
  if (!EMAIL_RE.test(email) || email.length > 254) return res.status(400).json({ error: "Please enter a valid email address." });
  if (!message || message.length > 5000) return res.status(400).json({ error: "Please enter a message (max 5000 characters)." });
  if (!(await domainCanReceiveMail(email.split("@")[1]))) {
    return res.status(400).json({ error: "That email domain cannot receive email. Please check your address." });
  }

  const to = (process.env.CONTACT_TO || "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!process.env.RESEND_API_KEY || !to.length) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO");
    return res.status(500).json({ error: "Contact form is not configured yet." });
  }

  const payload = {
    from: process.env.CONTACT_FROM || "404FoundersLab Website <onboarding@resend.dev>",
    reply_to: email,
    subject: `404FoundersLab website enquiry from ${name.replace(/[\r\n]/g, " ")}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  };

  // Send to each recipient separately so one rejected address (e.g. Resend sandbox limits) doesn't block the others.
  const results = await Promise.all(
    to.map(async (recipient) => {
      try {
        const r = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, to: [recipient] }),
        });
        if (!r.ok) console.error("Resend error", r.status, await r.text());
        return r.ok;
      } catch (err) {
        console.error("Resend request failed", err);
        return false;
      }
    })
  );

  if (!results.some(Boolean)) {
    return res.status(502).json({ error: "Could not send your message. Please try again later." });
  }
  return res.status(200).json({ ok: true });
};

