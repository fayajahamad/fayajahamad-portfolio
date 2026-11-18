import type { Project } from "@/types/content";

/**
 * Portfolio case studies are written conservatively: no fabricated numbers or tests.
 * Add exact public repo URLs and evidence paths only after checking them.
 */
export const projects: readonly Project[] = [
  {
    slug: "basic-network-monitor", number: "01", name: "Basic Network Monitor",
    shortName: "Network Monitor", category: "Python", status: "Documentation in progress", featured: true,
    summary: "A Python utility that reads a list of hosts, checks ICMP reachability and records failures for later investigation.",
    repo: "https://github.com/fayajahamad/basic-network-monitor",
    technologies: ["Python", "ICMP / Ping", "Networking", "File I/O"],
    problem: "Intermittent host failures can be difficult to diagnose without a simple record of which systems responded and when.",
    objectives: ["Read targets from a hosts.txt file", "Check host availability using ping", "Record reachability observations and failed checks"],
    architecture: [
      { label: "Inventory", detail: "Plain-text hosts.txt identifies the targets." },
      { label: "Probe", detail: "A Python monitoring loop initiates reachability checks." },
      { label: "Record", detail: "Results and host failures are logged for review." },
    ],
    implementation: [
      "Separate host inventory from monitoring logic so test targets can change without editing the source.",
      "Use controlled subprocess-based ping checks appropriate to the operating system and handle failed commands explicitly.",
      "Record timestamps and failed checks so that an unavailable host can be investigated later.",
    ],
    challenges: ["Ping output and timeouts vary across operating systems; document which environment was tested.", "An ICMP failure does not necessarily mean an application is down."],
    validation: ["Evidence to add: sample hosts.txt, sanitized console output and a controlled unavailable-host test.", "No uptime percentages or alert-delivery claims have been published."],
    learnings: ["Python scripting for basic network operations", "The distinction between reachability and service availability"],
    nextSteps: ["Introduce unit tests with mocked ping results", "Add CSV or JSON output", "Document error handling and operating-system compatibility"],
  },
  {
    slug: "password-strength-checker", number: "02", name: "Password Strength & Entropy Checker",
    shortName: "Password Checker", category: "Python", status: "Documentation in progress", featured: true,
    summary: "A command-line Python program exploring password composition, estimated entropy and practical security guidance.",
    technologies: ["Python", "CLI", "Security Fundamentals", "Entropy"],
    problem: "Users often judge passwords by appearance without understanding the limits of simple complexity rules and entropy estimates.",
    objectives: ["Analyze password characteristics", "Explore estimates of password entropy", "Explain the limits of simplistic strength scores"],
    architecture: [
      { label: "Input", detail: "A local command-line session receives a test string." },
      { label: "Analysis", detail: "The program evaluates character composition and an entropy estimate." },
      { label: "Guidance", detail: "The output explains the assessment without claiming real-world cracking resistance." },
    ],
    implementation: [
      "Separate input handling from password-analysis calculations.",
      "Avoid writing real passwords into application logs or committing samples containing real credentials.",
      "Treat a calculated entropy value as a heuristic, not proof that a password is secure.",
    ],
    challenges: ["Human-generated passwords are often predictable even when they contain a mix of character types.", "Theoretical entropy and actual resistance to guessing are different concepts."],
    validation: ["Evidence to add: demonstration using invented example strings, edge-case tests and source-code review.", "Do not input personal account passwords into portfolio demos."],
    learnings: ["Defensive input-handling principles", "Interpreting security heuristics carefully"],
    nextSteps: ["Add automated edge-case tests", "Explore blocklists and breach-aware checking using privacy-preserving approaches"],
  },
  {
    slug: "asterisk-voip-lab", number: "03", name: "VoIP Infrastructure with Asterisk",
    shortName: "Asterisk VoIP Lab", category: "Infrastructure", status: "Documented lab", featured: true,
    summary: "A virtual Voice over IP lab exploring an Asterisk server, SIP extensions, softphone registration and RTP media flows.",
    repo: "https://github.com/fayajahamad/freebsd-asterisk-voip-lab-",
    technologies: ["FreeBSD", "Asterisk", "VirtualBox", "SIP", "RTP", "Linphone"],
    problem: "Voice applications require coordinated signaling, addressability and media connectivity across clients and a server.",
    objectives: ["Configure an Asterisk-based laboratory", "Define SIP endpoints and test client registration", "Understand the relationship between SIP signaling and RTP media"],
    architecture: [
      { label: "Softphone A", detail: "A Linphone client initiates a SIP registration or call." },
      { label: "Asterisk PBX", detail: "The VoIP server handles SIP signaling and extension configuration." },
      { label: "Softphone B", detail: "A second client participates in registration and call scenarios." },
    ],
    implementation: [
      "Set up the virtual laboratory environment and configure an Asterisk instance.",
      "Assign extension settings and configure softphone clients for registration.",
      "Inspect signaling and media paths while reviewing firewall or network behavior as needed.",
    ],
    challenges: ["SIP signaling and RTP media use different traffic patterns.", "Addressing, NAT and firewall configuration can affect call establishment and audio."],
    validation: ["Evidence to add: sanitized extension configuration, client registration output and a call-flow capture.", "Do not publish passwords, private addressing that identifies real systems, or SIP credentials."],
    learnings: ["Basics of VoIP deployment", "SIP registration, call establishment and RTP separation"],
    nextSteps: ["Publish an annotated SIP flow", "Create a reproducible lab setup checklist"],
  },
  {
    slug: "pfsense-security-lab", number: "04", name: "Firewall & Network Security Lab",
    shortName: "pfSense Security Lab", category: "Network Security", status: "Documented lab", featured: true,
    summary: "A practical pfSense laboratory focused on firewall policy, VLAN segmentation, VPN concepts and controlled network access.",
    repo: "https://github.com/fayajahamad/pfSense-Firewall-and-Snort-IDS-Lab",
    technologies: ["pfSense", "OpenVPN", "VLANs", "Routing", "Firewall Rules"],
    problem: "Enterprise networks need explicit traffic boundaries that permit necessary services while restricting unnecessary connections.",
    objectives: ["Explore routing and VLAN-based separation", "Configure and review firewall policies", "Study VPN connectivity and access restrictions"],
    architecture: [
      { label: "Client VLAN", detail: "A segmented network contains test clients." },
      { label: "pfSense", detail: "Firewall rules and routing determine allowed paths." },
      { label: "Lab services", detail: "Selected destinations provide controlled connectivity targets." },
    ],
    implementation: [
      "Create a virtual network topology and define its interfaces or logical segments.",
      "Apply policy rules and record the rationale for permitted and denied traffic.",
      "Use controlled connectivity tests to compare expected behavior with observations.",
    ],
    challenges: ["Rule order and implicit denies can change behavior unexpectedly.", "Effective VLAN isolation requires both network placement and appropriately scoped policy."],
    validation: ["Evidence to add: sanitized rule table, topology and allow/deny tests.", "Detailed rule effectiveness has not yet been independently verified for this portfolio."],
    learnings: ["Network segmentation and access boundaries", "Rule review and practical troubleshooting"],
    nextSteps: ["Prepare a network policy matrix", "Document a repeatable VPN connection test", "Add firewall logging examples with sensitive details removed"],
  },
  {
    slug: "zero-trust-enterprise", number: "05", name: "Zero Trust Enterprise Resource Access",
    shortName: "Zero Trust Access", category: "Network Security", status: "Documented lab", featured: true,
    summary: "An identity-aware access lab combining Keycloak, Pomerium, a protected HR portal and Grafana/Loki observability.",
    repo: "https://github.com/fayajahamad/securecorp-zero-trust-enterprise-lab",
    technologies: ["Keycloak", "Pomerium", "Docker", "MFA", "Grafana", "Loki"],
    problem: "A user's presence on a network should not automatically grant access to a sensitive internal application.",
    objectives: ["Require identity checks before application access", "Demonstrate role-sensitive authorization", "Add visibility into infrastructure and security events"],
    architecture: [
      { label: "Browser", detail: "A user attempts to reach the protected HR portal." },
      { label: "Pomerium", detail: "The identity-aware proxy evaluates application access policy." },
      { label: "Keycloak", detail: "Identity authentication supports an MFA-backed login flow." },
      { label: "HR Portal", detail: "The internal application is accessible only after authorization." },
      { label: "Observability", detail: "Grafana and Loki support exploration of operational and access telemetry." },
    ],
    implementation: [
      "Deploy an identity provider, access proxy and demonstration application in a controlled Docker environment.",
      "Configure distinct HR and contractor test accounts to explore least-privilege authorization.",
      "Add monitoring components and configure an email notification destination for alert tests.",
    ],
    challenges: ["Authentication and authorization are separate decisions and must be tested separately.", "Logging pipelines, alert evaluation and email delivery require independent verification."],
    validation: ["Observed in the user's local lab: HR test user completed MFA and accessed the portal.", "Observed in the user's local lab: contractor test user received HTTP 403 at the proxy.", "Observed in the user's local lab: a test SMTP email was received.", "End-to-end firing of the failed-login alert rule has not been verified here."],
    learnings: ["Identity-based access control and least privilege", "Containerized services and monitoring workflows"],
    nextSteps: ["Add sanitized screenshots and a complete access-policy matrix", "Verify end-to-end alert firing", "Document the threat model and deployment procedure"],
  },
];

export const featuredProjects = [
  projects.find((p) => p.slug === "zero-trust-enterprise")!,
  projects.find((p) => p.slug === "basic-network-monitor")!,
  projects.find((p) => p.slug === "asterisk-voip-lab")!,
  projects.find((p) => p.slug === "pfsense-security-lab")!,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
