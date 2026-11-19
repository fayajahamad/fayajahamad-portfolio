"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, X } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/content";

type Filter = "All work" | ProjectCategory;
const filters: readonly Filter[] = ["All work", "Network Security", "Python", "Infrastructure"];
const heroSlug = "zero-trust-enterprise";

export function ProjectExplorer() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [search, setSearch] = useState("");
  const prefersReducedMotion = useReducedMotion();
  // Mark React interactivity as ready; avoids test clicks on unhydrated HTML.
  const explorerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    explorerRef.current?.setAttribute("data-hydrated", "true");
  }, []);
  const isDefaultView = filter === "All work" && search.trim() === "";

  const filtered = useMemo(() => projects.filter((p) =>
    (filter === "All work" || p.category === filter) &&
    `${p.name} ${p.summary} ${p.technologies.join(" ")}`.toLowerCase().includes(search.trim().toLowerCase())
  ), [filter, search]);

  // The Zero Trust study leads only in the unfiltered gallery; data and wording remain intact.
  const displayed = useMemo(() => isDefaultView
    ? [...filtered].sort((a, b) => Number(b.slug === heroSlug) - Number(a.slug === heroSlug))
    : filtered
  , [filtered, isDefaultView]);

  return (
    <div ref={explorerRef} className="project-explorer m3-project-explorer">
      <div className="project-explorer-tools">
        <div className="filter-tabs" role="group" aria-label="Filter projects by category">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? "selected" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >{item}</button>
          ))}
        </div>
        <div className="project-search">
          <Search size={17} aria-hidden="true"/>
          <label className="sr-only" htmlFor="project-search-input">Search projects</label>
          <input
            id="project-search-input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects"
          />
          {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><X size={15}/></button>}
        </div>
      </div>
      <p className="result-count" aria-live="polite">Showing {filtered.length} of {projects.length} projects</p>
      {filtered.length ? (
        <div className={`project-grid m3-project-grid${isDefaultView ? " m3-gallery-default" : ""}`}>
          <AnimatePresence initial={false} mode="popLayout">
            {displayed.map((project) => (
              <motion.div
                key={project.slug}
                layout={!prefersReducedMotion}
                className={`m3-project-item${isDefaultView && project.slug === heroSlug ? " m3-project-feature" : ""}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10, scale: 0.985 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.38, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], layout: { duration: 0.35 } }}
              >
                <ProjectCard project={project}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="empty-state">
          <h2>No matching projects</h2>
          <p>Try another keyword or category.</p>
          <button type="button" className="button button-outline" onClick={() => { setSearch(""); setFilter("All work"); }}>Reset filters</button>
        </div>
      )}
    </div>
  );
}
