# Voice Analysis Report: Charles Darwin

**Samples analyzed:** 5
**Skill name:** `darwin-voice`
**Generator:** voice-cloner v2

**Voice:** formal, deliberative, explicit — Victorian scientific exposition combining patient empirical accumulation with sustained logical argumentation

## Corpus Metrics (averaged)

```
Metric                                   Value
-----------------------------------------------
contraction_rate                          0.00
fw_articles                               8.30
fw_conjunctions                           5.53
fw_demonstratives                         2.65
fw_hedges                                 1.20
fw_intensifiers                           1.33
fw_modals_aux                             7.09
fw_negation                               0.89
fw_prepositions                          13.75
fw_relatives                              1.25
hapax_ratio                              20.42
open_adverb_pct                           2.92
open_article_pct                          6.55
open_conjunction_pct                     15.06
open_pronoun_pct                         18.82
open_subordinate_pct                      8.86
para_avg_sentences                       41.20
para_avg_words                         1487.00
para_pct_long                           100.00
para_pct_single_sent                      0.00
para_stddev_sentences                     0.00
polysyndeton_pct                          9.73
punct_colons_per_100w                     0.09
punct_comma_before_conj                   0.47
punct_commas_per_sent                     2.55
punct_dashes_per_100w                     0.22
punct_ellipses_per_100w                   0.00
punct_exclamations_per_100w               0.05
punct_parens_per_100w                     0.09
punct_questions_per_100w                  0.14
punct_quotes_per_100w                     0.00
punct_semicolons_per_sent                 0.40
sent_avg_length                          36.25
sent_length_max                          91.20
sent_length_min                           7.80
sent_length_stddev                       19.71
sent_median_length                       31.70
sent_pct_long                            64.96
sent_pct_medium                          30.77
sent_pct_short                            4.27
type_token_ratio                          0.69
word_avg_length                           4.76
word_pct_long                            15.50
word_pct_monosyllable                    64.15
word_pct_short                           56.65
```

## Vocabulary Profile

**Register score:** 0.77 (0=casual, 1=formal)

**Top 20 words:**
- the: 64.56/1000
- of: 46.94/1000
- and: 31.34/1000
- in: 27.57/1000
- to: 22.86/1000
- a: 15.33/1000
- that: 14.39/1000
- be: 12.51/1000
- have: 12.37/1000
- species: 10.49/1000
- from: 9.82/1000
- are: 8.74/1000
- as: 8.74/1000
- we: 8.61/1000
- by: 8.2/1000
- is: 7.67/1000
- with: 7.67/1000
- same: 7.4/1000
- it: 7.26/1000
- on: 7.26/1000

**Absent common words (29):** about, already, before, begin, big, came, children, did, down, end, get, go, head, help, house, move, need, night, people, place, side, something, tell, thing, want, went, year, you, your

## Per-Sample Analyses

