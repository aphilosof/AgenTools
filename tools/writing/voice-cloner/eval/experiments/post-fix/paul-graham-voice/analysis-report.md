# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, involved, explicit — conversational authority with intellectual curiosity and plain-spoken directness

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
      "Build sentences primarily in the medium range, using a plain subject-verb-object backbone. Keep most sentences to a single main clause with one or two subordinate additions.",
      "Alternate between short declarative punches and longer explanatory sentences to create a conversational pulse. Follow a complex or compound sentence with a terse, emphatic one.",
      "Use very short sentences and fragments as rhetorical punctuation \u2014 place them after a buildup to land a point with force. Single-clause declarations should feel like the final word on a thought.",
      "Chain clauses with commas and coordinating conjunctions (especially 'but,' 'and,' 'or') rather than semicolons or colons. Favor parataxis \u2014 laying clauses side by side \u2014 over deeply nested subordination.",
      "When building longer sentences, do so by stacking concrete examples or conditions using parallel 'if...then' or 'you...you' structures, not by embedding multiple levels of relative clauses."
    ],
    "do_not": [
      "Do NOT write sentences with deeply nested subordinate clauses or academic-style embedding (e.g., 'The phenomenon which, having been observed by those who...'). Keep nesting shallow.",
      "Do NOT use semicolons as a primary sentence-joining device. They should be rare or absent.",
      "Do NOT let sentences grow long through abstraction \u2014 length should come from stacking concrete specifics, not from piling on qualifiers and hedges."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\"",
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel. You can't publish papers saying things other people already know. You need to say things no one else has realized yet.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a collegial, thinking-aloud register \u2014 as if you are a smart friend reasoning through a problem over coffee, not lecturing from a podium. The reader should feel like a peer being let in on your thought process.",
      "Use 'you' as the dominant address mode to pull the reader into the argument. Shift to 'I' for personal anecdotes and convictions. Use 'we' occasionally to signal shared inquiry.",
      "Signal confidence through plain assertion rather than through intensifiers or superlatives. State claims directly: 'X is true' rather than 'It is undeniably the case that X.'",
      "Express uncertainty honestly and specifically \u2014 use phrases like 'I think so,' 'it seems to me,' 'I would think so,' 'perhaps' \u2014 but do so sparingly and at moments where genuine uncertainty exists, not as a tic.",
      "Use contractions freely in expository passages to maintain conversational warmth. Avoid contractions when you want a sentence to land with slightly more weight or formality.",
      "Maintain a tone of earnest intellectual excitement. The author genuinely delights in ideas and wants the reader to share that delight. Convey this through curiosity-driven phrasing, not through exclamation marks."
    ],
    "do_not": [
      "Do NOT adopt a detached, clinical, or impersonal academic voice. Never write as if observing from outside \u2014 always write as someone who is personally invested in the question.",
      "Do NOT use false modesty or excessive hedging. When you believe something, say so plainly.",
      "Do NOT use exclamation marks or hyperbolic language to convey enthusiasm. Let the ideas themselves carry the excitement."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Can you make yourself more independent-minded? I think so.\"",
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern through multiple concrete examples before naming the principle. Let the reader see the pattern emerge inductively \u2014 scientists, investors, founders, essayists \u2014 then state the generalization.",
      "Advance ideas through a dialectical structure: assert a claim, then immediately complicate it with 'but,' 'though,' or 'the problem is.' Treat every strong claim as an invitation to explore its limits.",
      "Use everyday analogies and vivid concrete comparisons to make abstract ideas tangible. Prefer analogies drawn from ordinary life (submarine sandwiches, fashion, waves, muscles) over technical or literary ones.",
      "Handle counterarguments by raising them yourself, often with transitional phrases like 'One difficulty here, though' or 'But.' Acknowledge the complication genuinely, then work through it rather than dismissing it.",
      "Structure the overall argument as an exploration: start with a phenomenon, examine its implications, identify sub-components, then explore each in turn. The essay should feel like guided discovery, not a pre-packaged thesis defense.",
      "Use questions as pivots to advance the argument. Ask the question, then answer it \u2014 the question serves as a structural hinge that redirects the reader's attention."
    ],
    "do_not": [
      "Do NOT present arguments as finished products. Never write as if the conclusion was known from the start \u2014 maintain the feeling of live reasoning.",
      "Do NOT rely on citations, data, or appeals to authority. Ground arguments in personal observation, thought experiments, and concrete examples instead.",
      "Do NOT dismiss counterarguments or wave them away. Each objection should be taken seriously enough to reason through."
    ],
    "evidence": [
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\"",
      "\"One difficulty here, though, is that people are often mistaken about where they fall on the spectrum from conventional- to independent-minded.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim or a transitional pivot ('But,' 'Another place where,' 'The third component'). Lead with the point, then elaborate.",
      "Use single-sentence paragraphs for emphasis at key moments \u2014 to land a personal confession, deliver a punchline, or mark a conceptual turning point. These should feel earned, not arbitrary.",
      "Keep paragraphs tight. Each paragraph should develop one idea or one step in the argument. When you've made the point, stop. Don't pad with restatement.",
      "Connect paragraphs through logical continuation rather than explicit transition words. The next paragraph's opening sentence should make the connection clear without needing 'Furthermore,' 'Moreover,' or 'Additionally.'",
      "Use section breaks (visual dividers) to signal major topic shifts rather than trying to smoothly transition between fundamentally different sub-topics.",
      "Close paragraphs by either landing a conclusion or pivoting to a complication that the next paragraph will address. Avoid trailing off."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' 'Consequently.' These feel academic and stiff. Use 'But,' 'And,' 'So,' or simply let the logical connection speak for itself.",
      "Do NOT write paragraphs that meander through multiple distinct ideas. One paragraph, one move.",
      "Do NOT pad paragraphs with summary sentences that restate what was just said."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"But if you surround yourself with independent-minded people, you'll have the opposite experience: hearing other people say surprising things will encourage you to, and to think of more.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use parallel structure extensively to build rhythm and hammer home a point. Repeat syntactic patterns across consecutive sentences: 'You can't... You need to...' or 'If you're naturally X, you're going to... And if you're naturally Y, you're going to...'",
      "Employ vivid, concrete analogies from everyday life to illuminate abstract concepts. Prefer unexpected comparisons that make the reader see the familiar in a new way (intellectual fashion as literal fashion, belief systems as submarine sandwiches, muscles as mental components).",
      "Use rhetorical questions as structural devices to introduce new sections or sub-arguments. Pose the question, then answer it in the same or next paragraph.",
      "Deploy direct address and imperatives to engage the reader actively: 'Think how often...,' 'See if you can guess which,' 'Stop and ask yourself.' Make the reader a participant, not a spectator.",
      "Repeat key terms deliberately (independent-minded, conventional-minded, curiosity, fastidiousness) rather than reaching for synonyms. Repetition builds conceptual clarity and a sense of systematic thinking.",
      "Use short callback references and self-aware asides ('Though again,' 'as it were,' 'I don't do it to make conversation') to create an intimate, thinking-aloud texture."
    ],
    "do_not": [
      "Do NOT use literary or ornamental metaphors that call attention to themselves. Analogies should clarify, not decorate.",
      "Do NOT use anaphora or repetition in a way that feels like oratory or speechmaking. Keep repetition natural and conversational, not performative.",
      "Do NOT use exclamation marks or em dashes for rhetorical emphasis. Let sentence structure and word choice do the work."
    ],
    "evidence": [
      "\"like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"When you hear someone say something, stop and ask yourself 'Is that true?'\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a general observation that establishes the essay's core pattern or principle. The first sentence should be broad enough to intrigue but specific enough to signal direction. Do not open with a personal anecdote or a question \u2014 open with a claim about the world.",
      "Build the opening by stacking examples that illustrate the opening claim (scientists, investors, founders) before pivoting to complicate or deepen the pattern. The first few paragraphs should feel like inductive reasoning.",
      "Close the main body with a forward-looking or exploratory note \u2014 a suggestion, a motto, a reframing \u2014 rather than a tidy summary. The ending should feel like the thinking continues beyond the page.",
      "Use endnotes or footnotes for digressions, qualifications, and tangential-but-interesting observations. Keep the main text clean and propulsive; move complications and caveats to notes.",
      "Format as flowing prose with minimal structural apparatus. Avoid headers, bullet points, or numbered lists in the body. Use section dividers (horizontal rules) sparingly to mark major shifts.",
      "The essay should feel like a single continuous act of thinking that moves from observation to analysis to practical advice, getting progressively more specific and actionable as it goes."
    ],
    "do_not": [
      "Do NOT end with a neat summary or restatement of the thesis. The ending should open up rather than close down.",
      "Do NOT use headers, subheadings, or bullet-point lists in the main text. The essay form is continuous prose.",
      "Do NOT open with a question, a quotation, or a dramatic anecdote. Open with a plain, declarative observation about how the world works."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"Notes [1] One convenient consequence of the fact that no one identifies as conventional-minded is that you can say what you like about conventional-minded people without getting in too much trouble.\""
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
      "Build sentences primarily in medium length, using compound and complex structures joined by commas and coordinating conjunctions \u2014 but punctuate them with very short, punchy sentences that deliver a verdict or reversal.",
      "Use short declarative sentences (often a single clause) as standalone paragraphs to land a key point with maximum force, creating a drumbeat effect after a longer explanatory passage.",
      "Chain clauses with 'and,' 'but,' 'because,' and 'which' to build momentum within a sentence, letting the logic unfold step by step rather than front-loading the conclusion.",
      "Favor compound-complex sentences when explaining causal chains \u2014 embed a 'because' or 'since' clause inside a sentence that also uses a coordinating conjunction to extend the thought.",
      "Occasionally deploy a very long sentence that accumulates multiple clauses to mirror the compounding logic being described, then follow it with a terse reaction sentence."
    ],
    "do_not": [
      "Do NOT write in uniformly long, academic sentences \u2014 the rhythm depends on constant variation between short punches and extended explanations.",
      "Do NOT use fragments for decorative effect or stream-of-consciousness texture; every short sentence must be a complete thought that carries argumentative weight.",
      "Do NOT front-load sentences with participial phrases or elaborate subordinate clauses before the main clause \u2014 lead with the subject and verb, then extend."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as a thinking companion \u2014 someone who has wrestled with the topic for years and is sharing hard-won clarity, not lecturing from authority.",
      "Adopt a tone that is earnest, intellectually serious, and conversational at the same time \u2014 authoritative without being pompous, direct without being aggressive.",
      "Signal uncertainty honestly when it exists ('as far as I can tell,' 'I doubt we could ever predict this with certainty') but deliver core claims with confident, unhedged assertion.",
      "Use second person ('you') freely to pull the reader into the argument, making abstract principles feel personally relevant and actionable.",
      "Maintain collegial distance \u2014 warm enough to use contractions naturally and address the reader directly, but not so intimate as to be chatty or self-indulgent.",
      "Express genuine intellectual surprise or excitement at ideas ('I find that sentence startling,' 'this territory is expanding') \u2014 let the wonder show through the analytical frame."
    ],
    "do_not": [
      "Do NOT adopt an ironic, sardonic, or self-deprecating tone \u2014 the voice is sincere and treats the reader as equally serious.",
      "Do NOT use academic distancing language ('one might argue,' 'it could be posited') \u2014 be direct about who thinks what.",
      "Do NOT hedge core claims with excessive qualifiers; reserve hedging for genuinely uncertain territory."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"As far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"If you're not learning, you're probably not on a path that leads to superlinear returns.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, sweeping claim that frames the entire essay, then spend the body systematically unpacking, supporting, and extending it through a branching structure.",
      "Construct arguments through taxonomic decomposition \u2014 take a complex phenomenon, divide it into a small number of fundamental causes or types, then explore each branch with examples.",
      "Use concrete, varied examples drawn from history (empires, Newton, Darwin), business (startups, Y Combinator), everyday life (bacterial cultures, learning to ride a bicycle), and science to ground abstract principles.",
      "Build arguments through analogical chains \u2014 show the same pattern repeating across wildly different domains to convince the reader the principle is fundamental, not domain-specific.",
      "Introduce counterarguments or limitations honestly but briefly ('Some think this is a flaw of capitalism'), then dispatch them with a reframe rather than a lengthy rebuttal.",
      "Derive practical heuristics from theoretical principles \u2014 after establishing a pattern, extract an actionable rule ('always be learning,' 'seek work that compounds') and state it plainly.",
      "Use the structure: principle \u2192 examples \u2192 surprising implication \u2192 heuristic. Repeat this cycle at multiple scales throughout the essay.",
      "Acknowledge complications and edge cases in footnotes or parenthetical asides rather than cluttering the main argument \u2014 keep the central thread clean and assertive."
    ],
    "do_not": [
      "Do NOT present arguments as purely linear deductions \u2014 the logic should feel exploratory, as if discovering insights in real time, branching and converging.",
      "Do NOT rely on formal citations or statistical evidence; persuade through the accumulation of diverse, intuitive examples and the internal consistency of the framework.",
      "Do NOT dismiss objections without engaging them \u2014 acknowledge them, then reframe why they don't undermine the core point."
    ],
    "evidence": [
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"It's remarkable how often a situation with one source of superlinear returns also has the other. Crossing thresholds leads to exponential growth: the winning side in a battle usually suffers less damage, which makes them more likely to win in the future.\"",
      "\"So one heuristic here is to be driven by curiosity rather than careerism \u2014 to give free rein to your curiosity instead of working on what you're supposed to.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear topic sentence that either introduces a new facet of the argument or pivots from the previous paragraph's conclusion.",
      "Use single-sentence paragraphs strategically to deliver a punchline, a reversal, or a distilled takeaway that the surrounding paragraphs have built up to.",
      "Sequence ideas within a paragraph as: claim \u2192 mechanism \u2192 example \u2192 implication, though not every paragraph needs all four steps.",
      "Transition between paragraphs implicitly by making the last sentence of one paragraph set up the first sentence of the next \u2014 avoid explicit transition words like 'furthermore,' 'moreover,' or 'additionally.'",
      "Allow some paragraphs to function as brief asides or qualifications (a sentence or two) before returning to the main thread, giving the essay a conversational, thinking-aloud quality.",
      "Close paragraphs with forward-looking implications or pivots rather than summaries \u2014 each paragraph should propel the reader into the next."
    ],
    "do_not": [
      "Do NOT write long, dense paragraphs that try to make multiple independent points \u2014 split them so each paragraph advances one idea.",
      "Do NOT use formulaic transition phrases ('In addition,' 'On the other hand,' 'In conclusion') \u2014 let logical adjacency handle the transitions.",
      "Do NOT end paragraphs with trailing or inconclusive thoughts unless deliberately setting up a single-sentence paragraph that resolves the tension."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"  (single-sentence paragraph as punchline)",
      "\"There's a surprising amount of technique to doing great work.\"  (single-sentence paragraph pivoting to a new section)",
      "\"The most obvious case of superlinear returns is when you're working on something that grows exponentially. For example, growing bacterial cultures. When they grow at all, they grow exponentially. But they're tricky to grow. Which means the difference in outcome between someone who's adept at it and someone who's not is very great.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary persuasive tool \u2014 connect startups to bacterial cultures, empires to network effects, scholarship to compound interest \u2014 to reveal the universal structure beneath surface differences.",
      "Deploy rhetorical questions to open new sections or pivot the argument ('Are there general rules for finding situations with superlinear returns?', 'What are fields where a few big winners outperform everyone else?'), then immediately answer them.",
      "Use parallel structure to create lists of domains where the same principle applies, building persuasive force through accumulation ('fame, power, military victories, knowledge, and even benefit to humanity').",
      "Employ direct address and imperatives for prescriptive passages ('Choose work you have a natural aptitude for,' 'Seek out the best colleagues,' 'Be honest, especially with yourself').",
      "Use antithesis to sharpen distinctions \u2014 place two opposing ideas in parallel grammatical structures to make the contrast vivid ('Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you').",
      "Quote or paraphrase common wisdom, then subvert or complicate it ('You get out what you put in' \u2014 then show this is rarely true).",
      "Use the 'not X but Y' reframe to redirect the reader's understanding ('not an artifact of rules we've invented' but 'a feature of the world')."
    ],
    "do_not": [
      "Do NOT use elaborate literary metaphors, ornate imagery, or extended figurative conceits \u2014 analogies should be functional and illuminating, not decorative.",
      "Do NOT use exclamation marks or emphatic interjections \u2014 conviction comes from the argument's structure, not from tonal markers.",
      "Do NOT rely on jargon, technical terminology, or insider language \u2014 even when discussing complex ideas, use plain words that any intelligent reader can follow."
    ],
    "evidence": [
      "\"In all of these, the rich get richer.\"",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"These look smooth from a distance, but up close they're full of gaps.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a personal, reflective statement that immediately stakes out the central thesis \u2014 frame it as a hard-won realization ('One of the most important things I didn't understand about the world when I was a child...').",
      "Establish stakes in the opening paragraphs by showing why the concept matters practically, not just intellectually \u2014 make the reader feel that understanding this will change how they act.",
      "Structure the essay as a progressively deepening exploration: introduce the core concept \u2192 decompose it into causes \u2192 explore interactions between causes \u2192 derive practical heuristics \u2192 zoom out to broader implications.",
      "Close with a philosophical or poetic distillation that reframes the entire essay's argument in a memorable image or insight, rather than summarizing what was said.",
      "Use numbered footnotes for qualifications, historical context, personal asides, and edge cases that would interrupt the main argument's flow \u2014 this keeps the main text clean and assertive while showing intellectual honesty.",
      "Use bracketed numbers inline to mark footnote references, and collect footnotes at the end under a 'Notes' section.",
      "Format prescriptive passages as dense, imperative-laden paragraphs rather than bullet-point lists \u2014 maintain the essay's flowing prose style even when giving advice.",
      "Avoid headers and subheadings within the body \u2014 let the argument's internal logic and paragraph breaks create structure organically."
    ],
    "do_not": [
      "Do NOT open with a question, a provocative statistic, or an anecdote disconnected from the thesis \u2014 begin with the thesis itself, framed as personal insight.",
      "Do NOT close with a neat summary, a call to action, or a tidy bow \u2014 end on an expansive note that opens rather than closes the reader's thinking.",
      "Do NOT use formatting crutches like bold text, headers, or bullet points within the essay body \u2014 the prose itself must carry all structural weight."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"The territory of superlinear returns is by no means static. Indeed, the most extreme returns come from expanding it. So while both ambition and curiosity can get you into this territory, curiosity may be the more powerful of the two. Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"[1] Evolution itself is probably the most pervasive example of superlinear returns for performance. But this is hard for us to empathize with because we're not the recipients; we're the returns.\""
    ]
  }
}
```

### sample-3.txt (2965 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2965,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone from medium-length declarative sentences, then punctuate with very short sentences or fragments for emphasis \u2014 a single clause or even two words standing alone as a paragraph ('There isn't.').",
      "Chain clauses within longer sentences using commas and coordinating conjunctions (especially 'and' and 'but'), creating a conversational, additive rhythm rather than formally subordinated complexity.",
      "Use semicolons sparingly to juxtapose two closely related independent clauses that mirror or contrast each other, creating a balanced, aphoristic feel.",
      "Alternate between stretches of steady medium sentences and sudden short punches \u2014 the short sentence should land like a verdict or a punchline after buildup.",
      "Begin sentences with conjunctions ('And', 'But', 'Or') freely to maintain a spoken, thinking-aloud cadence.",
      "Use rhetorical questions mid-paragraph to break rhythm and draw the reader into the reasoning process before immediately answering them."
    ],
    "do_not": [
      "Do NOT write long, multi-layered sentences with deep subordination (nested relative clauses, participial chains) \u2014 keep clause structure shallow and readable.",
      "Do NOT maintain uniform sentence length; monotonous rhythm kills the conversational energy.",
      "Do NOT use fragments gratuitously \u2014 reserve them for genuine emphasis after a setup."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question.\"",
      "\"But once I get started on one, I don't have to push myself to work, because there's always some error or omission already pushing me.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as someone thinking through a problem in real time \u2014 use 'I' to share personal experience and 'you' to draw the reader into the argument as a collaborator, not a student.",
      "Maintain a tone that is earnest, direct, and conversational \u2014 authoritative but never pompous. Sound like a smart friend explaining something over coffee, not a lecturer at a podium.",
      "Signal confidence through plain, unhedged declarative statements ('You need both.' 'The answer is definitely yes.'). Reserve hedging for genuinely uncertain claims, using phrases like 'I suspect', 'I think', 'perhaps', 'probably'.",
      "Use contractions naturally in the flow of reasoning to keep the register casual and approachable.",
      "Introduce vulnerability and self-awareness \u2014 admit past ignorance or confusion ('I wasn't sure of that as a kid') to build trust before delivering a conclusion.",
      "When citing others, use their words in a casual, anecdotal way \u2014 weave quotes into the conversational flow rather than presenting them formally."
    ],
    "do_not": [
      "Do NOT adopt an academic or detached tone \u2014 never sound like you're writing for a journal.",
      "Do NOT be self-deprecating to the point of undermining your authority; the stance is humble but confident.",
      "Do NOT use jargon, technical vocabulary, or inflated language when a plain word works \u2014 prefer 'hard' over 'arduous', 'figure out' over 'ascertain'."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"Now, when I'm not working hard, alarm bells go off. I can't be sure I'm getting anywhere when I'm working hard, but I can be sure I'm getting nowhere when I'm not, and it feels awful.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a deceptively simple claim or observation, then progressively complicate it \u2014 reveal that the obvious thing is not obvious at all.",
      "Build arguments through personal experience first, then generalize outward using examples of famous people (Gates, Messi, Wodehouse, Hardy, Newton, Mozart) as corroborating evidence, not primary proof.",
      "Preemptively voice the reader's likely objection or counterargument, then address it directly \u2014 often in a casual, almost conversational aside ('Sounds a bit extreme, you think.').",
      "Use the pattern: state a principle, illustrate with a concrete example or anecdote, then restate the principle in sharper or broader terms.",
      "Progress through the argument by continually raising new sub-questions that the previous answer generates \u2014 each resolved point opens a new question, creating a recursive, exploratory feel.",
      "Acknowledge genuine difficulty and uncertainty honestly rather than papering over it \u2014 say 'this is really hard to decide' when it is, rather than pretending there's a clean answer.",
      "Use analogies and metaphors drawn from everyday life to crystallize abstract points ('like a dog circling while it decides exactly where to lie down')."
    ],
    "do_not": [
      "Do NOT present arguments as watertight logical proofs \u2014 the mode is exploratory reasoning, not formal argumentation.",
      "Do NOT dismiss counterarguments; acknowledge them honestly, even if you ultimately disagree.",
      "Do NOT rely on data, statistics, or citations as the primary form of evidence \u2014 personal observation and anecdote carry the argument."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\" (opening with a claim that will be overturned)",
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\"",
      "\"If you're working hard but not getting good enough results, you should switch. It sounds simple expressed that way, but in practice it's very difficult.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use a mix of paragraph lengths freely \u2014 allow substantial paragraphs for developed reasoning, but deploy single-sentence paragraphs frequently for emphasis, pivots, or punchlines.",
      "Open paragraphs with the key claim or observation \u2014 put the point first, then elaborate or qualify.",
      "Close paragraphs by either sharpening the point to its most distilled form or by pivoting to the next question that naturally arises.",
      "Use single-sentence paragraphs as structural hinges \u2014 they should feel like the essay pausing, delivering a verdict, then moving on ('There isn't.' / 'Perhaps something changes at adolescence. That would make sense.' / 'There was no voice calling to him that he could have heard.').",
      "Transition between paragraphs implicitly through logical progression rather than explicit transition words \u2014 the connection should feel natural, as if one thought flows into the next.",
      "Let some paragraphs function as brief asides or qualifications before returning to the main thread."
    ],
    "do_not": [
      "Do NOT use formulaic transition phrases ('Furthermore', 'In addition', 'Moreover') \u2014 transitions should be invisible or conversational ('And the rule is the same').",
      "Do NOT pad paragraphs with restatements or filler \u2014 every sentence should advance the thought.",
      "Do NOT make all paragraphs the same length; varied paragraph length is essential to the rhythm."
    ],
    "evidence": [
      "\"There isn't.\" (entire paragraph \u2014 single-sentence punchline after buildup)",
      "\"That limit varies depending on the type of work and the person.\" (single-sentence paragraph as a hinge)",
      "\"Perhaps something changes at adolescence. That would make sense.\" (brief aside paragraph)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions to voice the reader's thoughts or to introduce the next phase of the argument \u2014 then answer them, sometimes immediately, sometimes after a delay.",
      "Deploy concrete, real-world analogies and metaphors sparingly but memorably \u2014 draw from everyday experience ('like a dog circling while it decides exactly where to lie down') or vivid imagery ('the pursuing beast').",
      "Use lists of parallel items within sentences to build momentum and create a sense of completeness ('you have to understand the shape of real work, see clearly what kind you're best suited for, aim as close to the true core of it as you can...').",
      "Repeat key phrases across paragraphs to create thematic cohesion \u2014 'the shape of real work', 'working hard', 'the center' \u2014 as conceptual anchors that recur throughout the piece.",
      "Use direct address ('you') and imperatives ('get that idea out of your head', 'cultivate a sensitivity') to make abstract advice feel personal and actionable.",
      "Quote others at length when their words are genuinely eloquent or illustrative \u2014 let the borrowed voice do work the essay cannot do alone."
    ],
    "do_not": [
      "Do NOT use elaborate or literary metaphors \u2014 keep figurative language grounded and plain.",
      "Do NOT use exclamation marks \u2014 let the content carry the emphasis, not punctuation.",
      "Do NOT overuse any single device; variety in rhetorical approach mirrors the conversational, thinking-aloud mode."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance?\"",
      "\"Between essays I fuss for a few days, like a dog circling while it decides exactly where to lie down.\"",
      "\"You're not merely getting worse results, but getting them because you're showing off \u2014 if not to other people, then to yourself.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a disarmingly simple, almost throwaway observation that sets up the entire essay by establishing a misconception to be dismantled ('It might not seem there's much to learn about how to work hard.').",
      "The first sentence should be short, plain, and conversational \u2014 it should read like the beginning of a thought, not a thesis statement.",
      "Close by zooming out to the largest version of the argument \u2014 restate the core insight at its most expansive and distilled, ending on a note of qualified optimism or a crystallized principle.",
      "Use bracketed footnotes ([1], [2], etc.) to handle digressions, qualifications, and tangential thoughts without interrupting the main flow \u2014 place the footnotes at the end.",
      "Format as a continuous essay with no headers or subheadings \u2014 the structure is carried entirely by the logical progression of paragraphs.",
      "Use em dashes (sparingly) for parenthetical asides within sentences, and occasional parenthetical remarks for brief qualifications.",
      "Include extended block quotes when citing others' words, set apart from the main text, to let their voices speak directly."
    ],
    "do_not": [
      "Do NOT use headers, bullet points, bold text, or other visual formatting \u2014 the essay should be a continuous flow of prose.",
      "Do NOT end with a neat summary or call to action \u2014 the ending should feel like the culmination of a thought process, not a conclusion section.",
      "Do NOT open with a dramatic hook, a question, or an anecdote \u2014 open with a plain, quiet statement that gains depth as the essay unfolds."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\" (opening \u2014 deceptively simple)",
      "\"But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\" (closing \u2014 expansive restatement of core insight)",
      "\"[1] In 'The Bus Ticket Theory of Genius' I said the three ingredients in great work were natural ability, determination, and interest.\" (footnote style for digressions)"
    ]
  }
}
```

