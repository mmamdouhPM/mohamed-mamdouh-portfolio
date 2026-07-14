export type Project = {
  slug: string;
  name: string;
  type: string;
  outcome: string;
  tags: string[];
  role: string;
  teamSize: string;
  tools: string[];
  challenge: string;
  approach: string;
  outcomeFull: string;
};

export const projects: Project[] = [
  {
    slug: "mme",
    name: "MME",
    type: "Corporate Website",
    outcome:
      "Deployed through a single coordinated stakeholder thread — no dropped handoffs between client, account management, and dev.",
    tags: ["Stakeholder Mgmt", "Planning", "Estimation", "Deployment"],
    role: "Project Lead",
    teamSize: "Cross-functional — developers, designers & account management",
    tools: ["Jira", "Figma", "Google Meet"],
    challenge:
      "MME needed a corporate website rebuilt from the ground up, but the real risk wasn't the build — it was three separate groups (the client, account management, and the technical team) who'd never had to move in lockstep before. Left alone, that's how scope drifts and deadlines slip.",
    approach:
      "I opened with structured discovery to pin down scope before a single estimate was made, then made myself the one constant thread running through every conversation — client, account management, developers — so nothing got decided twice or missed entirely. Estimation and delivery planning happened in the open, with the same information reaching every party at the same time.",
    outcomeFull:
      "The site went live through a clean, single deployment with no last-minute surprises — because there was never a moment where one stakeholder group knew something another didn't.",
  },
  {
    slug: "smile-egypt",
    name: "Smile Egypt",
    type: "Website & Dashboard",
    outcome: "Website and internal dashboard shipped together, with client fully onboarded post-launch.",
    tags: ["Requirements Gathering", "Dashboard Delivery", "Client Handover"],
    role: "Delivery Lead",
    teamSize: "Cross-functional — UI/UX, development & QA tracks",
    tools: ["Jira", "Trello", "Figma", "Notion"],
    challenge:
      "Two products, one deadline: a public-facing website and an internal dashboard, built in parallel by UI/UX, development, and QA tracks that each had their own pace and their own definition of 'done.'",
    approach:
      "Requirements gathering came first and came deep — not a checklist, but real sessions to understand how the dashboard would actually be used day to day. From there I ran all three tracks as one coordinated delivery rather than three separate projects that happened to share a launch date, and closed the loop with hands-on adoption walkthroughs so the client's team wasn't left to figure out the dashboard alone.",
    outcomeFull:
      "Both products launched on the same day, and the client's team was already comfortable navigating the dashboard by the time we handed over — adoption, not just delivery, was the actual finish line.",
  },
  {
    slug: "scrub-hub",
    name: "Scrub Hub",
    type: "Website & Dashboard",
    outcome: "Launched with onboarding and post-launch technical support in place from day one.",
    tags: ["Delivery Management", "Agile Feedback", "Post-launch Support"],
    role: "Cross-team Delivery Manager",
    teamSize: "Cross-functional — design, development & QA",
    tools: ["Jira", "Trello", "Google Meet"],
    challenge:
      "Design, development, and QA needed to move at the same time, not in sequence — the launch date didn't leave room for the usual hand-off-and-wait rhythm between disciplines.",
    approach:
      "I set up tight agile feedback loops so issues surfaced in days, not sprints, and stayed personally on point through launch, dashboard onboarding, and the early post-launch window rather than treating go-live as the finish line.",
    outcomeFull:
      "Website and dashboard launched on schedule, and the client had onboarding support and a technical safety net in place from the first hour after go-live — not weeks later.",
  },
  {
    slug: "almakam",
    name: "Almakam",
    type: "E-commerce Platform & Dashboard",
    outcome: "Dashboard built around how the client's team actually works, not a generic template.",
    tags: ["E-commerce Delivery", "Milestone Tracking", "Planning", "Stakeholder Communication"],
    role: "Project Coordinator",
    teamSize: "Cross-functional — developers & designers",
    tools: ["Jira", "Figma", "Excel"],
    challenge:
      "It's easy to ship an e-commerce dashboard that matches the technical spec and still doesn't match how the client's team actually runs their operation day to day — the two aren't automatically the same thing.",
    approach:
      "I coordinated from scope analysis all the way through production deployment, staying close to developers and designers throughout so the dashboard kept getting pulled back toward operational reality instead of drifting toward a generic e-commerce template.",
    outcomeFull:
      "Platform and dashboard reached production shaped around the client's real workflows — the kind of fit that only shows up when someone is actively defending it through the whole build, not just at sign-off.",
  },
  {
    slug: "supenv",
    name: "Supenv",
    type: "Corporate Website",
    outcome: "Delivered on schedule despite unclear requirements at discovery.",
    tags: ["Business Analysis", "Requirements Analysis", "Risk Mitigation", "Client Mgmt"],
    role: "Business Analyst / Delivery Lead",
    teamSize: "Cross-functional — design & development",
    tools: ["Jira", "Figma", "Notion"],
    challenge:
      "Discovery ended with more open questions than answers, and every round of stakeholder feedback afterward was a fresh chance for the schedule to quietly slip.",
    approach:
      "Rather than proceed on assumptions, I went back into the client's business domain to sharpen requirement clarity before locking scope — then ran the design-revision cycles that followed with active velocity and risk tracking, so ambiguity got resolved early instead of compounding late.",
    outcomeFull:
      "Delivered on the original schedule — the extra time spent clarifying requirements up front is exactly what kept the revision cycles from ever becoming a threat to the deadline.",
  },
  {
    slug: "great-idea",
    name: "Great Idea",
    type: "Branding & Social Media",
    outcome: "All creative streams signed off within the agreed timeline.",
    tags: ["Branding", "Meeting Facilitation", "Team Coordination"],
    role: "Program Coordinator",
    teamSize: "Cross-functional — creative, branding & social media",
    tools: ["Trello", "Notion", "Google Meet"],
    challenge:
      "Branding and social media workstreams were running in parallel, each needing its own round of client sign-off — the kind of setup where approvals easily become the bottleneck.",
    approach:
      "I organized the workflows across both streams and ran alignment meetings with a clear agenda every time, so sign-off conversations stayed decisions, not discussions.",
    outcomeFull:
      "Every creative stream cleared sign-off within the agreed timeline, with branding and social staying in sync rather than drifting into separate schedules.",
  },
];

