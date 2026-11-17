// Centralized personal information. Edit these values before deployment.
export const site = {
  name: "Fayaj Ahamad", // Verify the spelling you want recruiters to see.
  firstName: "Fayaj",
  initials: "FA",
  title: "Network Engineering & Cybersecurity",
  description:
    "Network engineering student building secure enterprise systems, zero-trust access, and observable infrastructure.",
  location: "Sri Lanka",
  university: "Network Engineering undergraduate", // Replace with exact university/degree if desired.
  github: "https://github.com/fayajahamad",
  githubUsername: "fayajahamad",
  linkedin: "", // Add your real LinkedIn URL; unused buttons are hidden.
  email: "", // Add your real email; unused email links are hidden.
  cv: "", // Add /resume.pdf after placing a real PDF in public/.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const stack = [
  "Zero Trust", "Network Security", "Keycloak", "Pomerium", "pfSense",
  "Docker", "Grafana", "Loki", "Python", "TCP/IP", "GitHub Actions", "Next.js"
];

export const capabilities = [
  {
    num: "01",
    title: "Secure access engineering",
    description: "Designing identity-first access patterns, MFA-backed authentication and least-privilege resource access.",
    tags: ["Zero Trust", "Identity & Access", "Policy"],
  },
  {
    num: "02",
    title: "Network & infrastructure",
    description: "Working across packet analysis, routing fundamentals, segmentation, firewalls and service connectivity.",
    tags: ["TCP/IP", "pfSense", "Wireshark"],
  },
  {
    num: "03",
    title: "Observability & automation",
    description: "Building monitoring workflows, useful telemetry and repeatable infrastructure troubleshooting tools.",
    tags: ["Grafana", "Docker", "Python"],
  },
];
