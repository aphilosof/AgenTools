# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, involved, explicit — conversational authority with analytical precision, reasoning aloud as a thoughtful peer

## Corpus Metrics (averaged)

```
Metric                                   Value
-----------------------------------------------
contraction_rate                          3.27
fw_articles                               6.49
fw_conjunctions                           4.57
fw_demonstratives                         2.24
fw_hedges                                 1.53
fw_intensifiers                           1.45
fw_modals_aux                             6.73
fw_negation                               1.02
fw_prepositions                          11.19
fw_relatives                              2.05
hapax_ratio                              14.70
open_adverb_pct                           2.75
open_article_pct                          9.35
open_conjunction_pct                     16.52
open_pronoun_pct                         13.36
open_subordinate_pct                      8.26
para_avg_sentences                        2.69
para_avg_words                           45.35
para_pct_long                             7.47
para_pct_single_sent                     32.58
para_stddev_sentences                     1.75
polysyndeton_pct                          0.50
punct_colons_per_100w                     0.35
punct_comma_before_conj                   0.50
punct_commas_per_sent                     0.75
punct_dashes_per_100w                     0.12
punct_ellipses_per_100w                   0.00
punct_exclamations_per_100w               0.00
punct_parens_per_100w                     0.13
punct_questions_per_100w                  0.37
punct_quotes_per_100w                     4.35
punct_semicolons_per_sent                 0.02
sent_avg_length                          16.96
sent_length_max                          52.60
sent_length_min                           2.00
sent_length_stddev                        9.09
sent_median_length                       15.50
sent_pct_long                            16.10
sent_pct_medium                          57.57
sent_pct_short                           26.33
type_token_ratio                          0.72
word_avg_length                           4.60
word_pct_long                            13.49
word_pct_monosyllable                    69.48
word_pct_short                           59.31
```

## Vocabulary Profile

**Register score:** 0.04 (0=casual, 1=formal)

**Top 20 words:**
- the: 39.21/1000
- to: 39.02/1000
- of: 26.14/1000
- a: 22.92/1000
- you: 20.57/1000
- and: 17.4/1000
- in: 15.52/1000
- that: 14.66/1000
- it: 12.93/1000
- is: 12.49/1000
- be: 11.44/1000
- for: 9.61/1000
- but: 9.32/1000
- have: 9.13/1000
- as: 8.31/1000
- if: 7.74/1000
- i: 7.64/1000
- they: 7.3/1000
- are: 7.16/1000
- not: 6.34/1000

**Absent common words (2):** begin, night

## Per-Sample Analyses

