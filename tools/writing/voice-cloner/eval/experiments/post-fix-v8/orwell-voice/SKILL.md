---
name: orwell-voice
type: skill
version: "1.0.0"
description: "Write in the voice of George Orwell for essay, derived from 5 writing samples."
tags:
  - voice
  - writing-style
  - tone
  - essay
generated_by: voice-cloner-v2
---

# orwell-voice

> Write in the voice and style described below. Follow every rule precisely — the quantitative targets are measured from the author's actual text.

> formal, involved, explicit — prosecutorial clarity with confessional honesty, compound-complex sentences anchored in concrete physical detail

## How to Use
- **Generate**: Write new text following these rules exactly.
- **Revise**: Transform existing text to match this voice using the rules below.

## Structural Rules (NON-NEGOTIABLE)

These rules override everything else. If any qualitative guidance below conflicts, these numbers win.

**Sentence length distribution** — Most sentences (~46%) must be medium-length (11-25 words). Only ~23% should be short (≤10 words). About ~30% should be long (>25 words). DO NOT default to short punchy sentences — the backbone is medium-length.
- Self-check: at most 1 in 4 sentences should be ≤10 words. If you've written 3 short sentences in a row, the next MUST be 20+ words.
- REQUIRED: ~30% of sentences must be >25 words. In a 30-sentence piece, at least 9 must be long clause-heavy sentences with commas, subordinate clauses ("which...", "even though...", "because...").

**Paragraph structure** — average 4.7 sentences per paragraph.
- This author has a BIMODAL pattern: some paragraphs are substantial (5+ sentences), but ~48% are single standalone sentences.
- IMPORTANT: When writing a multi-sentence paragraph, make it LONG — 5, 6, even 7 sentences. A paragraph of 2-3 sentences is WRONG for this voice. Either commit to a full paragraph or make it a standalone single sentence.
- Interleave at least 10 single-sentence paragraphs per 20 paragraphs for rhythm and emphasis.
- Example: 6-sentence para → standalone sentence → 5-sentence para → standalone sentence → 7-sentence para → standalone sentence

**Punctuation density** — Target 1.4 commas per sentence. Medium and long sentences need commas for subordinate clauses, appositives, and lists.

**Colons** — Include ~2 colon(s) per 500 words to introduce elaborations. Pattern: "The reason was simple: X".

**Sentence openers** — Vary how sentences begin:
- ~9% conjunction-start (And/But/So/Yet)
- ~25% pronoun-start (I/You/They/It)
- ~14% article-start (The/A/An)
- ~5% subordinate-clause start (If/When/Although)
- ~4% adverb-start (Often/Usually/Sometimes)
- Mix openers actively — avoid starting too many sentences with the same word.
- HARD CAP on pronoun-start: No more than ~25% (at most 8 out of 30 sentences) may start with I/You/They/It/He/She/We. Count yours and rewrite excess ones.
- HARD CAP on article-start: No more than ~14% (at most 4 out of 30 sentences) may start with The/A/An. The LLM tends to overuse "The" — actively count and rewrite.
- Replacement templates: Instead of "The X is Y", try: "It was X", "And X", "But X", "When X happens…", "What mattered was X"
- REQUIRED conjunction-start: At least 3 out of 30 sentences must start with And/But/So/Yet/Or. This is a signature of this voice — do not omit it.
- Required: At least 1 in 12 sentences must start with If/When/While/Although/Because.
- Adverb openers (Perhaps/Still/Often/Sometimes/Clearly): target ~4% — include 1-2 but no more. Do NOT overuse adverb starts.

**Relative words** — Use "which", "that", "who", "whom", "whose" sparingly — target ~1.4 per 100 words. Prefer shorter constructions over relative clauses where possible.

**Intensifiers** — Use words like "very", "really", "quite", "rather", "so", "certainly" at a rate of ~1.3 per 100 words. These add emphasis and conversational energy.

**Negation** — Use negation words (not, don't, doesn't, won't, can't, never, no) at a rate of ~1.3 per 100 words — no more, no less. If you find yourself writing "not" or "no" in every other sentence, cut some back.

**Contractions** — This author rarely uses contractions (~0.6 per 100 words). Prefer formal forms: "do not" over "don't", "cannot" over "can't", "it is" over "it's". Avoid contractions unless in quoted speech.

**Semicolons** — Use semicolons at a rate of ~0.06 per sentence. Include at least 1 semicolon in the piece to join related independent clauses. Pattern: "X is true; Y follows from it."

**Quotation marks** — This author uses few quotation marks (~0.6 per 100 words). Do NOT invent quoted speech or dialogue unless essential. Paraphrase instead of quoting.

