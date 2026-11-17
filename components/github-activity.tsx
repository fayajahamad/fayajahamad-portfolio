"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github, GitFork, Star } from "lucide-react";
import { site } from "@/lib/site";

type Repo = { id: number; name: string; description: string | null; html_url: string; stargazers_count: number; forks_count: number; language: string | null; updated_at: string };
export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "unavailable">("loading");
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github", {signal: controller.signal})
      .then(async (r) => {if (!r.ok) throw new Error("Unable to load"); return r.json();})
      .then((data: {repos: Repo[]}) => {setRepos(data.repos || []); setState("ready");})
      .catch((error) => {if (error.name !== "AbortError") setState("unavailable");});
    return () => controller.abort();
  }, []);
  return <div className="github-panel">
    <div className="github-panel-heading"><div><span className="eyebrow">PUBLIC GITHUB ACTIVITY</span><h3>Built in the open<span className="accent-dot">.</span></h3></div><a href={site.github} target="_blank" rel="noreferrer" className="text-link">VIEW PROFILE <ArrowUpRight size={16}/></a></div>
    {state === "loading" && <div className="repo-message">Loading recent public repositories…</div>}
    {state === "unavailable" && <div className="repo-message">Live GitHub data is temporarily unavailable. <a href={site.github} target="_blank" rel="noreferrer">Visit the public profile instead ↗</a></div>}
    {state === "ready" && repos.length === 0 && <div className="repo-message">No public repositories returned by GitHub right now.</div>}
    {state === "ready" && <div className="github-repo-list">{repos.map(repo => <a key={repo.id} className="github-repo" href={repo.html_url} target="_blank" rel="noreferrer">
      <div className="repo-name"><Github size={19}/><span>{repo.name}</span><ArrowUpRight size={15}/></div>
      <p>{repo.description || "Public source repository"}</p><div className="repo-data"><span>{repo.language || "Code"}</span><span><Star size={13}/>{repo.stargazers_count}</span><span><GitFork size={13}/>{repo.forks_count}</span></div>
    </a>)}</div>}
    <div className="github-panel-foot">Repository data is fetched from GitHub&apos;s public API. No contribution counts are estimated or invented.</div>
  </div>;
}
