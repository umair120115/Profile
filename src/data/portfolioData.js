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
  resumeLink: "https://drive.google.com/file/d/1UiIoIddNIgcMUi38XfXhXXpdV_0LgdhJ/view?usp=sharing",
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

export const ALL_PROJECTS = [
  {
    id: "agent-data-simulator",
    title: "Autonomous Agentic Data System",
    category: "AI & Autonomous Agents",
    badge: "Agentic AI R&D",
    tech: ["LangGraph", "LangChain", "Gemini LLM", "Python", "JSON/CSV Writers"],
    description: "An end-to-end agentic AI system that autonomously plans, executes, and validates synthetic data generation tasks using recursive feedback loops.",
    highlights: [
      "Autonomous reasoning & planning pipeline: User Intent -> Execution Plan -> Tool Selection.",
      "Self-correction and validation loop (Generator -> Critic -> Self-Retry) to guarantee schema compliance.",
      "Multi-format output generation across structured JSON, tabular CSV, PDF, and text streams.",
      "Dynamic schema inference from arbitrary input files with complete LLM reasoning logs."
    ],
    github: "https://github.com/umair120115/Agent---Data-Simulator",
    videoEmbed: "https://www.youtube.com/embed/ol_GwpXmkIA",
    youtubeUrl: "https://www.youtube.com/watch?v=ol_GwpXmkIA"
  },
  {
    id: "adora-mobile",
    title: "Adora Mobile Ecosystem",
    category: "Mobile & Full-Stack",
    badge: "Cross-Platform App",
    tech: ["React Native", "Expo", "Django", "AWS S3", "Firebase FCM", "PostgreSQL"],
    description: "Full-stack mobile application featuring real-time social feeds, dynamic media uploads, push notifications, and asynchronous social graphing.",
    highlights: [
      "Real-time social feeds & interactions with optimized cached pagination.",
      "Google OAuth 2.0 integration with biometric and JWT session security.",
      "AWS S3 for scalable media asset pipelines and Firebase Cloud Messaging (FCM) for instant push alerts.",
      "Asynchronous REST API architecture handling complex user graphs and relational feeds."
    ],
    github: "https://github.com/umair120115/Adora",
    videoEmbed: "https://www.youtube.com/embed/KTwa1HyzDRg",
    youtubeUrl: "https://www.youtube.com/watch?v=KTwa1HyzDRg"
  },
  {
    id: "ayurveda-genai",
    title: "Ayurveda GenAI Prototype",
    category: "Generative AI & Healthcare",
    badge: "🏆 Google GenAI Hackathon Finalist",
    tech: ["Gemini 1.5", "Python", "FastAPI", "ReactJS", "Vector Embeddings"],
    description: "A Generative AI solution for classical Ayurvedic knowledge retrieval, synthesizing millennia-old medical treatises into structured clinical insights.",
    highlights: [
      "Semantic indexing of classical Ayurvedic texts for domain-adapted symptom-to-herb mappings.",
      "High-concurrency prototyping developed under a 6-hour hackathon constraint.",
      "Evaluated on zero-hallucination factual grounding for medical formulations."
    ],
    github: "https://github.com/umair120115/Ayurveda",
    videoEmbed: "https://www.youtube.com/embed/OwgrC97DOrs",
    youtubeUrl: "https://youtu.be/OwgrC97DOrs"
  },
  {
    id: "sih2026",
    title: "DoLR LARR Act 2013 Decision Support (SIH 2026)",
    category: "Explainable AI & Legal RAG",
    badge: "🏆 National Finalist (SIH26017)",
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
    badge: "Production Architecture",
    tech: ["Next.js 15", "TypeScript", "Zoom Workplace REST API", "Server-to-Server OAuth", "Supabase"],
    description: "Centralized enterprise video infrastructure transition replacing fragile tutor-level OAuth with automated machine-to-machine Zoom Server-to-Server OAuth.",
    highlights: [
      "In-memory token caching with automated 5-minute pre-expiry rotation, dropping meeting creation latency by 75%.",
      "Automated lifecycle APIs (/create, /update, /delete, /status) persisting real Zoom IDs and ZAK host start URLs to Supabase.",
      "Eliminated silent dummy link fallbacks with strict fail-fast telemetry and live cloud health diagnostics."
    ]
  },
  {
    id: "online-voting",
    title: "Online Voting System with AI Guide",
    category: "Web App & Security",
    badge: "E-Governance & LLM",
    tech: ["Django", "ReactJS", "LangChain", "Llama 3", "Groq Cloud", "PostgreSQL"],
    description: "A secure, interactive election platform with an integrated AI chatbot for civic voter education and real-time voting results.",
    highlights: [
      "Secure RESTful API backend with Django REST Framework, JWTs, and role-based access control.",
      "Civic AI Chatbot powered by Llama 3 on Groq Cloud providing instant guidance on election guidelines.",
      "Real-time voting telemetry visualization and audit trail logging."
    ],
    github: "https://github.com/umair120115/OnlineVoting"
  },
  {
    id: "reader-edtech",
    title: "Smart PDF Viewer & AI Note Taker",
    category: "EdTech & AI Reader",
    badge: "RAG Document Workspace",
    tech: ["ReactJS", "Django DRF", "OpenAI API", "PDF.js", "PostgreSQL"],
    description: "A smart document reader allowing users to upload PDFs, take time-stamped page-linked notes, and query document content with conversational AI.",
    highlights: [
      "Context-aware AI document querying with vector similarity retrieval.",
      "Page-accurate timestamped bookmarking and note-taking tied directly to PDF canvas coordinates.",
      "Cloud document storage and responsive document workstation interface."
    ],
    github: "https://github.com/umair120115/Reader"
  },
  {
    id: "deen-social",
    title: "Deen Real-Time Social Platform",
    category: "Real-time Distributed Systems",
    badge: "WebSockets & ASGI",
    tech: ["Django Channels", "Redis", "ReactJS", "WebSockets", "PostgreSQL"],
    description: "A high-performance real-time community social network featuring asynchronous direct messaging, live feeds, and connection graphs.",
    highlights: [
      "Instant real-time messaging architecture using Django Channels ASGI and Redis channel layers.",
      "Dynamic activity feeds with optimistic UI updates for likes, comments, and notifications.",
      "Bi-directional user relationship management and scalable WebSocket session handling."
    ],
    github: "https://github.com/umair120115/Deen"
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
    id: "corebase",
    role: "Lead Backend & Systems Engineer",
    company: "CoreBase",
    url: "https://corebase.in",
    period: "Jan 2025 – Present",
    location: "Lucknow, India",
    type: "Full-Time Leadership",
    summary: "Architecting the core cloud infrastructure and multi-tenant operating system powering Indian Chartered Accountant (CA) firms and MSMEs.",
    contributions: [
      {
        title: "Multi-Tenant Data Architecture & RLS",
        desc: "Engineered asynchronous FastAPI microservices with SQLAlchemy 2.0 (asyncpg) on Supabase PostgreSQL. Implemented strict Row-Level Security (RLS) policies guaranteeing cryptographic company data isolation across organizations."
      },
      {
        title: "Automated Razorpay Billing & Reconciliation",
        desc: "Designed the automated billing and subscription engine generating dynamic payment links, recurring invoices, and idempotent webhook listeners with automatic state reconciliation."
      },
      {
        title: "Meta WhatsApp Cloud API CRM Integration",
        desc: "Built bi-directional lead tracking and automated client notifications via Meta Graph API, directly integrating customer communications into the live CRM workspace."
      },
      {
        title: "Hierarchical RBAC & Security Telemetry",
        desc: "Architected 3-tier Role-Based Access Control spanning 21+ manager endpoints, protected by short-lived JWTs and an Upstash Redis token blocklist with P99 query latency under 50ms."
      }
    ]
  },
  {
    id: "dealmart",
    role: "Python Developer",
    company: "DealMart",
    period: "Feb 2025 – Present",
    location: "Lucknow, India (Hybrid)",
    type: "Contract / Engineering",
    summary: "Engineering high-throughput e-commerce APIs, customer engagement automation, and secure payment processing pipelines.",
    contributions: [
      {
        title: "High-Throughput Multi-Vendor APIs",
        desc: "Engineered scalable REST APIs using Django and PostgreSQL, optimizing complex database joins and caching layers to maintain sub-100ms response times under peak load."
      },
      {
        title: "WhatsApp Automated Support Bot",
        desc: "Integrated the Meta Developer Platform to engineer a 24/7 WhatsApp automation bot, deflecting manual customer inquiries by 40%."
      },
      {
        title: "Payment Gateway Reconciliation & Auth",
        desc: "Integrated PhonePe payment webhooks with cryptographic HMAC signature verification and Google OAuth 2.0 authentication backed by Redis session storage and FCM push notifications."
      }
    ]
  },
  {
    id: "duoples",
    role: "AI Engineer",
    company: "Duoples",
    period: "Dec 2024 – Feb 2025",
    location: "Remote",
    type: "Contract / AI R&D",
    summary: "Designed and optimized generative AI pipelines and conversational retrieval engines for production applications.",
    contributions: [
      {
        title: "Multi-Tenant RAG Pipeline Architecture",
        desc: "Architected multi-tenant Retrieval-Augmented Generation (RAG) pipelines utilizing Pinecone and ChromaDB with parent-document chunking and reciprocal rank fusion."
      },
      {
        title: "Low-Latency Token Streaming",
        desc: "Developed asynchronous REST endpoints in FastAPI to stream tokenized LLM completions to web and mobile frontends with minimal initial token latency."
      }
    ]
  },
  {
    id: "veda",
    role: "Enterprise Cloud Systems Architect",
    company: "Veda Global",
    period: "Dec 2024 – Jan 2025",
    location: "Remote",
    type: "Architecture Consulting",
    summary: "Re-engineered fragile tutor-level Zoom authentication into an automated, enterprise machine-to-machine video infrastructure.",
    contributions: [
      {
        title: "Server-to-Server (S2S) OAuth Migration",
        desc: "Replaced vulnerable user OAuth tokens with automated machine-to-machine Zoom S2S OAuth credentials, removing manual tutor re-authorization entirely."
      },
      {
        title: "In-Memory Token Pre-Rotation",
        desc: "Implemented in-memory token rotation triggering 5 minutes prior to expiry, cutting classroom meeting creation latency by 75% and eliminating race conditions."
      },
      {
        title: "Fail-Fast Telemetry & Cloud Diagnostics",
        desc: "Eliminated silent dummy link fallbacks with strict error handling, real Zoom IDs, and ZAK host start URL persistence to Supabase with real-time health telemetry."
      }
    ]
  }
];

