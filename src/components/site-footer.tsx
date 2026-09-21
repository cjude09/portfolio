import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-links">
          <Link href="/projects">Work</Link>
          <Link href="/resume">Résumé</Link>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="built-note">Designed and engineered in Cebu.</p>
      </div>
    </footer>
  );
}
