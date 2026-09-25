import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { StackPlate } from "@/components/stack-plate";
import { getProject, projects, statusNotes } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: project.title, description: project.shortDescription } };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return <article>
    <header className="case-hero container">
      <Link href="/projects" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link>
      <div className="case-title-grid">
        <div><p className="eyebrow"><span>N-03</span>{project.category}</p><h1>{project.title}</h1><p className="case-summary">{project.shortDescription}</p></div>
        <dl><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Type</dt><dd>{project.projectType}</dd></div></dl>
      </div>
      <StackPlate project={project} />
    </header>

    <div className="case-body container">
      <aside className="case-aside">
        <h2>Technology</h2>
        <ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {project.publicUrl && <a className="text-link" href={project.publicUrl} rel="noreferrer" target="_blank">Visit project <ExternalLink size={14} aria-hidden="true" /></a>}
        {project.githubUrl && <a className="text-link" href={project.githubUrl} rel="noreferrer" target="_blank">View code <Code2 size={14} aria-hidden="true" /></a>}
      </aside>
      <div className="case-content">
        <section aria-labelledby="overview"><h2 id="overview">Overview</h2><p className="large-copy">{project.overview}</p></section>
        <section aria-labelledby="challenges"><h2 id="challenges">What made it hard</h2><ol className="number-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ol></section>
        <section aria-labelledby="architecture"><h2 id="architecture">Architecture</h2><p>{project.architecture}</p></section>
        <section aria-labelledby="capabilities"><h2 id="capabilities">What it does</h2><ul className="capability-list">{project.features.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section aria-labelledby="tradeoffs"><h2 id="tradeoffs">Trade-offs</h2><ul className="plain-list">{project.tradeoffs.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section aria-labelledby="status">
          <h2 id="status">Where it stands</h2>
          <ul className="plain-list">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="status-note"><p><strong>{project.status}.</strong> {statusNotes[project.status]}</p></div>
        </section>
      </div>
    </div>

    <nav className="next-project container" aria-label="Next project"><span>Next case study</span><Link href={`/projects/${next.slug}`}>{next.title}<ArrowRight size={28} aria-hidden="true" /></Link></nav>
  </article>;
}
