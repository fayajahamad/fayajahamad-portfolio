import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, CircleDot, ExternalLink, GitBranch, ShieldCheck } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/project-visual";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {return projects.map(({slug}) => ({slug}));}
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params; const project = getProject(slug);
  return {title: project?.title || "Project not found", description: project?.summary};
}
export default async function CaseStudy({params}: Props) {
  const {slug} = await params; const project = getProject(slug);
  if (!project) notFound();
  const idx = projects.findIndex((p) => p.slug === slug); const next = projects[(idx+1)%projects.length];
  return <>
    <section className="case-hero"><div className="container">
      <Link href="/work" className="back-link"><ArrowLeft size={16}/> BACK TO ALL PROJECTS</Link>
      <div className="case-meta"><span>{project.kicker}</span><span>CASE STUDY {project.number} / {String(projects.length).padStart(2,"0")}</span></div>
      <h1>{project.title}<span>.</span></h1><p className="case-lead">{project.description}</p>
      <div className="case-pills"><span>YEAR: {project.year}</span><span>STATUS: {project.status.toUpperCase()}</span><span>{project.category.toUpperCase()}</span></div>
      <div className="case-art"><ProjectVisual project={project}/></div>
    </div></section>
    <section className="case-body section"><div className="container case-layout"><aside className="case-sidebar"><span className="eyebrow">PROJECT DETAILS</span><div><small>MY ROLE</small><p>{project.role}</p></div><div><small>STACK</small><div className="case-stack">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>{project.repo && <a href={project.repo} rel="noreferrer" target="_blank" className="btn btn-secondary">SOURCE ON GITHUB <ExternalLink size={15}/></a>}{!project.repo && <div className="repo-pending">Public repository link will be added after a security review.</div>}</aside>
      <div className="case-main"><article className="case-block"><span className="section-kicker">01 / THE CHALLENGE</span><h2>Start with the problem.</h2><p>{project.challenge}</p></article>
        <article className="case-block"><span className="section-kicker">02 / SYSTEM FLOW</span><h2>Architecture, step by step.</h2><div className="flow-list">{project.architecture.map((step,i)=><div key={step} className="flow-step"><span>{String(i+1).padStart(2,"0")}</span><p>{step}</p><GitBranch size={17}/></div>)}</div></article>
        <article className="case-block"><span className="section-kicker">03 / IMPLEMENTATION</span><h2>What I worked on.</h2><div className="case-checks">{project.highlights.map((item) => <div key={item}><CircleDot size={17}/><span>{item}</span></div>)}</div></article>
        <article className="case-block case-verified"><span className="section-kicker">04 / EVIDENCE</span><h2>What&apos;s been verified.</h2><p>These are intentionally limited to documented or confirmed results. Visuals on this page are illustrations, not live telemetry or lab screenshots.</p><div className="case-checks">{project.verification.map((item) => <div key={item}><CheckCircle2 size={18}/><span>{item}</span></div>)}</div></article>
        <article className="case-block"><span className="section-kicker">05 / WHAT&apos;S NEXT</span><h2>Continuing the build.</h2><div className="case-checks">{project.nextSteps.map((item)=><div key={item}><ShieldCheck size={17}/><span>{item}</span></div>)}</div></article>
      </div></div></section>
    <section className="case-next"><div className="container"><span className="eyebrow">NEXT CASE STUDY / {next.number}</span><Link href={`/work/${next.slug}`}><h2>{next.shortTitle}</h2><span className="next-icon"><ArrowUpRight size={30}/></span></Link><Link href="/work" className="text-link">VIEW ALL PROJECTS <ArrowRight size={16}/></Link></div></section>
  </>;
}