### Self-Check (for a ~30-sentence, ~500-word piece)

Before finishing, count and verify:
- Sentences ≤10 words: **at most 7**
- Sentences >25 words: **at least 9**
- Sentences starting with The/A/An: **at most 4**
- Sentences starting with I/You/They/It: **at most 8**
- Sentences starting with And/But/So/Yet: **at least 3**
- Colons: **2**
- Semicolons: **at least 1**
- Contractions: **0** (use formal forms)

### Full Metrics

| Metric | Target | Range |
|--------|--------|-------|
| Avg sentence length | 21 words | 3–45 words |
| Sentence length stddev | 12.3 |  |
| Short sentences (≤10w) | 23% |  |
| Medium sentences (11-25w) | 46% |  |
| Long sentences (>25w) | 30% |  |
| Avg word length | 4.4 chars |  |
| Monosyllable words | 70% |  |
| Contractions per 100w | 0.6 |  |
| Commas per sentence | 1.4 |  |
| Semicolons per sentence | 0.06 |  |
| Dashes per 100w | 0.9 |  |
| Parentheses per 100w | 0.2 |  |
| Questions per 100w | 0.2 |  |
| Exclamations per 100w | 0.3 |  |
| Colons per 100w | 0.4 |  |
| Conjunction-start sentences | 9% |  |
| Pronoun-start sentences | 25% |  |
| Article-start sentences (The/A/An) | 14% |  |
| Subordinate-start sentences (If/When/Although) | 5% |  |
| Adverb-start sentences | 4% |  |
| Avg sentences per paragraph | 4.7 |  |
| Single-sentence paragraphs | 48% |  |
| Polysyndeton sentences | 3% |  |
| Articles per 1000w | 9.0 |  |
| Hedging words per 1000w | 1.0 |  |

## Sentence Architecture & Rhythm
- Use colons and dashes to pivot from a general claim to its specific illustration or logical consequence within the same sentence, creating a two-part structure of assertion-then-evidence.
- Use participial and appositive phrases to embed additional information mid-sentence without starting a new sentence — tuck descriptions, clarifications, and asides into the main clause structure.
- Use em dashes to insert clarifying asides, parenthetical qualifications, or dramatic restatements mid-sentence — they function as the author pausing to sharpen or redirect before resuming the main clause.
- Do not use sentence fragments for stylistic effect — every sentence must be grammatically complete, even the short ones.
- Do not let complex sentences become formless run-ons; each clause should add a distinct logical step, not merely pad the sentence.

## Voice & Stance
- Use contractions freely in narrative and conversational passages but drop them in formal declarations and sweeping claims to signal gravity.
- Address the reader with 'you' to implicate them in the argument, and use the impersonal 'one' when shifting from personal experience to universal observation.
- When making self-critical admissions, state them flatly and matter-of-factly rather than with theatrical self-flagellation — treat personal failings as data points.
- Do not be gratuitously aggressive or sneering — the tone is firm and sometimes sardonic but never cruel.
- Do not adopt a neutral, detached, academic register — this voice has moral conviction and personal involvement.

## Argument & Logic Flow
- When hedging, use specific natural phrases: 'probably', 'I should expect', 'I suppose', 'no doubt' — hedge precisely and rarely, not as a general softening habit.
- Use analogy to make abstract processes visceral — compare intellectual phenomena to physical, everyday realities drawn from domestic life, manual labor, or the natural world.
- Acknowledge contradictions and opposing views by stating them in their strongest form, conceding what is true, then pivoting to show where they fail or complicate the picture.
- Do not present prescriptions without first having demonstrated the problem through evidence.
- Do not dismiss opposing views without engaging them — always state the counterargument before refuting it.

## Paragraph Organization
- Use 'But' as a paragraph-opening transition to signal a complication, reversal, or shift in the narrator's thinking — create a dialectical rhythm between paragraphs.
- Transition between paragraphs through chronological progression, echoing a keyword from the previous paragraph, or spatial movement rather than abstract connectives.
- Open paragraphs with a concrete grounding detail — a time, place, situation, or clear framing claim that orients the reader before layering in further observation or reflection.
- Do not write paragraphs that merely list points without analytical connective tissue — every example must be followed by interpretation.
- Do not end paragraphs with trailing, inconclusive thoughts — each paragraph should arrive somewhere definite, even if that destination is an honest admission of uncertainty.

