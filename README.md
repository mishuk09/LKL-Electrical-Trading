# LKL Electrical Trading

A single-page Next.js website with TypeScript, reusable section components, Tailwind CSS, and the supplied business photography.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build`, then `npm start`.

## Edit content

- `src/lib/business.ts`: phone, WhatsApp, address, store and map links, photo paths.
- `src/lib/reviews.json`: all 17 supplied customer reviews. Relative timestamps are deliberately not displayed because they become stale.
- `src/components/`: one file per website section. Reviews and the mobile menu are the only client components.
- `src/app/globals.css`: unchanged `:root` tokens, Tailwind theme aliases, responsive token values, and global element defaults.
- `public/images/`: website copies of the supplied images. Original reference files are preserved.

## Content to confirm before launch

- The address uses “No. 12 & 13” from layout-draft.txt. contact-details.txt instead says “No. 12, 3, 13”. Confirm the final street number with the owner.
- No confirmed email was supplied. Phone and WhatsApp are the working contact channels; no pretend contact form is included.
- Product categories link to the supplied LA Electrical Shopee storefront. Add individual product URLs/photos when available. No Shopee rating was supplied, so none is invented.
- The 4.9 rating and 131+ Google review count are supplied snapshots. Update them before launch if needed.
- The map searches the business name. Confirm the pin with the owner before launch.
- No public domain or deployment credentials were supplied. This project is local and has not been published.

## Checks

`npm run typecheck` checks TypeScript. `npm run build` creates the production Next.js build.

## Tailwind styling

Component styling lives in `className` utility strings. Theme utilities such as `bg-primary` and `text-primary` reference the original CSS variables through `@theme inline`.

- Tailwind Preflight is intentionally omitted to retain the original browser defaults.
- Exact inclusive 560px, 850px, 1100px, and 1600px boundaries use arbitrary media variants. Range variants prevent overlapping responsive values from changing the original cascade.
- Descendant variants style repeated child elements. `data-slot` attributes identify shared elements such as headings and links; they are not custom CSS classes.
- Content, contact links, component structure, menu state, review pagination, hover effects, focus styles, and reduced-motion behavior are retained.

Migration checks: production build; original-versus-Tailwind geometry, decoration, text, and link comparison at 360, 560, 561, 768, 850, 851, 1024, 1100, 1101, 1440, and 1600px; expanded mobile menu comparison; navigation closing and review wraparound checks.
