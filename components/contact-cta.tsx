import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactCta() {
  return <section className="atlas-contact-section" id="contact-cta"><div className="container atlas-contact-panel">
    <div><span className="atlas-section-overline"><span className="atlas-blue-pip"/> WHAT&apos;S NEXT</span><h2>Let&apos;s solve something <span>meaningful.</span></h2><p>Exploring internship opportunities in network engineering, infrastructure, and cybersecurity. I&apos;d be glad to connect.</p></div>
    <Link href="/contact" className="atlas-contact-cta">Start a conversation <ArrowUpRight size={18}/></Link>
  </div></section>;
}
