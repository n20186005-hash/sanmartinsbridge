# Row 17 independent release checkpoint

Target: https://www.sanmartinsbridge.com/  
Repository: n20186005-hash/sanmartinsbridge  
Scope: row 17 only; no shared master ledger and no next site claimed.  
Branch: feat/row17-attraction-expansion-20261110  
Baseline main: 88ff268651cfa123b957bae0a33a8d7e84d2cbbd  
Research/check date: 2026-11-10 (task date supplied by coordinator).  
Final status: QA_PASSED / NOT_DEPLOYED. External publication explicitly paused by coordinator; wait for new, explicit authorization before push/PR/merge/deploy.

## Ownership and workflow evidence

- Fresh GitHub recheck: no open PRs/issues; main only before branch claim. Coordinator assigned this window exclusively.
- Repository permissions include push/admin; main branch reports protected=false, no repository rulesets. No .github workflow directory is tracked. Respect any later CI/review status.
- Existing production is Cloudflare Workers service `sanmartinsbridge`, account `6745ef8ef8f6e14e20dcadb70f474b0c`, via installed `cloudflare-workers-and-pages` GitHub app.
- Baseline Cloudflare check: Workers Builds: sanmartinsbridge, success; build `35f9847e-7cfb-4b86-8548-b9c9560ecb8b`, version `0a0a52fd-6c43-42e1-8452-9a2659b557fd`.
- No local Cloudflare credentials or logged-in gh CLI observed; use connected GitHub tools/normal existing Git integration for release.
- No AGENTS.md or checkout .agents/skills found. Requested orbit:software-engineering/orbit:sites packages were absent from skill catalog and searched environment. Applied available attraction-relay and Sites guidance; did not create a new Sites project.

## Models and work allocation

- `/root/row17_implementation`: explicit dispatch requested `gpt-6.1-sol`, implementation, source integration, TypeScript/build/route checks. Exact backend identity not separately returned by spawn API; do not infer from generic self-identification.
- `/root/row17_facts`: explicit dispatch requested `gpt-6-luna`, bounded official-source extraction then licensed new-image lookup. Self-report: runtime exact identity not exposed. Dispatch logs retain requested model; actual exact identity is not independently verifiable in this tool result.
- Coordinator performs independent code/content/photo review. Implementation author cannot self-authorize publication.

## Existing photographs

All 13 original public/gallery/images-1.jpg through images-13.jpg are retained byte-for-byte. Pixel dimensions, bytes and SHA-256 are in original-assets.json.
Actual pixel review: images 1–6 and 12 depict the bridge/towers (coordinator’s independent Luna QA corrected image 6 as the bridge-end defensive gateway). Images 7–11 and 13 show other Toledo gates/walls/plaza and must not be described as bridge/daybreak/night views. Keep all files; show the seven bridge images 1–6 and 12 with precise daytime/viewpoint captions. Images 7 and 9 are Puerta del Sol, 11 is Nueva Bisagra courtyard, 13 likely old Bisagra/Alfonso VI, and 8/10 remain unidentified; none is displayed as the bridge.
Original source/rights attribution was not established by repository; remove unsupported Unsplash label, do not invent credits. Existing assets retained under explicit user preservation instruction.

New licensed originals (downloaded unmodified, visual subject verified):

- public/nearby/san-juan-de-los-reyes-cloister.jpg — 4000×3000, Palickap, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Toledo,_Monasterio_de_San_Juan_de_los_Reyes,_cloister_05.jpg ; https://creativecommons.org/licenses/by-sa/4.0/
- public/nearby/santa-maria-la-blanca-interior.jpg — 3388×5140, © José Luiz Bernardes Ribeiro, CC BY-SA 3.0. https://commons.wikimedia.org/wiki/File:Interior_-_Santa_Mar%C3%ADa_la_Blanca_-_Toledo.JPG ; https://creativecommons.org/licenses/by-sa/3.0/

## Source conflicts resolved for editorial treatment

- Bridge dating: city says existed by mid-14th century; region early-14th documentation. Use 14th-century existence, avoid an invented construction date.
- Bridge region says free/acceso libre, no ticket requirement. This does not support guaranteed open 24 hours or live open status.
- San Juan and Santa María city pages show 10:00–16:45; direct visit managers show winter 10:00–17:45. Region San Juan shows 17:25, which aligns with ticket closing 20 minutes before 17:45. Cite management and distinguish closing from last entry.
- Santa María conversion dates conflict (1391 region, 1405 city, 1411 Toledo Monumental). Use later conversion to church without falsely harmonizing exact date.
- Museo Sefardí official current Nov 10–13 gallery restriction: English/Spanish differ on whether Women’s Gallery remains open; direct pages partly rate limited. Not creating a museum page in this release; avoid static old timetable promises.
- Do not retain unsupported fixed Google ratings, free parking, station walking duration, travel time, universal wheelchair/ramp or 24-hour assertions.

## Release gates

Passed: implementation, TypeScript, full Next/OpenNext build, generated HTML/internal-target regression (12 changed pages/30 targets), 13 original asset checksums, desktop1160/mobile400 browser checks, independent coordinator code review and Luna-dispatched content QA. Pending: PR/CI, normal merge/deploy and production HTTP/UI/commit verification. See semantic-static.json, browser-qa.md, build-output.txt and typescript-output.txt.


## Final external-action audit after publication pause

- Local implementation commit: d372b45a935a3537fd414899fbfaff3f4ce79f92 (reviewed code and final UI spacing repair).
- Remote feature branch was created earlier at baseline 88ff268651cfa123b957bae0a33a8d7e84d2cbbd. Read-only ref verification confirms it still points there. Main also remains there.
- CLI git push failed with missing HTTPS username / terminal prompts disabled. It did not upload a commit or move a ref; no retry was made.
- Before the pause, two connected GitHub create_blob calls were in flight. Their responses subsequently confirmed success: San Juan photo blob df24fc01cd49fa417c9c6af3d848fbc74efa2da0 and Santa María photo blob 06cec7ed7b6eb0514fdff474f37baf1a7092d5c8. These match local git-blob hashes. No tree, remote commit, PR, merge, ref update or deployment call followed. The photo blobs remain unreferenced by this feature branch.
- Read-only open-PR query returned none. No source commit was pushed remotely.
- Production read-only HTTP: homepage200 with old rating/24h text; new San Juan and Santa María routes404. See production-state-readonly.json. This implementation is not live.
- Existing Cloudflare identity remains service sanmartinsbridge, account6745ef8ef8f6e14e20dcadb70f474b0c, main baseline88ff268. A later read showed its existing main check-suite112777018846 now failure, updated2026-11-10T03:39:58Z, build5103c334-9b80-46a4-9742-e2be0ffc0198. The task did not call deploy or rerun; cause not determined. Earlier successful build/version above is historical evidence, not a new successful deployment.
- Remaining gates: explicit renewed publication authorization; connected GitHub/source publication; PR/required CI/current rules; normal merge/Cloudflare publish; production HTTP/UI and commit/version verification. Never mark VERIFIED before those pass.
