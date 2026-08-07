# AVEDU — Master SEO Blueprint (v1)

Blueprint only. No implementation in this document.
Audited against the live codebase on 7 Aug 2026: 75 routes in `src/App.tsx`,
51 entries in `src/data/seo/seo-routes.ts`, 73 URLs in `public/sitemap.xml`.

## 0. Cross-verification: what already exists vs what is missing

| Capability | Status today | Gap |
|---|---|---|
| Route registry (single source of truth for H1/title/desc/cluster) | `src/data/seo/seo-routes.ts` (51 entries) | 24 live routes not registered; registry must become generated, not hand-listed |
| Internal linking engine (8–15 links) | `src/lib/seo/internal-links.ts` | Only registry-aware; no university→course→intent flow for unregistered pages |
| Breadcrumbs (visible + JSON-LD) | `seo-breadcrumbs.tsx` on ~35 pages | Missing on comparison/tools/blog detail; no `ItemList`/`CollectionPage` |
| Schema builders | `src/lib/seo/schema.ts` (Org, WebSite, FAQ, Course, Article, Breadcrumb, AggregateRating) | No `Review`, `VideoObject`, `ItemList`, `CollectionPage`, `EducationalOccupationalProgram` |
| Head metadata | static `index.html` + `use-seo.tsx` (client-side) | Client-side only → social crawlers see one head; canonical is sitewide `https://avedu.in/` |
| EEAT | `eeat-block.tsx` | No author entity pages, no reviewer bios, no citation pattern |
| Course clusters | `course-clusters.ts` + `course-cluster-section.tsx` (8 courses) | No fees/admission/eligibility/placement/syllabus child pages |
| University silos | 11 university pages + dynamic `:courseId` | No `/admission`, `/fees`, `/placement`, `/review`, `/scholarship`, `/eligibility` children |
| Comparison | 28 pairs via `/compare/:slug` | No course-vs-course, no university-course-vs-university-course, no filters |
| Reviews | data ready in `university-profiles.ts` | **No review pages or routes exist** |
| Admission intent pages | 6 authority pages | `/lpu-admission`-style university-intent pages missing |
| Blog | `/blog` + `blog-data.ts` | No silos, no category hubs, no cluster hub pages |
| URL shape | mixed: `/university/lpu`, `/lpu-online`, `/onlinecu`, `/uu` | Legacy shells cannibalise; need canonical shape + 301 map |
| Sitemap | `scripts/generate-sitemap.ts` → 73 URLs | Static array; needs index + per-silo sitemaps for 10k pages |
| Lead capture | counselling forms, sticky CTA, exit popup | No brochure gate, no quiz, no WhatsApp/callback rules |

**Highest-severity gaps:** duplicate university URL patterns (cannibalisation),
sitewide canonical, no review/intent pages, hand-maintained registry.

---

## PHASE 1 — Website hierarchy

```text
Home
├─ Universities (hub)
│  └─ University (pillar)
│     ├─ Courses (hub)   └─ Course (leaf)
│     ├─ Admission  ├─ Fees  ├─ Eligibility  ├─ Scholarship
│     ├─ Placement  ├─ Review  ├─ Faculty
│     ├─ Learning Method  ├─ Accreditation & Approvals
├─ Courses (hub)
│  └─ Course Category (pillar: Online MBA)
│     ├─ Fees ├─ Admission ├─ Eligibility ├─ Syllabus
│     ├─ Placement ├─ Scholarship ├─ Career ├─ Reviews
│     └─ Universities offering
├─ Compare (hub) → pair pages
├─ Blog (hub) → category hub → article
├─ News, FAQ, Tools
└─ About, Contact, Privacy, Terms, Disclaimer
```

Depth rule: no indexable page more than 3 clicks from home; every leaf reachable
from a hub listing, not only from search.

---

## PHASE 2 — URL structure

Canonical shape (lowercase, hyphens, no trailing params, no dates):

