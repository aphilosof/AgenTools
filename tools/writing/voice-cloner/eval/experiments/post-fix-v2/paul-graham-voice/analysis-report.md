# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, involved, explicit — conversational authority with intellectual curiosity and plain-spoken precision

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
      "Build most sentences as clean, medium-length structures with one main clause and at most one subordinate clause. Avoid piling up multiple dependent clauses within a single sentence.",
      "Alternate between medium sentences and deliberately short, punchy ones to create a conversational pulse. Use very short sentences (two to five words) as emphatic punctuation after a longer passage of reasoning.",
      "Chain ideas across sentences rather than within them \u2014 let each sentence carry one thought, then connect it to the next sentence with a logical link rather than cramming both thoughts into one compound sentence.",
      "When building longer sentences, prefer comma-separated conditional or concessive clauses at the front ('If you're naturally independent-minded, you're going to find it frustrating...') rather than trailing subordinate clauses.",
      "Use sentence fragments sparingly but powerfully as standalone paragraphs for maximum emphasis."
    ],
    "do_not": [
      "Do not write dense, heavily nested sentences with multiple semicolons and parenthetical asides embedded within clauses.",
      "Do not sustain long stretches of uniformly long sentences \u2014 always interrupt with a short, direct statement.",
      "Do not use ornate periodic sentence structures where the main verb is delayed until the very end."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"I know mine does.\"",
      "\"If you're naturally independent-minded, you're going to find it frustrating to be a middle manager.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first and second person, alternating between 'I' for personal experience and authority, and 'you' to directly address and include the reader. Use 'you' as the dominant mode when giving advice; switch to 'I' for anecdotes and personal conviction.",
      "Maintain a tone that is conversational, warm, and collegial \u2014 like a smart friend explaining something at a caf\u00e9. Be earnest and direct without being preachy or academic.",
      "Express confidence through plain declarative statements rather than through hedging or qualifications. When you are uncertain, say so plainly ('I think so', 'I would think so') rather than burying uncertainty in elaborate caveats.",
      "Use contractions naturally but not uniformly \u2014 contract in conversational passages, but occasionally use the uncontracted form when making a more deliberate or emphatic point.",
      "Allow self-reference and personal anecdote freely. Treat your own experience as legitimate evidence, stated matter-of-factly rather than apologetically."
    ],
    "do_not": [
      "Do not adopt an academic, detached, or impersonal register. Avoid passive constructions like 'it has been observed that' or 'one might argue.'",
      "Do not be self-deprecating or overly humble \u2014 state your views with quiet confidence. Avoid phrases like 'I could be wrong but' or 'this is just my opinion.'",
      "Do not lecture or moralize. Avoid imperative commands softened by 'you should really' or 'you must.' Instead, describe what works and let the reader draw conclusions."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"Can you increase your fastidiousness about truth? I would think so.\"",
      "\"I certainly got a strong dose of it from my father.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete, accessible claim or observation, then build outward by showing the same pattern in multiple domains (science, investing, startups, essays) before abstracting to a general principle.",
      "Advance arguments through a series of parallel examples that reinforce the same point from different angles. Each example should feel like it naturally extends the previous one.",
      "Introduce counterarguments and complications with plain transitional phrases ('But', 'One difficulty here, though', 'There may even be') and address them honestly before moving on. Don't dismiss objections \u2014 integrate them into the argument.",
      "Use analogies drawn from everyday life and concrete experience to make abstract points tangible. Prefer food, physical space, and social situations over technical or literary analogies.",
      "Structure the overall argument as an exploration rather than a proof. Move from observation to analysis to practical advice, as if thinking through the problem in real time with the reader.",
      "When decomposing a concept, explicitly name its components ('It seems to me that it has three components') and then address each one in turn, creating clear architecture without formal headers."
    ],
    "do_not": [
      "Do not present arguments as settled dogma with no room for nuance. Always leave space for uncertainty and qualification where honest.",
      "Do not rely on citations, statistics, or appeals to authority. Ground arguments in reasoning, observation, and personal experience instead.",
      "Do not use formal logical connectives like 'therefore,' 'thus,' 'consequently,' or 'moreover' \u2014 prefer plain English transitions like 'but,' 'and,' 'so,' 'which means.'"
    ],
    "evidence": [
      "\"To be a successful scientist, for example, it's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"To the independent-minded, this seems unpardonably sloppy.\"",
      "\"just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Keep paragraphs tight \u2014 most should develop a single idea in a few sentences. Don't let paragraphs sprawl into multi-idea blocks.",
      "Use single-sentence paragraphs frequently for emphasis, punchlines, or pivots. These act as rhetorical rests that let the reader absorb the preceding point.",
      "Open paragraphs with the key claim or observation, then develop it with examples or reasoning. Rarely bury the point at the end.",
      "Connect paragraphs through logical continuation rather than explicit transition words. Let the idea at the end of one paragraph naturally raise the question that the next paragraph answers.",
      "When shifting to a new subtopic, use a visual separator or a paragraph that explicitly signals the pivot ('To go beyond this general advice, we need to look at...')."
    ],
    "do_not": [
      "Do not write long paragraphs that address multiple distinct ideas \u2014 split them.",
      "Do not begin paragraphs with formulaic transitions like 'Furthermore,' 'Additionally,' 'In conclusion,' or 'On the other hand.'",
      "Do not end every paragraph with a tidy summary sentence. Let some paragraphs trail off naturally or pivot forward to the next thought."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"maybe you should change something.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map an abstract concept onto a concrete, sensory experience. Develop the analogy enough to make it vivid but not so much that it becomes the focus.",
      "Employ parallel structure across sentences and paragraphs to build momentum. Repeat the same syntactic pattern with different content to show a pattern across domains ('The same is true for investors... You see this pattern with startup founders too... Ditto for essayists').",
      "Ask genuine rhetorical questions that the essay then answers. Use them to transition between sections or to voice the reader's likely objection ('Can you make yourself more independent-minded?').",
      "Use direct address and second-person imperatives sparingly but effectively ('Treat it as a puzzle', 'See if you can guess which'). These should feel like invitations, not commands.",
      "Deploy vivid, unexpected metaphors to crystallize a point \u2014 especially ones that create a slight shock of recognition ('niche conformists,' 'gluttons of curiosity,' 'violent storms of conventional-mindedness that remind me of descriptions of Jupiter').",
      "Use deliberate word repetition (especially key terms like 'independent-minded,' 'conventional-minded,' 'curiosity,' 'fastidiousness') rather than reaching for synonyms. Let the repeated terms become a rhythmic and conceptual anchor."
    ],
    "do_not": [
      "Do not use literary or highbrow allusions. Keep references grounded in common experience and well-known real-world examples.",
      "Do not use exclamation marks or other typographic emphasis for excitement. Let word choice and sentence structure carry the emotional weight.",
      "Do not overuse rhetorical questions \u2014 deploy them at structural turning points, not as a tic within paragraphs."
    ],
    "evidence": [
      "\"just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"Whereas the independent-minded are the gluttons of curiosity, who keep eating even after they're full.\"",
      "\"violent storms of conventional-mindedness that remind me of descriptions of Jupiter.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, bold thesis statement that sounds almost obvious but contains the seed of a surprising distinction. Do not open with a question, anecdote, or scene \u2014 start with the idea itself, stated simply.",
      "Establish the essay's terrain in the first few paragraphs by showing the thesis applied to multiple concrete domains, creating a sense of universality before narrowing the focus.",
      "Close with a concise, memorable formulation that reframes the essay's central idea \u2014 ideally as practical advice with a slightly unexpected twist. The ending should feel like a quiet landing, not a dramatic flourish.",
      "Include numbered endnotes for digressions, qualifications, and tangential observations that would interrupt the main flow. These notes should have their own personality \u2014 more speculative and offhand than the main text.",
      "Use horizontal separators (visual breaks) to mark major structural shifts in the essay rather than headers or subheadings.",
      "Format as continuous prose with no bullet points, numbered lists, or bold/italic emphasis in the main body. The essay should read as a single flowing argument."
    ],
    "do_not": [
      "Do not open with a hook designed to create suspense or mystery. Start with clarity.",
      "Do not close with a grand summary that restates all the main points. End with a single, resonant thought.",
      "Do not use subheadings, bold text, or other structural formatting within the essay body \u2014 rely entirely on paragraph breaks and visual separators for structure."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"Exception: gossip. Almost everyone is curious about gossip.\""
    ]
  }
}
```

### sample-2.txt (3580 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3580,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, keeping most sentences at a moderate length, then punctuate the flow with very short declarative sentences for emphasis or pivot points.",
      "Use compound sentences joined by commas and coordinating conjunctions (especially 'and' and 'but') to chain related ideas within a single breath, but avoid deeply nested subordination.",
      "Deploy occasional long sentences with multiple clauses when laying out a causal chain or unpacking a complex mechanism, but always follow them with shorter sentences that land the point.",
      "Use sentence fragments sparingly and only for dramatic emphasis \u2014 a standalone clause that drives home a conclusion.",
      "Begin sentences frequently with coordinating conjunctions ('But,' 'And,' 'So') to create a conversational, forward-moving momentum that makes arguments feel like a live thought process."
    ],
    "do_not": [
      "Do not write consistently long, ornate sentences with multiple levels of embedding \u2014 keep the baseline moderate and vary from there.",
      "Do not use semicolons as a primary clause-joining strategy; prefer periods or coordinating conjunctions.",
      "Do not let rhythm become monotonous \u2014 always alternate between moderate and short sentences, using the short ones as punctuation marks in the argument."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as a thinker sharing hard-won insights, but shift freely to second person ('you') when giving advice or drawing the reader into the argument. Use 'we' when claiming shared human experience or ignorance.",
      "Maintain a tone that is authoritative but not arrogant \u2014 present bold claims as personal conclusions reached through long thinking, not as unchallengeable truths. Signal this with phrases like 'as far as I can tell,' 'I find that,' 'it may seem.'",
      "Keep the register collegial and conversational: use contractions selectively for natural flow, address the reader as an intelligent peer who might be ambitious, and avoid both academic stiffness and excessive casualness.",
      "Express confidence through directness and simplicity of statement rather than through emphatic language. Let the strength of the claim carry its own weight.",
      "Use understated, dry humor that emerges from the logic of the argument itself rather than from jokes or wordplay."
    ],
    "do_not": [
      "Do not adopt a lecturing or professorial distance \u2014 always write as someone thinking alongside the reader, not above them.",
      "Do not use exclamation marks or effusive language to signal excitement; let the ideas themselves generate energy.",
      "Do not hedge excessively \u2014 use hedges strategically at specific moments of genuine uncertainty, not as a habitual tic."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Be honest, especially with yourself. Exercise and eat and sleep well and avoid the more dangerous drugs.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive claim that reframes something the reader thought they understood, then spend the essay unpacking and proving that claim through multiple angles.",
      "Build arguments by taxonomizing: break a complex phenomenon into its fundamental components (e.g., two causes, two types), then examine each component separately before showing how they interact.",
      "Use concrete, vivid examples drawn from diverse domains \u2014 startups, bacterial cultures, empires, bicycle riding, Newton, Russian roulette \u2014 to ground abstract claims. Move rapidly between examples rather than belaboring any single one.",
      "Derive practical heuristics from theoretical observations. After establishing a pattern, ask 'what follows from this?' and offer actionable advice for the reader.",
      "Handle counterarguments preemptively and briefly: acknowledge the objection in a sentence or two, then explain why it doesn't hold, and move on without dwelling.",
      "Use the structure of 'It may seem X, but actually Y' to set up and then overturn the reader's assumptions.",
      "Build chains of reasoning where each conclusion becomes the premise of the next argument, creating a sense of cumulative intellectual momentum."
    ],
    "do_not": [
      "Do not present evidence through formal citations or appeal to authority \u2014 instead, use the inherent logic of examples to make the case.",
      "Do not spend more than a sentence or two on any single counterargument; acknowledge and dispatch quickly.",
      "Do not let the argument become purely abstract \u2014 always return to specific, concrete instances."
    ],
    "evidence": [
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\"",
      "\"In the startup world, the name for this principle is 'do things that don't scale.'\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or observation that advances the argument, not with throat-clearing or context-setting. Jump straight to the point.",
      "Use single-sentence paragraphs deliberately for emphasis \u2014 to land a key conclusion, create a dramatic pause, or mark a turn in the argument.",
      "Close paragraphs by either delivering the payoff of the paragraph's claim, or by pivoting toward the next idea with a forward-looking statement that pulls the reader onward.",
      "Keep paragraphs focused on one idea or one step in the argument. When moving to a new facet, start a new paragraph rather than cramming multiple moves into one.",
      "Use implicit transitions: let the logical connection between paragraphs do the work rather than relying on explicit transition phrases like 'furthermore' or 'moreover.' The next paragraph should feel like the natural next thought."
    ],
    "do_not": [
      "Do not write long paragraphs that try to accomplish too many argumentative moves at once \u2014 split them at natural pivot points.",
      "Do not use formulaic transition words between paragraphs; trust the reader to follow the logical thread.",
      "Do not bury the point at the end of a long build-up within a paragraph \u2014 front-load the claim, then support it."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"There's a surprising amount of technique to doing great work.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary persuasive tool: illuminate an abstract concept by showing it operates identically in a seemingly unrelated field (bacterial cultures and startups, empires and knowledge, sports thresholds and mathematical proofs).",
      "Deploy rhetorical questions to pivot the argument or introduce a new section. Use them to voice what the reader is likely thinking, then answer immediately.",
      "Use repetition of key terms ('superlinear returns,' 'exponential growth,' 'thresholds') as conceptual anchors throughout the essay \u2014 don't vary the terminology for the sake of variety when precision matters.",
      "Employ antithesis and contrast structures to sharpen distinctions: 'not X but Y,' 'It's not just A, but also B.'",
      "Use lists sparingly and when you do, make them feel comprehensive and surprising \u2014 mix expected and unexpected entries to keep the reader alert.",
      "Use direct address and imperatives ('seek,' 'choose,' 'don't overoptimize') when delivering practical advice, shifting the essay from analytical to prescriptive mode."
    ],
    "do_not": [
      "Do not use elaborate literary metaphors or extended figurative conceits \u2014 keep analogies concrete, practical, and brief.",
      "Do not use exclamatory rhetoric or emotional appeals; persuade through the force of logical demonstration and well-chosen examples.",
      "Do not vary key terminology for stylistic reasons \u2014 if a concept has a precise name, use that name consistently."
    ],
    "evidence": [
      "\"When they grow at all, they grow exponentially. But they're tricky to grow. Which means the difference in outcome between someone who's adept at it and someone who's not is very great.\"",
      "\"What are fields where a few big winners outperform everyone else? Here are some obvious ones: sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.\"",
      "\"Your curiosity won't let you be interested in boring questions, and interesting questions tend to create fields with superlinear returns if they're not already part of one.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal, reflective statement that immediately stakes out a bold intellectual claim. Frame the essay's thesis as a personal realization or a misunderstanding corrected.",
      "Establish the essay's scope in the first few paragraphs: state the phenomenon, demonstrate its reality with a quick example, preempt the obvious objection, and then signal the essay's structure ('they reduce to two fundamental causes').",
      "Close by zooming out to the broadest implications, then narrow back to direct advice for the reader. End on a note that is forward-looking and slightly poetic \u2014 often a metaphor or image that captures the essay's essence.",
      "Use numbered footnotes in brackets (e.g., [1], [2]) for digressions, qualifications, historical context, and personal anecdotes that would interrupt the main argument's flow. Place the footnotes at the end.",
      "Use em dashes sparingly. Prefer commas and parenthetical clauses for asides. Use colons to introduce explanations or elaborations.",
      "Format as a continuous prose essay with no headers or subheadings. Let the argument's own structure create implicit sections.",
      "End the piece with an acknowledgments line thanking draft readers \u2014 this is a genre convention of the personal intellectual essay."
    ],
    "do_not": [
      "Do not use headers, bullet points, or other structural formatting within the body of the essay \u2014 rely entirely on paragraph breaks and the argument's logic to organize the piece.",
      "Do not open with an abstract, a question, or a scene \u2014 open with a direct personal-intellectual statement.",
      "Do not close with a neat summary or recap of points made \u2014 instead, let the ending feel like it opens onto something larger, leaving the reader with momentum rather than closure."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"The territory of superlinear returns is by no means static. Indeed, the most extreme returns come from expanding it.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\""
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
      "Build sentences primarily at a moderate length, then punctuate the flow with very short sentences\u2014sometimes as brief as two words\u2014to deliver conclusions, reversals, or emphasis with maximum force.",
      "Chain clauses using coordinating conjunctions (and, but, or) rather than subordinating constructions; let ideas accumulate horizontally rather than nest hierarchically.",
      "Use compound structures joined by semicolons to set up contrasts or parallels between two closely related observations within a single sentence.",
      "Deploy sentence fragments deliberately as standalone paragraphs to land a punchline or a definitive answer (e.g., 'There isn't.').",
      "When building longer sentences, stack conditions or qualifications using commas before delivering the main point at the end, creating a slight suspense effect.",
      "Alternate between medium-length explanatory sentences and short declarative punches to create a conversational, thinking-aloud rhythm."
    ],
    "do_not": [
      "Do not write dense, multi-layered subordinate clauses that require the reader to hold several nested ideas in mind simultaneously.",
      "Do not let long sentences pile up without a short sentence to break the rhythm and reset the reader's attention.",
      "Do not use flowery or ornate syntax; keep sentence structures clean and transparent even when they run long."
    ],
    "evidence": [
      "There isn't.",
      "You need both.",
      "And the rule is the same: working hard means aiming toward the center \u2014 toward the most ambitious problems."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person singular as the default, sharing personal experience and honest self-reflection as the primary source of authority. Shift to second person ('you') when generalizing from personal insight to advice the reader can act on.",
      "Maintain a tone that is conversational, warm, and earnest\u2014like a smart friend thinking through a problem aloud rather than a professor lecturing. Be direct but never aggressive.",
      "Express confidence through simple, unhedged declarative statements when delivering core insights ('You need both.' 'There isn't.'). Reserve hedging language ('I suspect,' 'I think,' 'probably') for genuinely uncertain observations or when acknowledging limits of personal experience.",
      "Use contractions sparingly\u2014employ them to maintain conversational warmth in casual passages but drop them when making emphatic or important claims to add gravity.",
      "Signal intellectual honesty by explicitly naming what you don't know or aren't sure about. Phrases like 'I wasn't sure,' 'I can't be sure,' and 'That may sound like' build trust by showing the author doesn't overclaim.",
      "Avoid humor as performance; if humor appears, let it emerge naturally from honest observation or self-deprecation ('like a dog circling while it decides exactly where to lie down')."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic tone\u2014always keep the 'I' present as someone who has lived through these ideas.",
      "Do not be preachy or moralistic; present insights as discoveries rather than commandments.",
      "Do not use false modesty or excessive hedging that undermines the clarity of the point being made."
    ],
    "evidence": [
      "I wasn't sure of that as a kid.",
      "I suspect most people have to learn what work is before they can love it.",
      "Between essays I fuss for a few days, like a dog circling while it decides exactly where to lie down."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a common assumption or surface-level observation, then progressively complicate it by revealing layers the reader hasn't considered. The essay's trajectory is one of deepening, not pivoting.",
      "Build arguments through personal anecdote first, then generalize outward. The author's own experience is the primary evidence, supplemented by brief references to famous figures (Gates, Messi, Wodehouse, Hardy) as corroborating examples rather than appeals to authority.",
      "Handle counterarguments by raising them yourself in the reader's voice ('Sounds a bit extreme, you think') and then addressing them directly. Preempt objections rather than ignoring them.",
      "Use the pattern: state a principle \u2192 illustrate with a concrete example \u2192 qualify or complicate the principle \u2192 restate it in refined form. This recursive deepening is the core logical structure.",
      "Introduce key claims as discoveries\u2014things the author has learned over time\u2014rather than as axioms. Frame wisdom as hard-won, not self-evident.",
      "When the topic branches into sub-questions, explicitly name them ('The bigger question...', 'What even counts as good results?') to maintain the reader's orientation before exploring each one.",
      "Hedge when genuinely uncertain and be explicit about it: 'I don't know enough to say for sure whether it's net good or bad, but my guess is bad.'"
    ],
    "do_not": [
      "Do not present arguments as formal logical proofs with premises and conclusions; keep the reasoning conversational and exploratory.",
      "Do not dismiss counterarguments\u2014always engage with them honestly, even if briefly.",
      "Do not rely on data, statistics, or citations as primary evidence; personal experience and well-known exemplars carry the argument."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.",
      "That seems so obvious, and yet in practice we find it slightly hard to grasp."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently and deliberately\u2014for definitive answers, pivots, or to let an important idea breathe on its own ('There isn't.' / 'Perhaps something changes at adolescence. That would make sense.' / 'You need both.').",
      "Open paragraphs with the key claim or observation, then spend the rest of the paragraph unpacking, illustrating, or qualifying it. Topic-sentence-first is the dominant pattern.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words. Let the reader feel the progression through the ideas themselves, not through connectives like 'furthermore' or 'moreover.'",
      "When transitioning between major sections of the argument, use a paragraph that simultaneously closes one thread and opens the next: 'What I've learned since I was a kid is how to work toward goals that are neither clearly defined nor externally imposed.'",
      "Keep paragraphs relatively compact. When a paragraph threatens to grow long, break the idea into two paragraphs rather than letting one become unwieldy.",
      "Sequence ideas within a paragraph as: assertion \u2192 concrete detail or example \u2192 implication or complication."
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'In addition,' 'Furthermore,' 'On the other hand'\u2014the logic should carry the reader forward without signposting.",
      "Do not write long, dense paragraphs that try to cover multiple distinct ideas; one paragraph, one core idea.",
      "Do not end paragraphs with neat summaries that close off thinking\u2014leave room for the next paragraph to pick up and develop further."
    ],
    "evidence": [
      "There isn't.",
      "That limit varies depending on the type of work and the person.",
      "It can be harder to discover your interests than your talents."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday analogies and similes to make abstract ideas vivid and relatable: comparing inner experience to a dog circling before lying down, or being chased by a pursuing beast.",
      "Employ rhetorical questions as a thinking tool\u2014pose them as the reader would naturally ask them, then answer them directly. Questions serve as structural pivots that transition between stages of the argument.",
      "Use repetition of key phrases across paragraphs to build thematic coherence: 'the shape of real work,' 'working hard,' 'aiming toward the center.' Let these phrases become refrains that unify the essay.",
      "Deploy parallel structure in lists and series to give advice rhythmic force: 'you have to learn not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong.'",
      "Use em dashes sparingly, for parenthetical clarifications or to append an afterthought that reframes the preceding clause.",
      "Include direct quotes from real people (Gates, Collison, Wodehouse, Hardy) to let other voices corroborate your points\u2014but keep the quotes short and let your own voice frame them.",
      "Use antithesis and contrast as a primary persuasive structure: set up what seems obvious, then reveal the hidden tension ('That seems so obvious, and yet in practice we find it slightly hard to grasp')."
    ],
    "do_not": [
      "Do not use elaborate literary metaphors or extended figurative passages\u2014keep analogies brief, grounded, and immediately clear.",
      "Do not use exclamation marks or hyperbolic language to generate excitement; let the ideas themselves carry the energy.",
      "Do not deploy academic rhetorical devices like chiasmus or elaborate antimetabole\u2014the persuasion should feel natural, not crafted."
    ],
    "evidence": [
      "But once I get started on one, I don't have to push myself to work, because there's always some error or omission already pushing me.",
      "Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question.",
      "Like a Spanish Flu victim, you're fighting your own immune system: Instead of giving up, you tell yourself, I should just try harder."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a deceptively simple, slightly contrarian observation that signals the piece will go deeper than the reader expects. The first sentence should feel like the beginning of a conversation, not a thesis statement.",
      "Establish context quickly through personal reflection\u2014within the first few paragraphs, the reader should know that this is the author thinking through something they've genuinely grappled with over time.",
      "Close the essay by zooming out to a synthesized restatement of the core insight, but frame it as a system or process rather than a pithy maxim. The ending should feel like arriving at a vantage point from which everything discussed becomes visible at once.",
      "End with a conditional promise or an optimistic note that is earned by the preceding honesty: 'if you're consistently honest and clear-sighted, it will automatically assume an optimal shape.'",
      "Use numbered endnotes (bracketed references like [1], [2]) to handle tangents, qualifications, and asides that would interrupt the main argument's flow. These notes are conversational in tone, not academic.",
      "Format with minimal visual apparatus\u2014no headers, no bullet points, no bold text within the body. Let paragraph breaks and white space do all the structural work.",
      "Parenthetical asides within sentences should be used to inject quick clarifications or self-aware commentary: '(which is a form of lying to yourself).'",
      "Follow the genre convention of the personal essay: one mind working through one question from confusion toward clarity, with the reader invited along for the journey."
    ],
    "do_not": [
      "Do not open with a grand thesis statement or a sweeping claim about the human condition\u2014start small and specific.",
      "Do not close with a call to action or an imperative command; end with an observation that feels like wisdom rather than instruction.",
      "Do not use section headers, bullet points, or other structural formatting within the body\u2014the essay should flow as continuous prose with endnotes for digressions."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.",
      "In the average American high school, you have a choice of pretending to do something serious, or seriously doing something pretend."
    ]
  }
}
```

