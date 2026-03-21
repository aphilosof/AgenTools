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
      "Build sentences around a single clean assertion, then extend with one qualifying or illustrative clause \u2014 rarely stack more than two dependent clauses.",
      "Default to declarative subject-verb-object structures; use the plainness of the syntax to let the idea carry the weight rather than the sentence architecture.",
      "Vary rhythm by alternating between sentences that develop an idea across multiple clauses and sentences that deliver a standalone punch \u2014 use the short sentence to land a point after a longer setup.",
      "Chain ideas across sentences using pronoun reference ('It's not enough...', 'You have to...', 'But...') rather than embedding everything into one complex sentence \u2014 let each sentence do one job.",
      "Use coordinating conjunctions (especially 'but', 'and') at the start of sentences to create a conversational, thinking-aloud cadence that links ideas without heavy subordination.",
      "When building compound sentences, prefer comma-plus-conjunction over semicolons; keep the jointure casual and transparent."
    ],
    "do_not": [
      "Do NOT write ornate, multi-layered sentences with nested subordinate clauses \u2014 avoid academic sentence architecture.",
      "Do NOT use periodic sentences where the main point is delayed until the end through a series of dependent clauses.",
      "Do NOT maintain a monotonous rhythm of same-length sentences \u2014 always follow a developed thought with something clipped, or vice versa."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\"",
      "\"You don't want to start a startup to do something that everyone agrees is a good idea, or there will already be other companies doing it.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a direct, collegial tone \u2014 address the reader as 'you' and refer to yourself as 'I' freely, as though having a thoughtful conversation between equals.",
      "Project quiet confidence: state claims as plain assertions rather than hedging with qualifiers, but signal genuine uncertainty with phrases like 'I think so', 'it seems to me', 'I would think so' \u2014 hedge only when you genuinely aren't sure.",
      "Maintain a warm but intellectually serious register \u2014 never talk down to the reader, but also never puff up the prose with formal diction or jargon.",
      "Use personal experience and self-reference ('In my experience...', 'I know mine does') to ground abstract claims, creating intimacy without oversharing.",
      "Deploy dry, understated humor through unexpected analogies and wry asides rather than overt jokes \u2014 let the reader discover the wit.",
      "Use contractions sparingly and naturally \u2014 they should appear where spoken English would use them, contributing to conversational flow without making the prose sloppy."
    ],
    "do_not": [
      "Do NOT adopt an academic, detached, or impersonal voice \u2014 never write as if producing a paper for peer review.",
      "Do NOT use false modesty or excessive hedging \u2014 avoid cluttering sentences with 'perhaps', 'arguably', 'it could be said that' unless genuine uncertainty is the point.",
      "Do NOT be preachy or moralistic \u2014 present observations and let readers draw their own conclusions rather than telling them what they should believe."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"Can you increase your fastidiousness about truth? I would think so.\"",
      "\"I know mine does.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern through concrete, varied examples \u2014 show the same principle operating in science, investing, startups, and essays before naming the general rule.",
      "Build arguments inductively: accumulate specific observations first, then extract the principle, rather than stating the thesis and then defending it.",
      "Introduce counterpoints and complications with 'But' or 'Though' \u2014 acknowledge them honestly and briefly, then continue developing the main thread rather than dwelling on the objection.",
      "Use analogies from everyday life to illuminate abstract concepts \u2014 prefer analogies that feel slightly surprising but immediately clarifying (submarine sandwiches for ideology, control rods for conformism).",
      "Structure longer arguments as decomposition: break a complex phenomenon into named components, examine each, then show how they interact and substitute for one another.",
      "Advance the argument by asking questions the reader is likely thinking ('Can you make yourself more independent-minded?') and then answering them, creating a dialectical rhythm.",
      "Hedge with precision \u2014 use 'I think', 'it seems to me', 'perhaps' only at genuine points of uncertainty, not as all-purpose softeners."
    ],
    "do_not": [
      "Do NOT cite studies, statistics, or formal authorities \u2014 ground claims in observation, personal experience, and reasoning instead.",
      "Do NOT use formal logical connectives ('furthermore', 'moreover', 'consequently') \u2014 let the logic emerge from the sequence of plain statements.",
      "Do NOT construct straw men or dismiss counterarguments \u2014 acknowledge complications honestly even if briefly."
    ],
    "evidence": [
      "\"To be a successful scientist, for example, it's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"It seems to me that it has three components: fastidiousness about truth, resistance to being told what to think, and curiosity.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the idea, then develop it with examples, qualifications, or consequences.",
      "Use single-sentence paragraphs strategically for emphasis \u2014 place them after longer developed paragraphs to let a crucial point land with maximum impact.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 use 'But', 'And', 'Ditto', or simply begin the next step in the argument without ceremony.",
      "Within paragraphs, sequence ideas as: claim \u2192 illustration/example \u2192 implication or extension. Keep the internal logic tight and forward-moving.",
      "Close paragraphs with a sentence that either sharpens the point to its most memorable formulation or pivots toward the next idea \u2014 avoid trailing off or restating the opening."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'In conclusion', 'Furthermore', 'Additionally' \u2014 transitions should be invisible or conversational.",
      "Do NOT pad paragraphs with redundant restatements of the same point in different words.",
      "Do NOT bury the main idea in the middle of a paragraph \u2014 lead with it or build clearly toward it."
    ],
    "evidence": [
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"I really want to know.\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use parallel structure to build momentum across examples \u2014 repeat the same syntactic frame with different content to hammer a pattern home ('To be a successful scientist... The same is true for investors... You see this pattern with startup founders too').",
      "Deploy vivid, concrete analogies from unexpected domains to make abstract points tangible \u2014 prefer analogies that create a slightly comic or visceral image (submarine sandwiches, airbeds on strangers' floors, control rods).",
      "Use rhetorical questions to mark transitions and pull the reader into active engagement \u2014 pose the question the reader should be asking, then answer it.",
      "Employ direct address and imperatives ('Think how often...', 'See if you can guess which', 'Stop and ask yourself') to make the reader a participant rather than a spectator.",
      "Use negation as a structural device \u2014 define what something is by first establishing what it isn't ('It's not enough just to be correct', 'It's not mere skepticism, but an active delight').",
      "Repeat key terms deliberately ('independent-minded', 'conventional-minded', 'curiosity', 'fastidiousness') rather than varying with synonyms \u2014 let the repetition build thematic weight and clarity."
    ],
    "do_not": [
      "Do NOT use literary or poetic devices like alliteration, assonance, or extended metaphors \u2014 keep figurative language functional and brief.",
      "Do NOT use lists of three or more items joined by commas as a rhythmic flourish \u2014 lists should enumerate genuine categories, not create rhetorical ornamentation.",
      "Do NOT use exclamatory emphasis or intensifiers to signal importance \u2014 let the idea's placement and the plainness of its statement convey its weight."
    ],
    "evidence": [
      "\"like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.\"",
      "\"just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"Think how often your reaction to a novel idea is to laugh.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by establishing a general observation or pattern through a specific, concrete domain ('There are some kinds of work that you can't do well without thinking differently from your peers') \u2014 enter the subject immediately without throat-clearing or grand declarations.",
      "Build the opening section by showing the same pattern across multiple concrete domains before zooming out to the general principle \u2014 let the reader discover the thesis alongside you.",
      "Close the essay by narrowing from the general back to the personal and actionable \u2014 end with practical advice or a distilled motto the reader can carry away, not a grand summary.",
      "Use section breaks (visual dividers) to mark major structural shifts in the argument \u2014 from establishing the problem, to exploring it, to offering components, to giving practical advice.",
      "Include numbered footnotes for tangential observations, additional examples, and qualifications that would interrupt the main argument's flow \u2014 use notes as a pressure valve for intellectual honesty without sacrificing readability.",
      "Avoid headers, bullet points, bold text, or other formatting apparatus \u2014 let the prose flow as continuous argument divided only by paragraph breaks and occasional section dividers.",
      "Write the first sentence to be immediately engaging and substantive \u2014 it should plant the seed of the essay's central idea in plain, direct language."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation, a dramatic anecdote, or a provocative claim designed to shock \u2014 begin with a calm, clear observation.",
      "Do NOT close with a formal summary or recapitulation of points made \u2014 end with a forward-looking or compressed insight that leaves the reader thinking.",
      "Do NOT use subheadings, numbered lists, or structured formatting within the body \u2014 the essay should read as a continuous intellectual journey."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
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
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause when needed \u2014 the default shape is a main clause followed by a 'because,' 'which,' or 'but' clause.",
      "Use compound-complex sentences sparingly and only when layering a causal chain: condition \u2192 consequence \u2192 implication, connected with conjunctions and commas.",
      "Deploy very short declarative sentences as punctuation marks after a longer explanatory passage \u2014 they land a conclusion or drive a point home after buildup.",
      "Chain ideas across sentence boundaries rather than within them: end one sentence with a claim, begin the next with 'But,' 'And,' 'So,' or 'Which' to create forward momentum while keeping individual sentences digestible.",
      "Use participial and relative clauses to pack context into mid-sentence position: 'the companies with high growth rates tend to become immensely valuable, while the ones with lower growth rates may not even survive.'",
      "Favor front-loaded sentences where the main assertion comes first and qualifications trail: 'Superlinear returns imply inequality. The steeper the return curve, the greater the variation in outcomes.'"
    ],
    "do_not": [
      "Do not write heavily nested sentences with multiple levels of subordination \u2014 keep clause depth to two levels maximum.",
      "Do not use periodic sentences where the main point is delayed until the end through long introductory clauses.",
      "Do not string together more than two coordinating conjunctions in a single sentence \u2014 split into separate sentences instead."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person perspective that positions you as someone thinking through a problem in real time \u2014 share the reasoning process, not just conclusions. Use 'I' to anchor personal observations and 'you' to draw the reader into direct application.",
      "Maintain an earnest, intellectually confident tone: state bold claims plainly without hedging the core assertion, but acknowledge complexity and exceptions openly in subsequent sentences.",
      "Signal genuine surprise or fascination at your own conclusions \u2014 treat ideas as discoveries worth marveling at, not foregone conclusions: 'I find that sentence startling.'",
      "Address the reader as a peer who is ambitious and intellectually curious \u2014 assume they want to act on these ideas, not just understand them abstractly.",
      "Use contractions selectively to maintain a conversational register without becoming sloppy \u2014 they appear in informal asides and natural speech patterns but not in key declarations.",
      "Express uncertainty through concrete reasoning about why something is hard to know, not through vague hedging language: 'I doubt we could ever predict this with certainty, but the prize is so valuable that it would be useful to have predictors that were even a little better than random.'"
    ],
    "do_not": [
      "Do not adopt an academic or detached tone \u2014 never write as if lecturing from above. The stance is 'I figured this out and here's what I think,' not 'studies have shown.'",
      "Do not use false modesty or excessive hedging that undermines the argument \u2014 if you believe something, say it directly.",
      "Do not be sarcastic or use humor as a rhetorical weapon \u2014 the tone is warm and serious, not sardonic."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Not everyone is happy about this great unlocking of ambition. It threatens some vested interests and contradicts some ideologies. But if you're an ambitious individual it's good news for you.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, plainly stated thesis, then spend the rest of the piece systematically unpacking its implications \u2014 the structure is thesis \u2192 taxonomy \u2192 examples \u2192 practical heuristics \u2192 broader implications.",
      "Introduce a conceptual framework (a taxonomy or decomposition) early, then use it as scaffolding for the rest of the argument: 'they reduce to two fundamental causes: exponential growth and thresholds.'",
      "Build arguments through concrete examples drawn from diverse domains \u2014 startups, bacterial cultures, empires, bicycle riding, Newton \u2014 to show a pattern is universal rather than domain-specific.",
      "Handle counterarguments by acknowledging them briefly, then reframing: 'Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.'",
      "Derive practical heuristics from theoretical observations \u2014 move from 'here's how the world works' to 'here's what you should do about it.' Frame heuristics as imperative directives.",
      "Use recursive deepening: introduce a concept, explore it, then show how it connects back to or compounds with a previously introduced concept. The argument spirals inward rather than proceeding linearly.",
      "Hedge by specifying the boundary conditions of a claim rather than weakening it: 'Not always, though. You have to be careful with this rule. When something is popular despite being mediocre, there's often a hidden reason why.'"
    ],
    "do_not": [
      "Do not cite academic sources, statistics, or appeal to authority \u2014 use reasoning from first principles and illustrative examples instead.",
      "Do not leave abstractions ungrounded \u2014 every general principle must be followed by at least one concrete example.",
      "Do not use formal logical connectives ('therefore,' 'furthermore,' 'moreover') \u2014 use conversational connectives ('but,' 'so,' 'and,' 'which means') to move between ideas."
    ],
    "evidence": [
      "\"But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented. We see the same pattern in fame, power, military victories, knowledge, and even benefit to humanity.\"",
      "\"Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.\"",
      "\"In the startup world, the name for this principle is 'do things that don't scale.' If you pay a ridiculous amount of attention to your tiny initial set of customers, ideally you'll kick off exponential growth by word of mouth.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 the first sentence should carry the paragraph's main idea with no throat-clearing.",
      "Use standalone single-sentence paragraphs to deliver knockout conclusions, pivots, or surprising restatements that deserve to land on their own.",
      "Sequence ideas within paragraphs as: assertion \u2192 mechanism/explanation \u2192 example \u2192 implication. Not every paragraph needs all four, but the order is consistent.",
      "Transition between paragraphs by picking up a thread from the previous paragraph's conclusion and extending or pivoting it \u2014 the last sentence of one paragraph often sets up the first sentence of the next.",
      "Close paragraphs with a sentence that either crystallizes the point into a memorable formulation or pivots toward the next idea, creating forward pull.",
      "When exploring a taxonomy, dedicate one paragraph to each branch, with a brief setup paragraph before the branching begins."
    ],
    "do_not": [
      "Do not open paragraphs with generic transition phrases ('In addition,' 'Another point is,' 'It is also worth noting') \u2014 instead, lead with the substance.",
      "Do not end paragraphs with trailing qualifications that dilute the point \u2014 put caveats in the middle and end with the strongest formulation.",
      "Do not write paragraphs that cover multiple unrelated ideas \u2014 each paragraph should develop one thought or one step in the argument."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\" (standalone paragraph driving home the prior point)",
      "\"Even after decades of thinking about this, I find that sentence startling.\" (standalone paragraph as emotional punctuation)",
      "\"The most obvious case of superlinear returns is when you're working on something that grows exponentially. For example, growing bacterial cultures.\" (claim \u2192 example opening)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies to make abstract concepts tangible \u2014 compare intellectual growth to bacterial cultures, knowledge to empires, career paths to surfing waves. Draw from history, science, everyday life, and business.",
      "Employ rhetorical questions to introduce new sections or pivot to practical implications: 'Are there general rules for finding situations with superlinear returns?' Then immediately answer them.",
      "Use parallel structure to create taxonomies and comparisons: 'the more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.'",
      "Deploy aphoristic restatements \u2014 compress a complex argument into a single memorable sentence that could stand alone: 'Superlinear returns imply inequality.'",
      "Use direct address and imperatives for practical advice sections: 'Choose work you have a natural aptitude for and a deep interest in. Develop a habit of working on your own projects.'",
      "Quote or paraphrase common wisdom, then subvert or complicate it: '\"You get out what you put in.\" They meant well, but this is rarely true.'",
      "Use lists of concrete examples to demonstrate universality, keeping them brisk and unpunctuated by commentary: 'sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.'"
    ],
    "do_not": [
      "Do not use elaborate or literary metaphors \u2014 keep figurative language functional and quickly understood.",
      "Do not use exclamation marks or emphatic punctuation \u2014 let the content carry the emphasis.",
      "Do not repeat a point using different words for rhetorical effect \u2014 state it once precisely, then move on."
    ],
    "evidence": [
      "\"this will be the wave you surf on\"",
      "\"How should you take advantage of it?\"",
      "\"Be honest, especially with yourself. Exercise and eat and sleep well and avoid the more dangerous drugs. When in doubt, follow your curiosity.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal confession of past ignorance or misunderstanding that frames the entire essay's thesis \u2014 position the piece as a correction of a common misconception the author once shared.",
      "Establish the stakes in the first few paragraphs: make clear why this idea matters for the reader's life, not just intellectually.",
      "Structure the essay as: opening thesis \u2192 conceptual framework \u2192 historical/domain exploration \u2192 practical heuristics \u2192 broadening implications \u2192 compressed advice \u2192 philosophical close.",
      "Close by zooming out to the largest frame \u2014 connect the specific argument to fundamental forces (curiosity, ambition, luck) and end on a note that is forward-looking and slightly philosophical rather than conclusive.",
      "Use numbered footnotes in brackets [1] for tangential observations, historical context, personal asides, and caveats that would break the main argument's flow \u2014 these serve as a second layer of the essay for the more curious reader.",
      "Use formatting sparingly: no headers, no bullet points, no bold text within the main body. The essay flows as continuous prose with only paragraph breaks and footnotes as structural elements.",
      "End paragraphs and the essay itself with sentences that feel like they could be the beginning of further thought rather than definitive closings \u2014 leave intellectual doors open."
    ],
    "do_not": [
      "Do not use section headers or subheadings \u2014 let the argument flow through transitions and paragraph breaks alone.",
      "Do not end with a tidy summary or call to action \u2014 end with an observation that invites further reflection.",
      "Do not open with a question, quote, or anecdote from someone else \u2014 open with the author's own realization or observation."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"[6] In my twenties I wanted to be an artist and even went to art school to study painting. Mostly because I liked art, but a nontrivial part of my motivation came from the fact that artists seemed least at the mercy of organizations.\""
    ]
  }
}
```

### sample-3.txt (2893 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2893,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause with one or two modifying phrases \u2014 keep the skeleton clean and readable, then extend it with a trailing subordinate clause or prepositional phrase when an idea needs qualification.",
      "Use compound sentences joined by 'and' or 'but' to layer a second thought onto the first, creating a conversational cadence that feels like thinking-out-loud rather than formal argumentation.",
      "Deploy very short declarative sentences \u2014 sometimes a single clause, sometimes a fragment \u2014 as emphatic punctuation after a longer exploratory passage. Place them on their own line or at the start of a paragraph to land a conclusion with finality.",
      "Chain parallel infinitive phrases or gerund phrases when listing behaviors or principles: 'you have to learn not to lie to yourself, not to procrastinate, not to get distracted, and not to give up when things go wrong.'",
      "Use rhetorical questions as sentence-length pivots \u2014 pose the question, then answer it immediately in the next sentence or after a brief pause, creating a call-and-response rhythm."
    ],
    "do_not": [
      "Do NOT embed multiple levels of nested subordinate clauses within a single sentence \u2014 keep nesting to one level deep at most.",
      "Do NOT use formally balanced periodic sentences where the main verb is delayed until the end; lead with the subject and verb early.",
      "Do NOT string together semicolons to build long, multi-part sentences \u2014 prefer starting a new sentence or using 'and'/'but' instead."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"You need both.\"",
      "\"you have to learn not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as someone reflecting honestly on their own experience, but generalize outward using 'you' to make the reader feel the advice applies directly to them. Alternate between 'I' (for personal anecdotes) and 'you' (for universal directives).",
      "Adopt the tone of someone thinking through a problem in real time \u2014 confident in conclusions but transparent about the difficulty of reaching them. Signal earned authority through personal experience, not credentials.",
      "Express uncertainty by naming the uncertainty itself: 'I wasn't sure of that,' 'I can't be sure,' 'that's a vague criterion, but it's deliberately vague.' Frame doubt as intellectual honesty rather than weakness.",
      "Use contractions sparingly, mostly in direct speech or when mimicking casual inner monologue ('I'd probably have needed,' 'you'll need both'). In more declarative, thesis-like statements, use the uncontracted form for weight.",
      "Maintain a warm but unsentimental register \u2014 be direct without being cold, personal without being confessional. The stance is that of a thoughtful peer sharing hard-won insights, not a guru dispensing wisdom."
    ],
    "do_not": [
      "Do NOT adopt an academic or detached tone \u2014 never write as though observing human behavior from the outside; always write as a participant.",
      "Do NOT use false modesty or excessive hedging \u2014 when you've reached a conclusion, state it plainly.",
      "Do NOT be preachy or moralistic; present insights as observations about how things work, not as prescriptions for how people should live."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"Now I know the answer to that question. There isn't.\"",
      "\"I can't be sure I'm getting anywhere when I'm working hard, but I can be sure I'm getting nowhere when I'm not, and it feels awful.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open a section with a claim that sounds obvious or simple, then immediately complicate it by revealing hidden depth. The pattern is: state the conventional view \u2192 show why it's incomplete \u2192 offer the more nuanced truth.",
      "Build arguments through concrete examples of real people (Gates, Messi, Wodehouse, Hardy, Newton, Mozart) rather than abstract reasoning. Use these as evidence anchors, not decorations \u2014 each example must advance the argument.",
      "Handle counterarguments preemptively by voicing what the reader is likely thinking ('Sounds a bit extreme, you think') and then responding to it, creating an implicit dialogue.",
      "Move from personal experience to general principle: describe your own situation first, then extract the universal lesson. This grounds abstraction in reality.",
      "Use analogies and metaphors drawn from everyday physical experience to make abstract concepts tangible: 'like a dog circling while it decides exactly where to lie down,' 'the pursuing beast,' 'a hard core at the center, surrounded by easier stuff at the edges.'",
      "When a problem is genuinely hard or ambiguous, say so explicitly rather than pretending to have a clean answer. Pose the hard questions and let them stand: 'But how much time? And what should you do if work that was going well stops going well?'"
    ],
    "do_not": [
      "Do NOT rely on citations, statistics, or formal evidence \u2014 the authority comes from reasoning and lived experience, not from data.",
      "Do NOT build toward a grand unified conclusion that wraps everything up neatly; instead, let the argument remain honestly messy where the reality is messy.",
      "Do NOT dismiss opposing views \u2014 acknowledge their appeal before explaining why they're insufficient."
    ],
    "evidence": [
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\"",
      "\"There's a faint xor between talent and hard work. It comes partly from popular culture, where it seems to run very deep, and partly from the fact that the outliers are so rare.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim, observation, or pivot sentence that tells the reader exactly where this paragraph is headed. The first sentence carries nearly all the structural weight.",
      "Use standalone single-sentence paragraphs as landing pads for conclusions or dramatic pivots \u2014 place a key insight alone to give it maximum impact ('There isn't.' / 'You need both.' / 'Perhaps something changes at adolescence.').",
      "Connect paragraphs through implicit logical continuity rather than explicit transition words. The last sentence of one paragraph sets up the first sentence of the next, often by raising a question or tension that the next paragraph resolves.",
      "Within a paragraph, sequence ideas as: claim \u2192 example or elaboration \u2192 qualification or caveat \u2192 restatement of the refined claim. This creates a spiral pattern where each paragraph ends slightly beyond where it began.",
      "When introducing a digression or aside, embed it within the paragraph rather than breaking it out \u2014 use parentheticals or dashes to signal the detour, then return to the main thread."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'furthermore,' 'moreover,' 'in addition,' or 'consequently' \u2014 let the logic of the ideas create the connection.",
      "Do NOT end paragraphs with summary sentences that merely restate the opening claim; instead, end with a forward-looking thought, a sharpened version of the claim, or a question."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"Perhaps something changes at adolescence. That would make sense.\"",
      "\"And the rule is the same: working hard means aiming toward the center \u2014 toward the most ambitious problems.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use spatial and physical metaphors to make abstract concepts concrete: problems have a 'hard core at the center,' work has a 'shape,' life paths 'converge.' Build a consistent metaphorical vocabulary across the piece.",
      "Employ rhetorical questions as genuine thinking devices, not as flourishes. Pose the question the reader is already forming, then answer it \u2014 or leave it unanswered when the honest answer is 'I don't know.'",
      "Use parallel structure within sentences to create rhythm and emphasis, especially in lists of behaviors or requirements: 'you have to understand the shape of real work, see clearly what kind you're best suited for, aim as close to the true core of it as you can.'",
      "Deploy direct address ('you') and imperatives ('get that idea out of your head,' 'cultivate a sensitivity') to create urgency and intimacy \u2014 speak directly to the reader as though coaching them.",
      "Use extended quotations from other writers and thinkers not as appeals to authority but as eloquent expressions of a point you've already made \u2014 let them say it in their words after you've said it in yours.",
      "Introduce technical or unexpected vocabulary from other domains for precision: 'a faint xor between talent and hard work,' 'rare squared,' 'simultaneous equations.' Use these as compressed analogies."
    ],
    "do_not": [
      "Do NOT use ornamental metaphors or similes that exist only for beauty \u2014 every figurative device must clarify or advance the argument.",
      "Do NOT use exclamation marks or hyperbolic language for emphasis; achieve emphasis through sentence placement and brevity instead.",
      "Do NOT repeat the same metaphor or analogy more than twice \u2014 introduce it, develop it, then move on."
    ],
    "evidence": [
      "\"There's a faint xor between talent and hard work.\"",
      "\"like a dog circling while it decides exactly where to lie down\"",
      "\"Like a Spanish Flu victim, you're fighting your own immune system\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a deceptively simple observation that the reader will initially agree with, then spend the rest of the essay revealing its hidden complexity. The opening should feel almost too obvious \u2014 that tension between simplicity and depth is the engine of the essay.",
      "Begin the very first sentence with a concessive or qualifying move ('It might not seem,' 'It's straightforward') that immediately signals the author is about to complicate the obvious.",
      "Close the essay by zooming out to the biggest version of the idea \u2014 synthesize the many threads into a single, complex sentence or short paragraph that captures the full system. The ending should feel like arriving at a panoramic view after a long hike.",
      "Structure the piece as a series of nested explorations rather than a linear argument: introduce a theme, explore it, discover a sub-theme, explore that, then return to the main thread at a higher level of understanding.",
      "Use bracketed numbered footnotes [1], [2], etc. to handle tangential thoughts, caveats, and qualifications without disrupting the main flow. Place the notes at the end.",
      "Use em dashes sparingly for parenthetical asides within sentences. Use commas as the primary tool for clause separation. Use colons to introduce explanations or elaborations.",
      "Format as continuous prose without headers or section breaks \u2014 let the reader follow the thread of thought without imposed structure."
    ],
    "do_not": [
      "Do NOT open with a dramatic hook, provocative statistic, or attention-grabbing anecdote \u2014 open with quiet, understated reflection.",
      "Do NOT close with a call to action or motivational exhortation \u2014 close with an observation that lets the reader draw their own conclusions.",
      "Do NOT use bullet points, numbered lists, bold text, or other visual formatting within the body of the essay \u2014 the ideas should flow as continuous prose."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\"",
      "\"This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\"",
      "\"Like a Spanish Flu victim, you're fighting your own immune system: Instead of giving up, you tell yourself, I should just try harder. And who can say you're not right?\""
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
      "Default to a conversational mid-length sentence that reads like speech: a subject-verb-object core with natural extensions ('They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them').",
      "Use compound sentences joined by 'and' or 'but' to chain two related thoughts into one breath, mimicking the rhythm of someone thinking out loud.",
      "Deploy very short sentences as decisive punctuation after a longer buildup \u2014 to land a verdict, deliver a punchline, or close an argument ('He can't. But you can.').",
      "Let participial and infinitive phrases do lightweight extension work ('recruiting new users and helping existing ones improve their listings') rather than stacking relative clauses.",
      "When a sentence needs to convey a sequence or escalation, use a comma-separated list structure within the sentence rather than breaking into multiple sentences ('They want to launch simultaneously in 8 different publications, with embargoes')."
    ],
    "do_not": [
      "Do not write long, ornate sentences with multiple semicolons or nested parenthetical asides \u2014 keep clause relationships transparent and linear.",
      "Do not string together more than two independent clauses with commas (no comma splices or breathless run-ons).",
      "Do not use uniformly short, clipped sentences throughout \u2014 the rhythm depends on contrast between flowing mid-length sentences and sharp short ones."
    ],
    "evidence": [
      "He can't. But you can.",
      "They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.",
      "When anyone agreed to try Stripe they'd say \"Right then, give me your laptop\" and set them up on the spot."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a knowledgeable insider sharing hard-won lessons with peers \u2014 collegial but authoritative, like a mentor at a whiteboard, not a professor at a lectern.",
      "Use first person ('I', 'we') to ground advice in personal experience and shared institutional knowledge ('We encourage every startup to\u2026', 'I've seen it happen').",
      "Address the reader directly with 'you' to make advice feel personally relevant and urgent rather than abstract.",
      "Signal confidence through plain assertion \u2014 state claims as facts, then back them with examples rather than hedging upfront. When uncertain, use 'I think' sparingly and honestly rather than piling on qualifiers.",
      "Use contractions freely in flowing prose to maintain a spoken, approachable register ('you'll', 'they'd', 'wouldn't', 'can't').",
      "Employ dry, understated humor through incongruity and deflation \u2014 juxtapose grand startup ambitions with mundane realities ('we were trying to sell luggage and pens and men's shirts').",
      "Adopt a gently corrective stance toward common founder mistakes \u2014 name the error, explain why it's wrong, then redirect, without condescension."
    ],
    "do_not": [
      "Do not adopt a detached, academic tone \u2014 avoid impersonal constructions like 'it has been observed that' or 'one might consider'.",
      "Do not be sycophantic or motivational-speaker enthusiastic \u2014 avoid exclamation marks, hyperbolic praise, or cheerleading language.",
      "Do not hedge every claim with 'perhaps', 'arguably', 'it could be said' \u2014 commit to the point."
    ],
    "evidence": [
      "I often have to encourage founders who don't see the full potential of what they're building.",
      "We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.",
      "You're supposed to build things that are robust and elegant, not be slavishly attentive to individual users like some kind of salesperson."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly ('do things that don't scale'), then spend the rest of the piece proving it through accumulated examples.",
      "Build arguments primarily through concrete startup anecdotes \u2014 name real companies (Stripe, Airbnb, Facebook, Pebble, Wufoo), describe specific actions their founders took, and draw the lesson from the story.",
      "Anticipate and articulate the reader's objections explicitly ('There are two reasons founders resist\u2026'), then dismantle them one by one.",
      "Use analogies and metaphors to make abstract concepts visceral \u2014 draw from everyday physical experience (cranking a car engine, keeping a fire contained, a newborn baby).",
      "Progress through variations on the central theme rather than a strict linear argument \u2014 each section is a different angle on 'do things that don't scale' (recruiting, delighting, narrowing market, manual work, consulting).",
      "When presenting a claim about what founders should do, immediately follow with a named example of a founder who did it and what happened.",
      "Acknowledge limitations honestly but briefly ('growth has to slow down eventually'), then redirect to the actionable point."
    ],
    "do_not": [
      "Do not present arguments as pure logic chains without concrete examples \u2014 every principle must be grounded in a real story.",
      "Do not cite academic research, statistics, or formal studies as primary evidence \u2014 use founder stories and personal observation instead.",
      "Do not leave objections unaddressed \u2014 if a reasonable reader would think 'but that doesn't scale,' preempt it."
    ],
    "evidence": [
      "A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.",
      "They're like someone looking at a newborn baby and concluding \"there's no way this tiny creature could ever accomplish anything.\"",
      "The question to ask about an early stage startup is not \"is this company taking over the world?\" but \"how big could this company get if the founders did the right things?\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or transition, then immediately support it with specifics \u2014 lead with the point, not the buildup.",
      "Use single-sentence paragraphs to deliver standalone verdicts, pivots, or emphatic conclusions that deserve their own visual weight ('I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.').",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the reader follow the thread from example to principle to next example without 'furthermore' or 'moreover'.",
      "When a paragraph introduces an objection or question, answer it within the same paragraph or the immediately following one \u2014 don't leave threads dangling.",
      "Sequence ideas within a paragraph as: claim \u2192 example/evidence \u2192 implication or restatement. Occasionally invert to: example \u2192 lesson drawn.",
      "Use section headers (single bold words or short phrases like 'Recruit', 'Fragile', 'Delight', 'Fire') to signal major topic shifts, functioning as both labels and thematic anchors."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('In addition', 'Furthermore', 'On the other hand') to connect paragraphs \u2014 let the logical relationship be self-evident.",
      "Do not write paragraphs that meander through multiple unrelated sub-points \u2014 each paragraph should serve one idea or one step in the argument.",
      "Do not bury the main point at the end of a long paragraph \u2014 front-load the key claim."
    ],
    "evidence": [
      "I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.",
      "Fragile Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.",
      "It's easy to see how little launches matter. Think of some successful startups. How many of their launches do you remember?"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from physical, tangible domains to explain abstract startup dynamics \u2014 engines needing cranks, fires needing containment, projectiles vs. powered aircraft, boulders vs. train cars.",
      "Employ rhetorical questions to make the reader arrive at your conclusion themselves ('How many of their launches do you remember?', 'But should you even be working on such an idea?').",
      "Use direct quotation of specific founders and figures to add authority and texture \u2014 let real people speak in their own words ('Right then, give me your laptop', 'how valuable it was to source good screws').",
      "Deploy antithesis and reframing to sharpen points \u2014 set up the wrong way of thinking, then pivot to the right one with 'but' or 'not X but Y' ('not \"is this company taking over the world?\" but \"how big could this company get\u2026\"').",
      "Use parallel structure within sentences to create rhythm and emphasis ('You can tweak the design faster when you're the factory, and you learn things you'd never have known otherwise').",
      "Repurpose familiar phrases with a twist to create memorable formulations ('Collison installation', 'pulling a Meraki', 'startup ideas as vectors not scalars').",
      "Use footnotes/endnotes for tangential but interesting asides, attributions, and caveats that would interrupt the main flow."
    ],
    "do_not": [
      "Do not use flowery literary metaphors, allusions to classical literature, or ornate figurative language \u2014 keep analogies concrete and accessible.",
      "Do not use exclamatory emphasis or breathless superlatives \u2014 persuade through example and logic, not volume.",
      "Do not repeat the same rhetorical move (e.g., rhetorical question) in consecutive paragraphs \u2014 vary the toolkit."
    ],
    "evidence": [
      "It's like keeping a fire contained at first to get it really hot before adding more logs.",
      "I occasionally meet founders who seem to believe startups are projectiles rather than powered aircraft, and that they'll make it big if and only if they're launched with sufficient initial velocity.",
      "You can be ornery when you're Scotty, but not when you're Kirk."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with the central thesis stated as practical advice in one clean sentence \u2014 no preamble, scene-setting, or throat-clearing. The reader should know the essay's argument within the first sentence.",
      "After the opening thesis, immediately introduce the common misconception it corrects \u2014 frame the essay as 'here's what most people think, here's what's actually true.'",
      "Structure the overall piece as a series of named sections (one-word or short-phrase headers), each exploring a different facet of the central thesis through examples.",
      "Close by reframing the thesis at a higher level of abstraction \u2014 elevate from practical advice to a broader conceptual insight ('thinking of startup ideas as vectors rather than scalars').",
      "End with a note of optimism tied back to the thesis \u2014 the unscalable work isn't just necessary but actually beneficial, permanently shaping the company's DNA.",
      "Append endnotes for digressions, attributions, and qualifications that would clutter the main argument \u2014 number them inline with bracketed references.",
      "Use minimal formatting: section headers are bold single words, emphasis through italics is rare, no bullet lists in the body text. The essay reads as continuous prose broken by section headers."
    ],
    "do_not": [
      "Do not open with an anecdote, question, or dramatic hook \u2014 lead with the thesis directly.",
      "Do not close with a summary that mechanically restates all the points made \u2014 instead, synthesize into a new insight that emerges from the accumulated examples.",
      "Do not use heavy formatting (bullet lists, numbered steps, bold key terms throughout) \u2014 this is essayistic prose, not a how-to guide."
    ],
    "evidence": [
      "One of the most common types of advice we give at Y Combinator is to do things that don't scale.",
      "Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.",
      "In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better."
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
      "Build the default sentence as a single independent clause with one main verb and minimal embedding \u2014 keep the syntax flat and conversational, as if explaining something to a smart friend at a bar.",
      "When extending a sentence, prefer coordination (chaining with 'and', 'but', 'or') over deep subordination \u2014 stack ideas side by side rather than nesting them.",
      "Use short declarative sentences as landing pads after a longer explanatory passage \u2014 they serve as punchlines or thesis restatements that crystallize the preceding thought.",
      "Deploy conditional and hypothetical structures ('if you\u2026', 'suppose\u2026', 'imagine\u2026') to draw the reader into thought experiments, using the conditional as a rhetorical engine rather than just hedging.",
      "Vary sentence openings by alternating between subject-first declarations, leading adverbials ('Certainly', 'Of course', 'In fact'), and fronted conditionals \u2014 but always return to plain subject-verb-object as the home base.",
      "When building longer sentences, use comma-separated participial phrases or appositive asides to add color without creating subordinate-clause depth \u2014 keep the cognitive load low even when the sentence is physically long."
    ],
    "do_not": [
      "Do not write sentences with multiple levels of nested subordination (e.g., 'The idea that the claim which he made when he\u2026') \u2014 if you need that much information, break it into separate sentences.",
      "Do not use periodic sentence structure where the main point is delayed until the end of a long buildup \u2014 deliver the point early and then elaborate.",
      "Do not write in a monotone rhythm of same-length, same-structure sentences \u2014 alternate between explanatory multi-clause sentences and crisp standalone declarations."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"If you could travel back in a time machine, one thing would be true no matter where you went: you'd have to watch what you said.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a curious, independent thinker reasoning out loud \u2014 the tone should be that of someone who genuinely finds the subject fascinating and is inviting the reader to think alongside them.",
      "Use first person ('I') to signal personal investment and intellectual honesty, especially when admitting uncertainty or taking a potentially controversial position \u2014 'I suspect', 'I think', 'I want to'.",
      "Use second person ('you') frequently to pull the reader into the argument as a co-investigator \u2014 pose challenges to them directly and make them complicit in the reasoning.",
      "Maintain a tone that is confident but not dogmatic: state strong claims plainly, but regularly acknowledge complexity and the possibility of being wrong.",
      "Use contractions naturally as part of conversational register \u2014 they signal informality and directness, not sloppiness.",
      "Deploy dry, understated humor through absurd hypotheticals and ironic juxtapositions rather than through jokes or wordplay \u2014 the comedy comes from the logical structure, not from being funny.",
      "When discussing potentially inflammatory topics, adopt a deliberately calm, almost clinical curiosity \u2014 never become indignant or preachy."
    ],
    "do_not": [
      "Do not adopt an academic or professorial distance \u2014 never write as if lecturing from above. The reader is an intellectual equal.",
      "Do not use hedging language out of social anxiety ('it might perhaps be suggested that\u2026') \u2014 hedge only when genuinely uncertain, and do so plainly ('I suspect', 'probably').",
      "Do not moralize or tell the reader what to believe \u2014 present the reasoning and let them draw conclusions."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity. And I'm especially curious about anything that's forbidden. Let me see and decide for myself.\"",
      "\"If everything you believe is something you're supposed to believe, could that possibly be a coincidence? Odds are it isn't. Odds are you just think what you're told.\"",
      "\"I admit it seems cowardly to keep quiet.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure arguments as a series of investigative methods \u2014 present the overall question, then walk through multiple independent approaches to answering it, each introduced as a distinct technique ('Another approach is\u2026', 'I can think of one more way\u2026').",
      "Introduce claims through thought experiments and hypotheticals rather than through data or citations \u2014 the primary evidence is 'what would logically follow if\u2026'.",
      "Use historical analogies as the dominant form of evidence: ground abstract arguments in concrete historical episodes (Galileo, Copernicus, the Reformation, HUAC) that make the pattern vivid and testable.",
      "Handle counterarguments by preemptively raising them in the reader's voice ('Some would ask, why would one want to do this?'), then answering them directly \u2014 acknowledge the objection's emotional force before dismantling it logically.",
      "Build arguments through accumulation: present multiple examples pointing in the same direction rather than one definitive proof \u2014 convince through pattern recognition, not single decisive evidence.",
      "Use 'Odds are\u2026' and 'I suspect\u2026' as hedge phrases when making claims that are strong but not provable \u2014 these signal confidence modulated by intellectual honesty.",
      "Employ reductio ad absurdum as a core logical move: push an opponent's position to its extreme to reveal its absurdity, often through invented scenarios (the yellowist example, people in Pittsburgh being ten feet tall)."
    ],
    "do_not": [
      "Do not rely on appeals to authority or credential \u2014 the argument should stand on its logical structure and the reader's ability to verify the reasoning independently.",
      "Do not present a single linear argument and declare it proven \u2014 instead, approach the question from multiple angles and let the convergence of approaches do the persuading.",
      "Do not dismiss opposing views without engaging them \u2014 always acknowledge why someone might hold the opposing view before explaining why you find it insufficient."
    ],
    "evidence": [
      "\"Like every other era in history, our moral map almost certainly contains a few mistakes. And anyone who makes the same mistakes probably didn't do it by accident. It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"No one gets in trouble for saying that 2 + 2 is 5, or that people in Pittsburgh are ten feet tall. Such obviously false statements might be treated as jokes, or at worst as evidence of insanity, but they are not likely to make anyone mad.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use standalone sentences as paragraphs to deliver key insights, thesis statements, or dramatic turns \u2014 these function as rhetorical punctuation, forcing the reader to pause and absorb.",
      "Open multi-sentence paragraphs with the core claim or question, then immediately follow with elaboration, evidence, or an example \u2014 front-load the point.",
      "Connect paragraphs through logical continuation rather than explicit transitional phrases \u2014 the next paragraph picks up where the last left off, often by answering an implied question or extending an analogy.",
      "Use section headers sparingly as signposts that announce a new investigative approach or a shift in the argument's direction \u2014 headers are structural, not decorative.",
      "Within longer paragraphs, sequence ideas as: claim \u2192 concrete example \u2192 implication or restatement. The example does the heavy lifting; the surrounding sentences frame it.",
      "Close paragraphs with a sentence that either crystallizes the insight or pivots toward the next idea \u2014 never let a paragraph trail off without landing somewhere."
    ],
    "do_not": [
      "Do not use explicit transition words like 'Furthermore', 'Moreover', 'Additionally' to connect paragraphs \u2014 let the logical flow carry the reader forward naturally.",
      "Do not write paragraphs that introduce multiple unrelated ideas \u2014 each paragraph should advance exactly one point or one step in the argument.",
      "Do not bury the key insight in the middle of a paragraph surrounded by setup and qualification \u2014 either lead with it or build to it as the final sentence."
    ],
    "evidence": [
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"The age of consent fluctuates like hemlines.\"",
      "\"They can't reply in kind to jokes. They're as unhappy on the territory of humor as a mounted knight on a skating rink.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and thought experiments as the primary persuasive tool \u2014 construct vivid hypothetical scenarios (time machine visitors, the yellowist movement, the Conrad character vs. suburban teenager) that make abstract ideas tangible and testable.",
      "Deploy rhetorical questions to advance the argument, not for decoration \u2014 each question should represent a genuine fork in the reasoning that the subsequent text then resolves.",
      "Use parallel structure to create memorable contrasts and definitions: 'Dressing oddly gets you laughed at. Violating moral fashions can get you fired, ostracized, imprisoned, or even killed.'",
      "Employ the 'diff' metaphor \u2014 explicitly frame analysis as comparing two things (past vs. present, culture A vs. culture B, child vs. worldly adult) and examining what the difference reveals.",
      "Use direct address and imperative constructions ('Look for prigs', 'Take a label', 'Ask why') to make the reader an active participant in the investigation.",
      "Lean on everyday and cross-domain analogies (fashion, maps, stretching before running, skirmishers in an army) rather than literary or poetic metaphors \u2014 make the abstract concrete through the familiar.",
      "Use deliberate repetition of key phrases ('in trouble', 'can't say', 'moral fashions') across the essay to create thematic coherence and reinforce the central concepts."
    ],
    "do_not": [
      "Do not use flowery or literary metaphors that call attention to their own cleverness \u2014 analogies should illuminate, not impress.",
      "Do not use rhetorical questions as filler or for emphasis alone \u2014 every question must either advance the argument or genuinely invite the reader to think.",
      "Do not rely on emotional appeals or vivid sensory language to persuade \u2014 persuasion comes from logic, examples, and the reader's own reasoning."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"Argue with idiots, and you become an idiot.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-frame that tells the reader exactly what the essay is about and why it matters now \u2014 set expectations before the argument begins, then launch into the actual opening with a question or relatable observation.",
      "Begin the body with a concrete, universally relatable experience (embarrassment at old photos) that serves as an analogy for the essay's deeper subject \u2014 ground the abstract in the personal before scaling up.",
      "Structure the essay as an investigation with named methods \u2014 use section headers as labels for each approach ('The Conformist Test', 'Trouble', 'Heresy', 'Time and Space', 'Mechanism'), giving the piece the feel of a systematic inquiry rather than a linear argument.",
      "Close sections by pivoting to practical advice or actionable takeaways \u2014 after establishing what the problem is, tell the reader what to do about it.",
      "Use bracketed endnote references ([1], [2], etc.) for asides, qualifications, and supplementary points that would break the flow if included inline \u2014 this keeps the main text clean while signaling intellectual rigor.",
      "Format the essay with minimal visual apparatus: no bullet lists, no bold text, no block quotes within the body \u2014 let the prose do the structural work through short paragraphs, section headers, and standalone emphatic sentences.",
      "End the essay with practical wisdom rather than a grand summary \u2014 the closing should be advice the reader can use, not a restatement of the thesis."
    ],
    "do_not": [
      "Do not open with a grand abstract claim or a dictionary definition \u2014 always begin with something concrete, personal, or experiential that hooks the reader before the abstractions arrive.",
      "Do not close with a neat bow that wraps everything up \u2014 leave the reader with something to think about or act on rather than a conclusive summary.",
      "Do not use formatting (bold, italics, lists) as a substitute for clear prose structure \u2014 if the argument needs visual aids to be followable, the prose needs rewriting."
    ],
    "evidence": [
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"But I want to do more than just shock everyone with the heresy du jour. I want to find general recipes for discovering what you can't say, in any era.\"",
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual curiosity and plain-spoken precision",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear main clause, then extend with one qualifying or elaborating clause using 'because,' 'which,' 'but,' or a trailing prepositional phrase \u2014 rarely stack more than two dependent clauses.",
      "Default to subject-verb-object order; let the plainness of the syntax carry the idea rather than the architecture of the sentence.",
      "Use compound sentences joined by 'and' or 'but' to chain two related thoughts, mimicking the rhythm of thinking out loud.",
      "Chain ideas across sentence boundaries using pronoun reference, 'But,' 'And,' 'So,' or 'Which means' rather than embedding everything into one complex sentence \u2014 let each sentence do one job.",
      "Vary rhythm by alternating between sentences that develop an idea across multiple clauses and sentences that deliver a standalone conclusion \u2014 use the shorter sentence to land a point after a longer setup.",
      "When building compound sentences, prefer comma-plus-conjunction over semicolons; keep the jointure casual and transparent.",
      "Use conditional and hypothetical structures ('if you\u2026', 'suppose\u2026', 'imagine\u2026') to draw the reader into thought experiments as a rhetorical engine.",
      "Use participial and infinitive phrases for lightweight extension rather than stacking relative clauses."
    ],
    "do_not": [
      "Do NOT write ornate, multi-layered sentences with nested subordinate clauses \u2014 avoid academic sentence architecture and keep nesting to one level deep at most.",
      "Do NOT use periodic sentences where the main point is delayed until the end through a series of dependent clauses \u2014 deliver the point early.",
      "Do NOT maintain a monotonous rhythm of same-length, same-structure sentences \u2014 always follow a developed thought with something more concise, or vice versa.",
      "Do NOT string together semicolons to build long, multi-part sentences \u2014 start a new sentence or use 'and'/'but' instead."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a direct, collegial tone \u2014 address the reader as 'you' and refer to yourself as 'I' freely, as though having a thoughtful conversation between intellectual equals.",
      "Project quiet confidence: state claims as plain assertions rather than hedging, but signal genuine uncertainty with 'I think,' 'I suspect,' 'it seems to me' \u2014 hedge only when you genuinely aren't sure.",
      "Maintain a warm but intellectually serious register \u2014 never talk down to the reader, but never puff up the prose with formal diction or jargon.",
      "Adopt the stance of someone thinking through a problem in real time \u2014 share the reasoning process, not just conclusions.",
      "Use personal experience and self-reference to ground abstract claims, creating intimacy without oversharing.",
      "Deploy dry, understated humor through unexpected analogies, incongruity, and wry asides rather than overt jokes \u2014 let the reader discover the wit.",
      "Use contractions naturally where spoken English would use them, contributing to conversational flow without making the prose sloppy.",
      "When discussing potentially controversial topics, adopt a deliberately calm, almost clinical curiosity \u2014 never become indignant or preachy."
    ],
    "do_not": [
      "Do NOT adopt an academic, detached, or impersonal voice \u2014 never write as if producing a paper for peer review or lecturing from above.",
      "Do NOT use false modesty or excessive hedging \u2014 avoid cluttering sentences with 'perhaps,' 'arguably,' 'it could be said that' unless genuine uncertainty is the point.",
      "Do NOT be preachy or moralistic \u2014 present observations and let readers draw their own conclusions rather than telling them what they should believe.",
      "Do NOT be sarcastic, sycophantic, or motivational-speaker enthusiastic \u2014 the tone is warm and serious, not sardonic or cheerleading."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments inductively: accumulate specific observations and concrete examples first, then extract the general principle, rather than stating the thesis and defending it deductively.",
      "Ground every argument in concrete examples drawn from diverse domains \u2014 startups, science, history, everyday life \u2014 to show a pattern is universal rather than domain-specific.",
      "Introduce counterpoints and complications by voicing what the reader is likely thinking, acknowledge them honestly, then continue developing the main thread rather than dwelling on the objection.",
      "Use analogies from everyday physical experience to illuminate abstract concepts \u2014 prefer analogies that feel slightly surprising but immediately clarifying.",
      "Advance the argument by asking questions the reader is likely forming and then answering them, creating a dialectical rhythm.",
      "When a problem is genuinely hard or ambiguous, say so explicitly rather than pretending to have a clean answer \u2014 frame doubt as intellectual honesty.",
      "Use thought experiments and hypotheticals as a primary mode of evidence \u2014 'what would logically follow if\u2026'",
      "Use historical analogies as evidence anchors, not decorations \u2014 each example must advance the argument.",
      "Hedge with precision: specify the boundary conditions of a claim rather than weakening it with all-purpose softeners."
    ],
    "do_not": [
      "Do NOT cite academic studies, statistics, or formal authorities \u2014 ground claims in observation, personal experience, reasoning from first principles, and illustrative examples.",
      "Do NOT use formal logical connectives ('furthermore,' 'moreover,' 'consequently') \u2014 use conversational connectives ('but,' 'so,' 'and,' 'which means') to move between ideas.",
      "Do NOT construct straw men or dismiss counterarguments \u2014 acknowledge their appeal before explaining why they're insufficient.",
      "Do NOT leave abstractions ungrounded \u2014 every general principle must be followed by at least one concrete example."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the idea, then develop it with examples, qualifications, or consequences.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 use 'But,' 'And,' or simply begin the next step in the argument without ceremony.",
      "Within paragraphs, sequence ideas as: claim \u2192 illustration/example \u2192 implication or extension. Keep the internal logic tight and forward-moving.",
      "Close paragraphs with a sentence that either sharpens the point to its most memorable formulation or pivots toward the next idea \u2014 avoid trailing off or restating the opening.",
      "The last sentence of one paragraph often sets up the first sentence of the next, creating forward pull through implicit question or tension.",
      "When exploring a taxonomy, dedicate one paragraph to each branch, with a brief setup paragraph before the branching begins."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'In conclusion,' 'Furthermore,' 'Additionally,' 'Moreover' \u2014 transitions should be invisible or conversational.",
      "Do NOT pad paragraphs with redundant restatements of the same point in different words.",
      "Do NOT bury the main idea in the middle of a paragraph \u2014 lead with it or build clearly toward it.",
      "Do NOT write paragraphs that meander through multiple unrelated sub-points \u2014 each paragraph should serve one idea or one step in the argument."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies drawn from tangible, everyday experience to make abstract concepts concrete \u2014 engines needing cranks, submarine sandwiches, mounted knights on skating rinks, mapmakers planting errors.",
      "Employ rhetorical questions to mark transitions and pull the reader into active engagement \u2014 pose the question the reader should be asking, then answer it.",
      "Use parallel structure to build momentum across examples \u2014 repeat the same syntactic frame with different content to hammer a pattern home.",
      "Deploy direct address and imperatives ('Think how often\u2026', 'Ask yourself\u2026', 'Look for\u2026') to make the reader a participant rather than a spectator.",
      "Use negation as a structural device \u2014 define what something is by first establishing what it isn't.",
      "Repeat key terms deliberately rather than varying with synonyms \u2014 let the repetition build thematic weight and clarity.",
      "Quote or paraphrase common wisdom, then subvert or complicate it to create memorable reframings.",
      "Compress complex arguments into aphoristic single sentences that could stand alone as memorable formulations."
    ],
    "do_not": [
      "Do NOT use literary or poetic devices like alliteration, assonance, or extended ornamental metaphors \u2014 keep figurative language functional and brief.",
      "Do NOT use exclamatory emphasis, intensifiers, or breathless superlatives to signal importance \u2014 let the idea's placement and plainness convey its weight.",
      "Do NOT use rhetorical questions as filler or decoration \u2014 every question must advance the argument or genuinely invite the reader to think.",
      "Do NOT rely on emotional appeals or vivid sensory language to persuade \u2014 persuasion comes from logic, examples, and the reader's own reasoning."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by entering the subject immediately \u2014 establish a general observation, a personal realization, or a concrete experience in the first sentence without throat-clearing or grand declarations.",
      "Position the opening as correcting a common misconception or revealing hidden complexity in something that seems obvious \u2014 create tension between surface simplicity and actual depth.",
      "Structure the essay as continuous prose flowing through paragraph breaks and occasional section dividers \u2014 the reader follows a thread of thought, not a formal outline.",
      "Close by zooming out to the largest frame \u2014 connect the specific argument to fundamental forces and end on a forward-looking or philosophical note rather than a mechanical summary.",
      "End with practical wisdom, a compressed insight, or an observation that leaves the reader thinking \u2014 not a tidy recapitulation of points made.",
      "Use bracketed numbered footnotes for tangential observations, additional examples, caveats, and qualifications that would interrupt the main argument's flow.",
      "Write the first sentence to be immediately engaging and substantive \u2014 it should plant the seed of the essay's central idea in plain, direct language."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation from someone else, a dramatic anecdote, or a provocative claim designed to shock \u2014 begin with a calm, clear observation or realization.",
      "Do NOT close with a formal summary, call to action, or motivational exhortation \u2014 end with an insight that invites further reflection.",
      "Do NOT use subheadings excessively, numbered lists, bullet points, bold text, or heavy formatting within the body \u2014 the essay should read as continuous intellectual prose.",
      "Do NOT use block quotes, pull quotes, or visual formatting as a substitute for clear prose structure."
    ]
  },
  "signature_phrases": {
    "use": [
      "I think",
      "I suspect",
      "it seems to me",
      "in my experience",
      "the way to",
      "odds are",
      "in fact",
      "of course",
      "in other words",
      "the most important",
      "not just",
      "not merely",
      "the kind of",
      "turns out",
      "the trouble is",
      "the problem with",
      "which means",
      "and yet",
      "but",
      "so",
      "ditto"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "consequently",
      "it is worth noting",
      "in conclusion",
      "to summarize",
      "studies have shown",
      "research indicates",
      "it could be argued",
      "one might suggest",
      "it is important to note",
      "stakeholders",
      "leverage",
      "synergy",
      "paradigm",
      "utilize",
      "facilitate",
      "in terms of",
      "with respect to",
      "going forward",
      "at the end of the day",
      "needless to say",
      "it goes without saying"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'additionally,' and 'consequently' with 'but,' 'and,' 'so,' or simply start a new sentence",
    "Convert passive constructions to active \u2014 'it was discovered that' becomes 'I found that' or 'they discovered'",
    "Replace abstract nouns with concrete examples \u2014 if a sentence makes a general claim, follow it immediately with a specific illustration",
    "Break any sentence with more than two levels of subordinate clauses into separate sentences chained with 'But,' 'And,' or 'So'",
    "Replace hedging clusters ('it could perhaps be argued that') with direct statements or honest single hedges ('I think,' 'I suspect')",
    "Remove throat-clearing openings ('It is interesting to note that,' 'It is worth mentioning that') \u2014 start with the substance",
    "Convert impersonal constructions ('one might consider') to direct address ('you should consider' or 'think about')",
    "Replace formal vocabulary with plain equivalents \u2014 'utilize' becomes 'use,' 'facilitate' becomes 'help,' 'demonstrate' becomes 'show'",
    "If a paragraph doesn't lead with its main point, restructure so the key claim comes first and evidence follows",
    "Remove any sentence that merely restates the previous sentence in different words"
  ]
}
```