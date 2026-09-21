export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tokket Inc.", role: "Senior Software Engineer", period: "November 2025–Present",
    summary: "Full-stack product engineering across modern web, cloud, and AI-assisted application systems.",
  },
  {
    company: "Aspireweb Pty Ltd.", role: "Software Engineer", period: "September 2021–December 2025",
    summary: "Built and evolved production applications, integrating frontend, backend, data, and cloud concerns.",
  },
  {
    company: "Tokket Inc.", role: "Senior Software Engineer", period: "October 2019–March 2021",
    summary: "Led implementation work across multi-service software products and their supporting infrastructure.",
  },
  {
    company: "Tokket Inc.", role: "Software Engineer, Part-Time", period: "September 2018–October 2019",
    summary: "Contributed to application development alongside a concurrent full-time engineering role.",
  },
  {
    company: "Arielus Software Inc.", role: "Software Engineer", period: "September 2016–September 2019",
    summary: "Delivered software features and integrations for business-focused systems.",
  },
  {
    company: "Police Regional Office 7 — Regional Intelligence Division", role: "Freelance Programmer", period: "July 2013–February 2015",
    summary: "Developed purpose-built software in a professional freelance capacity.",
  },
  {
    company: "Quantum Prosys and Solutions Int'l, Inc.", role: "Junior Programmer", period: "May 2011–September 2012",
    summary: "Began a professional engineering career building and maintaining desktop and enterprise software.",
  },
];
