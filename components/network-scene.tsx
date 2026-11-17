"use client";

import { useState } from "react";
import { Activity, CheckCheck, Fingerprint, LockKeyhole, Server } from "lucide-react";

type NodeId = "identity" | "gateway" | "service" | "telemetry";
const nodes: Record<NodeId, { title: string; detail: string; status: string }> = {
  identity: { title: "Identity provider", detail: "MFA-backed authentication", status: "IDENTITY VERIFIED" },
  gateway: { title: "Policy gateway", detail: "Least-privilege access", status: "POLICY ENFORCED" },
  service: { title: "Protected service", detail: "Internal resource boundary", status: "RESOURCE ISOLATED" },
  telemetry: { title: "Observability", detail: "Log-driven visibility", status: "SIGNALS COLLECTED" },
};
const point: Record<NodeId, { x: number; y: number }> = {
  identity: { x: 132, y: 152 }, gateway: { x: 302, y: 235 }, service: { x: 458, y: 132 }, telemetry: { x: 383, y: 362 }
};

export function NetworkScene() {
  const [selected, setSelected] = useState<NodeId>("gateway");
  return <div className="network-card" aria-label="Interactive illustration of a zero-trust architecture, not live system telemetry">
    <div className="network-card-top"><span><span className="signal-dot"/> ARCHITECTURE VISUALIZER</span><span>LAB / 001 <span className="tiny-sep">+</span></span></div>
    <div className="network-viewport">
      <div className="scene-grid"/>
      <svg viewBox="0 0 595 475" className="topology-svg" role="img" aria-label="Connections between identity, access gateway, protected service and monitoring">
        <defs>
          <linearGradient id="linegrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f6258"/><stop offset="100%" stopColor="#7bfaad" /></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <circle cx="300" cy="233" r="191" stroke="#26362f" strokeDasharray="3 10" fill="none"/>
        <circle cx="300" cy="233" r="129" stroke="#22342d" fill="none"/>
        <circle cx="300" cy="233" r="67" stroke="#21372c" fill="none"/>
        <path d="M132 152 L302 235 L458 132 M302 235 L383 362" stroke="#6d8e7a" strokeWidth="1.7" strokeDasharray="4 7" fill="none"/>
        <path d="M132 152 L302 235 L458 132" stroke="url(#linegrad)" strokeWidth="2.2" fill="none" strokeDasharray="8 240" className="moving-link"/>
        <path d="M302 235 L383 362" stroke="#7bfaad" strokeWidth="2" fill="none" strokeDasharray="6 150" className="moving-link delay"/>
        {Object.entries(point).map(([id, p]) => {
          const active = selected === id;
          return <g key={id} className="svg-node" onClick={() => setSelected(id as NodeId)} tabIndex={0} role="button" aria-label={`Select ${nodes[id as NodeId].title}`} onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") {e.preventDefault(); setSelected(id as NodeId);}}}>
            {active && <circle cx={p.x} cy={p.y} r="32" stroke="#a8f49a" strokeWidth="1" strokeDasharray="3 5" fill="none" className="ring-pulse"/>}
            <circle cx={p.x} cy={p.y} r="23" fill={active ? "#233d2d" : "#17231e"} stroke={active ? "#befc9e" : "#577060"} strokeWidth={active ? "2" : "1"}/>
            <circle cx={p.x} cy={p.y} r="5" fill={active ? "#c4ff9b" : "#89b69a"} filter={active ? "url(#glow)" : undefined}/>
          </g>;
        })}
        <g fontSize="11" fill="#a5b6aa" fontFamily="monospace" letterSpacing="1.2">
          <text x="70" y="108">01 / IDENTITY</text><text x="262" y="190">02 / GATEWAY</text><text x="424" y="87">03 / APP</text><text x="415" y="395">04 / LOGS</text>
        </g>
        <path d="M30 28 h28 M30 28 v28 M565 28 h-28 M565 28 v28 M30 447 h28 M30 447 v-28 M565 447 h-28 M565 447 v-28" fill="none" stroke="#506a5b" strokeWidth="1.5"/>
      </svg>
      <div className="topology-stamp"><span>ZERO_TRUST_TOPOLOGY</span><span>SECURE BY DESIGN / v1</span></div>
    </div>
    <div className="network-inspector">
      <div className="inspector-icon">{selected === "identity" ? <Fingerprint size={18}/> : selected === "gateway" ? <LockKeyhole size={18}/> : selected === "service" ? <Server size={18}/> : <Activity size={18}/>}</div>
      <div className="inspector-copy"><strong>{nodes[selected].title}</strong><span>{nodes[selected].detail}</span></div>
      <div className="inspector-status"><CheckCheck size={13}/>{nodes[selected].status}</div>
    </div>
    <div className="network-card-bottom"><span>● SELECT A NODE TO EXPLORE</span><span>ILLUSTRATIVE / NOT LIVE</span></div>
  </div>;
}
