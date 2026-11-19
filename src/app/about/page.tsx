import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, MapPin, BookOpen, Workflow } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
export const metadata: Metadata = { title: "About", description: "Background, interests and approach to software, networks and security." };
export default function AboutPage() {
  return <>
    <section className="page-intro container-wide"><h1>A practical learner.<br/><span>Curious by design.</span></h1><p>My interest lies where software development meets resilient networks and thoughtful security engineering.</p></section>
    <section className="section-shell bordered-top"><div className="container-wide about-grid">
      <div className="about-aside"><div className="profile-placeholder v5-about-portrait"><Image src="/images/fayaj-professional-portrait.webp" alt="Fayaj Ahamad in formal attire against a dark background" fill sizes="(max-width: 900px) 90vw, 330px" className="v5-about-image" /></div><div className="about-details"><p><GraduationCap size={18}/>{education.institution}</p><p><MapPin size={18}/>{profile.location}</p><p><Workflow size={18}/>{education.degree}</p></div></div>
      <div className="about-prose"><h2>Hello, I&apos;m Fayaj.</h2>{profile.about.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}<div className="about-callout"><BookOpen size={21}/><div><strong>Current focus</strong><p>Developing stronger programming and infrastructure skills while preparing for an engineering internship.</p></div></div><Link href="/projects" className="text-link">Explore the projects <ArrowUpRight size={17}/></Link></div>
    </div></section>
    <section className="section-shell v6-about-experience"><div className="container-wide v6-about-experience-inner"><div><h2>Beyond technical projects.</h2></div><Link href="/experience" className="v4-button v4-button-primary">See experience <ArrowUpRight size={17}/></Link></div></section>
    
  </>;
}
