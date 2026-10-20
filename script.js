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
  { name: "Pramodkumar S V", role: "DevOps Engineer · Co-founder", bio: "A former network administrator turned DevOps engineer. Owns infrastructure, CI/CD, security and reliability for Assetly.", links: { LinkedIn: "https://www.linkedin.com/in/pramodkumar-s-vagannanavar", Email: "mailto:svpramodkumar1@gmail.com" } },
  { name: "Pavankumar", role: "Frontend Developer · Co-founder", bio: "Builds the Assetly user interface with a focus on speed, usability and clean design.", links: { LinkedIn: "https://www.linkedin.com/in/pavan-kumar-vel", Email: "mailto:vpavan.j7@gmail.com" } },
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

// Messages are emailed via FormSubmit (https://formsubmit.co) to the primary address, with the second as CC.
const CONTACT_TO = "svpramodkumar1@gmail.com";
const CONTACT_CC = "vpavan.j7@gmail.com";

$("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = $("form-status");
  const btn = form.querySelector("button");
  const data = Object.fromEntries(new FormData(form));
  btn.disabled = true;
  status.style.color = "";
  status.textContent = "Sending...";
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_TO}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        _subject: `404FoundersLab website enquiry from ${data.name}`,
        _replyto: data.email,
        _cc: CONTACT_CC,
        _template: "table",
        _captcha: "false",
      }),
    });
    const out = await res.json();
    if (!res.ok || out.success === "false") throw new Error(out.message || "Failed");
    status.style.color = "#16a34a";
    status.textContent = "Thanks! We'll get back to you soon.";
    form.reset();
  } catch (err) {
    // Fallback: open the visitor's email app with the message pre-filled.
    const subject = encodeURIComponent(`404FoundersLab website enquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\nName: ${data.name}\nEmail: ${data.email}`);
    const href = `mailto:${CONTACT_TO}?cc=${CONTACT_CC}&subject=${subject}&body=${body}`;
    status.style.color = "#dc2626";
    status.innerHTML = `Could not send automatically. <a href="${href}" style="text-decoration:underline">Click here to send via your email app</a>.`;
    window.location.href = href;
  } finally {
    btn.disabled = false;
  }
});

$("year").textContent = new Date().getFullYear();