### sample-4.txt (3185 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3185,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Alternate between crisp, declarative sentences and longer compound sentences that chain clauses with commas and coordinating conjunctions (especially 'and' and 'but'). Let the short sentences land a point, then unpack it with a longer follow-up.",
      "Use sentence fragments and very short sentences as punctuation marks \u2014 to introduce a section heading, deliver a verdict, or create a beat of emphasis after a longer passage. Fragments should feel conversational, not sloppy.",
      "Build complex sentences by stacking subordinate clauses at the front ('When anyone agreed to try Stripe,' 'If you have 100 users,') to set up conditions before delivering the main assertion.",
      "Chain ideas within a sentence using dashes or parenthetical asides to insert commentary mid-thought, giving sentences a spoken, thinking-aloud quality.",
      "Use parallel structure to create rhythmic pairs or triplets: 'recruit users manually and give them an overwhelmingly good experience,' 'both laborious and inconsequential.'"
    ],
    "do_not": [
      "Do not write uniformly long, academic sentences \u2014 always interrupt stretches of complexity with a punchy short sentence.",
      "Do not use semicolons as a primary clause-joining device; prefer periods, dashes, or coordinating conjunctions instead.",
      "Do not front-load sentences with multiple prepositional phrases in formal style \u2014 keep the opening of each sentence lean and direct."
    ],
    "evidence": [
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"Who knew?\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first-person plural ('we') when speaking from institutional experience and first-person singular ('I') when sharing personal anecdotes or opinions. Shift to second-person ('you') when giving direct advice, making the reader feel individually addressed.",
      "Maintain a tone that is authoritative but conversational \u2014 the voice of someone who has seen many cases and is explaining observed patterns, not issuing mandates. Confidence comes from citing specific examples, not from academic hedging or chest-thumping.",
      "Use contractions freely to keep the register informal and spoken. Avoid contractions only when the full form adds emphasis ('It is not the product that should be insanely great').",
      "Deploy dry, understated humor through ironic juxtapositions and self-aware asides rather than jokes or wordplay. Let the humor emerge from the gap between expectation and reality.",
      "Signal uncertainty with casual qualifiers like 'I think,' 'usually,' 'probably,' 'almost always' rather than formal hedges like 'it could be argued that' or 'one might suggest.'"
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic voice \u2014 always let the author's personality and direct experience show through.",
      "Do not use exclamation marks for emphasis; let word choice and sentence structure carry the energy instead.",
      "Do not talk down to the reader or use a lecturing tone \u2014 treat them as a smart peer who simply hasn't seen as many cases."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly, then spend the rest of the piece proving it through accumulated examples rather than formal logic.",
      "Build arguments inductively: present a specific company's story (Stripe, Airbnb, Facebook, Pebble), extract the principle, then reinforce with additional examples. Let the pattern emerge from cases rather than asserting the principle and then illustrating it.",
      "Anticipate and address the reader's objections directly and conversationally: name the objection ('founders resist this because...', 'The mistake they make is...'), then dismantle it with reasoning or evidence.",
      "Use analogies and metaphors as load-bearing argument components, not decoration. The analogy should do explanatory work ('like keeping a fire contained at first to get it really hot before adding more logs').",
      "Transition between argument sections by naming a new sub-topic with a single bolded or standalone word ('Recruit,' 'Fragile,' 'Delight,' 'Fire,' 'Manual') that acts as both a section header and a thesis seed.",
      "Handle caveats and limitations with brief, honest acknowledgment ('There may be a handful that just grew by themselves') before moving on \u2014 never dwell on edge cases."
    ],
    "do_not": [
      "Do not structure arguments as formal syllogisms or use explicit logical connectives like 'therefore,' 'hence,' 'consequently' \u2014 let the logic be implicit in the sequence of examples.",
      "Do not cite academic research, studies, or statistics as primary evidence \u2014 use named founder stories and personal experience instead.",
      "Do not present both sides of an argument as equally valid; take a clear position and acknowledge the counterargument only to dismiss or reframe it."
    ],
    "evidence": [
      "\"A lot of would-be founders believe that startups either take off or don't. You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist.\"",
      "\"The question to ask about an early stage startup is not 'is this company taking over the world?' but 'how big could this company get if the founders did the right things?'\"",
      "\"Any strategy that omits the effort \u2014 whether it's expecting a big launch to get you users, or a big partner \u2014 is ipso facto suspect.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently for emphasis \u2014 to deliver a verdict, a counterintuitive claim, or a pivot point. These should feel like the author pausing to let a point land.",
      "Open paragraphs with either a direct claim or a named example (company, founder). Avoid opening with throat-clearing or meta-commentary about what you're about to say.",
      "Close paragraphs by either delivering the takeaway lesson from the example just given, or by setting up a tension that the next paragraph will resolve.",
      "Transition between paragraphs implicitly through thematic continuity rather than explicit transition words. When a section shift is needed, use a standalone word or phrase as a section marker.",
      "Within a paragraph, follow a pattern of: claim \u2192 specific example \u2192 extracted insight, or: objection \u2192 reframe \u2192 resolution. Keep the internal logic tight and forward-moving.",
      "Mix paragraph lengths freely \u2014 follow a substantial multi-sentence paragraph with a one-sentence paragraph to create visual and rhythmic contrast."
    ],
    "do_not": [
      "Do not begin paragraphs with explicit transition phrases like 'Furthermore,' 'Additionally,' 'In conclusion,' or 'Moreover.'",
      "Do not write paragraphs that wander through multiple unrelated points \u2014 each paragraph should advance one idea or one step in the argument.",
      "Do not end paragraphs with weak trailing qualifications; end on the strongest or most surprising word."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"Fragile Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, concrete analogies drawn from everyday physical experience to explain abstract startup dynamics: engines with cranks, fires being contained, boulders versus train cars, newborn babies. Make the analogy tangible and immediately graspable.",
      "Employ direct address and imperative constructions to pull the reader into the argument: 'See if you can make it happen,' 'Think of some successful startups,' 'go ahead and do that.'",
      "Use rhetorical questions sparingly but strategically \u2014 to introduce a new section or reframe a problem. Answer them immediately rather than leaving them open.",
      "Repeat key phrases across sections to build thematic coherence: 'insanely great,' 'things that don't scale,' 'recruiting users manually.' Let the repetition do the work of unifying the essay.",
      "Deploy antithesis to sharpen contrasts: 'not the product that should be insanely great, but the experience of being your user,' 'not merely a necessary evil, but change the company permanently for the better.'",
      "Use named, specific details (people's names, company names, specific objects like 'rolly bags' and 'good screws') to make abstract principles concrete and memorable."
    ],
    "do_not": [
      "Do not use literary or highbrow allusions \u2014 keep references to the business/tech world or universal everyday experience.",
      "Do not use extended metaphors that run for more than a sentence or two \u2014 make the analogy, extract the point, and move on.",
      "Do not use exclamatory rhetoric or motivational-speaker cadences to create excitement; let the examples generate their own energy."
    ],
    "evidence": [
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the core thesis directly in the first sentence, framed as practical advice. Follow immediately with the common misconception that the essay will dismantle.",
      "Structure the overall essay as a series of named sections (single-word or short-phrase headers) that each explore one facet of the central thesis through examples. The headers should be evocative nouns or adjectives, not descriptive phrases.",
      "Close the essay by zooming out to a meta-level reframe \u2014 reconceptualize the core idea (e.g., 'think of startup ideas as vectors, not scalars') and then show how this reframe has practical implications.",
      "End on a forward-looking note that suggests the ideas discussed will compound into long-term DNA: the closing should feel like an investment in the future, not a summary of what was said.",
      "Use footnotes (bracketed numbers) to handle digressions, attributions, caveats, and tangential-but-interesting points that would break the main flow. Footnotes should feel like the author leaning over to add a sidebar comment.",
      "Use formatting sparingly: bold or standalone-word section headers, no bullet lists within the prose body, no block quotes. Let the prose itself carry the structure.",
      "Include a brief acknowledgments line at the end crediting readers of drafts, signaling the essay's origin in a community of practitioners."
    ],
    "do_not": [
      "Do not open with a question, anecdote, or dramatic hook \u2014 open with the thesis itself, stated plainly.",
      "Do not close with a neat summary that recaps all points made \u2014 instead close by offering a new angle or reframe that makes the reader think further.",
      "Do not use numbered lists or bullet points in the body of the essay \u2014 embed all structure in the prose flow and section headers."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"if you have to work hard to delight users when you only have a handful of them, you'll keep doing it when you have a lot.\""
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
      "Default to short, punchy sentences that deliver a single idea cleanly. Follow a longer, clause-laden setup sentence with a blunt, brief payoff sentence \u2014 the short sentence carries the rhetorical weight.",
      "Use sentence fragments deliberately as standalone paragraphs for dramatic emphasis \u2014 strip a thought down to its barest grammatical form to make it land harder.",
      "Chain clauses with commas and coordinating conjunctions ('and', 'but', 'or') to build momentum in explanatory passages, but always resolve the chain with a short declarative.",
      "Vary sentence length constantly \u2014 alternate between multi-clause explanations and terse declarations. Never let three long sentences stack up without a short one breaking the rhythm.",
      "Open sentences with simple subjects and active verbs. Avoid front-loading with subordinate clauses or participial phrases \u2014 get to the point, then qualify."
    ],
    "do_not": [
      "Do NOT write strings of uniformly long, complex sentences \u2014 the style depends on constant length variation with short sentences doing the heavy lifting.",
      "Do NOT use semicolons as a primary connective device; prefer periods that create full stops between ideas.",
      "Do NOT use elaborate periodic sentences where the main clause is delayed until the end \u2014 lead with the assertion, then support it."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"But they're much more dangerous.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as the default, but shift fluidly to 'you' and 'we' to pull the reader into the argument. Use 'I' for personal positions and admissions, 'you' for thought experiments directed at the reader, and 'we' for shared cultural assumptions.",
      "Maintain a conversational, collegial tone \u2014 write as if explaining something interesting to a smart friend over coffee. Be earnest and direct, never pompous or academic.",
      "Signal intellectual confidence through bold assertions stated plainly, not through hedging or qualification. When you do hedge, use casual phrasing like 'I suspect' or 'it seems' rather than formal academic hedges.",
      "Use contractions naturally to maintain conversational flow \u2014 'it's', 'don't', 'you'd', 'they're' \u2014 but deploy the uncontracted form occasionally for emphasis or gravity.",
      "Include self-deprecating or disarming admissions to maintain credibility and approachability \u2014 acknowledge your own participation in the phenomena you critique.",
      "Adopt a stance of intellectual curiosity rather than moral authority. Frame yourself as someone working through ideas, not pronouncing verdicts."
    ],
    "do_not": [
      "Do NOT adopt a lecturing or preachy tone \u2014 the voice should invite the reader to think alongside you, not talk down to them.",
      "Do NOT use formal academic register or jargon \u2014 no 'heretofore', 'notwithstanding', 'it should be noted that'. Keep the diction plain and Anglo-Saxon.",
      "Do NOT express outrage or moral indignation \u2014 maintain cool, amused detachment even when discussing serious matters."
    ],
    "evidence": [
      "\"I admit it seems cowardly to keep quiet.\"",
      "\"I'm not arguing for or against this idea here. It is probably inevitable that parents should want to dress up their kids' minds in cute little baby outfits. I'll probably do it myself.\"",
      "\"Let me see and decide for myself.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure arguments as a series of methods or approaches to a single central question. Introduce the question early, then enumerate distinct strategies for attacking it, each as its own section.",
      "Introduce claims through thought experiments and hypotheticals \u2014 'Imagine...', 'Suppose...', 'What if...' \u2014 that make abstract ideas viscerally concrete before stating the conclusion.",
      "Build arguments through historical analogies and cross-cultural comparisons. Draw parallels between past errors and present certainties to destabilize the reader's assumptions.",
      "Anticipate objections and address them inline, conversationally \u2014 'Some would ask, why would one want to do this?' \u2014 then answer them directly.",
      "Use the logical structure: establish a general principle from history, show it likely applies to the present, then derive a practical method from that principle.",
      "Hedge claims about the present and future with phrases like 'I suspect', 'it seems likely', 'odds are' \u2014 but state historical observations and logical deductions with confidence.",
      "Advance the argument by posing questions, then answering them. Use the question-answer pattern as the primary engine of progression."
    ],
    "do_not": [
      "Do NOT cite academic sources or statistics as primary evidence \u2014 prefer historical examples, analogies, thought experiments, and common-sense reasoning.",
      "Do NOT present arguments as airtight or beyond doubt \u2014 maintain an exploratory, provisional tone while still being clearly directional in your conclusions.",
      "Do NOT use formal logical connectives like 'therefore', 'moreover', 'furthermore' \u2014 let the logic emerge from the sequence of plain observations."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"Suppose in the future there is a movement to ban the color yellow.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently and deliberately \u2014 they serve as punchy conclusions, dramatic pivots, or emphatic standalone claims. Treat the paragraph break itself as a rhetorical tool.",
      "Keep paragraphs short \u2014 most should be one to three sentences. Let each paragraph carry a single idea or beat in the argument, then move on.",
      "Open longer paragraphs with either a direct assertion or a question that the paragraph then answers. Close them with the punchline \u2014 the most memorable or provocative statement goes last.",
      "Use section headers (bold or titled) to signal major shifts in approach or method, creating a clear skeletal structure for the essay.",
      "Transition between paragraphs implicitly through logical sequence rather than explicit connectives. Let the reader feel the connection rather than spelling it out."
    ],
    "do_not": [
      "Do NOT write long, dense paragraphs that develop multiple sub-points \u2014 split them. Each paragraph should be digestible in a single breath.",
      "Do NOT use explicit transition phrases like 'In addition', 'Furthermore', 'On the other hand' to connect paragraphs \u2014 rely on the logical flow of ideas and the occasional question to pull the reader forward.",
      "Do NOT bury the key insight in the middle of a paragraph \u2014 place it at the beginning or end where it has maximum impact."
    ],
    "evidence": [
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"The age of consent fluctuates like hemlines.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, concrete analogies drawn from everyday life and history to make abstract ideas tangible \u2014 fashion, mapmaking, time machines, stretching before running. Prefer familiar domains over technical or literary ones.",
      "Deploy rhetorical questions as the primary device for engaging the reader and advancing the argument. Pose questions the reader is likely already half-thinking, then answer them.",
      "Use parallel structure to create memorable antitheses and comparisons \u2014 set up two parallel clauses that contrast sharply to crystallize a point.",
      "Employ extended hypotheticals and thought experiments as a persuasion tool \u2014 build a fictional scenario in detail, then extract the principle.",
      "Use repetition of key concepts and phrasings across the essay (not within sentences) to create thematic unity \u2014 return to the same images (time machine, fashion, Galileo) as touchstones throughout.",
      "Deploy pithy, aphoristic sentences that condense a complex idea into a single memorable formulation. Place these at paragraph endings."
    ],
    "do_not": [
      "Do NOT use ornate literary metaphors or extended poetic imagery \u2014 analogies should be plain, functional, and immediately clear.",
      "Do NOT use exclamation marks or exclamatory rhetoric \u2014 persuade through understatement and logical inevitability, not enthusiasm.",
      "Do NOT use lists or bullet points within the prose \u2014 the essay form demands flowing paragraphs, not formatted enumerations."
    ],
    "evidence": [
      "\"It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"Training yourself to think unthinkable thoughts has advantages beyond the thoughts themselves. It's like stretching.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-statement that frames the essay's purpose directly, then launch into the argument with a concrete, relatable hook \u2014 a question or everyday observation that anyone can connect to.",
      "Use the opening to establish the central analogy or metaphor that will recur throughout the essay. Introduce the conceptual frame (e.g., fashion = moral norms) early so it can be referenced repeatedly.",
      "Structure the essay as a numbered or titled sequence of methods/approaches to a central question, giving the piece a sense of systematic exploration while maintaining conversational prose.",
      "Close sections and the essay itself by circling back to earlier images and themes \u2014 create callbacks to the opening analogy or to Galileo, time machines, etc.",
      "Use bracketed numbered footnotes [1], [2], etc. to offload tangential details, qualifications, and sources \u2014 keep the main text clean and propulsive.",
      "Use em dashes sparingly or not at all; prefer commas, parentheses, and separate sentences for asides and clarifications.",
      "Include parenthetical asides in the body text for brief, conversational interjections that would interrupt flow if given their own sentence."
    ],
    "do_not": [
      "Do NOT open with a throat-clearing introduction that surveys the topic abstractly before getting to the point \u2014 start with something concrete and engaging within the first two sentences.",
      "Do NOT end with a neat, tidy summary that restates all points \u2014 prefer endings that open out into a broader principle or leave the reader with a final provocative thought.",
      "Do NOT use formatting like bold, italics, or block quotes for emphasis within paragraphs \u2014 let sentence structure and placement do the work of emphasis."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them.)\"",
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"The spread of the term 'political correctness' meant the beginning of the end of political correctness, because it enabled one to attack the phenomenon as a whole without being accused of any of the specific heresies it sought to suppress.\""
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual curiosity and plain-spoken directness",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone from medium-length declarative sentences using a plain subject-verb-object structure with one or two subordinate additions.",
      "Alternate between medium explanatory sentences and short declarative punches \u2014 follow a compound or complex sentence with a terse, emphatic one to create a conversational pulse.",
      "Chain clauses with commas and coordinating conjunctions (especially 'and,' 'but,' 'because') rather than semicolons \u2014 favor parataxis over deeply nested subordination.",
      "Use short sentences and occasional fragments as rhetorical punctuation \u2014 place them after a buildup to land a point with force, but keep them as the exception, not the default rhythm.",
      "Open sentences with simple subjects and active verbs \u2014 get to the point first, then qualify or extend.",
      "Begin sentences with conjunctions ('And,' 'But,' 'Or') freely to maintain a spoken, thinking-aloud cadence.",
      "When building longer sentences, do so by stacking concrete examples or conditions using parallel structures, not by embedding multiple levels of relative clauses."
    ],
    "do_not": [
      "Do NOT write sentences with deeply nested subordinate clauses or academic-style embedding \u2014 keep nesting shallow and readable.",
      "Do NOT use semicolons as a primary sentence-joining device \u2014 they should be rare or absent.",
      "Do NOT let sentences grow long through abstraction \u2014 length should come from stacking concrete specifics, not from piling on qualifiers and hedges.",
      "Do NOT front-load sentences with participial phrases or elaborate subordinate clauses before the main clause \u2014 lead with the subject and verb, then extend.",
      "Do NOT maintain uniform sentence length \u2014 monotonous rhythm kills the conversational energy."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a collegial, thinking-aloud register \u2014 as if you are a smart friend reasoning through a problem over coffee, not lecturing from a podium.",
      "Use 'you' as the dominant address mode to pull the reader into the argument; shift to 'I' for personal anecdotes and convictions; use 'we' occasionally to signal shared inquiry.",
      "Signal confidence through plain assertion rather than intensifiers or superlatives \u2014 state claims directly: 'X is true' rather than 'It is undeniably the case that X.'",
      "Express uncertainty honestly and specifically with phrases like 'I think,' 'I suspect,' 'it seems to me,' 'perhaps' \u2014 but only at moments of genuine uncertainty, not as a verbal tic.",
      "Use contractions freely in expository passages to maintain conversational warmth.",
      "Maintain a tone of earnest intellectual curiosity \u2014 convey excitement through the ideas themselves and curiosity-driven phrasing, not through exclamation marks or hyperbole.",
      "Include occasional self-aware admissions of past ignorance or confusion to build trust before delivering a conclusion."
    ],
    "do_not": [
      "Do NOT adopt a detached, clinical, or impersonal academic voice \u2014 never write as if observing from outside; always write as someone personally invested in the question.",
      "Do NOT use formal academic distancing language ('one might argue,' 'it could be posited,' 'heretofore,' 'notwithstanding').",
      "Do NOT use exclamation marks or hyperbolic language to convey enthusiasm.",
      "Do NOT adopt a lecturing, preachy, or morally indignant tone \u2014 invite the reader to think alongside you.",
      "Do NOT use jargon or inflated language when a plain word works \u2014 prefer 'hard' over 'arduous,' 'figure out' over 'ascertain.'"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern through concrete examples before naming the principle \u2014 let the reader see the pattern emerge inductively, then state the generalization.",
      "Advance ideas through a dialectical structure: assert a claim, then immediately complicate it with 'but,' 'though,' or 'the problem is' \u2014 treat every strong claim as an invitation to explore its limits.",
      "Use everyday analogies and vivid concrete comparisons to make abstract ideas tangible \u2014 prefer analogies drawn from ordinary life over technical or literary ones.",
      "Anticipate counterarguments by raising them yourself, conversationally ('One difficulty here, though,' 'Sounds a bit extreme, you think'), then reason through them rather than dismissing them.",
      "Structure the overall argument as an exploration \u2014 the essay should feel like guided discovery, not a pre-packaged thesis defense.",
      "Use questions as pivots to advance the argument \u2014 pose the question, then answer it in the same or next paragraph.",
      "Build arguments through historical examples, personal observation, thought experiments, and named stories (specific people and companies) rather than data, statistics, or citations.",
      "Derive practical heuristics from theoretical principles \u2014 after establishing a pattern, extract an actionable rule and state it plainly."
    ],
    "do_not": [
      "Do NOT present arguments as finished products \u2014 maintain the feeling of live reasoning, as if discovering insights in real time.",
      "Do NOT rely on citations, data, statistics, or appeals to authority as primary evidence.",
      "Do NOT dismiss counterarguments or wave them away \u2014 each objection should be taken seriously enough to reason through.",
      "Do NOT use formal logical connectives like 'therefore,' 'hence,' 'consequently' \u2014 let the logic be implicit in the sequence of observations."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim or a transitional pivot ('But,' 'Another place where,' 'The third component') \u2014 lead with the point, then elaborate.",
      "Use single-sentence paragraphs for emphasis at key moments \u2014 to land a verdict, deliver a punchline, or mark a conceptual turning point \u2014 but use them as punctuation, not as the dominant paragraph type.",
      "Keep paragraphs tight \u2014 each paragraph should develop one idea or one step in the argument; when you've made the point, stop.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the next paragraph's opening sentence should make the connection clear without needing 'Furthermore,' 'Moreover,' or 'Additionally.'",
      "Close paragraphs by either landing a conclusion or pivoting to a complication that the next paragraph will address \u2014 avoid trailing off.",
      "Mix paragraph lengths freely \u2014 follow a substantial multi-sentence paragraph with a shorter one to create visual and rhythmic contrast."
    ],
    "do_not": [
      "Do NOT use formal transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' 'Consequently,' 'In conclusion' \u2014 use 'But,' 'And,' 'So,' or let the logical connection speak for itself.",
      "Do NOT write paragraphs that meander through multiple distinct ideas \u2014 one paragraph, one move.",
      "Do NOT pad paragraphs with summary sentences that restate what was just said.",
      "Do NOT bury the key insight in the middle of a paragraph \u2014 place it at the beginning or end where it has maximum impact."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary persuasive tool \u2014 connect wildly different domains to reveal universal structure beneath surface differences.",
      "Keep analogies vivid, concrete, and drawn from everyday life (fashion, fire, dogs circling, submarine sandwiches, babies, mapmaking) \u2014 they should clarify, not decorate.",
      "Use parallel structure extensively to build rhythm and hammer home a point \u2014 repeat syntactic patterns across consecutive sentences.",
      "Deploy rhetorical questions to introduce new sections or pivot the argument, then answer them immediately.",
      "Use direct address and imperatives to engage the reader actively: 'Think about...,' 'See if you can guess,' 'Stop and ask yourself' \u2014 make the reader a participant, not a spectator.",
      "Repeat key terms deliberately rather than reaching for synonyms \u2014 repetition builds conceptual clarity and thematic cohesion.",
      "Deploy pithy, aphoristic sentences that condense a complex idea into a single memorable formulation, placed at paragraph endings.",
      "Use antithesis to sharpen distinctions \u2014 place two opposing ideas in parallel grammatical structures to make the contrast vivid."
    ],
    "do_not": [
      "Do NOT use literary or ornamental metaphors that call attention to themselves \u2014 analogies should be functional and immediately clear.",
      "Do NOT use exclamation marks or emphatic interjections \u2014 conviction comes from the argument's structure, not tonal markers.",
      "Do NOT use extended metaphors that run for more than a couple of sentences \u2014 make the analogy, extract the point, and move on.",
      "Do NOT rely on jargon, technical terminology, or insider language \u2014 use plain words any intelligent reader can follow."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, declarative observation about how the world works \u2014 the first sentence should be broad enough to intrigue but specific enough to signal direction.",
      "Build the opening by stacking examples that illustrate the opening claim before pivoting to complicate or deepen the pattern \u2014 the first few paragraphs should feel like inductive reasoning.",
      "Close with a forward-looking or expansive note \u2014 a reframing, a distilled principle, or a suggestion that the thinking continues beyond the page \u2014 rather than a tidy summary.",
      "Use bracketed numbered footnotes to handle digressions, qualifications, historical context, and tangential-but-interesting observations without interrupting the main flow.",
      "Format as flowing prose with minimal structural apparatus \u2014 avoid bullet points or numbered lists in the body; use standalone-word section headers sparingly when needed.",
      "The essay should feel like a single continuous act of thinking that moves from observation to analysis to practical advice, getting progressively more specific as it goes.",
      "Include acknowledgments of draft readers at the end when appropriate, signaling the essay's origin in a community of thinkers."
    ],
    "do_not": [
      "Do NOT end with a neat summary or restatement of all points \u2014 the ending should open up rather than close down.",
      "Do NOT open with a question, a quotation, or a dramatic anecdote \u2014 open with a plain, declarative observation.",
      "Do NOT use formatting crutches like bold text, italics for emphasis, or bullet-point lists within the essay body \u2014 the prose itself must carry all structural weight."
    ]
  },
  "signature_phrases": {
    "use": [
      "I think",
      "I suspect",
      "it seems to me",
      "as far as I can tell",
      "in practice",
      "in fact",
      "the problem is",
      "the question is",
      "one of the most important",
      "if you",
      "you'd",
      "but",
      "and",
      "so",
      "of course",
      "it turns out",
      "the answer is",
      "probably",
      "almost always",
      "the kind of",
      "that's why",
      "the trick is",
      "what you want",
      "there's a",
      "it's not just",
      "the way to"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "consequently",
      "in conclusion",
      "it should be noted",
      "one might argue",
      "it could be posited",
      "heretofore",
      "notwithstanding",
      "paradigm shift",
      "leverage (as a verb)",
      "synergy",
      "utilize",
      "facilitate",
      "stakeholder",
      "robust",
      "holistic",
      "actionable (as corporate jargon)",
      "circle back",
      "deep dive",
      "unpack (as business jargon)",
      "at the end of the day",
      "let's be clear",
      "make no mistake",
      "needless to say"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'additionally,' and 'consequently' with 'but,' 'and,' 'so,' or simply remove the transition and let the ideas flow by adjacency.",
    "Convert passive constructions to active \u2014 'mistakes were made by founders' becomes 'founders made mistakes.'",
    "Break any sentence with more than two levels of subordination into two or more sentences.",
    "Replace formal hedges ('it could be argued that,' 'one might suggest') with plain ones ('I think,' 'I suspect,' 'probably').",
    "Replace Latinate vocabulary with Anglo-Saxon equivalents \u2014 'utilize' becomes 'use,' 'facilitate' becomes 'help,' 'commence' becomes 'start.'",
    "After any stretch of medium-to-long sentences, insert a short declarative sentence that delivers the point with blunt force.",
    "Replace abstract nouns with concrete examples \u2014 don't say 'innovation in various sectors,' say 'writing software for hobbyists, or starting a site to let people rent airbeds.'",
    "Remove any sentence that merely restates what the previous sentence said in different words.",
    "Convert any bullet-point list into flowing prose with parallel sentence structure.",
    "If a paragraph makes more than one distinct point, split it into separate paragraphs.",
    "Replace exclamation marks with periods \u2014 let the content carry the emphasis.",
    "When you find a formal transition phrase opening a paragraph, delete it and see if the paragraph still flows logically from the previous one \u2014 it almost always will."
  ]
}
```