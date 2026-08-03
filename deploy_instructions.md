# Build & Deploy to GitHub Pages

## Prerequisites

- **Node.js 18.17+** (Next.js 16 requires this).
  Check with `node --version`. If the version is too old, install via
  [nvm](https://github.com/nvm-sh/nvm) or
  [NodeSource](https://github.com/nodesource/distributions).
- A GitHub repository for the deployed site
  (e.g. `https://github.com/bchien21/bchien21.github.io.git`).

## 0 — View the portfolio locally

Start the development server to preview the site on your machine:

```bash
npm install   # if dependencies haven't been installed yet
npm run dev
```

Then open **http://localhost:3000** in your browser.
Changes to source files will hot-reload automatically.

## 1 — Install dependencies

Only needed the first time, or after `package.json` / `package-lock.json` changes.

```bash
npm install
```

## 2 — Build the static site

```bash
npm run build
```

This runs `next build` with `output: "export"` (set in `next.config.ts`),
which writes a fully static site to the **`out/`** folder.

## 3 — Deploy `out/` to GitHub Pages

### First-time setup (run once inside `out/`)

```bash
cd out
touch .nojekyll          # prevents GitHub from ignoring _next/ files
git init
git add .
git commit -m "Deploy portfolio"
git branch -M main
git remote add origin https://github.com/bchien21/bchien21.github.io.git
git config --local http.version HTTP/1.1
git config --local http.postBuffer 524288000
git push -u origin main -f
```

### Subsequent deploys

```bash
cd out
touch .nojekyll
git add .
git commit -m "Deploy portfolio"
git push -f origin main
```

> **Why `-f`?** Each build produces a fresh `out/` directory with no prior
> git history, so a force push replaces the previous deploy. This is
> normal for build-folder deployments.

## 4 — Enable GitHub Pages (once)

1. Go to the repository on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Choose the **main** branch and **/ (root)** folder.
4. Click **Save**.

The site will be live at **https://bchien21.github.io/** within a few minutes.

## Quick reference

| Step               | Command              |
| ------------------ | -------------------- |
| Dev server         | `npm run dev`        |
| Production build   | `npm run build`      |
| Deploy             | see step 3 above     |

## Notes

- **`basePath`**: For a **user site** (`username.github.io`), leave `basePath`
  commented out in `next.config.ts`. Only set it if deploying to a
  **project site** (e.g. `username.github.io/repo-name/`).
- **`.nojekyll`**: Required so GitHub Pages serves files and folders that
  start with an underscore (like `_next/`).
- **Custom domain**: If using one, add a `CNAME` file inside `public/`
  containing your domain, so it gets copied into `out/` on every build.
