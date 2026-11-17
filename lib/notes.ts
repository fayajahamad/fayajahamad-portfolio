export const notes = [
  {
    id: "identity-is-not-authorization", number: "01", category: "ACCESS CONTROL", time: "4 MIN READ", title: "Authentication is not authorization.",
    excerpt: "Why logging in successfully should never automatically mean access to every enterprise resource.",
    points: ["Authentication establishes who a user is; authorization decides what the user can access.", "In an identity-aware proxy, the identity provider authenticates while the gateway evaluates access policy.", "A meaningful test validates both an allowed user and an authenticated user who should still receive a 403 denial."],
    takeaway: "A successful login is one step in the security flow, not proof of permission."
  },
  {
    id: "visibility-before-automation", number: "02", category: "OBSERVABILITY", time: "3 MIN READ", title: "Visibility before automation.",
    excerpt: "A monitoring dashboard is useful only if the signals behind it are accurate and actionable.",
    points: ["Define the question each metric or log should answer.", "Start with a repeatable signal and validate that it reaches the collector.", "Test alert behavior end-to-end, including evaluation timing and notification delivery."],
    takeaway: "A screenshot of a dashboard is not a substitute for verifying the detection path."
  },
  {
    id: "firewall-rules-need-tests", number: "03", category: "NETWORK SECURITY", time: "3 MIN READ", title: "A firewall rule needs a test.",
    excerpt: "Why policy matrices, deny-path tests and packet traces matter more than the rule count.",
    points: ["Write the intended source, destination, protocol and expected action before configuration.", "Test both permitted and denied flows from the correct network segment.", "Record sanitized rule evidence and packet captures so someone else can reproduce the result."],
    takeaway: "Network policy becomes evidence-based when the observed traffic matches the intended rule."
  },
];
export function getNote(id:string) {return notes.find(n=>n.id===id);}
