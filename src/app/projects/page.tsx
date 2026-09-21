import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Selected full-stack, cloud, mobile, and applied AI engineering work.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <><PageHeader eyebrow="Projects" title="Selected systems, products, and experiments." description="A mix of professional platforms and personal work—each presented with its real status, constraints, and engineering decisions." /><section className="section container"><div className="project-grid all-projects">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div></section></>;
}
