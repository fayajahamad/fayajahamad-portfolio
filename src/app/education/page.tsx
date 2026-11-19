import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background in network engineering at NSBM Green University, Sri Lanka.",
};

export default function EducationPage() {
  return (
    <>
      <section className="page-intro container-wide m4-page-intro m4-education-intro">
        
        <h1>Solid foundations.<br /><span>Applied curiosity.</span></h1>
        <p>My academic journey provides the fundamentals I use and test in practical networking, security and software projects.</p>
      </section>
      <section className="section-shell bordered-top m4-education-section">
        <div className="container-wide">
          <div className="education-panel">
            <div className="education-icon"><GraduationCap size={30} /></div>
            <div className="education-copy">
              <span className="section-label">CURRENT EDUCATION</span>
              <h2>{education.institution}</h2>
              <p className="education-degree">{education.degree}</p>
              <p>{education.year} · {education.location}</p>
              <div className="education-focus">
                <h3>Areas of study and practical interest</h3>
                {education.focus.map((item) => <span key={item}>{item}</span>)}
              </div>
              <Link href="/projects" className="text-link">See how I apply these foundations <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          {certifications.length > 0 && (
            <div className="certification-panel">
              <h2>Certifications</h2>
              {certifications.map((certificate) => (
                <article key={`${certificate.name}-${certificate.issued}`}>
                  <h3>{certificate.name}</h3>
                  <p>{certificate.issuer} · {certificate.issued}</p>
                  {certificate.url && <a href={certificate.url} target="_blank" rel="noopener noreferrer">Verify credential <ArrowUpRight size={15} /></a>}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
