# Ng Yi Xuan — Developer Portfolio

A clean, minimal single-page portfolio built with **React + Vite + Tailwind CSS**.

## Tech Stack
- React 18 + Vite 6
- Tailwind CSS 3
- Zero backend — fully static, deploys free to Vercel / Netlify / Cloudflare Pages

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production
```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

## Editing content
All text (about, projects, experience, skills, contact) lives in one file:
**`src/data.js`** — edit there, no need to touch components.

## Deploy to Vercel (free)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. You'll get a free `*.vercel.app` URL. Add a custom domain later if you want.

## To-do before going live
- [ ] Drop your resume PDF into `public/` as `NgYiXuan_SoftwareEngineer.pdf` (or update `resumeUrl` in `src/data.js`).
- [ ] Add the Mahjong **live demo URL** and exact repo link in `src/data.js`.
- [ ] Add the FYP repo link if it's public.
- [ ] (Optional) Add project screenshots.
