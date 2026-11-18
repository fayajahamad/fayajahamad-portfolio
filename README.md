> **V5 GOLD DESIGN:** See [DESIGN_V5.md](DESIGN_V5.md). Uploaded portrait: `/public/images/fayaj-professional-portrait.webp`.

# Fayaj Ahamad — Engineering Portfolio V4

Professional Next.js portfolio for **Fawsil Ameer Fayaj Ahamad**, a third-year Network Engineering undergraduate at NSBM Green University, Sri Lanka. Built to show practical network, Python, and security work through case studies rather than invented metrics.

## Design direction

- Refined midnight navy / slate / cyan visual identity based on colors used in the public GitHub profile (not a pixel-identical copy of any live site)
- Crisp sans-serif typography, subtle controlled depth, spacious layouts, accessible contrast
- A concrete Zero Trust system case study in the hero, not decorative "live" cybersecurity metrics
- Responsive selected-work cards and interactive, **illustrative** authorization explorer
- Dark mode by default, with a light-mode toggle

## Run locally (Windows PowerShell)

```powershell
cd "$HOME\Desktop\fayajahamad-portfolio-v4\fayajahamad-portfolio"
npm.cmd install
npm.cmd run check
npm.cmd run build
npm.cmd run dev
```

Visit `http://localhost:3000` with `npm run dev` still running.

## Edit content

- `src/data/profile.ts` — legal and display name, LinkedIn, email, university, introduction
- `src/data/projects.ts` — central typed project records; add verified evidence only
- `src/app/page.tsx` — homepage sections
- `src/app/globals.css` — layout/design system and V4 overrides
- `src/components/projects/project-visual.tsx` — illustrative project card graphics (not real screenshots)
- `public/documents/` — add a CV only if you have a real one to publish

The GitHub and LinkedIn/email URLs come from the user's public GitHub profile and should be confirmed before deployment. Project repo URLs are populated only for repos observed in the linked GitHub account; the Password Checker remains without a repository link until verified.

## Before GitHub deployment

- Check `npm.cmd run check` (ESLint + TypeScript + tests) and `npm.cmd run build`
- Verify responsive mobile and keyboard navigation
- Review all project descriptions for accuracy; replace illustrative diagrams with sanitized actual screenshots when available
- Verify public contact links and set `NEXT_PUBLIC_SITE_URL` to the real Vercel URL
- Never commit `.env.local`, credentials, private IP ranges exposing real systems, or MFA recovery codes

## Note on the reference website

The previous live portfolio at `my-portfolio-ruby-sigma-45hja9i8df.vercel.app` was not reachable through the available website inspection tool, so this project is a fresh design direction using the user's verified portfolio identity and requested style, **not a verified exact recreation**. A screenshot or original source would allow closer matching in a subsequent revision.
