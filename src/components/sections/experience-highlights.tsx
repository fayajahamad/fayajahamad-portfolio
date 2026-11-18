import { BriefcaseBusiness, UsersRound } from "lucide-react";
import { campusInvolvement, workExperience } from "@/data/experience";

export function ExperienceHighlights() {
  return (
    <div className="v6-credentials-grid">
      <section className="v6-credential-panel" aria-labelledby="v6-work-title">
        <div className="v6-credential-heading"><div className="v6-credential-icon"><BriefcaseBusiness size={20} aria-hidden="true" /></div><div><span className="v6-overline">EMPLOYMENT</span><h3 id="v6-work-title">Work experience</h3></div></div>
        <div className="v6-credential-items">
          {workExperience.map((item) => (
            <article className="v6-credential-item" key={item.organization}>
              <div className="v6-item-meta"><span>{item.type}</span><time>{item.period}</time></div>
              <h4>{item.organization}</h4><p className="v6-role">{item.role}</p>
              <p className="v6-note">{item.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="v6-credential-panel" aria-labelledby="v6-campus-title">
        <div className="v6-credential-heading"><div className="v6-credential-icon"><UsersRound size={20} aria-hidden="true" /></div><div><span className="v6-overline">CAMPUS COMMUNITY</span><h3 id="v6-campus-title">Leadership & involvement</h3></div></div>
        <div className="v6-credential-items">
          {campusInvolvement.map((item) => (
            <article className="v6-credential-item" key={item.organization}>
              <div className="v6-item-meta"><span>NSBM Green University</span></div>
              <h4>{item.organization}</h4><p className="v6-role">{item.role}</p>
              <p className="v6-note">{item.note}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
