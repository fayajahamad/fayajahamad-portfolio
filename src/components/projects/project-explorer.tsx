"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/content";

type Filter = "All work" | ProjectCategory;
const filters: readonly Filter[] = ["All work", "Network Security", "Python", "Infrastructure"];

export function ProjectExplorer() {
  const [filter,setFilter] = useState<Filter>("All work");
  const [search,setSearch] = useState("");
  const filtered = useMemo(() => projects.filter((p) =>
    (filter === "All work" || p.category === filter) &&
    `${p.name} ${p.summary} ${p.technologies.join(" ")}`.toLowerCase().includes(search.trim().toLowerCase())
  ), [filter, search]);
  return (
    <div className="project-explorer">
      <div className="project-explorer-tools">
        <div className="filter-tabs" role="group" aria-label="Filter projects by category">
          {filters.map((item) => <button key={item} type="button" className={filter === item ? "selected" : ""} aria-pressed={filter === item} onClick={()=>setFilter(item)}>{item}</button>)}
        </div>
        <div className="project-search"><Search size={17} aria-hidden="true"/><label className="sr-only" htmlFor="project-search-input">Search projects</label><input id="project-search-input" value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Search projects"/>{search && <button type="button" onClick={()=>setSearch("")} aria-label="Clear search"><X size={15}/></button>}</div>
      </div>
      <p className="result-count" aria-live="polite">Showing {filtered.length} of {projects.length} projects</p>
      {filtered.length ? <div className="project-grid">{filtered.map((project)=><ProjectCard project={project} key={project.slug}/>)}</div> : <div className="empty-state"><h2>No matching projects</h2><p>Try another keyword or category.</p><button type="button" className="button button-outline" onClick={()=>{setSearch("");setFilter("All work");}}>Reset filters</button></div>}
    </div>
  );
}
