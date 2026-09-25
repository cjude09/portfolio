import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, headingLevel: Heading = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  return (
    <li className="project-card">
      <Link href={`/projects/${project.slug}`}>
        <div>
          <p className="project-meta"><span>{project.category}</span><span>{project.status}</span></p>
          <Heading>{project.title}</Heading>
          <p>{project.shortDescription}</p>
          <ul className="project-tech" aria-label="Technologies">{project.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul>
        </div>
        <ArrowUpRight className="project-arrow" size={22} aria-hidden="true" />
      </Link>
    </li>
  );
}
