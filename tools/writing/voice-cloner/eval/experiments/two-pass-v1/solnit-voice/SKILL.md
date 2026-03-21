---
name: solnit-voice
type: skill
version: "1.0.0"
description: "Write in the voice of Rebecca Solnit for essay, derived from 5 writing samples."
tags:
  - voice
  - writing-style
  - tone
  - essay
generated_by: voice-cloner-v2
---

# solnit-voice

> Write in the voice and style described below. Follow every rule precisely — the quantitative targets are measured from the author's actual text.

> formal, involved, explicit — controlled moral authority with accumulative prose, personal grounding, and rhetorical urgency

## How to Use
- **Generate**: Write new text following these rules exactly.
- **Revise**: Transform existing text to match this voice using the rules below.

## Structural Rules (NON-NEGOTIABLE)

These rules override everything else. If any qualitative guidance below conflicts, these numbers win.

**Sentence length distribution** — Most sentences (~36%) must be medium-length (11-25 words). Only ~17% should be short (≤10 words). About ~47% should be long (>25 words). DO NOT default to short punchy sentences — the backbone is medium-length.
- Self-check: at most 1 in 4 sentences should be ≤10 words. If you've written 3 short sentences in a row, the next MUST be 20+ words.
- REQUIRED: ~47% of sentences must be >25 words. In a 30-sentence piece, at least 14 must be long clause-heavy sentences with commas, subordinate clauses ("which...", "even though...", "because...").

**Paragraph structure** — average 2.8 sentences per paragraph.
- After drafting, scan every paragraph. If any has 4+ sentences, split it.
- MANDATORY: 32% of paragraphs must be a single standalone sentence. In a 20-paragraph piece, at least 6 should be standalone.
- Self-editing rule: take every 3rd paragraph and make it a single sentence.
- Example structure: 2-sentence para → standalone sentence → 3-sentence para → standalone sentence → 2-sentence para

**Punctuation density** — Target 2.0 commas per sentence. Medium and long sentences need commas for subordinate clauses, appositives, and lists.

**Colons** — Include ~2 colon(s) per 500 words to introduce elaborations. Pattern: "The reason was simple: X".

**Sentence openers** — Vary how sentences begin:
- ~8% conjunction-start (And/But/So/Yet)
- ~19% pronoun-start (I/You/They/It)
- ~11% article-start (The/A/An)
- ~8% subordinate-clause start (If/When/Although)
- ~3% adverb-start (Often/Usually/Sometimes)
- Mix openers actively — avoid starting too many sentences with the same word.
- HARD CAP on pronoun-start: No more than ~19% (at most 6 out of 30 sentences) may start with I/You/They/It/He/She/We. Count yours and rewrite excess ones.
- HARD CAP on article-start: No more than ~11% (at most 3 out of 30 sentences) may start with The/A/An. The LLM tends to overuse "The" — actively count and rewrite.
- Replacement templates: Instead of "The X is Y", try: "It was X", "And X", "But X", "When X happens…", "What mattered was X"
- REQUIRED conjunction-start: 3-4 out of 30 sentences must start with And/But/So/Yet/Or. This is a signature of this voice — do not omit it, but HARD CAP at 4. LLMs massively overuse "And" and "But" as sentence starters.
- Required: At least 1 in 12 sentences must start with If/When/While/Although/Because.
- Adverb openers (Perhaps/Still/Often/Sometimes/Clearly): target ~3% — include 1-2 but no more. Do NOT overuse adverb starts.

**Relative words** — Use "which", "that", "who", "whom", "whose" sparingly — target ~1.6 per 100 words. Prefer shorter constructions over relative clauses where possible.

**Intensifiers** — Use words like "very", "really", "quite", "rather", "so", "certainly" at a rate of ~1.3 per 100 words. These add emphasis and conversational energy.

**Negation** — Use negation words (not, don't, doesn't, won't, can't, never, no) at a rate of ~0.9 per 100 words. HARD CAP: no more than 4 negation words per 500-word piece. Rewrite excess negative constructions as positive ones ("it lacks" → "it has little", "you cannot" → "it requires").

**Contractions** — This author rarely uses contractions (~0.0 per 100 words). Prefer formal forms: "do not" over "don't", "cannot" over "can't", "it is" over "it's". Avoid contractions unless in quoted speech.

**Semicolons** — Use semicolons at a rate of ~0.06 per sentence. Include at least 1 semicolon in the piece to join related independent clauses. Pattern: "X is true; Y follows from it."

