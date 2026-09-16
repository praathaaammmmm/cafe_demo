# Café Landing Page — Pitch Prototype

A single-page React + TypeScript + Vite landing page built to pitch a bold,
food-first identity for a casual café (sandwiches, burgers, fries, shakes,
pizza). This is a prototype: real café details are placeholders until
confirmed with the owner.

## Running locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and produce a production build
npm run preview  # preview the production build locally
```

## What to replace before this becomes a real site

All business content lives in **`src/data/cafe.ts`**. Nothing else needs to
change to update copy, links, or menu categories. Fields still holding
placeholder values:

| Field | What to do |
| --- | --- |
| `cafeName` | Replace `"[Café Name — TBD]"` with the real name. |
| `featuredDish.name` | Replace `"[Signature sandwich name — TBD]"` with the actual dish being featured. |
| `featuredDish.story` / `ingredients[].description` | Review against the real dish once confirmed — currently generic, food-forward placeholder copy. |
| `atmosphere.body` | Replace with short, client-approved copy about what it's like to visit. |
| `atmosphere.placeholderImageAlt` / the `.cafe-story__media` block in `CafeStory.tsx` | Replace the dashed placeholder box with a real café interior photo once supplied. |
| `visit.addressLines` | Replace with the real street address. |
| `visit.hours` | Replace with real opening hours. |
| `visit.directionsUrl` | Currently `undefined`. Set this to a real Google Maps (or equivalent) link — until then, the "Get directions" button intentionally renders as a disabled placeholder rather than a fake link. |
| `social` (Instagram / Facebook) | Set `url` for each once the café's real profiles are confirmed. Until then they render as inert "coming soon" text, not clickable placeholder links. |
| `order.zomatoUrl` / `order.swiggyUrl` | Currently `undefined`. Set these to the café's live Zomato/Swiggy listing URLs — until then, "Order online" shows "link coming soon" instead of a dead link. |

The five food categories (Sandwiches, Burgers, Fries, Shakes, Pizza) and their
blurbs in `categories` can be edited freely, but intentionally have no prices
or full menu — this page is an introduction to the food, not an ordering
system.

## Images

The nine food visuals used throughout the site live in `public/assets/3d/`
(copied from the source files in `assets/3d/` at the project root, which is
kept as the untouched original). They're the original supplied renders and
are used as-is — no prices, ingredients, or dish names were inferred from
them beyond what's already in `cafe.ts`.

These PNGs are fairly large (0.7–2.9MB each). No image-compression tooling
was available while building this prototype, so before a real deployment you
should compress and/or convert them to WebP/AVIF (e.g. via `squoosh` or
`cwebp`) and update the `<img>` `src` paths in `src/data/cafe.ts` and the
component files accordingly.

## Notes on scope

By design, this prototype does not include: prices, a full menu, offers or
discounts, a loyalty program, reservations, checkout/cart, user accounts, or
a contact form. "Order online" only links out to Zomato/Swiggy — it does not
process orders on this site.
