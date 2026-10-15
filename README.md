# ELAVION

A frontend-only corporate concept and editorial technology directory built with Next.js App Router, React, strict TypeScript, Tailwind CSS v4, Motion, and Lucide. All pages are exported as static HTML.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. To build and serve the static release:

```sh
npm run build
python3 -m http.server 4173 --directory out
```

`next start` is not used with static exports. The production artifacts are in `out/`.

## Structure

- `src/app`: homepage, corporate pages, five divisions, three Entertainment subpages, product and insight detail routes, metadata, sitemap, and robots.
- `src/components`: shared navigation, brand, editorial layouts, search/filter directories, product carousel, contact validation, and restrained motion.
- `src/data`: independent typed company, industry, product, and insight content. Add products here; detail routes are generated automatically.
- `public/images` and `public/fonts`: self-hosted photographs and variable fonts with source and license manifests.
- `public/branding/wing.svg`: replaceable original logo concept/favicon.
- `product-sources.json`: official product source checks, including retrieval limitations.

Gaming, Sports, and Media belong to Entertainment. The main industry taxonomy contains exactly five divisions. The catalog contains 40 third-party editorial entries. The five insight essays are clearly labeled illustrative editorial content.

## Validation

```sh
npm run typecheck
npm run lint
npm run build
npm test
```

Browser tests use Node’s built-in WebSocket client, serve the static export, and use Chrome at `/opt/google/chrome/chrome`. On another machine, set `CHROME_PATH` to your Chrome executable. Node 22+ and Python 3 are required. Tests cover local link/asset integrity, desktop and mobile navigation, scroll locking and focus restoration, product search and combined filters, product details, contact validation, insight filtering, image loading, and responsive overflow.

## Content and launch limits

- Contact is client-side validation only. Messages are not sent or persisted; no backend, database, accounts, or CMS is included.
- There are no claimed current vacancies, executives, offices, clients, corporate achievements, or partnerships.
- Product artwork uses original typographic reference panels, not fabricated product photography or unlicensed manufacturer artwork. Names and trademarks belong to their owners.
- Editorial photography does not depict actual ELAVION premises or personnel. Review the image source manifest before commercial distribution.
- The brand and legal demonstration text require trademark/domain clearance and legal review before a commercial launch.
- Source checks record sparse or blocked manufacturer pages. Recheck product availability and destinations before commercial publication.
- Set `NEXT_PUBLIC_SITE_URL` to the final canonical origin before building for another host. Static hosts must support directory indexes; configure their 404 handling for `404.html`.
- The Sites deployment is private by default. `.openai/hosting.json` preserves its Site identity and static output directory.
