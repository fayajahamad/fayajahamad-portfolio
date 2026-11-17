"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Command, Search, X } from "lucide-react";
import { projects } from "@/lib/projects";

const pages = [
  { label: "Home", description: "The main engineering portfolio", href: "/", category: "PAGE" },
  { label: "All projects", description: "Explore technical case studies", href: "/work", category: "PAGE" },
  { label: "About", description: "Background and engineering approach", href: "/about", category: "PAGE" },
  { label: "Field notes", description: "Technical writing and lessons", href: "/notes", category: "PAGE" },
  { label: "Contact", description: "Internship and collaboration enquiries", href: "/contact", category: "PAGE" },
];
const entries = [ ...pages, ...projects.map(p => ({label:p.title,description:p.summary,href:`/work/${p.slug}`,category:"PROJECT"})) ];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {event.preventDefault();setOpen(v=>!v);}
      if (event.key === "Escape") setOpen(false);
    };
    const custom = () => setOpen(true);
    window.addEventListener("keydown",listener);
    window.addEventListener("portfolio:search",custom);
    return () => {window.removeEventListener("keydown",listener);window.removeEventListener("portfolio:search",custom);};
  }, []);
  useEffect(() => {if(open) input.current?.focus();}, [open]);
  const matching = useMemo(() => entries.filter(e => `${e.label} ${e.description} ${e.category}`.toLowerCase().includes(query.toLowerCase().trim())), [query]);
  const select = (href:string) => {setOpen(false);setQuery("");setIndex(0);router.push(href);};
  return <>{open && <div className="command-backdrop" onMouseDown={(event)=>{if(event.target===event.currentTarget)setOpen(false);}}>
    <section className="command-dialog" role="dialog" aria-modal="true" aria-label="Search pages and projects">
      <div className="command-input-row"><Search size={20}/><input ref={input} aria-label="Search" placeholder="Search projects, skills, pages…" value={query} onChange={(e)=>{setQuery(e.target.value);setIndex(0);}} onKeyDown={(e)=>{
        if(e.key==="ArrowDown"){e.preventDefault();setIndex(v=>Math.min(v+1,Math.max(0,matching.length-1)));}
        if(e.key==="ArrowUp"){e.preventDefault();setIndex(v=>Math.max(0,v-1));}
        if(e.key==="Enter"&&matching[index])select(matching[index].href);
      }}/><button type="button" aria-label="Close search" onClick={()=>setOpen(false)}><X size={18}/></button></div>
      <div className="command-results">{matching.length===0?<p className="command-empty">No matching pages or projects.</p>:matching.map((entry,i)=><button type="button" key={entry.href} className={`command-entry ${index===i?"selected":""}`} onMouseEnter={()=>setIndex(i)} onClick={()=>select(entry.href)}><span className="command-category">{entry.category}</span><span><strong>{entry.label}</strong><small>{entry.description}</small></span><ArrowUpRight size={16}/></button>)}</div>
      <div className="command-footer"><span><Command size={13}/> K TO OPEN</span><span>↑ ↓ TO NAVIGATE</span><span>ESC TO CLOSE</span></div>
    </section>
  </div>}</>;
}
