# V6 upgrade — apply to an existing GitHub Desktop clone

This update changes V5 without replacing `.git` or erasing repository history.

## Files and features

- Hero subtitle: “Network Engineering Undergraduate / Network & Security Automation” (no “Python Developer” role).
- Primary header: Lab Notes removed, Experience added, theme toggle removed.
- Fixed warm-ivory theme using `#D9B061`, `#D9C4A9`, `#D8D0C5`, `#8D6F57`, `#3F0D0C`.
- New `/experience` page and homepage cards for work and university societies.
- About page includes an experience link. Existing portfolio, case studies and photo remain.
- `next-themes` removed as an unnecessary dependency.

## Source of experience information

Medifit Pharmacy — part-time, January 2023 to present. We Are Team Rocket — Data Entry, contract, November 2025 to February 2026. NSBM Islamic Society — Faculty of Computing Coordinator. NSBM NForce Club — Member.

The dates are shown without asserting an exact contract duration, because the supplied three-month description and November–February endpoints need confirmation. No specific duties or achievements are represented without evidence.

## Windows PowerShell — safe update

Make sure the existing GitHub Desktop repository is in a clean state. Close the Next.js development server with Ctrl+C before applying the changes.

```powershell
$repo = "$HOME\Desktop\GH-PORTFOLIO-CLONE\fayajahamad-portfolio"
$update = "$HOME\Downloads\fayajahamad-portfolio-v6-update.zip"

# Validate the expected repository
if (!(Test-Path "$repo\.git") -and !(git -C $repo rev-parse --is-inside-work-tree 2>$null)) {
    throw "Repository not found; stop and verify the location in GitHub Desktop."
}
if ((git -C $repo status --porcelain)) {
    throw "Uncommitted changes found. Review or commit these before upgrading."
}

# Apply changed files while preserving .git
Expand-Archive -LiteralPath $update -DestinationPath $repo -Force

# Remove components intentionally retired in V6
Remove-Item "$repo\src\components\theme\theme-provider.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item "$repo\src\components\theme\theme-toggle.tsx" -Force -ErrorAction SilentlyContinue

cd $repo
npm.cmd install
npm.cmd run check
npm.cmd run build
npm.cmd run dev
```

If the website looks right, stop the development server and use GitHub Desktop → Changes → review all files → Commit to main → Push origin. Do not upload `node_modules`, `.next` or private environment files.

## Simple expected visual result

Warm ivory homepage, dark burgundy text, walnut and gold accents, existing portrait, two-column recruiter-focused experience section, warm light project cards, and a small burgundy closing contact band.
