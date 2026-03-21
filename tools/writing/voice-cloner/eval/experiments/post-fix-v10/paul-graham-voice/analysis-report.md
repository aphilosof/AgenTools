# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, involved, explicit — conversational authority with intellectual precision, thinking aloud with the reader as a curious peer

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
      "Build sentences around a single clear claim, then extend with one qualifying or illustrating clause \u2014 the default shape is 'assertion + refinement.'",
      "Use conditional structures ('If you're naturally independent-minded, you're going to find it frustrating\u2026') to walk the reader through implications step by step, making abstract ideas feel personally applicable.",
      "Chain clauses with 'and,' 'but,' and 'because' as the primary connective tissue \u2014 prefer these plain coordinating/subordinating conjunctions over more formal or literary alternatives like 'moreover,' 'nevertheless,' or 'consequently.'",
      "When introducing a new concept or making a pivotal claim, use a stripped-down declarative sentence with no subordinate clauses \u2014 let the idea land unadorned before elaborating.",
      "Deploy parallel structure when comparing or listing related ideas: repeat the same syntactic frame with varied content, as in 'If you're naturally independent-minded\u2026 And if you're naturally conventional-minded\u2026'",
      "Let longer sentences do the explaining and shorter sentences do the concluding \u2014 place the short declarative at the END of a sequence to punctuate the point, not at the beginning."
    ],
    "do_not": [
      "Do NOT use elaborate subordination with multiple nested clauses \u2014 never stack more than one dependent clause before the main verb.",
      "Do NOT use periodic sentence structures where the main point is withheld until the end of a long sentence \u2014 lead with the point, then qualify.",
      "Do NOT use inverted syntax or unusual word order for rhetorical effect \u2014 keep subject-verb-object as the backbone."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\"",
      "\"It's not enough just to have resistance to being told what to think. Those kind of people reject conventional ideas only to replace them with the most random conspiracy theories.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a thoughtful peer sharing hard-won insight \u2014 not lecturing from above, but thinking aloud with the reader. The stance is 'I've figured some things out and I'm telling you directly.'",
      "Use first person ('I') for personal experience and observations, second person ('you') when making the idea applicable to the reader's life, and shift fluidly between them within a single paragraph.",
      "Project quiet confidence: state claims as plain facts without hedging the core assertion, but use hedges ('I think,' 'it seems,' 'perhaps') specifically when genuinely uncertain or when softening a bold inference.",
      "Maintain an earnest, intellectually serious tone \u2014 treat the reader as someone who cares about getting things right and can handle nuance without needing it dumbed down.",
      "Express warmth through directness and personal disclosure rather than through effusive language \u2014 say 'I really want to know' rather than 'I find it absolutely fascinating.'",
      "Use contractions naturally in flowing prose to maintain a conversational register, but allow the occasional uncontracted form when the sentence calls for slight emphasis or formality."
    ],
    "do_not": [
      "Do NOT adopt an academic or detached third-person voice \u2014 never write as if presenting findings to a committee.",
      "Do NOT use sarcasm, snark, or cutting humor \u2014 the tone is generous and curious, never dismissive of people or ideas.",
      "Do NOT signal uncertainty performatively ('I could be wrong, but\u2026') \u2014 when you hedge, make it a genuine qualification, not a social gesture."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"I know mine does.\"",
      "\"I certainly got a strong dose of it from my father.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern across multiple domains \u2014 show the same principle at work in science, investing, startups, and essays before naming the general rule. Build from concrete instances to abstraction.",
      "Introduce the key distinction or thesis only AFTER the reader has seen enough examples to almost guess it themselves. Let the reader feel they are co-discovering the idea.",
      "Handle counterarguments and limitations by weaving them into the forward motion of the argument \u2014 use 'But' or 'One difficulty here, though' to pivot naturally into the complication, address it, and keep moving. Never devote a separate formal section to objections.",
      "Use analogies that are vivid, concrete, and slightly unexpected to make abstract points tangible: compare intellectual rigidity to eating a dubious submarine sandwich, or intellectual fashion to waves on Jupiter.",
      "Structure the overall argument as progressive deepening: state a simple version of the idea, then complicate it, then decompose it into components, then show how the components interact \u2014 each section peels back another layer.",
      "When presenting a taxonomy or decomposition (e.g., three components of independent-mindedness), introduce each component with a clear label, discuss it, then show how the components relate to each other in a synthesis section."
    ],
    "do_not": [
      "Do NOT present arguments as formal logical chains with premises and conclusions \u2014 the logic should feel like natural thinking, not a proof.",
      "Do NOT dismiss opposing views \u2014 acknowledge them genuinely, sometimes even concede partial validity, before explaining why the main point still holds.",
      "Do NOT rely on data, statistics, or citations as primary evidence \u2014 use thought experiments, personal experience, and illustrative examples instead."
    ],
    "evidence": [
      "\"To be a successful scientist, for example, it's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"The independent-minded thus have a horror of ideologies, which require one to accept a whole collection of beliefs at once, and to treat them as articles of faith. To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"Conventional-minded people don't like to think of themselves as conventional-minded. And in any case, it genuinely feels to them as if they make up their own minds about everything. It's just a coincidence that their beliefs are identical to their peers'.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open most paragraphs with the paragraph's core claim or observation stated plainly \u2014 then spend the rest of the paragraph unpacking, qualifying, or illustrating it.",
      "Close paragraphs by either (a) landing on a pithy concluding sentence that crystallizes the point, or (b) pivoting forward to set up the next paragraph's topic.",
      "Use single-sentence paragraphs as rhetorical punctuation marks \u2014 place them after a buildup to deliver a standalone insight or emotional beat that deserves its own space.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 let the next paragraph pick up naturally where the previous one left off, often by addressing an implication or complication of what was just said.",
      "Within a paragraph, move from the general claim to the specific illustration to the implication \u2014 claim, then example, then 'so what.'",
      "When shifting to a new major section or idea, use a question or a scene-break marker to signal the transition rather than a transition sentence."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore,' 'In addition,' 'Moreover,' or 'On the other hand' \u2014 let the logical connection between paragraphs speak for itself or use 'But' and 'And' at most.",
      "Do NOT bury the main point in the middle of a paragraph \u2014 front-load it so the reader knows immediately what the paragraph is about.",
      "Do NOT write paragraphs that try to cover multiple distinct ideas \u2014 each paragraph should serve one thought."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday analogies to make abstract ideas visceral \u2014 compare intellectual concepts to physical experiences (eating dubious food, sailing into a headwind, wearing the same shirt).",
      "Employ rhetorical questions sparingly but at pivotal moments to re-engage the reader and reframe the direction of the argument: 'Do you want to do the kind of work where you can only win by thinking differently from everyone else?'",
      "Use deliberate repetition of key terms ('independent-minded,' 'conventional-minded,' 'curiosity,' 'fastidiousness') rather than varying with synonyms \u2014 this creates a conceptual vocabulary that accumulates meaning through the essay.",
      "Deploy lists of parallel examples (scientists, investors, founders, essayists) to establish patterns inductively before stating the general principle.",
      "Use direct address and imperatives ('See if you can guess which,' 'Treat it as a puzzle,' 'stop and ask yourself') to convert abstract advice into actionable instructions the reader can mentally rehearse.",
      "Introduce surprising reframings that flip expectations: present what seems like a negative quality as positive ('the desire not to be told what to think is a positive force'), or reveal hidden similarity between seemingly unrelated things (humor and independent-mindedness)."
    ],
    "do_not": [
      "Do NOT use extended or elaborate metaphors that run for multiple sentences \u2014 keep analogies tight and move on.",
      "Do NOT use literary or poetic devices like alliteration, assonance, or chiasmus \u2014 the rhetoric should feel natural and conversational, not crafted.",
      "Do NOT use exclamation marks or hyperbolic intensifiers to create emphasis \u2014 let the content and sentence placement create the emphasis."
    ],
    "evidence": [
      "\"just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance\"",
      "\"you're going to be sailing into a headwind if you try to do original research\"",
      "\"See if you can guess which. The end goal is not to find flaws in the things you're told, but to find the new ideas that had been concealed by the broken ones.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the core premise in plain, accessible terms \u2014 no anecdote, no provocation, no throat-clearing. Begin with the idea itself, as if picking up a conversation already in progress.",
      "Establish the thesis through a cascade of examples in the first few paragraphs: show the pattern in multiple domains before naming it explicitly. The opening should feel like watching someone lay out puzzle pieces.",
      "Close the essay by returning to the personal and practical \u2014 end with advice the reader can act on, phrased as a quiet suggestion rather than a grand conclusion. The final note should feel intimate, not climactic.",
      "Use bracketed footnotes ([1], [2], etc.) placed inline to add tangential observations, caveats, and real-world examples without breaking the main argument's flow. Footnotes are where digressions, humor, and specificity live.",
      "Use horizontal rules or visual breaks (___________) to mark major structural shifts within the essay \u2014 from diagnosis to prescription, or from theory to practical advice.",
      "Format the essay as continuous prose with no headers, no bullet points, no bold text, and no subheadings \u2014 the structure is communicated entirely through paragraph flow and occasional visual breaks."
    ],
    "do_not": [
      "Do NOT open with a question, a quote, a definition, or a dramatic hook \u2014 start with a declarative observation about how the world works.",
      "Do NOT close with a summary of the argument or a grand philosophical statement \u2014 end on a specific, actionable, or personal note that lets the reader carry the idea forward.",
      "Do NOT use formatting elements like headers, bullet points, numbered lists, or bold/italic emphasis within the body of the essay \u2014 the form is pure continuous prose with footnotes."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"[2] When I ask myself what in my life is like high school, the answer is Twitter.\""
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
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause \u2014 rarely more than two layers of subordination.",
      "Default to declarative subject-verb-object structures. Let the clarity of the assertion carry the weight rather than syntactic complexity.",
      "Use compound sentences sparingly, joining two independent clauses with a comma and coordinating conjunction when the second clause provides a consequence or contrast: 'But they're tricky to grow. Which means the difference in outcome between someone who's adept at it and someone who's not is very great.'",
      "Begin sentences with conjunctions ('But', 'And', 'Or', 'So') freely as a way to maintain conversational momentum and signal logical relationships without formal transition phrases.",
      "Deploy a very short declarative sentence immediately after a longer, more complex one to drive home the point \u2014 the short sentence acts as a hammer blow: 'You get no customers, and you go out of business.'",
      "Use sentence fragments starting with conjunctions as standalone emphasis: 'Which means it's not just a bargain to do exceptional work, but a bargain even to try to.'"
    ],
    "do_not": [
      "Do not write sentences with three or more subordinate clauses nested inside each other \u2014 keep clause depth shallow.",
      "Do not use formal transitional adverbs like 'furthermore,' 'moreover,' 'consequently,' or 'nevertheless' to connect sentences.",
      "Do not construct long periodic sentences that delay the main verb \u2014 put the subject and verb early."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a thinker sharing discoveries with an intelligent peer. Use 'I' to anchor personal observations and 'you' to pull the reader into hypothetical scenarios and advice: 'if you're ambitious you definitely should.'",
      "Maintain an authoritative but exploratory tone \u2014 present ideas as hard-won insights delivered with confidence, yet signal when you're still working something out: 'as far as I can tell they reduce to two fundamental causes.'",
      "Express genuine surprise or emotion at your own conclusions to create intimacy: 'I find that sentence startling.' This makes the reader feel they're witnessing live thinking.",
      "Project earned authority through personal experience references ('In my twenties I wanted to be an artist') rather than credentials or citations.",
      "Use contractions selectively \u2014 deploy them in conversational asides and when adopting a casual register, but write out full forms when making authoritative declarations to add weight.",
      "Address the reader directly with 'you' when giving advice or when inviting them to consider a scenario, creating a collegial one-on-one dynamic."
    ],
    "do_not": [
      "Do not adopt a detached academic voice \u2014 never write as if observing from above without personal investment in the ideas.",
      "Do not use self-deprecating humor or false modesty \u2014 the stance is confident curiosity, not diffidence.",
      "Do not hedge with excessive qualifiers like 'I think perhaps maybe' \u2014 when uncertain, express it cleanly with a single hedge."
    ],
    "evidence": [
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"If you're not learning, you're probably not on a path that leads to superlinear returns.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive claim that reframes something the reader thought they understood: 'the returns for performance are superlinear' contradicts the commonly taught 'you get out what you put in.'",
      "Build arguments by decomposition \u2014 take a complex phenomenon and reduce it to a small number of fundamental causes, then explore each cause with concrete examples before recombining them.",
      "Use concrete, varied examples to illustrate abstract principles: bacterial cultures, startups, empires, bicycle riding, Newton. Draw from wildly different domains to show the universality of the pattern.",
      "Introduce counterarguments briefly, then redirect: 'Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world.'",
      "Build toward practical heuristics derived from the theory \u2014 after establishing the abstract framework, extract actionable rules: 'always be learning,' 'seek work that compounds,' 'be driven by curiosity rather than careerism.'",
      "Use the pattern of posing a question, then answering it yourself, to advance the argument: 'Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.'",
      "Acknowledge limitations and edge cases honestly rather than dismissing them: 'The existence of a threshold doesn't guarantee the game will be worth playing. If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.'"
    ],
    "do_not": [
      "Do not rely on formal citations or appeal to authority \u2014 build the case from first principles and examples rather than referencing studies or experts.",
      "Do not present arguments as airtight logical proofs \u2014 maintain the essayistic quality of exploration, where the reader follows your thinking process.",
      "Do not leave abstract claims ungrounded \u2014 every theoretical point must be followed quickly by a concrete example or analogy."
    ],
    "evidence": [
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"The existence of a threshold doesn't guarantee the game will be worth playing. If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\"",
      "\"In the startup world, the name for this principle is 'do things that don't scale.'\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 the first sentence almost always states what the paragraph is about, functioning as a clear topic sentence.",
      "Use single-sentence paragraphs as punctuation marks in the argument \u2014 isolate a sentence when it delivers a punchline, a reversal, or a crucial standalone insight: 'You get no customers, and you go out of business.'",
      "Connect paragraphs through logical continuation rather than explicit transition words. The last sentence of one paragraph sets up the first sentence of the next through implication or contrast.",
      "Within paragraphs, sequence ideas as: claim \u2192 example/evidence \u2192 implication or restatement. Move from abstract to concrete within each paragraph.",
      "Use short paragraphs to create breathing room between dense analytical passages \u2014 alternate between substantive multi-sentence paragraphs and lighter, punchier ones.",
      "When transitioning between major sections of the argument, pose a question as a paragraph opener to reset the reader's attention: 'What about step functions? Are there also useful heuristics of the form \"seek thresholds\"?'"
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'In addition,' 'On the other hand,' or 'As a result' at the start of paragraphs \u2014 let the logical connection be implicit.",
      "Do not bury the main point mid-paragraph \u2014 lead with it.",
      "Do not write paragraphs that cover multiple unrelated points \u2014 each paragraph should advance exactly one idea or one step in the argument."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The most obvious case of superlinear returns is when you're working on something that grows exponentially.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary explanatory device \u2014 connect an abstract principle to a vivid, unexpected concrete domain (bacterial cultures to illustrate exponential growth, Russian roulette to illustrate thresholds).",
      "Deploy rhetorical questions to transition between sections and to make the reader feel like a co-explorer: 'Are there general rules for finding situations with superlinear returns?'",
      "Use reframing as a persuasive technique \u2014 take a familiar concept and show it from a new angle: 'not to equate work with a job.'",
      "Employ lists when cataloguing examples, keeping them compact and unpunctuated for momentum: 'fame, power, military victories, knowledge, and even benefit to humanity.'",
      "Use parallel structure in pairs and triplets for emphasis, especially when building toward a conclusion: 'the only way to get the resources you needed, the only way to have colleagues, and the only way to get distribution.'",
      "Deploy callback references \u2014 refer back to earlier points or phrasings to create structural cohesion: the 'you get out what you put in' phrase from the opening returns later when discussing YC.",
      "Use the device of introducing a familiar saying or conventional wisdom, then subverting or refining it."
    ],
    "do_not": [
      "Do not use extended metaphors that run for multiple paragraphs \u2014 keep analogies tight, usually one or two sentences.",
      "Do not use literary or poetic devices like alliteration, assonance, or ornate figurative language \u2014 the prose is intellectual, not lyrical.",
      "Do not use exclamation marks or emphatic punctuation for rhetorical effect \u2014 let the ideas carry the force."
    ],
    "evidence": [
      "\"If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\"",
      "\"the only way to get the resources you needed, the only way to have colleagues, and the only way to get distribution.\"",
      "\"These look smooth from a distance, but up close they're full of gaps.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a personal revelation that immediately establishes the central thesis \u2014 frame it as a misunderstanding you once had that the essay will correct: 'One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.'",
      "Follow the opening with a vivid illustration of the wrong mental model (teachers saying 'you get out what you put in') to create tension between the familiar and the true.",
      "Structure the essay as progressive deepening: introduce the core concept, decompose it into components, explore each with examples, derive practical implications, then zoom out to broader significance.",
      "Close by circling back to the essay's core theme but at a higher level \u2014 end with forward-looking speculation about how the territory is expanding, or with the most profound implication.",
      "End the final paragraph on a sentence that feels quietly powerful rather than summarizing \u2014 leave the reader with a thought that continues to expand: 'if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.'",
      "Use numbered endnotes in brackets [1], [2] etc. for tangential thoughts, caveats, and personal asides that would interrupt the main flow. These endnotes have a more casual, digressive tone than the main text.",
      "Use formatting minimally \u2014 no headers, no bold, no bullet points within the main essay body. Let the prose structure itself through paragraph breaks alone.",
      "Include a brief acknowledgments line at the very end thanking draft readers by name."
    ],
    "do_not": [
      "Do not open with a question, a quotation from someone else, or scene-setting \u2014 open with a direct personal statement of the essay's central insight.",
      "Do not close with a neat summary, a call to action, or a pithy one-liner \u2014 end with an expansive thought that leaves room for the reader to keep thinking.",
      "Do not use section headers or subheadings to organize the essay \u2014 the argument should flow as continuous prose with natural paragraph breaks as the only structural device."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
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
      "Build the default sentence as a single independent clause with one or two modifying phrases \u2014 keep the core subject-verb-object visible and uncluttered.",
      "When extending a sentence, chain clauses with coordinating conjunctions ('and', 'but', 'or') rather than nesting subordinate clauses deeply; let the sentence grow horizontally, not vertically.",
      "Use compound structures to pile up parallel items in a list-like rhythm within a single sentence: 'you need great natural ability and to have practiced a lot and to be trying very hard.'",
      "Place the key claim or reversal at the very end of a sentence, so the sentence builds toward its payoff: 'but no one ever worked harder.'",
      "Interrupt the prevailing mid-length rhythm with a very short declarative sentence to deliver a verdict or punchline \u2014 often a standalone paragraph: 'There isn't.'",
      "Open sentences with short orienting phrases or clauses ('Of course,' 'Strangely enough,' 'By center, though,') to create a conversational cadence before the main assertion.",
      "When presenting a complex idea, split it across two or three sentences rather than cramming it into one \u2014 let each sentence handle one logical step."
    ],
    "do_not": [
      "Do NOT write ornate, multi-layered sentences with nested parentheticals, semicolons joining three or more clauses, or elaborate subordination \u2014 the style is additive and linear, not recursive.",
      "Do NOT maintain a monotonous sentence length \u2014 the rhythm depends on contrast between a rolling mid-length default and sharp short sentences that punctuate key moments.",
      "Do NOT front-load sentences with long dependent clauses before the subject; get to the subject quickly."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"you need great natural ability and to have practiced a lot and to be trying very hard.\"",
      "\"Certainly no one ever made it look easier. But no one ever worked harder.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a thinking companion \u2014 someone reasoning through a problem alongside the reader, not lecturing from above. Use 'I' to share personal experience and 'you' to pull the reader into the argument.",
      "Maintain an earnest, direct tone that treats the subject seriously without becoming academic or stiff. The stance is that of a smart friend explaining something they've thought about deeply.",
      "Signal confidence through plain assertion ('I know the answer to that question') rather than through hedging qualifiers or credentialing. When uncertain, say so plainly: 'I can't be sure I'm getting anywhere.'",
      "Use conversational asides and self-corrections to create intimacy: 'Sounds a bit extreme, you think.' Address the reader's likely objections before they form.",
      "Shift between personal anecdote (first person), direct instruction (second person), and general observation (third person/impersonal) to keep the register dynamic \u2014 personal stories ground claims, 'you' sentences make them actionable.",
      "Use contractions sparingly and selectively \u2014 default to uncontracted forms for a slightly elevated register, but contract naturally in conversational passages to avoid sounding formal.",
      "Avoid all exclamatory emphasis. Express strong feelings through content and sentence placement, not punctuation or intensifiers."
    ],
    "do_not": [
      "Do NOT adopt an academic or detached register \u2014 no jargon, no passive constructions used to sound objective, no 'one might argue' formality.",
      "Do NOT be self-deprecating or ironic about the subject matter; the tone is genuinely earnest. Humor, when present, is dry and observational, never sarcastic.",
      "Do NOT use exclamation marks or gushing enthusiasm. The voice is calm and measured even when making bold claims."
    ],
    "evidence": [
      "\"Now I know the answer to that question.\"",
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\"",
      "\"I can't be sure I'm getting anywhere when I'm working hard, but I can be sure I'm getting nowhere when I'm not, and it feels awful.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a seemingly simple or obvious observation, then immediately complicate it \u2014 show that the obvious thing is actually subtle or that the author's understanding has evolved: 'It might not seem there's much to learn about how to work hard.'",
      "Build arguments by progressive refinement: state a principle, then qualify it, then qualify the qualification. Each pass adds nuance without contradicting the prior step.",
      "Introduce claims as personal realizations ('One thing I know,' 'What I've learned') rather than as universal truths. Let the reader generalize from the author's experience.",
      "Use named examples from real people (Gates, Messi, Wodehouse, Hardy) to ground abstract claims. Prefer brief, vivid examples with direct quotes over extended case studies.",
      "Handle counterarguments preemptively by raising them yourself in a conversational way ('That seems so obvious, and yet in practice we find it slightly hard to grasp') and then resolving them.",
      "Use analogies and metaphors sparingly but precisely, drawing them from everyday life: 'like a dog circling while it decides exactly where to lie down.'",
      "Progress through the argument by asking a question, answering it, then letting the answer raise a new question. The essay moves forward through a chain of questions and answers.",
      "Hedge with plain language ('I suspect,' 'I think,' 'probably') rather than academic qualifiers ('it could be argued that'). Hedges signal genuine uncertainty, not politeness."
    ],
    "do_not": [
      "Do NOT structure arguments as formal logic with numbered premises and conclusions \u2014 the flow should feel like exploration and discovery, not proof.",
      "Do NOT dismiss counterarguments; acknowledge them honestly and show why the main claim still holds despite them.",
      "Do NOT rely on abstract reasoning alone \u2014 every major claim should be grounded in a concrete example, personal experience, or vivid image.",
      "Do NOT introduce evidence through formal citation style; weave examples into the prose conversationally."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard. Anyone who's been to school knows what it entails, even if they chose not to do it.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\"",
      "\"like a dog circling while it decides exactly where to lie down\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear claim or observation that sets the paragraph's direction \u2014 the first sentence should be a mini-thesis the rest of the paragraph develops.",
      "Use standalone single-sentence paragraphs to deliver punchlines, verdicts, or pivots. These function as rhetorical punctuation between longer paragraphs: 'There isn't.' or 'Perhaps something changes at adolescence. That would make sense.'",
      "Close paragraphs by pointing forward \u2014 end with an implication, a question, or a statement that creates momentum into the next paragraph: 'You need both.'",
      "Sequence ideas within a paragraph as: claim \u2192 complication or qualification \u2192 concrete example or evidence \u2192 restatement with added nuance.",
      "Transition between paragraphs implicitly by having the next paragraph's opening respond to or build on the previous paragraph's closing thought. Avoid explicit transition words like 'furthermore,' 'moreover,' or 'additionally.'",
      "Use paragraph breaks to signal shifts in the level of abstraction \u2014 move from concrete example to general principle (or vice versa) at paragraph boundaries."
    ],
    "do_not": [
      "Do NOT use formulaic transition phrases ('In addition,' 'Furthermore,' 'On the other hand') \u2014 transitions should be organic, often achieved by the logical connection between the last sentence of one paragraph and the first of the next.",
      "Do NOT write paragraphs that merely list examples without a governing claim \u2014 every paragraph should make a point, not just present evidence.",
      "Do NOT end paragraphs with trailing qualifications that dilute the point; end on the strongest or most forward-looking statement."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"Perhaps something changes at adolescence. That would make sense.\"",
      "\"You need both.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions to voice the reader's probable objection or curiosity, then answer them immediately: 'Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question.'",
      "Deploy parallel structure when presenting components of an idea, especially in threes: 'natural ability, practice, and effort.'",
      "Use antithesis to sharpen contrasts \u2014 place opposing ideas in structurally similar phrases: 'you have to notice when you're being lazy, but also when you're working too hard.'",
      "Quote other people directly and at length when their words are more vivid or authoritative than paraphrase would be. Let extended quotes do heavy argumentative lifting.",
      "Use everyday, concrete analogies rather than literary or scientific ones: a dog circling before lying down, a Spanish Flu victim fighting their own immune system, a lemon in the garden of literature (quoting Wodehouse).",
      "Address the reader directly with imperatives when giving actionable advice: 'Cultivate a sensitivity,' 'get that idea out of your head.'",
      "Use deliberate word repetition rather than synonym variation to create thematic cohesion \u2014 repeat key terms ('work,' 'hard,' 'real work,' 'center') throughout to build cumulative force."
    ],
    "do_not": [
      "Do NOT use elaborate extended metaphors or literary allusions that call attention to themselves \u2014 figurative language should be brief, clear, and in service of the argument.",
      "Do NOT use exclamatory sentences or emphatic punctuation for persuasive force \u2014 let the logic and plain statement carry the weight.",
      "Do NOT vary terminology for its own sake; if the same word is the right word, repeat it rather than reaching for a synonym."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question.\"",
      "\"you have to notice when you're being lazy, but also when you're working too hard\"",
      "\"like a dog circling while it decides exactly where to lie down\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a deceptively simple, even self-undermining statement that sets up the central tension: begin by appearing to concede the topic is obvious, then spend the essay showing it isn't.",
      "The first sentence should be short, conversational, and slightly provocative \u2014 it should make the reader think 'well, obviously' and then be drawn into discovering why it's not obvious.",
      "Close the essay by zooming out to a synthesizing statement that reframes the entire discussion as a system or network. End on a note of conditional optimism: 'if you do X, then Y will follow.'",
      "Use a notes/footnotes section at the end for tangential points, qualifications, and asides that would interrupt the main argument's flow. Number them with bracketed references in the text.",
      "Within the footnotes, maintain the same conversational voice \u2014 they are not dry academic notes but miniature essays in themselves.",
      "Use em dashes and parentheticals sparingly. Prefer commas and sentence breaks for asides. Use parentheticals only for genuinely parenthetical clarifications.",
      "Format as flowing prose with no headers, subheads, or bullet points in the main text. The only structural markers are paragraph breaks and footnote numbers."
    ],
    "do_not": [
      "Do NOT open with a grand declaration, a definition, or a dramatic anecdote \u2014 the opening should be understated and conversational.",
      "Do NOT close with a neat summary that restates all points \u2014 the ending should feel like the culmination of a thought process, not a recap.",
      "Do NOT use headers, bullet points, bold text, or other visual formatting in the body \u2014 the essay is a single continuous stream of prose, organized only by paragraph breaks."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\"",
      "\"But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\"",
      "\"[1] In 'The Bus Ticket Theory of Genius' I said the three ingredients in great work were natural ability, determination, and interest.\""
    ]
  }
}
```

### sample-4.txt (3382 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3382,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a clear subject-verb-object core, then extend with one or two subordinate clauses or prepositional phrases when elaboration is needed \u2014 the default sentence is a clean declarative with optional trailing qualifiers.",
      "Chain clauses using coordinating conjunctions (and, but, or) to create a conversational, additive rhythm that mimics thinking-out-loud \u2014 prefer 'and' and 'but' as the primary connective tissue between ideas within sentences.",
      "Use compound-complex sentences when presenting cause-and-effect reasoning or when a claim needs immediate qualification, placing the qualifier after the main assertion: 'X is true, but Y' or 'X happens because Y, and Z.'",
      "Deploy parallel structure when listing related actions or ideas, often in groups of two or three: 'recruiting new users and helping existing ones improve their listings.'",
      "Vary sentence rhythm by following a longer explanatory sentence with a short declarative that lands the point \u2014 the short sentence serves as punctuation for the argument, not decoration."
    ],
    "do_not": [
      "Do not write ornate, multiply-embedded sentences with nested relative clauses \u2014 keep the dependency depth shallow even when sentences are long.",
      "Do not use participial or absolute phrases as sentence openers as a habit; start with the subject or a simple adverbial.",
      "Do not maintain a monotonous sentence length \u2014 always pair exposition with a crisp follow-up that resets the tempo."
    ],
    "evidence": [
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"That would be a great problem to have. See if you can make it happen.\"",
      "\"Who knew?\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the position of an experienced mentor speaking directly and frankly to a less experienced audience \u2014 collegial but authoritative, like a senior colleague giving advice over coffee.",
      "Use first-person 'I' and 'we' to ground claims in personal experience and shared institutional knowledge (e.g., 'At YC we use the term\u2026', 'I've seen it happen') \u2014 this is the source of authority, not credentials or citations.",
      "Address the reader with 'you' frequently and naturally, as if in direct conversation \u2014 create the sense of a one-on-one coaching session.",
      "Signal confidence through plain, unhedged declaratives for core claims ('Startups take off because the founders make them take off') but use casual hedges ('I think', 'usually', 'probably') for secondary observations to avoid sounding dogmatic.",
      "Maintain a warm but no-nonsense tone \u2014 be encouraging about what's possible while being blunt about what founders get wrong.",
      "Deploy dry humor and mild irreverence sparingly, often through unexpected analogies or understated observations, never through jokes or wordplay."
    ],
    "do_not": [
      "Do not adopt an academic or clinical distance \u2014 never write as a detached observer analyzing startups from the outside.",
      "Do not use corporate jargon, buzzwords, or management-speak ('leverage', 'synergize', 'value proposition') \u2014 prefer plain, everyday language.",
      "Do not be sycophantic or overly encouraging \u2014 the tone should feel honest, even when the truth is uncomfortable."
    ],
    "evidence": [
      "\"I often have to encourage founders who don't see the full potential of what they're building.\"",
      "\"We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly, then spend the entire piece building the case through accumulated examples \u2014 the argument is inductive, moving from specific stories to general principles.",
      "Use real-world case studies as the primary form of evidence \u2014 name specific companies (Stripe, Airbnb, Facebook, Pebble), specific founders, and specific actions they took. Concreteness is the engine of persuasion.",
      "Anticipate the reader's objections and address them directly, often by framing the objection as a common mistake founders make: 'The other reason founders ignore this path is\u2026' or 'They unconsciously judge larval startups by the standards of established ones.'",
      "Build arguments through escalation \u2014 introduce a principle, illustrate it with one example, then push it further with a more extreme example, then articulate why the pattern holds.",
      "Use analogies to make abstract principles visceral and memorable: cranking a car engine, keeping a fire contained, projectiles vs. powered aircraft.",
      "Return to the central thesis periodically to tie diverse examples back to the core argument \u2014 the logic is recursive, spiraling outward through new territory but always returning to the center."
    ],
    "do_not": [
      "Do not present arguments as formal logical proofs with premises and conclusions \u2014 the structure should feel conversational and exploratory, not deductive.",
      "Do not rely on statistics, research citations, or appeals to authority \u2014 the evidence base is personal observation and named examples.",
      "Do not dismiss counterarguments \u2014 acknowledge them genuinely, then explain why they're outweighed or misconceived."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or observation, then immediately support it with a specific example or elaboration \u2014 the topic sentence pattern dominates but feels natural rather than formulaic.",
      "Use single-sentence paragraphs to land key insights or pivotal claims with maximum emphasis \u2014 these function as rhetorical punctuation marks between longer argumentative passages.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the next paragraph picks up where the previous one left off, or introduces a new facet of the same theme.",
      "Within longer paragraphs, sequence ideas as: claim \u2192 concrete example \u2192 implication or lesson drawn. The movement is always from assertion to evidence to meaning.",
      "Use section headers (single bolded words like 'Recruit', 'Fragile', 'Delight', 'Fire') to signal major topic shifts, letting paragraphs within sections flow without heavy transitional apparatus.",
      "Close paragraphs with a sentence that either crystallizes the point or pivots toward the next idea \u2014 avoid trailing off or leaving ideas half-finished."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore', 'Moreover', 'In addition', 'On the other hand') to connect paragraphs \u2014 the logical relationship should be self-evident from the content.",
      "Do not write paragraphs that wander through multiple unrelated points \u2014 each paragraph should serve one idea, even if briefly.",
      "Do not bury the point at the end of a long paragraph \u2014 lead with the claim, then support it."
    ],
    "evidence": [
      "\"Fragile Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.\"",
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, concrete analogies drawn from everyday physical experience to make abstract business concepts tangible \u2014 car cranks, contained fires, newborn babies, projectiles vs. aircraft. Each major section should have at least one anchor analogy.",
      "Employ direct address and imperatives to create urgency and engagement: 'See if you can make it happen', 'Think of some successful startups.'",
      "Use rhetorical questions to frame new sections or to voice the reader's likely objection before answering it: 'Why do we have to teach startups this?' 'How do you find users to recruit manually?'",
      "Deploy deliberate word reuse rather than synonym variation for key concepts \u2014 repeat 'users', 'founders', 'scale', 'unscalable' without flinching. The repetition reinforces the conceptual framework.",
      "Use named examples as a form of argument-by-authority \u2014 dropping specific founder names and company names makes abstract advice concrete and credible.",
      "Employ antithesis to sharpen distinctions: 'not the product that should be insanely great, but the experience of being your user', 'projectiles rather than powered aircraft.'"
    ],
    "do_not": [
      "Do not use literary or poetic devices (alliteration, assonance, elaborate metaphor chains) \u2014 the rhetoric should feel plain-spoken and intellectual, not literary.",
      "Do not use exclamation marks for emphasis \u2014 let the content create its own force.",
      "Do not deploy sarcasm or mockery toward the reader \u2014 humor should be directed at common mistakes or at the author's own past experiences."
    ],
    "evidence": [
      "\"They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"It's not the product that should be insanely great, but the experience of being your user.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a direct statement of the central thesis in plain language \u2014 no anecdote, no question, no throat-clearing. The first sentence should be the essay's core idea, stated as if it's common knowledge being formally articulated for the first time.",
      "Follow the opening thesis immediately with the common misconception it corrects \u2014 frame the essay as corrective advice from the start.",
      "Structure the body using bolded single-word section headers ('Recruit', 'Fragile', 'Delight', 'Fire', 'Consult', 'Manual', 'Big', 'Vector') that function as thematic signposts \u2014 each section explores one facet of the central thesis.",
      "Close by reframing the thesis at a higher level of abstraction \u2014 the ending should make the reader see the opening claim in a new, richer way. End with a forward-looking or generative reframe, not a summary.",
      "Include numbered endnotes for tangential observations, additional context, caveats, and credited contributions \u2014 keep the main text clean and the footnotes conversational.",
      "Use parenthetical asides and em dashes for mid-sentence qualifications and digressions that add texture without breaking the argument's flow.",
      "End with an acknowledgments line thanking readers of drafts \u2014 this is a genre convention of the author's essay form."
    ],
    "do_not": [
      "Do not open with a question, anecdote, or scene-setting \u2014 the essay should begin in the middle of the argument, as if the author has been thinking about this and is now ready to state what they've concluded.",
      "Do not close with a neat summary or numbered takeaways \u2014 the ending should feel like the argument has reached its natural, slightly open-ended conclusion.",
      "Do not use formal academic formatting (abstract, numbered sections, bibliography) \u2014 the essay should feel like a polished but informal piece of thinking shared publicly."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\""
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
      "Build sentences around a single clear claim or observation, then optionally extend with one subordinate clause or qualifying phrase \u2014 avoid stacking multiple dependent clauses.",
      "Use compound sentences sparingly, linking two independent clauses with 'and' or 'but' only when the second clause delivers a surprise, reversal, or punchline to the first.",
      "Follow a longer, more complex sentence with a short declarative that lands as a punch \u2014 the short sentence should feel like a verdict or conclusion after the setup.",
      "Open sentences with the subject or a simple adverbial phrase; avoid elaborate front-loaded participial or absolute phrases.",
      "When chaining ideas across multiple sentences, use implicit logical progression (claim \u2192 evidence \u2192 implication) rather than explicit connective tissue \u2014 let the reader infer the 'therefore' or 'because'.",
      "Deploy rhetorical questions as standalone sentences that break the rhythm and redirect the reader's attention, then answer them in the next sentence or paragraph."
    ],
    "do_not": [
      "Do NOT write densely nested sentences with multiple levels of subordination \u2014 if you need a relative clause inside a conditional inside a concessive, break it into separate sentences.",
      "Do NOT pad sentences with filler phrases like 'it is important to note that' or 'what is particularly interesting is' \u2014 get to the point directly.",
      "Do NOT maintain a monotonous rhythm of same-length sentences \u2014 always alternate between longer exploratory sentences and shorter assertive ones."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"Great work tends to grow out of ideas that others have overlooked, and no idea is so overlooked as one that's unthinkable.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as the default voice, positioning yourself as a curious thinker sharing observations rather than an authority issuing pronouncements \u2014 use 'I think', 'I suspect', 'I want to' to signal personal investment.",
      "Shift to second person ('you') when drawing the reader into a thought experiment or asking them to examine their own beliefs \u2014 this creates a collaborative, Socratic feel.",
      "Use 'we' to establish solidarity with the reader, especially when acknowledging shared human limitations ('we believe things that will later seem ridiculous').",
      "Maintain a tone that is conversational and collegial \u2014 write as if speaking to a smart friend over coffee, not lecturing a classroom.",
      "Signal confidence through directness and simplicity rather than through credentials or citations \u2014 state claims plainly and let the argument carry the weight.",
      "Express uncertainty with specific hedges like 'I suspect', 'it seems', 'odds are' \u2014 these convey genuine intellectual humility rather than weak commitment.",
      "Use contractions naturally in conversational moments but drop them when making a more formal or emphatic point \u2014 let the register shift slightly to signal gravity.",
      "Inject dry, understated humor through unexpected analogies or deadpan observations rather than through jokes or wit-signaling."
    ],
    "do_not": [
      "Do NOT adopt an academic or detached register \u2014 avoid impersonal constructions like 'it can be observed that' or 'one might argue'.",
      "Do NOT be self-deprecating or overly humble \u2014 acknowledge limitations matter-of-factly without apologizing for having opinions.",
      "Do NOT use sarcasm or snark \u2014 the humor should be warm and observational, not cutting or dismissive."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"Odds are you just think what you're told.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis early and plainly, then spend the essay developing multiple independent methods or angles for approaching it \u2014 treat the essay as an exploration with multiple entry points rather than a single linear proof.",
      "Structure arguments as a series of practical heuristics or 'recipes' \u2014 frame intellectual points as actionable techniques the reader can apply.",
      "Introduce claims through bold, simple assertions, then immediately support them with a concrete historical example or vivid analogy.",
      "Use historical examples as the primary evidence type \u2014 draw from well-known figures (Galileo, Darwin, Copernicus, Milton) to ground abstract arguments in recognizable narrative.",
      "Handle counterarguments by preemptively raising them ('Some would ask, why would one want to do this?') and then answering directly \u2014 acknowledge the objection's force but don't let it derail the main argument.",
      "Build arguments through accumulation: present multiple independent lines of reasoning that all converge on the same conclusion, making the case feel overdetermined rather than fragile.",
      "Use thought experiments and hypothetical scenarios ('Suppose in the future there is a movement to ban the color yellow') to make abstract points tangible and to test ideas in a safe imaginative space.",
      "Move from the abstract to the concrete regularly \u2014 never let more than two paragraphs of pure abstraction pass without grounding the idea in a specific example."
    ],
    "do_not": [
      "Do NOT rely on formal logical apparatus (premises, therefore, QED) \u2014 the logic should be visible in the structure of examples and analogies, not in explicit syllogisms.",
      "Do NOT dismiss counterarguments \u2014 take them seriously enough to address directly, even if briefly.",
      "Do NOT cite statistics, studies, or data as primary evidence \u2014 when research is mentioned, use it as an illustrative anecdote rather than as proof."
    ],
    "evidence": [
      "\"But I want to do more than just shock everyone with the heresy du jour. I want to find general recipes for discovering what you can't say, in any era.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently to deliver key insights, reversals, or punchlines \u2014 these standalone sentences should feel like the essay pausing to let an important point land.",
      "Open paragraphs with the main claim or observation, then develop it with examples or elaboration \u2014 front-load the point rather than building up to it.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the reader feel the progression from one idea to the next through thematic proximity.",
      "When transitioning to a new section or method, use a rhetorical question as a bridge paragraph to redirect the reader's attention.",
      "Within longer paragraphs, sequence ideas as: claim \u2192 concrete example \u2192 implication or twist \u2014 move from assertion to evidence to so-what.",
      "Use section headers (bold or capitalized phrases) to signal major shifts in the argument's direction, giving the reader a roadmap through a long essay.",
      "Close paragraphs on the most striking or provocative note \u2014 end with the insight, not with qualifications or caveats."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'furthermore', 'moreover', 'in addition', 'consequently' \u2014 these feel academic and over-signposted.",
      "Do NOT end paragraphs with weak trailing-off qualifications \u2014 if a caveat is needed, put it in the middle and end on the strong note.",
      "Do NOT write paragraphs that merely summarize what came before \u2014 every paragraph must advance the argument or introduce new material."
    ],
    "evidence": [
      "\"But they're much more dangerous.\"",
      "\"Is our time any different?\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map abstract concepts onto everyday, tangible experiences \u2014 fashion/clothing as the primary metaphor for moral norms, time machines for perspective-taking, maps for belief systems.",
      "Deploy rhetorical questions at structural turning points to redirect the essay and engage the reader's active thinking \u2014 use them to open new sections or introduce new angles of inquiry.",
      "Use parallel structure to create memorable, aphoristic formulations that compress complex ideas into balanced phrases.",
      "Employ deliberate repetition of key terms ('can't say', 'heresy', 'taboo', 'fashion') across the essay to create thematic cohesion \u2014 treat these as recurring motifs rather than varying synonyms.",
      "Use lists sparingly and only when presenting multiple parallel methods or examples \u2014 present them as flowing prose with semicolons or as a series of questions, not as bullet points.",
      "Deploy the 'X stopped being the X of Xs' or similar self-referential formulations for deadpan humor.",
      "Use imperative direct address ('Look for prigs', 'Take a label', 'Ask why') to make the reader an active participant in the investigation."
    ],
    "do_not": [
      "Do NOT use literary or poetic metaphors \u2014 keep analogies grounded in everyday objects, common historical knowledge, or pop culture.",
      "Do NOT use exclamation marks or emphatic punctuation to signal importance \u2014 let the content and sentence structure create emphasis.",
      "Do NOT use ornate figurative language or extended purple passages \u2014 the style is plain and clear, with metaphors that illuminate rather than decorate."
    ],
    "evidence": [
      "\"Cadillac stopped being the Cadillac of cars in about 1970.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"The age of consent fluctuates like hemlines.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical or prefatory note that frames the essay's scope and stakes before the essay proper begins \u2014 set expectations directly.",
      "Begin the essay body with a relatable, everyday observation or question that the reader can immediately engage with, then quickly pivot to the deeper, more provocative thesis.",
      "Use section headers as structural scaffolding for long essays \u2014 each section should feel like a self-contained mini-essay with its own angle on the central question, connected by the overarching investigation.",
      "Close sections and the essay itself with practical advice or a concrete recommendation \u2014 end on what to *do* with the ideas, not just what to *think*.",
      "Use footnote references (bracketed numbers) to acknowledge tangents, sources, and caveats without cluttering the main text \u2014 keep the prose clean and move qualifying details to notes.",
      "Format the essay as a sequence of named sections (bold headers like 'The Conformist Test', 'Heresy', 'Mechanism', 'Pensieri Stretti') that function as chapter titles in a connected argument.",
      "Use em dashes sparingly and prefer parenthetical asides enclosed in actual parentheses or set off with commas.",
      "Use foreign phrases and literary references (Italian mottos, Arthur Miller, Milton) to add cultural texture, but always immediately explain or translate them for accessibility."
    ],
    "do_not": [
      "Do NOT open with a generic hook or attention-grabber \u2014 start with substance, not spectacle.",
      "Do NOT close with a tidy summary that restates all the points \u2014 end with a forward-looking observation or a final practical insight that sends the reader off thinking.",
      "Do NOT use bullet points, numbered lists, or other heavy formatting within the prose \u2014 maintain a flowing, essayistic texture throughout."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them.)\"",
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"Best of all, probably, is humor. Zealots, whatever their cause, invariably lack a sense of humor.\""
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual precision, thinking aloud with the reader as a curious peer",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim with a subject-verb-object core, then optionally extend with one qualifying or illustrating clause \u2014 the default shape is 'assertion + refinement'",
      "Chain clauses with 'and,' 'but,' and 'because' as the primary connective tissue \u2014 prefer these plain conjunctions over formal alternatives like 'moreover,' 'nevertheless,' or 'consequently'",
      "Begin sentences with conjunctions ('But', 'And', 'So') freely to maintain conversational momentum and signal logical relationships without formal transition apparatus",
      "When introducing a pivotal claim, use a stripped-down declarative with no subordinate clauses \u2014 let the idea land unadorned before elaborating in subsequent sentences",
      "Let longer sentences do the explaining and shorter sentences do the concluding \u2014 place the short declarative at the END of a sequence to punctuate the point",
      "Deploy parallel structure when comparing or listing related ideas: repeat the same syntactic frame with varied content",
      "Open sentences with short orienting phrases ('Of course,' 'Strangely enough,' 'By center, though,') to create a conversational cadence before the main assertion",
      "When presenting a complex idea, split it across two or three sentences rather than cramming it into one \u2014 let each sentence handle one logical step"
    ],
    "do_not": [
      "Do NOT write sentences with three or more nested subordinate clauses \u2014 keep clause depth shallow even when sentences are long",
      "Do NOT use periodic sentence structures where the main point is withheld until the end of a long sentence \u2014 lead with the point, then qualify",
      "Do NOT use inverted syntax or unusual word order for rhetorical effect \u2014 keep subject-verb-object as the backbone",
      "Do NOT use formal transitional adverbs like 'furthermore,' 'moreover,' 'consequently,' or 'nevertheless' to connect sentences",
      "Do NOT pad sentences with filler phrases like 'it is important to note that' or 'what is particularly interesting is'"
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a thoughtful peer sharing hard-won insight \u2014 not lecturing from above, but thinking aloud with the reader, like a smart friend explaining something they've thought about deeply",
      "Use first person ('I') for personal experience and observations, second person ('you') when making the idea applicable to the reader's life, and 'we' to establish solidarity \u2014 shift fluidly between them within a single paragraph",
      "Project quiet confidence: state claims as plain facts without hedging the core assertion, but use hedges ('I think,' 'I suspect,' 'it seems') specifically when genuinely uncertain or when softening a bold inference",
      "Maintain an earnest, intellectually serious tone \u2014 treat the reader as someone who cares about getting things right and can handle nuance without needing it dumbed down",
      "Express warmth through directness and personal disclosure rather than effusive language \u2014 say 'I really want to know' rather than 'I find it absolutely fascinating'",
      "Use contractions naturally in flowing prose to maintain a conversational register, but allow uncontracted forms when the sentence calls for slight emphasis or formality",
      "Inject dry, understated humor through unexpected analogies or deadpan observations rather than through jokes or wordplay",
      "Ground authority in personal experience and observed patterns ('I've seen it happen,' 'In my twenties I wanted to be an artist') rather than credentials or citations"
    ],
    "do_not": [
      "Do NOT adopt an academic or detached third-person voice \u2014 never write as if presenting findings to a committee or observing from above",
      "Do NOT use sarcasm, snark, or cutting humor \u2014 the tone is generous and curious, never dismissive of people or ideas",
      "Do NOT signal uncertainty performatively ('I could be wrong, but\u2026') \u2014 when you hedge, make it a genuine qualification, not a social gesture",
      "Do NOT use corporate jargon, buzzwords, or management-speak \u2014 prefer plain, everyday language",
      "Do NOT use exclamation marks or gushing enthusiasm \u2014 the voice is calm and measured even when making bold claims"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern across multiple domains \u2014 show the same principle at work in science, investing, startups, and essays before naming the general rule, building from concrete instances to abstraction",
      "Introduce the key distinction or thesis only AFTER the reader has seen enough examples to almost guess it themselves \u2014 let the reader feel they are co-discovering the idea",
      "Build arguments by progressive refinement: state a principle, then qualify it, then qualify the qualification \u2014 each pass adds nuance without contradicting the prior step",
      "Use real-world case studies and named examples as the primary form of evidence \u2014 name specific people, companies, and actions rather than citing statistics or studies",
      "Handle counterarguments by weaving them into the forward motion \u2014 use 'But' or 'One difficulty here' to pivot naturally into the complication, address it, and keep moving, never devoting a separate formal section to objections",
      "Use analogies that are vivid, concrete, and drawn from everyday physical experience to make abstract points tangible \u2014 compare intellectual concepts to eating dubious food, cranking a car engine, or a dog circling before lying down",
      "Structure the overall argument as progressive deepening: state a simple version, complicate it, decompose it into components, then show how the components interact",
      "Move from the abstract to the concrete regularly \u2014 never let more than a couple of paragraphs of pure abstraction pass without grounding the idea in a specific example",
      "Derive practical heuristics from the theory \u2014 after establishing the framework, extract actionable rules the reader can apply"
    ],
    "do_not": [
      "Do NOT present arguments as formal logical chains with premises and conclusions \u2014 the logic should feel like natural thinking, not a proof",
      "Do NOT dismiss opposing views \u2014 acknowledge them genuinely, sometimes even concede partial validity, before explaining why the main point still holds",
      "Do NOT rely on data, statistics, or citations as primary evidence \u2014 use thought experiments, personal experience, and illustrative examples instead",
      "Do NOT leave abstract claims ungrounded \u2014 every theoretical point must be followed quickly by a concrete example or analogy"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open most paragraphs with the paragraph's core claim or observation stated plainly \u2014 the first sentence should function as a mini-thesis the rest of the paragraph develops",
      "Within a paragraph, move from the general claim to the specific illustration to the implication \u2014 claim, then example, then 'so what'",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 let the next paragraph pick up naturally where the previous one left off, often by addressing an implication or complication of what was just said",
      "Close paragraphs by either landing on a pithy concluding sentence that crystallizes the point, or pivoting forward to set up the next paragraph's topic",
      "When shifting to a new major section or idea, use a question or a scene-break to signal the transition rather than a transition sentence",
      "Each paragraph should serve one thought \u2014 do not try to cover multiple distinct ideas in a single paragraph"
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore,' 'In addition,' 'Moreover,' or 'On the other hand' \u2014 let the logical connection between paragraphs speak for itself or use 'But' and 'And' at most",
      "Do NOT bury the main point in the middle of a paragraph \u2014 front-load it so the reader knows immediately what the paragraph is about",
      "Do NOT write paragraphs that merely list examples without a governing claim \u2014 every paragraph should make a point",
      "Do NOT end paragraphs with weak trailing-off qualifications that dilute the point \u2014 end on the strongest or most forward-looking statement"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday analogies to make abstract ideas visceral \u2014 compare intellectual concepts to physical experiences (eating dubious food, cranking a car engine, a dog circling before lying down, a mounted knight on a skating rink)",
      "Employ rhetorical questions sparingly but at pivotal moments to re-engage the reader and reframe the direction of the argument",
      "Use deliberate repetition of key terms rather than varying with synonyms \u2014 this creates a conceptual vocabulary that accumulates meaning through the essay",
      "Deploy lists of parallel examples from wildly different domains (scientists, investors, founders, essayists) to establish patterns inductively before stating the general principle",
      "Use direct address and imperatives ('See if you can guess which,' 'Ask yourself,' 'Look for') to convert abstract advice into actionable instructions",
      "Introduce surprising reframings that flip expectations \u2014 present what seems negative as positive, or reveal hidden similarity between seemingly unrelated things",
      "Use the device of introducing conventional wisdom or a familiar saying, then subverting or refining it",
      "Deploy antithesis to sharpen distinctions \u2014 place opposing ideas in structurally similar phrases"
    ],
    "do_not": [
      "Do NOT use extended or elaborate metaphors that run for multiple sentences \u2014 keep analogies tight and move on",
      "Do NOT use literary or poetic devices like alliteration, assonance, or chiasmus \u2014 the rhetoric should feel natural and conversational, not crafted",
      "Do NOT use exclamation marks or hyperbolic intensifiers to create emphasis \u2014 let the content and sentence placement create the emphasis",
      "Do NOT vary terminology for its own sake \u2014 if the same word is the right word, repeat it rather than reaching for a synonym"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a direct statement of the core premise or insight in plain, accessible terms \u2014 no anecdote, no provocation, no throat-clearing, begin as if picking up a conversation already in progress",
      "Follow the opening with either a cascade of examples that establish a pattern or the common misconception the essay will correct \u2014 the opening paragraphs should create productive tension",
      "Structure the essay as progressive deepening: introduce the core concept, decompose it, explore each facet with examples, derive practical implications, then zoom out to broader significance",
      "Close by returning to the core theme at a higher level of abstraction \u2014 end with a forward-looking or quietly powerful thought that lets the reader carry the idea forward, not a summary",
      "Use bracketed numbered endnotes for tangential observations, caveats, humor, and real-world examples without breaking the main argument's flow \u2014 footnotes have a more casual, digressive tone",
      "Format as continuous prose with no bullet points and no bold text within the body \u2014 structure is communicated through paragraph flow and occasional visual breaks or minimal section markers",
      "Include a brief acknowledgments line at the end thanking draft readers by name"
    ],
    "do_not": [
      "Do NOT open with a question, a quote from someone else, a definition, or a dramatic hook \u2014 start with a declarative observation about how the world works",
      "Do NOT close with a neat summary of the argument, a call to action, or numbered takeaways \u2014 end on a specific, expansive, or personal note",
      "Do NOT use heavy formatting (numbered sections, bibliography, abstract) \u2014 the essay is a polished but informal piece of thinking shared publicly"
    ]
  },
  "signature_phrases": {
    "use": [
      "I think",
      "I suspect",
      "as far as I can tell",
      "it turns out",
      "in fact",
      "of course",
      "the most obvious",
      "the trouble is",
      "which means",
      "in other words",
      "not just X, but Y",
      "the way to",
      "if you're",
      "you'd think",
      "and yet",
      "who knew?",
      "the kind of",
      "the answer is",
      "see if you can",
      "what would happen if"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "consequently",
      "nevertheless",
      "it is important to note",
      "in conclusion",
      "to summarize",
      "it goes without saying",
      "at the end of the day",
      "paradigm shift",
      "leverage",
      "synergy",
      "stakeholder",
      "unpack",
      "nuanced take",
      "deep dive",
      "let's explore",
      "it bears mentioning",
      "game-changer",
      "robust",
      "holistic",
      "key takeaway"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'consequently,' and 'nevertheless' with 'But,' 'And,' 'So,' or nothing at all",
    "Convert passive constructions to active \u2014 find the agent and make it the subject",
    "If a sentence has more than two levels of subordination, break it into separate sentences",
    "Replace abstract claims with concrete examples \u2014 if a paragraph has no named person, place, or vivid image, add one",
    "Cut filler phrases like 'it is important to note that' or 'it should be pointed out that' \u2014 just state the thing",
    "Replace hedging stacks ('I think perhaps maybe') with a single clean hedge ('I suspect')",
    "Move the main point of any paragraph to its first sentence if it's buried later",
    "Replace synonym variation with deliberate repetition of key terms \u2014 consistency builds a conceptual vocabulary",
    "Convert impersonal academic constructions ('one might argue,' 'it can be observed') to first or second person",
    "If a sentence ends with a weak qualification, move the caveat earlier and end on the strong note",
    "Replace corporate jargon and buzzwords with plain everyday language"
  ]
}
```