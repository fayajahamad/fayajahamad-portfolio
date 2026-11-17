# Windows recovery for the portfolio

The original project is a Next.js application using the root `app/`, `components/`, and `lib/` directories. It has no `src/` directory, Tailwind setup, or Playwright/Vitest configuration. Do not merge this project with another Next.js starter or existing site.

## Fresh setup

1. Stop any `npm run dev` process with Ctrl+C.
2. Extract the corrected ZIP to the Desktop. Ensure there is one level of `fayaj-engineering-portfolio` inside the extracted directory.
3. Open PowerShell in that folder.
4. Run `npm.cmd install`.
5. Run `Copy-Item .env.example .env.local`.
6. Run `npm.cmd run check` and `npm.cmd run build`.
7. Run `npm.cmd run dev` and open `http://localhost:3000`.

If you had custom changes to `lib/site.ts`, `lib/projects.ts`, or `.env.local`, transfer them manually after the clean install; do not copy the entire previous folder. Don't add `.env.local` or other secrets to Git.

