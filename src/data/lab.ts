export const labEntries = [
  {
    number: "01", slug: "identity-access", topic: "Identity & access control", title: "Why authentication and authorization must be tested separately",
    projectSlug: "zero-trust-enterprise", detail: "An authenticated identity can still be denied by application policy. The Zero Trust lab explores both outcomes using separate test accounts.",
    evidence: "Planned evidence: sanitized MFA flow, allow/deny matrix, authorization response",
  },
  {
    number: "02", slug: "network-visibility", topic: "Network visibility", title: "A failed ping is a clue, not a diagnosis",
    projectSlug: "basic-network-monitor", detail: "ICMP reachability is useful, but does not verify application health. Capturing timestamps and probing carefully creates a better troubleshooting trail.",
    evidence: "Planned evidence: log excerpts, controlled failure scenario, target inventory",
  },
  {
    number: "03", slug: "voip-signaling", topic: "Voice infrastructure", title: "Separating SIP signaling from RTP media",
    projectSlug: "asterisk-voip-lab", detail: "VoIP troubleshooting benefits from examining registration and call setup independently from the audio path.",
    evidence: "Planned evidence: sanitized SIP flow, lab topology and client configuration",
  },
] as const;
