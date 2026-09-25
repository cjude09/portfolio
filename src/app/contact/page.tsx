import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Cris Jude A. Gramatica about engineering and product work.", alternates: { canonical: "/contact" } };

const socialLabels: Record<string, string> = { github: "GitHub", linkedin: "LinkedIn" };

export default function ContactPage() {
  const socials = Object.entries(profile.social).filter((entry): entry is [string, string] => Boolean(entry[1]));
  return (
    <section className="contact-page container">
      <div>
        <p className="eyebrow"><span>N-05</span>Contact</p>
        <h1>Let&apos;s make something useful.</h1>
        <p className="contact-intro">Have a product challenge, a system that needs untangling, or an idea worth exploring? Send an email with a little context: who it affects, what isn&apos;t working, and what a good outcome looks like.</p>
        <div className="button-row"><a className="button" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />Write an email</a><CopyEmail email={profile.email} /></div>
      </div>
      <dl className="contact-details">
        <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15} aria-hidden="true" /></a></dd></div>
        <div><dt>Location</dt><dd><p><MapPin size={15} aria-hidden="true" />{profile.location}</p></dd></div>
        <div><dt>Résumé</dt><dd><a href={profile.resumeUrl} target="_blank" rel="noreferrer">Open résumé<ArrowUpRight size={15} aria-hidden="true" /></a></dd></div>
        {socials.map(([name, url]) => <div key={name}><dt>{socialLabels[name] ?? name}</dt><dd><a href={url} target="_blank" rel="noreferrer">{url.replace(/^https?:\/\/(www\.)?/, "")}<ArrowUpRight size={15} aria-hidden="true" /></a></dd></div>)}
      </dl>
    </section>
  );
}
