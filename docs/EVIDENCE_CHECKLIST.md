# Evidence before claims: technical project checklist

A strong engineering case study is not just a list of technologies. For each project, provide:

- **Problem and constraints:** what were you protecting or monitoring, and what was out of scope?
- **Architecture:** a truthful component diagram; label mock/simulated components explicitly.
- **Implementation:** key services, configuration decisions and file paths (no secrets).
- **Threat model:** trust boundaries, identities, possible misconfigurations and security assumptions.
- **Positive test:** screenshots/logs showing the intended allow/success behavior.
- **Negative test:** deliberately denied access, blocked traffic or simulated failure.
- **Observability:** what event was captured, where it was stored and how it was interpreted.
- **Automation/CI:** test command, result, exact commit or release (if available).
- **Limitations:** development status, known gaps, environment assumptions.
- **Reproducibility:** prerequisites, isolated commands and cleanup steps.

For the **Zero Trust Enterprise Access** lab, gather a sanitized architecture diagram, an HR account's successful MFA session, contractor 403 response, Keycloak/Pomerium policy configuration with identifying details redacted, Grafana/Loki connectivity evidence, and an alert notification screenshot **only after the full rule firing is verified**. Never upload active OTP seeds, SMTP app passwords, credentials, QR codes, session tokens or sensitive logs.

For the **pfSense/Snort** lab, gather a network diagram, sanitized firewall rules, WAN/LAN mapping, blocked/allowed packet traces, and a concise explanation of any alerts observed. For the **monitoring** projects, provide a real sample execution, sample telemetry, negative-case tests and limitations.