### sample-1.txt (3400 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "3400",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a simple declarative with one main clause, then extend it with a single qualifying phrase or subordinate clause \u2014 rarely stack more than two clauses in one sentence.",
      "Use conditional structures ('If you're naturally independent-minded, you're going to find it frustrating\u2026') to set up cause-and-effect reasoning; let the if-clause do the heavy lifting before a short, punchy consequence.",
      "Chain related ideas across consecutive sentences rather than packing them into one long sentence \u2014 each sentence advances the thought by one step, creating a walking rhythm of claim \u2192 elaboration \u2192 implication.",
      "When building longer sentences, prefer comma-separated parallel phrases ('fastidiousness about truth, resistance to being told what to think, and curiosity') over deeply nested subordination.",
      "Use sentence-initial conjunctions ('But', 'And', 'So') freely to create a conversational forward momentum between sentences, as if continuing a thought mid-stride.",
      "Deploy an occasional very short sentence after a sequence of medium-length ones to land a point with finality \u2014 the short sentence should feel like the conclusion the previous sentences were building toward."
    ],
    "do_not": [
      "Do NOT write heavily subordinated academic sentences with multiple embedded clauses separated by semicolons \u2014 keep the syntax shallow and forward-moving.",
      "Do NOT use periodic sentence structure where the main point is delayed until the end of a long buildup \u2014 lead with the claim, then qualify.",
      "Do NOT alternate mechanically between short and long sentences in a predictable pattern \u2014 let the rhythm emerge from the logic of the argument."
    ],
    "evidence": [
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\"",
      "\"I really want to know.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when sharing personal experience or conviction, and shift to second person ('you') when offering generalizable advice \u2014 this creates a sense of the author thinking alongside the reader rather than lecturing.",
      "Maintain a tone that is confident but not dogmatic: state claims plainly as your current best understanding, then immediately acknowledge complications with 'though,' 'but,' or 'in my experience.'",
      "Project the stance of a thoughtful peer who has spent a long time working something out and is now sharing conclusions \u2014 authoritative through reasoning, not credentials or citations.",
      "Use contractions selectively: employ them in conversational passages to maintain warmth, but allow uncontracted forms when making a more deliberate or emphatic point.",
      "When expressing uncertainty, use personal-experience hedges ('I think so', 'It seems to me', 'I would think so') rather than impersonal academic hedges ('It could be argued that').",
      "Let humor emerge naturally from the content \u2014 especially through unexpected, concrete examples that deflate abstraction \u2014 rather than through wordplay or jokes."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal academic voice \u2014 always let the author's presence be felt through 'I' statements and direct address.",
      "Do NOT be sycophantic or over-qualify every claim with excessive hedging \u2014 state your view, then note the caveat once.",
      "Do NOT use a preachy or motivational-speaker tone \u2014 the advice should feel like observation, not exhortation."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"Can you make yourself more independent-minded? I think so.\"",
      "\"I know mine does.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete, relatable pattern illustrated through multiple examples from different domains (science, investing, startups, essays) before naming the abstract principle \u2014 let the reader induce the generalization before you state it.",
      "Advance arguments through a recurring structure: assert a principle \u2192 illustrate with a specific, vivid example \u2192 address a complication or exception \u2192 refine the principle.",
      "Handle counterarguments by raising them yourself with 'though' or 'but' transitions, giving them genuine weight, then folding them into a more nuanced version of the original claim rather than dismissing them.",
      "Use analogies that translate abstract concepts into visceral, everyday experiences: compare accepting an ideology to eating a dubious submarine sandwich, or intellectual conformism to fashion waves.",
      "Build extended arguments by decomposition: break a complex concept into named components (e.g., three components of independent-mindedness), then explore each individually before showing how they interact.",
      "Circle back to earlier points to show how later insights reframe them \u2014 the argument should feel recursive and deepening rather than strictly linear."
    ],
    "do_not": [
      "Do NOT rely on citations, data, or appeals to authority as primary evidence \u2014 use personal observation, concrete examples, and thought experiments instead.",
      "Do NOT present arguments as airtight logical proofs \u2014 leave room for the reader to disagree and acknowledge that some claims are speculative.",
      "Do NOT introduce a new concept without immediately grounding it in a specific, recognizable scenario."
    ],
    "evidence": [
      "\"You have to do something that sounds to most other people like a bad idea, but that you know isn't \u2014 like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"It seems to me that it has three components: fastidiousness about truth, resistance to being told what to think, and curiosity.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open most paragraphs with a direct claim or thesis statement that announces what the paragraph will be about \u2014 then support it with examples or elaboration in the sentences that follow.",
      "Use single-sentence paragraphs to land a key emotional or argumentative beat \u2014 these should feel like the natural culmination of what came before, not like orphaned thoughts.",
      "Connect paragraphs through logical pivots: end one paragraph by establishing a pattern, then open the next with 'But,' 'Ditto for,' or 'The same is true for' to extend, complicate, or redirect it.",
      "Within a paragraph, sequence ideas from general claim to specific example to implication \u2014 move from the abstract to the concrete and then back to a slightly more refined abstraction.",
      "When a paragraph introduces a question, let the next paragraph (or a subsequent sentence) answer it \u2014 use this question-then-answer rhythm to create a sense of dialogue with the reader."
    ],
    "do_not": [
      "Do NOT write paragraphs that meander through multiple unrelated points \u2014 each paragraph should serve exactly one idea or one step in the argument.",
      "Do NOT use single-sentence paragraphs for routine transitions or minor points \u2014 reserve them for moments of emphasis or revelation.",
      "Do NOT begin consecutive paragraphs with the same syntactic structure \u2014 vary openings between assertions, questions, examples, and qualifications."
    ],
    "evidence": [
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"I know mine does.\"",
      "\"But if you surround yourself with independent-minded people, you'll have the opposite experience: hearing other people say surprising things will encourage you to, and to think of more.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions to pivot the argument into a new section or to reframe the reader's thinking \u2014 pose the question, then answer it yourself in the sentences that follow.",
      "Employ parallel structure across consecutive sentences to show how one pattern repeats across domains: 'To be a successful scientist\u2026 The same is true for investors\u2026 You see this pattern with startup founders too.'",
      "Ground abstract claims in hyper-specific, sometimes surprising real-world examples (airbeds on strangers' floors, submarine sandwiches, shirts spreading through a crowd) to make ideas visceral and memorable.",
      "Use direct address and imperative verbs ('Think how often\u2026', 'See if you can guess\u2026', 'Treat it as a puzzle') to pull the reader into active participation rather than passive consumption.",
      "Deploy analogy as the primary persuasive device \u2014 translate unfamiliar intellectual concepts into familiar physical or social experiences the reader can immediately feel.",
      "Repeat key terms deliberately ('independent-minded,' 'conventional-minded,' 'curiosity,' 'fastidiousness') throughout the essay rather than varying with synonyms \u2014 this creates a consistent conceptual vocabulary."
    ],
    "do_not": [
      "Do NOT use ornamental literary devices like alliteration, assonance, or elaborate metaphorical conceits \u2014 keep figurative language functional and illustrative.",
      "Do NOT use exclamation marks or exclamatory phrasing for emphasis \u2014 let the content and sentence placement create emphasis.",
      "Do NOT pile up multiple rhetorical devices in a single sentence \u2014 use one device per moment and let it land cleanly."
    ],
    "evidence": [
      "\"Treat it as a puzzle. You know that some accepted ideas will later turn out to be wrong. See if you can guess which.\"",
      "\"like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.\"",
      "\"How did things look to them? This is hard to do, but worth the effort for the same reason it's worth travelling far to triangulate a point.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by immediately stating the core observation as a general truth ('There are some kinds of work that you can't do well without thinking differently from your peers') \u2014 no throat-clearing, no anecdote, no scene-setting. Drop the reader directly into the idea.",
      "Build the opening section by rapidly stacking examples from different domains that all illustrate the same pattern, then name the pattern explicitly only after the reader has already grasped it inductively.",
      "Close by narrowing from the essay's broad inquiry to a single, actionable, personal directive \u2014 the ending should feel like practical wisdom distilled from the preceding exploration.",
      "Include footnotes or endnotes as a way to pursue interesting tangents, qualifications, and self-corrections without interrupting the main argument's flow \u2014 these notes should feel like asides in a conversation, not academic citations.",
      "Use section breaks (visual dividers) to mark major shifts in the essay's focus \u2014 from defining the problem to exploring solutions, or from analysis to practical advice.",
      "End with a formulation that is slightly aphoristic or quotable, giving the reader something compact to carry away: a reframed motto or a compressed version of the essay's insight."
    ],
    "do_not": [
      "Do NOT open with a question, a quote from someone else, or a dramatic anecdote \u2014 begin with a plain declarative observation that the rest of the essay will unpack.",
      "Do NOT close with a tidy summary that restates the main points \u2014 end by pushing the idea one step further or offering a final reframing.",
      "Do NOT use headers, bullet points, or numbered lists within the main body \u2014 structure should emerge from paragraph breaks, section dividers, and the logical flow of prose."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"[1] One convenient consequence of the fact that no one identifies as conventional-minded is that you can say what you like about conventional-minded people without getting in too much trouble.\""
    ]
  }
}
```

### sample-2.txt (3500 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3500,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one qualifying or illustrating clause \u2014 rarely stack more than two subordinate clauses in a row.",
      "Use the pattern: short declarative statement followed by a longer explanatory sentence that unpacks or qualifies it. Let the short sentence land, then elaborate.",
      "Chain ideas within sentences using commas and coordinating conjunctions ('and,' 'but,' 'because') rather than semicolons or complex subordination. Keep the syntax feeling spoken and propulsive.",
      "When making a pivotal or surprising point, isolate it in its own short sentence or even its own paragraph to create emphasis through structural contrast.",
      "Use participial and conditional clauses ('if you're not learning,' 'when they grow at all') to set up the main claim, placing the condition before the payoff."
    ],
    "do_not": [
      "Do not write long, heavily nested sentences with multiple levels of subordination \u2014 if a sentence needs three dependent clauses, break it into two sentences instead.",
      "Do not use ornate or literary sentence structures (inversions, deliberate periodic sentences, elaborate parallelism) \u2014 keep structures conversational and direct.",
      "Do not let sentences drift without a clear landing point; every sentence should resolve its idea, not trail off."
    ],
    "evidence": [
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"You get no customers, and you go out of business.\"",
      "\"Fame grows exponentially because existing fans bring you new ones. But the fundamental reason it's so concentrated is thresholds: there's only so much room on the A-list in the average person's head.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as the primary narrator voice, but shift frequently to second person ('you') when delivering advice or generalizing a principle so the reader feels directly addressed.",
      "Maintain the tone of a smart friend thinking out loud \u2014 authoritative but not pompous, confident but willing to say 'I'm not sure' or 'as far as I can tell' when reaching the edge of certainty.",
      "Signal confidence through plain assertion ('It's obviously true that...') and signal genuine uncertainty through explicit hedges ('as far as I can tell,' 'I doubt we could ever predict this with certainty'). Do not hedge out of politeness \u2014 only hedge when you actually aren't sure.",
      "Use a collegial, peer-to-peer distance: treat the reader as intelligent and ambitious, not as a student to be lectured. Assume shared curiosity.",
      "Deploy contractions naturally in flowing prose but allow the occasional uncontracted form ('it is,' 'you are') when the sentence benefits from slight formality or emphasis.",
      "Keep humor dry and understated \u2014 use ironic juxtaposition or deadpan observation rather than jokes."
    ],
    "do_not": [
      "Do not adopt an academic or institutional voice \u2014 avoid passive constructions used for false objectivity ('it has been observed that').",
      "Do not be self-deprecating or excessively modest; state your views plainly even when they're bold.",
      "Do not use exclamation marks or overt enthusiasm markers \u2014 let the ideas carry the excitement."
    ],
    "evidence": [
      "\"As far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes.\"",
      "\"If you're an ambitious individual it's good news for you. How should you take advantage of it?\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims as bold, plain assertions ('Superlinear returns for performance are a feature of the world'), then immediately support them with concrete examples drawn from diverse domains.",
      "Build arguments through a taxonomic structure: introduce a concept, then systematically break it into subtypes or causes, and explore each in turn. Use the pattern: 'There are N causes/types... The first is... The second is...'",
      "Use analogies and real-world examples as the primary form of evidence \u2014 bacterial cultures, startups, empires, Newton, bicycle riding. Draw from history, science, and business freely.",
      "Handle counterarguments by stating them fairly in one sentence, then refuting them directly. Don't belabor the opposition: 'Some think this is a flaw of capitalism... But superlinear returns for performance are a feature of the world.'",
      "Advance the argument by asking a question ('Are there general rules for finding situations with superlinear returns?') and then answering it. Use questions as structural pivots that redirect the essay toward the next section.",
      "Develop ideas recursively: introduce a concept early, then return to it later with added nuance. Let ideas build on each other across the essay rather than treating each section as sealed off.",
      "Use thought experiments and hypothetical reasoning ('if you play a round of Russian roulette') to stress-test principles and show where they break down."
    ],
    "do_not": [
      "Do not cite academic papers, statistics, or formal sources \u2014 argue from first principles, examples, and reasoning instead.",
      "Do not present both sides neutrally and leave the reader to decide; take a clear position and argue for it.",
      "Do not use formal logical notation or overly structured argumentation (premise 1, premise 2, conclusion) \u2014 let the logic emerge naturally from the prose."
    ],
    "evidence": [
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"What are fields where a few big winners outperform everyone else? Here are some obvious ones: sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.\"",
      "\"The existence of a threshold doesn't guarantee the game will be worth playing. If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear topic claim or a transitional pivot that connects to the previous paragraph's conclusion. The first sentence should announce what this paragraph is about.",
      "Close paragraphs with the most important or surprising implication of the paragraph's idea \u2014 save the 'so what' for the end, not the beginning.",
      "Use single-sentence paragraphs for emphasis at key turning points \u2014 isolate a striking conclusion or a dramatic consequence to give it maximum weight.",
      "Sequence ideas within paragraphs as: claim \u2192 example/illustration \u2192 implication or qualification. Move from abstract to concrete and back.",
      "Transition between paragraphs implicitly through logical continuity rather than explicit transition words. The next paragraph's opening should naturally follow from the previous paragraph's closing thought. When transitions are explicit, use simple connectives: 'But,' 'And,' 'Or more precisely,' 'The result.'",
      "Use pivoting paragraphs that open with a question to shift the essay's direction \u2014 these signal to the reader that a new line of inquiry is beginning."
    ],
    "do_not": [
      "Do not use heavy-handed transition phrases ('Furthermore,' 'In addition,' 'Moreover,' 'On the other hand') \u2014 these feel academic and stiff.",
      "Do not bury the main point in the middle of a paragraph; either lead with it or build to it at the end.",
      "Do not let paragraphs wander through multiple unrelated ideas \u2014 each paragraph should orbit a single claim."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"The most obvious case of superlinear returns is when you're working on something that grows exponentially. For example, growing bacterial cultures.\"",
      "\"How should you take advantage of it?\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, cross-domain analogies as the primary rhetorical tool \u2014 connect abstract economic or intellectual concepts to tangible things like bacterial cultures, bicycle riding, grains of rice on a chessboard, and military conquests.",
      "Deploy rhetorical questions at structural joints to redirect the essay and engage the reader: 'Are there general rules for finding situations with superlinear returns?' Then answer the question immediately.",
      "Use colons to set up explanations, lists, or punchlines \u2014 the colon acts as a verbal drumroll before the payoff.",
      "Employ deliberate word and phrase repetition ('superlinear returns,' 'exponential growth,' 'thresholds') as a unifying thread. Don't vary terminology for variety's sake \u2014 repeat the exact key terms to build a conceptual vocabulary the reader internalizes.",
      "Use direct address and soft imperatives ('seek work that compounds,' 'always be learning,' 'follow your curiosity') when delivering actionable advice. Make the reader feel personally addressed.",
      "Use enumerative lists embedded in prose ('sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing') to convey scope and range without bullet points."
    ],
    "do_not": [
      "Do not use extended metaphors that run for multiple paragraphs \u2014 analogies should illuminate a point quickly and then step aside.",
      "Do not use literary or poetic devices (alliteration, assonance, elaborate imagery) \u2014 the writing should feel analytical, not artistic.",
      "Do not use exclamatory sentences or dramatic punctuation for emphasis \u2014 rely on structural isolation (short sentences, standalone paragraphs) instead."
    ],
    "evidence": [
      "\"every child is surprised, the first time they hear it, by the story of the man who asks the king for a single grain of rice the first day and double the amount each successive day.\"",
      "\"These look smooth from a distance, but up close they're full of gaps.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open an essay with a personal, reflective claim that frames the core insight as a discovery \u2014 something the author once didn't understand but now does. Begin with 'One of the most important things...' or a similarly sweeping, first-person frame that signals both humility and ambition.",
      "Establish the essay's central concept within the first few paragraphs and name it explicitly ('superlinear returns'). Give the reader a term to hold onto for the rest of the piece.",
      "Close the essay by zooming out to the biggest implication and then returning to a single, actionable or philosophical takeaway. End with a sense of open possibility rather than neat resolution.",
      "Use numbered footnotes (bracketed numbers like [1], [2]) to handle tangents, qualifications, caveats, and autobiographical asides without disrupting the main argument's flow. Place the footnote text at the end.",
      "End with an acknowledgments line thanking draft readers by name \u2014 this signals the essay's origins in a community of intellectual exchange.",
      "Do not use headers, subheadings, or bullet points in the main text. The essay should flow as continuous prose organized by paragraph breaks alone.",
      "Use quotation marks to introduce or reference specific phrases and formulations ('you get out what you put in,' 'do things that don't scale') \u2014 treat well-known sayings as objects to examine.",
      "Use em dashes and parenthetical asides sparingly for quick clarifications or injected qualifications mid-sentence."
    ],
    "do_not": [
      "Do not open with a quote, anecdote about someone else, or a scene \u2014 open with the author's own intellectual framing.",
      "Do not end with a tidy summary that restates all the points \u2014 end with the most expansive or forward-looking idea.",
      "Do not use formatting (bold, italic, headers, bullet points) as organizational crutches \u2014 let the prose structure do the work."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"Thanks to Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan for reading drafts\""
    ]
  }
}
```

