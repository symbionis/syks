# syks.co

Marketing site for **SYKS** — climate-finance infrastructure that turns corporate
decarbonisation commitments into investable, verifiable digital assets.
Geneva, Switzerland.

A Vite + React + TypeScript SPA, styled with Tailwind and shadcn/ui, served from a
Cloudflare Worker with static assets.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build
npm run test
```

## Deploy

Cloudflare Workers (`wrangler.toml`, worker name `syks`). The Worker serves the
prebuilt `dist/` via the `ASSETS` binding. Pushes to `main` deploy automatically.

```sh
npm run build
npx wrangler deploy
```

Production: <https://syks.co>

## Structure

```
src/
├── pages/              Index, Infrastructure, IntegrityCertificates, Reech,
│                       Contact, PrivacyPolicy, NotFound
├── components/         Section components — Hero, Stakeholders, TrustLayers,
│   │                   IntegrityCerts, ReechIntro, Contact, Navbar, Footer
│   └── ui/             shadcn/ui primitives
└── worker/             Cloudflare Worker entry (index.ts)
.github/workflows/      Supabase keepalive
```
