# CoHomed — website

Static site. No framework, no build step on deploy, no dependencies.
Vercel serves the HTML directly.

## Files

```
index.html          landing page
how-it-works.html   the five steps in detail, with photography
faq.html            10 questions
about.html          why it exists, what was deliberately cut
contact.html        email addresses
privacy.html        privacy policy          ← needs legal review
terms.html          terms of service        ← needs legal review

styles.css          the design system — tokens, type, components
build.py            regenerates the supporting pages from a shared shell
assets/             logo files and icons
assets/screens/     real app screenshots
vercel.json         headers, caching, redirects
sitemap.xml         regenerate if you add pages
```

## Editing

`index.html` is hand-written — edit it directly.

The other pages are generated so the nav and footer stay in sync. Edit the
content in `build.py`, then:

```bash
python3 build.py
```

That rewrites the six supporting pages. It is not part of the deploy — the
committed HTML is what ships.

## Preview locally

```bash
python3 -m http.server 3000
```

Then open http://localhost:3000. Note that `cleanUrls` is a Vercel feature, so
locally you need the `.html` extension; on the deployed site `/faq` works.

## Deploy to Vercel

**Replacing the existing site**, so the order matters — deploy to a preview
first, look at it, then promote.

No global install needed; `npx` fetches the CLI on demand. **Keep the `npx`
prefix on every command** — without a global install, plain `vercel` will not
resolve.

```bash
cd website
npx vercel login    # once per machine; opens a browser to authenticate
npx vercel          # preview deploy, gives you a URL to check
npx vercel --prod   # promote to production once it looks right
```

If you'd rather have it installed permanently: `npm i -g vercel`, then open a
**new terminal** so PATH picks it up, and drop the `npx`.

### Link to the existing project, don't create a new one

On the first `npx vercel` it asks whether to link to an existing project. **Say
yes and pick the project the current cohomed site runs on.** If you create a new
project instead, this deploys to a fresh `.vercel.app` URL and the real domain
stays pointed at the old site — which looks like the deploy silently did nothing.

If you do end up with a new project, move the domain under
**Settings → Domains** on both projects: remove it from the old one first, then
add it to the new one.

### "No Next.js version detected"

The `cohomed-main` project was created for the old Next.js site, so its
dashboard settings still say Framework Preset: **Next.js**. This site has no
framework and no build step, so that fails.

`vercel.json` overrides it — `framework`, `buildCommand`, `installCommand` and
`outputDirectory` are all `null`. That should be enough on its own.

If it still fails, the project's **Root Directory** is probably pointing at the
old site's subfolder. Clear it in
**Settings → Build & Deployment → Root Directory** so it's empty, and set
**Framework Preset** to **Other** while you're there.

### Dashboard alternative

Push to Git and import the repo at vercel.com/new. Set **root directory** to
`website`, framework preset **Other**, no build command, no output directory.

### After deploying

- Confirm `/privacy` and `/terms` resolve — the app stores will ask for these
- Check the old site's URLs still land somewhere sensible; `vercel.json` already
  redirects `/blog` and `/resources`
- Hard-refresh once; the old site may be cached in your browser

## App screenshots

Real device captures live in `assets/screens/` — 1080×2400, with the bezel and
rounded corners already in the image. They need no frame of their own; the
`.shot` class just clips the black corner masking and adds the warm shadow.

```
home.png       Home, mid-journey — used in the hero
house.png      Members and ownership split
documents.png  The six-document pack
sign-in.png    Sign in
```

To refresh them, capture at the same resolution and overwrite in place. The
markup references them by filename, so nothing else changes.

## Before this goes live

- [ ] **Legal review of `privacy.html` and `terms.html`** — both are drafts
- [ ] Confirm `hello@` and `privacy@` addresses exist and are monitored
- [ ] Set the real price if `$499` is not final — it appears in `index.html`
      (twice) and `faq.html`
- [ ] Replace the App Store and Play badges once the app is published; they are
      currently dashed placeholders marked "Soon"
- [ ] Decide the canonical domain — files assume `www.cohomed.com.au`; update
      `sitemap.xml`, `robots.txt` and the `<link rel="canonical">` tags if not

## Content rules

Carried over from the app, for the same compliance reasons:

- No advice language — never "we recommend", "you should", "you qualify"
- Scheme eligibility is always framed as the user's own self-assessment against
  published criteria
- No lender or broker is named, recommended or linked
- Documents are "professionally drafted templates", **not** "legally verified" —
  that claim needs written solicitor sign-off first
