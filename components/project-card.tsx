import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return <Link className="project-card" href={`/work/${project.slug}`}>
    <ProjectVisual project={project}/>
    <div className="project-card-content">
      <div className="project-card-meta"><span>{project.number} / {project.category.toUpperCase()}</span><span>{project.year} · {project.status}</span></div>
      <div className="project-card-title"><h3>{project.title}</h3><span className="card-arrow"><ArrowUpRight size={22}/></span></div>
      <p>{project.summary}</p>
      <div className="project-tags">{project.technologies.slice(0,4).map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
  </Link>;
}
