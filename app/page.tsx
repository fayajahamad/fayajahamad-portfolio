import Link from "next/link";
import { Activity, ArrowDownRight, ArrowRight, ArrowUpRight, ChevronRight, CircleCheck, Crosshair, GitBranch, ShieldCheck } from "lucide-react";
import { NetworkScene } from "@/components/network-scene";
import { ProjectGrid } from "@/components/project-grid";
import { ContactCta } from "@/components/contact-cta";
import { GithubActivity } from "@/components/github-activity";
import { Reveal } from "@/components/reveal";
import { capabilities, site, stack } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero-section">
      <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-overline"><span className="hero-overline-icon"><Crosshair size={14}/></span> PORTFOLIO / 2026 <span className="hero-overline-divider">—</span> NETWORK & SECURITY ENGINEERING</div>
          <div className="hero-heading"><span>I engineer</span><span>networks that</span><span className="hero-heading-accent">stay secure<span className="hero-period">.</span></span></div>
          <p className="hero-description">Hi, I&apos;m <strong>{site.firstName}</strong> — a network engineering student designing identity-first access, observable systems, and resilient infrastructure. I turn security concepts into working labs.</p>
          <div className="hero-buttons"><Link href="/#work" className="btn btn-primary">Explore my work <ArrowUpRight size={17}/></Link><Link href="/about" className="btn btn-secondary">More about me <ArrowRight size={17}/></Link></div>
          <div className="hero-social-proof"><div className="availability-indicator"><span className="availability-pulse"/> OPEN TO INTERNSHIP OPPORTUNITIES</div><span className="hero-location">BASED IN {site.location.toUpperCase()}</span></div>
        </div>
        <div className="hero-visual"><NetworkScene/><span className="hero-visual-caption">FIG 01. / INTERACTIVE SECURITY ARCHITECTURE</span></div>
      </div>
      <div className="container hero-bottom-row"><span>SCROLL TO EXPLORE <ArrowDownRight size={16}/></span><span>DESIGN · SECURE · OBSERVE</span><span>01 / 05</span></div>
    </section>

    <div className="stack-bar" aria-label="Core technologies"><div className="container stack-bar-inner"><span>WORKING WITH</span><div className="stack-tags">{stack.slice(0,8).map(item => <span key={item}>{item}</span>)}</div></div></div>

    <section className="section work-section" id="work"><div className="container">
      <Reveal><div className="section-heading"><div><span className="section-kicker"><span className="kicker-number">01</span> / SELECTED WORK</span><h2>Proof of <span>practice.</span></h2><p>Not just technologies on a résumé. Projects exploring what happens when identity, infrastructure and security meet.</p></div><Link href="/work" className="section-link">ALL PROJECTS <ArrowUpRight size={18}/></Link></div></Reveal>
      <ProjectGrid/>
      <div className="work-end-note"><span><CircleCheck size={15}/> Project claims are documented conservatively; more evidence is added as each lab is validated.</span><Link href="/work">View project index <ArrowRight size={15}/></Link></div>
    </div></section>

    <section className="section expertise-section" id="expertise"><div className="container">
      <Reveal><div className="section-heading"><div><span className="section-kicker"><span className="kicker-number">02</span> / WHAT I DO</span><h2>Depth over <span>buzzwords.</span></h2><p>Three areas I&apos;m actively developing through real configurations, troubleshooting and deliberate practice.</p></div></div></Reveal>
      <div className="capabilities-grid">{capabilities.map((cap, i) => <Reveal delay={i*90} key={cap.num}><article className="capability-card"><div className="capability-icon">{i===0?<ShieldCheck size={23}/>:i===1?<GitBranch size={23}/>:<Activity size={23}/>}</div><span className="capability-number">{cap.num} / 03</span><h3>{cap.title}</h3><p>{cap.description}</p><div className="capability-tags">{cap.tags.map(t=><span key={t}>{t}</span>)}</div></article></Reveal>)}</div>
    </div></section>

    <section className="section philosophy-section"><div className="container philosophy-layout">
      <Reveal><div className="philosophy-aside"><span className="section-kicker"><span className="kicker-number">03</span> / HOW I THINK</span><div className="philosophy-logo">∴<span>/</span></div><span>ENGINEERING PRINCIPLES</span></div></Reveal>
      <Reveal delay={100}><div className="philosophy-content"><h2>Security isn&apos;t a feature.<br/><em>It&apos;s a design decision.</em></h2><p>I care about the details between a diagram and a working system: authentication boundaries, failure modes, logs, operational visibility, and the evidence that a control actually works.</p><div className="principle-grid"><div><span>01 /</span><strong>Think in systems</strong><small>See connections, not isolated components.</small></div><div><span>02 /</span><strong>Verify assumptions</strong><small>Test allow paths and deny paths.</small></div><div><span>03 /</span><strong>Document decisions</strong><small>Build work others can understand.</small></div></div><Link href="/about" className="text-link">MORE ABOUT MY APPROACH <ChevronRight size={17}/></Link></div></Reveal>
    </div></section>

    <section className="section github-section"><div className="container"><div className="section-heading"><div><span className="section-kicker"><span className="kicker-number">04</span> / OPEN SOURCE WORKFLOW</span><h2>See the <span>actual work.</span></h2><p>Public code and repository history matter more than a fabricated contribution number.</p></div></div><GithubActivity/></div></section>

    <section className="section notes-preview"><div className="container notes-preview-grid"><div><span className="section-kicker"><span className="kicker-number">05</span> / FIELD NOTES</span><h2>Learning in<br/><span>public.</span></h2></div><div><p>I&apos;m turning lab lessons into short technical write-ups about access policy, firewall controls and network monitoring.</p><Link href="/notes" className="btn btn-secondary">Explore field notes <ArrowUpRight size={16}/></Link></div></div></section>
    <ContactCta/>
  </>;
}
