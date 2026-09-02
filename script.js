/**
 * ============================================================
 *    IGNITION — Clemson Build Pitch Competition
 *    ============================================================
 *    ⚠️  THINGS TO UPDATE BEFORE PUBLISHING (also listed in README):
 *    1. APPLY_URL  — your Paperform application link
 *    2. RSVP_URL   — your spectator RSVP link
 *    3. COMPETITORS — confirmed teams (replace the placeholders)
 *    ============================================================
 *
 * @format
 */

const CONFIG = {
	// Paste your Paperform URL here, e.g. "https://clemsonbuild.paperform.co"
	APPLY_URL: "",

	// Paste your spectator RSVP link here
	RSVP_URL: "",
};

/* ------------------------------------------------------------
   Competitor roster.
   Replace the placeholder entries with confirmed teams:
   { name, tagline, category, members }
   Keep the last entry ({ openSlot: true }) to show the
   "your spot here" card, or remove it when the field is full.
   ------------------------------------------------------------ */
const COMPETITORS = [
	//   { // PLACEHOLDER — replace with a confirmed team
	//     name: "Startup One",
	//     tagline: "What they're building, in one sharp line.",
	//     category: "SaaS",
	//     members: "Founder A · Cofounder B",
	//   },
	//   { // PLACEHOLDER — replace with a confirmed team
	//     name: "Startup Two",
	//     tagline: "Another real business with real traction.",
	//     category: "Consumer",
	//     members: "Founder C · Cofounder D",
	//   },
	//   { // PLACEHOLDER — replace with a confirmed team
	//     name: "Startup Three",
	//     tagline: "Solving a problem students actually have.",
	//     category: "Hardware",
	//     members: "Founder E",
	//   },
	//   { openSlot: true },
];

/* ---------------- Render competitor cards ---------------- */
function renderCompetitors() {
	const grid = document.getElementById("teamGrid");
	if (!grid) return;

	grid.innerHTML = COMPETITORS.map((team) => {
		if (team.openSlot) {
			return `
        <article class="team-card open-slot">
          <span class="team-badge">Spot open</span>
          <h3>Your team here</h3>
          <p class="tagline">Apply by September 15 and take the stage at Ignition.</p>
          <p class="members">Cofounders welcome · Equity-free</p>
          <a class="btn btn-primary btn-sm" data-apply href="#apply">Apply to pitch</a>
        </article>`;
		}
		return `
      <article class="team-card">
        <span class="team-badge">${team.category || "Competitor"}</span>
        <h3>${team.name}</h3>
        <p class="tagline">${team.tagline || ""}</p>
        <p class="members">${team.members || ""}</p>
      </article>`;
	}).join("");
}

/* ---------------- Wire up config links ---------------- */
function applyConfigLinks() {
	document.querySelectorAll("[data-apply]").forEach((a) => {
		if (CONFIG.APPLY_URL) a.href = CONFIG.APPLY_URL;
	});
	document.querySelectorAll("[data-rsvp]").forEach((a) => {
		if (CONFIG.RSVP_URL) a.href = CONFIG.RSVP_URL;
	});
}

/* ---------------- Mobile nav ---------------- */
function initNav() {
	const toggle = document.getElementById("navToggle");
	const links = document.getElementById("navLinks");
	if (!toggle || !links) return;

	toggle.addEventListener("click", () => {
		const open = links.classList.toggle("open");
		toggle.setAttribute("aria-expanded", String(open));
	});

	// Close the menu after tapping a link
	links
		.querySelectorAll("a")
		.forEach((a) =>
			a.addEventListener("click", () => links.classList.remove("open")),
		);
}

renderCompetitors();
applyConfigLinks();
initNav();
