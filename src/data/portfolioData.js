export const PERSONAL_INFO = {
  name: "Umair Ahmad",
  title: "AI-First Systems & Full-Stack Engineer",
  tagline: "Architecting high-concurrency distributed backends, autonomous agentic workflows, and explainable AI pipelines with mathematical precision.",
  status: "🟢 Available for High-Impact Roles & Consulting",
  location: "Lucknow & Delhi NCR, India",
  email: "ua16453@gmail.com",
  workEmail: "umair@corebase.in",
  phone: "+91 79055 67038",
  github: "https://github.com/Umair120115",
  linkedin: "https://www.linkedin.com/in/umair-ahmad-793440241/",
  resumeLink: "https://drive.google.com/file/d/1hKaEpG82Npf6gqAAsYxh9eIJIVpwbNMA/view?usp=sharing",
};

export const LIVE_PLATFORMS = [
  {
    id: "corebase",
    name: "CoreBase",
    role: "Lead Backend & Systems Engineer",
    badge: "Live B2B SaaS OS",
    badgeColor: "#00D2FF",
    tagline: "AI Business Operating System & CRM for Indian CA Firms & MSMEs",
    description: "An enterprise multi-tenant operating system unifying sales pipelines, client onboarding, automated GST invoicing, task audits, and WhatsApp CRM into a connected cloud interface.",
    url: "https://corebase.in",
    displayUrl: "corebase.in",
    tech: ["FastAPI", "SQLAlchemy 2.0 (asyncpg)", "Supabase PostgreSQL", "Upstash Redis", "Razorpay", "Meta WhatsApp API"],
    metrics: [
      { label: "Query Latency", value: "< 50ms" },
      { label: "Endpoints", value: "21+ Manager Routes" },
      { label: "Security", value: "Row-Level Security (RLS)" }
    ],
    highlights: [
      "Built asynchronous microservices enforcing company data isolation and multi-tenant RLS.",
      "Engineered automated Razorpay billing pipeline for dynamic payment links and webhook reconciliation.",
      "Implemented 3-tier hierarchical RBAC and native Meta WhatsApp Cloud API lead tracking."
    ]
  },
  {
    id: "magnovra",
    name: "Magnovra",
    role: "Full-Stack & Cloud Architect",
    badge: "Enterprise Tech Portal",
    badgeColor: "#0284C7",
    tagline: "Global Technology, AI, Cloud & GCC Solutions Platform",
    description: "Production enterprise portal for a global tech firm delivering software engineering, SaaS product development, cloud transformation, and Global Capability Centers (GCC).",
    url: "https://magnovra.com",
    displayUrl: "magnovra.com",
    tech: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel CI/CD"],
    metrics: [
      { label: "Lighthouse Score", value: "100%" },
      { label: "Layout Shift (CLS)", value: "0.00" },
      { label: "Global Reach", value: "US, UK, AU, IN" }
    ],
    highlights: [
      "Engineered responsive micro-motion UI and audited zero-layout-shift breakpoints at 980px.",
      "Comprehensive Technical SEO Architecture with JSON-LD structured schemas across 8 verticals.",
      "Automated serverless lead capture and transactional email notifications via Nodemailer."
    ]
  },
  {
    id: "suthamutha",
    name: "Sutha Mutha",
    role: "Full-Stack Engineer",
    badge: "Experiential Travel Platform",
    badgeColor: "#D97706",
    tagline: "Curated Slow-Travel & Experience Platform for South India",
    description: "A luxury travel experience curation platform featuring immersive heritage walks, culinary trails, and corporate retreats with a serverless backoffice.",
    url: "https://www.suthamutha.com",
    displayUrl: "suthamutha.com",
    tech: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "CMS", value: "Serverless Admin" },
      { label: "Media Pipeline", value: "WebP Compressor" },
      { label: "Conversion", value: "WhatsApp Direct Dock" }
    ],
    highlights: [
      "Engineered public portal with dynamic filterable catalog and interactive photo album lightbox.",
      "Built protected /admin CMS backoffice with Server Actions for managing itineraries without code.",
      "Integrated real-time traveler booking tracking and dynamic XML sitemaps."
    ]
  },
  {
    id: "purvanchal",
    name: "Purvanchal Traders",
    role: "Full-Stack Engineer",
    badge: "Commercial Workstation",
    badgeColor: "#10B981",
    tagline: "Industrial Multi-Unit Desktop Invoice & Quotation Workstation",
    description: "A specialized workstation web application tailored for architectural glass, aluminium, and ACP hardware merchants with complex physical measurement calculations.",
    url: "https://purvanchal-traders-invoice.vercel.app",
    displayUrl: "purvanchal-traders-invoice.vercel.app",
    tech: ["React", "TypeScript", "Vite", "Google Stitch Design System", "react-to-print", "LocalStorage"],
    metrics: [
      { label: "Calculation Models", value: "4 Industrial Units" },
      { label: "Print Engine", value: "Pixel-Perfect A4" },
      { label: "Compliance", value: "Indian GST & Words" }
    ],
    highlights: [
      "Engineered dual-pane split workstation with live data editor synced to a WYSIWYG A4 print sheet.",
      "Multi-unit mathematical engine for Area (Sq.Ft via Ft+In), Weight (Kg), Length (Rft), and Counts.",
      "Indian currency Number-to-Words algorithm (Crores, Lakhs), dynamic GST split, and LocalStorage drafts."
    ]
  }
];