### sample-3.txt (2930 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2930,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause with one or two modifying phrases \u2014 keep the core structure Subject-Verb-Object visible at all times.",
      "When extending a sentence, prefer chaining with coordinating conjunctions ('and', 'but', 'or') rather than deeply nesting subordinate clauses; stack ideas horizontally, not vertically.",
      "Use subordinate clauses primarily at the front of a sentence to set up context ('If you discover some ambitious type of work\u2026', 'When I was working on Viaweb\u2026'), then let the main clause land cleanly.",
      "Deploy very short sentences \u2014 sometimes a single word or phrase \u2014 as emphatic punctuation after a buildup of reasoning: state a question or premise, then answer it with a blunt fragment.",
      "Alternate between a run of medium conversational sentences and a sudden short declarative to create a rhythm of accumulation-then-punch.",
      "When building complex thoughts, use semicolons or colons sparingly to join two closely related independent clauses rather than splitting them into separate sentences, giving a sense of logical continuation.",
      "Use parallel infinitive lists to create rhythmic momentum within longer sentences: 'you have to learn not to lie to yourself, not to procrastinate, not to get distracted, and not to give up.'"
    ],
    "do_not": [
      "Do NOT write elaborate multi-level nested subordinate clauses (e.g., 'The man who knew the woman who had seen the thing that\u2026') \u2014 keep nesting to one level at most.",
      "Do NOT use consistently uniform sentence lengths; avoid settling into a monotone cadence where every sentence feels the same weight.",
      "Do NOT front-load sentences with long adverbial chains or participial phrases that delay the subject beyond the first few words, except occasionally for rhetorical setup."
    ],
    "evidence": [
      "Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question. There isn't.",
      "You need both.",
      "I had to learn what real work was before I could wholeheartedly desire to do it. That took a while, because even in college a lot of the work is pointless; there are entire departments that are pointless."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person perspective as someone reflecting on lived experience \u2014 use 'I' to share personal discoveries and 'you' to directly address the reader as a fellow traveler working through the same problem.",
      "Maintain a tone that is conversational, earnest, and gently authoritative: you are not lecturing but thinking aloud and sharing hard-won conclusions with a peer.",
      "Signal certainty with plain, unhedged declarations ('There isn't.', 'You need both.') and signal uncertainty with explicit admission ('I can't be sure', 'I wasn't sure of that as a kid').",
      "Use contractions selectively \u2014 employ them in casual, flowing passages to maintain conversational warmth, but drop them when making a definitive or weighty claim to add gravity.",
      "Include self-deprecating or self-aware asides that prevent the voice from sounding preachy ('Sounds a bit extreme, you think.').",
      "Shift between 'I' for personal narrative and 'you' for universalized advice naturally within the same paragraph, using the personal anecdote as the bridge to the general principle.",
      "Treat the reader as intelligent and self-directed \u2014 offer observations and frameworks rather than commands. Say 'you'll probably have to' rather than 'you must.'"
    ],
    "do_not": [
      "Do NOT adopt a detached, academic, or clinical tone \u2014 never write as if analyzing from the outside; always write as someone embedded in the experience.",
      "Do NOT be preachy or moralistic; avoid 'should' statements that sound like parental instructions \u2014 when giving advice, frame it as discovery rather than prescription.",
      "Do NOT use false modesty or excessive hedging that undermines conviction \u2014 when you've reached a conclusion, state it plainly."
    ],
    "evidence": [
      "One thing I know is that if you want to do great things, you'll have to work very hard. I wasn't sure of that as a kid.",
      "Now, when I'm not working hard, alarm bells go off. I can't be sure I'm getting anywhere when I'm working hard, but I can be sure I'm getting nowhere when I'm not, and it feels awful.",
      "Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a deceptively simple, almost na\u00efve observation or question, then progressively complicate it through the essay \u2014 the argument is a process of peeling back layers of apparent simplicity to reveal hidden difficulty.",
      "Advance arguments by stating a common assumption, then undermining it with personal experience or a concrete example: 'It might not seem there's much to learn\u2026 And yet when I ask if I know more now\u2026 the answer is definitely yes.'",
      "Use famous real-world examples (named individuals with specific anecdotes) as primary evidence, not abstract data or citations \u2014 treat biography as proof.",
      "Handle counterarguments by raising them yourself in the reader's voice ('Sounds a bit extreme, you think.') and then immediately redirecting rather than dismissing \u2014 acknowledge the objection and fold it into the argument.",
      "Build through a recursive, exploratory flow: introduce a theme, explore a facet, digress into a related insight, then loop back to deepen the original theme. The structure feels like thinking-in-progress rather than pre-planned.",
      "Use analogies and metaphors drawn from everyday experience to crystallize abstract points: 'like a dog circling while it decides exactly where to lie down.'",
      "When presenting a framework or taxonomy (e.g., three ingredients, two kinds of fakeness), state it plainly and upfront, then elaborate each component."
    ],
    "do_not": [
      "Do NOT present arguments as formal logical proofs with premises and conclusions \u2014 avoid 'therefore', 'hence', 'it follows that' academic connectives.",
      "Do NOT rely on statistics, studies, or citations as evidence \u2014 use stories, examples, and personal observation instead.",
      "Do NOT dismiss objections or alternative views \u2014 always engage with them, even briefly, before moving on."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard. Anyone who's been to school knows what it entails, even if they chose not to do it.",
      "There are three ingredients in great work: natural ability, practice, and effort. You can do pretty well with just two, but to do the best work you need all three.",
      "There's a faint xor between talent and hard work. It comes partly from popular culture, where it seems to run very deep, and partly from the fact that the outliers are so rare."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim, observation, or question that advances the argument \u2014 rarely use throat-clearing or transitional filler before reaching the point.",
      "Use standalone single-sentence paragraphs as emphatic punctuation, either to deliver a punchline ('There isn't.'), mark a transition ('Perhaps something changes at adolescence. That would make sense.'), or pose a pivotal question.",
      "Within multi-sentence paragraphs, follow a pattern of: claim \u2192 elaboration/example \u2192 complication or qualification \u2192 restatement or pivot. The paragraph often ends on a slightly different note than where it started.",
      "Connect paragraphs through implicit logical continuation rather than explicit transitional phrases \u2014 the last sentence of one paragraph sets up the context that the next paragraph's opening sentence picks up.",
      "Occasionally use a paragraph to introduce a named example or quotation, then follow with a separate paragraph that draws the lesson from it.",
      "Close paragraphs with a sentence that either sharpens the point to its most compressed form or pivots toward the next idea, creating forward momentum."
    ],
    "do_not": [
      "Do NOT begin paragraphs with heavy-handed transitions like 'Furthermore', 'In addition', 'Moreover', or 'On the other hand' \u2014 let the logical connection be implicit.",
      "Do NOT write paragraphs that merely restate or summarize what was just said \u2014 every paragraph must advance the argument or introduce something new.",
      "Do NOT end paragraphs with trailing, inconclusive thoughts that dissipate energy \u2014 either land on a clear point or pivot cleanly."
    ],
    "evidence": [
      "There isn't.",
      "Perhaps something changes at adolescence. That would make sense.",
      "That limit varies depending on the type of work and the person."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions to voice the reader's likely objections or to set up the next point, then answer them directly: 'Was there, perhaps, some way to evade hard work through sheer brilliance?'",
      "Employ concrete, vivid analogies from everyday life and accessible domains \u2014 dogs circling before lying down, a beast pursuing you, picking a lemon in a garden \u2014 rather than academic or literary allusions.",
      "Use parallel structure in lists to create rhythm and emphasis, especially with infinitives or negative constructions: 'not to lie to yourself, not to procrastinate, not to get distracted, and not to give up.'",
      "Coin or borrow striking compressed phrases that crystallize complex ideas: 'a faint xor between talent and hard work', 'rare squared', 'a bargain in the sense of being easier for you.'",
      "Deploy direct address and imperatives sparingly but firmly at key moments: 'get that idea out of your head.'",
      "Use extended quotations from other writers as rhetorical evidence \u2014 let their words carry authority, then comment on them briefly.",
      "Repeat key terms and phrases ('real work', 'the shape of real work', 'working hard') throughout the essay to create thematic cohesion through deliberate lexical repetition rather than synonym variation."
    ],
    "do_not": [
      "Do NOT use elaborate, extended metaphors that draw attention to their own cleverness \u2014 keep metaphors brief and functional.",
      "Do NOT use exclamation marks for emphasis \u2014 let the words themselves carry the force.",
      "Do NOT deploy academic rhetorical devices like chiasmus, litotes, or elaborate antithesis \u2014 the rhetoric should feel natural and conversational, not crafted."
    ],
    "evidence": [
      "There's a faint xor between talent and hard work.",
      "If great talent and great drive are both rare, then people with both are rare squared.",
      "Between essays I fuss for a few days, like a dog circling while it decides exactly where to lie down."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a deceptively simple, almost throwaway observation that sounds like it might not warrant an entire essay \u2014 then immediately begin complicating it. The opening line should feel accessible and slightly understated.",
      "Establish context by speaking from personal experience in the first few paragraphs, grounding abstract themes in the author's own journey before generalizing.",
      "Close the essay with a synthesizing paragraph that compresses the entire argument into a single dense, multi-clause sentence, then follow it with a clean, confident final statement that reframes the difficulty as achievable.",
      "Use numbered endnotes (bracketed references like [1], [2]) to handle digressions, caveats, and tangential-but-interesting points without cluttering the main text. The notes themselves should be conversational and substantive, not mere citations.",
      "Follow the personal essay / intellectual blog post genre: no headers, no bullet points, no formatting other than paragraph breaks and occasional italics for book titles. Let the argument flow as continuous prose.",
      "Structure the essay as an exploration rather than a five-paragraph argument \u2014 begin with a question or observation, wander through complications and examples, and arrive at synthesis near the end. The reader should feel they've accompanied the author on a thinking journey."
    ],
    "do_not": [
      "Do NOT open with a grand, sweeping declaration or a dramatic hook \u2014 the opening should feel casual and inviting, almost offhand.",
      "Do NOT close with a tidy motivational call to action or an inspirational flourish \u2014 end with clear-eyed honesty, not cheerleading.",
      "Do NOT use headers, subheadings, bullet points, or other structural formatting within the body of the essay \u2014 rely entirely on paragraph breaks to organize the flow."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.",
      "There was no voice calling to him that he could have heard."
    ]
  }
}
```

### sample-4.txt (3189 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3189,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a clear main clause, then extend with one or two subordinate or coordinate clauses \u2014 avoid deeply nested or multi-layered embedding.",
      "Use the default rhythm of medium-length declarative sentences as the baseline, then break it with a notably short sentence to deliver a verdict, punchline, or pivot ('That's what Facebook did.' / 'Who knew?').",
      "Chain ideas within a sentence using commas and coordinating conjunctions ('and', 'but', 'or') rather than semicolons or complex subordination \u2014 keep the syntax conversational and forward-moving.",
      "When a sentence grows long, let it grow through additive clauses and concrete details rather than through abstraction \u2014 each added clause should introduce a new fact, example, or qualification.",
      "Use participial or gerund phrases to compress action into dependent clauses ('When anyone agreed to try Stripe they'd say\u2026', 'having just been started, they haven't made all their choices yet')."
    ],
    "do_not": [
      "Do not write sentences with more than two levels of subordination \u2014 avoid 'because X, which means Y, since Z' nesting.",
      "Do not use semicolons to join independent clauses as a regular habit \u2014 use periods or conjunctions instead.",
      "Do not write in a consistently staccato or consistently flowing rhythm \u2014 the power comes from alternation."
    ],
    "evidence": [
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"That's what Facebook did.\"",
      "\"Who knew?\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the position of an experienced insider sharing hard-won knowledge with peers \u2014 not lecturing down, but leveling with the reader as someone who has seen the pattern repeatedly.",
      "Use first person ('I', 'we') to invoke personal authority and shared experience at YC, and second person ('you') to make advice directly actionable \u2014 address the reader as a founder who is doing (or about to do) the thing being discussed.",
      "Maintain a tone that is warm but unsentimental \u2014 genuinely encouraging without softening the difficulty of the work being described.",
      "Signal certainty through plain declarative statements ('It's not enough just to do something extraordinary initially') rather than through hedges or qualifiers \u2014 reserve hedging for genuine uncertainty ('I think', 'probably').",
      "Use contractions naturally in conversational passages but allow formal phrasing when making a more authoritative or aphoristic claim.",
      "Deploy dry, understated humor through unexpected analogies and deflating comparisons ('You can be ornery when you're Scotty, but not when you're Kirk')."
    ],
    "do_not": [
      "Do not adopt an academic or clinical distance \u2014 never refer to founders as 'one' or 'the entrepreneur' when 'you' works.",
      "Do not hedge every claim \u2014 avoid stacking qualifiers like 'it might perhaps be somewhat useful to consider'.",
      "Do not use hype language or motivational-speaker enthusiasm \u2014 no 'amazing', 'incredible', or 'game-changing'."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"We felt pretty lame at the time.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly, then spend the rest of the piece proving it through accumulated examples rather than deductive logic.",
      "Build arguments primarily through named real-world case studies (Stripe, Airbnb, Facebook, Pebble, Meraki) \u2014 each example should illustrate a specific facet of the central claim.",
      "Anticipate the reader's objections and address them inline, often by naming the objection explicitly ('The other reason founders ignore this path is\u2026', 'But should you even be working on such an idea?').",
      "Use analogies and metaphors to crystallize abstract ideas into physical, intuitive images \u2014 cranking a car engine, keeping a fire contained, a newborn baby, projectiles vs. powered aircraft.",
      "Progress the argument by moving from the general principle to increasingly specific variants and edge cases \u2014 recruit users \u2192 delight users \u2192 be your own software \u2192 consult for one user \u2192 manual operations.",
      "Use rhetorical questions to transition between sections and anticipate the reader's next thought ('How do you find users to recruit manually?', 'Why do we have to teach startups this?').",
      "Hedge only when genuinely uncertain, using 'I think', 'probably', or 'usually' \u2014 never stack multiple hedges."
    ],
    "do_not": [
      "Do not argue from pure theory or abstraction without grounding claims in specific, named examples.",
      "Do not present counterarguments as straw men \u2014 give the opposing view its strongest form before refuting it.",
      "Do not use formal logical connectives ('therefore', 'consequently', 'moreover') \u2014 let the argument flow through narrative and example."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or observation, then immediately support it with a specific example, anecdote, or elaboration \u2014 don't let a claim sit alone without support in the same paragraph.",
      "Use single-sentence paragraphs for maximum emphasis \u2014 deploy them to land a key insight, deliver a punchline, or create a dramatic pause between sections.",
      "Transition between paragraphs implicitly through thematic continuity rather than explicit transition words \u2014 let the next paragraph pick up the thread naturally or pivot with a short bridging sentence.",
      "Use section headers (single bold words like 'Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big') to signal major topic shifts, keeping headers to one or two words.",
      "Close paragraphs by landing on the most memorable or quotable version of the point \u2014 save the sharpest phrasing for the last sentence."
    ],
    "do_not": [
      "Do not begin paragraphs with explicit transition phrases like 'Furthermore', 'Additionally', 'In conclusion' \u2014 these feel stiff and academic.",
      "Do not write paragraphs that wander through multiple unrelated ideas \u2014 each paragraph should serve one point or one example.",
      "Do not bury the key insight in the middle of a paragraph \u2014 it should be near the top or at the very end."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"That's what Facebook did. At first it was just for Harvard students.\"",
      "\"It's easy to see how little launches matter. Think of some successful startups. How many of their launches do you remember?\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical metaphors to make abstract startup concepts tangible \u2014 cranking engines, containing fires, newborn babies, boulders and train cars, projectiles vs. powered aircraft.",
      "Deploy rhetorical questions at section transitions to pull the reader forward and simulate the dialogue the reader is having internally.",
      "Use named anecdotes as the primary persuasive device \u2014 'Collison installation', Wufoo's handwritten notes, Zuckerberg's course lists \u2014 each name anchors an abstract principle in a memorable story.",
      "Employ antithesis and contrast to sharpen points: 'not the product\u2026 but the experience', 'Scotty\u2026 but Kirk', 'projectiles rather than powered aircraft'.",
      "Use direct address and imperatives to make advice actionable: 'See if you can make it happen', 'Think of some successful startups', 'go ahead and do that'.",
      "Coin memorable phrases and terms to name patterns \u2014 'Collison installation', 'pulling a Meraki', treating ideas as 'vectors' \u2014 giving the reader vocabulary to carry away."
    ],
    "do_not": [
      "Do not use literary or poetic devices (alliteration, assonance, extended metaphors that go on for multiple paragraphs) \u2014 keep figurative language quick and functional.",
      "Do not use exclamation marks for emphasis \u2014 let the content carry the force.",
      "Do not repeat the same example more than twice \u2014 use a fresh case study to make each new sub-point."
    ],
    "evidence": [
      "\"At YC we use the term 'Collison installation' for the technique they invented.\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by stating the central thesis directly and plainly in the first sentence \u2014 no preamble, scene-setting, or gradual buildup.",
      "Immediately follow the thesis with the common misconception it overturns, creating a thesis-antithesis pair in the first paragraph.",
      "Structure the essay as a series of thematic sections, each with a one-word bold header, progressing from the most common version of the advice to increasingly specific and unusual variants.",
      "Close the main body by zooming out to reframe the entire argument in a new conceptual frame (startup ideas as 'vectors') \u2014 end with a synthesis that transforms how the reader thinks about the topic.",
      "Append numbered footnotes at the end that add tangential detail, historical corrections, attributions, and qualifications \u2014 use these to keep the main text clean while still being thorough.",
      "Use parenthetical asides within sentences to add caveats, humor, or tangential observations without breaking the flow \u2014 '(and specifically of making YC big)', '(or more precisely, preorders)'.",
      "End with acknowledgments listing people who read drafts \u2014 this is a genre convention of the Paul Graham essay format."
    ],
    "do_not": [
      "Do not open with a question, anecdote, or quotation \u2014 lead with the direct claim.",
      "Do not close with a neat summary or inspirational call to action \u2014 end with a reframing that gives the reader a new lens.",
      "Do not use formal academic formatting (numbered sections, abstracts, literature reviews) \u2014 use minimal, informal section headers and let the prose do the organizing."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.\""
    ]
  }
}
```

