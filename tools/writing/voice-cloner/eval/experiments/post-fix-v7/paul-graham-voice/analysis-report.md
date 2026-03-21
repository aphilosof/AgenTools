# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, exploratory, direct — conversational intellectual authority with analogical reasoning and progressive refinement

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

### sample-1.txt (3350 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "3350",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one qualifying or illustrating clause \u2014 rarely stack more than two dependent clauses in a row.",
      "Default to medium-length declarative sentences that read like spoken explanations; let the prose feel like a smart person talking through an idea aloud.",
      "When a sentence grows long, chain clauses with coordinating conjunctions ('and', 'but', 'because', 'so') rather than subordinating constructions \u2014 keep the syntax flat and forward-moving.",
      "Deploy very short sentences (two to five words) as emphatic punctuation after a developed thought, creating a sudden pause that forces the reader to absorb what was just said.",
      "Use parallel structure to lay out alternatives or contrasts within a sentence: 'If you're naturally X, you're going to Y. And if you're naturally Z, you're going to W.'",
      "Begin sentences with conjunctions ('But', 'And', 'So') frequently to maintain a conversational, additive rhythm \u2014 each sentence feels like the next move in a spoken argument."
    ],
    "do_not": [
      "Do NOT write ornate, heavily nested sentences with multiple levels of subordination \u2014 avoid the academic style of embedding clauses within clauses.",
      "Do NOT use periodic sentence structures where the main point is delayed until the end of a long buildup.",
      "Do NOT use semicolons to join independent clauses as a habitual connective; prefer starting a new sentence with 'But' or 'And' instead."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"And once you find them, they're usually as eager to talk as you are; they need you too.\"",
      "\"You don't want to start a startup to do something that everyone agrees is a good idea, or there will already be other companies doing it.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a direct, collegial first-person voice that treats the reader as an intellectual equal exploring the same problem \u2014 use 'you' constantly to pull the reader into the reasoning process.",
      "Maintain a tone of calm, confident authority while remaining genuinely exploratory \u2014 present conclusions as hard-won personal insights rather than handed-down truths. Signal uncertainty with phrases like 'I think so', 'it seems to me', 'I would think so' rather than formal hedges.",
      "Shift between 'I' (for personal experience and opinions) and 'you' (for universalizing the lesson) fluidly within the same paragraph \u2014 the 'I' grounds the claim, then 'you' extends it to the reader.",
      "Use contractions sparingly but naturally \u2014 deploy them in casual asides and conversational moments, but allow many sentences to remain contraction-free, giving the prose a slightly elevated but never stiff register.",
      "Project the stance of someone who has thought deeply and is sharing genuine discoveries \u2014 not lecturing, not hedging excessively, but saying 'here is what I've figured out' with quiet confidence.",
      "When expressing strong opinions, understate rather than overstate \u2014 let the logic carry the force rather than emphatic language."
    ],
    "do_not": [
      "Do NOT adopt an academic or impersonal register \u2014 never write as if hiding behind institutional authority or formal detachment.",
      "Do NOT be self-deprecating or apologetic about your claims \u2014 present ideas with conviction even when acknowledging uncertainty.",
      "Do NOT use exclamatory or hyperbolic language to generate enthusiasm; the tone should be thoughtful, never breathless."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"Can you make yourself more independent-minded? I think so.\"",
      "\"I don't think we can significantly increase our resistance to being told what to think.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete, relatable pattern or observation, then progressively generalize it \u2014 move from specific examples to an underlying principle, not the reverse.",
      "Introduce a concept by showing it operating in multiple domains (science, investing, startups, essays) before naming it \u2014 let the reader see the pattern emerge through accumulation of cases.",
      "Advance the argument through a dialectical rhythm: state a claim, then immediately qualify or complicate it with 'But', 'Though', or 'One difficulty here' \u2014 acknowledge the messy reality without abandoning the thesis.",
      "Use analogies as primary evidence \u2014 especially vivid, slightly unexpected comparisons that make abstract ideas visceral (submarine sandwiches for ideology, intellectual fashion as waves, curiosity as appetite).",
      "Pose genuine questions mid-argument ('Can you increase your fastidiousness about truth?') and then answer them \u2014 this structures the essay as a series of inquiries rather than a monologue.",
      "Handle counterarguments by preemptively raising them yourself ('One difficulty here, though') and then either resolving them or honestly noting they remain open problems.",
      "Use recursive structure: introduce an idea, develop it, then return to deepen it later \u2014 the argument spirals rather than proceeding strictly linearly."
    ],
    "do_not": [
      "Do NOT begin with a thesis statement and then prove it deductively \u2014 instead let the thesis emerge from accumulated examples and observations.",
      "Do NOT cite studies, statistics, or authorities as primary evidence \u2014 personal experience, thought experiments, and analogies are the preferred modes of support.",
      "Do NOT dismiss objections or complications \u2014 always acknowledge difficulty honestly, even if briefly."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example, it's not enough just to be correct.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"The three components of independent-mindedness work in concert: fastidiousness about truth and resistance to being told what to think leave space in your brain, and curiosity finds new ideas to fill it.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the idea, then develop or illustrate it. The first sentence should be immediately meaningful, not throat-clearing.",
      "Close paragraphs by either delivering a punchline insight, pivoting to a complication ('But...', 'Though...'), or setting up the next paragraph's topic \u2014 endings should create forward momentum.",
      "Use single-sentence paragraphs as dramatic emphasis or to deliver a standalone insight that deserves its own space \u2014 treat them like a beat in a conversation.",
      "Connect paragraphs implicitly through logical continuation (the next paragraph picks up the thread) or explicitly with 'But', 'And', 'So' at the start \u2014 transitions should feel natural and conversational, not signposted with formal connectives.",
      "Within longer paragraphs, sequence ideas as: claim \u2192 example or analogy \u2192 qualification or implication. Follow the natural rhythm of 'here's the idea, here's what it looks like, here's the wrinkle.'"
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'Furthermore', 'Moreover', 'In addition', 'Consequently' \u2014 prefer simple conjunctions or implicit logical flow.",
      "Do NOT write paragraphs that merely summarize what was already said \u2014 every paragraph must advance the argument or introduce new texture.",
      "Do NOT end paragraphs with trailing qualifications that drain momentum \u2014 if a qualification is needed, put it mid-paragraph so the paragraph can still end on a strong note."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"But by different types of people, I don't mean demographically different. For this technique to work, they have to think differently.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map abstract concepts onto concrete, sensory experiences \u2014 make the reader feel the idea physically ('submarine sandwich filled with ingredients of indeterminate age and provenance', 'ideas spreading through groups of people like waves').",
      "Employ parallel structure as a primary persuasive tool, especially to contrast two types of people or two approaches: 'If you're X... if you're Y...' or 'Some are X, and others are Y.'",
      "Use rhetorical questions to transition between sections and re-engage the reader \u2014 pose them as genuine inquiries you're about to explore, not as devices for emphasis.",
      "Repeat key terms deliberately throughout the piece ('independent-minded', 'conventional-minded', 'curiosity', 'fastidiousness') to build a precise vocabulary for the argument \u2014 do not vary terminology for stylistic variety when precision matters.",
      "Use direct address imperatively but gently: 'Think how often...', 'See if you can guess...', 'Stop and ask yourself...' \u2014 frame directives as invitations to participate in the inquiry.",
      "Deploy parenthetical asides to add nuance or humor without interrupting the main flow \u2014 brief clarifications set off by commas or dashes that feel like a spoken aside."
    ],
    "do_not": [
      "Do NOT use literary or poetic metaphors \u2014 analogies should be drawn from everyday experience, technology, science, or practical life.",
      "Do NOT use anaphora or other overt rhetorical figures that draw attention to their own craftsmanship \u2014 the prose should feel unshowy and natural.",
      "Do NOT use exclamation marks or emphatic repetition for emotional effect \u2014 let the ideas themselves generate conviction."
    ],
    "evidence": [
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"You notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt.\"",
      "\"See if you can guess which. The end goal is not to find flaws in the things you're told, but to find the new ideas that had been concealed by the broken ones.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a broad, accessible observation that immediately establishes the core pattern \u2014 no anecdote, no provocation, no throat-clearing. Jump straight to the idea in plain language.",
      "Build the opening by rapidly iterating the same pattern across multiple domains (science, investing, startups) in quick succession \u2014 establish universality before deepening any single thread.",
      "Structure the essay as a progressive exploration: open with a pattern, complicate it, then systematically investigate its components \u2014 the reader should feel like they're discovering the structure alongside the author.",
      "Close the essay by narrowing from general principles to personal, actionable advice \u2014 end not with a grand summary but with a specific, almost intimate directive the reader can act on.",
      "Include numbered footnotes as discursive asides that contain additional examples, qualifications, or tangential observations \u2014 use them to keep the main text clean while still capturing secondary insights.",
      "Use section-break markers (horizontal rules or blank-line separators) to signal major shifts in the argument \u2014 treat the essay as having two or three large movements rather than many small sections.",
      "Format is minimal: no headers, no bullet points, no bold text in the body. The essay is pure flowing prose with only occasional footnote markers and section breaks."
    ],
    "do_not": [
      "Do NOT open with a question, anecdote, or quotation \u2014 begin with a declarative statement of the core observation.",
      "Do NOT close with a neat summary that restates the main points \u2014 end with a forward-looking thought, a personal motto, or a quiet, resonant final line.",
      "Do NOT use subheadings, numbered lists, or other structural formatting within the body text \u2014 the organizational structure should be implicit in the logic."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"So perhaps curiosity is the compass here. Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"[1] One convenient consequence of the fact that no one identifies as conventional-minded is that you can say what you like about conventional-minded people without getting in too much trouble.\""
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
      "Build the default sentence as a clean independent clause with one or two modifying phrases \u2014 avoid ornate, heavily nested structures.",
      "Chain ideas within sentences using commas followed by coordinating conjunctions ('and,' 'but,' 'because'), creating a conversational forward momentum rather than a formal cadence.",
      "Use compound-complex sentences when making a claim and immediately qualifying or extending it in the same breath: 'X is true, but Y, because Z.'",
      "Deploy very short standalone sentences to land a punchline, deliver a verdict, or create emphasis after a longer explanatory passage \u2014 e.g., follow a multi-clause explanation with a blunt conclusion.",
      "Favor 'which means' and 'and so' as informal clause connectors to maintain a thinking-aloud quality.",
      "Use participial and conditional clauses at the front of sentences to set up context before the main assertion: 'If you're not learning, you're probably not on a path that leads to superlinear returns.'"
    ],
    "do_not": [
      "Do NOT write sentences with multiple semicolons or heavy subordination that require re-reading \u2014 keep the syntax transparent on first pass.",
      "Do NOT use flowery or literary sentence constructions; avoid inverted syntax, appositives stacked in sequence, or elaborate parenthetical asides mid-sentence.",
      "Do NOT maintain a monotonous sentence length \u2014 alternate between brisk declarations and sentences that unfold a chain of reasoning."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal reflection or intellectual history, but shift to second person ('you') when giving advice or drawing the reader into a thought experiment \u2014 this creates a collegial, mentor-like stance.",
      "Maintain a tone that is conversational yet intellectually serious \u2014 speak as a thoughtful friend explaining something over coffee, not as an academic or a motivational speaker.",
      "Signal high confidence on core claims with plain declarative assertions ('It's obviously true that...', 'This is why history is full of empires'), but use hedges like 'as far as I can tell,' 'probably,' 'I doubt' when speculating or extrapolating beyond evidence.",
      "Be willing to express genuine surprise or intellectual humility about your own subject matter \u2014 admit when something still startles you or when you don't have a full answer.",
      "Use contractions sparingly and naturally \u2014 they appear in conversational moments but the default register leans slightly more toward written English than casual speech.",
      "Address the reader directly with imperatives when giving advice: 'Choose work you have a natural aptitude for,' 'Be honest, especially with yourself.'"
    ],
    "do_not": [
      "Do NOT adopt an academic or detached tone \u2014 never write as if presenting findings to a committee.",
      "Do NOT use false modesty or excessive hedging on points you believe strongly \u2014 state your view plainly.",
      "Do NOT be sycophantic or effusively encouraging toward the reader; maintain intellectual respect without cheerleading."
    ],
    "evidence": [
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"As far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"It's not just a matter of trying hard. I'm going to take a shot giving a recipe in one paragraph.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, clearly stated thesis \u2014 declare the core insight early and without excessive preamble, then spend the essay substantiating and exploring its implications.",
      "Build arguments through iterative deepening: introduce a concept simply, illustrate it with a concrete example, then reveal a deeper layer or surprising corollary before moving on.",
      "Use concrete, varied examples as the primary form of evidence \u2014 draw from history (empires, Newton, Darwin), business (startups, Y Combinator), everyday life (learning to ride a bicycle, bacterial cultures), and science to triangulate a single abstract point.",
      "Acknowledge counterarguments or complications inline and briefly, often with 'but' or 'though' \u2014 steel-man them just enough to show you've considered them, then explain why your position holds.",
      "Derive heuristics and practical rules from theoretical observations \u2014 move from 'here is how the world works' to 'here is what you should therefore do.'",
      "Use taxonomies to organize complexity: when a phenomenon has multiple causes, explicitly enumerate them ('two fundamental causes'), then treat each in turn.",
      "Return to the central thesis periodically, showing how each new example or sub-argument connects back to the main claim \u2014 the structure is recursive, spiraling outward from the core idea."
    ],
    "do_not": [
      "Do NOT present arguments as a formal logical proof with premises and conclusions \u2014 reason informally and exploratorily.",
      "Do NOT leave abstract claims ungrounded; every general principle must be followed quickly by a specific example.",
      "Do NOT dismiss counterarguments flippantly \u2014 give them a sentence or two of genuine engagement before moving past them.",
      "Do NOT introduce evidence through citations or references to studies; use narrative examples and thought experiments instead."
    ],
    "evidence": [
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"Here's one that does: if you come across something that's mediocre yet still popular, it could be a good idea to replace it.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that makes a clear claim or introduces a new facet of the argument \u2014 don't bury the point.",
      "Use single-sentence paragraphs for emphasis, to deliver a punchline, or to let a striking idea breathe on its own before moving on.",
      "Close paragraphs by either landing the implication of the paragraph's argument or pivoting to the next idea \u2014 end on the 'so what' or the 'which leads to.'",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the final sentence of one paragraph naturally sets up the opening of the next.",
      "Within a paragraph, sequence ideas as: claim \u2192 example or illustration \u2192 implication or qualification. Follow the pattern of assert-then-show.",
      "When exploring a concept with multiple instances, give each instance its own paragraph to maintain clarity, rather than cramming several examples into one dense block."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'Furthermore,' 'Moreover,' 'In addition' \u2014 let the logic of the argument provide the connection.",
      "Do NOT write paragraphs that meander without a clear point; every paragraph should advance the argument or add a new dimension.",
      "Do NOT start consecutive paragraphs with the same syntactic pattern."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\" (standalone sentence-paragraph for emphasis)",
      "\"Fame is an interesting example of a phenomenon that combines both sources of superlinear returns. Fame grows exponentially because existing fans bring you new ones. But the fundamental reason it's so concentrated is thresholds: there's only so much room on the A-list in the average person's head.\"",
      "\"Choose work you have a natural aptitude for and a deep interest in.\" (single-sentence paragraph as a directive)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogies that map abstract concepts onto concrete, familiar domains \u2014 bacterial cultures for exponential growth, grains of rice for compounding, bicycle riding for learning thresholds.",
      "Employ rhetorical questions to introduce new sections or pivot the argument: pose the question the reader should be asking, then answer it immediately.",
      "Use repetition of key terms ('superlinear returns,' 'exponential growth,' 'thresholds') deliberately and without synonym variation \u2014 the repetition builds conceptual scaffolding and reinforces the framework.",
      "Build parallel structures when enumerating or comparing: 'the more X, the more Y' patterns to make causal chains visceral.",
      "Use direct address and imperatives ('Seek out the best colleagues,' 'Be honest') when distilling advice, shifting into a prescriptive register.",
      "Deploy the colon as a rhetorical hinge \u2014 set up an expectation, then deliver the payoff after the colon.",
      "Occasionally quote or paraphrase a common saying, then interrogate or subvert it: 'You get out what you put in' \u2014 then show why it's wrong or incomplete."
    ],
    "do_not": [
      "Do NOT use elaborate literary metaphors, similes with 'like,' or poetic imagery \u2014 keep figurative language functional and explanatory.",
      "Do NOT use exclamation marks or emotional intensifiers; let the ideas carry their own weight.",
      "Do NOT deploy sarcasm or snark \u2014 maintain earnest intellectual engagement even when disagreeing."
    ],
    "evidence": [
      "\"every child is surprised, the first time they hear it, by the story of the man who asks the king for a single grain of rice the first day and double the amount each successive day.\"",
      "\"What are fields where a few big winners outperform everyone else? Here are some obvious ones: sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a personal revelation or reframing of a common assumption \u2014 begin by telling the reader that something they think they understand is more interesting or important than they realize.",
      "The first sentence should be a complete, self-contained thesis or observation that can stand on its own \u2014 make it immediately compelling without requiring context.",
      "Close the essay by zooming out to the broadest implication of the argument and ending on a note that's forward-looking or slightly open-ended, leaving the reader with momentum rather than a neat bow.",
      "Use numbered footnotes (bracketed references like [1], [2]) to handle tangential but interesting points, qualifications, and personal asides \u2014 this keeps the main text clean while rewarding careful readers with additional depth.",
      "End with acknowledgments of people who read drafts \u2014 this signals the essay's origin in a community of thinkers and adds a personal, workshop-like quality.",
      "Avoid headers within the body of the essay \u2014 let the argument flow as continuous prose, with only a 'Notes' section at the end set off distinctly.",
      "Use minimal formatting: no bold, no bullet lists in the main text (lists appear only in the footnotes or as inline enumerations). Emphasis comes from sentence structure and placement, not typographic decoration."
    ],
    "do_not": [
      "Do NOT open with a dictionary definition, a broad historical sweep, or a 'since the dawn of time' framing.",
      "Do NOT close with a tidy summary that restates all the main points \u2014 end with a fresh thought or a final turn of the argument.",
      "Do NOT use subheadings, bold text, or bulleted lists to organize the essay body \u2014 the structure should emerge from the prose itself."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"Thanks to Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan for reading drafts\""
    ]
  }
}
```

### sample-3.txt (2873 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2873,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause with one or two modifying phrases \u2014 keep the core subject-verb-object visible and uncluttered.",
      "When expanding a sentence, prefer chaining with coordinating conjunctions ('and', 'but', 'or') rather than deeply nested subordinate clauses. Let sentences grow horizontally, not vertically.",
      "Use a standalone ultra-short sentence (a fragment or terse declaration) immediately after a buildup of longer, qualifying sentences to deliver a punchline or clinch a point \u2014 e.g., 'There isn't.' after a paragraph of wondering.",
      "Open sentences with the subject or a short fronted adverbial ('Of course,' 'Strangely enough,') rather than with long participial or absolute phrases.",
      "When listing conditions or parallel ideas within a sentence, use the pattern 'not to X, not to Y (which is a form of Z), not to W, and not to V' \u2014 embed brief parenthetical glosses inside list items to add depth without breaking flow.",
      "Let compound sentences carry the argumentative weight: use the first clause to set up an expectation and the second clause (after 'but' or 'and yet') to complicate or reverse it."
    ],
    "do_not": [
      "Do not write sentences with multiple levels of embedding (relative clause inside a subordinate clause inside a participial phrase). Keep nesting to one level at most.",
      "Do not use periodic sentence structure where the main verb is delayed until the end. Deliver the main point early, then qualify.",
      "Do not string together three or more subordinate clauses in sequence \u2014 if a thought requires that much qualification, break it into two sentences."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"There isn't.\"",
      "\"You have to learn not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a peer sharing hard-won personal experience \u2014 use 'I' to anchor claims in autobiography and 'you' to address the reader directly as someone facing the same problem.",
      "Maintain a tone of earnest, conversational authority: speak with confidence about conclusions but openly narrate the process of arriving at them, including past uncertainty ('I wasn't sure of that as a kid').",
      "Signal uncertainty with genuine hedges like 'I suspect,' 'perhaps,' 'I'm not sure,' 'maybe' \u2014 but use them sparingly and only when the uncertainty is real, not as false modesty.",
      "Occasionally adopt a slightly wry, understated humor \u2014 deliver it through juxtaposition or matter-of-fact observation rather than jokes or wordplay ('Not one day off in ten years? These two had about as much natural ability as anyone could have').",
      "Use contractions selectively: contract in casual, conversational moments ('you'll,' 'I can't,' 'that's') but leave verbs uncontracted when making a deliberate, weighty assertion.",
      "Shift from 'I' (personal anecdote) to 'you' (direct advice) to 'one' or impersonal constructions (general principle) as claims move from specific to universal \u2014 this progression signals increasing generality."
    ],
    "do_not": [
      "Do not adopt an academic or detached tone \u2014 never write as though observing from the outside. Always write as someone who has lived through the thing being discussed.",
      "Do not use sarcasm, irony for its own sake, or performative cleverness. The humor should feel incidental, not aimed at getting a laugh.",
      "Do not hedge every claim \u2014 when the author is certain, state it flatly without qualifiers."
    ],
    "evidence": [
      "\"Now I know the answer to that question. There isn't.\"",
      "\"I suspect most people have to learn what work is before they can love it.\"",
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims as personal realizations that evolved over time \u2014 frame the argument as a narrative of discovery ('One thing I know is that...', 'What I've learned since I was a kid is...').",
      "Support claims with named real-world examples (Bill Gates, Messi, Wodehouse, Hardy) and let the examples do the persuasive work rather than abstract reasoning. Quote the exemplary figures directly when possible.",
      "Anticipate the reader's objection conversationally, then answer it: state the objection as though the reader just said it ('Sounds a bit extreme, you think'), then pivot with 'And yet' or 'But'.",
      "Build arguments through progressive refinement: state a simple version of the idea, then immediately complicate it with a 'but' or 'however' or a new consideration, then refine further. The argument spirals inward toward precision.",
      "Use the pattern of establishing a general principle, then immediately testing it against edge cases or personal experience to show its limits, then restating it in a more nuanced form.",
      "Pose genuine questions mid-argument ('But how much time?', 'What even counts as good results?') to mark the frontier of the author's own understanding \u2014 these are not rhetorical but signal honest difficulty.",
      "Move between levels of abstraction fluidly: zoom from a broad life principle to a specific personal anecdote to a quoted authority and back to the general principle within a few paragraphs."
    ],
    "do_not": [
      "Do not present arguments as finished logical proofs with premises and conclusions. The essay should feel like thinking-in-progress, not a completed theorem.",
      "Do not use formal citation style or appeal to studies and statistics \u2014 authority comes from named individuals and personal experience, not data.",
      "Do not dismiss counterarguments \u2014 acknowledge them genuinely and incorporate them into a more refined version of the claim."
    ],
    "evidence": [
      "\"That seems so obvious, and yet in practice we find it slightly hard to grasp. There's a faint xor between talent and hard work.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\"",
      "\"But how much time? And what should you do if work that was going well stops going well? How much time do you give yourself then?\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation stated plainly \u2014 then spend the rest of the paragraph unpacking, qualifying, or illustrating it.",
      "Use single-sentence paragraphs as emphatic punctuation marks to land a key insight or create a dramatic pause after a buildup (e.g., 'There isn't.' or 'Perhaps something changes at adolescence. That would make sense.').",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph sets up the first sentence of the next through thematic echo or direct response.",
      "Within a paragraph, sequence ideas as: claim \u2192 complication or example \u2192 refined restatement. The paragraph ends closer to the truth than where it started.",
      "When a paragraph introduces multiple examples, let them accumulate in parallel structure within the same paragraph rather than giving each its own paragraph.",
      "End paragraphs with forward momentum \u2014 a question, a pivot word, or a statement that invites the next thought \u2014 rather than with a tidy summary."
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'Furthermore,' 'In addition,' 'Moreover,' or 'In conclusion.' Transitions should be invisible, carried by the logic of the ideas.",
      "Do not write paragraphs that close by restating their opening sentence. Each paragraph should end somewhere new.",
      "Do not front-load paragraphs with throat-clearing context \u2014 get to the point in the first sentence."
    ],
    "evidence": [
      "\"There isn't.\" (standalone paragraph delivering the punchline of the preceding one)",
      "\"The reason some subjects seemed easy was that my school had low standards. And the reason famous adults seemed to do things effortlessly was years of practice; they made it look easy.\" (opens with the claim and immediately provides the two explanations)",
      "\"That limit varies depending on the type of work and the person.\" (single-sentence paragraph serving as a pivot)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use parallel structure to give lists and compound ideas a sense of rhythm and completeness: 'you need great natural ability and to have practiced a lot and to be trying very hard.'",
      "Deploy analogies and metaphors drawn from everyday, physical experience \u2014 'like a dog circling while it decides exactly where to lie down,' 'the pursuing beast' \u2014 to make abstract ideas visceral.",
      "Use direct address and imperatives to pull the reader into active engagement: 'get that idea out of your head,' 'cultivate a sensitivity.'",
      "Employ the 'Not X, but Y' or 'not merely X, but Y' construction to sharpen distinctions and redirect the reader's understanding.",
      "Quote other writers and figures at length when their words are more vivid than paraphrase would be \u2014 let borrowed eloquence do the work (Hardy's passage, Wodehouse's self-assessment, Gates's declaration).",
      "Use mathematical or logical vocabulary metaphorically to describe human experience ('a faint xor between talent and hard work,' 'rare squared,' 'simultaneous equations') \u2014 this creates a distinctive intellectual flavor without being pretentious.",
      "Use rhetorical questions that are genuine rather than ornamental \u2014 they should mark moments where the answer is truly uncertain or where the reader needs to think."
    ],
    "do_not": [
      "Do not use extended metaphors that run for multiple sentences \u2014 keep figurative language brief and immediately cash it out in literal terms.",
      "Do not use literary or poetic devices like alliteration, assonance, or elaborate imagery. The prose style is plain and analytical, not lyrical.",
      "Do not use exclamation marks or exclamatory phrasing \u2014 emphasis comes from sentence placement and brevity, not from volume."
    ],
    "evidence": [
      "\"There's a faint xor between talent and hard work.\"",
      "\"like a dog circling while it decides exactly where to lie down\"",
      "\"Like a Spanish Flu victim, you're fighting your own immune system\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a deceptively simple, almost throwaway observation that the reader will initially agree with, then immediately begin complicating it \u2014 the opening should feel like the start of a conversation, not a thesis statement.",
      "Establish the essay's scope in the first few paragraphs through personal framing: 'Here's what I didn't know then that I know now' \u2014 this sets up the entire piece as a journey of understanding.",
      "Close the essay by zooming out to the most general, distilled version of the argument \u2014 a paragraph that reads almost like a compressed summary but adds one final insight (honesty as the meta-principle).",
      "Use numbered footnotes (rendered as bracketed endnotes) for tangential observations, qualifications, and asides that would break the main argument's flow \u2014 these footnotes have their own conversational, digressive character.",
      "Structure the overall essay as a series of progressive complications: introduce a simple idea, then reveal that it's harder than it looks, then show why, then refine the original idea, then introduce the next complication.",
      "Use formatting sparingly \u2014 no headers, no bullet points, no bold or italic emphasis in the body text. Let the prose structure itself through paragraph breaks alone.",
      "The final paragraph should feel like arrival \u2014 a sense that all the threads have been gathered into one clear, actionable formulation."
    ],
    "do_not": [
      "Do not open with a grand declaration, a statistic, or a provocative question. Open with something understated that earns the reader's trust through apparent modesty.",
      "Do not close with a call to action, an inspirational exhortation, or a neat aphorism. The ending should feel like the natural terminus of a thought process, not a motivational poster.",
      "Do not use section headers or structural markers \u2014 the essay should flow as one continuous argument with no visible scaffolding."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\" (opening \u2014 understated, inviting disagreement)",
      "\"This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\" (closing \u2014 zoomed-out synthesis)",
      "\"[1] In 'The Bus Ticket Theory of Genius' I said the three ingredients in great work were natural ability, determination, and interest.\" (footnote style \u2014 conversational, self-referential)"
    ]
  }
}
```

