import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExperienceHighlights } from "@/components/sections/experience-highlights";

export const metadata: Metadata = {
  title: "Experience & Involvement",
  description: "Work experience and university involvement of Fayaj Ahamad, Network Engineering undergraduate at NSBM Green University.",
};

export default function ExperiencePage() {
  return <>
    <section className="page-intro container-wide v6-page-intro">
      
      <h1>Learning through work.<br/><span>Growing through people.</span></h1>
      <p>Alongside my studies and technical projects, I have gained experience through part-time and contract roles and participated in university societies.</p>
    </section>
    <section className="section-shell v6-experience-section bordered-top">
      <div className="container-wide"><ExperienceHighlights />
        <div className="v6-evidence-note"><p>Roles and dates reflect my stated experience. Detailed responsibilities, work samples and references can be added once verified.</p><Link className="v4-inline-link" href="/contact">Get in touch <ArrowUpRight size={17}/></Link></div>
      </div>
    </section>
  </>;
}
