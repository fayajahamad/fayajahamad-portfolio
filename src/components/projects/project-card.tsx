import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectVisual } from "@/components/projects/project-visual";
import type { Project } from "@/types/content";
import { isVerifiedExternalLink } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-cover" aria-label={`Read case study: ${project.name}`}>
        <div className="project-cover-head"><span>PROJECT {project.number}</span><span>{project.category}</span></div>
        <ProjectVisual slug={project.slug}/>
        <span className="concept-tag">CONCEPT VISUAL / NOT A SCREENSHOT</span>
      </Link>
      <div className="project-content">
        <div className="project-status-line"><span className="project-status"><span/> {project.status}</span><span>{project.number} / 05</span></div>
        <h3><Link href={`/projects/${project.slug}`}>{project.name} <ArrowUpRight size={19} aria-hidden="true" /></Link></h3>
        <p>{project.summary}</p>
        <div className="project-tags">{project.technologies.slice(0,4).map((tech)=><span key={tech}>{tech}</span>)}</div>
        <div className="project-bottom"><Link href={`/projects/${project.slug}`} className="subtle-link">Explore case study <ArrowUpRight size={15}/></Link>
          {isVerifiedExternalLink(project.repo) ? <a href={project.repo} aria-label={`GitHub code for ${project.name}`} target="_blank" rel="noopener noreferrer"><Github size={18}/></a> : <span className="link-unavailable">Code link pending</span>}
        </div>
      </div>
    </article>
  );
}
