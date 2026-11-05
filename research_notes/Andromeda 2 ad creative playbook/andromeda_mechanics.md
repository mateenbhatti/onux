# Andromeda ad retrieval mechanics (state as of Nov 2026)

**Research limitation (read first):** WebFetch could not reach engineering.fb.com, jonloomer.com, motionapp.com or relevantaudience.com (hosts not in the session's allowed network domains). I could not read any primary Meta page directly. All findings come from WebSearch result summaries, which are secondary. Meta's own wording, including the Dec 2024 and Oct 2026 engineering posts, is relayed through secondary coverage. Verify those two posts before quoting them. The researcher should allow engineering.fb.com, www.facebook.com/business, jonloomer.com, ppc.land and relevantaudience.com and re-run if exact quotes are needed.

## What exactly is Andromeda, and what did "2.0" change (dates, official sources)?

### Takeaway
Andromeda is the first (retrieval) stage of Meta's multi-stage ads recommendation system, first described by Meta on Dec 2, 2024. "Andromeda 2.0" appears to be an industry label, not a Meta product name, for a second-generation system detailed in an Engineering at Meta post around Oct 28, 2026. The reported changes are about throughput and architecture. Third-party coverage mostly adds creative-strategy interpretation.

### Cited Findings
- Meta's Dec 2, 2024 Engineering at Meta post is titled "Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine". It calls retrieval "the first step in our multi-stage ads recommendation system" (quoted via search summary, not read directly). — [WebSearch summary citing Meta post](https://www.contentgrip.com/meta-andromeda-ad-retrieval-billion/)
- Per Meta's post as summarized, retrieval narrows "tens of millions of ad candidates" to "a few thousand". Ads are organized into hierarchical clusters, and retrieval descends the tree evaluating only promising branches. It is co-designed across ML, software and hardware on NVIDIA Grace Hopper, with MTIA integration planned. — [ContentGrip](https://www.contentgrip.com/meta-andromeda-ad-retrieval-billion/)
- Reported 2024 results: about +6% recall and +8% ads quality in selected segments. One source adds 5% Instagram and 3% Facebook Feed conversion gains. Meta says these apply to selected segments. — [ContentGrip](https://www.contentgrip.com/meta-andromeda-ad-retrieval-billion/); [WebSearch result set on Andromeda update](https://billo.app/blog/meta-andromeda-update/)
- Second-generation post (reported date Oct 28, 2026): Meta claims the production pipeline scores every eligible ad at over 1 billion ads per second per GPU server, about 100x the 2024 system. It is described as a retrieval mixture-of-experts architecture with index matching, scoring and top-K selection co-located on one GPU server. The post has 12 bylined authors (ML Applications section). — [ppc.land](https://ppc.land/meta-says-andromeda-lifted-facebook-conversions-2-4-since-2025/); [Relevant Audience](https://www.relevantaudience.com/meta/meta-andromeda-2026-ads-retrieval-explained/); [ContentGrip](https://www.contentgrip.com/meta-andromeda-ad-retrieval-billion/)
- Meta reportedly claimed a 2.4% Facebook conversion lift "since 2025" from Andromeda. Earlier, in Q3 2026 results reported Oct 23, 2026, Meta had cited a 1.4% Facebook conversion lift. Outlets note no baseline, method, time window or Instagram figure is given. — [ppc.land](https://ppc.land/meta-says-andromeda-lifted-facebook-conversions-2-4-since-2025/); [Relevant Audience](https://www.relevantaudience.com/meta/meta-andromeda-2026-ads-retrieval-explained/)
- Kernel-level figures (fused MoE gating kernel 2.4B to 10B+ ads/sec; index matching 100B+ ads/sec) come from a single aggregator and are less verified. — [AlphaSignal](https://alphasignal.ai/news/meta-s-andromeda-retrieves-1-billion-ads-per-second-on-one-server)
- "Andromeda 2.0" is not an official Meta name. Meta's post calls it the next generation or 2026 iteration. — [WebSearch result set incl. Segwise, FRX, ugc.nl](https://segwise.ai/blog/meta-andromeda-2-0)
- A Motion (motionapp.com) talk titled "Andromeda 2.0 Explained" was recorded Jul 2026, before the Oct 2026 post. So some "2.0" content predates Meta's disclosure and cannot be based on it. — [Motion](https://motionapp.com/library/talk/andromeda-2-0-explained-how-meta-s-algorithm-actually-picks-your-winning-ads/)

### Inferences
- The "100x" comparison may mix units (per GPU card in 2024 vs per server in 2026), as one analysis (ppc.land) notes. Treat it as a throughput claim, not a quality claim.
- The throughput gain mainly means Meta can score more candidate ads per request, which supports Meta's argument that more creative variety can be handled.

### Gaps
- Primary text of both Meta engineering posts not read. The exact 2026 wording, and whether Meta's page says "2.0", is unconfirmed.
- Meta for Business or Marketing API announcements about Andromeda were not located.
- Jon Loomer, Foxwell, Social Media Today and Search Engine Land coverage was not retrieved; only search snippets of Loomer and MediaPost titles appeared.

## What signals does it use from video/audio/text/visuals, and does it analyze content to match audiences?

### Takeaway
No source I found shows Meta stating that Andromeda analyzes video, audio or visual content frame by frame to match audiences. Content-analysis claims ("semantic fingerprint" from computer vision, NLP and audio analysis) come from vendor blogs. Meta's published architecture is described in terms of ad embeddings, user models and clustered retrieval.

### Cited Findings
- Vendor and agency blogs claim Andromeda builds a "semantic fingerprint" of each ad using computer vision, NLP and audio analysis. These are not attributed to a Meta statement. — [adsuploader.com](https://adsuploader.com/blog/meta-andromeda); [Motion](https://motionapp.com/library/talk/andromeda-2-0-explained-how-meta-s-algorithm-actually-picks-your-winning-ads/)
- Searching specifically for Andromeda 2.0 video or audio understanding found none. The only audio/video "2.0" hits were unrelated (Seedance 2.0). — [Search results](https://segwise.ai/blog/meta-andromeda-2-0)
- Practitioner framing: "creative is the new targeting", meaning creative content now does the audience-matching work that interest and lookalike targeting once did. This is interpretation. — [Chatterbuzz Media](https://www.chatterbuzzmedia.com/blog/meta-andromeda-creative-targeting/)
- One page on Meta's engineering update says Meta's published architecture does not establish a buyer-visible creative-similarity score, a fixed duplicate penalty or a one-concept-to-one-audience mapping. — [WebSearch result summary](https://www.adsights.ai/blog/topics/creative-strategy/meta-andromeda-ads-operational-playbook)

### Inferences
- It is plausible that ad embeddings encode creative content (Meta's ad models use creative features), but this is not shown in what I retrieved. Do not state frame-level or audio-level analysis as Meta fact.

### Gaps
- No Meta statement found on which modalities feed the ad representation.
- Not confirmed whether text overlays, voiceover transcripts or on-screen faces are used.

## How does it treat similar vs different creatives (Entity ID, similarity), and how many distinct creatives per ad set?

### Takeaway
The "near-duplicates collapse into one entity" idea is widely repeated but is third-party. "Entity ID" is described by several sources as industry shorthand, not a Meta-published term. The 60% and 40% similarity thresholds and the 8-12 concept count are not confirmed by Meta and sources disagree on whether a similarity score exists.

### Cited Findings
- Third-party: similar ads are grouped under one Entity ID, so 100 near-duplicates may act like a handful of entities. — [WebSearch result set](https://billo.app/blog/creative-diversity/)
- Several sources say "Entity ID" is industry shorthand and not exposed in Ads Manager or the API. Clutch presents it as an official-style KPI, which conflicts. — [Clutch](https://clutch.co/resources/meta-andromeda-update-2026) vs [adsuploader.com](https://adsuploader.com/blog/meta-andromeda)
- Claim: a Creative Similarity Score column exists at ad level; above 60% ads are merged or suppressed; keep under 40%. The 60% figure is attributed to admetrics.io and "late 2025" data. A Medium post says Meta "confirmed" 60% without a source. — [Atria](https://www.tryatria.com/blog/andromeda-meta-ads); [Medium (tentenco)](https://medium.com/@tentenco/meta-ads-strategy-2026-why-andromeda-gem-and-ios-26-broke-the-old-playbook-78cba1ad4820)
- Contradiction: an operational playbook states Meta has not shipped a creative similarity score, diversity score or any Andromeda-branded Ads Manager metric, and has published no numeric thresholds. — [Adsights](https://www.adsights.ai/blog/topics/creative-strategy/meta-andromeda-ads-operational-playbook)
- Recommended counts (third-party only): about 8-12 conceptually distinct concepts per campaign with 2-3 variations each, refresh every 2-3 weeks; separate diversification (angles, personas, emotional territory) from iteration (hooks, copy, thumbnails). — [Segwise](https://segwise.ai/blog/meta-andromeda-update-creative-strategy-2026); [WebSearch summary](https://nikhil.pro/meta-ads-creative-similarity-explained/)
- Claim: changing only headline or opening line is not enough; variation must go deeper than the script. Third-party. — [Billo](https://billo.app/blog/creative-diversity/)

### Inferences
- Meta's own stated rationale for clustering (hierarchical ad clusters for efficient retrieval) is about retrieval efficiency and does not by itself imply a penalty for similar ads. The "penalty" framing is practitioner inference.
- Numeric guidance should be presented to readers as heuristics, not rules.

### Gaps
- No Meta document found stating a recommended number of creatives per ad set.
- Existence of a similarity column could not be verified. Check an Ads Manager account directly.

## How do budgets, learning phase, ad set structure, GEM/Lattice/Advantage+ and broad targeting interact?

### Takeaway
Meta's 2024 framing is that Andromeda powers Advantage+ automation and sits upstream of later ranking stages. Claims about budget, learning phase and structure are almost entirely practitioner advice. No Meta statement on learning-phase interaction was found.

### Cited Findings
- Meta's post title ties Andromeda to Advantage+ automation; retrieval feeds later ranking stages. — [ContentGrip summary of Meta post](https://www.contentgrip.com/meta-andromeda-ad-retrieval-billion/)
- Andromeda works alongside GEM (Meta's ads foundation model); one source warns not to treat Andromeda, GEM and Lattice as interchangeable because they cover different parts of the recommendation stack. — [AdManage](https://admanage.ai/blog/meta-andromeda); [Billo](https://billo.app/blog/meta-andromeda-update/)
- Practitioner view: broad targeting plus consolidated structure plus diverse creative is the intended pairing. This is interpretation. — [Chatterbuzz Media](https://www.chatterbuzzmedia.com/blog/meta-andromeda-creative-targeting/); [Segwise](https://segwise.ai/blog/meta-andromeda-update-creative-strategy-2026)
- Search for learning-phase interaction returned nothing addressing it. — [Search results](https://www.tryatria.com/blog/andromeda-meta-ads)

### Inferences
- Consolidating budget into fewer ad sets is consistent with letting retrieval choose among many creatives, but this is a practitioner heuristic and not verified for the 2026 system.

### Gaps
- Meta statements on budget minimums, learning-phase thresholds (commonly ~50 optimization events per week) and Andromeda were not found.
- Lattice and GEM roles in the 2026 post not verified from primary text.

## Contradictions summary
- Similarity score: exists (Atria, Medium) vs not shipped (Adsights).
- Entity ID: KPI (Clutch) vs unexposed shorthand (adsuploader and others).
- "2.0": used widely (Segwise, FRX, ugc.nl, Motion) vs not an official Meta name. Motion's talk predates the Oct 2026 post.
- Performance lift: 1.4% (Q3 results, Oct 23, 2026) vs 2.4% (Oct 28 coverage), with no baseline for either.
- A commonly repeated claim of global deployment in October 2025 conflicts with the Dec 2024 announcement. One outlet also reports "300x less compute per ad" (FRX Media) that nobody else confirms.
