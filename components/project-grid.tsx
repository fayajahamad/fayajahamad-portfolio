"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "./project-card";

const filters: Array<"All" | ProjectCategory> = ["All", "Security", "Monitoring", "Networking"];
export function ProjectGrid({ limit }: {limit?: number}) {
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const visible = useMemo(() => {
    const filtered = category === "All" ? projects : projects.filter((p) => p.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects">
      {filters.map((filter) => <button type="button" key={filter} onClick={() => setCategory(filter)} aria-pressed={category === filter} className={`filter-chip ${category === filter ? "active" : ""}`}>{filter}<span>{filter === "All" ? projects.length : projects.filter(p => p.category === filter).length}</span></button>)}
    </div>
    <div className="projects-grid">{visible.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div>
  </>;
}
