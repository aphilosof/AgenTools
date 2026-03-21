# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** formal, involved, explicit — principled moral authority grounded in concrete physical detail, with confessional honesty and deliberate, clause-laden prose

## Corpus Metrics (averaged)

```
Metric                                   Value
-----------------------------------------------
contraction_rate                          0.56
fw_articles                               8.98
fw_conjunctions                           5.06
fw_demonstratives                         2.00
fw_hedges                                 1.00
fw_intensifiers                           1.30
fw_modals_aux                             6.40
fw_negation                               1.25
fw_prepositions                          11.07
fw_relatives                              1.44
hapax_ratio                              19.73
open_adverb_pct                           3.51
open_article_pct                         13.83
open_conjunction_pct                      8.73
open_pronoun_pct                         25.43
open_subordinate_pct                      5.44
para_avg_sentences                        4.67
para_avg_words                           89.44
para_pct_long                            34.42
para_pct_single_sent                     47.72
para_stddev_sentences                     4.71
polysyndeton_pct                          2.79
punct_colons_per_100w                     0.43
punct_comma_before_conj                   0.37
punct_commas_per_sent                     1.41
punct_dashes_per_100w                     0.85
punct_ellipses_per_100w                   0.00
punct_exclamations_per_100w               0.32
punct_parens_per_100w                     0.20
punct_questions_per_100w                  0.18
punct_quotes_per_100w                     0.59
punct_semicolons_per_sent                 0.06
sent_avg_length                          20.73
sent_length_max                          69.00
sent_length_min                           2.00
sent_length_stddev                       12.35
sent_median_length                       19.40
sent_pct_long                            30.22
sent_pct_medium                          46.29
sent_pct_short                           23.49
type_token_ratio                          0.73
word_avg_length                           4.38
word_pct_long                            11.38
word_pct_monosyllable                    69.61
word_pct_short                           61.24
```

## Vocabulary Profile

**Register score:** 0.18 (0=casual, 1=formal)

**Top 20 words:**
- the: 51.66/1000
- of: 32.53/1000
- and: 28.32/1000
- a: 27.29/1000
- to: 24.72/1000
- i: 23.81/1000
- was: 17.16/1000
- in: 16.28/1000
- that: 15.09/1000
- it: 15.06/1000
- is: 9.0/1000
- not: 8.97/1000
- for: 7.47/1000
- with: 7.43/1000
- at: 7.28/1000
- but: 7.09/1000
- had: 6.93/1000
- you: 6.78/1000
- as: 6.46/1000
- my: 6.09/1000

## Per-Sample Analyses

