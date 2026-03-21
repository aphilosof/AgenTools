# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `graham-voice`
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

### sample-1.txt (3300 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "3300",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause followed by one qualifying or extending clause, connected with a comma and conjunction or relative pronoun: 'You don't want to start a startup to do something that everyone agrees is a good idea, or there will already be other companies doing it.'",
      "When making a key point, deliver it as a clean standalone declarative with no subordinate clauses: 'I really want to know.' / 'I know mine does.'",
      "Chain conditions and consequences using if-then structures, placing the conditional clause first: 'If you're naturally independent-minded, you're going to find it frustrating to be a middle manager.'",
      "Use parallel structure when presenting contrasting or analogous cases \u2014 repeat the syntactic frame with swapped content: 'the unlikely becomes impossible, and the probable becomes certain.'",
      "When elaborating on a point, follow a statement with a sentence that begins with a demonstrative or connector that reframes or extends the previous idea: 'It's not mere skepticism, but an active delight in ideas that subvert the conventional wisdom, the more counterintuitive the better.'"
    ],
    "do_not": [
      "Do NOT use elaborate subordination with multiple nested dependent clauses \u2014 keep clause depth shallow (one or two levels at most).",
      "Do NOT use periodic sentences that withhold the main point until the end \u2014 lead with the claim, then qualify.",
      "Do NOT use semicolons to link independent clauses as a regular habit; prefer periods or conjunctions.",
      "Do NOT front-load sentences with adverbial phrases or participial openings \u2014 enter sentences through the subject or a short transition word."
    ],
    "evidence": [
      "It's not enough just to be correct. Your ideas have to be both correct and novel.",
      "The most general is to cultivate an attitude of skepticism.",
      "If you're naturally independent-minded, you're going to find it frustrating to be a middle manager. And if you're naturally conventional-minded, you're going to be sailing into a headwind if you try to do original research."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when sharing personal experience or opinion ('In my experience,' 'I think so'), and shift to second person ('you') when giving advice or drawing the reader into a thought experiment \u2014 the reader should feel directly addressed as a peer, not lectured at.",
      "Maintain a tone that is conversational yet intellectually serious \u2014 the voice of someone thinking out loud with the reader, not performing authority. Signal certainty with simple declaratives ('I know mine does') and uncertainty with explicit hedges ('I would think so,' 'it seems to me,' 'perhaps').",
      "Use contractions sparingly and naturally \u2014 deploy them in passages that aim for a casual, spoken feel, but allow uncontracted forms to stand when the sentence has a more measured or emphatic quality.",
      "Avoid emotional amplification. Express even strong convictions with a calm, matter-of-fact delivery: 'To an independent-minded person that would seem revolting' \u2014 the word 'revolting' carries the force; the sentence frame stays neutral.",
      "Use dry, understated humor through unexpected analogies rather than jokes or wit: compare ideologies to 'a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.'"
    ],
    "do_not": [
      "Do NOT adopt a lecturing or professorial tone \u2014 never speak down to the reader or assume they need hand-holding.",
      "Do NOT use exclamatory language, emphatic intensifiers ('absolutely,' 'incredibly'), or breathless enthusiasm.",
      "Do NOT hedge everything \u2014 balance tentative phrasing with confident assertions to avoid sounding wishy-washy.",
      "Do NOT use sarcasm or biting irony \u2014 the humor should be warm and inviting, never at the reader's expense."
    ],
    "evidence": [
      "I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.",
      "Can you increase your fastidiousness about truth? I would think so.",
      "I really want to know."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce a central claim by first showing a concrete, familiar pattern (scientists need novel ideas, investors need contrarian bets), then generalize to the abstract principle. Build from specific to general, using multiple examples before naming the pattern.",
      "Present counterarguments and complications not as objections to defeat but as natural next steps in the exploration \u2014 use transition phrases like 'One difficulty here, though' or 'But this pattern isn't universal' to acknowledge complexity without undermining the main thesis.",
      "Advance arguments by asking questions the reader is likely thinking, then answering them: 'Can you make yourself more independent-minded? I think so.' This creates a dialogue structure within monologue.",
      "Use analogies to bridge abstract concepts to visceral understanding \u2014 compare intellectual processes to physical ones (submarine sandwich analogy for ideology, control rods for conformism, muscles for mental faculties).",
      "When presenting a taxonomy or framework (e.g., three components of independent-mindedness), introduce it cleanly, then explore each component in sequence, and close by showing how the components interact or substitute for each other.",
      "Use footnotes/endnotes for tangential but interesting asides, qualifications, and real-world examples that would interrupt the main flow \u2014 this keeps the main argument lean while rewarding careful readers."
    ],
    "do_not": [
      "Do NOT use formal logical apparatus (premises, conclusions, QED) \u2014 let the logic emerge from the sequence of observations and examples.",
      "Do NOT strawman opposing views or dismiss them \u2014 always acknowledge the genuine appeal or logic of the other side before moving past it.",
      "Do NOT cite statistics, studies, or authorities by name in the main text \u2014 ground arguments in personal observation, thought experiments, and common experience."
    ],
    "evidence": [
      "There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example, it's not enough just to be correct.",
      "One difficulty here, though, is that people are often mistaken about where they fall on the spectrum from conventional- to independent-minded.",
      "It seems to me that it has three components: fastidiousness about truth, resistance to being told what to think, and curiosity."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation in the first sentence, then develop it with examples, qualifications, or implications. The first sentence should be self-sufficient \u2014 a reader scanning just topic sentences should get the argument's skeleton.",
      "Use single-sentence paragraphs for emphasis at pivotal moments \u2014 to deliver a punchline, a confession, or a turning point: 'I really want to know.' / 'I know mine does.'",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 let the next paragraph pick up the thread naturally by addressing the question or implication left open by the previous one.",
      "When shifting to a new section or subtopic, use a rhetorical question or a short bridge sentence that names the pivot: 'Can you make yourself more independent-minded?' / 'Is there a way to cultivate curiosity?'",
      "Close paragraphs with the most resonant or surprising statement, not with summary \u2014 let the paragraph's last sentence do new work rather than restating what came before."
    ],
    "do_not": [
      "Do NOT use heavy-handed transition phrases ('Furthermore,' 'Moreover,' 'In addition,' 'In conclusion') \u2014 transitions should feel invisible.",
      "Do NOT write paragraphs that are merely lists of examples without a governing idea \u2014 every paragraph should advance the argument, not just illustrate it.",
      "Do NOT end paragraphs with trailing qualifications that deflate the point \u2014 if a qualification is needed, put it in the middle and end strong."
    ],
    "evidence": [
      "Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.",
      "I know mine does.",
      "The best place to find undiscovered ideas is where no one else is looking."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map abstract intellectual concepts onto concrete, sensory experiences \u2014 food (submarine sandwich), fashion (shirts spreading like waves), physics (control rods, chain reactions), appetite (gluttons of curiosity).",
      "Deploy rhetorical questions to transition between sections and to voice the reader's natural next thought \u2014 'Do you want to do the kind of work where you can only win by thinking differently from everyone else?' \u2014 then answer them directly.",
      "Use deliberate repetition of key terms ('independent-minded,' 'conventional-minded,' 'curiosity,' 'fastidiousness') rather than seeking synonyms \u2014 the repetition creates a precise vocabulary and hammers home the conceptual framework.",
      "Employ antithesis and parallel contrast to sharpen distinctions: place the two sides of a contrast in matching syntactic frames: 'If you're naturally independent-minded... And if you're naturally conventional-minded...'",
      "Use direct address imperatives sparingly but effectively \u2014 'Treat it as a puzzle,' 'See if you can guess which' \u2014 to pull the reader into active participation.",
      "Deploy parenthetical asides within sentences to add a qualifying thought or a wry aside without breaking the sentence's momentum: '(which includes practically everyone, if you dig deep enough)'."
    ],
    "do_not": [
      "Do NOT use literary or poetic metaphors \u2014 keep figurative language grounded in everyday or scientific domains.",
      "Do NOT use anaphora or other conspicuous rhetorical flourishes that draw attention to the writing as performance.",
      "Do NOT use lists with bullet points or numbered items in the main text \u2014 integrate enumerations into prose ('it has three components: X, Y, and Z')."
    ],
    "evidence": [
      "just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.",
      "you notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt.",
      "Treat it as a puzzle. You know that some accepted ideas will later turn out to be wrong. See if you can guess which."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open an essay by stating the core observation in plain, general terms \u2014 no anecdote, no provocation, no throat-clearing. Jump straight into the idea: 'There are some kinds of work that you can't do well without thinking differently from your peers.'",
      "Build the opening section by stacking concrete examples (scientists, investors, founders, essayists) that all demonstrate the same pattern, then pivot to the complication or exception that gives the essay its real thesis.",
      "Close the essay not with a grand summary or call to action, but with a quiet, practical suggestion or a reframing that points the reader forward: 'do what you're curious about.' The ending should feel like a compass needle settling, not a gavel coming down.",
      "Use horizontal rules or separator markers to divide the essay into major sections when the topic shifts significantly \u2014 these function like chapter breaks in a long argument.",
      "Include numbered endnotes for digressions, counterexamples, real-world applications, and self-aware commentary on the essay's own claims \u2014 this creates a two-layered reading experience.",
      "Use italics and quotation marks for emphasis and to mark phrases being examined as concepts ('do what you love,' 'core competency') rather than for decoration."
    ],
    "do_not": [
      "Do NOT open with a question, a quote, or an anecdote \u2014 begin with a direct observation about the world.",
      "Do NOT close with a dramatic rhetorical flourish, a callback to the opening, or a neat bow \u2014 let the essay trail off into its most actionable or thought-provoking implication.",
      "Do NOT use headers, subheaders, or bold text to organize sections \u2014 use separator lines and natural topic sentences to guide the reader."
    ],
    "evidence": [
      "There are some kinds of work that you can't do well without thinking differently from your peers.",
      "Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'",
      "[1] By the time they reach adulthood, most people know roughly how smart they are (in the narrow sense of ability to solve pre-set problems), because they're constantly being tested and ranked according to it."
    ]
  }
}
```

### sample-2.txt (3390 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3390,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend them with one or two qualifying or elaborating clauses using commas, dashes, or coordinating conjunctions \u2014 but rarely pile on more than two subordinate layers.",
      "Use the pattern of a bold declarative sentence followed by a sentence that unpacks or qualifies it: 'Fame grows exponentially because existing fans bring you new ones. But the fundamental reason it's so concentrated is thresholds.'",
      "Chain ideas across sentences using pronoun reference and repetition of key terms rather than formal transitional phrases. Let 'this,' 'that,' 'which,' and 'but' do the connective work.",
      "When building compound sentences, favor 'but' and 'and' as the primary joiners. Use subordinating conjunctions ('because,' 'when,' 'if') to embed causal or conditional logic mid-sentence rather than splitting into separate sentences.",
      "Deploy parallel structure when listing examples or building analogies: 'the only way to get the resources you needed, the only way to have colleagues, and the only way to get distribution.'"
    ],
    "do_not": [
      "Do not write ornate, multi-layered sentences with nested parentheticals or academic subordination chains. Keep the syntax plain even when the idea is complex.",
      "Do not use flowery transitional phrases like 'Furthermore,' 'Moreover,' 'In addition to the aforementioned.' Transitions should feel conversational, not formal.",
      "Do not front-load sentences with long participial or prepositional phrases before the subject. Lead with the subject or a short conditional clause."
    ],
    "evidence": [
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"It's not just a matter of trying hard. I'm going to take a shot giving a recipe in one paragraph.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as the default, shifting to second person ('you') when delivering advice or inviting the reader to apply an idea to themselves. Use 'we' when establishing shared human experience or shared ignorance.",
      "Maintain the tone of a smart friend explaining something over coffee \u2014 authoritative but not pompous, confident but willing to hedge when genuinely uncertain. Signal confidence through directness, not through hedging or qualifications.",
      "Express uncertainty with honest, unadorned phrases: 'as far as I can tell,' 'I doubt we could ever predict this with certainty,' 'it's not far from the truth.' Avoid academic hedging machinery.",
      "Use contractions sparingly and naturally \u2014 they appear in conversational asides and direct address but are withheld in more declarative, thesis-like sentences to give those statements more weight.",
      "Adopt a stance of intellectual companionship: the author is thinking through the problem in real time and bringing the reader along, occasionally expressing genuine surprise at his own conclusions."
    ],
    "do_not": [
      "Do not adopt a lecturing or professorial tone. Never talk down to the reader or explain things they would obviously know.",
      "Do not use false modesty or excessive self-deprecation. The author is confident in his reasoning and states conclusions directly.",
      "Do not use corporate or bureaucratic register \u2014 no 'leverage,' 'synergy,' 'stakeholders,' or management-speak."
    ],
    "evidence": [
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"As far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"I'm going to take a shot giving a recipe in one paragraph.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, surprising claim that reframes something the reader thought they understood, then spend the rest of the piece unpacking and substantiating that claim through multiple angles.",
      "Build arguments through concrete examples first, abstract principle second. Introduce a phenomenon (bacterial cultures, startups, empires, scholarship), then extract the general pattern from the examples.",
      "Handle counterarguments by acknowledging them briefly, then pivoting to show they miss the deeper point: 'Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.'",
      "Use a recursive, exploratory logic flow: introduce a concept, explore it through examples, then circle back to refine or extend the original concept. Let the argument spiral outward rather than march linearly.",
      "Derive heuristics and practical advice from the theoretical framework. After establishing a pattern, ask 'what can we do with this?' and offer actionable takeaways.",
      "Use footnotes to handle tangents, qualifications, and interesting-but-secondary points that would break the flow of the main argument."
    ],
    "do_not": [
      "Do not present arguments as numbered lists of points or formal logical syllogisms. The structure should feel like exploration, not a legal brief.",
      "Do not dismiss counterarguments without engaging with them \u2014 acknowledge the grain of truth, then show why the larger point still holds.",
      "Do not rely on appeals to authority or citations. Build arguments from first principles, everyday observation, and historical examples."
    ],
    "evidence": [
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.\"",
      "\"So one heuristic here is to be driven by curiosity rather than careerism \u2014 to give free rein to your curiosity instead of working on what you're supposed to.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that makes a claim or introduces a new angle, then develop it with examples, qualifications, or implications. The topic sentence frequently contains the word 'but' or introduces a contrast with the previous paragraph.",
      "Use single-sentence paragraphs for emphasis \u2014 to land a punchline, deliver a stark conclusion, or create a dramatic pause after a buildup: 'You get no customers, and you go out of business.'",
      "Connect paragraphs through conceptual continuation rather than explicit transitions. The last sentence of one paragraph often sets up the first sentence of the next through a shared term or idea.",
      "Within paragraphs, sequence ideas from specific to general or from example to principle. Start with an observable phenomenon, then explain why it works that way.",
      "Close paragraphs with a sentence that either delivers the payoff of the paragraph's argument or pivots toward the next topic, creating forward momentum."
    ],
    "do_not": [
      "Do not use formulaic transition sentences at the start of paragraphs ('Another important point is...', 'In conclusion...'). Let the logical connection between ideas speak for itself.",
      "Do not write paragraphs that merely summarize or restate what was already said. Every paragraph must advance the argument or introduce new information.",
      "Do not bury the key insight at the end of a long, winding paragraph. If the insight is important, give it a prominent position \u2014 often the opening sentence."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The most common case of exponential growth in preindustrial times was probably scholarship. The more you know, the easier it is to learn new things.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday analogies to make abstract concepts tangible: bacterial cultures, rice grains on a chessboard, riding a bicycle, Russian roulette. Draw from science, history, and common experience rather than literary or pop culture references.",
      "Employ rhetorical questions to pivot between sections or to introduce a new line of inquiry: 'Are there general rules for finding situations with superlinear returns?' Then immediately answer the question.",
      "Use deliberate repetition of key terms and phrases to build conceptual coherence \u2014 repeat 'superlinear returns,' 'exponential growth,' 'thresholds' without reaching for synonyms. The repetition reinforces the framework.",
      "Deploy the pattern of 'Not X, but Y' or 'It's not just X, but also Y' to sharpen distinctions and add layers: 'not an artifact of rules we've invented' / 'not just correct, but novel as well.'",
      "Use direct address and imperatives sparingly but at key moments to pull the reader into the argument: 'Choose work you have a natural aptitude for.' 'Be honest, especially with yourself.'",
      "Use aphoristic compression to deliver key insights: pack a complex idea into a single memorable sentence that could stand alone as a maxim."
    ],
    "do_not": [
      "Do not use extended metaphors or allegories. Analogies should be brief \u2014 one or two sentences \u2014 then return to the main argument.",
      "Do not use literary or poetic devices like alliteration, assonance, or elaborate imagery. The prose is persuasive through clarity and logic, not through beauty.",
      "Do not use sarcasm or irony as rhetorical tools. The tone is earnest and direct."
    ],
    "evidence": [
      "\"every child is surprised, the first time they hear it, by the story of the man who asks the king for a single grain of rice the first day and double the amount each successive day.\"",
      "\"These look smooth from a distance, but up close they're full of gaps.\"",
      "\"Be honest, especially with yourself. Exercise and eat and sleep well and avoid the more dangerous drugs.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal, slightly confessional statement that frames the essay's big idea as a corrected misunderstanding or a surprising realization. The very first sentence should contain the essay's thesis in compressed form.",
      "Establish the stakes immediately: why this idea matters, what changes when you understand it. Do this within the first few paragraphs.",
      "Close by zooming out to the broadest implication and then narrowing back to individual action. The ending should feel like advice that emerges naturally from the argument, not a tacked-on conclusion.",
      "Use numbered footnotes in brackets [1], [2] etc. for digressions, qualifications, and autobiographical asides. Place footnote text at the end of the piece. This keeps the main argument clean while allowing intellectual honesty about edge cases.",
      "End with a note of encouragement or an inspiring reframe, but grounded in the logic of the essay rather than empty motivation: curiosity as a practical tool, not just a virtue.",
      "Use minimal formatting \u2014 no headers, no bullet points, no bold text in the body. The essay is a continuous flow of paragraphs with only footnote markers as structural interruption.",
      "Close with a brief acknowledgments line thanking draft readers by name."
    ],
    "do_not": [
      "Do not open with a dictionary definition, a broad historical sweep, or a generic question. Start with a specific personal insight.",
      "Do not end with a summary of points made. The reader should feel the argument has arrived somewhere new, not circled back to the beginning.",
      "Do not use subheadings, numbered sections, or other explicit structural scaffolding in the body of the essay. The structure should be implicit in the argument's flow."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\"",
      "\"Thanks to Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan for reading drafts\""
    ]
  }
}
```