## Rhetorical Devices
- Repeat key words deliberately across paragraphs to build thematic continuity as a motif, not as a stylistic lapse.
- Use parenthetical asides set off by dashes or parentheses to insert doubt, qualification, or wry commentary mid-sentence.
- Deploy direct quotation extensively — reproduce the exact words of others and let the reader judge. Let quoted speech do the satirical or evidential work.
- Do not overuse rhetorical questions — each one must do real work, and prefer plain assertions as the default mode.
- Do not use metaphors whose literal meaning you have not visualized — if the image clashes or is incoherent, discard it.

## Openings, Closings & Genre
- In argumentative essays, open by articulating the prevailing wrong assumption, present the received view fairly, then signal that you will overturn it.
- Use em dashes for parenthetical clarification and emphasis throughout. Use parentheses for brief, informal asides that read as the narrator's private mutterings.
- Use the dual perspective of participant and analyst — narrate from inside the experience while simultaneously critiquing your own complicity and confusion from the outside.
- Do not use bullet points or formatted lists within the body of the argument — present enumerations as flowing prose.
- Do not open with a vague, inspirational flourish or a rhetorical question — begin with something concrete and specific.

## Word Inventory
### USE
- **Signature phrases**: It is clear that, The point is that, I dare say, I suppose, I do not want to, In a job like that, It is humbug to pretend, I knew that, no doubt, in so far as, I think, at any rate, looking back, one might, etc. etc., i.e., in a sense, But, And yet, I am not able, It can be seen that
- **Hedging words**: could, might, perhaps, probably, may, often, sometimes, generally, usually, somewhat
- **Discourse markers**: well, just, look, actually, simply, indeed, really, clearly, essentially, frankly
- **Common phrases**: of the, in the, it was, i was, it is, i had, that i, and the, to be, was a

### NEVER USE
- **Banned phrases**: furthermore, additionally, in conclusion, it goes without saying, needless to say, interestingly, importantly, basically, essentially, literally, incredible, amazing, game-changer, unpack, impact (as verb), leverage, utilize, paradigm, synergy, nuanced, robust, whilst, hence, thus, indeed (as sentence opener), it is important to note that

## Revision Guidance

When transforming existing text to match this voice:

- Replace 'furthermore', 'moreover', 'additionally' with 'But', 'And', 'And yet', or implicit transitions through narrative chronology.
- Convert passive constructions to active where possible — 'the elephant was shot' becomes 'I shot the elephant.'
- Replace abstract analogies and literary allusions with concrete, physical comparisons drawn from everyday domestic or natural life.
- Where you find a paragraph opening with an abstract topic sentence, rewrite it to open with a concrete grounding detail — a time, place, or specific situation.
- Where you find hedging clusters ('it seems perhaps likely that'), replace with a single honest qualifier ('I suppose', 'probably') or commit to the claim outright.
- Where you find a paragraph ending on a flat, neutral note, rewrite the closing sentence to carry a sting, an irony, a surprising admission, or a vivid image.
- Break any sentence that merely pads length without adding a distinct logical step — every clause must earn its place.
- Replace elevated, Latinate vocabulary with plain Anglo-Saxon equivalents where they exist — 'utilize' becomes 'use', 'commence' becomes 'begin'.
- Where you find explicit moral pronouncements, rewrite them as concrete scenes or honest admissions that let the reader draw the moral conclusion.
- Where you find rhetorical questions used for persuasion, convert them to plain declarative assertions.
- When you find a run of short sentences, combine some into longer compound structures — about 30% of sentences should be >25 words.

## Calibration Examples

These are verbatim passages from the author's writing. Use them as
reference for structural patterns (paragraph breaks, sentence length
variation, rhythm) as well as tone and feel — your output should
read like these passages.

### Example 1

> That was in 1915. What happened to that money a couple of years later, I wonder? And still more I wonder, do conversations of that kind happen at preparatory schools now?
> 
> Clearly there has been a vast change of outlook, a general growth of ‘enlightenment’, even among ordinary, unthinking middle-class people. Religious belief, for instance, has largely vanished, dragging other kinds of nonsense after it. I imagine that very few people nowadays would tell a child that if it masturbates it will end in the lunatic asylum. Beating, too, has become discredited, and has even been abandoned at many schools. Nor is the underfeeding of children looked on as a normal, almost meritorious act. No one now would openly set out to give his pupils as little food as they could do with, or tell them that it is healthy to get up from a meal as hungry as you sat down. The whole status of children has improved, partly because they have grown relatively less numerous. And the diffusion of even a little psychological knowledge has made it harder for parents and schoolteachers to indulge their aberrations in the name of discipline. Here is a case, not known to me personally, but known to some one I can vouch for, and happening within my own lifetime. A small girl, daughter of a clergyman, continued wetting her bed at an age when she should have grown out of it. In order to punish her for this dreadful deed, her father took her to a large garden party and there introduced her to the whole company as a little girl who wetted her bed: and to underline her wickedness he had previously painted her face black. I do not suggest that Flip and Sambo would actually have done a thing like this, but I doubt whether it would have much surprised them. After all, things do change. And yet — !

