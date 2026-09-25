import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Selected full-stack, cloud, mobile, and applied AI engineering work.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <>
    <PageHeader code="N-03" label="Projects" title="Selected systems, products, and experiments." description="Professional platforms and personal work, each shown with its real status, constraints, and engineering decisions." />
    <section className="section container" aria-label="All projects"><ul className="project-grid all-projects">{projects.map((project) => <ProjectCard project={project} headingLevel="h2" key={project.id} />)}</ul></section>
  </>;
}