### sample-1.txt (1465 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": 1465,
  "detected_genre": "scientific_paper",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by layering multiple subordinate and qualifying clauses, separated by commas and semicolons, so that a single sentence can carry a complete chain of reasoning from premise to conclusion.",
      "Use semicolons to join closely related independent clauses within a single sentence, treating the semicolon as a structural pivot that shifts from one facet of an argument to a complementary or contrasting facet.",
      "Chain conditional and temporal clauses with 'if', 'for', 'as', 'when', and 'that' to embed causation and qualification directly into the sentence rather than splitting them across multiple sentences.",
      "Place participial phrases after main clauses to add simultaneous actions or qualifications: 'rejecting that which is bad, preserving and adding up all that is good; silently and insensibly working'.",
      "Use rhetorical questions as full complex sentences to dramatize logical turning points, then follow them with declarative answers.",
      "Deploy parallel clause structures within long sentences to create internal rhythm and reinforce logical symmetry: 'Man selects only for his own good; Nature only for that of the being which she tends.'"
    ],
    "do_not": [
      "Do not write in clipped, staccato prose \u2014 avoid stringing together multiple simple subject-verb-object sentences without subordination.",
      "Do not front-load sentences with adverbial modifiers or scene-setting before the subject; instead embed qualifications mid-sentence or after the main clause.",
      "Do not use dashes or parentheticals as primary tools for inserting asides \u2014 prefer commas and semicolons for clause separation."
    ],
    "evidence": [
      "Can it, then, be thought improbable, seeing that variations useful to man have undoubtedly occurred, that other variations useful in some way to each being in the great and complex battle of life, should sometimes occur in the course of thousands of generations?",
      "It may be said that natural selection is daily and hourly scrutinising, throughout the world, every variation, even the slightest; rejecting that which is bad, preserving and adding up all that is good; silently and insensibly working, whenever and wherever opportunity offers, at the improvement of each organic being in relation to its organic and inorganic conditions of life.",
      "Man selects only for his own good; Nature only for that of the being which she tends."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a patient, methodical reasoner who is building a case step by step \u2014 address the reader as a fellow thinker who needs to be walked through the logic, not told what to believe.",
      "Use first-person plural ('we') as the default pronoun to create a sense of shared inquiry: 'We shall best understand', 'Can we doubt', 'we may safely conclude'.",
      "Reserve first-person singular ('I') for moments of personal judgment or belief: 'I call Natural Selection', 'as I believe', 'I can see no reason to doubt'.",
      "Use the passive voice and impersonal constructions ('it may be said', 'let it be borne in mind', 'it may be truly said') to present claims as general truths rather than personal opinions.",
      "Maintain a tone of earnest, measured authority \u2014 express confidence through the cumulative weight of reasoning rather than through bold declarative assertions.",
      "Signal uncertainty with specific hedging constructions: 'perhaps', 'as I believe', 'would almost immediately', 'might be most effective' \u2014 always hedging on specifics while remaining confident about the general framework.",
      "Never use contractions \u2014 maintain full formal constructions throughout ('do not', 'can not', 'would not').",
      "Personify Nature as a deliberate agent ('She can act on every internal organ') to create a vivid contrast with human limitation."
    ],
    "do_not": [
      "Do not adopt a casual, conversational tone \u2014 avoid colloquialisms, slang, or informal asides.",
      "Do not use humor, irony, or sarcasm \u2014 the register is wholly earnest and scientific.",
      "Do not address the reader with 'you' directly \u2014 maintain the inclusive 'we' or use impersonal constructions.",
      "Do not express doubt about your own framework \u2014 hedge on details and specifics, but remain confident about the overarching argument."
    ],
    "evidence": [
      "We shall best understand the probable course of natural selection by taking the case of a country undergoing some physical change, for instance, of climate.",
      "Not that, as I believe, any extreme amount of variability is necessary; as man can certainly produce great results by adding up in any given direction mere individual differences, so could Nature, but far more easily, from having incomparably longer time at her disposal.",
      "She can act on every internal organ, on every shade of constitutional difference, on the whole machinery of life."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through a chain of conditional reasoning: establish a premise ('Let it be borne in mind...'), pose a rhetorical question ('Can it, then, be thought improbable...?'), then state the conclusion as inevitable.",
      "Build arguments by analogy between the familiar and the unfamiliar \u2014 use domestication and human selection as the known case, then extend the logic to natural selection as the unknown case.",
      "Construct extended hypothetical scenarios ('the case of a country undergoing some physical change') to make abstract principles concrete, walking through consequences step by step.",
      "Handle counterarguments preemptively by raising potential objections in the form of rhetorical questions, then answering them within the same passage: 'Not that, as I believe, any extreme amount of variability is necessary'.",
      "Use the man-vs-nature comparison as a recurring argumentative scaffold: acknowledge what human effort achieves, then show how nature surpasses it by the same logic operating on a grander scale.",
      "Move from general principle to specific illustrative example: state the rule of natural selection, then demonstrate it with grouse coloring, sheep flocks, or island biogeography.",
      "Link consecutive arguments with logical connectives that signal the reasoning chain: 'for', 'hence', 'nor', 'and as', 'but', 'so as to'."
    ],
    "do_not": [
      "Do not begin arguments with bold, unsupported assertions \u2014 always build toward the claim through layered reasoning.",
      "Do not dismiss counterarguments outright \u2014 acknowledge them and then demonstrate why they do not undermine the central thesis.",
      "Do not rely on appeals to authority or citations alone \u2014 always show the logical reasoning that makes the conclusion necessary.",
      "Do not jump between unrelated ideas \u2014 every paragraph should connect causally or logically to the preceding one."
    ],
    "evidence": [
      "If such do occur, can we doubt (remembering that many more individuals are born than can possibly survive) that individuals having any advantage, however slight, over others, would have the best chance of surviving and of procreating their kind?",
      "As man can produce and certainly has produced a great result by his methodical and unconscious means of selection, what may not nature effect?",
      "Hence I can see no reason to doubt that natural selection might be most effective in giving the proper colour to each kind of grouse, and in keeping that colour, when once acquired, true and constant."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Treat paragraphs as sustained argumentative units \u2014 each paragraph is a continuous logical discourse that moves through multiple phases: establishing premises, developing reasoning, offering examples, and arriving at conclusions.",
      "Open a new argumentative thread with imperative invitations to the reader ('Let it be borne in mind', 'We shall best understand ... by taking the case of'), establishing the frame before diving into detail.",
      "Sequence ideas within paragraphs through cumulative logic: state a principle, explore its implications through hypothetical scenarios, address a potential objection, reinforce with an illustrative example, then draw a conclusion that pivots to the next phase of the argument.",
      "Use internal pivots marked by 'But', 'Nor', 'On the other hand', 'Not that' to shift direction within a paragraph without breaking to a new one \u2014 the paragraph absorbs turns and counter-turns.",
      "Close argumentative sequences with vivid, concrete illustrations that ground abstract reasoning: after discussing natural selection's power, end with the image of destroying every lamb with the faintest trace of black.",
      "Transition between major argumentative phases by shifting the hypothetical scenario or introducing a new comparison (from open country to island, from nature to man)."
    ],
    "do_not": [
      "Do not break the argument into many small paragraphs \u2014 sustain long, continuous stretches of reasoning within a single paragraph.",
      "Do not use abrupt transitions or white space to signal topic shifts \u2014 weave transitions into the logical flow of the prose itself.",
      "Do not end paragraphs with vague trailing thoughts \u2014 close with either a concrete image or a definitive restatement of the argument's force."
    ],
    "evidence": [
      "Let it be remembered how powerful the influence of a single introduced tree or mammal has been shown to be.",
      "This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection.",
      "we should remember how essential it is in a flock of white sheep to destroy every lamb with the faintest trace of black."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use rhetorical questions at critical junctures to make the reader feel the inevitability of the conclusion: frame the question so that only one answer is possible, then sometimes answer it explicitly and sometimes let it stand.",
      "Deploy extended analogy as the primary persuasive engine \u2014 sustain a single analogy (man's selection vs. nature's selection) across many sentences, developing it in parallel detail.",
      "Use anaphoric repetition of sentence-opening structures to build cumulative force: 'He does not...', 'He does not...', 'He often...' \u2014 hammering the contrast through structural repetition.",
      "Employ antithesis as parallel balanced clauses: 'Man selects only for his own good; Nature only for that of the being which she tends' \u2014 sharpening a contrast by mirroring syntax.",
      "Use imperative constructions ('Let it be borne in mind', 'Let it be remembered') to direct the reader's attention and frame what follows as something already established that must be recalled.",
      "Catalog concrete natural examples in quick succession (green leaf-eating insects, mottled-grey bark-feeders, white alpine ptarmigan, red grouse, black grouse) to give empirical weight to abstract claims.",
      "Use exclamatory sentences sparingly and for genuine wonder: 'How fleeting are the wishes and efforts of man! how short his time!' \u2014 the exclamation marks genuine awe, not casual emphasis."
    ],
    "do_not": [
      "Do not use metaphors for decorative effect \u2014 every figurative device must serve the argument directly.",
      "Do not use pop culture references, humorous analogies, or colloquial comparisons \u2014 analogies should be drawn from the natural world, agriculture, or domestic breeding.",
      "Do not employ sarcasm, hyperbole for comic effect, or deflating understatement \u2014 maintain earnest grandeur throughout."
    ],
    "evidence": [
      "On the other hand, we may feel sure that any variation in the least degree injurious would be rigidly destroyed. This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection.",
      "How fleeting are the wishes and efforts of man! how short his time! and consequently how poor will his products be, compared with those accumulated by nature during whole geological periods.",
      "He does not exercise a long-backed or long-legged quadruped in any peculiar manner; he exposes sheep with long and short wool to the same climate. He does not allow the most vigorous males to struggle for the females."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by establishing the intellectual context and inviting the reader to hold multiple premises in mind simultaneously before the argument begins \u2014 use structures like 'Let it be borne in mind' to set up the logical foundation.",
      "Begin the central argument with a rhetorical question that makes the conclusion feel inevitable before it is stated.",
      "Close with a vivid, concrete, memorable image that crystallizes the abstract argument into something tangible and visceral \u2014 the final sentence should linger as an illustration, not a summary.",
      "Follow the genre conventions of Victorian scientific exposition: sustained formal prose, minimal use of headers or lists, no bullet points, no numbered sections \u2014 the argument flows as continuous, connected prose.",
      "Use italics or quotation marks sparingly and only for technical terms being defined or words used in a special sense ('\"truer\" in character').",
      "Introduce defined terms formally within the argument itself ('This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection') \u2014 treat term definition as a rhetorical event, not a parenthetical aside.",
      "Structure the overall piece as a progressive deepening: begin with the general principle, move to hypothetical cases, then to specific natural examples, and close by demonstrating the principle's power in a concrete scenario."
    ],
    "do_not": [
      "Do not use modern formatting conventions \u2014 no headers, subheaders, bullet points, numbered lists, or bold text within the argument.",
      "Do not open with an anecdote, joke, or provocative claim \u2014 open with a logical frame-setting construction.",
      "Do not close with a summary that restates the thesis \u2014 close with an illustrative example or image that makes the argument felt rather than merely understood."
    ],
    "evidence": [
      "Let it be borne in mind in what an endless number of strange peculiarities our domestic productions, and, in a lesser degree, those under nature, vary; and how strong the hereditary tendency is.",
      "This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection.",
      "we should remember how essential it is in a flock of white sheep to destroy every lamb with the faintest trace of black."
    ]
  }
}
```

### sample-2.txt (1477 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 1477,
  "detected_genre": "scientific_paper",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking multiple subordinate and coordinate clauses into long, unfolding chains \u2014 a main claim followed by qualifications, elaborations, and parenthetical asides all within a single sentence.",
      "Use semicolons to yoke together closely related independent clauses that develop a single argument, treating the semicolon as a 'soft period' that signals continuation rather than conclusion.",
      "Interrupt sentences with participial phrases and parenthetical insertions (set off by commas or dashes) that add evidence or qualification mid-stream: 'the hybrid, though the ass seldom has stripes on its legs and the hemionus has none and has not even a shoulder-stripe, nevertheless had all four legs barred.'",
      "Chain coordinate clauses with 'and' to build cumulative, additive momentum \u2014 let clauses pile up to convey the weight of accumulated evidence.",
      "Vary the rhythm by occasionally inserting a shorter declarative sentence after a long, complex passage to deliver a conclusion or pivot: use the short sentence as a punctuation mark for emphasis.",
      "Open sentences with temporal, logical, or concessive adverbials ('Now let us turn to', 'Lastly, and this is another most remarkable case', 'But I am not at all satisfied') to signal the sentence's argumentative function before the main clause arrives."
    ],
    "do_not": [
      "Do NOT write clipped, staccato prose \u2014 avoid sequences of short, punchy independent clauses separated by periods.",
      "Do NOT front-load the main verb and strip away subordination; the architecture depends on embedding qualifications and evidence inside the sentence itself rather than parceling them into separate sentences.",
      "Do NOT use fragments or incomplete sentences for rhetorical effect \u2014 every sentence must be grammatically complete, however long."
    ],
    "evidence": [
      "Lastly, and this is another most remarkable case, a hybrid has been figured by Dr. Gray (and he informs me that he knows of a second case) from the ass and the hemionus; and this hybrid, though the ass seldom has stripes on its legs and the hemionus has none and has not even a shoulder-stripe, nevertheless had all four legs barred, and had three short shoulder-stripes, like those on the dun Welch pony, and even had some zebra-like stripes on the sides of its face.",
      "Habit in producing constitutional differences, and use in strengthening, and disuse in weakening and diminishing organs, seem to have been more potent in their effects.",
      "What now are we to say to these several facts?"
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person singular ('I') as a naturalist sharing personal observations and reasoning \u2014 position yourself as a fellow investigator, not an omniscient authority.",
      "Signal personal conviction with hedged confidence: use phrases like 'I venture confidently to look back', 'as it seems to me', 'I am not at all satisfied with this theory' \u2014 assert strong views while acknowledging they are views, not decrees.",
      "Address the reader with inclusive first-person plural ('let us turn to', 'we see', 'we have referred to') to create the sense of a shared intellectual journey through the evidence.",
      "Maintain a tone that is earnest, deliberate, and gentlemanly \u2014 serious about the subject but never aggressive or dismissive toward opponents.",
      "When referencing opposing views, name the person and paraphrase their position respectfully before explaining your disagreement: 'I am aware that Colonel Hamilton Smith\u2026 believes that\u2026 But I am not at all satisfied with this theory.'",
      "Avoid all contractions \u2014 use full forms ('do not', 'it is', 'I am') consistently to maintain formality.",
      "Express emotional investment through restrained but unmistakable language: 'I would almost as soon believe' and 'It makes the works of God a mere mockery and deception' convey passion without hyperbole."
    ],
    "do_not": [
      "Do NOT adopt a detached, impersonal third-person academic voice \u2014 the author is always visibly present as 'I' making judgments.",
      "Do NOT use sarcasm, irony, or humor \u2014 the register is entirely earnest and measured.",
      "Do NOT use casual or conversational phrasing; the voice is formal Victorian scientific prose."
    ],
    "evidence": [
      "But I am not at all satisfied with this theory, and should be loth to apply it to breeds so distinct as the heavy Belgian cart-horse, Welch ponies, cobs, the lanky Kattywar race, etc., inhabiting the most distant parts of the world.",
      "For myself, I venture confidently to look back thousands on thousands of generations, and I see an animal striped like a zebra, but perhaps otherwise very differently constructed, the common parent of our domestic horse.",
      "To admit this view is, as it seems to me, to reject a real for an unreal, or at least for an unknown, cause."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments by cumulative induction: stack specific empirical cases one after another \u2014 mules, hybrids, particular breeds \u2014 until the accumulated weight of evidence makes the conclusion feel inevitable.",
      "After presenting a body of evidence, pose a rhetorical question ('What now are we to say to these several facts?') as a pivot that transitions from evidence to interpretation.",
      "Draw explicit parallels between different domains of evidence ('how exactly parallel is the case with that of the species of the horse-genus!') to show convergence from independent lines of inquiry.",
      "Present the opposing view as a fully articulated hypothesis, then show that it leads to absurd or unsatisfying consequences \u2014 use reductio ad absurdum rather than direct refutation: 'To admit this view is\u2026 to reject a real for an unreal\u2026 cause.'",
      "Acknowledge uncertainty openly ('Our ignorance of the laws of variation is profound'; 'Not in one case out of a hundred can we pretend to assign any reason') before presenting what evidence does support.",
      "Use analogical reasoning to make unfamiliar biological patterns graspable: compare horses to pigeons, hybrids to mongrels, to show the same principle operating across taxa.",
      "When hedging, use specific phrases: 'perhaps', 'seem to have', 'probably', 'it is probable from this same cause' \u2014 hedge the mechanism, not the observation."
    ],
    "do_not": [
      "Do NOT argue from authority alone \u2014 every claim must be grounded in specific observed cases or logical deduction from them.",
      "Do NOT dismiss opposing views curtly; always state them fairly before countering.",
      "Do NOT present conclusions as certain when the mechanism is unknown \u2014 separate confident pattern recognition from uncertain causal explanation."
    ],
    "evidence": [
      "What now are we to say to these several facts? We see several very distinct species of the horse-genus becoming, by simple variation, striped on the legs like a zebra, or striped on the shoulders like an ass.",
      "I have stated that the most probable hypothesis to account for the reappearance of very ancient characters, is\u2014that there is a _tendency_ in the young of each successive generation to produce the long-lost character, and that this tendency, from unknown causes, sometimes prevails.",
      "It makes the works of God a mere mockery and deception; I would almost as soon believe with the old and ignorant cosmogonists, that fossil shells had never lived, but had been created in stone so as to mock the shells now living on the sea-shore."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Organize long passages as a continuous argumentative arc: open with a specific empirical domain (horse stripes), accumulate cases, pivot to interpretation, draw parallels to a second domain (pigeons), then synthesize a general principle \u2014 all within a single extended block.",
      "Use explicit signpost phrases to mark transitions within the passage: 'Now let us turn to', 'Now observe the case of', 'Lastly', 'Call the breeds of pigeons\u2026 species; and how exactly parallel'.",
      "Sequence ideas from particular to general: begin with specific observed facts, then widen to the pattern they suggest, then state the theoretical implication.",
      "Close argumentative sections with a dramatic or philosophically charged statement that elevates the stakes beyond the immediate evidence: 'It makes the works of God a mere mockery and deception.'",
      "When summarizing, use a labeled heading ('Summary') and march through points in sequence, with each sentence addressing a distinct factor or principle, connected by implicit logical progression rather than heavy transition words."
    ],
    "do_not": [
      "Do NOT break the argument into many small paragraphs \u2014 maintain long, sustained passages that allow cumulative evidence to build without interruption.",
      "Do NOT begin paragraphs with generic topic sentences that announce what will follow; instead, signal transitions with phrases embedded in the flow of argument.",
      "Do NOT use bullet points, numbered lists, or any modern formatting to organize ideas within a paragraph."
    ],
    "evidence": [
      "Now let us turn to the effects of crossing the several species of the horse-genus.",
      "_Summary_.\u2014Our ignorance of the laws of variation is profound.",
      "Now observe the case of the several breeds of pigeons: they are descended from a pigeon (including two or three sub-species or geographical races) of a bluish colour, with certain bars and other marks"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use cross-domain analogy as a primary persuasive tool \u2014 draw detailed parallels between one biological case and another (horses and pigeons) to make the principle visible through repetition in different contexts.",
      "Employ reductio ad absurdum to discredit alternatives: push the opposing view to its logical conclusion and show it produces something absurd or repugnant ('a mere mockery and deception').",
      "Use rhetorical questions sparingly but at key argumentative pivot points to force the reader to confront the weight of evidence: 'What now are we to say to these several facts?'",
      "Deploy parallel structure in summary passages to create rhythmic force: 'Habit in producing constitutional differences, and use in strengthening, and disuse in weakening and diminishing organs.'",
      "Use italics (or emphasis) to mark key theoretical terms that carry special conceptual weight: '_tendency_'.",
      "Employ catalogues and enumerations of specific examples (breed names, species, geographic locations) to convey the breadth and thoroughness of the evidence base.",
      "Use vivid comparative images drawn from non-scientific domains to make abstract arguments concrete: 'fossil shells had never lived, but had been created in stone so as to mock the shells now living on the sea-shore.'"
    ],
    "do_not": [
      "Do NOT use metaphors from modern technology, pop culture, or colloquial life \u2014 analogies should come from the natural world, natural philosophy, or theology.",
      "Do NOT use exclamatory sentences for mere enthusiasm; reserve exclamation for moments of genuine intellectual astonishment at a parallel or discovery.",
      "Do NOT repeat a point by restating it in different words \u2014 instead, repeat it by showing it in a different empirical case."
    ],
    "evidence": [
      "Call the breeds of pigeons, some of which have bred true for centuries, species; and how exactly parallel is the case with that of the species of the horse-genus!",
      "I would almost as soon believe with the old and ignorant cosmogonists, that fossil shells had never lived, but had been created in stone so as to mock the shells now living on the sea-shore.",
      "Habit in producing constitutional differences, and use in strengthening, and disuse in weakening and diminishing organs, seem to have been more potent in their effects."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open sections by plunging directly into empirical evidence \u2014 begin in the middle of a factual survey rather than with a thesis statement or abstract claim.",
      "Use labeled section headings (e.g., '_Summary_') set off with emphasis and an em dash to mark major structural divisions.",
      "Close argumentative sections with a statement that widens the philosophical or theological stakes of the scientific argument \u2014 move from data to worldview in the final sentences.",
      "In summary sections, close with the most complex and nuanced point rather than a simple restatement of the main thesis \u2014 end on the idea that opens the most further questions.",
      "Use parenthetical citations and attributions within the text itself ('Colonel Hamilton Smith, who has written on this subject'; 'a hybrid has been figured by Dr. Gray') rather than footnotes or endnotes \u2014 the authority and evidence are woven into the prose.",
      "Format emphasis with italics for key terms and section labels; use em dashes to introduce definitions, reformulations, or dramatic pivots: 'is\u2014that there is a _tendency_'; 'Specific characters\u2014that is, the characters which have come to differ'.",
      "Use 'etc.' freely when enumerating examples to signal that the list could continue \u2014 convey breadth without exhaustiveness."
    ],
    "do_not": [
      "Do NOT open with a hook, anecdote, or attention-grabbing statement designed to entertain \u2014 begin with the substance of the inquiry.",
      "Do NOT close with a tidy resolution or a call to action \u2014 leave the reader with the weight of evidence and the implied conclusion.",
      "Do NOT use modern academic formatting conventions (abstract, numbered references, section numbering) \u2014 this is Victorian scientific prose with a continuous narrative structure."
    ],
    "evidence": [
      "_Summary_.\u2014Our ignorance of the laws of variation is profound.",
      "It makes the works of God a mere mockery and deception; I would almost as soon believe with the old and ignorant cosmogonists, that fossil shells had never lived, but had been created in stone so as to mock the shells now living on the sea-shore.",
      "Variability in the same parts of the organisation has generally been taken advantage of in giving secondary sexual differences to the sexes of the same species, and specific differences to the several species of the same genus."
    ]
  }
}
```

