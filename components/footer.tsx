import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><div className="footer-monogram">FA<span>.</span></div><p>Engineering dependable networks.<br />Designing access with intent.</p></div>
      <div className="footer-links"><span className="eyebrow">EXPLORE</span><Link href="/work">Projects</Link><Link href="/about">About</Link><Link href="/notes">Field notes</Link></div>
      <div className="footer-links"><span className="eyebrow">CONNECT</span><a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a>{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a>}<Link href="/contact">Contact <ArrowUpRight size={13}/></Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}.</span><span>Designed & built with Next.js · {site.location}</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}
