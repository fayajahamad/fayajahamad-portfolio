import { Activity, ShieldCheck, Terminal, PhoneCall, LockKeyhole, ArrowRight, Server, Database, Router, Shield } from "lucide-react";

/** Concept graphics only: never represent these as actual lab screenshots. */
export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "basic-network-monitor") return (
    <div className="visual-body visual-monitor" role="img" aria-label="Conceptual network monitor output">
      <div className="visual-terminal"><div className="visual-toolbar"><i/><i/><i/><span>network-monitor / run</span></div>
        <div className="monitor-row"><span>192.168.1.1</span><em>reachable</em><b>12 ms</b></div>
        <div className="monitor-row"><span>192.168.1.20</span><em>reachable</em><b>23 ms</b></div>
        <div className="monitor-row is-offline"><span>192.168.1.45</span><em>timeout</em><b>—</b></div>
        <div className="signal-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      </div>
    </div>
  );
  if (slug === "password-strength-checker") return (
    <div className="visual-body visual-password" role="img" aria-label="Illustrative password analysis interface">
      <div className="visual-card"><div className="visual-card-header"><LockKeyhole size={18}/> Security analysis <span>CLI / 02</span></div>
        <div className="visual-field">••••••••••••••</div><div className="password-bars"><i/><i/><i/><i/><i className="muted"/></div>
        <div className="visual-summary"><span>Composition analysis</span><strong>Illustrative only</strong></div>
      </div>
    </div>
  );
  if (slug === "asterisk-voip-lab") return (
    <div className="visual-body visual-voip" role="img" aria-label="Simplified Asterisk SIP calling topology">
      <div className="diagram-chain"><div className="diagram-node"><PhoneCall size={25}/><small>EXT 101</small></div><div className="diagram-link"><span>SIP</span></div><div className="diagram-node center"><Server size={29}/><small>ASTERISK</small></div><div className="diagram-link"><span>SIP</span></div><div className="diagram-node"><PhoneCall size={25}/><small>EXT 102</small></div></div>
      <div className="diagram-caption">Client registration / PBX / call flow</div>
    </div>
  );
  if (slug === "pfsense-security-lab") return (
    <div className="visual-body visual-firewall" role="img" aria-label="Conceptual firewall access policy table">
      <div className="rule-panel"><div className="rule-head"><Shield size={16}/> FIREWALL POLICY <span>pfSense / LAB</span></div>
        <div className="rule-row"><span>LAN → DNS</span><b className="permitted">ALLOW</b></div><div className="rule-row"><span>GUEST → INTERNAL</span><b className="blocked">BLOCK</b></div><div className="rule-row"><span>VPN → SELECTED</span><b className="permitted">ALLOW</b></div>
        <div className="rule-foot">Example policy matrix, not a live configuration</div>
      </div>
    </div>
  );
  return (
    <div className="visual-body visual-zero" role="img" aria-label="Simplified illustrative Zero Trust enterprise access architecture">
      <div className="zero-flow"><div className="zero-node"><Router size={23}/><small>USER</small></div><ArrowRight size={18}/><div className="zero-node highlight"><ShieldCheck size={25}/><small>POLICY</small></div><ArrowRight size={18}/><div className="zero-node"><Database size={23}/><small>RESOURCE</small></div></div>
      <div className="zero-foot"><Terminal size={13}/> Keycloak + Pomerium <span><Activity size={13}/> LOGS</span></div>
    </div>
  );
}