### sample-4.txt (3200 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3200,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences that default to a clean subject-verb-object backbone, then extend them with one or two trailing clauses using commas, dashes, or conjunctions \u2014 keep the core simple even when the sentence grows long.",
      "Alternate between brisk, punchy sentences and longer explanatory ones to create a conversational cadence \u2014 use short sentences to land a point, then follow with a longer sentence that unpacks or qualifies it.",
      "Use sentence fragments deliberately for emphasis, especially to answer a rhetorical question or to deliver a punchline ('Or they don't, in which case the market must not exist.').",
      "Chain clauses with 'and,' 'but,' and 'because' rather than with subordinating constructions \u2014 prefer coordination over subordination to maintain a forward-driving, additive rhythm.",
      "When a sentence could become unwieldy, break it into two sentences linked by a transitional word ('But,' 'And,' 'So') at the start of the second \u2014 do not fear starting sentences with conjunctions."
    ],
    "do_not": [
      "Do not write heavily nested subordinate clauses or academic-style periodic sentences that delay the main verb \u2014 the reader should never have to re-read a sentence to find the point.",
      "Do not sustain the same sentence length for more than two or three sentences in a row \u2014 monotonous rhythm kills the conversational feel.",
      "Do not use semicolons as a primary clause-joining device; prefer periods or conjunctions."
    ],
    "evidence": [
      "\"You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist.\"",
      "\"He didn't stay long, but he wouldn't have returned at all if he'd realized Microsoft was going to be even a fraction of the size it turned out to be.\"",
      "\"That would be a great problem to have. See if you can make it happen.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a knowledgeable insider who has personally witnessed what you're describing \u2014 adopt the stance of a mentor sharing hard-won lessons with founders, not a professor lecturing students.",
      "Use first person ('I,' 'we') to anchor claims in personal experience, and second person ('you') to pull the reader into the argument as if giving them direct advice.",
      "Signal confidence through declarative assertions and imperatives ('You have to go out and get them'), but soften absolute claims with honest hedges like 'usually,' 'often,' 'I think,' 'probably' \u2014 never hedge so much that the advice feels wishy-washy.",
      "Deploy dry, understated humor through unexpected analogies and self-aware asides rather than through jokes or wit for its own sake ('We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.').",
      "Use contractions freely in the main text to maintain a conversational register, but allow occasional uncontracted forms ('do not,' 'it is') when the moment calls for emphasis or formality."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic voice \u2014 always maintain the feeling of one smart person talking directly to another.",
      "Do not use corporate jargon, buzzwords, or motivational-speaker enthusiasm \u2014 the tone should be plain-spoken and grounded, never hype-driven.",
      "Do not be self-aggrandizing about personal experience; mention it matter-of-factly as evidence, not as credential-building."
    ],
    "evidence": [
      "\"I've seen it happen. I often have to encourage founders who don't see the full potential of what they're building.\"",
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"Who knew?\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly, then spend the rest of the piece proving it through accumulated real-world examples rather than abstract reasoning.",
      "Advance arguments through concrete startup stories \u2014 name the company, name the founder, describe the specific action they took. Abstraction should emerge from examples, not precede them.",
      "Anticipate the reader's objections and address them inline, often by naming the objection explicitly ('The other reason founders ignore this path is that the absolute numbers seem so small at first') and then refuting it.",
      "Use analogies and metaphors to crystallize abstract points \u2014 draw them from everyday physical experience (cranking an engine, keeping a fire contained, a newborn baby) rather than from other business contexts.",
      "Structure the overall argument as a series of related tactics united by a single principle, using section headers as signposts \u2014 each section introduces a variant of the core idea with fresh examples.",
      "Acknowledge limitations honestly but briefly ('it's not enough just to do something extraordinary initially') and then redirect back to the actionable point."
    ],
    "do_not": [
      "Do not argue from pure theory or first principles without grounding claims in specific named examples \u2014 every claim should have a story behind it.",
      "Do not dismiss counterarguments flippantly; name the real reason someone might disagree and then explain why they're wrong.",
      "Do not use formal logical connectives ('therefore,' 'moreover,' 'furthermore') \u2014 the logic should flow from the narrative, not from signpost words."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs. That's what Facebook did.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or observation stated directly \u2014 do not warm up or provide context before getting to the point.",
      "Use single-sentence paragraphs frequently for emphasis, to land a key insight, or to create a pause between longer argumentative blocks ('I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.').",
      "Within multi-sentence paragraphs, follow a claim-example-implication pattern: state the idea, illustrate it with a specific case, then draw the broader lesson.",
      "Transition between paragraphs implicitly through thematic continuity rather than through explicit transition phrases \u2014 let the next paragraph's opening sentence signal the shift.",
      "Use bold section headers (single words or short phrases) to mark major topic shifts, keeping paragraphs within a section tightly focused on that topic.",
      "Close paragraphs by either pivoting toward the next idea or landing a memorable phrase that crystallizes the preceding argument."
    ],
    "do_not": [
      "Do not write paragraphs that meander through multiple unrelated ideas \u2014 each paragraph should serve one clear purpose.",
      "Do not use formulaic transition phrases ('In addition,' 'On the other hand,' 'In conclusion') to connect paragraphs \u2014 the connection should feel natural, not mechanical.",
      "Do not pad paragraphs with restated information or unnecessary qualifications; keep them lean."
    ],
    "evidence": [
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"But in retrospect that too was the optimal path to dominating a big market.\"",
      "\"How do you find users to recruit manually? If you build something to solve your own problems, then you only have to find your peers, which is usually straightforward.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid physical metaphors and analogies to make abstract business concepts tangible \u2014 prefer everyday mechanical or biological imagery (cranks, fire, newborn babies, boulders, train cars) over literary or highbrow references.",
      "Deploy rhetorical questions sparingly to voice the reader's likely objection or to transition to a new section, then answer them immediately ('Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.').",
      "Coin memorable phrases and labels for patterns to make them sticky ('Collison installation,' 'pulling a Meraki,' 'contained fire strategy') \u2014 name the technique so readers can refer back to it.",
      "Use direct address and imperatives to create urgency and agency ('See if you can make it happen,' 'You have to go out and get them').",
      "Employ contrast and antithesis to sharpen points \u2014 juxtapose what founders believe against what's actually true, or what seems small against what becomes large.",
      "Use quotation of specific people (founders, Steve Jobs) to add authority and specificity, embedding their words naturally into the argument."
    ],
    "do_not": [
      "Do not use extended or elaborate metaphors that stretch across multiple paragraphs \u2014 introduce a metaphor, use it to make a point, and move on.",
      "Do not use rhetorical questions without immediately answering them \u2014 they should function as section transitions, not as decoration.",
      "Do not rely on abstract rhetorical flourishes like chiasmus, litotes, or other conspicuously 'literary' devices \u2014 the persuasion should feel earned through evidence, not technique."
    ],
    "evidence": [
      "\"At YC we use the term 'Collison installation' for the technique they invented.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"I occasionally meet founders who seem to believe startups are projectiles rather than powered aircraft, and that they'll make it big if and only if they're launched with sufficient initial velocity.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the piece with the central thesis stated as a plain, bold assertion in the very first sentence \u2014 no anecdote, no scene-setting, no preamble. The reader should know exactly what the essay argues within the first line.",
      "Immediately after the thesis, acknowledge the conventional wisdom it contradicts, then spend the rest of the essay dismantling that wisdom through examples.",
      "Structure the essay as a series of named sections (bold single-word or short-phrase headers: 'Recruit,' 'Fragile,' 'Delight,' 'Fire,' 'Meraki,' 'Consult,' 'Manual,' 'Big,' 'Vector') \u2014 each section explores a different facet of the central thesis with its own examples.",
      "Close the essay by reframing the thesis at a higher level of abstraction \u2014 introduce a new metaphor or conceptual frame (startup ideas as vectors, not scalars) that synthesizes everything preceding it.",
      "Append endnotes (numbered bracketed references in the text, notes collected at the end) for digressions, attributions, caveats, and tangential observations that would interrupt the flow of the main argument.",
      "Use formatting sparingly: bold for section headers only, no bullet lists in the main text, no italics for emphasis. Let sentence construction handle emphasis.",
      "End with acknowledgments and translation links as a convention of the genre (published essay/blog post), signaling community and craft."
    ],
    "do_not": [
      "Do not open with a question, a quotation, or an anecdote \u2014 lead with the argument itself.",
      "Do not close with a summary that restates each section's point \u2014 instead, elevate the argument to a new conceptual level that feels like a natural culmination.",
      "Do not use numbered or bulleted lists in the body of the essay \u2014 present information as flowing prose, even when listing multiple items or examples."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"[1] Actually Emerson never mentioned mousetraps specifically.\""
    ]
  }
}
```

### sample-5.txt (4800 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 4800,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone of the essay from short, declarative sentences that land with conversational punch \u2014 subject-verb-object, minimal decoration.",
      "Follow a cluster of medium-length explanatory sentences with a single short sentence that delivers the punchline or thesis \u2014 use brevity as emphasis, not as default.",
      "When constructing longer sentences, chain clauses with commas and coordinating conjunctions ('and', 'but', 'or') rather than subordinating syntax \u2014 keep the logic additive and linear, never nested.",
      "Use sentence fragments sparingly and only as standalone paragraphs for maximum rhetorical punch \u2014 they should feel like a mic drop, not a grammatical slip.",
      "Alternate between stretches of analytical multi-clause sentences and abrupt one-liners to create a rhythm that mimics spoken argument \u2014 lecture, then land the point."
    ],
    "do_not": [
      "Do NOT write ornate, multi-layered sentences with nested subordinate clauses \u2014 if a sentence requires re-reading to parse, it's too complex.",
      "Do NOT maintain a uniform sentence length throughout a passage \u2014 monotony kills the conversational rhythm.",
      "Do NOT use participial phrases or absolute constructions to open sentences \u2014 the style favors direct, subject-first construction."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"But they're much more dangerous.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as a thinking companion, not as a lecturer \u2014 share your reasoning process openly, including doubts and uncertainties, so the reader feels they're figuring things out alongside you.",
      "Address the reader directly with 'you' to make abstract arguments feel personal and immediate \u2014 frame thought experiments as things the reader might actually do or experience.",
      "Maintain an earnest, intellectually curious tone that takes ideas seriously without taking yourself too seriously \u2014 the register is 'smart friend explaining something over coffee,' not 'professor at the podium.'",
      "Signal confidence through understatement rather than bold declaration \u2014 use phrases like 'I suspect,' 'it seems,' 'I think' to soften claims while still advancing strong positions.",
      "Use contractions naturally and consistently to maintain conversational warmth \u2014 'don't,' 'can't,' 'it's,' 'you'd' \u2014 as if speaking aloud.",
      "Deploy dry, understated humor that emerges from the logic of the argument itself rather than from jokes or wordplay \u2014 let the absurdity of a situation speak for itself."
    ],
    "do_not": [
      "Do NOT adopt an academic or institutional voice \u2014 avoid passive constructions, nominalized verbs, and formal hedging language like 'it should be noted that.'",
      "Do NOT be preachy or moralize \u2014 present dangerous or controversial ideas with calm curiosity, not with indignation or missionary zeal.",
      "Do NOT use sarcasm or snark that punches down \u2014 humor should illuminate, not mock."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"I'm not arguing for or against this idea here. It is probably inevitable that parents should want to dress up their kids' minds in cute little baby outfits. I'll probably do it myself.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central claim early and plainly, then spend the essay developing methods and implications rather than proving the claim \u2014 the thesis should feel almost obvious once stated, with the interest lying in what follows from it.",
      "Structure arguments as a series of practical 'recipes' or 'tests' \u2014 frame abstract ideas as actionable thought experiments the reader can try themselves.",
      "Build arguments through analogy and historical example rather than data or citations \u2014 draw parallels between seemingly unrelated domains (fashion and morality, mapmaking and conformity, stretching and thinking) to make the unfamiliar feel intuitive.",
      "Handle counterarguments by preemptively raising them in the reader's voice ('Some would ask, why would one want to do this?') and then answering directly \u2014 steel-man the objection briefly, then disarm it.",
      "Advance the argument by asking a question, then answering it \u2014 use questions as structural pivots that move the essay from one section to the next.",
      "Use the logical flow of 'here's a problem \u2192 here's a method to investigate it \u2192 here's what that method reveals \u2192 here's the next method' \u2014 progress through the essay like a series of experiments rather than a single linear proof."
    ],
    "do_not": [
      "Do NOT rely on statistical evidence, formal citations, or appeals to authority as the primary basis for claims \u2014 the persuasive force comes from reasoning and analogy, not from data.",
      "Do NOT construct straw-man versions of opposing positions \u2014 when engaging with objections, treat them as reasonable concerns that deserve a genuine answer.",
      "Do NOT resolve every question definitively \u2014 leave some threads open and acknowledge when you're speculating with phrases like 'I suspect' or 'it could be.'"
    ],
    "evidence": [
      "\"Like every other era in history, our moral map almost certainly contains a few mistakes. And anyone who makes the same mistakes probably didn't do it by accident. It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"So another way to figure out which of our taboos future generations will laugh at is to start with the labels.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently and deliberately \u2014 they serve as punchlines, thesis statements, or transitional pivots that give the reader a moment to absorb a key idea.",
      "Keep paragraphs short overall \u2014 most should contain one to three sentences, rarely more, creating a staccato visual rhythm on the page that mirrors conversational delivery.",
      "Open longer paragraphs with a claim or question, develop it with one or two concrete examples or analogies, and close with the implication \u2014 don't let any paragraph wander beyond its single purpose.",
      "Use section headers as structural scaffolding that name each 'method' or 'approach' \u2014 headers are labels for the next investigative angle, not summaries of content.",
      "Transition between paragraphs implicitly through logical progression rather than explicit connective phrases \u2014 let the reader feel the argument advancing through the sequence of ideas, not through 'furthermore' or 'moreover.'",
      "When shifting to a new line of argument, open with a question paragraph that resets the reader's attention and signals a new direction."
    ],
    "do_not": [
      "Do NOT write dense, multi-idea paragraphs that require the reader to track several threads at once \u2014 one idea per paragraph, rigorously enforced.",
      "Do NOT use explicit transition words like 'however,' 'moreover,' 'additionally,' or 'in conclusion' \u2014 these belong to academic prose and break the conversational register.",
      "Do NOT bury the point deep inside a paragraph \u2014 if the key insight isn't in the first or last sentence, restructure."
    ],
    "evidence": [
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"Is our time any different?\"",
      "\"The age of consent fluctuates like hemlines.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Make cross-domain analogies the primary persuasive engine \u2014 connect abstract philosophical ideas to vivid, concrete, everyday things (fashion, maps, stretching, hemlines, bell-bottoms, skating rinks) so readers can grasp complex arguments through familiar images.",
      "Use rhetorical questions as structural pivots that invite the reader into the argument \u2014 pose them at the start of new sections to frame the next line of inquiry, then answer them.",
      "Deploy thought experiments as a primary argumentative tool \u2014 'Imagine a kind of latter-day Conrad character,' 'Suppose in the future there is a movement to ban the color yellow' \u2014 to make abstract claims concrete and testable.",
      "Use parallel structure and antithesis to crystallize arguments into memorable maxims \u2014 set up balanced clauses that throw two ideas into sharp contrast.",
      "Repeat key words and phrases ('taboo,' 'heresy,' 'fashion,' 'can't say') across the essay to build thematic coherence, rather than varying terminology for its own sake.",
      "Use historical anecdotes and named examples (Galileo, Darwin, Copernicus, Milton, Arthur Miller) as compact illustrations \u2014 tell the story in one or two sentences, just enough to make the point land."
    ],
    "do_not": [
      "Do NOT use flowery or literary metaphors \u2014 analogies should be drawn from everyday life, history, or science, never from poetry or elevated rhetoric.",
      "Do NOT use exclamation marks or rely on emphatic language to convey importance \u2014 let the logic and the examples do the work of persuasion.",
      "Do NOT use extended metaphors that run for more than a sentence or two \u2014 make the comparison, let it land, and move on."
    ],
    "evidence": [
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-comment that frames the essay's subject and stakes before the essay proper begins \u2014 give the reader a roadmap disguised as an aside.",
      "Begin the essay itself with a disarming, relatable question or observation drawn from everyday experience (old photos, fashion) that draws the reader in before pivoting to the real, weightier topic.",
      "Escalate from the light opening through a series of increasingly serious implications \u2014 the structure is a slow reveal where each section raises the stakes of the initial observation.",
      "Use named section headers (single words or short phrases) to divide the essay into discrete investigative 'moves' \u2014 each section proposes a different method or angle for approaching the central question.",
      "Close sections by pointing forward to the next question or method \u2014 endings are springboards, not summaries.",
      "Use footnote references (numbered brackets like [1], [2]) as a scholarly texture that adds credibility while keeping the main text clean and fast-moving.",
      "Format key maxims and aphorisms as standalone single-sentence paragraphs \u2014 let them breathe on the page."
    ],
    "do_not": [
      "Do NOT open with a grand thesis statement or abstract declaration \u2014 begin with something concrete and personal, then zoom out.",
      "Do NOT close with a neat summary that ties up all threads \u2014 leave the reader with an open question, a provocation, or a quiet challenge to think for themselves.",
      "Do NOT use bullet points, numbered lists, or other formatting that breaks the essayistic flow \u2014 the only structural markers should be section headers and footnote brackets."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them.)\"",
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"The most important thing is to be able to think what you want, not to say what you want.\""
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual curiosity and plain-spoken precision",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build most sentences around a clean subject-verb-object backbone with at most one trailing clause joined by a comma, dash, or conjunction \u2014 keep the core structure transparent even when the sentence extends.",
      "Alternate between medium-length explanatory sentences and short declarative sentences to create a conversational pulse \u2014 use the short sentences to land conclusions, deliver punchlines, or create emphasis after a stretch of reasoning.",
      "Chain clauses with coordinating conjunctions ('and,' 'but,' 'so,' 'or') rather than subordinating constructions \u2014 keep the logic additive and linear, moving forward rather than nesting inward.",
      "Begin sentences frequently with coordinating conjunctions ('But,' 'And,' 'So') to create forward momentum that makes the argument feel like a live thought process rather than a prepared speech.",
      "Deploy sentence fragments sparingly and only as standalone paragraphs for maximum rhetorical punch \u2014 they should feel like a definitive answer or a mic drop, not a grammatical habit.",
      "When building longer sentences, prefer front-loaded conditional or concessive clauses ('If you're naturally independent-minded, you're going to find...') that set context before delivering the main point."
    ],
    "do_not": [
      "Do not write densely nested subordinate clauses with multiple levels of embedding \u2014 if a sentence requires re-reading to parse, it's too complex.",
      "Do not sustain the same sentence length for more than a few sentences in a row \u2014 always interrupt stretches of medium-length sentences with a short, direct statement.",
      "Do not use semicolons as a primary clause-joining strategy \u2014 prefer periods or coordinating conjunctions.",
      "Do not use ornate periodic sentence structures where the main verb is delayed until the end.",
      "Do not open sentences with participial phrases or absolute constructions \u2014 favor direct, subject-first entry."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as a thinker sharing hard-won insights, and shift freely to second person ('you') when giving advice or pulling the reader into the argument \u2014 use 'you' as the dominant mode for advice, 'I' for personal anecdote and conviction.",
      "Maintain a tone that is conversational, warm, and collegial \u2014 like a smart friend explaining something over coffee, earnest and direct without being preachy or academic.",
      "Express confidence through plain declarative statements rather than emphatic language \u2014 let the strength of the claim carry its own weight, and when uncertain, say so plainly ('I think,' 'I suspect,' 'probably') rather than burying uncertainty in elaborate caveats.",
      "Use contractions naturally to maintain conversational warmth ('don't,' 'can't,' 'it's,' 'you'd'), but occasionally use the uncontracted form when making a deliberate or emphatic point.",
      "Allow personal anecdote and self-reference freely \u2014 treat your own experience as legitimate evidence, stated matter-of-factly rather than apologetically or as credential-building.",
      "Deploy dry, understated humor that emerges from the logic of the argument itself or from honest observation \u2014 never from jokes, wordplay, or snark that punches down."
    ],
    "do_not": [
      "Do not adopt an academic, detached, or impersonal register \u2014 avoid passive constructions like 'it has been observed that' or 'one might argue.'",
      "Do not lecture, moralize, or preach \u2014 present insights as discoveries rather than commandments, and let the reader draw conclusions.",
      "Do not use exclamation marks or effusive language to signal excitement \u2014 let word choice and sentence structure carry the emotional weight.",
      "Do not use corporate jargon, buzzwords, or motivational-speaker enthusiasm \u2014 keep the tone plain-spoken and grounded.",
      "Do not be self-deprecating or excessively humble in a way that undermines the clarity of the point being made."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete, accessible claim or observation \u2014 often one that sounds almost obvious but contains the seed of a surprising distinction \u2014 then build outward by showing the same pattern across multiple domains before abstracting to a general principle.",
      "Advance arguments through concrete examples drawn from diverse fields (science, startups, history, everyday life) rather than through abstract reasoning \u2014 let abstraction emerge from the examples, not precede them.",
      "Structure the overall argument as an exploration rather than a proof \u2014 move from observation to analysis to practical advice, as if thinking through the problem in real time with the reader.",
      "Anticipate counterarguments and raise them yourself, often in the reader's voice ('Sounds a bit extreme, you think'), then address them honestly and briefly before moving on \u2014 never dismiss objections, integrate them.",
      "Use analogies drawn from everyday physical experience (food, fire, mechanical devices, babies, dogs) to make abstract points tangible \u2014 prefer concrete, sensory imagery over technical or literary analogies.",
      "Derive practical heuristics from theoretical observations \u2014 after establishing a pattern, ask 'what follows from this?' and offer actionable advice.",
      "When decomposing a concept, explicitly name its components ('It seems to me that it has three components') and address each in turn, creating clear architecture without formal apparatus."
    ],
    "do_not": [
      "Do not rely on citations, statistics, data, or appeals to authority as primary evidence \u2014 ground arguments in reasoning, observation, and personal experience.",
      "Do not use formal logical connectives like 'therefore,' 'thus,' 'consequently,' or 'moreover' \u2014 prefer plain English transitions like 'but,' 'and,' 'so,' 'which means.'",
      "Do not present arguments as settled dogma \u2014 always leave space for uncertainty and qualification where honest.",
      "Do not let the argument become purely abstract for extended stretches \u2014 always return to specific, concrete instances."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Keep paragraphs tight \u2014 most should develop a single idea in a few sentences, following a claim-example-implication pattern.",
      "Open paragraphs with the key claim or observation stated directly \u2014 do not warm up or provide context before getting to the point.",
      "Use single-sentence paragraphs deliberately for emphasis, punchlines, definitive answers, or pivots \u2014 they act as rhetorical rests that let the reader absorb the preceding point.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the idea at the end of one paragraph naturally raise the question that the next paragraph answers.",
      "When transitioning between major sections, use a paragraph that simultaneously closes one thread and opens the next, or use a question paragraph that resets the reader's attention.",
      "Do not end every paragraph with a tidy summary \u2014 let some paragraphs trail off naturally or pivot forward to the next thought."
    ],
    "do_not": [
      "Do not write long paragraphs that address multiple distinct ideas \u2014 split them at natural pivot points.",
      "Do not begin paragraphs with formulaic transitions like 'Furthermore,' 'Additionally,' 'In conclusion,' 'On the other hand,' or 'However.'",
      "Do not bury the key insight deep inside a paragraph \u2014 if the point isn't in the first or last sentence, restructure.",
      "Do not pad paragraphs with restated information or unnecessary qualifications."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Make cross-domain analogies the primary persuasive engine \u2014 connect abstract ideas to vivid, concrete, everyday things so readers grasp complex arguments through familiar images.",
      "Use rhetorical questions as structural pivots that voice the reader's likely objection or transition to a new section, then answer them immediately \u2014 questions serve as transitions, not decoration.",
      "Repeat key terms and phrases throughout the essay as conceptual and rhythmic anchors rather than reaching for synonyms \u2014 let the repeated terms build thematic coherence.",
      "Employ parallel structure across sentences and paragraphs to show a pattern across domains ('The same is true for investors... You see this pattern with startup founders too... Ditto for essayists').",
      "Use direct address and second-person imperatives sparingly but effectively ('See if you can make it happen,' 'Treat it as a puzzle') \u2014 these should feel like invitations, not commands.",
      "Deploy vivid, unexpected metaphors to crystallize a point \u2014 especially ones that create a slight shock of recognition \u2014 but keep them brief, make the comparison, let it land, and move on.",
      "Use antithesis and contrast structures to sharpen distinctions: 'not X but Y,' juxtaposing what seems true against what is actually true."
    ],
    "do_not": [
      "Do not use elaborate literary metaphors, extended figurative conceits, or highbrow allusions \u2014 keep analogies concrete, practical, and grounded in common experience.",
      "Do not use exclamation marks or hyperbolic language to generate excitement \u2014 persuade through the force of logical demonstration and well-chosen examples.",
      "Do not vary key terminology for stylistic reasons \u2014 if a concept has a precise name, use that name consistently.",
      "Do not overuse rhetorical questions \u2014 deploy them at structural turning points, not as a tic within paragraphs."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, bold claim stated simply in the first sentence \u2014 often a personal realization or a counterintuitive observation that sounds almost obvious but contains surprising depth. The reader should know what the essay argues immediately.",
      "Establish the essay's terrain in the first few paragraphs by showing the thesis applied to concrete domains, creating a sense of universality before narrowing the focus.",
      "Close by reframing the central idea at a higher level of abstraction \u2014 often with a metaphor, a quiet image, or a single resonant thought that opens onto something larger. The ending should feel like a quiet landing, not a dramatic flourish or a summary.",
      "Format as continuous prose with no bullet points, numbered lists, or bold/italic emphasis in the main body \u2014 rely entirely on paragraph breaks for structure, with optional section headers (short phrases) for longer pieces.",
      "Use numbered endnotes (bracketed references like [1], [2]) for digressions, qualifications, tangential observations, and personal asides that would interrupt the main argument's flow \u2014 these notes should be conversational in tone.",
      "End with an acknowledgments line thanking draft readers \u2014 this is a genre convention of the personal intellectual essay."
    ],
    "do_not": [
      "Do not open with a question, an anecdote, a scene, or a hook designed to create suspense \u2014 start with clarity, start with the idea itself.",
      "Do not close with a grand summary that restates all the main points or a call to action \u2014 end with a single resonant thought that leaves the reader with momentum rather than closure.",
      "Do not use bullet points, numbered lists, or bold/italic emphasis within the body of the essay \u2014 the only allowed structural markers are paragraph breaks, optional section headers, and footnote brackets."
    ]
  },
  "signature_phrases": {
    "use": [
      "as far as I can tell",
      "I suspect",
      "I think",
      "I would think so",
      "it turns out",
      "in practice",
      "in fact",
      "the trouble is",
      "which means",
      "ditto for",
      "the way to",
      "the reason is",
      "one difficulty here",
      "but",
      "and yet",
      "so",
      "who knew?",
      "see if you can",
      "the thing is",
      "it may seem",
      "the most important",
      "a good metaphor would be"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "in conclusion",
      "it should be noted that",
      "it is important to recognize",
      "on the other hand",
      "consequently",
      "thus",
      "nevertheless",
      "notwithstanding",
      "in light of the foregoing",
      "leverage",
      "synergy",
      "paradigm",
      "utilize",
      "facilitate",
      "stakeholder",
      "actionable insights",
      "at the end of the day",
      "needless to say",
      "it goes without saying"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'additionally,' and 'consequently' with 'but,' 'and,' 'so,' or simply start a new sentence.",
    "Convert passive constructions ('it has been observed that,' 'it can be argued') to active first-person or second-person statements.",
    "Break any sentence with more than two levels of subordination into two or three separate sentences joined by conjunctions or periods.",
    "If a paragraph covers more than one distinct idea, split it \u2014 one idea per paragraph.",
    "Replace abstract descriptions with concrete analogies drawn from everyday physical experience.",
    "Remove formulaic transition phrases at the start of paragraphs and let the logical progression carry the reader forward.",
    "Convert hedging phrases like 'it is important to note that' or 'one might argue' into direct statements: 'I think,' 'I suspect,' or just state the claim plainly.",
    "If a closing paragraph summarizes all prior points, delete it and end instead with a single resonant observation or reframing.",
    "Remove exclamation marks and replace emphatic language with shorter, more declarative sentence structures.",
    "When you find a long run of similarly-lengthed sentences, insert a short declarative sentence to break the rhythm."
  ]
}
```