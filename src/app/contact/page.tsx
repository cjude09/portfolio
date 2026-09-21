import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Cris Jude A. Gramatica about engineering and product work.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const socials = Object.entries(profile.social).filter((entry): entry is [string, string] => Boolean(entry[1]));
  return <section className="contact-page container"><div><p className="eyebrow">Contact</p><h1>Let&apos;s make something<br /><em>useful.</em></h1><p className="contact-intro">Have a product challenge, a system that needs untangling, or an idea worth exploring? Send me an email with a little context.</p><div className="button-row"><a className="button" href={`mailto:${profile.email}`}><Mail size={17} />Write an email</a><CopyEmail email={profile.email} /></div></div><aside className="contact-details"><div><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15} /></a></div><div><span>Location</span><p><MapPin size={15} />{profile.location}</p></div><div><span>Profiles</span>{socials.length ? socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}<ArrowUpRight size={15} /></a>) : <p>Social profiles are available once verified URLs are configured.</p>}</div></aside></section>;
}
