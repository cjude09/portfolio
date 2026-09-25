import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { profile, skillGroups } from "@/data/profile";

export const metadata: Metadata = { title: "About", description: "Professional background, engineering approach, and technical skills of Cris Jude A. Gramatica.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <>
    <PageHeader code="N-01" label="About" title="Engineer, architect, and thoughtful product builder." description="I work across disciplines to turn complex requirements into software that feels clear, dependable, and considered." />
    <section className="section container about-story" aria-label="Background">
      <p className="story-lead">My path in software began with desktop applications and enterprise .NET systems. Over time, that foundation expanded into full-stack product development, cloud architecture, and applied AI.</p>
      <div className="story-body">
        <p>Since {profile.experienceStart}, I&apos;ve worked across backend and frontend engineering, database design, integrations, deployment, and production operations. I&apos;m most useful where a product needs both a broad technical perspective and care for the details people actually experience.</p>
        <p>Today, my work includes modern web platforms, cross-platform mobile applications, cloud systems, retrieval-augmented AI, semantic search, and document processing. I value straightforward architecture, explicit trade-offs, and systems that stay understandable after launch.</p>
        <p>Collaboration is central to the practice: working with teams, mentoring engineers, writing useful documentation, and making technical decisions visible. I also use Codex as an engineering collaborator for planning, implementation, debugging, security review, and documentation, with human direction and review throughout.</p>
      </div>
    </section>
    <section className="section container" aria-labelledby="capabilities">
      <div className="section-heading"><p className="eyebrow"><span>N-02</span>Capabilities</p><h2 id="capabilities">Tools change. Engineering judgment compounds.</h2></div>
      <div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
    </section>
    <section className="section container education" aria-labelledby="education-title">
      <p className="eyebrow">Education</p>
      <div><h2 id="education-title">{profile.education.degree}</h2><p>{profile.education.school}, {profile.education.location}</p><span>{profile.education.period}</span></div>
    </section>
    <section className="inline-cta container"><p>See how that experience translates into products.</p><Link className="text-link" href="/projects">Explore the work <ArrowRight size={16} aria-hidden="true" /></Link></section>
  </>;
}
