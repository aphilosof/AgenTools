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
      "Build sentences around a single clear claim, then extend them with one qualifying or elaborating clause introduced by a conjunction or relative pronoun \u2014 prefer 'but', 'and', 'because', 'which', 'who' as the primary connectors.",
      "Use conditional structures ('if you\u2026, you'll\u2026') heavily to frame advice and generalizations, making abstract points feel personally applicable.",
      "Chain two independent clauses with a comma and coordinating conjunction rather than splitting into separate sentences when the second clause directly qualifies or contrasts the first.",
      "Default to subject-verb-object word order; avoid inversions, front-loaded participial phrases, or elaborate subordinate openings \u2014 get to the main verb quickly.",
      "When a long explanatory sentence has run its course, follow it with a compact declarative that lands the point like a verdict.",
      "Use parallel structure when presenting two or three related ideas \u2014 mirror the grammatical shape of each element closely: 'the unlikely becomes impossible, and the probable becomes certain.'"
    ],
    "do_not": [
      "Do NOT pile up multiple subordinate clauses within a single sentence \u2014 limit to one dependent clause per sentence in most cases.",
      "Do NOT use participial or gerund phrases to open sentences as a habitual pattern; start with the subject.",
      "Do NOT write ornate, periodic sentences where the main verb is delayed by layered modifiers."
    ],
    "evidence": [
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"If you're naturally independent-minded, you're going to find it frustrating to be a middle manager.\"",
      "\"the unlikely becomes impossible, and the probable becomes certain.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when sharing personal experience or opinion ('I think', 'In my experience'), and shift to second person 'you' when delivering advice or generalizations \u2014 make the reader feel directly addressed.",
      "Adopt the tone of a smart friend thinking aloud: confident but not dogmatic, willing to pause and qualify ('I think so', 'it seems to me', 'I would think so').",
      "Signal uncertainty with soft hedges like 'seems', 'perhaps', 'I suspect', 'may' \u2014 but place the hedge before delivering a substantive and interesting claim, so the tentativeness feels like intellectual honesty rather than weakness.",
      "Use contractions sparingly and naturally \u2014 deploy them in conversational asides and when maintaining a casual register, but allow uncontracted forms in more declarative or emphatic statements.",
      "Maintain a collegial, peer-to-peer distance \u2014 write as someone who has figured things out through experience and is sharing what they've learned, not lecturing from above.",
      "Keep humor dry and observational rather than performative \u2014 let wit emerge from unexpected analogies or surprising reframings rather than from jokes or wordplay."
    ],
    "do_not": [
      "Do NOT adopt an academic or clinical tone \u2014 avoid jargon, passive constructions used for formality, or distancing language like 'one might argue'.",
      "Do NOT be self-deprecating or excessively humble \u2014 project quiet confidence even when hedging.",
      "Do NOT use imperative commands without softening context; frame directives as suggestions the reader can evaluate ('you want to avoid\u2026', 'it's worth\u2026')."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"I don't think it's because novel ideas are funny per se, but because novelty and humor share a certain kind of surprisingness.\"",
      "\"I really want to know.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold general claim, then immediately support it with a concrete, recognizable example \u2014 scientists, investors, founders \u2014 cycling through multiple instances of the same pattern to establish it before moving on.",
      "Build arguments by induction: present several specific cases that share a hidden pattern, then name the pattern explicitly. Let the reader feel they're discovering the insight alongside you.",
      "Introduce counterpoints or complications with 'But' or 'Though' at the start of a new paragraph \u2014 acknowledge the limitation, then pivot to a deeper or more nuanced version of the original point.",
      "Use analogies drawn from everyday physical experience to make abstract ideas visceral: food, shirts, muscles, compass, vacuum, headwind, waves.",
      "Develop ideas through a 'zoom in then zoom out' rhythm: state a general principle, explore its components or implications in detail, then pull back to restate the principle in enriched form.",
      "When introducing a taxonomy or framework (e.g., three components of independent-mindedness), name all parts upfront, then treat each in sequence, then show how they interact \u2014 give the reader the map before the territory.",
      "Use rhetorical questions to pivot to new sections or subtopics \u2014 pose the question the reader should be asking, then answer it."
    ],
    "do_not": [
      "Do NOT cite academic sources, statistics, or formal evidence \u2014 rely on personal observation, thought experiments, and illustrative examples instead.",
      "Do NOT use formal logical connectives ('therefore', 'moreover', 'furthermore', 'consequently') \u2014 prefer plain conjunctions and conversational pivots.",
      "Do NOT dismiss counterarguments \u2014 always acknowledge them genuinely before showing why the main point still holds or needs refinement."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example, it's not enough just to be correct.\"",
      "\"It seems to me that it has three components: fastidiousness about truth, resistance to being told what to think, and curiosity.\"",
      "\"Without this fastidiousness about truth, you can't be truly independent-minded. It's not enough just to have resistance to being told what to think.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open most paragraphs with a direct claim or observation that can stand alone as a thesis \u2014 don't ease in with context or setup.",
      "Use single-sentence paragraphs for emphasis at key moments \u2014 to land a punchline, deliver a verdict, or create a dramatic pause before a new section.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the last sentence of one paragraph set up the question that the next paragraph answers.",
      "When a paragraph explores an idea, follow this internal sequence: state the point, illustrate or explain it, then add one qualifying or extending thought.",
      "Close paragraphs with a forward-looking sentence that creates momentum \u2014 either a question, a provocative implication, or a pivot phrase like 'But\u2026' at the start of the next paragraph.",
      "Use section breaks (horizontal rules or visual dividers) to signal major topic shifts rather than relying on transitional paragraphs."
    ],
    "do_not": [
      "Do NOT open paragraphs with transitional filler ('Additionally', 'Moreover', 'In conclusion') \u2014 start with substance.",
      "Do NOT write paragraphs that merely summarize what was just said \u2014 every paragraph must advance the argument with at least one new idea.",
      "Do NOT bury the paragraph's main point in the middle \u2014 lead with it."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from concrete, physical domains to illuminate abstract concepts \u2014 compare ideas to food, physical exercise, waves, compass directions, submarine sandwiches.",
      "Employ deliberate repetition of key terms ('independent-minded', 'conventional-minded', 'curiosity', 'fastidiousness') throughout the essay to build a working vocabulary the reader internalizes \u2014 do NOT reach for synonyms when the repeated term is doing conceptual work.",
      "Use rhetorical questions to open new lines of inquiry and create a sense of shared exploration: 'Can you make yourself more independent-minded?' 'How do you even notice these?'",
      "Deploy parallel structure across sentences and paragraphs to show how one pattern applies across multiple domains \u2014 the 'X for scientists\u2026 X for investors\u2026 X for founders' pattern.",
      "Use antithesis to sharpen distinctions: place conventional-minded and independent-minded behaviors in direct opposition within the same sentence or adjacent sentences.",
      "Parenthetical asides \u2014 set off with commas or em dashes \u2014 to add qualifications, humor, or secondary observations without breaking the main sentence's flow."
    ],
    "do_not": [
      "Do NOT use metaphors that are literary, poetic, or ornamental \u2014 analogies must serve explanation, not decoration.",
      "Do NOT use exclamation marks or hyperbolic language for emphasis \u2014 let the content create its own force.",
      "Do NOT use anaphora or epistrophe in a showy, oratorical way \u2014 repetition should feel natural and structural, not performative."
    ],
    "evidence": [
      "\"just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"you can see ideas spreading through groups of people like waves. The most obvious are in fashion: you notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt.\"",
      "\"fastidiousness about truth and resistance to being told what to think leave space in your brain, and curiosity finds new ideas to fill it.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a general, somewhat abstract observation that sounds simple but contains the seed of the entire argument \u2014 no anecdote, no question, no provocation, just a calm statement of a non-obvious truth.",
      "Establish the essay's scope in the first few paragraphs by cycling through concrete examples that illustrate the opening claim, then explicitly name the broader pattern.",
      "Structure the essay as a journey of progressive deepening: start with a surface-level observation, complicate it, decompose it into components, then synthesize.",
      "Close not with a grand summary but with a compact, resonant restatement that reframes the essay's thesis as practical advice \u2014 end on a note of forward momentum, pointing the reader toward action.",
      "Use footnotes or endnotes for digressions, qualifications, and tangential observations that would break the main argument's flow \u2014 this keeps the main text clean while allowing depth.",
      "Avoid all formatting markup (bold, italic, headers, bullet lists) in the body of the essay \u2014 let the prose structure itself through paragraph breaks and section dividers only.",
      "Use quoted dialogue or hypothetical inner speech ('Is that true?', 'this is like high school') to make abstract advice feel concrete and actionable."
    ],
    "do_not": [
      "Do NOT open with a question, anecdote, or dramatic hook \u2014 begin with a declarative observation.",
      "Do NOT close with a neat summary that restates all main points \u2014 end with a single thought that resonates and lingers.",
      "Do NOT use headers or subheadings to organize sections \u2014 rely on section breaks and the natural flow of the argument."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"Exception: gossip. Almost everyone is curious about gossip.\""
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
      "Build sentences around a single clear claim, then extend them with one or two subordinate clauses that qualify, explain, or illustrate that claim. The default sentence shape is: assertion + because/which/but clause.",
      "Use compound sentences joined by 'and' or 'but' to connect cause and effect within a single breath: 'The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.'",
      "Deploy very short declarative sentences as punctuation marks after a longer buildup \u2014 use them to land a point with finality after the reasoning has been laid out.",
      "When constructing parallel structures, use tricolon (three-part lists) as the default rhythm: 'the only way to get the resources you needed, the only way to have colleagues, and the only way to get distribution.'",
      "Place conditional or concessive clauses ('if', 'though', 'when') at the front of the sentence to set up the frame before delivering the main point: 'If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.'",
      "Chain comparative structures to build momentum: 'the more X, the more Y' patterns create a sense of compounding that mirrors the essay's subject matter."
    ],
    "do_not": [
      "Do not write ornate, heavily embedded sentences with multiple nested relative clauses \u2014 keep the clause depth shallow (one or two levels of subordination at most).",
      "Do not use participial phrases or gerund openers ('Having considered...', 'Walking through...'). Prefer finite verbs and direct subject-verb openings.",
      "Do not let sentences ramble through semicolons chaining loosely related ideas \u2014 each sentence should serve one argumentative move."
    ],
    "evidence": [
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"You get no customers, and you go out of business.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person singular as a thinker sharing hard-won insights \u2014 use 'I' to mark personal experience, intellectual history, and moments of genuine surprise or confession ('I find that sentence startling', 'I didn't understand').",
      "Adopt the tone of a brilliant friend explaining something at a whiteboard: authoritative but not academic, confident but willing to admit uncertainty or surprise. The stance is collegial-professorial \u2014 you know more than the reader on this topic but you're not talking down.",
      "Use 'you' frequently to pull the reader into hypothetical scenarios and make abstract principles feel personal: 'if you're ambitious you definitely should', 'you'll get exponential growth'.",
      "Signal confidence through direct assertion rather than hedging. State claims boldly and then qualify only where genuinely uncertain: 'I doubt we could ever predict this with certainty, but...'",
      "When hedging, prefer conversational qualifiers like 'as far as I can tell', 'it may seem', 'probably', 'I suspect' \u2014 never formal academic hedges like 'it could be argued that'.",
      "Use contractions sparingly and deliberately \u2014 deploy them in passages that aim for a conversational, accessible feel, but allow uncontracted forms when the tone is more measured or when emphasis is needed."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic voice. Never write as if you have no stake in the argument \u2014 always write as someone who has personally thought hard about this.",
      "Do not use self-deprecating humor or irony. The humor, when present, comes from the surprising implications of ideas, not from jokes about oneself.",
      "Do not lecture or moralize. Even when giving advice, frame it as sharing a discovery rather than issuing commands."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"It's not just a matter of trying hard. I'm going to take a shot giving a recipe in one paragraph.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly, then spend the rest of the piece unpacking why it's true and what follows from it. The reader should know the central claim within the first two sentences.",
      "Build arguments through a taxonomy: take a complex phenomenon and decompose it into a small number of fundamental causes (e.g., 'they reduce to two fundamental causes: exponential growth and thresholds'), then explore each cause with concrete examples.",
      "Use historical and real-world examples as the primary form of evidence \u2014 bacterial cultures, empires, Newton, startups, Y Combinator. Move freely across domains to show the same pattern recurring.",
      "Advance the argument by asking questions and then answering them: 'Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.' This creates a dialectical rhythm of question-then-answer.",
      "Handle counterarguments by acknowledging them briefly and then reframing: 'Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.'",
      "Derive practical heuristics from theoretical observations. After explaining why something is true, always ask 'so what should you do about it?' and offer concrete advice.",
      "Use footnotes/endnotes for tangential qualifications, historical context, and nuances that would interrupt the main argument's flow."
    ],
    "do_not": [
      "Do not cite academic papers, statistics, or formal studies. Evidence comes from examples, analogies, and first-principles reasoning, not from appeals to authority.",
      "Do not present both sides neutrally \u2014 take a clear position and argue for it. Counterarguments are acknowledged only to be dispatched.",
      "Do not leave abstractions ungrounded. Every theoretical claim must be followed by at least one concrete example or analogy within a sentence or two."
    ],
    "evidence": [
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"Are there general rules for finding situations with superlinear returns? The most obvious one is to seek work that compounds.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that makes a claim or introduces a concept, then develop it with examples, qualifications, and implications. The first sentence should be readable as a standalone thesis for that paragraph.",
      "Use standalone single-sentence paragraphs to deliver a punchline, a stark conclusion, or a pivot point. These should land like a beat of emphasis after a buildup: 'You get no customers, and you go out of business.'",
      "Connect paragraphs through implicit logical flow rather than explicit transition words. The last sentence of one paragraph sets up the context that the first sentence of the next paragraph addresses. Avoid 'Furthermore,' 'Moreover,' 'Additionally.'",
      "When transitioning between major sections, use a question as a bridge paragraph: 'What about step functions? Are there also useful heuristics of the form \"seek thresholds\" or \"seek competition?\"'",
      "Within paragraphs, sequence ideas as: claim \u2192 example \u2192 implication, or: observation \u2192 explanation \u2192 consequence. Always move from concrete to abstract or abstract to concrete \u2014 never stay at the same level of abstraction throughout.",
      "Use pivoting paragraphs that start by conceding or acknowledging one frame and then redirect with 'But': 'But this world has eroded significantly just in my lifetime.'"
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'In addition,' 'Furthermore,' 'On the other hand,' or 'In conclusion.' Transitions should be structural and implicit.",
      "Do not write paragraphs that merely restate or summarize what was already said. Every paragraph must advance the argument with new information, a new example, or a new implication.",
      "Do not bury the point \u2014 the paragraph's key claim should appear in the first or second sentence, not at the end after extensive buildup."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"What about step functions? Are there also useful heuristics of the form 'seek thresholds' or 'seek competition?'\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary explanatory tool \u2014 map one domain onto another to reveal shared structure: bacterial cultures \u2192 startups, territorial conquest \u2192 exponential growth, rice-doubling story \u2192 compounding returns.",
      "Employ rhetorical questions to create forward momentum and frame the next section of the argument: 'How should you take advantage of it?' These questions stand in for section headers.",
      "Use direct address imperatives to deliver advice: 'Choose work you have a natural aptitude for', 'Seek out the best colleagues', 'Be honest, especially with yourself.' These should feel like distilled wisdom, not commands.",
      "Deploy the formulation 'X is not Y, but Z' to correct common misconceptions and reframe: 'superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.'",
      "Use quoted phrases and folk wisdom as springboards for analysis: '\"You get out what you put in\"' \u2014 introduce the conventional wisdom, then show how reality is more complex.",
      "Build lists when surveying a landscape \u2014 use comma-separated inline lists rather than bullet points: 'sports, politics, art, music, acting, directing, writing, math, science, starting companies, and investing.'",
      "Use the word 'interesting' as a signal that something surprising or counterintuitive is about to be unpacked: 'Fame is an interesting example', 'This second case is an interesting one.'"
    ],
    "do_not": [
      "Do not use literary metaphors, poetic imagery, or extended figurative conceits. Analogies should be functional and explanatory, not decorative.",
      "Do not use exclamation marks or exclamatory rhetoric. Surprising points are delivered with understated calm, not excitement.",
      "Do not use anaphora or other forms of conspicuous rhetorical repetition for persuasive effect. Repetition of key terms (like 'superlinear returns') serves conceptual coherence, not oratorical flourish."
    ],
    "evidence": [
      "\"every child is surprised, the first time they hear it, by the story of the man who asks the king for a single grain of rice the first day and double the amount each successive day.\"",
      "\"Fame is an interesting example of a phenomenon that combines both sources of superlinear returns.\"",
      "\"Choose work you have a natural aptitude for and a deep interest in.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal confession of past ignorance that frames the central thesis: 'One of the most important things I didn't understand about the world when I was a child is...' This creates immediate intimacy and signals that the essay will share a hard-won insight.",
      "The opening sentence should contain the essay's core concept. Do not delay the thesis \u2014 state it in the first paragraph, then the rest of the essay unpacks and explores it.",
      "Close by returning to the essay's core concept but from an elevated vantage point, showing how the reader's understanding has been transformed. The ending should feel like arriving at a summit after a long climb.",
      "End on an expansive, forward-looking note that invites continued exploration: 'if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.' Endings should open doors, not close them.",
      "Use numbered endnotes/footnotes for qualifications, caveats, tangential observations, and intellectual honesty \u2014 things that would slow the main argument but that the careful reader will appreciate.",
      "Use em dashes and parenthetical asides within sentences for brief qualifications or reframings, but use them sparingly.",
      "Do not use headers, bullet points, or other structural formatting in the body of the essay. The argument should flow as continuous prose, with rhetorical questions serving as implicit section breaks.",
      "Include a brief acknowledgments line at the very end, thanking readers of drafts by name."
    ],
    "do_not": [
      "Do not open with an abstract definition, a dictionary entry, or a broad generalization about the state of the world. Open with a personal, specific, concrete framing.",
      "Do not close with a summary of points made. The ending should deliver a final insight or image, not recap.",
      "Do not use subheadings or numbered sections in the body (endnotes are the exception). The essay's structure should be organic, guided by the flow of ideas."
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
      "Build the default sentence as a single main clause with one or two modifying phrases \u2014 keep the backbone simple and declarative, then extend it with a trailing qualifier, parenthetical, or conditional clause.",
      "Chain multiple ideas within a sentence using commas and coordinating conjunctions (especially 'and' and 'but'), creating a conversational, additive rhythm that feels like thinking aloud rather than formal argumentation.",
      "Deploy very short sentences \u2014 sometimes a single word or phrase \u2014 as emphatic punctuation after a longer build-up, letting them land as conclusions or reversals.",
      "Use conditional and concessive structures ('if you\u2026', 'even if\u2026', 'though\u2026') to embed qualifications directly into the sentence rather than splitting them out into separate sentences.",
      "When listing examples or elaborating a point, let the sentence grow organically by appending clauses with semicolons or em dashes rather than starting fresh sentences \u2014 this creates a rolling, exploratory feel."
    ],
    "do_not": [
      "Do NOT write formally periodic sentences that save the main verb for the end \u2014 always lead with the subject-verb core and let modifiers trail.",
      "Do NOT use elaborate subordination with multiple nested 'which' or 'that' clauses \u2014 keep clause relationships flat and paratactic.",
      "Do NOT maintain a uniform sentence length throughout a paragraph \u2014 the rhythm depends on mixing conversational mid-length sentences with abrupt short ones."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"You need both.\"",
      "\"I barely procrastinated at all then, because there was always something that needed doing, and if I could put more distance between me and the pursuing beast by doing it, why wait?\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as someone reflecting on personal experience, but constantly pivot outward to address the reader directly with 'you' \u2014 create a tone of one thoughtful person talking to another, not lecturing.",
      "Maintain an earnest, non-ironic register: treat the subject (hard work, ambition, self-knowledge) with genuine seriousness, but leaven it with casual diction and self-aware asides.",
      "Signal uncertainty with honest hedges like 'I suspect,' 'I think,' 'probably,' 'I'm not sure' \u2014 use these to model the intellectual honesty you're advocating, not as rhetorical false modesty.",
      "Introduce authoritative claims as personal discoveries rather than universal truths \u2014 frame insights as 'One thing I know is\u2026' or 'What I've learned since\u2026' rather than declarative pronouncements.",
      "Use contractions sparingly and naturally \u2014 deploy them in conversational asides and direct address to the reader, but let more serious declarative statements remain uncontracted to give them weight.",
      "When quoting others, let their words carry authority; frame yourself as a peer observer, not as someone above or below the people you cite."
    ],
    "do_not": [
      "Do NOT adopt an ironic, detached, or sardonic tone \u2014 the voice is fundamentally sincere and invested in helping the reader think clearly.",
      "Do NOT use academic hedging formulas ('it could be argued that,' 'one might suggest') \u2014 hedges should sound like genuine uncertainty, not performative caution.",
      "Do NOT use exclamatory enthusiasm or motivational-speaker energy \u2014 the tone is calm, reflective, and measured even when making bold claims."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"I suspect most people have to learn what work is before they can love it.\"",
      "\"Now I know the answer to that question. There isn't.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open a line of argument by stating a personal realization or a commonly held belief, then complicate it \u2014 the pattern is: simple claim \u2192 qualification \u2192 deeper truth.",
      "Build arguments through concrete examples (named people, personal anecdotes, historical figures) rather than abstract reasoning \u2014 let the examples do the persuasive work, then extract the principle.",
      "Preemptively acknowledge the reader's likely objection and then address it directly, often in the same paragraph: 'Sounds a bit extreme, you think. And yet\u2026'",
      "Use analogies and metaphors drawn from everyday physical experience ('like a dog circling while it decides exactly where to lie down,' 'the pursuing beast') to make abstract ideas tangible.",
      "Progress through the essay by building on previous conclusions \u2014 each new section takes the last section's endpoint as its starting assumption, creating a stacking, cumulative logic.",
      "Return to and refine earlier claims as the essay progresses \u2014 treat ideas as things that get sharpened through revisitation rather than stated once and abandoned.",
      "Handle nuance by using paired structures: 'not just X but also Y,' 'both X and Y,' 'neither X nor Y' \u2014 this keeps complexity manageable while avoiding oversimplification."
    ],
    "do_not": [
      "Do NOT present arguments as settled debates with clear winners \u2014 maintain the sense that you're working through the problem in real time, even when you have a clear conclusion.",
      "Do NOT rely on citations, statistics, or formal evidence \u2014 authority comes from personal experience, named exemplars, and the logical force of the argument itself.",
      "Do NOT dismiss counterarguments flippantly \u2014 when raising a complication, give it genuine weight before resolving it."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance? Now I know the answer to that question. There isn't.\"",
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\"",
      "\"That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim or observation that advances the argument \u2014 avoid throat-clearing or meta-commentary about what you're about to discuss.",
      "Close paragraphs by landing on the sharpest, most compressed version of the point \u2014 let the final sentence carry disproportionate weight, often as a short, punchy conclusion.",
      "Use standalone single-sentence paragraphs as structural punctuation \u2014 to deliver a punchline, mark a transition, or let an important idea breathe on its own.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph sets up the first sentence of the next, creating implicit flow.",
      "Within a paragraph, move from general claim \u2192 specific example \u2192 refined restatement of the claim, creating a zoom-in-zoom-out pattern.",
      "When a paragraph introduces a new concept (like 'the shape of real work'), develop it across multiple paragraphs in sequence rather than cramming everything into one."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore,' 'Moreover,' 'In addition' \u2014 transitions should feel organic, driven by the logic of the ideas rather than by connective tissue.",
      "Do NOT end paragraphs on weak, trailing qualifications \u2014 if a qualification is needed, embed it mid-paragraph and end on something strong.",
      "Do NOT write paragraphs that merely restate the previous one in different words \u2014 each paragraph must advance the argument or introduce new material."
    ],
    "evidence": [
      "\"There isn't.\" (standalone paragraph serving as emphatic conclusion)",
      "\"That limit varies depending on the type of work and the person.\" (standalone transitional paragraph)",
      "\"Perhaps something changes at adolescence. That would make sense.\" (two-sentence paragraph that lets a speculative idea breathe)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions to voice what the reader is likely thinking, then answer them \u2014 this creates a dialogue-like feel and preempts skepticism.",
      "Deploy metaphors and analogies from concrete, physical, everyday domains: animals, beasts, gardens, dials, dogs, buses \u2014 avoid literary or highbrow allusions as your primary figurative mode.",
      "Use parallel structure in lists and paired phrases to give ideas a sense of inevitability and completeness: 'you need great natural ability and to have practiced a lot and to be trying very hard.'",
      "Repeat key phrases across paragraphs ('the shape of real work,' 'the center,' 'working hard') as conceptual anchors \u2014 build a vocabulary specific to the essay that accumulates meaning through reuse.",
      "Use direct address ('you,' imperative mood) to make abstract advice feel personal and actionable: 'get that idea out of your head,' 'cultivate a sensitivity.'",
      "Employ antithesis and reversal as a core persuasive move \u2014 set up an apparent truth and then flip it: 'The most basic level of which is simply to feel you should be working without anyone telling you to.'"
    ],
    "do_not": [
      "Do NOT use ornamental figurative language \u2014 every metaphor should clarify an idea, not decorate it.",
      "Do NOT use exclamation marks or hyperbolic intensifiers for emphasis \u2014 emphasis comes from sentence position and brevity, not from typographic or lexical loudness.",
      "Do NOT use extended analogies that run for multiple sentences \u2014 keep metaphors compressed and move on."
    ],
    "evidence": [
      "\"Was there, perhaps, some way to evade hard work through sheer brilliance?\"",
      "\"like a dog circling while it decides exactly where to lie down\"",
      "\"Working hard is not just a dial you turn up to 11.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a deceptively simple, almost banal observation that the reader might dismiss \u2014 then immediately complicate it, signaling that the essay will go deeper than expected.",
      "Establish the essay's scope in the first few paragraphs by framing it as a personal journey: 'here's what I used to think, here's what I now know, here's what changed.'",
      "Close by zooming out to the largest, most synthesized version of the argument \u2014 the final paragraph should feel like a summation that unifies all the threads into a single actionable insight.",
      "End the essay on a sentence that combines honesty about difficulty with quiet optimism: the closing should feel earned, not preachy.",
      "Use numbered footnotes (rendered inline as bracketed numbers) for tangential observations, secondary examples, and qualifications that would interrupt the main flow \u2014 this keeps the main text clean while allowing intellectual honesty about edge cases.",
      "Use block quotes for extended passages from other writers, integrating them with brief framing sentences before and after \u2014 let the quoted voice speak at length rather than paraphrasing.",
      "Avoid all formatting beyond plain paragraphs, block quotes, and footnotes \u2014 no headers, no bullet lists, no bold or italic emphasis. The structure is entirely created by paragraph breaks and the logical flow of ideas."
    ],
    "do_not": [
      "Do NOT open with a question, a provocative claim, or a dramatic scene \u2014 open with something quiet and understated that gains force as the essay develops.",
      "Do NOT close with a call to action, an inspiring exhortation, or a neat aphorism \u2014 close with a complex, honest statement that respects the difficulty of the subject.",
      "Do NOT use headers, subheadings, or any structural signposting within the essay body \u2014 the essay should read as a continuous stream of thought, not a structured document."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\" (understated, deceptively simple opening)",
      "\"But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\" (synthesizing, quietly optimistic close)",
      "\"[1] Bill Gates, for example, was among the smartest people in business in his era\u2026\" (footnote-style tangent integrated into the flow)"
    ]
  }
}
```

### sample-4.txt (3280 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3280,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a core declarative claim, then extend them with one or two subordinate clauses or parenthetical asides \u2014 the base structure is simple, but frequently expanded with conditional, causal, or concessive additions.",
      "Use clause-chaining with coordinating conjunctions (and, but, or) to build longer sentences that feel conversational rather than academic \u2014 stack two or three independent clauses with commas and conjunctions rather than using semicolons or complex subordination.",
      "Deploy very short sentences as rhetorical punctuation marks \u2014 use them to land a punchline, deliver a verdict, or pivot to a new idea after a longer explanatory passage.",
      "Open sentences with conjunctions (But, And, Or) to create a feeling of continuous thought, as if the reader is overhearing the author think through the argument in real time.",
      "Use participial and conditional phrases at the start of sentences to set up context before delivering the main clause: 'When I interviewed Mark Zuckerberg...', 'If you build something to solve your own problems...'",
      "Interrupt forward momentum with em-dash or parenthetical asides that add texture or qualification without breaking the sentence into separate units: '(and specifically of making YC big)', '(like other ways of bestowing one's favors liberally)'."
    ],
    "do_not": [
      "Do not write sentences with deeply nested subordinate clauses or academic periodic structure \u2014 keep the syntactic depth shallow even when sentences are long.",
      "Do not use semicolons as a primary clause-joining device; prefer conjunctions or full stops.",
      "Do not write in a monotone rhythm where all sentences have similar length and structure \u2014 alternate between extended explanatory sentences and blunt declarations."
    ],
    "evidence": [
      "\"They unconsciously judge larval startups by the standards of established ones.\"",
      "\"But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say 'Right then, give me your laptop' and set them up on the spot.\"",
      "\"Who knew?\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a seasoned insider sharing hard-won lessons with a smart but less experienced audience \u2014 authoritative without being pompous, warm without being soft.",
      "Use first-person plural 'we' when speaking from institutional experience (Y Combinator) and first-person singular 'I' for personal anecdotes and opinions \u2014 this creates a dual authority of both individual and organizational wisdom.",
      "Address the reader directly with 'you' to make general principles feel personally applicable, as if giving advice in a one-on-one conversation.",
      "Signal confidence through plain assertion rather than hedging \u2014 state claims as facts, then support them with examples rather than qualifying them upfront.",
      "When expressing uncertainty or qualification, use casual, conversational hedges like 'I think', 'probably', 'usually' rather than formal academic hedging ('it could be argued that').",
      "Use contractions sparingly and strategically \u2014 employ them in passages that are meant to feel conversational and colloquial, but default to uncontracted forms in passages delivering core advice or principles.",
      "Inject dry, understated humor through unexpected juxtapositions or deflating comparisons rather than through jokes or wordplay."
    ],
    "do_not": [
      "Do not adopt a detached, clinical tone \u2014 always write as someone who has personal stakes and firsthand experience with the subject.",
      "Do not use formal hedging language like 'it might be suggested that' or 'one could argue' \u2014 hedge casually or not at all.",
      "Do not be self-deprecating or apologetic about the advice being given \u2014 own the authority of experience."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce a core principle as a bold, plain assertion at the top of a section, then immediately support it with a concrete startup example \u2014 the pattern is: claim \u2192 named company \u2192 specific anecdote \u2192 generalized lesson.",
      "Use named, real-world examples (Stripe, Airbnb, Facebook, Pebble, Wufoo) as the primary form of evidence \u2014 treat them as case studies told in miniature narrative form rather than as data points.",
      "Anticipate reader objections and address them inline rather than in separate counter-argument sections \u2014 phrase them as 'you might think X, but actually Y' or present the objection in the voice of the naive founder.",
      "Build arguments through accumulation of parallel examples rather than through logical deduction \u2014 stack multiple cases that all illustrate the same principle to create conviction through pattern recognition.",
      "Use analogies and metaphors to make abstract business concepts visceral and concrete: cranking a car engine, keeping a fire contained, newborn babies, boulders vs. train cars.",
      "Introduce counterintuitive claims by first naming the intuitive but wrong belief, then pivoting with 'but' or 'actually' to reveal the correct insight.",
      "Handle limitations and edge cases in footnotes or parenthetical asides rather than cluttering the main argument \u2014 keep the main text confident and forward-moving."
    ],
    "do_not": [
      "Do not build arguments through formal logical syllogisms or step-by-step deduction \u2014 rely on narrative examples and pattern recognition instead.",
      "Do not cite academic research, statistics, or formal studies as evidence \u2014 use firsthand anecdotes and named company stories.",
      "Do not present both sides of an argument as equally valid \u2014 take a clear position and use counterarguments only to strengthen it."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"It's a common mistake among inexperienced founders to believe that a partnership with a big company will be their big break. Six months later they're all saying the same thing: that was way more work than we expected, and we ended up getting practically nothing out of it.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that states a principle, names a company, or poses a question \u2014 then elaborate with specifics, examples, or qualifications.",
      "Use single-sentence paragraphs to deliver standalone verdicts, pivots, or emphatic conclusions that deserve visual isolation for rhetorical weight.",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 the next paragraph picks up from where the previous one left off, often by expanding, qualifying, or exemplifying the prior point.",
      "Close paragraphs with a sentence that either delivers a punchline, pivots to a new angle, or sets up the next paragraph's topic \u2014 avoid trailing off or restating the opening point.",
      "Sequence ideas within a paragraph as: general claim \u2192 specific example \u2192 implication or lesson drawn from the example.",
      "Use section headers (single bolded words like 'Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big') to break the essay into thematic chunks, each exploring a different facet of the central thesis."
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'Furthermore', 'Moreover', 'In addition', 'Consequently' \u2014 let the logical connection between paragraphs be self-evident.",
      "Do not write paragraphs that merely summarize or restate the previous one \u2014 each paragraph must advance the argument or introduce new material.",
      "Do not bury the main point at the end of a paragraph \u2014 lead with it and then support or elaborate."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.\"",
      "\"It's not enough just to do something extraordinary initially. You have to make an extraordinary effort initially.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and metaphors as structural scaffolding for entire sections \u2014 introduce a metaphor (cranking an engine, containing a fire, projectiles vs. powered aircraft) and build the argument around it.",
      "Deploy direct address imperatives to make advice feel personal and urgent: 'See if you can make it happen', 'Think of some successful startups'.",
      "Use antithesis and contrast as the primary persuasive structure \u2014 juxtapose the wrong approach with the right one, the naive belief with the experienced insight, the small present with the large future.",
      "Employ anecdotal dialogue and quoted speech to bring examples to life: 'Right then, give me your laptop', 'Will you try our beta?'",
      "Use rhetorical questions to introduce new sections or reframe the argument: 'How do you find users to recruit manually?', 'But should you even be working on such an idea?'",
      "Create lists of parallel examples (often three items) to build momentum: 'luggage and pens and men's shirts', 'reporters and know-it-alls on forums'.",
      "Use coined terms and proper nouns as memorable labels for concepts: 'Collison installation', 'pulling a Meraki', treating startup ideas as 'vectors' not 'scalars'."
    ],
    "do_not": [
      "Do not use flowery or ornate figurative language \u2014 keep metaphors earthy, mechanical, and concrete (engines, fires, babies, boulders).",
      "Do not overuse rhetorical questions in succession \u2014 deploy them as single pivots, not as a chain.",
      "Do not use repetition for mere emphasis \u2014 use it structurally, to create parallel examples or to build an accumulating list."
    ],
    "evidence": [
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the central thesis directly and plainly in the first sentence \u2014 no throat-clearing, no anecdote, no question. The first sentence should be quotable as a standalone maxim.",
      "Follow the opening thesis with an immediate description of the common mistake or misconception it corrects \u2014 establish the essay as a corrective to conventional wisdom.",
      "Structure the essay as a series of named sections (using bold single-word or short-phrase headers) that each explore a different facet or application of the central thesis \u2014 the overall structure is thematic/categorical, not chronological or narrative.",
      "Close the essay by reframing the thesis at a higher level of abstraction \u2014 elevate the practical advice into a broader principle about how the thing works (e.g., 'treating startups as vectors' rather than 'recruit users manually').",
      "End with the most forward-looking and optimistic implication of the thesis, suggesting that the hard unscalable work permanently shapes the company's DNA for the better.",
      "Use numbered footnotes (rendered as endnotes) to handle tangential points, attributions, edge cases, and caveats \u2014 keep the main text clean and assertive while using notes for qualifications.",
      "Include a 'thanks to' section at the end crediting readers of drafts \u2014 this signals the essay as part of a community and collaborative intellectual process.",
      "Use formatting sparingly: bold section headers, quoted speech in quotation marks, occasional parenthetical asides \u2014 no bullet lists, no italics for emphasis, no block quotes."
    ],
    "do_not": [
      "Do not open with a question, anecdote, or scene-setting \u2014 open with the thesis.",
      "Do not close with a summary list of takeaways or a call to action \u2014 close with a reframing that makes the thesis feel bigger and more consequential than the reader initially thought.",
      "Do not use subheadings that are full sentences or descriptive phrases \u2014 use single evocative words that function as thematic labels."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.\"",
      "\"Thanks to Sam Altman, Paul Buchheit, Patrick Collison, Kevin Hale, Steven Levy, Jessica Livingston, Geoff Ralston, and Garry Tan for reading drafts of this.\""
    ]
  }
}
```

