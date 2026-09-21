export type ProjectStatus = "Ongoing" | "Private case study" | "Planned concept" | "Experimental";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  category: string;
  projectType: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  challenges: string[];
  architecture: string;
  features: string[];
  tradeoffs: string[];
  outcomes: string[];
  coverImage: string;
  galleryImages: string[];
  publicUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "edyfai", slug: "edyfai", title: "EDYFAI",
    shortDescription: "A multi-service platform for AI-assisted knowledge workflows and connected communities.",
    overview: "EDYFAI brings structured content, discovery, profiles, groups, and AI-assisted workflows into one evolving product. The engineering work spans a modern web client, backend APIs, multiple data stores, authentication, cloud infrastructure, and a companion mobile application.",
    category: "AI-powered web application", projectType: "Full-stack platform", role: "Full-stack engineering and architecture", status: "Private case study",
    technologies: ["Next.js", "React", "TypeScript", "Express", "Firebase", "Firestore", "PostgreSQL", "Prisma", "Google Cloud", "Expo", "React Native", "LLM integrations"],
    challenges: ["Coordinating product behavior across web, API, data, and mobile layers", "Evolving structured and nested content without coupling every surface", "Balancing real-time product needs with durable relational data"],
    architecture: "A multi-service architecture separates the user-facing applications from backend APIs and data concerns. Firebase services support selected identity and real-time workflows, while PostgreSQL and Prisma provide relational modeling where stronger structure is required.",
    features: ["AI-assisted knowledge workflows", "Structured and nested content", "Profiles, groups, reactions, and notifications", "Content discovery", "Cloud deployment", "Expo and React Native mobile development"],
    tradeoffs: ["Use fit-for-purpose data stores instead of forcing every workload into one model", "Keep AI integrations behind application boundaries so providers can evolve", "Treat mobile as a first-class client while sharing domain conventions"],
    outcomes: ["An extensible foundation spanning web, mobile, API, data, and cloud layers", "A platform architecture able to evolve without presenting unverified deployment claims"],
    coverImage: "/images/projects/edyfai.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: true,
  },
  {
    id: "learning-platform", slug: "ai-powered-learning-platform", title: "AI-Powered Learning Platform",
    shortDescription: "Enterprise learning infrastructure combining structured resources, assessment workflows, and retrieval-augmented AI.",
    overview: "A sanitized case study of employer-related work on an enterprise learning platform. The system joins identity, permissions, learning content, document processing, semantic retrieval, exams, and AI-assisted authoring while keeping sensitive implementation details private.",
    category: "Enterprise learning", projectType: "Applied AI platform", role: "Full-stack engineering and technical architecture", status: "Private case study",
    technologies: ["Next.js", "TypeScript", "React", "Express", "PostgreSQL", "pgvector", "Firestore", "Firebase", "Cloud Run", "Cloud SQL", "Prisma", "Gemini", "Claude", "OpenRouter"],
    challenges: ["Enforcing roles and permissions consistently across product surfaces", "Normalizing varied document formats for ingestion and retrieval", "Keeping assessment and grading workflows trustworthy as AI assistance is introduced"],
    architecture: "The platform uses server-authoritative application services, relational data for durable learning and assessment records, vector search for grounded retrieval, and cloud services for deployment. AI providers are integrated behind workflows that preserve access boundaries and review points.",
    features: ["Authentication, SSO, roles, and permissions", "Learning resources and collections", "PDF, DOCX, PPTX, CSV, TXT, Markdown, and transcript ingestion", "RAG, vector embeddings, and semantic search", "Exam management and taking workflows", "AI-assisted question generation workflows"],
    tradeoffs: ["Prefer server-side authorization over UI-only restrictions", "Separate deterministic assessment rules from generative assistance", "Sanitize the public case study rather than expose private repositories, data, or internal URLs"],
    outcomes: ["A cohesive architecture for learning content, retrieval, and assessment", "Ongoing work is described conservatively; partial capabilities are not presented as completed"],
    coverImage: "/images/projects/learning.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: true,
  },
  {
    id: "activebubbl", slug: "activebubbl", title: "ActiveBubbl",
    shortDescription: "A custom WordPress product for referral, appointment, and relationship workflows.",
    overview: "ActiveBubbl demonstrates how WordPress can serve as an application foundation rather than a conventional publishing site. Custom domain workflows, data structures, authentication behavior, and automated communications form the center of the product.",
    category: "Custom WordPress platform", projectType: "Business workflow product", role: "Full-stack WordPress engineering", status: "Private case study",
    technologies: ["WordPress", "PHP 8.2", "Tailwind CSS", "Alpine.js", "Advanced Custom Fields", "Custom database tables"],
    challenges: ["Modeling referral history and status transitions beyond standard post content", "Keeping conditional forms understandable across a long-running lifecycle", "Scheduling business-day reminders without duplicating communication"],
    architecture: "A custom theme provides the presentation layer while purpose-built PHP services, ACF-managed content, and custom tables handle product-specific data. Authentication redirects and notification jobs are aligned with referral state.",
    features: ["Referral lifecycle and history", "Appointment tracking", "User connections", "Status-driven forms", "Automated email notifications", "Business-day reminders and follow-ups"],
    tradeoffs: ["Extend WordPress deliberately where its administration and ecosystem add value", "Use custom tables for workflow data that does not fit the post model", "Keep the public description high level without claiming commercial results"],
    outcomes: ["A custom application experience built on a familiar operational platform", "Complex workflow behavior organized around clear domain states"],
    coverImage: "/images/projects/activebubbl.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: true,
  },
  {
    id: "card-summoner", slug: "card-summoner", title: "Card Summoner",
    shortDescription: "An ongoing anime-inspired collectible card game built mobile-first.",
    overview: "Card Summoner is an ongoing personal product exploring mobile game engineering, reusable asset pipelines, card and creature systems, and AI-assisted creative production. Implemented foundations and planned mechanics are kept explicitly separate.",
    category: "Personal project", projectType: "Mobile game", role: "Creator and full-stack engineer", status: "Ongoing",
    technologies: ["React Native", "Expo", "TypeScript", "pnpm", "Turborepo", "Express", "Prisma", "PostgreSQL", "Firebase"],
    challenges: ["Designing reusable creature and card asset systems", "Keeping a mobile-first UI expressive without sacrificing clarity", "Building progression and inventory foundations that can support future game modes"],
    architecture: "A TypeScript monorepo organizes the Expo client, shared packages, and backend services. Data models are designed around collectible entities, ownership, progression, and reusable presentation metadata.",
    features: ["Creature and card asset systems", "Mobile-first UI and design system", "Creature summoning and collection foundations", "Inventory and deck concepts", "AI-assisted artwork workflows", "Planned PvE and PvP battle systems"],
    tradeoffs: ["Build reusable data and asset foundations before expanding battle modes", "Use AI-assisted art as a directed production workflow with human review", "Label concept-stage mechanics rather than presenting them as shipped"],
    outcomes: ["An active engineering playground for product, game-system, and mobile design work", "A scalable content pipeline for an expanding creature library"],
    coverImage: "/images/projects/card-summoner.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: true,
  },
  {
    id: "business-connection", slug: "business-connection-app", title: "Business Connection App",
    shortDescription: "A planned platform for small-business discovery, partnerships, and focused marketing workflows.",
    overview: "A concept for turning fragmented small-business marketing and partnership activity into one focused product. Discovery, outreach, and collaboration workflows will be validated before implementation scope is finalized.",
    category: "Personal project", projectType: "Business collaboration platform", role: "Product concept and architecture", status: "Planned concept",
    technologies: ["Architecture in discovery", "Web application", "Recommendation workflows"],
    challenges: ["Making useful recommendations without creating noisy lead generation", "Designing trust and consent into introductions", "Keeping automation understandable for small teams"],
    architecture: "The architecture is intentionally undecided while core workflows and data boundaries are being defined.",
    features: ["Planned business profiles and categories", "Planned discovery and recommendations", "Potential partnership requests and activity history", "Potential campaign and outreach tracking"],
    tradeoffs: ["Validate focused workflows before selecting infrastructure", "Avoid presenting potential capabilities as implemented"],
    outcomes: ["Concept-stage product framing and engineering questions"],
    coverImage: "/images/projects/business.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: false,
  },
  {
    id: "ai-chat", slug: "ai-chat-integration", title: "AI Chat Integration Project",
    shortDescription: "A planned reusable, grounded AI chat layer for websites and applications.",
    overview: "A reusable integration concept for answering questions from approved knowledge sources. The work centers on grounding, privacy, tenant isolation, observability, and a deliberately simple integration surface.",
    category: "Personal project", projectType: "Reusable AI integration", role: "Product concept and architecture", status: "Planned concept",
    technologies: ["RAG", "Vector retrieval", "Embeddable web UI", "API design"],
    challenges: ["Grounding answers in approved sources", "Maintaining tenant and access isolation", "Providing useful escalation when confidence is insufficient"],
    architecture: "The proposed system separates the embeddable client, conversation API, ingestion pipeline, retrieval layer, and tenant-aware access controls.",
    features: ["Planned embeddable chat widget", "Planned configurable knowledge sources", "Planned source-aware RAG responses", "Potential history, escalation, and integration documentation"],
    tradeoffs: ["Prioritize safe grounding and isolation over broad autonomy", "Keep the provider layer replaceable", "Do not describe the concept as a finished plugin"],
    outcomes: ["A scoped architecture direction awaiting implementation validation"],
    coverImage: "/images/projects/ai-chat.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: false,
  },
  {
    id: "ai-maintenance", slug: "ai-maintenance-auto-fix", title: "AI Maintenance and Auto-Fix System",
    shortDescription: "A concept for controlled, auditable AI assistance in application maintenance.",
    overview: "A planned operations system where issues, logs, and diagnostics inform repair proposals. Risky actions remain behind explicit approval, tests, deployment checks, backups, rollback, and audit history.",
    category: "Personal project", projectType: "DevOps and AI automation", role: "Product concept and safety architecture", status: "Planned concept",
    technologies: ["VPS monitoring", "Diagnostics", "LLM-assisted analysis", "Deployment automation"],
    challenges: ["Giving models enough context without excessive access", "Designing approvals and rollback for production changes", "Distinguishing diagnosis confidence from permission to act"],
    architecture: "The concept separates monitoring and evidence collection from diagnosis, repair proposal, human approval, execution, validation, and rollback. Every transition should remain attributable and auditable.",
    features: ["Planned application inventory and health monitoring", "Planned issue triage and log analysis", "Human-approved repair proposals", "Planned tests, rollback, notifications, and audit logs"],
    tradeoffs: ["Require human approval before risky changes", "Treat backups and rollback as first-class workflow stages", "Never equate model confidence with operational authority"],
    outcomes: ["A safety-first concept, not a claim of autonomous production repair"],
    coverImage: "/images/projects/maintenance.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: false,
  },
  {
    id: "video-studio", slug: "ai-video-studio", title: "AI Video Studio",
    shortDescription: "An experimental Windows-native workspace for continuity-aware, storyboard-driven video production.",
    overview: "AI Video Studio organizes shots, reference images, prompts, continuity notes, takes, narration, review decisions, and assembly. The current direction targets MiniMax H3 workflows; generation and playback are not represented as validated.",
    category: "Personal project", projectType: "Creative AI workflow tooling", role: "Creator and systems engineer", status: "Experimental",
    technologies: ["Windows-native tooling", "MiniMax H3 workflow", "Storyboard data", "Local orchestration", "FFmpeg"],
    challenges: ["Maintaining visual continuity across independently generated shots", "Reconciling uncertain generation jobs without duplicating work", "Making creative decisions traceable across takes"],
    architecture: "A local application coordinates durable storyboard records with external generation workflow state. Prompt IDs, recovery states, and review decisions are retained so uncertain submissions can be reconciled safely before retrying.",
    features: ["Storyboard and shot planning", "Image references and continuity notes", "Prompt and narration tracking", "Versioned takes and review states", "Local orchestration and final assembly planning"],
    tradeoffs: ["Target MiniMax H3 where configured rather than silently substituting models", "Preserve uncertain job state for reconciliation", "Do not claim generation, playback, or model validation without evidence"],
    outcomes: ["An ongoing reliability-focused implementation of a creative production workflow"],
    coverImage: "/images/projects/video-studio.svg", galleryImages: [], publicUrl: null, githubUrl: null, featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