### sample-4.txt (3182 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3182,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a clear main clause, then extend with one or two subordinate or coordinate clauses \u2014 avoid deep nesting beyond two levels of embedding.",
      "Use medium-length sentences as the workhorse, carrying the bulk of explanation and argument, and deploy short declarative sentences to land a point or create emphasis after a longer stretch.",
      "Chain clauses with coordinating conjunctions (and, but, or) rather than subordinating conjunctions when linking ideas of equal weight \u2014 this keeps the prose feeling conversational and forward-moving.",
      "When a sentence grows long, anchor it with concrete nouns and actions rather than abstract nominalizations \u2014 keep the subject-verb core visible even in complex sentences.",
      "Use sentence-initial 'But' and 'And' freely to create continuity between sentences while maintaining a conversational register.",
      "Interrupt the main clause with brief parenthetical asides (set off by dashes or commas) to inject qualification or color without breaking the sentence's momentum."
    ],
    "do_not": [
      "Do not write strings of uniformly long, multi-clause sentences \u2014 the rhythm depends on alternation between longer explanatory sentences and shorter punchy ones.",
      "Do not use semicolons as a primary clause-joining device; prefer periods or coordinating conjunctions instead.",
      "Do not front-load sentences with long adverbial or prepositional phrases before reaching the subject \u2014 get to the actor and action quickly."
    ],
    "evidence": [
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"But the Collison brothers weren't going to wait.\"",
      "\"Who knew?\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the stance of a seasoned practitioner sharing hard-won lessons \u2014 authoritative but not academic, warm but not sentimental.",
      "Use first-person ('I', 'we') to ground claims in personal experience and shared organizational knowledge ('At YC we use the term\u2026'), and use second-person ('you') to directly address the reader as someone who will act on the advice.",
      "Signal confidence through plain declarative assertion rather than hedging \u2014 state claims as facts, then support them with examples rather than qualifying them upfront.",
      "When expressing uncertainty or nuance, use casual hedges like 'I think', 'probably', 'usually' rather than formal academic hedges like 'it could be argued that' or 'one might suggest'.",
      "Maintain a collegial, mentoring tone \u2014 the reader is treated as a smart peer who simply hasn't seen enough data yet, not as a subordinate or novice.",
      "Use contractions sparingly but naturally \u2014 deploy them in conversational passages and direct address, but drop them when making more formal or emphatic points."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic voice \u2014 always maintain the sense of a specific person speaking from experience.",
      "Do not be self-deprecating or excessively humble; the authority comes from having observed many startups, and this should be stated matter-of-factly.",
      "Do not use corporate jargon, buzzwords, or management-speak \u2014 prefer plain, concrete language over abstractions like 'leverage', 'synergy', or 'paradigm'."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"When I remember the Airbnbs during YC, I picture them with rolly bags, because when they showed up for tuesday dinners they'd always just flown back from somewhere.\"",
      "\"We felt pretty lame at the time.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis as a bold, simple assertion in the opening sentence, then spend the rest of the piece illustrating and expanding it through concrete examples.",
      "Structure arguments inductively: present a specific startup story first, then extract the general principle, rather than stating the principle and then finding evidence.",
      "Use named, real-world examples (Stripe, Airbnb, Facebook, Pebble, Wufoo) as the primary form of evidence \u2014 each example should be a brief narrative, not just a citation.",
      "Anticipate and address counterarguments by voicing the reader's likely objection in their own words ('This can't be how the big, famous startups got started, they think'), then refute it directly.",
      "Build arguments through accumulation \u2014 present multiple examples that illustrate the same principle from different angles, each adding a new facet rather than repeating the same point.",
      "Use analogies and metaphors to make abstract concepts tangible: compare startups to cranking car engines, contained fires, projectiles vs. powered aircraft.",
      "When presenting a framework or taxonomy, use section headers as signposts (Recruit, Fragile, Delight, Fire, Consult, Manual, Big, Vector) to organize a long argument into digestible named chunks.",
      "Handle limitations honestly but briefly \u2014 acknowledge that a technique won't work forever or in all cases, then pivot back to why it works now."
    ],
    "do_not": [
      "Do not rely on abstract reasoning alone \u2014 every claim must be grounded in at least one concrete example or anecdote.",
      "Do not use formal logical connectives ('furthermore', 'moreover', 'consequently') \u2014 let the logic emerge from the sequence of examples and the reader's inference.",
      "Do not dismiss counterarguments without engaging with them \u2014 voice them fairly before explaining why they're wrong."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters.\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"They think what they're building is so great that everyone who hears about it will immediately sign up.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or assertion that sets up the paragraph's purpose \u2014 rarely bury the lead.",
      "Use single-sentence paragraphs as emphatic standalone statements that punctuate longer stretches of argument, delivering a key insight or conclusion with extra weight.",
      "When telling a startup anecdote, devote one paragraph to setting the scene and one to extracting the lesson \u2014 keep narrative and analysis in separate containers.",
      "Transition between paragraphs implicitly through thematic continuity rather than explicit transition words \u2014 the next paragraph picks up a thread from the previous one without announcing 'In addition' or 'Furthermore'.",
      "Close paragraphs with the most memorable or quotable formulation of the point, not with a summary or restatement.",
      "Use section headers (single bold words or short phrases) to mark major topic shifts rather than relying on transitional paragraphs."
    ],
    "do_not": [
      "Do not write paragraphs that meander through multiple unrelated points \u2014 each paragraph should serve one clear purpose.",
      "Do not use explicit transition phrases like 'In conclusion', 'Additionally', 'On the other hand' \u2014 let the ideas flow through juxtaposition and logical sequence.",
      "Do not end paragraphs with weak trailing qualifications that undercut the main point."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"That would be a great problem to have. See if you can make it happen.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies as structural devices \u2014 introduce a metaphor (crank engines, contained fires, projectiles vs. aircraft) and develop it across multiple sentences to make an abstract principle visceral.",
      "Deploy direct address imperatives to make advice actionable: 'See if you can make it happen', 'Think of some successful startups', 'Go ahead and do that'.",
      "Use rhetorical questions to voice the reader's doubts, then immediately answer them \u2014 this creates a dialogue-like rhythm ('Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.').",
      "Employ pop-culture and literary references sparingly but memorably to crystallize a point (Scotty vs. Kirk, Steve Jobs's 'insanely great').",
      "Use quoted dialogue and coined terms ('Collison installation', 'pulling a Meraki') to make concepts sticky and shareable.",
      "Build to a culminating formulation that reframes the entire argument in a new, more powerful way \u2014 save the best conceptual move for the end (startups as vectors, not scalars)."
    ],
    "do_not": [
      "Do not use flowery or literary figurative language \u2014 metaphors should be drawn from everyday, mechanical, or business contexts, not from poetry or nature.",
      "Do not overuse rhetorical questions; deploy them at transitions or section openings, not as a constant drumbeat.",
      "Do not use repetition for mere emphasis \u2014 when repeating a word or phrase, it should add new meaning or create a structural parallel."
    ],
    "evidence": [
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"When anyone agreed to try Stripe they'd say 'Right then, give me your laptop' and set them up on the spot.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with the central thesis stated plainly and directly in the first sentence \u2014 no preamble, no anecdote, no throat-clearing. The reader should know exactly what the essay is about within the first line.",
      "Follow the opening thesis with a description of the common misconception it corrects \u2014 frame the essay as a correction to received wisdom.",
      "Use bold single-word or short-phrase section headers (Recruit, Fragile, Delight, Fire, Consult, Manual, Big, Vector) to break a long essay into navigable sections \u2014 headers should be evocative labels, not descriptive summaries.",
      "Close by reframing the core thesis at a higher level of abstraction \u2014 the ending should feel like an elevation of the opening idea, not a repetition of it (scalars \u2192 vectors).",
      "Include numbered endnotes for digressions, qualifications, and tangential thoughts rather than cluttering the main text with parenthetical asides.",
      "End with acknowledgments of readers/contributors \u2014 this reinforces the essay's origin in a community of practice.",
      "Use parenthetical asides within the text (set off by dashes or actual parentheses) for quick qualifications and wry commentary that would interrupt the flow if given their own sentence."
    ],
    "do_not": [
      "Do not open with a question, a quotation, or a scene \u2014 open with the thesis itself.",
      "Do not close with a call to action or an inspirational flourish \u2014 close with the most intellectually interesting reframing of the argument.",
      "Do not use bullet points or numbered lists in the body text \u2014 structure comes from paragraphs and section headers, not from visual formatting."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"[1] Actually Emerson never mentioned mousetraps specifically.\""
    ]
  }
}
```

### sample-5.txt (4820 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 4820,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim or observation, then occasionally extend with a subordinate clause or coordinating conjunction \u2014 the default sentence is a compact declaration, not a sprawling construction.",
      "Use compound sentences primarily to set up contrasts or parallels between two ideas joined by 'but', 'and', or 'or' \u2014 the second clause should reframe, complicate, or invert the first.",
      "Deploy very short standalone sentences as rhetorical punctuation \u2014 a blunt assertion after a longer buildup to land the point with force: 'Scientists go looking for trouble.'",
      "Chain ideas across multiple consecutive sentences rather than packing them into a single complex sentence \u2014 let each thought breathe in its own sentence, building momentum through sequence rather than subordination.",
      "When constructing longer sentences, prefer stacking coordinate clauses or appositives rather than deeply nesting subordinate clauses \u2014 keep the syntax flat and readable even when the sentence grows.",
      "Use conditional and hypothetical framing ('If you...', 'Suppose...', 'What if...') to draw the reader into thought experiments, placing the condition at the sentence's front to orient the reader before delivering the consequence."
    ],
    "do_not": [
      "Do not write sentences with more than two levels of subordination \u2014 avoid nested 'which' or 'that' clauses inside other dependent clauses.",
      "Do not use ornate or Latinate sentence inversions \u2014 keep subject-verb-object order as the default and deviate only for emphasis.",
      "Do not pad sentences with unnecessary qualifiers or hedging adverbs \u2014 if the idea is strong, state it directly."
    ],
    "evidence": [
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"Scientists go looking for trouble.\"",
      "\"If you could travel back in a time machine, one thing would be true no matter where you went: you'd have to watch what you said.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person to establish the author as a thinking companion \u2014 use 'I' to share personal reasoning and 'we' to pull the reader into shared assumptions or shared vulnerability ('we believe', 'our time').",
      "Address the reader directly with 'you' to make abstract arguments feel personal and immediate \u2014 pose questions and hypotheticals directly at the reader to implicate them in the inquiry.",
      "Maintain a tone that is conversational and collegial but intellectually serious \u2014 write as if explaining something fascinating to a smart friend over coffee, not lecturing from a podium.",
      "Signal confidence through directness and simplicity rather than through credentials or citations \u2014 state conclusions plainly and let the reasoning carry the authority.",
      "Express uncertainty or tentativeness with casual hedges like 'I suspect', 'I think', 'it seems', 'odds are' \u2014 these function as intellectual honesty markers, not weakness.",
      "Use contractions selectively to maintain a casual, spoken register \u2014 deploy them in conversational passages and withhold them slightly when making more formal or weighty claims.",
      "Inject dry, understated humor through unexpected analogies, deadpan observations, or absurd hypotheticals rather than through jokes or wit for its own sake."
    ],
    "do_not": [
      "Do not adopt an academic or detached tone \u2014 never write as if filing a report for an institution.",
      "Do not use false modesty or excessive hedging that undermines the argument \u2014 'I suspect' is fine, but 'it might perhaps be the case that one could argue' is not.",
      "Do not be preachy or moralistic \u2014 present ideas as discoveries to explore together, not sermons to deliver."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"Argue with idiots, and you become an idiot.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis with a bold, counterintuitive claim early on, then spend the essay building multiple independent paths to support and explore it \u2014 the structure is radial (many approaches to one idea) rather than strictly linear.",
      "Organize the argument as a series of 'methods' or 'techniques' for the reader to try \u2014 frame intellectual exploration as a practical toolkit ('here's one way to find out', 'another approach is').",
      "Ground abstract arguments in vivid historical examples \u2014 use Galileo, Darwin, the Reformation, McCarthyism, and similar episodes as recurring touchstones that make philosophical points concrete.",
      "Introduce claims through thought experiments and hypotheticals ('Imagine...', 'Suppose...', 'What if...') that let the reader arrive at the conclusion themselves rather than being told it.",
      "Use analogies to everyday experience to make unfamiliar ideas feel obvious \u2014 compare moral fashions to clothing fashions, taboo ideas to mapmakers' deliberate errors, intellectual stretching to physical stretching.",
      "Acknowledge counterarguments or complications briefly and honestly, then move on \u2014 don't dwell on objections but don't pretend they don't exist: 'I'm not arguing for or against this idea here.'",
      "Build arguments through accumulation of parallel examples rather than through formal logical deduction \u2014 stack three or four instances of the same pattern to make the case feel overwhelming."
    ],
    "do_not": [
      "Do not construct arguments through formal syllogisms or step-by-step logical proofs \u2014 the logic should feel intuitive and conversational, not mathematical.",
      "Do not dismiss counterarguments without acknowledgment \u2014 the author's credibility depends on intellectual fairness, even when the engagement is brief.",
      "Do not rely on appeals to authority or citations as the primary evidence \u2014 personal reasoning, historical analogy, and thought experiments carry the argument."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"Another approach is to follow that word, heresy. In every period of history, there seem to have been labels that got applied to statements to shoot them down before anyone had a chance to ask if they were true or not.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently as standalone declarations that land a key insight, pivot the argument, or deliver a punchline \u2014 these function as rhetorical emphasis, not as incomplete thoughts.",
      "Open paragraphs with the core claim or question, then develop it with examples, analogies, or elaboration \u2014 front-load the idea so the reader always knows where you're going.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 let the next paragraph pick up where the previous one left off, or answer the question the previous one posed.",
      "Use section headers (bold or capitalized phrases) to signal major shifts in the argument's direction \u2014 each section introduces a new 'method' or 'angle' on the central question.",
      "Within longer paragraphs, sequence ideas from general claim to specific example to implication \u2014 move from the abstract to the concrete and then draw out the lesson.",
      "Close paragraphs with a sentence that either crystallizes the point or pivots to the next idea \u2014 the final sentence should feel like it snaps shut or opens a door."
    ],
    "do_not": [
      "Do not use mechanical transition phrases like 'Furthermore', 'Moreover', 'In addition' \u2014 transitions should feel organic, arising from the logical relationship between ideas.",
      "Do not write paragraphs that meander through multiple unrelated points \u2014 each paragraph should orbit a single idea or example.",
      "Do not bury the lead \u2014 never save the paragraph's main point for the final sentence after extensive wind-up."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"But they're much more dangerous.\"",
      "\"The age of consent fluctuates like hemlines.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map a familiar domain onto an unfamiliar one \u2014 clothing fashion onto moral fashion, mapmakers' errors onto conformist belief, physical stretching onto intellectual flexibility \u2014 and return to these analogies throughout the essay as recurring motifs.",
      "Pose rhetorical questions directly to the reader to open new lines of inquiry \u2014 use them to transition between sections and to implicate the reader in the argument ('Is our time any different?', 'Do we have no Galileos?').",
      "Deploy parallel structure to create memorable contrasts and equivalences \u2014 pair two clauses with identical syntax but different content to sharpen the distinction: 'Dressing oddly gets you laughed at. Violating moral fashions can get you fired, ostracized, imprisoned, or even killed.'",
      "Use lists of escalating examples (often three items) to build momentum \u2014 the final item should be the most extreme or surprising: 'fired, ostracized, imprisoned, or even killed.'",
      "Employ reductio ad absurdum through vivid hypotheticals \u2014 invent absurd scenarios (banning the color yellow, complimenting shirts as harassment) to expose the logic of real phenomena.",
      "Repeat key phrases and concepts throughout the essay as structural anchors \u2014 'what you can't say', 'moral fashions', 'time machine' recur to tie disparate sections together.",
      "Use quotations and foreign phrases sparingly but memorably \u2014 drop in a Latin or Italian phrase, a historical quote, or a pop culture reference ('Fight Club') to add texture and authority."
    ],
    "do_not": [
      "Do not use metaphors that are literary or poetic for their own sake \u2014 every figurative device must clarify or advance the argument, not decorate it.",
      "Do not overuse rhetorical questions in succession \u2014 one well-placed question per transition is sufficient; clustering them dilutes their force.",
      "Do not employ elaborate extended metaphors that require the reader to track a complex mapping \u2014 analogies should be immediately graspable."
    ],
    "evidence": [
      "\"It's the nature of fashion to be invisible, in the same way the movement of the earth is invisible to all of us riding on it.\"",
      "\"Training yourself to think unthinkable thoughts has advantages beyond the thoughts themselves. It's like stretching.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical or prefatory note that frames the essay's subject and stakes in one or two sentences \u2014 set the reader's expectations before the essay proper begins.",
      "Begin the body with a relatable, everyday observation or question that hooks the reader before revealing the deeper stakes \u2014 start with 'Have you ever...' or a shared experience, then pivot to the real subject.",
      "Structure the essay as a series of named sections (bold headers like 'The Conformist Test', 'Trouble', 'Heresy', 'Mechanism') that each tackle the central question from a different angle \u2014 the essay reads as an exploration with multiple entry points rather than a single linear argument.",
      "Close the essay by returning to the practical implications \u2014 after exploring the intellectual landscape, end with advice for the reader on what to actually do with these ideas.",
      "Use the closing to introduce a note of modesty or qualification \u2014 acknowledge the difficulty or imperfection of the advice, ending with honesty rather than false certainty.",
      "Include numbered endnote references [1], [2], etc. inline to signal supporting evidence or digressions without breaking the essay's flow.",
      "Use em dashes sparingly and parenthetical asides (in actual parentheses) to insert secondary thoughts, qualifications, or jokes without derailing the main sentence."
    ],
    "do_not": [
      "Do not open with a dictionary definition, a broad historical sweep, or a generic statement about humanity \u2014 start with something specific and personal.",
      "Do not close with a grand, sweeping declaration or call to action \u2014 end with practical wisdom delivered in a conversational register.",
      "Do not use bullet points or numbered lists in the body \u2014 structure should emerge from prose paragraphs and section headers, not formatting."
    ],
    "evidence": [
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"My advice is, don't say it. Or at least, pick your battles.\"",
      "\"Closed thoughts and an open face. Smile at everyone, and don't tell them what you're thinking. This was wise advice.\""
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
  "one_line_description": "informal, exploratory, direct \u2014 conversational intellectual authority with analogical reasoning and progressive refinement",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim with one or two extending clauses \u2014 keep the subject-verb-object core visible even in longer constructions.",
      "Chain clauses with coordinating conjunctions ('and', 'but', 'because', 'so') rather than deeply nested subordination \u2014 keep syntax flat and forward-moving.",
      "Use compound sentences to set up contrasts or complications: the first clause states an expectation, the second (after 'but' or 'and yet') complicates or reverses it.",
      "Begin sentences with conjunctions ('But', 'And', 'So') frequently to maintain conversational, additive rhythm between sentences.",
      "When a sentence grows long, anchor it with concrete nouns and actions rather than abstract nominalizations.",
      "Use conditional and hypothetical framing ('If you...', 'Suppose...') at the front of sentences to draw the reader into thought experiments before delivering the consequence.",
      "Favor 'which means' and 'and so' as informal clause connectors to maintain a thinking-aloud quality."
    ],
    "do_not": [
      "Do NOT write sentences with multiple levels of embedding \u2014 avoid nesting relative clauses inside subordinate clauses inside participial phrases.",
      "Do NOT use periodic sentence structures where the main point is delayed until the end of a long buildup.",
      "Do NOT use semicolons as a habitual clause-joining device \u2014 prefer starting a new sentence with 'But' or 'And' instead.",
      "Do NOT write ornate, Latinate, or literary sentence constructions \u2014 avoid inverted syntax and elaborate appositives stacked in sequence."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a direct, collegial first-person voice that treats the reader as an intellectual equal exploring the same problem \u2014 use 'you' constantly to pull the reader into the reasoning.",
      "Maintain a tone of calm, confident authority while remaining genuinely exploratory \u2014 present conclusions as hard-won personal insights rather than handed-down truths.",
      "Shift between 'I' (for personal experience and opinions) and 'you' (for universalizing the lesson) fluidly within the same paragraph \u2014 the 'I' grounds the claim, then 'you' extends it.",
      "Signal uncertainty with casual hedges like 'I think', 'I suspect', 'probably', 'it seems to me' rather than formal academic hedges \u2014 use them only when the uncertainty is real.",
      "Use contractions selectively: deploy them in casual, conversational moments but allow many sentences to remain contraction-free, giving the prose a slightly elevated but never stiff register.",
      "Project the stance of someone who has thought deeply and is sharing genuine discoveries \u2014 not lecturing, not hedging excessively, but saying 'here is what I've figured out' with quiet confidence.",
      "When expressing strong opinions, understate rather than overstate \u2014 let the logic carry the force rather than emphatic language.",
      "Inject dry, understated humor through unexpected analogies or matter-of-fact observations rather than through jokes or wordplay."
    ],
    "do_not": [
      "Do NOT adopt an academic or impersonal register \u2014 never write as if hiding behind institutional authority or formal detachment.",
      "Do NOT be self-deprecating or apologetic about your claims \u2014 present ideas with conviction even when acknowledging uncertainty.",
      "Do NOT use exclamatory or hyperbolic language to generate enthusiasm \u2014 the tone should be thoughtful, never breathless.",
      "Do NOT be preachy or moralistic \u2014 present ideas as discoveries to explore together, not sermons to deliver."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete observation or bold claim, then progressively deepen and complicate it \u2014 move from specific examples to underlying principles through accumulation.",
      "Introduce a concept by showing it operating in multiple domains (science, startups, history, everyday life) before naming it \u2014 let the reader see the pattern emerge.",
      "Advance the argument through a dialectical rhythm: state a claim, then immediately qualify or complicate it with 'But', 'Though', or 'One difficulty here' \u2014 acknowledge messy reality without abandoning the thesis.",
      "Use analogies as primary evidence \u2014 especially vivid, slightly unexpected comparisons that make abstract ideas visceral and graspable.",
      "Ground abstract arguments in named, real-world examples (historical figures, specific companies, named individuals) and let the examples do the persuasive work.",
      "Pose genuine questions mid-argument and then answer them \u2014 structure the essay as a series of inquiries rather than a monologue.",
      "Handle counterarguments by preemptively raising them yourself, often voicing the reader's likely objection, then resolving or honestly noting they remain open problems.",
      "Use thought experiments and hypotheticals to let the reader arrive at conclusions themselves rather than being told.",
      "Build arguments through accumulation of parallel examples rather than formal deduction \u2014 stack instances of the same pattern to make the case feel overwhelming."
    ],
    "do_not": [
      "Do NOT begin with a thesis statement and prove it deductively \u2014 instead let the thesis emerge or deepen through accumulated examples and observations.",
      "Do NOT cite studies, statistics, or authorities as primary evidence \u2014 personal experience, thought experiments, and analogies are the preferred modes of support.",
      "Do NOT dismiss counterarguments \u2014 acknowledge them genuinely, even if briefly, before explaining why your position holds.",
      "Do NOT present arguments as finished logical proofs \u2014 the essay should feel like thinking-in-progress, not a completed theorem."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation stated plainly \u2014 front-load the idea, then develop or illustrate it.",
      "Within paragraphs, sequence ideas as: claim \u2192 example or analogy \u2192 qualification or implication \u2014 follow the natural rhythm of 'here's the idea, here's what it looks like, here's the wrinkle.'",
      "Connect paragraphs through implicit logical continuation or simple conjunctions ('But', 'And', 'So') rather than formal connectives \u2014 transitions should feel natural and conversational.",
      "Close paragraphs by either delivering a punchline insight, pivoting to a complication, or setting up the next paragraph's topic \u2014 endings should create forward momentum.",
      "End paragraphs with the most memorable formulation of the point, not with a summary or trailing qualification that drains momentum."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'Furthermore', 'Moreover', 'In addition', 'Consequently' \u2014 let the logic of the argument provide the connection.",
      "Do NOT write paragraphs that merely summarize what was already said \u2014 every paragraph must advance the argument or introduce new texture.",
      "Do NOT start consecutive paragraphs with the same syntactic pattern.",
      "Do NOT front-load paragraphs with throat-clearing context \u2014 get to the point in the first sentence."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map abstract concepts onto concrete, sensory, everyday experiences \u2014 make the reader feel the idea physically.",
      "Employ parallel structure as a primary persuasive tool, especially to contrast two types of people, approaches, or outcomes.",
      "Use rhetorical questions to transition between sections and re-engage the reader \u2014 pose them as genuine inquiries you're about to explore, not as devices for mere emphasis.",
      "Repeat key terms deliberately throughout the piece to build conceptual scaffolding \u2014 do not vary terminology for stylistic variety when precision matters.",
      "Use direct address and imperatives gently: 'Think how often...', 'See if you can...', 'Choose work you...' \u2014 frame directives as invitations to participate in the inquiry.",
      "Deploy parenthetical asides (set off by dashes or commas) to add nuance, qualification, or dry humor without interrupting the main flow.",
      "Use the colon as a rhetorical hinge \u2014 set up an expectation, then deliver the payoff after the colon.",
      "Quote other writers and figures when their words are more vivid than paraphrase \u2014 let borrowed eloquence do the work when appropriate."
    ],
    "do_not": [
      "Do NOT use literary or poetic metaphors \u2014 analogies should be drawn from everyday experience, technology, science, or practical life.",
      "Do NOT use exclamation marks or emphatic repetition for emotional effect \u2014 let the ideas themselves generate conviction.",
      "Do NOT use anaphora or other overt rhetorical figures that draw attention to their own craftsmanship \u2014 the prose should feel unshowy and natural.",
      "Do NOT deploy sarcasm or snark \u2014 maintain earnest intellectual engagement even when disagreeing."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a clear, self-contained observation or thesis in the first sentence \u2014 no anecdote, no throat-clearing, no dictionary definition. Jump straight to the idea in plain language.",
      "Frame the opening by identifying a common misconception or an underappreciated pattern \u2014 set up the essay as correcting or deepening the reader's understanding.",
      "Structure the essay as a progressive exploration: open with a pattern, complicate it, investigate its components \u2014 the reader should feel like they're discovering the structure alongside the author.",
      "Close by zooming out to the broadest implication or by narrowing to personal, actionable advice \u2014 end not with a grand summary but with a forward-looking thought or a quiet, resonant final line.",
      "Include numbered footnotes as discursive asides for tangential observations, qualifications, and additional examples \u2014 keep the main text clean while rewarding careful readers.",
      "Format is minimal: no bullet points, no bold text in the body. The essay is pure flowing prose with only occasional footnote markers and section breaks.",
      "End with acknowledgments of people who read drafts \u2014 this signals the essay's origin in a community of thinkers."
    ],
    "do_not": [
      "Do NOT open with a question, quotation, broad historical sweep, or 'since the dawn of time' framing.",
      "Do NOT close with a tidy summary that restates all main points \u2014 end with a fresh thought or a final turn of the argument.",
      "Do NOT use subheadings, numbered lists, or bulleted lists within the body text \u2014 organizational structure should be implicit in the logic."
    ]
  },
  "signature_phrases": {
    "use": [
      "I think so",
      "it seems to me",
      "as far as I can tell",
      "I suspect",
      "which means",
      "and so",
      "in fact",
      "of course",
      "the trouble is",
      "one difficulty here",
      "probably",
      "and yet",
      "who knew?",
      "sounds a bit extreme",
      "I wouldn't say",
      "a faint xor",
      "the short version is",
      "here is what I've figured out"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "in addition",
      "consequently",
      "it could be argued that",
      "in conclusion",
      "leverage",
      "synergy",
      "paradigm",
      "unpack",
      "deep dive",
      "at the end of the day",
      "it is worth noting that",
      "needless to say",
      "game-changer",
      "impactful",
      "utilize",
      "in terms of",
      "going forward",
      "on the other hand"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', and 'in addition' with 'But', 'And', or implicit logical flow.",
    "Convert passive constructions to active \u2014 'it was found that X' becomes 'I found X' or 'X turns out to be'.",
    "Replace abstract nominalizations with concrete verbs \u2014 'the implementation of' becomes 'implementing', 'the facilitation of' becomes 'helping'.",
    "Break any sentence with more than two levels of subordination into two or more sentences joined by conjunctions.",
    "Replace formal hedges ('it could be argued that', 'one might suggest') with casual ones ('I think', 'probably', 'I suspect').",
    "Remove exclamation marks entirely \u2014 restructure for emphasis through sentence placement and brevity instead.",
    "Replace literary or poetic metaphors with analogies drawn from everyday experience, technology, or science.",
    "Convert 'Furthermore' transitions to 'But', 'And', 'So', or simply begin the next paragraph without a connective.",
    "When a claim lacks a concrete example, add one drawn from history, startups, science, or everyday life within the same paragraph.",
    "Remove any sentence that merely restates what was already said \u2014 every sentence must advance the argument or add new texture."
  ]
}
```