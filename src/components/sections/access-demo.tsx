"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, LockKeyhole, ShieldCheck, ShieldX, UserRound, ArrowRight, Activity } from "lucide-react";

type Role = "employee" | "contractor";
const decisions = {
  employee: {
    label: "HR employee", identity: "hr.user", group: "hr-staff", result: "ACCESS GRANTED", description: "An authenticated HR user meets the illustrative policy for the protected HR application.",
    stages: ["Identity verified", "MFA confirmed", "Policy matched", "App access granted"],
  },
  contractor: {
    label: "Contractor", identity: "contractor.user", group: "external-contractors", result: "ACCESS DENIED", description: "Authentication alone does not authorize this contractor to access the protected HR application.",
    stages: ["Identity verified", "Group evaluated", "Policy not matched", "HTTP 403 returned"],
  },
} as const;

export function AccessDemo() {
  const [role, setRole] = useState<Role>("employee");
  const [selected, setSelected] = useState(2);
  const scenario = decisions[role];
  return (
    <div className="access-demo" aria-label="Interactive illustrative Zero Trust policy flow">
      <div className="demo-topline">
        <span><span className="live-pulse" aria-hidden="true" /> INTERACTIVE LAB / 01</span>
        <span>ZERO TRUST ACCESS</span>
      </div>
      <div className="demo-title-row">
        <div><p className="demo-mini-label">Explore a security decision</p><h3>Who gets access?</h3></div>
        <span className="demo-illustrative">Illustrative · Not live</span>
      </div>
      <div className="demo-roles" aria-label="Select a test identity">
        <button className={role === "employee" ? "selected" : ""} type="button" aria-pressed={role === "employee"} onClick={() => { setRole("employee"); setSelected(2); }}><UserRound size={16}/> HR employee</button>
        <button className={role === "contractor" ? "selected" : ""} type="button" aria-pressed={role === "contractor"} onClick={() => { setRole("contractor"); setSelected(2); }}><LockKeyhole size={16}/> Contractor</button>
      </div>
      <div className="demo-flow" aria-label="Access evaluation stages">
        {(["Identity", "MFA / Group", "Policy", "Resource"] as const).map((name, index) => (
          <div className="flow-step-with-arrow" key={name}>
            <button className={`demo-node ${selected === index ? "current" : ""}`} aria-pressed={selected === index} type="button"
              onClick={() => setSelected(index)} aria-label={`Inspect ${name} stage`}>
              <span className="demo-node-icon">{index === 0 ? <UserRound size={17}/> : index === 1 ? <LockKeyhole size={17}/> : index === 2 ? <ShieldCheck size={17}/> : <Activity size={17}/>}</span>
              <span>{name}</span>
              <small>0{index + 1}</small>
            </button>
            {index !== 3 && <ArrowRight className="node-arrow" size={15} aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="demo-console">
        <div className="demo-console-header"><span><span className="small-square"/> DECISION TRACE</span><span>scenario.json</span></div>
        <motion.div key={`${role}-${selected}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
          <dl className="demo-metadata">
            <div><dt>principal</dt><dd>{scenario.identity}</dd></div>
            <div><dt>group</dt><dd>{scenario.group}</dd></div>
            <div><dt>stage {selected + 1}</dt><dd>{scenario.stages[selected]}</dd></div>
          </dl>
          <div className={`demo-decision ${role === "employee" ? "allow" : "deny"}`}>
            {role === "employee" ? <Check size={18}/> : <ShieldX size={18}/>}<strong>{scenario.result}</strong>
          </div>
          <p className="demo-explanation">{scenario.description}</p>
        </motion.div>
      </div>
      <div className="demo-footer"><span><ShieldCheck size={14}/> Identity ≠ authorization</span><span>Click each stage to inspect</span></div>
    </div>
  );
}
