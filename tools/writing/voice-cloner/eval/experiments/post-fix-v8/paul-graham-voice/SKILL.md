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

> informal, involved, explicit — conversational authority with analytical precision, reasoning aloud as a thoughtful peer

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
- REQUIRED conjunction-start: At least 5 out of 30 sentences must start with And/But/So/Yet/Or. This is a signature of this voice — do not omit it.
- Required: At least 1 in 12 sentences must start with If/When/While/Although/Because.
- Adverb openers (Perhaps/Still/Often/Sometimes/Clearly): target ~3% — include 1-2 but no more. Do NOT overuse adverb starts.

**Hedging language** — Use "if", "would", "could", "might", "perhaps" roughly every 60-70 words (~1.5 per 100 words). These reflect genuine intellectual uncertainty, not weakness.

**Intensifiers** — Use words like "very", "really", "quite", "rather", "so", "certainly" at a rate of ~1.5 per 100 words. These add emphasis and conversational energy.

**Negation** — Use negation words (not, don't, doesn't, won't, can't, never, no) at a rate of ~1.0 per 100 words — no more, no less. If you find yourself writing "not" or "no" in every other sentence, cut some back.

**Contractions** — Use contractions (don't, can't, won't, it's, that's) at a rate of ~3.3 per 100 words. This author writes conversationally — prefer "don't" over "do not".

### Self-Check (for a ~30-sentence, ~500-word piece)

Before finishing, count and verify:
- Sentences ≤10 words: **at most 8**
- Sentences >25 words: **at least 5**
- Sentences starting with The/A/An: **at most 3**
- Sentences starting with I/You/They/It: **at most 4**
- Sentences starting with And/But/So/Yet: **at least 5**
- Colons: **2**

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
- Place subordinate clauses at the front of a sentence to set up context, then let the main clause land cleanly and uncluttered.
- Build the default sentence as a single main clause with one qualifying phrase or subordinate clause — keep the subject-verb-object spine visible at all times.
- Use sentence-initial conjunctions ('But', 'And', 'So') freely to create conversational forward momentum between sentences, as if continuing a thought mid-stride.
- Do NOT use semicolons as a regular habit to join independent clauses — prefer periods or conjunctions.
- Do NOT use periodic sentence structure where the main point is delayed until the end of a long buildup — lead with the claim, then qualify.

## Voice & Stance
- Treat the reader as intelligent and ambitious — offer observations and frameworks rather than commands.
- Maintain the tone of a smart friend thinking out loud — authoritative through reasoning and experience, not credentials or citations.
- Let humor emerge from unexpected concrete examples, dry understatement, or ironic juxtaposition — never signal that you're being funny.
- Do NOT use exclamation marks or exclamatory phrasing for emphasis.
- Do NOT over-qualify every claim with excessive hedging — state your view, then note the caveat once.

## Argument & Logic Flow
- Use thought experiments and hypothetical reasoning to stress-test principles and show where they break down.
- Circle back to earlier points to show how later insights reframe them — the argument should feel recursive and deepening rather than strictly linear.
- Build extended arguments by decomposition: break a complex concept into named components, then explore each individually before showing how they interact.
- Do NOT introduce a new concept without immediately grounding it in a specific, recognizable scenario.
- Do NOT present arguments as formal logical proofs — avoid 'therefore', 'hence', 'it follows that' academic connectives.

## Paragraph Organization
- Each paragraph should serve exactly one idea or one step in the argument — never meander through multiple unrelated points.
- Close paragraphs by landing on the sharpest or most memorable version of the point — save the best phrasing for the last sentence.
- Within paragraphs, sequence ideas as: claim → example or illustration → implication or qualification — move from abstract to concrete and back.
- Do NOT bury the key insight in the middle of a paragraph — it should be near the top or at the very end.
- Do NOT begin paragraphs with heavy-handed transitions like 'Furthermore', 'In addition', 'Moreover', or 'On the other hand'.

## Rhetorical Devices
- Use enumerative lists embedded in prose to convey scope and range without bullet points.
- Use parallel structure across consecutive sentences to show how one pattern repeats across domains.
- Coin or borrow striking compressed phrases that crystallize complex ideas — give the reader vocabulary to carry away.
- Do NOT use exclamation marks or dramatic punctuation for emphasis — rely on content and sentence placement instead.
- Do NOT pile up multiple rhetorical devices in a single sentence — use one device per moment and let it land cleanly.

## Openings, Closings & Genre
- End with an acknowledgments line thanking draft readers by name.
- Use em dashes and parenthetical asides for quick clarifications or injected qualifications mid-sentence.
- Establish the essay's central concept within the first few paragraphs and name it explicitly — give the reader a term to hold onto.
- Do NOT open with a question, a quote from someone else, or a dramatic anecdote — begin with a plain declarative observation.
- Do NOT close with a tidy summary that restates all the main points — end by pushing the idea forward or offering a compressed reframing.

## Word Inventory
### USE
- **Signature phrases**: as far as I can tell, I think so, I suspect, it seems to me, in my experience, the way to, the trick is, the thing is, in practice, the most important, you'd think, who knew?, but, and yet, or more precisely, ditto for, the result is, it's not enough just to, the reason is, that would make sense
- **Hedging words**: could, may, probably, often, usually, might, perhaps, likely, sometimes, tends
- **Discourse markers**: just, well, look, really, simply, certainly, actually, clearly, indeed, obviously
- **Common phrases**: to be, of the, in the, if you, you can, have to, to do, the most, you have, independent minded

### NEVER USE
- **Banned phrases**: furthermore, moreover, in addition, consequently, it could be argued that, it has been observed that, stakeholders, leverage, synergy, paradigm, utilize, impactful, game-changing, incredible, amazing, absolutely, essentially, basically, in conclusion, to summarize, it is important to note that, needless to say, at the end of the day, going forward
- **Absent common words** (author never uses): begin, night

## Revision Guidance

When transforming existing text to match this voice:

- Replace 'furthermore', 'moreover', 'in addition' with 'But', 'And', or no transition at all — let logical continuity connect paragraphs.
- Convert passive constructions ('it has been observed that') to active first-person ('I've noticed that') or direct assertion.
- Replace impersonal hedges ('it could be argued') with personal ones ('I think', 'I suspect') or remove the hedge entirely.
- Break any sentence with more than two levels of subordination into two separate sentences.
- Replace abstract claims that lack examples with a concrete, named, real-world illustration immediately after the claim.
- Convert formal transition phrases into simple conjunctions or implicit logical flow.
- Remove exclamation marks and replace exclamatory phrasing with plain declarative statements.
- Replace synonym variation of key terms with deliberate repetition of the exact same term throughout.
- Strip ornamental adjectives ('incredible', 'amazing', 'fascinating') and let the content carry its own weight.
- Convert any 'one should' or 'the entrepreneur must' to direct 'you' address.
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
