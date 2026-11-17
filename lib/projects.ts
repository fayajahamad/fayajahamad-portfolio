export type ProjectCategory = "Security" | "Monitoring" | "Networking";
export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  kicker: string;
  category: ProjectCategory;
  year: string;
  status: "Prototype" | "Lab project" | "In progress";
  summary: string;
  description: string;
  role: string;
  technologies: string[];
  accent: "lime" | "blue" | "violet" | "orange";
  repo: string;
  challenge: string;
  architecture: string[];
  highlights: string[];
  verification: string[];
  nextSteps: string[];
};

// Evidence-based project descriptions. Do not claim functionality you have not tested.
export const projects: Project[] = [
  {
    slug: "zero-trust-enterprise",
    number: "01",
    title: "Zero Trust Enterprise Access",
    shortTitle: "Zero Trust Access",
    kicker: "IDENTITY / ACCESS CONTROL / OBSERVABILITY",
    category: "Security",
    year: "2026",
    status: "In progress",
    summary: "An identity-aware enterprise lab connecting Keycloak, Pomerium, a protected HR app and security monitoring.",
    description: "A practical demonstration of replacing implicit network trust with explicit identity verification and application-level authorization.",
    role: "Architecture, container deployment, access policy testing and monitoring setup",
    technologies: ["Keycloak", "Pomerium", "Docker", "MFA", "Grafana", "Loki"],
    accent: "lime",
    repo: "", // Paste exact public repo URL after checking it exists and contains no secrets.
    challenge: "Traditional network placement does not prove a user should access an internal application. The lab explores identity-centered checks before access is granted.",
    architecture: ["Browser request reaches the identity-aware Pomerium proxy", "Keycloak authenticates the user and handles MFA", "Proxy authorization policy decides whether the HR app is accessible", "Application and infrastructure logs feed the monitoring workflow"],
    highlights: ["Identity-aware application gateway", "Multi-factor authentication login flow", "Role-sensitive allow/deny tests", "Grafana and Loki observability stack", "Email alert delivery configuration"],
    verification: ["HR test account accessed the protected HR portal after MFA", "Contractor test account received a 403 authorization denial", "SMTP test notification was successfully received"],
    nextSteps: ["Finish end-to-end alert-rule firing validation", "Add reproducible policy and access integration tests", "Document threat model, architecture diagram and sanitized evidence"],
  },
  {
    slug: "enterprise-noc-stack",
    number: "02",
    title: "Enterprise NOC Monitoring Stack",
    shortTitle: "NOC Monitoring",
    kicker: "MONITORING / INCIDENT AWARENESS",
    category: "Monitoring",
    year: "2026",
    status: "Prototype",
    summary: "A network operations monitoring project exploring infrastructure health, visibility and alert workflows.",
    description: "A practical foundation for collecting useful operational signals and turning noisy infrastructure data into clear health views.",
    role: "Project implementation and documentation",
    technologies: ["Python", "Monitoring", "Docker", "Networking"],
    accent: "blue",
    repo: "https://github.com/fayajahamad/enterprise-noc-monitoring-stack",
    challenge: "Operators need early visibility into service and network health before small failures become larger incidents.",
    architecture: ["Identify devices and services to observe", "Collect reachability and health signals", "Present observations in a monitoring interface", "Use events to guide troubleshooting"],
    highlights: ["Operations-focused design", "Monitoring and troubleshooting workflow", "Network visibility as a core objective"],
    verification: ["Public GitHub repository available for source-code review"],
    nextSteps: ["Add reproducible deployment instructions", "Publish real dashboard captures", "Introduce monitored incident scenarios and test results"],
  },
  {
    slug: "pfsense-snort-lab",
    number: "03",
    title: "pfSense + Snort Security Lab",
    shortTitle: "Firewall & IDS Lab",
    kicker: "FIREWALL / NETWORK SEGMENTATION / IDS",
    category: "Security",
    year: "2026",
    status: "Lab project",
    summary: "A virtual security lab covering firewall policies, DHCP, DNS, NAT and Snort intrusion detection concepts.",
    description: "A controlled environment for understanding how network policies affect connectivity, and how defensive inspection supports visibility.",
    role: "Lab configuration, testing and documentation",
    technologies: ["pfSense", "Snort", "NAT", "DHCP", "DNS", "Firewall"],
    accent: "violet",
    repo: "https://github.com/fayajahamad/pfSense-Firewall-and-Snort-IDS-Lab",
    challenge: "Network boundaries should make permitted traffic explicit while keeping unwanted access visible and manageable.",
    architecture: ["Traffic enters a virtual network boundary", "pfSense applies configured firewall and NAT policies", "Services expose controlled DHCP/DNS connectivity", "Snort inspection supports defensive traffic analysis"],
    highlights: ["Firewall rule configuration", "Network address translation", "DHCP and DNS concepts", "Intrusion detection exploration"],
    verification: ["Public lab repository documents the intended security setup"],
    nextSteps: ["Add a sanitized policy matrix", "Capture permitted/blocked packet traces", "Write repeatable testing scenarios"],
  },
  {
    slug: "basic-network-monitor",
    number: "04",
    title: "Python Network Health Monitor",
    shortTitle: "Network Health Monitor",
    kicker: "PYTHON / RELIABILITY / NETWORKING",
    category: "Networking",
    year: "2026",
    status: "Prototype",
    summary: "A Python-based monitor for ICMP reachability, latency, uptime, logs and fault detection.",
    description: "A small but practical network visibility tool that emphasizes troubleshooting fundamentals and clear signal reporting.",
    role: "Python tooling and network-monitoring workflow",
    technologies: ["Python", "ICMP", "Latency", "Logging", "Monitoring"],
    accent: "orange",
    repo: "https://github.com/fayajahamad/basic-network-monitor",
    challenge: "Without reliable reachability and latency observations, diagnosing intermittent connectivity becomes guesswork.",
    architecture: ["Choose a target host", "Run controlled reachability checks", "Calculate latency and uptime observations", "Log changes and investigate failures"],
    highlights: ["ICMP reachability", "Latency observation", "Basic uptime and fault logging"],
    verification: ["Public GitHub repository describes the monitoring scope"],
    nextSteps: ["Add unit tests and simulated connectivity failures", "Track response-time distributions", "Export structured reports"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
