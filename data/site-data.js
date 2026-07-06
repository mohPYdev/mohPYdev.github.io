/* ============================================================
   SITE DATA — single source of truth for Publications & Service
   Generated with manage.html. You may also hand-edit this file.

   status: "published" | "accepted" | "under review" | "in submission"
   public: true  = visible on the live website
           false = hidden until the paper is accepted/published
   ============================================================ */

window.PUBLICATIONS = [
  {
    title: "Is Call Graph Pruning Really Effective? An Empirical Re-evaluation",
    authors: ["Mohammad Rafieian", "Vlad Birsan", "Kunal Katiyar", "Dylan Zhong", "Shiyi Wei"],
    venue: "ICSE",
    year: 2026,
    status: "accepted",
    pdf: "papers/call-graph-pruning-preprint.pdf",
    public: true
  },
  {
    title: "Improving ML-based Static Analysis Classification via Explainable AI",
    authors: ["Sai Yerramreddy", "Mohammad Rafieian", "Shiyi Wei", "Adam Porter"],
    venue: "ICST",
    year: 2026,
    status: "accepted",
    public: true
  },
  {
    title: "An Empirical Study of Static Analysis-Based Variability Bug Detection",
    authors: ["Austin Mordahl", "Zack Patterson", "Mohammad Rafieian", "Meah Tahmeed Ahmad", "Shiyi Wei"],
    venue: "ESEM",
    year: 2026,
    status: "under review",
    public: false
  },
  {
    title: "Automatic Test Suites for Static Analysis Tools via Dynamic Analysis",
    authors: ["Austin Mordahl", "Mohammad Rafieian", "Shiyi Wei"],
    venue: "FSE",
    year: 2027,
    status: "in submission",
    public: false
  },
  {
    title: "Agentic Root Cause Reasoning and Unsoundness in Call Graph Analysis",
    authors: ["Mohammad Rafieian", "Michael Hicks", "Shiyi Wei"],
    venue: "ICSE",
    year: 2027,
    status: "under review",
    public: false
  },
  {
    title: "Automated White-Box Unit Testing for Functional Requirements",
    authors: ["Ying Zhou", "Mohammad Rafieian", "Shiyi Wei", "Wing Lam", "Andrian Marcus"],
    venue: "ICSE",
    year: 2027,
    status: "under review",
    public: false
  }
];

window.SERVICES = [
  { role: "Artifact Evaluation Committee", venue: "PLDI", year: 2026 },
  { role: "Artifact Evaluation Committee", venue: "ASE", year: 2026 },
  { role: "Artifact Evaluation Committee", venue: "ISSTA", year: 2026 },
  { role: "Artifact Evaluation Committee", venue: "ICST", year: 2026 }
];

window.OWNER_NAME = "Mohammad Rafieian";
