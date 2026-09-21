import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { experiences } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Editorial Portfolio",
  description: "The editorial portfolio of Full-Stack Software Engineer Cris Jude A. Gramatica.",
  alternates: { canonical: "/editorial" },
};

const expertise = [
  { number: "01", title: "Full-stack systems", text: "Applications, services, APIs, enterprise platforms, and mobile experiences." },
  { number: "02", title: "Cloud architecture", text: "Data, identity, deployment, observability, and production operations." },
  { number: "03", title: "Applied AI", text: "Grounded retrieval, document ingestion, semantic search, and useful AI workflows." },
];

const indexLinks = [
  { label: "About", href: "#about" },
  { label: "Selected work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function EditorialPage() {
  return (
    <div className="home-shell container">
      <aside className="home-identity">
        <div>
          <p className="identity-kicker">Cris Jude A. Gramatica</p>
          <h1>Full-stack software<br />engineer<span>.</span></h1>
          <p className="identity-summary">I build dependable web, mobile, cloud, and AI-powered software—with equal care for architecture and the people using it.</p>
          <nav className="home-index" aria-label="On this page">
            {indexLinks.map((item, index) => <a href={item.href} key={item.href}><span>{String(index + 1).padStart(2, "0")}</span><i /><strong>{item.label}</strong></a>)}
          </nav>
        </div>
        <div className="identity-foot">
          <div className="identity-status"><span className="status-dot" />{profile.availability || "Building from Cebu, Philippines"}</div>
          <a href="#about" className="scroll-cue">Scroll to explore <ArrowDown size={14} /></a>
        </div>
      </aside>

      <div className="home-journal">
        <section className="journal-section journal-opening" id="about">
          <Reveal>
            <p className="journal-label"><span>01</span> About</p>
            <p className="opening-statement">I turn complicated requirements into software that feels <em>clear, resilient, and considered.</em></p>
            <div className="opening-copy">
              <p>For more than thirteen years, I&apos;ve worked from the database outward and the interface inward—connecting architecture, backend systems, cloud infrastructure, and polished product experiences.</p>
              <p>My practice has grown from desktop and enterprise .NET software into full-stack platforms, cross-platform mobile apps, and applied AI. I use Codex as a collaborative engineering tool for planning, implementation, debugging, review, validation, and documentation.</p>
            </div>
            <div className="journal-actions"><Link href="/about" className="plain-action">More about my practice <ArrowUpRight size={15} /></Link><Link href="/resume" className="plain-action">View résumé <ArrowUpRight size={15} /></Link></div>
          </Reveal>
        </section>

        <section className="journal-section" aria-labelledby="practice-title">
          <Reveal><p className="journal-label"><span>02</span> Practice</p><h2 id="practice-title">Work across layers.<br />Think in systems.</h2></Reveal>
          <div className="practice-list">{expertise.map((item) => <Reveal className="practice-row" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div>
        </section>

        <section className="journal-section" id="work" aria-labelledby="work-title">
          <Reveal className="journal-heading"><div><p className="journal-label"><span>03</span> Selected work</p><h2 id="work-title">Systems I&apos;ve helped shape.</h2></div><Link href="/projects" className="plain-action">Project archive <ArrowRight size={15} /></Link></Reveal>
          <div className="project-grid">{featuredProjects.map((project, index) => <Reveal key={project.id}><ProjectCard project={project} index={index} /></Reveal>)}</div>
        </section>

        <section className="journal-section" id="experience" aria-labelledby="experience-title">
          <Reveal className="journal-heading"><div><p className="journal-label"><span>04</span> Experience</p><h2 id="experience-title">A practice built over time.</h2></div><Link href="/experience" className="plain-action">Full timeline <ArrowRight size={15} /></Link></Reveal>
          <div className="journal-experience">{experiences.slice(0, 4).map((item) => <article key={`${item.company}-${item.period}`}><p>{item.period}</p><div><h3>{item.role}</h3><span>{item.company}</span><p>{item.summary}</p></div></article>)}</div>
        </section>

        <section className="journal-section journal-contact" id="contact">
          <Reveal>
            <p className="journal-label"><span>05</span> Contact</p>
            <h2>Good software begins with a precise conversation.</h2>
            <p>Tell me about the problem, the people it affects, and why it matters.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}<ArrowUpRight size={18} /></a>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
