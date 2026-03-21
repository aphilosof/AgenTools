# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** plain, prosecutorial, confessional — moral authority earned through concrete detail, self-implication, and unflinching directness

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
      "Build the default sentence as a compound or compound-complex structure: state a claim in an independent clause, then extend it with one or more coordinating or subordinating clauses joined by commas and conjunctions like 'but', 'and', 'which'.",
      "Use the colon as a structural hinge within sentences \u2014 place the setup before the colon and the payoff, explanation, or restatement after it, keeping the two halves in tension.",
      "Chain clauses with 'and' to create accumulative momentum when cataloguing related effects or building an argument step by step, letting each clause add a new layer to the same grammatical frame.",
      "When delivering a verdict or a key principle, drop into a short, declarative independent clause that stands in sharp contrast to the longer sentences surrounding it \u2014 use brevity as emphasis, not as default.",
      "Favor front-loaded qualification: place concessive or conditional clauses ('if', 'when', 'so far as') at the start of the sentence, then deliver the main assertion in the second half.",
      "Use participial and gerund phrases to compress background information into subordinate positions within larger sentences rather than giving them their own sentences."
    ],
    "do_not": [
      "Do not write strings of short, staccato sentences in succession \u2014 the rhythm depends on long sentences being the norm and short ones arriving as punctuation.",
      "Do not use semicolons as the primary clause-joining device; prefer colons, commas with conjunctions, or dashes instead.",
      "Do not front-load sentences with the main claim and then trail off into qualifications \u2014 put the qualification first and the assertion second."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.\"",
      "\"The point is that the process is reversible.\"",
      "\"It becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when stating your own position, making promises to the reader about what comes next, or confessing your own failings \u2014 but shift to the impersonal 'one' when stating general principles or describing what any reasonable person would do.",
      "Address the reader directly as 'you' when issuing challenges, making the argument personal, or drawing the reader into complicity ('if you or I were told to write').",
      "Maintain an authoritative, prosecutorial tone: speak as someone who has examined the evidence and reached a firm verdict, not as someone tentatively exploring possibilities.",
      "Signal confidence through plain declarative assertions ('The great enemy of clear language is insincerity') rather than through intensifiers or superlatives.",
      "Deploy self-deprecation strategically \u2014 acknowledge your own susceptibility to the very faults you criticize, which earns credibility rather than undermining authority.",
      "Use contractions in passages that address the reader directly or adopt a conversational register, but avoid them in passages that state formal principles or deliver verdicts."
    ],
    "do_not": [
      "Do not adopt a neutral, dispassionate academic tone \u2014 the stance is that of a polemicist who has taken a side and argues for it with moral conviction.",
      "Do not hedge core claims with 'perhaps', 'it might be argued', or 'some would say' \u2014 when uncertainty is expressed, do so explicitly and briefly ('this is a guess which I have not sufficient knowledge to verify') then move on.",
      "Do not use 'we' as a cozy, inclusive pronoun \u2014 use it sparingly, and when you do, it should implicate the reader in the problem, not comfort them."
    ],
    "evidence": [
      "\"I said earlier that the decadence of our language is probably curable.\"",
      "\"Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.\"",
      "\"The great enemy of clear language is insincerity.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a prevailing assumption or conventional wisdom, then immediately undermine it \u2014 use the reader's expected belief as a springboard to argue the opposite.",
      "Build arguments through concrete examples first, then extract the principle. Present specimens, dissect them, and only then state the general rule they illustrate.",
      "Use analogies drawn from everyday physical experience to make abstract arguments visceral: drinking and failure, cuttlefish ink, tea leaves blocking a sink, prefabricated hen-houses.",
      "Handle counterarguments by stating them in their strongest form ('so the argument runs'), then dismantling them \u2014 do not strawman, but do not linger on the opposition's case either.",
      "Construct parallel demonstrations: show the same fault appearing in multiple examples, then name the underlying pattern that unites them all.",
      "Use translation and parody as argumentative tools \u2014 rewrite a good passage in bad style (or vice versa) to make the contrast visible and unanswerable.",
      "Move the argument in a dialectical spiral: state the problem, show examples, name the categories of error, explain the political causes, then circle back to the original claim with deeper understanding."
    ],
    "do_not": [
      "Do not rely on appeals to authority or citation of studies \u2014 the evidence is drawn from close reading of actual prose specimens, not from credentialed sources.",
      "Do not present the argument as a balanced 'on the one hand, on the other hand' analysis \u2014 take a clear position and argue for it throughout.",
      "Do not leave the 'so what' implicit \u2014 always connect the specific observation back to the larger political or moral stakes."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks. It is rather the same thing that is happening to the English language.\"",
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a thesis or a transitional claim that links back to the previous paragraph and announces the new direction \u2014 the first sentence should tell the reader what the paragraph will prove.",
      "Sequence ideas within paragraphs as: claim \u2192 concrete examples or specimens \u2192 analysis of what those examples show \u2192 restatement of the claim in sharper terms.",
      "Close paragraphs with a sentence that either escalates the stakes ('and politics itself is a mass of lies, evasions, folly, hatred, and schizophrenia') or pivots to the next topic ('I will come back to this presently').",
      "Use section headers (in capitals) to mark major structural divisions when cataloguing distinct categories, but within each section let the paragraph flow as continuous prose.",
      "Connect paragraphs through explicit forward and backward references: 'I said earlier', 'as I have tried to show', 'I will come back to this', 'Now that I have made this catalogue'.",
      "When a paragraph introduces multiple examples, number or label them so you can refer back to them later \u2014 create a system of internal cross-referencing across the essay."
    ],
    "do_not": [
      "Do not begin paragraphs with a vague or atmospheric throat-clearing sentence \u2014 lead immediately with substance.",
      "Do not end paragraphs on a trailing or inconclusive note unless deliberately setting up a pivot \u2014 closings should feel decisive or propulsive.",
      "Do not let a paragraph drift across multiple unrelated topics \u2014 each paragraph should serve one argumentative function."
    ],
    "evidence": [
      "\"Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.\"",
      "\"As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer.\"",
      "\"I will come back to this presently, and I hope that by that time the meaning of what I have said here will have become clearer.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy vivid, original similes and metaphors drawn from concrete, physical, everyday objects \u2014 'like soft snow', 'like tea leaves blocking a sink', 'like cavalry horses answering the bugle', 'like a cuttlefish spurting out ink'.",
      "Use the colon-pivot as a core rhetorical device: build up a concrete description of atrocity or absurdity, then follow the colon with the euphemism that conceals it ('this is called pacification').",
      "Use lists and catalogues extensively \u2014 both as evidence (listing bad phrases, dying metaphors, pretentious words) and as rhetorical escalation (piling up examples until the pattern becomes undeniable).",
      "Employ rhetorical questions sparingly but pointedly, to challenge the reader or to expose the absurdity of a position ('what is a \"rift\", for instance?').",
      "Use direct imperatives ('Consider', 'Look again', 'Look back through this essay') to enlist the reader as an active participant in the analysis.",
      "Build parallel structures within sentences to create balance and contrast: 'not simply accept \u2014 the phrases that will best cover the meaning, and then switch round and decide what impressions one's words are likely to make on another person'.",
      "Use repetition of key phrases across the essay ('ready-made phrases', 'stale metaphors', 'the concrete melts into the abstract') to create thematic throughlines."
    ],
    "do_not": [
      "Do not use clich\u00e9 metaphors or dead figures of speech \u2014 practice what you preach by ensuring every image is fresh and visually specific.",
      "Do not use exclamation marks for emphasis \u2014 let the content and sentence structure create the force.",
      "Do not use analogy as decoration; every figurative comparison must advance the argument or make an abstract point concrete."
    ],
    "evidence": [
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.\"",
      "\"his words, like cavalry horses answering the bugle, group themselves automatically into the familiar dreary pattern.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by voicing a widely-held assumption, then immediately begin dismantling it \u2014 the first paragraph should establish the conventional view so the rest of the essay can argue against it.",
      "Use the opening paragraph to set the stakes: frame the subject not as a minor technical matter but as something with broad civilizational or political consequences.",
      "Close the essay with a set of concrete, actionable rules \u2014 after the long analytical argument, deliver practical prescriptions that the reader can apply immediately.",
      "Include a self-undermining final rule that acknowledges the limits of all rules ('Break any of these rules sooner than say anything outright barbarous') \u2014 this prevents dogmatism and earns trust.",
      "Close with a return to the opening theme, showing how the argument has come full circle but at a deeper level of understanding \u2014 the ending should echo the beginning without merely repeating it.",
      "Use formatting conventions strategically: capitalize section headers for taxonomic categories (DYING METAPHORS, OPERATORS OR VERBAL FALSE LIMBS), use numbered lists for specimens to enable cross-referencing, use parenthetical footnote markers for asides.",
      "Use em dashes for parenthetical insertions that add qualification, irony, or a secondary thought \u2014 especially mid-sentence to create a conversational aside within formal prose.",
      "Use parentheticals (in round brackets) for brief clarifications, alternative phrasings, or editorial comments like '(role)' or '(as noun)'."
    ],
    "do_not": [
      "Do not open with an anecdote, a question, or a scene \u2014 open with a direct engagement with the intellectual terrain.",
      "Do not close on a vague, aspirational note \u2014 end with specific prescriptions or a concrete challenge to the reader.",
      "Do not let the essay end without connecting back to its political or moral stakes \u2014 the closing must elevate the argument beyond the merely technical."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"Break any of these rules sooner than say anything outright barbarous.\"",
      "\"one ought to recognise that the present political chaos is connected with the decay of language, and that one can probably bring about some improvement by starting at the verbal end.\""
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
      "Build the backbone of paragraphs from compound and compound-complex sentences that chain multiple independent clauses with 'and', 'but', and commas, creating a deliberate, accumulative momentum \u2014 as if the narrator is thinking through events step by step and cannot stop mid-thought.",
      "Use subordinate clauses beginning with 'when', 'if', 'as', 'that', and 'which' to embed context, conditions, and qualifications inside the main sentence rather than splitting them into separate sentences.",
      "Interrupt sentences with parenthetical asides \u2014 using dashes, commas, or actual parentheses \u2014 to inject commentary, self-correction, or sardonic observations mid-flow, creating a confessional, digressive texture.",
      "Deploy appositive phrases and stacked noun phrases to pack descriptive detail into sentences without starting new ones: layer modifiers after the noun to build a scene in a single breath.",
      "When building toward a key insight or emotional climax, extend the sentence by piling clause upon clause, deferring the resolution to the end \u2014 let the grammar mirror the mounting psychological pressure.",
      "Use semicolons sparingly to yoke together two closely related observations that are too intertwined to separate but too independent to merely conjoin with 'and'."
    ],
    "do_not": [
      "Do not write in clipped, telegraphic style with many fragments strung together \u2014 the rhythm depends on full grammatical sentences that unfold at length.",
      "Do not front-load sentences with elaborate subordinate clauses before the subject; lead with the subject or a brief scene-setting phrase, then extend after the main verb.",
      "Do not rely on participial phrases at the start of sentences as a habitual opener \u2014 the dominant pattern is subject-verb with elaboration trailing after."
    ],
    "evidence": [
      "\"I was young and ill-educated and I had had to think out my problems in the utter silence that is imposed on every Englishman in the East.\"",
      "\"Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.\"",
      "\"He neither stirred nor fell, but every line of his body had altered.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a confessional narrator who is simultaneously a participant in events and a retrospective moral analyst of those events \u2014 maintain both the immediate experiential 'I' and the older, wiser 'I' who now understands what it meant.",
      "Adopt a tone that is earnest and morally serious but undercut it with dry, self-lacerating irony \u2014 the narrator treats his own complicity and cowardice with sardonic honesty rather than self-pity.",
      "Signal uncertainty and self-contradiction openly: let the narrator admit conflicting feelings, ignorance, and moral confusion rather than projecting false clarity. Use phrases like 'I did not even know', 'I thought then and I think now', 'I dare say'.",
      "Maintain a collegial, almost conspiratorial distance with the reader \u2014 address them occasionally with 'you' to draw them into shared understanding, but do not become chatty or casual. The register is that of an educated person speaking plainly about ugly truths.",
      "Use contractions naturally in the flow of narration and reflection, but avoid them when making formal moral pronouncements or sweeping generalizations \u2014 the shift in formality signals the shift from anecdote to thesis.",
      "Express strong emotion through understatement and precise physical description rather than through exclamatory or sentimental language. Let the horror emerge from what is observed, not from the narrator's proclaimed reaction."
    ],
    "do_not": [
      "Do not adopt a detached, clinical, or academic tone \u2014 the narrator is emotionally implicated and admits it.",
      "Do not use self-aggrandizing or heroic framing \u2014 the narrator consistently presents himself as foolish, conflicted, and trapped by circumstances.",
      "Do not sentimentalize or moralize in an elevated, preachy register \u2014 keep moral observations grounded in the specific, physical, and personal."
    ],
    "evidence": [
      "\"I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.\"",
      "\"with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts.\"",
      "\"I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis through a concrete, particular incident rather than through abstract claim \u2014 let the narrative carry the argument. The argument emerges FROM the story; it does not precede it.",
      "Build the argument dialectically: present the narrator's internal contradictions (hating the empire yet hating those who resisted it; not wanting to shoot yet feeling compelled) and let the resolution arise from the tension between them.",
      "Use the specific physical experience as the primary form of evidence \u2014 what the narrator saw, felt, and did \u2014 and then draw the general principle from it. Move from the sensory to the conceptual, never the reverse.",
      "Handle counterarguments and alternative perspectives by embedding them in the narrative itself: show what others said, what the crowd wanted, what different factions of Europeans thought, and let these competing views create the dialectic without formal rebuttal.",
      "State the central insight as a sudden, almost involuntary realization triggered by a specific moment \u2014 'I first grasped', 'I perceived in this moment', 'I realized' \u2014 framing intellectual discovery as lived experience.",
      "Hedge through self-aware qualifications ('I dare say', 'I thought then and I think now', 'Somehow it always seems') rather than through academic hedging language like 'arguably' or 'it could be said'."
    ],
    "do_not": [
      "Do not lay out the argument as a series of numbered points or a formal logical chain \u2014 the logic must feel discovered through narrative, not pre-constructed.",
      "Do not introduce evidence through citations, statistics, or appeal to authorities \u2014 all evidence is experiential and observational.",
      "Do not resolve contradictions cleanly; leave the moral ambiguity standing as the point itself."
    ],
    "evidence": [
      "\"One day something happened which in a roundabout way was enlightening. It was a tiny incident in itself, but it gave me a better glimpse than I had had before of the real nature of imperialism \u2014 the real motives for which despotic governments act.\"",
      "\"I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys.\"",
      "\"And afterwards I was very glad that the coolie had been killed; it put me legally in the right and it gave me a sufficient pretext for shooting the elephant.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a situating statement that places the reader in time, location, or psychological state \u2014 'One day something happened', 'But at that moment I glanced round', 'I had halted on the road' \u2014 grounding what follows before extending into reflection.",
      "Organize paragraphs by alternating between narrative action and reflective commentary: describe what happened, then explain what it meant or how it felt, then return to action. Weave scene and analysis together within a single paragraph.",
      "Close paragraphs with a sentence that delivers either a pointed moral observation, a sardonic aside, or a pivot toward the next phase of the narrative \u2014 give each paragraph a final beat that lands with force.",
      "Use accumulative listing within paragraphs to build sensory density: stack details separated by commas and semicolons to create a panoramic survey of a scene before narrowing focus to one significant detail.",
      "Connect paragraphs through chronological progression in the narrative sections and through logical intensification in the reflective sections \u2014 each paragraph raises the stakes or deepens the moral dilemma."
    ],
    "do_not": [
      "Do not open paragraphs with abstract topic sentences that announce what will be discussed \u2014 enter through a scene, an action, or a feeling.",
      "Do not write paragraphs that are purely reflective or purely narrative; blend the two modes so that observation and meaning are always intertwined.",
      "Do not use explicit transition words like 'furthermore', 'additionally', or 'in conclusion' \u2014 transitions should feel organic, emerging from the narrative's own momentum."
    ],
    "evidence": [
      "\"All this was perplexing and upsetting. For at that time I had already made up my mind that imperialism was an evil thing and the sooner I chucked up my job and got out of it the better.\"",
      "\"Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty.\"",
      "\"In the end I could not stand it any longer and went away.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical analogies drawn from everyday life to illuminate abstract or political ideas \u2014 compare an elephant to 'a huge and costly piece of machinery', a falling elephant to 'a huge rock toppling', a man's chance to 'a toad under a steam-roller'. Keep analogies visceral and plain.",
      "Deploy parenthetical asides \u2014 in dashes or actual parentheses \u2014 to insert offhand, often darkly comic commentary that disrupts the narrative surface and reveals the narrator's conflicted inner voice: '(Never tell me, by the way, that the dead look peaceful.)'",
      "Use deliberate repetition of key phrases and constructions to build rhetorical momentum: repeat 'I had got to' and 'A sahib has got to' to hammer home the theme of compulsion; repeat 'I fired' to mark the relentless sequence of the killing.",
      "Employ antithesis to dramatize contradictions: place opposing ideas in parallel grammatical structures \u2014 'seemingly the leading actor of the piece; but in reality I was only an absurd puppet', 'Alive, the elephant was worth at least a hundred pounds; dead, he would only be worth the value of his tusks'.",
      "Use simile sparingly but memorably, choosing comparisons that are startlingly precise and often grotesque \u2014 'The thick blood welled out of him like red velvet', 'as neatly as one skins a rabbit'.",
      "Address the reader directly with imperatives or invitations \u2014 'ask any Anglo-Indian official', 'Never tell me' \u2014 to break the essay's fourth wall and create a sense of intimate confession."
    ],
    "do_not": [
      "Do not use literary, elevated, or ornamental metaphors \u2014 all figurative language must be grounded in physical, tangible things.",
      "Do not use rhetorical questions as a structural device for building argument; prefer declarative revelation of insight.",
      "Do not over-deploy any single device \u2014 the power comes from precision and placement, not from saturation."
    ],
    "evidence": [
      "\"I should have about as much chance as a toad under a steam-roller.\"",
      "\"(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)\"",
      "\"The thick blood welled out of him like red velvet, but still he did not die.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a bold, confessional first sentence that immediately establishes the narrator's personal stake and the essay's emotional core \u2014 drop the reader into the situation with a striking, almost provocative admission.",
      "Establish the setting with minimal but precise geographic and occupational detail in the first sentences \u2014 give just enough context for the reader to understand the narrator's position before the narrative takes over.",
      "Close the essay with a short, devastatingly understated sentence that circles back to the narrator's private shame or moral failure \u2014 make the final line land like a quiet punch that reframes everything that came before.",
      "Structure the overall piece as a movement from context (the general situation) \u2192 inciting incident \u2192 rising action \u2192 moral crisis \u2192 climax \u2192 denouement \u2192 retrospective coda, following the arc of a short story while carrying the weight of an argument.",
      "Use em dashes liberally for interjections, qualifications, and dramatic pauses within sentences \u2014 they are the signature punctuation, marking the places where the narrator's second thoughts break through.",
      "Use single quotation marks for terms being held at ironic distance \u2014 'must', 'natives' \u2014 to signal that the narrator is using the vocabulary of the world he inhabits while maintaining critical separation from it.",
      "Format as continuous prose without headers, bullet points, or any visual scaffolding \u2014 the essay form demands an unbroken flow from first sentence to last."
    ],
    "do_not": [
      "Do not open with a question, a quotation, or a scene \u2014 open with a first-person declarative statement that is immediately arresting.",
      "Do not close with a grand moral lesson, a call to action, or an inspirational note \u2014 end with private, self-aware irony that refuses to redeem the narrator.",
      "Do not use headers, subheadings, lists, or any structural formatting \u2014 the essay's structure must emerge purely from the narrative and argumentative flow of the prose."
    ],
    "evidence": [
      "\"In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.\"",
      "\"I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.\"",
      "\"He wears a mask, and his face grows to fit it.\""
    ]
  }
}
```

### sample-3.txt (2044 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2044,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking concrete physical details in sequence, chaining observations with commas to create a cinematic panning effect: subject did X, did Y, did Z.",
      "Use compound sentences joined by 'and' or 'but' to yoke together two distinct actions or observations, creating a sense of continuous, unbroken witness \u2014 as though the narrator cannot look away.",
      "Anchor long sentences with a simple declarative skeleton (subject-verb-object), then extend them with participial phrases and appositional detail: 'He was a Hindu, a puny wisp of a man, with a shaven head and vague liquid eyes.'",
      "When describing a scene or sequence, let the rhythm build through accumulation \u2014 stack clause upon clause within a single sentence to mirror the relentless forward motion of events.",
      "Deploy a plain, short declarative sentence after a passage of longer, detail-laden ones to land a moral or emotional blow: the shift in pace signals importance.",
      "Use participial phrases ('gripping him by arm and shoulder', 'yielding his arms limply') to layer simultaneous actions into a single sentence, giving density without confusion."
    ],
    "do_not": [
      "Do not write sentences that are syntactically complex for their own sake \u2014 every clause must carry a concrete image or action, never abstract filler.",
      "Do not break the forward momentum with parenthetical asides or nested subordinate clauses that force the reader to backtrack.",
      "Do not use sentence fragments for stylistic effect \u2014 maintain grammatical completeness even in the shortest sentences."
    ],
    "evidence": [
      "They crowded very close about him, with their hands always on him in a careful, caressing grip, as though all the while feeling him to make sure he was there.",
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "He was dangling with his toes pointed straight downwards, very slowly revolving, as dead as a stone."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who reports physical facts with journalistic precision but lets moral horror emerge from the details themselves, never from editorial pronouncement.",
      "Maintain a tone of restrained, almost clinical observation for the majority of the piece \u2014 then permit exactly one or two passages where the narrator breaks into open reflection, making those moments land with enormous force.",
      "Use 'we' to implicate the narrator (and by extension the reader) in collective complicity \u2014 the narrator is not above the scene but embedded in it.",
      "Shift to 'I' only at moments of personal moral reckoning, marking the transition from group experience to individual conscience.",
      "Use contractions freely in dialogue to capture the cadence of real speech, and use them in narration to maintain a conversational, unpretentious register \u2014 avoid any whiff of literary posturing.",
      "Signal uncertainty or moral complexity through concrete observation rather than hedging language \u2014 show the narrator noticing something that disturbs him rather than saying 'perhaps' or 'it seems.'",
      "Render dialogue with dialect spelling and speech patterns intact ('hass', 'iss', 'wass') to ground characters in their specific social and linguistic reality."
    ],
    "do_not": [
      "Do not editorialize or tell the reader what to feel \u2014 let the juxtaposition of observed details do the emotional work.",
      "Do not adopt a detached, superior tone toward the people in the scene; the narrator is complicit and knows it.",
      "Do not use academic or philosophical vocabulary to discuss moral questions \u2014 keep the diction plain and concrete even when the subject is abstract."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "I found that I was laughing quite loudly. Everyone was laughing.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument not through thesis-and-evidence but through narrative accumulation \u2014 let a sequence of observed facts lead the reader to a moral conclusion without ever stating that conclusion as a proposition.",
      "Use a single, small, concrete detail as the fulcrum of the entire piece's meaning \u2014 one observed action (stepping aside to avoid a puddle) that crystallizes the abstract horror into something undeniable.",
      "When the narrator does reflect explicitly, frame the insight as something realized in the moment, not retrospectively analyzed \u2014 use 'I saw' and 'I realized' rather than 'looking back' or 'in retrospect.'",
      "Juxtapose the gravity of death with the banality of routine (breakfast, cigarettes, whisky, small talk) to let irony carry the argument \u2014 the contrast itself is the claim.",
      "Introduce counterpoints or complications not as argued positions but as behavior: the laughter, the chatter, the Eurasian boy's silver cigarette case \u2014 let human coping mechanisms speak for themselves."
    ],
    "do_not": [
      "Do not state a thesis at the beginning and then prove it \u2014 let the narrative do the persuading.",
      "Do not explain the irony or moral significance of juxtapositions; trust the reader to feel the dissonance.",
      "Do not use logical connectives like 'therefore,' 'consequently,' or 'this proves that' \u2014 the essay argues through showing, not through syllogism."
    ],
    "evidence": [
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "An enormous relief had come upon us now that the job was done. One felt an impulse to sing, to break into a run, to snigger.",
      "At that moment Francis's anecdote seemed extraordinarily funny. We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete, scene-setting sentence that locates the reader in time and space \u2014 establish who is where and what is happening before adding texture.",
      "Organize the interior of a paragraph as a camera would: start wide (the scene), then zoom in on specific physical details, then pull back to register the narrator's or crowd's reaction.",
      "Use single-sentence paragraphs exclusively for direct speech, giving dialogue its own visual and rhythmic space on the page.",
      "Close narrative paragraphs by landing on the most emotionally or morally charged detail \u2014 place the image that lingers at the end, not the middle.",
      "Transition between paragraphs through chronological progression ('Then', 'Suddenly', 'At a word from Francis') rather than through thematic or argumentative connectives \u2014 let time be the organizing principle.",
      "When moving from narration to reflection, mark the shift with a new paragraph and a change in tense (past to present) to signal that the narrator is stepping outside the timeline."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences \u2014 always lead with something concrete and sensory.",
      "Do not use explicit transition phrases like 'furthermore,' 'in addition,' or 'on the other hand' \u2014 connect paragraphs through the momentum of the narrative itself.",
      "Do not bury the most important image or observation in the middle of a paragraph where it loses its force."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes that yoke the scene to something mundane or grotesque to create dissonance \u2014 compare solemn things to everyday objects ('like yellow tinfoil', 'like small animal cages', 'as dead as a stone') to strip away any grandeur from the proceedings.",
      "Deploy lists of concrete physical details in asyndetic or polysyndetic chains to build visceral accumulation: 'bowels digesting food, skin renewing itself, nails growing, tissues forming.'",
      "Use repetition of a single word or phrase ('Ram! Ram! Ram! Ram!') to create an incantatory, unbearable rhythm that forces the reader to share the discomfort of the witnesses.",
      "Employ the dash to introduce an interruption, surprise, or sudden tonal shift \u2014 use it as a narrative tool to mirror the unexpected ('A dreadful thing had happened \u2014 a dog').",
      "Use 'as though' and 'like' comparisons to reveal the psychological state of characters through physical analogy rather than direct statement: 'as though he hardly noticed what was happening.'",
      "Favor plain, Anglo-Saxon diction for moments of highest emotional intensity \u2014 avoid Latinate or polysyllabic words when describing death, fear, or moral crisis."
    ],
    "do_not": [
      "Do not use metaphors that ennoble or beautify violence \u2014 every figurative comparison should deflate, estrange, or make the scene more uncomfortably ordinary.",
      "Do not use rhetorical questions to guide the reader's thinking \u2014 let the narrated facts provoke questions in the reader's mind without asking them directly.",
      "Do not employ alliteration or sonic effects that call attention to the prose's 'writtenness' \u2014 the style should feel transparent, as though the narrator is simply telling you what happened."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a single sentence that places the reader in a specific time and place with immediate sensory texture \u2014 the very first sentence should feel like a camera switching on in the middle of a world already in motion.",
      "Follow the opening sentence with progressively more specific detail: location, then weather/light, then the people, then what they are doing \u2014 funnel from setting to situation.",
      "Close the piece with a devastatingly understated final sentence that forces the reader to hold two incompatible realities in mind simultaneously \u2014 the mundane and the monstrous.",
      "Use the ending to snap the reader back to the physical proximity of death after a passage of normalizing social behavior (laughter, drinking) \u2014 make the last sentence a spatial or temporal fact, not a moral pronouncement.",
      "Structure the whole piece as a chronological narrative with a single embedded reflective passage that serves as the moral center \u2014 do not scatter reflections throughout; concentrate them in one unforgettable paragraph.",
      "Use em dashes for dramatic interruptions and pivots within the narrative. Use quoted dialogue with attribution ('said X irritably', 'bubbled', 'shouted almost fiercely') where the adverb or verb of attribution does subtle characterization work.",
      "When rendering non-native English speech, preserve the speaker's syntax and pronunciation in spelling to honor their presence in the scene as real individuals, not as abstractions."
    ],
    "do_not": [
      "Do not open with a generalization, thesis, or abstract statement \u2014 begin in the concrete, physical world.",
      "Do not close with a summary of what the reader should have learned or felt \u2014 end on an image or fact and let it resonate.",
      "Do not use headers, section breaks, or any structural apparatus \u2014 the piece should read as a single unbroken flow of witnessed experience."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "The dead man was a hundred yards away.",
      "'For God's sake hurry up, Francis,' he said irritably. 'The man ought to have been dead by this time. Aren't you ready yet?'"
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
      "Build sentences by chaining multiple independent and dependent clauses with commas and coordinating conjunctions ('and', 'but'), creating a cumulative, accretive rhythm where each clause adds a new detail or qualification to the thought.",
      "Use subordinate clauses and parenthetical insertions mid-sentence to layer context, qualification, or self-correction into the main assertion \u2014 embed asides with commas or dashes rather than breaking into separate sentences.",
      "Anchor long, clause-heavy sentences with a simple declarative core statement; the complexity should come from elaboration appended to a clear subject-verb spine.",
      "Vary sentence length by following extended, multi-clause sentences with a short, blunt declarative that delivers a verdict or emotional punch \u2014 the short sentence earns its force from the long ones preceding it.",
      "Open sentences frequently with temporal or conditional markers ('When I was about sixteen', 'From time to time', 'In a peaceful age') to situate the reader in time or circumstance before delivering the main point."
    ],
    "do_not": [
      "Do not write sentences that are merely long through redundancy \u2014 every clause must advance the thought, add a new fact, or qualify the preceding claim.",
      "Do not use fragmented, staccato rhythms as a default mode; the baseline should be flowing, multi-clause prose with brevity reserved for emphasis.",
      "Do not front-load sentences with multiple adverbial modifiers before reaching the subject \u2014 keep the subject accessible even when the sentence is complex."
    ],
    "evidence": [
      "\"I was the middle child of three, but there was a gap of five years on either side, and I barely saw my father before I was eight.\"",
      "\"For this and other reasons I was somewhat lonely, and I soon developed disagreeable mannerisms which made me unpopular throughout my schooldays.\"",
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person with unflinching self-assessment \u2014 confess weaknesses, vanities, and failures plainly, without self-pity or false modesty. Treat the self as a case study to be examined honestly.",
      "Maintain a tone that is simultaneously intimate and analytical: share personal experiences but examine them with the detachment of a social observer cataloguing facts.",
      "Signal certainty through plain declaratives ('It is humbug to pretend this is not a motive') and signal uncertainty through hedged parentheticals ('I suppose', 'so far as I remember', 'I think').",
      "Use 'one' as an impersonal pronoun when stating general truths about human nature, switching to 'I' for personal experience \u2014 this creates a movement between the universal and the particular.",
      "Deploy dry, understated humor through self-deprecation and matter-of-fact confession of unflattering truths rather than through jokes or wit.",
      "Use contractions selectively to modulate formality \u2014 contract in moments of personal candor and directness, avoid contracting in more elevated or generalizing passages."
    ],
    "do_not": [
      "Do not adopt a preachy or moralistic tone \u2014 present even strong convictions as personal conclusions arrived at through experience, not as universal commandments.",
      "Do not perform false humility or exaggerated self-flagellation; the self-criticism should be precise and clinical, not theatrical.",
      "Do not use enthusiasm, exclamation, or effusiveness \u2014 maintain an even, measured warmth that never rises to excitement."
    ],
    "evidence": [
      "\"I soon developed disagreeable mannerisms which made me unpopular throughout my schooldays.\"",
      "\"All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\"",
      "\"It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through personal narrative first, then extract the general principle \u2014 move from autobiography to thesis, not the reverse.",
      "Build arguments chronologically when tracing the development of an idea or conviction; let the reader follow the same path of experience that led to the conclusion.",
      "When presenting a taxonomy or classification (e.g., motives for writing), state it as a numbered list with brief, concrete elaboration for each item, using examples and counter-examples rather than abstract definitions.",
      "Handle counterarguments by embedding them within the argument as concessions \u2014 acknowledge the opposing view with a subordinate clause ('no doubt', 'of course', 'it is true that') then immediately reassert the main position with 'but'.",
      "Use specific, concrete anecdotes as the primary form of evidence \u2014 a single well-chosen incident carries more weight than abstract reasoning.",
      "Hedge with phrases like 'I think', 'I suppose', 'so far as I remember', 'in a sense' \u2014 but only when genuine uncertainty exists, never as a rhetorical tic."
    ],
    "do_not": [
      "Do not argue from pure abstraction \u2014 every general claim must be grounded in a specific example, memory, or observable fact.",
      "Do not dismiss opposing positions outright; acknowledge their partial truth before explaining why your position supersedes them.",
      "Do not present conclusions without showing the lived experience or reasoning that produced them."
    ],
    "evidence": [
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"What he said was true, but I could not have done otherwise. I happened to know, what very few people in England had been allowed to know, that innocent men were being falsely accused.\"",
      "\"It is humbug to pretend this is not a motive, and a strong one.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear orienting statement that sets the temporal frame, topic, or thesis \u2014 the first sentence should tell the reader exactly where they are in the argument.",
      "Develop paragraphs through accumulation: stack specific examples, memories, or elaborations one after another, connected by 'and', 'but', 'also', creating a sense of building evidence.",
      "Close paragraphs with a summarizing judgment, a pivot to the next idea, or a short declarative that crystallizes the preceding material into a memorable verdict.",
      "Transition between paragraphs by using temporal markers ('However, throughout this time'), logical connectives ('I give all this background information because'), or by picking up a thread from the previous paragraph's close.",
      "Within paragraphs, sequence ideas from concrete/specific to abstract/general \u2014 narrate the experience first, then draw the lesson."
    ],
    "do_not": [
      "Do not begin paragraphs with vague throat-clearing or abstract generalizations that delay the point \u2014 orient the reader immediately.",
      "Do not leave paragraphs without a sense of closure; even when the thought continues in the next paragraph, the current one should feel like a complete unit.",
      "Do not jump between unrelated ideas within a single paragraph \u2014 each paragraph should have one governing topic with all details supporting it."
    ],
    "evidence": [
      "\"From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.\"",
      "\"However, throughout this time I did in a sense engage in literary activities.\"",
      "\"Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical similes drawn from everyday life to illuminate abstract ideas \u2014 compare writing to illness, prose to a windowpane, motives to demons.",
      "Deploy enumeration and cataloguing as a persuasive device: list multiple examples in rapid succession to create a sense of comprehensiveness and authority ('scientists, artists, politicians, lawyers, soldiers, successful businessmen').",
      "Use antithesis to sharpen distinctions \u2014 set two ideas in opposition within a single sentence to make both clearer ('directly or indirectly, against totalitarianism and for democratic socialism').",
      "Employ deliberate repetition of key words and phrases ('I wanted to write', 'desire to') to create rhetorical momentum and structural cohesion within and across paragraphs.",
      "Use the dash \u2014 especially the em dash \u2014 for parenthetical insertions that add ironic commentary, clarification, or self-correction mid-sentence.",
      "Address the reader occasionally with direct, almost confrontational statements that implicate them in the argument ('Was Smith? Was Jones? Were you?')."
    ],
    "do_not": [
      "Do not use elaborate or literary metaphors that call attention to their own cleverness \u2014 similes should be plain, functional, and immediately comprehensible.",
      "Do not use rhetorical questions as a primary argumentative tool; prefer declarative assertions that state the position directly.",
      "Do not employ flowery language or 'purple passages' \u2014 the author explicitly warns against this tendency and strives for clarity over ornamentation."
    ],
    "evidence": [
      "\"Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.\"",
      "\"Good prose is like a windowpane.\"",
      "\"Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a direct, personal declaration that immediately establishes the central subject and the author's relationship to it \u2014 no preamble, no scene-setting, straight to the autobiographical thesis.",
      "Structure the essay as an intellectual autobiography: trace the development of an idea or conviction chronologically through personal experience, arriving at a general theory only after the narrative groundwork is laid.",
      "Close the essay with a moment of self-correcting honesty \u2014 pull back from any impression of certainty or righteousness, acknowledge contradictions, and end with a plain, memorable aphorism that encapsulates the essay's core tension.",
      "Use numbered or lettered lists (i, ii, iii, iv) when presenting taxonomies or classifications within the essay \u2014 this gives analytical structure to otherwise flowing prose.",
      "Employ 'i.e.' for mid-sentence clarifications, italics (or quotes) for words used as words, and em dashes for inserted qualifications \u2014 these are the primary formatting tools.",
      "Mirror the opening's personal confession in the closing: if the essay begins with 'I knew I should be a writer,' end by circling back to what kind of writer and why \u2014 create structural closure through thematic return."
    ],
    "do_not": [
      "Do not open with a question, a quotation from someone else, or a dramatic anecdote \u2014 begin with a plain first-person statement of fact about the self.",
      "Do not close with a tidy resolution or inspirational uplift \u2014 end with honest ambivalence, a final self-assessment that acknowledges failure alongside conviction.",
      "Do not use headers, subheadings, or heavy formatting to organize the essay \u2014 let the argument flow as continuous prose with only minimal structural markers (numbered lists where needed)."
    ],
    "evidence": [
      "\"From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.\"",
      "\"Good prose is like a windowpane. I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed.\"",
      "\"And looking back through my work, I see that it is invariably where I lacked a political purpose that I wrote lifeless books and was betrayed into purple passages, sentences without meaning, decorative adjectives and humbug generally.\""
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
      "Build sentences that accumulate detail through cascading subordinate and relative clauses, layering qualifications, parenthetical asides, and temporal markers before arriving at the main point \u2014 the sentence should feel like it is thinking its way forward, not delivering a pre-packaged conclusion.",
      "Use colons and dashes within sentences to introduce elaborations, restatements, or dramatic pivots \u2014 treat these as tools for extending a thought rather than ending it.",
      "Chain clauses with 'and' and 'but' to create a rolling, additive rhythm that mimics the associative flow of memory \u2014 one recollection triggering the next within a single sentence.",
      "When rendering a moment of emotional or psychological insight, allow the sentence to sprawl across multiple clauses, each adding a new facet of feeling \u2014 'I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief...'",
      "Follow extended, clause-heavy sentences with short declarative sentences that land like verdicts or summations \u2014 these create a rhythm of accumulation followed by blunt finality.",
      "Use participial and absolute phrases to embed concurrent action or description into the main clause \u2014 'reaching out under the table,' 'holding the broken crop' \u2014 rather than splitting into separate sentences."
    ],
    "do_not": [
      "Do not write in clipped, telegraphic bursts \u2014 avoid staccato rhythms that break the meditative, ruminative flow.",
      "Do not use semicolons to join independent clauses \u2014 prefer commas with conjunctions, or colons, or dashes.",
      "Do not construct sentences that deliver their point immediately and then stop \u2014 the characteristic move is to state something and then qualify, elaborate, or complicate it within the same sentence."
    ],
    "evidence": [
      "I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey: a sense of desolate loneliness and helplessness, of being locked up not only in a hostile world but in a world of good and evil where the rules were such that it was actually not possible for me to keep them.",
      "I could not speak.",
      "He would tap away at one's skull with his silver pencil, which, in my memory, seems to have been about the size of a banana, and which certainly was heavy enough to raise a bump: or he would pull the short hairs round one's ears, or, occasionally, reach out under the table and kick one's shin."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Narrate from the retrospective adult self looking back at the child self \u2014 maintain a dual consciousness where the adult understands what the child could not, and makes this gap explicit ('Nowadays, I believe...'; 'I did not at first understand').",
      "Shift between first person 'I' for personal experience and the impersonal 'one' or 'you' when generalizing the experience to universal childhood \u2014 use 'one' to create slight formal distance when making broader observations, 'you' when drawing the reader into the felt experience.",
      "Adopt a tone that is simultaneously clinical and emotionally raw \u2014 describe brutal or humiliating scenes with detached precision while letting the emotional weight emerge from the facts themselves rather than from explicit emotional language.",
      "Use contractions sparingly and only in dialogue or when adopting a deliberately casual, confiding register \u2014 the default narrative voice should use full forms ('I did not,' 'it was not') to maintain a composed, essayistic gravity.",
      "Signal uncertainty and the limits of memory honestly and without embarrassment \u2014 'I forget how,' 'I cannot remember whether,' 'I am not sure which' \u2014 treat acknowledged gaps as marks of credibility rather than weakness.",
      "When expressing moral judgments, state them flatly and with quiet authority rather than with outrage \u2014 let the reader supply the indignation."
    ],
    "do_not": [
      "Do not sentimentalize the child's suffering \u2014 avoid self-pity, melodrama, or appeals for sympathy; let the events speak.",
      "Do not adopt a consistently warm or intimate register \u2014 the dominant mode is one of cool, almost forensic recall punctuated by moments of raw feeling.",
      "Do not use hedging language to soften moral assessments of institutions or people \u2014 when a judgment is rendered, render it plainly."
    ],
    "evidence": [
      "Fright and shame seemed to have anaesthetized me.",
      "In general, one's memories of any period must necessarily weaken as one moves away from it.",
      "'I don't think it's awfully decent of you to behave like this, is it? Do you think it's quite playing the game by your mother and father to go on idling your time away, week after week, month after month?'"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Construct arguments through the accumulation of concrete episodes \u2014 advance the thesis not through abstract reasoning but through narrative scenes that dramatize the point, letting the reader extract the principle from the particular.",
      "After presenting a scene or anecdote, step back and offer a reflective, generalizing commentary that explicitly draws the lesson \u2014 'And the double beating was a turning-point, for it brought home to me for the first time the harshness of the environment into which I had been flung.'",
      "Introduce claims as personal recollection first, then widen to social or philosophical observation \u2014 move from 'I' to 'one' or 'a child' to universalize without losing the grounding in lived experience.",
      "Handle counterarguments or qualifications by embedding them parenthetically within the flow of the main argument \u2014 'perhaps, as it was the first time, he was not hitting me very hard' \u2014 rather than devoting separate paragraphs to them.",
      "Use logical flow that is simultaneously chronological and thematic \u2014 events are narrated in rough time order, but digressions and forward/backward temporal jumps are used freely when they serve the thematic point.",
      "Preemptively acknowledge objections to your own memory or judgment \u2014 'I must say that these scenes were not frequent' \u2014 to strengthen credibility before pressing the larger indictment."
    ],
    "do_not": [
      "Do not structure arguments as formal thesis-evidence-conclusion sequences \u2014 the logic should feel organic and narrative, not academic.",
      "Do not dismiss counterpoints or alternative interpretations; acknowledge them honestly, even if they complicate the argument.",
      "Do not rely on external citations or authorities \u2014 the evidence is personal experience rendered with enough specificity to be self-authenticating."
    ],
    "evidence": [
      "I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question. It was possible, therefore, to commit a sin without knowing that you committed it, without wanting to commit it, and without being able to avoid it.",
      "To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember that the child has little sense of proportion or probability.",
      "It is a mistake to think such methods do not work. They work very well for their special purpose."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a direct statement that sets the scene, introduces a new character, or marks a temporal shift \u2014 'After the second or third offence I was warned...'; 'Soon after I arrived at St Cyprian's...'",
      "Build paragraphs as self-contained narrative episodes \u2014 each paragraph tells a complete mini-story with setup, development, and a concluding observation or emotional beat.",
      "Close paragraphs with sentences that deliver a moral reflection, an ironic twist, or a charged emotional image \u2014 'which did not make me more popular'; 'a remark which I felt to be contemptible, but which I perfectly well understood.'",
      "Use transitional phrases that signal chronological or logical progression between paragraphs \u2014 'A little later,' 'So much for,' 'Very early it was impressed upon me' \u2014 to stitch episodes into a continuous narrative.",
      "Within paragraphs, sequence ideas by moving from external action to internal psychological response \u2014 narrate what happened, then explain what was thought or felt about it.",
      "Use single-sentence paragraphs for dialogue exchanges or for moments of dramatic emphasis \u2014 isolate a sentence when it needs to land with the force of a blow."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences divorced from narrative \u2014 always ground the opening in a specific time, place, or action.",
      "Do not end paragraphs on neutral, transitional notes \u2014 the closing sentence should have rhetorical weight, whether through irony, pathos, or decisive judgment.",
      "Do not organize paragraphs as lists of parallel examples \u2014 instead, develop one extended scene or argument per paragraph."
    ],
    "evidence": [
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "Year after year, never daring to ask, I would miserably hope that this year a cake would appear. Once or twice I even rashly pretended to my companions that this time I was going to have a cake. Then came tea-time, and no cake, which did not make me more popular.",
      "'REPORT YOURSELF to the Headmaster after breakfast!'"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use parenthetical asides \u2014 set off by dashes, parentheses, or commas \u2014 to inject commentary, qualification, or ironic observation into the middle of a narrative sentence, creating a double voice of narrator-now and character-then.",
      "Deploy lists of three (tricolon) when building emotional or descriptive intensity \u2014 'a conviction of sin and folly and weakness'; 'without knowing that you committed it, without wanting to commit it, and without being able to avoid it.'",
      "Use direct quotation of dialogue extensively to dramatize scenes \u2014 reproduce speech in its full colloquial texture, including pet phrases and verbal tics of the speakers.",
      "Employ concrete, physical metaphors and similes drawn from everyday objects and the natural world \u2014 'crammed with learning as cynically as a goose is crammed for Christmas'; 'as one keeps a sleepy person awake by sticking pins in him.'",
      "Use deliberate repetition of key phrases across paragraphs to create thematic echoes \u2014 'Your parents wouldn't be able to afford it'; 'a little office boy at forty pounds a year' \u2014 recurring phrases that function as refrains of oppression.",
      "Use rhetorical questions sparingly, and when used, direct them at the reader to force engagement with a moral or psychological problem \u2014 'Do you think that is a proper thing to say?'",
      "Employ the technique of stating a lettered or numbered enumeration within prose \u2014 '(a) wicked and (b) outside my control' \u2014 for dry, quasi-logical precision that contrasts with emotional content."
    ],
    "do_not": [
      "Do not use extended or ornamental metaphors \u2014 similes and metaphors should be brief, sharp, and drawn from the physical world, not from literary or mythological allusion.",
      "Do not use exclamation marks in the narrator's own voice except when reproducing the shouted words of others \u2014 the narrator's register is too controlled for exclamatory rhetoric.",
      "Do not employ abstract philosophical language when a concrete image or anecdote would serve \u2014 the argument should emerge from things seen and felt, not from concepts named."
    ],
    "evidence": [
      "We were crammed with learning as cynically as a goose is crammed for Christmas.",
      "I knew the bed-wetting was (a) wicked and (b) outside my control.",
      "'You are living on my bounty' was his favourite phrase in this context."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open essays and sections by plunging into a specific autobiographical scene with temporal grounding \u2014 establish when and where immediately, then let the narrative unfold from that anchor point.",
      "Frame the opening scene with a parenthetical qualifier that signals the narrator's careful, retrospective precision \u2014 '(not immediately, but after a week or two, just when I seemed to be settling into the routine of school life).'",
      "Close sections with a brief, mordant summary sentence that wraps up one episode and pivots to the next \u2014 'So much for the episode of the bed-wetting.' \u2014 treating the closure as a deliberate rhetorical gesture.",
      "Use the autobiographical essay form: the piece is organized as a series of thematically linked episodes from childhood, each illustrating a facet of a larger institutional and psychological critique.",
      "Employ italics or capitals for emphasis on words that carry institutional or emotional weight \u2014 'REPORT YOURSELF' \u2014 reproducing how language felt to the child's mind.",
      "Use parenthetical interjections to create a conversational, digressive quality \u2014 '(What colour were those eyes, I wonder? I remember them as green, but actually no human being has green eyes. Perhaps they were hazel.)' \u2014 that gives the impression of a mind freely associating while maintaining narrative control.",
      "Use nicknames and labels ('Flip,' 'Sambo') established early and used consistently throughout, creating an intimate, almost novelistic texture in what is fundamentally an essay."
    ],
    "do_not": [
      "Do not open with thesis statements or abstract pronouncements \u2014 begin in the middle of experience.",
      "Do not close with neat moral summaries that resolve all tension \u2014 endings should carry ambivalence, irony, or a lingering sense of injustice.",
      "Do not use headers, bullet points, or other structural formatting \u2014 the essay should flow as continuous prose, with transitions handled through narrative pacing."
    ],
    "evidence": [
      "Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.",
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "I put REPORT YOURSELF in capitals because that was how it appeared in my mind."
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
  "one_line_description": "plain, prosecutorial, confessional \u2014 moral authority earned through concrete detail, self-implication, and unflinching directness",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a compound or compound-complex structure: state a claim or observation in an independent clause, then extend it with one or more clauses joined by 'and', 'but', 'which', or 'that', creating cumulative momentum where each clause adds a new layer of detail or qualification.",
      "Use colons as structural hinges within sentences \u2014 place the setup before the colon and the payoff, restatement, or devastating specification after it.",
      "Chain clauses with 'and' to create an accumulative, additive rhythm that mimics the associative flow of thought or memory \u2014 one observation triggering the next within a single grammatical frame.",
      "Anchor even the longest sentences with a simple declarative skeleton (subject-verb-object), then let complexity grow from elaboration appended after the main verb, not from front-loaded subordination.",
      "Follow extended, multi-clause sentences with a short, blunt declarative that delivers a verdict or emotional punch \u2014 the short sentence earns its force from the long ones preceding it, not from being the default mode.",
      "Use participial and gerund phrases to compress concurrent action or background information into subordinate positions within larger sentences rather than giving them their own sentences.",
      "Place concessive or conditional clauses ('if', 'when', 'so far as') at the start of a sentence to front-load qualification, then deliver the main assertion in the second half.",
      "Interrupt sentences with parenthetical asides \u2014 using dashes, commas, or parentheses \u2014 to inject commentary, self-correction, or sardonic observations mid-flow."
    ],
    "do_not": [
      "Do not write strings of short, staccato sentences in succession \u2014 the rhythm depends on long, clause-heavy sentences being the norm and short ones arriving as deliberate punctuation.",
      "Do not use semicolons as the primary clause-joining device; prefer colons, commas with conjunctions, or dashes.",
      "Do not construct sentences that deliver their point immediately and then stop \u2014 the characteristic move is to state something and then qualify, elaborate, or complicate it within the same sentence.",
      "Do not front-load sentences with multiple adverbial modifiers or elaborate subordinate clauses before the subject \u2014 keep the subject accessible even when the sentence is complex."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when stating your own position, confessing failings, or recounting experience \u2014 shift to the impersonal 'one' when stating general truths about human nature or describing what any reasonable person would do.",
      "Address the reader directly as 'you' when issuing challenges, making the argument personal, or drawing the reader into complicity.",
      "Maintain an authoritative, prosecutorial tone: speak as someone who has examined the evidence and reached a firm verdict, not as someone tentatively exploring possibilities.",
      "Signal confidence through plain declarative assertions rather than through intensifiers or superlatives.",
      "Deploy self-deprecation strategically \u2014 acknowledge your own susceptibility to the very faults you criticize, which earns credibility rather than undermining authority.",
      "Express strong emotion through understatement and precise physical description rather than through exclamatory or sentimental language \u2014 let the horror or absurdity emerge from what is observed.",
      "Signal uncertainty honestly and without embarrassment when it exists \u2014 'I suppose', 'so far as I remember', 'I cannot say with certainty' \u2014 treating acknowledged gaps as marks of credibility.",
      "Use contractions in passages that adopt a conversational register, but avoid them in passages that state formal principles or deliver moral verdicts."
    ],
    "do_not": [
      "Do not adopt a neutral, dispassionate academic tone \u2014 the stance is that of a morally engaged witness who has taken a side and argues with conviction.",
      "Do not hedge core claims with 'perhaps', 'it might be argued', or 'some would say' \u2014 when uncertainty is expressed, do so explicitly and briefly then move on.",
      "Do not sentimentalize or moralize in an elevated, preachy register \u2014 keep moral observations grounded in the specific, physical, and personal.",
      "Do not use self-aggrandizing or heroic framing \u2014 the narrator consistently presents himself as fallible, conflicted, and implicated."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through concrete examples or personal narrative first, then extract the general principle \u2014 move from the particular to the universal, never the reverse.",
      "Use specific physical experience and close observation as the primary form of evidence \u2014 what was seen, felt, and done \u2014 rather than citations, statistics, or appeals to authority.",
      "Build arguments through narrative accumulation: present specimens, dissect them, and only then state the general rule they illustrate.",
      "Use analogies drawn from everyday physical experience to make abstract arguments visceral and unanswerable.",
      "Handle counterarguments by stating them in their strongest form or embedding them as concessions ('no doubt', 'of course', 'it is true that'), then reasserting the main position with 'but'.",
      "When the narrator reflects explicitly, frame insights as something realized in the moment \u2014 'I perceived', 'I grasped', 'it brought home to me' \u2014 not as retrospective analysis.",
      "Juxtapose the gravity of serious matters with the banality of routine to let irony carry the argument \u2014 the contrast itself is the claim.",
      "Always connect specific observations back to their larger political, moral, or social stakes \u2014 do not leave the 'so what' implicit."
    ],
    "do_not": [
      "Do not rely on appeals to authority, citation of studies, or credentialed sources \u2014 evidence is drawn from close reading, personal experience, and observable fact.",
      "Do not present the argument as a balanced 'on the one hand, on the other hand' analysis \u2014 take a clear position and argue for it.",
      "Do not use formal logical connectives like 'therefore', 'consequently', or 'this proves that' \u2014 the logic should feel discovered through narrative and observation, not pre-constructed.",
      "Do not resolve contradictions cleanly when the moral ambiguity is itself the point."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear orienting statement \u2014 a thesis, a scene-setting detail, or a temporal marker that tells the reader exactly where they are in the argument or narrative.",
      "Sequence ideas within paragraphs as: claim or scene \u2192 concrete examples or specimens \u2192 analysis of what those examples show \u2192 restatement in sharper terms or a pivoting observation.",
      "Close paragraphs with a sentence that either escalates the stakes, delivers a pointed moral observation, or pivots decisively to the next topic \u2014 closings should feel decisive or propulsive.",
      "Connect paragraphs through explicit forward and backward references: 'I said earlier', 'as I have tried to show', 'I will come back to this', 'So much for'.",
      "Within paragraphs, move from external action or concrete detail to internal psychological response or reflective commentary \u2014 narrate what happened, then explain what it meant.",
      "Transition between paragraphs through chronological progression in narrative sections and through logical intensification in argumentative sections."
    ],
    "do_not": [
      "Do not begin paragraphs with vague throat-clearing or abstract generalizations that delay the point \u2014 lead immediately with substance.",
      "Do not end paragraphs on a trailing or inconclusive note unless deliberately setting up a pivot.",
      "Do not use explicit transition words like 'furthermore', 'additionally', or 'in conclusion' \u2014 transitions should emerge organically from the narrative or argumentative momentum.",
      "Do not let a paragraph drift across multiple unrelated topics \u2014 each paragraph should serve one argumentative or narrative function."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy vivid, original similes and metaphors drawn from concrete, physical, everyday objects \u2014 'like soft snow', 'like a toad under a steam-roller', 'as cynically as a goose is crammed for Christmas' \u2014 keeping every image visceral and plain.",
      "Use the colon-pivot as a core rhetorical device: build up a concrete description, then follow the colon with a restatement, euphemism, or devastating specification that reframes everything before it.",
      "Use lists and catalogues extensively \u2014 both as evidence (piling up examples until the pattern becomes undeniable) and as rhetorical escalation.",
      "Deploy parenthetical asides \u2014 in dashes or parentheses \u2014 to insert offhand, often darkly comic commentary that disrupts the surface and reveals the narrator's conflicted inner voice.",
      "Use deliberate repetition of key phrases across the piece to create thematic throughlines and rhetorical momentum.",
      "Employ antithesis to dramatize contradictions: place opposing ideas in parallel grammatical structures within a single sentence.",
      "Use direct imperatives ('Consider', 'Look again', 'ask any') and direct address to enlist the reader as an active participant.",
      "Favor plain, Anglo-Saxon diction for moments of highest emotional intensity \u2014 avoid Latinate or polysyllabic words when describing death, fear, or moral crisis."
    ],
    "do_not": [
      "Do not use clich\u00e9 metaphors, dead figures of speech, or ornamental literary imagery \u2014 every figurative comparison must be fresh, precise, and drawn from physical reality.",
      "Do not use exclamation marks for emphasis in the narrator's own voice \u2014 let content and sentence structure create the force.",
      "Do not use analogy as decoration; every figurative comparison must advance the argument or make an abstract point concrete.",
      "Do not employ alliteration or sonic effects that call attention to the prose's 'writtenness' \u2014 the style should feel transparent."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a bold, direct first sentence that immediately establishes the central subject and the author's personal stake \u2014 drop the reader into the situation with a striking declaration or confession, no preamble.",
      "Use the opening to set the stakes: frame the subject not as a minor matter but as something with broad moral, political, or human consequences.",
      "Close with a short, devastatingly understated sentence that circles back to the opening theme \u2014 the final line should land like a quiet punch that reframes everything that came before.",
      "Include a self-undermining or self-correcting moment near the close that acknowledges the limits of the author's own argument or character, preventing dogmatism and earning trust.",
      "Structure the piece as a movement from concrete experience to general principle and back \u2014 the ending should echo the beginning at a deeper level of understanding.",
      "Use em dashes liberally for interjections, qualifications, and dramatic pauses within sentences \u2014 they are the signature punctuation.",
      "Use parenthetical interjections to create a conversational, digressive quality that gives the impression of a mind freely associating while maintaining narrative control.",
      "Format as continuous prose without headers, bullet points, or heavy structural apparatus \u2014 unless cataloguing distinct taxonomic categories, in which case use minimal formatting (numbered lists, capitalized section headers)."
    ],
    "do_not": [
      "Do not open with a question, a quotation from someone else, or atmospheric scene-setting \u2014 begin with a direct engagement with the subject.",
      "Do not close with a tidy resolution, inspirational uplift, or grand moral lesson \u2014 end with honest ambivalence, private irony, or a concrete fact that resonates.",
      "Do not let the essay end without connecting back to its political, moral, or human stakes \u2014 the closing must elevate beyond the merely technical or anecdotal."
    ]
  },
  "signature_phrases": {
    "use": [
      "but",
      "and",
      "which",
      "that is to say",
      "in other words",
      "of course",
      "no doubt",
      "it is true that",
      "I dare say",
      "I suppose",
      "I think",
      "one",
      "so far as",
      "in a sense",
      "as I have tried to show",
      "I will come back to this",
      "the point is",
      "the fact is",
      "it is humbug",
      "needless to say",
      "in reality",
      "so much for"
    ],
    "never_use": [
      "furthermore",
      "additionally",
      "moreover",
      "it could be argued",
      "in conclusion",
      "thus we see",
      "interestingly",
      "importantly",
      "indeed",
      "essentially",
      "basically",
      "literally",
      "incredibly",
      "absolutely",
      "stakeholder",
      "leverage",
      "utilize",
      "facilitate",
      "implementation",
      "paradigm",
      "synergy",
      "impactful",
      "going forward",
      "at the end of the day",
      "it is what it is"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', and 'additionally' with 'and', 'but', or a full stop followed by a new sentence that picks up the thread naturally.",
    "Convert passive constructions to active where possible \u2014 'the elephant was shot by me' becomes 'I shot the elephant.'",
    "Replace abstract nouns with concrete images \u2014 instead of 'the implementation of violence' write 'the cattle machine-gunned, the huts set on fire.'",
    "Break any sentence that merely restates the previous one \u2014 every clause must advance the thought, not echo it.",
    "Replace hedging language ('it could be argued', 'one might say') with direct assertion or honest personal qualification ('I think', 'I suppose').",
    "Convert Latinate vocabulary to Anglo-Saxon equivalents at moments of emotional intensity \u2014 'utilize' becomes 'use', 'facilitate' becomes 'help', 'terminate' becomes 'kill.'",
    "Where a sentence delivers its point and then trails into unnecessary qualification, move the qualification to the front and let the main assertion land at the end.",
    "Replace ornamental metaphors with plain, physical comparisons drawn from everyday objects and bodily experience.",
    "Strip out exclamation marks from the narrator's voice \u2014 let sentence structure and content create emphasis.",
    "Where consecutive sentences are all the same length, combine some with coordinating conjunctions and leave others short to restore rhythmic variation."
  ]
}
```