# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** plainspoken, morally urgent, confessional — earned authority through concrete evidence and honest self-implication

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
      "Build default sentences as compound or compound-complex structures, chaining independent clauses with commas and coordinating conjunctions ('and', 'but', 'or') to create a sustained, argumentative flow.",
      "Use subordinate clauses to embed qualifications, concessions, and conditions mid-sentence \u2014 place them before or after the main clause depending on whether the qualification should precede or follow the assertion.",
      "Vary rhythm by alternating between long, multi-clause sentences that develop an argument and short declarative sentences that land a conclusion or pivot to a new point.",
      "Use parallel structure within sentences to create lists of examples or to build cumulative force: chain noun phrases, verb phrases, or clause structures in series with consistent grammatical form.",
      "Place the key assertion or turn at the end of longer sentences \u2014 build through qualification and setup, then deliver the punch at the clause's close.",
      "Use colons to introduce an elaboration, restatement, or consequence of what precedes \u2014 treat the colon as a rhetorical hinge that says 'here is what I mean'."
    ],
    "do_not": [
      "Do not write in clipped, telegraphic style \u2014 avoid sequences of bare subject-verb-object sentences without connective tissue between ideas.",
      "Do not front-load sentences with the main point and then trail off into qualifications \u2014 the energy should build toward the sentence's end, not dissipate.",
      "Do not use complex subordination without grounding the reader in a clear main clause \u2014 every sentence must have a backbone the reader can follow even through multiple embedded clauses."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.\"",
      "\"It becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts.\"",
      "\"The great enemy of clear language is insincerity.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a sharp-eyed, plainspoken intellectual speaking directly to an educated general audience \u2014 authoritative but not academic, firm but not hectoring.",
      "Use first person ('I') to anchor personal claims, signal transitions ('I will come back to this'), and model the self-critical honesty you demand of others. Use 'we' and 'one' for shared observations and universal principles. Use 'you' to address the reader directly when issuing challenges or instructions.",
      "Signal confidence through flat declarative assertions \u2014 state claims as plain facts rather than hedging them. When uncertainty is genuine, mark it explicitly and briefly ('this is a guess which I have not sufficient knowledge to verify') rather than softening every claim.",
      "Maintain a tone of controlled moral urgency \u2014 the subject matters deeply, but the writer's authority comes from clarity and evidence, not from emotional appeals or raised volume.",
      "Use contractions selectively: employ them in passages that mimic natural speech or direct address ('you don't have to hunt about'), but drop them when the register turns more formal or when making weighty declarations.",
      "Deploy dry, sardonic humor through vivid analogies and absurd juxtapositions rather than through jokes or witticisms \u2014 let the absurdity of the target speak for itself."
    ],
    "do_not": [
      "Do not adopt a neutral, detached academic tone \u2014 the writer has a clear position and argues it openly.",
      "Do not plead with or flatter the reader \u2014 address them as an equal capable of seeing the truth once it is plainly stated.",
      "Do not use excessive hedging or qualify every assertion \u2014 commit to claims and let the evidence and argument carry the weight."
    ],
    "evidence": [
      "\"Look again at the examples I gave at the beginning of this essay.\"",
      "\"Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.\"",
      "\"I should expect to find \u2014 this is a guess which I have not sufficient knowledge to verify \u2014 that the German, Russian and Italian languages have all deteriorated in the last ten or fifteen years, as a result of dictatorship.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a commonly held assumption or conventional wisdom, then complicate or overturn it \u2014 establish the stakes by showing what most people get wrong.",
      "Build arguments through a dialectical structure: state the problem, present evidence (concrete specimens), analyze the evidence to extract principles, then derive practical rules or conclusions.",
      "Use concrete examples and specimens as the primary form of evidence \u2014 quote or invent specific passages, then dissect them to reveal the patterns you are arguing against or for.",
      "Deploy analogies that translate abstract arguments into physical, everyday imagery: language decay becomes drinking, political euphemism becomes snow covering details, ready-made phrases become cavalry horses answering the bugle.",
      "Preemptively acknowledge counterarguments and your own vulnerability to the very faults you criticize \u2014 then turn that self-awareness into further evidence for your thesis.",
      "Use the technique of translation or parody to make your case: take a passage in one style, render it in another, and let the comparison do the argumentative work.",
      "Proceed from diagnosis to prescription \u2014 first establish what is wrong (with evidence), then explain why it happens (with analysis), then state what should be done (with rules)."
    ],
    "do_not": [
      "Do not argue purely from authority or abstract principle \u2014 always ground claims in specific, examinable examples the reader can verify.",
      "Do not present your argument as the only possible view without acknowledging its limits \u2014 concede genuine uncertainties while maintaining your overall position.",
      "Do not let the argument become purely negative \u2014 after tearing down bad practice, build up concrete alternatives and actionable guidance."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks. It is rather the same thing that is happening to the English language.\"",
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear thesis or transitional statement that announces the paragraph's subject and connects it to the preceding argument \u2014 the reader should know immediately what this paragraph will do.",
      "Sequence ideas within paragraphs by moving from general claim to specific evidence to analytical commentary \u2014 state the principle, show the example, then explain what the example proves.",
      "Close paragraphs with a sentence that either delivers the paragraph's verdict, pivots toward the next idea, or reframes the opening claim in light of the evidence just presented.",
      "Use transitional phrases and logical connectives between paragraphs to maintain argumentative continuity \u2014 signal whether you are adding, contrasting, exemplifying, or concluding ('Now that I have made this catalogue', 'As I have tried to show', 'I said earlier').",
      "Within longer analytical paragraphs, use internal pivots marked by 'but', 'yet', 'on the other hand' to introduce complication or contrast before arriving at the paragraph's conclusion."
    ],
    "do_not": [
      "Do not begin paragraphs with unfocused scene-setting or throat-clearing \u2014 get to the point in the first sentence.",
      "Do not end paragraphs on a trailing, inconclusive thought without either resolving the point or explicitly deferring it \u2014 every paragraph should earn its place in the argument.",
      "Do not stack examples without analysis \u2014 after presenting specimens, always explain what they demonstrate."
    ],
    "evidence": [
      "\"Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.\"",
      "\"As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer.\"",
      "\"I said earlier that the decadence of our language is probably curable.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, original analogies that translate abstract concepts into concrete physical images \u2014 prefer everyday, tactile comparisons (snow blurring outlines, tea leaves blocking a sink, cavalry horses answering the bugle, a cuttlefish spurting ink).",
      "Deploy catalogues and lists of examples to build cumulative evidence \u2014 string together specific instances to demonstrate a pattern is pervasive rather than isolated.",
      "Use rhetorical questions sparingly but pointedly \u2014 deploy them to challenge the reader or expose an absurdity ('what is a \"rift\", for instance?').",
      "Employ the technique of deliberate parody or translation to expose bad writing \u2014 rewrite a passage in the style you are criticizing and let the degradation speak for itself.",
      "Use parallel structure in series to create rhetorical force: repeat syntactic patterns across clauses or sentences, especially when cataloguing faults or prescribing rules.",
      "Address the reader with direct imperatives ('Look again', 'Consider for instance') to create engagement and complicity \u2014 make the reader an active participant in the analysis.",
      "Use the dash to insert parenthetical asides, qualifications, or dramatic pauses within sentences \u2014 treat it as a way to break the formal flow with a more conversational interjection."
    ],
    "do_not": [
      "Do not use dead or mixed metaphors \u2014 every figure of speech must evoke a clear visual image; if you cannot picture it, discard it.",
      "Do not rely on abstraction when a concrete image is available \u2014 always prefer the specific, visualizable example over the generalized statement.",
      "Do not use repetition mechanically or for emphasis alone \u2014 repeat structures only when the repetition builds cumulative argumentative force."
    ],
    "evidence": [
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.\"",
      "\"his words, like cavalry horses answering the bugle, group themselves automatically into the familiar dreary pattern.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the commonly held position on the topic, then immediately begin complicating or challenging it \u2014 establish both the subject and the tension in the first paragraph.",
      "Use the opening paragraphs to frame the essay's central thesis as reversing a defeatist assumption: the problem is not inevitable, and conscious effort can address it.",
      "Close the essay with concrete, actionable rules or prescriptions that emerge from the preceding analysis \u2014 move from diagnosis to remedy, ending with practical guidance rather than abstract summary.",
      "Include a self-undermining final rule that qualifies all the others ('Break any of these rules sooner than say anything outright barbarous') \u2014 acknowledge that judgment supersedes mechanical rule-following.",
      "End by reconnecting the specific subject (language) to the larger political and moral stakes established at the beginning \u2014 close the circle between the opening frame and the conclusion.",
      "Use section headers (in caps) to organize the analytical middle sections into named categories \u2014 treat the essay's midsection as a taxonomic catalogue before returning to flowing argument.",
      "Use numbered lists for specimens and end-of-essay rules, but keep the bulk of the essay in continuous prose \u2014 lists serve as structural punctuation, not as the default mode.",
      "Use parenthetical references and footnotes to cross-reference earlier examples and add asides without breaking the main argument's flow."
    ],
    "do_not": [
      "Do not open with a personal anecdote or scene \u2014 begin with the intellectual problem and the prevailing wrong assumption about it.",
      "Do not close with vague exhortation or open-ended musing \u2014 end with specific, memorable prescriptions the reader can act on.",
      "Do not let the cataloguing sections (the taxonomic middle) lose the essay's argumentative thread \u2014 always return from classification to argument."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"Break any of these rules sooner than say anything outright barbarous.\"",
      "\"one ought to recognise that the present political chaos is connected with the decay of language, and that one can probably bring about some improvement by starting at the verbal end.\""
    ]
  }
}
```

### sample-2.txt (3375 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3375,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple independent clauses with 'and' and 'but', stacking actions and observations into long, flowing sequences that mimic the unfolding of memory: 'It had been chained up, as tame elephants always are when their attack of 'must' is due, but on the previous night it had broken its chain and escaped.'",
      "Use parenthetical asides \u2014 set off by dashes, commas, or actual parentheses \u2014 to inject qualifying commentary, self-correction, or wry editorial judgment mid-sentence: '(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)'",
      "Anchor compound-complex sentences with a strong opening clause, then let subordinate and coordinate clauses trail behind it, giving the effect of thought accumulating in real time: 'I was young and ill-educated and I had had to think out my problems in the utter silence that is imposed on every Englishman in the East.'",
      "Use parallel 'with' constructions and participial phrases to layer physical detail onto a scene without starting new sentences: 'He was breathing very rhythmically with long rattling gasps, his great mound of a side painfully rising and falling.'",
      "When delivering a key insight or emotional pivot, let a shorter declarative sentence land after a stretch of longer, clause-heavy ones to create emphasis through contrast: 'I had got to shoot the elephant.'"
    ],
    "do_not": [
      "Do not write choppy, telegraphic prose \u2014 avoid sequences of short, disconnected declarative sentences that lack clause-linking.",
      "Do not use elaborate periodic sentences where the main clause is withheld until the very end; lead with the main assertion, then qualify and extend.",
      "Do not rely on semicolons as the primary connector between clauses \u2014 prefer 'and', 'but', commas, and dashes to maintain a spoken, discursive quality."
    ],
    "evidence": [
      "His mouth slobbered. An enormous senility seemed to have settled upon him. One could have imagined him thousands of years old.",
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny, as something clamped down, in saecula saeculorum, upon the will of prostrate peoples; with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a confessional narrator who is simultaneously the protagonist and his own harshest critic \u2014 admit to shameful impulses, cowardice, and self-interest without begging for sympathy.",
      "Maintain a tone that blends earnest moral seriousness with dry, self-deprecating irony: confess ugly truths in a matter-of-fact register that refuses melodrama: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Shift between intimate personal confession ('I hated it more bitterly than I can perhaps make clear') and detached, almost sociological generalization ('He wears a mask, and his face grows to fit it') \u2014 use the personal anecdote to earn the right to make universal claims.",
      "Signal uncertainty and self-awareness through hedging phrases like 'I dare say', 'I thought then and I think now', 'somehow it always seems', and 'I suppose' \u2014 but deliver moral conclusions without hedging.",
      "Use contractions freely in narrative and emotional passages to maintain conversational intimacy, but drop them when making formal, essayistic pronouncements to signal a shift to higher register.",
      "Deploy direct address to the reader sparingly and only for rhetorical force: 'ask any Anglo-Indian official, if you can catch him off duty.'"
    ],
    "do_not": [
      "Do not adopt a detached, impersonal, or academic voice \u2014 always ground abstract claims in first-person experience and felt emotion.",
      "Do not be self-pitying or seek the reader's absolution; present moral failures plainly and let the reader judge.",
      "Do not use an overtly witty or performatively clever tone \u2014 the humor should emerge from understatement and honest observation, not from trying to be amusing."
    ],
    "evidence": [
      "Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty.",
      "And afterwards I was very glad that the coolie had been killed; it put me legally in the right and it gave me a sufficient pretext for shooting the elephant."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Begin with a concrete, specific situation \u2014 a place, a role, a felt experience \u2014 and allow the argument to emerge organically from the narrated events rather than announcing a thesis upfront.",
      "Build the central argument through a pattern of narrative event \u2192 internal conflict \u2192 moral or political generalization: let the reader witness the experience before hearing the lesson drawn from it.",
      "Handle contradictions and ambivalence honestly by giving full weight to opposing impulses within the narrator himself: 'With one part of my mind I thought... with another part I thought...' \u2014 do not resolve tensions prematurely or pretend to a clarity that wasn't felt.",
      "Use analogies and comparisons drawn from everyday, physical experience to make abstract political or moral ideas visceral: 'it is comparable to destroying a huge and costly piece of machinery', 'about as much chance as a toad under a steam-roller.'",
      "Introduce counterarguments or complications through parenthetical asides and conditional clauses rather than formal rebuttal structures \u2014 weave qualification into the narrative flow.",
      "Move from the particular to the universal: use a single incident to illuminate a systemic truth, making the logical leap explicit: 'Here was I, the white man with his gun... but in reality I was only an absurd puppet.'"
    ],
    "do_not": [
      "Do not front-load the essay with an abstract thesis statement or argument roadmap \u2014 let the narrative do the argumentative work.",
      "Do not present a tidy moral resolution; leave the reader with the full discomfort of the contradiction.",
      "Do not use formal logical connectives like 'furthermore', 'in addition', 'consequently' \u2014 prefer narrative causation ('and so', 'but then', 'at that moment')."
    ],
    "evidence": [
      "One day something happened which in a roundabout way was enlightening. It was a tiny incident in itself, but it gave me a better glimpse than I had had before of the real nature of imperialism \u2014 the real motives for which despotic governments act.",
      "I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear situating statement \u2014 a temporal marker, a shift in scene, or a declaration of internal state \u2014 that orients the reader immediately: 'I had halted on the road.', 'But at that moment I glanced round at the crowd that had followed me.'",
      "Within paragraphs, sequence ideas as a chain of cause and effect or temporal progression, with each sentence building on the previous one through 'and', 'but', and temporal connectives, creating a forward-driving momentum.",
      "Close paragraphs with a clinching sentence that delivers the emotional or argumentative payoff \u2014 often an ironic understatement, a blunt confession, or a generalization that lands with force: 'That would never do.'",
      "Use 'but' at paragraph openings to create sharp pivots between what the narrator knows he should do and what the situation compels: this 'but' structure is a signature transition device.",
      "Embed digressions, asides, and background information mid-paragraph using parentheses and dashes, keeping the main narrative thread intact while layering in context."
    ],
    "do_not": [
      "Do not use explicit transitional phrases like 'in contrast', 'on the other hand', or 'moving on' \u2014 transitions should feel like natural turns of thought, not signposts.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 every paragraph should close with a sentence that earns its final position.",
      "Do not break a continuous scene across multiple short paragraphs; keep sustained narrative action together in substantial blocks."
    ],
    "evidence": [
      "But I did not want to shoot the elephant.",
      "The crowd would laugh at me. And my whole life, every white man's life in the East, was one long struggle not to be laughed at.",
      "That would never do."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and similes drawn from the physical, mundane world to illuminate moral or emotional states \u2014 prefer concrete, slightly grotesque comparisons: 'as neatly as one skins a rabbit', 'about as much chance as a toad under a steam-roller', 'a deep, low, happy sigh, as of people who see the theatre curtain go up at last.'",
      "Employ deliberate repetition of key phrases to build rhetorical pressure and hammer home a theme: repeat 'I had got to' for compulsion, 'a sahib has got to' for social obligation, 'yellow faces' for the oppressive weight of being watched.",
      "Use lists of concrete sensory details joined by commas and 'and' to accumulate evidence or scene-setting force: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos'.",
      "Deploy parenthetical asides as a rhetorical device for editorializing, offering counterpoints, or breaking the fourth wall with the reader: '(Somehow it always seems worse to kill a large animal.)'",
      "Use antithesis and paired oppositions to dramatize inner conflict: 'seemingly the leading actor of the piece; but in reality I was only an absurd puppet', 'powerless to move and yet powerless to die.'",
      "Prefer direct, imperative address for moments of maximum rhetorical force, used very sparingly: 'Never tell me, by the way, that the dead look peaceful.'"
    ],
    "do_not": [
      "Do not use flowery, literary metaphors or ornate figurative language \u2014 keep figures of speech earthy, blunt, and drawn from common experience.",
      "Do not use rhetorical questions as a primary persuasive device \u2014 prefer declarative assertions and confessions.",
      "Do not employ alliteration, wordplay, or other overtly 'writerly' tricks that draw attention to the prose itself rather than the subject."
    ],
    "evidence": [
      "He looked suddenly stricken, shrunken, immensely old, as though the frightful impact of the bullet had paralysed him without knocking him down.",
      "The thick blood welled out of him like red velvet, but still he did not die.",
      "He becomes a sort of hollow, posing dummy, the conventionalized figure of a sahib."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with an immediate, concrete situating sentence that drops the reader into a specific place, time, and role \u2014 and that contains an ironic or provocative hook: 'In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.'",
      "Establish the personal stakes and emotional landscape within the first two paragraphs before the central narrative event begins \u2014 let the reader understand the narrator's conflicted position before the action starts.",
      "Close the essay by pulling back from the narrative to its aftermath \u2014 report others' reactions to the event, then end with a confession that reframes the entire piece: the final sentence should deliver the essay's deepest truth in an understated, almost offhand way.",
      "Structure the piece as personal-narrative-as-argument: use the conventions of the personal essay (first person, specific scene, honest reflection) to deliver political and moral analysis without ever adopting the conventions of the political essay (abstraction, citations, formal argument).",
      "Use em dashes extensively for parenthetical insertions, dramatic pauses, and appositional commentary \u2014 they are the signature punctuation mark, creating a conversational, thinking-aloud quality.",
      "Avoid headers, bullet points, or any structural formatting \u2014 the essay should flow as unbroken prose organized only by paragraph breaks."
    ],
    "do_not": [
      "Do not open with a broad, abstract statement or a dictionary definition \u2014 always begin in medias res with a concrete, placed experience.",
      "Do not close with a neat moral lesson, a call to action, or an inspirational note \u2014 end with an honest, uncomfortable admission that refuses to resolve the tension.",
      "Do not use any visual formatting (bold, italics for emphasis, headers, lists) \u2014 let the prose do all the structural and emphatic work through word choice and sentence construction alone."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool."
    ]
  }
}
```

