import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { experiences } from "@/data/experience";

export const metadata: Metadata = { title: "Experience", description: "Professional experience from enterprise software to full-stack, cloud, mobile, and applied AI systems.", alternates: { canonical: "/experience" } };

export default function ExperiencePage() {
  return <><PageHeader eyebrow="Experience" title="Thirteen years of building, adapting, and learning." description="A professional timeline across desktop and enterprise systems, full-stack products, cloud architecture, mobile applications, and applied AI." /><section className="section container timeline">{experiences.map((item, index) => <article className="timeline-item" key={`${item.company}-${item.period}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-date">{item.period}</div><div className="timeline-content"><h2>{item.role}</h2><h3>{item.company}</h3><p>{item.summary}</p></div></article>)}</section><section className="inline-cta container"><p>Interested in the systems behind the timeline?</p><Link className="text-link" href="/projects">View selected work <ArrowRight size={16} /></Link></section></>;
}
