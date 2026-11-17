import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
import {projects} from "@/lib/projects";
import {notes} from "@/lib/notes";
export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=["", "/work", "/about", "/contact", "/notes"];
  return [...staticRoutes.map((path)=>({url: `${site.siteUrl}${path}`, changeFrequency:"monthly" as const, priority:path===""?1:0.7})),...projects.map(({slug})=>({url:`${site.siteUrl}/work/${slug}`,changeFrequency:"monthly" as const,priority:0.6})),...notes.map(({id})=>({url:`${site.siteUrl}/notes/${id}`,changeFrequency:"monthly" as const,priority:0.5}))];
}
