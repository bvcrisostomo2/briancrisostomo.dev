# Portfolio

Personal portfolio — Next.js + TypeScript + Tailwind CSS, exported as a static
site and hosted on GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Edit content

Everything on the site comes from `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, headline, intro, bio, social links |
| `experience.ts` | Companies and roles (newest first) |
| `projects.ts` | Project cards — `sample: true` shows a "Sample" badge |
| `timeline.ts` | "My journey" entries on the About page |
| `skills.ts` | Skill groups and education |

## Deploy to GitHub Pages

1. Push this repo to GitHub (`<user>.github.io` for a root site, or any repo
   name for `https://<user>.github.io/<repo>/`).
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` builds and deploys; the
   correct base path is filled in automatically.