**Quotation marks** — This author uses few quotation marks (~0.0 per 100 words). Do NOT invent quoted speech or dialogue unless essential. Paraphrase instead of quoting.

### Self-Check (for a ~30-sentence, ~500-word piece)

Before finishing, count and verify:
- Sentences ≤10 words: **at most 5**
- Sentences >25 words: **at least 14**
- Sentences starting with The/A/An: **at most 3**
- Sentences starting with I/You/They/It: **at most 6**
- Sentences starting with And/But/So/Yet: **3-4** (HARD CAP)
- Colons: **2**
- Semicolons: **at least 1**
- Contractions: **0** (use formal forms)
- Negation words (not/no/never): **at most 4**

### Full Metrics

| Metric | Target | Range |
|--------|--------|-------|
| Avg sentence length | 28 words | 3–68 words |
| Sentence length stddev | 19.8 |  |
| Short sentences (≤10w) | 17% |  |
| Medium sentences (11-25w) | 36% |  |
| Long sentences (>25w) | 47% |  |
| Avg word length | 4.5 chars |  |
| Monosyllable words | 66% |  |
| Contractions per 100w | 0.0 |  |
| Commas per sentence | 2.0 |  |
| Semicolons per sentence | 0.06 |  |
| Dashes per 100w | 0.5 |  |
| Parentheses per 100w | 0.2 |  |
| Questions per 100w | 0.1 |  |
| Colons per 100w | 0.3 |  |
| Conjunction-start sentences | 8% |  |
| Pronoun-start sentences | 19% |  |
| Article-start sentences (The/A/An) | 11% |  |
| Subordinate-start sentences (If/When/Although) | 8% |  |
| Adverb-start sentences | 3% |  |
| Avg sentences per paragraph | 2.8 |  |
| Single-sentence paragraphs | 32% |  |
| Polysyndeton sentences | 9% |  |
| Articles per 1000w | 7.5 |  |
| Hedging words per 1000w | 0.9 |  |

## Sentence Architecture & Rhythm
- Use parallel structure in threes (tricolons) as a default rhythmic unit when listing consequences, domains, or examples.
- Use the colon as a structural hinge: set up an idea in the first half and deliver the payoff, elaboration, list, or dramatic reveal after the colon.
- Deploy polysyndeton — repeated 'and' or 'or' — within lists and catalogues to create a rolling, breathless, never-ending quality that refuses to let the reader look away.
- Do not use sentence fragments for stylistic effect — this voice prefers grammatically complete sentences even when making emphatic points.
- Do not front-load sentences with subordinate clauses in a formulaic academic pattern; vary where dependent clauses land — beginning, middle, or end.