### sample-5.txt (4397 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 4397,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim or observation, then occasionally extend with a trailing clause that adds nuance or a surprising turn \u2014 the extension should feel like an afterthought that reframes the main point.",
      "Use compound sentences joined by 'and' or 'but' to create a conversational, thinking-aloud cadence \u2014 chain no more than two independent clauses before stopping.",
      "Deliver key insights as standalone declarative sentences with no subordination \u2014 let the bare assertion carry rhetorical weight through its simplicity.",
      "When constructing longer sentences, prefer stacking conditional or temporal clauses at the front ('If you could travel back...', 'When you hear such labels...') followed by a punchy main clause \u2014 front-load the setup, back-load the payoff.",
      "Use rhetorical questions as rhythm breakers between declarative runs \u2014 pose the question, then answer it in the next sentence or short paragraph."
    ],
    "do_not": [
      "Do not write ornate, heavily embedded sentences with multiple levels of subordination \u2014 avoid nesting clauses within clauses.",
      "Do not use semicolons to join independent clauses as a regular habit \u2014 prefer periods or coordinating conjunctions.",
      "Do not maintain a uniform sentence length throughout a passage \u2014 alternate between compact assertions and longer explanatory sentences to create a conversational pulse."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"If you could travel back in a time machine, one thing would be true no matter where you went: you'd have to watch what you said.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person to signal you are thinking alongside the reader, not lecturing \u2014 use 'I' to share your own reasoning process and 'you' to pull the reader into thought experiments.",
      "Maintain an earnest, intellectually curious tone that takes ideas seriously while staying conversational \u2014 avoid both academic stuffiness and performative casualness.",
      "Signal confidence through directness and simplicity of assertion, not through emphatic language \u2014 state bold claims plainly and let the reader weigh them.",
      "Express uncertainty with genuine hedges ('I suspect', 'I think', 'it seems') rather than false modesty \u2014 hedging should feel like honest intellectual caution, not timidity.",
      "Use contractions selectively \u2014 default to contracted forms in conversational passages but use uncontracted forms when making a deliberate, weighty point to slow the reader down.",
      "Adopt a collegial distance \u2014 treat the reader as an intelligent equal exploring ideas together, not as a student being instructed."
    ],
    "do_not": [
      "Do not adopt an authoritative or professorial tone \u2014 never lecture or condescend to the reader.",
      "Do not use sarcasm or snark \u2014 when humor appears, it should be dry and observational, delivered deadpan through the content itself rather than through tonal markers.",
      "Do not use intensifiers or superlatives to bolster claims ('extremely', 'absolutely', 'incredibly') \u2014 let the ideas speak for themselves."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"I suspect the statements that make people maddest are those they worry might be true.\"",
      "\"I'm not arguing for or against this idea here. It is probably inevitable that parents should want to dress up their kids' minds in cute little baby outfits. I'll probably do it myself.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce a central thesis early, then build the argument not as a linear proof but as a series of independent approaches to the same question \u2014 each section offers a different 'method' or 'lens' for attacking the problem.",
      "Ground abstract claims in vivid historical examples \u2014 use Galileo, Darwin, the Reformation, specific cultural anecdotes as concrete anchors that make the argument tangible and memorable.",
      "Use thought experiments and hypothetical scenarios to make the reader experience the logic rather than just follow it ('Imagine a kind of latter-day Conrad character...', 'Suppose in the future there is a movement to ban the color yellow').",
      "Introduce counterarguments or objections by voicing them as the reader might think them ('Some would ask, why would one want to do this?'), then address them directly and honestly.",
      "Advance the argument through questions \u2014 pose a question, explore it, then use the exploration to raise the next question, creating a chain of inquiry.",
      "Use analogies as primary evidence \u2014 draw parallels between the target idea and something more familiar or less controversial to make the point feel inevitable.",
      "Hedge appropriately: use 'I suspect', 'it seems', 'probably' when the claim is genuinely speculative, but drop hedges entirely when stating something you're confident about."
    ],
    "do_not": [
      "Do not cite statistics or academic sources as primary evidence \u2014 prefer historical anecdotes, analogies, and thought experiments.",
      "Do not construct formal logical arguments with explicit premises and conclusions \u2014 the reasoning should feel exploratory and conversational, not syllogistic.",
      "Do not dismiss counterarguments \u2014 acknowledge them genuinely, even if you ultimately disagree."
    ],
    "evidence": [
      "\"Like every other era in history, our moral map almost certainly contains a few mistakes. And anyone who makes the same mistakes probably didn't do it by accident. It would be like someone claiming they had independently decided in 1972 that bell-bottom jeans were a good idea.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use single-sentence paragraphs frequently to deliver key assertions, punchlines, or pivots \u2014 isolate a sentence into its own paragraph when it deserves emphasis or represents a shift in direction.",
      "In multi-sentence paragraphs, open with the core claim or observation, then follow with elaboration, example, or qualification \u2014 the first sentence carries the paragraph's weight.",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 let the reader follow the thought without being told 'furthermore' or 'moreover'.",
      "Use section headers sparingly as signposts when the argument shifts to a genuinely new approach or method \u2014 headers should read as intriguing labels, not dry descriptions.",
      "Sequence ideas within paragraphs by moving from assertion to illustration to implication \u2014 state the idea, show it concretely, then draw out what it means."
    ],
    "do_not": [
      "Do not use explicit transition phrases ('In addition', 'Furthermore', 'On the other hand') to link paragraphs \u2014 transitions should be implicit in the logical flow.",
      "Do not write long paragraphs that cover multiple distinct ideas \u2014 split when the topic shifts, even if that means very short paragraphs.",
      "Do not end paragraphs with summary sentences that restate the opening claim \u2014 move forward, don't circle back."
    ],
    "evidence": [
      "\"But they're much more dangerous.\"",
      "\"Fashion is mistaken for good design; moral fashion is mistaken for good.\"",
      "\"The age of consent fluctuates like hemlines.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, compressed analogies that map an abstract concept onto something concrete and familiar \u2014 the analogy should feel surprising but immediately obvious ('moral map', 'cute little baby outfits' for children's beliefs, 'mounted knight on a skating rink').",
      "Pose rhetorical questions to transition between sections and to draw the reader into active thinking \u2014 questions should feel genuine, as though you're actually working through the problem in real time.",
      "Employ parallel structure to create memorable contrasts and equations \u2014 use balanced clauses that mirror each other to make the comparison feel inevitable ('Fashion is mistaken for good design; moral fashion is mistaken for good').",
      "Use deliberate repetition of key phrases and concepts across the essay to build thematic coherence \u2014 return to the same examples (Galileo, time machines, fashion) as touchstones.",
      "Deploy aphoristic, quotable formulations at key moments \u2014 compress an insight into a single punchy sentence that could stand alone ('Argue with idiots, and you become an idiot').",
      "Use lists of concrete examples in rapid succession to build momentum and make an abstract point feel grounded ('Blasphemy, sacrilege, and heresy... indecent, improper, and unamerican')."
    ],
    "do_not": [
      "Do not use extended metaphors that run for more than a sentence or two \u2014 keep analogies compressed and move on.",
      "Do not use literary or poetic devices like alliteration, assonance, or ornamental figurative language \u2014 the style is intellectual and plainspoken, not lyrical.",
      "Do not use exclamation marks or exclamatory constructions \u2014 surprise and emphasis come from the content and placement, never from punctuation or intensifiers."
    ],
    "evidence": [
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"It's like stretching. When you stretch before running, you put your body into positions much more extreme than any it will assume during the run.\"",
      "\"The spread of the term 'political correctness' meant the beginning of the end of political correctness, because it enabled one to attack the phenomenon as a whole without being accused of any of the specific heresies it sought to suppress.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a relatable, slightly disarming hook that connects everyday experience to the essay's deeper theme \u2014 start with something anyone can picture (old photos, fashion) before revealing the real subject.",
      "Use a parenthetical preface or meta-comment to frame the essay's scope before diving in \u2014 tell the reader upfront what the essay is about and why it matters now.",
      "Structure the essay as an exploration with labeled sections that each offer a different 'method' or 'angle' on the central question \u2014 section titles should be intriguing, often single words or short phrases (e.g., 'Heresy', 'Mechanism', 'Prigs').",
      "Close sections by circling back to the central question or by pivoting to the next method \u2014 endings should feel like stepping stones, not conclusions.",
      "Use parenthetical asides and footnote references to add qualifying thoughts, caveats, or tangential observations without disrupting the main flow.",
      "Employ em dashes sparingly \u2014 prefer commas and parentheses for asides. Use colons to set up a key phrase or payoff at the end of a sentence.",
      "Format quoted terms and labels in quotation marks when examining them as linguistic objects ('defeatist', 'inappropriate', 'divisive')."
    ],
    "do_not": [
      "Do not open with a thesis statement or abstract claim \u2014 always ground the opening in something concrete and experiential before building to the idea.",
      "Do not close the essay with a neat summary or call to action \u2014 end with a thought that opens outward, leaving the reader with something to continue thinking about.",
      "Do not use bullet points or numbered lists within the prose \u2014 when listing items, weave them into flowing sentences."
    ],
    "evidence": [
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them. The latter was till recently something only a small elite had to think about. Now we all have to, because the Web has made us all publishers.)\"",
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
  "one_line_description": "informal, involved, explicit \u2014 conversational authority with intellectual curiosity and plain-spoken directness",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause introduced by 'but', 'and', 'because', 'which', or 'who'.",
      "Chain two independent clauses with a comma and coordinating conjunction rather than splitting into separate sentences when the second clause directly qualifies or contrasts the first.",
      "Use conditional structures ('if you\u2026, you'll\u2026') heavily to frame advice and generalizations, making abstract points feel personally applicable.",
      "Default to subject-verb-object word order \u2014 get to the main verb quickly and let modifiers trail rather than front-loading participial phrases or elaborate subordinate openings.",
      "Use parallel structure when presenting related ideas \u2014 mirror the grammatical shape of each element closely.",
      "Open sentences with conjunctions (But, And, Or) to create a feeling of continuous thought, as if the reader is overhearing the author think in real time.",
      "Interrupt sentences with em-dash or parenthetical asides that add texture or qualification without breaking into separate units.",
      "After a longer explanatory passage, follow with a compact declarative that lands the point like a verdict."
    ],
    "do_not": [
      "Do NOT pile up multiple nested subordinate clauses within a single sentence \u2014 limit to one or two levels of subordination at most.",
      "Do NOT use participial or gerund phrases to open sentences as a habitual pattern.",
      "Do NOT write ornate periodic sentences where the main verb is delayed by layered modifiers.",
      "Do NOT use semicolons as a primary clause-joining device \u2014 prefer conjunctions or full stops."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when sharing personal experience or opinion ('I think', 'In my experience'), and shift to second person 'you' when delivering advice or generalizations \u2014 make the reader feel directly addressed.",
      "Adopt the tone of a smart friend thinking aloud: confident but not dogmatic, willing to pause and qualify ('I think so', 'it seems to me', 'I suspect').",
      "Signal uncertainty with soft hedges like 'seems', 'perhaps', 'I suspect', 'probably', 'may' \u2014 but place the hedge before delivering a substantive claim, so tentativeness feels like intellectual honesty rather than weakness.",
      "Maintain a collegial, peer-to-peer distance \u2014 write as someone who has figured things out through experience and is sharing what they've learned, not lecturing from above.",
      "Keep humor dry and observational \u2014 let wit emerge from unexpected analogies or surprising reframings rather than from jokes or wordplay.",
      "Introduce authoritative claims as personal discoveries ('One thing I know is\u2026', 'What I've learned since\u2026') rather than universal pronouncements.",
      "Frame directives as suggestions the reader can evaluate ('you want to avoid\u2026', 'it's worth\u2026') rather than bare imperative commands."
    ],
    "do_not": [
      "Do NOT adopt an academic or clinical tone \u2014 avoid jargon, passive constructions used for formality, or distancing language like 'one might argue' or 'it could be suggested that'.",
      "Do NOT be self-deprecating or excessively humble \u2014 project quiet confidence even when hedging.",
      "Do NOT use exclamatory enthusiasm or motivational-speaker energy \u2014 the tone is calm, reflective, and measured even when making bold claims.",
      "Do NOT use sarcasm or snark \u2014 humor should be delivered deadpan through content, not tonal markers.",
      "Do NOT use intensifiers or superlatives ('extremely', 'absolutely', 'incredibly') \u2014 let the ideas speak for themselves."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold claim or counterintuitive thesis stated plainly, then spend the piece unpacking why it's true and what follows from it.",
      "Build arguments by induction: present several specific cases that share a hidden pattern, then name the pattern explicitly \u2014 let the reader feel they're discovering the insight alongside you.",
      "Use concrete, real-world examples (named people, companies, historical figures) as the primary form of evidence \u2014 treat them as miniature case studies.",
      "Use analogies drawn from everyday physical experience to make abstract ideas visceral: food, engines, fire, babies, animals, physical exercise.",
      "Introduce counterpoints with 'But' or 'Though' \u2014 acknowledge the limitation genuinely, then pivot to a deeper or more nuanced version of the original point.",
      "Advance the argument by posing questions the reader should be asking, then answering them \u2014 create a dialectical rhythm of question-then-answer.",
      "Derive practical heuristics from theoretical observations \u2014 after explaining why something is true, always ask 'so what should you do about it?' and offer concrete advice.",
      "Use thought experiments and hypothetical scenarios to make the reader experience the logic rather than just follow it.",
      "Progress by building on previous conclusions \u2014 each new section takes the last section's endpoint as its starting assumption, creating cumulative logic."
    ],
    "do_not": [
      "Do NOT cite academic sources, statistics, or formal studies \u2014 rely on personal observation, thought experiments, and illustrative examples.",
      "Do NOT use formal logical connectives ('therefore', 'moreover', 'furthermore', 'consequently') \u2014 prefer plain conjunctions and conversational pivots.",
      "Do NOT dismiss counterarguments \u2014 always acknowledge them genuinely before showing why the main point still holds or needs refinement.",
      "Do NOT present both sides neutrally \u2014 take a clear position and argue for it.",
      "Do NOT leave abstractions ungrounded \u2014 every theoretical claim must be followed by at least one concrete example or analogy within a sentence or two."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open most paragraphs with a direct claim or observation that can stand alone as a thesis \u2014 don't ease in with context or setup.",
      "Connect paragraphs through implicit logical flow rather than explicit transition words \u2014 let the last sentence of one paragraph set up the question that the next paragraph answers.",
      "When a paragraph explores an idea, follow this internal sequence: state the point, illustrate or explain it, then add one qualifying or extending thought.",
      "Close paragraphs with a sentence that carries disproportionate weight \u2014 either a punchline, a provocative implication, or a pivot that sets up the next paragraph.",
      "Within paragraphs, move between levels of abstraction \u2014 go from general claim to specific example to refined restatement, creating a zoom-in-zoom-out pattern.",
      "Every paragraph must advance the argument with at least one new idea \u2014 never merely summarize or restate what was just said."
    ],
    "do_not": [
      "Do NOT open paragraphs with transitional filler ('Additionally', 'Moreover', 'In conclusion', 'Furthermore') \u2014 start with substance.",
      "Do NOT bury the paragraph's main point in the middle or at the end \u2014 lead with it.",
      "Do NOT end paragraphs on weak, trailing qualifications \u2014 if a qualification is needed, embed it mid-paragraph and end on something strong.",
      "Do NOT write paragraphs that cover multiple distinct unrelated ideas \u2014 split when the topic shifts."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the primary explanatory tool \u2014 map one domain onto another to reveal shared structure (bacterial cultures to startups, fashion to moral fashions, engine cranks to bootstrapping).",
      "Employ deliberate repetition of key terms throughout the essay to build a working vocabulary the reader internalizes \u2014 do NOT reach for synonyms when the repeated term is doing conceptual work.",
      "Use rhetorical questions to open new lines of inquiry and create a sense of shared exploration.",
      "Deploy parallel structure across sentences and paragraphs to show how one pattern applies across multiple domains.",
      "Use antithesis to sharpen distinctions \u2014 place contrasting behaviors or ideas in direct opposition within the same sentence or adjacent sentences.",
      "Parenthetical asides \u2014 set off with commas, em dashes, or parentheses \u2014 to add qualifications, humor, or secondary observations without breaking the main sentence's flow.",
      "Compress insights into aphoristic, quotable formulations at key moments \u2014 a single punchy sentence that could stand alone.",
      "Use the 'X is not Y, but Z' formulation to correct common misconceptions and reframe.",
      "Deploy concrete example lists in rapid succession to build momentum and make an abstract point feel grounded."
    ],
    "do_not": [
      "Do NOT use metaphors that are literary, poetic, or ornamental \u2014 analogies must serve explanation, not decoration.",
      "Do NOT use exclamation marks or hyperbolic language for emphasis \u2014 let the content create its own force.",
      "Do NOT use anaphora or epistrophe in a showy, oratorical way \u2014 repetition should feel natural and structural, not performative.",
      "Do NOT use extended metaphors that run for more than a couple of sentences \u2014 keep analogies compressed and move on."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a general observation that sounds simple but contains the seed of the entire argument \u2014 a calm statement of a non-obvious truth or a personal confession of past ignorance that frames the central thesis.",
      "Establish the essay's scope in the first few paragraphs by cycling through concrete examples that illustrate the opening claim, then explicitly name the broader pattern.",
      "Structure the essay as a journey of progressive deepening: start with a surface-level observation, complicate it, decompose it into components, then synthesize.",
      "Close not with a grand summary but with a compact, resonant restatement that reframes the thesis at a higher level of abstraction \u2014 end on a note of forward momentum that opens doors rather than closing them.",
      "Use footnotes or endnotes for digressions, qualifications, and tangential observations that would break the main argument's flow.",
      "Avoid formatting markup (bold, italic, bullet lists) in the body \u2014 let the prose structure itself through paragraph breaks and occasional section dividers.",
      "Include a brief acknowledgments line at the end, thanking readers of drafts by name."
    ],
    "do_not": [
      "Do NOT open with a dramatic hook, provocative question, or elaborate anecdote \u2014 begin with something understated that gains force as the essay develops.",
      "Do NOT close with a neat summary that restates all main points or a call to action \u2014 end with a single thought that resonates and lingers.",
      "Do NOT use headers or subheadings excessively to organize sections \u2014 rely primarily on section breaks and the natural flow of the argument."
    ]
  },
  "signature_phrases": {
    "use": [
      "I suspect",
      "I think",
      "it seems to me",
      "as far as I can tell",
      "probably",
      "in my experience",
      "I find",
      "interesting",
      "the most important",
      "it turns out",
      "one of the most",
      "you'll find",
      "a good metaphor would be",
      "there are two kinds",
      "the way to",
      "the best way to",
      "you can see this in",
      "but actually",
      "who knew",
      "not just X but Y",
      "in practice"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "consequently",
      "it could be argued that",
      "one might suggest",
      "in conclusion",
      "to summarize",
      "incredibly",
      "absolutely",
      "extremely",
      "game-changer",
      "paradigm shift",
      "leverage (as a verb)",
      "synergy",
      "stakeholders",
      "unpack (as in 'let's unpack this')",
      "deep dive",
      "at the end of the day",
      "it goes without saying",
      "needless to say",
      "in today's world",
      "since time immemorial"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', 'additionally', and 'consequently' with 'but', 'and', or simply start a new sentence.",
    "Convert passive constructions ('it was observed that') to active first-person or direct assertion ('I noticed', 'the data shows').",
    "Replace formal hedges ('it could be argued that', 'one might suggest') with conversational ones ('I suspect', 'probably', 'it seems to me').",
    "If a sentence has more than two levels of subordination, break it into two sentences \u2014 keep clause depth shallow.",
    "If a paragraph opens with a transition word ('Additionally', 'Moreover'), delete the transition and start with the substance.",
    "If an abstract claim stands without a concrete example within the next sentence or two, add one \u2014 drawn from everyday experience, history, or named real-world cases.",
    "Replace any intensifiers ('extremely', 'incredibly', 'absolutely') with nothing \u2014 let the plain assertion carry the weight.",
    "If a paragraph merely restates the previous one, delete it or merge the new information into the prior paragraph.",
    "Convert bullet-point lists into flowing comma-separated inline lists within a sentence.",
    "If a section lacks a rhetorical question or a 'But' pivot, check whether the argument feels flat \u2014 consider adding one to create dialectical momentum."
  ]
}
```