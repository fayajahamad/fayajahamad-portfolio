import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { ContactCta } from "@/components/contact-cta";
import { projects } from "@/lib/projects";
export const metadata: Metadata = { title: "Selected work", description: "Hands-on network engineering and security projects, architectures and verification notes." };

export default function WorkPage() {return <>
  <section className="inner-hero"><div className="container"><span className="section-kicker"><span className="kicker-number">PORTFOLIO</span> / ENGINEERING WORK</span><div className="inner-hero-title"><h1>Selected <em>work.</em></h1><span className="inner-hero-counter">[{String(projects.length).padStart(2,"0")} PROJECTS]</span></div><p>A curated collection of hands-on security and network engineering projects. Explore the problem, architecture, implementation and evidence behind each build.</p></div></section>
  <section className="section work-directory"><div className="container"><ProjectGrid/></div></section><ContactCta/>
</>}
