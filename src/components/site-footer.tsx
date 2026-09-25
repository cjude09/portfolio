import Link from "next/link";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/projects">Projects</Link>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}
