const experienceStart = 2011;
export const yearsOfExperience = new Date().getFullYear() - experienceStart;

export const profile = {
  name: "Cris Jude A. Gramatica",
  shortName: "Cris Jude",
  title: "Full-Stack Software Engineer",
  location: "Badian, Cebu, Philippines",
  email: "cjvirus.exe@gmail.com",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "/",
  experienceStart,
  summary: `Full-stack software engineer with ${yearsOfExperience} years of experience building web, mobile, cloud, and AI-powered applications.`,
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of San Jose-Recoletos",
    location: "Cebu City, Philippines",
    period: "2006–2010",
  },
  availability: process.env.NEXT_PUBLIC_AVAILABILITY_STATUS || null,
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || null,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || null,
  },
} as const;

export const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Alpine.js"] },
  { label: "Backend", items: ["Node.js", "Express", ".NET", "PHP", "REST APIs", "Prisma"] },
  { label: "Databases", items: ["PostgreSQL", "pgvector", "Firestore", "Custom relational schemas"] },
  { label: "Cloud & DevOps", items: ["Google Cloud", "Azure", "Cloud Run", "Cloud SQL", "Firebase", "CI/CD"] },
  { label: "AI & LLM", items: ["RAG", "Semantic search", "Vector embeddings", "Document ingestion", "LLM integrations"] },
  { label: "Mobile", items: ["React Native", "Expo", "Cross-platform architecture"] },
  { label: "Architecture", items: ["System design", "Authentication", "Data modeling", "Production operations"] },
] as const;

/** The five layers of the practice. Shared by the system map (N-02) and the editorial pages. */
export const practiceAreas = [
  { name: "Interface", detail: "React, Next.js, TypeScript, Tailwind CSS, and mobile-first product systems." },
  { name: "Services", detail: "Node.js, Express, .NET, PHP, REST APIs, authentication, and integrations." },
  { name: "Data", detail: "PostgreSQL, pgvector, Firestore, Prisma, and durable domain modeling." },
  { name: "Cloud", detail: "Google Cloud, Azure, Firebase, Cloud Run, CI/CD, and production operations." },
  { name: "Intelligence", detail: "RAG, semantic search, document ingestion, embeddings, and LLM workflows." },
] as const;
