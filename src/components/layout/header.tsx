"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // A deterministic signal for browser tests: handlers are attached after hydration.
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    headerRef.current?.setAttribute("data-hydrated", "true");
  }, []);
  const active = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);
  return <header ref={headerRef} className="site-header v4-site-header">
    <div className="header-shell container-wide">
      <Link href="/" className="wordmark v4-wordmark" onClick={() => setMenuOpen(false)} aria-label="Fayaj Ahamad, home">
        <span className="v4-logo-square">F<span>.</span></span>
        <span className="v4-logo-type"><strong>FAYAJ AHAMAD</strong><small>NETWORKS · SOFTWARE · SECURITY</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(link=><Link key={link.href} href={link.href} className={`nav-link ${active(link.href)?"active":""}`} aria-current={active(link.href)?"page":undefined}>{link.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link href="/contact" className="header-contact">Let&apos;s talk <ArrowUpRight size={15}/></Link>
        <button className="mobile-menu-button icon-control" type="button" aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </div>
    {menuOpen&&<nav id="mobile-nav" aria-label="Mobile navigation" className="mobile-nav">{links.map(link=><Link key={link.href} href={link.href} className={active(link.href)?"active":""} onClick={()=>setMenuOpen(false)}>{link.label}</Link>)}<Link href="/contact" className="mobile-nav-contact" onClick={()=>setMenuOpen(false)}>Get in touch <ArrowUpRight size={16}/></Link></nav>}
  </header>;
}