export const OTHER_PROJECTS = [
  {
    id: "sih2026",
    title: "DoLR LARR Act 2013 Decision Support (SIH 2026)",
    category: "Explainable AI & Legal RAG",
    tag: "🏆 National Finalist (SIH26017)",
    tech: ["FastAPI", "XGBoost", "TreeSHAP (XAI)", "PostgreSQL", "pgvector", "PostGIS", "Next.js 16"],
    description: "An AI decision-support platform designed for the Ministry of Rural Development to predict and mitigate statutory land acquisition delays across ₹4.8 Lakh Crore worth of national infrastructure.",
    highlights: [
      "Pre-trained 100-tree XGBoost model predicting delay probability and expected delay duration in days.",
      "Zero black-box ambiguity via exact TreeSHAP attributions across 4 statutory legal driver categories.",
      "Dynamic Legal Semantic RAG with pgvector indexing Supreme Court & High Court land dispute precedents.",
      "Counterfactual 'What-If' policy optimizer with automated advisory memo synchronization to Google Docs."
    ],
    github: "https://github.com/Umair120115/SIH-26017"
  },
  {
    id: "veda-zoom",
    title: "Veda Global – Enterprise Zoom S2S OAuth Platform",
    category: "Enterprise Cloud Systems",
    tag: "Production Architecture",
    tech: ["Next.js 15", "TypeScript", "Zoom Workplace REST API", "Server-to-Server OAuth", "Supabase"],
    description: "Centralized enterprise video infrastructure transition replacing fragile tutor-level OAuth with automated machine-to-machine Zoom Server-to-Server OAuth.",
    highlights: [
      "In-memory token caching with automated 5-minute pre-expiry rotation, dropping meeting creation latency by 75%.",
      "Automated lifecycle APIs (/create, /update, /delete, /status) persisting real Zoom IDs and ZAK host start URLs to Supabase.",
      "Eliminated silent dummy link fallbacks with strict fail-fast telemetry and live cloud health diagnostics."
    ]
  },
  {
    id: "adora",
    title: "Adora Mobile Ecosystem",
    category: "Mobile & Backend",
    tag: "Cross-Platform Social",
    tech: ["React Native", "Expo", "Django", "AWS S3", "Firebase FCM", "PostgreSQL"],
    description: "Full-stack mobile application featuring real-time social feeds, media sharing, and cloud push notifications.",
    highlights: [
      "Google OAuth 2.0 integration for frictionless onboarding.",
      "AWS S3 for scalable media asset pipelines and Firebase Cloud Messaging for push delivery.",
      "Asynchronous REST API architecture handling complex user graphs and relational feeds."
    ],
    github: "https://github.com/umair120115/Adora"
  }
];

export const AI_FIRST_PARADIGM = [
  {
    title: "Autonomous Agentic Workflows",
    description: "Leveraging structured agentic collaboration, prompt-driven tool execution, and automated self-correction loops to condense multi-week production lifecycles into days.",
    metric: "10x",
    metricLabel: "Delivery Velocity"
  },
  {
    title: "Sub-50ms Low Latency",
    description: "Designing non-blocking async microservices with connection pooling, Redis in-memory token rotation, and optimized database indexing.",
    metric: "<50ms",
    metricLabel: "Query Latency"
  },
  {
    title: "Zero-Defect Determinism",
    description: "Eliminating fragile mock fallbacks and unhandled exceptions through strict Pydantic v2 runtime validation, TypeScript compile boundaries, and fail-fast logging.",
    metric: "100%",
    metricLabel: "Type & Runtime Safety"
  },
  {
    title: "Explainable AI (XAI)",
    description: "Building legally defensible, transparent ML systems using TreeSHAP additive feature attributions and pgvector semantic retrieval instead of opaque black-box models.",
    metric: "0%",
    metricLabel: "Black-Box Ambiguity"
  }
];

