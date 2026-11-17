"use client";

import Link from "next/link";
import { ArrowUpRight, Command, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const navigation = [
  { href: "/#work", label: "Projects" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Writing" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    const handleEsc = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("keydown", handleEsc);
    return () => {window.removeEventListener("scroll", update);window.removeEventListener("resize", update);window.removeEventListener("keydown", handleEsc);};
  }, []);
  return <header className="site-header atlas-header">
    <div className="container header-inner atlas-header-inner">
      <Link href="/" className="atlas-brand" aria-label={`${site.name} — homepage`} onClick={() => setOpen(false)}>
        <span className="atlas-brand-mark" aria-hidden="true">fa<span>.</span></span>
        <span className="atlas-brand-text"><strong>{site.name}</strong><small>NETWORK & SECURITY ENGINEERING</small></span>
      </Link>
      <nav className="atlas-desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "is-current" : ""}>{item.label}</Link>)}
      </nav>
      <div className="atlas-header-actions">
        <button type="button" className="atlas-search-button" title="Search projects (Ctrl+K)" aria-label="Search projects, Control or Command K" onClick={() => window.dispatchEvent(new Event("portfolio:search"))}><Search size={16}/><kbd><Command size={11}/> K</kbd></button>
        <Link href="/contact" className="atlas-contact-link">Let&apos;s connect <ArrowUpRight size={16}/></Link>
        <button type="button" className="atlas-menu-button" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
    </div>
    {open && <nav className="atlas-mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.href} onClick={() => setOpen(false)} href={item.href}>{item.label}<ArrowUpRight size={17}/></Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Contact<ArrowUpRight size={17}/></Link></nav>}
    <div className="atlas-scroll-progress" style={{width:`${progress}%`}} aria-hidden="true"/>
  </header>;
}
