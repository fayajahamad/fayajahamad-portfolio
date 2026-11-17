# Fayaj Engineering — Next.js Portfolio

A responsive, accessible network engineering and cybersecurity portfolio built with the Next.js App Router, TypeScript and custom CSS. Includes an interactive, explicitly illustrative Zero Trust topology, filterable technical project cards, in-depth case studies, field notes, public GitHub repository integration, accessible mobile navigation, security headers, SEO files and automated quality checks.

**This is a real source-code starter, not a screenshot or an imitation of another person's website.** All example project claims are intentionally conservative. Before publishing, review and update the personal information, real repository links and lab evidence.

## Features

- Responsive premium dark interface with lime-green accent and custom architectural graphics
- Interactive topology: selectable identity provider, access gateway, protected service, observability node
- Project listing, filters, four full case-study routes, and linked source repositories
- GitHub REST API integration through `/api/github` (public repository metadata, no secrets required)
- About page, practical field notes, contact page with real channel links only
- `sitemap.xml`, `robots.txt`, Open Graph metadata and an SVG favicon
- Motion respects `prefers-reduced-motion`; keyboard navigation and a skip link
- GitHub Actions CI, tests, linting, TypeScript checking and Dependabot
- No invented contribution counter, metrics, lab screenshots or contact details

## Requirements

- Node.js **20.9+** (Node.js LTS is recommended)
- npm
- Internet for the initial `npm install` and for the Google fonts downloaded by Next.js at build time

## Quick start (Windows PowerShell)

```powershell
# Extract the ZIP to Desktop, then run:
cd "$HOME\Desktop\fayaj-engineering-portfolio"
node --version
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Open http://localhost:3000. Keep the PowerShell window running. Stop with Ctrl+C.

**Important:** If `node` or `npm.cmd` is not recognized, install the **LTS version of Node.js** from https://nodejs.org/en/download, then close and reopen PowerShell and rerun `node --version`. For a clean initial install, you can keep the default installer settings.

## Personalize before publishing

1. `lib/site.ts`: verify your display name and edit `email`, `linkedin`, your degree, preferred title and `cv` link. Missing contact channels are hidden automatically.
2. `lib/projects.ts`: verify each statement against your actual labs, add real screenshots and public GitHub links **only once checked for secrets**. Keep accurate statuses.
3. `lib/notes.ts`: edit the example educational field notes, add write-ups you have actually worked on.
4. `NEXT_PUBLIC_SITE_URL` in Vercel environment variables: set the final `https://your-domain.vercel.app` URL for canonical metadata and sitemap. `GITHUB_USERNAME` defaults to `fayajahamad`.
5. If you add a CV, save it as `public/resume.pdf` and update `site.cv`. Never put your personal address, ID, passwords or MFA secrets in a repository.

## Quality checks

```powershell
npm.cmd run check
npm.cmd run build
```

The supplied GitHub workflow uses `npm ci`: after your first `npm.cmd install`, **commit the generated `package-lock.json`**. This project ZIP does not include a lockfile because package installation could not be performed in the artifact-building environment.

## Deploy

1. Create a new public GitHub repository such as `fayaj-engineering-portfolio`.
2. Push the project files, including `package-lock.json` (see `docs/DEPLOYMENT.md`).
3. In Vercel, select **Add New → Project → Import Git Repository**, choose the new repo and deploy.
4. Set `NEXT_PUBLIC_SITE_URL` to your actual Vercel domain, then redeploy.
5. Test all URLs and mobile behavior, and verify the GitHub cards load.

## Important notes

- The architecture diagrams in this project are **illustrative**. They must not be labeled as screenshots of your operating environments.
- The GitHub cards show current **public repositories**, not a contribution heatmap. A heatmap is subject to GitHub account configuration and should only show genuine activity.
- No contact form is hosted; contact links open GitHub, LinkedIn and email when configured.
- This project is authored with Next.js 16.4.6. Update dependencies deliberately and retest before deploying; never blindly adopt an unverified package version.

## Further guides

- [PowerShell setup and Vercel deployment](docs/DEPLOYMENT.md)
- [Meaningful contribution growth plan](docs/CONTRIBUTION_PLAN.md)
- [Project evidence checklist](docs/EVIDENCE_CHECKLIST.md)
- [Roadmap](ROADMAP.md)
- [Security policy](SECURITY.md)