| Type | Pattern | Example |
|---|---|---|
| Universities hub | `/universities/` | |
| University pillar | `/universities/{slug}-online/` | `/universities/lpu-online/` |
| University courses hub | `/universities/{slug}-online/courses/` | |
| University course | `/universities/{slug}-online/courses/{course}/` | `.../courses/online-mba/` |
| University intent | `/universities/{slug}-online/{intent}/` | `admission`, `fees`, `eligibility`, `placement`, `scholarship`, `review`, `faculty`, `accreditation` |
| Course hub | `/courses/` | |
| Course pillar | `/courses/{course}/` | `/courses/online-mba/` |
| Course intent | `/courses/{course}/{intent}/` | `/courses/online-mba/fees/` |
| Comparison | `/compare/{a}-vs-{b}/` | `/compare/lpu-vs-manipal/` |
| Course comparison | `/compare/{a}-{course}-vs-{b}-{course}/` | `/compare/lpu-mba-vs-amity-mba/` |
| Blog hub / category / post | `/blog/`, `/blog/{category}/`, `/blog/{slug}/` | |
| Tools | `/tools/{tool}/` | |
| Legal | `/privacy-policy/`, `/terms-conditions/`, `/disclaimer/` | |

Migration: keep every current URL alive with a 301 to its canonical twin.
`/lpu-online`, `/onlinemanipal`, `/onlinecu`, `/uu`, `/vgu`, `/amityonline`,
`/ignoudistance`, `/manipal-university`, `/university/{slug}` → `/universities/{slug}-online/`.
Never leave two indexable URLs serving the same entity.

---

## PHASE 3 — Keyword mapping

One primary keyword per URL; primary keyword owns the H1 and title head.

| Page type | Primary pattern | Secondary | Question/long-tail |
|---|---|---|---|
| University pillar | `{university} online` | `{u} online degree`, `{u} distance education`, `{u} online courses` | is {u} online degree valid, {u} ugc approved |
| University course | `{u} online mba` | `{u} mba fees`, `{u} mba admission` | is {u} online mba worth it |
| University fees | `{u} online fees structure` | fee per semester, EMI | {u} mba fees 2026 |
| University admission | `{u} online admission` | last date, process, documents | how to apply {u} online |
| University review | `{u} online review` | student reviews, ratings | is {u} good for online mba |
| Course pillar | `online mba` | online mba india, online mba degree | which online mba is best |
| Course fees | `online mba fees` | cheapest online mba | online mba fees in india 2026 |
| Comparison | `{a} vs {b}` | which is better | {a} or {b} for online mba |
| Blog post | topical head term | LSI variants | question-form headings |

Intent split: commercial → pillars and comparisons; transactional → admission,
fees, brochure, apply; informational → eligibility, syllabus, career, blog.

Cannibalisation controls: (1) a keyword appears as primary exactly once in the
registry — enforce with a build-time uniqueness check on primary keyword, title
and H1; (2) intent pages never target the pillar head term; (3) blog posts never
target a commercial head term owned by a pillar — they target question and
long-tail variants and link up to the pillar.

Zero-volume topical coverage (build for authority, not volume): per-university
LMS experience, exam pattern, convocation, degree validity abroad, credit
transfer, ABC/DEB ID, semester calendar.

---

## PHASE 4 — Page templates

Common to every template: single H1, breadcrumb (visible + JSON-LD), TOC for
1500+ words, 8–15 contextual internal links, EEAT block (author + reviewer +
verified date), lead form (inline mid-page), sticky mobile CTA, FAQ block,
next-step CTA.