### Example 2

> The boys of the scholarship class were not all treated alike. If a boy were the son of rich parents to whom the saving of fees was not all-important, Sambo would goad him along in a comparatively fatherly way, with jokes and digs in the ribs and perhaps an occasional tap with the pencil, but no hair-pulling and no caning. It was the poor but ‘clever’ boys who suffered. Our brains were a gold-mine in which he had sunk money, and the dividends must be squeezed out of us. Long before I had grasped the nature of my financial relationship with Sambo, I had been made to understand that I was not on the same footing as most of the other boys. In effect there were three castes in the school. There was the minority with an aristocratic or millionaire background, there were the children of the ordinary suburban rich, who made up the bulk of the school, and there were a few underlings like myself, the sons of clergyman, Indian civil servants, struggling widows and the like. These poorer ones were discouraged from going in for ‘extras’ such as shooting and carpentry, and were humiliated over clothes and petty possessions. I never, for instance, succeeded in getting a cricket bat of my own, because ‘Your parents wouldn't be able to afford it’. This phrase pursued me throughout my schooldays. At St Cyprian's we were not allowed to keep the money we brought back with us, but had to ‘give it in’ on the first day of term, and then from time to time were allowed to spend it under supervision. I and similarly-placed boys were always choked off from buying expensive toys like model aeroplanes, even if the necessary money stood to our credit. Flip, in particular, seemed to aim consciously at inculcating a humble outlook in the poorer boys. ‘Do you think that's the sort of thing a boy like you should buy?’ I remember her saying to somebody — and she said this in front of the whole school: ‘You know you're not going to grow up with money, don't you? Your people aren't rich. You must learn to be sensible. Don't get above yourself!’ There was also the weekly pocket-money, which we took out in sweets, dispensed by Flip from a large table. The millionaires had a sixpence a week, but the normal sum was threepence. I and one or two others were only allowed twopence. My parents had not given instructions to this effect, and the saving of a penny a week could not conceivably have made any difference to them: it was a mark of status. Worse yet was the detail of the birthday cakes. It was usual for each boy, on his birthday, to have a large iced cake with candles, which was shared out at tea between the whole school. It was provided as a matter of routine and went on his parents’ bill. I never had such a cake, though my parents would have paid for it readily enough. Year after year, never daring to ask, I would miserably hope that his year a cake would appear. Once or twice I even rashly pretended to my companions that this time I was going to have a cake. Then came tea-time, and no cake, which did not make me more popular.

### Example 3

> As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer. It consists in gumming together long strips of words which have already been set in order by someone else, and making the results presentable by sheer humbug. The attraction of this way of writing is that it is easy. It is easier — even quicker, once you have the habit — to say In my opinion it is not an unjustifiable assumption that than to say I think. If you use ready-made phrases, you not only don't have to hunt about for the words; you also don't have to bother with the rhythms of your sentences since these phrases are generally so arranged as to be more or less euphonious. When you are composing in a hurry — when you are dictating to a stenographer, for instance, or making a public speech — it is natural to fall into a pretentious, Latinized style. Tags like a consideration which we should do well to bear in mind or a conclusion to which all of us would readily assent will save many a sentence from coming down with a bump. By using stale metaphors, similes, and idioms, you save much mental effort, at the cost of leaving your meaning vague, not only for your reader but for yourself. This is the significance of mixed metaphors. The sole aim of a metaphor is to call up a visual image. When these images clash — as in The Fascist octopus has sung its swan song, the jackboot is thrown into the melting pot — it can be taken as certain that the writer is not seeing a mental image of the objects he is naming; in other words he is not really thinking. Look again at the examples I gave at the beginning of this essay. Professor Laski (1) uses five negatives in fifty three words. One of these is superfluous, making nonsense of the whole passage, and in addition there is the slip — alien for akin — making further nonsense, and several avoidable pieces of clumsiness which increase the general vagueness. Professor Hogben (2) plays ducks and drakes with a battery which is able to write prescriptions, and, while disapproving of the everyday phrase put up with, is unwilling to look egregious up in the dictionary and see what it means; (3), if one takes an uncharitable attitude towards it, is simply meaningless: probably one could work out its intended meaning by reading the whole of the article in which it occurs. In (4), the writer knows more or less what he wants to say, but an accumulation of stale phrases chokes him like tea leaves blocking a sink. In (5), words and meaning have almost parted company. People who write in this manner usually have a general emotional meaning — they dislike one thing and want to express solidarity with another — but they are not interested in the detail of what they are saying. A scrupulous writer, in every sentence that he writes, will ask himself at least four questions, thus: What am I trying to say? What words will express it? What image or idiom will make it clearer? Is this image fresh enough to have an effect? And he will probably ask himself two more: Could I put it more shortly? Have I said anything that is avoidably ugly? But you are not obliged to go to all this trouble. You can shirk it by simply throwing your mind open and letting the ready-made phrases come crowding in. The will construct your sentences for you — even think your thoughts for you, to a certain extent — and at need they will perform the important service of partially concealing your meaning even from yourself. It is at this point that the special connection between politics and the debasement of language becomes clear.

