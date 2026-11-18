import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { ProjectVisual } from "@/components/projects/project-visual";
import { isVerifiedExternalLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.name, description: project.summary, alternates: { canonical: `/projects/${slug}` } } : { title: "Project not found" };
}
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <>
    <section className="project-detail-head container-wide">
      <Link href="/projects" className="back-link"><ArrowLeft size={17}/> Back to projects</Link>
      <div className="project-detail-meta"><span>PROJECT {project.number} / 05</span><span>{project.category}</span><span>{project.status}</span></div>
      <h1>{project.name}</h1><p>{project.summary}</p>
      <div className="detail-actions">
        {isVerifiedExternalLink(project.repo) ? <a href={project.repo} target="_blank" rel="noopener noreferrer" className="button button-primary">View source <Github size={18}/></a> : <span className="missing-repo"><AlertCircle size={16}/> Exact repository link not yet supplied</span>}
        {isVerifiedExternalLink(project.liveDemo) && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="button button-outline">Live demonstration <ExternalLink size={16}/></a>}
        {isVerifiedExternalLink(project.documentation) && <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="button button-outline">Technical documentation <ArrowUpRight size={16}/></a>}
      </div>
    </section>
    <section className="container-wide detail-hero"><ProjectVisual slug={project.slug}/><span>Concept illustration — not an actual project screenshot</span></section>
    <div className="container-wide project-detail-layout">
      <aside className="detail-aside"><div><span className="section-label">TECHNOLOGY STACK</span><div className="detail-tags">{project.technologies.map((item)=><span key={item}>{item}</span>)}</div></div><div><span className="section-label">STATUS</span><p>{project.status}</p></div><div><span className="section-label">EVIDENCE</span><p>Only verified results are described as observed. Items still awaiting proof are explicitly noted.</p></div></aside>
      <article className="project-article">
        <section><span className="section-label">01 / CONTEXT</span><h2>The problem</h2><p>{project.problem}</p></section>
        <section><span className="section-label">02 / INTENT</span><h2>What the project set out to do</h2><ul className="check-list">{project.objectives.map((value)=><li key={value}><CheckCircle2 size={18}/>{value}</li>)}</ul></section>
        <section><span className="section-label">03 / SYSTEM DESIGN</span><h2>Architecture at a glance</h2><p>These steps describe the laboratory&apos;s intended flow. They are a simplified explanation, not a full topology diagram.</p><div className="architecture-steps">{project.architecture.map((stage,index)=><div key={stage.label}><span>0{index+1}</span><div><h3>{stage.label}</h3><p>{stage.detail}</p></div></div>)}</div></section>
        <section><span className="section-label">04 / EXECUTION</span><h2>Implementation approach</h2><ol className="numbered-list">{project.implementation.map((item)=><li key={item}>{item}</li>)}</ol></section>
        <section><span className="section-label">05 / TRADE-OFFS</span><h2>Challenges and considerations</h2><ul className="bullet-list">{project.challenges.map((item)=><li key={item}>{item}</li>)}</ul></section>
        <section><span className="section-label">06 / VALIDATION</span><h2>What can be verified</h2><div className="validation-box"><AlertCircle size={20}/><div><strong>Evidence-first reporting</strong><p>Where screenshots, independent tests or public links have not been supplied, the case study states what is still needed.</p></div></div><ul className="bullet-list">{project.validation.map((item)=><li key={item}>{item}</li>)}</ul>{project.evidenceImage && <figure><Image src={project.evidenceImage} width={1200} height={760} alt={`Evidence for ${project.name}`} className="evidence-image"/><figcaption>Project evidence submitted for this case study.</figcaption></figure>}</section>
        <section><span className="section-label">07 / REFLECTION</span><h2>What I learned</h2><ul className="bullet-list">{project.learnings.map((item)=><li key={item}>{item}</li>)}</ul></section>
        <section><span className="section-label">08 / NEXT ITERATION</span><h2>What comes next</h2><ul className="bullet-list">{project.nextSteps.map((item)=><li key={item}>{item}</li>)}</ul></section>
        <div className="next-project-footer"><Link href="/projects" className="text-link"><ArrowLeft size={17}/> Back to all projects</Link><Link href="/contact" className="text-link">Discuss the project <ArrowUpRight size={17}/></Link></div>
      </article>
    </div>
  </>;
}
