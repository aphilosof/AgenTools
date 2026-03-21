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
      "Build sentences around a single clear claim, then extend them with one or two qualifying clauses introduced by conjunctions ('but,' 'and,' 'because') or relative pronouns ('which,' 'who,' 'that').",
      "Default to a medium-length declarative sentence as the workhorse unit. Use it to state a position plainly, then follow with a sentence that qualifies, extends, or illustrates it.",
      "When making a bold or culminating point, drop to a very short standalone sentence for emphasis \u2014 these should land like a period at the end of a musical phrase, not appear in clusters.",
      "Chain ideas within sentences using commas before coordinating conjunctions ('but,' 'and,' 'or') to create a rolling, conversational cadence rather than stacking subordinate clauses.",
      "Use parallel structure when presenting a contrast or a set of related ideas \u2014 mirror the grammatical shape on both sides of the pivot word ('If you're naturally independent-minded\u2026 And if you're naturally conventional-minded\u2026').",
      "When introducing conditional or hypothetical reasoning, lead with 'if' clauses to set up the scenario before delivering the conclusion."
    ],
    "do_not": [
      "Do NOT pile up multiple subordinate clauses within a single sentence \u2014 keep nesting shallow (one level of subordination, rarely two).",
      "Do NOT use periodic sentences where the main point is withheld until the very end after long preamble \u2014 deliver the core idea early, then qualify.",
      "Do NOT use semicolons as a primary clause-linking device; prefer starting a new sentence or using a conjunction.",
      "Do NOT write in a staccato rhythm of many consecutive short sentences \u2014 the short sentence is a punctuation mark, not the default mode."
    ],
    "evidence": [
      "\"It's not enough just to be correct. Your ideas have to be both correct and novel.\"",
      "\"I really want to know.\"",
      "\"If you're naturally independent-minded, you're going to find it frustrating to be a middle manager. And if you're naturally conventional-minded, you're going to be sailing into a headwind if you try to do original research.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when sharing personal experience or conviction ('I think,' 'In my experience,' 'I know mine does'), and shift to second person ('you') when giving advice or drawing the reader into a thought experiment. Use this alternation to move between personal authority and direct engagement.",
      "Adopt the tone of a smart friend thinking out loud \u2014 authoritative but not dogmatic, earnest but leavened with occasional wry observations. Sound like someone who has arrived at these ideas through genuine reflection, not someone lecturing from a podium.",
      "Signal confidence through plain assertion ('It seems to me,' 'I think so') rather than hedging with academic qualifiers. When genuinely uncertain, use simple honest hedges ('I suspect,' 'perhaps,' 'may be') rather than elaborate epistemic disclaimers.",
      "Use contractions naturally in the flow of conversational exposition \u2014 they signal intimacy and informality. Drop them when making a more weighty or formal declaration for emphasis.",
      "Maintain a collegial distance \u2014 close enough to say 'you' and share personal anecdotes, but not so intimate as to be confessional. The reader is a thoughtful peer, not a student or a therapist."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal academic register \u2014 never write as if the author is absent from the text.",
      "Do NOT use sarcasm, snark, or cutting humor. When humor appears, it should be gentle, observational, and in service of the argument ('like writing software for a tiny computer used by a few thousand hobbyists').",
      "Do NOT over-hedge with stacked qualifiers ('it might perhaps be possible that in some cases\u2026') \u2014 one hedge per uncertain claim is enough.",
      "Do NOT use imperative commands without softening context. Frame directives as suggestions or natural consequences ('you want to avoid,' 'it's worth\u2026') rather than barking orders."
    ],
    "evidence": [
      "\"I wish someone had told me about this distinction when I was a kid, because it's one of the most important things to think about when you're deciding what kind of work you want to do.\"",
      "\"I suspect most people's unconscious mind will answer that question before their conscious mind has a chance to. I know mine does.\"",
      "\"Don't say it out loud. I'm not suggesting that you impose on everyone who talks to you the burden of proving what they say, but rather that you take upon yourself the burden of evaluating what they say.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern through multiple concrete examples before naming the general principle. Stack 2-4 instances (scientists, investors, founders, essayists) to make the pattern undeniable, then state the abstraction.",
      "Advance ideas through a dialectical rhythm: assert a claim, then immediately complicate it with 'but,' 'though,' or 'except.' This creates the sense of a mind genuinely working through a problem rather than delivering pre-packaged conclusions.",
      "Use analogies drawn from everyday, concrete experience to illuminate abstract points \u2014 food, shirts, high school, airbeds. Prefer analogies that are slightly unexpected but immediately graspable.",
      "Handle counterarguments and limitations preemptively by weaving them into the main line of reasoning ('One difficulty here, though, is that\u2026'). Acknowledge complications honestly rather than dismissing them.",
      "When presenting a taxonomy or framework (e.g., three components of independent-mindedness), introduce it cleanly, then explore each component in turn, and finally show how the components interact. End the framework section by noting that the clean categories are actually messier in practice.",
      "Use thought experiments and direct questions to the reader ('How did things look to them?', 'Is that true?') to make abstract reasoning feel participatory.",
      "Develop arguments linearly but with recursive callbacks \u2014 introduce an idea, move forward, then return to it later with new depth or a new angle."
    ],
    "do_not": [
      "Do NOT present arguments as formal logical proofs with numbered premises and conclusions \u2014 the logic should feel organic, not mechanical.",
      "Do NOT rely on citations, data, or appeals to authority as primary evidence. Personal observation, thought experiments, and concrete examples carry the argument.",
      "Do NOT dismiss counterarguments or wave them away \u2014 always engage with them seriously, even if briefly.",
      "Do NOT announce the structure of the argument ('In this essay I will argue three points\u2026'). Let the structure emerge naturally."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example\u2026 The same is true for investors\u2026 You see this pattern with startup founders too\u2026 Ditto for essayists.\"",
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\"",
      "\"Without this fastidiousness about truth, you can't be truly independent-minded. It's not enough just to have resistance to being told what to think. Those kind of people reject conventional ideas only to replace them with the most random conspiracy theories.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or a transitional assertion that connects to the previous paragraph. The first sentence should carry the paragraph's thesis or pivot.",
      "Close paragraphs with the most memorable or pointed formulation of the idea \u2014 a distilled restatement, a surprising implication, or a sentence that sets up the next paragraph's topic.",
      "Connect paragraphs through implicit logical flow rather than heavy-handed transition words. Use 'But,' 'And,' or 'So' at the start of a new paragraph for simple pivots, rather than elaborate transitional phrases.",
      "Within a paragraph, sequence ideas as: claim \u2192 illustration/example \u2192 implication or qualification. Move from assertion to evidence to consequence.",
      "Use single-sentence paragraphs as dramatic punctuation \u2014 for a culminating insight, a personal confession, or a clean summary of a complex preceding passage. They should feel earned, not arbitrary.",
      "When transitioning between major sections, use a direct question or a short bridge paragraph that explicitly names the new direction ('Can you make yourself more independent-minded? I think so.')."
    ],
    "do_not": [
      "Do NOT begin paragraphs with throat-clearing or context-setting filler ('It is important to note that\u2026', 'Another thing worth considering is\u2026'). Get to the point.",
      "Do NOT end paragraphs on a weak trailing qualifier \u2014 the final sentence should land with some force or forward momentum.",
      "Do NOT use formulaic transition words like 'furthermore,' 'moreover,' 'additionally,' 'in conclusion' \u2014 these sound academic and stiff."
    ],
    "evidence": [
      "\"Ditto for essayists. An essay that told people things they already knew would be boring. You have to tell them something new.\"",
      "\"I really want to know.\"",
      "\"But this pattern isn't universal. In fact, it doesn't hold for most kinds of work.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies sparingly but memorably \u2014 when you reach for one, make it vivid and concrete enough to function as a standalone image ('just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance').",
      "Employ anaphoric repetition to hammer home a pattern or build momentum. Repeat the same syntactic structure across consecutive sentences or paragraphs to create a sense of accumulation ('You don't want to\u2026 You have to\u2026').",
      "Use direct address and second-person imperatives ('stop and ask yourself,' 'see if you can guess which,' 'treat it as a puzzle') to turn abstract advice into actionable instructions.",
      "Deploy rhetorical questions to transition between sections or to invite the reader to pause and reflect. The question should feel genuinely interesting, not merely rhetorical.",
      "Use the 'X, not Y' antithesis pattern to sharpen definitions by contrasting what something is with what it isn't ('It's not mere skepticism, but an active delight in ideas that subvert the conventional wisdom').",
      "When listing examples, use the rule of three or escalate from familiar to surprising to make the final example land with maximum impact ('like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors').",
      "Reuse key terms deliberately throughout the piece ('independent-minded,' 'conventional-minded,' 'fastidiousness') to build a precise vocabulary rather than varying synonyms for elegance."
    ],
    "do_not": [
      "Do NOT use flowery or literary metaphors \u2014 analogies should be drawn from ordinary life and should clarify, not ornament.",
      "Do NOT use exclamation marks or emphatic typographic devices to signal importance \u2014 let the sentence's content and placement do the work.",
      "Do NOT overuse lists or bullet points \u2014 ideas should flow in prose, with enumeration handled through sentence structure rather than formatting."
    ],
    "evidence": [
      "\"just as it would seem to someone fastidious about food to take a bite of a submarine sandwich filled with a large variety of ingredients of indeterminate age and provenance\"",
      "\"Is that true?\"",
      "\"It's not mere skepticism, but an active delight in ideas that subvert the conventional wisdom, the more counterintuitive the better.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a clear, general observation that sounds almost obvious but contains the seed of a non-obvious distinction. The first sentence should be broad enough to invite agreement, setting up the reader for a surprising turn.",
      "Establish the essay's central idea within the first few paragraphs through a pattern of examples, then name the abstraction. Don't start with the thesis \u2014 let the reader discover it alongside you.",
      "Close essays by zooming out to a memorable aphorism, a forward-looking suggestion, or a compressed restatement of the core idea that feels like the natural terminus of the argument rather than a formal summary.",
      "Use section breaks (visual dividers) to separate major movements of the essay rather than numbered headers or titled sections. The essay should feel like continuous thought with breathing room, not a structured document.",
      "Include footnotes or endnotes for digressions, qualifications, and tangential observations that would interrupt the main flow. Number them inline and collect them at the end.",
      "Format the essay as plain prose with minimal formatting. Use italics rarely. Avoid bold text, bullet points, and headers within the body. Parentheticals appear occasionally for quick asides but should not be overused.",
      "When the argument naturally breaks into components (e.g., three qualities), explore them in sequence but maintain essay flow \u2014 don't turn them into a listicle."
    ],
    "do_not": [
      "Do NOT open with a question, a quote from someone famous, or an anecdote. Open with a declarative observation.",
      "Do NOT close with a neat summary that restates all the main points \u2014 end on a single, resonant idea that the reader can carry away.",
      "Do NOT use headers, subheaders, or numbered sections within the body text. The essay's structure should emerge from the prose itself.",
      "Do NOT use em dashes \u2014 prefer commas, parentheses, or starting a new sentence when an aside is needed."
    ],
    "evidence": [
      "\"There are some kinds of work that you can't do well without thinking differently from your peers.\"",
      "\"perhaps, if your goal is to discover novel ideas, your motto should not be 'do what you love' so much as 'do what you're curious about.'\"",
      "\"The best place to find undiscovered ideas is where no one else is looking.\""
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
      "Build sentences around a single clear claim, then extend them with one or two subordinate clauses that qualify, explain, or illustrate that claim \u2014 the core assertion should always come first.",
      "Chain clauses using 'but,' 'and,' 'because,' and 'which' as the primary connectives; favor coordinating conjunctions that create a conversational, thinking-aloud cadence.",
      "Use compound-complex structures when developing an argument (claim + qualification + consequence), but return frequently to crisp declarative sentences that land the point.",
      "Vary rhythm by following a multi-clause explanatory sentence with a blunt standalone declaration that serves as the punchline \u2014 the short sentence should feel like a conclusion snapping into place.",
      "Deploy participial and conditional openings ('When you first start learning something,' 'If you're not learning') to set up cause-and-effect reasoning before delivering the main clause.",
      "Use parallel structure within sentences to compare two or more instances of the same pattern: 'the more X, the more Y' or 'not just X, but also Y.'"
    ],
    "do_not": [
      "Do not write ornate, heavily embedded sentences with multiple nested parentheticals or relative clauses \u2014 keep the clause hierarchy shallow (two levels deep at most).",
      "Do not use periodic sentence structure where the main point is delayed to the very end after long preamble; lead with the assertion, then qualify.",
      "Do not chain more than three clauses without terminating the sentence \u2014 the prose should never feel breathless or run-on."
    ],
    "evidence": [
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory.\"",
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person singular ('I') as a thinker sharing hard-won insights, shifting to second person ('you') when offering actionable advice \u2014 this creates a stance of 'I figured this out and now I'm telling you.'",
      "Maintain a tone that is authoritative yet approachable: state claims boldly and directly, but acknowledge complexity and uncertainty with phrases like 'as far as I can tell,' 'I doubt we could ever predict this with certainty,' and 'it may seem.'",
      "Project confidence by making strong declarative assertions ('Superlinear returns imply inequality') and then earning that confidence by immediately showing your reasoning.",
      "Use 'we' when describing shared human limitations or collective experience ('No one finds exponential growth natural'; 'we don't have many customs about exponential growth') to create solidarity with the reader.",
      "Keep humor understated and dry \u2014 allow wit to emerge from unexpected juxtapositions or wry observations rather than jokes ('we're not the recipients; we're the returns').",
      "Use contractions selectively to maintain a conversational register without becoming sloppy \u2014 contract in flowing argumentative passages, but avoid contractions in formal declarations or when landing a key point."
    ],
    "do_not": [
      "Do not adopt an academic or detached voice \u2014 never write as if lecturing from above; the stance is 'smart friend explaining something important over coffee.'",
      "Do not hedge excessively or use weak qualifiers ('sort of,' 'kind of,' 'maybe a little') \u2014 when uncertain, name the uncertainty precisely rather than softening everything.",
      "Do not use jargon or technical vocabulary without immediately grounding it in a concrete example."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"As far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Be honest, especially with yourself. Exercise and eat and sleep well and avoid the more dangerous drugs.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce a big claim early and definitively, then spend the essay unpacking, classifying, and illustrating it \u2014 the structure is thesis-first, with the body serving as an extended proof by accumulation of examples.",
      "Develop arguments by taxonomic decomposition: take a broad phenomenon, split it into two or three causes or types, then explore each with concrete cases (e.g., superlinear returns split into exponential growth and thresholds).",
      "Ground every abstract claim in a concrete, familiar example drawn from business, science, history, or everyday life \u2014 move fluidly between the abstract principle and its instantiation.",
      "Handle counterarguments by stating them fairly in a single sentence, then refuting or reframing them immediately: 'Some think this is a flaw of capitalism... But superlinear returns for performance are a feature of the world.'",
      "Build arguments through recursive deepening \u2014 introduce a concept, give examples, then return to the concept at a deeper level, revealing a new implication or connection each time.",
      "Use heuristics and rules of thumb as the practical payoff of theoretical analysis \u2014 after explaining why something is true, distill it into advice the reader can act on.",
      "Acknowledge limitations honestly but briefly, then move on \u2014 don't dwell on caveats or let them dilute the main argument."
    ],
    "do_not": [
      "Do not build arguments purely from data, statistics, or citations \u2014 rely instead on logical reasoning, historical examples, and thought experiments.",
      "Do not present ideas in a neutral 'on the one hand, on the other hand' fashion \u2014 take a clear position and argue for it while acknowledging the strongest objections.",
      "Do not leave implications unstated \u2014 always draw out the 'so what' consequence of each observation for the reader."
    ],
    "evidence": [
      "\"It may seem as if there are a lot of different situations with superlinear returns, but as far as I can tell they reduce to two fundamental causes: exponential growth and thresholds.\"",
      "\"Some think this is a flaw of capitalism, and that if we changed the rules it would stop being true. But superlinear returns for performance are a feature of the world, not an artifact of rules we've invented.\"",
      "\"If you play a round of Russian roulette, you'll be in a situation with a threshold, certainly, but in the best case you're no better off.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear topic assertion or a transitional claim that connects to the previous paragraph's conclusion \u2014 the first sentence should tell the reader what this paragraph will argue.",
      "Sequence ideas within paragraphs as: claim \u2192 example/illustration \u2192 implication or restatement at a higher level of insight.",
      "Close paragraphs with a sentence that either delivers the key takeaway, pivots to the next idea, or escalates the stakes \u2014 endings should feel like they're handing a baton to the next paragraph.",
      "Use standalone single-sentence paragraphs as emphatic punctuation \u2014 to land a punchline, deliver a surprising conclusion, or create a dramatic pause after a buildup.",
      "Connect paragraphs through logical entailment rather than explicit transition words \u2014 the last sentence of one paragraph should make the reader expect the first sentence of the next.",
      "When exploring a sub-topic across multiple paragraphs, begin the first paragraph with the general principle and use subsequent paragraphs to give progressively more specific or surprising examples."
    ],
    "do_not": [
      "Do not begin paragraphs with mechanical transition phrases ('Furthermore,' 'Moreover,' 'Additionally,' 'In conclusion') \u2014 let the logical flow create the transition.",
      "Do not stuff multiple unrelated claims into a single paragraph \u2014 each paragraph should advance one idea or one step in the argument.",
      "Do not end paragraphs with trailing qualifications or hedges that undermine the point just made."
    ],
    "evidence": [
      "\"You get no customers, and you go out of business.\"",
      "\"Even after decades of thinking about this, I find that sentence startling.\"",
      "\"The most common case of exponential growth in preindustrial times was probably scholarship. The more you know, the easier it is to learn new things.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogies drawn from concrete, widely understood domains \u2014 science (bacterial cultures), history (empires, conquest), everyday life (learning to ride a bicycle) \u2014 to make abstract economic or mathematical concepts tangible.",
      "Deploy the 'the more X, the more Y' construction as a signature parallel structure to illustrate compounding and feedback loops.",
      "Use rhetorical questions sparingly and strategically \u2014 pose them to introduce a new section or to frame the practical implication of a theoretical point ('Are there general rules for finding situations with superlinear returns?').",
      "Employ list enumeration to survey a field or make a point by accumulation: 'fame, power, military victories, knowledge, and even benefit to humanity.'",
      "Use antithesis to sharpen distinctions: contrast what people assume with what's actually true, what institutions do with what individuals can do, what's conventional with what's independent-minded.",
      "Repeat key terms (superlinear, exponential, thresholds, compound) deliberately across the essay to build a conceptual vocabulary \u2014 do not use synonyms for core concepts, as terminological consistency aids clarity.",
      "Use direct address and imperatives in advice passages ('Choose work you have a natural aptitude for'; 'Seek out the best colleagues'; 'Be honest') to shift from analysis to prescription."
    ],
    "do_not": [
      "Do not use literary or poetic metaphors \u2014 keep figurative language functional and explanatory rather than decorative.",
      "Do not use extended analogies that run for multiple paragraphs \u2014 introduce the analogy, make the point, and move on.",
      "Do not use exclamation marks or emphatic punctuation to signal importance \u2014 let the content and sentence structure create emphasis."
    ],
    "evidence": [
      "\"In all of these, the rich get richer.\"",
      "\"The more territory you control, the more powerful your army becomes, and the easier it is to conquer new territory. This is why history is full of empires.\"",
      "\"Choose work you have a natural aptitude for and a deep interest in. Develop a habit of working on your own projects; it doesn't matter what they are so long as you find them excitingly ambitious.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal confession of past ignorance or misunderstanding that immediately frames the essay's central thesis \u2014 position the insight as something hard-won and important.",
      "Establish the stakes in the first few paragraphs by connecting the abstract concept to the reader's ambitions and life decisions.",
      "Close with a note of intellectual humility or open-ended reflection rather than a neat summary \u2014 acknowledge remaining uncertainty, the role of luck, or the limits of the framework.",
      "Use numbered footnotes (rendered as bracketed endnotes) to handle digressions, qualifications, historical asides, and self-referential commentary without breaking the main argument's flow.",
      "Structure the essay as: (1) bold thesis \u2192 (2) taxonomy of causes \u2192 (3) historical examples of each cause \u2192 (4) where causes combine \u2192 (5) practical heuristics \u2192 (6) societal implications \u2192 (7) personal advice \u2014 move from understanding to action.",
      "Use em-dash-free, parenthetical-light formatting \u2014 keep the visual texture clean and uncluttered, relying on sentence structure rather than typographic devices for emphasis.",
      "Include a brief acknowledgments line at the very end crediting draft readers, reinforcing the essay's origins as a considered, revised piece of thinking."
    ],
    "do_not": [
      "Do not open with a dictionary definition, a famous quote, or a broad generalization about 'the world today' \u2014 open with a specific, personal observation.",
      "Do not close with a tidy summary that restates all points \u2014 end on an expansive or forward-looking note that leaves the reader thinking.",
      "Do not use headers, bold text, or bullet points within the main body of the essay \u2014 maintain a continuous prose flow that rewards sustained reading."
    ],
    "evidence": [
      "\"One of the most important things I didn't understand about the world when I was a child is the degree to which the returns for performance are superlinear.\"",
      "\"The territory of superlinear returns is by no means static. Indeed, the most extreme returns come from expanding it.\"",
      "\"Thanks to Trevor Blackwell, Patrick Collison, Tyler Cowen, Jessica Livingston, Harj Taggar, and Garry Tan for reading drafts\""
    ]
  }
}
```

### sample-3.txt (2950 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2950,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a single main clause with one or two modifying phrases \u2014 keep the backbone simple and declarative, then extend it with a trailing qualifier, subordinate clause, or parenthetical aside.",
      "Chain ideas within a sentence using commas and coordinating conjunctions ('and', 'but', 'or') rather than subordinating conjunctions \u2014 place the most important idea first and let qualifications follow.",
      "Use sentence-initial conjunctions ('And', 'But', 'Or') freely to link sentences conversationally, treating sentence boundaries as soft pauses rather than hard stops.",
      "Deploy compound structures with parallel infinitive phrases when listing actions or requirements: 'you have to learn not to lie to yourself, not to procrastinate, not to get distracted, and not to give up when things go wrong.'",
      "Let rhythm shift with argumentative function: use terse standalone sentences for conclusions and punchlines, medium-length sentences for exposition, and longer compound sentences when building up evidence or layering qualifications.",
      "When a sentence grows long, keep the syntax left-branching \u2014 front-load the subject and verb, then stack conditions or elaborations after, so the reader never loses the main thread."
    ],
    "do_not": [
      "Do NOT use heavily embedded relative clauses or deeply nested subordination \u2014 never bury the main verb more than one clause deep.",
      "Do NOT write ornate, periodic sentences that delay the main point until the end \u2014 always let the reader know the core claim early.",
      "Do NOT use participial phrases at the start of sentences as a habitual pattern \u2014 the author almost never opens with '-ing' constructions."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"You need both.\"",
      "\"you have to learn not to lie to yourself, not to procrastinate (which is a form of lying to yourself), not to get distracted, and not to give up when things go wrong.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal experience and pivot to second person ('you') when generalizing the lesson \u2014 treat the reader as someone who shares your ambitions and can handle directness.",
      "Maintain a tone that is earnest, conversational, and quietly authoritative \u2014 speak as someone who has genuinely wrestled with the topic, not as someone lecturing from above.",
      "Signal uncertainty with plain, honest hedges ('I suspect', 'I think', 'probably', 'perhaps') rather than academic hedging \u2014 frame doubt as genuine personal uncertainty, not performative caution.",
      "Express confidence through simple declarative assertions, often as standalone short sentences, without qualifiers: 'There isn't.' 'You need both.'",
      "Use contractions naturally in expository passages to sustain a conversational feel, but drop them occasionally in emphatic or formal-sounding assertions to add weight.",
      "Avoid humor as a primary device \u2014 when wit appears, let it be dry and observational, arising from the logic of the argument rather than inserted for entertainment: 'In the average American high school, you have a choice of pretending to do something serious, or seriously doing something pretend.'"
    ],
    "do_not": [
      "Do NOT adopt a detached, academic, or impersonal register \u2014 never write as though you are above the struggle you're describing.",
      "Do NOT use self-deprecating humor or irony as a distancing mechanism \u2014 sincerity is the default mode.",
      "Do NOT hedge every claim \u2014 when you're confident, state the conclusion flatly without softening it."
    ],
    "evidence": [
      "\"I wasn't sure of that as a kid.\"",
      "\"I suspect most people have to learn what work is before they can love it.\"",
      "\"Now I know the answer to that question. There isn't.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a deceptively simple or counterintuitive claim, then spend the essay complicating and deepening it \u2014 the thesis should seem obvious at first and profound by the end.",
      "Advance arguments through a pattern of assertion \u2192 personal anecdote or famous example \u2192 generalized principle. Let concrete cases do the heavy lifting rather than abstract reasoning.",
      "Introduce counterarguments or objections as natural questions the reader would ask ('Sounds a bit extreme, you think.', 'Was there, perhaps, some way to evade hard work through sheer brilliance?'), then answer them directly.",
      "Use famous people as evidence but integrate their examples into the argument rather than treating them as authorities \u2014 quote them briefly, then interpret what the quote reveals.",
      "Build the essay as a sequence of related sub-problems rather than a single linear argument: define the problem, solve one aspect, then reveal the next layer of complexity ('Once you know the shape of real work, you have to learn how many hours a day to spend on it.').",
      "Handle limitations and nuances by acknowledging complexity while still committing to a position: 'That's a vague criterion, but it's deliberately vague, because it has to cover a lot of different types.'",
      "When making a subtle or hard-to-articulate point, use analogies to physical or spatial concepts: 'hard core at the center, surrounded by easier stuff at the edges.'"
    ],
    "do_not": [
      "Do NOT rely on citations, studies, or data as primary evidence \u2014 use personal experience and well-known examples instead.",
      "Do NOT present arguments as settled or complete \u2014 always leave room for the reader to think further, especially near the end.",
      "Do NOT use formal logical connectives ('therefore', 'consequently', 'moreover') \u2014 let the logic emerge from the sequence of plain statements."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\"",
      "\"Sounds a bit extreme, you think. And yet Bill Gates sounds even more extreme.\"",
      "\"Many problems have a hard core at the center, surrounded by easier stuff at the edges.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the claim or observation that the paragraph will develop \u2014 avoid throat-clearing or scene-setting before the point.",
      "Close paragraphs with the most resonant or surprising formulation of the idea, often a compressed restatement that lands harder than the opening: 'You need both.'",
      "Use standalone single-sentence paragraphs as rhetorical punctuation \u2014 place them after a buildup to deliver a conclusion, reversal, or punchline with maximum impact: 'There isn't.'",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 let the reader feel the connection from the ideas themselves, or use a light 'And' or 'But' at the start of the next paragraph.",
      "Within a paragraph, sequence ideas as: claim \u2192 example or elaboration \u2192 qualification or twist \u2192 conclusion. Move from general to specific and back.",
      "When introducing a new sub-topic, start the paragraph with a sentence that both concludes the prior thread and pivots to the new one: 'As well as learning the shape of real work, you need to figure out which kind you're suited for.'"
    ],
    "do_not": [
      "Do NOT use explicit transition phrases like 'Furthermore,' 'In addition,' 'On the other hand' \u2014 these feel stiff and academic in this voice.",
      "Do NOT end paragraphs with trailing qualifications that weaken the point \u2014 if you must qualify, do so mid-paragraph and end strong.",
      "Do NOT cluster too many ideas in a single paragraph \u2014 when you shift to a genuinely new aspect, start a new paragraph even if it's short."
    ],
    "evidence": [
      "\"There isn't.\"",
      "\"Perhaps something changes at adolescence. That would make sense.\"",
      "\"As well as learning the shape of real work, you need to figure out which kind you're suited for.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use spatial and physical metaphors to make abstract ideas tangible: 'hard core at the center,' 'the shape of real work,' 'slotted into it as if they'd been made for each other,' 'put more distance between me and the pursuing beast.'",
      "Deploy rhetorical questions sparingly and always answer them \u2014 use them to voice the reader's likely objection or curiosity, then resolve it immediately.",
      "Use parallel structure in lists to create rhythmic emphasis, especially with infinitive phrases or 'not to X' constructions: 'not to lie to yourself, not to procrastinate, not to get distracted, and not to give up.'",
      "Employ deliberate word and phrase reuse ('real work,' 'the shape of real work,' 'working hard') as anchoring devices \u2014 repeat key terms rather than varying them with synonyms, so the essay's central concepts stay tangible and consistent.",
      "Use analogies drawn from everyday life and accessible domains (sports, dogs circling before lying down, Spanish Flu) rather than literary or technical references.",
      "Use direct address with 'you' to make abstract advice feel personal and actionable \u2014 shift from 'one should' to 'you have to' to create urgency.",
      "Embed brief parenthetical asides to add a secondary thought or clarification without breaking the sentence's momentum: '(which is a form of lying to yourself).'"
    ],
    "do_not": [
      "Do NOT use extended metaphors or allegories \u2014 keep figurative language brief and functional, a phrase or clause at most.",
      "Do NOT use exclamation marks or hyperbolic language for emphasis \u2014 let the content and sentence structure create emphasis.",
      "Do NOT use literary or obscure allusions that require specialized knowledge \u2014 references should be to widely known figures and ideas."
    ],
    "evidence": [
      "\"Many problems have a hard core at the center, surrounded by easier stuff at the edges.\"",
      "\"like a dog circling while it decides exactly where to lie down\"",
      "\"if I could put more distance between me and the pursuing beast by doing it, why wait?\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a short, deceptively simple sentence that states the topic in a way that seems to dismiss it \u2014 then immediately complicate it: 'It might not seem there's much to learn about how to work hard.'",
      "Establish context in the second paragraph by anchoring the topic in personal experience and suggesting that the obvious understanding is incomplete.",
      "Close the essay with a paragraph that synthesizes the full argument into a single, dense, multi-clause sentence that mirrors the essay's complexity \u2014 make the ending feel like a summation that rewards careful reading.",
      "Use numbered footnotes/endnotes for tangential thoughts, qualifications, and interesting asides that would interrupt the main argument \u2014 keep the main text clean and the notes conversational.",
      "Avoid headers, bullet points, bold text, or other structural formatting \u2014 let the essay flow as continuous prose with only paragraph breaks and footnote markers.",
      "Follow the personal essay genre convention of exploring a topic through the author's own experience and evolution of understanding, moving from 'what I thought then' to 'what I know now.'",
      "Let the closing paragraph feel like it arrives at wisdom rather than a call to action \u2014 end with an insight about the nature of the problem rather than instructions."
    ],
    "do_not": [
      "Do NOT open with a definition, a quotation, or a broad sweeping statement about the human condition \u2014 start specific and personal.",
      "Do NOT close with a neat, tidy summary or a motivational rallying cry \u2014 the ending should feel honest and slightly open-ended, acknowledging remaining complexity.",
      "Do NOT use subheadings, bullet lists, or any visual formatting to organize the essay \u2014 the structure should be carried entirely by the prose."
    ],
    "evidence": [
      "\"It might not seem there's much to learn about how to work hard.\"",
      "\"This network is too complicated to trick. But if you're consistently honest and clear-sighted, it will automatically assume an optimal shape, and you'll be productive in a way few people are.\"",
      "\"[1] In 'The Bus Ticket Theory of Genius' I said the three ingredients in great work were natural ability, determination, and interest.\""
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
      "Build sentences around a single core claim, then extend with one or two qualifying or illustrative clauses joined by commas, dashes, or coordinating conjunctions \u2014 the default shape is 'assertion + elaboration'.",
      "When chaining clauses, prefer coordinating conjunctions ('and', 'but', 'or') over subordinating ones; let ideas sit side by side rather than nesting them hierarchically.",
      "Use compound-complex sentences primarily when layering a concrete example onto an abstract principle, e.g. 'When anyone agreed to try Stripe they'd say \"Right then, give me your laptop\" and set them up on the spot.'",
      "Deploy a short declarative sentence immediately after a longer, more complex one to land the point \u2014 the short sentence functions as a punchline or verdict that seals the preceding argument.",
      "Open sentences with the subject or a simple temporal/conditional clause ('When I remember the Airbnbs during YC\u2026', 'If you have to be aggressive\u2026') rather than with adverbial phrases or participial openers.",
      "Use parallel structure when presenting alternatives or contrasts: 'You build something, make it available, and if you've made a better mousetrap, people beat a path to your door' \u2014 the parallelism creates forward momentum."
    ],
    "do_not": [
      "Do not stack multiple subordinate clauses inside each other (no deeply nested 'because\u2026 since\u2026 although\u2026' constructions) \u2014 keep the clause depth shallow.",
      "Do not front-load sentences with long adverbial or participial phrases before the subject arrives; get to the actor and action quickly.",
      "Do not use semicolons as a primary clause-joining device \u2014 prefer periods or coordinating conjunctions."
    ],
    "evidence": [
      "\"They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them.\"",
      "\"It's harmless if reporters and know-it-alls dismiss your startup.\"",
      "\"Perfectionism is often an excuse for procrastination, and in any case your initial model of users is always inaccurate, even if you're one of them.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the stance of a knowledgeable insider speaking to peers who are slightly less experienced \u2014 collegial but authoritative, like a senior colleague giving frank advice over coffee.",
      "Use first-person ('I', 'we') to ground claims in direct experience: 'I've seen it happen', 'We encourage every startup to\u2026' \u2014 this signals that the advice comes from observation, not theory.",
      "Address the reader directly with 'you' to make abstract advice feel personal and actionable: 'You have to go out and get them.'",
      "Signal confidence through plain, unhedged declaratives ('Partnerships too usually don't work') rather than through emphatic language or intensifiers; let the directness of the claim carry the authority.",
      "When acknowledging uncertainty or nuance, use casual hedges ('I think', 'usually', 'probably') rather than formal academic hedging \u2014 the tone should stay conversational even when being precise.",
      "Use contractions freely in the body of arguments to maintain a conversational register, but occasionally drop them for emphasis or gravity: 'That's one advantage of being small: you can provide a level of service no big company can.'",
      "Inject dry, understated humor through incongruity or ironic juxtaposition rather than jokes: 'Who knew?' after discussing the value of good screws."
    ],
    "do_not": [
      "Do not adopt a detached, academic, or impersonal register \u2014 never write as if observing startups from the outside.",
      "Do not use sycophantic or motivational-speaker enthusiasm; keep the warmth understated and earned through specificity.",
      "Do not hedge every claim \u2014 commit to strong positions and let the evidence do the qualifying."
    ],
    "evidence": [
      "\"I often have to encourage founders who don't see the full potential of what they're building.\"",
      "\"We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts.\"",
      "\"They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold, counterintuitive thesis stated plainly ('do things that don't scale'), then spend the entire piece demonstrating it through layered examples \u2014 the structure is 'principle first, then proof by accumulation'.",
      "Build arguments primarily through named, real-world case studies (Stripe, Airbnb, Facebook, Pebble, Wufoo) \u2014 each example should be a mini-narrative with specific, concrete details rather than abstract summaries.",
      "After presenting examples, extract the general principle explicitly: move from 'here's what Stripe did' to 'here's why this works for all startups' \u2014 always close the loop between anecdote and lesson.",
      "Preemptively address the reader's likely objection, then dismantle it: 'founders worry it won't scale. But when founders of larval startups worry about this, I point out that in their current state they have nothing to lose.'",
      "Use analogies and metaphors to make abstract concepts visceral: startups as 'cranks that car engines had before they got electric starters', keeping a fire contained, projectiles vs. powered aircraft.",
      "Progress through the argument by escalating the intensity of the advice: start with 'recruit users manually', escalate to 'delight them insanely', then push further to 'be your own software manually' \u2014 each section raises the bar.",
      "Use rhetorical questions to pivot to new sub-topics or to voice the reader's doubts before answering them: 'Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.'"
    ],
    "do_not": [
      "Do not argue from pure logic or first principles without grounding in specific, named examples \u2014 abstraction without anecdote feels hollow.",
      "Do not present counterarguments as equally valid and leave the reader to decide \u2014 take a clear side and explain why the counterargument fails.",
      "Do not build arguments through data tables, citations, or academic evidence \u2014 the authority comes from personal experience and named case studies."
    ],
    "evidence": [
      "\"Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition.\"",
      "\"They're like someone looking at a newborn baby and concluding 'there's no way this tiny creature could ever accomplish anything.'\"",
      "\"I should mention one sort of initial tactic that usually doesn't work: the Big Launch.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct claim or transition that immediately signals the paragraph's purpose \u2014 topic sentences should be assertive, not throat-clearing.",
      "Within a paragraph, follow a claim \u2192 example \u2192 implication sequence: state the point, illustrate it with a specific story, then draw out the broader lesson.",
      "Use single-sentence paragraphs as emphatic punctuation marks that land a key insight or serve as a turning point: 'I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.'",
      "Connect paragraphs through implicit logical progression rather than explicit transition words \u2014 the next paragraph should feel like the natural next thought, not a signposted move.",
      "When introducing a new major section or sub-topic, use a bold one-word or two-word header (e.g., 'Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big') to signal the shift, then immediately dive into the argument.",
      "Close paragraphs by either pivoting to the next idea (setting up what follows) or by landing a memorable, quotable verdict."
    ],
    "do_not": [
      "Do not begin paragraphs with formulaic transitions like 'Furthermore', 'Moreover', 'In addition', 'Additionally' \u2014 these belong to academic writing, not essay prose.",
      "Do not end paragraphs with trailing qualifications or hedges that weaken the point just made \u2014 end strong or pivot forward.",
      "Do not pack too many distinct ideas into a single paragraph; when the topic shifts, start a new paragraph even if it will be brief."
    ],
    "evidence": [
      "\"Fragile Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.\"",
      "\"I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.\"",
      "\"It's not enough just to do something extraordinary initially. You have to make an extraordinary effort initially.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and metaphors to anchor abstract startup concepts in physical, tangible imagery: car cranks, contained fires, projectiles vs. powered aircraft, newborn babies, boulders vs. train cars.",
      "Deploy direct address and imperatives to make advice actionable: 'See if you can make it happen', 'go ahead and do that for as long as you can'.",
      "Use rhetorical questions to voice the reader's skepticism, then immediately answer them \u2014 the question creates a gap that the answer fills: 'How do you find users to recruit manually?'",
      "Employ antithesis and contrast to sharpen points: 'not the product that should be insanely great, but the experience of being your user', 'You can be ornery when you're Scotty, but not when you're Kirk.'",
      "Coin or adopt memorable phrases and proper-noun techniques ('Collison installation', 'pulling a Meraki', 'insanely great') to give concepts stickiness and make them referenceable.",
      "Use lists of three when enumerating reasons or examples \u2014 'Three reasons, I think' \u2014 to create a satisfying structural rhythm.",
      "Quote real people directly and attribute the quote specifically to add texture and authority: 'Patrick Collison wrote\u2026', 'Eric Migicovsky of Pebble said\u2026'"
    ],
    "do_not": [
      "Do not use literary or poetic devices (alliteration, assonance, elaborate wordplay) \u2014 the rhetoric should feel effortless and conversational, never showy.",
      "Do not use analogies from domains the startup audience wouldn't immediately recognize \u2014 prefer everyday, pop culture (Star Trek), or tech-world references.",
      "Do not overuse any single device; spread metaphors, questions, and direct quotes across the piece rather than clustering them."
    ],
    "evidence": [
      "\"A good metaphor would be the cranks that car engines had before they got electric starters.\"",
      "\"You can be ornery when you're Scotty, but not when you're Kirk.\"",
      "\"At YC we use the term 'Collison installation' for the technique they invented.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with the central thesis stated as a piece of advice \u2014 no preamble, no scene-setting, no anecdote. The very first sentence should contain the core idea of the entire essay.",
      "Immediately after the thesis, articulate the common misconception it corrects \u2014 set up the essay as 'what people get wrong, and what's actually true'.",
      "Structure the essay as a series of named sections (using bold headers like 'Recruit', 'Fragile', 'Delight', 'Fire', 'Manual', 'Big', 'Vector') that each illustrate a different facet of the central thesis \u2014 the overall shape is a tour of variations on a theme.",
      "Close by reframing the thesis at a higher level of abstraction \u2014 move from practical advice to a conceptual model ('thinking of startup ideas as vectors') that gives the reader a new mental framework.",
      "End the final section with an optimistic, forward-looking statement that connects the effort to lasting benefit: 'if you have to work hard to delight users when you only have a handful of them, you'll keep doing it when you have a lot.'",
      "Use numbered footnotes (marked with [1], [2], etc.) at the end for tangential asides, attributions, qualifications, and additional examples \u2014 this keeps the main text clean and focused while allowing depth for interested readers.",
      "Use em dashes for parenthetical insertions and colons to set up explanatory phrases or lists; use parentheticals sparingly for brief asides or definitions."
    ],
    "do_not": [
      "Do not open with an anecdote, a question, or a provocative statement disconnected from the thesis \u2014 lead with the advice itself.",
      "Do not close with a summary that merely restates earlier points \u2014 the ending should elevate or reframe the argument.",
      "Do not use formal section numbering or academic formatting (no 'Section 1:', no abstract, no conclusion header) \u2014 the essay should feel like continuous thought organized by informal topic headers."
    ],
    "evidence": [
      "\"One of the most common types of advice we give at Y Combinator is to do things that don't scale.\"",
      "\"Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.\"",
      "\"if you have to work hard to delight users when you only have a handful of them, you'll keep doing it when you have a lot.\""
    ]
  }
}
```

