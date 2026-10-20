const modules = [
  { icon: "🖥️", title: "Asset Management", text: "Register, track and retire every laptop, server, mobile and network device across its full lifecycle, with QR codes for instant lookup." },
  { icon: "👥", title: "HR & People", text: "Manage employees and department hierarchies, and assign or return equipment during onboarding and offboarding with a full history." },
  { icon: "💰", title: "Finance", text: "Track purchase cost, vendors, warranty coverage and straight-line depreciation so you always know the current value of your estate." },
];

const features = [
  { icon: "📦", title: "Full asset lifecycle", text: "Procurement, active, maintenance and end-of-life states with categories, search and filters." },
  { icon: "🔁", title: "Assign & return workflows", text: "Assign assets to employees and record returns, with an immutable ownership history." },
  { icon: "🏢", title: "Employees & departments", text: "Department hierarchy, managers and cost centres in one place." },
  { icon: "🧾", title: "Vendor management", text: "Keep supplier details linked directly to the assets they provided." },
  { icon: "🛡️", title: "Warranty tracking", text: "Expiry dates, coverage details and warranty reports so nothing lapses unnoticed." },
  { icon: "📉", title: "Depreciation", text: "Straight-line depreciation with current asset value shown automatically." },
  { icon: "📱", title: "QR codes", text: "Generate QR labels and use a mobile-friendly page to look up any asset in seconds." },
  { icon: "📜", title: "Audit logging", text: "Create, update, assign, return and login actions are all recorded for accountability." },
  { icon: "📊", title: "Executive dashboard", text: "Asset counts, status breakdown and warranty expiry alerts at a glance." },
];

const steps = [
  { title: "Onboard a device", text: "Register the laptop, record cost, vendor and warranty, then print its QR label." },
  { title: "Assign to an employee", text: "Hand it over with a tracked assignment tied to the person and department." },
  { title: "Monitor value & warranty", text: "Depreciation and warranty alerts keep finance and IT aligned." },
  { title: "Offboard & return", text: "Record the return and condition, ready to reassign, with the full trail kept." },
];

const security = [
  { icon: "🏷️", title: "Tenant isolation", text: "Shared-schema with row-level security, plus an option for a dedicated database per client." },
  { icon: "🔑", title: "Role-based access", text: "Super admin, tenant admin, IT admin, helpdesk and viewer roles with fine-grained permissions." },
  { icon: "🔐", title: "Modern authentication", text: "Short-lived JWT access tokens, refresh tokens and TOTP multi-factor authentication for admins." },
  { icon: "🔒", title: "Encryption", text: "TLS in transit and AES-256 at rest, with field-level encryption for secrets." },
  { icon: "🧱", title: "API hardening", text: "Input validation, rate limiting per tenant and user, CORS controls and security headers." },
  { icon: "🏬", title: "MSP-ready", text: "Managed service providers can oversee multiple client tenants from a single parent account." },
];

const tech = ["React", "TypeScript", "Material UI", "Redux Toolkit", "NestJS", "PostgreSQL 16", "Redis", "RabbitMQ", "Docker", "Kubernetes", "Azure", "GitHub Actions", "Prometheus", "Grafana", "Terraform"];

const roadmap = [
  { phase: "Phase 1", title: "Asset Management MVP", text: "Assets, employees, vendors, warranty, depreciation, QR codes, audit log, dashboard.", status: "Delivered" },
  { phase: "Phase 2", title: "Monitoring Agent", text: "Heartbeat, metrics and software inventory from endpoints.", status: "Planned" },
  { phase: "Phase 3", title: "Remote Management", text: "Script execution and software deployment.", status: "Planned" },
  { phase: "Phase 4", title: "Network Discovery", text: "SNMP, Active Directory discovery and topology mapping.", status: "Planned" },
  { phase: "Phase 5", title: "Ticketing", text: "ITIL-style ticketing with SLAs.", status: "Planned" },
  { phase: "Phase 6", title: "Remote Desktop", text: "Browser-based remote sessions.", status: "Planned" },
  { phase: "Phase 7", title: "AI IT Assistant", text: "AI-powered help for IT operations.", status: "Planned" },
];

