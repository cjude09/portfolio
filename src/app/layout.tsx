import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — Full-Stack Software Engineer`, template: `%s — ${profile.shortName}` },
  description: profile.summary,
  applicationName: `${profile.shortName} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: `${profile.shortName} Portfolio`, title: `${profile.name} — Full-Stack Software Engineer`, description: profile.summary, url: "/" },
  twitter: { card: "summary_large_image", title: `${profile.name} — Full-Stack Software Engineer`, description: profile.summary },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#09090b" }, { media: "(prefers-color-scheme: light)", color: "#fafafa" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.title, email: `mailto:${profile.email}`, address: { "@type": "PostalAddress", addressLocality: "Badian", addressRegion: "Cebu", addressCountry: "PH" }, alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school }, knowsAbout: ["Full-stack engineering", "Cloud architecture", "Applied AI", "Mobile development"] };
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