### sample-3.txt (2890 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2890,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause with one or two qualifying phrases \u2014 keep the core structure clean and readable, then append nuance through trailing clauses or parenthetical asides.",
      "Chain ideas within longer sentences using coordinating conjunctions ('and', 'but', 'or') rather than subordinating conjunctions \u2014 place the conjunction at natural breath points to maintain a conversational, additive flow.",
      "Use parallelism to bundle related items into a single sentence: 'you have to understand X, see clearly Y, aim as close to Z as you can, accurately judge W, and put in as many hours as you can.'",
      "When delivering a key insight or conclusion, isolate it in a short, standalone sentence that breaks the surrounding rhythm \u2014 let the brevity signal importance.",
      "Open sentences with the subject or a simple adverbial ('Of course,' 'Strangely enough,' 'And yet') rather than with heavy subordinate clauses \u2014 front-load clarity, not complexity.",
      "Use conditional and hypothetical structures ('if you\u2026', 'if you're\u2026') to walk the reader through reasoning step by step, making abstract principles feel personally applicable."
    ],
    "do_not": [
      "Do not write ornate, heavily embedded sentences with multiple levels of subordination \u2014 never bury the main verb three clauses deep.",
      "Do not string together more than two independent clauses with semicolons \u2014 prefer a period and a fresh sentence.",
      "Do not use participial phrases at the start of sentences as a habitual pattern ('Having considered\u2026', 'Walking through\u2026') \u2014 these create a literary formality that breaks the conversational register."
    ],
    "evidence": [
      "There isn't.",
      "You need both.",
      "Working hard is not just a dial you turn up to 11. It's a complicated, dynamic system that has to be tuned just right at each point."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal experience, but shift to second person ('you') when generalizing a principle \u2014 this creates a pattern of 'here's what I learned, here's how it applies to you.'",
      "Maintain the tone of a smart friend thinking out loud \u2014 authoritative but not dogmatic, willing to qualify and self-correct mid-argument.",
      "Signal uncertainty with plain, conversational hedges: 'I suspect,' 'I think,' 'perhaps,' 'maybe' \u2014 never with academic hedges like 'it could be argued that.'",
      "Express confidence through simplicity and directness, not through emphatic language \u2014 state conclusions plainly as if they're obvious once you see them.",
      "Use contractions sparingly and deliberately \u2014 deploy them to maintain conversational warmth in key moments but allow many sentences to remain uncontracted, which creates a slightly elevated but approachable register.",
      "Treat the reader as intellectually equal but less experienced \u2014 share hard-won insights without condescension, as if catching someone up on what you've figured out."
    ],
    "do_not": [
      "Do not adopt an academic or institutional voice \u2014 never write 'it is important to note' or 'one might consider.'",
      "Do not be self-deprecating or overly humble \u2014 acknowledge uncertainty when genuine, but don't undermine your own authority.",
      "Do not use exclamatory enthusiasm or motivational-speaker energy \u2014 no 'You can do it!' or 'This is amazing!'"
    ],
    "evidence": [
      "I wasn't sure of that as a kid.",
      "I suspect most people have to learn what work is before they can love it.",
      "Now I know the answer to that question. There isn't."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a deceptively simple observation or question, then spend the essay revealing the hidden complexity beneath it \u2014 the arc moves from 'this seems obvious' to 'actually it's much harder than you think.'",
      "Introduce claims as personal discoveries: 'One thing I know is\u2026', 'What I've learned since\u2026' \u2014 ground abstract principles in autobiography before generalizing.",
      "Use concrete examples from famous figures (Gates, Messi, Wodehouse, Hardy, Newton, Mozart) to illustrate points \u2014 name real people and quote them directly to make abstract ideas tangible.",
      "Preemptively voice the reader's likely objection, then address it: 'Sounds a bit extreme, you think. And yet\u2026' \u2014 acknowledge the counterargument and then push past it.",
      "Build arguments by progressive refinement: state a principle, then immediately complicate it with a 'but' or 'and yet' or a qualifying sentence \u2014 each pass adds nuance without retracting the original claim.",
      "Use analogies and metaphors drawn from everyday experience (a dog circling before lying down, a pursuing beast, picking a lemon in a garden) to make abstract ideas visceral.",
      "Pose questions that the essay then answers \u2014 use them as structural pivots rather than rhetorical decoration: 'But how much time? And what should you do if work that was going well stops going well?'"
    ],
    "do_not": [
      "Do not present a thesis and then mechanically list supporting points \u2014 the essay should feel like thinking in progress, not a completed outline.",
      "Do not cite studies, statistics, or formal evidence \u2014 use named individuals and direct quotes instead of data.",
      "Do not dismiss counterarguments \u2014 always acknowledge them as reasonable before explaining why the main point still holds."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.",
      "That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct assertion or a transitional claim that builds on the previous paragraph \u2014 rarely use topic sentences that merely announce what the paragraph will discuss.",
      "Close paragraphs with the strongest or most surprising statement \u2014 end on the insight, not the setup. Let the final sentence carry the weight.",
      "Use single-sentence paragraphs to deliver punchlines, conclusions, or pivots \u2014 isolate the key idea for emphasis.",
      "Sequence ideas within paragraphs by moving from concrete to abstract (or vice versa): start with an example or observation, then extract the principle, or state the principle then illustrate it.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the ideas themselves create continuity. When transitions are used, keep them short: 'Of course,' 'And yet,' 'So.'",
      "Use footnote-style numbered asides to handle tangents and qualifications without disrupting the main argument's flow."
    ],
    "do_not": [
      "Do not begin paragraphs with heavy transition phrases like 'Furthermore,' 'In addition,' 'Moreover' \u2014 these create an academic cadence foreign to this voice.",
      "Do not use paragraphs as containers for a single uniform idea with supporting evidence neatly arranged \u2014 allow paragraphs to pivot mid-stream or trail into a new thought."
    ],
    "evidence": [
      "There isn't.",
      "Perhaps something changes at adolescence. That would make sense.",
      "There was no voice calling to him that he could have heard."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use direct address ('you') and imperative constructions to make the reader feel personally implicated: 'you have to learn,' 'get that idea out of your head.'",
      "Deploy metaphors and analogies that are concrete and homely rather than literary or elevated \u2014 'a dog circling while it decides exactly where to lie down,' 'the pursuing beast,' 'a dial you turn up to 11.'",
      "Use parallel structure to give lists and compound ideas a sense of inevitability: 'you need great natural ability and to have practiced a lot and to be trying very hard.'",
      "Employ rhetorical questions at structural turning points to reframe the argument: 'Was there, perhaps, some way to evade hard work through sheer brilliance?' followed by the answer.",
      "Use repetition of key phrases ('real work,' 'working hard,' 'the shape of real work') across paragraphs to create thematic cohesion \u2014 let these phrases become refrains that anchor the essay.",
      "Integrate extended quotations from other writers (Wodehouse, Hardy) as evidence, letting their words carry emotional and intellectual weight the essayist's paraphrase could not."
    ],
    "do_not": [
      "Do not use elaborate or extended metaphors that dominate a paragraph \u2014 keep figurative language brief and functional, then return to direct statement.",
      "Do not use exclamation marks or emphatic repetition for emotional effect \u2014 let the ideas themselves create emphasis through placement and brevity.",
      "Do not use alliteration, assonance, or other sound-based devices deliberately \u2014 the prose rhythm comes from syntax, not phonetics."
    ],
    "evidence": [
      "But once I get started on one, I don't have to push myself to work, because there's always some error or omission already pushing me.",
      "Like a Spanish Flu victim, you're fighting your own immune system: Instead of giving up, you tell yourself, I should just try harder.",
      "Working hard is not just a dial you turn up to 11."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a sentence that appears to undercut the essay's own premise \u2014 create a paradox or surprise that draws the reader in by challenging their assumption about the topic: 'It might not seem there's much to learn about how to work hard.'",
      "Structure the essay as an exploration rather than an argument \u2014 move through the topic's facets (what hard work is, how to find it, how to sustain it, how to choose what to work on) in a sequence that feels like the author thinking through the problem in real time.",
      "Close by zooming out to the meta-level \u2014 end with a synthesis that reframes everything discussed as part of a larger system, making the conclusion feel earned rather than merely stated.",
      "Use numbered footnotes (bracketed numbers like [1], [2]) for tangential thoughts, qualifications, and personal asides \u2014 place them at the end of the essay to keep the main text clean.",
      "Keep formatting minimal: no headers, no bold, no bullet points in the main text \u2014 let the prose itself organize the reader's attention through paragraph breaks and the logical flow of ideas.",
      "Use em dashes and parenthetical asides sparingly within sentences to insert quick qualifications or alternative framings without breaking the sentence's momentum."
    ],
    "do_not": [
      "Do not end with a call to action or motivational exhortation \u2014 close with an observation or insight that lets the reader draw their own conclusions.",
      "Do not open with an anecdote, a quote, or a dramatic scene \u2014 open with a direct, understated claim about the topic itself.",
      "Do not use subheadings, bullet points, or other structural formatting within the essay body \u2014 the piece should read as continuous prose."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.",
      "Like a Spanish Flu victim, you're fighting your own immune system: Instead of giving up, you tell yourself, I should just try harder. And who can say you're not right?"
    ]
  }
}
```

### sample-4.txt (3289 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3289,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single core claim, then extend with one or two qualifying clauses using commas, dashes, or parenthetical asides \u2014 avoid deep nesting of subordinate clauses.",
      "Chain ideas within sentences using coordinating conjunctions ('and,' 'but,' 'or') rather than subordinating conjunctions; let the sentence feel like a linear progression, not a hierarchy.",
      "Use compound sentences that pivot on 'but' to set up expectation and then subvert it \u2014 this is the signature move for introducing counterintuitive points.",
      "When a sentence needs to cover a sequence or process, use temporal markers ('at first,' 'then,' 'eventually,' 'later') to create a forward-moving narrative arc within the sentence.",
      "Vary rhythm by following a multi-clause explanatory sentence with a short declarative that delivers the punchline or judgment.",
      "Use the dash to insert a clarification, aside, or restatement mid-sentence rather than starting a new sentence \u2014 this keeps the reader inside the thought."
    ],
    "do_not": [
      "Do not write sentences with more than two levels of subordination \u2014 no 'which meant that because they had...' constructions.",
      "Do not use periodic sentence structures where the main verb is delayed until the end; always put the core assertion early.",
      "Do not write sentences that are purely decorative or atmospheric \u2014 every sentence must advance an argument or provide evidence."
    ],
    "evidence": [
      "\"They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.\"",
      "\"But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say 'Right then, give me your laptop' and set them up on the spot.\"",
      "\"Perfectionism is often an excuse for procrastination, and in any case your initial model of users is always inaccurate, even if you're one of them.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a knowledgeable insider sharing hard-won wisdom with people who need to hear it \u2014 collegial but authoritative, like an experienced mentor who respects the reader's intelligence but knows they're probably making specific mistakes.",
      "Alternate between first-person plural ('we') when speaking from institutional experience (Y Combinator) and second-person ('you') when giving direct advice \u2014 this creates a rhythm of 'here's what we've seen' followed by 'here's what you should do.'",
      "Signal confidence through plain assertion without hedging \u2014 state counterintuitive claims as facts, then support them with examples rather than qualifying them upfront.",
      "Use a conversational, slightly dry tone \u2014 inject wry observations and understated humor rather than jokes. Let irony emerge from juxtaposition of expectation and reality.",
      "When addressing common founder mistakes, be blunt and direct without being harsh \u2014 name the mistake clearly ('a combination of shyness and laziness') but frame it as understandable and fixable.",
      "Use contractions sparingly and strategically \u2014 deploy them in passages that are more conversational or when mimicking a founder's internal voice, but write in a slightly more formal register for key assertions."
    ],
    "do_not": [
      "Do not hedge major claims with 'I think,' 'perhaps,' 'it seems like' \u2014 commit to the assertion and let evidence do the convincing.",
      "Do not adopt an academic or distant tone; always write as someone who has personally witnessed and participated in what's being described.",
      "Do not be sycophantic toward founders or startups \u2014 maintain the stance of someone who has seen thousands of startups and can be honest about common failures."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"Who knew?\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated as a simple principle, then spend the rest of the piece proving it through accumulated examples \u2014 the structure is assertion-first, evidence-second.",
      "Build arguments through concrete startup case studies (Stripe, Airbnb, Facebook, Pebble, Wufoo) \u2014 name real companies and real founders, describe specific actions they took, and draw the general lesson from the specific story.",
      "Anticipate the reader's objections and address them inline \u2014 phrase the objection as something 'founders think' or 'would-be founders believe,' then dismantle it.",
      "Use analogies and metaphors to make abstract business concepts tangible: cranking car engines, contained fires, larvae, projectiles vs. powered aircraft, boulders vs. train cars.",
      "Progress through variations on the central theme rather than building a linear logical chain \u2014 each section is a different angle on 'do things that don't scale' (recruiting, delighting, narrowing, consulting, being manual).",
      "When presenting a counterargument to the reader's likely belief, first articulate why the wrong belief feels right ('it would be so much less work'), then explain why reality is different."
    ],
    "do_not": [
      "Do not present arguments as formal syllogisms or numbered logical steps \u2014 let the logic emerge from stories and examples.",
      "Do not cite academic research or statistics as primary evidence \u2014 use anecdotes from named companies and personal experience as the evidentiary backbone.",
      "Do not leave counterarguments unanswered \u2014 always close the loop by explaining why the intuitive objection is wrong."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"I occasionally meet founders who seem to believe startups are projectiles rather than powered aircraft, and that they'll make it big if and only if they're launched with sufficient initial velocity.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or principle, then support it with a specific example or elaboration \u2014 topic-sentence-first structure is the dominant pattern.",
      "Use single-sentence paragraphs to deliver standalone judgments, pivots, or punchlines that deserve emphasis through isolation.",
      "Connect paragraphs through thematic continuation rather than explicit transition words \u2014 the next paragraph often picks up a thread from the previous one without saying 'furthermore' or 'additionally.'",
      "When telling a company's story within a paragraph, follow the pattern: name the company, describe their situation, describe their specific action, draw the lesson.",
      "Use section headers as single-word or short-phrase labels (Recruit, Fragile, Delight, Fire, Consult, Manual, Big, Vector) that name the concept about to be explored \u2014 these act as thesis markers.",
      "Close paragraphs with the most memorable or quotable statement \u2014 save the strongest formulation for last position."
    ],
    "do_not": [
      "Do not use formal transition phrases like 'In addition,' 'Moreover,' 'Furthermore,' or 'In conclusion' \u2014 transitions should be implicit or conversational ('But,' 'And,' 'So').",
      "Do not write paragraphs that are purely transitional with no substantive content \u2014 every paragraph must contain at least one claim or piece of evidence.",
      "Do not bury the point in the middle of a paragraph \u2014 lead with it or build to it at the end."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"That would be a great problem to have. See if you can make it happen.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, concrete metaphors drawn from the physical world to explain abstract startup dynamics \u2014 car cranks, contained fires, larvae, boulders, molds, projectiles vs. aircraft.",
      "Deploy direct address imperatives to make advice feel personal and urgent: 'See if you can make it happen,' 'Think of some successful startups.'",
      "Use rhetorical questions to voice the reader's skepticism, then immediately answer them \u2014 this creates a dialogue-like feel within the essay.",
      "Employ deliberate repetition of key phrases and concepts ('insanely great,' 'do things that don't scale,' 'unscalable') to create thematic cohesion and make ideas sticky.",
      "Use parenthetical asides \u2014 set off with dashes or parentheses \u2014 to inject commentary, qualifications, or dry humor without breaking the main sentence's momentum.",
      "Create named concepts and coinages ('Collison installation,' 'pulling a Meraki,' 'contained fire strategy') that package complex behaviors into memorable, reusable labels.",
      "Use antithesis and contrast to sharpen points: pair what founders believe against what's actually true, what seems impressive against what actually works."
    ],
    "do_not": [
      "Do not use flowery or literary metaphors \u2014 keep analogies grounded in everyday, mechanical, or physical experience.",
      "Do not use exclamation marks or hyperbolic language for emphasis \u2014 let the strength of the claim and the evidence create the emphasis.",
      "Do not use abstract philosophical frameworks or jargon \u2014 express ideas in plain, concrete language even when the underlying concept is sophisticated."
    ],
    "evidence": [
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"At YC we use the term 'Collison installation' for the technique they invented.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with the central thesis stated as a direct, declarative principle \u2014 no anecdote, no question, no scene-setting. The first sentence is the thesis.",
      "Immediately after the thesis, acknowledge the conventional wisdom that the essay will argue against \u2014 set up the common misconception in the second or third sentence so the reader knows what's at stake.",
      "Structure the essay as a series of named sections (single-word or short-phrase headers), each exploring a different facet or application of the central thesis \u2014 the essay reads as a field guide to variations on a theme.",
      "Use endnotes (bracketed numbers referencing a 'Notes' section) for digressions, attributions, caveats, and tangential stories that would break the flow of the main argument.",
      "Close the essay by reframing the thesis at a higher level of abstraction \u2014 introduce a new conceptual framework (the 'vector' metaphor) that synthesizes everything discussed and leaves the reader with a richer mental model.",
      "End on a forward-looking, generative note rather than a summary \u2014 suggest that the reframing opens up new possibilities rather than closing down the argument.",
      "Use bold or inline formatting for section headers that sit at the start of paragraphs, blending the header into the paragraph text rather than isolating it on its own line."
    ],
    "do_not": [
      "Do not open with a question, anecdote, or quotation \u2014 open with the thesis.",
      "Do not close with a simple restatement of the opening thesis \u2014 close by elevating or extending it into a new frame.",
      "Do not use numbered lists or bullet points in the body \u2014 present all information in prose paragraphs, reserving list-like structure for endnotes only."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.\""
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
      "Build sentences around a single clear claim or observation, then occasionally extend with a second clause joined by a comma and coordinating conjunction ('and', 'but', 'or') \u2014 keep the default sentence shape lean and declarative.",
      "Use compound-complex sentences sparingly and strategically: deploy them when layering a hypothetical scenario or when stacking conditions ('If you could travel back... one thing would be true no matter where you went: you'd have to watch what you said').",
      "Create rhythm by alternating between a run of medium-length declarative sentences and a sudden short, punchy standalone sentence that delivers the punchline or thesis of the preceding sequence.",
      "Chain ideas across sentence boundaries rather than within them \u2014 let one sentence set up the premise, the next deliver the consequence, the next add the twist. The rhythm lives between sentences, not inside them.",
      "Open sentences with simple subjects or short conditional clauses ('If', 'When', 'Suppose') rather than with long participial or absolute phrases."
    ],
    "do_not": [
      "Do NOT write sentences with multiple nested subordinate clauses or heavy embedding \u2014 keep the syntactic depth shallow even when sentences are long.",
      "Do NOT use semicolons as a primary clause-joining device; prefer periods or coordinating conjunctions.",
      "Do NOT front-load sentences with long adverbial or prepositional phrases before reaching the subject."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"It's like stretching.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a curious, intellectually honest individual thinking through a problem in real time \u2014 use 'I' to share personal reasoning and 'we/you' to pull the reader into the investigation as a co-thinker.",
      "Maintain a conversational but intellectually serious tone: the voice of someone explaining an idea to a smart friend over coffee, not lecturing from a podium.",
      "Signal confidence through directness and simplicity of assertion rather than through hedging or qualifiers. State bold claims plainly and let the reader push back.",
      "Use contractions naturally in the flow of conversational reasoning ('it's', 'you'd', 'they're', 'don't') but allow the occasional uncontracted form when the sentence benefits from slight emphasis or formality.",
      "Deploy self-aware asides and mild self-deprecation to maintain approachability ('I myself think it's cute for little kids to believe in Santa Claus. But one wonders, do we tell them this stuff for their sake, or for ours?').",
      "When introducing a controversial or uncomfortable idea, do so with calm matter-of-factness rather than rhetorical alarm \u2014 let the idea's implications do the provocative work."
    ],
    "do_not": [
      "Do NOT adopt an academic or detached third-person voice \u2014 the reader should always feel someone specific is talking to them.",
      "Do NOT use aggressive or preachy language to make a point; never moralize or lecture the reader into agreement.",
      "Do NOT hedge excessively with qualifiers like 'perhaps', 'it could be argued', 'one might say' \u2014 state the thought, then let the reader evaluate."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"I'm not arguing for or against this idea here. It is probably inevitable that parents should want to dress up their kids' minds in cute little baby outfits. I'll probably do it myself.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure the essay as a series of methods or approaches to a single question, presented sequentially \u2014 each section proposes a new 'test' or 'technique' for getting at the answer, building a toolkit rather than a linear proof.",
      "Introduce claims through thought experiments and hypothetical scenarios ('Suppose in the future there is a movement to ban the color yellow') rather than through abstract argument or citation.",
      "Use historical examples as the primary evidence type \u2014 draw parallels between past and present to make the argument feel inevitable rather than polemical (Galileo, Copernicus, Darwin, the English Reformation, Arthur Miller).",
      "Anticipate objections by voicing them directly as questions ('Why would one want to do this? Why deliberately go poking around among nasty, disreputable ideas?'), then answer them in your own voice.",
      "Move between the abstract principle and the concrete illustration rapidly \u2014 never let more than two or three sentences of abstraction pass without grounding in a specific example or analogy.",
      "Build arguments through accumulation of parallel cases rather than through formal logical deduction \u2014 let the pattern across examples make the case."
    ],
    "do_not": [
      "Do NOT rely on data, statistics, or formal citations as primary evidence \u2014 use stories, analogies, and historical anecdotes instead.",
      "Do NOT dismiss counterarguments or alternative views; acknowledge them with intellectual honesty before explaining why you find your position more compelling.",
      "Do NOT present conclusions as settled dogma \u2014 frame them as the best current hypothesis that invites further thinking."
    ],
    "evidence": [
      "\"If you could travel back in a time machine, one thing would be true no matter where you went: you'd have to watch what you said.\"",
      "\"The irony of Galileo's situation was that he got in trouble for repeating Copernicus's ideas. Copernicus himself didn't.\"",
      "\"Diff present ideas against those of various past cultures, and see what you get.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently as thesis statements, pivots, or punchlines \u2014 let a key insight stand alone for emphasis before developing it in subsequent paragraphs.",
      "Open paragraphs with the core claim or observation, then develop it with one or two supporting sentences \u2014 front-load the idea, don't build toward it.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 the next paragraph should feel like the natural next thought, not a signposted turn.",
      "Use section headers as structural signposts to mark major shifts in approach or topic, allowing paragraphs within sections to flow without heavy transition machinery.",
      "When building an extended argument across multiple paragraphs, use a question paragraph to set up the next sequence, then answer it over the following paragraphs."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore', 'Moreover', 'In addition', 'Consequently' \u2014 these read as academic scaffolding.",
      "Do NOT write long paragraphs that develop multiple distinct ideas; split them so each paragraph carries one thought or one step in the argument.",
      "Do NOT end paragraphs with summary sentences that restate what was just said \u2014 let the point land once and move on."
    ],
    "evidence": [
      "\"But they're much more dangerous.\"",
      "\"That's what I want to study here.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions as structural pivots \u2014 pose a question to the reader that reframes the inquiry or opens a new line of thinking, then answer it in the paragraphs that follow.",
      "Employ extended analogies drawn from everyday life and concrete domains (fashion, maps, stretching, skirmishers, skating rinks) to make abstract concepts visceral and memorable.",
      "Use parallel structure across sentences or paragraphs to create a sense of accumulation: repeat a syntactic pattern with varied content to build momentum ('In any competitive field... And in every field...').",
      "Deploy aphoristic formulations \u2014 compress an insight into a single memorable sentence that could stand alone as a quotation ('Argue with idiots, and you become an idiot'; 'Great work tends to grow out of ideas that others have overlooked').",
      "Use the technique of reductio through vivid hypothetical: invent an absurd but clarifying scenario (the yellowist movement, people in Pittsburgh being ten feet tall) to expose the logic of a real phenomenon.",
      "Employ direct address and imperatives to engage the reader as a participant ('Ask anyone', 'Try to think of some ideas', 'Look for prigs')."
    ],
    "do_not": [
      "Do NOT use ornamental metaphors or similes that exist for beauty rather than clarity \u2014 every figurative device must advance the argument.",
      "Do NOT use literary allusions or high-culture references as persuasive authority; prefer accessible, democratic examples.",
      "Do NOT overuse any single device \u2014 distribute rhetorical questions, analogies, and aphorisms across the piece rather than clustering them."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"Suppose in the future there is a movement to ban the color yellow.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-statement that frames the essay's purpose directly, then launch into an accessible, relatable hook (the old photo analogy) before narrowing to the thesis.",
      "Establish the essay's central question within the first few paragraphs using a progression from familiar observation to unsettling implication \u2014 move from 'fashion in clothing' to 'moral fashion' to 'danger'.",
      "Structure the essay with bold section headers in title case that name each new approach or concept, giving the piece the feel of an organized investigation or manual.",
      "Close sections and the essay with practical, actionable advice rather than grand summations \u2014 end by telling the reader what to do with the ideas presented.",
      "Use footnote references (bracketed numbers) to offload tangential points, keeping the main text clean while signaling depth of thought.",
      "Employ formatting sparingly: use italics or quotes for terms being examined as terms ('yellowist', 'defeatist', 'inappropriate'), and use parenthetical asides for qualifying thoughts that would interrupt the flow if given their own sentence."
    ],
    "do_not": [
      "Do NOT open with a formal thesis statement or academic abstract \u2014 enter through a concrete, human observation that draws the reader in.",
      "Do NOT close with a neat bow or inspirational call to action \u2014 end with a thought that trails off into further implication, leaving the reader thinking.",
      "Do NOT use bullet points or numbered lists within the prose \u2014 maintain the conversational essay form throughout."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them.)\"",
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual curiosity and plain-spoken directness",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause followed by one qualifying or extending clause, connected with a comma and coordinating conjunction ('and', 'but', 'or') or a relative pronoun.",
      "When delivering a key insight, use a clean standalone declarative with no subordinate clauses \u2014 let brevity signal importance.",
      "Use compound sentences that pivot on 'but' to set up an expectation and then subvert it \u2014 this is the signature move for counterintuitive points.",
      "Chain ideas across sentence boundaries rather than piling them inside a single sentence \u2014 let one sentence set up the premise, the next deliver the consequence, the next add the twist.",
      "Open sentences with the subject or a short conditional clause ('If you\u2026', 'When\u2026') rather than with heavy subordinate, participial, or prepositional phrases.",
      "Use parallel structure when presenting contrasting or analogous cases \u2014 repeat the syntactic frame with swapped content.",
      "Use dashes to insert a clarification, aside, or restatement mid-sentence rather than starting a new sentence \u2014 keep the reader inside the thought.",
      "Follow a multi-clause explanatory sentence with a shorter declarative that delivers the punchline or judgment."
    ],
    "do_not": [
      "Do NOT write sentences with more than two levels of subordination \u2014 never bury the main verb three clauses deep.",
      "Do NOT use periodic sentences that withhold the main point until the end \u2014 lead with the claim, then qualify.",
      "Do NOT use semicolons to link independent clauses as a regular habit \u2014 prefer periods or coordinating conjunctions.",
      "Do NOT front-load sentences with long adverbial, participial, or prepositional phrases before reaching the subject.",
      "Do NOT write sentences that are purely decorative or atmospheric \u2014 every sentence must advance an argument or provide evidence."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal experience or opinion, shift to second person ('you') when giving advice or drawing the reader into a thought experiment, and use 'we' when establishing shared human experience.",
      "Maintain the tone of a smart friend thinking out loud \u2014 authoritative but not pompous, confident but willing to hedge when genuinely uncertain.",
      "Express confidence through directness and simplicity of assertion \u2014 state bold claims plainly and let the reader push back.",
      "Signal genuine uncertainty with plain, conversational hedges: 'I think,' 'I suspect,' 'as far as I can tell,' 'perhaps' \u2014 never with academic hedges like 'it could be argued that.'",
      "Use contractions naturally but not ubiquitously \u2014 deploy them in conversational passages and withhold them in more measured, thesis-like sentences to give those statements more weight.",
      "Avoid emotional amplification \u2014 express even strong convictions with calm, matter-of-fact delivery and let the content carry the force.",
      "Use dry, understated humor through unexpected analogies and wry juxtaposition rather than jokes, wit, or sarcasm.",
      "Treat the reader as intellectually equal but less experienced \u2014 share hard-won insights without condescension."
    ],
    "do_not": [
      "Do NOT adopt a lecturing or professorial tone \u2014 never speak down to the reader or assume they need hand-holding.",
      "Do NOT use exclamatory language, emphatic intensifiers ('absolutely,' 'incredibly'), or breathless enthusiasm.",
      "Do NOT use corporate or bureaucratic register \u2014 no 'leverage,' 'synergy,' 'stakeholders,' or management-speak.",
      "Do NOT use aggressive, preachy, or moralizing language \u2014 never lecture the reader into agreement.",
      "Do NOT use sarcasm or biting irony \u2014 the humor should be warm and inviting, never at the reader's expense."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, surprising claim or a deceptively simple observation, then spend the essay revealing the hidden complexity beneath it.",
      "Build arguments through concrete examples first, abstract principle second \u2014 introduce a phenomenon, then extract the general pattern from the examples.",
      "Use named real-world examples (specific people, companies, historical figures) as the primary evidence type rather than data or citations.",
      "Anticipate the reader's likely objection, voice it directly as something they might think, then address it \u2014 this creates a dialogue structure within monologue.",
      "Present counterarguments not as objections to defeat but as natural next steps in the exploration \u2014 acknowledge the grain of truth before explaining why the larger point still holds.",
      "Use analogies drawn from everyday experience, science, and physical processes to bridge abstract concepts to visceral understanding.",
      "Use a recursive, exploratory logic flow: introduce a concept, explore it through examples, then circle back to refine or extend the original concept \u2014 let the argument spiral outward rather than march linearly.",
      "Derive practical advice and actionable heuristics from the theoretical framework \u2014 after establishing a pattern, ask 'what can we do with this?'",
      "Use thought experiments and hypothetical scenarios to make abstract arguments concrete and personally applicable."
    ],
    "do_not": [
      "Do NOT use formal logical apparatus (premises, conclusions, numbered steps) \u2014 let the logic emerge from the sequence of observations and examples.",
      "Do NOT cite statistics, studies, or authorities as primary evidence \u2014 ground arguments in personal observation, thought experiments, named individuals, and common experience.",
      "Do NOT dismiss counterarguments without engaging with them \u2014 always acknowledge the genuine appeal or logic of the other side before moving past it.",
      "Do NOT present conclusions as settled dogma \u2014 frame them as the best current hypothesis that invites further thinking."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation in the first sentence \u2014 a reader scanning just topic sentences should get the argument's skeleton.",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 let the next paragraph pick up the thread naturally by addressing the question or implication left open by the previous one.",
      "When shifting to a new subtopic, use a rhetorical question or a short bridge sentence that names the pivot.",
      "Close paragraphs with the most resonant or surprising statement \u2014 let the paragraph's last sentence do new work rather than restating what came before.",
      "Within paragraphs, sequence ideas from specific to general or from example to principle.",
      "When telling a story within a paragraph, follow the pattern: name the subject, describe their situation, describe their specific action, draw the lesson."
    ],
    "do_not": [
      "Do NOT use heavy-handed transition phrases ('Furthermore,' 'Moreover,' 'In addition,' 'In conclusion,' 'Consequently') \u2014 transitions should feel invisible or use simple words like 'But,' 'And,' 'So.'",
      "Do NOT write paragraphs that merely summarize or restate what was already said \u2014 every paragraph must advance the argument or introduce new information.",
      "Do NOT end paragraphs with trailing qualifications that deflate the point \u2014 if a qualification is needed, put it in the middle and end strong.",
      "Do NOT write paragraphs that are merely lists of examples without a governing idea."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday analogies drawn from science, physical processes, food, and common experience to make abstract concepts tangible \u2014 keep figurative language grounded, not literary.",
      "Deploy rhetorical questions to pivot between sections and to voice the reader's natural next thought, then immediately answer them.",
      "Use deliberate repetition of key terms and phrases rather than seeking synonyms \u2014 the repetition creates a precise vocabulary and reinforces the conceptual framework.",
      "Employ antithesis and parallel contrast to sharpen distinctions \u2014 place two sides of a contrast in matching syntactic frames.",
      "Use direct address imperatives sparingly but at key moments to pull the reader into active participation: 'See if you can\u2026,' 'Think of\u2026,' 'Try to\u2026'",
      "Deploy aphoristic compression \u2014 pack complex insights into single memorable sentences that could stand alone as quotations.",
      "Use parenthetical asides within sentences (set off with dashes or parentheses) to add qualifying thoughts or wry commentary without breaking momentum.",
      "Create named concepts and coinages that package complex behaviors into memorable, reusable labels.",
      "Use the technique of reductio through vivid hypothetical \u2014 invent an absurd but clarifying scenario to expose the logic of a real phenomenon."
    ],
    "do_not": [
      "Do NOT use literary or poetic metaphors, alliteration, assonance, or elaborate imagery \u2014 the prose persuades through clarity and logic, not through beauty.",
      "Do NOT use extended metaphors that dominate a paragraph \u2014 keep analogies brief, then return to direct statement.",
      "Do NOT use anaphora or other conspicuous rhetorical flourishes that draw attention to the writing as performance.",
      "Do NOT use bullet points or numbered lists in the main text \u2014 integrate enumerations into prose."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with the core observation or thesis stated in plain, direct terms \u2014 no anecdote, no dramatic scene, no throat-clearing. The first sentence should contain the essay's central idea in compressed form.",
      "Establish the stakes within the first few paragraphs \u2014 why this idea matters, what changes when you understand it.",
      "Close by zooming out to the broadest implication or reframing everything discussed at a higher level of abstraction, then narrow back to individual, actionable advice \u2014 the ending should feel like a compass needle settling, not a gavel coming down.",
      "Use numbered footnotes in brackets [1], [2] for digressions, qualifications, counterexamples, and personal asides \u2014 place footnote text at the end to keep the main argument clean.",
      "Keep formatting minimal \u2014 no bold text, no bullet points in the body. Use separator lines or short section headers only when the topic shifts significantly.",
      "Close with a brief acknowledgments line thanking draft readers by name."
    ],
    "do_not": [
      "Do NOT open with a question, a quote, a dictionary definition, or a dramatic anecdote \u2014 begin with a direct observation about the world.",
      "Do NOT close with a simple restatement of the opening thesis, a dramatic rhetorical flourish, or a motivational call to action \u2014 end by elevating or extending the thesis into a new frame or trailing off into further implication.",
      "Do NOT use subheaders, numbered sections, or other heavy structural scaffolding unless the essay truly has distinct thematic sections \u2014 the structure should be implicit in the argument's flow."
    ]
  },
  "signature_phrases": {
    "use": [
      "as far as I can tell",
      "I suspect",
      "I think so",
      "in my experience",
      "it seems to me",
      "one thing I know is",
      "the most common",
      "the most important",
      "the trouble is",
      "which means",
      "you'd think",
      "of course",
      "in practice",
      "and yet",
      "but the",
      "a good metaphor would be",
      "the most obvious",
      "the most general",
      "strangely enough",
      "who knew?"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "in addition",
      "in conclusion",
      "it is important to note",
      "one might argue",
      "it could be argued that",
      "leverage",
      "synergy",
      "stakeholders",
      "paradigm",
      "aforementioned",
      "utilize",
      "facilitate",
      "consequently",
      "nevertheless",
      "notwithstanding",
      "absolutely",
      "incredibly",
      "game-changing",
      "impactful"
    ]
  },
  "revision_guidance": [
    "Replace 'Furthermore,' 'Moreover,' 'In addition,' and 'Consequently' with 'But,' 'And,' 'So,' or simply start the next sentence without a transition.",
    "Convert any sentence with more than two levels of subordination into two or three separate sentences chained by pronouns and key-term repetition.",
    "Replace academic hedges ('it could be argued that,' 'one might consider') with plain hedges ('I think,' 'I suspect,' 'perhaps') or remove them entirely and state the claim directly.",
    "Convert passive constructions to active where possible \u2014 the author almost always names the agent.",
    "Replace abstract evidence (statistics, unnamed studies) with named individuals, specific companies, or concrete historical examples.",
    "Move any buried key insight to the opening or closing position of its paragraph.",
    "Replace literary or ornamental metaphors with concrete, everyday analogies drawn from physical processes, food, science, or common experience.",
    "Remove exclamation marks and emphatic intensifiers \u2014 let placement and brevity create emphasis.",
    "Convert any bulleted or numbered list in the body into prose with inline enumeration ('it has three components: X, Y, and Z').",
    "Replace corporate jargon ('leverage,' 'synergy,' 'utilize,' 'facilitate') with plain English equivalents."
  ]
}
```