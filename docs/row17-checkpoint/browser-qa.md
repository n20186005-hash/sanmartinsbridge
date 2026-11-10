# Independent browser QA

Date: 2026-11-10. Checked final generated HTML via the managed Sites preview daemon at http://127.0.0.1:4173/ in the cloud browser. This is an isolated static QA mirror at /workspace/scratch/c1604e96291a/relay-row17-static-qa, not a new Sites project or a deployment.

The launcher’s Next.js dev attempt failed because it appended Vite flags --host/--strictPort. Production application scripts were preserved. Actual .next/server/app HTML, public assets and .next/static were copied to the static-only QA mirror; no application source or generated content was changed in that mirror.

- Desktop: 1160 CSS px viewport; home and both new attractions inspected. Readable layout, working photos and visible license credits. French and traditional Chinese pages inspected after language switching.
- Narrow/mobile layout: 400 CSS px browser viewport using native window sizing/zoom (not a physical-device test). Home and both new attractions inspected, no horizontal overflow (document scrollWidth388 at viewport400). Initial hidden back-home link under the fixed header was repaired with scoped first-wrapper top padding and rechecked.
- Interactions: anchor navigation to opening/tickets reaches an unobscured heading; selected-language route remains the same attraction; Spanish→English→French→traditional Chinese switching observed; theme toggle changes to readable dark styling and was restored. Public map queries and credited photo sources are correct in the rendered DOM.
- Images: both new original photos load successfully, correct alt names; bridge gallery configured for inspected seven bridge images1–6,12. Off-screen images lazy-load normally.
- Static acceptance: scripts/check-row17.mjs against final mirror passed all12 changed pages,30 internal targets (old guides/legal included), all13 original checksums, JSON-LD, canonicals/hreflang, sitemap and requested headings.
- Independent reviews: coordinator read final source/generatedHTML, metadata, sources, assets and logs with no release blockers; separate Luna-dispatched content QA found no factual or translation blockers.

Production HTTP/routing and actual deployed UI remain a release gate until the existing Cloudflare integration publishes the reviewed commit. Static QA does not claim server middleware equivalence. Evidence screenshots are in the browser tool history; no local screenshot file is claimed.
