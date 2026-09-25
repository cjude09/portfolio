import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { experiences } from "@/data/experience";
import { yearsOfExperience } from "@/data/profile";

export const metadata: Metadata = { title: "Experience", description: "Professional experience from enterprise software to full-stack, cloud, mobile, and applied AI systems.", alternates: { canonical: "/experience" } };

export default function ExperiencePage() {
  return <>
    <PageHeader code="N-04" label="Experience" title={`${yearsOfExperience} years of building, adapting, and learning.`} description="A professional timeline across desktop and enterprise systems, full-stack products, cloud architecture, mobile applications, and applied AI." />
    <ol className="section container timeline">
      {experiences.map((item) => (
        <li className="timeline-item" key={`${item.company}-${item.period}`}>
          <p className="timeline-date">{item.period}</p>
          <div className="timeline-content"><h2>{item.role}</h2><h3>{item.company}</h3><p>{item.summary}</p></div>
        </li>
      ))}
    </ol>
    <section className="inline-cta container"><p>Interested in the systems behind the timeline?</p><Link className="text-link" href="/projects">View selected work <ArrowRight size={16} aria-hidden="true" /></Link></section>
  </>;
}
