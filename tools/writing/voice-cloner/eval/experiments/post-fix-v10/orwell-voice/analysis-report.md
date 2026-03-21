# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** Plain, earnest, morally serious — confessional authority grounded in concrete detail, with compound-clause momentum and understated force

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
      "Build the default sentence as a compound or compound-complex structure, chaining independent clauses with commas, colons, semicolons, and coordinating conjunctions \u2014 let one thought push into the next within a single sentence rather than breaking into separate ones.",
      "Use the colon as a logical hinge: place a claim before it and its explanation, consequence, or elaboration after it, creating a two-part sentence that feels like a proof unfolding.",
      "Vary sentence architecture by function: use long, multi-clause sentences for argumentation and analysis, then drop to a short declarative sentence to deliver a verdict or pivot to a new point.",
      "Lean on participial and appositional phrases to pack additional information into the middle of sentences without starting new clauses \u2014 embed qualifications and examples parenthetically.",
      "Deploy parallel structure within sentences to create rhythmic momentum, especially when listing examples or building cumulative arguments: repeat the same grammatical frame across items.",
      "When a sentence needs to qualify or refine itself, use dashes or parenthetical asides mid-sentence rather than splitting into a new sentence \u2014 the thought should visibly correct or complicate itself in real time."
    ],
    "do_not": [
      "Do not write sequences of sentences that all share the same structure and length \u2014 monotonous rhythm deadens the prose and makes the reader skim.",
      "Do not open multiple consecutive sentences with the same syntactic pattern (e.g., subject-verb-object repeatedly) \u2014 rotate your sentence openers.",
      "Do not use sentence fragments for rhetorical emphasis or stylistic effect \u2014 every sentence should be grammatically complete.",
      "Do not rely on semicolons as your primary sentence-joining device; prefer colons, dashes, and conjunctions, using semicolons sparingly for balanced pairings."
    ],
    "evidence": [
      "A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.",
      "It becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts.",
      "The point is that the process is reversible."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from first person singular when stating your own position or announcing the structure of the argument ('I will come back to this presently', 'I said earlier that'), but shift to impersonal 'one' or generic 'you' when stating general truths or prescriptions \u2014 never let the essay feel like personal memoir.",
      "Adopt the tone of a confident, slightly exasperated teacher: authoritative but not academic, earnest but willing to be blunt. State opinions as plain facts, then support them immediately.",
      "Use contractions freely in argumentative and conversational passages to maintain a spoken-prose register \u2014 the prose should feel like an intelligent person talking seriously, not lecturing from a podium.",
      "Signal certainty through plain, short declarative assertions ('The point is that the process is reversible') rather than through intensifiers or superlatives. Let the simplicity of the statement carry the conviction.",
      "When conceding a point or acknowledging complexity, do so briefly and move on \u2014 hedging should feel like intellectual honesty, not timidity. Use phrases like 'this may be true, but' to acknowledge and immediately counter.",
      "Maintain a moral seriousness throughout: the subject matters, the stakes are real, and lazy thinking is treated as a genuine failure, not a minor quirk."
    ],
    "do_not": [
      "Do not adopt a detached, neutral academic register \u2014 the voice should have clear opinions and make value judgments openly.",
      "Do not use self-deprecating humor or ironic distance from your own argument \u2014 if you believe something, say it straight.",
      "Do not use jargon, technical terminology, or Latinate vocabulary when a plain English word exists \u2014 this is not just a stylistic preference but a core ideological commitment of the voice.",
      "Do not address the reader with false intimacy or chatty asides \u2014 the warmth comes from directness and shared purpose, not from casualness."
    ],
    "evidence": [
      "I will come back to this presently, and I hope that by that time the meaning of what I have said here will have become clearer.",
      "Look again at the examples I gave at the beginning of this essay.",
      "If you use ready-made phrases, you not only don't have to hunt about for the words; you also don't have to bother with the rhythms of your sentences since these phrases are generally so arranged as to be more or less euphonious."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a common belief or conventional wisdom, state it fairly, then dismantle it \u2014 begin by meeting the reader where they are before redirecting them.",
      "Build arguments through concrete examples first, then extract the general principle. Present specimens, cases, or illustrations, then explain what they prove. The evidence should arrive before the thesis it supports.",
      "Use analogy as a primary tool of persuasion: translate abstract processes into vivid physical scenarios ('A man may take to drink because he feels himself to be a failure') to make logical relationships viscerally clear.",
      "Structure the essay as a diagnostic sequence: identify the disease (with symptoms/examples), explain the causes, then prescribe the cure. The overall arc should move from problem to mechanism to solution.",
      "Handle counterarguments by stating them in their strongest form, conceding what's valid, then showing exactly where they break down \u2014 use 'but' or 'on the other hand' to pivot from concession to rebuttal.",
      "Use parody and deliberate bad examples as argumentative evidence: demonstrate what's wrong by constructing or quoting a specimen, then dissecting it in plain language to make the flaw undeniable.",
      "Develop a cause-and-effect chain where the effect feeds back into the cause \u2014 show cyclical or self-reinforcing dynamics rather than simple linear causation."
    ],
    "do_not": [
      "Do not assert a claim without immediately supporting it with a concrete example, analogy, or demonstration \u2014 never let abstract arguments stand alone.",
      "Do not dismiss opposing views without first stating them fairly \u2014 strawmanning weakens the argument and insults the reader.",
      "Do not rely on citations, statistics, or appeals to authority as your primary evidence \u2014 use direct demonstration and the reader's own judgment instead.",
      "Do not organize the argument as a list of disconnected points \u2014 each section should flow causally or logically into the next, building toward a cumulative conclusion."
    ],
    "evidence": [
      "Our civilization is decadent and our language \u2014 so the argument runs \u2014 must inevitably share in the general collapse. It follows that any struggle against the abuse of language is a sentimental archaism, like preferring candles to electric light or hansom cabs to aeroplanes. Underneath this lies the half-conscious belief that language is a natural growth and not an instrument which we shape for our own purposes.",
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a transitional claim that connects to the previous paragraph's conclusion and introduces the new paragraph's territory \u2014 the first sentence should both look back and look forward.",
      "Organize ideas within paragraphs as a cascade: make a claim, illustrate it with one or more examples, then draw the implication. The paragraph should feel like it narrows from general assertion to specific evidence to pointed conclusion.",
      "Use the final sentence of a paragraph either to pivot toward the next topic or to deliver the paragraph's sharpest, most memorable formulation \u2014 endings should sting or propel.",
      "When presenting categorized material (types of error, classes of example), give each category its own paragraph with a bold heading or clear topic sentence, then fill the paragraph with densely packed illustrations.",
      "Connect paragraphs through logical progression rather than explicit transition words \u2014 the relationship should be visible from the content itself. Use 'Now', 'But', or 'In our time' occasionally as paragraph openers, but let most transitions be implicit.",
      "Within longer paragraphs, build through accumulation: stack examples, instances, or clauses that reinforce the same point, creating a sense of overwhelming evidence before drawing the conclusion."
    ],
    "do_not": [
      "Do not begin paragraphs with throat-clearing or setup \u2014 get to the point in the first sentence.",
      "Do not end paragraphs with a trailing, inconclusive thought \u2014 every paragraph should close with a sense of completion or deliberate propulsion forward.",
      "Do not scatter multiple unrelated points across a single paragraph \u2014 each paragraph should orbit a single claim or category.",
      "Do not use formulaic transition phrases ('Furthermore', 'Moreover', 'In addition') to link paragraphs \u2014 these are the exact kind of mechanical, thoughtless connective the voice rejects."
    ],
    "evidence": [
      "Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.",
      "As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer.",
      "But if thought corrupts language, language can also corrupt thought."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, original similes and metaphors drawn from the physical and everyday world \u2014 make abstractions tangible through concrete imagery ('like soft snow, blurring the outline', 'like tea leaves blocking a sink', 'like a cuttlefish spurting out ink').",
      "Deploy the catalogue or list as a rhetorical weapon: accumulate examples in rapid succession to overwhelm the reader with the sheer scale of the problem, then stop abruptly to comment.",
      "Use direct address and imperatives to involve the reader in the analysis: 'Look again at', 'Consider for instance', 'You see' \u2014 make the reader a participant, not a spectator.",
      "Employ deliberate juxtaposition of good and bad examples side by side, letting the contrast do the argumentative work \u2014 show the plain version next to the inflated version without excessive commentary.",
      "Use the rhetorical question sparingly but pointedly, to make the reader realize they cannot answer a question they should be able to answer ('what is a \"rift\", for instance?').",
      "Build parallel structures in lists and series to create rhythmic force: repeat a grammatical pattern across multiple items to make the accumulation feel relentless and inevitable.",
      "Employ the colon-introduced reveal: set up a horrifying concrete description, then snap to the euphemism after a colon ('this is called pacification') to expose the gap between language and reality."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors, dead metaphors, or stock phrases \u2014 this is the central sin the voice attacks, and committing it would undermine all credibility.",
      "Do not use rhetorical questions as filler or as a way to avoid making a direct statement \u2014 every question should force the reader to confront something specific.",
      "Do not use extended metaphors that draw attention to their own cleverness \u2014 metaphors should illuminate the point and then get out of the way.",
      "Do not use exclamation marks for emphasis \u2014 let the content and rhythm carry the force."
    ],
    "evidence": [
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "an accumulation of stale phrases chokes him like tea leaves blocking a sink",
      "Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by engaging with a widely held assumption or conventional wisdom, stating it fairly and even sympathetically, before revealing its hidden flaw \u2014 the reader should feel their own position being understood and then gently overturned.",
      "Establish the stakes immediately in the opening paragraph: the subject is not merely technical or aesthetic but has real-world consequences (political, moral, intellectual). The first paragraph should make the reader feel this matters.",
      "Use the opening to set up a structural promise: signal that you will demonstrate something through evidence, and that the reader should withhold judgment until they've seen the specimens.",
      "Close the essay with a set of concrete, actionable rules or prescriptions \u2014 after building the case through analysis and demonstration, distill it into directives the reader can immediately apply.",
      "Include a self-aware caveat near the end: acknowledge that the essay itself may commit the very faults it criticizes, demonstrating intellectual honesty and modeling the self-scrutiny you prescribe.",
      "End on a note of qualified hope: concede the difficulty of the problem while insisting that individual effort can make a difference \u2014 the closing should be neither despairing nor naively optimistic.",
      "Use section headings in capitals for taxonomic sections (categories of error, types of example) but write the main argument as flowing prose without headers \u2014 headers are for reference material within the essay, not for the essay's own structure.",
      "Use em dashes for parenthetical insertions and dramatic pivots. Use parentheses for brief clarifications and asides. Use quotation marks around words being examined as specimens of language rather than used for their meaning."
    ],
    "do_not": [
      "Do not open with a personal anecdote or scene-setting narrative \u2014 begin with the argument itself, at the level of ideas.",
      "Do not close with a vague, inspirational call to action \u2014 end with specific, concrete prescriptions that the reader can evaluate and apply.",
      "Do not use numbered lists for the main argument \u2014 reserve numbered formats for specimens, examples, or final rules that are meant to be referenced.",
      "Do not end the essay by restating the thesis in the same words \u2014 if you return to the opening idea, advance it or complicate it."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "Break any of these rules sooner than say anything outright barbarous.",
      "Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against."
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
      "Build default sentences by chaining multiple independent clauses with 'and' and 'but', letting the thought accumulate weight as it extends \u2014 e.g., 'I was sub-divisional police officer of the town, and in an aimless, petty kind of way anti-European feeling was very bitter.'",
      "Use appositional and parenthetical insertions mid-sentence to layer context, qualification, or aside without breaking the forward momentum \u2014 commas, dashes, and parentheses all serve this purpose: 'Its mahout, the only person who could manage it when it was in that state, had set out in pursuit, but had taken the wrong direction and was now twelve hours' journey away'.",
      "Deliver key revelations or emotional turns in blunt, unadorned short sentences that land like verdicts after longer, more complex constructions: 'This happened more than once.' / 'That would never do.'",
      "Chain compound predicates within a single subject to narrate sequential action without starting new sentences: 'caught him with its trunk, put its foot on his back and ground him into the earth.'",
      "When building toward a climactic observation, extend the sentence with semicolons or dashes to delay the resolution, then close with a decisive final clause: 'with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts.'"
    ],
    "do_not": [
      "Do NOT write in choppy, staccato bursts of uniformly short sentences \u2014 the rhythm depends on long, accretive sentences punctuated by occasional short ones, not the reverse.",
      "Do NOT use elaborate subordination or Latinate periodic sentence structures where the main verb is delayed until the end \u2014 the syntax is fundamentally additive and forward-moving, not suspensive.",
      "Do NOT front-load sentences with adverbial clauses or participial phrases as a habitual pattern \u2014 the author typically leads with the subject and main clause, then qualifies afterward."
    ],
    "evidence": [
      "I was young and ill-educated and I had had to think out my problems in the utter silence that is imposed on every Englishman in the East.",
      "He neither stirred nor fell, but every line of his body had altered.",
      "That would never do."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a confessional first person that is unflinchingly honest about the narrator's own moral failings, contradictions, and petty emotions \u2014 never sanitize the self: 'I was very glad that the coolie had been killed; it put me legally in the right.'",
      "Maintain a tone that is simultaneously self-deprecating and analytically detached \u2014 describe your own cowardice and confusion with the same clinical precision you'd use on external events.",
      "Use contractions freely in narrative and reflective passages to sustain a conversational, spoken quality ('I didn't', 'couldn't', 'wasn't'), but shift to uncontracted forms when making formal, thesis-like pronouncements: 'I did not even know that the British Empire is dying.'",
      "Address the reader directly but sparingly, using 'you' to universalize a specific experience or to issue a quiet imperative: 'ask any Anglo-Indian official, if you can catch him off duty.'",
      "Signal certainty with plain, declarative statements ('It was perfectly clear to me what I ought to do') and signal uncertainty with self-interrupting qualifications ('it might have been five seconds, I dare say').",
      "Deploy dry, understated humor by placing brutal or absurd observations in parenthetical asides, as if they're throwaway remarks: '(Somehow it always seems worse to kill a large animal.)'"
    ],
    "do_not": [
      "Do NOT adopt a morally superior or preachy stance \u2014 the narrator implicates himself in the very system he critiques and never claims clean hands.",
      "Do NOT use an ironic or detached tone that avoids emotional exposure \u2014 the voice is emotionally present even when analytically cool.",
      "Do NOT hedge with vague academic qualifiers like 'it could be argued' or 'one might suggest' \u2014 when uncertain, express it through personal, concrete language ('I did not know', 'I dare say')."
    ],
    "evidence": [
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)",
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny\u2026with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete, specific situation grounded in time and place, then gradually extract a universal principle from that situation \u2014 move from particular to general, never the reverse.",
      "Present the central thesis not as a premise but as a discovery that emerges mid-narrative \u2014 the narrator realizes the argument as the reader does: 'And it was at this moment\u2026that I first grasped the hollowness, the futility of the white man's dominion in the East.'",
      "Use the narrator's internal contradictions as the engine of argument \u2014 present two incompatible positions held simultaneously and let the tension between them generate insight rather than resolving it neatly.",
      "Handle counterarguments by embodying them in the narrator's own psyche rather than attributing them to external voices \u2014 the author is his own interlocutor.",
      "Build evidence through accumulated concrete detail and sensory observation rather than statistics or citations \u2014 describe the scarred buttocks, the stinking cages, the mud-coated face, and let the reader draw the conclusion.",
      "Use hedges sparingly and specifically \u2014 'perhaps', 'I dare say', 'I think now' \u2014 to signal genuine uncertainty about one's own motivations, not to soften claims about external reality."
    ],
    "do_not": [
      "Do NOT state the thesis at the beginning and then support it \u2014 the argument must emerge from the narrated experience, discovered rather than announced.",
      "Do NOT resolve moral contradictions with a clean synthesis \u2014 let them stand in unresolved tension, as the narrator does with his hatred of both empire and its subjects.",
      "Do NOT use abstract philosophical language to make the argument \u2014 ground every generalization in specific, physical, observed detail."
    ],
    "evidence": [
      "Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.",
      "All I knew was that I was stuck between my hatred of the empire I served and my rage against the evil-spirited little beasts who tried to make my job impossible.",
      "Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear situating statement that anchors the reader in time, place, or emotional state before developing the scene: 'One day something happened which in a roundabout way was enlightening.' / 'But at that moment I glanced round at the crowd that had followed me.'",
      "Build paragraphs through narrative accumulation \u2014 stack concrete details and events in chronological sequence, each one adding pressure toward a climactic observation or turn at the paragraph's end.",
      "Close paragraphs with a sentence that pivots or reframes everything that came before \u2014 use the final sentence as the payoff, the moment where meaning crystallizes: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Transition between paragraphs using adversative conjunctions ('But') or temporal markers ('One day', 'Afterwards') at the start of the new paragraph \u2014 the connective tissue is explicit but simple.",
      "Within paragraphs that narrate action, maintain strict chronological order; within paragraphs that reflect, allow the sequence to follow the logic of moral reasoning rather than time.",
      "Alternate between paragraphs of dense, scene-building narrative and paragraphs of internal reflection or moral analysis \u2014 the essay breathes between showing and thinking."
    ],
    "do_not": [
      "Do NOT end paragraphs with trailing, inconclusive thoughts \u2014 every paragraph must feel like it arrives somewhere, even if that arrival is a deeper confusion.",
      "Do NOT use topic sentences that telegraph the paragraph's argument abstractly \u2014 open with a concrete statement or narrative beat, not a thesis claim.",
      "Do NOT scatter reflective asides throughout action paragraphs \u2014 keep narration and meditation in distinct paragraphs or at least distinct sections within a paragraph."
    ],
    "evidence": [
      "All this was perplexing and upsetting.",
      "But I did not want to shoot the elephant.",
      "In the end I could not stand it any longer and went away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and similes drawn from everyday, physical, unglamorous sources to illuminate abstract ideas: 'He becomes a sort of hollow, posing dummy' / 'I should have about as much chance as a toad under a steam-roller.'",
      "Deploy lists of concrete, sensory details in triadic or longer series, often with the final item carrying the most weight or specificity: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos.'",
      "Use parenthetical asides \u2014 in actual parentheses \u2014 to insert sharp, personal observations that break the narrative frame and address the reader with startling directness: '(Never tell me, by the way, that the dead look peaceful.)'",
      "Employ em dashes to introduce appositive restatements that redefine or intensify what was just said: 'the real nature of imperialism \u2014 the real motives for which despotic governments act.'",
      "Use deliberate, visible repetition of key phrases to create rhetorical emphasis and structural cohesion: 'I had got to shoot the elephant' recurs as a refrain; 'A sahib has got to act like a sahib; he has got to appear resolute.'",
      "Build climactic moments through slowed, almost cinematic description \u2014 pile sensory details to make the reader see and feel the scene in real time: 'as his hind legs collapsed beneath him he seemed to tower upward like a huge rock toppling, his trunk reaching skyward like a tree.'"
    ],
    "do_not": [
      "Do NOT use literary, ornamental, or poetic metaphors \u2014 all figurative language must feel grounded, plain, even slightly crude ('like red velvet', 'as neatly as one skins a rabbit').",
      "Do NOT use rhetorical questions as a regular device \u2014 the author almost never asks questions of the reader; he declares, confesses, and observes.",
      "Do NOT use exclamation marks or emphatic punctuation for emotional intensity \u2014 let the content and the plainness of the language carry the emotional weight."
    ],
    "evidence": [
      "The thick blood welled out of him like red velvet, but still he did not die.",
      "a deep, low, happy sigh, as of people who see the theatre curtain go up at last, breathed from innumerable throats.",
      "He wears a mask, and his face grows to fit it."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a declarative first-person sentence that immediately establishes the specific place, the narrator's role, and an emotional or social tension \u2014 drop the reader into the middle of a situation without preamble: 'In Moulmein, in Lower Burma, I was hated by large numbers of people.'",
      "Follow the opening sentence with a self-deprecating or ironic qualification that signals the essay's characteristic tone of rueful honesty: '\u2014 the only time in my life that I have been important enough for this to happen to me.'",
      "Close the essay with a quiet, understated sentence that circles back to the narrator's private psychology, revealing that the entire preceding narrative was driven by a motive the narrator is slightly ashamed of \u2014 the ending reframes everything: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Structure the essay as a single extended narrative with a clear chronological spine, but embed the political and philosophical argument within the action rather than separating it into a distinct analytical section.",
      "Use minimal formatting \u2014 no headers, no bullet points, no bold or italic emphasis. The essay is a continuous prose flow organized only by paragraph breaks.",
      "Establish the essay's larger political context early (within the first two paragraphs) through personal experience, then let the central anecdote carry the argument implicitly."
    ],
    "do_not": [
      "Do NOT open with an abstract thesis, a question, or a quotation \u2014 begin in medias res with concrete, situated first-person narration.",
      "Do NOT close with a grand moral pronouncement, a call to action, or a summarizing restatement of the argument \u2014 end with a personal, deflating admission that lets the reader supply the larger meaning.",
      "Do NOT use any structural apparatus (headers, section breaks, numbered points) \u2014 the genre is the personal essay as continuous, unbroken narrative prose."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "One day something happened which in a roundabout way was enlightening."
    ]
  }
}
```

### sample-3.txt (1032 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1032,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build compound sentences by stacking physical details with commas, layering observation upon observation in a single sweep: subject did X, did Y, and did Z.",
      "Chain clauses with 'and' to create a steady, marching, processional rhythm that mirrors physical movement through space \u2014 this is the default connective tissue between actions.",
      "Use participial phrases and absolute constructions to pack sensory detail into sentences without stopping the forward motion: 'gripping him by arm and shoulder, as though at once pushing and supporting him.'",
      "Deploy 'as though' and 'like' comparisons within sentences to pivot from concrete observation to interpretive commentary without breaking stride.",
      "Anchor sentences in concrete, physical subjects \u2014 body parts, objects, sounds, textures \u2014 before layering in abstraction or emotional content.",
      "When building toward a moment of insight or emotional weight, shift to longer sentences with dashes or semicolons to hold multiple parallel observations in tension before resolution."
    ],
    "do_not": [
      "Do not write sentences that are purely abstract or philosophical without grounding them in a physical image or sensory detail from the scene.",
      "Do not use ornate or Latinate subordination patterns \u2014 keep clause relationships simple (and, but, while, as though) even when sentences grow long.",
      "Do not break rhythm with self-conscious stylistic flourishes like inversions, rhetorical exclamations, or poetic diction \u2014 the power comes from plainness."
    ],
    "evidence": [
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "They crowded very close about him, with their hands always on him in a careful, caressing grip, as though all the while feeling him to make sure he was there.",
      "He and we were a party of men walking together, seeing, hearing, feeling, understanding the same world; and in two minutes, with a sudden snap, one of us would be gone \u2014 one mind less, one world less."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a participating witness \u2014 present in the scene, part of the group ('we'), but narrating with a detached, almost clinical eye that refuses to editorialize until the key moment.",
      "Maintain a flat, reportorial tone for descriptions of violence, cruelty, and bureaucratic process \u2014 let the horror emerge from the gap between the mundane tone and the terrible content.",
      "Use first person sparingly and strategically: 'I' appears mainly at moments of personal moral reckoning or involuntary emotional response, not for routine narration.",
      "Let other characters' speech carry the emotional absurdity \u2014 render their words faithfully, with dialect and verbal tics intact, and let the reader feel the dissonance without authorial commentary.",
      "Signal uncertainty or moral complexity through physical description and concrete detail rather than through hedging language or explicit self-doubt.",
      "Use contractions freely in dialogue but also in narration to maintain a conversational, unaffected register \u2014 never sound literary or elevated."
    ],
    "do_not": [
      "Do not editorialize or moralize directly \u2014 resist the urge to tell the reader what to feel. The single paragraph of explicit reflection should be the exception, not the rule.",
      "Do not adopt a tone of outrage, indignation, or sentimentality \u2014 the power is in restraint and the careful, almost cold precision of observation.",
      "Do not use irony as a winking signal to the reader \u2014 irony should emerge structurally from the juxtaposition of events, not from the narrator's tone."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "'He's all right,' said the superintendent. He backed out from under the gallows, and blew out a deep breath.",
      "I found that I was laughing quite loudly. Everyone was laughing."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the central argument through a single, carefully staged epiphany embedded in narrative \u2014 do not argue a thesis; instead, arrange concrete details so the moral conclusion becomes inescapable.",
      "Use the structure of physical movement through space (walking to the gallows, arriving, the execution, walking away) as the skeleton for intellectual and moral progression.",
      "Introduce the central insight through a tiny, seemingly insignificant detail \u2014 the prisoner stepping aside to avoid a puddle \u2014 then expand outward from that detail to the universal claim.",
      "Surround the moment of explicit reflection with long stretches of pure observation, so the one passage of direct argument hits with disproportionate force.",
      "Let irony and moral argument emerge from juxtaposition: place the laughter, the whisky, and the casual chatter immediately after the death, without transition or commentary.",
      "Handle counterarguments and complications not through dialectic but through the complexity of the scene itself \u2014 the dog's joy, the warders' discomfort, the post-execution relief all complicate any simple moral reading."
    ],
    "do_not": [
      "Do not construct formal arguments with premises, evidence, and conclusions \u2014 embed the argument in narrative action.",
      "Do not use explicit thesis statements at the beginning or end \u2014 the moral emerges from accumulated detail.",
      "Do not hedge the central moral claim when it finally arrives \u2014 state it plainly and move on."
    ],
    "evidence": [
      "And once, in spite of the men who gripped him by each shoulder, he stepped slightly aside to avoid a puddle on the path.",
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs by anchoring the reader in time, place, or a new stage of action: 'Eight o'clock struck,' 'We set out for the gallows,' 'The gallows stood in a small yard.'",
      "Organize paragraphs as cinematic sequences \u2014 start wide (setting, group action), then zoom in to specific physical details, then pull back or pivot to a new development.",
      "Close paragraphs with an image, a line of dialogue, or a detail that carries unstated emotional or moral weight \u2014 let the last sentence resonate rather than summarize.",
      "Use single-sentence paragraphs exclusively for dialogue exchanges, maintaining the rapid back-and-forth rhythm of speech without narrative padding.",
      "When a paragraph contains the essay's central argument or reflection, set it apart by shifting from concrete narration to direct, abstract statement \u2014 the shift in register signals importance.",
      "Sequence ideas within paragraphs by moving from external observation to internal response, from physical fact to interpretive 'as though' or 'like' comparison."
    ],
    "do_not": [
      "Do not end paragraphs with explicit summary statements or morals \u2014 trust the final image or detail to do the work.",
      "Do not begin paragraphs with meta-commentary ('It is worth noting,' 'The important thing is') \u2014 begin with action, setting, or speech.",
      "Do not use formal transition phrases between paragraphs \u2014 let chronological sequence and spatial movement provide the connective logic."
    ],
    "evidence": [
      "It was a large woolly dog, half Airedale, half pariah. For a moment it pranced round us, and then, before anyone could stop it, it had made a dash for the prisoner, and jumping up tried to lick his face. Everyone stood aghast, too taken aback even to grab at the dog.",
      "Several people laughed \u2014 at what, nobody seemed certain.",
      "The dead man was a hundred yards away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use simile ('like') as the primary figurative device, drawing comparisons to ordinary, unglamorous things: yellow tinfoil, small animal cages, a comic man on the films, bad coffee, a flour bag. The comparisons should deflate and domesticate horror.",
      "Deploy extended physical catalogs \u2014 lists of bodily actions or sensory details separated by commas \u2014 to create a cumulative, almost hypnotic effect: 'bowels digesting food, skin renewing itself, nails growing, tissues forming.'",
      "Use repetition of a word or phrase to create ritual or incantatory effect at moments of peak intensity: 'Ram! Ram! Ram! Ram!'",
      "Employ the dash to insert a sudden disruption, qualification, or dramatic aside into an otherwise steady sentence \u2014 use it for interruptions that mirror the shock of the event described.",
      "Use 'as though' constructions to bridge the gap between observable fact and psychological interpretation without claiming access to characters' inner lives.",
      "Deploy ironic juxtaposition as the central persuasive device: place descriptions of casual normalcy (breakfast, cigarettes, whisky, laughter) directly against the fact of death."
    ],
    "do_not": [
      "Do not use elaborate or literary metaphors \u2014 keep figurative language rooted in mundane, concrete objects.",
      "Do not use rhetorical questions to the reader \u2014 questions appear only in dialogue.",
      "Do not use exclamatory emphasis in narration \u2014 exclamation belongs to dialogue and to the rendering of inner thought ('oh, kill him quickly, get it over')."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a precise, declarative placement in time and space \u2014 name the country, the weather, the light, the physical setting \u2014 before introducing any characters or action.",
      "Establish the scene with a series of flat, factual observations that carry a quietly ominous undertone: the condemned cells, the measurements, the waiting men. Let atmosphere accumulate through detail, not through mood-setting adjectives.",
      "Close with a short, devastating sentence that combines physical fact with moral implication, stated flatly and without comment.",
      "Structure the entire piece as a chronological walk-through of a single event, with the moral epiphany occurring not at the end but roughly two-thirds through, so the remaining third forces the reader to sit with the aftermath.",
      "Render dialogue with full phonetic accuracy to dialect and speech patterns ('hass,' 'iss,' 'wass') \u2014 this is not mockery but documentary fidelity that reveals character and power dynamics.",
      "Use em dashes for dramatic interruptions and parenthetical asides within narration. Use commas to separate items in descriptive catalogs. Reserve semicolons for binding parallel independent clauses in moments of reflection."
    ],
    "do_not": [
      "Do not open with a thesis, a question, or a general philosophical statement \u2014 begin in the physical world.",
      "Do not close with an explicit moral lesson or call to action \u2014 the final image must speak for itself.",
      "Do not use headers, section breaks, or any structural formatting \u2014 the piece should flow as a single continuous narrative."
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
      "Build sentences by stacking multiple independent and dependent clauses joined with commas and coordinating conjunctions ('and', 'but', 'or'), creating a steady, accumulative forward motion \u2014 the default sentence should carry two or three ideas before closing.",
      "Use subordinate clauses and parenthetical asides (set off by commas or dashes) to layer qualifications, temporal markers, and autobiographical context into otherwise declarative statements: 'I was the middle child of three, but there was a gap of five years on either side, and I barely saw my father before I was eight.'",
      "Interrupt the flow of multi-clause sentences with short, blunt declarative statements that deliver a verdict or summary judgment: 'That was the total of the would-be serious work that I actually set down on paper during all those years.'",
      "Open sentences with temporal or conditional phrases ('From a very early age', 'When I was about sixteen', 'In one form or another') to anchor the reader in time or circumstance before delivering the main clause.",
      "Use parallel structure within sentences to create lists of qualities, desires, or actions, binding them with repeated prepositions or infinitives: 'to feel strongly about prose style, to love the surface of the earth, and to take a pleasure in solid objects and scraps of useless information.'"
    ],
    "do_not": [
      "Do not write sentences that rely on flashy syntactic inversions, sentence fragments for dramatic effect, or self-consciously literary constructions \u2014 the architecture should feel natural and conversational, never showy.",
      "Do not front-load sentences with multiple stacked adjectives or adverbs before the subject \u2014 lead with the subject or a simple temporal/conditional phrase, then elaborate after.",
      "Do not use choppy, telegraphic sentence sequences for emphasis \u2014 maintain the flowing, clause-chaining rhythm even when delivering strong opinions."
    ],
    "evidence": [
      "Between the ages of about seventeen and twenty-four I tried to abandon this idea, but I did so with the consciousness that I was outraging my true nature and that sooner or later I should have to settle down and write books.",
      "I knew that I had a facility with words and a power of facing unpleasant facts, and I felt that this created a sort of private world in which I could get my own back for my failure in everyday life.",
      "It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as an authority reflecting on personal experience, but maintain a tone of honest self-assessment that avoids both false modesty and boastfulness \u2014 confess vanity and weakness as readily as competence.",
      "Adopt the stance of a writer thinking aloud with the reader \u2014 collegial and direct, never professorial or lecturing. Address the reader as an intelligent equal who can draw their own conclusions from the evidence presented.",
      "Signal certainty through plain, unhedged declarative statements ('It is humbug to pretend this is not a motive'), and signal uncertainty through explicit, almost casual admissions ('I cannot say with certainty', 'I suppose').",
      "Use contractions selectively \u2014 deploy them in passages of personal reflection and self-correction ('I don't want to leave that as the final impression') to create intimacy, but default to uncontracted forms in passages making general claims or universal statements to maintain authority.",
      "Undercut grand statements with deflating honesty: after building up a serious point, add a self-aware qualification that prevents the tone from becoming pompous.",
      "Use 'one' as an impersonal pronoun when making universal observations about writers and writing, shifting away from 'I' to signal that a personal insight has become a general truth."
    ],
    "do_not": [
      "Do not adopt a detached, academic tone \u2014 the voice must always feel like a specific person speaking from lived experience, not a critic analyzing from outside.",
      "Do not use irony or humor as a primary mode \u2014 the tone is earnest and direct, with dry wit appearing only in asides and self-deprecating remarks ('a good enough phrase, but I fancy the poem was a plagiarism').",
      "Do not use effusive or emotional language \u2014 express strong feelings through plain statement and understatement rather than exclamation or intensifiers."
    ],
    "evidence": [
      "All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.",
      "I don't want to leave that as the final impression.",
      "Good prose is like a windowpane."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure the argument as autobiography-as-evidence: present personal history chronologically, then extract general principles from it. The life story IS the argument \u2014 don't separate narrative from analysis.",
      "Introduce major claims through bold, plain assertion after building context through anecdote: lay groundwork with specific experiences, then state the thesis as though it follows naturally and inevitably.",
      "Handle counterarguments by acknowledging them honestly and then folding them into the larger point \u2014 don't dismiss objections, absorb them: 'What he said was true, but I could not have done otherwise.'",
      "Use enumerated lists (i, ii, iii, iv) to organize taxonomies of ideas, giving each category a brief, punchy label followed by elaboration that mixes definition with example.",
      "Move between the specific and the general fluidly \u2014 a childhood memory leads to a universal observation about writers, which leads back to a specific book, which yields another general principle. The logic is associative but always purposeful.",
      "Hedge with honest qualifications rather than academic weasel words \u2014 use phrases like 'I think', 'I suppose', 'in so far as', 'at least this is true in' to show genuine intellectual caution, not mere throat-clearing."
    ],
    "do_not": [
      "Do not build arguments through citations, data, or appeal to external authority \u2014 all evidence comes from personal experience and direct observation.",
      "Do not use formal logical transitions ('therefore', 'consequently', 'it follows that') \u2014 let the argument's logic emerge from the narrative sequence rather than from explicit connectives.",
      "Do not present ideas as settled or systematic \u2014 maintain the quality of a writer thinking through a problem in real time, even when the conclusions are firm."
    ],
    "evidence": [
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.",
      "'Why did you put in all that stuff?' he said. 'You've turned what might have been a good book into journalism.' What he said was true, but I could not have done otherwise.",
      "Putting aside the need to earn a living, I think there are four great motives for writing, at any rate for writing prose."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal marker or thematic declaration that tells the reader exactly where they are in the chronology or argument: 'From a very early age', 'When I was about sixteen', 'I give all this background information because'.",
      "Build paragraphs through accumulation \u2014 start with one claim or memory, then add supporting details, qualifications, and related anecdotes in a chain that expands outward from the initial statement.",
      "Close paragraphs with a summarizing judgment or a forward-pointing statement that propels into the next section: 'That was the total of the would-be serious work' or 'is rather that kind of book.'",
      "Transition between paragraphs through temporal progression ('However, throughout this time'), logical connectives ('It can be seen how'), or direct pivots that announce a shift in focus.",
      "Allow paragraphs to contain long digressions \u2014 parenthetical stories, embedded examples, secondary anecdotes \u2014 that enrich the main point without requiring separate paragraphs. The paragraph is the unit of a complete thought, however long that thought takes."
    ],
    "do_not": [
      "Do not use one-sentence paragraphs for dramatic emphasis or as stylistic punctuation \u2014 each paragraph should develop its idea with supporting material.",
      "Do not begin paragraphs with vague topic sentences that could apply to anything \u2014 the opening must anchor the reader in a specific time, place, or claim.",
      "Do not leave paragraphs without closure \u2014 even when a thought trails into complexity, bring it back to a definite statement before moving on."
    ],
    "evidence": [
      "However, throughout this time I did in a sense engage in literary activities. To begin with there was the made-to-order stuff which I produced quickly, easily and without much pleasure to myself.",
      "Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use simile and metaphor sparingly but memorably \u2014 when a figurative comparison appears, it should be concrete, surprising, and immediately clarifying: 'Good prose is like a windowpane', 'like a long bout of some painful illness.'",
      "Deploy lists and enumerations as a primary rhetorical tool \u2014 catalogue concrete nouns, specific examples, or types of people to create a feeling of exhaustive honesty: 'scientists, artists, politicians, lawyers, soldiers, successful businessmen'.",
      "Use 'etc., etc.' and 'and the like' deliberately to signal that the list could continue but the reader gets the point \u2014 this creates an air of casual authority.",
      "Employ direct quotation (of others and of oneself) to dramatize key moments and bring abstraction into vivid dialogue: embed reported speech to make arguments feel lived rather than theorized.",
      "Use parenthetical insertions \u2014 set off by dashes, commas, or 'i.e.' \u2014 to add clarifying asides, self-corrections, or ironic commentary within the flow of a sentence.",
      "Repeat key words ('write', 'book', 'political', 'failure') deliberately across paragraphs to build thematic continuity rather than reaching for synonyms."
    ],
    "do_not": [
      "Do not use extended or elaborate metaphors \u2014 figurative language should be brief, plain, and immediately graspable, never ornate or sustained across multiple sentences.",
      "Do not ask rhetorical questions as a structural device \u2014 make assertions directly rather than posing questions the reader is expected to answer in a predetermined way.",
      "Do not use exclamatory emphasis, hyperbole, or any device that inflates the emotional temperature \u2014 persuade through plainness and accumulation of honest detail."
    ],
    "evidence": [
      "Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness. One would never undertake such a thing if one were not driven on by some demon whom one can neither resist nor understand.",
      "Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity.",
      "I did try very hard in it to tell the whole truth without violating my literary instincts."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct, personal declaration that immediately establishes the autobiographical frame and the essay's central subject \u2014 plunge into first-person memory without preamble or scene-setting.",
      "Structure the essay as a chronological autobiography that builds toward a general argument \u2014 move from earliest memory through stages of development to the present, with each stage yielding a principle about writing.",
      "Use roman numeral lists or labeled categories to organize taxonomies within the essay, breaking from prose into a structured enumeration when classifying ideas.",
      "Close with a passage of honest self-correction \u2014 look back at what you've just written, acknowledge its bias or incompleteness, and end with a plainly stated conviction that feels hard-won rather than pre-packaged.",
      "End on a memorable aphoristic sentence that crystallizes the essay's central tension: the final lines should have the weight and compression of a maxim.",
      "Use dashes \u2014 especially paired em dashes \u2014 for parenthetical insertions that add qualification, irony, or biographical detail. Use 'i.e.' to gloss terms or phrases inline.",
      "Embed quoted material (poetry, dialogue, titles) naturally within the prose, using single quotation marks for terms used in a special sense ('story', 'nature poems', 'political')."
    ],
    "do_not": [
      "Do not open with a generalization, thesis statement, or abstract question \u2014 begin with the personal and move outward to the general.",
      "Do not close with a neat summary that resolves all tensions \u2014 the ending should acknowledge unresolved difficulty while affirming a clear commitment.",
      "Do not use headers, subheadings, or formatting devices beyond numbered lists \u2014 the essay should flow as continuous prose broken only by paragraph divisions and occasional enumeration."
    ],
    "evidence": [
      "From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.",
      "Good prose is like a windowpane. I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed.",
      "And looking back through my work, I see that it is invariably where I lacked a political purpose that I wrote lifeless books and was betrayed into purple passages, sentences without meaning, decorative adjectives and humbug generally."
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
      "Build sentences that accrete detail through layered subordinate clauses and parenthetical insertions \u2014 let the sentence grow outward from a core statement by adding qualifications, asides, and contextual specifics before arriving at the main point or punch.",
      "Use the long, clause-heavy sentence as the default mode, then deploy a short, declarative sentence to deliver a verdict, emotional truth, or ironic understatement \u2014 the short sentence gains its force from the surrounding density.",
      "Chain clauses with commas and coordinating conjunctions ('and', 'but', 'or') to create a rolling, cumulative rhythm that mimics the unspooling of memory \u2014 one detail leads naturally to the next.",
      "Interrupt the flow with parenthetical asides set off by dashes or actual parentheses to inject editorial commentary, self-correction, or clarifying detail mid-sentence: '(Officially, however, she was addressed as Mum, probably a corruption of the \"Ma'am\" used by public schoolboys to their housemasters' wives.)'",
      "Use participial and appositive phrases to front-load physical description and situational detail before the main verb: 'Mrs Wilkes the Headmaster's wife, was sitting at the head of one of the tables, chatting with a lady of whom I knew nothing'.",
      "When constructing lists or sequences, prefer the tricolon or longer enumeration with parallel structure, often building toward the most emotionally weighted item last."
    ],
    "do_not": [
      "Do not write in consistently short, staccato bursts \u2014 the rhythm depends on long sentences doing the heavy lifting with short ones punctuating.",
      "Do not use sentence fragments for stylistic effect or rhetorical emphasis \u2014 even the shortest sentences are grammatically complete.",
      "Do not avoid subordination or complexity \u2014 simple subject-verb-object sentences used repeatedly would flatten the voice entirely."
    ],
    "evidence": [
      "\"I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey: a sense of desolate loneliness and helplessness, of being locked up not only in a hostile world but in a world of good and evil where the rules were such that it was actually not possible for me to keep them.\"",
      "\"Sin was not necessarily something that you did: it might be something that happened to you.\"",
      "\"The beating did not hurt (perhaps, as it was the first time, he was not hitting me very hard), and I walked out feeling very much better.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the first person as an adult reflecting on childhood, maintaining a double perspective: the child's bewilderment and the adult's wry, analytical understanding coexist in every passage.",
      "Adopt a tone that is earnest and emotionally direct but never sentimental \u2014 describe painful experiences with measured clarity rather than melodrama. Let the facts carry the emotional weight.",
      "Use 'one' and 'you' as impersonal generalizing pronouns when stepping back from personal experience to make broader observations about childhood, human nature, or institutions: 'To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember...'",
      "Signal certainty with plain, confident declarations ('I knew', 'it was', 'there was no doubt'). Signal uncertainty through explicit admission: 'I forget how', 'I cannot remember whether', 'I am not sure which'.",
      "Deploy dry, understated irony by juxtaposing horrific content with matter-of-fact or mildly amused phrasing: describe beatings, humiliation, and cruelty in the same measured tone used for mundane observations.",
      "Use contractions sparingly and primarily in direct speech or when adopting a slightly more colloquial register to convey personal feeling \u2014 the default narrative voice avoids contractions.",
      "Address the reader as an implicit equal \u2014 someone intelligent who can draw conclusions \u2014 rather than lecturing or confiding breathlessly."
    ],
    "do_not": [
      "Do not adopt a self-pitying or victimized tone \u2014 even when describing genuine suffering, maintain analytical composure and occasional mordant humor.",
      "Do not use exclamatory or breathless language in the narrator's voice \u2014 reserve exclamation for direct speech and the child's inner voice.",
      "Do not be coy or euphemistic about ugly realities \u2014 name cruelty, snobbery, and hypocrisy plainly and let the reader judge."
    ],
    "evidence": [
      "\"It is a mistake to think such methods do not work. They work very well for their special purpose.\"",
      "\"So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.\"",
      "\"I put REPORT YOURSELF in capitals because that was how it appeared in my mind.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through concrete personal anecdote first, then extract the general principle \u2014 move from the specific incident to the broader truth it illustrates, not the reverse.",
      "Use recursive logic: circle back to an earlier point with new insight or a qualifying thought. Signal these returns explicitly: 'But there is one more thing to be remarked', 'So much for the episode of...'",
      "Present counterarguments or complicating factors through honest self-interrogation \u2014 acknowledge ambiguity in your own motives and memories rather than constructing a tidy narrative: 'unable or unwilling \u2014 I could not be sure which'.",
      "Build arguments through accumulation of examples rather than syllogistic reasoning. Stack episodes, each adding a new facet to the thesis, creating an overwhelming evidentiary weight.",
      "Hedge by explicitly flagging the limits of memory and self-knowledge: 'I cannot remember whether', 'I must have had glimpses of it even before', 'I forget how'. This is not weakness \u2014 it is the mechanism that makes the certain claims more credible.",
      "When making a sweeping generalization, immediately ground it with a specific, vivid example or anecdote that concretizes the abstraction."
    ],
    "do_not": [
      "Do not present arguments as airtight logical proofs \u2014 the persuasion comes from accumulated narrative evidence and the authority of lived experience, not from formal logic.",
      "Do not dismiss or ignore counterpoints \u2014 instead, absorb them into the argument as complications that deepen rather than weaken the thesis.",
      "Do not separate analysis from narrative \u2014 weave interpretive commentary into the flow of storytelling rather than stopping to deliver thesis paragraphs."
    ],
    "evidence": [
      "\"I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question. It was possible, therefore, to commit a sin without knowing that you committed it, without wanting to commit it, and without being able to avoid it.\"",
      "\"In general, one's memories of any period must necessarily weaken as one moves away from it... But it can also happen that one's memories grow sharper after a long lapse of time, because one is looking at the past with fresh eyes.\"",
      "\"I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane: I must have had glimpses of it even before I left home.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a transitional or scene-setting statement that situates the reader in time, place, or argument \u2014 often a temporal marker ('Soon after', 'A little later', 'Very early') or a topic-announcing declaration ('Sambo had two great ambitions').",
      "Close paragraphs with a culminating insight, ironic observation, or emotionally resonant image that crystallizes the paragraph's meaning \u2014 the final sentence should land with weight.",
      "Organize ideas within paragraphs chronologically when narrating events, but interrupt the chronology with parenthetical commentary, physical description, or analytical asides that deepen the reader's understanding of what is being narrated.",
      "Use transitional phrases that acknowledge completion of one topic before pivoting to the next: 'So much for the episode of the bed-wetting. But there is one more thing to be remarked.'",
      "When a paragraph introduces a character, embed physical description and behavioral characterization together in a single dense passage before proceeding to action or dialogue.",
      "Allow some paragraphs to function as single-scene dramatic units with dialogue and action, while others serve as essayistic reflection on patterns \u2014 alternate between these modes."
    ],
    "do_not": [
      "Do not use paragraphs as mere containers for equal-length chunks of text \u2014 let the content dictate paragraph boundaries, with scenes and arguments ending at natural turning points.",
      "Do not begin paragraphs with throat-clearing or vague generalizations that delay the paragraph's purpose \u2014 get to the scene or the claim quickly.",
      "Do not leave paragraphs without a sense of closure \u2014 even when the narrative continues, each paragraph should feel like it has earned its ending."
    ],
    "evidence": [
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked. This is that I did not wet my bed again \u2014 at least, I did wet it once again, and received another beating, after which the trouble stopped. So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.\"",
      "\"Sambo had two great ambitions. One was to attract titled boys to the school, and the other was to train up pupils to win scholarships at public schools, above all at Eton.\"",
      "\"To this day I can feel myself almost swooning with shame as I stood, a very small, round-faced boy in short corduroy knickers, before the two women.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and similes drawn from the physical and everyday world to concretize abstract experiences: 'as cynically as a goose is crammed for Christmas', 'as one keeps a sleepy person awake by sticking pins in him'.",
      "Employ tripartite parallel structures to build emphasis, particularly when analyzing motives or layering causes: 'partly because... partly from... but partly also because of...'",
      "Use direct quotation liberally \u2014 reproduce the exact words of authority figures to let their language condemn them without editorial commentary. Place the quoted speech in context that makes its cruelty or absurdity self-evident.",
      "Deploy rhetorical questions sparingly, and when used, let them function as accusations or provocations rather than as decorative devices.",
      "Use deliberate repetition of key phrases ('the exam', 'a little office boy at forty pounds a year', 'Your parents wouldn't be able to afford it') to show how institutional language becomes internalized and oppressive through repetition.",
      "Employ catalogues and enumerations to convey the overwhelming, systematic nature of institutional practices \u2014 list specifics to build cumulative force.",
      "Use parenthetical self-correction and qualification as a rhetorical device that signals intellectual honesty: '(perhaps, as it was the first time, he was not hitting me very hard)'."
    ],
    "do_not": [
      "Do not use flowery or ornamental metaphors \u2014 analogies should clarify through concrete comparison, not decorate.",
      "Do not rely on abstract emotional vocabulary ('devastating', 'traumatic', 'heartbreaking') \u2014 instead render the emotion through precise physical detail and behavioral description.",
      "Do not editorialize with overt moral judgments when the narrated facts already make the judgment obvious \u2014 trust the reader to draw conclusions from the evidence."
    ],
    "evidence": [
      "\"Our brains were a gold-mine in which he had sunk money, and the dividends must be squeezed out of us.\"",
      "\"I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey.\"",
      "\"'You are living on my bounty' was his favourite phrase in this context. At least once I listened to these words between blows of the cane.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by plunging directly into a specific, concrete episode with temporal and spatial orientation \u2014 establish the setting and the child's situation immediately, then let the narrative carry the reader into the essay's themes.",
      "Use the opening episode as a microcosm of the essay's larger argument \u2014 the first anecdote should contain, in miniature, the dynamics (power, shame, injustice, helplessness) that the full piece will explore.",
      "Structure the essay as a series of thematic episodes rather than strict chronology \u2014 group incidents by subject (bed-wetting, scholarship pressure, class discrimination) and use explicit transitional passages to move between them.",
      "Close sections with reflective summary sentences that distill the meaning of what has been narrated, often with a note of dry irony or resignation.",
      "Use italics or capitals sparingly and only to reproduce how language appeared in the child's mind or to convey shouted speech \u2014 these typographic effects should feel like eruptions of the child's raw experience into the adult's measured prose.",
      "Embed direct dialogue as dramatic scenes within the essay \u2014 format exchanges as distinct quoted lines to create theatrical immediacy, particularly when reproducing the words of authority figures.",
      "Use em dashes for parenthetical insertions and dramatic pauses, and colons to introduce culminating statements or explanations that complete a thought."
    ],
    "do_not": [
      "Do not open with abstract thesis statements or philosophical declarations \u2014 begin in the specific and particular, and let the general emerge from it.",
      "Do not close sections with neat moral lessons or tidy resolutions \u2014 end with the complexity and ambiguity intact, or with understated irony.",
      "Do not use bullet points, headers, or other modern formatting conventions \u2014 the essay should flow as continuous prose with paragraph breaks as the only structural division."
    ],
    "evidence": [
      "\"Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.\"",
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"'REPORT YOURSELF to the Headmaster after breakfast!' I put REPORT YOURSELF in capitals because that was how it appeared in my mind.\""
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
  "one_line_description": "Plain, earnest, morally serious \u2014 confessional authority grounded in concrete detail, with compound-clause momentum and understated force",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence by chaining independent clauses with commas, 'and', 'but', colons, and dashes \u2014 let one thought push into the next within a single sentence rather than breaking into separate ones.",
      "Use the colon as a logical hinge: place a claim or concrete description before it and its explanation, consequence, or devastating reframing after it.",
      "Layer qualifications, temporal markers, and contextual asides into sentences using parenthetical insertions set off by commas, dashes, or actual parentheses \u2014 the thought should visibly refine or complicate itself in real time.",
      "Anchor sentences in concrete, physical subjects \u2014 body parts, objects, sounds, places \u2014 before layering in abstraction or emotional content.",
      "Use participial phrases and appositional constructions to pack additional sensory or contextual detail into the middle of sentences without starting new clauses.",
      "Deploy parallel structure within sentences to create rhythmic momentum, especially when listing examples, causes, or qualities \u2014 repeat the same grammatical frame across items.",
      "Vary sentence architecture by function: use long, multi-clause sentences for argumentation and narration, then drop to a short declarative sentence to deliver a verdict or pivot.",
      "Open sentences with temporal or conditional phrases ('From a very early age', 'When I was about sixteen', 'In one form or another') to anchor the reader before delivering the main clause."
    ],
    "do_not": [
      "Do not write sequences of sentences that all share the same structure and length \u2014 monotonous rhythm deadens the prose.",
      "Do not use sentence fragments for rhetorical emphasis or stylistic effect \u2014 every sentence must be grammatically complete.",
      "Do not use elaborate Latinate periodic sentence structures where the main verb is delayed until the end \u2014 the syntax is fundamentally additive and forward-moving, not suspensive.",
      "Do not front-load sentences with multiple stacked adjectives or adverbs before the subject \u2014 lead with the subject or a simple temporal phrase, then elaborate after.",
      "Do not open multiple consecutive sentences with the same syntactic pattern \u2014 rotate your sentence openers."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person with unflinching honesty about your own moral failings, contradictions, and petty emotions \u2014 never sanitize the self or claim clean hands.",
      "Adopt the tone of a confident, slightly exasperated but earnest speaker: authoritative without being academic, direct without being aggressive, willing to be blunt about uncomfortable truths.",
      "State opinions as plain facts through short declarative assertions, then support them immediately \u2014 let the simplicity of the statement carry the conviction rather than using intensifiers or superlatives.",
      "Use contractions freely in personal and conversational passages to maintain a spoken-prose register, but shift to uncontracted forms when making formal, thesis-like pronouncements.",
      "When conceding a point or acknowledging complexity, do so briefly and move on \u2014 hedging should feel like intellectual honesty, not timidity.",
      "Maintain moral seriousness throughout: the subject matters, the stakes are real, and lazy thinking or institutional cruelty is treated as a genuine failure.",
      "Deploy dry, understated humor by placing brutal or absurd observations in parenthetical asides, as if they are throwaway remarks.",
      "Use 'one' as an impersonal pronoun when stepping from personal experience to universal observation, and 'you' sparingly to universalize a specific experience."
    ],
    "do_not": [
      "Do not adopt a detached, neutral academic register \u2014 the voice must have clear opinions and make value judgments openly from lived experience.",
      "Do not use jargon, technical terminology, or Latinate vocabulary when a plain English word exists \u2014 this is a core ideological commitment of the voice.",
      "Do not use self-deprecating humor or ironic distance as a way to avoid emotional exposure \u2014 the voice is emotionally present even when analytically cool.",
      "Do not address the reader with false intimacy or chatty asides \u2014 warmth comes from directness and shared purpose, not casualness.",
      "Do not use effusive or emotional language \u2014 express strong feelings through plain statement and understatement rather than exclamation or intensifiers."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a concrete situation, common belief, or specific episode, then gradually extract a universal principle from it \u2014 move from particular to general, using the evidence to discover the thesis rather than announcing it.",
      "Build arguments through concrete examples, anecdotes, and sensory observation first, then extract the general principle \u2014 the evidence should arrive before the thesis it supports.",
      "Use analogy as a primary tool of persuasion: translate abstract processes into vivid physical scenarios to make logical relationships viscerally clear.",
      "Handle counterarguments by stating them in their strongest form, conceding what is valid, then showing exactly where they break down \u2014 or embody them in the narrator's own contradictions.",
      "Use the narrator's internal contradictions as an engine of argument \u2014 present two incompatible positions held simultaneously and let the tension between them generate insight.",
      "Develop cause-and-effect chains where effects feed back into causes \u2014 show cyclical or self-reinforcing dynamics rather than simple linear causation.",
      "Hedge with honest qualifications rather than academic weasel words \u2014 use 'I think', 'I dare say', 'I cannot say with certainty' to signal genuine uncertainty, not mere throat-clearing.",
      "Use parody, deliberate bad examples, or direct quotation as argumentative evidence \u2014 demonstrate what is wrong by constructing or quoting a specimen, then dissecting it in plain language."
    ],
    "do_not": [
      "Do not assert a claim without immediately supporting it with a concrete example, analogy, or demonstration \u2014 never let abstract arguments stand alone.",
      "Do not dismiss opposing views without first stating them fairly \u2014 strawmanning weakens the argument.",
      "Do not rely on citations, statistics, or appeals to authority as primary evidence \u2014 use direct demonstration and the reader's own judgment.",
      "Do not organize the argument as a list of disconnected points \u2014 each section should flow causally or logically into the next.",
      "Do not use formal logical transitions ('therefore', 'consequently', 'it follows that') \u2014 let the argument's logic emerge from the narrative sequence."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear anchoring statement \u2014 a temporal marker, a spatial grounding, or a thematic declaration that tells the reader exactly where they are in the chronology or argument.",
      "Organize ideas within paragraphs as a cascade: make a claim or set a scene, illustrate with examples or details, then draw the implication \u2014 the paragraph should narrow from assertion to evidence to pointed conclusion.",
      "Close paragraphs with the sharpest formulation, a resonant image, or a forward-pointing pivot \u2014 endings should sting, crystallize meaning, or propel into the next paragraph.",
      "Build through accumulation within paragraphs: stack examples, concrete details, or clauses that reinforce the same point, creating a sense of overwhelming evidence before drawing the conclusion.",
      "Alternate between paragraphs of dense scene-building narrative and paragraphs of internal reflection or moral analysis \u2014 the essay should breathe between showing and thinking.",
      "Connect paragraphs through logical progression and temporal sequence rather than formulaic transition phrases \u2014 use simple connectives like 'But', 'Now', or temporal markers when needed."
    ],
    "do_not": [
      "Do not begin paragraphs with throat-clearing, meta-commentary, or vague generalizations that delay the paragraph's purpose \u2014 get to the point in the first sentence.",
      "Do not end paragraphs with trailing, inconclusive thoughts \u2014 every paragraph should arrive somewhere, even if that arrival is a deeper confusion.",
      "Do not scatter multiple unrelated points across a single paragraph \u2014 each paragraph should orbit a single claim, scene, or category.",
      "Do not use formulaic transition phrases ('Furthermore', 'Moreover', 'In addition') to link paragraphs \u2014 these are the exact kind of mechanical, thoughtless connectives the voice rejects."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid similes drawn from the physical, everyday, unglamorous world \u2014 make abstractions tangible through concrete imagery that deflates and domesticates rather than elevates.",
      "Deploy catalogues and enumerations as a rhetorical weapon: accumulate examples in rapid succession to overwhelm the reader with the sheer scale of the phenomenon, then stop to comment.",
      "Use direct address and imperatives sparingly to involve the reader in the analysis: 'Look again at', 'Consider', 'ask any' \u2014 make the reader a participant, not a spectator.",
      "Employ deliberate juxtaposition of incompatible elements side by side \u2014 place casual normalcy against horror, euphemism against reality \u2014 and let the contrast do the argumentative work.",
      "Build parallel structures in lists and series to create rhythmic force, often using tripartite constructions that build toward the most emotionally weighted item last.",
      "Use direct quotation liberally \u2014 reproduce the exact words of authority figures or bad writers to let their language condemn them without editorial commentary.",
      "Use parenthetical self-correction and qualification as a rhetorical device that signals intellectual honesty.",
      "Employ the colon-introduced reveal: set up a concrete description or claim, then snap to its reframing after a colon to expose a gap between language and reality."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors, dead metaphors, or stock phrases \u2014 committing this sin undermines all credibility.",
      "Do not use extended metaphors that draw attention to their own cleverness \u2014 metaphors should illuminate the point and then get out of the way.",
      "Do not use rhetorical questions as filler or as a way to avoid making a direct statement \u2014 every question must force the reader to confront something specific.",
      "Do not use exclamation marks for emphasis in narration \u2014 let the content and rhythm carry the force.",
      "Do not use flowery, ornamental, or poetic figurative language \u2014 all comparisons must feel grounded, plain, and immediately graspable."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by engaging directly with a concrete situation, a widely held assumption, or a specific first-person episode \u2014 plunge the reader into the material without preamble.",
      "Establish the stakes immediately in the opening paragraph: make the reader feel that the subject has real-world consequences \u2014 political, moral, or intellectual.",
      "Structure the essay so the central thesis or epiphany emerges from the narrated material rather than being announced at the outset \u2014 the argument should feel discovered, not premised.",
      "Close with a quiet, honest sentence that reframes what came before \u2014 either a deflating personal admission, a hard-won conviction, or an image that speaks for itself.",
      "Include a self-aware caveat or moment of honest self-correction: acknowledge that your own argument may be incomplete, or that you have committed the faults you criticize.",
      "Use em dashes for parenthetical insertions and dramatic pivots. Use parentheses for brief clarifications and asides. Use quotation marks around words being examined as specimens of language.",
      "Use minimal formatting \u2014 no headers, no bullet points, no bold or italic emphasis unless reproducing how language appeared in consciousness. The essay should flow as continuous prose."
    ],
    "do_not": [
      "Do not open with an abstract thesis, a generalization, or a decorative quotation \u2014 begin with the concrete, the personal, or the specific.",
      "Do not close with a vague inspirational call to action or a neat summary that resolves all tensions \u2014 end with specific, honest, and slightly uncomfortable clarity.",
      "Do not end by restating the thesis in the same words \u2014 if you return to the opening idea, advance it or complicate it.",
      "Do not use numbered lists, bullet points, or headers for the main argument \u2014 reserve structured formats only for taxonomies or specimens within the essay."
    ]
  },
  "signature_phrases": {
    "use": [
      "the point is",
      "in our time",
      "it is true that",
      "one could",
      "on the other hand",
      "I dare say",
      "it is not",
      "a sort of",
      "in a sense",
      "in other words",
      "the real",
      "in so far as",
      "it is obvious that",
      "as I have said",
      "one has to remember",
      "the thing that",
      "a kind of",
      "but the point is",
      "it goes without saying",
      "I think",
      "etc., etc."
    ],
    "never_use": [
      "incredibly",
      "absolutely",
      "essentially",
      "utilize",
      "facilitate",
      "leverage",
      "impactful",
      "paradigm",
      "synergy",
      "stakeholder",
      "proactive",
      "robust",
      "innovative",
      "game-changer",
      "deep dive",
      "unpack",
      "nuanced",
      "problematic",
      "navigate",
      "space (as in 'the political space')",
      "framework",
      "discourse",
      "furthermore",
      "moreover",
      "indeed",
      "thus",
      "hence",
      "whilst"
    ]
  },
  "revision_guidance": [
    "Replace Latinate or polysyllabic vocabulary with the shortest plain English equivalent \u2014 'use' not 'utilize', 'help' not 'facilitate', 'end' not 'terminate'.",
    "Convert passive constructions to active where possible \u2014 'the man was killed' becomes 'they killed the man'.",
    "Replace 'furthermore', 'moreover', 'in addition', and 'consequently' with 'and', 'but', 'so', or simply a new sentence.",
    "Break any sentence that chains more than the author's typical clause count into two sentences, splitting at a natural 'and' or 'but'.",
    "Replace abstract emotional vocabulary ('devastating', 'traumatic', 'heartbreaking') with concrete physical description that produces the emotion in the reader.",
    "Convert any clich\u00e9d metaphor or dead figure of speech into either a fresh concrete simile or plain literal statement.",
    "If a paragraph begins with throat-clearing ('It is worth noting that', 'It is important to consider'), delete the opening phrase and start with the actual claim.",
    "Replace any hedging phrase like 'it could be argued' or 'one might suggest' with the direct personal form: 'I think' or 'I believe' or simply state it as fact.",
    "If a passage moralizes or editorializes, cut the commentary and let the concrete facts speak for themselves \u2014 trust the reader.",
    "Replace exclamation marks with periods \u2014 let rhythm and content carry the emphasis."
  ]
}
```