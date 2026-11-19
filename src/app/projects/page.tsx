import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/projects/project-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies covering Python, software, VoIP, firewalls and identity-aware security.",
};

export default function ProjectsPage() {
  return <>
    <section className="page-intro container-wide m3-projects-intro">
      <h1>Selected work.<br/><span>Real engineering questions.</span></h1>
      <p>Every project is an opportunity to turn an idea into a working experiment, examine the trade-offs and document the outcome.</p>
    </section>
    <section className="section-shell bordered-top m3-projects-section">
      <div className="container-wide"><ProjectExplorer/></div>
    </section>
  </>;
}
