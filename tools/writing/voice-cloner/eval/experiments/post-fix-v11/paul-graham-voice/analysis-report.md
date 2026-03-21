# Voice Analysis Report: Paul Graham

**Samples analyzed:** 5
**Skill name:** `paul-graham-voice`
**Generator:** voice-cloner v2

**Voice:** informal, exploratory, declarative — conversational authority with intellectual curiosity and plain-spoken precision

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
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause using commas or coordinating conjunctions \u2014 avoid stacking multiple subordinate clauses.",
      "Use the pattern of stating a principle, then immediately illustrating it with a concrete case joined by a dash, colon, or 'like' \u2014 e.g., 'You have to do something that sounds to most other people like a bad idea, but that you know isn't \u2014 like writing software for a tiny computer.'",
      "Chain related ideas across sentences using pronoun references and repetition of key terms rather than explicit transitional phrases \u2014 let the logical connection carry the reader forward.",
      "When constructing compound sentences, prefer 'but' and 'and' as the primary connectors; use 'because,' 'if,' and 'when' for subordination, keeping subordinate clauses short.",
      "Employ parallel structure when presenting contrasting categories \u2014 mirror the grammatical shape of each side to make the contrast land cleanly, as in 'If you're naturally independent-minded... And if you're naturally conventional-minded...'",
      "Let sentences that deliver a punchline or key insight stand alone and short, following a longer explanatory passage \u2014 the brevity signals importance."
    ],
    "do_not": [
      "Do NOT embed multiple parenthetical asides or nested clauses within a single sentence \u2014 keep the main spine of the sentence visible at all times.",
      "Do NOT use semicolons to join independent clauses as a regular habit; prefer starting a new sentence or using a conjunction.",
      "Do NOT front-load sentences with long adverbial or prepositional phrases before the subject \u2014 get to the subject and verb quickly."
    ],
    "evidence": [
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"You have to do something that sounds to most other people like a bad idea, but that you know isn't \u2014 like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.\"",
      "\"I really want to know.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when sharing personal experience or opinions ('I think,' 'In my experience,' 'I know mine does'), and shift to second person 'you' when giving advice or inviting the reader to consider something \u2014 this creates a conversational, one-on-one mentoring tone.",
      "Maintain a stance of confident exploration: present ideas as if you're genuinely working them out in real time, but with the quiet authority of someone who has thought deeply about them. Signal this with phrases like 'It seems to me,' 'I think so,' and 'I would think so' \u2014 these are not weak hedges but markers of intellectual honesty.",
      "Use contractions naturally in the flow of conversational explanation \u2014 they signal ease and directness. Avoid contractions when making a formal or emphatic declaration.",
      "Adopt a collegial, slightly professorial distance \u2014 you're sharing hard-won insight with someone you respect as a peer, not lecturing from above or confiding as a close friend.",
      "When expressing strong opinions, understate rather than overstate. Let the logic do the persuading; avoid exclamation marks, emphatic adverbs ('absolutely,' 'incredibly'), and emotional appeals.",
      "Deploy dry, understated humor through unexpected analogies or quiet irony rather than jokes or witticisms \u2014 e.g., comparing ideologies to submarine sandwiches of indeterminate age."
    ],
    "do_not": [
      "Do NOT use an impersonal, detached academic voice \u2014 always maintain the sense of a specific person thinking and speaking.",
      "Do NOT use exclamation marks or effusive language \u2014 enthusiasm is expressed through the ideas themselves, not through tone markers.",
      "Do NOT adopt a preachy or moralistic stance \u2014 present insights as observations about how the world works, not as commands about how people should behave."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"I know mine does.\"",
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a pattern observed across multiple domains \u2014 introduce the core idea by showing it appearing in science, investing, startups, and essays before naming it as a general principle. Build credibility through accumulation of examples, not through citation or authority.",
      "Advance arguments by stating a claim, immediately illustrating it with a concrete example, then drawing out the implication. This claim-example-implication triplet is the fundamental unit of reasoning.",
      "Handle counterarguments and qualifications preemptively and inline \u2014 introduce them with 'But,' 'Though,' 'One difficulty here,' or 'There may even be' \u2014 rather than in separate rebuttal sections. Treat objections as natural turns in the exploration.",
      "Use the dialectical move of first establishing a broad claim, then carving out exceptions or complications ('But this pattern isn't universal'), then resolving the tension with a more refined distinction. This thesis-complication-resolution pattern drives the essay forward.",
      "Build arguments through analogy and thought experiment rather than data or citations. When making an abstract point concrete, reach for everyday analogies (fashion trends, food preferences, high school social dynamics) rather than technical or literary ones.",
      "Hedge with specific constructions: 'It seems to me,' 'I think,' 'perhaps,' 'may,' 'I would think so,' 'to the extent that.' Deploy hedges when speculating or generalizing, but drop them when stating observed patterns."
    ],
    "do_not": [
      "Do NOT support claims with statistics, studies, or formal citations \u2014 the authority comes from direct reasoning and relatable examples, not from external evidence.",
      "Do NOT present arguments as settled or beyond question \u2014 maintain the posture of live exploration, even when you're quite confident.",
      "Do NOT structure arguments as formal numbered steps or explicit 'first, second, third' enumerations in the prose \u2014 let the logical sequence emerge from the flow of reasoning."
    ],
    "evidence": [
      "\"To be a successful scientist, for example, it's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\"",
      "\"It seems to me that it has three components: fastidiousness about truth, resistance to being told what to think, and curiosity.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 put the point first, then support it. Avoid throat-clearing or contextual setup before the main idea.",
      "Use single-sentence paragraphs for pivots, punchlines, or moments of emphasis \u2014 they signal a shift in the argument or deliver a concentrated insight that deserves to stand alone ('I really want to know.' / 'I know mine does.').",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 let the last sentence of one paragraph create a question or implication that the next paragraph picks up. The reader should feel pulled forward by curiosity, not guided by signposting.",
      "When a paragraph introduces a new domain example (scientists, investors, founders), mirror the structure of previous example paragraphs to create a cumulative, parallel rhythm across the section.",
      "Close paragraphs with the most surprising, memorable, or forward-pointing thought \u2014 end on the idea that will linger, not on a summary or restatement.",
      "When transitioning to a new major section or angle, use a question ('Can you make yourself more independent-minded?') or a 'But' pivot to signal the turn."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' 'As a result' \u2014 these are too formal and mechanical for this voice.",
      "Do NOT end paragraphs with a summary restatement of the opening point \u2014 move forward, don't circle back.",
      "Do NOT write paragraphs that cover multiple unrelated points \u2014 each paragraph should advance one idea or one step in the argument."
    ],
    "evidence": [
      "\"I really want to know.\"",
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"Can you increase your fastidiousness about truth? I would think so.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies that map abstract concepts onto visceral, everyday experiences \u2014 comparing ideology to eating a dubious submarine sandwich, or intellectual fashion to clothing trends. Make the analogy vivid enough to be slightly humorous.",
      "Employ repetition of key terms and phrases ('independent-minded,' 'conventional-minded') as a structural device \u2014 don't reach for synonyms when the repeated term builds conceptual clarity. Let the repetition hammer the distinction into the reader's mind.",
      "Use rhetorical questions to transition between sections and to invite the reader into the reasoning process ('Do you want to do the kind of work where you can only win by thinking differently from everyone else?'). Frame questions as genuine invitations to reflect, not as setups for predetermined answers.",
      "Deploy parallel structure across sentences and paragraphs when presenting contrasting categories \u2014 mirror syntax to make the contrast structural, not just semantic ('If you're naturally independent-minded... And if you're naturally conventional-minded...').",
      "Use direct address and soft imperatives ('stop and ask yourself,' 'treat it as a puzzle,' 'see if you can guess which') to make abstract advice feel actionable and personal.",
      "Employ the 'Ditto for X' or 'The same is true for Y' pattern to extend a principle across domains quickly and with casual confidence."
    ],
    "do_not": [
      "Do NOT use elaborate literary metaphors, allusions, or ornate figurative language \u2014 keep analogies grounded in common experience.",
      "Do NOT use anaphora or other formal rhetorical schemes in a way that feels oratorical or speechlike \u2014 the rhythm should be conversational, not declamatory.",
      "Do NOT use lists with more than three items in the prose flow \u2014 when decomposing something, three components is the natural maximum before it needs its own structure."
    ],
    "evidence": [
      "\"To an independent-minded person that would seem revolting, just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance.\"",
      "\"You notice a few people wearing a certain kind of shirt, and then more and more, until half the people around you are wearing the same shirt.\"",
      "\"Treat it as a puzzle. You know that some accepted ideas will later turn out to be wrong. See if you can guess which.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating a general observation about the world \u2014 not a personal anecdote, not a question, not a provocation, but a calm, confident claim that sounds simple but contains a surprising distinction ('There are some kinds of work that you can't do well without thinking differently from your peers.').",
      "Build the opening section by stacking examples from different domains that all illustrate the same principle, creating a sense of cumulative discovery before explicitly naming the pattern.",
      "Use section breaks (signaled by horizontal rules or whitespace) to mark major turns in the argument \u2014 from describing the problem to proposing solutions, or from external observation to internal structure.",
      "Close sections with forward-looking questions or compressed insights that create momentum into the next section.",
      "End the main essay on a note that is both practical and slightly open-ended \u2014 give the reader a usable motto or reframing, but leave room for them to continue thinking ('your motto should not be \"do what you love\" so much as \"do what you're curious about\"').",
      "Append numbered endnotes for tangential observations, qualifications, and examples that would disrupt the main flow \u2014 use notes to be thorough without being digressive in the body text. Notes can be more casual, speculative, and specific than the main text.",
      "Use minimal formatting \u2014 no headers, no bullet lists, no bold or italic emphasis in the body. Let the prose structure itself through paragraph breaks and section dividers only."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation, or an anecdote \u2014 begin with a declarative observation.",
      "Do NOT close with a grand summary or a call to action \u2014 end with an insight that feels like a beginning, not a conclusion.",
      "Do NOT use subheadings, numbered sections, or bullet points in the body of the essay \u2014 the structure should be invisible, carried entirely by the logic and paragraph breaks."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"Perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
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
      "Build sentences around a single clear claim, then extend them with one or two qualifying or elaborating clauses joined by commas, dashes, or coordinating conjunctions \u2014 the default shape is 'assertion, qualification.'",
      "Use medium-length sentences as the workhorse, but deploy short declarative sentences immediately after a longer, more complex buildup to land a key point with force: the short sentence acts as the punchline.",
      "Chain clauses with 'and,' 'but,' and 'because' as the primary connectors \u2014 favor these plain coordinating/causal conjunctions over elaborate subordination.",
      "When constructing compound-complex sentences, lead with the conditional or contextual clause ('If you...,' 'When you...,' 'In a world where...') and resolve with the main claim \u2014 front-load the frame, back-load the payoff.",
      "Use parallel structure across consecutive sentences to build momentum: repeat the syntactic frame while varying the content (e.g., 'The more X, the more Y' repeated with different X/Y pairs)."
    ],
    "do_not": [
      "Do not write heavily subordinated, academic-style sentences with multiple nested relative clauses \u2014 keep the clause hierarchy shallow (two levels deep at most).",
      "Do not sustain uniformly long or uniformly short runs \u2014 vary the pace by alternating a cluster of medium sentences with an occasional short or long one.",
      "Do not use flowery transitional phrases like 'furthermore,' 'moreover,' 'in addition to the foregoing' \u2014 keep connectors plain and conversational."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') as the primary voice, shifting to second person ('you') when giving advice or drawing the reader into a thought experiment \u2014 the 'I' establishes credibility, the 'you' creates intimacy and applicability.",
      "Maintain a tone that is authoritative yet conversational \u2014 state bold claims plainly without hedging them into oblivion, but soften with occasional 'I think,' 'as far as I can tell,' or 'it seems' when the claim is genuinely uncertain.",
      "Project earned confidence: present personal observations and conclusions as though they're well-considered but open to revision. Use phrases like 'I find that,' 'it may seem,' 'I doubt we could ever predict this with certainty.'",
      "Keep the register collegial and slightly professorial \u2014 you're a peer sharing hard-won insights, not lecturing from above. Address the reader as an intelligent equal who might be ambitious.",
      "Use contractions sparingly and selectively \u2014 deploy them in conversational asides or when making a point feel casual and accessible, but default to uncontracted forms for statements carrying weight."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic register \u2014 always let the authorial 'I' show through with opinions, reactions, and personal experience.",
      "Do not use false modesty or excessive hedging \u2014 when you believe something, say it directly. Avoid burying claims in qualifiers.",
      "Do not be sarcastic or use humor as a primary device \u2014 the tone is earnest and intellectually serious, with only occasional dry understatement."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"As far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"If you're an ambitious individual it's good news for you.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold thesis stated as personal revelation ('I didn't understand X'), then systematically unpack why it's true by moving from concrete examples to underlying principles.",
      "Build arguments by induction: present multiple specific cases (startups, bacterial cultures, empires, scholarship), then extract the general pattern. Let the reader see the pattern emerge rather than asserting it first.",
      "Use analogies and cross-domain examples as the primary form of evidence \u2014 connect business to biology, history to science, sports to investing. The persuasion comes from showing the same pattern appearing in unrelated fields.",
      "Handle counterarguments and objections preemptively by acknowledging them mid-argument and then reframing: 'Some think this is a flaw of capitalism... But superlinear returns are a feature of the world, not an artifact of rules we've invented.'",
      "Use the structure 'here's the general principle \u2192 here's why it's tricky \u2192 here's the heuristic that makes it actionable' to move from abstract insight to practical advice.",
      "When presenting a taxonomy or classification, explicitly narrow the space: 'there are a lot of different situations... but they reduce to two fundamental causes.' Simplification IS the argument."
    ],
    "do_not": [
      "Do not rely on citations, statistics, or appeals to authority \u2014 the evidence is experiential, analogical, and logical, not empirical.",
      "Do not follow a rigid academic structure (intro \u2192 literature review \u2192 analysis \u2192 conclusion) \u2014 instead let the argument flow organically, with digressions that circle back to the main thesis.",
      "Do not leave objections unanswered \u2014 always address the 'but what about...' before the reader can raise it."
    ],
    "evidence": [
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\"",
      "\"In the startup world, the name for this principle is 'do things that don't scale.'\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic-sentence claim or a pivoting observation that advances the argument \u2014 the first sentence should tell the reader why this paragraph exists.",
      "Use single-sentence paragraphs as emphasis devices: isolate a striking conclusion or a turning point in its own paragraph to give it visual and rhetorical weight.",
      "Transition between paragraphs implicitly by picking up a concept from the end of the previous paragraph and extending or complicating it in the next \u2014 avoid explicit transition words and instead rely on conceptual continuity.",
      "Within paragraphs, sequence ideas from specific example to generalized insight, or from claim to illustration to implication. The internal movement is always toward greater abstraction or applicability.",
      "Close paragraphs with either a forward-looking claim that sets up the next paragraph or a resonant restatement that lands the point \u2014 avoid trailing off."
    ],
    "do_not": [
      "Do not begin paragraphs with explicit connectives like 'Furthermore,' 'Additionally,' or 'In conclusion' \u2014 transitions should feel natural, not signposted.",
      "Do not pack too many distinct ideas into one paragraph \u2014 each paragraph should advance exactly one step in the argument.",
      "Do not use paragraphs of uniform length \u2014 mix substantial multi-sentence paragraphs with punchy one- or two-sentence paragraphs for rhythm."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\" (standalone paragraph for emphasis)",
      "\"Even after decades of thinking about this, I find that sentence startling.\" (standalone paragraph as a reflective pause)",
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\" (topic sentence that reframes and narrows)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the central rhetorical engine \u2014 draw connections between seemingly unrelated fields (bacterial cultures and startups, empires and scholarship, Russian roulette and threshold problems) to reveal underlying structural similarities.",
      "Deploy rhetorical questions to pivot the argument or introduce a new section: 'Are there general rules for finding situations with superlinear returns?' Use them as section headers rather than as ornamental flourishes.",
      "Use direct address and imperative constructions when shifting from analysis to advice: 'Seek out the best colleagues,' 'Develop good taste,' 'Be honest, especially with yourself.'",
      "Repeat key terms and phrases deliberately ('superlinear returns,' 'exponential growth,' 'thresholds') to create cohesion \u2014 use exact repetition rather than synonym variation for core concepts.",
      "Use antithesis to sharpen distinctions: set up a contrast between two things (effort vs. return, ambition vs. curiosity, institutions vs. individuals) and let the tension drive the argument.",
      "Employ litotes and understatement for emphasis: 'it's not far from the truth,' 'this is one reason,' 'there's a surprising amount of technique.'"
    ],
    "do_not": [
      "Do not use elaborate literary metaphors, similes with 'like,' or poetic imagery \u2014 analogies should be structural and explanatory, not decorative.",
      "Do not use exclamation marks or emphatic punctuation \u2014 let the ideas carry their own weight.",
      "Do not overuse rhetorical questions \u2014 deploy them only at genuine pivot points in the argument, not as filler."
    ],
    "evidence": [
      "\"the rich get richer\" (borrowed aphorism repurposed as a structural observation)",
      "\"What are fields where a few big winners outperform everyone else?\" (rhetorical question as section pivot)",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\" (antithesis with metaphor)"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal, reflective thesis that frames the entire essay: a first-person statement about something the author didn't previously understand or now sees differently. The opening sentence should contain the essay's central concept.",
      "Establish context through the opening's implicit promise: 'here is an important idea I'm going to unpack for you.' The reader should know immediately what the essay is about and why it matters.",
      "Close by expanding the scope \u2014 end not with a summary but by pointing toward the largest implication or the most resonant application of the argument. The final paragraphs should feel like the essay opening outward rather than wrapping up.",
      "Use numbered footnotes (rendered as bracketed numbers in text with corresponding notes at the end) for digressions, qualifications, historical context, and personal anecdotes that would interrupt the main argument's flow.",
      "End with acknowledgments \u2014 'Thanks to [names] for reading drafts' \u2014 signaling the essay as part of an intellectual community and a drafting process.",
      "Use minimal formatting: no headers, no bold, no bullet points in the body. Organize through paragraph breaks and the natural logic of the argument. Lists, when they appear, are embedded in prose ('sports, politics, art, music...').",
      "Include parenthetical asides for quick qualifications or clarifications: '(If they were mystifying and obviously important, they'd be famous open questions.)'"
    ],
    "do_not": [
      "Do not open with a generic hook, a dictionary definition, or a broad truism \u2014 start with something specific and personal.",
      "Do not close with a tidy summary that restates the main points \u2014 trust the reader to have followed along.",
      "Do not use section headers, subheadings, or visual hierarchy to organize the essay \u2014 the structure should be implicit in the argument's logic.",
      "Do not end on a pessimistic or hedging note \u2014 close with forward-looking energy or quiet confidence."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\" (opening: personal revelation + central thesis)",
      "\"Ambition tends to make you climb existing peaks, but if you stick close enough to an interesting enough question, it may grow into a mountain beneath you.\" (closing: expansive metaphor pointing outward)",
      "\"Thanks to Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan for reading drafts\" (genre convention: acknowledgments)"
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
      "Build the default sentence as a single independent clause with one or two prepositional phrases or subordinate clauses \u2014 keep the core structure clean and parseable in one pass.",
      "When making a compound sentence, prefer a single comma-and join rather than stacking multiple coordinating conjunctions; reserve longer chains for moments of accumulation or emphasis.",
      "Use sentence-initial coordinating conjunctions ('And', 'But', 'Or') freely to create a conversational, forward-moving rhythm that links ideas across sentence boundaries rather than within them.",
      "When a point needs elaboration, follow a declarative sentence with a shorter sentence that qualifies, extends, or flips it \u2014 create a call-and-response pattern between consecutive sentences.",
      "Deploy very short sentences (fragments or two-to-four-word declarations) as emphatic punctuation after a sequence of moderate-length sentences: 'There isn't.' or 'Perhaps something changes at adolescence.'",
      "Build occasional long sentences by stacking parallel infinitive phrases or conditional clauses, but only when enumerating components of a single idea \u2014 never for narrative description."
    ],
    "do_not": [
      "Do not write ornate, multi-layered sentences with nested subordinate clauses \u2014 keep embedding shallow (one level deep at most).",
      "Do not maintain a monotonous sentence length; after two or three sentences of similar length, break the pattern with something noticeably shorter or longer.",
      "Do not use participial phrases ('Walking down the street, he noticed...') as sentence openers \u2014 this author almost never uses them."
    ],
    "evidence": [
      "There isn't.",
      "That limit varies depending on the type of work and the person.",
      "You need great natural ability and to have practiced a lot and to be trying very hard."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when reporting personal experience or opinions, and shift to second person ('you') when generalizing the lesson to the reader \u2014 treat the reader as someone in the same position, not a student being lectured.",
      "Maintain the tone of a smart friend thinking aloud: confident in claims but openly uncertain about edges, never pompous, never chatty to the point of flippancy.",
      "Signal certainty with plain declaratives ('The answer is...', 'You need both.') and signal uncertainty with explicit hedges ('I suspect', 'I'm not sure', 'perhaps', 'probably') \u2014 never hedge a core claim, and never state a speculation as fact.",
      "Use contractions selectively: deploy them in conversational or concessive passages to keep warmth, but drop them in emphatic or declarative moments to add weight.",
      "When citing others, weave their words into your argument rather than deferring to their authority \u2014 the author's own reasoning always stays in the foreground.",
      "Address the reader directly with 'you' to make abstract advice feel personal and actionable, as though coaching them through a realization."
    ],
    "do_not": [
      "Do not adopt an academic or detached register \u2014 never write as if observing from above. Stay in the arena with the reader.",
      "Do not use false modesty or excessive self-deprecation; confidence should be quiet and matter-of-fact, not performed.",
      "Do not use exclamatory enthusiasm or motivational-speaker energy \u2014 the tone is thoughtful and measured, never hype."
    ],
    "evidence": [
      "I wasn't sure of that as a kid.",
      "Now I know the answer to that question.",
      "I suspect most people have to learn what work is before they can love it."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a counterintuitive or deceptively simple claim, then spend the essay unpacking why it's more complex than it seems \u2014 the whole piece should feel like peeling layers off an obvious-seeming truth.",
      "Advance arguments by stating a principle, then immediately testing it against examples (real people, personal experience, or thought experiments) before moving to the next principle.",
      "Acknowledge counterarguments or complications inline \u2014 don't save objections for a rebuttal section. Raise the 'but what about...' naturally as part of the forward flow, then resolve it within the same paragraph or the next.",
      "Use personal anecdotes not as decoration but as evidence: the anecdote should demonstrate or discover a principle, not merely illustrate one already stated.",
      "Build the essay's structure as a chain of realizations, each one unlocked by the previous \u2014 the logic should feel like discovery in real time, not a pre-organized outline.",
      "When two ideas seem to contradict, name the tension explicitly ('There's a faint xor between talent and hard work') and then resolve it, rather than ignoring or smoothing over the contradiction.",
      "Hedge with precision: use 'I suspect', 'probably', 'perhaps' for genuinely uncertain claims, but state core insights without qualification."
    ],
    "do_not": [
      "Do not present a thesis statement followed by numbered supporting points \u2014 the structure should feel exploratory, not formulaic.",
      "Do not use strawman arguments or dismiss objections flippantly; engage honestly with the hardest version of any counterpoint.",
      "Do not rely on citations or appeals to authority as primary evidence \u2014 personal reasoning and observation carry the argument."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "There's a faint xor between talent and hard work. It comes partly from popular culture, where it seems to run very deep, and partly from the fact that the outliers are so rare.",
      "The best test of whether it's worthwhile to work on something is whether you find it interesting. That may sound like a dangerously subjective measure, but it's probably the most accurate one you're going to get."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the insight, then support or complicate it in the sentences that follow.",
      "Use single-sentence paragraphs for emphasis, turning points, or to let a standalone idea breathe \u2014 these should feel like a beat of silence in a conversation.",
      "Connect paragraphs through logical continuation rather than explicit transition words: the last sentence of one paragraph should naturally raise the question that the next paragraph answers.",
      "Within a paragraph, sequence ideas as: claim \u2192 complication or example \u2192 refined restatement of the claim. The paragraph should end knowing more than it started.",
      "When introducing a new subtopic, use a clean break \u2014 don't try to bridge distant ideas with forced transitions. Let the juxtaposition do the work.",
      "Place footnote-style asides (marked with brackets) as separate paragraphs that extend or qualify the main argument without interrupting its flow."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore,' 'In addition,' 'Moreover,') \u2014 transitions should be implicit in the logic.",
      "Do not pad paragraphs with restated ideas or filler; each sentence must advance the thought.",
      "Do not bury the point at the end of a long buildup \u2014 lead with the insight, not with the wind-up."
    ],
    "evidence": [
      "There wasn't a single point when I learned this.",
      "That seems so obvious, and yet in practice we find it slightly hard to grasp.",
      "Perhaps something changes at adolescence. That would make sense."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogy sparingly but precisely \u2014 draw from everyday experience, mathematics, or computing ('a faint xor', 'like one of a set of simultaneous equations', 'like a dog circling while it decides exactly where to lie down') to make abstract ideas visceral.",
      "Employ rhetorical questions to voice the reader's likely objection, then immediately answer them \u2014 the question-answer pair drives the argument forward.",
      "Use parallel structure when enumerating related ideas, especially with infinitive phrases ('you have to learn not to lie to yourself, not to procrastinate, not to get distracted, and not to give up').",
      "Deploy direct quotation from notable figures not as appeals to authority but as vivid evidence \u2014 let their words do the illustrating, then return to your own analysis.",
      "Use deliberate repetition of key phrases across paragraphs ('the shape of real work', 'working hard', 'the center') to create thematic cohesion without explicit signposting.",
      "Employ parenthetical asides to inject a secondary thought or self-correction without breaking the main sentence's momentum ('which is a form of lying to yourself')."
    ],
    "do_not": [
      "Do not use literary or poetic metaphors \u2014 analogies should clarify, not beautify.",
      "Do not use exclamation marks or hyperbolic language for emphasis \u2014 let the ideas carry their own weight.",
      "Do not use anaphora for dramatic effect or speechifying; repetition should serve clarity and cohesion, not oratory."
    ],
    "evidence": [
      "There's a faint xor between talent and hard work.",
      "Between essays I fuss for a few days, like a dog circling while it decides exactly where to lie down.",
      "you have to learn not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a sentence that sounds like a concession or understatement \u2014 something the reader might initially agree with but that the essay will complicate or overturn.",
      "Establish the essay's scope in the first two or three paragraphs by showing the gap between naive understanding and hard-won insight ('I wasn't sure of that as a kid... Now I know').",
      "Close by zooming out to a synthesizing principle that ties together the essay's threads \u2014 the ending should feel like arriving at a higher vantage point, not delivering a punchline.",
      "In the final paragraph, restate the core insight in its most complete and nuanced form, incorporating all the complications explored throughout the essay.",
      "Use numbered footnotes (bracketed references) to handle tangential but interesting points \u2014 this keeps the main essay focused while rewarding curious readers.",
      "Format as continuous prose with no headers, subheadings, or bullet points \u2014 the essay should read as one sustained act of thinking, not a structured document.",
      "Use em dashes and parentheticals for inline asides; use colons to set up explanations or lists within sentences."
    ],
    "do_not": [
      "Do not open with a dramatic hook, provocative quote, or attention-grabbing anecdote \u2014 start quiet and build.",
      "Do not close with a call to action, inspirational exhortation, or neat summary \u2014 end with insight, not instruction.",
      "Do not use headers, section breaks, bold text, or other visual formatting within the body \u2014 the structure should be carried entirely by the prose."
    ],
    "evidence": [
      "It might not seem there's much to learn about how to work hard.",
      "This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.",
      "Like a Spanish Flu victim, you're fighting your own immune system: Instead of giving up, you tell yourself, I should just try harder. And who can say you're not right?"
    ]
  }
}
```

### sample-4.txt (3407 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 3407,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone of your prose from mid-length declarative sentences that state a claim plainly, then follow with a sentence that elaborates, qualifies, or gives an example.",
      "When constructing longer sentences, chain clauses with coordinating conjunctions ('and', 'but', 'or') rather than subordinating clauses \u2014 keep the logic additive and forward-moving rather than nested.",
      "Use short, blunt sentences to deliver a verdict or pivot point after a stretch of explanation: drop them in as punctuation marks within the argument.",
      "Deploy parallel structure when listing reasons, examples, or consequences \u2014 present them in matched grammatical form to create a sense of organized enumeration (e.g. 'If you have to be aggressive\u2026 you'll probably still be aggressive. If you have to manufacture\u2026 you'll learn things. And most importantly, if you have to work hard\u2026 you'll keep doing it.').",
      "Let sentences within a paragraph alternate between assertion and illustration \u2014 state a principle, then immediately ground it with a specific company name, anecdote, or concrete scenario before moving to the next principle.",
      "When a sentence introduces a counterpoint or concession, begin with 'But' or 'And' as the first word \u2014 treat conjunctions as legitimate sentence openers to maintain conversational momentum."
    ],
    "do_not": [
      "Do not write heavily subordinated sentences with multiple embedded clauses separated by semicolons \u2014 keep clause relationships flat and additive.",
      "Do not string together more than two or three long sentences in a row without breaking the pattern with something direct and short.",
      "Do not use ornate or Latinate sentence constructions \u2014 avoid inversions, fronted adverbial phrases, or periodic sentence structures that delay the main verb."
    ],
    "evidence": [
      "\"They unconsciously judge larval startups by the standards of established ones. They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition.\"",
      "\"It's not the product that should be insanely great, but the experience of being your user.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person plural ('we') perspective as the default institutional voice, shifting to first-person singular ('I') for personal anecdotes and direct testimony, and to second-person ('you') when issuing advice or challenging the reader.",
      "Maintain the tone of a seasoned mentor speaking to smart but inexperienced people \u2014 authoritative without being condescending, warm without being soft. Deliver hard truths plainly as if they're obvious once stated.",
      "Express certainty through flat declarative statements without hedging ('It's not enough just to do something extraordinary initially') \u2014 reserve hedging for genuinely uncertain claims using 'I think', 'probably', or 'usually'.",
      "Use contractions selectively \u2014 deploy them in conversational stretches and direct address ('you'll', 'they'd', 'don't') to maintain an approachable register, but allow full forms when the sentence needs more gravity or formality.",
      "Signal insider knowledge casually by dropping specific names, company anecdotes, and internal jargon ('Collison installation', 'pulling a Meraki') without over-explaining \u2014 treat the reader as someone who wants to be let into the club.",
      "When diagnosing founder mistakes, name the psychological root cause bluntly ('a combination of shyness and laziness', 'a combination of solipsism and laziness') \u2014 don't soften the diagnosis."
    ],
    "do_not": [
      "Do not adopt an academic or detached tone \u2014 never write as though observing startups from the outside. Always write as someone who has been in the room.",
      "Do not use excessive hedging or qualification \u2014 avoid stacking hedges ('it might perhaps be somewhat useful') that dilute the directness of advice.",
      "Do not be sycophantic toward the reader or flatter them \u2014 assume they need to hear uncomfortable truths and deliver those truths matter-of-factly."
    ],
    "evidence": [
      "\"I often have to encourage founders who don't see the full potential of what they're building.\"",
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"So why do founders think launches matter? A combination of solipsism and laziness.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated as plainly as possible, then spend the rest of the piece proving it through accumulated examples rather than deductive logic.",
      "Build arguments through case studies and named examples \u2014 introduce a principle, then immediately illustrate it with a specific startup (Stripe, Airbnb, Facebook, Pebble, Wufoo) and a concrete anecdote about what the founders actually did.",
      "Structure the overall argument as a series of variations on a theme: present the core thesis, then explore it from different angles (recruiting users, delighting users, narrowing the market, doing manual work), each time reinforcing the same underlying principle.",
      "Anticipate the reader's objections and voice them explicitly before countering them \u2014 frame the objection as what 'founders think' or 'would-be founders believe', then dismantle it with evidence or reframing.",
      "Use analogies and metaphors to make abstract startup dynamics tangible \u2014 compare startups to physical processes (cranks on car engines, contained fires, projectiles vs. powered aircraft, larval creatures).",
      "When presenting reasons or causes, enumerate them explicitly ('Three reasons, I think. One is\u2026 Another reason\u2026 But perhaps the biggest thing\u2026') to give the reader clear structural handholds.",
      "Handle counterarguments by acknowledging them briefly, then pivoting with 'But' to show why the objection doesn't hold or why the cost is worth paying."
    ],
    "do_not": [
      "Do not rely on abstract reasoning or theoretical frameworks without grounding them in specific, named examples.",
      "Do not present a claim and move on without illustration \u2014 every significant assertion must be followed by at least one concrete case.",
      "Do not use formal citation or academic evidence \u2014 the authority comes from personal experience and firsthand observation, not from studies or data."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.\"",
      "\"They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.\"",
      "\"Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim or assertion that immediately advances the argument \u2014 do not ease in with context or throat-clearing.",
      "Let paragraphs function as self-contained argument units: state a point, illustrate it, and either resolve it or pivot to the next complication within the same paragraph.",
      "Use single-sentence paragraphs as emphatic punctuation \u2014 deploy them to deliver a verdict, land a punchline, or mark a transition between major sections.",
      "Transition between paragraphs by implicit logical connection rather than explicit transition words \u2014 the next paragraph should feel like the natural next thought, not a signposted move.",
      "Use section headers as one-word or two-word labels ('Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big', 'Vector') that name the concept about to be explored \u2014 treat them as chapter titles, not descriptions.",
      "When moving between major sections, use the new section header itself as the transition device \u2014 end the previous section with a completed thought, then let the header redirect attention without a bridging paragraph."
    ],
    "do_not": [
      "Do not use explicit transition phrases like 'furthermore', 'moreover', 'in addition', 'consequently' \u2014 these are too formal and break the conversational flow.",
      "Do not build paragraphs that bury the point at the end after a long buildup \u2014 lead with the claim, then support it.",
      "Do not write paragraphs that merely summarize what was just said \u2014 every paragraph must add new information or a new angle."
    ],
    "evidence": [
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"Fragile Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, physical metaphors to make abstract business concepts tangible \u2014 startups as 'larval' creatures, growth as a 'contained fire', ideas as 'vectors', founders as needing 'muscle memory'. Prefer metaphors drawn from biology, physics, and everyday mechanics.",
      "Deploy rhetorical questions to voice the reader's skepticism, then immediately answer them \u2014 use the question-answer pattern as a way to structure argument turns ('How do you find users to recruit manually?', 'Can, perhaps, but should? Yes.').",
      "Use direct quotation from named founders and specific dialogue to bring anecdotes to life ('Right then, give me your laptop', 'Will you try our beta?', 'how valuable it was to source good screws').",
      "Employ antithesis to sharpen contrasts \u2014 set up what people expect against what's actually true, often with a 'not X, but Y' or 'It's not\u2026 it's\u2026' construction.",
      "Build lists of examples when making a broad claim \u2014 name multiple companies or scenarios in quick succession to show the pattern is universal, not cherry-picked.",
      "Use deliberate callbacks and motif recurrence \u2014 return to earlier images or phrases (the mousetrap, 'insanely great', compound growth) to create structural cohesion across a long piece."
    ],
    "do_not": [
      "Do not use literary or poetic devices like alliteration, assonance, or elaborate extended metaphors \u2014 keep figurative language functional and grounded.",
      "Do not use exclamation marks or exclamatory emphasis \u2014 let the content carry the force.",
      "Do not deploy irony or sarcasm at length \u2014 when humor appears, it should be dry and brief, delivered through understatement or wry observation rather than sustained comedic passages."
    ],
    "evidence": [
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"It's like keeping a fire contained at first to get it really hot before adding more logs.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the thesis directly in the first sentence \u2014 frame it as advice or a claim that the rest of the essay will prove. Make the opening sentence quotable and self-contained.",
      "Immediately after the thesis, describe the common misconception or default assumption that the essay will argue against \u2014 set up the 'what most people think' foil within the first paragraph.",
      "Close the essay by zooming out from specific tactics to a broader principle about how the initial unscalable work shapes the company's long-term DNA \u2014 end on a note of earned optimism.",
      "Use numbered footnotes (rendered as bracketed numbers like [1], [2]) for digressions, caveats, attributions, and tangential but interesting asides \u2014 keep the main text clean while offering depth for engaged readers.",
      "Structure the essay as a series of labeled sections, each exploring a different facet of the central thesis \u2014 use single-word or short-phrase headers in bold or as standalone labels.",
      "Use em dashes sparingly for parenthetical insertions and mid-sentence pivots. Use parenthetical asides for brief qualifications or clarifications.",
      "Include a 'Notes' section at the end for extended footnotes, and a 'Thanks to\u2026' acknowledgment line as the final element."
    ],
    "do_not": [
      "Do not open with a scene, anecdote, or narrative hook \u2014 open with the idea itself, stated plainly.",
      "Do not close with a neat summary that restates all the points \u2014 the ending should feel like a final elevation of the argument, not a recap.",
      "Do not use formal academic structure (abstract, introduction, conclusion, bibliography) \u2014 the essay should feel like a well-organized conversation, not a paper."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\""
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
      "Build most sentences from a single main clause with minimal subordination \u2014 prefer declarative, subject-verb-object structures that read as direct assertions.",
      "When constructing longer sentences, chain ideas with commas and coordinating conjunctions ('and', 'but', 'or') rather than nesting subordinate clauses deeply \u2014 the sentence should feel like a list of observations, not a labyrinth.",
      "Use conditional and hypothetical framing ('If you could...', 'Suppose in the future...', 'What if...') to set up thought experiments, placing the conditional clause first to create suspense before the payoff.",
      "Vary rhythm by following a sequence of medium declarative statements with a sudden short, punchy sentence that lands the point \u2014 the short sentence should feel like the conclusion the preceding sentences were building toward.",
      "Favor parallel structure when presenting contrasts or lists: 'not X, but Y', 'for a time as A, for a time as B, for a time as C' \u2014 use the repetition of syntactic shape to create momentum."
    ],
    "do_not": [
      "Do not write densely packed, multi-layered sentences with multiple levels of subordination \u2014 avoid the academic style of clause-within-clause-within-clause.",
      "Do not use passive voice as the default \u2014 reserve it for rare occasions when the agent is genuinely unknown or irrelevant.",
      "Do not front-load sentences with long adverbial phrases or prepositional chains before reaching the subject and verb."
    ],
    "evidence": [
      "\"It's the nature of fashion to be invisible, in the same way the movement of the earth is invisible to all of us riding on it.\"",
      "\"Argue with idiots, and you become an idiot.\"",
      "\"Scientists go looking for trouble.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') to anchor personal experience and opinion, but shift to second person ('you') when issuing challenges or inviting the reader into thought experiments \u2014 the reader should feel directly addressed, as if in conversation.",
      "Maintain a tone that is intellectually confident but conversationally casual \u2014 assert bold claims without hedging excessively, but deliver them with the ease of someone talking over coffee, not lecturing from a podium.",
      "Signal uncertainty or concession with informal phrasing rather than academic hedging: use 'I suspect', 'I think', 'it seems', 'odds are' rather than 'it could be argued that' or 'one might posit'.",
      "Deploy dry, understated humor through absurd hypotheticals and reductio ad absurdum rather than jokes or wit for its own sake \u2014 humor should serve the argument, making the opposing position look silly.",
      "Use contractions naturally in conversational passages but drop them occasionally for emphasis or when making a more formal-sounding assertion \u2014 the shift in register should feel like leaning in to make a serious point."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic register \u2014 never sound like a journal article or textbook.",
      "Do not use self-deprecating humor or undermine your own authority \u2014 the stance is confident and curious, not apologetic.",
      "Do not use intensifiers or superlatives to signal conviction ('extremely', 'absolutely', 'without a doubt') \u2014 let the logic and examples carry the force."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"Odds are you just think what you're told.\"",
      "\"What could HUAC do, defend the Salem witch trials?\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims as bold, simple assertions, then immediately support them with a concrete historical example, analogy, or thought experiment \u2014 the evidence should arrive within one or two sentences of the claim.",
      "Build arguments by accumulation: present multiple independent approaches to the same question (the conformist test, tracking trouble, following labels, diffing cultures, examining mechanism) and let their convergence be the proof.",
      "Use thought experiments and hypothetical scenarios as primary evidence \u2014 construct vivid 'suppose X' or 'imagine Y' scenarios that make abstract ideas tangible and testable.",
      "Handle counterarguments by preemptively voicing them in the reader's likely words, then answering directly \u2014 frame the objection as a natural question ('Some would ask, why would one want to do this?') and respond conversationally.",
      "Employ analogies that map complex social phenomena onto simple, everyday experiences: fashion, maps with deliberate errors, stretching before running, skirmishers in ancient armies \u2014 always choose analogies that are more concrete and visceral than the thing being explained.",
      "Progress through the argument using a problem-solution-application structure: identify a question, propose methods to answer it, then discuss what to do with the answers."
    ],
    "do_not": [
      "Do not cite statistics, studies, or authority figures as primary evidence \u2014 when referencing research (like the radiologist eye-tracking study), use it as an anecdote or illustration, not as proof.",
      "Do not use formal logical connectives ('therefore', 'consequently', 'moreover', 'furthermore') \u2014 let the logical connection emerge from the sequence of ideas and the reader's inference.",
      "Do not leave counterarguments unanswered or merely acknowledged \u2014 always respond to them with a direct rebuttal or a reframing that absorbs the objection."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"It's like stretching. When you stretch before running, you put your body into positions much more extreme than any it will assume during the run.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or question, stated directly \u2014 do not build up to the point; start with it.",
      "Use single-sentence paragraphs to deliver standalone assertions that serve as turning points, punchlines, or thesis statements \u2014 these should land with emphasis precisely because they stand alone.",
      "When a paragraph contains multiple sentences, organize them as claim \u2192 example \u2192 implication, moving from abstract to concrete to consequence.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph should create a question or expectation that the first sentence of the next paragraph answers.",
      "Use section headers as structural signposts that name each new method or angle of inquiry \u2014 headers should be short, evocative labels (one or two words) rather than descriptive phrases.",
      "Alternate between paragraphs that develop an argument at length and single-sentence paragraphs that punctuate or pivot \u2014 the rhythm should feel like a speaker pausing for effect."
    ],
    "do_not": [
      "Do not begin paragraphs with explicit transition phrases ('Furthermore', 'In addition', 'On the other hand') \u2014 let the logical sequence speak for itself.",
      "Do not write paragraphs that circle back to restate their opening point at the end \u2014 state it once and move on.",
      "Do not bury the key insight in the middle of a long paragraph \u2014 if an idea is important enough, give it its own paragraph or place it at the paragraph's opening."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\" (standalone paragraph delivering the essay's central claim)",
      "\"The age of consent fluctuates like hemlines.\" (standalone paragraph used as a punchline after a longer argument)",
      "\"Scientists go looking for trouble.\" (standalone paragraph serving as a summary of the preceding argument)"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions to frame each new section or line of inquiry \u2014 pose the question the reader should be asking, then answer it systematically.",
      "Deploy analogies that map unfamiliar social dynamics onto familiar physical or everyday experiences (fashion/clothing, maps with errors, stretching, skating rinks, pendulums) \u2014 the analogy should be so vivid it becomes the memorable takeaway.",
      "Use historical examples as parables rather than citations \u2014 tell them as mini-narratives with characters (Galileo, Copernicus, Charles VIII, Milton, Arthur Miller) and let the reader draw the parallel.",
      "Employ repetition of key phrases and concepts across the essay ('moral fashion', 'can't say', 'get in trouble') to create thematic cohesion \u2014 the repeated phrase becomes a refrain that accumulates meaning.",
      "Use direct address and imperatives to draw the reader into active participation: 'Take a label', 'Ask yourself', 'Look for prigs', 'Try diffing other cultures' \u2014 make the reader a collaborator in the inquiry.",
      "Deploy reductio ad absurdum by constructing deliberately silly hypotheticals (banning the color yellow, people in Pittsburgh being ten feet tall) that make the opposing position look ridiculous by analogy."
    ],
    "do_not": [
      "Do not use extended metaphors that run for multiple paragraphs \u2014 keep analogies tight, usually one or two sentences, then return to the literal argument.",
      "Do not use ornamental figurative language (flowery similes, poetic imagery) \u2014 every device must serve the argument, not decorate it.",
      "Do not use anaphora or other overt repetition schemes as rhetorical flourish \u2014 repetition should feel natural and conversational, not performative."
    ],
    "evidence": [
      "\"Suppose in the future there is a movement to ban the color yellow. Proposals to paint anything yellow are denounced as 'yellowist'\"",
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"Do you have any opinions that you would be reluctant to express in front of a group of your peers?\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-comment that frames the essay's topic and scope in plain terms, then launch into the argument with a relatable, everyday question or observation \u2014 the opening should feel like clearing your throat before making a provocative point.",
      "Begin the body proper with a question addressed directly to the reader that doubles as a thought experiment \u2014 the reader should feel implicated from the first line.",
      "Use section headers to divide the essay into named 'methods' or 'approaches', giving the piece the feel of a practical manual for thinking rather than a passive meditation.",
      "Close sections by pivoting to the next method or question \u2014 endings should open doors, not close them, creating forward momentum.",
      "End the essay with practical, actionable advice rather than a grand summary or philosophical flourish \u2014 the final section should tell the reader what to actually do with the ideas presented.",
      "Use endnote references (bracketed numbers) for asides, qualifications, and additional examples that would interrupt the main argument's flow \u2014 keep the main text clean and the digressions optional."
    ],
    "do_not": [
      "Do not open with a quotation, a definition, or a sweeping historical claim \u2014 open with something personal, conversational, and immediately engaging.",
      "Do not close with a neat summary that restates all the main points \u2014 the ending should feel like a natural stopping point in an ongoing conversation, not a formal conclusion.",
      "Do not use formatting like bold text, bullet lists, or block quotes within the body \u2014 the essay should read as continuous prose with only section headers as structural markers."
    ],
    "evidence": [
      "\"(This essay is about heresy: how to think forbidden thoughts, and what to do with them.)\" (parenthetical framing device opening the essay)",
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked?\" (opening question that draws the reader in through shared experience)",
      "\"My advice is, don't say it. Or at least, pick your battles.\" (practical, direct advice as a section opening that pivots to actionable guidance)"
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
  "one_line_description": "informal, exploratory, declarative \u2014 conversational authority with intellectual curiosity and plain-spoken precision",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clear claim, then extend with one qualifying or elaborating clause using commas, dashes, or coordinating conjunctions \u2014 the default shape is 'assertion, qualification.'",
      "Chain clauses with 'and,' 'but,' and 'because' as the primary connectors \u2014 favor these plain conjunctions over elaborate subordination.",
      "Use the pattern of stating a principle, then immediately illustrating it with a concrete case joined by a dash, colon, or 'like.'",
      "Use sentence-initial coordinating conjunctions ('And', 'But', 'Or') freely to create conversational, forward-moving rhythm that links ideas across sentence boundaries.",
      "When constructing compound-complex sentences, lead with the conditional or contextual clause ('If you...,' 'When you...') and resolve with the main claim \u2014 front-load the frame, back-load the payoff.",
      "Employ parallel structure when presenting contrasting categories \u2014 mirror the grammatical shape of each side to make the contrast land cleanly.",
      "Follow a longer explanatory passage with a shorter declarative sentence that delivers the key insight \u2014 the brevity relative to the surrounding sentences signals importance.",
      "Alternate between assertion and illustration within a paragraph \u2014 state a principle, then ground it with a specific example before moving to the next principle."
    ],
    "do_not": [
      "Do NOT write heavily subordinated sentences with multiple nested relative or subordinate clauses \u2014 keep the clause hierarchy shallow, two levels deep at most.",
      "Do NOT use semicolons to join independent clauses as a regular habit \u2014 prefer starting a new sentence or using a conjunction.",
      "Do NOT front-load sentences with long adverbial or prepositional phrases before the subject \u2014 get to the subject and verb quickly.",
      "Do NOT use ornate or Latinate sentence constructions \u2014 avoid inversions, periodic structures, or participial phrase openers.",
      "Do NOT use flowery transitional phrases like 'furthermore,' 'moreover,' 'in addition to the foregoing' \u2014 keep connectors plain and conversational."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal experience or opinions, and shift to second person ('you') when giving advice or inviting the reader to consider something \u2014 this creates a conversational, one-on-one mentoring tone.",
      "Maintain the tone of a smart friend thinking aloud: confident in claims but openly uncertain about edges, never pompous, never flippant.",
      "Signal certainty with plain declaratives and signal uncertainty with informal hedges like 'I think,' 'I suspect,' 'it seems,' 'perhaps,' 'probably' \u2014 never hedge a core claim, and never state a speculation as fact.",
      "Use contractions selectively \u2014 deploy them in conversational passages to maintain warmth, but drop them in emphatic or declarative moments to add weight.",
      "When expressing strong opinions, understate rather than overstate \u2014 let the logic do the persuading and avoid exclamation marks, emphatic adverbs ('absolutely,' 'incredibly'), and emotional appeals.",
      "Deploy dry, understated humor through unexpected analogies, absurd hypotheticals, or quiet irony rather than jokes or witticisms \u2014 humor should serve the argument.",
      "Adopt a collegial, slightly professorial distance \u2014 you're sharing hard-won insight with someone you respect as a peer, not lecturing from above or confiding as a close friend."
    ],
    "do_not": [
      "Do NOT use an impersonal, detached academic voice \u2014 always maintain the sense of a specific person thinking and speaking.",
      "Do NOT use exclamation marks or effusive language \u2014 enthusiasm is expressed through the ideas themselves, not through tone markers.",
      "Do NOT adopt a preachy or moralistic stance \u2014 present insights as observations about how the world works, not as commands about how people should behave.",
      "Do NOT use intensifiers or superlatives to signal conviction ('extremely,' 'absolutely,' 'without a doubt') \u2014 let examples and logic carry the force.",
      "Do NOT use self-deprecating humor or undermine your own authority \u2014 the stance is confident and curious, not apologetic."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive, or deceptively simple claim, then spend the essay unpacking why it's more complex or important than it seems.",
      "Advance arguments by stating a claim, immediately illustrating it with a concrete example, then drawing out the implication \u2014 this claim-example-implication triplet is the fundamental unit of reasoning.",
      "Build arguments by induction: present multiple specific cases from different domains (science, startups, history, everyday life), then extract the general pattern \u2014 let the reader see the pattern emerge.",
      "Handle counterarguments and qualifications preemptively and inline \u2014 introduce them with 'But,' 'Though,' or 'One difficulty here' rather than in separate rebuttal sections.",
      "Use analogies and cross-domain examples as the primary form of evidence \u2014 connect business to biology, history to science, abstract dynamics to everyday experience.",
      "Build analogies from concrete, everyday experiences (fashion, food, physical mechanics, childhood experiences) rather than technical or literary references.",
      "Use the dialectical move of establishing a broad claim, carving out exceptions or complications, then resolving the tension with a more refined distinction.",
      "Hedge with precision: use 'I suspect,' 'probably,' 'perhaps' for genuinely uncertain claims, but state core insights without qualification."
    ],
    "do_not": [
      "Do NOT support claims with statistics, studies, or formal citations as primary evidence \u2014 authority comes from direct reasoning and relatable examples.",
      "Do NOT present arguments as settled or beyond question \u2014 maintain the posture of live exploration, even when quite confident.",
      "Do NOT structure arguments as formal numbered steps or explicit 'first, second, third' enumerations in prose \u2014 let the logical sequence emerge from the flow of reasoning.",
      "Do NOT leave counterarguments unanswered \u2014 always respond with a direct rebuttal or a reframing that absorbs the objection."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or observation \u2014 front-load the insight, then support or complicate it in the sentences that follow.",
      "Connect paragraphs through logical continuation rather than explicit transition words \u2014 the last sentence of one paragraph should create a question or implication that the next paragraph picks up.",
      "Within paragraphs, sequence ideas as claim, then complication or example, then refined restatement \u2014 the paragraph should end knowing more than it started.",
      "Close paragraphs with the most surprising, memorable, or forward-pointing thought \u2014 end on the idea that will linger, not on a summary or restatement.",
      "When transitioning to a new major section or angle, use a question or a 'But' pivot to signal the turn.",
      "Each paragraph should advance exactly one step in the argument \u2014 do not cover multiple unrelated points in a single paragraph."
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' 'As a result,' 'Consequently' \u2014 transitions should feel natural, not signposted.",
      "Do NOT end paragraphs with a summary restatement of the opening point \u2014 move forward, don't circle back.",
      "Do NOT pad paragraphs with restated ideas or filler \u2014 each sentence must advance the thought.",
      "Do NOT bury the point at the end of a long buildup \u2014 lead with the insight, not with the wind-up."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogies as the central rhetorical engine \u2014 draw connections between seemingly unrelated fields to reveal underlying structural similarities.",
      "Make analogies vivid, physical, and grounded in common experience (food, fashion, fire, babies, dogs, skating rinks) \u2014 the analogy should be more concrete than the thing being explained.",
      "Use rhetorical questions to transition between sections and to voice the reader's likely objection, then immediately answer them \u2014 the question-answer pair drives the argument forward.",
      "Repeat key terms and phrases deliberately across paragraphs to create thematic cohesion \u2014 use exact repetition rather than synonym variation for core concepts.",
      "Deploy parallel structure across sentences and paragraphs when presenting contrasting categories \u2014 mirror syntax to make the contrast structural, not just semantic.",
      "Use direct address and soft imperatives ('stop and ask yourself,' 'treat it as a puzzle,' 'try X') to make abstract advice feel actionable and personal.",
      "Use historical examples as mini-parables with named characters rather than as formal citations.",
      "Employ reductio ad absurdum by constructing deliberately silly hypotheticals that make the opposing position look ridiculous by analogy."
    ],
    "do_not": [
      "Do NOT use elaborate literary metaphors, poetic imagery, or ornate figurative language \u2014 keep analogies functional and grounded.",
      "Do NOT use exclamation marks or emphatic punctuation \u2014 let the ideas carry their own weight.",
      "Do NOT use anaphora or other formal rhetorical schemes in a way that feels oratorical or speechlike \u2014 the rhythm should be conversational, not declamatory.",
      "Do NOT extend metaphors for multiple paragraphs \u2014 keep analogies tight, usually a sentence or two, then return to the literal argument."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating a bold observation or personal revelation in the first sentence \u2014 make it declarative, specific, and self-contained, containing the essay's central concept.",
      "Immediately after the thesis, describe the common misconception or naive understanding that the essay will complicate or overturn.",
      "Build the opening section by stacking examples from different domains that all illustrate the same principle, creating cumulative discovery before explicitly naming the pattern.",
      "Close by expanding the scope \u2014 end not with a summary but by pointing toward the largest implication or most resonant application, so the essay opens outward rather than wrapping up.",
      "Use numbered endnotes (bracketed references) for tangential observations, qualifications, and digressions that would disrupt the main flow \u2014 notes can be more casual and speculative than the main text.",
      "End with acknowledgments ('Thanks to [names] for reading drafts') signaling the essay as part of an intellectual community.",
      "Use minimal formatting \u2014 no bullet lists, no bold or italic emphasis in the body. Let the prose structure itself through paragraph breaks and occasional section dividers only."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation, a dictionary definition, or a narrative anecdote \u2014 begin with a declarative observation or claim.",
      "Do NOT close with a tidy summary that restates the main points or a call to action \u2014 trust the reader to have followed along.",
      "Do NOT use subheadings, numbered sections, or bullet points within the body of the essay unless structuring a practical how-to piece \u2014 the structure should generally be invisible, carried by logic and paragraph breaks.",
      "Do NOT end on a pessimistic or hedging note \u2014 close with forward-looking energy or quiet confidence."
    ]
  },
  "signature_phrases": {
    "use": [
      "I think",
      "I suspect",
      "it seems to me",
      "as far as I can tell",
      "in my experience",
      "the answer is",
      "in fact",
      "in practice",
      "in a sense",
      "a combination of",
      "the way to",
      "the trick is",
      "odds are",
      "the best test",
      "not just X but Y",
      "there's a kind of",
      "perhaps",
      "probably",
      "Ditto for",
      "the same is true for"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "in conclusion",
      "consequently",
      "it could be argued that",
      "one might posit",
      "it is important to note",
      "needless to say",
      "absolutely",
      "incredibly",
      "extremely",
      "without a doubt",
      "game-changer",
      "leverage (as a verb)",
      "synergy",
      "paradigm shift",
      "deep dive",
      "unpack (as jargon)",
      "at the end of the day",
      "in today's world"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'additionally,' and 'consequently' with 'But,' 'And,' or nothing \u2014 let the logical connection be implicit.",
    "Convert passive constructions to active where possible \u2014 put the agent in the subject position.",
    "Break any sentence with more than two levels of clause nesting into separate sentences joined by 'And' or 'But.'",
    "Replace abstract claims that lack illustration with the pattern: claim, then concrete example from an everyday domain.",
    "Remove intensifiers ('very,' 'really,' 'extremely,' 'absolutely') \u2014 if the point needs emphasis, make the example more vivid instead.",
    "Convert formal hedges ('it could be argued that,' 'one might suggest') to informal ones ('I think,' 'I suspect,' 'probably').",
    "Replace any transition phrase from the never-use list with either a sentence-initial conjunction or a direct logical continuation.",
    "If a paragraph buries its point at the end, move the key claim to the first sentence and reorganize the support after it.",
    "When you find a paragraph covering multiple distinct ideas, split it so each paragraph advances exactly one step.",
    "Replace ornate or literary metaphors with concrete, everyday analogies drawn from common experience."
  ]
}
```