const team = [
  { name: "Pramodkumar S V", role: "DevOps Engineer · Co-founder", bio: "A former network administrator turned DevOps engineer. Owns infrastructure, CI/CD, security and reliability for Assetly.", links: { LinkedIn: "https://www.linkedin.com/in/pramodkumar-s-vagannanavar" } },
  { name: "Pavankumar", role: "Frontend Developer · Co-founder", bio: "Builds the Assetly user interface with a focus on speed, usability and clean design.", links: { LinkedIn: "https://www.linkedin.com/in/pavan-kumar-vel" } },
];

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (id) => document.getElementById(id);

const iconCard = (i) => `<article class="card"><div class="icon">${i.icon}</div><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`;

$("modules-grid").innerHTML = modules.map(iconCard).join("");
$("feature-grid").innerHTML = features.map(iconCard).join("");
$("security-grid").innerHTML = security.map(iconCard).join("");

$("steps").innerHTML = steps.map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("");

$("tech-list").innerHTML = tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("");

$("roadmap-list").innerHTML = roadmap.map((r) => `
  <div class="milestone ${r.status === "Delivered" ? "done" : ""}">
    <span class="phase">${esc(r.phase)}</span>
    <div><h3>${esc(r.title)} <small>${esc(r.status)}</small></h3><p>${esc(r.text)}</p></div>
  </div>`).join("");

$("team-grid").innerHTML = team.map((m) => `
  <article class="card person">
    <div class="avatar">${esc(m.name.split(" ").map((p) => p[0]).join("").slice(0, 2))}</div>
    <h3>${esc(m.name)}</h3>
    <p class="role">${esc(m.role)}</p>
    <p>${esc(m.bio)}</p>
    <div class="links">${Object.entries(m.links).map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`).join("")}</div>
  </article>`).join("");

const nav = $("nav");
document.querySelector(".menu-toggle").addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("click", () => nav.classList.remove("open"));

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const COMMON_DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "live.com", "protonmail.com"];

function distance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

// Returns an error message, or "" if the email looks valid and its domain can receive mail.
async function checkEmail(email) {
  if (!EMAIL_RE.test(email)) return "Please enter a valid email address.";
  const domain = email.split("@")[1].toLowerCase();
  const typo = COMMON_DOMAINS.find((d) => d !== domain && distance(d, domain) <= 2);
  if (typo) return `Did you mean ${email.split("@")[0]}@${typo}?`;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=MX`, { signal: ctrl.signal });
    clearTimeout(timer);
    const dns = await res.json();
    if (dns.Status === 3 || (dns.Status === 0 && !dns.Answer)) {
      // No MX record: fall back to an A record (valid per mail standards).
      const a = await (await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=A`)).json();
      if (!a.Answer) return `The domain "${domain}" cannot receive email. Please check your address.`;
    }
  } catch (_) {
    // DNS lookup unavailable: accept the format-valid address rather than blocking the visitor.
  }
  return "";
}

$("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = $("form-status");
  const btn = form.querySelector("button");
  const data = Object.fromEntries(new FormData(form));
  data.email = data.email.trim();
  btn.disabled = true;
  status.style.color = "";
  status.textContent = "Verifying email...";
  const emailError = await checkEmail(data.email);
  if (emailError) {
    status.style.color = "#dc2626";
    status.textContent = emailError;
    form.email.focus();
    btn.disabled = false;
    return;
  }
  status.textContent = "Sending...";
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const out = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(out.error || "Failed");
    status.style.color = "#16a34a";
    status.textContent = "Thanks! We'll get back to you soon.";
    form.reset();
  } catch (err) {
    status.style.color = "#dc2626";
    status.textContent = err.message && err.message !== "Failed" ? err.message : "Could not send your message. Please try again in a moment.";
  } finally {
    btn.disabled = false;
  }
});

$("year").textContent = new Date().getFullYear();

