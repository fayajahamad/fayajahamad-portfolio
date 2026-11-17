"use client";

import { useState } from "react";
import { Activity, ArrowRight, Check, CircleX, Fingerprint, LockKeyhole, Server, ShieldCheck } from "lucide-react";

type Scenario = "employee" | "contractor";
type Stage = "identity" | "policy" | "resource";

const stages: Array<{ id: Stage; number: string; title: string; subtitle: string; icon: typeof Fingerprint }> = [
  { id: "identity", number: "01", title: "Identity", subtitle: "Keycloak", icon: Fingerprint },
  { id: "policy", number: "02", title: "Policy gateway", subtitle: "Pomerium", icon: LockKeyhole },
  { id: "resource", number: "03", title: "Private resource", subtitle: "HR application", icon: Server },
];

const outcomes: Record<Scenario, Record<Stage, { headline: string; description: string }>> = {
  employee: {
    identity: { headline: "Identity verified", description: "The HR test user authenticates through Keycloak with multi-factor authentication." },
    policy: { headline: "Access policy matched", description: "Pomerium evaluates the authenticated user's access to the protected resource." },
    resource: { headline: "Application available", description: "The HR test account reaches the protected HR portal after successful authentication." },
  },
  contractor: {
    identity: { headline: "Authenticated ≠ authorized", description: "The contractor test account can authenticate, but its identity does not imply HR access." },
    policy: { headline: "Access denied · HTTP 403", description: "The gateway rejects access based on the application authorization policy." },
    resource: { headline: "Application remains isolated", description: "The contractor is not permitted to reach the protected HR resource." },
  },
};

export function NetworkScene() {
  const [scenario, setScenario] = useState<Scenario>("employee");
  const [activeStage, setActiveStage] = useState<Stage>("policy");
  const blocked = scenario === "contractor";
  const result = outcomes[scenario][activeStage];

  return <section className="atlas-demo" aria-label="Interactive Zero Trust access-control lab illustration">
    <div className="atlas-demo-head">
      <div><span className="atlas-demo-pip"/><span className="atlas-demo-heading">ZERO TRUST / ACCESS FLOW</span></div>
      <span className="atlas-demo-version">INTERACTIVE LAB MODEL · 001</span>
    </div>

    <div className="atlas-demo-body">
      <div className="atlas-demo-context">
        <div><span className="atlas-micro-label">CHOOSE A TEST SCENARIO</span><strong>What happens at the gateway?</strong></div>
        <div className="atlas-scenario-tabs" role="group" aria-label="Select access-control test scenario">
          <button type="button" className={scenario === "employee" ? "is-active" : ""} onClick={() => { setScenario("employee"); setActiveStage("policy"); }} aria-pressed={scenario === "employee"}>HR employee</button>
          <button type="button" className={scenario === "contractor" ? "is-active" : ""} onClick={() => { setScenario("contractor"); setActiveStage("policy"); }} aria-pressed={scenario === "contractor"}>Contractor</button>
        </div>
      </div>

      <div className={`atlas-flow-map ${blocked ? "atlas-is-denied" : "atlas-is-allowed"}`}>
        <div className="atlas-flow-trail" aria-hidden="true" />
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return <div className="atlas-flow-item" key={stage.id}>
            <button type="button" className={`atlas-flow-node ${activeStage === stage.id ? "is-selected" : ""} ${blocked && stage.id === "resource" ? "is-blocked" : ""}`} onClick={() => setActiveStage(stage.id)} aria-pressed={activeStage === stage.id} aria-label={`Inspect ${stage.title}`}>
              <span className="atlas-node-top"><span>{stage.number} /</span><Icon size={19} strokeWidth={1.7}/></span>
              <strong>{stage.title}</strong>
              <small>{stage.subtitle}</small>
            </button>
            {index !== stages.length - 1 && <span className="atlas-flow-arrow" aria-hidden="true"><ArrowRight size={18}/></span>}
          </div>;
        })}
      </div>

      <div className="atlas-demo-observe"><Activity size={14}/><span>OBSERVABILITY LAYER</span><span className="atlas-demo-observe-line"/><span>Grafana + Loki</span></div>

      <div className={`atlas-result ${blocked ? "atlas-result-denied" : "atlas-result-allowed"}`} aria-live="polite">
        <span className="atlas-result-icon">{blocked ? <CircleX size={19}/> : <ShieldCheck size={19}/>}</span>
        <div><span className="atlas-micro-label">{blocked ? "DENY PATH" : "ALLOW PATH"} · {activeStage.toUpperCase()}</span><strong>{result.headline}</strong><p>{result.description}</p></div>
        <span className="atlas-result-badge">{blocked ? "403 / DENIED" : <><Check size={12}/> ALLOWED</>}</span>
      </div>
    </div>
    <div className="atlas-demo-foot"><span>Based on controlled project tests</span><span>Illustration — not live telemetry</span></div>
  </section>;
}