export const EDUCATION_TIMELINE = [
  {
    id: "integral",
    type: "Post-Graduation",
    institution: "Integral University",
    degree: "Master of Technology (M.Tech) in Computer Science & Engineering",
    period: "2025 – 2027 (Pursuing)",
    location: "Lucknow, Uttar Pradesh",
    grade: "Pursuing",
    focus: "Specializing in Distributed Systems, Advanced Algorithms, Cognitive AI Architectures, and Autonomous Agents.",
    highlights: [
      "Research Focus: Cognitive Architectures & Multi-Agent Consensus",
      "Coursework: Soft Computing, Advanced Neural Networks, Distributed Operating Systems"
    ]
  },
  {
    id: "akgec",
    type: "Under-Graduation",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    period: "Nov 2021 – May 2025",
    location: "Ghaziabad, Uttar Pradesh",
    grade: "7.01 SGPA",
    focus: "Built foundational expertise in Data Structures, Relational Database Management Systems (DBMS), Operating Systems, Computer Networks, and System Design.",
    highlights: [
      "Capstone: Ayurveda GenAI Prototype — Regional Finalist at Google GenAI Hackathon (Aug 2024).",
      "Active participant in national hackathons and open-source software engineering."
    ]
  },
  {
    id: "montfort",
    type: "Senior Secondary (Class XII)",
    institution: "Montfort Inter College",
    degree: "Class XII (Physics, Chemistry, Mathematics — CBSE)",
    period: "Graduated 2020",
    location: "Lucknow, Uttar Pradesh",
    grade: "93.4%",
    focus: "Distinction in Mathematics and Physics, establishing rigorous analytical and problem-solving foundations."
  },
  {
    id: "stxaviers",
    type: "Secondary School (Class X)",
    institution: "St. Xavier's High School",
    degree: "Class X (CBSE)",
    period: "Graduated 2018",
    location: "Azamgarh, Uttar Pradesh",
    grade: "85.8%",
    focus: "Comprehensive foundation in General Sciences, Mathematics, and Computer Applications."
  }
];

export const HONORS = [
  {
    title: "National Finalist — Smart India Hackathon (SIH 2026)",
    org: "Ministry of Rural Development / DoLR (SIH26017)",
    desc: "Engineered an AI decision-support platform predicting land acquisition delays across ₹4.8 Lakh Crore of national infrastructure using XGBoost, TreeSHAP, and pgvector RAG."
  },
  {
    title: "Regional Finalist — Google GenAI Hackathon",
    org: "Google Developer Groups (Aug 2024)",
    desc: "Rapidly engineered and pitched an AI-based Ayurveda knowledge synthesis engine with Google Gemini under a strict 6-hour on-spot prototyping sprint."
  }
];

export const CERTIFICATIONS = [
  { title: "Data Science with Python", issuer: "SpringBoard", date: "Verified" },
  { title: "Full Stack Development", issuer: "Coursera", date: "Verified" },
  { title: "Machine Learning Specialization", issuer: "Coursera", date: "Verified" },
  { title: "React.js Advanced Architecture", issuer: "Codecademy", date: "Verified" },
  { title: "Python for Data Science", issuer: "Udemy", date: "Verified" }
];
