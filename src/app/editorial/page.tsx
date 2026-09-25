import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { experiences } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { practiceAreas, profile, yearsOfExperience } from "@/data/profile";

export const metadata: Metadata = {
  title: "Overview",
  description: "The written portfolio of full-stack software engineer Cris Jude A. Gramatica.",
  alternates: { canonical: "/editorial" },
};

/** Sections share their codes with the nodes on the home system map. */
const sections = [
  { code: "N-01", label: "About", href: "#about" },
  { code: "N-02", label: "Practice", href: "#practice" },
  { code: "N-03", label: "Projects", href: "#work" },
  { code: "N-04", label: "Experience", href: "#experience" },
  { code: "N-05", label: "Contact", href: "#contact" },
];

export default function EditorialPage() {
  return (
    <div className="home-shell container">
      <aside className="home-identity">
        <div>
          <p className="eyebrow">{profile.name}</p>
          <h1>Full-stack software engineer<span>.</span></h1>
          <p className="identity-summary">I build dependable web, mobile, cloud, and AI-powered software, with equal care for the architecture and the people using it.</p>
          <nav aria-label="On this page">
            <ul className="home-index">
              {sections.map((item) => <li key={item.href}><a href={item.href}><span>{item.code}</span><i aria-hidden="true" />{item.label}</a></li>)}
            </ul>
          </nav>
        </div>
        <div className="identity-foot">
          <p className="identity-status"><span className="status-dot" aria-hidden="true" />{profile.availability || `Building from ${profile.location.split(", ").slice(1).join(", ")}`}</p>
          <a href="#about" className="scroll-cue">Start reading <ArrowDown size={14} aria-hidden="true" /></a>
        </div>
      </aside>

      <div className="home-journal">
        <section className="journal-section journal-opening" id="about" aria-labelledby="about-title">
          <p className="eyebrow"><span>N-01</span>About</p>
          <h2 id="about-title" className="opening-statement">I turn complicated requirements into software that feels clear, resilient, and considered.</h2>
          <div className="opening-copy">
            <p>For {yearsOfExperience} years I&apos;ve worked from the database outward and the interface inward, connecting architecture, backend systems, cloud infrastructure, and polished product experiences.</p>
            <p>My practice has grown from desktop and enterprise .NET software into full-stack platforms, cross-platform mobile apps, and applied AI. I use Codex as an engineering collaborator for planning, implementation, review, and documentation, always under my direction.</p>
          </div>
          <div className="journal-actions">
            <Link href="/about" className="text-link">More about my practice <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-link">View résumé <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="journal-section" id="practice" aria-labelledby="practice-title">
          <p className="eyebrow"><span>N-02</span>Practice</p>
          <h2 id="practice-title">Work across layers.<br />Think in systems.</h2>
          <dl className="practice-list">{practiceAreas.map((area) => <div key={area.name}><dt>{area.name}</dt><dd>{area.detail}</dd></div>)}</dl>
        </section>

        <section className="journal-section" id="work" aria-labelledby="work-title">
          <div className="journal-heading">
            <div><p className="eyebrow"><span>N-03</span>Projects</p><h2 id="work-title">Systems I&apos;ve helped shape.</h2></div>
            <Link href="/projects" className="text-link">All projects <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <ul className="project-grid">{featuredProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</ul>
        </section>

        <section className="journal-section" id="experience" aria-labelledby="experience-title">
          <div className="journal-heading">
            <div><p className="eyebrow"><span>N-04</span>Experience</p><h2 id="experience-title">A practice built over time.</h2></div>
            <Link href="/experience" className="text-link">Full timeline <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <ol className="journal-experience">
            {experiences.slice(0, 4).map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <span>{item.period}</span>
                <div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="summary">{item.summary}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="journal-section journal-contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow"><span>N-05</span>Contact</p>
          <h2 id="contact-title">Good software begins with a precise conversation.</h2>
          <p className="contact-lead">Tell me about the problem, the people it affects, and why it matters.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true" />{profile.email}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </section>
      </div>
    </div>
  );
}