| Template | H1 | Core H2s | Words | Schema | Assets |
|---|---|---|---|---|---|
| Homepage | AVEDU value prop | Universities, Courses, Compare, Tools, Why AVEDU, Reviews, FAQ | 1200–1800 | Organization + WebSite + SearchAction + ItemList | hero, logos |
| University pillar | `{U} Online 2026` | Overview, Approvals, Courses, Fees, Admission, Placement, LMS, Sample degree, Reviews, Pros/Cons, FAQ | 2500–3500 | CollegeOrUniversity + Breadcrumb + FAQ + AggregateRating | logo, campus, degree, fee table |
| Course pillar | `Online {Course} 2026` | Overview, Specialisations, Eligibility, Fees by university, Admission timeline, Syllabus, Placement, Salary, Top universities, Comparison, FAQ | 3000–4000 | Course + Breadcrumb + FAQ + ItemList | timeline graphic, fee + salary tables |
| Admission | `{X} Admission 2026` | Dates, Steps, Documents, Fee payment, Confirmation, Mistakes, FAQ | 1500–2200 | HowTo-style FAQ + Breadcrumb | 5-step timeline |
| Fees | `{X} Fees 2026` | Total fee, Per-semester, EMI, Scholarships, Hidden costs, Comparison, FAQ | 1500–2000 | Offer inside Course + FAQ | fee tables, EMI calculator link |
| Eligibility | `{X} Eligibility` | Academic, Age, Work-ex, Documents, Reservation, Checker tool, FAQ | 1200–1600 | FAQ + Breadcrumb | checklist |
| Scholarship | `{X} Scholarships` | Types, Amounts, Who qualifies, How to claim, Deadlines, FAQ | 1200–1600 | FAQ | amount table |
| Placement | `{X} Placement` | Recruiters, Salary, Support, Outcomes, Alumni, FAQ | 1500–2000 | FAQ + ItemList | recruiter logos, salary chart |
| Review | `{X} Review 2026` | Rating summary, Pros/Cons, LMS, Support, Placement, Value for money, Student reviews, Verdict | 1800–2500 | Review + AggregateRating + FAQ | rating bars |
| Comparison | `{A} vs {B}` | Overview, Quick winner, Fees, Placement, Faculty, LMS, Recognition, Ranking, Scholarships, Pros/Cons, Reviews, Career, Salary, Who should choose A/B, FAQ, Verdict | 2500–3500 | Breadcrumb + FAQ + ItemList | side-by-side tables |
| Career | `Career after {Course}` | Roles, Salary bands, Industries, Skills, Growth path, FAQ | 1500–2000 | FAQ | salary chart |
| Blog post | topical | intent-led H2s | 1200–2500 | Article + Breadcrumb + FAQ | 1 image / 500 words |
| FAQ hub | `AVEDU FAQs` | grouped by silo | 1000+ | FAQPage | — |

CTA locations (fixed for every template): hero, after first table, mid-article
inline form, before FAQ, end-of-page next step, sticky mobile bar, exit intent.

---

## PHASE 5 — Internal linking blueprint

Directed flow, enforced in the linking engine rather than hand-authored:

```text
Home → Universities hub → University pillar → University course
                              ↓                     ↓
                         intent pages ←→  Course pillar → course intent pages
                              ↓                     ↓
                        Comparison pairs  ←→   Blog cluster
                              ↓
                    Related universities / related courses → Lead form
```

Rules: 8–15 contextual links per page; every hub links to all children;
every child links back to its hub and to 2 siblings; every leaf links to at
least 1 comparison and 1 blog; blog posts link up to exactly 1 pillar plus 2
intent pages; anchors are keyword-descriptive, never "click here"; no page
receives zero internal links (orphan check in build); link depth ≤ 3.

---

## PHASE 6 — Topical authority clusters

Per course pillar (repeat for MBA, MCA, MCom, MA, BBA, BCA, BCom, BA, and later
M.Sc, BA JMC, MSW, PGDM):

```text
/courses/online-mba/  (pillar)
├─ fees ├─ admission ├─ eligibility ├─ syllabus ├─ placement
├─ scholarship ├─ career ├─ reviews ├─ specialisations
├─ universities-offering ├─ comparison hub
└─ 10–15 blog posts (best online MBA, worth it, vs regular, for working professionals…)
```

