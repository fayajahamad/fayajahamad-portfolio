import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return ["/", "/about", "/projects", "/skills", "/lab", "/education", "/contact", ...projects.map((p)=>`/projects/${p.slug}`)].map((route)=>({url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "/" ? 1 : .7}));
}
