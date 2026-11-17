import { Activity, Eye, Fingerprint, GitBranch, LockKeyhole, RadioTower, ServerCog, ShieldCheck } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectVisual({ project }: {project: Project}) {
  const shape = project.slug === "zero-trust-enterprise" ? "identity" : project.slug === "enterprise-noc-stack" ? "monitor" : project.slug === "pfsense-snort-lab" ? "firewall" : "terminal";
  return <div className={`project-art art-${project.accent}`} aria-label={`Illustrative visualization for ${project.title}`}>
    <div className="art-top"><span>F/A — ENGINEERING LAB</span><span>SYS/{project.number}</span></div>
    {shape === "identity" && <div className="art-identity">
      <div className="art-tiny-node"><Fingerprint size={26}/><span>IDENTITY</span></div><div className="art-connector"/><div className="art-center-node"><LockKeyhole size={31}/><span>ACCESS PROXY</span></div><div className="art-connector"/><div className="art-tiny-node"><ServerCog size={26}/><span>RESOURCE</span></div>
    </div>}
    {shape === "monitor" && <div className="art-monitor"><div className="art-dashboard-top"><span><span className="little-light"/>SYSTEM HEALTH</span><span>OBSERVABILITY</span></div><div className="art-bars">{[35,60,44,73,52,79,62,92,57,75,43,80,67,95,55,83,64,90,78,68].map((n,i) => <i key={i} style={{height:`${n}%`}}/>)}</div><div className="art-dashboard-bottom"><span><Activity size={15}/> Monitoring signals</span><span>● ● ●</span></div></div>}
    {shape === "firewall" && <div className="art-firewall"><span className="art-path art-path-a"/><span className="art-path art-path-b"/><div className="firewall-emblem"><ShieldCheck size={64} strokeWidth={1.3}/></div><span className="art-block art-block-left"><GitBranch size={15}/> INGRESS</span><span className="art-block art-block-right"><Eye size={15}/> INSPECT</span></div>}
    {shape === "terminal" && <div className="art-terminal"><div className="art-terminal-header"><span>● ● ●</span><span>network-health.py</span></div><p><span className="terminal-prompt">$</span> python monitor.py</p><p><span className="term-success">✓</span> ICMP / target reachable</p><p><span className="term-success">✓</span> Latency signal captured</p><p><span className="terminal-prompt">→</span> Watching for state changes<span className="blinking">_</span></p></div>}
    <div className="art-bottom"><span>RESEARCH / BUILD / VERIFY</span><RadioTower size={14}/></div>
  </div>;
}
