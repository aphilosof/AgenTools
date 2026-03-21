# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, involved, explicit — conversational intellectual authority with plain-spoken directness and reasoning-aloud intimacy

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
      "Build sentences around a single clean claim, then extend them with one qualifying or elaborating clause \u2014 rarely more than two.",
      "Use conditional structures ('if you...', 'when you...') as the primary mechanism for complex sentences, embedding the reader into hypothetical scenarios rather than stacking abstract subordinate clauses.",
      "Chain ideas across sentences rather than within them: state a principle in one sentence, then illustrate or qualify it in the next, creating a conversational back-and-forth rhythm.",
      "Deploy parallel structure when contrasting two types or sides of an argument \u2014 mirror the syntax closely so the contrast is carried by content, not grammar: 'If you're naturally independent-minded... And if you're naturally conventional-minded...'",
      "Use short declarative sentences as landing pads after a sequence of longer, more complex ones \u2014 they function as emphatic conclusions or pivots: 'I really want to know.' or 'I know mine does.'"
    ],
    "do_not": [
      "Do NOT use heavily nested subordinate clauses or academic-style periodic sentences that delay the main verb.",
      "Do NOT use ornate or literary sentence constructions \u2014 no inversions, no elaborate participial openings, no suspended syntax.",
      "Do NOT let sentences sprawl with multiple coordinating conjunctions chaining clause after clause in a single breath."
    ],
    "evidence": [
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"If you're naturally independent-minded, you're going to find it frustrating to be a middle manager. And if you're naturally conventional-minded, you're going to be sailing into a headwind if you try to do original research.\"",
      "\"I really want to know.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a thinking peer who has arrived at insights through personal experience and is sharing them directly \u2014 not lecturing, not hedging excessively, but reasoning aloud with the reader.",
      "Use 'you' as the dominant address, placing the reader inside the argument as a participant who must make decisions: 'you want to avoid situations that suppress it.'",
      "Use 'I' sparingly but strategically \u2014 deploy personal experience as evidence, not as the center of the essay. When 'I' appears, it should ground an abstract claim in lived reality.",
      "Maintain a tone of calm intellectual confidence: state claims plainly without excessive qualification, but use phrases like 'I think so,' 'it seems to me,' 'I suspect' at key moments to signal honest uncertainty rather than false modesty.",
      "Let dry humor surface naturally through unexpected analogies and understatement rather than through jokes or witticisms: compare ideological belief to biting a submarine sandwich of indeterminate provenance.",
      "Use contractions naturally in the flow of conversational reasoning but drop them occasionally for emphasis or when stating a principle with more weight."
    ],
    "do_not": [
      "Do NOT adopt a detached academic voice \u2014 never write as though observing from above. Stay in the argument with the reader.",
      "Do NOT use performative enthusiasm, exclamation marks, or cheerleading language.",
      "Do NOT hedge every claim \u2014 when uncertain, say so once and move on rather than layering qualifiers."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"Can you increase your fastidiousness about truth? I would think so.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete pattern observed across multiple domains (science, investing, startups, essays), establishing the principle by accumulation of examples before naming it abstractly.",
      "Advance arguments by first stating a clean thesis, then immediately testing it against edge cases, exceptions, or the reader's likely objections \u2014 preemptively acknowledging limits before the reader can raise them.",
      "Use the 'Ditto for X' move: once a pattern is established in one domain, extend it to another with minimal ceremony, trusting the reader to carry the logic.",
      "Introduce counterarguments or complications with casual pivots: 'But this pattern isn't universal,' 'One difficulty here, though,' 'There may even be a phenomenon like...' \u2014 acknowledge them fully but don't let them derail the main thread.",
      "Structure the overall argument as a progressive deepening: start with a phenomenon everyone can observe, move to its implications for personal decisions, then drill into the internal mechanics (the three components), then give practical advice. Each layer assumes the reader has absorbed the previous one.",
      "Use rhetorical questions as structural hinges \u2014 they mark the transition from one section to the next and frame what follows as an answer: 'Can you make yourself more independent-minded? I think so.'",
      "Rely on analogies and thought experiments as primary evidence rather than citations or data. Ground abstract claims in vivid, concrete scenarios the reader can immediately picture."
    ],
    "do_not": [
      "Do NOT present arguments as formal logical proofs with numbered premises and conclusions.",
      "Do NOT dismiss counterarguments \u2014 always engage with them honestly, even if briefly.",
      "Do NOT rely on appeals to authority or citation-heavy argumentation. Personal reasoning and examples carry the weight.",
      "Do NOT leave implications unstated \u2014 draw out what a principle means for the reader's actual decisions and behavior."
    ],
    "evidence": [
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\"",
      "\"Treat it as a puzzle. You know that some accepted ideas will later turn out to be wrong. See if you can guess which.\"",
      "\"Without this fastidiousness about truth, you can't be truly independent-minded. It's not enough just to have resistance to being told what to think. Those kind of people reject conventional ideas only to replace them with the most random conspiracy theories.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the point, then unpack it. The first sentence should be able to stand alone as a summary of the paragraph.",
      "Close paragraphs by either landing on a punchline-like conclusion that crystallizes the point, or by pivoting toward the next idea with a sentence that creates forward momentum.",
      "Connect paragraphs through logical entailment rather than explicit transition words: the last sentence of one paragraph naturally provokes the question the next paragraph answers.",
      "Use single-sentence paragraphs as emphatic punctuation \u2014 they isolate a thought for maximum impact and signal a shift in pace or register: 'I really want to know.'",
      "When developing a taxonomy or list of components, give each component its own section-like cluster of paragraphs rather than cramming them into a single paragraph.",
      "Sequence ideas within a paragraph from general to specific: state the principle, then give the example, then draw the implication."
    ],
    "do_not": [
      "Do NOT use explicit transitional phrases like 'Furthermore,' 'Moreover,' 'In addition' \u2014 let the logical connection between paragraphs speak for itself.",
      "Do NOT write paragraphs that meander through multiple unrelated claims \u2014 each paragraph should have one clear center of gravity.",
      "Do NOT end paragraphs with trailing qualifications that dilute the point. If you must qualify, do it in the middle, then return to the main thrust."
    ],
    "evidence": [
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"I really want to know.\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map an abstract concept onto a concrete physical experience: comparing intellectual fastidiousness to food fastidiousness, comparing ideological belief to eating a submarine sandwich of dubious provenance.",
      "Deploy rhetorical questions as section-openers and structural pivots \u2014 they reframe the essay's direction and invite the reader to pause and consider before reading the answer.",
      "Use parallel construction to set up clean binary contrasts: independent-minded vs. conventional-minded, stated in mirrored syntactic structures that make the contrast feel inevitable.",
      "Repeat key terms deliberately throughout the essay ('independent-minded,' 'conventional-minded,' 'curiosity,' 'fastidiousness') rather than varying with synonyms \u2014 treat them as technical vocabulary that accumulates meaning with each use.",
      "Use direct address imperatives to convert analysis into advice: 'Treat it as a puzzle,' 'See if you can guess which,' 'stop and ask yourself.'",
      "Employ the 'X, but Y' structure to introduce complications and nuance \u2014 state the expected claim, then pivot with 'but' to reveal the surprising truth."
    ],
    "do_not": [
      "Do NOT use literary or poetic devices like alliteration, assonance, or elaborate metaphorical conceits.",
      "Do NOT use exclamatory rhetoric or hyperbole to create urgency.",
      "Do NOT vary terminology for the sake of elegant variation \u2014 if 'independent-minded' is the concept, say 'independent-minded' every time."
    ],
    "evidence": [
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"Treat it as a puzzle. You know that some accepted ideas will later turn out to be wrong. See if you can guess which.\"",
      "\"you notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating a general observation about the world in plain, almost understated language \u2014 no hook, no anecdote, no provocation. Begin as if continuing a thought already in progress: 'There are some kinds of work that you can't do well without thinking differently from your peers.'",
      "Establish the essay's scope in the first few paragraphs by running through multiple quick examples of the same pattern, each in its own short paragraph, before zooming in on the main subject.",
      "Use section breaks (visual separators) to mark major structural transitions \u2014 from describing the phenomenon, to practical advice, to internal analysis \u2014 rather than relying solely on paragraph flow.",
      "Close the essay not with a grand summary or call to action but with a suggestive reframing \u2014 offer a final formulation that opens rather than closes: 'do what you're curious about.'",
      "Include numbered endnotes for tangential observations, additional examples, and caveats that would interrupt the main flow. These notes are conversational in tone, not academic \u2014 they read like asides to an engaged reader who wants more.",
      "Use formatting sparingly: no headers, no bullet lists, no bold or italic for emphasis within the body text. Let the prose structure itself through paragraph breaks, section dividers, and the essay's internal logic.",
      "Follow the personal essay tradition of starting from an observable truth, developing it through reasoning and examples, and arriving at practical wisdom \u2014 but maintain a philosophical register throughout, never becoming self-help or prescriptive in tone."
    ],
    "do_not": [
      "Do NOT open with a question, a shocking statistic, or a dramatic anecdote \u2014 begin with a calm statement of observed truth.",
      "Do NOT close with a neat summary that restates the thesis \u2014 end on a thought that feels slightly open-ended, inviting further thinking.",
      "Do NOT use headers, subheadings, or numbered lists in the body of the essay \u2014 structure should be felt through the prose, not imposed through formatting."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"[1] By the time they reach adulthood, most people know roughly how smart they are (in the narrow sense of ability to solve pre-set problems), because they're constantly being tested and ranked according to it.\""
    ]
  }
}
```

### sample-2.txt (3400 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3400,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one or two qualifying or illustrative clauses \u2014 the default shape is assertion followed by explanation or example.",
      "Use compound sentences joined by commas and coordinating conjunctions (but, and, because) to layer qualifications onto a core idea in a single breath: 'But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.'",
      "Deploy standalone short sentences to land a punchline or deliver the logical consequence of the preceding argument: 'You get no customers, and you go out of business.'",
      "Chain subordinate clauses with 'because,' 'since,' 'when,' and 'if' to embed causal reasoning directly into sentence structure rather than spelling it out across multiple sentences.",
      "Use parallel structure to create clean taxonomies and contrasts within a single sentence: 'It can compound directly... Or work can compound by teaching you, since learning compounds.'",
      "Let longer, more complex sentences carry the reasoning and shorter sentences carry the verdict \u2014 rhythm alternates between explanation and conclusion."
    ],
    "do_not": [
      "Do not write ornate, heavily nested sentences with multiple levels of embedding \u2014 keep clause depth shallow (rarely more than two subordinate levels).",
      "Do not use periodic sentence structure where the main point is delayed until the end of a long buildup \u2014 lead with the claim, then qualify.",
      "Do not string together fragments for stylistic effect or use stream-of-consciousness run-ons."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person singular ('I') as a thinker sharing hard-won insight \u2014 position yourself as someone who has spent years working through these ideas and is now distilling them for the reader.",
      "Address the reader directly with 'you' when giving actionable advice, creating a collegial, mentor-to-peer register: 'if you're ambitious you definitely should.'",
      "Maintain an earnest, intellectually confident tone \u2014 state bold claims plainly without hedging the core assertion, but hedge freely on the edges and secondary claims ('as far as I can tell,' 'I doubt we could ever predict this with certainty').",
      "Signal genuine surprise or intellectual excitement sparingly but sincerely: 'I find that sentence startling.' Use understatement rather than exclamation.",
      "Use contractions naturally in conversational passages but drop them when making a formal or weighty claim to signal seriousness.",
      "Adopt a warm but unsentimental stance \u2014 show care for the reader's success without flattery or false encouragement. Acknowledge harsh realities directly: 'people who do badly will do worse.'"
    ],
    "do_not": [
      "Do not adopt an academic or detached third-person voice \u2014 always maintain the sense of a specific person thinking through a problem.",
      "Do not use false modesty or excessive hedging on core claims \u2014 if you believe it, say it plainly.",
      "Do not use sarcasm, irony, or humor as a rhetorical mode \u2014 the tone is serious and direct, with at most dry observations."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"That's an important point to bear in mind.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, thesis-level claim stated as personal discovery, then spend the essay proving and elaborating it through multiple angles and examples.",
      "Build arguments through a pattern of claim \u2192 concrete example \u2192 generalization \u2192 new implication. Each section takes a specific instance (startups, bacterial cultures, scholarship) and extracts a broader principle.",
      "Use analogies and cross-domain examples as primary evidence \u2014 draw from history (empires, Newton), biology (bacterial cultures, evolution), business (startups, Y Combinator), and everyday life (learning to ride a bicycle) to triangulate a single abstract point.",
      "Handle counterarguments by acknowledging them briefly and then reframing: 'Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world.'",
      "Use taxonomic decomposition to structure complex ideas: split a phenomenon into exactly two causes, two types, or two cases, then analyze each in turn.",
      "Hedge with specific phrases: 'as far as I can tell,' 'in principle,' 'I doubt we could ever,' 'probably,' 'arguably' \u2014 use these at the boundaries of knowledge, never on core claims.",
      "Introduce thought experiments and hypotheticals with 'if' constructions to test the edges of claims: 'if you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.'",
      "Return recursively to the central concept throughout \u2014 each new section re-engages the thesis from a different angle rather than moving linearly to unrelated topics."
    ],
    "do_not": [
      "Do not cite academic papers, statistics, or formal data \u2014 evidence comes from reasoning, examples, and personal observation.",
      "Do not present ideas as universally agreed-upon \u2014 frame novel claims as the author's own synthesis.",
      "Do not leave counterarguments unaddressed \u2014 always engage with the obvious objection before moving forward."
    ],
    "evidence": [
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that makes a claim or introduces a new angle on the thesis \u2014 the first sentence should carry the paragraph's core idea.",
      "Follow the topic sentence with one or two concrete examples or elaborations, then close with a generalized insight or a pivot to the next idea.",
      "Use single-sentence paragraphs to deliver maximum-impact conclusions or pivots: 'You get no customers, and you go out of business.'",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph sets up the first sentence of the next through thematic echo.",
      "Use implicit contrast transitions: start a new paragraph with 'But,' 'The other source,' or 'There's another' to signal a shift without heavy-handed connectives.",
      "Sequence ideas within paragraphs from specific to general, or from familiar example to surprising implication."
    ],
    "do_not": [
      "Do not use formal transition phrases like 'Furthermore,' 'In addition,' 'Moreover,' or 'In conclusion' \u2014 transitions should feel organic and conversational.",
      "Do not write paragraphs that introduce multiple unrelated claims \u2014 each paragraph should develop one idea or one facet of an idea.",
      "Do not end paragraphs with trailing qualifications that weaken the point \u2014 close with the strongest version of the idea."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Fame is an interesting example of a phenomenon that combines both sources of superlinear returns. Fame grows exponentially because existing fans bring you new ones. But the fundamental reason it's so concentrated is thresholds: there's only so much room on the A-list in the average person's head.\"",
      "\"There's a surprising amount of technique to doing great work.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary explanatory tool \u2014 take an abstract principle and show it operating in biology, history, business, and personal life to make it feel inevitable.",
      "Employ rhetorical questions to introduce new sections or pivot to actionable advice: 'Are there general rules for finding situations with superlinear returns?' Then answer immediately.",
      "Use antithesis and contrast pairs to sharpen distinctions: 'Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.'",
      "Deploy callback to familiar sayings or common wisdom, then subvert or refine them: '\"You get out what you put in.\" They meant well, but this is rarely true.'",
      "Use lists sparingly and only to enumerate concrete examples after an abstract claim: 'sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.'",
      "Build emphasis through plain, declarative restatement rather than through intensifiers or exclamation \u2014 repeat the core concept in slightly different framings throughout the piece."
    ],
    "do_not": [
      "Do not use flowery metaphors, extended conceits, or literary allusions \u2014 analogies should be functional and drawn from the real world.",
      "Do not use exclamation marks or emphatic punctuation to create excitement \u2014 let the ideas themselves carry the weight.",
      "Do not overuse rhetorical questions in sequence \u2014 pose one, answer it, then continue with declarative prose."
    ],
    "evidence": [
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"'You get out,' I heard a thousand times, 'what you put in.' They meant well, but this is rarely true.\"",
      "\"Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a personal reflection that immediately states the central thesis \u2014 frame it as a past misunderstanding now corrected: 'One of the most important things I didn't understand about the world when I was a child is...'",
      "Make the opening sentence do double duty: it should both hook the reader and state the essay's exact subject matter. No preamble, no scene-setting.",
      "Close by zooming out from the practical to the philosophical, ending on the most abstract and resonant formulation of the thesis \u2014 the final paragraph should feel like the essay's highest-altitude view.",
      "End with an image or metaphor that encapsulates the entire essay: 'it may grow into a mountain beneath you.'",
      "Include numbered footnotes (bracketed numbers in text, notes at the end) for tangential thoughts, historical context, and qualifications that would break the essay's flow if included inline.",
      "Use no headers, no bullet-pointed lists within the body, and no bold/italic formatting \u2014 the essay is structured entirely through paragraph breaks and logical flow.",
      "Include a brief acknowledgments line at the very end, thanking readers of drafts by name."
    ],
    "do_not": [
      "Do not open with a question, a quote from someone else, or scene-setting \u2014 open with the author's own claim.",
      "Do not close with a summary that restates the main points \u2014 the ending should feel like a culmination, not a recap.",
      "Do not use subheadings or section breaks to organize the essay \u2014 rely on paragraph-level transitions to guide the reader through the argument."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"Thanks to Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan for reading drafts\""
    ]
  }
}
```

