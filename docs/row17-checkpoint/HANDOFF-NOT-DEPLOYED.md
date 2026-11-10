# Row17 handoff — NOT_DEPLOYED

Work only on San Martin’s Bridge / n20186005-hash/sanmartinsbridge. Do not claim another relay row, modify the shared master ledger, create a new Site, push to main directly, force-push or bypass CI. External publication was explicitly paused by coordinator. Resume only after materially new, explicit authorization is received.

Implementation checkout: /workspace/scratch/c1604e96291a/relay-row17-sanmartinsbridge  
Feature branch: feat/row17-attraction-expansion-20261110  
Reviewed implementation commit: d372b45a935a3537fd414899fbfaff3f4ce79f92  
Remote main and feature branch: 88ff268651cfa123b957bae0a33a8d7e84d2cbbd  
PR: none. Deploy: none. Status: QA_PASSED / NOT_DEPLOYED.

Completed: original Next.js15/React18 and all four locales retained; full bridge homepage plus San Juan de los Reyes and Santa María la Blanca independent pages in es/en/fr/zh-Hant; existing guides/legal/SEO retained and crosslinked; one H1/Explore tips/features/About→Basic/hours/tickets/transport/map/culture/routes/photos/nearby/sources; current manager hours and ticket cutoffs; no static reviews, parking/24h or station-time claims; disclaimer only on homepage footer. Museo Sefardí remains official external resource because temporary visitor-route information differs.

Preservation: all original gallery/images-1.jpg through images-13.jpg byte-identical; dimensions/SHA256 in original-assets.json. Display bridge images1–6,12, retain the other6 files without false bridge captions. New credited Commons photographs match their attractions; source/licensing in sources.md.

Checks passed: npm ci, npx tsc --noEmit, full npm run build (Next+OpenNext35 generated pages), git diff --check, independent generatedHTML12-page/30-target regression, sitemap and all13 checksums; desktop1160CSSpx and narrow400CSSpx browser checks; fixed mobile back-link overlap; language switch/theme/anchors/photos checked. Independent coordinator code review and Luna-dispatched content review found no blockers. Browser preview uses a static mirror because managed dev launcher passes unsupported Vite flags to Next; production server behavior is not yet verified.

Model dispatch: explicit gpt-6.1-sol implementation and gpt-6-luna fact/image/contentQA requests were made. Exact provider model identity was not separately exposed by spawn result/runtime, so do not claim independent verification of actual backend model strings.

External states already executed: feature branch creation at baseline; two image blobs (df24fc01cd49fa417c9c6af3d848fbc74efa2da0 and06cec7ed7b6eb0514fdff474f37baf1a7092d5c8) created but unreferenced. CLI push failed for missing credentials and did not execute. No remote tree/commit/ref update, PR, merge or deploy was sent. Do not retry any uncertain operation; all above outcomes have been resolved.

Production read-only check: homepage200 remains old version; both new routes404. Existing main’s Cloudflare check later showed failure build5103c334-9b80-46a4-9742-e2be0ffc0198; cause not investigated, no retry. Historical success build35f9847e-7cfb-4b86-8548-b9c9560ecb8b/version0a0a52fd-6c43-42e1-8452-9a2659b557fd is not this release. Service/account details are in release-audit.md.

Once authorized: recheck current refs/concurrent writers/rules/CI; publish reviewed exact source via authenticated Git or connected GitHub tree/commit/ref workflow on the feature branch (reuse existing image blob hashes); verify remote tree matches local reviewed tree; open PR; respect required checks/reviews; merge through normal workflow; observe Cloudflare success with new commit/build/version; run scripts/check-row17.mjs against production and browser desktop/mobile; only then mark VERIFIED. The independent bundle and prepared GitHub tree payload in sibling row17 checkpoint provide recovery without losing assets.
