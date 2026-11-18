import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ArrowDownRight, Github, Linkedin, Mail, MapPin, GraduationCap, Network, Terminal, ShieldCheck, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { ProjectCard } from "@/components/projects/project-card";
import { ExperienceHighlights } from "@/components/sections/experience-highlights";
import { AccessDemo } from "@/components/sections/access-demo";
import { isVerifiedExternalLink } from "@/lib/site";

const focusAreas = [
  { number: "01", icon: Terminal, name: "Python & automation", description: "Small, dependable tools for monitoring, analysis and repeatable engineering tasks.", detail: "PYTHON / SCRIPTING" },
  { number: "02", icon: Network, name: "Network infrastructure", description: "Routing, segmentation, VoIP and the practical work of keeping systems connected.", detail: "TCP/IP / INFRASTRUCTURE" },
  { number: "03", icon: ShieldCheck, name: "Security engineering", description: "Identity-aware access, firewall policy and observable, least-privilege systems.", detail: "ZERO TRUST / DEFENSE" },
] as const;

export default function Home() {
  return <>
    <section className="v4-hero" aria-labelledby="v4-main-headline">
      <div className="v4-noise" aria-hidden="true" />
      <div className="container-wide v4-hero-grid">
        <div className="v4-hero-copy">
          <div className="v4-availability"><span className="v4-status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES <span className="v4-availability-line" /> SRI LANKA</div>
          <p className="v4-intro">Hi, I&apos;m <strong>Fayaj Ahamad</strong><span className="v4-wave" aria-hidden="true">.</span></p>
          <h1 id="v4-main-headline">Engineering<br/><span className="v4-gradient-text">connected</span><br/>futures.</h1>
          <p className="v4-tagline">Network Engineering Undergraduate <span aria-hidden="true">/</span> Network & Security Automation</p>
          <p className="v4-description">I design and document practical solutions across networking, cybersecurity and software. I combine hands-on lab projects with real workplace experience and an interest in solving problems thoughtfully.</p>
          <div className="v4-hero-actions">
            <Link href="/projects" className="v4-button v4-button-primary">Explore my projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href="/contact" className="v4-button v4-button-secondary">Let&apos;s connect <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="v4-social-links" aria-label="Professional profiles">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a>
            {isVerifiedExternalLink(profile.linkedin) && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a>}
            {profile.email && <a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={13}/></a>}
          </div>
        </div>
        <div className="v4-hero-visual v5-hero-visual">
          <div className="v5-portrait-composition">
            <div className="v5-portrait-outline" aria-hidden="true" />
            <div className="v5-portrait-card">
              <div className="v5-portrait-photo">
                <Image src="/images/fayaj-professional-portrait.webp" alt="Portrait of Fayaj Ahamad wearing a light formal shirt and red tie" fill sizes="(max-width: 960px) 88vw, 480px" priority className="v5-portrait-image" />
              </div>
              <div className="v5-photo-footer"><div><span>NETWORK ENGINEERING UNDERGRADUATE</span><strong>Fawsil Ameer Fayaj Ahamad</strong></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wide v4-hero-bottom">
        <div><GraduationCap size={18}/><span>Third-year undergraduate</span></div>
        <div><MapPin size={18}/><span>NSBM Green University, Sri Lanka</span></div>
        <a href="#selected-work">Scroll to explore <ArrowDownRight size={16}/></a>
      </div>
    </section>

    <section className="section-shell v4-selected-work" id="selected-work">
      <div className="container-wide">
        <div className="v4-section-head">
          <div><h2>Work that speaks<br/><span>through the details.</span></h2></div>
          <div className="v4-section-aside"><Link href="/projects" className="v4-inline-link">View all projects <ArrowUpRight size={17}/></Link></div>
        </div>
        <div className="project-grid featured-project-grid">{featuredProjects.map(project => <ProjectCard key={project.slug} project={project}/>)}</div>
      </div>
    </section>

    <section className="section-shell v6-experience-section" id="experience">
      <div className="container-wide">
        <div className="v4-section-head v4-section-head-compact">
          <div><h2>Real-world experience.<br/><span>Community involvement.</span></h2></div>
          <div className="v4-section-aside"><Link href="/experience" className="v4-inline-link">View experience and involvement <ArrowUpRight size={17}/></Link></div>
        </div>
        <ExperienceHighlights />
      </div>
    </section>

    <section className="section-shell v4-focus-section">
      <div className="container-wide">
        <div className="v4-section-head v4-section-head-compact"><div><p className="v4-section-index">03 <span>/</span> WHAT I DO</p><h2>Software thinking.<br/><span>Infrastructure mindset.</span></h2></div><p className="v4-head-note">My interests sit where programming, networking and security meet.</p></div>
        <div className="v4-focus-grid">{focusAreas.map(item => <article className="v4-focus-card" key={item.number}><div className="v4-focus-top"><span>{item.number} / 03</span><item.icon size={22} strokeWidth={1.7}/></div><h3>{item.name}</h3><p>{item.description}</p><small>{item.detail}</small></article>)}</div>
      </div>
    </section>

    <section className="section-shell v4-lab-section">
      <div className="container-wide v4-lab-grid">
        <div className="v4-lab-copy"><p className="v4-section-index">04 <span>/</span> INTERACTIVE LAB</p><h2>See the policy.<br/><span>Understand the decision.</span></h2><p>One of my ongoing areas of study is identity-based application security. Explore two illustrative access decisions modeled on a controlled Zero Trust lab.</p><ul className="v4-lab-points"><li><CheckCircle2 size={16}/> Authentication and authorization are different checks</li><li><CheckCircle2 size={16}/> A valid login does not guarantee resource access</li><li><CheckCircle2 size={16}/> Scenarios are illustrative, not live telemetry</li></ul><Link href="/projects/zero-trust-enterprise" className="v4-inline-link">Read the architecture breakdown <ArrowUpRight size={17}/></Link></div>
        <div className="v4-lab-demo"><AccessDemo /></div>
      </div>
    </section>

    <section className="section-shell v4-toolkit-section">
      <div className="container-wide"><div className="v4-section-head v4-section-head-compact"><div><p className="v4-section-index">05 <span>/</span> TECHNICAL TOOLKIT</p><h2>Tools, protocols<br/><span>& practical foundations.</span></h2></div><Link href="/skills" className="v4-inline-link">View skill breakdown <ArrowUpRight size={17}/></Link></div>
      <div className="v4-toolkit-grid">{skillGroups.slice(0,4).map((group, index)=><article key={group.category} className="v4-toolkit-card"><span>0{index+1} / CAPABILITY</span><h3>{group.category}</h3><p>{group.description}</p><div>{group.items.slice(0,4).map(skill=><span key={skill.name}>{skill.name}</span>)}</div></article>)}</div>
      </div>
    </section>

    <section className="v4-contact-band"><div className="container-wide v4-contact-inner"><div><p className="v4-section-index">LET&apos;S CONNECT</p><h2>Have a project, opportunity<br/>or idea in mind?</h2><p>I&apos;m looking to contribute, learn and grow with an engineering team.</p></div><Link href="/contact" className="v4-button v4-button-primary">Start a conversation <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