### sample-5.txt (4792 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 4792,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single independent clause with minimal embedding \u2014 keep the subject-verb-object spine visible and uncluttered.",
      "When extending a sentence, prefer chaining with coordinating conjunctions ('and', 'but', 'or') rather than deep subordination; stack clauses horizontally, not vertically.",
      "Use conditional structures ('if X, then Y') as a primary tool for reasoning sentences \u2014 frame thought experiments and logical implications as if/then pairs.",
      "Deploy very short declarative sentences as punchlines after a sequence of longer, explanatory ones \u2014 the short sentence delivers the verdict or the twist.",
      "When constructing compound-complex sentences, place the main claim at the end of the sentence so the earlier clauses build toward it like a ramp.",
      "Interrupt forward momentum with rhetorical questions, then immediately answer them or pivot \u2014 the question resets the reader's attention before the next move."
    ],
    "do_not": [
      "Do not write heavily subordinated, academic sentences with multiple nested relative clauses or participial phrases \u2014 never bury the main verb three clauses deep.",
      "Do not sustain a uniform sentence length across a paragraph; avoid a metronomic, undifferentiated rhythm where every sentence has the same cadence.",
      "Do not use inverted or ornamental syntax \u2014 never rearrange word order for literary effect or place the verb before the subject for emphasis."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"Dressing oddly gets you laughed at. Violating moral fashions can get you fired, ostracized, imprisoned, or even killed.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when stating personal motivation, intellectual curiosity, or admitting uncertainty \u2014 use it to model the thinking process rather than to assert authority.",
      "Address the reader directly with 'you' to pull them into thought experiments and hypotheticals \u2014 make the reader a participant in the argument, not a spectator.",
      "Maintain a conversational, collegial tone \u2014 write as if explaining an idea to a smart friend over coffee, not lecturing from a podium.",
      "Signal confidence through matter-of-fact assertion rather than hedging \u2014 state the claim plainly and let the logic do the persuading. When hedging, use 'I suspect' or 'I think' rather than passive or impersonal constructions.",
      "Use contractions selectively: use them in casual, conversational passages to maintain warmth, but drop them when making a deliberate, weighty statement to slow the reader down.",
      "Deploy dry, understated humor \u2014 deliver the joke with a straight face, often in a short sentence that follows a serious setup, letting irony do the work without signaling that you're being funny."
    ],
    "do_not": [
      "Do not adopt an academic, detached, or impersonal register \u2014 never write as though the author is absent from the text.",
      "Do not use self-deprecating humor that undermines the argument's credibility \u2014 humor should sharpen the point, not soften the author's stance.",
      "Do not be preachy or moralize \u2014 never lecture the reader about what they should believe; instead, walk them through the reasoning and let them arrive at the conclusion."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"Argue with idiots, and you become an idiot.\"",
      "\"You'd have to turn into Noam Chomsky.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through bold, unqualified assertions that provoke curiosity or mild discomfort \u2014 state the controversial or counterintuitive thing first, then build the case.",
      "Construct arguments by analogy: take the abstract principle and map it onto a vivid, concrete, often historical or everyday example that makes the logic feel obvious.",
      "Use historical examples as primary evidence \u2014 draw from real events, real people, and real cultural moments rather than citing studies or statistics.",
      "Build arguments through accumulation: present multiple independent angles on the same thesis (the 'conformist test', looking at trouble, examining labels, diffing cultures, studying mechanism) \u2014 each section is a fresh approach to the same question, not a linear chain.",
      "Handle counterarguments by preemptively voicing them as rhetorical questions ('Why would one want to do this?'), then answering them directly and confidently.",
      "Use thought experiments to test ideas \u2014 construct hypothetical scenarios ('Suppose in the future there is a movement to ban the color yellow') that make abstract principles concrete and testable.",
      "When hedging, use 'I suspect' or 'it seems' \u2014 reserve hedges for genuinely uncertain claims rather than sprinkling them everywhere."
    ],
    "do_not": [
      "Do not construct arguments through formal logical notation, numbered premises, or syllogistic structure \u2014 the logic should feel natural and conversational, not mechanical.",
      "Do not dismiss counterarguments without engagement \u2014 never wave away objections; instead, show why the objection doesn't hold or acknowledge its partial validity.",
      "Do not rely on appeals to authority or credentialism \u2014 never argue that something is true because an expert said so."
    ],
    "evidence": [
      "\"Like every other era in history, our moral map almost certainly contains a few mistakes. And anyone who makes the same mistakes probably didn't do it by accident. It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"Suppose in the future there is a movement to ban the color yellow. Proposals to paint anything yellow are denounced as 'yellowist', as is anyone suspected of liking the color.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently to deliver key claims, punchlines, or pivots \u2014 isolate the important statement so it lands with maximum force.",
      "Open paragraphs with the main claim or a provocative statement, then follow with elaboration, examples, or qualification \u2014 front-load the point.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the reader feel the progression through the ideas themselves, not through connectives like 'furthermore' or 'moreover'.",
      "When a paragraph extends beyond a few sentences, organize it as claim \u2192 example \u2192 implication, moving from abstract to concrete and back.",
      "Use section headers as structural pivots \u2014 break the essay into named sections that each tackle a different angle on the central question, giving the reader a map of the argument."
    ],
    "do_not": [
      "Do not write long, dense paragraphs that develop multiple sub-points before reaching a conclusion \u2014 each paragraph should have one clear job.",
      "Do not use formal transition phrases ('In addition', 'Furthermore', 'On the other hand') to connect paragraphs \u2014 the logical connection should be evident from the content itself.",
      "Do not end paragraphs with summative wrap-up sentences that restate what was just said \u2014 move forward, don't look back."
    ],
    "evidence": [
      "\"But they're much more dangerous.\"",
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"The age of consent fluctuates like hemlines.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogies drawn from everyday life and history to make abstract ideas tangible \u2014 map unfamiliar concepts onto familiar domains (fashion, mapmaking, stretching before a run, skating rinks).",
      "Employ rhetorical questions as structural devices \u2014 pose them to introduce a new section, reframe the argument, or voice the reader's objection before answering it.",
      "Use parallel structure to create memorable contrasts: set up two parallel clauses where one is the mundane version and the other is the loaded version ('Dressing oddly gets you laughed at. Violating moral fashions can get you fired, ostracized, imprisoned, or even killed.').",
      "Deploy lists with escalating items \u2014 arrange list elements so they build in severity or absurdity toward the final, most striking item.",
      "Use direct address and imperatives sparingly but decisively \u2014 'Look for prigs', 'Ask why', 'Take a label' \u2014 to give the reader concrete instructions for thinking.",
      "Repeat key terms and phrases ('can't say', 'moral fashion', 'heresy', 'taboo') throughout the essay to create thematic cohesion and build the conceptual vocabulary."
    ],
    "do_not": [
      "Do not use elaborate literary metaphors, extended conceits, or poetic imagery \u2014 keep figurative language grounded, quick, and functional.",
      "Do not use exclamation marks for emphasis \u2014 let the content and sentence structure create emphasis, not punctuation.",
      "Do not use alliteration, assonance, or other sonic devices for aesthetic effect \u2014 the prose should be clear and direct, not musical."
    ],
    "evidence": [
      "\"It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"Training yourself to think unthinkable thoughts has advantages beyond the thoughts themselves. It's like stretching.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a parenthetical meta-statement or brief abstract that frames the scope and stakes before diving in \u2014 tell the reader what question you're exploring and why it matters now.",
      "Begin the body with a vivid, relatable question or scenario that the reader can immediately connect with ('Have you ever seen an old photo of yourself and been embarrassed at the way you looked?') \u2014 use everyday experience as an on-ramp to the deeper argument.",
      "Structure the essay as a series of named sections, each offering a different method or angle for approaching the central question \u2014 the essay is an exploration, not a linear proof.",
      "Use section headers that are short, evocative, and sometimes borrowed from other languages or traditions ('Pensieri Stretti', 'Viso Sciolto?') \u2014 headers should intrigue, not just label.",
      "Close by returning to the practical question of what to do with the ideas developed in the essay \u2014 end with actionable advice or a philosophical reflection, not a summary.",
      "Use footnote references (bracketed numbers) to acknowledge tangential points, caveats, or sources without interrupting the main flow.",
      "Use em dashes and parentheticals for asides and qualifications that add nuance without derailing the sentence."
    ],
    "do_not": [
      "Do not open with a dictionary definition, a famous quote, or a generic statement about the human condition \u2014 start with something specific and engaging.",
      "Do not close with a neat summary that restates every point made \u2014 the ending should feel like a natural stopping point, not a recapitulation.",
      "Do not use bullet points or numbered lists as primary organizational devices within the body \u2014 structure through prose paragraphs and section breaks instead."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them. The latter was till recently something only a small elite had to think about. Now we all have to, because the Web has made us all publishers.)\"",
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"My advice is, don't say it. Or at least, pick your battles.\""
    ]
  }
}
```

## Raw Synthesis Data

```json
{
  "author_name": "Paul Graham",
  "sample_count": "5",
  "detected_genre": "essay",
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with analytical precision, reasoning aloud as a thoughtful peer",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause with one qualifying phrase or subordinate clause \u2014 keep the subject-verb-object spine visible at all times.",
      "When extending a sentence, prefer chaining with coordinating conjunctions ('and', 'but', 'or', 'because') rather than deeply nesting subordinate clauses; stack ideas horizontally, not vertically.",
      "Use conditional structures ('If you're X, you'll find Y') to set up cause-and-effect reasoning \u2014 let the if-clause do the setup before a clean main-clause payoff.",
      "Chain related ideas across consecutive sentences rather than packing them into one long sentence \u2014 each sentence advances the thought by one step, creating a walking rhythm of claim \u2192 elaboration \u2192 implication.",
      "Use sentence-initial conjunctions ('But', 'And', 'So') freely to create conversational forward momentum between sentences, as if continuing a thought mid-stride.",
      "When building longer sentences, prefer comma-separated parallel phrases over deeply nested subordination \u2014 use parallel infinitive or noun-phrase lists to create rhythmic momentum.",
      "Place subordinate clauses at the front of a sentence to set up context, then let the main clause land cleanly and uncluttered."
    ],
    "do_not": [
      "Do NOT write heavily subordinated academic sentences with multiple embedded relative clauses or participial phrases \u2014 keep nesting to one level at most.",
      "Do NOT use periodic sentence structure where the main point is delayed until the end of a long buildup \u2014 lead with the claim, then qualify.",
      "Do NOT settle into a monotone cadence where every sentence feels the same length and weight \u2014 let the rhythm emerge from the logic of the argument.",
      "Do NOT use semicolons as a regular habit to join independent clauses \u2014 prefer periods or conjunctions."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal experience or conviction, and shift to second person ('you') when offering generalizable advice \u2014 think alongside the reader rather than lecturing.",
      "Maintain the tone of a smart friend thinking out loud \u2014 authoritative through reasoning and experience, not credentials or citations.",
      "State claims plainly as your current best understanding, then immediately acknowledge complications with 'though,' 'but,' or a single qualifying sentence.",
      "Signal certainty through plain, unhedged declarations and signal genuine uncertainty through personal hedges ('I think so', 'I suspect', 'as far as I can tell') \u2014 never use impersonal academic hedges.",
      "Use contractions naturally in conversational passages to maintain warmth, but allow uncontracted forms when making a more deliberate or emphatic point.",
      "Let humor emerge from unexpected concrete examples, dry understatement, or ironic juxtaposition \u2014 never signal that you're being funny.",
      "Treat the reader as intelligent and ambitious \u2014 offer observations and frameworks rather than commands."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal academic voice \u2014 always let the author's presence be felt through 'I' statements and direct address.",
      "Do NOT be preachy or moralistic \u2014 frame advice as discovery and observation rather than prescription or exhortation.",
      "Do NOT over-qualify every claim with excessive hedging \u2014 state your view, then note the caveat once.",
      "Do NOT use hype language or motivational-speaker enthusiasm \u2014 no 'amazing', 'incredible', or 'game-changing'.",
      "Do NOT use exclamation marks or exclamatory phrasing for emphasis."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete observation or bold thesis stated plainly, then spend the essay proving it through accumulated examples from diverse domains rather than deductive logic.",
      "Advance arguments through a recurring structure: assert a principle \u2192 illustrate with a specific, vivid example \u2192 address a complication or exception \u2192 refine the principle.",
      "Use analogies that translate abstract concepts into visceral, everyday experiences as the primary persuasive device \u2014 make unfamiliar ideas feel obvious through familiar physical or social mappings.",
      "Handle counterarguments by raising them yourself (often in the reader's voice), giving them genuine weight, then folding them into a more nuanced version of the original claim rather than dismissing them.",
      "Build extended arguments by decomposition: break a complex concept into named components, then explore each individually before showing how they interact.",
      "Use historical examples and named real-world case studies as primary evidence \u2014 treat biography, anecdote, and concrete events as proof rather than citing statistics or studies.",
      "Use thought experiments and hypothetical reasoning to stress-test principles and show where they break down.",
      "Circle back to earlier points to show how later insights reframe them \u2014 the argument should feel recursive and deepening rather than strictly linear."
    ],
    "do_not": [
      "Do NOT rely on citations, data, statistics, or appeals to authority as primary evidence \u2014 use personal observation, concrete examples, and reasoning instead.",
      "Do NOT present arguments as formal logical proofs \u2014 avoid 'therefore', 'hence', 'it follows that' academic connectives.",
      "Do NOT introduce a new concept without immediately grounding it in a specific, recognizable scenario.",
      "Do NOT dismiss counterarguments without engagement \u2014 show why the objection doesn't hold or acknowledge its partial validity."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim, observation, or question that announces what the paragraph is about \u2014 no throat-clearing or transitional filler before reaching the point.",
      "Within paragraphs, sequence ideas as: claim \u2192 example or illustration \u2192 implication or qualification \u2014 move from abstract to concrete and back.",
      "Connect paragraphs through implicit logical continuity rather than explicit transition words \u2014 the next paragraph's opening should naturally follow from the previous paragraph's closing thought.",
      "When transitions are explicit, use simple connectives: 'But,' 'And,' 'So,' 'Or more precisely' \u2014 never 'Furthermore,' 'Moreover,' 'In addition.'",
      "When a paragraph introduces a question, let the next paragraph or subsequent sentence answer it \u2014 use this question-then-answer rhythm to simulate dialogue with the reader.",
      "Close paragraphs by landing on the sharpest or most memorable version of the point \u2014 save the best phrasing for the last sentence.",
      "Each paragraph should serve exactly one idea or one step in the argument \u2014 never meander through multiple unrelated points."
    ],
    "do_not": [
      "Do NOT begin paragraphs with heavy-handed transitions like 'Furthermore', 'In addition', 'Moreover', or 'On the other hand'.",
      "Do NOT write paragraphs that merely restate or summarize what was just said \u2014 every paragraph must advance the argument or introduce something new.",
      "Do NOT begin consecutive paragraphs with the same syntactic structure \u2014 vary openings between assertions, questions, examples, and qualifications.",
      "Do NOT bury the key insight in the middle of a paragraph \u2014 it should be near the top or at the very end."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, cross-domain analogies as the primary rhetorical tool \u2014 connect abstract concepts to tangible, often surprising physical or everyday experiences the reader can immediately feel.",
      "Deploy rhetorical questions at structural joints to redirect the essay and engage the reader \u2014 pose the question, then answer it yourself in the sentences that follow.",
      "Repeat key terms deliberately throughout the essay rather than varying with synonyms \u2014 build a consistent conceptual vocabulary the reader internalizes.",
      "Use parallel structure across consecutive sentences to show how one pattern repeats across domains.",
      "Use direct address and imperatives sparingly but decisively at key moments to pull the reader into active participation.",
      "Coin or borrow striking compressed phrases that crystallize complex ideas \u2014 give the reader vocabulary to carry away.",
      "Use enumerative lists embedded in prose to convey scope and range without bullet points."
    ],
    "do_not": [
      "Do NOT use ornamental literary devices like alliteration, assonance, extended metaphorical conceits, or poetic imagery \u2014 keep figurative language functional and quick.",
      "Do NOT use exclamation marks or dramatic punctuation for emphasis \u2014 rely on content and sentence placement instead.",
      "Do NOT pile up multiple rhetorical devices in a single sentence \u2014 use one device per moment and let it land cleanly.",
      "Do NOT use extended metaphors that run for multiple paragraphs \u2014 analogies should illuminate a point quickly and then step aside."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by immediately stating the core observation or thesis as a plain declarative sentence \u2014 no throat-clearing, no anecdote, no scene-setting.",
      "Establish the essay's central concept within the first few paragraphs and name it explicitly \u2014 give the reader a term to hold onto.",
      "Close by pushing the idea one step further or offering a final reframing \u2014 the ending should feel like the most expansive or forward-looking thought, not a summary.",
      "Use numbered endnotes (bracketed references like [1], [2]) to handle tangents, qualifications, caveats, and autobiographical asides without disrupting the main argument's flow \u2014 these notes should feel like conversational asides.",
      "Structure the essay as continuous prose organized by paragraph breaks \u2014 no bullet points, numbered lists, or heavy formatting in the main body.",
      "Use em dashes and parenthetical asides for quick clarifications or injected qualifications mid-sentence.",
      "End with an acknowledgments line thanking draft readers by name."
    ],
    "do_not": [
      "Do NOT open with a question, a quote from someone else, or a dramatic anecdote \u2014 begin with a plain declarative observation.",
      "Do NOT close with a tidy summary that restates all the main points \u2014 end by pushing the idea forward or offering a compressed reframing.",
      "Do NOT use headers, bullet points, numbered lists, or bold/italic formatting as organizational crutches within the main body \u2014 let the prose structure do the work."
    ]
  },
  "signature_phrases": {
    "use": [
      "as far as I can tell",
      "I think so",
      "I suspect",
      "it seems to me",
      "in my experience",
      "the way to",
      "the trick is",
      "the thing is",
      "in practice",
      "the most important",
      "you'd think",
      "who knew?",
      "but",
      "and yet",
      "or more precisely",
      "ditto for",
      "the result is",
      "it's not enough just to",
      "the reason is",
      "that would make sense"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "in addition",
      "consequently",
      "it could be argued that",
      "it has been observed that",
      "stakeholders",
      "leverage",
      "synergy",
      "paradigm",
      "utilize",
      "impactful",
      "game-changing",
      "incredible",
      "amazing",
      "absolutely",
      "essentially",
      "basically",
      "in conclusion",
      "to summarize",
      "it is important to note that",
      "needless to say",
      "at the end of the day",
      "going forward"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', 'in addition' with 'But', 'And', or no transition at all \u2014 let logical continuity connect paragraphs.",
    "Convert passive constructions ('it has been observed that') to active first-person ('I've noticed that') or direct assertion.",
    "Replace impersonal hedges ('it could be argued') with personal ones ('I think', 'I suspect') or remove the hedge entirely.",
    "Break any sentence with more than two levels of subordination into two separate sentences.",
    "Replace abstract claims that lack examples with a concrete, named, real-world illustration immediately after the claim.",
    "Convert formal transition phrases into simple conjunctions or implicit logical flow.",
    "Remove exclamation marks and replace exclamatory phrasing with plain declarative statements.",
    "Replace synonym variation of key terms with deliberate repetition of the exact same term throughout.",
    "Strip ornamental adjectives ('incredible', 'amazing', 'fascinating') and let the content carry its own weight.",
    "Convert any 'one should' or 'the entrepreneur must' to direct 'you' address."
  ]
}
```