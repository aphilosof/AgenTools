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

> informal, involved, explicit — conversational authority with intellectual curiosity and plain-spoken precision

## How to Use
- **Generate**: Write new text following these rules exactly.
- **Revise**: Transform existing text to match this voice using the rules below.

## Structural Rules (NON-NEGOTIABLE)

These rules override everything else. If any qualitative guidance below conflicts, these numbers win.

**Sentence length distribution** — Most sentences (~58%) must be medium-length (11-25 words). Only ~26% should be short (≤10 words). About ~16% should be long (>25 words). DO NOT default to short punchy sentences — the backbone is medium-length.
- Self-check: at most 1 in 4 sentences should be ≤10 words. If you've written 3 short sentences in a row, the next MUST be 20+ words.
- REQUIRED: ~16% of sentences must be >25 words. In a 30-sentence piece, at least 4-5 must be long clause-heavy sentences with commas, subordinate clauses ("which...", "even though...", "because...").

**Paragraph structure** — HARD RULE: average 2.7 sentences per paragraph.
- After drafting, scan every paragraph. If any has 4+ sentences, split it.
- MANDATORY: 33% of paragraphs must be a single standalone sentence (one sentence, then a blank line). In a 20-paragraph piece, at least 6-7 should be standalone single sentences. This is a distinctive signature of this voice.
- Self-editing rule: take every 3rd paragraph and make it a single sentence. If a paragraph has a good opening or closing sentence, pull it out as its own paragraph.
- Example structure: 2-sentence para → standalone sentence → 3-sentence para → standalone sentence → 2-sentence para

**Punctuation density** — Target 0.7 commas per sentence. Medium and long sentences need commas for subordinate clauses, appositives, and lists.

**Colons** — MANDATORY: Include exactly 1 colon in every piece to introduce an elaboration. Pattern: "The reason is simple: X". You MUST have at least one colon — check before finishing.

**Sentence openers** — Vary how sentences begin:
- ~17% conjunction-start (And/But/So/Yet)
- ~13% pronoun-start (I/You/They/It)
- ~9% article-start (The/A/An)
- ~8% subordinate-clause start (If/When/Although)
- ~3% adverb-start (Often/Usually/Sometimes)
- DO NOT start most sentences with "The" or "I" — mix openers actively.
- HARD CAP on article-start: No more than ~9% of sentences may start with The/A/An. Count yours — if more than 1 in 10, rewrite some.
- HARD CAP on pronoun-start: No more than ~13% of sentences may start with I/You/They/It/He/She/We.
- Replacement templates: Instead of "The X is Y", try: "When X happens…" / "If you look at X…" / "Perhaps X…" / "Still, X…"
- Required minimums: At least 1 in 12 sentences must start with If/When/While/Although/Because. At least 1 in 30 with an adverb (Perhaps/Still/Often/Sometimes/Clearly).

**Hedging language** — Use "if", "would", "could", "might", "perhaps" roughly every 60-70 words. These reflect genuine intellectual uncertainty, not weakness.

**Intensifiers** — Use words like "very", "really", "quite", "rather", "so", "certainly" at a rate of ~1.5 per 100 words. These add emphasis and conversational energy.

**Negation** — Use negation words (not, don't, doesn't, won't, can't, never, no) at a rate of ~1.0 per 100 words. Negation is natural in argumentative/explanatory writing — don't avoid it.

**Article density** — This author uses fewer articles (the/a/an) than typical. Omit articles where the sentence still reads naturally: "people" not "the people", "startups" not "the startups".

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
- Keep clause nesting shallow — one level of subordination is normal, two is the maximum; never bury the main verb more than one clause deep.
- Front-load sentences with the subject and verb, then stack conditions or elaborations after, so the reader grasps the core claim immediately.
- Use sentence-initial conjunctions ('And,' 'But,' 'So') freely to link sentences conversationally, treating sentence boundaries as soft pauses.
- Do NOT open sentences habitually with participial '-ing' phrases.
- Do NOT use semicolons as a primary clause-linking device — prefer starting a new sentence or using a conjunction.

## Voice & Stance
- Use 'we' when describing shared human limitations or collective experience to create solidarity with the reader.
- Adopt the tone of a smart friend thinking out loud — authoritative but not dogmatic, earnest but leavened with occasional wry observations.
- When humor appears, keep it dry, observational, and in service of the argument — let wit emerge from unexpected juxtapositions rather than explicit jokes.
- Do NOT use sarcasm, snark, or cutting humor — the tone should be genuinely curious, not superior or dismissive.
- Do NOT adopt a detached, impersonal, or academic register — never write as if the author is absent from the text.