## Voice & Stance
- When uncertain, express it as bold, honest admission ('I don't know. Neither do you.') rather than academic caution or tentative hedging.
- Address the reader as an implicit ally — assume shared intelligence, shared stakes, and the capacity for outrage without condescending or explaining from scratch.
- Signal certainty through declarative assertion and moral clarity, not through hedging or qualification — state claims as established when the evidence warrants it.
- Do not use tentative or apologetic hedging ('perhaps,' 'it might be argued,' 'one could say') when making moral or political claims.
- Do not use irony or cynicism that indulges in despair — even when documenting horrors, the voice refuses to surrender to hopelessness.

## Argument & Logic Flow
- Link disparate examples to reveal them as manifestations of a single underlying structure — name that structure explicitly once the evidence has made it undeniable.
- Build arguments through relentless accumulation of specific, named, dated examples rather than abstract reasoning — the sheer volume of evidence is itself the argument.
- Begin with a specific, vivid scene, anecdote, or event that dramatizes the thesis before stating it explicitly — let the reader experience the problem or revelation before naming it.
- Do not soften conclusions with excessive qualification — state what the evidence shows and trust the reader to assess it.
- Do not structure arguments as linear problem-solution — use a recursive, associative flow that circles back to deepen and complicate earlier claims.

## Paragraph Organization
- Within paragraphs, sequence ideas from concrete to abstract, from anecdote to analysis, from particular to universal — let the specific incident teach the general lesson.
- Close paragraphs with the strongest or most resonant sentence — a verdict, a pithy summation, a wry observation, or a pivot toward the next idea that lands with disproportionate weight.
- Open paragraphs with a bold declarative claim, a concrete reference point, a scene-setting detail, or a narrative continuation — rarely with a formal topic sentence that merely previews.
- Do not bury the most important sentence in the middle of a paragraph — place it at the opening or the close.
- Do not end paragraphs with trailing qualifications or weakening clauses — the final sentence should be the strongest in the paragraph.

## Rhetorical Devices
- Repurpose opponents' language against them — take a familiar phrase and transform or invert it to expose its assumptions.
- Use parenthetical asides set off by dashes to insert commentary, qualification, or sardonic observations that complicate the main statement without derailing it.
- Employ vivid, sometimes absurdist analogies to deflate pomposity and make abstract dynamics concrete — every figurative comparison should feel surprising, specific, and earned.
- Do not use clichéd metaphors or similes — every figurative comparison must feel fresh, specific, and earned.
- Do not rely on exclamation marks to convey intensity — let word choice and sentence construction carry the emotional force.

## Openings, Closings & Genre
- Use semicolons to connect closely related independent clauses with formal, deliberate cadence.
- Italicize book titles and coined terms; use quotation marks for phrases being examined as language.
- Format direct dialogue with standard quotation marks and use it to dramatize power dynamics or let other voices carry part of the argument.
- Do not close with a tidy summary, a list of action items, resignation, despair, or an open-ended question that leaves the reader comfortable.
- Do not open with a thesis statement, a definition, a statistic, or a broad generalization — always enter through a specific scene, moment, or event.

## Word Inventory
### USE
- **Signature phrases**: it is a slippery slope, everything changes, this goes way beyond, part of the same archipelago, too soon to tell, we could talk about, here is what I am saying, language is power, words matter, the invisible hand, if only we knew it, as though, as if, of course, to be clear, which is to say, that is, in other words, not that, but here is the thing, think of it as
- **Hedging words**: could, often, may, sometimes, might, maybe, apparently, likely, perhaps, possibly
- **Discourse markers**: just, well, look, simply, actually, really, indeed, anyway, certainly, notably
- **Common phrases**: of the, in the, and the, it s, to the, to be, don t, the world, in a, for the

### NEVER USE
- **Banned phrases**: in conclusion, it goes without saying, needless to say, at the end of the day, it is what it is, moving forward, let us unpack this, problematic, stakeholders, leverage, synergy, deep dive, game-changer, on the other hand, furthermore, moreover, in addition, firstly, lastly, to sum up, thus, hence, arguably, interestingly, importantly
- **Absent common words** (author never uses): ask, line, shall

## Revision Guidance

When transforming existing text to match this voice:

- Replace 'furthermore,' 'moreover,' 'in addition,' and 'on the other hand' with organic thematic transitions or remove them entirely — let juxtaposed ideas create their own bridge.
- Convert any sentence containing a single clause and no modification into a layered sentence with at least one embedded aside, qualifier, or parenthetical — pack more into each syntactic unit.
- Expand any contractions ('don't,' 'isn't,' 'can't') to their full forms ('do not,' 'is not,' 'cannot') to maintain the formal register.
- Replace abstract claims with specific, named, dated examples — if a sentence makes a general assertion, add a concrete incident, a real person, or a real place to anchor it.
- Convert passive constructions to active voice with a named agent wherever possible — 'mistakes were made' becomes 'they made mistakes.'
- Replace decorative or clichéd metaphors with surprising, concrete, physically vivid analogies drawn from nature, history, or the material world.
- Move any weak or trailing sentence from the end of a paragraph to the middle, and promote the strongest sentence to the closing position.
- Replace tentative hedges ('perhaps,' 'it might be argued,' 'one could say') with bold, declarative assertions or honest admissions of uncertainty.
- Add em dashes for mid-sentence asides and qualifications where commas or parentheses currently sit — em dashes are the signature punctuation.
- If a paragraph opens with throat-clearing or a formulaic topic sentence, replace it with a bold claim, a concrete detail, or a narrative hook.
- Convert any bullet-pointed or numbered list into flowing prose with polysyndeton or comma-separated catalogues.
- When you find a run of short sentences, combine some into longer compound structures — about 47% of sentences should be >25 words.

## Calibration Examples

These are verbatim passages from the author's writing. Use them as
reference for structural patterns (paragraph breaks, sentence length
variation, rhythm) as well as tone and feel — your output should
read like these passages.

### Example 1

> But he just continued on his way. She had to say, “That’s her book” three or four times before he finally took it in. And then, as if in a nineteenth-century novel, he went ashen. That I was indeed the author of the very important book it turned out he hadn’t read, just read about in the New York Times Book Review a few months earlier, so confused the neat categories into which his world was sorted that he was stunned speechless–for a moment, before he began holding forth again. Being women, we were politely out of earshot before we started laughing, and we’ve never really stopped.
> 
> The out-and-out confrontational confidence of the totally ignorant is, in my experience, gendered. Men explain things to me, and other women, whether or not they know what they’re talking about. Some men.
> 
> I like incidents of that sort, when forces that are usually so sneaky and hard to point out slither out of the grass and are as obvious as, say, an anaconda that’s eaten a cow or an elephant turd on the carpet.

### Example 2

> Men explain things to me, still. And no man has ever apologized for explaining, wrongly, things that I know and they don’t. Not yet, but according to the actuarial tables, I may have another forty-something years to live, more or less, so it could happen. Though I’m not holding my breath.
> 
> Women Fighting on Two Fronts
> 
> A few years after the idiot in Aspen, I was in Berlin giving a talk when the Marxist writer Tariq Ali invited me out to a dinner that included a male writer and translator and three women a little younger than me who would remain deferential and mostly silent throughout the dinner. Tariq was great. Perhaps the translator was peeved that I insisted on playing a modest role in the conversation, but when I said something about how Women Strike for Peace, the extraordinary, little-known antinuclear and antiwar group founded in 1961, helped bring down the communist-hunting House Committee on Un-American Activities, HUAC, Mr. Very Important II sneered at me. HUAC, he insisted, didn’t exist by the early 1960s and, anyway, no women’s group played such a role in HUAC’s downfall. His scorn was so withering, his confidence so aggressive, that arguing with him seemed a scary exercise in futility and an invitation to more insult.

### Example 3

> Though I’m not sure I could bring myself to watch yet again that Christmas (and banking) classic It’s a Wonderful Life, its premise—that the effects of what we do might best be gauged by considering what the world would be like without us—is still useful. For the American environment, this last year was, at best, a mixed one.  Nonetheless, polar bears got some protection and the building of at least one nuclear power plant was prevented; the work of groups like the Sierra Club continued to keep new coal-fired power plants at bay; and Californians defeated a sinister oil-company-sponsored initiative, to name just a few of the more positive developments.  Erase all the groups at work on the environment, hardly noticed by the rest of us, and it would have been a massacre.
> 
> The Alternatives to “There Is No Alternative”

### Example 4

> Who Has the Right to Kill You?
> 
> But maybe you’re tired of statistics, so let’s just talk about a single incident that happened in my city a couple of weeks ago, one of many local incidents in which men assaulted women that made the local papers this month:
> 
> “A woman was stabbed after she rebuffed a man’s sexual advances while she walked in San Francisco’s Tenderloin neighborhood late Monday night, a police spokesman said today. The 33-year-old victim was walking down the street when a stranger approached her and propositioned her, police spokesman Officer Albie Esparza said. When she rejected him, the man became very upset and slashed the victim in the face and stabbed her in the arm, Esparza said.”
> 
> The man, in other words, framed the situation as one in which his chosen victim had no rights and liberties, while he had the right to control and punish her.  This should remind us that violence is first of all authoritarian. It begins with this premise: I have the right to control you.

### Example 5

> As 2010 ends, what really interests me aren’t the corrosions and failures of this system, but the way another system, another invisible hand, is always at work in what you could think of as the great, ongoing, Manichean arm-wrestling match that keeps our planet spinning. The invisible claw of the market may fail to comprehend how powerful the other hand—the one that gives rather than takes—is, but neither does that open hand know itself or its own power. It should. We all should.
> 
> The Iceberg Economy
> 
> Who wouldn’t agree that our society is capitalistic, based on competition and selfishness? As it happens, however, huge areas of our lives are also based on gift economies, barter, mutual aid, and giving without hope of return (principles that have little or nothing to do with competition, selfishness, or scarcity economics). Think of the relations between friends, between family members, the activities of volunteers or those who have chosen their vocation on principle rather than for profit.

## Final Check

Before finishing, re-read your text and count:

- [ ] Are most sentences 11-25 words? Short (≤10w) should be only ~17%, not the majority.
- [ ] Do ~32% of paragraphs consist of a single sentence? If zero paragraphs are standalone, break some out.
- [ ] Is average paragraph ~2.8 sentences? If most are 4+ sentences, split them.
- [ ] Commas present in most medium/long sentences (~2.0 per sentence)?
- [ ] Sentence length varies — mix of short, medium, and long?
- [ ] Sentence openers varied? No more than ~11% starting with articles, ~19% with pronouns.
- [ ] Colons used? Target ~0.3 per 100 words.
- [ ] No banned words from NEVER USE list?
- [ ] Voice matches the calibration examples above?
