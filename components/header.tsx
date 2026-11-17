"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Field notes" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={`${site.name}, home`}>
          <span className="brand-mark">F<span className="brand-point">/</span>A<span className="brand-dot">.</span></span>
          <span className="brand-label">NETWORK ENGINEERING<br />& CYBERSECURITY</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button type="button" className="search-trigger" aria-label="Search projects (Ctrl or Command K)" title="Search (Ctrl / Command + K)" onClick={() => window.dispatchEvent(new Event("portfolio:search"))}><Search size={17}/><span>CTRL K</span></button>
          <a href={site.github} target="_blank" rel="noreferrer" className="header-github" aria-label="Visit GitHub profile">GH / <span>fayajahamad</span></a>
          <Link className="btn btn-small btn-primary nav-cta" href="/contact">Let&apos;s connect <ArrowUpRight size={15} aria-hidden /></Link>
          <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navigation.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href}>{item.label}<ArrowUpRight size={16}/></Link>)}
        <Link onClick={() => setOpen(false)} href="/contact">Contact <ArrowUpRight size={16}/></Link>
      </nav>}
    </header>
  );
}