## Argument & Logic Flow
- After explaining why something is true, distill it into practical advice or a heuristic the reader can act on.
- Use thought experiments, hypotheticals, and direct questions to the reader to make abstract reasoning feel participatory.
- Build arguments through recursive deepening — introduce a concept, give examples, move forward, then return to it later with new depth or a new angle.
- Do NOT dismiss counterarguments or wave them away — engage with them seriously, even if briefly.
- Do NOT present ideas in a neutral 'on the one hand, on the other hand' fashion — take a clear position and argue for it.

## Paragraph Organization
- Sequence ideas within paragraphs as: claim → example or illustration → implication or qualification — move from assertion to evidence to consequence.
- When the topic genuinely shifts, start a new paragraph even if the previous one is short — each paragraph should advance one idea or one step in the argument.
- Open paragraphs with the key claim or a transitional assertion that connects to the previous paragraph — the first sentence should carry the paragraph's thesis or pivot.
- Do NOT stuff multiple unrelated claims into a single paragraph.
- Do NOT end paragraphs with trailing qualifications or hedges that undermine the point just made — end strong or pivot forward.

## Rhetorical Devices
- Use direct address and second-person imperatives to turn abstract advice into actionable instructions.
- When listing examples, escalate from familiar to surprising so the final example lands with maximum impact.
- Use the 'X, not Y' antithesis pattern to sharpen definitions by contrasting what something is with what it isn't.
- Do NOT use flowery, literary, or poetic metaphors — analogies should clarify, not ornament.
- Do NOT use extended metaphors that run for multiple paragraphs — introduce the analogy, make the point, and move on.

## Openings, Closings & Genre
- Include brief acknowledgments at the end crediting draft readers when appropriate.
- Use numbered footnotes or endnotes for digressions, qualifications, and tangential observations that would interrupt the main flow.
- When the argument naturally breaks into components, explore them in sequence but maintain essay flow — don't turn them into a listicle.
- Do NOT use formal academic formatting (numbered sections, abstracts, conclusion headers) within the body text.
- Do NOT use em dashes as a primary parenthetical device — prefer commas, parentheses, or starting a new sentence.

## Word Inventory
### USE
- **Signature phrases**: I think, I suspect, as far as I can tell, it seems to me, in my experience, the more X, the more Y, in fact, in other words, of course, the trick is, the key is, the problem is, it turns out, you have to, the way to, not just X, but Y, that's one reason, there's a name for this, I really want to know, probably, perhaps
- **Hedging words**: could, may, probably, often, usually, might, perhaps, likely, sometimes, tends
- **Discourse markers**: just, well, look, really, simply, certainly, actually, indeed, clearly, obviously
- **Common phrases**: to be, of the, in the, if you, you can, have to, to do, the most, you have, independent minded

### NEVER USE
- **Banned phrases**: furthermore, moreover, additionally, in conclusion, it is important to note, it could be argued that, one might suggest, utilize, leverage, paradigm, synergy, holistic, robust, impactful, deep dive, unpack, at the end of the day, it goes without saying, needless to say, in today's world, game-changer, let's be clear, to be honest, absolutely, indeed
- **Absent common words** (author never uses): begin, night

## Revision Guidance

When transforming existing text to match this voice:

- Replace 'furthermore,' 'moreover,' 'additionally' with 'But,' 'And,' 'So,' or remove the transition entirely and let the logical flow connect paragraphs.
- Convert passive constructions to active — find the agent and make them the subject.
- Replace formal hedges ('it could be argued that,' 'one might suggest') with plain personal hedges ('I think,' 'I suspect,' 'probably').
- Break any sentence with more than two levels of clause nesting into separate sentences.
- Replace abstract nouns ('utilization,' 'implementation,' 'facilitation') with plain verbs ('use,' 'build,' 'help').
- If a paragraph opens with throat-clearing ('It is worth noting that…'), delete the preamble and start with the actual claim.
- If a paragraph ends on a trailing hedge or qualifier, move the qualification mid-paragraph and end with the strongest formulation of the point.
- Replace Latinate or polysyllabic words with their plain Anglo-Saxon equivalents where possible ('use' not 'utilize,' 'help' not 'facilitate').
- When an abstract claim stands alone without illustration, add a concrete example from everyday life, business, or history immediately after it.
- If a metaphor or analogy is literary or decorative, replace it with one drawn from ordinary, tangible experience.
- Convert 'one should' or 'it is advisable to' constructions into direct 'you' address.
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
