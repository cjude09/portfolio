export const profile = {
  name: "Cris Jude A. Gramatica",
  shortName: "Cris Jude",
  title: "Full-Stack Software Engineer",
  location: "Badian, Cebu, Philippines",
  email: "cjvirus.exe@gmail.com",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "/",
  experienceStart: 2011,
  summary:
    "Full-Stack Software Engineer with 13+ years of experience building web, mobile, cloud, and AI-powered applications.",
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
