# Fayaj Ahamad — Engineering Portfolio (V6)

A Next.js / TypeScript portfolio for **Fawsil Ameer Fayaj Ahamad**, a third-year Network Engineering undergraduate at NSBM Green University, Sri Lanka.

## Design

The single-theme visual identity uses the five colors provided by Fayaj:

| Color | Hex | Usage |
| --- | --- | --- |
| Heritage gold | `#D9B061` | Highlights and featured accents |
| Champagne | `#D9C4A9` | Borders and light decorative details |
| Stone | `#D8D0C5` | Soft background and neutral surfaces |
| Walnut | `#8D6F57` | Supporting type and interaction accents |
| Burgundy | `#3F0D0C` | Headlines, primary buttons and final CTA |

The portfolio opens with a **warm-ivory light design**, retains the supplied professional photograph, and does not have a light/dark toggle. Its interactive Zero Trust example is explicitly illustrative, not live telemetry.

## Pages

- `/` — hero, selected work, experience/activities, focus areas, Zero Trust lab and skills
- `/projects` and `/projects/[slug]` — projects with detailed case studies
- `/experience` — contract work, part-time work, campus leadership and club membership
- `/about`, `/skills`, `/education`, `/contact` — professional profile
- `/lab` — optional engineering notes page (not in the main navigation)

## Run locally

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run build
npm.cmd run dev
```

Open `http://localhost:3000` while the dev server remains running. Use Node.js 20.9 or newer.

## Edit the content

- `src/data/profile.ts` — identity, university, social/contact links
- `src/data/experience.ts` — employment dates and student involvement
- `src/data/projects.ts` — descriptions and links for documented projects
- `src/app/page.tsx` — homepage sections
- `src/app/globals.css` — the design system; V6 single-theme overrides are near the bottom
- `public/images/fayaj-professional-portrait.webp` — user-supplied portrait
- `src/app/experience/page.tsx` — dedicated experience page

Work dates and activities are transcribed from user-provided information. **No duties, outcomes, employers' references, certificates or project performance figures were invented.** Please review the dates of the contract role before publication because the separately stated “three months” and the listed November–February range could be interpreted differently.

## Before publishing

- Complete `npm.cmd run check` and `npm.cmd run build` successfully.
- Test the homepage, project details, experience, and contact pages on desktop and mobile.
- Verify work dates, professional email, LinkedIn and public GitHub links.
- Run `npm.cmd audit --omit=dev` and review full development dependency findings.
- Avoid committing `.env.local`, secrets, `node_modules`, `.next`, or private lab data.
- Set `NEXT_PUBLIC_SITE_URL` to the real deployment URL before launch.

## GitHub updates

Apply the V6 update files to your existing **cloned** `fayajahamad-portfolio` repo and commit normally. Do **not** run `git init`, overwrite `.git`, or force-push. One meaningful improvement generally becomes one commit, not a contribution per modified file.
