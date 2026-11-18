import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({ eyebrow, title, description, link, linkLabel }: {
  eyebrow: string; title: string; description?: string; link?: string; linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-copy">
        <span className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && <Link className="text-link" href={link}>{linkLabel ?? "Explore"}<ArrowUpRight size={17} aria-hidden="true" /></Link>}
    </div>
  );
}
