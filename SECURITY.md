# Security guidance

This is a **public portfolio**. Never commit private keys, API tokens, real passwords, MFA recovery codes, sensitive IP addressing or unredacted service logs.

- `.env.local` and other local environment files are ignored; `.env.example` contains no secrets.
- Verify every external link and screenshot before publishing.
- An interactive access-control widget on the homepage is **illustrative**, not a live authentication system.
- Contact details are direct links only; the website does not claim to send email without an email provider.
- Basic security headers are set in `next.config.ts`. A restrictive CSP should be tested in production before enabling it; adding one blindly can break Next.js runtime features.
- Keep the lockfile and dependencies updated, and review changes to workflow files.

If you discover an issue, open a private discussion with the repository owner rather than posting confidential details in a public issue.