### sample-3.txt (1510 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1510,
  "detected_genre": "scientific_paper",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple subordinate clauses before arriving at the main assertion \u2014 place conditions, concessions, and qualifications before the core claim, forcing the reader to hold context in mind.",
      "Use semicolons to join closely related independent clauses that elaborate or contrast with each other, creating a continuous logical thread within a single sentence rather than breaking into separate sentences.",
      "Embed parenthetical qualifications mid-sentence using commas \u2014 'though not made with scientific precision,' 'species which are so different that they are generally ranked in distinct genera' \u2014 to layer nuance without interrupting the forward motion.",
      "Chain clauses with 'for,' 'yet,' 'but,' and 'and' to build extended compound-complex sentences that mimic the branching logic of scientific reasoning.",
      "Use participial and appositional phrases to pack additional information into already-long sentences: 'namely Mr. Blyth and Capt. Hutton, that whole flocks of these crossed geese are kept in various parts of the country.'",
      "When a short sentence appears, use it to deliver a decisive conclusion or pivot \u2014 it should feel like a verdict after extended deliberation."
    ],
    "do_not": [
      "Do NOT write in clipped, punchy prose \u2014 avoid sequences of short declarative sentences that create a staccato rhythm.",
      "Do NOT front-load the main claim and then append qualifications afterward; instead, build toward the claim through qualifying clauses.",
      "Do NOT use sentence fragments or incomplete thoughts \u2014 every sentence must be grammatically complete and logically self-contained."
    ],
    "evidence": [
      "\"So that certain individual plants and all the individuals of certain species can actually be hybridised much more readily than they can be self-fertilised!\"",
      "\"Nevertheless these facts show on what slight and mysterious causes the lesser or greater fertility of species when crossed, in comparison with the same species when self-fertilised, sometimes depends.\"",
      "\"If we were to act thus, and pair brothers and sisters in the case of any pure animal, which from any cause had the least tendency to sterility, the breed would assuredly be lost in a very few generations.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person when reporting personal investigation, judgment, or belief \u2014 'I have taken some pains,' 'I am inclined to believe,' 'I doubt whether' \u2014 but shift to impersonal constructions ('it may be concluded,' 'we must infer') when stating general principles or shared conclusions.",
      "Signal personal epistemic states explicitly: use 'I believe,' 'I think,' 'I am inclined to believe,' 'I hardly know of' to mark claims as judgment rather than established fact.",
      "Maintain a tone that is simultaneously authoritative and scrupulously honest about uncertainty \u2014 present conclusions with confidence but always flag the limits of evidence.",
      "Use 'we' to invite the reader into shared reasoning ('we must either give up the belief,' 'we will now consider'), creating a collegial rather than lecturing relationship.",
      "Avoid all contractions \u2014 maintain formal register throughout without exception.",
      "Cite authorities by name and credential ('Mr. Herbert told me,' 'I am assured by two eminently capable judges, namely Mr. Blyth and Capt. Hutton') to ground claims in personal correspondence and professional networks."
    ],
    "do_not": [
      "Do NOT adopt a detached, purely impersonal academic voice \u2014 the author's personal engagement with evidence must remain visible.",
      "Do NOT use casual or colloquial language; maintain Victorian scientific formality at all times.",
      "Do NOT express certainty where evidence is incomplete \u2014 always hedge appropriately with phrases like 'I am inclined to believe' or 'it seems to me.'"
    ],
    "evidence": [
      "\"I have taken some pains to ascertain the degree of fertility of some of the complex crosses of Rhododendrons, and I am assured that many of them are perfectly fertile.\"",
      "\"This latter alternative seems to me the most probable, and I am inclined to believe in its truth, although it rests on no direct evidence.\"",
      "\"I doubt whether any case of a perfectly fertile hybrid animal can be considered as thoroughly well authenticated.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through specific empirical cases first, then generalize \u2014 move from 'Mr. Herbert tried this experiment' to 'this result has also been confirmed by other observers' to a broader inference.",
      "Use a recursive, spiraling logic: state a general principle, illustrate it with a specific case, complicate it with an exception or counter-case, then restate the principle in modified form.",
      "Anticipate objections by embedding them as conditional clauses: 'It should, however, be borne in mind that, owing to few animals breeding freely under confinement, few experiments have been fairly tried.'",
      "Bridge from plants to animals (or one domain to another) explicitly, noting where evidence is stronger and weaker: 'In regard to animals, much fewer experiments have been carefully tried than with plants.'",
      "Use 'for instance' liberally to ground every generalization in a concrete example \u2014 never let an abstract claim stand without illustration.",
      "When evidence is insufficient, say so directly and explain why the insufficiency exists, rather than simply hedging the conclusion.",
      "Build toward summary conclusions using 'Finally' or similar markers, and state the conclusion with appropriate qualification: 'it may be concluded that some degree of sterility\u2026 is an extremely general result; but that it cannot\u2026 be considered as absolutely universal.'"
    ],
    "do_not": [
      "Do NOT assert broad generalizations without immediately supporting them with named examples, experiments, or authorities.",
      "Do NOT dismiss counterevidence \u2014 instead, explain the methodological or circumstantial reasons why it might be misleading.",
      "Do NOT present conclusions as binary; always acknowledge the gradient between extremes ('some degree of sterility' rather than 'sterility always occurs')."
    ],
    "evidence": [
      "\"For instance, a bulb of Hippeastrum aulicum produced four flowers; three were fertilised by Herbert with their own pollen, and the fourth was subsequently fertilised by the pollen of a compound hybrid descended from three other and distinct species\"",
      "\"Had hybrids, when fairly treated, gone on decreasing in fertility in each successive generation, as G\u00e4rtner believes to be the case, the fact would have been notorious to nurserymen.\"",
      "\"On this view, the aboriginal species must either at first have produced quite fertile hybrids, or the hybrids must have become in subsequent generations quite fertile under domestication.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Organize the extended passage as a continuous chain of reasoning where each new case or sub-topic grows organically from the previous one \u2014 use transitional phrases like 'This case of the Crinum leads me to refer to,' 'In regard to animals,' 'Finally, looking to all the ascertained facts.'",
      "Within the body, alternate between empirical evidence (specific experiments, named researchers, particular species) and interpretive commentary (what the evidence implies for the broader argument).",
      "When transitioning to a new sub-topic, explicitly name the shift: 'In regard to animals,' 'A doctrine which originated with Pallas,' 'We will now consider a little more in detail.'",
      "Close extended passages with a synthetic summary that restates the key finding with full qualification before pivoting to the next section.",
      "Use a pattern of claim \u2192 evidence \u2192 complication \u2192 revised claim within each logical unit, so the argument visibly wrestles with its own evidence."
    ],
    "do_not": [
      "Do NOT use bullet points, numbered lists, or any non-prose formatting within the body of the argument.",
      "Do NOT abruptly jump between topics \u2014 every transition must be explicitly signaled and logically motivated.",
      "Do NOT separate evidence from interpretation; weave them together in the same passage rather than presenting data blocks followed by analysis blocks."
    ],
    "evidence": [
      "\"This case of the Crinum leads me to refer to a most singular fact, namely, that there are individual plants\u2026\"",
      "\"In regard to animals, much fewer experiments have been carefully tried than with plants.\"",
      "\"Finally, looking to all the ascertained facts on the intercrossing of plants and animals, it may be concluded that some degree of sterility, both in first crosses and in hybrids, is an extremely general result\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use 'namely' to introduce specific clarifications or examples after general statements \u2014 this serves as a signature marker of precision: 'namely, that there are individual plants,' 'namely Mr. Blyth and Capt. Hutton.'",
      "Employ the direct quotation of correspondents and authorities to lend empirical weight: embed their exact words in quotation marks within the flow of argument.",
      "Use 'for instance' as the primary device for moving from generalization to specific illustration \u2014 treat it as a structural pillar, not a casual aside.",
      "Deploy the construction 'so that' to draw out surprising or counterintuitive implications from evidence, creating moments of intellectual revelation.",
      "Use analogy from one biological domain to another (plants to animals, domesticated to wild) as the primary mode of extending arguments beyond available evidence.",
      "Employ 'it should be borne in mind' and similar formulations to flag crucial contextual factors the reader might overlook."
    ],
    "do_not": [
      "Do NOT use metaphors, similes, or figurative language \u2014 all comparisons must be literal and empirical (species to species, experiment to experiment).",
      "Do NOT use rhetorical questions \u2014 state inquiries as declarative research problems ('I doubt whether,' 'the question is').",
      "Do NOT use pop culture references, humor, or any device that would undermine the tone of careful scientific investigation."
    ],
    "evidence": [
      "\"So that certain individual plants and all the individuals of certain species can actually be hybridised much more readily than they can be self-fertilised!\"",
      "\"the result was that 'the ovaries of the three first flowers soon ceased to grow, and after a few days perished entirely, whereas the pod impregnated by the pollen of the hybrid made vigorous growth and rapid progress to maturity'\"",
      "\"Any one may readily convince himself of the efficiency of insect-agency by examining the flowers of the more sterile kinds of hybrid rhododendrons\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open sections by connecting to the immediately preceding discussion \u2014 use a bridging phrase that picks up the last topic and pivots to a new angle: 'This case of the Crinum leads me to refer to a most singular fact.'",
      "When opening a new major section, state both the topic and the purpose explicitly: 'We will now consider a little more in detail the circumstances and rules governing the sterility of first crosses and of hybrids. Our chief object will be to see whether or not\u2026'",
      "Close major passages with a carefully qualified synthetic statement that acknowledges both the general trend and its exceptions, using constructions like 'it may be concluded that\u2026 but that it cannot\u2026 be considered as absolutely universal.'",
      "Use italicized section headers in a descriptive-title format (e.g., '_Laws governing the Sterility of first Crosses and of Hybrids_') to demarcate major divisions.",
      "Use em dashes sparingly for parenthetical insertions within section headers or key sentences, and use parentheses to provide taxonomic names or brief clarifications.",
      "Follow the genre convention of the scientific treatise: present evidence exhaustively, name every authority and species precisely, and build toward cautious generalizations rather than bold pronouncements."
    ],
    "do_not": [
      "Do NOT open with a dramatic hook, anecdote, or provocative claim \u2014 begin with a calm, logical connection to prior material.",
      "Do NOT close with a call to action, open question, or speculative flourish \u2014 end with a measured summary that sets up the next section.",
      "Do NOT use modern formatting conventions like bold text, bullet points, or numbered lists \u2014 maintain continuous prose with minimal typographic intervention."
    ],
    "evidence": [
      "\"This case of the Crinum leads me to refer to a most singular fact, namely, that there are individual plants\u2026\"",
      "\"Finally, looking to all the ascertained facts on the intercrossing of plants and animals, it may be concluded that some degree of sterility, both in first crosses and in hybrids, is an extremely general result; but that it cannot, under our present state of knowledge, be considered as absolutely universal.\"",
      "\"_Laws governing the Sterility of first Crosses and of Hybrids_.\u2014We will now consider a little more in detail the circumstances and rules governing the sterility of first crosses and of hybrids.\""
    ]
  }
}
```

### sample-4.txt (1485 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 1485,
  "detected_genre": "scientific_paper",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking multiple subordinate and coordinate clauses, using semicolons and commas to chain related propositions into a single extended thought before reaching a full stop.",
      "Use semicolons to juxtapose parallel or contrasting claims within the same sentence rather than splitting them into separate sentences \u2014 treat the semicolon as a way to hold two related ideas in tension.",
      "Favor complex and compound-complex sentence structures as the default mode; let simple sentences appear only for emphatic assertions or transitional pivots.",
      "Chain conditional reasoning within sentences using 'if \u2026 then' and 'so that' structures, embedding the logical argument directly into the sentence's grammatical architecture.",
      "When constructing long sentences, anchor them with a clear main clause early, then extend through participial phrases, relative clauses, and appositives \u2014 the reader should always know the grammatical subject before encountering elaborations."
    ],
    "do_not": [
      "Do not use sentence fragments or incomplete thoughts as stylistic devices.",
      "Do not create choppy, staccato rhythms by placing multiple short declarative sentences in sequence.",
      "Do not front-load sentences with multiple adverbial modifiers before the subject \u2014 get to the subject and verb, then elaborate."
    ],
    "evidence": [
      "\"If under a nearly similar climate, the eocene inhabitants of one quarter of the world were put into competition with the existing inhabitants of the same or some other quarter, the eocene fauna or flora would certainly be beaten and exterminated; as would a secondary fauna by an eocene, and a pal\u00e6ozoic fauna by a secondary fauna.\"",
      "\"I do not doubt that this process of improvement has affected in a marked and sensible manner the organisation of the more recent and victorious forms of life, in comparison with the ancient and beaten forms; but I can see no way of testing this sort of progress.\"",
      "\"These huge animals have become wholly extinct, and have left no progeny.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from an explicit first-person scholarly position, using 'I' to own claims, doubts, and expectations \u2014 present the author as a reasoning individual, not an anonymous authority.",
      "Signal intellectual honesty by openly acknowledging uncertainty and the limits of evidence: state what you doubt, what you cannot yet prove, and what you expect future work to confirm.",
      "Maintain a formal, measured, collegial register throughout \u2014 address the reader as a peer naturalist who shares your frame of reference and vocabulary.",
      "Never use contractions; maintain full grammatical formality at all times.",
      "When citing other scholars, name them directly and characterize their contributions with respectful but precise language ('Professor Owen has shown in the most striking manner', 'I must follow Pictet and Huxley in thinking').",
      "Use hedging phrases like 'we may believe,' 'we may doubt,' and 'this view may be true' to distinguish between established facts and provisional inferences."
    ],
    "do_not": [
      "Do not adopt a casual, conversational, or irreverent tone \u2014 no humor, no colloquialisms, no asides to the reader.",
      "Do not present claims with absolute certainty when evidence is incomplete; always qualify appropriately.",
      "Do not use the passive voice to avoid taking a personal stance \u2014 own your arguments with 'I' rather than hiding behind impersonal constructions."
    ],
    "evidence": [
      "\"I must follow Pictet and Huxley in thinking that the truth of this doctrine is very far from proved. Yet I fully expect to see it hereafter confirmed, at least in regard to subordinate groups.\"",
      "\"I was so much impressed with these facts that I strongly insisted, in 1839 and 1845, on this 'law of the succession of types.'\"",
      "\"This cannot for an instant be admitted.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce a general claim or question, then immediately illustrate it with concrete natural-history examples drawn from specific geographies, species, and named researchers.",
      "Construct arguments through hypothetical scenarios and thought experiments: 'If all the animals and plants of Great Britain were set free in New Zealand\u2026' \u2014 use conditional logic to test theoretical claims against imagined empirical situations.",
      "Advance reasoning dialectically: state a position, then introduce a complication or counterexample ('On the other hand'), then resolve or qualify the original claim.",
      "Preemptively address objections by voicing them yourself, sometimes with the opponent's likely rhetorical stance ('It may be asked in ridicule, whether I suppose\u2026'), then refute them directly.",
      "Accumulate supporting examples in series \u2014 cite multiple geographic regions, researchers, and taxonomic groups to build cumulative weight before drawing a conclusion.",
      "Use transitional metacommentary to signal argumentative structure: 'In a future chapter I shall attempt to show,' 'Now what does this remarkable law mean?'"
    ],
    "do_not": [
      "Do not make sweeping claims without immediately grounding them in specific empirical examples or named authorities.",
      "Do not dismiss counterarguments flippantly \u2014 acknowledge them, then dismantle them with evidence and reasoning.",
      "Do not leave logical threads dangling; always return to the theoretical implication after presenting examples."
    ],
    "evidence": [
      "\"On the other hand, from what we see now occurring in New Zealand, and from hardly a single inhabitant of the southern hemisphere having become wild in any part of Europe, we may doubt, if all the productions of New Zealand were set free in Great Britain, whether any considerable number would be enabled to seize on places now occupied by our native plants and animals.\"",
      "\"It may be asked in ridicule, whether I suppose that the megatherium and other allied huge monsters have left behind them in South America the sloth, armadillo, and anteater, as their degenerate descendants. This cannot for an instant be admitted.\"",
      "\"Now what does this remarkable law of the succession of the same types within the same areas mean?\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open a section by naming the topic or question under discussion, then immediately signal your stance or the limits of what you will address ('I will not here enter on this subject').",
      "Organize ideas within paragraphs as chains of reasoning: claim \u2192 illustration \u2192 counterpoint \u2192 further illustration \u2192 qualified conclusion, with each step flowing from the previous one through explicit logical connectives.",
      "Use geographic and taxonomic examples as the connective tissue between ideas \u2014 move from one region or taxon to another to build a cumulative case, linking them with phrases like 'In a similar manner,' 'Analogous facts could be given.'",
      "Transition between major topics using italicized section headings that name the principle under discussion, framed as a formal label.",
      "Close argumentative sequences by returning to the theoretical framework and stating what the accumulated evidence implies for the theory ('On the theory of descent with modification, the great law \u2026 is at once explained')."
    ],
    "do_not": [
      "Do not begin paragraphs with generic filler ('It is interesting to note that\u2026') \u2014 always open with the substantive claim or question.",
      "Do not leave a paragraph as a mere list of examples without connecting them back to the governing argument.",
      "Do not use abrupt topic shifts without signaling the pivot through a transitional phrase or rhetorical question."
    ],
    "evidence": [
      "\"There has been much discussion whether recent forms are more highly developed than ancient. I will not here enter on this subject, for naturalists have not as yet defined to each other's satisfaction what is meant by high and low forms.\"",
      "\"Now what does this remarkable law of the succession of the same types within the same areas mean? He would be a bold man, who after comparing the present climate of Australia and of parts of South America under the same latitude, would attempt to account\u2026\"",
      "\"On the theory of descent with modification, the great law of the long enduring, but not immutable, succession of the same types within the same areas, is at once explained.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from biogeography \u2014 compare fauna and flora across continents, time periods, and ecological scenarios to make abstract evolutionary principles concrete.",
      "Employ antithesis to sharpen contrasts: pair opposing outcomes, regions, or time periods within the same sentence ('the dead and the living,' 'ancient and beaten forms' vs. 'recent and victorious forms').",
      "Use rhetorical questions at pivotal moments to reframe the argument and draw the reader into active reasoning ('Now what does this remarkable law mean?').",
      "Deploy hypothetical imperatives ('if all the animals and plants of Great Britain were set free in New Zealand') as thought experiments that function as persuasive devices.",
      "Use repetition of key phrases across sentences to create thematic cohesion: repeat the governing concept ('the same types within the same areas,' 'the law of succession') to anchor the reader.",
      "Use direct address to anticipated critics ('He would be a bold man, who\u2026'; 'It may be asked in ridicule') to dramatize the argumentative stakes."
    ],
    "do_not": [
      "Do not use metaphors from everyday life, pop culture, or domains outside natural history \u2014 keep figurative language within the scientific frame.",
      "Do not use exclamation marks or emphatic punctuation to convey importance; let the weight of evidence and the gravity of phrasing carry conviction.",
      "Do not use lists or bullet points \u2014 integrate all enumerations into flowing prose."
    ],
    "evidence": [
      "\"this 'law of the succession of types,'\u2014on 'this wonderful relationship in the same continent between the dead and the living.'\"",
      "\"He would be a bold man, who after comparing the present climate of Australia and of parts of South America under the same latitude, would attempt to account, on the one hand, by dissimilar physical conditions for the dissimilarity of the inhabitants of these two continents, and, on the other hand, by similarity of conditions, for the uniformity of the same types.\"",
      "\"Thus the embryo comes to be left as a sort of picture, preserved by nature, of the ancient and less modified condition of each animal.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open a section by naming the scholarly debate or question at hand, then immediately narrow the scope by declaring what you will and will not address.",
      "Establish context through the intellectual landscape: reference what other naturalists have discussed, where agreement breaks down, and where your own theory enters.",
      "Use italicized, formally titled subsection headings (in the style of 19th-century treatises) to demarcate shifts in topic, formatted as '_On [Topic]_'.",
      "Close sections by stating the theoretical conclusion that the accumulated evidence supports, then pivoting to a complication or a new line of evidence that the next section will address.",
      "End passages by narrowing from the general law back to a precise, concrete scenario that illustrates what the theory predicts \u2014 give the reader a specific case to carry forward.",
      "Use em dashes sparingly for parenthetical insertions that add qualifying detail or attribution within a sentence.",
      "Follow the conventions of the Victorian scientific treatise: no bullet points, no numbered lists, no bold text (except italicized Latin terms and section titles), and continuous discursive prose."
    ],
    "do_not": [
      "Do not open with an anecdote, joke, or dramatic scene \u2014 begin with the intellectual question.",
      "Do not close with a call to action or exhortation \u2014 close with a reasoned inference or a qualified prediction.",
      "Do not use modern formatting conventions (headers with #, bold for emphasis, numbered steps) \u2014 maintain the flowing prose style of a scientific monograph."
    ],
    "evidence": [
      "\"There has been much discussion whether recent forms are more highly developed than ancient. I will not here enter on this subject, for naturalists have not as yet defined to each other's satisfaction what is meant by high and low forms.\"",
      "\"_On the Succession of the same Types within the same areas, during the later tertiary periods_.\u2014Mr. Clift many years ago showed that the fossil mammals from the Australian caves were closely allied to the living marsupials of that continent.\"",
      "\"The other seven species of the old genera have all died out and have left no progeny.\""
    ]
  }
}
```

