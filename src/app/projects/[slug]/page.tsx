import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Code2, ExternalLink } from "lucide-react";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: project.title, description: project.shortDescription, images: [{ url: project.coverImage }] } };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.id === project.id);
  const next = projects[(index + 1) % projects.length];
  return <article>
    <header className="case-hero container">
      <Link href="/projects" className="back-link"><ArrowLeft size={15} /> All projects</Link>
      <div className="case-title-grid"><div><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p>{project.shortDescription}</p></div><dl><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Type</dt><dd>{project.projectType}</dd></div></dl></div>
      <ProjectVisual src={project.coverImage} alt={`Abstract cover artwork for ${project.title}`} priority />
    </header>
    <div className="case-body container">
      <aside className="case-aside"><p className="eyebrow">Technology</p><ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>{project.publicUrl && <a className="text-link" href={project.publicUrl} rel="noreferrer" target="_blank">Visit project <ExternalLink size={14} /></a>}{project.githubUrl && <a className="text-link" href={project.githubUrl} rel="noreferrer" target="_blank">View code <Code2 size={14} /></a>}</aside>
      <div className="case-content">
        <section><p className="eyebrow">Overview</p><h2>A practical look at the work.</h2><p className="large-copy">{project.overview}</p></section>
        <section><p className="eyebrow">Engineering challenge</p><h2>What made it interesting.</h2><ul className="number-list">{project.challenges.map((item, idx) => <li key={item}><span>{String(idx + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ul></section>
        <section><p className="eyebrow">Approach</p><h2>Architecture & implementation.</h2><p>{project.architecture}</p></section>
        <section><p className="eyebrow">Capabilities</p><h2>What the system supports.</h2><div className="capability-list">{project.features.map((item) => <div key={item}>{item}</div>)}</div></section>
        <section><p className="eyebrow">Decisions</p><h2>Trade-offs made explicit.</h2><ul className="plain-list">{project.tradeoffs.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><p className="eyebrow">Outcome & status</p><h2>Where the work stands.</h2><ul className="plain-list">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul><p className="status-note">Current status: <strong>{project.status}</strong>. No public link or repository is shown unless it has been explicitly configured.</p></section>
      </div>
    </div>
    <nav className="next-project container" aria-label="Next project"><span>Next case study</span><Link href={`/projects/${next.slug}`}>{next.title}<ArrowRight size={24} /></Link></nav>
  </article>;
}