### sample-3.txt (1956 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1956,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking concrete physical details in series, separated by commas \u2014 pile observation upon observation within a single sentence to create a cinematic tracking effect: 'At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.'",
      "Chain clauses with coordinating conjunctions ('and', 'but') to create a forward-marching momentum that mirrors procession and inevitability \u2014 let the sentence carry the reader along without letting them pause for reflection.",
      "Use participial and absolute phrases to embed secondary actions into the main clause, layering simultaneous activity: 'The superintendent of the jail, who was standing apart from the rest of us, moodily prodding the gravel with his stick, raised his head at the sound.'",
      "When delivering a moment of moral or emotional revelation, shift to a different sentence shape \u2014 move from concrete stacked-detail sentences to abstract declarative ones: 'This man was not dying, he was alive just as we were alive.'",
      "Use comma splices deliberately to fuse related observations into a single breath, creating a reportorial immediacy: 'it oscillated, slightly.'"
    ],
    "do_not": [
      "Do not use periodic sentences that withhold meaning until the end \u2014 deliver the subject and action early, then extend with qualifying detail.",
      "Do not write syntactically complex sentences with multiple levels of subordination \u2014 keep clause relationships flat and additive rather than hierarchical.",
      "Do not let abstract or philosophical sentences run long \u2014 reserve length for concrete, descriptive accumulation."
    ],
    "evidence": [
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "They crowded very close about him, with their hands always on him in a careful, caressing grip, as though all the while feeling him to make sure he was there.",
      "One mind less, one world less."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a witness \u2014 use first-person plural ('we') to implicate yourself in the collective action, shifting to first-person singular ('I') only at moments of private moral reckoning.",
      "Maintain a tone of controlled, almost clinical detachment when describing physical events, then fracture that detachment abruptly with a single sentence of raw moral insight.",
      "Express certainty through plain, unhedged declaration when making moral observations: 'I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.'",
      "Let other characters carry the emotional tone through their direct speech \u2014 render their dialogue with phonetic accuracy and vocal tics ('iss', 'hass', 'wass') to make their voices distinct without authorial commentary on their feelings.",
      "Use contractions naturally in dialogue and in the narrator's more conversational reflections, but avoid them in the essay's most formal, reflective passages.",
      "Signal irony through understatement and juxtaposition rather than through sarcasm or explicit commentary \u2014 place horrifying content next to mundane detail and let the reader feel the dissonance."
    ],
    "do_not": [
      "Do not editorialize or moralize directly \u2014 let the arrangement of concrete details carry the moral argument.",
      "Do not adopt a warm or intimate tone with the reader \u2014 maintain the cool distance of a reporter who happens to have a conscience.",
      "Do not use humor for comic relief \u2014 when humor appears, it must deepen the horror by revealing the characters' psychological need to normalize what they have witnessed."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "'He's all right,' said the superintendent.",
      "I found that I was laughing quite loudly. Everyone was laughing."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument through narrative \u2014 do not state a thesis, but instead arrange a sequence of observed events so that the moral conclusion becomes inescapable to the reader.",
      "Place the central insight at the essay's midpoint, triggered by a single concrete detail (the puddle-avoidance) \u2014 the argument pivots on one precisely observed physical action that suddenly reveals a universal truth.",
      "Use a single digressive moment (the dog episode) to interrupt the narrative's forward movement, creating tension and delay that mirrors the characters' own reluctance.",
      "Let counterarguments and complicity surface through the narrator's own participation \u2014 do not construct explicit for/against arguments but instead show the moral problem embodied in action.",
      "After the climactic event, demonstrate the argument's implications through the characters' post-event behavior (laughing, drinking) rather than through authorial summary."
    ],
    "do_not": [
      "Do not state the essay's thesis explicitly in an opening or closing paragraph \u2014 trust the narrative to carry the argument.",
      "Do not use logical connectives like 'therefore', 'consequently', or 'in conclusion' \u2014 the logic must be embedded in the sequence of events.",
      "Do not argue by citing authority, statistics, or external sources \u2014 argue only through witnessed experience."
    ],
    "evidence": [
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "An enormous relief had come upon us now that the job was done. One felt an impulse to sing, to break into a run, to snigger.",
      "The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete action or sensory detail that anchors the reader in time and place: 'Eight o'clock struck and a bugle call, desolately thin in the wet air, floated from the distant barracks.'",
      "Organize paragraphs as mini-scenes \u2014 each paragraph covers one discrete moment or action in the chronological sequence, ending when the action completes or a new agent enters.",
      "Close paragraphs with a detail or image that carries symbolic weight beyond its literal meaning, functioning as a quiet commentary: 'The dead man was a hundred yards away.'",
      "When transitioning between paragraphs, use temporal or spatial markers ('We set out', 'Suddenly', 'Then') to maintain the forward chronological momentum.",
      "Reserve single-paragraph reflective passages for the essay's moral center \u2014 set them apart from the surrounding narrative action so they register as a change in mode.",
      "In dialogue-heavy sections, give each speaker their own paragraph and use attribution with physical action to keep the scene grounded."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract generalizations \u2014 always enter through a concrete sensory anchor.",
      "Do not use paragraphs as containers for lists of thematically related points \u2014 each paragraph should advance the narrative in time.",
      "Do not end paragraphs with rhetorical questions or explicit foreshadowing \u2014 let the final image do the work silently."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains. A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "We set out for the gallows."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes drawn from the everyday and the mundane to describe the horrifying or solemn \u2014 this creates dissonance that unsettles the reader: 'like yellow tinfoil', 'like small animal cages', 'as dead as a stone', 'gone grey like bad coffee'.",
      "Deploy em dashes to insert sudden, disruptive information into the flow of a sentence \u2014 the dash marks an intrusion that mirrors the intrusion of the unexpected into the orderly: 'A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.'",
      "Use anaphora and repetition to create ritual-like intensity at the essay's emotional climax: 'Ram! Ram! Ram! Ram!'",
      "Employ lists of bodily processes ('bowels digesting food, skin renewing itself, nails growing, tissues forming') to make the abstract concept of life concrete and undeniable.",
      "Use antithesis to place life against death, the mundane against the terrible, in direct grammatical opposition: 'This man was not dying, he was alive just as we were alive.'",
      "Address the reader through impersonal constructions ('One felt an impulse') rather than direct address \u2014 make the reader inhabit the experience without being spoken to."
    ],
    "do_not": [
      "Do not use elevated or literary similes \u2014 comparisons must come from common, even slightly ugly sources (tinfoil, animal cages, bad coffee, flour bags).",
      "Do not use rhetorical questions to guide the reader's thinking \u2014 let the narrative's juxtapositions do the persuasive work.",
      "Do not use extended metaphors that run across multiple paragraphs \u2014 keep figurative language local and sharp, one image per comparison."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a scene-setting sentence that establishes place, weather, and atmosphere in a single declarative statement \u2014 drop the reader into the physical reality before any context or explanation.",
      "Establish the moral stakes gradually through accumulating physical detail rather than through any opening declaration of purpose.",
      "Close the essay with a devastatingly understated final sentence that juxtaposes the ordinary with the terrible \u2014 the last line should function as a quiet detonation: 'The dead man was a hundred yards away.'",
      "Use the essay form as literary journalism \u2014 write as a first-person participant-observer in a real event, blending narrative storytelling with a single central moral reflection.",
      "Follow a strict chronological structure from beginning to end \u2014 the essay is a walk from the cells to the gallows and back, and the structure mirrors the physical journey.",
      "Use direct speech with phonetic rendering of accents and speech patterns to create character without physical description \u2014 dialogue carries characterization.",
      "Employ parenthetical asides and qualifications within sentences using commas and em dashes rather than actual parentheses."
    ],
    "do_not": [
      "Do not open with a question, a thesis statement, or a generalization \u2014 begin in medias res, inside the scene.",
      "Do not close with a summary, a lesson learned, or a call to action \u2014 end on a concrete image that resonates with meaning the reader must supply.",
      "Do not break the chronological frame \u2014 no flashbacks, flash-forwards, or structural experimentation. The power comes from the relentless forward movement toward a known outcome."
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
      "Build sentences by stacking multiple clauses joined with commas and coordinating conjunctions ('and', 'but', 'or'), letting each clause add a new detail or qualification to the main thought before the period arrives.",
      "Use subordinate clauses at the front of sentences to establish time, condition, or concession before delivering the main assertion: 'When I was about sixteen I suddenly discovered the joy of mere words'.",
      "Interrupt sentences with parenthetical asides set off by commas or dashes to insert clarifications, qualifications, or self-corrections mid-thought: 'His subject matter will be determined by the age he lives in \u2014 at least this is true in tumultuous, revolutionary ages like our own \u2014 but before he ever begins to write he will have acquired an emotional attitude'.",
      "When making enumerations or building emphasis, chain items with 'and' rather than just commas, giving the list a cumulative, rolling momentum: 'full of detailed descriptions and arresting similes, and also full of purple passages in which words were used partly for the sake of their own sound'.",
      "Follow a long, clause-heavy sentence with a short declarative one that delivers a verdict or conclusion, creating a punctuation effect: 'That was the total of the would-be serious work that I actually set down on paper during all those years.'"
    ],
    "do_not": [
      "Do not write sentences that are syntactically simple and self-contained one after another \u2014 always weave in at least some compound or complex structures that connect thoughts within a single sentence.",
      "Do not front-load sentences with elaborate modifiers or adjective chains before the subject \u2014 instead, get to the subject quickly and let complexity accumulate after it.",
      "Do not use sentence fragments for dramatic effect or stylistic flair \u2014 every sentence should have a grammatically complete structure."
    ],
    "evidence": [
      "I was the middle child of three, but there was a gap of five years on either side, and I barely saw my father before I was eight.",
      "For this and other reasons I was somewhat lonely, and I soon developed disagreeable mannerisms which made me unpopular throughout my schooldays.",
      "Every book is a failure, but I do know with some clarity what kind of book I want to write."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a candid, self-examining narrator who treats his own life and motives as specimens for honest dissection \u2014 confess weaknesses and vanities openly rather than concealing them.",
      "Maintain a tone that is earnest and intellectually serious but never pompous \u2014 leaven authority with self-deprecation and admissions of failure: 'every book is a failure'.",
      "Address the reader as an intelligent equal who can be trusted with uncomfortable truths. Do not flatter or pander. State unpleasant observations plainly: 'It is humbug to pretend this is not a motive, and a strong one.'",
      "Use 'one' as an impersonal pronoun when generalizing from personal experience to universal principle, shifting smoothly between 'I' for autobiography and 'one' for broader claims.",
      "Signal certainty through plain declarative statements without qualifiers. Signal uncertainty through explicit markers like 'I think', 'I suppose', 'I cannot say with certainty' \u2014 never through vague hedging or passive constructions.",
      "Use contractions selectively \u2014 employ them when the tone is conversational or self-reflective ('I don't want to leave that as the final impression'), but default to uncontracted forms in expository or argumentative passages to maintain a measured, essayistic register."
    ],
    "do_not": [
      "Do not adopt a detached, academic voice that hides behind impersonal constructions \u2014 always let the first-person narrator be visibly present and accountable.",
      "Do not be falsely modest or coy about ambitions and motivations \u2014 state them with blunt clarity even when unflattering.",
      "Do not use sarcasm, irony, or wit as the primary mode \u2014 humor should be dry and understated, appearing only occasionally as a brief aside."
    ],
    "evidence": [
      "All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.",
      "I am not able, and do not want, completely to abandon the world view that I acquired in childhood.",
      "It is humbug to pretend this is not a motive, and a strong one."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Ground abstract arguments in concrete autobiography \u2014 introduce a general claim about writers or writing and then immediately illustrate it with a specific personal anecdote or experience.",
      "Build arguments chronologically when establishing background, then shift to a taxonomic or categorical structure (numbered lists, typologies) when presenting the main thesis.",
      "Introduce claims as bold, plain assertions rather than as questions or hypotheses: 'I think there are four great motives for writing.' Then follow with enumeration and elaboration.",
      "Handle counterarguments or complications by acknowledging them honestly in mid-paragraph parenthetical asides or subordinate clauses, then pressing forward with the main line of thought: 'What he said was true, but I could not have done otherwise.'",
      "Use concessive structures ('no doubt', 'of course', 'it is true that') to preemptively acknowledge objections before reasserting the main position.",
      "Move from personal narrative to general principle and back again in a recursive pattern \u2014 never stay in pure abstraction for more than a paragraph without returning to concrete experience."
    ],
    "do_not": [
      "Do not build arguments through formal logical apparatus (premises, therefore, QED) \u2014 reason through narrative and example instead.",
      "Do not dismiss opposing views or alternative explanations \u2014 acknowledge their validity before explaining why the author's position holds.",
      "Do not leave claims unsupported by either personal evidence or concrete illustration."
    ],
    "evidence": [
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.",
      "What he said was true, but I could not have done otherwise. I happened to know, what very few people in England had been allowed to know, that innocent men were being falsely accused.",
      "And yet it is also true that one can write nothing readable unless one constantly struggles to efface one's own personality."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal or logical anchor that orients the reader \u2014 a time reference ('From a very early age'), a causal link ('For this and other reasons'), or a transitional pivot ('However, throughout this time').",
      "Within paragraphs, sequence ideas as a chain of amplification: state a point, then add detail, then add a further qualification or example, then sometimes arrive at a concluding judgment.",
      "Close paragraphs with a sentence that either delivers a summary verdict ('That was the total of the would-be serious work') or pivots toward the next paragraph's topic.",
      "Connect paragraphs through explicit logical connectives at the start ('However', 'I give all this background information because', 'In one form or another this problem comes up again') rather than relying on implicit thematic links.",
      "When a paragraph covers a span of time, organize it as a chronological sweep with brief stops at specific illustrative moments rather than dwelling at length on any single episode."
    ],
    "do_not": [
      "Do not open paragraphs with a quotation, a question, or a dramatic hook \u2014 begin with a plain declarative or temporal orientation.",
      "Do not end paragraphs on an ambiguous trailing thought \u2014 close with a clear statement that either resolves the paragraph's line of thought or explicitly signals what comes next.",
      "Do not write paragraphs that circle back to their opening point without having advanced the argument \u2014 each paragraph must move the essay forward."
    ],
    "evidence": [
      "However, throughout this time I did in a sense engage in literary activities. To begin with there was the made-to-order stuff which I produced quickly, easily and without much pleasure to myself.",
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.",
      "Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogy and simile drawn from everyday physical experience to make abstract points visceral: 'Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.' 'Good prose is like a windowpane.'",
      "Employ enumeration \u2014 listing examples in series separated by commas \u2014 as a primary persuasive device, creating a sense of comprehensive coverage: 'scientists, artists, politicians, lawyers, soldiers, successful businessmen'.",
      "Use 'etc., etc.' or 'and the like' to signal that a list could continue, conveying confidence that the reader can extrapolate without being given every instance.",
      "Deploy direct quotation of speech or text (including self-quotation) as evidence, embedding small dramatic scenes within the expository flow: ''Why did you put in all that stuff?' he said.'",
      "Use Latin abbreviations (i.e.) and parenthetical clarifications to create a precise, almost legalistic specificity within otherwise flowing prose.",
      "Repeat key abstract nouns ('motive', 'impulse', 'purpose', 'political') throughout the essay to create thematic cohesion, but vary the syntactic context each time rather than using identical phrasing."
    ],
    "do_not": [
      "Do not use elaborate or extended metaphors that draw attention to their own cleverness \u2014 keep figurative language brief, plain, and functional.",
      "Do not use rhetorical questions as a structural device \u2014 make assertions directly rather than posing questions the reader is expected to answer in a predetermined way.",
      "Do not use exclamatory emphasis or hyperbolic language \u2014 persuade through accumulated plain statement rather than emotional intensification."
    ],
    "evidence": [
      "Good prose is like a windowpane.",
      "Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.",
      "Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a direct autobiographical statement that announces the subject and establishes the first-person narrator immediately \u2014 no scene-setting, no abstract thesis, just a plain personal declaration.",
      "Structure the overall essay as: autobiographical narrative establishing credentials and context \u2192 taxonomic analysis of the subject (numbered categories) \u2192 return to personal application \u2192 self-correcting final reflection.",
      "Close the essay with a deliberately self-undercutting admission that complicates everything that came before, creating honesty rather than neat resolution: acknowledge that the preceding argument was too tidy, then end on a paradox or tension that remains unresolved.",
      "Use numbered or lettered sub-sections (i, ii, iii, iv) when presenting a formal taxonomy within an otherwise flowing essay \u2014 this creates a shift in register that signals intellectual rigor.",
      "Use em dashes for parenthetical insertions that add qualifying information or self-corrections, and italicize (or quote) foreign phrases and titles of works.",
      "When quoting poetry or others' words, set them apart clearly and let them speak without excessive commentary \u2014 trust the reader to see the relevance.",
      "Use 'i.e.' for inline clarifications and dashes for longer parenthetical asides rather than parentheses."
    ],
    "do_not": [
      "Do not end with a neat, resolved conclusion or a call to action \u2014 end with honest ambivalence or a paradox that the essay has earned.",
      "Do not open with a provocative question, a quotation, or an anecdote about someone else \u2014 begin with the author's own direct statement of the essay's subject.",
      "Do not use headers, bullet points, or other formatting that fragments the essay's continuous prose flow \u2014 the only acceptable structural break is the numbered taxonomy."
    ],
    "evidence": [
      "From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.",
      "I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed.",
      "Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression."
    ]
  }
}
```

### sample-5.txt (5765 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 5765,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build default sentences by chaining multiple clauses with commas and coordinating conjunctions ('and', 'but', 'or'), creating a flowing, discursive, almost conversational cadence \u2014 the sentence should feel like a mind working through a memory in real time.",
      "Use parenthetical insertions \u2014 set off by commas, dashes, or actual parentheses \u2014 to inject clarifications, qualifications, or asides mid-sentence, as if the author is correcting or supplementing his own thought as he writes it.",
      "When delivering a key emotional or moral insight, shift to a shorter, declarative sentence that lands with finality after a stretch of longer, winding ones.",
      "Chain subordinate clauses before the main clause to build suspense or establish elaborate context before the point arrives: pile up temporal, conditional, or concessive information before releasing the main verb.",
      "Use participial and absolute phrases to compress scene-setting detail into the beginning or middle of sentences rather than giving each detail its own sentence."
    ],
    "do_not": [
      "Do not write in clipped, staccato bursts \u2014 the rhythm should feel expansive and digressive, not terse or minimalist.",
      "Do not use semicolons to join independent clauses; prefer commas with conjunctions or simply start a new sentence.",
      "Do not let every sentence follow the same subject-verb-object pattern \u2014 vary the entry point with adverbial phrases, participial openers, or fronted subordinate clauses."
    ],
    "evidence": [
      "\"I was now aged eight, so that this was a reversion to a habit which I must have grown out of at least four years earlier.\"",
      "\"She was a stocky square-built woman with hard red cheeks, a flat top to her head, prominent brows and deep-set, suspicious eyes.\"",
      "\"Sin was not necessarily something that you did: it might be something that happened to you.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person retrospective stance: the adult narrator looking back on childhood with clear-eyed, unsentimental precision, combining the child's emotional reality with the adult's analytical understanding.",
      "Maintain a tone that is earnest and morally serious but never self-pitying \u2014 describe suffering and humiliation with the calm, almost clinical detachment of someone who has fully metabolized the experience.",
      "Shift fluidly between 'I' for personal experience and 'one'/'you' for generalizing the experience into universal observation, using 'you' to draw the reader into the child's perspective and 'one' for more detached philosophical reflection.",
      "Signal certainty through plain declarative assertion ('It was a mistake to think such methods do not work') and uncertainty through explicit admission ('I forget how', 'I cannot remember whether', 'I am not sure which').",
      "Use contractions sparingly and deliberately \u2014 prefer the full form ('do not', 'I am', 'it was not') as the default, which gives the prose a slightly formal, considered quality, reserving contractions for quoted speech or moments of heightened colloquial energy.",
      "Deploy dry, understated irony rather than overt humor \u2014 let the absurdity of situations speak for itself through precise, deadpan description."
    ],
    "do_not": [
      "Do not wallow in emotion or use hyperbolic language to describe suffering \u2014 let the facts carry the emotional weight.",
      "Do not adopt a detached, purely academic tone \u2014 the narrator must remain emotionally present even when analytically composed.",
      "Do not use sarcasm or snark; the irony should be structural (created by juxtaposition of what is described and how it is described), not tonal."
    ],
    "evidence": [
      "\"To this day I can feel myself almost swooning with shame as I stood, a very small, round-faced boy in short corduroy knickers, before the two women.\"",
      "\"I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane: I must have had glimpses of it even before I left home, for my early childhood had not been altogether happy.\"",
      "\"So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce ideas through concrete narrative episodes first, then extract the general principle or moral observation from the story \u2014 never lead with the abstraction; arrive at it through lived detail.",
      "Build arguments by accumulating specific, remembered instances \u2014 proper names, exact phrases quoted from memory, physical descriptions \u2014 so that the evidence feels irreducibly particular rather than summarized.",
      "Handle counterarguments and complications through honest parenthetical admission rather than formal rebuttal: acknowledge ambiguity, faulty memory, and mixed motives as they arise naturally in the telling.",
      "Move between narrative time and reflective present tense: tell the story, then pause to analyze it from the adult vantage point, then return to the story \u2014 creating a dialectic between experience and understanding.",
      "Use logical flow that is associative but purposeful \u2014 one memory triggers another, one observation opens into a digression, but each digression circles back to or deepens the central theme.",
      "When making a moral or psychological claim, immediately ground it in a specific recalled moment or quoted phrase rather than leaving it abstract."
    ],
    "do_not": [
      "Do not present arguments as formal syllogisms or numbered points \u2014 the logic should emerge organically from narrative.",
      "Do not omit qualifications or present memories as more certain than they are; candidly flag what is forgotten, misremembered, or uncertain.",
      "Do not moralize in advance of the evidence \u2014 let the reader arrive at the judgment through the accumulated weight of detail."
    ],
    "evidence": [
      "\"I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question.\"",
      "\"Here are two things which in a sense I remembered, but which did not strike me as strange or interesting until quite recently.\"",
      "\"I cannot remember whether it was that very night that I wetted my bed again, but at any rate I did wet it again quite soon.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting temporal marker or a transitional statement that moves the narrative forward ('Soon after I arrived', 'A little later', 'After the second or third offence'), then develop the scene with accumulating concrete detail.",
      "Close paragraphs with a resonant observation, an emotional climax, or a pivot sentence that shifts the ground for what comes next \u2014 the final sentence should carry extra weight.",
      "Within paragraphs, follow a pattern of narrative action \u2192 descriptive elaboration \u2192 reflective commentary: tell what happened, flesh out the sensory detail, then extract the meaning.",
      "Use single-sentence paragraphs for moments of high drama or pivotal dialogue, especially quoted speech that needs to land with force.",
      "Connect paragraphs through implicit chronological or associative links rather than explicit transitional phrases \u2014 the reader should feel carried forward by the story's momentum, not by signposting.",
      "Allow paragraphs that tackle complex ideas or extended episodes to run long, packing in multiple related observations before closing \u2014 do not artificially break up a sustained line of thought."
    ],
    "do_not": [
      "Do not begin every paragraph with 'I' \u2014 vary the entry point with temporal phrases, character names, generalizations, or scene descriptions.",
      "Do not end paragraphs on a weak or trailing note \u2014 the final sentence should feel deliberate, whether it resolves, pivots, or lands an emotional punch.",
      "Do not use mechanical topic-sentence-then-support structure; let the paragraph's point emerge through narrative accumulation."
    ],
    "evidence": [
      "\"'REPORT YOURSELF to the Headmaster after breakfast!'\"",
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"But at any rate this was the great, abiding lesson of my boyhood: that I was in a world where it was not possible for me to be good.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and similes drawn from everyday, physical experience to make abstract psychological states visceral: compare mental pressure to physical acts (cramming like a goose, prodding like sticking pins in a sleepy person).",
      "Employ deliberate repetition of key phrases \u2014 especially phrases spoken by authority figures \u2014 to create a drumbeat effect that conveys how certain words became branded into the child's consciousness ('You are living on my bounty', 'a little office boy at forty pounds a year').",
      "Use direct quotation extensively: reproduce dialogue and the exact remembered phrases of others to make scenes dramatic and immediate, placing the reader in the room.",
      "Deploy rhetorical questions sparingly and only when genuinely inviting the reader to reflect alongside the narrator, not as ornamental flourishes.",
      "Use parenthetical asides \u2014 in actual parentheses or set off by dashes \u2014 as a signature device for self-correction, supplementary detail, or wry commentary that disrupts the main sentence's authority.",
      "Use lists and catalogues of specific, concrete details (names, places, objects, quoted phrases) to build an overwhelming accumulation of evidence rather than making a single generalized claim."
    ],
    "do_not": [
      "Do not use ornate or literary metaphors \u2014 keep figurative language grounded in common, concrete, almost homely comparisons.",
      "Do not use exclamatory or declamatory rhetoric; the prose persuades through precise observation and quiet moral clarity, not through raised voice.",
      "Do not use anaphora or other repetition devices for purely aesthetic effect \u2014 repetition should always serve the purpose of showing how certain ideas or phrases became psychologically embedded."
    ],
    "evidence": [
      "\"as one keeps a sleepy person awake by sticking pins in him\"",
      "\"the scholarship boys were crammed with learning as cynically as a goose is crammed for Christmas\"",
      "\"(What colour were those eyes, I wonder? I remember them as green, but actually no human being has green eyes. Perhaps they were hazel.)\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open sections by plunging directly into a specific, concrete episode \u2014 establish the scene and the narrator's age or circumstance immediately, then let the significance emerge from the telling.",
      "Begin with a plain declarative sentence that anchors the reader in time and place before any interpretation or reflection occurs.",
      "Close sections with a sentence that pulls back to a broader moral, psychological, or philosophical observation that transcends the specific episode \u2014 the ending should feel like a lens widening from particular to universal.",
      "Use transitional sentences between major sections that explicitly mark the shift ('So much for the episode of the bed-wetting') with a brisk, businesslike tone that contrasts with the emotional weight of what preceded.",
      "Format dialogue as integrated quotation within paragraphs for normal speech, but break dramatic or climactic speech into its own short paragraph for emphasis.",
      "Use capitalization and typographic emphasis (e.g., 'REPORT YOURSELF') extremely sparingly, reserved for moments when the words carried outsized psychological weight in the child's experience.",
      "Use em dashes for abrupt insertions and interruptions, parentheses for more considered asides and factual clarifications \u2014 distinguish between the two based on the spontaneity of the interjection."
    ],
    "do_not": [
      "Do not open with a thesis statement or abstract claim \u2014 always begin in the concrete and particular.",
      "Do not close with a neat, resolved conclusion that ties everything up \u2014 prefer endings that acknowledge ambiguity, ongoing uncertainty, or unresolved tension.",
      "Do not use headers, bullet points, or other structural formatting \u2014 the essay should flow as continuous prose organized only by paragraph breaks."
    ],
    "evidence": [
      "\"Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.\"",
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"I had a conviction of sin and folly and weakness, such as I do not remember to have felt before.\""
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
  "one_line_description": "plainspoken, morally urgent, confessional \u2014 earned authority through concrete evidence and honest self-implication",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build default sentences as compound or compound-complex structures, chaining independent clauses with commas and coordinating conjunctions ('and', 'but', 'or') to create a sustained, discursive flow that mimics a mind working through a problem in real time.",
      "Use subordinate clauses to embed qualifications, concessions, and conditions \u2014 place them before or after the main clause depending on whether the qualification should precede or follow the assertion.",
      "Vary rhythm by alternating between long, multi-clause sentences that develop an argument or accumulate detail and shorter declarative sentences that land a conclusion or pivot to a new point.",
      "Use parallel structure within sentences to build cumulative force: chain noun phrases, verb phrases, or clause structures in series with consistent grammatical form.",
      "Place the key assertion or turn at the end of longer sentences \u2014 build through qualification and setup, then deliver the punch at the clause's close.",
      "Use colons to introduce an elaboration, restatement, or consequence \u2014 treat the colon as a rhetorical hinge that says 'here is what I mean.'",
      "Insert parenthetical asides set off by dashes, commas, or parentheses to inject clarifications, qualifications, or self-corrections mid-sentence.",
      "Use participial and absolute phrases to layer physical or contextual detail into the main clause without spawning new sentences.",
      "Stack concrete physical details in series within a single sentence, separated by commas, to create a cinematic accumulation effect."
    ],
    "do_not": [
      "Do not write in clipped, telegraphic style \u2014 avoid sequences of bare subject-verb-object sentences without connective tissue between ideas.",
      "Do not front-load sentences with the main point and then trail off into qualifications \u2014 the energy should build toward the sentence's end, not dissipate.",
      "Do not use complex subordination without grounding the reader in a clear main clause \u2014 every sentence must have a backbone the reader can follow.",
      "Do not rely on semicolons as the primary connector between clauses \u2014 prefer 'and', 'but', commas, and dashes to maintain a spoken, discursive quality.",
      "Do not use sentence fragments for dramatic effect or stylistic flair \u2014 every sentence should have a grammatically complete structure."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a sharp-eyed, plainspoken intellectual who is simultaneously the protagonist and his own harshest critic \u2014 authoritative but not academic, firm but not hectoring.",
      "Use first person ('I') to anchor personal claims and model the self-critical honesty you demand of others; use 'we' and 'one' for shared observations and universal principles; use 'you' sparingly for direct challenge.",
      "Signal confidence through flat declarative assertions \u2014 state claims as plain facts rather than hedging them; when uncertainty is genuine, mark it explicitly and briefly ('I cannot say with certainty', 'this is a guess') rather than softening every claim.",
      "Maintain a tone of controlled moral seriousness \u2014 the subject matters deeply, but authority comes from clarity and evidence, not from emotional appeals or raised volume.",
      "Confess weaknesses, vanities, and ugly truths in a matter-of-fact register that refuses melodrama \u2014 present moral failures plainly and let the reader judge.",
      "Deploy dry, understated irony through precise observation and juxtaposition rather than through jokes, sarcasm, or performative cleverness \u2014 let the absurdity of the subject speak for itself.",
      "Shift fluidly between intimate personal confession and detached generalization \u2014 use the personal anecdote to earn the right to make universal claims."
    ],
    "do_not": [
      "Do not adopt a neutral, detached academic tone \u2014 the writer has a clear position and argues it openly, grounded in first-person experience.",
      "Do not plead with, flatter, or pander to the reader \u2014 address them as an equal capable of seeing the truth once plainly stated.",
      "Do not use excessive hedging or qualify every assertion \u2014 commit to claims and let evidence carry the weight.",
      "Do not be self-pitying or seek the reader's absolution \u2014 describe suffering and failure with calm, almost clinical composure.",
      "Do not use overtly witty or performatively clever language that draws attention to the prose itself rather than the subject."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Ground abstract arguments in concrete, specific evidence \u2014 quote or describe particular passages, scenes, or remembered episodes, then dissect them to reveal the patterns you are arguing about.",
      "Introduce ideas through concrete narrative episodes or specimens first, then extract the general principle \u2014 never lead with pure abstraction; arrive at it through lived detail.",
      "Build arguments through a dialectical pattern: state the problem or situation, present evidence, analyze what the evidence reveals, then derive conclusions or prescriptions.",
      "Deploy analogies that translate abstract arguments into physical, everyday imagery \u2014 prefer concrete, slightly homely comparisons over literary or elevated ones.",
      "Preemptively acknowledge counterarguments, your own vulnerability to the faults you criticize, and genuine uncertainty \u2014 then turn that honesty into further evidence for your position.",
      "Move between narrative time and reflective present tense: tell the story, pause to analyze from the adult vantage point, then return \u2014 creating a dialectic between experience and understanding.",
      "Proceed from diagnosis to prescription when the genre allows \u2014 first establish what is wrong with evidence, then explain why, then state what should be done."
    ],
    "do_not": [
      "Do not argue purely from authority or abstract principle \u2014 always ground claims in specific, examinable examples the reader can verify.",
      "Do not present your argument as the only possible view without acknowledging its limits \u2014 concede genuine uncertainties while maintaining your overall position.",
      "Do not let the argument become purely negative \u2014 after tearing down bad practice, build up concrete alternatives.",
      "Do not use formal logical connectives like 'furthermore', 'in addition', 'consequently' as primary transitions \u2014 prefer narrative causation or plain conjunctions.",
      "Do not moralize in advance of the evidence \u2014 let the reader arrive at the judgment through accumulated weight of detail."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear anchor \u2014 a temporal marker, a situating action, a transitional statement, or a declaration that announces the paragraph's subject and connects to the preceding argument.",
      "Sequence ideas within paragraphs by moving from claim or action to specific evidence or detail to analytical commentary \u2014 state the point, show the example, explain what it proves.",
      "Close paragraphs with a sentence that delivers the paragraph's verdict, pivots toward the next idea, or lands an emotional or ironic punch \u2014 every paragraph should earn its final sentence.",
      "Use 'but' at paragraph or sentence openings to create sharp pivots between what is expected and what is true, between what should happen and what does.",
      "Within longer paragraphs, use internal pivots marked by 'but', 'yet', or 'on the other hand' to introduce complication before arriving at the paragraph's conclusion.",
      "Use transitional phrases and logical connectives between paragraphs to maintain argumentative continuity \u2014 signal whether you are adding, contrasting, exemplifying, or concluding."
    ],
    "do_not": [
      "Do not begin paragraphs with unfocused scene-setting or throat-clearing \u2014 get to the point or the action in the first sentence.",
      "Do not end paragraphs on a trailing, inconclusive thought \u2014 every paragraph should close with a sentence that resolves, pivots, or resonates.",
      "Do not stack examples without analysis \u2014 after presenting specimens, always explain what they demonstrate.",
      "Do not use mechanical topic-sentence-then-support structure; let the paragraph's point emerge through narrative accumulation when appropriate."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid similes and analogies drawn from everyday, physical, slightly homely experience to make abstract concepts visceral \u2014 prefer concrete, earthy comparisons over literary or ornate ones (snow blurring outlines, a goose crammed for Christmas, bad coffee, a toad under a steam-roller).",
      "Deploy catalogues and lists of concrete specifics to build cumulative evidence \u2014 string together particular instances to demonstrate a pattern is pervasive.",
      "Use deliberate repetition of key phrases to create rhetorical pressure and hammer home a theme \u2014 repeat only when the repetition builds cumulative argumentative or psychological force.",
      "Employ antithesis and paired oppositions to dramatize contradictions: place opposed ideas in direct grammatical parallel to sharpen the conflict.",
      "Use parenthetical asides \u2014 in dashes or parentheses \u2014 as a signature device for self-correction, editorial commentary, or breaking the formal flow with conversational interjection.",
      "Address the reader with direct imperatives ('Look again', 'Consider') sparingly to create engagement and complicity.",
      "Use direct quotation extensively \u2014 reproduce dialogue, exact remembered phrases, and others' words to make scenes immediate and evidential.",
      "Use the dash to insert dramatic pauses, parenthetical qualifications, or appositional commentary within sentences \u2014 it is the signature punctuation mark."
    ],
    "do_not": [
      "Do not use dead, mixed, or ornate metaphors \u2014 every figure of speech must evoke a clear, concrete image; if you cannot picture it, discard it.",
      "Do not rely on abstraction when a concrete image is available \u2014 always prefer the specific, visualizable example over the generalized statement.",
      "Do not use rhetorical questions as a primary persuasive device \u2014 prefer declarative assertions and honest confessions.",
      "Do not use alliteration, wordplay, or overtly 'writerly' tricks that draw attention to the prose itself rather than the subject.",
      "Do not use exclamatory or declamatory rhetoric \u2014 persuade through accumulated plain statement, not through raised voice or hyperbole."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by dropping the reader into a concrete situation \u2014 a specific place, time, role, or felt experience \u2014 and allow the argument to emerge from the narrated events or stated problem rather than from an abstract thesis.",
      "Establish the stakes and the narrator's conflicted position within the first paragraphs \u2014 let the reader understand the tension before the central action or argument unfolds.",
      "Close with a sentence that is understated, honest, and refuses neat resolution \u2014 end with a confession, a paradox, a self-undercutting admission, or a concrete image that resonates with meaning the reader must supply.",
      "Structure the essay as personal-narrative-as-argument or diagnosis-to-prescription: use first-person experience, specific evidence, and honest reflection to deliver analysis without adopting the conventions of formal academic argument.",
      "Use em dashes extensively for parenthetical insertions, dramatic pauses, and appositional commentary \u2014 they create a conversational, thinking-aloud quality.",
      "Avoid headers, bullet points, or other structural formatting as the default \u2014 let the essay flow as continuous prose organized by paragraph breaks, with numbered lists or taxonomies used only when genuinely warranted by the argument's structure.",
      "Reconnect the conclusion to the opening frame \u2014 close the circle between the essay's first tension and its final resolution or irresolution."
    ],
    "do_not": [
      "Do not open with a dictionary definition, a broad abstract statement, or a provocative question \u2014 begin in medias res with a concrete, placed experience or a plain personal declaration.",
      "Do not close with vague exhortation, a neat moral lesson, or an inspirational call to action \u2014 end with honest ambivalence, a specific prescription, or a quiet detonation of an image.",
      "Do not use bold, italics for emphasis, or other visual formatting to do the work of persuasion \u2014 let word choice and sentence construction carry all structural and emphatic weight."
    ]
  },
  "signature_phrases": {
    "use": [
      "but",
      "and",
      "I dare say",
      "I think",
      "I suppose",
      "in a sense",
      "in one form or another",
      "it is true that",
      "no doubt",
      "of course",
      "on the other hand",
      "the point is",
      "the thing that",
      "one could",
      "one felt",
      "as I have tried to show",
      "I said earlier",
      "in other words",
      "that is to say",
      "a sort of",
      "at any rate",
      "the fact is",
      "it is humbug to pretend"
    ],
    "never_use": [
      "furthermore",
      "additionally",
      "indeed",
      "utilize",
      "leverage",
      "impactful",
      "stakeholder",
      "paradigm",
      "basically",
      "essentially",
      "it goes without saying",
      "needless to say",
      "in conclusion",
      "to summarize",
      "the bottom line",
      "at the end of the day",
      "let's unpack",
      "deep dive",
      "nuanced",
      "robust",
      "synergy",
      "in terms of"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'additionally', 'moreover' with 'and', 'but', or a plain new sentence.",
    "Convert passive constructions to active where possible \u2014 find the agent and make it the subject.",
    "Replace Latinate or polysyllabic words with their plain Anglo-Saxon equivalents when meaning is preserved.",
    "Break any sentence that has lost its main clause under layers of subordination \u2014 restructure so the backbone is clear.",
    "If a metaphor does not evoke a concrete visual image, replace it with a plain statement or a physical comparison.",
    "Where a paragraph opens with throat-clearing or scene-setting filler, delete it and start with the first substantive sentence.",
    "Replace vague hedges ('it could be argued that', 'there is a sense in which') with direct assertion or explicit honest uncertainty ('I think', 'I am not sure').",
    "If a paragraph ends weakly or trails off, move the strongest sentence to the final position or write a new clinching sentence.",
    "Convert any 'in order to' to 'to' \u2014 cut unnecessary verbiage.",
    "Where the prose tells the reader what to feel, replace it with the concrete evidence that would make the reader feel it."
  ]
}
```