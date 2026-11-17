import Link from "next/link";
import { Activity, ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, CircleDot, ExternalLink, Fingerprint, GitBranch, Layers3, LockKeyhole, ShieldCheck, TerminalSquare } from "lucide-react";
import { NetworkScene } from "@/components/network-scene";
import { ProjectGrid } from "@/components/project-grid";
import { ProjectVisual } from "@/components/project-visual";
import { GithubActivity } from "@/components/github-activity";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/reveal";
import { site, stack } from "@/lib/site";
import { projects } from "@/lib/projects";

const focus = [
  { name: "Identity & access", icon: Fingerprint, detail: "MFA, policy enforcement, least privilege" },
  { name: "Network security", icon: ShieldCheck, detail: "Segmentation, firewalls, packet analysis" },
  { name: "Infrastructure visibility", icon: Activity, detail: "Logs, monitoring, incident signals" },
];
const methodology = [
  { num: "01", icon: Layers3, title: "Model the system", description: "Start with architecture, trust boundaries, dependencies and failure scenarios." },
  { num: "02", icon: TerminalSquare, title: "Build the working lab", description: "Implement the controls with repeatable configuration and realistic access paths." },
  { num: "03", icon: CheckCircle2, title: "Verify and document", description: "Test expected outcomes, record limitations, and make the work reviewable." },
];

export default function Home() {
  const featured = projects[0];
  return <>
    <section className="atlas-hero" id="overview">
      <div className="atlas-hero-aura" aria-hidden="true"/>
      <div className="container atlas-hero-inner">
        <div className="atlas-hero-intro"><span className="atlas-section-overline"><span className="atlas-blue-pip"/> NETWORK ENGINEERING & CYBERSECURITY</span><span className="atlas-hero-index">PORTFOLIO · 2026</span></div>
        <div className="atlas-hero-layout">
          <div className="atlas-hero-copy">
            <h1>Engineering the<br/><span>networks we</span><br/><em>depend on.</em></h1>
            <p className="atlas-hero-lead">I&apos;m <strong>{site.name}</strong>, a third-year Network Engineering student focused on secure enterprise access, network infrastructure and observable systems.</p>
            <p className="atlas-hero-subline">I build practical labs, test real access decisions and explain the engineering behind them.</p>
            <div className="atlas-hero-links">
              <Link className="atlas-button atlas-button-primary" href="#work">Explore selected work <ArrowUpRight size={18}/></Link>
              <a className="atlas-button atlas-button-quiet" href={site.github} target="_blank" rel="noopener noreferrer"><GitBranch size={17}/> GitHub profile <ExternalLink size={14}/></a>
            </div>
            <div className="atlas-hero-location"><span className="atlas-availability-pip"/> Open to internship opportunities <span className="atlas-hero-location-sep"/> {site.location}</div>
          </div>
          <div className="atlas-hero-demo"><NetworkScene/></div>
        </div>
        <div className="atlas-hero-floor"><a href="#work">SCROLL TO PROJECTS <ArrowDown size={15}/></a><span>01 / ENGINEERING PORTFOLIO</span></div>
      </div>
    </section>

    <section className="atlas-focus-strip" aria-label="Engineering focus areas"><div className="container atlas-focus-inner"><span>CORE PRACTICE AREAS</span>{focus.map(({name,icon:Icon})=><div key={name}><Icon size={18}/>{name}</div>)}</div></section>

    <section className="atlas-section atlas-work" id="work"><div className="container">
      <Reveal><div className="atlas-section-head"><div><span className="atlas-section-overline">01 / SELECTED PROJECTS</span><h2>Real work. <span>Clear thinking.</span></h2><p>Security engineering is more than the tools in a stack. Here&apos;s how I approach architecture, implementation, validation and documentation.</p></div><Link href="/work" className="atlas-inline-link">View all case studies <ArrowUpRight size={17}/></Link></div></Reveal>
      <Reveal><Link className="atlas-featured-project" href={`/work/${featured.slug}`} aria-label={`Read the ${featured.title} case study`}>
        <div className="atlas-featured-copy"><span className="atlas-featured-label"><CircleDot size={13}/> FEATURED / SECURITY ARCHITECTURE</span><div><span className="atlas-featured-number">01 — ZERO TRUST</span><h3>{featured.title}</h3><p>{featured.summary}</p><div className="atlas-featured-proof"><span><CheckCircle2 size={15}/> MFA-backed access tested</span><span><LockKeyhole size={15}/> Allow / deny behavior verified</span></div></div><span className="atlas-featured-action">Explore case study <ArrowUpRight size={17}/></span></div>
        <div className="atlas-featured-art"><ProjectVisual project={featured}/></div>
      </Link></Reveal>
      <div className="atlas-projects-caption"><div><span>MORE ENGINEERING WORK</span><span>FILTER BY DISCIPLINE</span></div></div>
      <ProjectGrid excludeSlug={featured.slug}/>
    </div></section>

    <section className="atlas-section atlas-expertise" id="expertise"><div className="container"><Reveal><div className="atlas-section-head"><div><span className="atlas-section-overline">02 / TECHNICAL PRACTICE</span><h2>Where I focus <span>my effort.</span></h2><p>Applied security thinking backed by lab implementation, troubleshooting and practical network fundamentals.</p></div></div></Reveal>
      <div className="atlas-expertise-grid">{focus.map(({name,icon:Icon,detail},i)=><Reveal key={name} delay={i*80}><div className="atlas-expertise-card"><div className="atlas-expertise-top"><span>0{i+1} / 03</span><Icon size={22}/></div><h3>{name}</h3><p>{detail}</p><div className="atlas-expertise-rule"/></div></Reveal>)}</div>
      <div className="atlas-stack-line"><span>TOOLS & TECHNOLOGIES</span><div>{stack.map(item=><span key={item}>{item}</span>)}</div></div>
    </div></section>

    <section className="atlas-section atlas-method" id="approach"><div className="container atlas-method-grid">
      <Reveal><div className="atlas-method-intro"><span className="atlas-section-overline">03 / ENGINEERING APPROACH</span><h2>Built to be<br/><span>understood.</span><br/>Not just seen.</h2><p>My goal is to create useful, repeatable work with testable outcomes—not just a polished diagram and a list of technologies.</p><Link className="atlas-inline-link" href="/about">More about my approach <ArrowUpRight size={17}/></Link></div></Reveal>
      <div className="atlas-method-steps">{methodology.map(({num,icon:Icon,title,description},i)=><Reveal key={num} delay={i*65}><div className="atlas-method-step"><span className="atlas-method-number">{num}</span><span className="atlas-method-icon"><Icon size={21}/></span><div><h3>{title}</h3><p>{description}</p></div><ArrowRight className="atlas-method-arrow" size={18}/></div></Reveal>)}</div>
    </div></section>

    <section className="atlas-section atlas-github" id="github"><div className="container"><div className="atlas-section-head"><div><span className="atlas-section-overline">04 / PUBLIC WORK</span><h2>The repository <span>is the evidence.</span></h2><p>Explore source code, documentation and project progress. Repository information comes from GitHub&apos;s public API.</p></div></div><GithubActivity/></div></section>

    <section className="atlas-writing" id="writing"><div className="container atlas-writing-inner"><div><span className="atlas-section-overline">05 / FIELD NOTES</span><h2>Thinking out loud,<br/><span>learning in public.</span></h2><p>Short write-ups on access control, network troubleshooting, and lessons from building engineering labs.</p></div><Link className="atlas-button atlas-button-quiet" href="/notes">Browse field notes <ArrowUpRight size={17}/></Link></div></section>

    <ContactCta/>
  </>;
}