### sample-1.txt (5300 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "5300",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence by chaining two or three independent clauses with commas and coordinating conjunctions (and, but, or), creating a rolling, discursive momentum that carries the reader through an extended thought before reaching a full stop.",
      "Use complex sentences that embed subordinate clauses (which, that, if, when, because) mid-sentence to layer qualifications and conditions into the main assertion, so the reader absorbs caveats without the argument losing forward drive.",
      "Deploy parallelism within sentences by repeating grammatical structures in series \u2014 especially noun phrases or verb phrases separated by commas \u2014 to build cumulative rhetorical force: 'not X, not Y, not Z, but...'",
      "Follow a long, multi-clause sentence with a short, declarative punch that delivers the core verdict or pivot, creating a rhythm of elaboration followed by blunt conclusion.",
      "Open sentences frequently with transitional or framing phrases ('Now,', 'In our time,', 'But if', 'As I have tried to show,') that orient the reader before the main clause arrives.",
      "Use the passive voice sparingly and only when the agent is genuinely irrelevant or when constructing an ironic demonstration of the very fault being criticized."
    ],
    "do_not": [
      "Do not write sequences of identically structured sentences \u2014 vary clause order, length, and complexity so no two consecutive sentences feel interchangeable.",
      "Do not front-load sentences with multiple participial or prepositional phrases before reaching the subject; the subject should arrive early enough to anchor the reader.",
      "Do not use sentence fragments for stylistic effect \u2014 every sentence should be grammatically complete, even the short punchy ones."
    ],
    "evidence": [
      "A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.",
      "The point is that the process is reversible.",
      "It consists in gumming together long strips of words which have already been set in order by someone else, and making the results presentable by sheer humbug."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person authority who speaks collegially but firmly \u2014 use 'I' to take personal responsibility for claims and 'we/one' to draw the reader into shared culpability or shared standards.",
      "Maintain a tone that is simultaneously earnest and irritable \u2014 genuinely concerned about the problem, impatient with offenders, but never sneering or cruel. The anger should feel principled, not petty.",
      "Signal confidence through plain, unhedged declarative statements ('The great enemy of clear language is insincerity') rather than through intensifiers or emphatic punctuation.",
      "When conceding a point or expressing uncertainty, do so explicitly and briefly ('I do not want to exaggerate', 'this is a guess which I have not sufficient knowledge to verify') then move on \u2014 never dwell in the hedge.",
      "Use contractions naturally in passages that address the reader directly or make conversational asides, but avoid them in formal declarations or when delivering the essay's central maxims.",
      "Address the reader with 'you' when issuing imperatives or inviting them to test a claim themselves, creating a sense of shared experiment rather than lecture."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic register \u2014 always let the author's personality, opinions, and even self-criticism be visible.",
      "Do not use sarcasm or mockery as the primary mode; instead, let the absurdity of the examples speak for itself and reserve editorial comment for measured, pointed judgments.",
      "Do not hedge core claims with multiple qualifiers \u2014 state the position and let evidence do the work."
    ],
    "evidence": [
      "I said earlier that the decadence of our language is probably curable.",
      "Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.",
      "You can shirk it by simply throwing your mind open and letting the ready-made phrases come crowding in."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with the prevailing wrong assumption or conventional wisdom, stated fairly and in its strongest form, then dismantle it \u2014 begin by conceding what most people believe before showing why they are wrong.",
      "Anchor abstract arguments in concrete, physical analogies drawn from everyday life \u2014 drinking and failure, tea leaves blocking a sink, cavalry horses answering a bugle, a cuttlefish spurting ink \u2014 so the reader can see and feel the claim.",
      "Prove claims by exhibition: rather than merely asserting that bad writing exists, quote extended specimens and then dissect them point by point, forcing the reader to see the faults firsthand.",
      "Structure the overall argument as a causal loop: show that cause and effect reinforce each other (bad thought produces bad language, bad language produces bad thought), then argue the loop can be broken.",
      "Handle counterarguments preemptively by stating the opponent's position in their own terms, granting partial validity ('So far as the general tone or spirit of a language goes, this may be true'), then narrowing the rebuttal to the specific ground where the opponent is wrong.",
      "Build toward prescriptive rules only after the full diagnostic has been laid out \u2014 earn the right to prescribe by demonstrating thorough understanding of the disease."
    ],
    "do_not": [
      "Do not assert a claim without immediately providing a concrete example, analogy, or specimen that makes the claim visible and testable.",
      "Do not dismiss opposing views outright \u2014 always state what grain of truth they contain before showing where they fail.",
      "Do not introduce a new category or concept without defining it through examples rather than abstract definition."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.",
      "A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks. It is rather the same thing that is happening to the English language."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a thesis or framing assertion that announces the paragraph's purpose plainly, then immediately follow with evidence, examples, or elaboration \u2014 do not bury the point.",
      "Within paragraphs, sequence ideas as: claim \u2192 concrete examples (often listed in series) \u2192 analysis of the examples \u2192 broader implication or pivot to the next idea.",
      "Close paragraphs with a sentence that either (a) delivers a pointed summative judgment, (b) pivots forward to what comes next ('I will come back to this presently'), or (c) lands a memorable image or analogy that crystallizes the paragraph's point.",
      "Connect paragraphs through explicit logical signposts \u2014 'Now that I have made this catalogue...', 'As I have tried to show...', 'I said earlier that...' \u2014 so the reader always knows where they are in the overall argument.",
      "Use enumeration and cataloguing within paragraphs: list examples in comma-separated series, sometimes with brief parenthetical commentary, to build cumulative force before delivering the interpretive conclusion.",
      "When a paragraph introduces a taxonomy or category (e.g., types of bad writing), use a capitalized heading or label, then immediately define the category through examples rather than abstract description."
    ],
    "do_not": [
      "Do not write paragraphs that meander through multiple unrelated points \u2014 each paragraph should serve one clear function in the argument.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 always land on something definite, whether a judgment, a pivot, or an image.",
      "Do not rely on implicit transitions between paragraphs; always signal the logical relationship (contrast, consequence, elaboration, new category) explicitly."
    ],
    "evidence": [
      "Each of these passages has faults of its own, but, quite apart from avoidable ugliness, two qualities are common to all of them. The first is staleness of imagery; the other is lack of precision.",
      "Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.",
      "I will come back to this presently, and I hope that by that time the meaning of what I have said here will have become clearer."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, original similes and metaphors drawn from physical, tangible domains \u2014 animals, household objects, bodily sensations \u2014 to make abstract arguments concrete: 'like a cuttlefish spurting out ink', 'like tea leaves blocking a sink', 'like the sections of a prefabricated hen-house'.",
      "Deploy the technique of parody-by-translation: take a passage of clear, concrete language and rewrite it in the inflated style being criticized, then dissect the contrast \u2014 this is more devastating than any direct critique.",
      "Use cataloguing and enumeration as a primary rhetorical weapon \u2014 list examples in rapid succession, separated by commas, to overwhelm the reader with sheer volume of evidence before delivering the verdict.",
      "Employ the colon-and-pivot structure: describe a concrete atrocity or situation in vivid physical detail, then follow with a colon and the euphemistic label that conceals it ('this is called pacification'), letting the gap between reality and language do the argumentative work.",
      "Use rhetorical questions sparingly and only to invite the reader to test a claim ('what is a \"rift\", for instance?'), not as a substitute for making an assertion.",
      "Use direct imperatives ('Look again', 'Consider', 'Never use') when prescribing rules or directing the reader's attention, creating an active, participatory relationship."
    ],
    "do_not": [
      "Do not use dead or dying metaphors \u2014 every figurative expression must evoke a specific visual image; if it doesn't, replace it with plain language.",
      "Do not use rhetorical questions as a crutch to avoid stating a position \u2014 if you have a point, state it directly.",
      "Do not use repetition merely for emphasis; use it structurally (anaphora in a list of rules, parallel 'this is called...' constructions) to create rhythm and pattern that reinforces the argument."
    ],
    "evidence": [
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.",
      "his words, like cavalry horses answering the bugle, group themselves automatically into the familiar dreary pattern."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the conventional wisdom on the topic \u2014 what 'most people' believe \u2014 then immediately begin undermining it, so the reader is hooked by the promise of a contrarian argument grounded in evidence.",
      "Establish the stakes in the first paragraph: make clear why this seemingly narrow or technical subject (language) matters to something large and urgent (politics, thought, civilization).",
      "Close the essay with a set of concrete, numbered rules or prescriptions that distill the entire argument into actionable directives \u2014 then immediately undercut the rules' apparent simplicity by acknowledging their limitations ('One could keep all of them and still write bad English').",
      "End with a final paragraph that returns to the opening's political stakes, creating a circular structure where the conclusion reframes the introduction at a higher level of understanding.",
      "Use section headings (capitalized labels) to divide the essay's body into taxonomic categories, giving the piece the organizational clarity of a reference document while maintaining essayistic voice throughout.",
      "Use parenthetical references and numbered footnotes to cross-reference earlier examples, creating an internal web of evidence that rewards attentive reading.",
      "Use em dashes for parenthetical asides that add a conversational, self-interrupting quality \u2014 as if the author cannot help but qualify or elaborate in real time."
    ],
    "do_not": [
      "Do not open with a personal anecdote or a scene \u2014 open with the intellectual landscape, the wrong idea that needs correcting.",
      "Do not close with vague inspiration or open-ended musing \u2014 close with specific, actionable prescriptions followed by a sober acknowledgment of their limits.",
      "Do not use formatting (bold, italics, bullet points) as a substitute for argumentative structure \u2014 the argument should be clear from the prose alone, with formatting used only for categorical labels and quoted specimens."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "Break any of these rules sooner than say anything outright barbarous.",
      "one ought to recognise that the present political chaos is connected with the decay of language, and that one can probably bring about some improvement by starting at the verbal end."
    ]
  }
}
```

### sample-2.txt (3370 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3370,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone of prose from compound and compound-complex sentences, chaining multiple independent clauses with 'and', 'but', and commas to create a sense of events accumulating or thoughts unfolding in real time.",
      "Use subordinate clauses and participial phrases to pack contextual detail into sentences without breaking the narrative flow \u2014 embed explanations, qualifications, and background as parenthetical insertions mid-sentence.",
      "Deploy the em dash to insert asides, restatements, or dramatic qualifications that interrupt the main clause \u2014 use this as a signature structural move for adding commentary or correcting the reader's assumptions.",
      "When making a philosophical or psychological point, let sentences grow long by stacking clause upon clause, mirroring the layered complexity of the thought itself: 'I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys.'",
      "Use semicolons sparingly to yoke together two independent clauses that form a balanced opposition or logical pair, creating a weighty, deliberative rhythm.",
      "Vary sentence openings \u2014 alternate between temporal markers ('When I pulled the trigger'), pronoun subjects ('I had halted'), prepositional phrases ('At the bottom'), and coordinating conjunctions ('And suddenly I realized') to prevent monotony."
    ],
    "do_not": [
      "Do not write in choppy, disconnected simple sentences that read like a list of facts \u2014 always chain related actions and observations together.",
      "Do not use elaborate periodic sentences where the main clause is withheld until the very end for dramatic effect \u2014 this voice delivers the main point early, then qualifies and extends it.",
      "Do not use sentence fragments for stylistic emphasis or poetic effect \u2014 maintain grammatical completeness even in short sentences."
    ],
    "evidence": [
      "It had already destroyed somebody's bamboo hut, killed a cow and raided some fruit-stalls and devoured the stock; also it had met the municipal rubbish van and, when the driver jumped out and took to his heels, had turned the van over and inflicted violences upon it.",
      "Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.",
      "He neither stirred nor fell, but every line of his body had altered."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a self-aware, self-critical narrator who is honest about his own contradictions, cowardice, and moral failures \u2014 confess uncomfortable truths about yourself without self-pity.",
      "Maintain a tone that is simultaneously world-weary and alert \u2014 the voice of someone who has seen through the pretenses of his situation but remains emotionally entangled in it.",
      "Address the reader directly at key moments with second-person asides ('ask any Anglo-Indian official, if you can catch him off duty') to create sudden intimacy and the sense of shared complicity.",
      "Use parenthetical remarks in a confiding, slightly sardonic register to insert personal opinions or corrections that break the narrative frame: '(Never tell me, by the way, that the dead look peaceful.)'",
      "Signal certainty through plain declarative statements ('It was perfectly clear to me what I ought to do') and uncertainty through self-interruption and qualification ('I thought then and I think now').",
      "When expressing moral or political positions, undercut any hint of righteousness immediately \u2014 follow a principled statement with an admission of ignoble feelings: 'I was all for the Burmese and all against their oppressors' is followed by confessing the desire to 'drive a bayonet into a Buddhist priest's guts.'",
      "Use contractions freely in reflective and narrative passages to maintain a conversational, spoken quality, but drop them when the register shifts to more formal or abstract pronouncements."
    ],
    "do_not": [
      "Do not adopt a detached, objective, journalistic tone \u2014 this voice is deeply personal and emotionally implicated in what it describes.",
      "Do not moralize or lecture the reader from a position of moral superiority \u2014 always implicate yourself in the system you critique.",
      "Do not use irony that is merely clever or witty \u2014 the humor here is bitter, arising from genuine moral discomfort, not from wanting to entertain."
    ],
    "evidence": [
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny, as something clamped down, in saecula saeculorum, upon the will of prostrate peoples; with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts.",
      "(Somehow it always seems worse to kill a large animal.)",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis not as an abstract claim but as a concrete experience from which the insight emerges \u2014 let the argument grow organically from narrative rather than being stated up front and then supported.",
      "Use the pattern: narrate an event \u2192 reveal the internal conflict it triggered \u2192 extract a broader political or philosophical principle from the conflict. The argument is always embodied in story.",
      "Acknowledge your own contradictions as evidence for the argument \u2014 personal hypocrisy and moral confusion are not weaknesses in the logic but rather proof of the systemic forces being described.",
      "Handle counterarguments by embedding them in the narrator's own divided mind rather than attributing them to an external opponent: 'I did not want to shoot the elephant' vs. 'I had got to shoot the elephant' \u2014 the dialectic is internal.",
      "Move between the particular and the general in a recursive pattern: describe a specific moment, extract a general principle, then return to the specific narrative to show the principle in action.",
      "Use conditional and hypothetical reasoning to explore what could have happened ('If the elephant charged and I missed him, I should have about as much chance as a toad under a steam-roller') as a way of dramatizing the stakes of decisions.",
      "Hedge selectively \u2014 use hedges not to weaken claims but to signal honest uncertainty about your own motives or the complexity of the situation: 'I dare say', 'I think now', 'it seemed to me'."
    ],
    "do_not": [
      "Do not construct arguments as thesis-evidence-conclusion sequences \u2014 this voice discovers its argument through the act of narrating, not before it.",
      "Do not present opposing views as straw men to be knocked down \u2014 instead, hold contradictory positions simultaneously and let the reader feel the tension.",
      "Do not use abstract reasoning disconnected from concrete, sensory experience \u2014 every general claim must be grounded in a specific image or event."
    ],
    "evidence": [
      "And it was at this moment, as I stood there with the rifle in my hands, that I first grasped the hollowness, the futility of the white man's dominion in the East.",
      "I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys. He becomes a sort of hollow, posing dummy, the conventionalized figure of a sahib.",
      "Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear situational or temporal anchor that orients the reader in the scene ('The orderly came back in a few minutes', 'But at that moment I glanced round at the crowd').",
      "Build paragraphs by layering detail upon detail in a cumulative pattern \u2014 start with the situation, add complicating observations, then arrive at an insight or turning point near the end.",
      "Close key paragraphs with a punch \u2014 a terse, morally loaded statement that crystallizes the meaning of everything that came before: 'That would never do.' or 'The crowd would laugh at me.'",
      "Use paragraphs that contain a single dramatic revelation or narrative beat as structural pivots \u2014 these create breathing room and emphasis between longer, denser paragraphs.",
      "Connect paragraphs through adversative transitions ('But') to create a dialectical movement \u2014 each new paragraph often counters, complicates, or redirects the one before it.",
      "Within paragraphs, sequence ideas from external observation to internal reflection \u2014 describe what you saw, then reveal what you thought and felt about it."
    ],
    "do_not": [
      "Do not open paragraphs with topic sentences that announce what the paragraph will argue \u2014 let the paragraph's point emerge from the accumulated detail.",
      "Do not use explicit transition phrases like 'furthermore', 'in addition', 'consequently' \u2014 connect paragraphs through narrative momentum, temporal markers, or adversative conjunctions ('But', 'And').",
      "Do not end paragraphs with neat summaries or restatements \u2014 prefer endings that push the reader forward or leave a provocative thought hanging."
    ],
    "evidence": [
      "But I did not want to shoot the elephant. I watched him beating his bunch of grass against his knees, with that preoccupied grandmotherly air that elephants have.",
      "In the end I could not stand it any longer and went away.",
      "I had got to shoot the elephant. I had committed myself to doing it when I sent for the rifle."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended simile and analogy drawn from the mundane and physical world to make abstract situations visceral: compare the elephant's death to a huge rock toppling, compare imperial power dynamics to an actor on a stage, compare the narrator's chances to 'a toad under a steam-roller'.",
      "Employ catalogues \u2014 lists of concrete sensory details joined by commas and 'and' \u2014 to build cumulative force: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos'.",
      "Use repetition of key phrases ('I had got to', 'a sahib has got to') to hammer home the sense of compulsion and inevitability \u2014 let the repeated phrase become almost a refrain.",
      "Deploy parenthetical asides as a rhetorical device for injecting personal commentary, correcting received wisdom, or making sardonic observations that puncture the narrative's solemnity.",
      "Use antithesis to dramatize moral contradictions by placing opposed ideas in parallel structures: 'seemingly the leading actor of the piece; but in reality I was only an absurd puppet.'",
      "Employ precise, concrete physical description as a form of argument \u2014 the detailed description of the dead coolie's body, the elephant's slow death, are not ornament but evidence for the essay's moral claims."
    ],
    "do_not": [
      "Do not use metaphors that are literary, ornate, or self-consciously poetic \u2014 all figurative language must feel plain-spoken and drawn from observable, physical experience.",
      "Do not use rhetorical questions as a primary persuasive device \u2014 this voice asserts and confesses rather than asking the reader to draw conclusions.",
      "Do not employ alliteration, assonance, or other sound-based devices conspicuously \u2014 the prose rhythm comes from syntax, not sonic patterning."
    ],
    "evidence": [
      "as his hind legs collapsed beneath him he seemed to tower upward like a huge rock toppling, his trunk reaching skyward like a tree",
      "The thick blood welled out of him like red velvet, but still he did not die.",
      "He wears a mask, and his face grows to fit it."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, grounding statement of place, time, and situation that immediately establishes the narrator's position and predicament \u2014 no evasion, no scene-setting atmosphere: 'In Moulmein, in Lower Burma, I was hated by large numbers of people.'",
      "Follow the opening sentence with a self-deprecating qualification or ironic aside that establishes the narrator's tone and signals that this will be a confession, not a boast.",
      "Structure the essay as a narrative arc \u2014 a single extended anecdote \u2014 with the philosophical argument embedded in and emerging from the action, not imposed upon it.",
      "Close with a final sentence that is deceptively casual but delivers the essay's deepest irony or most damning self-revelation: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Use the closing to circle back to the essay's core tension without resolving it \u2014 the ending should leave the moral problem open and the narrator still implicated.",
      "Format as continuous prose paragraphs with no headers, subheadings, bullet points, or other structural apparatus \u2014 the essay's organization comes entirely from the narrative's chronological and reflective movement.",
      "Use em dashes for dramatic parenthetical insertions and for restatements that sharpen or reframe a claim. Use parentheses for more intimate, confiding asides."
    ],
    "do_not": [
      "Do not open with a provocative question, a quotation, or an abstract thesis statement \u2014 begin in medias res with a concrete autobiographical situation.",
      "Do not close with a moral lesson, call to action, or tidy resolution \u2014 end on a note of ironic self-awareness that implicates the narrator without excusing him.",
      "Do not use any formatting devices (headers, lists, bold, italics for emphasis) \u2014 the voice relies entirely on prose rhythm and word choice for emphasis and structure."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "One day something happened which in a roundabout way was enlightening. It was a tiny incident in itself, but it gave me a better glimpse than I had had before of the real nature of imperialism \u2014 the real motives for which despotic governments act."
    ]
  }
}
```

