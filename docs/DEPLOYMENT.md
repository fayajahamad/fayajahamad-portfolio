# Windows PowerShell setup & deployment

## 1. Make sure Node.js works

Open a **new PowerShell** window and run:

```powershell
node --version
npm.cmd --version
```

If a command is not recognized, install the LTS version from https://nodejs.org/en/download, close PowerShell completely, and try again in a new window.

## 2. Unzip the project and run

Download the project ZIP, right click > Extract All, then move `fayaj-engineering-portfolio` to your Desktop.

```powershell
cd "$HOME\Desktop\fayaj-engineering-portfolio"
npm.cmd install
Copy-Item .env.example .env.local
npm.cmd run dev
```

Visit http://localhost:3000. To change your content, open the folder in VS Code:

```powershell
code .
```

If `code` is not recognized, open VS Code normally and choose File > Open Folder.

## 3. Make it yours

Edit `lib/site.ts`, then `lib/projects.ts`. Only add contact details you actually control. For the Zero Trust project, do not add a public repository link until you have checked the history and files for secrets, credentials, SMTP passwords, `.env` files, tokens, private IPs that should not be shared, and MFA recovery data.

Run these checks before pushing:

```powershell
npm.cmd run check
npm.cmd run build
```

## 4. Push to a *new* repository

Create a public repository named `fayaj-engineering-portfolio` at GitHub. Leave **Initialize with README** unchecked because this project includes a README. Make sure you are in the new portfolio directory, not your `fayajahamad` profile README repo.

```powershell
cd "$HOME\Desktop\fayaj-engineering-portfolio"
git init
git branch -M main
git add .
git commit -m "feat: launch network engineering portfolio foundation"
git remote add origin https://github.com/fayajahamad/fayaj-engineering-portfolio.git
git push -u origin main
```

You will need to authenticate with GitHub through your configured Git credential manager or another supported auth method. Do not paste a personal access token into a public file.

**If Git reports `remote origin already exists`, use `git remote -v` to see where it points before changing anything.**

## 5. Deploy through Vercel

1. Visit https://vercel.com/new and sign in with GitHub.
2. Import `fayaj-engineering-portfolio`.
3. Vercel should recognize Next.js automatically.
4. In Environment Variables, add `NEXT_PUBLIC_SITE_URL` = the site URL assigned to this deployment (or final custom domain).
5. Deploy. If you later edit that URL, redeploy.
6. Visit Home, Work, each case study, About, Notes and Contact. Open the site on a mobile screen. Verify `sitemap.xml` and `robots.txt`.
7. Open the Actions tab in GitHub and confirm the quality workflow succeeds.

If `NEXT_PUBLIC_SITE_URL` still points to localhost at first deployment, the site works but canonical and sitemap URLs will be incorrect until updated.

## 6. Verify Git contributions are attributed correctly

```powershell
git config user.name
git config user.email
```

The **author email must belong to your GitHub account**. If needed, set the email for this repository (prefer your GitHub-provided no-reply email):

```powershell
git config user.email "YOUR-VERIFIED-GITHUB-EMAIL"
```

Replace the placeholder; do not literally commit it. Changes to the default branch count when GitHub's conditions are satisfied, sometimes after a delay. See https://docs.github.com/en/account-and-profile/reference/profile-contributions-reference.
