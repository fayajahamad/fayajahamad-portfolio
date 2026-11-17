# Portfolio V2 — Professional redesign

This update is designed to be applied to the working **fayajahamad-portfolio** repository while retaining your existing `.git` history.

## What changed

- Responsive, dark-navy visual language with restrained blue accents, modern sans-serif typography, spacing, and clear hierarchy.
- Redesigned homepage featuring authentic engineering case studies and more direct internship positioning.
- **Interactive Zero Trust model:** choose HR employee or contractor to see an allow or deny path; select an architecture node to inspect the control. This is **not live telemetry**.
- More professional visual treatments for identity, monitoring, firewall, and Python network projects; illustrations clearly labeled.
- Responsive navigation, scroll progress indicator, project filters, and Ctrl+K search (existing search preserved).
- Updated contact panel and styles for Work, About, Notes, and Contact pages.
- Renamed npm package to `fayajahamad-portfolio`.
- No added runtime dependencies, no Tailwind setup, and no PostCSS configuration.

## One-time installation — Windows PowerShell

**Stop the dev server first** (Ctrl+C), then run:

```powershell
cd "$HOME\Desktop\PORTFOLIO-FIXED\fayajahamad-portfolio"

# Make a local backup of existing source without touching .git
New-Item -ItemType Directory -Path "$HOME\Desktop\fayajahamad-before-redesign" -Force | Out-Null
Copy-Item app,components,package.json -Destination "$HOME\Desktop\fayajahamad-before-redesign" -Recurse -Force

# The update ZIP has files at its root, not a nested project directory
Expand-Archive -LiteralPath "$HOME\Downloads\fayajahamad-portfolio-v2-update.zip" -DestinationPath (Get-Location).Path -Force

npm.cmd run check
npm.cmd run build
npm.cmd run dev
```

Open http://localhost:3000 after the dev server starts.

**Do not** copy the full-project ZIP over your Git-managed directory. Use the *update ZIP* above. The full ZIP is a standalone backup/source distribution.

## Publish when verified

```powershell
git status --short
git add app components package.json UPGRADE_V2.md
git commit -m "feat: redesign engineering portfolio with interactive access flow"
git push origin main
```

Only run these commands after reviewing all changes and confirming no secret files are staged.

## Personalize before public launch

- `lib/site.ts`: actual LinkedIn URL, contact email, university if desired, CV path if you have a real resume.
- `lib/projects.ts`: verify project descriptions and attach sanitized screenshots / accurate repository links.
- `app/page.tsx`: revise any introduction to match your preferred positioning.
- Set `NEXT_PUBLIC_SITE_URL` to the public Vercel address after deployment.

### What the site does not claim

- The scenario selector models controlled allow/deny observations; it does not connect to or query a running Keycloak/Pomerium deployment.
- Project artwork is illustrative, not screenshots of your real infrastructure.
- GitHub activity is read from the public GitHub API; no contribution figures are fabricated.

## Build environment

This package was syntax-checked with TypeScript's TSX compiler and CSS parsed successfully. A complete `npm run build` could not be run in the packaging environment because dependency download did not complete. Use the verification commands above on your computer before deploying.