### sample-3.txt (1961 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1961,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking concrete physical details in series, separated by commas \u2014 pile observation upon observation within a single sentence to create a cinematic, accumulative effect: 'At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.'",
      "Chain clauses with 'and' to create a forward-marching, processional rhythm that mirrors physical movement and temporal sequence: 'passed a chain through his handcuffs and fixed it to their belts, and lashed his arms tight to his sides.'",
      "When shifting from narration to reflection, move from concrete detail into abstract statement within the same sentence or across two adjacent sentences \u2014 the concrete triggers the abstract: 'When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.'",
      "Use appositional phrases to layer identifying detail onto characters at the moment of introduction: 'Francis, the head jailer, a fat Dravidian in a white drill suit and gold spectacles.'",
      "Alternate between longer, detail-rich descriptive sentences and short declarative ones that land like verdicts or pivot points, creating a rhythm of accumulation followed by blunt finality."
    ],
    "do_not": [
      "Do not write sentences that are purely abstract without grounding in sensory detail \u2014 every reflective passage must be anchored to something seen, heard, or felt.",
      "Do not use subordinating constructions that bury the main action \u2014 keep the main clause direct and front-loaded, with modification trailing after.",
      "Do not use flowery or ornate syntax; clause-chaining should feel workmanlike and reportorial, not literary or baroque."
    ],
    "evidence": [
      "It was a high, reiterated cry of 'Ram! Ram! Ram! Ram!', not urgent and fearful like a prayer or a cry for help, but steady, rhythmical, almost like the tolling of a bell.",
      "He was dangling with his toes pointed straight downwards, very slowly revolving, as dead as a stone.",
      "All the organs of his body were working \u2014 bowels digesting food, skin renewing itself, nails growing, tissues forming \u2014 all toiling away in solemn foolery."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who is physically present but morally conflicted \u2014 participate in the events while signaling unease through what you choose to notice, not through explicit moralizing.",
      "Adopt a tone that is controlled, reportorial, and understated \u2014 let horror emerge from precise, unsentimental description rather than from emotional commentary.",
      "Use 'we' to implicate both narrator and reader in collective complicity, shifting to 'I' only at moments of private moral reckoning: 'I had never realized what it means to destroy a healthy, conscious man.'",
      "Express certainty through plain declarative statements without hedging. When uncertain, render it as physical observation ('perhaps he was counting the cries') rather than epistemic qualification.",
      "Render others' speech with their verbal tics and dialect intact \u2014 let characters reveal themselves through how they talk, not through the narrator's judgment of them.",
      "Use contractions freely in dialogue and in the narrator's informal reflective voice to maintain a conversational, non-literary register."
    ],
    "do_not": [
      "Do not editorialize or state the moral lesson explicitly \u2014 the reader must arrive at the conclusion through accumulated detail and juxtaposition.",
      "Do not adopt a superior or lecturing tone toward the people described, even when they behave callously \u2014 present their behavior with clinical precision and let the irony speak.",
      "Do not use sentimental or emotionally inflated language; maintain dry restraint even when describing atrocity."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "I found that I was laughing quite loudly. Everyone was laughing.",
      "Several people laughed \u2014 at what, nobody seemed certain."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument entirely through narrative \u2014 arrange scenes, details, and juxtapositions so the thesis emerges without ever being stated as a thesis. The structure IS the argument.",
      "Use a single small concrete detail as the fulcrum of the entire piece's meaning \u2014 one incidental physical action (stepping aside to avoid a puddle) carries the full weight of the moral insight.",
      "Place the moment of realization at the structural center of the piece, then show its aftermath radiating outward into changed perception of everything that follows.",
      "Use ironic juxtaposition as the primary persuasive device: place the solemnity of death next to trivial chatter, bureaucratic routine next to moral horror, laughter next to killing.",
      "Let counterarguments appear not as logical rebuttals but as the behavior of other characters who are comfortable with what the narrator finds unbearable \u2014 their ease is the counterargument, and the narrator never explicitly refutes it."
    ],
    "do_not": [
      "Do not state the argument in propositional form \u2014 never write 'capital punishment is wrong' or any equivalent direct claim.",
      "Do not use statistics, citations, or external authorities; the only evidence is what is seen and felt in the moment.",
      "Do not resolve the moral tension neatly \u2014 end with the narrator implicated in the same complicity as everyone else."
    ],
    "evidence": [
      "And once, in spite of the men who gripped him by each shoulder, he stepped slightly aside to avoid a puddle on the path.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "'think of all the pain and trouble you are causing to us!'"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete action, sensory detail, or time marker that establishes the scene's forward motion \u2014 'Eight o'clock struck,' 'We set out for the gallows,' 'The gallows stood in a small yard.'",
      "Within paragraphs, sequence details cinematically: establish the spatial setting, then move the camera to specific characters or objects, then capture action, then register the narrator's internal response.",
      "Use single-sentence paragraphs for dialogue exchanges to create staccato pacing during moments of tension or dark comedy, alternating with longer descriptive paragraphs.",
      "Close narrative paragraphs by landing on the most resonant or disturbing image \u2014 the last detail in a paragraph should linger: 'as dead as a stone,' 'the dead man was a hundred yards away.'",
      "When transitioning between paragraphs, advance time or space explicitly ('We set out,' 'Suddenly,' 'Then') \u2014 maintain a processional, chronological forward movement."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences \u2014 always lead with the concrete, the physical, the seen.",
      "Do not write paragraphs that are purely reflective without returning to the scene \u2014 even the essay's central meditation loops back to physical detail (nails growing, organs working).",
      "Do not use explicit logical connectives between paragraphs (however, therefore, moreover) \u2014 transitions should be spatial and temporal, not argumentative."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "There was a clanking noise, and then dead silence.",
      "We went through the big double gates of the prison, into the road."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes that compare human situations to mundane, slightly degrading objects or animals \u2014 'like yellow tinfoil,' 'like small animal cages,' 'like men handling a fish,' 'as dead as a stone' \u2014 to underscore the dehumanizing machinery of the system.",
      "Deploy em dashes to insert parenthetical detail, dramatic interruptions, or amplifying lists into sentences: 'A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.'",
      "Use repetition of key words and phrases to create incantatory effect: repeat 'Ram! Ram! Ram!' to make the reader hear what the narrator hears; repeat 'laughing' to build unease.",
      "Employ cataloguing \u2014 lists of bodily functions, physical actions, or sensory details \u2014 to build up the overwhelming materiality of a living body or a scene: 'bowels digesting food, skin renewing itself, nails growing, tissues forming.'",
      "Use the dog as a symbolic counterpoint to the humans \u2014 introduce an animal whose natural, uninhibited behavior exposes the grotesque unnaturalness of what the humans are doing.",
      "Deploy irony through understatement and tonal mismatch \u2014 describe horrific events in the same flat, bureaucratic register used for routine matters."
    ],
    "do_not": [
      "Do not use elevated literary metaphors or poetic abstractions \u2014 all figurative language must be drawn from common, everyday, even ugly objects (tinfoil, fish, flour bag, coffee).",
      "Do not use rhetorical questions to prompt the reader \u2014 let scenes do that work instead.",
      "Do not use exclamation marks in narration; reserve them exclusively for quoted speech where characters are actually shouting or exclaiming."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a flat, declarative scene-setting sentence that establishes place, weather, and mood simultaneously \u2014 drop the reader into the physical environment with no preamble: 'It was in Burma, a sodden morning of the rains.'",
      "Follow the opening sentence immediately with a striking sensory image that sets the emotional key for the piece \u2014 the second sentence should be the most vivid and metaphorical in the opening paragraph.",
      "Close the piece with a devastatingly understated final line that juxtaposes the weight of what has happened against the casualness of the characters' response \u2014 the last sentence should deliver the moral shock through proximity or bathos, not through explicit statement.",
      "Structure the essay as a chronological narrative with a single, clearly delineated moral epiphany near the center \u2014 before the epiphany, accumulate detail; after it, show the world changed by that recognition.",
      "Use direct dialogue formatted with single quotation marks. Render non-English speakers' accents and speech patterns phonetically ('iss' for 'is,' 'hass' for 'has,' 'wass' for 'was') to ground characters in their specific social and colonial context.",
      "Use no headers, no section breaks, no lists \u2014 the piece is a single unbroken prose narrative. Emphasis comes from word choice and placement, not from typographic devices."
    ],
    "do_not": [
      "Do not open with a thesis statement, a question, or a direct address to the reader \u2014 begin in the middle of the scene as if the reader has just arrived.",
      "Do not close with a summative moral, a lesson learned, or a call to action \u2014 the ending must be abrupt, understated, and leave the reader with discomfort rather than resolution.",
      "Do not break the chronological frame with flashbacks or flash-forwards \u2014 the power comes from the relentless forward march of time toward the execution and beyond it."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "'Well, sir, all hass passed off with the utmost satisfactoriness. It wass all finished \u2014 flick! like that.'"
    ]
  }
}
```

### sample-4.txt (2568 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 2568,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking multiple independent and dependent clauses with commas and coordinating conjunctions ('and', 'but'), creating a deliberate, additive prose rhythm where one thought leads naturally into the next.",
      "Use subordinate clauses and parenthetical insertions (set off by commas or dashes) to qualify, elaborate, or add context mid-sentence, so that a single sentence often contains its own counterargument or caveat.",
      "Employ periodic sentences that begin with circumstantial or temporal framing ('When I was about sixteen', 'From time to time, when I was a bit older') before arriving at the main clause.",
      "Shift to a short, declarative sentence after a long, complex one to deliver a judgment, summary, or emotional punctuation \u2014 the short sentence earns its impact from the contrast with what preceded it.",
      "Use parallel structure within sentences to create lists of qualities, motives, or actions, binding them with repeated grammatical forms ('to feel strongly about prose style, to love the surface of the earth, and to take a pleasure in solid objects')."
    ],
    "do_not": [
      "Do not write choppy, staccato sequences of short sentences in succession \u2014 the rhythm depends on long, clause-laden sentences punctuated by occasional brief ones.",
      "Do not use participial phrases or gerund openings as the dominant sentence shape; prefer finite clauses joined by conjunctions.",
      "Do not write fragments for stylistic effect \u2014 even the shortest sentences are grammatically complete."
    ],
    "evidence": [
      "\"I was the middle child of three, but there was a gap of five years on either side, and I barely saw my father before I was eight.\"",
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\"",
      "\"Good prose is like a windowpane.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person with frank, unsentimental self-disclosure \u2014 confess weaknesses, vanities, and failures without self-pity or apology, treating them as facts to be examined.",
      "Maintain a tone that is simultaneously authoritative and self-deprecating: assert opinions with confidence ('It is humbug to pretend this is not a motive') while undercutting personal claims ('every book is a failure').",
      "Use the impersonal 'one' and generic 'you' to generalize from personal experience to universal truths, shifting naturally between intimate confession and detached pronouncement.",
      "Signal certainty through plain, unhedged declaratives ('It is not easy', 'I knew where I stood'), and signal doubt through parenthetical qualifiers ('I suppose', 'I think', 'so far as I remember') rather than weak modal verbs.",
      "Use contractions selectively \u2014 employ them in passages of informal, conversational reflection but shift to uncontracted forms when making weighty, essayistic pronouncements.",
      "Treat the reader as an intelligent equal who needs no coddling \u2014 assume shared cultural knowledge and literary references without over-explaining."
    ],
    "do_not": [
      "Do not adopt a warm, encouraging, or flattering tone toward the reader \u2014 the stance is collegial and direct, never ingratiating.",
      "Do not hedge excessively or use academic qualification language ('it could be argued that', 'one might suggest'); instead state the claim and let the reader judge.",
      "Do not be emotionally effusive or lyrical about personal experiences \u2014 maintain dry, matter-of-fact honesty even when describing painful or passionate subjects."
    ],
    "evidence": [
      "\"All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\"",
      "\"It is humbug to pretend this is not a motive, and a strong one.\"",
      "\"I am not able, and do not want, completely to abandon the world view that I acquired in childhood.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Ground abstract claims in concrete autobiographical narrative \u2014 introduce a general principle through the specific personal experience that revealed it, then generalize outward.",
      "Structure arguments chronologically when tracing development: move through life stages in order, using temporal markers ('From a very early age', 'When I was about sixteen', 'By the end of 1935') to anchor the progression.",
      "When making a taxonomy or classification, present it as a numbered or labeled list with brief, definitional paragraphs for each item, then show how the categories interact and compete.",
      "Preempt objections by acknowledging them within the same sentence or paragraph ('I do not think one can assess a writer's motives without knowing something of his early development'), treating potential counterpoints as premises rather than threats.",
      "Use concessive structure ('but', 'nevertheless', 'however', 'and yet') as the primary logical joint \u2014 nearly every major claim is followed by a qualification or counterweight that complicates it.",
      "Close arguments with a paradox or unresolved tension rather than a neat resolution \u2014 present the difficulty honestly rather than pretending to have solved it."
    ],
    "do_not": [
      "Do not build arguments from data, statistics, or external citations \u2014 the primary evidence is personal experience and honest self-examination.",
      "Do not use formal logical apparatus (premises, conclusions, therefore) \u2014 the logic is embedded in narrative progression and concessive turns.",
      "Do not resolve tensions or contradictions artificially; leave the reader sitting with the difficulty."
    ],
    "evidence": [
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"What he said was true, but I could not have done otherwise.\"",
      "\"And yet it is also true that one can write nothing readable unless one constantly struggles to efface one's own personality.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear topic sentence or temporal/logical marker that announces what the paragraph will address ('When I was about sixteen I suddenly discovered the joy of mere words', 'I give all this background information because').",
      "Develop paragraphs by accumulating specific examples, anecdotes, and qualifications in sequence \u2014 each sentence adds a new fact, instance, or nuance rather than restating the opening claim.",
      "Close paragraphs with a summative judgment, a self-correcting turn, or a sentence that both concludes the current thought and pivots toward the next ('That was the total of the would-be serious work that I actually set down on paper during all those years').",
      "Connect paragraphs with explicit transitional openings ('However', 'But side by side with all this', 'In one form or another this problem comes up again') that signal the logical relationship to what came before.",
      "When presenting a list or taxonomy, give each item its own paragraph with a label, keeping entries roughly parallel in structure but varying in length according to the complexity of each point."
    ],
    "do_not": [
      "Do not end paragraphs with trailing, unresolved thoughts \u2014 each paragraph should arrive at a clear resting point even if the overall argument remains open.",
      "Do not write paragraphs that circle back to restate their opening sentence \u2014 move forward through the paragraph, adding new material.",
      "Do not use abrupt, unlabeled paragraph breaks that leave the reader to infer the connection; make transitions legible."
    ],
    "evidence": [
      "\"However, throughout this time I did in a sense engage in literary activities.\"",
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\"",
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use simile and metaphor sparingly but memorably, drawing comparisons from everyday physical experience rather than literary or intellectual sources ('Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness', 'Good prose is like a windowpane').",
      "Employ parenthetical asides \u2014 set off by dashes or commas \u2014 to insert qualifying remarks, abbreviations ('i.e.'), or self-corrections that give the prose a thinking-aloud quality.",
      "Use enumerative lists (especially with 'etc., etc.') to suggest that examples could continue indefinitely, conveying casual comprehensiveness without exhaustive cataloguing.",
      "Deploy direct quotation \u2014 of others and of one's own earlier self \u2014 to create dramatic contrast and provide evidence for claims ('Why did you put in all that stuff?' he said. 'You've turned what might have been a good book into journalism.').",
      "Use antithesis and balanced opposition within sentences to dramatize intellectual tensions ('directly or indirectly, against totalitarianism and for democratic socialism', 'I am not able, and do not want').",
      "Employ the construction 'It is...' or 'There is...' to make impersonal, quasi-universal declarations that carry the weight of shared truth."
    ],
    "do_not": [
      "Do not use extended or elaborate metaphors that draw attention to their own cleverness \u2014 keep figurative language brief and functional.",
      "Do not use rhetorical questions as a primary persuasive device; prefer declarative assertions.",
      "Do not employ irony, sarcasm, or wordplay for comic effect \u2014 humor, when it appears, is dry and self-directed."
    ],
    "evidence": [
      "\"Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.\"",
      "\"Good prose is like a windowpane.\"",
      "\"I knew that I had a facility with words and a power of facing unpleasant facts, and I felt that this created a sort of private world in which I could get my own back for my failure in everyday life.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct, autobiographical declaration that immediately establishes the subject and stakes \u2014 no throat-clearing, no scene-setting atmosphere, just a plain statement of fact that draws the reader in through its honesty and specificity.",
      "Establish the essay's scope early by signaling a chronological or thematic structure that the reader can follow ('From a very early age... Between the ages of about seventeen and twenty-four...').",
      "Close with a self-correcting turn \u2014 step back from the argument, acknowledge its incompleteness or one-sidedness, and complicate what has been said, ending on a note of honest difficulty rather than triumph.",
      "Use the final paragraph to undercut the essay's apparent thesis with a deeper, darker, or more paradoxical truth \u2014 the ending should reframe everything that came before.",
      "Use formatting devices (numbered lists with Roman numerals, em dashes for parenthetical insertions, 'i.e.' for in-line clarification) to create visual clarity within dense prose.",
      "Embed quoted verse, dialogue, or foreign phrases directly into the prose without elaborate framing \u2014 trust the reader to follow the shift in register."
    ],
    "do_not": [
      "Do not open with a question, provocation, or clever hook \u2014 begin with plain, confident statement.",
      "Do not close with a tidy summary, call to action, or uplifting note \u2014 end with unresolved tension or an uncomfortable truth.",
      "Do not use headers or section breaks within the body of the essay \u2014 maintain continuous prose with transitions doing the structural work.",
      "Do not use bold, italic, or other typographic emphasis for rhetorical stress \u2014 let word choice and sentence position create emphasis."
    ],
    "evidence": [
      "\"From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.\"",
      "\"And looking back through my work, I see that it is invariably where I lacked a political purpose that I wrote lifeless books and was betrayed into purple passages, sentences without meaning, decorative adjectives and humbug generally.\"",
      "\"Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression.\""
    ]
  }
}
```

