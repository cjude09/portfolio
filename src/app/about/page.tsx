import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { profile, skillGroups } from "@/data/profile";

export const metadata: Metadata = { title: "About", description: "Professional background, engineering approach, and technical skills of Cris Jude A. Gramatica.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <>
    <PageHeader eyebrow="About" title="Engineer, architect, and thoughtful product builder." description="I work across disciplines to turn complex requirements into software that feels clear, dependable, and considered." />
    <section className="section container about-story">
      <Reveal className="story-lead"><p>My path in software began with desktop applications and enterprise .NET systems. Over time, that foundation expanded into full-stack product development, cloud architecture, and applied AI.</p></Reveal>
      <Reveal className="story-body">
        <p>Since 2011, I&apos;ve worked across backend and frontend engineering, database design, integrations, deployment, and production operations. I&apos;m most useful where a product needs both broad technical perspective and care for the details people actually experience.</p>
        <p>Today, my work includes modern web platforms, cross-platform mobile applications, cloud systems, retrieval-augmented AI, semantic search, and document processing. I value straightforward architecture, explicit trade-offs, and systems that remain understandable after launch.</p>
        <p>Collaboration is central to the practice: working with teams, mentoring engineers, writing useful documentation, and making technical decisions visible. I also use Codex as an engineering collaboration tool for planning, implementation, debugging, security review, validation, documentation, and workflow automation—with human direction and review throughout.</p>
      </Reveal>
    </section>
    <section className="section container" aria-labelledby="skills-title"><Reveal className="section-heading"><p className="eyebrow">Capabilities</p><h2 id="skills-title">Tools change. Engineering judgment compounds.</h2></Reveal><div className="skills-grid">{skillGroups.map((group) => <Reveal className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>)}</div></section>
    <section className="section container education"><p className="eyebrow">Education</p><div><h2>{profile.education.degree}</h2><p>{profile.education.school}<br />{profile.education.location}</p><span>{profile.education.period}</span></div></section>
    <section className="inline-cta container"><p>See how that experience translates into products.</p><Link className="text-link" href="/projects">Explore the work <ArrowRight size={16} /></Link></section>
  </>;
}
