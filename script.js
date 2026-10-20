document.documentElement.classList.add("js");

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

const schoolModules = [
  { icon: "🎓", title: "Admissions & Students", text: "Handle applications and admission numbers, student records, enrolment and class sections." },
  { icon: "🗓️", title: "Timetable & Attendance", text: "Class timetables with daily attendance for students, plus biometric device punches." },
  { icon: "📝", title: "Exams, Syllabus & Revisions", text: "Exam schedules and marks, syllabus unit tracking, revision sessions and correction requests." },
  { icon: "💳", title: "Fee Management", text: "Fee structures and invoices, with role-based access for accounts staff, parents and students." },
  { icon: "🚌", title: "Transport & Live Bus", text: "Vehicles, routes and trips, with a live bus view for parents, students and drivers." },
  { icon: "📣", title: "Events, Sports & Notices", text: "School events, sports and cultural programmes, and notifications to the right audience." },
  { icon: "👩‍🏫", title: "Staff & Leave", text: "Staff records and availability, with leave requests for teachers and school staff." },
  { icon: "🏫", title: "Classes", text: "Class and section tree to organise students and teachers across the campus." },
  { icon: "🤖", title: "Built-in assistant", text: "An in-app assistant that helps users find their way around the platform." },
];

const schoolRoles = ["Platform Admin", "Enterprise Admin", "School Admin", "Admission Staff", "Accounts Staff", "Class Teacher", "Teacher", "Exam Controller", "Transport Staff", "Driver", "Student", "Parent"];

const schoolHighlights = [
  { icon: "🏢", title: "Schools and school groups", text: "Platform admins manage enterprises, and enterprise admins manage their own schools, each with its own data." },
  { icon: "🔑", title: "Role-based access", text: "Every module is controlled by role, enforced on the API and covered by automated RBAC checks." },
  { icon: "🎨", title: "Custom branding", text: "Each school or group can publish its own theme colours, with light, dark and system modes for every user." },
  { icon: "👥", title: "User provisioning", text: "School admins create staff, student and parent accounts with the right role from within the app." },
];

const schoolTech = ["Next.js 15", "React 19", "NestJS 11", "TypeScript", "Prisma", "Supabase Postgres", "Docker", "Railway", "Vercel"];

const why = [
  { icon: "🛡️", title: "Secure by design", text: "Role-based access, tenant isolation, audit trails and hardened headers are built in from day one." },
  { icon: "⚙️", title: "DevOps-first delivery", text: "Containers, CI/CD and infrastructure as code keep releases fast, repeatable and reliable." },
  { icon: "🧩", title: "Multi-tenant by default", text: "One platform safely serves many clients, schools or organisations without mixing their data." },
  { icon: "✨", title: "Clean, fast interfaces", text: "Modern React and Next.js front ends designed for speed and everyday usability." },
];

const process = [
  { title: "Discover", text: "We learn how your organisation works and what is slowing it down." },
  { title: "Design", text: "We shape the workflows, roles and screens before writing a line of code." },
  { title: "Build", text: "We ship in small, tested increments with security and access control included." },
  { title: "Deploy & operate", text: "We run the platform with automated pipelines, monitoring and continuous improvement." },
];

const team = [
  { name: "Pramodkumar S V", role: "DevOps Engineer · Co-founder", bio: "A former network administrator turned DevOps engineer. Owns infrastructure, CI/CD, security and reliability across our products.", links: { LinkedIn: "https://www.linkedin.com/in/pramodkumar-s-vagannanavar" } },
  { name: "Pavankumar", role: "Frontend Developer · Co-founder", bio: "Builds the user interfaces of Assetly and SchoolStack with a focus on speed, usability and clean design.", links: { LinkedIn: "https://www.linkedin.com/in/pavan-kumar-vel" } },
];

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (id) => document.getElementById(id);

const iconCard = (i) => `<article class="card reveal"><div class="icon">${i.icon}</div><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`;
const stepItem = (s) => `<li class="reveal"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`;
const tagList = (list) => list.map((t) => `<span class="tag reveal">${esc(t)}</span>`).join("");

$("modules-grid").innerHTML = modules.map(iconCard).join("");
$("feature-grid").innerHTML = features.map(iconCard).join("");
$("security-grid").innerHTML = security.map(iconCard).join("");
$("why-grid").innerHTML = why.map(iconCard).join("");
$("school-modules").innerHTML = schoolModules.map(iconCard).join("");
$("school-highlights").innerHTML = schoolHighlights.map(iconCard).join("");

$("steps").innerHTML = steps.map(stepItem).join("");
$("process-steps").innerHTML = process.map(stepItem).join("");

$("tech-list").innerHTML = tagList(tech);
$("school-tech").innerHTML = tagList(schoolTech);
$("school-roles").innerHTML = tagList(schoolRoles);

const marqueeItems = [...new Set([...tech, ...schoolTech])];
$("marquee").innerHTML = [...marqueeItems, ...marqueeItems].map((t) => `<span>${esc(t)}</span>`).join("");

$("team-grid").innerHTML = team.map((m) => `
  <article class="card person reveal">
    <div class="avatar">${esc(m.name.split(" ").map((p) => p[0]).join("").slice(0, 2))}</div>
    <h3>${esc(m.name)}</h3>
    <p class="role">${esc(m.role)}</p>
    <p>${esc(m.bio)}</p>
    <div class="links">${Object.entries(m.links).map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener noreferrer">${esc(k)}</a>`).join("")}</div>
  </article>`).join("");

/* ---------- Navigation ---------- */
const nav = $("nav");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

const dropdown = document.querySelector(".dropdown");
const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
const setDropdown = (open) => {
  dropdown.classList.toggle("open", open);
  dropdownToggle.setAttribute("aria-expanded", String(open));
};
dropdownToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  setDropdown(!dropdown.classList.contains("open"));
});
document.addEventListener("click", (e) => { if (!dropdown.contains(e.target)) setDropdown(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setDropdown(false); });
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    setDropdown(false);
  }
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 600), { passive: true });

/* ---------- Reveal on scroll + counters ---------- */
const countUp = (el) => {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / 1200, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const counters = document.querySelectorAll("[data-count]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const co = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { countUp(en.target); co.unobserve(en.target); } });
  }, { threshold: 0.6 });
  counters.forEach((el) => co.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  counters.forEach((el) => { el.textContent = el.dataset.count; });
}

/* ---------- Contact form ---------- */
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