### sample-5.txt (4570 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 4570,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences around a single clean clause with one main verb; favor subject-verb-object directness over nested subordination.",
      "When extending a sentence, chain with coordinating conjunctions ('and', 'but', 'or') rather than embedding relative clauses or participial phrases \u2014 the sentence should feel like it's walking forward, not branching.",
      "Use conditional and hypothetical structures ('If you could...', 'Suppose...', 'What if...') to set up thought experiments, placing the condition first and the payoff second.",
      "Deploy very short declarative sentences as punchlines after a longer setup \u2014 the short sentence delivers the verdict or twist the preceding sentences were building toward.",
      "Favor plain, monosyllabic words as the default; let the rhythm come from the ideas, not from elaborate diction or Latinate vocabulary.",
      "When constructing parallel structures, repeat the exact syntactic frame with varied content: 'for a time as X, for a time as Y, for a time as Z.'"
    ],
    "do_not": [
      "Do not write sentences with multiple levels of embedding (clauses within clauses within clauses) \u2014 if you need more than one subordinate clause, break into separate sentences.",
      "Do not use ornate or flowery transitions between sentences \u2014 the connection should be implicit or handled with a plain conjunction.",
      "Do not let sentences meander with trailing qualifiers or afterthoughts tacked on with dashes or parenthetical asides."
    ],
    "evidence": [
      "\"It's the nature of fashion to be invisible, in the same way the movement of the earth is invisible to all of us riding on it.\"",
      "\"Scientists go looking for trouble.\"",
      "\"Imagine a kind of latter-day Conrad character who has worked for a time as a mercenary in Africa, for a time as a doctor in Nepal, for a time as the manager of a nightclub in Miami.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a curious, intellectually honest person thinking out loud \u2014 not lecturing, but reasoning through the problem alongside the reader.",
      "Use first person ('I') to anchor personal opinions and admissions, and second person ('you') to pull the reader into thought experiments and self-examination.",
      "Signal uncertainty with casual hedges like 'I suspect', 'I think', 'it seems', 'probably', 'odds are' \u2014 never with formal academic hedges like 'it could be argued that' or 'one might suggest'.",
      "Maintain an earnest, conversational tone that treats big ideas with casual confidence \u2014 discuss Galileo, Darwin, and the Inquisition the same way you'd discuss a friend's wardrobe choices.",
      "Be willing to state bold claims plainly and then immediately soften with honest qualifications: assert, then hedge, rather than hedging first.",
      "Occasionally admit vulnerability or self-implication \u2014 include yourself in the group being critiqued ('I'll probably do it myself').",
      "Use contractions selectively to maintain a spoken, informal register without becoming sloppy."
    ],
    "do_not": [
      "Do not adopt a detached, academic voice \u2014 never write as though observing from above; always be implicated in the question.",
      "Do not use sarcasm or snark; the tone is genuinely curious, not superior or dismissive.",
      "Do not use formal hedging constructions ('it may be posited that', 'one could reasonably argue') \u2014 keep hedges plain and personal."
    ],
    "evidence": [
      "\"I do it, first of all, for the same reason I did look under rocks as a kid: plain curiosity.\"",
      "\"I admit it seems cowardly to keep quiet.\"",
      "\"I'm not arguing for or against this idea here. It is probably inevitable that parents should want to dress up their kids' minds in cute little baby outfits. I'll probably do it myself.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure the essay as a series of methods or approaches to a central question \u2014 each section proposes a new technique for investigating the same problem from a different angle.",
      "Introduce each new method with a plain question or transitional framing ('Another approach is to...', 'I can think of one more way to...').",
      "Ground abstract arguments in vivid historical examples \u2014 Galileo, Darwin, the Reformation, Charles VIII's six toes \u2014 treating them as case studies that illustrate the principle just stated.",
      "Use analogies from everyday life to make abstract points tangible: fashion, maps with deliberate errors, stretching before running, skirmishers in an army.",
      "Build arguments by accumulation: state a principle, illustrate with one example, then pile on two or three more examples from different domains to make the pattern undeniable.",
      "Handle counterarguments by acknowledging them briefly and then reframing \u2014 don't steel-man at length, but don't dismiss either; fold the objection into the larger argument.",
      "Use rhetorical questions as pivots between sections \u2014 the question names the next problem to solve, then the following paragraph answers it."
    ],
    "do_not": [
      "Do not present arguments as formal logical proofs with premises and conclusions \u2014 the logic should feel like a conversation, not a syllogism.",
      "Do not rely on citations, data, or statistics as primary evidence \u2014 use stories, examples, and thought experiments instead.",
      "Do not dismiss opposing views outright; acknowledge them with a casual 'of course' or 'to be fair' before redirecting."
    ],
    "evidence": [
      "\"Mapmakers deliberately put slight mistakes in their maps so they can tell when someone copies them. If another map has the same mistake, that's very convincing evidence.\"",
      "\"If Galileo had said that people in Padua were ten feet tall, he would have been regarded as a harmless eccentric. Saying the earth orbited the sun was another matter.\"",
      "\"It's like stretching. When you stretch before running, you put your body into positions much more extreme than any it will assume during the run.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Use standalone sentences as paragraphs to deliver key assertions with maximum impact \u2014 isolate the most important claim so it stands alone on the page.",
      "When a paragraph contains multiple sentences, open with the claim or observation, then follow with supporting example or elaboration \u2014 the structure is assertion-then-evidence, not evidence-then-conclusion.",
      "Connect paragraphs through implicit logical continuation rather than explicit transition words \u2014 the next paragraph picks up naturally from where the last one left off.",
      "Use section headers (bold or capitalized labels like 'Trouble', 'Heresy', 'Mechanism') to mark major shifts in approach; within sections, let paragraphs flow without heavy signposting.",
      "Place thought experiments and hypotheticals in their own paragraphs, often introduced with 'Suppose' or 'Imagine', creating a distinct mental stage for the reader.",
      "Close sections by circling back to the central question or by posing the next question that motivates the following section."
    ],
    "do_not": [
      "Do not begin paragraphs with heavy transitional phrases ('Furthermore', 'Moreover', 'In addition to the above') \u2014 transitions should be invisible or handled with simple words like 'But', 'So', 'And yet'.",
      "Do not write long paragraphs that develop multiple distinct ideas \u2014 split each new idea into its own paragraph, even if it's a single sentence.",
      "Do not end paragraphs with summaries of what was just said \u2014 end with the sharpest or most provocative point and move on."
    ],
    "evidence": [
      "\"What scares me is that there are moral fashions too.\"",
      "\"But they're much more dangerous.\"",
      "\"The age of consent fluctuates like hemlines.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies as the primary persuasive device \u2014 compare moral taboos to fashion, map errors, stretching, military skirmishing \u2014 and develop the analogy across multiple sentences so it becomes a lens through which to see the argument.",
      "Deploy rhetorical questions to frame each new investigative angle and to implicate the reader personally ('Do you have any opinions that you would be reluctant to express in front of a group of your peers?').",
      "Use thought experiments as a core device: 'Imagine...', 'Suppose...', 'What if...' \u2014 construct hypothetical scenarios that make abstract principles concrete and testable.",
      "Repeat key phrases and concepts across the essay to create thematic continuity: 'what you can't say', 'moral fashions', 'get in trouble for', 'Galileo' \u2014 these recurrences bind the essay together.",
      "Use brief, punchy metaphors that surprise with their concreteness: 'a mounted knight on a skating rink', 'dress up their kids' minds in cute little baby outfits'.",
      "Use direct address and imperatives to convert the reader into a participant: 'Take a label', 'Look for prigs', 'Ask why', 'Try diffing'.",
      "Invoke historical and literary figures (Galileo, Darwin, Milton, Arthur Miller) as recurring characters rather than distant references \u2014 make them feel present and relevant."
    ],
    "do_not": [
      "Do not use elaborate literary devices like extended metaphorical conceits, allegory, or symbolism \u2014 analogies should be plain, functional, and immediately clear.",
      "Do not use exclamation marks or emphatic intensifiers \u2014 let the ideas carry their own force.",
      "Do not pile on rhetorical questions in succession without answering them \u2014 pose one question, then answer it or use it to pivot."
    ],
    "evidence": [
      "\"They're as unhappy on the territory of humor as a mounted knight on a skating rink.\"",
      "\"Subtract one from the other, and the result is what we can't say.\"",
      "\"Argue with idiots, and you become an idiot.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a parenthetical meta-statement that frames the essay's purpose and scope, then immediately pivot to a concrete, relatable hook \u2014 an everyday experience the reader recognizes.",
      "Begin the body proper with a question directed at the reader that doubles as the essay's central provocation.",
      "Use section headers as structural signposts throughout \u2014 short, evocative labels ('Trouble', 'Heresy', 'Mechanism', 'Pensieri Stretti') that name each investigative method or theme.",
      "Structure the essay as a toolkit: each major section introduces a new method for investigating the central question, creating a cumulative sense of building intellectual resources.",
      "Close by widening the lens from the specific question to a broader philosophical principle \u2014 end on the value of independent thinking itself, not on any particular heresy.",
      "Use footnote references (bracketed numbers) to offload tangential points and qualifications, keeping the main text clean and forward-moving.",
      "Format for the web: short paragraphs, frequent section breaks, and a conversational pace that assumes a reader who may skim but should be rewarded for reading closely."
    ],
    "do_not": [
      "Do not open with a thesis statement or abstract summary \u2014 enter through a concrete image or question that creates curiosity before explaining the agenda.",
      "Do not close with a neat summary or numbered list of takeaways \u2014 end with an idea that resonates and lingers, not one that wraps things up.",
      "Do not use formal academic formatting (numbered sections, abstract, conclusion headers) \u2014 section headers should be suggestive and literary, not bureaucratic."
    ],
    "evidence": [
      "\"Have you ever seen an old photo of yourself and been embarrassed at the way you looked? Did we actually dress like that? We did. And we had no idea how silly we looked.\"",
      "\"But I want to do more than just shock everyone with the heresy du jour. I want to find general recipes for discovering what you can't say, in any era.\"",
      "\"Training yourself to think unthinkable thoughts has advantages beyond the thoughts themselves. It's like stretching.\""
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
      "Build sentences around a single core claim, then extend with one or two qualifying clauses joined by coordinating conjunctions ('but,' 'and,' 'because') or relative pronouns ('which,' 'who,' 'that') \u2014 the default shape is assertion + elaboration.",
      "Chain clauses using commas before coordinating conjunctions to create a rolling, thinking-aloud cadence rather than stacking subordinate clauses hierarchically.",
      "Keep clause nesting shallow \u2014 one level of subordination is normal, two is the maximum; never bury the main verb more than one clause deep.",
      "Front-load sentences with the subject and verb, then stack conditions or elaborations after, so the reader grasps the core claim immediately.",
      "Use parallel structure when presenting contrasts, alternatives, or sets of related ideas \u2014 mirror the grammatical shape on both sides of the pivot.",
      "Open sentences with conditional or temporal clauses ('If you\u2026,' 'When you\u2026') to set up cause-and-effect reasoning before delivering the main clause.",
      "Follow a longer compound-complex sentence with a shorter declarative sentence that lands the point \u2014 the short sentence functions as a verdict sealing the preceding argument.",
      "Use sentence-initial conjunctions ('And,' 'But,' 'So') freely to link sentences conversationally, treating sentence boundaries as soft pauses."
    ],
    "do_not": [
      "Do NOT write periodic sentences that withhold the main point until the end after long preamble \u2014 deliver the core idea early, then qualify.",
      "Do NOT pile up multiple nested subordinate clauses within a single sentence \u2014 avoid deeply embedded 'because\u2026 since\u2026 although\u2026' constructions.",
      "Do NOT use semicolons as a primary clause-linking device \u2014 prefer starting a new sentence or using a conjunction.",
      "Do NOT open sentences habitually with participial '-ing' phrases.",
      "Do NOT write in sustained staccato \u2014 consecutive short punchy sentences are not the default mode."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when sharing personal experience or conviction, and shift to second person ('you') when giving advice or drawing the reader into a thought experiment \u2014 alternate between personal authority and direct engagement.",
      "Adopt the tone of a smart friend thinking out loud \u2014 authoritative but not dogmatic, earnest but leavened with occasional wry observations.",
      "Signal confidence through plain declarative assertions ('I think so,' 'It seems to me') rather than hedging with academic qualifiers; when genuinely uncertain, use simple honest hedges ('I suspect,' 'probably,' 'perhaps').",
      "Use contractions naturally in conversational exposition to signal informality; drop them occasionally when making a weightier or more emphatic declaration.",
      "Maintain collegial distance \u2014 close enough to say 'you' and share personal anecdotes, but not so intimate as to be confessional; the reader is a thoughtful peer.",
      "Use 'we' when describing shared human limitations or collective experience to create solidarity with the reader.",
      "When humor appears, keep it dry, observational, and in service of the argument \u2014 let wit emerge from unexpected juxtapositions rather than explicit jokes."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal, or academic register \u2014 never write as if the author is absent from the text.",
      "Do NOT use sarcasm, snark, or cutting humor \u2014 the tone should be genuinely curious, not superior or dismissive.",
      "Do NOT over-hedge with stacked qualifiers ('it might perhaps be possible that in some cases\u2026') \u2014 one hedge per uncertain claim is enough.",
      "Do NOT use imperative commands without softening context \u2014 frame directives as suggestions or natural consequences rather than barking orders.",
      "Do NOT use formal hedging constructions ('it could be argued that,' 'one might suggest') \u2014 keep hedges plain and personal."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open an argument by establishing a pattern through multiple concrete examples from different domains before naming the general principle \u2014 let the pattern become undeniable, then state the abstraction.",
      "Advance ideas through a dialectical rhythm: assert a claim, then immediately complicate it with 'but,' 'though,' or 'except' \u2014 create the sense of a mind genuinely working through a problem.",
      "Ground every abstract claim in concrete, familiar examples drawn from business, science, history, or everyday life \u2014 move fluidly between the abstract principle and its instantiation.",
      "Handle counterarguments preemptively by weaving them into the main line of reasoning \u2014 state the objection fairly, then refute or reframe it immediately.",
      "Use analogies drawn from everyday, concrete experience (food, fashion, maps, car engines) to illuminate abstract points \u2014 prefer analogies that are slightly unexpected but immediately graspable.",
      "Use thought experiments, hypotheticals, and direct questions to the reader to make abstract reasoning feel participatory.",
      "Build arguments through recursive deepening \u2014 introduce a concept, give examples, move forward, then return to it later with new depth or a new angle.",
      "After explaining why something is true, distill it into practical advice or a heuristic the reader can act on."
    ],
    "do_not": [
      "Do NOT present arguments as formal logical proofs with numbered premises and conclusions \u2014 the logic should feel organic, like a conversation.",
      "Do NOT rely on citations, data, statistics, or appeals to authority as primary evidence \u2014 use personal observation, thought experiments, and concrete examples.",
      "Do NOT dismiss counterarguments or wave them away \u2014 engage with them seriously, even if briefly.",
      "Do NOT announce the structure of the argument ('In this essay I will argue three points\u2026') \u2014 let the structure emerge naturally.",
      "Do NOT present ideas in a neutral 'on the one hand, on the other hand' fashion \u2014 take a clear position and argue for it."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with the key claim or a transitional assertion that connects to the previous paragraph \u2014 the first sentence should carry the paragraph's thesis or pivot.",
      "Close paragraphs with the most memorable or pointed formulation of the idea \u2014 a distilled restatement, a surprising implication, or a sentence that sets up the next paragraph.",
      "Sequence ideas within paragraphs as: claim \u2192 example or illustration \u2192 implication or qualification \u2014 move from assertion to evidence to consequence.",
      "Connect paragraphs through implicit logical flow rather than heavy-handed transition words \u2014 use simple 'But,' 'And,' or 'So' at the start of a new paragraph for pivots.",
      "When transitioning between major sections, use a direct question or a short bridge sentence that explicitly names the new direction.",
      "When the topic genuinely shifts, start a new paragraph even if the previous one is short \u2014 each paragraph should advance one idea or one step in the argument."
    ],
    "do_not": [
      "Do NOT begin paragraphs with throat-clearing or formulaic transitions ('Furthermore,' 'Moreover,' 'Additionally,' 'In conclusion,' 'It is important to note that\u2026').",
      "Do NOT end paragraphs with trailing qualifications or hedges that undermine the point just made \u2014 end strong or pivot forward.",
      "Do NOT stuff multiple unrelated claims into a single paragraph.",
      "Do NOT overuse single-sentence paragraphs \u2014 reserve them for moments where a standalone claim genuinely earns the emphasis."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogies drawn from concrete, widely understood domains \u2014 physical objects, everyday life, familiar history \u2014 to make abstract concepts tangible; keep them functional, not decorative.",
      "Deploy rhetorical questions sparingly and strategically \u2014 use them to transition between sections, voice the reader's likely objection, or invite genuine reflection, and always answer them.",
      "Use parallel structure and anaphoric repetition to hammer home patterns or build momentum \u2014 repeat the same syntactic frame with varied content.",
      "Repeat key terms deliberately throughout the piece to build a precise conceptual vocabulary rather than varying with synonyms for elegance.",
      "Use the 'X, not Y' antithesis pattern to sharpen definitions by contrasting what something is with what it isn't.",
      "Use direct address and second-person imperatives to turn abstract advice into actionable instructions.",
      "Embed brief parenthetical asides for secondary thoughts or clarifications without breaking the sentence's momentum.",
      "When listing examples, escalate from familiar to surprising so the final example lands with maximum impact."
    ],
    "do_not": [
      "Do NOT use flowery, literary, or poetic metaphors \u2014 analogies should clarify, not ornament.",
      "Do NOT use exclamation marks or emphatic typographic devices to signal importance \u2014 let the content and placement do the work.",
      "Do NOT use extended metaphors that run for multiple paragraphs \u2014 introduce the analogy, make the point, and move on.",
      "Do NOT overuse bullet points or formatted lists \u2014 ideas should flow in prose, with enumeration handled through sentence structure."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a clear, specific observation or personal statement that sounds almost simple but contains the seed of a non-obvious distinction \u2014 the first sentence should invite agreement while setting up a surprising turn.",
      "Establish the essay's central idea within the first few paragraphs through a pattern of examples or a personal admission that reveals the topic's hidden depth.",
      "Close by zooming out to a memorable aphorism, a forward-looking suggestion, or a compressed restatement that feels like the natural terminus of the argument \u2014 not a formal summary.",
      "Structure the essay as continuous prose with breathing room \u2014 use section breaks or short informal headers to separate major movements, not numbered sections or formal formatting.",
      "Use numbered footnotes or endnotes for digressions, qualifications, and tangential observations that would interrupt the main flow.",
      "Keep formatting minimal \u2014 plain prose, rare italics, no bold text or bullet points within the body; let the writing carry the structure.",
      "When the argument naturally breaks into components, explore them in sequence but maintain essay flow \u2014 don't turn them into a listicle.",
      "Include brief acknowledgments at the end crediting draft readers when appropriate."
    ],
    "do_not": [
      "Do NOT open with a dictionary definition, a famous quote, or a broad sweeping generalization about the human condition.",
      "Do NOT close with a neat summary that restates all the main points \u2014 end on a single resonant idea the reader can carry away.",
      "Do NOT use formal academic formatting (numbered sections, abstracts, conclusion headers) within the body text.",
      "Do NOT use em dashes as a primary parenthetical device \u2014 prefer commas, parentheses, or starting a new sentence."
    ]
  },
  "signature_phrases": {
    "use": [
      "I think",
      "I suspect",
      "as far as I can tell",
      "it seems to me",
      "in my experience",
      "the more X, the more Y",
      "in fact",
      "in other words",
      "of course",
      "the trick is",
      "the key is",
      "the problem is",
      "it turns out",
      "you have to",
      "the way to",
      "not just X, but Y",
      "that's one reason",
      "there's a name for this",
      "I really want to know",
      "probably",
      "perhaps"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "in conclusion",
      "it is important to note",
      "it could be argued that",
      "one might suggest",
      "utilize",
      "leverage",
      "paradigm",
      "synergy",
      "holistic",
      "robust",
      "impactful",
      "deep dive",
      "unpack",
      "at the end of the day",
      "it goes without saying",
      "needless to say",
      "in today's world",
      "game-changer",
      "let's be clear",
      "to be honest",
      "absolutely",
      "indeed"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'additionally' with 'But,' 'And,' 'So,' or remove the transition entirely and let the logical flow connect paragraphs.",
    "Convert passive constructions to active \u2014 find the agent and make them the subject.",
    "Replace formal hedges ('it could be argued that,' 'one might suggest') with plain personal hedges ('I think,' 'I suspect,' 'probably').",
    "Break any sentence with more than two levels of clause nesting into separate sentences.",
    "Replace abstract nouns ('utilization,' 'implementation,' 'facilitation') with plain verbs ('use,' 'build,' 'help').",
    "If a paragraph opens with throat-clearing ('It is worth noting that\u2026'), delete the preamble and start with the actual claim.",
    "If a paragraph ends on a trailing hedge or qualifier, move the qualification mid-paragraph and end with the strongest formulation of the point.",
    "Replace Latinate or polysyllabic words with their plain Anglo-Saxon equivalents where possible ('use' not 'utilize,' 'help' not 'facilitate').",
    "When an abstract claim stands alone without illustration, add a concrete example from everyday life, business, or history immediately after it.",
    "If a metaphor or analogy is literary or decorative, replace it with one drawn from ordinary, tangible experience.",
    "Convert 'one should' or 'it is advisable to' constructions into direct 'you' address."
  ]
}
```