### sample-5.txt (1498 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 1498,
  "detected_genre": "scientific_paper",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple subordinate and coordinate clauses, layering qualifications, parenthetical asides, and conditional phrases before arriving at the main point \u2014 the sentence should unfold like an argument being constructed in real time.",
      "Use semicolons to join closely related independent clauses that elaborate or extend the same line of reasoning, treating the semicolon as a 'soft period' that signals continuation rather than conclusion.",
      "Embed concessive and conditional clauses mid-sentence using 'though', 'however', 'if', 'whether', 'whilst', and 'owing to' \u2014 these qualifications should interrupt the main clause to preemptively address objections before the sentence resolves.",
      "Deploy parallel structure when listing examples or building cumulative arguments: repeat the grammatical frame (e.g., 'he includes\u2026 he includes\u2026 he includes') to create momentum and rhetorical weight.",
      "Let sentences expand through appositive phrases and parenthetical clarifications set off by commas, semicolons, or dashes \u2014 the sentence should feel like a mind working through complexity in a single sustained breath."
    ],
    "do_not": [
      "Do not write terse, clipped sentences that deliver conclusions without showing the reasoning process \u2014 every claim should carry its qualifications within the same sentence.",
      "Do not use sentence fragments or incomplete thoughts as stylistic devices.",
      "Do not front-load the conclusion and then explain \u2014 instead, build through conditions and evidence toward the resolution at the sentence's end."
    ],
    "evidence": [
      "\"If a branching diagram had not been used, and only the names of the groups had been written in a linear series, it would have been still less possible to have given a natural arrangement; and it is notoriously not possible to represent in a series, on a flat surface, the affinities which we discover in nature amongst the beings of the same group.\"",
      "\"He includes monsters; he includes varieties, not solely because they closely resemble the parent-form, but because they are descended from it.\"",
      "\"Yet it might be that some very ancient language had altered little, and had given rise to few new languages, whilst others (owing to the spreading and subsequent isolation and states of civilisation of the several races, descended from a common race) had altered much, and had given rise to many new languages and dialects.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person ('I') when stating a personal view or belief, but shift to impersonal constructions ('it may be,' 'we may feel,' 'one dreams') when presenting general principles \u2014 the 'I' marks opinion, the impersonal marks shared knowledge.",
      "Use 'we' inclusively to draw the reader into the reasoning process, as a fellow investigator: 'we choose,' 'we can understand,' 'we have to make out' \u2014 position the reader as a collaborator, not a student.",
      "Maintain a tone of earnest, patient authority: assert positions with conviction but always acknowledge difficulty and complexity. Signal confidence through phrases like 'I believe,' 'I think,' 'I apprehend' rather than through blunt declarations.",
      "Avoid all contractions \u2014 maintain formal register throughout without exception.",
      "Express uncertainty and tentativeness through conditional constructions ('it might be,' 'may not this same element,' 'if it could be proved') rather than through hedging adverbs like 'perhaps' or 'maybe.'"
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic voice that hides the author behind passive constructions \u2014 the author's presence and judgment should be felt throughout.",
      "Do not use humor, irony, or sarcasm \u2014 the tone is consistently serious and deliberative, even when entertaining hypotheticals.",
      "Do not speak down to the reader or over-explain basic concepts \u2014 assume the reader is an educated peer capable of following complex reasoning."
    ],
    "evidence": [
      "\"Thus, on the view which I hold, the natural system is genealogical in its arrangement, like a pedigree\"",
      "\"I believe it has thus been unconsciously used; and only thus can I understand the several rules and guides which have been followed by our best systematists.\"",
      "\"We have no written pedigrees; we have to make out community of descent by resemblances of any kind.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims as reasoned positions ('on the view which I hold,' 'I believe') and then immediately build support through extended analogies \u2014 move from the abstract principle to a concrete parallel domain before returning to the main argument.",
      "Use the analogy-as-proof technique: develop a full analogy (e.g., languages and biological classification) across multiple sentences, working through its implications in detail, then explicitly connect the analogy back to the central claim.",
      "Construct arguments through accumulation: stack multiple examples, each slightly different, that all point to the same conclusion. Let the weight of evidence build rather than relying on a single decisive proof.",
      "Handle objections and counterarguments by raising them as hypothetical questions ('But it may be asked, what ought we to do, if\u2026') and then reasoning through them to show they actually support or do not undermine the main thesis.",
      "Use reductio ad absurdum to dismiss objections: push a counterargument to its extreme logical conclusion ('The supposition is of course preposterous') to reveal its untenability.",
      "Move between levels of generality \u2014 state a principle, illustrate with specific cases (pigeons, turnips, cattle horns, orchids), then re-ascend to the general rule, now better supported."
    ],
    "do_not": [
      "Do not present conclusions without the reasoning chain that leads to them \u2014 always show your work.",
      "Do not rely on appeals to authority alone; instead, reason from first principles and use examples as evidence.",
      "Do not dismiss counterarguments without engaging with them \u2014 always address them through reasoning, even when the answer seems obvious."
    ],
    "evidence": [
      "\"It may be worth while to illustrate this view of classification, by taking the case of languages.\"",
      "\"The supposition is of course preposterous; and I might answer by the argumentum ad hominem, and ask what should be done if a perfect kangaroo were seen to come out of the womb of a bear?\"",
      "\"whatever part is found to be most constant, is used in classing varieties: thus the great agriculturist Marshall says the horns are very useful for this purpose with cattle, because they are less variable than the shape or colour of the body, etc.; whereas with sheep the horns are much less serviceable, because less constant.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Treat the paragraph as a single sustained argument: begin with a claim or observation, develop it through examples and analogies, address complications, and arrive at a stronger restatement or extension of the opening claim.",
      "Connect ideas within the paragraph through explicit logical connectives: 'Thus,' 'But,' 'For,' 'Therefore,' 'And,' 'Yet,' 'As soon as,' 'According to' \u2014 the logical relationship between every sentence should be marked.",
      "Embed transitions within sentences rather than using standalone transitional sentences \u2014 a new example or sub-argument should be introduced mid-sentence through phrases like 'and if,' 'but the proper,' 'for we might feel sure.'",
      "Layer examples in increasing specificity or surprise: move from general cases through familiar instances to striking or unusual ones (from languages to pigeons to the kangaroo-bear hypothetical).",
      "Allow the argument to develop recursively within a single paragraph \u2014 return to earlier points with new evidence or a new angle, creating a spiral structure rather than a strictly linear one."
    ],
    "do_not": [
      "Do not write paragraphs that make a single point and stop \u2014 each paragraph should contain a developing argument with multiple moves.",
      "Do not break the flow into many small paragraphs for readability \u2014 sustain the reader's attention through the logical momentum of a continuous argument.",
      "Do not use topic sentences that fully telegraph the paragraph's conclusion \u2014 let the argument develop and arrive at its point through the accumulation of evidence."
    ],
    "evidence": [
      "\"In confirmation of this view, let us glance at the classification of varieties, which are believed or known to have descended from one species. These are grouped under species, with sub-varieties under varieties; and with our domestic productions, several other grades of difference are requisite, as we have seen with pigeons.\"",
      "\"We can understand why a species or a group of species may depart, in several of its most important characteristics, from its allies, and yet be safely classed with them.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies as the primary persuasive tool \u2014 develop a parallel case from another domain (language evolution, domestic breeding) and work through it in enough detail that the reader sees the structural correspondence without being told.",
      "Deploy rhetorical questions to introduce objections or pivot the argument: frame the question as something a skeptical reader might ask, then answer it \u2014 this creates a dialogic quality within the monologue.",
      "Use anaphoric repetition to build cumulative force: repeat a sentence-opening structure ('he includes\u2026 he includes\u2026') to hammer home a pattern through enumeration.",
      "Employ the hypothetical thought experiment to test principles: construct vivid, sometimes absurd scenarios ('what should be done if a perfect kangaroo were seen to come out of the womb of a bear?') to stress-test the logic.",
      "Use em dashes sparingly, for parenthetical clarifications or dramatic interjections that break the formal cadence: the dash signals an aside that the author could not resist inserting.",
      "Reference specific, concrete examples by name (Marshall the agriculturist, Steenstrup's alternate generations, Monochanthus/Myanthus/Catasetum) to ground abstract principles in observable reality."
    ],
    "do_not": [
      "Do not use metaphors for decorative effect \u2014 every figurative comparison must serve the argument by illuminating a structural parallel.",
      "Do not use exclamation marks or exclamatory constructions \u2014 persuasion comes from accumulated evidence and careful reasoning, never from emotional emphasis.",
      "Do not use lists formatted with bullet points or numbered items \u2014 enumeration should be woven into the sentence structure."
    ],
    "evidence": [
      "\"But it may be asked, what ought we to do, if it could be proved that one species of kangaroo had been produced, by a long course of modification, from a bear?\"",
      "\"He includes monsters; he includes varieties, not solely because they closely resemble the parent-form, but because they are descended from it.\"",
      "\"let it be the mere inflection of the angle of the jaw, the manner in which an insect's wing is folded, whether the skin be covered by hair or feathers\u2014if it prevail throughout many and different species, especially those having very different habits of life, it assumes high value\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open a section by stating the theoretical principle to be illustrated, then immediately signal the method of illustration: 'It may be worth while to illustrate this view of classification, by taking the case of languages.'",
      "Begin new movements within the text with bridging phrases that explicitly connect what came before to what comes next: 'In confirmation of this view,' 'Thus, on the view which I hold,' 'As descent has universally been used.'",
      "Close sections by restating the principle in stronger, more generalized terms \u2014 the ending should feel like the argument has been decisively demonstrated through the preceding evidence, leaving the reader with a firm conclusion rather than an open question.",
      "Use italics (_argumentum ad hominem_) only for Latin terms or technical phrases that require special marking.",
      "Follow the conventions of 19th-century scientific prose: no headers, no section breaks, no bullet points \u2014 the text is a continuous, flowing argument organized by logic rather than by typographic scaffolding.",
      "Use parenthetical asides within parentheses or set off by commas to add precision or caveats without breaking the main sentence flow."
    ],
    "do_not": [
      "Do not open with a dramatic hook, provocative question, or attention-grabbing device \u2014 begin with the substance of the argument itself.",
      "Do not close with a call to action, open-ended musing, or emotional appeal \u2014 close with a logical conclusion that follows necessarily from the evidence presented.",
      "Do not use modern formatting conventions (headers, subheadings, bold text, numbered lists) \u2014 the argument must be self-organizing through its logical structure alone."
    ],
    "evidence": [
      "\"It may be worth while to illustrate this view of classification, by taking the case of languages.\"",
      "\"Thus, on the view which I hold, the natural system is genealogical in its arrangement, like a pedigree\"",
      "\"We can understand why a species or a group of species may depart, in several of its most important characteristics, from its allies, and yet be safely classed with them.\""
    ]
  }
}
```

## Raw Synthesis Data

```json
{
  "author_name": "Charles Darwin",
  "sample_count": "5",
  "detected_genre": "scientific_paper",
  "one_line_description": "formal, deliberative, explicit \u2014 Victorian scientific exposition combining patient empirical accumulation with sustained logical argumentation",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking multiple subordinate and coordinate clauses, using commas and semicolons to chain qualifications, conditions, and elaborations into a single extended thought before reaching a full stop.",
      "Use semicolons to join closely related independent clauses that elaborate, contrast, or extend the same line of reasoning \u2014 treat the semicolon as a structural pivot, not a separator.",
      "Embed concessive and conditional clauses mid-sentence using 'though', 'if', 'for', 'as', 'when', 'whether', 'whilst', and 'owing to' \u2014 qualifications should interrupt the main clause to address objections before the sentence resolves.",
      "Chain coordinate clauses with 'and' to build cumulative, additive momentum, letting propositions pile up to convey the weight of accumulated evidence.",
      "Place participial phrases and appositives after main clauses to pack simultaneous actions, qualifications, or evidence into already-long sentences: 'rejecting that which is bad, preserving and adding up all that is good.'",
      "Deploy parallel clause structures within long sentences to create internal rhythm and reinforce logical symmetry: mirror the grammatical frame when contrasting or comparing.",
      "When a short sentence appears, use it exclusively to deliver a decisive verdict or emphatic pivot after extended deliberation \u2014 it should feel like a conclusion snapping into place.",
      "Open sentences with temporal, logical, or concessive adverbials ('Lastly', 'Now', 'On the other hand', 'Not that') to signal the sentence's argumentative function before the main clause arrives."
    ],
    "do_not": [
      "NEVER write in clipped, staccato prose \u2014 avoid sequences of short declarative sentences without subordination.",
      "NEVER use sentence fragments or incomplete thoughts as stylistic devices \u2014 every sentence must be grammatically complete.",
      "NEVER front-load the conclusion and then explain \u2014 build through conditions and evidence toward the resolution at the sentence's end.",
      "NEVER use dashes or parentheticals as primary clause-separation tools \u2014 prefer commas and semicolons."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person singular ('I') when stating personal judgment, belief, or doubt: 'I believe', 'I am inclined to think', 'I can see no reason to doubt.'",
      "Use first-person plural ('we') as the default pronoun for shared inquiry, drawing the reader in as collaborator: 'we shall best understand', 'we may safely conclude', 'we have to make out.'",
      "Maintain a tone of earnest, patient authority \u2014 express confidence through the cumulative weight of reasoning rather than bold declarative assertions.",
      "Signal intellectual honesty by openly acknowledging uncertainty: use 'as I believe', 'I am not at all satisfied', 'it seems to me', 'I doubt whether' to mark claims as judgment rather than established fact.",
      "Use impersonal constructions ('it may be said', 'let it be borne in mind', 'it may be concluded') to present claims as general truths or shared premises.",
      "Never use contractions \u2014 maintain full formal constructions throughout ('do not', 'can not', 'would not').",
      "When referencing other scholars, name them directly and characterize their contributions with respectful precision before stating agreement or disagreement.",
      "Personify Nature as a deliberate agent when contrasting natural and human selection \u2014 'She can act on every internal organ' \u2014 to create vivid conceptual contrast."
    ],
    "do_not": [
      "NEVER adopt a casual, conversational, or irreverent tone \u2014 no colloquialisms, slang, humor, irony, or sarcasm.",
      "NEVER address the reader with 'you' directly \u2014 maintain the inclusive 'we' or use impersonal constructions.",
      "NEVER express certainty where evidence is incomplete \u2014 always hedge on specifics while remaining confident about the overarching framework.",
      "NEVER hide behind purely impersonal passive constructions to avoid taking a stance \u2014 the author's presence and judgment must remain visible."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments by cumulative induction: stack specific empirical cases one after another until the accumulated weight of evidence makes the conclusion feel inevitable.",
      "Introduce claims through a chain of conditional reasoning: establish premises, pose a rhetorical question that makes only one answer possible, then state the conclusion.",
      "Build arguments by analogy between the familiar and the unfamiliar \u2014 use a known domain (domestication, languages, one taxonomic group) to illuminate an unknown case, developing the parallel in full detail.",
      "Construct extended hypothetical scenarios and thought experiments to make abstract principles concrete, walking through consequences step by step.",
      "Handle counterarguments preemptively: raise potential objections in the form of rhetorical questions or conditional clauses, state the opposing view fairly, then demonstrate why it does not undermine the central thesis.",
      "Move from particular to general: begin with specific observed facts and named experiments, then widen to the pattern they suggest, then state the theoretical implication.",
      "Acknowledge uncertainty openly and explain why evidence is insufficient before presenting what the available evidence does support.",
      "Link consecutive arguments with logical connectives that signal the reasoning chain: 'for', 'hence', 'nor', 'and as', 'but', 'so that', 'thus'."
    ],
    "do_not": [
      "NEVER begin arguments with bold, unsupported assertions \u2014 always build toward the claim through layered reasoning.",
      "NEVER dismiss counterarguments curtly \u2014 acknowledge them, state them fairly, then dismantle them with evidence and reasoning.",
      "NEVER present conclusions as certain when the mechanism is unknown \u2014 separate confident pattern recognition from uncertain causal explanation.",
      "NEVER jump between unrelated ideas \u2014 every passage should connect causally or logically to the preceding one."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Treat paragraphs as sustained argumentative units \u2014 each paragraph is a continuous logical discourse that moves through multiple phases: establishing premises, developing reasoning, offering examples, addressing complications, and arriving at conclusions.",
      "Open new argumentative threads with imperative invitations or frame-setting constructions: 'Let it be borne in mind', 'We shall best understand \u2026 by taking the case of', 'We will now consider.'",
      "Sequence ideas within paragraphs through cumulative logic: claim, illustration, counterpoint, further illustration, qualified conclusion \u2014 with each step flowing from the previous through explicit logical connectives.",
      "Use internal pivots marked by 'But', 'Nor', 'On the other hand', 'Not that' to shift direction within a paragraph without breaking to a new one \u2014 the paragraph absorbs turns and counter-turns.",
      "Alternate between empirical evidence (specific experiments, named researchers, particular species) and interpretive commentary within the same passage.",
      "Close argumentative sequences by returning to the theoretical framework and stating what the accumulated evidence implies, or by providing a vivid concrete illustration that crystallizes the abstract argument.",
      "When transitioning to a new sub-topic, explicitly name the shift with bridging phrases: 'In regard to animals', 'This case leads me to refer to', 'Now let us turn to.'"
    ],
    "do_not": [
      "NEVER break the argument into many small paragraphs \u2014 sustain long, continuous stretches of reasoning within a single paragraph.",
      "NEVER use bullet points, numbered lists, or any non-prose formatting within the body of the argument.",
      "NEVER use abrupt transitions or white space to signal topic shifts \u2014 weave transitions into the logical flow of the prose itself.",
      "NEVER separate evidence from interpretation into distinct blocks \u2014 weave them together in the same passage."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies as the primary persuasive engine \u2014 sustain a single analogy across multiple sentences, developing the parallel case in enough detail that the reader sees the structural correspondence without being told.",
      "Use rhetorical questions at critical argumentative junctures to make the reader feel the inevitability of the conclusion: frame the question so only one answer is possible.",
      "Deploy anaphoric repetition of sentence-opening structures to build cumulative force: repeat the grammatical frame when enumerating or contrasting.",
      "Employ antithesis as parallel balanced clauses to sharpen contrasts: mirror syntax when opposing two ideas within the same sentence.",
      "Use imperative constructions ('Let it be borne in mind', 'Let it be remembered') to direct the reader's attention to premises that must be held in mind.",
      "Catalog concrete natural examples in quick succession \u2014 cite specific species, breeds, geographic locations, and named researchers to give empirical weight to abstract claims.",
      "Use reductio ad absurdum to discredit alternatives: push the opposing view to its logical conclusion and show it produces something absurd.",
      "Use 'namely' and 'for instance' as structural pillars for moving from generalization to specific illustration.",
      "Employ vivid comparative images drawn from natural history, agriculture, or theology to make abstract arguments concrete."
    ],
    "do_not": [
      "NEVER use metaphors for decorative effect \u2014 every figurative device must serve the argument directly by illuminating a structural parallel.",
      "NEVER use analogies from modern technology, pop culture, or colloquial life \u2014 draw comparisons from the natural world, agriculture, domestic breeding, or natural philosophy.",
      "NEVER use sarcasm, hyperbole for comic effect, or deflating understatement \u2014 maintain earnest grandeur throughout.",
      "NEVER repeat a point by restating it in different words \u2014 instead, repeat it by showing it in a different empirical case."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by establishing the intellectual context: name the question or debate under discussion, signal your scope, and invite the reader to hold premises in mind before the argument begins.",
      "Begin the central argument with either a logical frame-setting construction ('Let it be borne in mind') or by plunging directly into empirical evidence.",
      "Use italicized, formally titled subsection headings in the style of Victorian treatises to demarcate major structural divisions.",
      "Close with a vivid concrete illustration that crystallizes the abstract argument into something tangible, or with a carefully qualified synthetic statement that acknowledges both the general trend and its exceptions.",
      "Introduce defined terms formally within the argument itself as a rhetorical event: 'This preservation of favourable variations and the rejection of injurious variations, I call Natural Selection.'",
      "Structure the overall piece as progressive deepening: begin with the general principle, move to hypothetical cases, then to specific natural examples, and close by demonstrating the principle's power.",
      "Follow the genre conventions of Victorian scientific exposition: continuous formal prose, no bullet points, no numbered sections, no bold text \u2014 the argument flows as connected prose organized by logic rather than typographic scaffolding.",
      "Weave citations and attributions into the prose itself rather than using footnotes or endnotes.",
      "Use 'etc.' freely when enumerating examples to signal breadth without exhaustiveness."
    ],
    "do_not": [
      "NEVER open with an anecdote, joke, provocative claim, or dramatic hook \u2014 open with the substance of the inquiry.",
      "NEVER close with a summary that merely restates the thesis, a call to action, or an open-ended musing \u2014 close with reasoned inference, qualified prediction, or a concrete illustrative image.",
      "NEVER use modern formatting conventions \u2014 no headers with #, no bold for emphasis, no numbered steps, no bullet points within the argument."
    ]
  },
  "signature_phrases": {
    "use": [
      "Let it be borne in mind",
      "Let it be remembered",
      "We shall best understand",
      "as I believe",
      "I am inclined to believe",
      "I can see no reason to doubt",
      "it may be said that",
      "I venture confidently",
      "it may be concluded that",
      "Can we doubt",
      "we may safely conclude",
      "on the other hand",
      "for instance",
      "namely",
      "so that",
      "Not that",
      "I am not at all satisfied",
      "He would be a bold man who",
      "we have to make out",
      "how exactly parallel",
      "it should be borne in mind",
      "a mere mockery",
      "etc.",
      "On the view which I hold",
      "silently and insensibly working"
    ],
    "never_use": [
      "basically",
      "essentially",
      "obviously",
      "actually",
      "honestly",
      "kind of",
      "sort of",
      "like (as filler)",
      "super",
      "really (as intensifier)",
      "interestingly",
      "importantly",
      "it goes without saying",
      "at the end of the day",
      "in terms of",
      "game-changer",
      "paradigm shift",
      "key takeaway",
      "bottom line",
      "unpacking",
      "doubling down",
      "let's dive in",
      "moving forward",
      "leverage (as verb)",
      "robust",
      "utilize"
    ]
  },
  "revision_guidance": [
    "Replace contractions with full forms: 'don't' becomes 'do not', 'it's' becomes 'it is'.",
    "Convert sequences of short declarative sentences into single compound-complex sentences joined by semicolons and subordinating conjunctions.",
    "Replace 'you' with 'we' or impersonal constructions ('it may be', 'let it be borne in mind').",
    "Replace modern hedges ('basically', 'kind of', 'I think maybe') with Victorian epistemic markers ('as I believe', 'I am inclined to think', 'it seems to me').",
    "Replace abstract claims with specific empirical illustrations introduced by 'for instance' or 'namely'.",
    "Convert bullet points and numbered lists into flowing prose with logical connectives.",
    "Replace modern metaphors and colloquial analogies with comparisons drawn from natural history, agriculture, or domestic breeding.",
    "Add subordinate clauses with 'for', 'though', 'if', 'as', and 'when' to embed qualifications and causation directly into existing sentences.",
    "Replace bold assertions with conditional reasoning chains: premise, rhetorical question, conclusion.",
    "Convert passive constructions that hide the author's judgment into first-person declarations: 'it is believed' becomes 'I believe'.",
    "Merge single-sentence paragraphs into the surrounding argumentative block."
  ]
}
```