# Windows setup — V4 preview (safe, separate folder)

1. Download `fayajahamad-portfolio-v4.zip`.
2. Extract the ZIP to `Desktop\FAYAJ-V4-PREVIEW`.
3. Use a new PowerShell window:

```powershell
cd "$HOME\Desktop\FAYAJ-V4-PREVIEW\fayajahamad-portfolio"
npm.cmd install
npm.cmd run check
npm.cmd run build
npm.cmd run dev
```

4. Keep PowerShell open, and visit `http://localhost:3000`.
5. To stop the server, press `Ctrl+C`.

If the browser reports `ERR_CONNECTION_REFUSED`, make sure the dev command is still running. If port 3000 is in use, use the `Local` URL shown by Next.js.

## When you like the design

Do **not** create a second git repository or replace your existing GitHub history. Instead, make a new branch in a clone of `fayajahamad/fayajahamad-portfolio`, copy the new source excluding `.git`, `.env.local`, `node_modules`, and `.next`, then review and commit the changes. The old project uses the `app/` root; remove that root in the update branch so it does not conflict with V4's `src/app/`. Run the same checks and consider a pull request before merging.