Pillar links to all children; children link to pillar + 2 siblings. Publish the
pillar first, then children in fees → admission → eligibility → placement order.

---

## PHASE 7 — University silos

Per university (LPU, Manipal/MUJ, MAHE, Amity, NMIMS, Jain, DY Patil,
Chandigarh, IGNOU, DU SOL, Symbiosis, Sikkim Manipal, VGU, Uttaranchal,
Mangalayatan + future additions):

```text
/universities/{slug}-online/
├─ courses/ → online-mba, online-mca, online-bba, online-bca, online-bcom, online-ma…
├─ admission ├─ fees ├─ eligibility ├─ scholarship
├─ placement ├─ review ├─ faculty ├─ accreditation
└─ comparisons involving this university
```

Silo hygiene: cross-silo links only via comparison pages and course pillars, so
university authority stays concentrated.

---

## PHASE 8 — Comparison architecture

Three families:
1. University vs University — `/compare/lpu-vs-manipal/` (all viable pairs of the top ~15).
2. University course vs university course — `/compare/lpu-mba-vs-amity-mba/` (top 6 courses × top pairs).
3. Course vs course — `/compare/online-mba-vs-online-mca/`, `online vs distance`, `online vs regular`.

Generate pairs from data, but publish only pairs with real search demand or
counselling relevance; keep the rest `noindex` until demand appears.
Comparison tables: fees, duration, approvals, LMS, placement support, exam mode,
EMI, scholarships, ratings. Filters on the comparison hub: course, budget,
approval body, mode, duration, rating.

---

## PHASE 9 — Blog strategy

Silos with a category hub each: Admissions, Career, Placements, Scholarships,
Education Loans, Rankings, Exam Updates, Course Guides, University News,
Education Trends.

Each silo ships as a cluster: 1 hub + 8–12 posts interlinked, all pointing up to
the relevant course or university pillar. News/exam-update posts carry
`dateModified` and are refreshed each admission cycle rather than duplicated.

---

## PHASE 10 — Schema blueprint

| Page | Schema graph |
|---|---|
| Sitewide (`index.html`) | Organization/EducationalOrganization + WebSite + SearchAction |
| Every page | BreadcrumbList |
| Universities hub | CollectionPage + ItemList |
| University pillar | CollegeOrUniversity + AggregateRating + FAQPage |
| Course hub | CollectionPage + ItemList |
| Course pillar | Course + EducationalOccupationalProgram + FAQPage |
| Fees | Course→Offer (INR) |
| Admission / Eligibility | FAQPage (+ HowTo where steps are literal) |
| Review | Review + AggregateRating (only for genuinely collected ratings) |
| Comparison | ItemList + FAQPage |
| Blog post | Article + FAQPage |
| Video present | VideoObject |

Emit one `@graph` per page via the existing `schemaGraph` helper; never duplicate
Organization per page — reference it by `@id`.

---

## PHASE 11 — Navigation blueprint

- Header: floating, logo → home, primary items Universities / Courses / Compare / Tools / Blog.
- Mega menu: 3 columns — top universities, top courses, intent shortcuts (fees, admission, scholarships) — real crawlable links.
- Footer: full silo map — all universities, all courses, intent hubs, tools, legal.
- Sidebar (pillars): sticky TOC + related links + lead form.
- Breadcrumbs: every page except home, matching JSON-LD.
- Related content: 8–15 links, cluster-aware, above the footer.
- Sticky nav on long pages; mobile drawer mirroring the mega menu, plus sticky CTA bar.

---

## PHASE 12 — Metadata rules

