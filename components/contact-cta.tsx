import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

export function ContactCta() {
  return <section className="cta-section"><div className="container cta-inner">
    <div className="eyebrow"><span className="eyebrow-line"/> OPEN TO OPPORTUNITIES / 2026</div>
    <h2>Let&apos;s build systems<br/><span>that matter.</span></h2>
    <div className="cta-bottom"><p>Interested in network engineering, infrastructure and security internship opportunities. Let&apos;s connect.</p><Link href="/contact" className="cta-round" aria-label="Go to contact page"><MoveUpRight size={33}/></Link></div>
    <span className="cta-corner" aria-hidden="true"><ArrowUpRight size={180} strokeWidth={0.6}/></span>
  </div></section>;
}
