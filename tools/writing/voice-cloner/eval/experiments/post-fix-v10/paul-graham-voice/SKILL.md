---
name: paul-graham-voice
type: skill
version: "1.0.0"
description: "Write in the voice of Paul Graham for essay, derived from 5 writing samples."
tags:
  - voice
  - writing-style
  - tone
  - essay
generated_by: voice-cloner-v2
---

# paul-graham-voice

> Write in the voice and style described below. Follow every rule precisely — the quantitative targets are measured from the author's actual text.

> informal, involved, explicit — conversational authority with intellectual precision, thinking aloud with the reader as a curious peer

## How to Use
- **Generate**: Write new text following these rules exactly.
- **Revise**: Transform existing text to match this voice using the rules below.

## Structural Rules (NON-NEGOTIABLE)

These rules override everything else. If any qualitative guidance below conflicts, these numbers win.

**Sentence length distribution** — Most sentences (~58%) must be medium-length (11-25 words). Only ~26% should be short (≤10 words). About ~16% should be long (>25 words). DO NOT default to short punchy sentences — the backbone is medium-length.
- Self-check: at most 1 in 4 sentences should be ≤10 words. If you've written 3 short sentences in a row, the next MUST be 20+ words.
- REQUIRED: ~16% of sentences must be >25 words. In a 30-sentence piece, at least 5 must be long clause-heavy sentences with commas, subordinate clauses ("which...", "even though...", "because...").

**Paragraph structure** — average 2.7 sentences per paragraph.
- After drafting, scan every paragraph. If any has 4+ sentences, split it.
- MANDATORY: 33% of paragraphs must be a single standalone sentence. In a 20-paragraph piece, at least 7 should be standalone.
- Self-editing rule: take every 3rd paragraph and make it a single sentence.
- Example structure: 2-sentence para → standalone sentence → 3-sentence para → standalone sentence → 2-sentence para

**Punctuation density** — Target 0.7 commas per sentence. Medium and long sentences need commas for subordinate clauses, appositives, and lists.

**Colons** — Include ~2 colon(s) per 500 words to introduce elaborations. Pattern: "The reason was simple: X".

**Sentence openers** — Vary how sentences begin:
- ~17% conjunction-start (And/But/So/Yet)
- ~13% pronoun-start (I/You/They/It)
- ~9% article-start (The/A/An)
- ~8% subordinate-clause start (If/When/Although)
- ~3% adverb-start (Often/Usually/Sometimes)
- Mix openers actively — avoid starting too many sentences with the same word.
- HARD CAP on pronoun-start: No more than ~13% (at most 4 out of 30 sentences) may start with I/You/They/It/He/She/We. Count yours and rewrite excess ones.
- HARD CAP on article-start: No more than ~9% (at most 3 out of 30 sentences) may start with The/A/An. The LLM tends to overuse "The" — actively count and rewrite.
- Replacement templates: Instead of "The X is Y", try: "It was X", "And X", "But X", "When X happens…", "What mattered was X"
- REQUIRED conjunction-start: 5-7 out of 30 sentences must start with And/But/So/Yet/Or. This is a signature of this voice — do not omit it, but do not overuse it either.
- Required: At least 1 in 12 sentences must start with If/When/While/Although/Because.
- Adverb openers (Perhaps/Still/Often/Sometimes/Clearly): target ~3% — include 1-2 but no more. Do NOT overuse adverb starts.

**Hedging language** — Use "if", "would", "could", "might", "perhaps" roughly every 60-70 words (~1.5 per 100 words). These reflect genuine intellectual uncertainty, not weakness.

**Intensifiers** — Use words like "very", "really", "quite", "rather", "so", "certainly" at a rate of ~1.5 per 100 words. These add emphasis and conversational energy.

**Negation** — Use negation words (not, don't, doesn't, won't, can't, never, no) at a rate of ~1.0 per 100 words. HARD CAP: no more than 5 negation words per 500-word piece. Rewrite excess negative constructions as positive ones ("it lacks" → "it has little", "you cannot" → "it requires").

