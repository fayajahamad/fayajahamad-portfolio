import { Activity, ArrowRight, Fingerprint, LockKeyhole, Radio, Server, Shield, Wifi } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectVisual({ project }: {project: Project}) {
  const kind = project.slug === "zero-trust-enterprise" ? "identity" : project.slug === "enterprise-noc-stack" ? "monitor" : project.slug === "pfsense-snort-lab" ? "firewall" : "terminal";
  return <div className={`atlas-project-visual atlas-pv-${kind}`} aria-label={`Design illustration for ${project.title}; not a real screenshot`}>
    <div className="atlas-pv-top"><span><i/> ENGINEERING / {project.category.toUpperCase()}</span><span>FIG. {project.number}</span></div>
    {kind === "identity" && <div className="atlas-pv-identity">
      <div className="atlas-pv-tile"><Fingerprint size={24}/><strong>Keycloak</strong><small>IDENTITY</small></div>
      <ArrowRight size={19}/>
      <div className="atlas-pv-tile atlas-pv-tile-main"><LockKeyhole size={24}/><strong>Pomerium</strong><small>POLICY</small></div>
      <ArrowRight size={19}/>
      <div className="atlas-pv-tile"><Server size={24}/><strong>HR portal</strong><small>RESOURCE</small></div>
    </div>}
    {kind === "monitor" && <div className="atlas-pv-dashboard">
      <div className="atlas-pv-chart-top"><span><Activity size={16}/> Infrastructure signals</span><span>OBSERVABILITY</span></div>
      <svg viewBox="0 0 540 125" preserveAspectRatio="none" role="img" aria-label="Illustrative monitoring signal chart">
        <defs><linearGradient id="pvchart" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#70bfff" stopOpacity=".24"/><stop offset="1" stopColor="#70bfff" stopOpacity="0"/></linearGradient></defs>
        {[15,45,75,105].map(y => <line key={y} x1="0" y1={y} x2="540" y2={y} stroke="#415777" strokeOpacity=".35"/>)}
        <path d="M0 94 L36 90 L66 82 L93 87 L125 56 L158 62 L190 48 L222 71 L257 54 L291 63 L325 37 L362 49 L391 27 L429 48 L463 32 L496 46 L540 24 L540 125 L0 125Z" fill="url(#pvchart)"/>
        <path d="M0 94 L36 90 L66 82 L93 87 L125 56 L158 62 L190 48 L222 71 L257 54 L291 63 L325 37 L362 49 L391 27 L429 48 L463 32 L496 46 L540 24" fill="none" stroke="#7bc7ff" strokeWidth="2.2" vectorEffect="non-scaling-stroke"/>
      </svg>
      <div className="atlas-pv-chart-bottom"><span><i/> Reachability</span><span><i/> Latency</span><span><i/> Events</span></div>
    </div>}
    {kind === "firewall" && <div className="atlas-pv-policy"><div className="atlas-pv-policy-head"><Shield size={16}/> FIREWALL POLICY MATRIX <small>ILLUSTRATIVE</small></div><div><span>LAN → WAN</span><strong>ALLOW</strong></div><div><span>UNTRUSTED → ADMIN</span><strong className="blocked">DENY</strong></div><div><span>INBOUND → INSPECTION</span><strong>MONITOR</strong></div></div>}
    {kind === "terminal" && <div className="atlas-pv-terminal"><div><span className="atlas-terminal-dot"/><span className="atlas-terminal-dot"/><span className="atlas-terminal-dot"/><small>network-monitor.py</small></div><p><span>$</span> python monitor.py</p><p><Wifi size={13}/> ICMP reachability checks</p><p><Radio size={13}/> Latency observations</p><p><span>›</span> Recording signal changes<span className="atlas-cursor">_</span></p></div>}
    <div className="atlas-pv-bottom"><span>CONCEPTUAL VISUAL · NOT A LIVE CAPTURE</span><span>2026</span></div>
  </div>;
}
