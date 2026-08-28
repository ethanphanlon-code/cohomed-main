# Deploying to cohomed.com

The Vercel project `cohomed-main` is connected to
`github.com/ethanphanlon-code/cohomed-main`, so **pushing to that repo is the
deploy**. Vercel builds automatically on every push to the default branch.

> **Do not deploy with `npx vercel --prod` instead.** It would work once, but the
> repo would still hold the old Next.js site, and the next push to `main` would
> redeploy that and wipe this out. Push the code.

---

## 1. Clone the repo somewhere outside OneDrive

OneDrive's sync layer locks files mid-write and confuses git.

```powershell
mkdir C:\dev -Force
cd C:\dev
git clone https://github.com/ethanphanlon-code/cohomed-main.git
cd cohomed-main
```

## 2. Keep the old site on a branch

The old Next.js code stays in git history either way, but a named branch makes
it trivial to look at.

```powershell
git checkout -b old-nextjs-site
git push -u origin old-nextjs-site
git checkout main
```

## 3. Clear the repo, keeping `.git`

```powershell
Get-ChildItem -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force
```

## 4. Copy the new site to the repo root

`robocopy` is used because it handles dot-files like `.gitignore`, which
`Copy-Item` skips by default.

```powershell
$src = "C:\Users\ethan\OneDrive\Documents\CoHomed Claude\v1\website"
robocopy $src . /E /XD .vercel /XF .env.local
```

`robocopy` exits with code 1 on success — that is normal, not an error.

Check it landed:

```powershell
Get-ChildItem -Force -Name
```

You should see `index.html`, `styles.css`, `vercel.json`, `assets`, and
`.gitignore`. You should **not** see `.vercel`, `.env.local`, `package.json` or
any `next.config.*`.

## 5. Commit and push

```powershell
git add -A
git status          # confirm no .env or .vercel is staged
git commit -m "Replace site with CoHomed v1 — static, pivoted content"
git push
```

Vercel picks up the push and deploys within a minute or two. Watch it at
vercel.com under the `cohomed-main` project.

---

## 6. Check the project settings

The project was created for a Next.js app, so its settings may still say so.
`vercel.json` overrides framework, build and install commands, but the **Root
Directory** setting is not overridable from the file.

**cohomed-main → Settings → Build & Deployment:**

| Setting | Should be |
|---|---|
| Framework Preset | Other |
| Root Directory | *empty* |
| Build Command | *empty / override off* |
| Output Directory | *empty / override off* |
| Install Command | *empty / override off* |

If Root Directory points at a subfolder from the old site, the deploy will
fail or serve nothing.

## 7. Point the domain

**cohomed-main → Settings → Domains.**

If `cohomed.com` and `www.cohomed.com` are already listed, nothing to do — the
push already replaced what they serve.

If not:

1. Add `www.cohomed.com`
2. Add `cohomed.com` and set it to redirect to `www.cohomed.com`
3. Follow Vercel's DNS instructions at your registrar

The site's canonical URLs all point at `https://www.cohomed.com`, so www is the
primary and the apex should redirect to it. If you would rather the apex be
primary, flip it in Vercel and tell me — the canonical tags, `sitemap.xml` and
`robots.txt` need to match, or search engines get mixed signals.

---

## 8. Verify

```
https://www.cohomed.com/            landing page
https://www.cohomed.com/how-it-works    (no .html — cleanUrls)
https://www.cohomed.com/faq
https://www.cohomed.com/privacy
https://www.cohomed.com/terms
https://www.cohomed.com/sitemap.xml
```

Hard-refresh at least once. Your browser will have the old site cached, and
`styles.css` carries a one-hour cache header.

Check on a phone too — the hero composition has its own breakpoints.

---

## Making changes later

```powershell
cd C:\dev\cohomed-main
# edit files, or run: python3 build.py   (after editing build.py)
git add -A
git commit -m "..."
git push
```

Every push to `main` deploys. Pushes to other branches get a preview URL
instead, which is the safer way to try something.

## If you need to roll back

Vercel keeps every deployment. **Deployments → find the last good one →
Promote to Production.** Instant, no git needed.
