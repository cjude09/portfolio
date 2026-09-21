import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import { experiences } from "@/data/experience";
import { profile, skillGroups } from "@/data/profile";

export const metadata: Metadata = { title: "Résumé", description: `Résumé of ${profile.name}, Full-Stack Software Engineer.`, alternates: { canonical: "/resume" } };

export default function ResumePage() {
  return <article className="resume container"><header className="resume-header"><div><p className="eyebrow">Résumé</p><h1>{profile.name}</h1><p>{profile.title}</p></div><PrintButton /></header><div className="resume-contact"><a href={`mailto:${profile.email}`}><Mail size={14} />{profile.email}</a><span><MapPin size={14} />{profile.location}</span></div><section><h2>Profile</h2><p>{profile.summary} Experienced in system architecture, database design, cloud deployment, cross-platform mobile applications, team collaboration, and AI-powered software.</p></section><section><h2>Experience</h2>{experiences.map((item) => <div className="resume-role" key={`${item.company}-${item.period}`}><div><h3>{item.role}</h3><p>{item.company}</p></div><span>{item.period}</span><p>{item.summary}</p></div>)}</section><section><h2>Technical practice</h2><div className="resume-skills">{skillGroups.map((group) => <p key={group.label}><strong>{group.label}</strong> — {group.items.join(", ")}</p>)}</div></section><section><h2>Education</h2><div className="resume-role"><div><h3>{profile.education.degree}</h3><p>{profile.education.school} · {profile.education.location}</p></div><span>{profile.education.period}</span></div></section><p className="resume-note print-hide">This web résumé is the configured destination until a verified PDF is added under <code>public/resume/</code>.</p></article>;
}
