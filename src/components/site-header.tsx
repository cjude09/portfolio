"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Network, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label="Cris Jude home">CJ<span>.</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname.startsWith(item.href);
            return <Link key={item.href} className={cn("nav-link", active && "active")} href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>
        <div className="nav-actions">
          <Link href="/" className="map-link"><Network size={15} aria-hidden="true" />System map</Link>
          <ThemeToggle />
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="resume-link desktop-resume">Résumé</a>
          <button className="icon-button mobile-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => <Link key={item.href} onClick={() => setOpen(false)} className={cn("mobile-nav-link", pathname.startsWith(item.href) && "active")} href={item.href}>{item.label}</Link>)}
          <Link href="/" onClick={() => setOpen(false)} className="mobile-nav-link">System map</Link>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="button">View résumé</a>
        </nav>
      )}
    </header>
  );
}
