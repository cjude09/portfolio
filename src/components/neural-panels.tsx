import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { experiences } from "@/data/experience";
import { featuredProjects, projects } from "@/data/projects";
import { practiceAreas, profile, yearsOfExperience } from "@/data/profile";
import type { NodeId } from "@/components/neural-portfolio";

/** Panel content for each node on the system map. Rendered on the server and handed to the client shell. */
export const neuralPanels: Record<NodeId, React.ReactNode> = {
  about: (
    <>
      <PanelHead node="about" code="N-01" label="Identity" title="Engineering across the whole product." />
      <p className="panel-lead">I&apos;m Cris Jude, a full-stack software engineer in Cebu, Philippines. For {yearsOfExperience} years I&apos;ve built web, mobile, cloud, and AI-powered applications.</p>
      <p>I work from architecture and data models through backend services to the final interface. The goal is not complexity. It&apos;s a system that solves the right problem and stays understandable after launch.</p>
      <dl className="panel-facts">
        <div><dt>Based in</dt><dd>{profile.location}</dd></div>
        <div><dt>Shipping since</dt><dd>{profile.experienceStart}</dd></div>
        <div><dt>Studied</dt><dd>BS Information Technology, {profile.education.school}</dd></div>
      </dl>
      <Link className="panel-link" href="/about">Read the full profile <ArrowUpRight size={14} aria-hidden="true" /></Link>
    </>
  ),
  systems: (
    <>
      <PanelHead node="systems" code="N-02" label="Systems" title="One practice, five layers." />
      <dl className="system-stack">
        {practiceAreas.map((area) => <div key={area.name}><dt>{area.name}</dt><dd>{area.detail}</dd></div>)}
      </dl>
      <Link className="panel-link" href="/about#capabilities">See every tool I use <ArrowUpRight size={14} aria-hidden="true" /></Link>
    </>
  ),
  work: (
    <>
      <PanelHead node="work" code="N-03" label="Work" title="Systems with real constraints." />
      <ul className="panel-projects">
        {featuredProjects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`}>
              <span className="panel-project-status">{project.status}</span>
              <strong>{project.title}</strong>
              <span>{project.shortDescription}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <Link className="panel-link" href="/projects">Browse all {projects.length} projects <ArrowUpRight size={14} aria-hidden="true" /></Link>
    </>
  ),
  experience: (
    <>
      <PanelHead node="experience" code="N-04" label="Timeline" title={`${yearsOfExperience} years, ${experiences.length} roles.`} />
      <ol className="panel-timeline">
        {experiences.slice(0, 5).map((item) => (
          <li key={`${item.company}-${item.period}`}><span>{item.period}</span><strong>{item.role}</strong><em>{item.company}</em></li>
        ))}
      </ol>
      <Link className="panel-link" href="/experience">See the full timeline <ArrowUpRight size={14} aria-hidden="true" /></Link>
    </>
  ),
  contact: (
    <>
      <PanelHead node="contact" code="N-05" label="Connect" title="Start with the problem." />
      <p className="panel-lead">Have a product challenge, a system that needs untangling, or an idea worth testing?</p>
      <p>Tell me who it affects, what isn&apos;t working, and what a useful outcome would look like. I reply to every message.</p>
      <a className="neural-email" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{profile.email}<ArrowUpRight size={16} aria-hidden="true" /></a>
      <div className="panel-actions">
        <CopyEmail email={profile.email} />
        <a className="button button-secondary" href={profile.resumeUrl} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    </>
  ),
};

function PanelHead({ node, code, label, title }: { node: NodeId; code: string; label: string; title: string }) {
  return (
    <header className="panel-head">
      <p><span>{code}</span>{label}</p>
      <h2 id={`panel-title-${node}`} tabIndex={-1} data-panel-title>{title}</h2>
    </header>
  );
}
