import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = ["", "/about", "/projects", "/experience", "/contact", "/resume", "/neural"];
  return [...paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : 0.7 })), ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: project.featured ? 0.8 : 0.6 }))];
}
