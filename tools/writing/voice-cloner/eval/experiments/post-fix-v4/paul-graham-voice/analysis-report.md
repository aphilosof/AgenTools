# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, involved, explicit — conversational authority with intellectual curiosity and inductive reasoning

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
      "Build sentences around a single clear claim, then extend them with one qualifying or elaborating clause using commas and conjunctions like 'but,' 'and,' 'because,' or 'which.'",
      "Default to medium-length declarative sentences that state an idea plainly, then follow up with a second sentence that refines, qualifies, or illustrates the first.",
      "When a point has landed and needs emphasis, drop to a very short standalone sentence that functions as a punctuation mark on the preceding argument.",
      "Chain ideas within a sentence using subordinating clauses ('because,' 'if,' 'when,' 'though') to build conditional or causal reasoning inline rather than across separate sentences.",
      "Use parallel structure when presenting components of an idea \u2014 list items should share the same grammatical form and roughly similar weight.",
      "When constructing longer sentences, prefer comma-separated clauses over semicolons or dashes \u2014 let the sentence breathe through light punctuation."
    ],
    "do_not": [
      "Do NOT write sentences with multiple nested subordinate clauses that require re-reading to parse \u2014 keep the branching shallow, one level deep at most.",
      "Do NOT use semicolons as a primary connective device; they should be near-absent.",
      "Do NOT front-load sentences with long adverbial phrases or participial openers \u2014 get to the subject and verb quickly.",
      "Do NOT use dashes or ellipses for dramatic pauses \u2014 the rhythm comes from sentence breaks, not internal punctuation tricks."
    ],
    "evidence": [
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"I really want to know.\"",
      "\"The most important active step you can take to cultivate your curiosity is probably to seek out the topics that engage it.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first and second person freely \u2014 use 'you' to address the reader as a thinking companion, and 'I' to share personal observation and experience. Shift between them naturally within the same paragraph.",
      "Adopt the stance of someone thinking out loud alongside the reader, not lecturing from above. Present ideas as discoveries being worked out in real time, even when you're confident.",
      "Signal uncertainty with natural hedges like 'I think so,' 'it seems to me,' 'I would think,' 'perhaps' \u2014 present them as genuine intellectual humility, not weakness.",
      "Use contractions sparingly and naturally \u2014 they appear in conversational asides and when mimicking speech rhythms, but the default register is slightly more formal than casual speech.",
      "Maintain a warm but intellectually serious tone \u2014 the reader is treated as smart enough to follow the argument without hand-holding, but the writing never becomes cold or academic.",
      "When making a strong claim, state it plainly and directly without hedging. Reserve hedges for genuinely uncertain territory."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal academic voice \u2014 always maintain the sense of a person thinking and sharing.",
      "Do NOT use false modesty or excessive hedging that undermines every claim \u2014 hedge strategically, not reflexively.",
      "Do NOT use humor as a primary device or go for laughs \u2014 the tone is earnest and curious, with occasional dry wit that emerges from the ideas themselves rather than being imposed.",
      "Do NOT use imperative commands aggressively; when giving advice, frame it as 'you want to' or 'you can' rather than barking orders."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"Can you make yourself more independent-minded? I think so.\"",
      "\"I certainly got a strong dose of it from my father.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern across multiple concrete examples before naming the general principle \u2014 let the reader see the pattern emerge inductively before you state it explicitly.",
      "After stating a general principle, immediately test its boundaries: introduce the exception, the counterexample, or the complication. Use phrases like 'But this pattern isn't universal' or 'One difficulty here, though.'",
      "Advance arguments through a dialectical structure: claim \u2192 complication \u2192 refinement \u2192 new claim. Each section should feel like the essay is discovering its own thesis progressively.",
      "Use concrete, specific examples drawn from everyday life, startups, and intellectual history rather than abstract reasoning \u2014 ground every abstract idea in something the reader can picture.",
      "When introducing a new conceptual framework (like the three components of independent-mindedness), enumerate the parts clearly, then explore each one, then show how they interact.",
      "Employ analogies that map an abstract concept onto a physical or sensory experience to make it visceral and memorable.",
      "Acknowledge counterarguments by genuinely engaging with them \u2014 don't strawman. Present the strongest version of the opposing view before explaining why you disagree."
    ],
    "do_not": [
      "Do NOT present ideas as settled dogma \u2014 maintain a sense of ongoing inquiry even when making strong claims.",
      "Do NOT rely on citations, statistics, or appeals to authority as primary evidence \u2014 the authority comes from the quality of the reasoning and the aptness of the examples.",
      "Do NOT skip the 'but' \u2014 every major claim should be followed by its complication or limitation before moving on.",
      "Do NOT use formal logical connectives like 'therefore,' 'furthermore,' 'moreover' \u2014 the logical flow should feel conversational, not syllogistic."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example, it's not enough just to be correct.\"",
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\"",
      "\"Without this fastidiousness about truth, you can't be truly independent-minded. It's not enough just to have resistance to being told what to think. Those kind of people reject conventional ideas only to replace them with the most random conspiracy theories.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open most paragraphs with a direct claim or observation \u2014 the topic sentence IS the first sentence, stated without preamble.",
      "Follow the opening claim with one or two sentences that elaborate, qualify, or provide evidence, then move on. Don't belabor a point once it's made.",
      "Use single-sentence paragraphs deliberately to mark pivots, deliver punchlines, or let a particularly important idea breathe on its own.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 the last sentence of one paragraph should create a natural opening for the next, often through complication or question.",
      "When transitioning to a new subtopic, use a brief bridging paragraph that names the shift explicitly, then proceed.",
      "Within a paragraph, sequence ideas from concrete to abstract, or from observation to implication \u2014 move from what you can see to what it means."
    ],
    "do_not": [
      "Do NOT start paragraphs with transition phrases like 'Furthermore,' 'In addition,' 'Additionally' \u2014 these are banned. The flow should feel natural, not signposted.",
      "Do NOT write paragraphs that repeat the same point in multiple ways for emphasis \u2014 state it once clearly and move on.",
      "Do NOT end paragraphs with summary sentences that restate what was just said \u2014 end with the most interesting or forward-looking thought in the paragraph."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"But by different types of people, I don't mean demographically different. For this technique to work, they have to think differently.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map unfamiliar concepts onto vivid, concrete images \u2014 especially analogies involving food, physical sensation, or spatial relationships. Deploy them at the moment of highest abstraction to re-ground the reader.",
      "Employ rhetorical questions as genuine invitations to think, not as rhetorical flourishes. Place them at transition points where the essay is about to explore a new angle.",
      "Use repetition of key terms (like 'independent-minded' and 'conventional-minded') deliberately and without synonym variation \u2014 the repeated term becomes a conceptual anchor that accumulates meaning across the essay.",
      "Build parallel structures when presenting contrasts or lists \u2014 use the same grammatical frame to let the reader focus on the differences in content.",
      "Use direct address ('you,' 'ask yourself,' 'imagine') to pull the reader into active participation in the argument.",
      "Employ negation as a definitional tool: define what something is NOT before (or alongside) defining what it IS."
    ],
    "do_not": [
      "Do NOT use metaphors that call attention to themselves as literary devices \u2014 analogies should feel like clarifications, not decorations.",
      "Do NOT use anaphora or other overt rhetorical repetition patterns \u2014 repetition should feel natural and functional, not oratorical.",
      "Do NOT use exclamation marks or other typographic emphasis for emotional effect \u2014 let the ideas carry their own weight.",
      "Do NOT deploy pop culture references or trendy allusions \u2014 examples should be timeless or drawn from intellectual history and startup culture."
    ],
    "evidence": [
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"How did things look to them? This is hard to do, but worth the effort for the same reason it's worth travelling far to triangulate a point.\"",
      "\"You notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open an essay by stating a broad, slightly counterintuitive observation about how the world works \u2014 not a thesis statement, but an entry point that the reader can nod along with before the complications arrive.",
      "Build the opening by stacking two or three concrete examples of the same pattern (scientists, investors, founders) before naming the pattern explicitly. Let the reader feel the generalization forming.",
      "Close the essay not with a neat summary but with an open, forward-looking thought that suggests further exploration \u2014 leave the reader with a direction, not a destination.",
      "Use section breaks (visual dividers) to mark major structural shifts in the essay, particularly when moving from 'what' to 'how' or from diagnosis to prescription.",
      "Place footnotes or endnotes for tangential ideas, qualifications, and examples that would interrupt the main argument's flow \u2014 use them to create a second layer of conversation with the more curious reader.",
      "Format the essay as continuous prose with minimal formatting \u2014 no headers, no bullet lists, no bold text in the body. Let the argument's own structure provide the organization.",
      "Use parenthetical asides occasionally and lightly \u2014 they should feel like quick whispered additions, not extended digressions."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation, or a dramatic anecdote \u2014 open with a plain declarative observation.",
      "Do NOT close with a call to action, a pithy one-liner designed for social media, or a neat bow that resolves all tensions \u2014 the ending should feel like a natural stopping point in an ongoing inquiry.",
      "Do NOT use headers, subheaders, or bullet-point lists in the main body \u2014 the essay form demands flowing prose.",
      "Do NOT front-load the essay with definitions or throat-clearing context \u2014 dive into the subject immediately through examples."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"So there is not just a single model of independent-mindedness. Some independent-minded people are openly subversive, and others are quietly curious. They all know the secret handshake though.\""
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
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause \u2014 rarely stack more than two dependent clauses in sequence.",
      "Use the default pattern of medium-length declarative sentences as the workhorse, then deploy a notably short sentence immediately after a complex idea to land the point with force: state the buildup, then snap it shut.",
      "Chain ideas across sentences rather than within them \u2014 let each sentence carry one move (claim, example, consequence) and build momentum through sentence-to-sentence progression rather than intra-sentence complexity.",
      "When constructing longer sentences, prefer coordinating conjunctions ('and', 'but', 'because') over deeply nested subordination \u2014 keep the syntax flat even when the idea is layered.",
      "Use parallel structure when presenting pairs or lists of related ideas, mirroring grammatical form across clauses to create a sense of logical inevitability.",
      "Place conditional or concessive clauses ('if', 'when', 'though') at the front of sentences to set up the main assertion as a payoff."
    ],
    "do_not": [
      "Do not write sentences with three or more levels of subordination \u2014 if you need that much nesting, break it into separate sentences.",
      "Do not use flowery or elaborate syntax; keep sentence architecture transparent and functional, never drawing attention to itself.",
      "Do not rely on semicolons or dashes to splice together what should be separate sentences \u2014 prefer periods and fresh starts."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as a thinking companion \u2014 someone working through ideas alongside the reader, not lecturing from above. Use 'you' frequently to pull the reader into the argument as a participant.",
      "Maintain a tone that is intellectually confident but personally humble \u2014 assert ideas boldly while freely admitting uncertainty, surprise, or the limits of your knowledge ('as far as I can tell', 'I doubt we could ever predict this with certainty').",
      "Signal genuine engagement with your own ideas \u2014 express surprise, excitement, or unease about conclusions rather than presenting them with detached authority.",
      "Use contractions sparingly and naturally \u2014 employ them in conversational asides and informal moments, but default to uncontracted forms in expository passages to maintain a slightly elevated register.",
      "Adopt a collegial, one-smart-person-to-another distance \u2014 assume the reader is intelligent and ambitious, never condescend, but also don't assume specialized knowledge.",
      "When making strong claims, let the logic carry the weight rather than rhetorical force \u2014 state things plainly and trust the reader to feel the impact."
    ],
    "do_not": [
      "Do not adopt a detached academic tone \u2014 always write as someone who has skin in the game and cares about the practical implications.",
      "Do not use humor as a stylistic device \u2014 the tone is earnest and direct, not sardonic or playful.",
      "Do not hedge excessively or qualify every claim \u2014 when uncertain, say so once and move on rather than layering caveats."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis boldly and early \u2014 state the big idea in the opening sentences, then spend the rest of the piece unpacking, proving, and extending it.",
      "Build arguments through concrete examples that escalate in scope \u2014 start with everyday or familiar cases (bacterial cultures, startups) and progress to grander ones (empires, scientific revolutions, Newton).",
      "Use a taxonomic logic: decompose a complex phenomenon into its fundamental components (e.g., 'two fundamental causes'), then analyze each component separately before showing how they interact.",
      "Handle counterarguments by naming them briefly, then immediately reframing or refuting them \u2014 don't dwell on opposing views but don't ignore them either. Often introduce them with 'Some think...' or 'It may seem...' before pivoting.",
      "Connect sections through explicit logical bridges: 'The other source of...', 'What about step functions?', 'What else can we learn from these fields?' \u2014 use questions and transitional claims to steer the reader into the next phase of the argument.",
      "Move between abstract principle and concrete illustration in a steady rhythm \u2014 never stay abstract for more than a paragraph without grounding the idea in a specific, tangible case.",
      "When the argument reaches its natural conclusion, pivot to practical implications \u2014 shift from 'here is how the world works' to 'here is what you should do about it.'",
      "Use analogies as primary evidence \u2014 draw parallels across disparate domains (biology, military history, scholarship, startups) to show that the same structural pattern recurs."
    ],
    "do_not": [
      "Do not present opposing views at length or steel-man them extensively \u2014 acknowledge and move past them quickly.",
      "Do not rely on citations, data, or formal evidence \u2014 the argument is built on logical reasoning, historical examples, and the author's personal observation.",
      "Do not leave ideas as pure abstraction \u2014 every principle must be anchored by at least one concrete example."
    ],
    "evidence": [
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"In the startup world, the name for this principle is 'do things that don't scale.'\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or observation that advances the argument \u2014 the first sentence should do real intellectual work, not merely transition.",
      "Use standalone single-sentence paragraphs as emphatic punctuation \u2014 deploy them after a buildup to deliver a stark conclusion or to let an important idea breathe on its own.",
      "Sequence ideas within a paragraph as: claim \u2192 example or elaboration \u2192 implication or consequence. Follow assertion with evidence, then draw out what it means.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph sets up the first sentence of the next, creating a chain of ideas.",
      "When shifting to a new subtopic, use a question as the paragraph opener to signal the pivot and re-engage the reader's attention.",
      "Place the most important or surprising statement in the paragraph at either the very beginning or the very end \u2014 never bury the key insight in the middle."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore,' 'Moreover,' 'In addition') \u2014 let the logical structure do the connecting.",
      "Do not write paragraphs that merely restate or summarize what was just said \u2014 every paragraph must push the argument forward.",
      "Do not front-load paragraphs with throat-clearing or context-setting that delays the point."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.\"",
      "\"Fame is an interesting example of a phenomenon that combines both sources of superlinear returns. Fame grows exponentially because existing fans bring you new ones. But the fundamental reason it's so concentrated is thresholds: there's only so much room on the A-list in the average person's head.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as a primary rhetorical tool \u2014 illuminate abstract principles by showing they operate identically in biology, military history, startups, science, and everyday life.",
      "Employ rhetorical questions to introduce new sections or subtopics \u2014 use them as structural pivots that invite the reader to think before the answer is provided.",
      "Build parallel structures when presenting classifications or paired ideas \u2014 mirror grammatical form to create a sense of logical completeness ('the more X, the more Y').",
      "Use direct address and imperatives when shifting to practical advice ('Seek out the best colleagues', 'Develop good taste', 'Be honest') \u2014 switch from analytical mode to prescriptive mode by speaking directly to the reader.",
      "Deploy the 'X is Y' formulation for definitive reframings \u2014 state equivalences bluntly to crystallize an insight.",
      "Use deliberate callbacks \u2014 return to earlier examples or phrases later in the essay to show how separate threads connect, reinforcing the sense of a unified argument."
    ],
    "do_not": [
      "Do not use ornamental metaphors or literary flourishes \u2014 all figurative language must serve explanatory clarity, not aesthetic decoration.",
      "Do not use exclamatory emphasis or emotional appeals \u2014 let the logic and examples generate the reader's sense of excitement or urgency.",
      "Do not use extended metaphors that run for more than a sentence or two \u2014 keep analogies tight and functional."
    ],
    "evidence": [
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory. This is why history is full of empires.\"",
      "\"What are fields where a few big winners outperform everyone else? Here are some obvious ones: sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.\"",
      "\"Choose work you have a natural aptitude for and a deep interest in. Develop a habit of working on your own projects; it doesn't matter what they are so long as you find them excitingly ambitious.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a bold personal-intellectual confession \u2014 begin by stating something important the author once didn't understand, immediately establishing both the stakes and the author's reflective persona.",
      "Establish the central thesis within the first few paragraphs, then explicitly announce the essay's roadmap ('as far as I can tell they reduce to two fundamental causes') \u2014 the reader should know the structure of the argument early.",
      "Close by circling back to the core theme but elevating it \u2014 the ending should feel like a return to the opening premise but at a higher level of understanding, with the added dimension of practical advice or philosophical reflection.",
      "End the main body with a forward-looking, expansive note \u2014 leave the reader with a sense of possibility rather than closure, pointing toward territory still to be explored.",
      "Use numbered footnotes (bracketed references) for tangential observations, historical context, and qualifications that would interrupt the flow of the main argument \u2014 keep the primary text lean and let footnotes handle the asides.",
      "Avoid headers and visual formatting within the main text \u2014 let the essay flow as continuous prose with section transitions handled by the logic of the argument itself.",
      "Include an acknowledgments line at the very end naming people who read drafts \u2014 this signals the essay as part of a community of intellectual exchange."
    ],
    "do_not": [
      "Do not open with an abstract definition or dictionary-style framing \u2014 begin with a personal observation or realization.",
      "Do not close with a neat summary that restates all major points \u2014 end with a forward-looking thought or a final insight that adds something new.",
      "Do not use section headers to break up the essay \u2014 rely on paragraph transitions and rhetorical questions to signal shifts in topic."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"The territory of superlinear returns is by no means static. Indeed, the most extreme returns come from expanding it.\"",
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
      "Build the default sentence as a single main clause with one or two modifying phrases \u2014 keep the architecture transparent and the grammar invisible so the idea is what lands.",
      "When making a complex point, chain clauses with 'and', 'but', or 'because' rather than nesting subordinate clauses deeply \u2014 the sentence should read like a person thinking aloud in sequence, not constructing a legal brief.",
      "Use periodic sentences sparingly and for emphasis: place the surprising or important element at the very end after a setup of qualifications or conditions, as in 'you need great natural ability and to have practiced a lot and to be trying very hard.'",
      "Vary rhythm by following a longer, multi-clause sentence with a blunt declarative that delivers the payoff \u2014 create a setup-punchline cadence where the short sentence resolves or subverts the longer one.",
      "When listing parallel ideas, use the same grammatical frame for each element and connect them with 'and' or semicolons: 'you have to learn not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong.'"
    ],
    "do_not": [
      "Do NOT write ornate or heavily subordinated sentences with multiple embedded relative clauses \u2014 never make the reader hold three levels of clause nesting in their head.",
      "Do NOT use inverted syntax or unusual word order for stylistic effect \u2014 keep subject-verb-object as the default frame.",
      "Do NOT string together many short sentences in a row without a longer one to provide ballast \u2014 the rhythm should alternate, not staccato indefinitely."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"You need both.\"",
      "\"You can do pretty well with just two, but to do the best work you need all three: you need great natural ability and to have practiced a lot and to be trying very hard.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as someone thinking through a problem in real time \u2014 use 'I' to share personal experience and 'you' to address the reader directly, toggling between the two to create a sense of shared inquiry.",
      "Maintain a tone that is earnest, conversational, and intellectually confident but never condescending \u2014 speak as an experienced peer sharing hard-won insights, not a professor lecturing.",
      "Signal uncertainty by framing it as open questions or honest admissions ('I wasn't sure of that as a kid', 'I can't be sure I'm getting anywhere') rather than hedging with qualifiers like 'perhaps' or 'arguably' \u2014 when you don't know something, say so plainly.",
      "Use contractions selectively \u2014 employ them in conversational, personal passages to maintain warmth, but drop them in sentences that state key principles or conclusions to add weight.",
      "Express confidence through directness and simplicity rather than through intensifiers or emphatic language \u2014 state claims as plain facts: 'There isn't.' rather than 'There absolutely isn't any way.'"
    ],
    "do_not": [
      "Do NOT adopt an academic or formal register \u2014 avoid distancing language like 'one might argue' or 'it is worth noting that.'",
      "Do NOT use sarcasm, snark, or humor that punches down \u2014 the only humor permitted is gentle, offhand observation ('like a dog circling while it decides exactly where to lie down').",
      "Do NOT hedge excessively or qualify every claim \u2014 when you believe something, state it. Reserve hedges for genuinely uncertain territory."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"Now I know the answer to that question. There isn't.\"",
      "\"I can't be sure I'm getting anywhere when I'm working hard, but I can be sure I'm getting nowhere when I'm not, and it feels awful.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open a line of argument by stating a commonly held or intuitive belief, then complicate it \u2014 show that the obvious framing is incomplete or misleading, then reveal the more nuanced truth.",
      "Build arguments by layering personal experience, famous examples, and direct quotations \u2014 use specific people (Bill Gates, Messi, Wodehouse, Hardy) as evidence, not abstract statistics or studies.",
      "Handle counterarguments by voicing them in the reader's own idiom ('Sounds a bit extreme, you think') and then addressing them directly \u2014 pre-empt objections by stating them conversationally before responding.",
      "Advance the essay through a recursive, exploratory logic: introduce a theme, explore it, then reveal that it contains a sub-problem, explore that, then connect back \u2014 the structure should feel like thinking, not like an outline.",
      "Use analogies and metaphors drawn from everyday, physical experience to make abstract ideas tangible: 'like one of a set of simultaneous equations', 'pursuing beast', 'hard core at the center, surrounded by easier stuff at the edges.'",
      "When introducing a key distinction, name it explicitly and then elaborate each part in turn \u2014 'There are two separate kinds of fakeness' followed by treatment of each kind."
    ],
    "do_not": [
      "Do NOT structure arguments as formal thesis-evidence-conclusion sequences \u2014 avoid the five-paragraph essay shape or any structure that feels pre-planned rather than discovered.",
      "Do NOT cite data, statistics, or research findings as primary evidence \u2014 prefer anecdote, quotation, and personal observation.",
      "Do NOT dismiss counterarguments \u2014 always engage with them honestly, even if briefly, before moving past them."
    ],
    "evidence": [
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme. Not one day off in ten years?\"",
      "\"There are two separate kinds of fakeness you need to learn to discount in order to understand what real work is.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation stated plainly \u2014 lead with the point, then unpack it with examples, qualifications, or elaboration.",
      "Close paragraphs by either landing on a crisp concluding statement that crystallizes the point, or by pivoting to introduce the next question the reader should be thinking about.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the last sentence of one paragraph raise a question or tension that the next paragraph answers. Use 'And', 'But', 'So' at paragraph openings to create casual forward momentum.",
      "When a standalone sentence forms its own paragraph, use it as a dramatic resolution or a turning point \u2014 it should land like a verdict after a buildup.",
      "Sequence ideas within a paragraph from general to specific: state the principle, then illustrate with a concrete case, then draw out the implication."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'Furthermore', 'Moreover', 'In addition', 'Consequently' \u2014 transitions should feel organic and conversational.",
      "Do NOT write paragraphs that meander through multiple unrelated ideas \u2014 each paragraph should orbit a single point or move through a single logical step.",
      "Do NOT end paragraphs with trailing qualifications that undermine the point just made \u2014 if you need to qualify, do it mid-paragraph, then return to strength."
    ],
    "evidence": [
      "\"There isn't.\" (standalone paragraph resolving the preceding question)",
      "\"Perhaps something changes at adolescence. That would make sense.\" (two-sentence paragraph that closes a thread with gentle understatement)",
      "\"And the rule is the same: working hard means aiming toward the center \u2014 toward the most ambitious problems.\" (paragraph-final sentence crystallizing the principle)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions sparingly and only to voice the reader's likely objection or to mark a genuine turning point in the argument \u2014 'Was there, perhaps, some way to evade hard work through sheer brilliance?'",
      "Employ spatial and physical metaphors to make abstract concepts graspable \u2014 describe intellectual work in terms of centers and edges, shapes, pushing and pulling, distance and proximity.",
      "Use direct address imperatives occasionally to make advice land with force: 'get that idea out of your head', 'Cultivate a sensitivity to the quality of the work you're doing.'",
      "Deploy extended quotations from others (not paraphrases) when their words are more vivid or authoritative than yours would be \u2014 let Hardy, Gates, and Wodehouse speak in their own voices.",
      "Use parenthetical asides to add a quick clarification or wry observation without breaking the sentence's flow: '(which is a form of lying to yourself).'",
      "Repeat key phrases across paragraphs to create thematic throughlines \u2014 'the shape of real work', 'working hard', 'the center' \u2014 reuse the exact phrase rather than finding synonyms."
    ],
    "do_not": [
      "Do NOT use exclamation marks or exclamatory constructions \u2014 maintain an even, measured energy throughout.",
      "Do NOT use literary or poetic devices like alliteration, assonance, or elaborate extended metaphors \u2014 keep figurative language functional and brief.",
      "Do NOT use lists with bullet points or numbered items in the body of the essay \u2014 when listing, embed the items in prose with parallel structure."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance?\"",
      "\"Many problems have a hard core at the center, surrounded by easier stuff at the edges.\"",
      "\"not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a deceptively simple, almost throwaway observation that the reader would nod along with \u2014 then immediately complicate it. The first sentence should make the reader think they know where you're going, so the essay can surprise them.",
      "Establish context through personal reflection rather than scene-setting or data \u2014 'I wasn't sure of that as a kid' grounds the essay in lived experience from the first paragraph.",
      "Close by zooming out to the highest level of abstraction the essay can support \u2014 synthesize the thread into a single encompassing principle, stated with quiet confidence rather than grandiosity.",
      "End the final paragraph with a sentence that feels both conclusive and generative \u2014 it should resolve the essay's central question while suggesting the answer is a living, ongoing process rather than a fixed rule.",
      "Use endnotes/footnotes for tangential but interesting asides, qualifications, and secondary examples \u2014 keep the main text's argument clean and move digressions to notes marked with bracketed numbers.",
      "Use em dashes for inline elaboration or redirection, and colons to set up a key phrase or list that completes the thought: 'you need all three: you need great natural ability and to have practiced a lot and to be trying very hard.'"
    ],
    "do_not": [
      "Do NOT open with a grand declaration, a famous quote, or a dictionary definition \u2014 begin with something that sounds almost too obvious to be worth saying.",
      "Do NOT close with a call to action, a pithy one-liner, or a motivational exhortation \u2014 end with honest synthesis, not rallying cries.",
      "Do NOT use headers, subheadings, bold text, or any structural formatting in the body \u2014 the essay should flow as continuous prose with only paragraph breaks and footnote markers."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\" (opening: deceptively simple, invites complication)",
      "\"But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\" (closing: synthesizing principle stated with quiet confidence)",
      "\"[1] Bill Gates, for example...\" (footnote-style aside moved out of main flow)"
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
      "Build sentences around a core declarative claim, then extend with one or two subordinate clauses that qualify, exemplify, or redirect \u2014 the default shape is 'assertion + qualification' or 'assertion + because-clause'.",
      "Chain ideas within sentences using coordinating conjunctions (and, but, or) rather than semicolons or colons \u2014 let the sentence grow horizontally through addition rather than stacking through punctuation.",
      "Use compound-complex sentences as the workhorse: a main clause joined to another by 'but' or 'and', with at least one subordinate clause (often a 'because', 'when', 'if', or 'that' clause) embedded inside.",
      "Deploy a notably short sentence immediately after a longer, more complex one to land a point with finality \u2014 the short sentence functions as a punchline or verdict after the setup.",
      "Open sentences with discourse markers and transitional words that create a conversational, thinking-aloud rhythm: 'Actually', 'But', 'And', 'So', 'Plus', 'Or'.",
      "Use parallel structure when presenting two or more options, reasons, or contrasts \u2014 mirror the grammatical shape of each element so the reader tracks the comparison effortlessly."
    ],
    "do_not": [
      "Do NOT write ornate, heavily nested sentences with multiple layers of embedding \u2014 keep subordination to one or two levels deep at most.",
      "Do NOT use semicolons as a primary clause-joining device; prefer coordinating conjunctions or period breaks.",
      "Do NOT front-load sentences with long participial or prepositional phrases before the main clause \u2014 get to the subject and verb quickly."
    ],
    "evidence": [
      "\"A lot of would-be founders believe that startups either take off or don't.\"",
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"He didn't stay long, but he wouldn't have returned at all if he'd realized Microsoft was going to be even a fraction of the size it turned out to be.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a seasoned mentor speaking to smart but inexperienced people \u2014 authoritative but warm, like someone who has seen this mistake many times and explains it patiently rather than condescendingly.",
      "Use first-person plural ('we') when speaking from institutional experience (e.g. 'we give at Y Combinator', 'we encourage every startup') and first-person singular ('I') for personal anecdotes and observations \u2014 this distinguishes collective wisdom from individual experience.",
      "Address the reader directly with 'you' to make advice feel personal and actionable rather than abstract \u2014 frame the reader as a founder who is about to make these decisions.",
      "Signal confidence through direct assertion without hedging qualifiers \u2014 state claims as facts, then support them with stories. When uncertainty exists, use 'usually', 'often', or 'probably' rather than weak hedges like 'it seems' or 'one might argue'.",
      "Maintain an earnest, serious tone even when the subject is mundane \u2014 treat the details of recruiting users or assembling hardware with the same gravity as strategic vision, because that IS the point.",
      "Use contractions freely in the flow of argument to maintain conversational warmth, but drop them occasionally for emphasis or when making a more formal pronouncement.",
      "Deploy dry, understated humor through incongruity \u2014 juxtapose the grand (dominating a market) with the banal (selling luggage and pens, sourcing good screws) without signaling that it's a joke."
    ],
    "do_not": [
      "Do NOT adopt a detached, academic, or impersonal register \u2014 never write as if observing startups from a distance; write as someone in the room.",
      "Do NOT use false modesty or excessive hedging \u2014 if you have a strong opinion backed by experience, state it plainly.",
      "Do NOT be preachy or lecture from above \u2014 maintain the feel of sharing hard-won insight with peers, not dispensing commandments."
    ],
    "evidence": [
      "\"We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"Who knew?\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly \u2014 the central claim should arrive in the first sentence or two, not be built up to gradually.",
      "Support every abstract principle with a concrete, named startup story \u2014 the pattern is: state the rule, then immediately tell a story that embodies it (Stripe, Airbnb, Facebook, Pebble, Wufoo).",
      "Anticipate the reader's objections and address them inline \u2014 voice the skeptic's thought ('This can't be how the big, famous startups got started, they think') and then refute it immediately.",
      "Build argument through accumulation of examples rather than deductive logic chains \u2014 stack multiple instances of the same pattern from different companies to make the case feel overwhelming and inevitable.",
      "Use analogies and metaphors to make abstract dynamics visceral: cranks on car engines, contained fires, newborn babies, projectiles vs. powered aircraft, boulders vs. train cars.",
      "Structure the overall argument as a series of named sections, each exploring a different facet or application of the central thesis \u2014 the essay radiates outward from one idea rather than progressing linearly to a conclusion.",
      "Hedge with 'usually', 'almost all', 'nearly all' rather than absolute claims \u2014 acknowledge exceptions exist without letting them undermine the core advice."
    ],
    "do_not": [
      "Do NOT build arguments through formal logical structure (premise-premise-conclusion) \u2014 use narrative and example-driven persuasion instead.",
      "Do NOT cite academic research, statistics, or formal studies \u2014 evidence comes from personal experience, named founders, and specific company stories.",
      "Do NOT present both sides of an argument as equally valid \u2014 take a clear position and use counterarguments only to strengthen your own case by demolishing them."
    ],
    "evidence": [
      "\"There are two reasons founders resist going out and recruiting users individually.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"I occasionally meet founders who seem to believe startups are projectiles rather than powered aircraft, and that they'll make it big if and only if they're launched with sufficient initial velocity.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or topic as a direct assertion \u2014 lead with the point, then support it in subsequent sentences.",
      "Use a paragraph's internal sequence to move from claim \u2192 example \u2192 implication: state what's true, show it with a story, then draw out the lesson or redirect to the next idea.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 the end of one paragraph sets up the beginning of the next through shared concepts or narrative momentum.",
      "Use standalone single-sentence paragraphs for emphasis, to deliver a verdict on the preceding discussion, or to pivot to a new section of the argument.",
      "Place section headers (single bold words like 'Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big') as structural landmarks that chunk the essay into digestible thematic units.",
      "Allow paragraphs to end on a forward-looking note or a surprising reframe that propels the reader into the next paragraph \u2014 avoid neat summary endings within body paragraphs."
    ],
    "do_not": [
      "Do NOT begin paragraphs with throat-clearing ('It is important to note that...', 'In this section we will discuss...') \u2014 enter the paragraph already in motion.",
      "Do NOT use explicit transition phrases like 'Furthermore', 'Moreover', 'In addition', 'On the other hand' \u2014 let the logical relationship between paragraphs be apparent from content.",
      "Do NOT write paragraphs that circle back to restate their opening claim \u2014 move forward through the paragraph, don't loop."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, concrete metaphors drawn from physical and everyday experience to make abstract business concepts tangible \u2014 car engine cranks, contained fires, newborn babies, boulders and train cars, projectiles vs. powered aircraft.",
      "Deploy direct address and imperatives to make the reader feel personally involved: 'See if you can make it happen', 'Think of some successful startups', 'go ahead and do that'.",
      "Use rhetorical questions to voice the reader's doubts and then immediately answer them \u2014 the question-then-answer pattern drives the argument forward conversationally.",
      "Employ deliberate repetition of key phrases and concepts across the essay to create thematic unity: 'insanely great', 'things that don't scale', 'unscalable', 'recruit users manually'.",
      "Use lists of reasons or examples embedded in prose (not bullet points) \u2014 'Three reasons, I think. One is... Another reason... But perhaps the biggest thing...' \u2014 to give structure without breaking the essay's conversational flow.",
      "Create contrast through antithesis and juxtaposition: the grand vs. the mundane, what founders think vs. reality, big companies vs. small startups.",
      "Quote specific people by name and use their exact words or coined terms ('Collison installation', 'insanely great') to add authority and texture."
    ],
    "do_not": [
      "Do NOT use bullet points, numbered lists, or other formatted list structures within the body of the argument \u2014 embed enumerations in flowing prose.",
      "Do NOT use literary or poetic devices (alliteration, assonance, extended allegory) \u2014 keep figurative language functional and grounded.",
      "Do NOT over-explain metaphors \u2014 introduce them, let them land, and move on."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters.\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with the central thesis stated as a piece of advice, plainly and without preamble \u2014 the first sentence should be the takeaway.",
      "Immediately after the thesis, introduce the common misconception it contradicts \u2014 frame the essay as correcting a widespread error.",
      "Structure the essay into labeled sections (using bold single-word or short-phrase headers) that each explore a different application or angle of the central thesis \u2014 this creates a modular, browsable architecture.",
      "Close the essay by reframing the thesis at a higher level of abstraction \u2014 the ending should elevate the practical advice into a broader principle (e.g. from 'do unscalable things' to 'think of startup ideas as vectors').",
      "End on a forward-looking, generative note rather than a summary \u2014 leave the reader with a new way of thinking, not a recap of what was said.",
      "Use numbered footnotes (bracketed numbers in text, expanded notes at the end) to handle digressions, attributions, caveats, and secondary arguments without cluttering the main flow.",
      "Use em dashes sparingly for parenthetical asides within sentences. Use parentheses for brief clarifications or alternative phrasings.",
      "Include a 'Thanks to...' acknowledgment at the very end, listing people who read drafts \u2014 this is a genre convention of the personal essay published on a blog."
    ],
    "do_not": [
      "Do NOT open with a question, anecdote, or scene-setting \u2014 open with the thesis.",
      "Do NOT close with a tidy summary that restates all the points made \u2014 end by pushing the idea further or reframing it.",
      "Do NOT use formal academic essay structure (introduction-body-conclusion with signposting) \u2014 use the modular, section-based structure with organic flow between sections."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.\""
    ]
  }
}
```

### sample-5.txt (4476 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 4476,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim or observation, then let the next sentence extend, qualify, or pivot from it \u2014 avoid packing multiple ideas into one sentence.",
      "Chain short declarative sentences in sequence to build momentum toward a punchline or thesis statement, then release tension with a slightly longer sentence that elaborates.",
      "Use conditional and hypothetical constructions ('If you could...', 'Suppose...', 'What if...') to set up thought experiments, placing the condition in the opening clause and the payoff in the main clause.",
      "Default to subject-verb-object order; depart from it only for emphasis, such as fronting an adverbial phrase ('In every period, people believed things...') or inverting for rhetorical effect.",
      "Use sentence fragments deliberately as standalone paragraphs to deliver a punchy conclusion or intensify a preceding argument ('But they're much more dangerous.').",
      "When building longer sentences, prefer coordinating conjunctions ('and', 'but', 'or') and relative clauses over deeply nested subordination \u2014 keep the syntax shallow and readable."
    ],
    "do_not": [
      "Do not write ornate, multi-layered sentences with nested subordinate clauses \u2014 keep clause depth to two levels at most.",
      "Do not sustain a uniform sentence length; vary between terse standalone statements and moderately extended explanatory sentences.",
      "Do not use participial phrases or absolute constructions as sentence openers \u2014 prefer finite verbs and direct subjects."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"If you could travel back in a time machine, one thing would be true no matter where you went: you'd have to watch what you said.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when stating personal positions and motivations, but shift to second person ('you') when drawing the reader into thought experiments or hypothetical scenarios \u2014 make the reader a participant, not a spectator.",
      "Adopt the tone of a smart friend thinking out loud: authoritative enough to advance bold claims, but conversational enough to use contractions, asides, and self-corrections.",
      "Signal confidence by stating claims plainly and directly ('I suspect the biggest source of moral taboos will turn out to be power struggles'), not by hedging with qualifiers \u2014 but when genuinely uncertain, use 'I suspect', 'I think', or 'it seems' rather than academic hedging vocabulary.",
      "Use 'we' to invoke shared humanity and collective blind spots ('We often like to think...'), creating solidarity with the reader rather than lecturing from above.",
      "Maintain an earnest, intellectually curious stance \u2014 the writer genuinely wants to figure things out, not perform cleverness or signal sophistication.",
      "Deploy dry humor and understatement rather than overt jokes \u2014 let the absurdity of the situation speak for itself ('Argue with idiots, and you become an idiot.').",
      "Use contractions in conversational passages but drop them occasionally when making a more formal or weighty assertion, creating subtle tonal shifts."
    ],
    "do_not": [
      "Do not adopt a detached academic register \u2014 never write as if presenting findings to a committee.",
      "Do not be preachy or moralistic; present heretical thinking as intellectually exciting, not as a righteous duty.",
      "Do not use formal hedging language like 'it could be argued that' or 'one might suggest' \u2014 prefer the direct 'I think' or 'I suspect'."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"Argue with idiots, and you become an idiot.\"",
      "\"If everything you believe is something you're supposed to believe, could that possibly be a coincidence? Odds are it isn't. Odds are you just think what you're told.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis early and boldly, then spend the essay developing practical methods for applying it \u2014 the structure is 'here's the problem, now here are five ways to attack it.'",
      "Build arguments through a series of concrete methods or tests, each introduced with a subheading or clear transition, creating an inventory of approaches rather than a single linear proof.",
      "Ground abstract claims with vivid historical examples (Galileo, Copernicus, the Reformation, Charles VIII's toes) \u2014 use history as the primary evidence base, not statistics or citations.",
      "Use thought experiments and hypotheticals extensively ('Imagine a kind of latter-day Conrad character...', 'Suppose in the future there is a movement to ban the color yellow') to make abstract arguments tangible and testable.",
      "Introduce a claim, then immediately test it against an objection or edge case \u2014 create a dialectical rhythm of assertion and self-interrogation ('This won't get us all the answers, though. What if no one happens to have gotten in trouble for a particular idea yet?').",
      "Use analogies to bridge from the familiar to the controversial: compare moral fashions to clothing fashions, taboo ideas to mapmaker errors, heretical thinking to stretching before a run.",
      "Employ the Socratic method: pose questions that lead the reader to the intended conclusion rather than simply asserting it ('Is our time any different?').",
      "Handle counterarguments by acknowledging them briefly and honestly, then redirecting: 'I'm not arguing for or against this idea here' or 'I'm not saying that struggles are never about ideas, just that...'"
    ],
    "do_not": [
      "Do not present arguments as settled or beyond dispute \u2014 maintain an exploratory, inquiry-driven posture throughout.",
      "Do not rely on statistical evidence, formal citations, or appeals to authority as primary support \u2014 prefer historical anecdotes, thought experiments, and logical reasoning.",
      "Do not dismiss counterarguments; acknowledge their force briefly, then show why the main argument still holds."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"To launch a taboo, a group has to be poised halfway between weakness and power.\"",
      "\"Another way to counterattack is with metaphor. Arthur Miller undermined the House Un-American Activities Committee by writing a play, 'The Crucible,' about the Salem witch trials.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently as thesis statements, punchlines, or rhetorical pivots \u2014 let a strong declarative claim stand alone for maximum impact.",
      "When a paragraph contains multiple sentences, lead with the key claim or observation, then follow with elaboration, example, or qualification \u2014 classic deductive structure.",
      "Connect paragraphs through logical continuation rather than explicit transition words: the last sentence of one paragraph sets up the question or tension that the next paragraph addresses.",
      "Use subheadings to signal shifts between major argument sections, creating an essay structure that reads like a field guide or manual ('The Conformist Test', 'Trouble', 'Heresy', 'Mechanism').",
      "Alternate between paragraphs that advance the argument and paragraphs that illustrate it with examples \u2014 create a rhythm of claim-then-evidence.",
      "When presenting a list of methods or approaches, give each its own section with a clear opening that names the method, rather than burying multiple approaches in a single long paragraph."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore', 'Moreover', 'In addition') \u2014 let the logical flow carry the reader forward.",
      "Do not write long, dense paragraphs that develop multiple sub-points; split ideas into separate paragraphs even if they're closely related.",
      "Do not end paragraphs with summaries of what was just said \u2014 end with the strongest or most provocative statement."
    ],
    "evidence": [
      "\"But they're much more dangerous.\" (standalone paragraph following two other short paragraphs, building a three-beat crescendo)",
      "\"The age of consent fluctuates like hemlines.\" (single-sentence paragraph used as a devastating illustration of the preceding argument)",
      "\"Scientists go looking for trouble.\" (standalone paragraph that crystallizes a multi-paragraph discussion into a single punchy line)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map unfamiliar territory onto familiar experience: moral taboos as fashion, heretical thoughts as rocks to look under, controversial thinking as stretching before a run.",
      "Deploy rhetorical questions to guide the reader's thinking and create a sense of collaborative inquiry \u2014 pose the question the reader should be asking, then answer it.",
      "Use parallelism to sharpen contrasts: 'Fashion is mistaken for good design; moral fashion is mistaken for good' \u2014 set up symmetrical structures where the parallel highlights the escalation.",
      "Employ concrete, vivid examples drawn from history, everyday life, and pop culture (bell-bottom jeans, Santa Claus, Fight Club, the Cadillac) \u2014 prefer specific and surprising illustrations over generic ones.",
      "Use direct address and imperatives to engage the reader as an active participant: 'Take a label', 'Ask why', 'Look for prigs.'",
      "Repeat key phrases and concepts across the essay to create thematic coherence \u2014 return to the time machine metaphor, the Galileo example, and the fashion analogy multiple times.",
      "Use parenthetical asides to add nuance, humor, or self-aware qualifications without disrupting the main argument's flow: '(The best way to do that is to visit them.)'",
      "Employ aphoristic formulations \u2014 compress complex ideas into memorable one-liners that could stand alone as quotations."
    ],
    "do_not": [
      "Do not use flowery or literary metaphors \u2014 keep figurative language grounded in everyday objects and common experiences.",
      "Do not overuse any single device; alternate between questions, analogies, examples, and direct claims to maintain variety.",
      "Do not use elaborate extended metaphors that require setup \u2014 analogies should click instantly."
    ],
    "evidence": [
      "\"It's like stretching. When you stretch before running, you put your body into positions much more extreme than any it will assume during the run.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-statement that frames the essay's purpose and scope, then immediately engage the reader with a relatable, concrete question or observation \u2014 move from thesis to hook within the first two paragraphs.",
      "Begin with a universally relatable experience (embarrassing old photos) and use it as an analogy to introduce the real, more provocative subject \u2014 the opening serves as a Trojan horse for the essay's controversial content.",
      "Structure the essay as an inventory of methods or approaches (five ways to find what you can't say), each with its own subheading, creating a practical field-guide feel within a philosophical essay.",
      "Use subheadings drawn from evocative phrases or concepts ('Pensieri Stretti', 'Viso Sciolto?', 'The Conformist Test') rather than dry descriptive labels \u2014 subheadings should intrigue.",
      "Close sections by pivoting to the next question or method rather than summarizing \u2014 maintain forward momentum throughout.",
      "Use footnote references (bracketed numbers) to offload tangential evidence, qualifications, and caveats from the main text, keeping the argument's flow clean.",
      "Format the essay with generous whitespace: frequent paragraph breaks, standalone sentences, and subheadings create an airy, approachable visual rhythm despite the intellectual density of the content."
    ],
    "do_not": [
      "Do not open with an abstract thesis statement \u2014 always ground the opening in something concrete and relatable before escalating to the intellectual argument.",
      "Do not close with a neat summary or call to action \u2014 end with an observation that opens further thought rather than closing it down.",
      "Do not use numbered lists or bullet points \u2014 maintain the conversational essay form even when presenting a series of methods or approaches."
    ],
    "evidence": [
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"But I want to do more than just shock everyone with the heresy du jour. I want to find general recipes for discovering what you can't say, in any era.\"",
      "\"The first rule of Fight Club is, you do not talk about Fight Club.\""
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual curiosity and inductive reasoning",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause using 'but,' 'and,' 'because,' or a relative pronoun \u2014 keep subordination to one level deep.",
      "Default to medium-length declarative sentences as the workhorse; let each sentence carry one logical move (claim, example, or consequence) and build momentum through sentence-to-sentence progression.",
      "Chain ideas using coordinating conjunctions ('and', 'but', 'because', 'or') rather than semicolons, colons, or deeply nested subordination \u2014 the syntax should feel like a person thinking aloud in sequence.",
      "Use parallel structure when presenting pairs, contrasts, or lists of related ideas \u2014 mirror the grammatical frame for each element so the reader tracks the comparison effortlessly.",
      "Place conditional or concessive clauses ('if', 'when', 'though') at the front of sentences to set up the main assertion as the payoff.",
      "Follow a longer, multi-clause sentence with a shorter declarative that delivers the verdict or punchline \u2014 create a setup-resolution cadence.",
      "Open sentences occasionally with casual discourse markers ('But', 'And', 'So', 'Actually', 'Plus') to maintain a thinking-aloud rhythm."
    ],
    "do_not": [
      "Do NOT write sentences with three or more levels of subordination \u2014 if you need that much nesting, break it into separate sentences.",
      "Do NOT use semicolons as a primary connective device \u2014 they should be near-absent.",
      "Do NOT front-load sentences with long participial phrases, adverbial chains, or prepositional stacks before the main clause \u2014 get to the subject and verb quickly.",
      "Do NOT use dashes or ellipses for dramatic pauses \u2014 rhythm comes from sentence breaks, not internal punctuation tricks.",
      "Do NOT use inverted syntax or unusual word order for stylistic effect \u2014 keep subject-verb-object as the default frame."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') to share personal observation and experience, and second person ('you') to address the reader as a thinking companion \u2014 shift between them naturally within the same paragraph.",
      "Adopt the stance of someone thinking out loud alongside the reader, not lecturing from above \u2014 present ideas as discoveries being worked out in real time, even when confident.",
      "Maintain a tone that is intellectually confident but personally humble \u2014 assert ideas boldly while freely admitting uncertainty or surprise ('I think so,' 'as far as I can tell,' 'I suspect').",
      "Use contractions selectively \u2014 employ them in conversational passages for warmth, but drop them when stating key principles or conclusions to add weight.",
      "Treat the reader as intelligent and ambitious \u2014 never condescend, but also don't assume specialized knowledge.",
      "When making a strong claim, state it plainly and directly without hedging; reserve hedges for genuinely uncertain territory.",
      "Deploy dry, understated humor through incongruity or offhand observation \u2014 never signal that something is a joke.",
      "Use 'we' occasionally to invoke shared experience or collective blind spots, creating solidarity with the reader."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal academic voice \u2014 avoid distancing language like 'one might argue' or 'it is worth noting that.'",
      "Do NOT use false modesty or excessive hedging that undermines every claim \u2014 hedge strategically, not reflexively.",
      "Do NOT use humor as a primary device or go for laughs \u2014 the tone is earnest and curious, with occasional dry wit that emerges from the ideas themselves.",
      "Do NOT be preachy or moralistic \u2014 maintain the feel of sharing hard-won insight with peers, not dispensing commandments.",
      "Do NOT use imperative commands aggressively; when giving advice, frame it as 'you want to' or 'you can' rather than barking orders."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis early and boldly \u2014 state the big idea in the opening paragraphs, then spend the essay unpacking, proving, and extending it.",
      "Build arguments inductively: establish a pattern across multiple concrete examples before naming the general principle, letting the reader see the generalization forming.",
      "After stating a principle, immediately test its boundaries \u2014 introduce the exception, counterexample, or complication using phrases like 'But this pattern isn't universal' or 'One difficulty here, though.'",
      "Advance arguments through a dialectical structure: claim \u2192 complication \u2192 refinement \u2192 new claim \u2014 each section should feel like the essay is discovering its own thesis progressively.",
      "Support every abstract principle with concrete, named examples drawn from everyday life, startups, intellectual history, or famous people \u2014 never stay abstract for more than a paragraph without grounding the idea.",
      "Use analogies that map abstract concepts onto physical or sensory experience to make them visceral and memorable.",
      "Anticipate the reader's objections and voice them conversationally ('Sounds a bit extreme, you think') before addressing them directly \u2014 pre-empt rather than ignore counterarguments.",
      "When introducing a new conceptual framework, decompose it into named parts, then explore each one in turn, then show how they interact.",
      "Move between abstract principle and concrete illustration in a steady rhythm \u2014 the pattern is: state the rule, then immediately tell a story or give an example that embodies it."
    ],
    "do_not": [
      "Do NOT present ideas as settled dogma \u2014 maintain a sense of ongoing inquiry even when making strong claims.",
      "Do NOT rely on citations, statistics, or appeals to authority as primary evidence \u2014 the authority comes from the quality of reasoning and the aptness of examples.",
      "Do NOT skip the 'but' \u2014 every major claim should be followed by its complication or limitation before moving on.",
      "Do NOT use formal logical connectives like 'therefore,' 'furthermore,' 'moreover' \u2014 the logical flow should feel conversational, not syllogistic.",
      "Do NOT structure arguments as formal thesis-evidence-conclusion sequences \u2014 avoid any structure that feels pre-planned rather than discovered."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim or observation that does real intellectual work \u2014 the topic sentence IS the first sentence, stated without preamble.",
      "Follow the opening claim with sentences that elaborate, qualify, or provide evidence, then move on \u2014 don't belabor a point once it's made.",
      "Sequence ideas within a paragraph as: claim \u2192 example or elaboration \u2192 implication or consequence \u2014 move from what you can see to what it means.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 the last sentence of one paragraph should create a natural opening for the next, often through complication or question.",
      "When shifting to a new subtopic, use a question or a brief bridging sentence that names the shift explicitly.",
      "Place the most important or surprising statement at either the very beginning or the very end of a paragraph \u2014 never bury the key insight in the middle.",
      "Allow paragraphs to end on a forward-looking note or surprising reframe that propels the reader into the next paragraph."
    ],
    "do_not": [
      "Do NOT start paragraphs with transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' 'Additionally,' 'Consequently' \u2014 these are banned.",
      "Do NOT write paragraphs that repeat the same point in multiple ways for emphasis \u2014 state it once clearly and move on.",
      "Do NOT end paragraphs with summary sentences that restate what was just said \u2014 end with the most interesting or forward-looking thought.",
      "Do NOT front-load paragraphs with throat-clearing or context-setting that delays the point.",
      "Do NOT write paragraphs that meander through multiple unrelated ideas \u2014 each paragraph should orbit a single point or move through a single logical step."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as a primary rhetorical tool \u2014 illuminate abstract principles by showing they operate identically across biology, military history, startups, science, and everyday life.",
      "Employ rhetorical questions as genuine invitations to think, placed at transition points where the essay is about to explore a new angle \u2014 use them as structural pivots, not flourishes.",
      "Build parallel structures when presenting contrasts or classifications \u2014 mirror grammatical form to let the reader focus on differences in content.",
      "Use direct address ('you,' 'ask yourself,' 'imagine') to pull the reader into active participation in the argument.",
      "Repeat key terms and phrases deliberately across the essay without synonym variation \u2014 the repeated term becomes a conceptual anchor that accumulates meaning.",
      "Employ negation as a definitional tool: define what something is NOT before or alongside defining what it IS.",
      "Use parenthetical asides for quick clarifications or wry observations without breaking the sentence's flow.",
      "Deploy aphoristic formulations \u2014 compress complex ideas into memorable one-liners that could stand alone as quotations.",
      "Quote specific people by name and use their exact words when those words are more vivid or authoritative than yours would be."
    ],
    "do_not": [
      "Do NOT use metaphors that call attention to themselves as literary devices \u2014 analogies should feel like clarifications, not decorations.",
      "Do NOT use anaphora or other overt rhetorical repetition patterns \u2014 repetition should feel natural and functional, not oratorical.",
      "Do NOT use exclamation marks or typographic emphasis for emotional effect \u2014 let the ideas carry their own weight.",
      "Do NOT deploy pop culture references or trendy allusions \u2014 examples should be timeless or drawn from intellectual history and startup culture.",
      "Do NOT over-explain metaphors \u2014 introduce them, let them land, and move on."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a bold, slightly counterintuitive observation or personal-intellectual confession \u2014 not an abstract thesis, but an entry point that makes the reader think they know where you're going before the complications arrive.",
      "Build the opening by stacking concrete examples of the same pattern before naming the pattern explicitly \u2014 let the reader feel the generalization forming.",
      "Close not with a neat summary but with an open, forward-looking thought that suggests further exploration \u2014 leave the reader with a direction, not a destination.",
      "End on a sentence that feels both conclusive and generative \u2014 it should resolve the essay's central question while suggesting the answer is ongoing.",
      "Format the essay as continuous prose with minimal formatting \u2014 no bullet lists, no bold text in the body.",
      "Use numbered footnotes or endnotes for tangential ideas, qualifications, and secondary examples that would interrupt the main argument's flow.",
      "Use parenthetical asides occasionally and lightly \u2014 they should feel like quick whispered additions, not extended digressions.",
      "Include a 'Thanks to...' acknowledgment at the very end naming people who read drafts."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation, a dramatic anecdote, or a dictionary definition \u2014 open with a plain declarative observation or personal realization.",
      "Do NOT close with a call to action, a pithy one-liner designed for social media, or a neat bow that resolves all tensions.",
      "Do NOT use headers or subheaders in the main body unless the essay's structure explicitly demands a modular, field-guide format.",
      "Do NOT front-load the essay with definitions or throat-clearing context \u2014 dive into the subject immediately through examples.",
      "Do NOT close with a tidy summary that restates all major points \u2014 end by pushing the idea further or reframing it."
    ]
  },
  "signature_phrases": {
    "use": [
      "as far as I can tell",
      "I think so",
      "it seems to me",
      "I suspect",
      "I would think",
      "in fact",
      "actually",
      "the way to",
      "the trick is",
      "you have to",
      "you want to",
      "there's a",
      "one of the most",
      "the most important",
      "it turns out",
      "the problem is",
      "but",
      "and yet",
      "who knew?",
      "so what",
      "not just X but Y",
      "which means",
      "of course",
      "in practice",
      "the kind of",
      "what kind of"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "consequently",
      "it is worth noting that",
      "one might argue",
      "it could be argued",
      "in conclusion",
      "to summarize",
      "needless to say",
      "in today's world",
      "at the end of the day",
      "it goes without saying",
      "paradigm",
      "synergy",
      "leverage (as verb)",
      "utilize",
      "facilitate",
      "impactful",
      "stakeholder",
      "deep dive",
      "unpack (metaphorical)",
      "robust",
      "holistic",
      "align (business jargon)",
      "circle back",
      "actionable",
      "key takeaway"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'additionally,' and 'consequently' with 'but,' 'and,' 'so,' or simply start a new sentence",
    "Convert any sentence with three or more levels of subordination into two or three separate sentences joined by coordinating conjunctions",
    "Replace 'one might argue' or 'it could be argued' with 'I think' or 'I suspect'",
    "Remove all semicolons and replace with periods or coordinating conjunctions",
    "Convert passive constructions to active where possible \u2014 'X was caused by Y' becomes 'Y caused X'",
    "Replace abstract claims that lack examples with a concrete illustration from startups, history, science, or everyday life",
    "Remove any sentence that merely restates what the previous sentence already said",
    "Convert bullet-point lists into flowing prose with parallel structure",
    "Replace formal hedges ('it is perhaps the case that') with direct hedges ('I think' or 'probably')",
    "Cut throat-clearing openings from paragraphs \u2014 if the first sentence doesn't make a claim, delete it and start with the second",
    "Replace any metaphor that requires explanation with one that clicks instantly",
    "Remove exclamation marks entirely"
  ]
}
```