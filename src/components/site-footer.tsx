import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-links">
          <Link href="/projects">Work</Link>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
