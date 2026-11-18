# Professional launch checklist

## Identity and credibility
- [ ] Confirm full name, university, year and role.
- [ ] Confirm that the user-supplied professional photograph is appropriate for publication.
- [ ] Provide verified LinkedIn URL, professional email, and optional real CV.
- [ ] Make sure all project titles and descriptions match work actually performed.
- [ ] Replace concept images with sanitized screenshots where available, keeping evidence captions accurate.
- [ ] Confirm exact repo URLs, demo URLs, test results and any certification claims.

## Engineering quality
- [ ] `npm install` completes and lockfile is committed.
- [ ] `npm run check` passes.
- [ ] `npm run build` passes.
- [ ] `npm run test:e2e` passes (after installing Playwright browsers).
- [ ] Chrome/Firefox/Safari, desktop/tablet/mobile manually reviewed.
- [ ] Keyboard navigation, screen-reader labels and reduced-motion behavior checked.
- [ ] Run Lighthouse and record **actual** LCP/INP/CLS, not estimates.
- [ ] Run `npm audit` and review findings.

## Publish
- [ ] Repository is public only after secret review.
- [ ] Vercel deployment works on every page.
- [ ] `NEXT_PUBLIC_SITE_URL` matches the actual domain.
- [ ] Check `sitemap.xml`, `robots.txt`, social previews and navigation.
- [ ] LinkedIn post includes only a deployed, tested URL.

## GitHub contribution integrity
One meaningful code or documentation commit may count as one contribution if GitHub's eligibility rules are met; file count and deployment count are not contributions. Build a credible engineering history with tested features, clear commits and reviewed changes.
