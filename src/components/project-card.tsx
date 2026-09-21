import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <div className="project-card-content">
          <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          <div className="project-tech">{project.technologies.slice(0, 4).join(" · ")}</div>
        </div>
        <ArrowUpRight className="project-arrow" size={21} />
      </Link>
    </article>
  );
}