export const TECHNICAL_SKILLS = {
  backend: [
    "FastAPI", "Django", "Django REST Framework (DRF)", "SQLAlchemy 2.0 (asyncpg)", 
    "Supabase PostgreSQL", "Upstash Redis", "Celery", "WebSockets", "AsyncIO", "Pydantic v2"
  ],
  aiml: [
    "Agentic AI Workflows", "RAG Pipelines", "pgvector (HNSW)", "Pinecone", "ChromaDB", 
    "TreeSHAP (Explainable AI)", "XGBoost", "Google Gemini API", "LangChain", "Sentence-Transformers"
  ],
  frontend: [
    "Next.js 16/15 (App Router)", "React 19/18", "React Native (Expo)", "TypeScript", 
    "Tailwind CSS v4", "Framer Motion", "Vite", "Redux Toolkit", "Zustand", "HTML5/CSS3"
  ],
  cloudDevops: [
    "AWS (S3, EC2, RDS)", "Google Cloud Run", "Vercel CI/CD", "Docker & Compose", 
    "Supabase DB", "Linux / Bash", "Nginx", "Git / GitHub"
  ],
  integrations: [
    "Zoom Workplace API (S2S OAuth)", "Meta WhatsApp Cloud API", "Razorpay Payment Gateway", 
    "PhonePe PG", "Google OAuth 2.0", "Firebase Cloud Messaging (FCM)", "Nodemailer"
  ]
};

export const EXPERIENCE_TIMELINE = [
  {
    role: "Lead Backend & Systems Engineer",
    company: "CoreBase",
    url: "https://corebase.in",
    period: "Jan 2025 – Present",
    location: "Lucknow, India",
    type: "Full-Time",
    bullets: [
      "Architected the multi-tenant core backend using FastAPI and SQLAlchemy 2.0 (asyncpg) with Supabase PostgreSQL and Row-Level Security (RLS).",
      "Engineered automated Razorpay billing pipeline for dynamic payment links, GST invoice generation, and idempotent webhook reconciliation.",
      "Integrated Meta Graph API (WhatsApp) for automated lead capture, CRM communication tracking, and client follow-up alerts.",
      "Implemented 3-tier hierarchical RBAC across 21+ manager endpoints and secured auth with JWTs and an Upstash Redis token blocklist."
    ]
  },
  {
    role: "Python Developer",
    company: "DealMart",
    period: "Feb 2025 – Present",
    location: "Lucknow, India (Remote/Hybrid)",
    type: "Contract / Hybrid",
    bullets: [
      "Engineered high-throughput multi-vendor e-commerce backend APIs using Django and PostgreSQL, optimizing queries for sub-100ms response times.",
      "Integrated the Meta Developer Platform to build a WhatsApp automation bot, cutting manual customer support queries by 40%.",
      "Implemented secure authentication flows using Google OAuth 2.0 with Redis session handling and FCM push notifications.",
      "Integrated PhonePe payment gateways with strict webhook verification, ensuring 100% PCI-compliant transaction reconciliations."
    ]
  },
  {
    role: "AI Engineer",
    company: "Duoples",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    type: "Contract",
    bullets: [
      "Architected a multi-tenant Retrieval-Augmented Generation (RAG) pipeline using Pinecone and ChromaDB with parent-document chunking.",
      "Developed low-latency asynchronous REST APIs using FastAPI to stream tokenized LLM responses to web and mobile clients."
    ]
  }
];

export const EDUCATION_TIMELINE = [
  {
    institution: "Integral University",
    degree: "Master of Technology (M.Tech) in Computer Science & Engineering",
    period: "2025 – 2027 (Pursuing)",
    location: "Lucknow, Uttar Pradesh",
    focus: "Specializing in Distributed Systems, Advanced Algorithms, and Cognitive AI Architectures."
  },
  {
    institution: "Ajay Kumar Garg Engineering College",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    period: "Nov 2021 – May 2025",
    location: "Ghaziabad, Uttar Pradesh",
    focus: "Data Structures, Database Management Systems (DBMS), Operating Systems, Computer Networks, Soft Computing."
  }
];

export const HONORS = [
  {
    title: "National Finalist — Smart India Hackathon (SIH 2026)",
    org: "Ministry of Rural Development / DoLR (SIH26017)",
    desc: "Developed the official AI decision-support and Explainable AI legal platform predicting statutory land acquisition delays with XGBoost and pgvector RAG."
  },
  {
    title: "Regional Finalist — Google GenAI Hackathon",
    org: "Google Developer Groups",
    desc: "Rapidly prototyped high-concurrency generative AI applications with Google Gemini under a strict 6-hour on-spot time limit."
  },
  {
    title: "Technical Certification: Data Science with Python",
    org: "SpringBoard",
    desc: "Advanced predictive data analytics, statistical modeling, and machine learning pipelines."
  }
];
