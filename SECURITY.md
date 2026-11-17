# Security policy

This site publicly displays engineering portfolio content. It does not require privileged network access or collect visitor form submissions.

## Never commit

- Passwords, SMTP app passwords, API keys, access tokens or private keys
- Keycloak MFA QR codes, OTP seeds or recovery codes
- Production environment variables, session cookies or personal data
- Unredacted user logs or screenshots containing sensitive data

`.env*` is ignored by Git except `.env.example`.

## Before publishing lab material

Inspect both your **current files and Git history** for secrets. If a secret was committed previously, remove it from the published history using appropriate tooling **and rotate the secret**; deleting the file alone does not make it safe. Prefer isolated sample or redacted configurations.

## Reporting

Report a security issue privately to the maintainer using the contact channel listed on the GitHub profile. Avoid filing a public issue containing a live secret.