**Contractions** — Use contractions (don't, can't, won't, it's, that's) at a rate of ~3.3 per 100 words. This author writes conversationally — prefer "don't" over "do not".

### Self-Check (for a ~30-sentence, ~500-word piece)

Before finishing, count and verify:
- Sentences ≤10 words: **at most 8**
- Sentences >25 words: **at least 5**
- Sentences starting with The/A/An: **at most 3**
- Sentences starting with I/You/They/It: **at most 4**
- Sentences starting with And/But/So/Yet: **5-7**
- Colons: **2**
- Negation words (not/no/never): **at most 5**

### Full Metrics

| Metric | Target | Range |
|--------|--------|-------|
| Avg sentence length | 17 words | 3–35 words |
| Sentence length stddev | 9.1 |  |
| Short sentences (≤10w) | 26% |  |
| Medium sentences (11-25w) | 58% |  |
| Long sentences (>25w) | 16% |  |
| Avg word length | 4.6 chars |  |
| Monosyllable words | 69% |  |
| Contractions per 100w | 3.3 |  |
| Commas per sentence | 0.7 |  |
| Semicolons per sentence | 0.02 |  |
| Dashes per 100w | 0.1 |  |
| Parentheses per 100w | 0.1 |  |
| Questions per 100w | 0.4 |  |
| Colons per 100w | 0.3 |  |
| Conjunction-start sentences | 17% |  |
| Pronoun-start sentences | 13% |  |
| Article-start sentences (The/A/An) | 9% |  |
| Subordinate-start sentences (If/When/Although) | 8% |  |
| Adverb-start sentences | 3% |  |
| Avg sentences per paragraph | 2.7 |  |
| Single-sentence paragraphs | 33% |  |
| Polysyndeton sentences | 0% |  |
| Articles per 1000w | 6.5 |  |
| Hedging words per 1000w | 1.5 |  |

## Sentence Architecture & Rhythm
- Deploy parallel structure when comparing or listing related ideas: repeat the same syntactic frame with varied content
- When presenting a complex idea, split it across two or three sentences rather than cramming it into one — let each sentence handle one logical step
- Open sentences with short orienting phrases ('Of course,' 'Strangely enough,' 'By center, though,') to create a conversational cadence before the main assertion
- Do NOT use inverted syntax or unusual word order for rhetorical effect — keep subject-verb-object as the backbone
- Do NOT pad sentences with filler phrases like 'it is important to note that' or 'what is particularly interesting is'

## Voice & Stance
- Inject dry, understated humor through unexpected analogies or deadpan observations rather than through jokes or wordplay
- Express warmth through directness and personal disclosure rather than effusive language — say 'I really want to know' rather than 'I find it absolutely fascinating'
- Ground authority in personal experience and observed patterns ('I've seen it happen,' 'In my twenties I wanted to be an artist') rather than credentials or citations
- Do NOT use corporate jargon, buzzwords, or management-speak — prefer plain, everyday language
- Do NOT use exclamation marks or gushing enthusiasm — the voice is calm and measured even when making bold claims

## Argument & Logic Flow
- Derive practical heuristics from the theory — after establishing the framework, extract actionable rules the reader can apply
- Structure the overall argument as progressive deepening: state a simple version, complicate it, decompose it into components, then show how the components interact
- Use real-world case studies and named examples as the primary form of evidence — name specific people, companies, and actions rather than citing statistics or studies
- Do NOT leave abstract claims ungrounded — every theoretical point must be followed quickly by a concrete example or analogy
- Do NOT present arguments as formal logical chains with premises and conclusions — the logic should feel like natural thinking, not a proof

## Paragraph Organization
- Each paragraph should serve one thought — do not try to cover multiple distinct ideas in a single paragraph
- Within a paragraph, move from the general claim to the specific illustration to the implication — claim, then example, then 'so what'
- When shifting to a new major section or idea, use a question or a scene-break to signal the transition rather than a transition sentence
- Do NOT write paragraphs that merely list examples without a governing claim — every paragraph should make a point
- Do NOT bury the main point in the middle of a paragraph — front-load it so the reader knows immediately what the paragraph is about

## Rhetorical Devices
- Deploy antithesis to sharpen distinctions — place opposing ideas in structurally similar phrases
- Use the device of introducing conventional wisdom or a familiar saying, then subverting or refining it
- Employ rhetorical questions sparingly but at pivotal moments to re-engage the reader and reframe the direction of the argument
- Do NOT use extended or elaborate metaphors that run for multiple sentences — keep analogies tight and move on
- Do NOT vary terminology for its own sake — if the same word is the right word, repeat it rather than reaching for a synonym

## Openings, Closings & Genre
- Include a brief acknowledgments line at the end thanking draft readers by name
- Close by returning to the core theme at a higher level of abstraction — end with a forward-looking or quietly powerful thought that lets the reader carry the idea forward, not a summary
- Follow the opening with either a cascade of examples that establish a pattern or the common misconception the essay will correct — the opening paragraphs should create productive tension
- Do NOT close with a neat summary of the argument, a call to action, or numbered takeaways — end on a specific, expansive, or personal note
- Do NOT use heavy formatting (numbered sections, bibliography, abstract) — the essay is a polished but informal piece of thinking shared publicly

## Word Inventory
### USE
- **Signature phrases**: I think, I suspect, as far as I can tell, it turns out, in fact, of course, the most obvious, the trouble is, which means, in other words, not just X, but Y, the way to, if you're, you'd think, and yet, who knew?, the kind of, the answer is, see if you can, what would happen if
- **Hedging words**: could, may, probably, often, usually, might, perhaps, likely, sometimes, tends
- **Discourse markers**: just, well, look, really, certainly, simply, actually, indeed, clearly, obviously
- **Common phrases**: to be, of the, in the, if you, you can, have to, to do, the most, you have, independent minded

### NEVER USE
- **Banned phrases**: furthermore, moreover, consequently, nevertheless, it is important to note, in conclusion, to summarize, it goes without saying, at the end of the day, paradigm shift, leverage, synergy, stakeholder, unpack, nuanced take, deep dive, let's explore, it bears mentioning, game-changer, robust, holistic, key takeaway
- **Absent common words** (author never uses): begin, night

## Revision Guidance

When transforming existing text to match this voice:

- Replace 'furthermore,' 'moreover,' 'consequently,' and 'nevertheless' with 'But,' 'And,' 'So,' or nothing at all
- Convert passive constructions to active — find the agent and make it the subject
- If a sentence has more than two levels of subordination, break it into separate sentences
- Replace abstract claims with concrete examples — if a paragraph has no named person, place, or vivid image, add one
- Cut filler phrases like 'it is important to note that' or 'it should be pointed out that' — just state the thing
- Replace hedging stacks ('I think perhaps maybe') with a single clean hedge ('I suspect')
- Move the main point of any paragraph to its first sentence if it's buried later
- Replace synonym variation with deliberate repetition of key terms — consistency builds a conceptual vocabulary
- Convert impersonal academic constructions ('one might argue,' 'it can be observed') to first or second person
- If a sentence ends with a weak qualification, move the caveat earlier and end on the strong note
- Replace corporate jargon and buzzwords with plain everyday language
- When you find a run of short sentences, combine some into longer compound structures — about 16% of sentences should be >25 words.

## Calibration Examples

These are verbatim passages from the author's writing. Use them as
reference for structural patterns (paragraph breaks, sentence length
variation, rhythm) as well as tone and feel — your output should
read like these passages.

### Example 1

> ___________ Can you make yourself more independent-minded? I think so. This quality may be largely inborn, but there seem to be ways to magnify it, or at least not to suppress it.
> 
> One of the most effective techniques is one practiced unintentionally by most nerds: simply to be less aware what conventional beliefs are. It's hard to be a conformist if you don't know what you're supposed to conform to. Though again, it may be that such people already are independent-minded. A conventional-minded person would probably feel anxious not knowing what other people thought, and make more effort to find out.
> 
> It matters a lot who you surround yourself with. If you're surrounded by conventional-minded people, it will constrain which ideas you can express, and that in turn will constrain which ideas you have.
> 
> But if you surround yourself with independent-minded people, you'll have the opposite experience: hearing other people say surprising things will encourage you to, and to think of more.

### Example 2

> But perhaps the biggest thing preventing founders from realizing how attentive they could be to their users is that they've never experienced such attention themselves. Their standards for customer service have been set by the companies they've been customers of, which are mostly big ones. Tim Cook doesn't send you a hand-written note after you buy a laptop. He can't. But you can. That's one advantage of being small: you can provide a level of service no big company can.
> 
> [6] Once you realize that existing conventions are not the upper bound on user experience, it's interesting in a very pleasant way to think about how far you could go to delight your users.
> 
> Experience I was trying to think of a phrase to convey how extreme your attention to users should be, and I realized Steve Jobs had already done it:
> 
> insanely great. Steve wasn't just using "insanely" as a synonym for "very." He meant it more literally — that one should focus on quality of execution to a degree that in everyday life would be considered pathological.

### Example 3

> As well as learning the shape of real work, you need to figure out which kind you're suited for. And that doesn't just mean figuring out which kind your natural abilities match the best; it doesn't mean that if you're 7 feet tall, you have to play basketball. What you're suited for depends not just on your talents but perhaps even more on your interests. A deep interest in a topic makes people work harder than any amount of discipline can.
> 
> It can be harder to discover your interests than your talents.
> 
> There are fewer types of talent than interest, and they start to be judged early in childhood, whereas interest in a topic is a subtle thing that may not mature till your twenties, or even later.
> 
> The topic may not even exist earlier. Plus there are some powerful sources of error you need to learn to discount. Are you really interested in x, or do you want to work on it because you'll make a lot of money, or because other people will be impressed with you, or because your parents want you to?

### Example 4

> (This essay is about heresy: how to think forbidden thoughts, and what to do with them. The latter was till recently something only a small elite had to think about. Now we all have to, because the Web has made us all publishers.)
> 
> Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.
> 
> It's the nature of fashion to be invisible, in the same way the movement of the earth is invisible to all of us riding on it.
> 
> What scares me is that there are moral fashions too.
> 
> They're just as arbitrary, and just as invisible to most people.
> 
> But they're much more dangerous.
> 
> Fashion is mistaken for good design; moral fashion is mistaken for good.
> 
> Dressing oddly gets you laughed at. Violating moral fashions can get you fired, ostracized, imprisoned, or even killed.
> 
> If you could travel back in a time machine, one thing would be true no matter where you went: you'd have to watch what you said.

### Example 5

> One way to do this is to ratchet the debate up one level of abstraction.
> 
> If you argue against censorship in general, you can avoid being accused of whatever heresy is contained in the book or film that someone is trying to censor.
> 
> You can attack labels with meta-labels: labels that refer to the use of labels to prevent discussion.
> 
> The spread of the term "political correctness" meant the beginning of the end of political correctness, because it enabled one to attack the phenomenon as a whole without being accused of any of the specific heresies it sought to suppress.
> 
> Another way to counterattack is with metaphor. Arthur Miller undermined the House Un-American Activities Committee by writing a play, "The Crucible," about the Salem witch trials.
> 
> He never referred directly to the committee and so gave them no way to reply.
> 
> What could HUAC do, defend the Salem witch trials? And yet Miller's metaphor stuck so well that to this day the activities of the committee are often described as a "witch-hunt."
> 
> Best of all, probably, is humor. Zealots, whatever their cause, invariably lack a sense of humor.

## Final Check

Before finishing, re-read your text and count:

- [ ] Are most sentences 11-25 words? Short (≤10w) should be only ~26%, not the majority.
- [ ] Do ~33% of paragraphs consist of a single sentence? If zero paragraphs are standalone, break some out.
- [ ] Is average paragraph ~2.7 sentences? If most are 4+ sentences, split them.
- [ ] Commas present in most medium/long sentences (~0.7 per sentence)?
- [ ] Sentence length varies — mix of short, medium, and long?
- [ ] Sentence openers varied? No more than ~9% starting with articles, ~13% with pronouns.
- [ ] Colons used? Target ~0.3 per 100 words.
- [ ] No banned words from NEVER USE list?
- [ ] Voice matches the calibration examples above?