### sample-5.txt (5800 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 5800,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by layering qualifications, asides, and temporal markers within a single grammatical frame \u2014 use commas, dashes, and parentheses to embed subordinate information without breaking into a new sentence. E.g., 'One afternoon, as we were filing out from tea, Mrs Wilkes the Headmaster's wife, was sitting at the head of one of the tables, chatting with a lady of whom I knew nothing, except that she was on an afternoon's visit to the school.'",
      "Chain clauses with coordinating conjunctions (and, but, or) to build momentum within narrative passages, letting the sentence accumulate detail before arriving at its point. Use 'but' as the primary pivot conjunction to introduce contrast or complication mid-sentence.",
      "When rendering a moment of emotional or psychological realization, extend the sentence to mirror the unfolding of thought \u2014 pile clause upon clause, qualification upon qualification, so the reader experiences the reasoning process in real time. E.g., 'I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey.'",
      "Deploy short declarative sentences to land a judgment, deliver an emotional blow, or close a narrative sequence. The short sentence earns its power by contrast with the surrounding elaboration. E.g., 'I could not speak.'",
      "Open sentences with temporal or circumstantial framing ('After the second or third offence', 'In those days', 'A little later') to anchor the reader in time and place before delivering the main clause."
    ],
    "do_not": [
      "Do not write sentences that are uniformly the same length \u2014 the rhythm depends on long, elaborated sentences interrupted by short, blunt ones at moments of emotional intensity.",
      "Do not use semicolons to join independent clauses \u2014 prefer commas with conjunctions, or separate into distinct sentences.",
      "Do not front-load sentences with the main point followed by trailing qualifications \u2014 instead, let qualifications and scene-setting precede or interrupt the main assertion."
    ],
    "evidence": [
      "\"I could not speak. I felt that I should die if 'Mrs Form' were to beat me.\"",
      "\"He would tap away at one's skull with his silver pencil, which, in my memory, seems to have been about the size of a banana, and which certainly was heavy enough to raise a bump: or he would pull the short hairs round one's ears, or, occasionally, reach out under the table and kick one's shin.\"",
      "\"Night after night I prayed, with a fervour never previously attained in my prayers, 'Please God, do not let me wet my bed! Oh, please God, do not let me wet my bed!', but it made remarkably little difference.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the perspective of a mature adult reflecting on childhood, maintaining a dual consciousness: the child's emotional immediacy and the adult's analytical detachment. Let both voices coexist within the same passage, sometimes within the same sentence.",
      "Adopt a tone that is confessional without being self-pitying \u2014 present shameful or painful experiences with unflinching honesty, then step back to examine their meaning with cool, almost clinical precision. E.g., 'I had a conviction of sin and folly and weakness.'",
      "Use the first person ('I') for personal narrative and shift to the impersonal 'one' or 'you' when generalizing from personal experience to universal truth. This shift signals the move from memoir to essay. E.g., 'You did not properly speaking do the deed: you merely woke up in the morning.'",
      "Signal certainty with flat declarative statements ('It was a crime', 'This did not happen very often'). Signal uncertainty with honest admissions of memory's limits ('I forget how', 'I cannot remember whether', 'I must have had glimpses of it').",
      "Employ dry, understated irony rather than overt sarcasm \u2014 let the absurdity of situations speak for itself through precise, matter-of-fact description. E.g., describing the titled boy's choking fit and the headmaster laughing it off.",
      "Use contractions sparingly and primarily in quoted dialogue or moments of casual, conversational register. Maintain the uncontracted form ('I did not', 'it was not') in the prose narration to sustain a formal, deliberate tone."
    ],
    "do_not": [
      "Do not adopt a bitter or vengeful tone \u2014 the stance is one of calm, almost philosophical examination of injustice, not angry denunciation.",
      "Do not hedge with academic qualifiers ('arguably', 'it could be said that') \u2014 when uncertain, simply say 'I do not know' or 'I cannot remember'.",
      "Do not break the retrospective frame by narrating past events in present tense \u2014 maintain past tense for events and present tense only for present-moment commentary on memory itself."
    ],
    "evidence": [
      "\"I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane: I must have had glimpses of it even before I left home, for my early childhood had not been altogether happy.\"",
      "\"Any lesser person would have been called a dirty little beast and ordered out of the room instantly: but Sambo and Flip laughed it off in a 'boys will be boys' spirit.\"",
      "\"To this day I can feel myself almost swooning with shame as I stood, a very small, round-faced boy in short corduroy knickers, before the two women.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce abstract claims through concrete, fully dramatized narrative episodes \u2014 never state the thesis first and then illustrate. Let the story arrive at the idea organically, so the generalization feels earned rather than imposed. E.g., the bed-wetting episode leads to the philosophical realization about the nature of sin.",
      "Build arguments by accumulating specific, vivid examples rather than by logical syllogism. Stack instances of the same pattern (favoritism toward rich boys, humiliation of poor ones) until the weight of evidence makes the conclusion inescapable.",
      "When making a general observation about childhood, psychology, or institutions, introduce it with a framing phrase that signals the shift from narrative to reflection: 'To grasp the effect of this kind of thing', 'In general', 'It is not easy to convey'.",
      "Handle counterarguments and complications honestly by inserting them mid-flow with parenthetical concessions \u2014 'perhaps', 'I must say', 'It is a mistake to think' \u2014 acknowledging complexity without abandoning the main argument.",
      "Use the logical structure: (1) dramatized scene, (2) emotional response, (3) adult reflection on what it meant. This three-part pattern recurs as the fundamental unit of argument.",
      "When presenting a paradox or moral contradiction, state both sides flatly and let the tension stand unresolved. E.g., 'I knew the bed-wetting was (a) wicked and (b) outside my control.'"
    ],
    "do_not": [
      "Do not argue through abstraction alone \u2014 every claim must be anchored in a specific, recalled scene or detail.",
      "Do not resolve contradictions neatly \u2014 present the uncomfortable truth that two incompatible things were simultaneously believed or felt.",
      "Do not use formal argumentative transitions ('furthermore', 'moreover', 'consequently') \u2014 let the progression of narrative episodes carry the logical structure."
    ],
    "evidence": [
      "\"I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question.\"",
      "\"It is a mistake to think such methods do not work. They work very well for their special purpose.\"",
      "\"To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember that the child has little sense of proportion or probability.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting sentence or a transitional summary that anchors the reader in time and situation before the detailed narrative unfolds. E.g., 'After the second or third offence I was warned that I should be beaten next time, but I received the warning in a curiously roundabout way.'",
      "Build paragraphs as self-contained narrative episodes \u2014 each paragraph dramatizes a scene, delivers its emotional payload, and arrives at a reflection or turning point before the next paragraph begins a new episode.",
      "Close paragraphs with a sentence that either delivers a judgment, lands an ironic observation, or pivots to what comes next. The closing sentence often carries the paragraph's emotional or intellectual weight. E.g., 'which did not make me more popular.'",
      "Connect paragraphs through chronological progression within an episode, then use explicit bridge sentences ('So much for the episode of the bed-wetting') to signal transitions between major sections or themes.",
      "Within paragraphs, sequence ideas from external action to internal response \u2014 describe what happened, then describe how it was felt or understood. Move from the observable to the psychological.",
      "Use standalone single-sentence paragraphs for direct speech that needs dramatic emphasis, particularly commands or outbursts. E.g., ''REPORT YOURSELF to the Headmaster after breakfast!''"
    ],
    "do_not": [
      "Do not begin paragraphs with topic sentences that announce the paragraph's argument in abstract terms \u2014 instead, begin with a concrete action, scene, or temporal marker.",
      "Do not end paragraphs with trailing, unresolved thoughts \u2014 each paragraph should arrive somewhere, even if that somewhere is a pointed ambiguity.",
      "Do not organize paragraphs as lists of evidence for a claim \u2014 organize them as narrative sequences that build toward a realization."
    ],
    "evidence": [
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"'REPORT YOURSELF to the Headmaster after breakfast!'\"",
      "\"Year after year, never daring to ask, I would miserably hope that this year a cake would appear. Once or twice I even rashly pretended to my companions that this time I was going to have a cake. Then came tea-time, and no cake, which did not make me more popular.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use precise, concrete physical details as the primary vehicle for emotional meaning \u2014 a broken riding-crop handle, a dewdrop trembling on a nose, corduroy knickers. Let objects carry symbolic weight without explicitly calling them symbols.",
      "Deploy direct quotation of dialogue to dramatize power dynamics \u2014 reproduce the exact words of authority figures to let their cruelty, condescension, or manipulation speak for itself without authorial commentary. E.g., 'You are living on my bounty.'",
      "Use parenthetical asides \u2014 enclosed in parentheses or set off by dashes \u2014 to insert the adult narrator's commentary into the child's narrative, creating an ironic double vision. E.g., '(Officially, however, she was addressed as Mum, probably a corruption of the \"Ma'am\" used by public schoolboys to their housemasters' wives.)'",
      "Employ triadic structures ('partly because... partly from... but partly also because') to layer complexity, particularly when analyzing emotions or motivations.",
      "Use analogy drawn from the everyday and physical world to make abstract ideas visceral: 'crammed with learning as cynically as a goose is crammed for Christmas', 'prodding away at one's mind... as one keeps a sleepy person awake by sticking pins in him.'",
      "Render capitalization and typographic emphasis to represent how words felt in the child's mind \u2014 'REPORT YOURSELF' in capitals because 'that was how it appeared in my mind.'",
      "Use rhetorical questions sparingly and always in the service of drawing the reader into a moral or psychological dilemma, never as mere transitions."
    ],
    "do_not": [
      "Do not use extended metaphors or allegorical frameworks \u2014 keep figurative language brief, pointed, and grounded in physical reality.",
      "Do not use literary or cultural allusions as ornament \u2014 when referencing other writers (Thackeray), do so only to make a specific, functional comparison.",
      "Do not editorialize with exclamation marks in the narrator's own voice \u2014 reserve emphatic punctuation for quoted speech and the child's remembered emotional states."
    ],
    "evidence": [
      "\"I can still recall my feeling as I saw the handle lying on the carpet \u2014 the feeling of having done an ill-bred clumsy thing, and ruined an expensive object.\"",
      "\"'You are living on my bounty' was his favourite phrase in this context. At least once I listened to these words between blows of the cane.\"",
      "\"We were crammed with learning as cynically as a goose is crammed for Christmas.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open an essay by plunging directly into a specific, concrete episode that will serve as the foundation for broader argument \u2014 no throat-clearing, no abstract preamble. The first sentence should name the place and establish the situation. E.g., 'Soon after I arrived at St Cyprian's... I began wetting my bed.'",
      "Structure the essay as a series of fully dramatized episodes connected by reflective bridges, not as a linear argument with supporting evidence. The essay moves by narrative accumulation, not thesis-proof-conclusion.",
      "Close major sections with a terse summary judgment or ironic observation that seals the episode and creates a clean break before the next. E.g., 'So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.'",
      "Use em dashes for parenthetical insertions and dramatic pauses within sentences. Use parentheses for factual asides and corrections. Use colons to introduce quoted speech or to set up a statement that elaborates on what precedes it.",
      "Integrate direct dialogue into the prose as a dramatic device \u2014 reproduce conversations in full when they reveal character or power dynamics, setting them apart with quotation marks but not as separate block quotes.",
      "Follow the genre conventions of the autobiographical essay: first-person retrospective, named real people (or transparently renamed), specific places, and honest self-examination that does not shy from unflattering self-portraiture.",
      "Use formatting sparingly \u2014 capitalize words only to represent how they sounded or felt ('REPORT YOURSELF'), not for emphasis in the narrator's own analytical voice."
    ],
    "do_not": [
      "Do not open with a general statement, thesis, or rhetorical question \u2014 begin in medias res with a specific event.",
      "Do not close sections with forward-looking promises ('In the next section...') or neat summaries that resolve all tension \u2014 leave the moral weight of the episode to resonate on its own.",
      "Do not use headers, bullet points, or structural formatting \u2014 the essay flows as continuous prose organized by paragraph breaks alone."
    ],
    "evidence": [
      "\"Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.\"",
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"I put REPORT YOURSELF in capitals because that was how it appeared in my mind.\""
    ]
  }
}
```

## Raw Synthesis Data

```json
{
  "author_name": "George Orwell",
  "sample_count": "5",
  "detected_genre": "essay",
  "one_line_description": "formal, involved, explicit \u2014 principled moral authority grounded in concrete physical detail, with confessional honesty and deliberate, clause-laden prose",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple independent clauses with commas and coordinating conjunctions ('and', 'but', 'or'), creating a rolling, additive momentum that carries the reader through an extended thought before reaching a full stop.",
      "Use subordinate clauses, participial phrases, and parenthetical insertions (set off by commas or dashes) to layer qualifications, context, and caveats into the main assertion without breaking into a new sentence.",
      "Deploy parallelism within sentences by repeating grammatical structures in series \u2014 especially noun phrases or verb phrases separated by commas \u2014 to build cumulative rhetorical force.",
      "Open sentences frequently with temporal, circumstantial, or transitional framing phrases ('Now,', 'In those days,', 'But if,', 'When I was about sixteen,', 'From time to time,') that orient the reader before the main clause arrives.",
      "Follow a long, multi-clause sentence with a shorter declarative sentence that delivers a verdict, emotional punch, or pivot \u2014 the contrast between the two creates the rhythm.",
      "Use the passive voice sparingly and only when the agent is genuinely irrelevant or when constructing an ironic demonstration of the very fault being criticized.",
      "Use appositional phrases to layer identifying detail onto characters or concepts at the moment of introduction."
    ],
    "do_not": [
      "Do not write sequences of identically structured sentences \u2014 vary clause order, length, and complexity so no two consecutive sentences feel interchangeable.",
      "Do not use sentence fragments for stylistic effect \u2014 every sentence must be grammatically complete, even the short punchy ones.",
      "Do not use elaborate periodic sentences where the main clause is withheld until the very end for dramatic effect \u2014 deliver the main point early, then qualify and extend it.",
      "Do not write in choppy, disconnected simple sentences that read like a list of facts \u2014 always chain related actions and observations together."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person with frank, unsentimental self-disclosure \u2014 confess weaknesses, contradictions, and moral failures without self-pity, treating them as facts to be examined.",
      "Maintain a tone that is simultaneously authoritative and self-deprecating: assert opinions with confidence while undercutting personal claims through honest admission of doubt or failure.",
      "Signal confidence through plain, unhedged declarative statements rather than through intensifiers or emphatic punctuation.",
      "When conceding a point or expressing uncertainty, do so explicitly and briefly ('I do not want to exaggerate', 'I cannot remember whether'), then move on \u2014 never dwell in the hedge.",
      "Use 'I' to take personal responsibility for claims, 'we' or 'one' to draw the reader into shared culpability or universal truths, and 'you' when issuing imperatives or inviting the reader to test a claim.",
      "When expressing moral or political positions, undercut any hint of righteousness immediately \u2014 follow a principled statement with an admission of ignoble feelings or personal complicity.",
      "Use contractions selectively \u2014 employ them in conversational, reflective passages but shift to uncontracted forms for formal declarations or central maxims.",
      "Treat the reader as an intelligent equal who needs no coddling \u2014 assume shared knowledge without over-explaining."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic register \u2014 always let the author's personality, opinions, and self-criticism be visible.",
      "Do not moralize or lecture from a position of moral superiority \u2014 always implicate yourself in the system you critique.",
      "Do not use sarcasm or mockery as the primary mode \u2014 let the absurdity of examples speak for itself and reserve editorial comment for measured, pointed judgments.",
      "Do not hedge core claims with multiple qualifiers or academic language ('it could be argued that') \u2014 state the position and let evidence do the work.",
      "Do not be emotionally effusive or lyrical \u2014 maintain dry, matter-of-fact honesty even when describing painful or passionate subjects."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Ground abstract claims in concrete experience \u2014 introduce a general principle through the specific personal experience, physical analogy, or vivid specimen that reveals it, then generalize outward.",
      "Prove claims by exhibition: rather than merely asserting, quote extended specimens, dramatize full scenes, or describe physical details, then dissect them point by point.",
      "Anchor abstract arguments in concrete, physical analogies drawn from everyday life \u2014 animals, household objects, bodily sensations \u2014 so the reader can see and feel the claim.",
      "Handle counterarguments by acknowledging the grain of truth they contain before narrowing the rebuttal to the specific ground where the opponent is wrong \u2014 never dismiss opposing views outright.",
      "Move between the particular and the general in a recursive pattern: describe a specific moment, extract a general principle, then return to the specific to show the principle in action.",
      "Use concessive structure ('but', 'nevertheless', 'and yet') as the primary logical joint \u2014 nearly every major claim is followed by a qualification or counterweight that complicates it.",
      "Build toward prescriptive or philosophical conclusions only after the full diagnostic has been laid out \u2014 earn the right to generalize by demonstrating thorough understanding of the particular.",
      "Close arguments with a paradox, unresolved tension, or uncomfortable truth rather than a neat resolution."
    ],
    "do_not": [
      "Do not assert a claim without immediately providing a concrete example, analogy, scene, or specimen that makes it visible and testable.",
      "Do not present opposing views as straw men \u2014 hold contradictory positions simultaneously and let the reader feel the tension.",
      "Do not use abstract reasoning disconnected from concrete, sensory experience \u2014 every general claim must be grounded in a specific image, event, or example.",
      "Do not use statistics, formal citations, or external authorities as primary evidence \u2014 the evidence is personal experience, honest self-examination, and exhibited specimens."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete action, temporal anchor, or clear framing assertion that announces the paragraph's purpose \u2014 do not bury the point or meander before arriving at it.",
      "Within paragraphs, sequence ideas from concrete observation to internal reflection or broader implication: describe what was seen or what happened, then reveal what it means.",
      "Close paragraphs with a sentence that either delivers a pointed summative judgment, lands a memorable image or ironic observation, or pivots forward to what comes next.",
      "Connect paragraphs through explicit logical signposts ('Now that I have made this catalogue...', 'As I have tried to show...', 'But side by side with all this...') or through temporal and spatial markers that maintain forward momentum.",
      "Use enumeration and cataloguing within paragraphs: list examples in comma-separated series, sometimes with brief parenthetical commentary, to build cumulative force before delivering the interpretive conclusion.",
      "When transitioning between major sections, use explicit bridge sentences that seal the previous episode and open the next."
    ],
    "do_not": [
      "Do not write paragraphs that meander through multiple unrelated points \u2014 each paragraph should serve one clear function in the argument.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 always land on something definite, whether a judgment, a pivot, or an image.",
      "Do not rely on implicit transitions between paragraphs \u2014 signal the logical relationship (contrast, consequence, elaboration, new category) explicitly.",
      "Do not write paragraphs that circle back to merely restate their opening sentence \u2014 move forward through the paragraph, adding new material."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid similes and metaphors drawn from physical, tangible, everyday domains \u2014 animals, household objects, bodily sensations, mundane degrading comparisons \u2014 to make abstract arguments concrete.",
      "Deploy cataloguing and enumeration as a primary rhetorical weapon \u2014 list examples, physical details, or bodily functions in rapid succession to overwhelm the reader with cumulative evidence before delivering the verdict.",
      "Use parenthetical asides (set off by dashes or parentheses) to insert qualifying remarks, self-corrections, sardonic observations, or the adult narrator's commentary, giving the prose a thinking-aloud quality.",
      "Employ antithesis and balanced opposition within sentences to dramatize moral or intellectual contradictions \u2014 place opposed ideas in parallel structures.",
      "Use repetition structurally \u2014 repeat key phrases to create incantatory or refrain-like effects that hammer home compulsion, inevitability, or pattern.",
      "Deploy the colon-and-pivot structure: describe a concrete situation in vivid detail, then follow with a colon and the label, euphemism, or verdict that reframes it.",
      "Use precise, concrete physical description as a form of argument \u2014 the detailed rendering of bodies, objects, and scenes is not ornament but evidence.",
      "Use direct quotation of speech to let authority figures, opponents, or the author's earlier self reveal themselves through their own words."
    ],
    "do_not": [
      "Do not use dead, dying, or ornate metaphors \u2014 every figurative expression must evoke a specific visual image drawn from common, physical experience.",
      "Do not use rhetorical questions as a primary persuasive device \u2014 this voice asserts and confesses rather than asking the reader to draw conclusions.",
      "Do not employ conspicuous sound-based devices (alliteration, assonance) \u2014 prose rhythm comes from syntax, not sonic patterning.",
      "Do not use extended or elaborate metaphors that draw attention to their own cleverness \u2014 keep figurative language brief and functional."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, direct, autobiographical or situational statement that immediately establishes the subject and stakes \u2014 no throat-clearing, no atmospheric scene-setting, no rhetorical questions.",
      "Establish stakes early: make clear in the opening paragraph why this subject matters to something larger than itself \u2014 politics, morality, human nature, civilization.",
      "Structure the essay either as (a) a single extended narrative from which philosophical argument emerges organically, or (b) a diagnostic argument that earns its prescriptions through thorough exhibition and analysis.",
      "Close with a self-correcting turn, an unresolved tension, or a devastatingly understated final line \u2014 the ending should reframe or complicate everything that came before, never resolve it tidily.",
      "Use em dashes for parenthetical asides and dramatic insertions that add a self-interrupting, thinking-aloud quality. Use parentheses for factual asides, corrections, and confiding remarks.",
      "Format as continuous prose with no headers, bullet points, bold, or italic emphasis in the body \u2014 the argument should be clear from the prose alone, with emphasis coming from word choice and sentence position.",
      "Use direct dialogue with quotation marks, rendering speakers' verbal tics and actual words to dramatize power dynamics and character."
    ],
    "do_not": [
      "Do not open with a provocative question, a quotation from another source, or a clever hook \u2014 begin with a plain, confident, concrete statement.",
      "Do not close with a moral lesson, call to action, vague inspiration, or tidy summary \u2014 end with ironic self-awareness, understated shock, or honest difficulty.",
      "Do not use formatting (bold, italics, bullet points, headers) as a substitute for argumentative structure \u2014 the prose must do all the structural work.",
      "Do not use exclamation marks in the narrator's voice \u2014 reserve emphatic punctuation for quoted speech."
    ]
  },
  "signature_phrases": {
    "use": [
      "but",
      "and yet",
      "in our time",
      "I do not want to",
      "it is not easy",
      "one ought to",
      "I knew",
      "I perceived",
      "the point is",
      "in a sense",
      "I dare say",
      "in one form or another",
      "it is humbug to pretend",
      "the great enemy",
      "in general",
      "so far as",
      "I think now",
      "it is curious",
      "needless to say",
      "a sort of",
      "etc., etc.",
      "i.e."
    ],
    "never_use": [
      "basically",
      "essentially",
      "incredibly",
      "literally",
      "absolutely",
      "amazing",
      "passionate",
      "utilize",
      "leverage",
      "impact (as a verb)",
      "going forward",
      "in terms of",
      "at the end of the day",
      "it goes without saying",
      "needless to say but",
      "journey",
      "stakeholder",
      "synergy",
      "paradigm",
      "unpack",
      "deep dive",
      "nuanced",
      "robust",
      "holistic"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', 'additionally', and 'consequently' with 'but', 'and', 'and yet', or a simple adversative turn.",
    "Convert passive constructions to active where the agent is known \u2014 'mistakes were made' becomes 'I made mistakes'.",
    "Replace abstract nouns with concrete images \u2014 instead of 'the consequences of imperialism', describe the specific scene that shows those consequences.",
    "Break any sentence that merely restates a previous point \u2014 every sentence must add new information, a new example, or a new qualification.",
    "Replace hedging clusters ('it could perhaps be argued that there is some possibility') with a single honest admission ('I do not know') or a flat assertion.",
    "Convert any metaphor you cannot visualize into plain language \u2014 if the image is dead, kill it and say what you mean directly.",
    "Replace emotional adjectives ('horrible', 'wonderful', 'terrible') with precise physical description that creates the emotion in the reader.",
    "Insert a concrete example, analogy, or specimen immediately after any abstract claim that currently stands alone.",
    "Where you find a sequence of short, choppy sentences, chain them with conjunctions into a single compound sentence that rolls forward.",
    "Replace any instance of 'I feel' or 'I believe' with 'I know' or 'I think' \u2014 or simply state the claim without attribution."
  ]
}
```