export type TimelineItem = { years: string; role: string; org: string };

export const timeline: TimelineItem[] = [
  { years: "Jan 2024 — May 2026", role: "Project Manager", org: "Plus One Up · Cairo, Egypt" },
  { years: "May 2023 — Dec 2023", role: "Digital Marketing Executive", org: "Daniela Resort · Cairo, Egypt" },
  { years: "Mar 2021 — Apr 2023", role: "Branch Manager", org: "Raslan Group (Laboratory) · Giza, Egypt" },
  { years: "Dec 2019 — Feb 2021", role: "Digital Marketing Specialist", org: "Raslan Group · Giza, Egypt" },
  { years: "Feb 2015 — Nov 2016", role: "Web Designer", org: "Swams · Cairo, Egypt" },
  { years: "Mar 2014 — Jan 2015", role: "Web Designer", org: "UK.Pro Solutions · Cairo, Egypt" },
];

export type SkillGroup = { category: string; tags: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Delivery",
    tags: [
      "Software PM", "Planning & Scheduling", "Agile", "Scrum", "Kanban",
      "Waterfall", "Estimation", "Risk Mgmt", "Deployment Coordination", "Post-launch Support",
    ],
  },
  {
    category: "Stakeholder & Business",
    tags: [
      "Stakeholder Mgmt", "Requirements Gathering", "Cross-functional Leadership",
      "Client Communication", "Meeting Facilitation", "Business Analysis",
    ],
  },
  { category: "Tools", tags: ["Jira", "Trello", "Notion", "Figma", "Excel", "Google Sheets", "Teams", "Zoom"] },
  {
    category: "Industries",
    tags: ["Healthcare", "Hospitality", "Environmental Services", "Retail", "Corporate Services", "Digital Marketing"],
  },
];

export const trustedBy = ["MME", "Smile Egypt", "Scrub Hub", "Almakam", "Supenv", "Great Idea", "Daniela Resort", "Raslan Group"];

export const journeyNodes = [
  { index: "01", label: "Design", years: "2014 — 2016", detail: "Learned that a beautiful interface means nothing if no one can build it on time." },
  { index: "02", label: "Marketing", years: "2019 — 2023", detail: "Learned to translate business goals into briefs a technical team can actually execute." },
  { index: "03", label: "Operations", years: "2021 — 2023", detail: "Ran daily operations and budgets for a 12-person team — where plans meet reality." },
  { index: "04", label: "Project Mgmt", years: "2024 — Present", detail: "Now I hold all three lenses at once — for every project I deliver." },
];

export type ProcessStep = { index: string; phase: string; icon: string; desc: string };

export const processSteps: ProcessStep[] = [
  { index: "01", phase: "Discovery", icon: "Search", desc: "Structured sessions to understand the real problem before anything is scoped or promised." },
  { index: "02", phase: "Requirements Gathering", icon: "ClipboardList", desc: "Translating stakeholder goals into requirements a technical team can actually build against." },
  { index: "03", phase: "Planning & Estimation", icon: "Calculator", desc: "Working sessions with developers and designers on estimation, sprint planning, and architecture mapping." },
  { index: "04", phase: "Execution", icon: "PlayCircle", desc: "Tracking milestones and surfacing risk early, with agenda-driven alignment meetings to keep momentum." },
  { index: "05", phase: "QA & Testing", icon: "CheckCircle2", desc: "Coordinating structured QA cycles so issues surface before launch, not after." },
  { index: "06", phase: "Deployment", icon: "Rocket", desc: "Planning the release itself as its own milestone — not an afterthought once development ends." },
  { index: "07", phase: "Handover", icon: "Handshake", desc: "Dashboard walkthroughs and client onboarding, so the team can actually run what was built." },
  { index: "08", phase: "Post-Launch Support", icon: "LifeBuoy", desc: "Staying on after go-live — the project isn't finished the moment it ships." },
];

export const achievements = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Concurrent Projects Managed" },
  { value: 6, suffix: "+", label: "Industries Worked Across" },
];

export const teamComposition = ["Developers", "UI/UX Designers", "QA Engineers", "Motion Designers", "Content Creators", "Media Buyers", "Marketing Specialists"];

export const contact = {
  email: "m.mamdouh193@gmail.com",
  phone: "+20 100 065 7044",
  phoneHref: "+201000657044",
  linkedin: "https://www.linkedin.com/in/mohamed-mamdouh-299838103/",
  linkedinLabel: "/mohamed-mamdouh",
  whatsappNumber: "+20 100 065 7044",
  whatsappHref:
    "https://wa.me/201000657044?text=" +
    encodeURIComponent("Hi Mohamed, I found your portfolio and would like to discuss a Project Manager opportunity."),
};