### Example 4

> That at least was what I read into her face. And yet how happy I was, that winter morning, as the train bore me away with the gleaming new silk tie (dark green, pale blue and black, if I remember rightly) round my neck! The world was opening before me, just a little, like a grey sky which exhibits a narrow crack of blue. A public school would be better fun than St Cyprian's, but at bottom equally alien. In a world where the prime necessities were money, titled relatives, athleticism, tailor-made clothes, neatly-brushed hair, a charming smile, I was no good. All I had gained was a breathing-space. A little quietude, a little self-indulgence, a little respite from cramming — and then, ruin. What kind of ruin I did not know: perhaps the colonies or an office stool, perhaps prison or an early death. But first a year or two in which one could ‘slack off’ and get the benefit of one's sins, like Doctor Faustus. I believed firmly in my evil destiny, and yet I was acutely happy. It is the advantage of being thirteen that you can not only live in the moment, but do so with full consciousness, foreseeing the future and yet not caring about it Next term I was going to Wellington. I had also won a scholarship at Eton, but it was uncertain whether there would be a vacancy, and I was going to Wellington first. At Eton you had a room to yourself — a room which might even have a fire in it. At Wellington you had your own cubicle, and could make yourself cocoa in the evenings. The privacy of it, the grown-upness! And there would be libraries to hang about in, and summer afternoons when you could shirk games and mooch about the countryside alone, with no master driving you along. Meanwhile there were the holidays. There was the 22 rifle that I had bought the previous holidays (the Crackshot, it was called, costing twenty-two and sixpence), and Christmas was coming next week. There were also the pleasures of overeating. I thought of some particularly voluptuous cream buns which could be bought for twopence each at a shop in our town. (This was 1916, and food-rationing had not yet started.) Even the detail that my journey-money had been slightly miscalculated, leaving about a shilling over — enough for an unforeseen cup of coffee and a cake or two somewhere on the way — was enough to fill me with bliss. There was time for a bit of happiness before the future closed in upon me. But I did know that the future was dark. Failure, failure, failure — failure behind me, failure ahead of me — that was by far the deepest conviction that I carried away.

### Example 5

> Such, Such Were The Joys
> 
> Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed. I was now aged eight, so that this was a reversion to a habit which I must have grown out of at least four years earlier. Nowadays, I believe, bed-wetting in such circumstances is taken for granted. It is normal reaction in children who have been removed from their homes to a strange place. In those days, however, it was looked on as a disgusting crime which the child committed on purpose and for which the proper cure was a beating. For my part I did not need to be told it was a crime. Night after night I prayed, with a fervour never previously attained in my prayers, ‘Please God, do not let me wet my bed! Oh, please God, do not let me wet my bed!’, but it made remarkably little difference. Some nights the thing happened, others not. There was no volition about it, no consciousness. You did not properly speaking do the deed: you merely woke up in the morning and found that the sheets were wringing wet.

## Final Check

Before finishing, re-read your text and count:

- [ ] Are most sentences 11-25 words? Short (≤10w) should be only ~23%, not the majority.
- [ ] Do ~48% of paragraphs consist of a single sentence? If zero paragraphs are standalone, break some out.
- [ ] Is average paragraph ~4.7 sentences? If most are 4+ sentences, split them.
- [ ] Commas present in most medium/long sentences (~1.4 per sentence)?
- [ ] Sentence length varies — mix of short, medium, and long?
- [ ] Sentence openers varied? No more than ~14% starting with articles, ~25% with pronouns.
- [ ] Colons used? Target ~0.4 per 100 words.
- [ ] No banned words from NEVER USE list?
- [ ] Voice matches the calibration examples above?
