# Row 17 implementation checkpoint

- Checkout: `relay-row17-sanmartinsbridge`; branch `feat/row17-attraction-expansion-20261110`; baseline `88ff268651cfa123b957bae0a33a8d7e84d2cbbd`.
- No AGENTS.md or `.agents` skills found. Requested `orbit:software-engineering` and `orbit:sites` unavailable in the tools/skill catalog and checkout. Existing repository conventions followed.
- Model dispatch: parent explicitly requested `gpt-6.1-sol` for implementation; the sub-agent runtime did not separately expose an exact backend model identity. No further agents were spawned by the implementation agent. See release-audit.md for dispatch evidence and the Luna review role.
- Home now follows Explore (tips/features), About, Basic, opening/tickets, transport/map, architecture, route/photo advice, gallery, nearby cards, official sources/checked date.
- Added reusable typed content/component and two same-slug attraction routes across es/en/fr/zh-Hant: `/san-juan-de-los-reyes`, `/santa-maria-la-blanca`.
- Each new page includes genuine licensed photo and visible credit, one H1, translated substantial content, tips/features, About→Basic H2 adjacency, prices/current seasonal hours, transport, titled map, distinctive architecture, route/photo suggestions, nearby links, sources/date, canonical/hreflang and TouristAttraction/BreadcrumbList JSON-LD.
- All four original Spanish guides, English aliases and legal pages retained. Guide content crosslinks nearby pages; unsupported fixed transport estimates corrected. Language switching maps Spanish/English guide aliases, falls back to selected-locale home when no translated guide exists, and retains new attraction slugs.
- Unsupported rating/reviews module removed, along with fixed 24h/free parking and unsourced attribution. Original homepage footer disclaimer retained; shared footer shows it only at home, keeping legal navigation everywhere.
- All 13 original gallery files retained with exact bytes and SHA-256. Gallery displays inspected bridge images 1–6 and 12 only; other original images remain untouched. Two new correctly matched, licensed photographs added. See sources.md.

## Validation

- `npm ci`: exit 0; lockfile unchanged. Actual installed Next.js is **15.5.26**, resolved by the existing lockfile (package range remains ^15.5.24).
- `npx tsc --noEmit`: exit 0 (typescript-output.txt).
- `npm run build`: exit 0; 35 static pages generated; OpenNext worker bundled successfully (build-output.txt).
- `git diff --check`: clean.
- Direct generated-HTML checks: all 12 home/attraction locale pages have exactly one H1, adjacent About→Basic H2s, >=9 H2s (home 11/subpages 10), parseable JSON-LD, and no legacy static rating/24h/Unsplash/double-English-prefix claims.
- Sitemap generated all eight new locale routes.
- All 13 originals matched inventory byte counts and SHA-256 checksums.
- Parent owns managed browser QA, regression helper execution and release. No standalone preview server, deployment, merge, push or PR performed by this agent.

Build reports existing browser-data and adapter/Next support warnings, but completes successfully. No package/framework migration was introduced.

## Mobile QA follow-up

Parent browser QA at 400px identified the first back link behind the fixed header: the `.section` rule overrode Tailwind top-padding utilities. Scoped the first content wrapper of AttractionPage and GuidePage to inline `paddingTop: '7rem'`; no other sections changed. Re-ran TypeScript and the full production/OpenNext build successfully; refreshed both logs. Verified generated attraction and guide HTML contains `padding-top:7rem`. Parent owns final visual recheck.
