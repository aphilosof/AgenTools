# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** formal, involved, explicit — prosecutorial clarity with confessional honesty, compound-complex sentences anchored in concrete physical detail

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
      "Build the backbone of your prose from compound and compound-complex sentences that chain multiple independent clauses with commas, semicolons, and coordinating conjunctions \u2014 let one thought spill into the next within a single sentence.",
      "Use subordinate clauses to qualify and refine claims mid-sentence: insert 'which', 'that', 'if', 'when', 'because' clauses to layer conditions, exceptions, and elaborations onto your main assertion before the period arrives.",
      "After a sustained passage of long, multi-clause sentences, drop in a blunt, declarative sentence to land the point \u2014 let the short sentence carry the argumentative weight precisely because the preceding complexity sets it up.",
      "Chain parallel phrases and clauses within sentences using commas and coordinating conjunctions to build cumulative momentum \u2014 stack examples, consequences, or conditions in series before closing the sentence.",
      "Use colons to pivot from a general claim to its specific illustration or logical consequence within the same sentence, creating a two-part structure of assertion-then-evidence."
    ],
    "do_not": [
      "Do not write in a staccato rhythm of uniformly short, clipped sentences \u2014 the default tempo should be expansive and discursive, not telegraphic.",
      "Do not let complex sentences become formless run-ons; each clause should add a distinct logical step, not merely pad the sentence.",
      "Do not front-load sentences with multiple prepositional phrases or adverbial clauses before the subject \u2014 get to the subject and verb relatively quickly, then elaborate after."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.\"",
      "\"It becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts.\"",
      "\"The point is that the process is reversible.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a first-person singular voice that is direct and unapologetic \u2014 state your positions as your own ('I will come back to this presently', 'I am going to translate') rather than hiding behind impersonal constructions.",
      "Alternate between first person for personal argument and the impersonal 'one' for universal prescriptions \u2014 use 'I' when presenting your own analysis and 'one' when describing what any thoughtful person would or should do.",
      "Address the reader directly with 'you' to implicate them in the argument \u2014 pull them into complicity ('if you or I were told to write a few lines') rather than leaving them as passive observers.",
      "Maintain an authoritative, prosecutorial tone \u2014 present your case with the confidence of someone who has already won the argument, but acknowledge your own fallibility in brief, disarming asides ('I have again and again committed the very faults I am protesting against').",
      "Use contractions selectively: deploy them in conversational asides and when addressing the reader directly to create intimacy, but drop them in formal declarations and sweeping claims to signal gravity.",
      "Signal certainty through unhedged declaratives ('The great enemy of clear language is insincerity') and signal uncertainty only when genuinely speculative, marking it explicitly ('this is a guess which I have not sufficient knowledge to verify')."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, academic register \u2014 this voice has moral conviction and is not afraid to call things swindles, perversions, or humbug.",
      "Do not be gratuitously aggressive or sneering \u2014 the tone is firm and sometimes sardonic but never cruel; criticize the writing, not the writer's character.",
      "Do not hedge habitually with 'perhaps', 'it seems', 'one might argue' \u2014 commit to your claims and qualify only when intellectual honesty demands it."
    ],
    "evidence": [
      "\"Look again at the examples I gave at the beginning of this essay.\"",
      "\"Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.\"",
      "\"The great enemy of clear language is insincerity.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with the prevailing wrong assumption, lay it out fairly, then dismantle it \u2014 begin by articulating what 'most people' or the conventional wisdom holds, then show why it is mistaken or incomplete.",
      "Argue by concrete exhibit: present specimens, examples, or passages as evidence, then dissect them \u2014 let the reader see the problem in real instances before you generalize from them.",
      "Use analogy to make abstract processes visceral \u2014 compare linguistic decay to drinking, political euphemism to snow blurring outlines, ready-made phrases to cavalry horses answering the bugle.",
      "Build arguments in a linear, cumulative structure: establish the problem with evidence, diagnose the causes, trace the consequences, then prescribe the remedy \u2014 each section depends on what came before.",
      "Handle counterarguments by stating them in their strongest form, then conceding what is true in them before pivoting to show where they fail ('So far as the general tone or spirit of a language goes, this may be true, but it is not true in detail').",
      "Use the technique of deliberate self-implication \u2014 acknowledge your own guilt in the very faults you criticize to preempt the charge of hypocrisy and to demonstrate that the problem is systemic, not personal.",
      "When hedging, use specific phrases: 'probably', 'I should expect to find', 'this is a guess which I have not sufficient knowledge to verify' \u2014 hedge precisely and rarely, not as a general softening habit."
    ],
    "do_not": [
      "Do not argue purely from abstraction \u2014 every general claim must be anchored to at least one concrete example, quotation, or illustration.",
      "Do not dismiss opposing views without engaging them \u2014 always state the counterargument before refuting it.",
      "Do not present prescriptions without first having demonstrated the problem through evidence \u2014 earn the right to tell the reader what to do by showing them why it matters."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks. It is rather the same thing that is happening to the English language.\"",
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear thesis or framing claim that tells the reader what the paragraph will argue \u2014 then spend the rest of the paragraph proving or illustrating that claim with examples and analysis.",
      "Close paragraphs by either pivoting to the next topic ('I will come back to this presently'), delivering a punchy summative judgment, or issuing a forward-looking claim that sets up the next section.",
      "Transition between paragraphs by echoing a keyword or concept from the previous paragraph's close in the new paragraph's opening, or by using explicit temporal/logical markers ('Now that I have made this catalogue', 'As I have tried to show').",
      "Within paragraphs, sequence ideas as: claim \u2192 concrete example(s) \u2192 analysis of examples \u2192 broader implication or generalization. Let evidence precede the lesson drawn from it.",
      "Use cataloguing paragraphs that present a labeled category (e.g., 'DYING METAPHORS', 'OPERATORS OR VERBAL FALSE LIMBS') followed by definition, then a cascade of examples, then analysis of what those examples reveal."
    ],
    "do_not": [
      "Do not write paragraphs that merely list points without analytical connective tissue \u2014 every example must be followed by interpretation.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 each paragraph should arrive somewhere, even if that destination is a question or a pivot.",
      "Do not begin paragraphs with examples before establishing what point the examples serve."
    ],
    "evidence": [
      "\"Now, it is clear that the decline of a language must ultimately have political and economic causes: it is not due simply to the bad influence of this or that individual writer.\"",
      "\"Each of these passages has faults of its own, but, quite apart from avoidable ugliness, two qualities are common to all of them.\"",
      "\"I said earlier that the decadence of our language is probably curable.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, original analogies that make abstract processes concrete and physical \u2014 compare intellectual laziness to bodily decay, euphemism to snow covering details, clich\u00e9d phrases to prefabricated building parts.",
      "Deploy parallel structure as your primary rhetorical weapon: list examples, consequences, or conditions in grammatically parallel series to build rhythm and argumentative force ('Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire').",
      "Use rhetorical questions sparingly but pointedly \u2014 pose them to the reader to force engagement with an uncomfortable implication ('what is a \"rift\", for instance?').",
      "Use the technique of exhibit-then-demolish: quote a passage at length, then take it apart piece by piece, showing exactly where and how it fails.",
      "Employ direct imperatives to the reader ('Consider', 'Look again', 'Look back through this essay') to create an active, participatory reading experience.",
      "Use italicized or quoted terms to flag language under examination \u2014 treat words themselves as specimens to be held up and inspected.",
      "Repeat key words deliberately across paragraphs to build thematic continuity \u2014 'meaning', 'concrete', 'vague', 'ready-made phrases' should recur as a deliberate motif, not as a stylistic lapse."
    ],
    "do_not": [
      "Do not use the very clich\u00e9s, dying metaphors, or pretentious Latinate vocabulary the essay condemns \u2014 practice what you preach about fresh, concrete language.",
      "Do not overuse rhetorical questions to the point where they substitute for actual argument \u2014 each question must do real work.",
      "Do not use metaphors whose literal meaning you have not visualized \u2014 if the image clashes or is incoherent, discard it."
    ],
    "evidence": [
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.\"",
      "\"his words, like cavalry horses answering the bugle, group themselves automatically into the familiar dreary pattern.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by articulating the conventional wisdom on the topic \u2014 present the received view in a fair, even sympathetic summary, then immediately signal that you will overturn it.",
      "In the opening paragraph, compress the entire argument the essay will refute into a few sentences, giving the reader a clear antagonist to follow through the piece.",
      "Close with concrete, numbered prescriptive rules \u2014 after the full argument has been made, distill your advice into actionable directives that the reader can carry away.",
      "Follow the final rules with a qualifying coda that acknowledges their limitations ('One could keep all of them and still write bad English') to prevent the closing from feeling dogmatic.",
      "End the essay by returning to the opening theme \u2014 circle back to the connection between language and politics that was promised in the title and opening, creating structural closure.",
      "Use section headers in ALL CAPS as organizational signposts when presenting a taxonomy or catalogue \u2014 these function as mini-titles within the essay.",
      "Use parenthetical asides in em dashes for ironic commentary, qualification, or to insert a counterexample mid-sentence without breaking the main clause's momentum.",
      "Use numbered or bulleted lists only for final prescriptive rules \u2014 within the body of the argument, present enumerations as flowing prose, not formatted lists."
    ],
    "do_not": [
      "Do not open with a personal anecdote or scene-setting \u2014 begin with the intellectual landscape and the argument, not with yourself.",
      "Do not close with a vague, inspirational flourish \u2014 end with specific advice or a concrete call to action that follows from everything argued.",
      "Do not use headers for every section \u2014 reserve them for taxonomic sections where category labels genuinely aid navigation; let argumentative sections flow without headers."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.\"",
      "\"Break any of these rules sooner than say anything outright barbarous.\""
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
      "Build the backbone of your prose with medium-length compound sentences joined by 'and' and 'but', creating a steady, unhurried narrative pulse that carries the reader forward without rushing.",
      "Chain multiple clauses within a single sentence using commas and coordinating conjunctions to accumulate concrete details \u2014 stack physical observations, actions, and judgments together so the sentence enacts the gradual piling-up of experience.",
      "Deploy occasional very long sentences to convey mounting psychological or social pressure, letting clause after clause build toward a climactic insight or reversal: 'Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.'",
      "Use short declarative sentences to deliver blunt, unadorned conclusions or pivots after a stretch of longer, more layered prose: 'This happened more than once.' / 'I got up.'",
      "Employ semicolons sparingly to join two independent clauses that present contrasting or parallel observations, giving the sentence a balanced, essayistic weight: 'a story always sounds clear enough at a distance, but the nearer you get to the scene of events the vaguer it becomes.'",
      "Use em dashes to insert clarifying asides, parenthetical qualifications, or dramatic restatements mid-sentence \u2014 they function as the author pausing to sharpen or redirect: 'I had merely sent for the rifle to defend myself if necessary \u2014 and it is always unnerving to have a crowd following you.'"
    ],
    "do_not": [
      "Do NOT write in staccato bursts of fragmentary sentences \u2014 maintain grammatically complete sentences even when they are short.",
      "Do NOT front-load sentences with elaborate subordinate clauses before the main verb; place the subject and verb early and let qualifications follow.",
      "Do NOT use ellipses or trailing-off constructions \u2014 finish every thought definitively."
    ],
    "evidence": [
      "I was sub-divisional police officer of the town, and in an aimless, petty kind of way anti-European feeling was very bitter.",
      "I got up.",
      "To come all that way, rifle in hand, with two thousand people marching at my heels, and then to trail feebly away, having done nothing \u2014 no, that was impossible."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a self-aware, morally conflicted participant-narrator. Present yourself as simultaneously inside the experience and critically observing your own complicity.",
      "Maintain a tone that is earnest and confessional but never sentimental \u2014 deliver uncomfortable admissions with matter-of-fact plainness rather than emotional pleading: 'I was very glad that the coolie had been killed; it put me legally in the right.'",
      "Signal uncertainty and self-doubt through explicit, unhedged admissions of ignorance or confusion ('I did not even know', 'I did not then know', 'I had no intention') rather than through softening modals or vague qualifiers.",
      "Use contractions freely in narrative and reflective passages to keep the register conversational and accessible \u2014 write 'I didn't' and 'wasn't' and 'couldn't' as a default.",
      "Shift into a slightly more formal, declarative register when stating general truths or political-philosophical observations, dropping contractions and adopting impersonal constructions: 'For it is the condition of his rule that he shall spend his life in trying to impress the natives.'",
      "Employ sardonic, self-deprecating honesty as the dominant form of humor \u2014 the comedy comes from the narrator's candid acknowledgment of his own absurdity and moral failure, never from jokes or wit for their own sake.",
      "Use 'you' occasionally to draw the reader into the narrator's position, making the experience feel universal: 'In a job like that you see the dirty work of Empire at close quarters.'"
    ],
    "do_not": [
      "Do NOT adopt a detached, academic, or objective tone \u2014 always write as someone personally implicated and emotionally affected.",
      "Do NOT moralize or preach \u2014 let the narrative details and honest admissions carry the moral weight without explicit exhortation.",
      "Do NOT use false modesty or performative self-flagellation \u2014 the confessions should feel reluctant and precise, not theatrical."
    ],
    "evidence": [
      "Theoretically \u2014 and secretly, of course \u2014 I was all for the Burmese and all against their oppressors, the British.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "In a job like that you see the dirty work of Empire at close quarters."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Construct arguments through narrative rather than syllogism \u2014 let a specific, concrete episode become the vehicle for a larger political or philosophical insight. The claim emerges from the story rather than preceding it.",
      "Introduce the central thesis only after establishing the personal and situational context that makes the thesis feel inevitable: the reader should arrive at the insight simultaneously with the narrator.",
      "Acknowledge contradictions and opposing feelings within yourself rather than resolving them \u2014 hold two incompatible positions openly ('With one part of my mind I thought of the British Raj as an unbreakable tyranny... with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts').",
      "Use the logical structure: specific situation \u2192 growing pressure \u2192 forced action \u2192 reflection on what the action reveals about power, freedom, or human nature.",
      "Hedge through honest qualification rather than academic caution \u2014 use phrases like 'I dare say', 'I suppose', 'Somehow it always seems', 'I thought then and I think now' to convey genuine uncertainty rather than rhetorical politeness.",
      "State counterarguments or complicating facts plainly and let them stand in tension with your main point rather than dismissing or fully resolving them: 'The older men said I was right, the younger men said it was a damn shame.'"
    ],
    "do_not": [
      "Do NOT present a clean, linear argument with thesis-evidence-conclusion structure \u2014 let the argument emerge organically from narrated experience.",
      "Do NOT resolve moral ambiguity neatly \u2014 leave the reader sitting with the discomfort of contradictory truths.",
      "Do NOT cite authorities, statistics, or abstract principles as primary evidence \u2014 ground everything in what was personally witnessed and felt."
    ],
    "evidence": [
      "One day something happened which in a roundabout way was enlightening. It was a tiny incident in itself, but it gave me a better glimpse than I had had before of the real nature of imperialism \u2014 the real motives for which despotic governments act.",
      "I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys.",
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny... with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a plain situation-setting or time-marking sentence that orients the reader in the narrative sequence: 'The orderly came back in a few minutes with a rifle and five cartridges', 'I had halted on the road', 'But at that moment I glanced round at the crowd.'",
      "Build paragraphs by layering concrete physical details, then pivoting to the narrator's internal reaction or broader reflection \u2014 move from outside to inside within the same paragraph.",
      "Close paragraphs with a sentence that carries thematic or emotional weight \u2014 a surprising admission, a generalized insight, or a vivid image that lingers: 'And my whole life, every white man's life in the East, was one long struggle not to be laughed at.'",
      "Use 'But' as a paragraph-opening transition to signal a complication, reversal, or shift in the narrator's thinking \u2014 this creates a dialectical rhythm between paragraphs where each one pushes back against the previous.",
      "Within longer paragraphs, sequence ideas as: establishing detail \u2192 complicating detail \u2192 accumulated pressure \u2192 the narrator's forced conclusion or action. Let paragraphs enact the same structure of mounting pressure that the essay as a whole follows.",
      "Use parenthetical asides within paragraphs to insert wry commentary or personal disclaimers that break the narrative momentum just enough to remind the reader of the narrator's self-awareness: '(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)'"
    ],
    "do_not": [
      "Do NOT begin paragraphs with abstract topic sentences that announce what the paragraph will argue \u2014 enter through concrete scene or action.",
      "Do NOT end paragraphs on a flat, neutral note \u2014 every paragraph ending should carry some sting, irony, or resonance.",
      "Do NOT use explicit transitional phrases like 'furthermore', 'in addition', 'consequently' \u2014 transitions should be implicit through narrative chronology or the 'But' / 'And' pivot."
    ],
    "evidence": [
      "But I did not want to shoot the elephant.",
      "(Somehow it always seems worse to kill a large animal.)",
      "That would never do."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical analogies and similes drawn from everyday domestic or industrial life to make abstract political points visceral: 'it is comparable to destroying a huge and costly piece of machinery', 'I should have about as much chance as a toad under a steam-roller', 'as neatly as one skins a rabbit.'",
      "Deploy extended metaphor to make a political argument feel embodied \u2014 turn a single event (shooting an elephant) into a sustained symbol for imperial power dynamics without ever stating the metaphor explicitly as metaphor.",
      "Use accumulation (listing concrete physical details separated by commas) to build scenes that overwhelm the reader with sensory specificity: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos.'",
      "Employ antithesis to crystallize contradictions \u2014 place opposing ideas in syntactically parallel structures: 'powerless to move and yet powerless to die', 'seemingly the leading actor of the piece; but in reality I was only an absurd puppet.'",
      "Use direct address to the reader sparingly but pointedly to universalize a specific observation: 'ask any Anglo-Indian official, if you can catch him off duty.'",
      "Repeat key words and phrases ('I had got to', 'looking a fool', 'yellow faces') across the essay to create thematic throughlines \u2014 deliberate reuse rather than synonym variation.",
      "Use simile-as-scene to describe the elephant's death with cinematic precision, making each stage a distinct image: 'he seemed to tower upward like a huge rock toppling, his trunk reaching skyward like a tree.'"
    ],
    "do_not": [
      "Do NOT use literary or highbrow allusions as persuasive devices \u2014 keep analogies grounded in physical, observable reality.",
      "Do NOT deploy rhetorical questions as a structural device; when a question appears, it should be a real question embedded in the narrative action ('Would I please come and do something about it?').",
      "Do NOT use exclamatory emphasis or hyperbolic language to signal emotional intensity \u2014 let flat, precise description carry the emotional weight."
    ],
    "evidence": [
      "I should have about as much chance as a toad under a steam-roller.",
      "He becomes a sort of hollow, posing dummy, the conventionalized figure of a sahib.",
      "The thick blood welled out of him like red velvet, but still he did not die."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by plunging directly into the specific personal situation \u2014 name the place, state the narrator's role, and immediately establish the central tension or discomfort in the first sentence: 'In Moulmein, in Lower Burma, I was hated by large numbers of people.'",
      "Follow the opening sentence with a self-deprecating qualification that undercuts any hint of self-importance \u2014 the very first move after establishing the situation should signal the narrator's ironic self-awareness.",
      "Structure the essay as a single extended narrative episode bookended by contextual reflection \u2014 begin with background that makes the episode meaningful, narrate the episode in chronological detail, then close with aftermath and reflection.",
      "Close the essay with a final sentence that delivers the real, often shameful or ironic, truth that the entire essay has been building toward \u2014 make the last line a confession that reframes everything: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Use em dashes for parenthetical clarification and emphasis throughout. Use parentheses for brief, informal asides that read as the narrator's private mutterings to the reader.",
      "Avoid headers, bullet points, or any structural formatting \u2014 the essay should read as continuous prose organized only by paragraph breaks.",
      "When describing violent or disturbing scenes, maintain clinical specificity rather than turning away \u2014 the moral seriousness comes from unflinching observation: 'his face had scored a trench a foot deep and a couple of yards long.'"
    ],
    "do_not": [
      "Do NOT open with a generalized thesis statement or philosophical observation \u2014 enter through concrete, located personal experience.",
      "Do NOT close with a neat moral lesson or uplifting resolution \u2014 end on a note of ambiguity, self-implication, or ironic honesty.",
      "Do NOT use any structural formatting elements (headers, lists, bold, italics) \u2014 the essay form depends entirely on prose paragraphs and the rhythm of narration and reflection."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)"
    ]
  }
}
```

### sample-3.txt (1028 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1028,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking concrete physical details in sequence, separated by commas, so the reader accumulates sensory impressions clause by clause: subject did X, detail Y, detail Z.",
      "Chain clauses with 'and' to create a sense of continuous, unbroken observation \u2014 as though the narrator's eye is panning across the scene without cutting away.",
      "Use participial phrases ('gripping him by arm and shoulder', 'yielding his arms limply to the ropes') to layer simultaneous actions within a single sentence, giving a cinematic quality.",
      "Follow a long, detail-laden sentence with a short, blunt declarative that delivers the emotional or moral weight \u2014 let the short sentence land like a verdict after the accumulation.",
      "Use appositives freely to identify people and objects inline ('Francis, the head jailer, a fat Dravidian in a white drill suit and gold spectacles') rather than breaking identification into separate sentences.",
      "When building compound sentences, prefer the rhythm of two or three independent clauses joined by commas and 'and' rather than subordinating one to another \u2014 keep the clauses grammatically equal to suggest events unfolding in real time."
    ],
    "do_not": [
      "Do not use sentence fragments for stylistic emphasis \u2014 every sentence should be grammatically complete, even the short ones.",
      "Do not front-load sentences with adverbial clauses or abstract qualifications; begin with the concrete subject or setting detail, then add context.",
      "Do not rely on semicolons to join clauses \u2014 use commas with conjunctions or periods instead."
    ],
    "evidence": [
      "They crowded very close about him, with their hands always on him in a careful, caressing grip, as though all the while feeling him to make sure he was there.",
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "He was dangling with his toes pointed straight downwards, very slowly revolving, as dead as a stone."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who is embedded in the scene but morally apart from it \u2014 the narrator participates in the action yet watches himself and others with detached, almost clinical attention.",
      "Maintain a tone of restrained horror: never exclaim or editorialize loudly; instead let the physical details carry the moral weight. The narrator's discomfort surfaces through what he chooses to notice, not through emotional language.",
      "Use contractions freely in dialogue to render speech naturally, but keep the narrator's own prose mostly uncontracted and measured \u2014 this creates a formal observational register that contrasts with the colloquial voices around him.",
      "Signal the narrator's moral stance through ironic juxtaposition rather than direct argument: place a horrifying detail next to a banal one and let the reader feel the dissonance.",
      "When the narrator does allow himself a direct moral reflection, frame it as a sudden realization or discovery ('It is curious, but till that moment I had never realized\u2026') rather than a pre-formed opinion.",
      "Use 'we' to implicate the narrator and the reader in collective complicity \u2014 the narrator never fully separates himself from the group performing the act."
    ],
    "do_not": [
      "Do not use exclamatory or emotionally heightened language in the narrator's voice \u2014 reserve exclamation for dialogue only.",
      "Do not adopt a preachy or lecturing tone; the narrator should seem to be processing the event in real time, not delivering a prepared moral.",
      "Do not use hedging language or qualifiers ('perhaps', 'it seems') except very sparingly and only to suggest the narrator's uncertainty about others' inner states."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "I found that I was laughing quite loudly. Everyone was laughing.",
      "An enormous relief had come upon us now that the job was done. One felt an impulse to sing, to break into a run, to snigger."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Do not argue a thesis directly \u2014 instead build toward a single epiphanic moment through accumulated concrete detail, so the moral insight emerges from observation rather than being stated in advance.",
      "Introduce the central moral realization through a small, seemingly trivial physical action (stepping aside to avoid a puddle) that suddenly illuminates the larger meaning. The argument pivots on one precisely observed detail.",
      "After the epiphany, briefly expand on its implications through a cascade of concrete examples ('bowels digesting food, skin renewing itself, nails growing') rather than abstract reasoning.",
      "Let irony do the argumentative work: place scenes of casual cheerfulness immediately after scenes of death, and let the reader draw the conclusion.",
      "Use the chronological sequence of events as the logical structure \u2014 the essay's argument IS the narrative, proceeding from preparation through execution to aftermath, with the moral meaning discovered along the way.",
      "Handle counterarguments or complications by acknowledging the narrator's own complicity and confusion ('I found that I was laughing quite loudly') rather than constructing formal rebuttals."
    ],
    "do_not": [
      "Do not state the thesis in the opening or frame the piece as an argument \u2014 let the narrative discover its own meaning.",
      "Do not use citations, statistics, or appeals to authority \u2014 all evidence must come from direct, lived observation.",
      "Do not resolve the moral tension neatly; end with ironic dissonance that lingers."
    ],
    "evidence": [
      "And once, in spite of the men who gripped him by each shoulder, he stepped slightly aside to avoid a puddle on the path.",
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete grounding detail \u2014 a time, a place, a physical action \u2014 to anchor the reader in the scene before layering in further observation or reflection.",
      "Within paragraphs, sequence details cinematically: start with the wide establishing shot (setting, group action), then narrow to specific individuals and physical particulars.",
      "Close key paragraphs with a sentence that reframes or crystallizes everything that preceded it \u2014 a summary image or a quietly devastating observation that shifts the reader's understanding.",
      "Use single-sentence paragraphs exclusively for dialogue beats or moments of abrupt narrative action, never for the narrator's reflections.",
      "Transition between paragraphs through chronological progression ('We set out\u2026', 'Eight o'clock struck\u2026', 'Suddenly\u2026') or spatial movement rather than abstract connectives.",
      "Alternate between paragraphs of dense physical description and paragraphs that contain a single exchange of dialogue, creating a rhythm of showing and speaking."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract generalizations or topic sentences that announce what the paragraph will be about.",
      "Do not use explicit transition phrases like 'however', 'moreover', 'in addition' \u2014 let temporal and spatial movement carry the reader forward.",
      "Do not place the narrator's moral reflections at the start of a paragraph; build to them through detail so they arrive as a culmination."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "There was a clanking noise, and then dead silence. The prisoner had vanished, and the rope was twisting on itself.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes rooted in the mundane and physical to make unfamiliar or horrifying things graspable: compare human situations to animals, household objects, and everyday sights ('like men handling a fish which is still alive', 'like yellow tinfoil', 'as dead as a stone').",
      "Deploy lists of concrete bodily processes ('bowels digesting food, skin renewing itself, nails growing, tissues forming') to make abstract concepts (life, death, humanity) viscerally real.",
      "Use repetition for incantatory effect, especially when rendering sounds or cries \u2014 repeat the exact word to create the rhythm the narrator hears ('Ram! Ram! Ram! Ram!').",
      "Employ ironic juxtaposition as the primary persuasive device: place the trivial next to the terrible without commentary, and let the gap between them generate meaning.",
      "Use the dash to insert a sudden interruption or revelation into the middle of a sentence ('A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard'), creating surprise within the narrative flow.",
      "Render non-native English speech with phonetic spelling and distinctive phrasing ('hass', 'iss', 'wass') to give characters a specific, individualized voice without caricature."
    ],
    "do_not": [
      "Do not use literary or elevated metaphors \u2014 keep all figurative language drawn from common, physical, sensory experience.",
      "Do not use rhetorical questions in the narrator's voice; reserve questions for dialogue only.",
      "Do not use extended or belabored analogies \u2014 similes should be brief, one clause, then move on."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with an immediate scene-setting sentence that drops the reader into a specific place, time, and atmosphere without preamble \u2014 no context, no thesis, just the world of the essay.",
      "Establish the physical environment in the first paragraph with precise sensory detail (light, weather, architecture) before introducing any characters or action.",
      "Close the piece with a short, devastating sentence that reintroduces the subject of the essay in the starkest possible terms after a passage of seeming normalcy \u2014 the final sentence should be a gut-punch of ironic proximity.",
      "Use em dashes for parenthetical insertions and sudden narrative turns. Use quoted dialogue with single quotation marks (British convention).",
      "Format as continuous prose with no headers, no lists, no typographic emphasis \u2014 the essay should read as a single unbroken narrative arc.",
      "Follow the genre conventions of the literary reportage essay: first-person witness account, chronological structure, moral weight carried by observed detail rather than argumentation, and an ending that refuses easy resolution."
    ],
    "do_not": [
      "Do not open with a generalization, a definition, or an abstract statement of theme \u2014 begin in medias res with concrete sensory detail.",
      "Do not close with an explicit moral lesson or summary of what the reader should take away \u2014 end on an image or fact that speaks for itself.",
      "Do not break the narrative into sections or use any formatting devices (bullets, headers, bold) \u2014 maintain the unbroken essay form."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard."
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
      "Build sentences by chaining multiple independent and dependent clauses with commas and coordinating conjunctions ('and', 'but'), creating a flowing, accretive effect where each clause adds a qualification, extension, or new detail to the thought.",
      "Use participial and appositive phrases to embed additional information mid-sentence without starting a new sentence \u2014 tuck descriptions, clarifications, and asides into the main clause structure.",
      "When presenting a sequence of experiences or examples, pack them into a single extended sentence separated by commas and conjunctions rather than breaking them into separate sentences.",
      "Deploy short, declarative sentences as decisive conclusions or pivots after longer, more qualified passages \u2014 use brevity to signal certainty or finality.",
      "Interrupt the forward momentum of a sentence with parenthetical asides set off by dashes or commas to insert self-corrections, qualifications, or wry commentary before resuming the main thought."
    ],
    "do_not": [
      "Do not write in a staccato rhythm of consistently short, clipped sentences \u2014 the default mode is expansive and clause-rich.",
      "Do not use sentence fragments for stylistic effect \u2014 even short sentences should be grammatically complete.",
      "Do not front-load sentences with elaborate subordinate clauses before the main verb; instead, lead with the subject and main clause, then extend with qualifications and additions."
    ],
    "evidence": [
      "\"Between the ages of about seventeen and twenty-four I tried to abandon this idea, but I did so with the consciousness that I was outraging my true nature and that sooner or later I should have to settle down and write books.\"",
      "\"I knew that I had a facility with words and a power of facing unpleasant facts, and I felt that this created a sort of private world in which I could get my own back for my failure in everyday life.\"",
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a frank, self-examining narrator who treats his own life and motives with the same analytical detachment he would apply to any subject \u2014 confess weaknesses and vanities without apology or self-pity.",
      "Maintain a tone that is simultaneously authoritative and self-deprecating: make bold, sweeping claims about human nature or writing, then immediately undercut personal pretension with honest admissions of failure or limitation.",
      "Use 'one' and 'you' as impersonal generalizing pronouns when shifting from personal anecdote to universal observation, creating a sense that private experience illuminates general truths.",
      "Signal confidence through plain, unhedged assertion ('It is humbug to pretend...', 'It is simply a question of...') rather than through elevated vocabulary or academic qualifiers.",
      "When making self-critical admissions, state them flatly and matter-of-factly rather than with theatrical self-flagellation \u2014 treat personal failings as data points, not confessions."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic voice \u2014 the writing must feel like a real person thinking honestly on the page.",
      "Do not indulge in false modesty or performative humility; when making a bold claim, commit to it directly rather than softening it with excessive hedging.",
      "Do not become sentimental or nostalgic when recounting personal history \u2014 maintain analytical clarity even when the subject is emotional."
    ],
    "evidence": [
      "\"All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\"",
      "\"It is humbug to pretend this is not a motive, and a strong one.\"",
      "\"I am not able, and do not want, completely to abandon the world view that I acquired in childhood.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure arguments chronologically-then-analytically: first narrate the personal development or sequence of events, then extract the general principle or taxonomy from the narrative.",
      "Introduce bold, categorical claims as plain assertions, then immediately support them with concrete personal examples or historical specifics rather than abstract reasoning.",
      "Use enumerated lists or taxonomies (labeled with roman numerals or clear markers) to break complex subjects into discrete categories, giving each category a short definitional paragraph.",
      "Handle counterarguments by preemptively stating the objection in the voice of an imagined critic or through reported dialogue, then conceding its partial validity before reasserting the original position on different grounds.",
      "Use 'but' and 'and yet' as primary logical pivots \u2014 build an argument in one direction, then reverse or complicate it with a contrasting observation introduced by a simple conjunction.",
      "When hedging, use phrases like 'I suppose', 'I think', 'in so far as', 'no doubt' \u2014 hedge sparingly and with these natural, conversational markers rather than academic qualifiers."
    ],
    "do_not": [
      "Do not construct arguments through pure abstraction or theoretical reasoning without grounding them in specific, concrete examples drawn from personal experience.",
      "Do not dismiss counterarguments outright \u2014 acknowledge their force before moving past them.",
      "Do not use formal logical connectives ('therefore', 'consequently', 'moreover') as primary transitions; prefer simpler conjunctions and implicit logical connections."
    ],
    "evidence": [
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"'Why did you put in all that stuff?' he said. 'You've turned what might have been a good book into journalism.' What he said was true, but I could not have done otherwise.\"",
      "\"And yet it is also true that one can write nothing readable unless one constantly struggles to efface one's own personality.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a temporal or logical anchor that situates the reader in the narrative or argument ('From a very early age...', 'When I was about sixteen...', 'However, throughout this time...').",
      "Organize ideas within a paragraph as an expanding spiral: begin with a specific claim or event, then widen outward through qualifications, examples, and related observations before arriving at a concluding generalization or pivot.",
      "Close paragraphs with a sentence that either delivers a decisive judgment, a wry self-assessment, or a forward-looking statement that sets up the next paragraph's topic.",
      "Use 'But' and 'However' at paragraph openings to create a turn \u2014 each new paragraph often complicates or reverses the direction of the previous one.",
      "When a paragraph contains an enumerated list or taxonomy, introduce the list with a framing sentence that states how many items follow and what they represent, then present each item as its own paragraph or clearly marked section."
    ],
    "do_not": [
      "Do not write paragraphs that merely list examples without an organizing claim or principle \u2014 every paragraph should have a discernible argumentative purpose.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 close with something definite, even if what's definite is an honest admission of uncertainty.",
      "Do not use generic transitional phrases ('In addition', 'Furthermore', 'Additionally') \u2014 transitions should arise organically from the logical relationship between ideas."
    ],
    "evidence": [
      "\"However, throughout this time I did in a sense engage in literary activities.\"",
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\"",
      "\"Putting aside the need to earn a living, I think there are four great motives for writing, at any rate for writing prose.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, everyday similes and metaphors drawn from physical experience rather than literary or intellectual allusions \u2014 prefer comparisons to illness, manual labor, windows, and common objects ('Good prose is like a windowpane', 'like a long bout of some painful illness').",
      "Deploy the 'etc. etc.' construction to gesture at a category's breadth without exhaustively listing its members, creating a tone of weary familiarity with the subject.",
      "Use direct address and imperatives sparingly but pointedly \u2014 employ phrases like 'Let me give just one example' or 'It can be seen' to guide the reader through the argument as a reasonable companion.",
      "Build lists of concrete nouns or noun phrases in parallel structure to create accumulative force, especially when cataloguing types of people, motives, or experiences.",
      "Use reported speech and direct quotation to dramatize intellectual conflicts \u2014 let critics and interlocutors speak in their own words before responding.",
      "Repeat key abstract nouns ('motive', 'purpose', 'impulse', 'bias') across paragraphs to create thematic coherence without explicit signposting."
    ],
    "do_not": [
      "Do not use elaborate, extended metaphors or allegorical conceits \u2014 keep figurative language brief, sharp, and grounded.",
      "Do not use rhetorical questions as a primary persuasive device; prefer plain assertions.",
      "Do not employ alliteration, wordplay, or self-conscious verbal flourishes \u2014 the prose style should feel transparent and unadorned."
    ],
    "evidence": [
      "\"Good prose is like a windowpane.\"",
      "\"Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.\"",
      "\"Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct, autobiographical declaration that immediately establishes the essay's subject and the author's relationship to it \u2014 no throat-clearing, no scene-setting, no anecdote; begin with the core claim.",
      "Structure the essay as intellectual autobiography: use the chronological arc of personal development as the scaffolding for a general argument about the essay's abstract subject.",
      "Close with a passage of radical honesty that deliberately undercuts any impression of noble purpose built up in the body, then end on a memorable aphoristic sentence that crystallizes the essay's central tension.",
      "Use parenthetical dashes to insert clarifications, abbreviations ('i.e.'), and self-corrections mid-sentence \u2014 these create a voice that is thinking in real time on the page.",
      "Use 'i.e.' and quoted terms in single quotation marks to define or problematize key words, drawing attention to the precision of language as itself a subject.",
      "Embed quoted poetry or extended quotations as block elements when they serve as evidence, introduced with clear framing context.",
      "Use formatting markers like roman numerals (i), (ii), (iii), (iv) for taxonomic lists rather than bullet points or numbered lists."
    ],
    "do_not": [
      "Do not open with a question, provocation, or dramatic anecdote \u2014 begin with plain autobiographical statement.",
      "Do not close on a note of resolution or certainty \u2014 end with an honest tension between competing impulses or values.",
      "Do not use headers, subheadings, or other structural formatting within the essay body \u2014 the prose should flow as continuous, unbroken argument with only paragraph breaks and occasional enumerated lists."
    ],
    "evidence": [
      "\"From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.\"",
      "\"Good prose is like a windowpane. I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed.\"",
      "\"Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression.\""
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
      "Build long sentences by stacking multiple clauses joined with commas, coordinating conjunctions, and parenthetical asides \u2014 let the sentence accumulate detail and qualification before arriving at its point.",
      "Use the pattern of a declarative setup followed by a colon or dash and then a dramatic payoff or specific illustration: 'I had a conviction of sin and folly and weakness, such as I do not remember to have felt before.'",
      "Chain subordinate clauses to embed temporal, causal, and concessive qualifications within a single sentence \u2014 'I did not at first understand that I was being taken at reduced fees; it was only when I was about eleven that Flip and Sambo began throwing the fact in my teeth.'",
      "Deploy short, plain sentences after long complex ones to deliver verdicts, reversals, or emotional blows \u2014 the short sentence lands harder because of the elaborate buildup preceding it.",
      "Favor periodic sentence structures where the main clause is delayed by introductory subordinate clauses, participial phrases, or temporal markers \u2014 front-load conditions and context before the core statement.",
      "Use parallel triadic structures for emphasis, especially in moments of moral or emotional summary: 'without knowing that you committed it, without wanting to commit it, and without being able to avoid it.'"
    ],
    "do_not": [
      "Do not write in clipped, staccato rhythms with many consecutive short sentences \u2014 the prose should feel discursive and accretive, gathering momentum.",
      "Do not use sentence fragments for stylistic effect \u2014 every sentence should be grammatically complete, even the short emphatic ones.",
      "Do not front-load sentences with the main clause and then trail off into qualifications \u2014 instead, embed qualifications within or before the main assertion."
    ],
    "evidence": [
      "Sin was not necessarily something that you did: it might be something that happened to you.",
      "I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey: a sense of desolate loneliness and helplessness, of being locked up not only in a hostile world but in a world of good and evil where the rules were such that it was actually not possible for me to keep them.",
      "'Look what you've made me do!' he said furiously, holding the broken crop."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the first person as an adult looking back on childhood, maintaining the adult's analytical intelligence while recreating the child's emotional logic and confusion \u2014 narrate what the child felt, then explain what the adult now understands.",
      "Adopt an earnest, unsparing tone \u2014 be candid about shame, fear, and vulnerability without self-pity. State humiliations plainly and let the facts carry the emotional weight.",
      "Use the generalized 'one' and 'you' to shift from personal confession to universal observation \u2014 'To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember...' \u2014 this elevates private experience into shared understanding.",
      "Signal uncertainty with honest qualifiers like 'I believe,' 'I imagine,' 'I forget how,' 'I cannot remember whether' \u2014 these admissions of imperfect memory paradoxically increase credibility.",
      "Maintain a controlled, essayistic authority even when describing extreme experiences \u2014 the voice never becomes hysterical or melodramatic. Understatement is the default mode for suffering.",
      "When quoting others, reproduce their speech with vivid specificity including verbal tics, then comment dryly on what was really meant \u2014 let the gap between spoken words and actual intent do the satirical work."
    ],
    "do_not": [
      "Do not adopt a detached, clinical voice \u2014 the narrator is emotionally engaged even when being analytical.",
      "Do not use self-pity, sentimentality, or emotional pleading \u2014 describe painful things with directness and composure.",
      "Do not use irony so heavy that it becomes sarcasm or sneering \u2014 the tone is more rueful than bitter, more clear-eyed than vindictive."
    ],
    "evidence": [
      "I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane: I must have had glimpses of it even before I left home, for my early childhood had not been altogether happy.",
      "The fact that the beating had not hurt was a sort of victory and partially wiped out the shame of the bed-wetting.",
      "Flip never said in plain words that I was a non-paying pupil, no doubt because vague phrases like 'all we've done for you' had a deeper emotional appeal."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce abstract claims through concrete narrative \u2014 tell the story first, then extract the principle. The bed-wetting episode leads to a philosophical insight about the nature of sin; the beating leads to a thesis about childhood guilt.",
      "Build arguments by accumulating specific remembered details and then pivoting to a generalized moral or psychological observation \u2014 move from 'here is what happened' to 'here is what it meant.'",
      "Handle counterarguments and complications through parenthetical concessions embedded mid-sentence \u2014 'perhaps, as it was the first time, he was not hitting me very hard' \u2014 rather than dedicating separate paragraphs to objections.",
      "Use the pattern of narrating an event, then circling back to analyze it from the adult perspective, often introduced by phrases like 'Here are two things which in a sense I remembered, but which did not strike me as strange or interesting until quite recently.'",
      "Acknowledge the unreliability of memory explicitly and use this as a rhetorical tool \u2014 admitting gaps strengthens the authority of what is claimed as remembered.",
      "Move between episodes associatively rather than strictly chronologically \u2014 one anecdote triggers a thematic connection to another, connected by the underlying argument about power, class, or childhood psychology."
    ],
    "do_not": [
      "Do not state the thesis first and then illustrate it \u2014 always let the narrative lead and the idea emerge from it.",
      "Do not use formal logical connectives like 'therefore,' 'consequently,' or 'in conclusion' to structure arguments \u2014 the logic should feel organic, arising from the texture of recollection.",
      "Do not dismiss complexity or wrap up moral questions neatly \u2014 leave tensions unresolved where the experience itself was unresolved."
    ],
    "evidence": [
      "I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question. It was possible, therefore, to commit a sin without knowing that you committed it, without wanting to commit it, and without being able to avoid it.",
      "It can also happen that one's memories grow sharper after a long lapse of time, because one is looking at the past with fresh eyes and can isolate and, as it were, notice facts which previously existed undifferentiated among a mass of others.",
      "This acceptance of guilt lay unnoticed in my memory for twenty or thirty years."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a transitional orientation sentence that sets the scene or announces the topic \u2014 'After the second or third offence I was warned that I should be beaten next time, but I received the warning in a curiously roundabout way.'",
      "Within paragraphs, sequence ideas as a chain of narrative progression interspersed with commentary \u2014 event, then the child's perception of the event, then the adult's reflection on that perception.",
      "Close substantial paragraphs with a sentence that widens the lens \u2014 move from the specific incident to its broader significance or emotional resonance.",
      "Use single-sentence paragraphs exclusively for dramatic dialogue or scene transitions, never for authorial commentary \u2014 keep analysis embedded in longer paragraphs.",
      "Connect paragraphs through implicit narrative continuity rather than explicit connectives \u2014 the next paragraph picks up the story or extends the idea without announcing 'furthermore' or 'moreover.'",
      "When a paragraph introduces a new character or setting, front-load a vivid physical description with one or two telling details before proceeding to action."
    ],
    "do_not": [
      "Do not write paragraphs that are purely analytical without any narrative anchor \u2014 every reflective passage should be tethered to a specific memory or scene.",
      "Do not end paragraphs with neat summary sentences that close off meaning \u2014 prefer forward-leaning endings that propel the reader into the next passage.",
      "Do not use bullet points, numbered lists, or any non-prose organizational format within the body of the essay."
    ],
    "evidence": [
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "She was a stocky square-built woman with hard red cheeks, a flat top to her head, prominent brows and deep-set, suspicious eyes.",
      "But at any rate this was the great, abiding lesson of my boyhood: that I was in a world where it was not possible for me to be good."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physically vivid analogies drawn from everyday life to make abstract ideas tangible \u2014 'as cynically as a goose is crammed for Christmas,' 'as one keeps a sleepy person awake by sticking pins in him,' 'flogging him towards the goal as one might do with a foundered horse.'",
      "Deploy direct quotation extensively \u2014 reproduce the exact words of authority figures in their full pomposity or cruelty, and let the reader judge. The quoted speech does the satirical work.",
      "Use parenthetical asides in the middle of sentences to insert doubt, qualification, or wry commentary \u2014 '(What colour were those eyes, I wonder? I remember them as green, but actually no human being has green eyes. Perhaps they were hazel.)'",
      "Employ anaphora and parallel structures in triadic groupings for moments of moral or emotional weight \u2014 'without knowing... without wanting... without being able.'",
      "Use the rhetorical move of stating something with lettered or enumerated clarity within prose \u2014 '(a) wicked and (b) outside my control' \u2014 to give informal logic a mock-formal precision.",
      "Build dramatic scenes using direct dialogue with minimal attribution \u2014 let characters speak in their own voices and let the reader hear the cruelty or absurdity without the narrator editorializing."
    ],
    "do_not": [
      "Do not use literary or highbrow allusions as analogies \u2014 prefer homely, physical, animalistic comparisons.",
      "Do not use metaphors that call attention to their own cleverness \u2014 figures of speech should clarify, not decorate.",
      "Do not use rhetorical questions to the reader for persuasive effect \u2014 questions in the text belong to characters or to the narrator genuinely wondering."
    ],
    "evidence": [
      "We would sit round the long shiny table, made of some very pale-coloured hard wood, with Sambo goading, threatening, exhorting, sometimes joking, very occasionally praising, but always prodding, prodding away at one's mind to keep it up to the right pitch of concentration, as one keeps a sleepy person awake by sticking pins in him.",
      "I knew the bed-wetting was (a) wicked and (b) outside my control.",
      "'You are living on my bounty' was his favourite phrase in this context. At least once I listened to these words between blows of the cane."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay in medias res with a specific, grounding detail \u2014 plunge the reader directly into a scene or situation without preamble or context-setting generalization. Begin with the particular, not the universal.",
      "Establish the temporal frame early \u2014 make clear that the narrator is looking back from adulthood, and use this dual perspective (child experiencing / adult interpreting) as the engine of the entire essay.",
      "Close major sections with a brief, matter-of-fact summary sentence that simultaneously wraps up the episode and hints at unresolved damage \u2014 'So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.'",
      "Use section breaks or transitional paragraphs to shift between episodes, marked by phrases like 'So much for...' or 'But there is one more thing to be remarked.'",
      "Titles should be evocative and literary \u2014 drawn from quotation, allusion, or resonant phrasing rather than descriptive labels.",
      "Format the essay as continuous prose with no headers, subheadings, or visual breaks beyond paragraph spacing \u2014 this is a sustained personal essay, not a structured article. Use em dashes and parentheses liberally as inline structural devices."
    ],
    "do_not": [
      "Do not open with a thesis statement, abstract claim, or philosophical generalization \u2014 always begin in scene.",
      "Do not close with a tidy moral lesson or redemptive arc \u2014 endings should be honest, sometimes unresolved, acknowledging that some childhood damage simply persists.",
      "Do not use formatting devices like bold text, italics for emphasis (except for titles or foreign words), headers, or block quotes \u2014 all emphasis comes from word choice and sentence structure, with the exception of capitals used sparingly for dramatic effect ('REPORT YOURSELF')."
    ],
    "evidence": [
      "Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.",
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt."
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
  "one_line_description": "formal, involved, explicit \u2014 prosecutorial clarity with confessional honesty, compound-complex sentences anchored in concrete physical detail",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone of your prose from compound and compound-complex sentences that chain multiple independent clauses with commas, semicolons, and coordinating conjunctions \u2014 let one thought spill into the next within a single sentence.",
      "Use subordinate clauses to qualify and refine claims mid-sentence: insert 'which', 'that', 'if', 'when', 'because' clauses to layer conditions, exceptions, and elaborations onto your main assertion before the period arrives.",
      "Chain parallel phrases and clauses within sentences using commas and coordinating conjunctions to build cumulative momentum \u2014 stack examples, consequences, or conditions in series before closing the sentence.",
      "Use participial and appositive phrases to embed additional information mid-sentence without starting a new sentence \u2014 tuck descriptions, clarifications, and asides into the main clause structure.",
      "Use colons and dashes to pivot from a general claim to its specific illustration or logical consequence within the same sentence, creating a two-part structure of assertion-then-evidence.",
      "After a sustained passage of long, multi-clause sentences, drop in a blunt, complete declarative sentence to land the point \u2014 let the short sentence carry the argumentative weight precisely because the preceding complexity sets it up.",
      "Use em dashes to insert clarifying asides, parenthetical qualifications, or dramatic restatements mid-sentence \u2014 they function as the author pausing to sharpen or redirect before resuming the main clause."
    ],
    "do_not": [
      "Do not write in a staccato rhythm of uniformly short, clipped sentences \u2014 the default tempo should be expansive and discursive, not telegraphic.",
      "Do not use sentence fragments for stylistic effect \u2014 every sentence must be grammatically complete, even the short ones.",
      "Do not let complex sentences become formless run-ons; each clause should add a distinct logical step, not merely pad the sentence.",
      "Do not front-load sentences with multiple prepositional phrases or adverbial clauses before the subject \u2014 get to the subject and verb relatively quickly, then elaborate after."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a direct, self-aware narrator who states positions as his own \u2014 use 'I' when presenting personal analysis and observations rather than hiding behind impersonal constructions.",
      "Maintain a tone that is simultaneously authoritative and self-deprecating: make bold, sweeping claims, then undercut personal pretension with honest admissions of failure or limitation.",
      "Address the reader with 'you' to implicate them in the argument, and use the impersonal 'one' when shifting from personal experience to universal observation.",
      "Signal certainty through unhedged declaratives for core claims and signal uncertainty only when genuinely speculative, marking it explicitly with 'I believe', 'I suppose', 'this is a guess'.",
      "Use contractions freely in narrative and conversational passages but drop them in formal declarations and sweeping claims to signal gravity.",
      "Employ sardonic, self-deprecating honesty \u2014 comedy and irony come from candid acknowledgment of the narrator's own absurdity, complicity, or moral failure, never from jokes or wit for their own sake.",
      "When making self-critical admissions, state them flatly and matter-of-factly rather than with theatrical self-flagellation \u2014 treat personal failings as data points."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, academic register \u2014 this voice has moral conviction and personal involvement.",
      "Do not be gratuitously aggressive or sneering \u2014 the tone is firm and sometimes sardonic but never cruel.",
      "Do not hedge habitually with 'perhaps', 'it seems', 'one might argue' \u2014 commit to claims and qualify only when intellectual honesty demands it.",
      "Do not indulge in sentimentality, self-pity, or emotional pleading \u2014 describe painful things with directness and composure."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Argue by concrete exhibit: present specimens, examples, episodes, or passages as evidence, then dissect them \u2014 let the reader see the problem in real instances before generalizing.",
      "Introduce abstract claims through concrete narrative \u2014 tell the story or present the evidence first, then extract the principle. The idea should emerge from the material rather than preceding it.",
      "Acknowledge contradictions and opposing views by stating them in their strongest form, conceding what is true, then pivoting to show where they fail or complicate the picture.",
      "Use analogy to make abstract processes visceral \u2014 compare intellectual phenomena to physical, everyday realities drawn from domestic life, manual labor, or the natural world.",
      "Use the technique of deliberate self-implication \u2014 acknowledge your own guilt in the faults you criticize to preempt hypocrisy and demonstrate that problems are systemic, not personal.",
      "Build arguments in a linear, cumulative structure: establish the problem with evidence, diagnose the causes, trace the consequences, then prescribe the remedy \u2014 each section depends on what came before.",
      "Handle counterarguments through parenthetical concessions or by reporting the objection in the voice of an imagined critic, then reasserting the original position on different grounds.",
      "When hedging, use specific natural phrases: 'probably', 'I should expect', 'I suppose', 'no doubt' \u2014 hedge precisely and rarely, not as a general softening habit."
    ],
    "do_not": [
      "Do not argue purely from abstraction \u2014 every general claim must be anchored to at least one concrete example, quotation, or personal experience.",
      "Do not dismiss opposing views without engaging them \u2014 always state the counterargument before refuting it.",
      "Do not present prescriptions without first having demonstrated the problem through evidence.",
      "Do not resolve moral ambiguity neatly \u2014 leave the reader sitting with the discomfort of contradictory truths where the experience itself was unresolved.",
      "Do not use formal logical connectives like 'therefore', 'consequently', 'moreover' as primary transitions \u2014 prefer simpler conjunctions and implicit logical connections."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete grounding detail \u2014 a time, place, situation, or clear framing claim that orients the reader before layering in further observation or reflection.",
      "Within paragraphs, sequence ideas as: claim or scene-setting \u2192 concrete example(s) or narrative detail \u2192 analysis or the narrator's internal reaction \u2192 broader implication or generalization.",
      "Close paragraphs with a sentence that carries thematic or emotional weight \u2014 a surprising admission, a generalized insight, a punchy summative judgment, or a vivid image that lingers.",
      "Use 'But' as a paragraph-opening transition to signal a complication, reversal, or shift in the narrator's thinking \u2014 create a dialectical rhythm between paragraphs.",
      "Transition between paragraphs through chronological progression, echoing a keyword from the previous paragraph, or spatial movement rather than abstract connectives.",
      "Use parenthetical asides within paragraphs to insert wry commentary or personal qualifications that break momentum just enough to remind the reader of the narrator's self-awareness."
    ],
    "do_not": [
      "Do not write paragraphs that merely list points without analytical connective tissue \u2014 every example must be followed by interpretation.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 each paragraph should arrive somewhere definite, even if that destination is an honest admission of uncertainty.",
      "Do not use explicit transitional phrases like 'furthermore', 'in addition', 'consequently' \u2014 transitions should arise organically from the logical relationship between ideas."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physically vivid analogies and similes drawn from everyday life to make abstract processes tangible \u2014 compare to animals, household objects, illness, manual labor, and common domestic sights.",
      "Deploy parallel structure as a primary rhetorical weapon: list examples, consequences, or conditions in grammatically parallel series to build rhythm and argumentative force.",
      "Deploy direct quotation extensively \u2014 reproduce the exact words of others and let the reader judge. Let quoted speech do the satirical or evidential work.",
      "Use the technique of exhibit-then-demolish: present a passage, example, or episode, then take it apart piece by piece, showing exactly where and how it fails.",
      "Employ direct imperatives to the reader sparingly but pointedly \u2014 'Consider', 'Look again', 'Look back' \u2014 to create an active, participatory reading experience.",
      "Use ironic juxtaposition as a persuasive device: place the trivial next to the terrible, the cheerful next to the horrifying, without commentary, and let the gap generate meaning.",
      "Repeat key words deliberately across paragraphs to build thematic continuity as a motif, not as a stylistic lapse.",
      "Use parenthetical asides set off by dashes or parentheses to insert doubt, qualification, or wry commentary mid-sentence."
    ],
    "do_not": [
      "Do not use literary or highbrow allusions as primary analogies \u2014 keep all figurative language drawn from common, physical, sensory experience.",
      "Do not use metaphors whose literal meaning you have not visualized \u2014 if the image clashes or is incoherent, discard it.",
      "Do not overuse rhetorical questions \u2014 each one must do real work, and prefer plain assertions as the default mode.",
      "Do not employ alliteration, wordplay, or self-conscious verbal flourishes \u2014 the prose style should feel transparent and unadorned."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by establishing the subject and the central tension immediately \u2014 whether through a direct autobiographical declaration, a concrete scene, or the conventional wisdom you will overturn. No throat-clearing.",
      "In narrative essays, plunge the reader into a specific personal situation in the first sentence \u2014 name the place, state the narrator's role, establish the discomfort or conflict.",
      "In argumentative essays, open by articulating the prevailing wrong assumption, present the received view fairly, then signal that you will overturn it.",
      "Close with radical honesty \u2014 a confession, an ironic admission, or a concrete observation that reframes everything the essay has argued, refusing easy resolution or uplifting sentiment.",
      "End on a memorable, aphoristic sentence that crystallizes the essay's central tension, or on a gut-punch of ironic proximity between the normal and the terrible.",
      "Use em dashes for parenthetical clarification and emphasis throughout. Use parentheses for brief, informal asides that read as the narrator's private mutterings.",
      "Format as continuous prose with no headers, bullet points, or typographic emphasis \u2014 the essay depends entirely on prose paragraphs and the rhythm of narration and reflection. Reserve numbered or enumerated lists only for final prescriptive rules.",
      "Use the dual perspective of participant and analyst \u2014 narrate from inside the experience while simultaneously critiquing your own complicity and confusion from the outside."
    ],
    "do_not": [
      "Do not open with a vague, inspirational flourish or a rhetorical question \u2014 begin with something concrete and specific.",
      "Do not close with a tidy moral lesson, redemptive arc, or neat resolution \u2014 end on a note of ambiguity, self-implication, or ironic honesty.",
      "Do not use headers, subheadings, bold, or italics for emphasis within the essay body \u2014 all emphasis comes from word choice and sentence structure.",
      "Do not use bullet points or formatted lists within the body of the argument \u2014 present enumerations as flowing prose."
    ]
  },
  "signature_phrases": {
    "use": [
      "It is clear that",
      "The point is that",
      "I dare say",
      "I suppose",
      "I do not want to",
      "In a job like that",
      "It is humbug to pretend",
      "I knew that",
      "no doubt",
      "in so far as",
      "I think",
      "at any rate",
      "looking back",
      "one might",
      "etc. etc.",
      "i.e.",
      "in a sense",
      "But",
      "And yet",
      "I am not able",
      "It can be seen that"
    ],
    "never_use": [
      "furthermore",
      "additionally",
      "in conclusion",
      "it goes without saying",
      "needless to say",
      "interestingly",
      "importantly",
      "basically",
      "essentially",
      "literally",
      "incredible",
      "amazing",
      "game-changer",
      "unpack",
      "impact (as verb)",
      "leverage",
      "utilize",
      "paradigm",
      "synergy",
      "nuanced",
      "robust",
      "whilst",
      "hence",
      "thus",
      "indeed (as sentence opener)",
      "it is important to note that"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', 'additionally' with 'But', 'And', 'And yet', or implicit transitions through narrative chronology.",
    "Convert passive constructions to active where possible \u2014 'the elephant was shot' becomes 'I shot the elephant.'",
    "Replace abstract analogies and literary allusions with concrete, physical comparisons drawn from everyday domestic or natural life.",
    "Where you find a paragraph opening with an abstract topic sentence, rewrite it to open with a concrete grounding detail \u2014 a time, place, or specific situation.",
    "Where you find hedging clusters ('it seems perhaps likely that'), replace with a single honest qualifier ('I suppose', 'probably') or commit to the claim outright.",
    "Where you find a paragraph ending on a flat, neutral note, rewrite the closing sentence to carry a sting, an irony, a surprising admission, or a vivid image.",
    "Break any sentence that merely pads length without adding a distinct logical step \u2014 every clause must earn its place.",
    "Replace elevated, Latinate vocabulary with plain Anglo-Saxon equivalents where they exist \u2014 'utilize' becomes 'use', 'commence' becomes 'begin'.",
    "Where you find explicit moral pronouncements, rewrite them as concrete scenes or honest admissions that let the reader draw the moral conclusion.",
    "Where you find rhetorical questions used for persuasion, convert them to plain declarative assertions."
  ]
}
```