- Title ≤ 60 chars: `{Primary Keyword} 2026 | {Modifier} | AVEDU`; unique sitewide.
- Description ≤ 155 chars, contains primary keyword + a differentiator + a verb CTA.
- Exactly one H1 per page = primary keyword, human phrased.
- Canonical: self-referencing per route (current sitewide `https://avedu.in/` canonical must be replaced).
- Robots: `index,follow` for all templates; `noindex,follow` for search results, filtered/paginated states, thin generated comparisons, tools output, dashboard.
- OG/Twitter: per-page title/description/url, `summary_large_image`, 1200×630.
- Pagination: `?page=n` with self-canonical and `noindex,follow` beyond page 1; hub content stays on page 1.
- Indexing: nothing enters the sitemap until it has final content; sitemap index split by silo (`sitemap-universities.xml`, `-courses`, `-compare`, `-blog`) once past ~2,000 URLs; `lastmod` only from real content-change timestamps.
- Note: current head metadata is client-side (SPA), so per-page social previews are not visible to non-JS crawlers. Accurate per-page previews require SSR — [what the upgrade gives you](https://lovable.dev/blog/building-apps-using-tanstack-start).

---

## PHASE 13 — Content rules

Word counts per Phase 4. Images: 1 per 400–500 words, descriptive alt with entity
name, lazy-loaded, WebP. Video: 1 explainer near the top of pillars, with
VideoObject. Tables for every fee/eligibility/comparison data set. Pros & Cons on
university, course and comparison pages. 6–10 FAQs per page drawn from real
queries. Author box with a real named author and a named reviewer plus
"verified on" date. Citations to UGC/DEB/university official pages for every
approval, fee and placement claim; no invented ratings, salaries or testimonials.
EEAT additions needed: author entity pages, reviewer credentials, editorial
policy page, contact and about with real details, review-collection method
disclosed.

---

## PHASE 14 — Lead generation strategy

Inline form (mid-page), brochure download gated on name + phone + course,
WhatsApp CTA on mobile, callback request with time slot, sticky bottom bar on
mobile, floating desktop button, exit-intent offer (fee comparison PDF), and a
course recommendation quiz feeding a pre-filled form. One primary CTA per
viewport; every form writes lead source = URL + silo + course for attribution.

---

## PHASE 15 — Implementation roadmap

**Phase 1 — Critical (weeks 1–3).** URL canonicalisation + 301 map for legacy
shells; per-route self-canonical; register all 75 routes; unique title/desc/H1
uniqueness check; breadcrumbs everywhere; sitemap index; fix orphan pages.

**Phase 2 — High (weeks 4–8).** University intent pages (admission, fees,
eligibility, placement, scholarship) for the top 8 universities; review pages
from existing `university-profiles.ts`; course intent pages for MBA/MCA/BBA.

**Phase 3 — Growth (months 3–5).** Comparison expansion to the full 20-section
template; course-vs-course family; blog silos with category hubs; tools linked
into silos.

**Phase 4 — Authority (months 5–8).** EEAT build-out (authors, reviewers,
editorial policy, citations), Review/Video schema, real student review
collection, zero-volume topical coverage.

**Phase 5 — Scale (months 8–12).** Data-driven page generation to 10,000+ URLs,
per-silo sitemaps, automated internal-link and orphan audits, cannibalisation
monitoring, annual cycle refresh automation.

**Expected impact.** 0–3 months: recovery of crawl/index coverage and the click
gains from canonical + metadata + breadcrumb work. 3–6 months: intent and review
pages capture transactional queries — the largest lead lift. 6–12 months: cluster
completeness and EEAT drive pillar rankings for head terms like "online MBA".

---

## Enforcement checklist (for the build phase)

1. One primary keyword, title, description and H1 per URL — build fails on duplicates.
2. Every route in `App.tsx` present exactly once in the registry.
3. Every page: breadcrumb, 8–15 internal links, self-canonical, schema graph, EEAT block, lead CTA.
4. No orphan pages; link depth ≤ 3.
5. Sitemap contains only indexable, content-complete URLs.
