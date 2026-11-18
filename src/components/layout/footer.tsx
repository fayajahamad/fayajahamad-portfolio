import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { isVerifiedExternalLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <div>
          <Link href="/" className="footer-brand">Fayaj Ahamad<span>.</span></Link>
          <p>Building at the intersection of software, networks and security.</p>
        </div>
        <div className="footer-right">
          <nav aria-label="Footer navigation" className="footer-links">
            <Link href="/projects">Projects</Link><Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            {isVerifiedExternalLink(profile.linkedin) && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13}/></a>}
          </nav>
          <span>© {new Date().getFullYear()} {profile.displayName}</span>
        </div>
      </div>
    </footer>
  );
}
