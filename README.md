# GoTravelEasy.in (`presentation/gotraveleasy/`)

React + TypeScript landing page for GoTravelEasy.in, built with Vite.

## Commands
```sh
pnpm install --filter gotraveleasy   # from the repo root (workspace package)
pnpm dev                             # http://localhost:3001
pnpm build                           # outputs static site to dist/
pnpm preview
```

The build uses a relative base (`./`), so `dist/` can be hosted from any path.

Pushing to `main` builds and deploys the site to GitHub Pages through GitHub Actions. To deploy locally with `pnpm deploy:gh`, authenticate the GitHub CLI first with `gh auth login` and `gh auth setup-git`; local deployment requires a GitHub account with write access to the repository. The local deploy command clears the `gh-pages` cache before publishing so a stale cached branch cannot block deployment.

## Folder Structure
- `public/assets/` – static assets (favicon/logo)
- `src/main.tsx`, `src/App.tsx` – entry point and layout (navbar + page + footer)
- `src/pages/index.tsx` – home page composed from section components
- `src/components/` – UI sections (Hero, SearchWidget, Services, Destinations, TravelAlong, HowItWorks, Packages, Testimonials, CallToAction, Footer…) and reusable cards
- `src/lib/constants.ts` – brand & navigation config
- `src/lib/content.ts` – page content (destinations, packages, testimonials…)
- `src/index.css` – global styles
