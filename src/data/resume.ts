export const profile = {
  name: "Shushil Pant",
  first: "Shushil",
  title: "Computer Engineer & Mathematician",
  location: "Hattiesburg, Mississippi",
  origin: "Nepal",
  coords: "31.33°N / 89.29°W",
  timezone: "America/Chicago",
  status: "Open to research & engineering roles",
  intro:
    "I'm a Computer Engineering & Mathematics student building AI pipelines, serverless architectures, and data infrastructure for government ministries, state agencies, and research labs — systems engineered to run at scale, and under budget.",
  email: "shushil.pant@outlook.com",
  github: "https://github.com/shushilpant",
  githubHandle: "github.com/shushilpant",
  linkedin: "https://linkedin.com/in/shushilpant",
  linkedinHandle: "linkedin.com/in/shushilpant",
};

export const navLinks = [
  { label: "About", href: "#about", index: "01" },
  { label: "Work", href: "#work", index: "02" },
  { label: "Skills", href: "#skills", index: "03" },
  { label: "Education", href: "#education", index: "04" },
  { label: "Earlier", href: "#earlier", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

/** Numeric part is kept separate so the ledger can count up on entry. */
export const metrics = [
  {
    value: 17,
    prefix: "",
    suffix: "M+",
    label: "Records standardised",
    note: "World Ocean Database",
  },
  {
    value: 98,
    prefix: "",
    suffix: "%",
    label: "Extraction accuracy",
    note: "500+ transcript PDFs",
  },
  {
    value: 3,
    prefix: "",
    suffix: "",
    label: "Mining ministries served",
    note: "West Africa",
  },
  {
    value: 5,
    prefix: "<$",
    suffix: "",
    label: "Monthly cloud cost",
    note: "At peak enrolment",
  },
];

/** Decorative stack ribbon between Skills and Education. */
export const marquee = [
  "Python",
  "TypeScript",
  "React 19",
  "AWS Lambda",
  "Bedrock",
  "Elasticsearch",
  "MongoDB",
  "Step Functions",
  "LLM Pipelines",
  "Mathematics",
];

export const capabilities = [
  {
    kicker: "AI & intelligence systems",
    description:
      "Multi-provider LLM pipelines with citation-enforced outputs, prompt-injection hardening, inline entity resolution, and human-in-the-loop review.",
  },
  {
    kicker: "Full-stack engineering",
    description:
      "React 19 / TypeScript dashboards and event-driven, serverless AWS architectures built for production scale and real-time interaction.",
  },
  {
    kicker: "Data engineering",
    description:
      "Large-scale ingestion and standardisation, Elasticsearch indexing, automation pipelines, and Python libraries that make scientific data usable.",
  },
];

export const experience = [
  {
    id: "peblink",
    role: "AI Research Project Team Member",
    company: "Peblink",
    project: "West Africa Mining Intelligence Initiative",
    period: "May 2026 — Present",
    featured: true,
    summary:
      "A React 19 mining-intelligence dashboard serving three West African ministries, powered by a multi-provider AI pipeline grounded strictly in live compliance data.",
    tags: ["React 19", "TypeScript", "AI Pipeline", "Recharts"],
    highlights: [
      "Architected a full-stack React 19 / TypeScript mining intelligence dashboard serving three West African mining ministries with 8 interconnected views and real-time country-level filtering across Guinea, Ghana, and Côte d'Ivoire.",
      "Engineered a multi-provider AI pipeline supporting Pollinations, OpenRouter, and local LLMs through a unified OpenAI-compatible streaming client with TTL caching, prompt-injection hardening, and a 50-call observability ring buffer.",
      "Built six AI-powered intelligence capabilities grounded strictly in live compliance data with citation-enforced outputs.",
      "Implemented inline entity resolution that parses bracketed IDs into interactive chips with hover preview cards, click-to-navigate routing, and machine-parseable suggested-action buttons.",
      "Designed breach and early-warning risk detection with multi-severity flag lifecycle, UBO opacity tracking, ownership-change detection, and cross-operator benchmarking.",
      "Created 12+ KPI visualisations — compliance radar profiles, trend sparklines, risk heatmaps, and expiry-concentration timelines.",
    ],
  },
  {
    id: "ms-dits",
    role: "AI / Software Project Team Member",
    company: "Mississippi Dept. of Information Technology Services",
    project: "State Board of Nursing",
    period: "Jan 2026 — May 2026",
    featured: true,
    summary:
      "A fully serverless, event-driven licensing pipeline pairing Amazon Bedrock extraction with a deterministic Python rule engine — processing thousands of applications for under $5/month.",
    tags: ["AWS CDK", "Lambda", "Bedrock", "React"],
    highlights: [
      "Engineered a fully serverless, event-driven pipeline using AWS CDK, Lambda, Step Functions, S3, and DynamoDB — sustaining cloud costs under $5/month at peak enrolment.",
      "Integrated Amazon Bedrock (Nova Pro) and OCR to extract 30+ structured data points from transcript PDFs with 98% accuracy across 500+ sample documents.",
      "Developed a pure-Python rule engine evaluating 50+ accreditation requirements and 17 fraud criteria mapped to 10 national Safe Practices, reducing false flags by 40%.",
      "Built a React / TypeScript human-in-the-loop reviewer dashboard with text-span and bounding-box overlays for sub-second flag-to-source traceability.",
      "Implemented a single-table DynamoDB model with immutable audit trails, projecting an 80% reduction in manual verification time.",
    ],
  },
  {
    id: "iaas",
    role: "Research Assistant",
    company: "Institute for Advanced Analytics and Society",
    project: "NOAA Aquaview",
    period: "May 2025 — Sep 2025",
    featured: true,
    summary:
      "Standardised 17M+ oceanographic records spanning 125 years for NOAA's Aquaview, and shipped the AQUAVIEW Python library — 1,000+ downloads.",
    tags: ["Python", "MongoDB", "Elasticsearch", "LLM"],
    highlights: [
      "Processed and standardised 17M+ oceanographic records spanning 125 years from the World Ocean Database for NOAA's Aquaview platform.",
      "Integrated datasets using MongoDB, Google Cloud, and Elasticsearch for high-volume scientific data storage, indexing, and retrieval.",
      "Designed the AQUAVIEW Python library with multiple API endpoints, achieving 1,000+ downloads.",
      "Built an LLM-powered classification system for uncrewed marine systems, processing 20M+ data points from heterogeneous sources.",
      "Developed a data adapter for the National Data Buoy Center supporting 30+ years of historical and live-streaming data.",
    ],
  },
  {
    id: "jones-capital",
    role: "Data Analyst Intern",
    company: "Jones Capital",
    project: null,
    period: "Sep 2025 — May 2026",
    featured: false,
    summary:
      "Standardised service workflows and built JQL dashboards across portfolio companies, with n8n pipelines that retired manual reporting.",
    tags: ["Jira", "n8n", "JQL", "Confluence"],
    highlights: [
      "Designed automation workflows in Jira Service Management across multiple portfolio companies, standardising ticket routing, escalation policies, and SLA tracking.",
      "Developed advanced JQL queries and dynamic dashboards for real-time monitoring of agent productivity, backlog trends, and SLA compliance.",
      "Engineered n8n automation pipelines integrating data across systems, eliminating manual reporting processes.",
      "Conducted large-scale data cleansing and validation on 2,000+ work items, implementing preventative data-quality checks.",
    ],
  },
  {
    id: "math-zone",
    role: "Mathematics Tutor",
    company: "Math Zone — University of Southern Mississippi",
    project: null,
    period: "Aug 2025 — May 2026",
    featured: false,
    summary:
      "One-on-one and group tutoring in College Algebra — an 86% pass rate and 74% class average in Fall 2025.",
    tags: ["Teaching", "College Algebra"],
    highlights: [
      "Achieved an 86% student pass rate and 74% class average in Fall 2025 through targeted one-on-one and group tutoring in College Algebra.",
      "Designed and facilitated structured exam-review sessions contributing to above-average course outcomes.",
      "Proctored quizzes and exams for 200+ students per semester while maintaining academic integrity.",
    ],
  },
  {
    id: "optimal-answers",
    role: "Coding Intern",
    company: "Optimal Answers",
    project: null,
    period: "Sep 2024 — Mar 2025",
    featured: false,
    summary:
      "Built core MVP UI with SignalR real-time sync and a reusable component library that cut front-end build time 45%.",
    tags: ["JavaScript", "SignalR", "WCAG"],
    highlights: [
      "Developed core UI components for an MVP web application supporting real-time decision optimisation for 1,200+ simulated concurrent users.",
      "Integrated SignalR for live data synchronisation, virtually eliminating latency between user inputs and backend calculations.",
      "Engineered a reusable UI module library, reducing front-end development time by 45%.",
      "Achieved 100% WCAG compliance across all MVP pages through systematic accessibility remediation.",
    ],
  },
  {
    id: "gdg",
    role: "Executive Member",
    company: "Google Developer Group — USM Chapter",
    project: null,
    period: "Aug 2025 — Present",
    featured: false,
    summary:
      "Lead planning for workshops, hackathons, and DevFest; founded and ran the inaugural Robot Soccer tournament.",
    tags: ["Leadership", "Workshops", "DevFest"],
    highlights: [
      "Coordinate and lead planning of technical workshops, hackathons, and coding competitions.",
      "Organised and hosted the inaugural Robot Soccer tournament; mentored the first-place team on hardware–software integration.",
      "Assisted in hosting DevFest and industry-led technical seminars.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C / C++", "SQL", "PHP"],
  },
  {
    category: "Web",
    skills: ["React", "jQuery", "SignalR", "HTML5", "CSS3"],
  },
  {
    category: "Cloud",
    skills: ["AWS CDK", "Lambda", "Step Functions", "S3", "DynamoDB", "Bedrock", "GCP"],
  },
  {
    category: "Data",
    skills: ["MongoDB", "DynamoDB", "Elasticsearch", "SQL Server"],
  },
  {
    category: "Tooling",
    skills: ["Git / GitHub", "n8n", "Jira Service Mgmt.", "Confluence", "VS Code"],
  },
];

export const education = {
  school: "University of Southern Mississippi",
  degrees: ["B.S. Computer Engineering", "B.S. Mathematics"],
  expected: "May 2028",
  coursework: [
    "Calculus I, II & III",
    "Graph Theory",
    "Probability & Statistics",
    "Linear Algebra",
    "Computer Programming (Python, C++, C)",
    "Data Structures & Algorithms",
  ],
};

export const additionalExperience = [
  {
    role: "Library Coordinator",
    org: "Madan Bhandari Memorial Library",
    place: "Nepal",
    period: "2021 — 2024",
    detail:
      "Deployed a custom digital catalogue system, expanded holdings 150% to 10,000+ volumes, and led literacy programmes reaching 500+ residents.",
  },
  {
    role: "Technology Intern",
    org: "Guthi Sansthan",
    place: "Nepal",
    period: "2022 — 2024",
    detail:
      "Revamped the official website, built searchable digital archives, and digitised 2,000+ historical documents to preserve cultural heritage.",
  },
  {
    role: "Volunteer Teacher",
    org: "Ministry of Education",
    place: "Nepal",
    period: "2023 — 2024",
    detail:
      "Taught Python and JavaScript to 120+ students; mentored 3 teams to top-10 finishes at regional coding competitions.",
  },
  {
    role: "IT Support Assistant",
    org: "New Era Engineering Consultancy",
    place: "Nepal",
    period: "2021 — 2022",
    detail:
      "Provided IT support, modernised network infrastructure, and led digitisation of 5 years of corporate records.",
  },
];