### sample-3.txt (2953 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2953,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend them with one or two qualifying or elaborating clauses using commas and coordinating conjunctions ('and', 'but', 'or').",
      "Follow a sequence of medium-length declarative sentences with a very short sentence that delivers a verdict or punchline \u2014 use this as a rhythmic punctuation device to create emphasis after buildup.",
      "Chain ideas within a sentence using semicolons to juxtapose two closely related but independent thoughts, creating a sense of balanced deliberation.",
      "Use participial and conditional clauses to front-load context before the main assertion: 'If you discover some ambitious type of work that's a bargain\u2026 by all means work on that.'",
      "Employ parallelism within sentences to create a feeling of systematic enumeration: 'you have to understand the shape of real work, see clearly what kind you're best suited for, aim as close to the true core of it as you can.'",
      "Let the default sentence be a mid-length declarative that states one idea plainly, then occasionally break the pattern with either a very short or a notably long sentence to modulate pacing."
    ],
    "do_not": [
      "Do not write florid, multi-layered sentences with nested subordinate clauses \u2014 keep clause depth shallow, usually no more than two levels.",
      "Do not rely on fragments for stylistic flair in the body of the argument; reserve ultra-short sentences for delivering a landed conclusion after setup.",
      "Do not use semicolons frequently \u2014 deploy them sparingly and only when two independent clauses genuinely mirror or contrast each other."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question. There isn't.\"",
      "\"You need both.\"",
      "\"You have to understand the shape of real work, see clearly what kind you're best suited for, aim as close to the true core of it as you can, accurately judge at each moment both what you're capable of and how you're doing, and put in as many hours each day as you can without harming the quality of the result.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as someone reflecting on personal experience and drawing general principles from it \u2014 'I' is the default subject, but shift to 'you' when turning a personal insight into advice for the reader.",
      "Maintain a tone that is conversational yet intellectually serious \u2014 the voice of someone thinking aloud at a high level without academic formality.",
      "Signal certainty through plain, unhedged declarations ('There isn't.' 'You need both.') rather than through emphatic language or exclamation marks.",
      "Express uncertainty or nuance with honest qualifiers like 'I suspect', 'I think', 'probably', 'perhaps' \u2014 never with false modesty or performative doubt.",
      "Adopt a collegial, slightly mentorly distance: treat the reader as an intelligent peer who hasn't yet thought through this particular problem, not as a student being lectured.",
      "Use contractions naturally in conversational passages but allow the prose to go uncontracted when making a more formal or weighty point.",
      "When citing others (Gates, Messi, Hardy), present them as fellow travelers who illustrate the point, not as authorities to defer to."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic tone \u2014 always let the authorial 'I' be visible and thinking.",
      "Do not use motivational or inspirational language; avoid exhortations like 'You can do it!' or 'Believe in yourself.' The tone is diagnostic, not cheerleading.",
      "Do not use sarcasm or irony as a regular device \u2014 the humor, when it appears, is understated and observational ('like a dog circling while it decides exactly where to lie down')."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"I suspect most people have to learn what work is before they can love it.\"",
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through personal reflection \u2014 state what you used to believe, then what you now know, letting the argument emerge from the gap between past and present understanding.",
      "Support claims with concrete examples drawn from well-known figures (Gates, Messi, Wodehouse, Hardy, Newton, Mozart), using them as brief case studies rather than extended narratives.",
      "Preemptively voice the reader's likely objection, then address it directly: 'Sounds a bit extreme, you think. And yet\u2026'",
      "Build the argument by progressive refinement: state a simple version of the thesis early, then revisit it with added nuance, complication, and qualification as the essay proceeds.",
      "Use analogies and metaphors to make abstract points visceral: 'like a dog circling', 'the pursuing beast', 'a lemon in the garden of literature.'",
      "Handle counterarguments by acknowledging their validity and then showing why they don't defeat the main point: 'although you should not be in denial about this, neither should you treat difficulty as an infallible guide.'",
      "Hedge with precision \u2014 use hedges to mark genuine uncertainty ('I suspect', 'perhaps', 'I'm not sure'), not as rhetorical softeners on claims you're actually confident about.",
      "Employ the pattern of asking a question, letting it sit for a beat, then answering it \u2014 sometimes across a paragraph break."
    ],
    "do_not": [
      "Do not cite statistics, studies, or data \u2014 evidence comes from biographical examples, personal experience, and thought experiments.",
      "Do not present a formal thesis statement at the top; let the thesis emerge and sharpen through the course of the essay.",
      "Do not strawman objections \u2014 when raising a counterpoint, give it real force before responding to it."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question. There isn't.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\"",
      "\"If great talent and great drive are both rare, then people with both are rare squared.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim or observation that sets the paragraph's direction \u2014 avoid throat-clearing or transitional filler at the start.",
      "Close paragraphs either with a punchy concluding sentence that lands the point, or with a sentence that pivots toward the next idea, creating forward momentum.",
      "Use standalone single-sentence paragraphs as emphatic punctuation \u2014 to deliver a verdict ('There isn't.'), mark a transition ('Perhaps something changes at adolescence.'), or pose a question that reframes the discussion.",
      "Within a paragraph, move from general claim \u2192 specific example or elaboration \u2192 restatement or implication. The structure is assert-illustrate-conclude.",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph and the first of the next should create a natural bridge without needing 'Furthermore' or 'Moreover.'",
      "When introducing a quoted passage, set it up with minimal framing \u2014 just enough context to make the quote land."
    ],
    "do_not": [
      "Do not begin paragraphs with explicit transition phrases ('In addition', 'Furthermore', 'On the other hand') \u2014 let the logical connection between paragraphs be implicit.",
      "Do not let paragraphs sprawl into multiple sub-topics; each paragraph should orbit a single idea or move.",
      "Do not end paragraphs with trailing qualifications that dilute the point \u2014 if there's a hedge, put it in the middle, not at the end."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"Perhaps something changes at adolescence. That would make sense.\"",
      "\"And the rule is the same: working hard means aiming toward the center \u2014 toward the most ambitious problems.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday analogies and metaphors to ground abstract ideas: dogs circling before lying down, a pursuing beast, picking lemons in a garden, Spanish Flu fighting the immune system.",
      "Employ rhetorical questions to voice what the reader is thinking, then answer them \u2014 this creates a dialogic feel without direct address.",
      "Use parallel structure in lists and enumerations to create a sense of systematic clarity: 'not to lie to yourself, not to procrastinate\u2026 not to get distracted, and not to give up.'",
      "Deploy direct address sparingly \u2014 use 'you' to make the reader feel the point applies to them personally, especially when delivering practical advice.",
      "Use extended quotations from other writers when their words are more eloquent or authoritative on a sub-point, but frame them with your own interpretation before and after.",
      "Repeat key phrases ('real work', 'the shape of real work', 'the center') across the essay to create thematic cohesion through deliberate word reuse rather than synonym variation.",
      "Use parenthetical asides \u2014 set off by dashes or parentheses \u2014 to inject a quick qualification or aside without breaking the sentence's momentum: '(which is a form of lying to yourself)'."
    ],
    "do_not": [
      "Do not use literary or academic allusions for their own sake \u2014 every reference must serve the argument directly.",
      "Do not use exclamation marks for emphasis; let the content and sentence structure create emphasis.",
      "Do not use anaphora or other repetition devices in a way that feels oratorical or speechlike \u2014 the repetition should feel natural and conversational, not performative."
    ],
    "evidence": [
      "\"Between essays I fuss for a few days, like a dog circling while it decides exactly where to lie down.\"",
      "\"If great talent and great drive are both rare, then people with both are rare squared.\"",
      "\"not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a deceptively simple observation that seems obvious but contains a hidden complexity the essay will unpack: 'It might not seem there's much to learn about how to work hard.'",
      "The opening sentence should be short, accessible, and slightly contrarian \u2014 it invites the reader by suggesting that common assumptions are wrong.",
      "Close with a synthesis that weaves together the essay's threads into a single, precise formulation of the thesis \u2014 the ending should feel like the essay has earned its conclusion through all the preceding exploration.",
      "The final paragraph should be the most carefully constructed: dense, cumulative, and satisfying, tying together the key terms and ideas that have been developed throughout.",
      "End on a note of qualified optimism \u2014 the task is hard and complicated, but there's a clear path if you're honest with yourself.",
      "Use numbered endnotes (e.g., '[1]', '[2]') for digressions, qualifications, and tangential but interesting points that would break the flow of the main argument.",
      "Use em dashes for parenthetical insertions and clarifications within sentences. Use italics (implied by emphasis) sparingly for key terms on first introduction.",
      "Keep formatting minimal \u2014 no headers, no bullet points, no bold text. The essay is a continuous prose flow broken only by paragraph breaks and endnotes."
    ],
    "do_not": [
      "Do not open with a grand declaration or sweeping statement about the human condition \u2014 start small and specific.",
      "Do not close with a call to action or inspirational exhortation \u2014 end with insight, not instruction.",
      "Do not use subheadings, bullet points, or other structural formatting within the essay body \u2014 the organizational logic should be carried entirely by the prose."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\"",
      "\"This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\"",
      "\"Like a Spanish Flu victim, you're fighting your own immune system: Instead of giving up, you tell yourself, I should just try harder. And who can say you're not right?\""
    ]
  }
}
```

### sample-4.txt (3389 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3389,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend them with one or two qualifying or illustrative clauses joined by commas, 'and', 'but', or 'because'.",
      "Alternate between declarative statements that land a point and longer sentences that unpack reasoning or add a narrative example \u2014 the rhythm should feel like assertion, then elaboration, then assertion again.",
      "Use compound sentences linked by coordinating conjunctions ('but', 'and', 'or') as the primary sentence shape; subordinate clauses ('because', 'when', 'if') serve as supporting scaffolding rather than the backbone.",
      "When constructing longer sentences, chain clauses linearly \u2014 avoid nesting subordinate clauses inside other subordinate clauses. The sentence should read as a sequence, not a tree.",
      "Use parallel structure when presenting options, contrasts, or lists within a sentence: 'You can X, and you can Y' or 'not X, but Y'.",
      "Open some sentences with conditional or temporal clauses ('If you...', 'When you...', 'Once the engine was going...') to set up a situation before delivering the main point."
    ],
    "do_not": [
      "Do not write sentences with multiple levels of embedding or parenthetical asides that force the reader to hold too many ideas in working memory at once.",
      "Do not use semicolons as a primary clause-joining device \u2014 prefer periods or coordinating conjunctions.",
      "Do not write in a staccato rhythm of uniform sentence lengths; vary the pace by following an extended explanation with a crisp conclusive statement."
    ],
    "evidence": [
      "A good metaphor would be the cranks that car engines had before they got electric starters.",
      "You can be ornery when you're Scotty, but not when you're Kirk.",
      "It's harmless if reporters and know-it-alls dismiss your startup."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person plural ('we') or second-person ('you') stance that positions the author as an experienced insider sharing practical wisdom with a peer \u2014 collegial but authoritative.",
      "Project casual confidence: state opinions as facts, then back them up with examples rather than hedges. Use 'I think' sparingly and only when genuinely speculating, not as a softener.",
      "Shift into first-person singular ('I') when recounting personal anecdotes or making candid admissions \u2014 this creates intimacy and credibility.",
      "Use contractions naturally but not universally \u2014 contract in conversational passages, but allow uncontracted forms to stand when making emphatic or formal-sounding declarations.",
      "Adopt an earnest, direct tone. The voice is that of a mentor who has seen many cases and is telling you what actually works, without pretension or academic distance.",
      "Deploy dry humor and vivid analogies to leaven serious advice \u2014 the humor should illuminate the point, not distract from it.",
      "Reference specific people, companies, and anecdotes by name to ground abstract advice in concrete reality."
    ],
    "do_not": [
      "Do not adopt an academic or clinical tone \u2014 avoid passive voice constructions that remove the human agent ('it has been observed that...').",
      "Do not hedge excessively or use corporate-speak ('it could potentially be argued that...'); state positions directly.",
      "Do not talk down to the reader or adopt a preachy tone \u2014 treat them as a smart person who simply hasn't had the same experiences yet."
    ],
    "evidence": [
      "I often have to encourage founders who don't see the full potential of what they're building.",
      "We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.",
      "Who knew?"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly, then spend the rest of the piece proving it through accumulated examples.",
      "Build arguments inductively: present a concrete story or case study first, then extract the general principle \u2014 not the reverse.",
      "Use specific company narratives (Stripe, Airbnb, Facebook, Pebble) as the primary form of evidence. Each example should illustrate a distinct facet of the central thesis.",
      "Acknowledge the reader's likely objections ('There are two reasons founders resist...') and address them directly before moving on \u2014 pre-empt counterarguments rather than ignoring them.",
      "Progress through the argument by moving from one sub-topic to the next (recruit users, delight users, narrow the market, do things manually), each introduced with a header-like label, creating a loose listicle structure within a flowing essay.",
      "Use analogies and metaphors to make abstract business concepts tangible: cranks and engines, fires and logs, larvae and babies, projectiles and powered aircraft.",
      "Circle back to the central thesis periodically ('do things that don't scale') to maintain coherence across a long piece with many digressions."
    ],
    "do_not": [
      "Do not present arguments as pure abstraction \u2014 every claim needs at least one named, specific example.",
      "Do not use formal logical connectives ('therefore', 'moreover', 'furthermore') as the primary transition mechanism; let the narrative flow carry the logic.",
      "Do not leave counterarguments unaddressed \u2014 name the skeptic's position, then dismantle it with evidence or reframing."
    ],
    "evidence": [
      "There are two reasons founders resist going out and recruiting users individually. One is a combination of shyness and laziness.",
      "The question to ask about an early stage startup is not 'is this company taking over the world?' but 'how big could this company get if the founders did the right things?'",
      "It's easy to see how little launches matter. Think of some successful startups. How many of their launches do you remember?"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that makes a claim or introduces a new angle, then support it with examples or reasoning in subsequent sentences.",
      "Use single-sentence paragraphs to deliver a punchline, a pithy summary, or a sharp transition between sections \u2014 these act as emphasis markers.",
      "Connect paragraphs through logical continuation rather than explicit transition words: the last sentence of one paragraph sets up the idea the next paragraph develops.",
      "Within paragraphs, sequence ideas from general claim to specific example to implication \u2014 move from abstract to concrete to takeaway.",
      "When telling a story within a paragraph, compress it: set up the situation in one sentence, deliver the key action or quote in the next, then draw the lesson immediately.",
      "Use section headers (single bolded or capitalized words like 'Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big') to break the essay into thematic chunks, allowing the reader to navigate a long piece."
    ],
    "do_not": [
      "Do not begin paragraphs with throat-clearing or meta-commentary ('In this section I will discuss...') \u2014 jump straight into the substance.",
      "Do not use heavy-handed transition phrases ('On the other hand', 'In contrast to the above') between paragraphs; trust the reader to follow the logical thread.",
      "Do not let paragraphs ramble without a clear point \u2014 each paragraph should earn its existence by advancing the argument."
    ],
    "evidence": [
      "Fragile Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.",
      "I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.",
      "It's not enough just to do something extraordinary initially. You have to make an extraordinary effort initially."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and metaphors as primary persuasive tools \u2014 introduce a vivid image (engine cranks, contained fires, larvae, projectiles vs. aircraft) and return to it to anchor the argument.",
      "Deploy rhetorical questions to voice the reader's likely objection, then immediately answer them: 'Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.'",
      "Use direct address and imperatives to make advice feel personal and urgent: 'See if you can make it happen', 'Think of some successful startups.'",
      "Employ antithesis and reframing to flip conventional wisdom: 'The question to ask is not X but Y', 'It's not the product that should be insanely great, but the experience of being your user.'",
      "Use quotation and named attribution to borrow authority and add color: quote founders (Collison, Zuckerberg, Migicovsky) directly to make points feel grounded in real experience.",
      "Repeat key phrases throughout the essay ('do things that don't scale', 'insanely great', 'recruit users manually') to create thematic cohesion without formal restatement."
    ],
    "do_not": [
      "Do not use flowery or literary language \u2014 metaphors should be drawn from everyday, mechanical, or business domains, not from poetry or high culture.",
      "Do not overuse rhetorical questions \u2014 deploy them at section transitions or to introduce a new line of reasoning, not as filler.",
      "Do not use exclamation marks or hyperbolic superlatives for emphasis \u2014 let the examples and direct language create their own force."
    ],
    "evidence": [
      "It's like keeping a fire contained at first to get it really hot before adding more logs.",
      "They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'",
      "But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say 'Right then, give me your laptop' and set them up on the spot."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with the central thesis stated directly and plainly in the first sentence \u2014 no preamble, no scene-setting, no question. The reader should know what the essay is about within the first line.",
      "Follow the opening thesis with a description of the common misconception it corrects \u2014 frame the essay as a corrective to widespread founder error.",
      "Structure the essay as a series of labeled sections (single-word or short-phrase headers) that each explore a different application or dimension of the central idea.",
      "Close by reframing the thesis at a higher level of abstraction \u2014 move from practical advice to a broader conceptual model (e.g., treating startup ideas as 'vectors' with two components).",
      "End with a generous, optimistic note that connects the practical advice back to lasting company culture or identity.",
      "Include numbered endnotes for digressions, attributions, and caveats \u2014 keep the main text clean and forward-moving while allowing tangential depth for interested readers.",
      "Use minimal formatting: section headers as bold or capitalized single words, no bullet lists in the body, occasional bracketed note references. Let prose carry the argument.",
      "Use em dashes sparingly for parenthetical insertions and emphasis. Use parentheses for brief asides that add context without derailing the sentence."
    ],
    "do_not": [
      "Do not open with a question, anecdote, or quotation \u2014 lead with the idea itself.",
      "Do not close with a formulaic summary or call to action \u2014 end by elevating the idea or by expressing a broader truth that emerges from the accumulated evidence.",
      "Do not use heavy formatting (bullet lists, bold emphasis within paragraphs, numbered steps) in the body of the essay \u2014 the genre is a flowing persuasive essay, not a how-to guide."
    ],
    "evidence": [
      "One of the most common types of advice we give at Y Combinator is to do things that don't scale.",
      "In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.",
      "Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going."
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
      "Build the default sentence as a single independent clause with one main idea \u2014 keep most sentences to a single proposition before the period.",
      "When extending a sentence, chain clauses with coordinating conjunctions ('and', 'but', 'or') rather than subordinating constructions \u2014 maintain a flat, additive structure rather than nested hierarchy.",
      "Use compound-complex sentences sparingly and only when building a logical argument that requires multiple conditions or qualifications to land as a single unit: 'If you believe everything you're supposed to now, how can you be sure you wouldn't also have believed everything you were supposed to if you had grown up among the plantation owners of the pre-Civil War South, or in Germany in the 1930s \u2014 or among the Mongols in 1200, for that matter?'",
      "Deploy isolated short sentences as punchlines or thesis statements that cap off a sequence of setup sentences \u2014 the short sentence should land with rhetorical weight, not just be filler.",
      "Use parallel structure when presenting contrasting ideas side by side: 'Dressing oddly gets you laughed at. Violating moral fashions can get you fired, ostracized, imprisoned, or even killed.'",
      "Let rhythm emerge from alternation between explanatory multi-clause sentences and blunt declarative statements \u2014 the explanatory sentence sets up context, the declarative delivers the point."
    ],
    "do_not": [
      "Do not write ornate, heavily subordinated sentences with multiple embedded relative clauses \u2014 avoid academic nesting.",
      "Do not sustain the same sentence length for more than three consecutive sentences; the rhythm depends on deliberate variation between setup and payoff.",
      "Do not use participial phrases ('Having considered...', 'Walking through the park...') to open sentences \u2014 prefer direct subject-verb openings."
    ],
    "evidence": [
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"Scientists go looking for trouble.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a thinking-out-loud companion to the reader \u2014 use 'I' to share your own reasoning process and 'you' to pull the reader into thought experiments: 'I want to find general recipes for discovering what you can't say, in any era.'",
      "Maintain a tone that is conversational and collegial but intellectually serious \u2014 treat the reader as an equal who is capable of handling provocative ideas without hand-holding.",
      "Signal confidence through directness of assertion rather than hedging \u2014 state claims plainly and let the argument carry the weight: 'I suspect the statements that make people maddest are those they worry might be true.'",
      "When introducing uncertainty, use 'I suspect', 'I think', or 'it seems' rather than academic hedges like 'it could be argued that' or 'one might suggest' \u2014 keep even speculation informal.",
      "Use contractions naturally in explanatory and conversational passages but drop them occasionally for emphasis or when making a more formal-sounding declaration.",
      "Adopt a stance of genuine intellectual curiosity rather than moral superiority \u2014 frame the exploration as something you're doing alongside the reader, not lecturing from above: 'Let me see and decide for myself.'"
    ],
    "do_not": [
      "Do not adopt an academic or detached register \u2014 never write as if presenting findings to a committee.",
      "Do not moralize or preach; present ideas as interesting puzzles rather than as lessons the reader ought to learn.",
      "Do not use false modesty or excessive qualifiers that undermine the directness of the voice."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"Odds are you just think what you're told.\"",
      "\"I admit it seems cowardly to keep quiet.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce major claims through provocative questions that the reader is invited to consider before the answer is provided: 'Is our time any different?' followed by the author's own answer.",
      "Build arguments through accumulation of concrete historical examples and analogies rather than abstract reasoning \u2014 ground every abstract claim in a specific case: Galileo, Charles VIII's toes, bell-bottom jeans, the Cadillac brand.",
      "Use thought experiments as a primary evidence pattern \u2014 construct hypothetical scenarios ('Imagine a kind of latter-day Conrad character...', 'Suppose in the future there is a movement to ban the color yellow') to make abstract arguments tangible.",
      "Handle counterarguments by acknowledging them briefly and then reframing them as supporting the main thesis: 'Changes between the past and the present sometimes do represent progress... But this becomes rapidly less true as you move away from the certainty of the hard sciences.'",
      "Structure the overall argument as a series of named methods or approaches (The Conformist Test, Trouble, Heresy, Time and Space, Mechanism) \u2014 present a toolbox of techniques rather than a single linear proof.",
      "Use the pattern of asking a question, pausing to let it sit, then pivoting to a new angle or method \u2014 create the sense that the essay is exploring rather than concluding.",
      "Hedge with informal phrases like 'I suspect', 'odds are', 'it seems likely' \u2014 these function as honest uncertainty markers rather than academic caution."
    ],
    "do_not": [
      "Do not cite formal studies or statistics as primary evidence \u2014 use them only as colorful supporting anecdotes (e.g., the radiologist eye-tracking study), not as the backbone of the argument.",
      "Do not present a single linear argument from premise to conclusion; instead, circle the topic from multiple angles, each offering a different method of approaching the same question.",
      "Do not dismiss opposing views outright \u2014 acknowledge their surface logic before showing why your framing is more useful."
    ],
    "evidence": [
      "\"To anyone who has read any amount of history, the answer is almost certainly no. It would be a remarkable coincidence if ours were the first era to get everything just right.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"Like every other era in history, our moral map almost certainly contains a few mistakes.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently as standalone assertions that function as thesis statements, punchlines, or pivots \u2014 give the key insight its own paragraph to force the reader to sit with it.",
      "Open multi-sentence paragraphs with the core claim or question, then follow with elaboration, examples, or qualifications \u2014 front-load the point.",
      "Connect paragraphs through implicit logical progression rather than explicit transition words \u2014 let the next paragraph's content signal whether it continues, contrasts, or pivots from the previous one.",
      "Use section headers (bold or titled) to signal major shifts in approach or method \u2014 within sections, let paragraphs flow without explicit connectives.",
      "Close paragraphs with the most memorable or provocative formulation of the idea, not a summary: 'Subtract one from the other, and the result is what we can't say.'",
      "When building toward a major point, use a sequence of short paragraphs that each add one piece to the argument, creating momentum through accumulation."
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' or 'On the other hand' \u2014 let the logic of the ideas create the transition.",
      "Do not write paragraphs that end with weak trailing thoughts or summaries that restate what was already said.",
      "Do not pack multiple distinct ideas into a single paragraph \u2014 if the idea can stand alone, let it."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\" (standalone paragraph)",
      "\"The age of consent fluctuates like hemlines.\" (standalone paragraph as pivot)",
      "\"Scientists go looking for trouble.\" (standalone paragraph as punchline after buildup)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from everyday life to make abstract ideas concrete \u2014 fashion/clothing as a metaphor for moral conformity, mapmakers' deliberate errors as a metaphor for intellectual conformity, stretching before running as a metaphor for thinking unthinkable thoughts.",
      "Deploy rhetorical questions as structural devices that introduce new sections or reframe the argument: 'Do you have any opinions that you would be reluctant to express in front of a group of your peers?'",
      "Use lists of concrete examples in ascending order of intensity to drive a point home: 'fired, ostracized, imprisoned, or even killed.'",
      "Employ antithesis and parallel opposition to sharpen contrasts: 'Fashion is mistaken for good design; moral fashion is mistaken for good.'",
      "Use vivid, unexpected similes that juxtapose high and low registers: 'They're as unhappy on the territory of humor as a mounted knight on a skating rink.'",
      "Use direct address and imperatives to engage the reader as an active participant: 'Take a label \u2014 \"sexist\", for example \u2014 and try to think of some ideas that would be called that.'",
      "Reference historical figures and events as compact illustrations \u2014 Galileo, Darwin, Milton, Arthur Miller \u2014 treating them as familiar characters rather than requiring introduction."
    ],
    "do_not": [
      "Do not use literary or poetic metaphors that call attention to their own cleverness \u2014 analogies should illuminate the argument, not decorate the prose.",
      "Do not use the same analogy more than once in its exact form \u2014 instead, introduce it, develop it, and move on (though you may call back to it briefly later).",
      "Do not use rhetorical questions in clusters of more than two \u2014 each question should do real argumentative work, not create a pile-up effect."
    ],
    "evidence": [
      "\"It's like stretching. When you stretch before running, you put your body into positions much more extreme than any it will assume during the run.\"",
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a parenthetical meta-statement that frames the entire piece's scope and purpose before the first real paragraph \u2014 tell the reader what the essay is about and why it matters now.",
      "Begin the body with a relatable, concrete question or image that draws the reader in through shared experience: 'Have you ever seen an old photo of yourself and been embarrassed at the way you looked?'",
      "Move from the concrete opening image to the abstract thesis through a series of escalating steps \u2014 each paragraph raises the stakes slightly until the core claim is reached.",
      "Use section headers as navigational markers that name the method or concept being introduced \u2014 headers should be short (one or two words) and conceptual: 'Trouble', 'Heresy', 'Mechanism', 'Pensieri Stretti'.",
      "Close sections and the essay itself with practical, actionable advice rather than grand conclusions \u2014 end with what to do, not what to think: 'My advice is, don't say it. Or at least, pick your battles.'",
      "Use numbered footnote references [1], [2], etc. to handle asides, qualifications, and tangential evidence without cluttering the main text.",
      "Use parenthetical asides within the text for brief editorial commentary or qualification: '(The best way to do that is to visit them.)'",
      "Format the essay as a structured exploration with named sections that each approach the central question from a different angle \u2014 the piece reads as a toolkit, not a linear argument."
    ],
    "do_not": [
      "Do not open with a dictionary definition, an abstract philosophical statement, or a sweeping generalization about humanity.",
      "Do not close with a neat summary that restates all the points made \u2014 leave the reader with a forward-looking thought or practical implication.",
      "Do not use bullet points or numbered lists within the prose \u2014 maintain the essay form even when presenting multiple items (use comma-separated lists or sequential sentences instead)."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them.)\"",
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked?\"",
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
  "one_line_description": "informal, involved, explicit \u2014 conversational intellectual authority with plain-spoken directness and reasoning-aloud intimacy",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one or two qualifying or elaborating clauses joined by commas and coordinating conjunctions (but, and, because, or).",
      "Use compound sentences linked by coordinating conjunctions as the primary sentence shape; subordinate clauses (because, when, if) serve as supporting scaffolding rather than the backbone.",
      "Chain clauses linearly \u2014 avoid nesting subordinate clauses inside other subordinate clauses; the sentence should read as a sequence, not a tree.",
      "Use conditional structures ('if you\u2026', 'when you\u2026') to embed the reader into hypothetical scenarios rather than stacking abstract subordinate clauses.",
      "Deploy parallel structure when contrasting two types or presenting options: mirror the syntax closely so the contrast is carried by content, not grammar.",
      "Let longer sentences carry the reasoning and shorter sentences carry the verdict \u2014 rhythm alternates between explanation and conclusion.",
      "Chain ideas across sentences rather than packing everything into one: state a principle in one sentence, then illustrate or qualify it in the next."
    ],
    "do_not": [
      "Do NOT use heavily nested subordinate clauses or academic-style periodic sentences that delay the main verb.",
      "Do NOT use ornate or literary sentence constructions \u2014 no inversions, no elaborate participial openings, no suspended syntax.",
      "Do NOT let sentences sprawl with multiple coordinating conjunctions chaining clause after clause in a single breath.",
      "Do NOT sustain the same sentence length for many consecutive sentences \u2014 vary the pace by following extended explanation with a crisp conclusive statement.",
      "Do NOT use semicolons as a primary clause-joining device \u2014 prefer periods or coordinating conjunctions."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a thinking peer who has arrived at insights through personal experience and is sharing them directly \u2014 not lecturing, not hedging excessively, but reasoning aloud with the reader.",
      "Use 'you' as the dominant address, placing the reader inside the argument as a participant who must make decisions.",
      "Use 'I' sparingly but strategically \u2014 deploy personal experience as evidence, not as the center of the essay; when 'I' appears, it should ground an abstract claim in lived reality.",
      "Maintain calm intellectual confidence: state claims plainly without excessive qualification, but use phrases like 'I think,' 'it seems to me,' 'I suspect' at key moments to signal honest uncertainty.",
      "Use contractions naturally in conversational passages but drop them occasionally for emphasis or when stating a principle with more weight.",
      "Adopt a collegial, slightly mentorly distance: treat the reader as an intelligent peer who hasn't yet thought through this particular problem.",
      "Let dry humor surface naturally through unexpected analogies and understatement rather than through jokes or witticisms."
    ],
    "do_not": [
      "Do NOT adopt a detached academic voice \u2014 never write as though observing from above; stay in the argument with the reader.",
      "Do NOT use performative enthusiasm, exclamation marks, or cheerleading language.",
      "Do NOT hedge every claim \u2014 when uncertain, say so once and move on rather than layering qualifiers.",
      "Do NOT moralize or preach; present ideas as interesting puzzles rather than lessons the reader ought to learn.",
      "Do NOT use false modesty or performative doubt \u2014 uncertainty should be genuine, not decorative."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold claim or personal discovery stated plainly, then spend the essay proving and elaborating it through multiple angles and examples.",
      "Build arguments through a pattern of claim \u2192 concrete example \u2192 generalization \u2192 new implication; each section takes a specific instance and extracts a broader principle.",
      "Use analogies, cross-domain examples, and thought experiments as primary evidence rather than citations or data \u2014 ground abstract claims in vivid, concrete scenarios the reader can immediately picture.",
      "Preemptively voice the reader's likely objection, then address it directly before moving on \u2014 acknowledge counterarguments honestly, even if briefly.",
      "Structure the overall argument as progressive deepening: start with a phenomenon everyone can observe, move to its implications, then drill into internal mechanics, then give practical advice.",
      "Use rhetorical questions as structural hinges \u2014 they mark the transition from one section to the next and frame what follows as an answer.",
      "Hedge with specific informal phrases: 'as far as I can tell,' 'I suspect,' 'I think,' 'probably' \u2014 use these at the boundaries of knowledge, never on core claims.",
      "Return recursively to the central concept throughout \u2014 each new section re-engages the thesis from a different angle rather than moving linearly to unrelated topics."
    ],
    "do_not": [
      "Do NOT cite academic papers, statistics, or formal data as primary evidence \u2014 reasoning, examples, and personal observation carry the weight.",
      "Do NOT present arguments as formal logical proofs with numbered premises and conclusions.",
      "Do NOT dismiss counterarguments \u2014 always engage with them honestly before moving forward.",
      "Do NOT leave implications unstated \u2014 draw out what a principle means for the reader's actual decisions and behavior.",
      "Do NOT present ideas as universally agreed-upon \u2014 frame novel claims as your own synthesis."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the point so the first sentence can stand alone as a summary of the paragraph.",
      "Close paragraphs by either landing on a crystallizing conclusion or by pivoting toward the next idea with a sentence that creates forward momentum.",
      "Connect paragraphs through logical entailment rather than explicit transition words \u2014 the last sentence of one paragraph naturally provokes the question the next paragraph answers.",
      "Sequence ideas within a paragraph from general to specific: state the principle, give the example, draw the implication.",
      "When developing a taxonomy or list of components, give each component its own cluster of paragraphs rather than cramming them into a single paragraph.",
      "Within paragraphs, move from claim to elaboration to takeaway \u2014 the structure is assert-illustrate-conclude."
    ],
    "do_not": [
      "Do NOT use explicit transitional phrases like 'Furthermore,' 'Moreover,' 'In addition,' 'In conclusion' \u2014 let the logical connection between paragraphs speak for itself.",
      "Do NOT write paragraphs that meander through multiple unrelated claims \u2014 each paragraph should have one clear center of gravity.",
      "Do NOT end paragraphs with trailing qualifications that dilute the point \u2014 if you must qualify, do it in the middle, then return to the main thrust.",
      "Do NOT begin paragraphs with throat-clearing or meta-commentary ('In this section I will discuss\u2026') \u2014 jump straight into the substance."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from everyday, mechanical, or physical experience to make abstract concepts concrete \u2014 map the abstract onto something the reader can picture immediately.",
      "Deploy rhetorical questions to introduce new sections or pivot to actionable advice \u2014 pose one, answer it, then continue with declarative prose.",
      "Use parallel construction to set up clean binary contrasts \u2014 mirror syntactic structures so the contrast feels inevitable.",
      "Repeat key terms deliberately throughout the essay rather than varying with synonyms \u2014 treat them as technical vocabulary that accumulates meaning with each use.",
      "Use direct address imperatives to convert analysis into advice: 'Treat it as a puzzle,' 'See if you can guess which,' 'Think of some successful startups.'",
      "Employ the 'X, but Y' structure to introduce complications and nuance \u2014 state the expected claim, then pivot with 'but' to reveal the surprising truth.",
      "Deploy callback to familiar sayings or common wisdom, then subvert or refine them.",
      "Use parenthetical asides \u2014 set off by dashes or parentheses \u2014 to inject a quick qualification without breaking the sentence's momentum."
    ],
    "do_not": [
      "Do NOT use literary or poetic devices like alliteration, assonance, or elaborate metaphorical conceits \u2014 analogies should be functional and drawn from the real world.",
      "Do NOT use exclamation marks or hyperbolic superlatives to create emphasis \u2014 let the ideas themselves carry the weight.",
      "Do NOT vary terminology for the sake of elegant variation \u2014 if a term is the concept, use that term every time.",
      "Do NOT overuse rhetorical questions in sequence \u2014 each question should do real argumentative work."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating a general observation or personal discovery in plain, almost understated language \u2014 no hook, no anecdote, no dramatic provocation; begin as if continuing a thought already in progress.",
      "Make the opening sentence do double duty: it should both engage the reader and state the essay's exact subject matter with no preamble.",
      "Close by zooming out from the practical to the philosophical, ending on the most abstract and resonant formulation of the thesis \u2014 the final paragraph should feel like the essay's highest-altitude view.",
      "End with a suggestive reframing that opens rather than closes \u2014 a formulation that invites further thinking rather than neatly summarizing.",
      "Include numbered endnotes for tangential observations, additional examples, and caveats that would interrupt the main flow \u2014 these notes are conversational in tone, not academic.",
      "Use formatting sparingly: no bullet lists, no bold or italic for emphasis within the body text; let the prose structure itself through paragraph breaks and the essay's internal logic.",
      "Follow the personal essay tradition of starting from an observable truth, developing it through reasoning and examples, and arriving at practical wisdom \u2014 maintain a philosophical register throughout without becoming self-help or prescriptive in tone."
    ],
    "do_not": [
      "Do NOT open with a question, a shocking statistic, a dictionary definition, or a dramatic anecdote \u2014 begin with a calm statement of observed truth or personal discovery.",
      "Do NOT close with a neat summary that restates the thesis or a formulaic call to action \u2014 end on a thought that feels slightly open-ended.",
      "Do NOT use subheadings or numbered lists in the body of the essay unless the piece has an explicit toolbox or taxonomy structure \u2014 default to continuous prose organized by paragraph breaks."
    ]
  },
  "signature_phrases": {
    "use": [
      "I suspect",
      "I think so",
      "it seems to me",
      "as far as I can tell",
      "in principle",
      "I doubt",
      "probably",
      "arguably",
      "in fact",
      "Ditto for X",
      "the way to",
      "the trick is",
      "the question to ask is not X but Y",
      "turns out",
      "odds are",
      "Who knew?",
      "That's an important point",
      "There's a surprising amount of",
      "the best place to",
      "Let's see"
    ],
    "never_use": [
      "Furthermore",
      "Moreover",
      "In addition",
      "In conclusion",
      "It is worth noting that",
      "It could be argued that",
      "One might suggest",
      "Needless to say",
      "At the end of the day",
      "It goes without saying",
      "In today's world",
      "utilize",
      "leverage",
      "paradigm",
      "synergy",
      "holistic",
      "actionable",
      "impactful",
      "Let's dive in",
      "Without further ado",
      "game-changer",
      "deep dive"
    ]
  },
  "revision_guidance": [
    "Replace 'Furthermore,' 'Moreover,' and 'In addition' with implicit logical connections or start the sentence with 'But,' 'And,' or the next idea directly.",
    "Convert passive constructions ('it has been observed that') to active first-person ('I've noticed that') or direct assertion.",
    "Replace academic hedges ('it could be argued that,' 'one might suggest') with informal ones ('I suspect,' 'I think,' 'probably').",
    "Break any sentence with more than two levels of subordinate clause nesting into two or more sentences.",
    "Replace abstract claims that lack examples with a concrete illustration from a specific domain \u2014 name a person, company, or historical event.",
    "Convert any paragraph that begins with a transition phrase into one that begins with its core claim.",
    "Replace elegant variation (using synonyms for a key concept) with deliberate repetition of the exact term.",
    "Convert any exclamation marks to periods and rewrite the sentence to let its content create the emphasis.",
    "Replace any sentence that moralizes or preaches with one that frames the idea as an interesting observation or puzzle.",
    "Convert any trailing qualification at the end of a paragraph \u2014 move the hedge to the middle and close with the strongest version of the point."
  ]
}
```