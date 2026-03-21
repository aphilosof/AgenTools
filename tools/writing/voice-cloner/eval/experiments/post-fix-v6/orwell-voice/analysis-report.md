# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** plain-spoken, earnest, confessional — moral urgency delivered through concrete detail, cumulative syntax, and unsentimental honesty

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

### sample-1.txt (5270 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "5270",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple clauses with commas and coordinating conjunctions ('and', 'but', 'or'), creating a rolling, accumulative momentum that mirrors the unfolding of a thought process.",
      "Use compound-complex structures as the workhorse sentence type \u2014 begin with a main clause, then attach qualifications, elaborations, or consequences through subordinate clauses and participial phrases.",
      "Deploy short declarative sentences as emphatic punctuation after a sequence of longer, winding ones \u2014 use brevity to land a point, not to set pace.",
      "Open sentences with transitional or concessive elements ('Now,', 'But', 'In our time', 'It follows that') to chain the argument forward and signal the logical relationship to what came before.",
      "Use parenthetical asides \u2014 set off by dashes, commas, or actual parentheses \u2014 to insert qualifications, examples, or self-aware commentary mid-sentence without breaking the syntactic flow.",
      "Construct lists and catalogues within sentences using parallel noun phrases or verb phrases separated by commas, often culminating in a summarizing or climactic final item."
    ],
    "do_not": [
      "Do not write in clipped, staccato bursts of uniformly short sentences \u2014 the rhythm depends on long sentences earning the weight of short ones.",
      "Do not let sentences sprawl without logical connective tissue; every clause must advance the argument or qualify it, never merely pad.",
      "Do not front-load sentences with elaborate subordinate clauses before the main verb \u2014 the dominant pattern is main clause first, qualifications after."
    ],
    "evidence": [
      "A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.",
      "It is easier \u2014 even quicker, once you have the habit \u2014 to say In my opinion it is not an unjustifiable assumption that than to say I think.",
      "The point is that the process is reversible."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Adopt the stance of a clear-eyed, plain-speaking intellectual who treats the reader as an intelligent equal \u2014 explain without condescending, assert without bullying.",
      "Use first person ('I') to anchor arguments in personal judgment and experience, and shift to 'we' or 'one' when generalizing to shared conditions or universal habits \u2014 this creates a sense of honest individual conviction broadening into collective concern.",
      "Address the reader directly with 'you' when issuing challenges, thought experiments, or imperatives \u2014 this pulls the reader into active participation rather than passive consumption.",
      "Maintain a tone that is simultaneously earnest and sardonic \u2014 take the subject deadly seriously while treating bad examples with dry, understated contempt rather than outrage.",
      "Signal confidence through plain assertion ('The great enemy of clear language is insincerity') rather than through hedging or qualification. When genuinely uncertain, mark it explicitly and simply ('this is a guess which I have not sufficient knowledge to verify').",
      "Use contractions selectively \u2014 deploy them in passages that simulate conversational directness or when demolishing pretension, but avoid them when building formal argumentative scaffolding."
    ],
    "do_not": [
      "Do not adopt an aloof, detached academic register \u2014 the voice must feel personally invested, even morally urgent.",
      "Do not use false modesty or excessive hedging \u2014 state positions plainly and let the evidence carry the argument.",
      "Do not posture as neutral or disinterested \u2014 the voice has clear convictions and states them openly, while acknowledging its own fallibility."
    ],
    "evidence": [
      "I said earlier that the decadence of our language is probably curable.",
      "Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.",
      "When the general atmosphere is bad, language must suffer."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a commonly held position, then immediately complicate or overturn it \u2014 use the reader's likely assumption as the launchpad for your actual thesis.",
      "Build arguments through concrete illustration first, abstraction second: present vivid examples (quoted passages, real-world scenarios, imagined parodies) and then extract the principle from them.",
      "Use analogy to make abstract processes tangible \u2014 compare linguistic decay to drinking, political euphemism to soft snow covering facts, ready-made phrases to cavalry horses answering a bugle.",
      "Structure the argument as a diagnostic progression: identify the problem, classify its varieties with examples, explain the underlying cause, then prescribe the remedy.",
      "Preemptively acknowledge counterarguments and your own contradictions \u2014 admit your own guilt ('I have again and again committed the very faults I am protesting against') to strengthen credibility rather than weaken it.",
      "Use taxonomic cataloguing as an argumentative device \u2014 break a large problem into named categories (Dying Metaphors, Operators, Pretentious Diction, Meaningless Words), each illustrated and analyzed, before synthesizing.",
      "End arguments with practical, actionable rules or prescriptions \u2014 do not leave the reader with diagnosis alone."
    ],
    "do_not": [
      "Do not argue purely in the abstract \u2014 every claim must be grounded in a concrete example the reader can examine.",
      "Do not dismiss counterarguments without engaging them \u2014 give opposing views their due before dismantling them.",
      "Do not hedge the central thesis even while acknowledging complexity ('I do not want to exaggerate' is followed immediately by reassertion of the main point)."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "A scrupulous writer, in every sentence that he writes, will ask himself at least four questions, thus: What am I trying to say? What words will express it? What image or idiom will make it clearer? Is this image fresh enough to have an effect?"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear thesis or transitional claim that announces the paragraph's purpose and connects it to the preceding argument.",
      "Organize ideas within paragraphs as a cascade: state the principle, provide examples or illustrations, then draw out the implication or consequence \u2014 move from claim to evidence to so-what.",
      "Use the final sentence of a paragraph to either clinch the point with a memorable formulation or pivot toward the next section's concern \u2014 closings should feel like a door shutting firmly or a door opening.",
      "Connect paragraphs through explicit logical connectives ('Now that I have made this catalogue...', 'As I have tried to show...', 'I said earlier that...') that remind the reader of the argument's trajectory.",
      "Within longer paragraphs, use internal pivots marked by 'But', 'And yet', 'On the other hand' to create dialectical movement \u2014 thesis, complication, synthesis \u2014 within a single block.",
      "When cataloguing examples, use numbered or labeled lists to impose visual and logical order, then follow with a synthesizing paragraph that draws out the common thread."
    ],
    "do_not": [
      "Do not begin paragraphs with vague throat-clearing \u2014 every opening sentence must do work, either advancing the argument or introducing new evidence.",
      "Do not end paragraphs with trailing qualifications that dilute the point \u2014 close with force, then qualify in the next paragraph if needed.",
      "Do not let paragraphs become mere lists of examples without a framing claim and a concluding synthesis."
    ],
    "evidence": [
      "Each of these passages has faults of its own, but, quite apart from avoidable ugliness, two qualities are common to all of them.",
      "Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.",
      "I said earlier that the decadence of our language is probably curable. Those who deny this would argue, if they produced an argument at all, that language merely reflects existing social conditions"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, original similes and metaphors drawn from everyday physical experience \u2014 compare abstract processes to concrete, tangible images ('like soft snow, blurring the outline', 'like tea leaves blocking a sink', 'like a cuttlefish spurting out ink').",
      "Deploy parody and pastiche as argumentative weapons \u2014 construct exaggerated examples of the very faults you are criticizing, then dissect them, forcing the reader to see the absurdity.",
      "Use rhetorical questions sparingly but pointedly \u2014 pose them to challenge the reader or to expose the emptiness of a position ('what is a \"rift\", for instance?').",
      "Employ repetition of key phrases and structural patterns to create rhetorical force \u2014 use anaphoric structures ('Never use... Never use... Never use...') for prescriptive lists and parallel constructions to underscore contrasts.",
      "Use direct imperatives ('Consider', 'Look again', 'Look back through this essay') to command the reader's attention and create an interactive, participatory reading experience.",
      "Favor antithesis and juxtaposition as primary persuasive tools \u2014 place good writing next to bad writing, concrete next to abstract, Saxon next to Latin, and let the contrast do the arguing.",
      "Use em dashes for dramatic parenthetical insertions that qualify, redirect, or sharpen the point mid-sentence."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors, stale idioms, or dead figures of speech \u2014 practice what you preach about freshness of imagery.",
      "Do not use rhetorical questions as padding or as substitutes for actual argument \u2014 each question must expose something or redirect the reader's attention.",
      "Do not rely on abstract, Latinate vocabulary when a plain Anglo-Saxon word will do \u2014 the rhetorical power comes from concreteness and simplicity, not from impressive diction."
    ],
    "evidence": [
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.",
      "Never use a metaphor, simile, or other figure of speech which you are used to seeing in print."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by engaging a widely held assumption and immediately complicating it \u2014 the first paragraph should set up an intellectual tension that the entire essay will resolve.",
      "Begin the first sentence with a concessive or qualifying construction that acknowledges the reader's likely starting position before redirecting it.",
      "Close the essay by returning to the opening theme with added depth \u2014 the ending should demonstrate that the argument has traveled somewhere and arrived at a richer version of its initial claim.",
      "End with a practical, memorable prescription \u2014 final paragraphs should leave the reader with concrete rules or a call to changed behavior, not merely with analysis.",
      "Include a self-undermining moment near the end \u2014 acknowledge your own imperfection in following your own rules, which paradoxically strengthens your authority by demonstrating honesty.",
      "Use section headers (in capitals or bold) to organize taxonomic middle sections, creating a reference-like structure within the flowing essay form.",
      "Format prescriptive rules as a standalone numbered or bulleted list set apart from prose paragraphs \u2014 give them visual prominence and imperative force.",
      "Use parenthetical numbered references (1), (2), etc. to cross-reference examples cited earlier, creating an internal web of evidence."
    ],
    "do_not": [
      "Do not open with a bland, neutral statement of topic \u2014 the first sentence must have argumentative energy and a clear stance.",
      "Do not close with vague, uplifting generalities \u2014 endings must be specific, actionable, and tonally consistent with the essay's critical edge.",
      "Do not treat the essay as a purely academic exercise \u2014 maintain throughout the sense that the argument has real-world political and moral stakes."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "Break any of these rules sooner than say anything outright barbarous.",
      "Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against."
    ]
  }
}
```

### sample-2.txt (3378 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3378,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build default sentences by chaining multiple independent clauses with 'and' and 'but', creating a deliberate, cumulative forward momentum \u2014 the sentence gathers weight as it goes, each clause adding a new detail or qualification before the period arrives.",
      "Use compound-complex structures as the workhorse sentence type: begin with a main clause, then layer on subordinate clauses ('when', 'that', 'which', 'if') and coordinate extensions ('and', 'but') to pack context and qualification into a single breath.",
      "Deploy short declarative sentences as blunt punctuation marks after a sequence of longer, more elaborate ones \u2014 use them for emotional finality, grim summary, or to land a point with force after circling around it.",
      "Open sentences frequently with temporal or situational markers ('When I pulled the trigger', 'At that distance', 'In the end', 'At last') to ground each statement in a specific moment before unspooling the observation.",
      "Chain physical details in series using commas before a final coordinating conjunction, building a catalogue effect: 'his left side towards us. He took not the slightest notice... He was tearing up bunches of grass, beating them against his knees to clean them and stuffing them into his mouth.'",
      "Use participial phrases and absolute constructions to compress simultaneous actions into the main sentence flow: 'looking and feeling a fool, with the rifle over my shoulder and an ever-growing army of people jostling at my heels.'"
    ],
    "do_not": [
      "Do NOT write consistently short, staccato sentences \u2014 the rhythm depends on accumulation and extension, not minimalism.",
      "Do NOT use sentence fragments for stylistic effect \u2014 every sentence, however short, is grammatically complete.",
      "Do NOT front-load sentences with abstract ideas; ground them first in a concrete situation or sensory detail before moving to the reflection."
    ],
    "evidence": [
      "He neither stirred nor fell, but every line of his body had altered.",
      "I was young and ill-educated and I had had to think out my problems in the utter silence that is imposed on every Englishman in the East.",
      "That would never do."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a confessional narrator who is simultaneously a participant and a self-critical observer \u2014 'I' is the dominant pronoun, but always used to expose the narrator's contradictions, not to heroize.",
      "Maintain a tone of wry, bitter candor: the narrator admits ugly truths about himself with a matter-of-fact directness that refuses both self-pity and self-aggrandizement. Confess shameful feelings plainly, as though stating weather conditions.",
      "Shift between intimate personal confession and broad political generalization within the same paragraph \u2014 move from 'I felt' to 'it is the condition of his rule that he shall' without signposting the shift. Use the specific experience as a launch pad for universal claims.",
      "Signal certainty through plain declarative statements ('It was perfectly clear to me what I ought to do') and signal uncertainty through parenthetical asides and qualifiers woven naturally into the sentence ('I dare say', 'possibly', 'I thought then and I think now').",
      "Use contractions freely in narrative and reflective passages to maintain a conversational, spoken quality \u2014 but switch to uncontracted forms when making formal moral pronouncements or generalizations to lend them gravity.",
      "Deploy dry, understated humor through juxtaposition of scale \u2014 placing enormous moral weight next to trivial social embarrassment, or describing colonial violence in the same breath as petty office politics.",
      "Use parenthetical asides in actual parentheses to insert sharp editorial comments that break the narrative flow with a more direct, almost aside-to-the-reader intimacy."
    ],
    "do_not": [
      "Do NOT adopt a detached, academic tone \u2014 the voice must be personally implicated, even when generalizing.",
      "Do NOT express self-righteousness or moral superiority; the narrator must implicate himself in the systems he criticizes.",
      "Do NOT use sarcasm that distances the writer from the subject \u2014 the humor must emerge from genuine discomfort, not from cleverness."
    ],
    "evidence": [
      "(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny... with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a bold personal admission that establishes the central tension, then spend the piece unpacking it through concrete narrative \u2014 the argument emerges from the story rather than being stated and then illustrated.",
      "Construct arguments through the logic of lived experience: present the situation, describe the pressures acting on you, reveal the decision you made, then extract the political or moral principle. The abstraction always follows the concrete.",
      "Handle counterarguments by embodying them within the narrator's own divided consciousness \u2014 rather than engaging opposing views externally, show conflicting impulses warring inside one person. 'With one part of my mind... with another part...'",
      "Use the pivot from narrative to reflection as the primary rhetorical engine: narrate events in patient detail, then interrupt with a sudden generalization that reframes everything ('And it was at this moment... that I first grasped the hollowness, the futility of the white man's dominion in the East').",
      "Build toward the central insight through a logic of entrapment \u2014 show how each step narrows the available choices until the narrator feels compelled to act against his own judgment, making the political point through the experience of helplessness.",
      "Hedge with plain-spoken qualifiers ('I dare say', 'I thought then and I think now', 'possibly') rather than academic hedges \u2014 uncertainty is expressed as personal honesty, not intellectual caution."
    ],
    "do_not": [
      "Do NOT present arguments as syllogisms or formal logical chains \u2014 the argument must feel discovered through experience, not pre-constructed.",
      "Do NOT dismiss complexity or resolve contradictions neatly; leave the narrator caught between irreconcilable positions and let that tension be the point.",
      "Do NOT introduce external evidence, citations, or authorities \u2014 all evidence is first-person observation and experience."
    ],
    "evidence": [
      "And it was at this moment, as I stood there with the rifle in my hands, that I first grasped the hollowness, the futility of the white man's dominion in the East.",
      "I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys.",
      "Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a situation-setting sentence that either advances the timeline ('One day something happened') or states the narrator's internal condition ('But I did not want to shoot the elephant'), then develop through layered detail and reflection before arriving at a concluding insight or pivot.",
      "Organize ideas within paragraphs by a pattern of escalating concreteness: begin with a general statement, then pile on specific sensory details, physical descriptions, or reported speech that make the generalization visceral and undeniable.",
      "Close paragraphs with sentences that either deliver a moral punch ('That would never do'), pivot to a new complication ('I had got to shoot the elephant'), or widen the lens to a universal claim ('Feelings like these are the normal by-products of imperialism').",
      "Connect paragraphs through causal and temporal progression \u2014 each paragraph picks up where the last left off, often with an implicit 'and then' or an explicit 'But'. The essay moves forward like a story being told aloud.",
      "Use the dash-and-catalogue technique within paragraphs: list a series of concrete images separated by commas, then gather them with a dash into a single emotional or moral summary ('the wretched prisoners... the grey, cowed faces... the scarred buttocks \u2014 all these oppressed me with an intolerable sense of guilt').",
      "Embed digressions and background information mid-paragraph using subordinate clauses and parentheticals rather than breaking them into separate paragraphs \u2014 the paragraph is a self-contained unit that provides its own context."
    ],
    "do_not": [
      "Do NOT use explicit transition words like 'furthermore', 'additionally', 'moreover' between paragraphs \u2014 transitions should feel like natural narrative continuation or a direct 'But'.",
      "Do NOT organize paragraphs around a single thin idea; each paragraph should carry both narrative weight and reflective weight, interleaving scene and thought.",
      "Do NOT break a continuous scene into multiple short paragraphs for dramatic effect \u2014 sustain the scene within one paragraph and let the accumulated detail create the drama."
    ],
    "evidence": [
      "The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos \u2014 all these oppressed me with an intolerable sense of guilt.",
      "But at that moment I glanced round at the crowd that had followed me.",
      "In the end I could not stand it any longer and went away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from everyday physical experience to make abstract political points tangible: 'He becomes a sort of hollow, posing dummy', 'I should have about as much chance as a toad under a steam-roller', 'comparable to destroying a huge and costly piece of machinery'.",
      "Deploy the catalogue or list as a primary device for emotional accumulation \u2014 stack concrete images in series, each one slightly more vivid or disturbing than the last, to build pressure before releasing it into a summary statement.",
      "Use antithesis and paradox to crystallize the essay's central ironies: place opposed ideas in parallel grammatical structures ('seemingly the leading actor of the piece; but in reality I was only an absurd puppet', 'Alive, the elephant was worth at least a hundred pounds; dead, he would only be worth the value of his tusks').",
      "Employ similes that are precise and often homely or grim rather than poetic: 'like red velvet', 'as neatly as one skins a rabbit', 'as steadily as the ticking of a clock'. The comparisons should illuminate through exactness, not beauty.",
      "Use direct address sparingly but pointedly \u2014 shift to 'you' to implicate the reader or to generalize from personal experience ('In a job like that you see the dirty work of Empire at close quarters').",
      "Use repetition of key phrases ('I had got to', 'a sahib has got to') to hammer home the sense of compulsion and entrapment that drives the argument.",
      "Deploy em dashes to insert clarifications, afterthoughts, or ironic qualifications mid-sentence, creating a spoken, thinking-aloud quality."
    ],
    "do_not": [
      "Do NOT use ornate or literary metaphors \u2014 all figurative language should be grounded in physical, common experience.",
      "Do NOT use rhetorical questions as a primary persuasive device; when they appear, they should be genuine questions about the narrator's own situation, not devices to lead the reader.",
      "Do NOT repeat words or phrases for mere emphasis \u2014 repetition must carry structural or thematic weight, reinforcing a pattern of compulsion or irony."
    ],
    "evidence": [
      "I should have about as much chance as a toad under a steam-roller.",
      "The thick blood welled out of him like red velvet, but still he did not die.",
      "He wears a mask, and his face grows to fit it."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by dropping the reader into a specific place and time with a first-person declaration that immediately establishes conflict and the narrator's compromised position \u2014 the opening sentence should contain both a concrete setting and an emotional or moral tension.",
      "Establish the first paragraph as a miniature overture: introduce the setting, the narrator's role, the antagonism, and the emotional stakes before the main narrative event has even begun. Let the reader feel the weight of context before the story proper starts.",
      "Close the essay with a short, deflating final paragraph that undercuts any possibility of heroism or clean resolution \u2014 the last line should land with quiet, uncomfortable honesty that reframes everything that came before.",
      "End on the narrator's own moral exposure rather than on the event itself: the final revelation should be about the narrator's motivations, not about what happened.",
      "Follow the genre conventions of the personal essay \u2014 first-person narration, a single central incident explored in depth, movement from specific to general, honest self-examination \u2014 but break convention by refusing to arrive at redemption or growth. The narrator ends no wiser, only more aware of his own compromised position.",
      "Use no headers, section breaks, or typographical divisions \u2014 the essay is a single continuous flow. Use em dashes and parentheses for internal segmentation rather than structural markers.",
      "Use single quotation marks for reported speech and terms used with ironic distance ('must', 'natives'), maintaining a British typographic convention that also signals the narrator's skeptical relationship to the language of empire."
    ],
    "do_not": [
      "Do NOT open with a thesis statement or abstract claim \u2014 open with a concrete situation that contains the thesis implicitly.",
      "Do NOT close with a moral lesson, call to action, or tidy summary \u2014 close with an uncomfortable admission that leaves the reader to draw their own conclusions.",
      "Do NOT use structural formatting (headers, bullet points, numbered sections) \u2014 the essay must read as continuous, spoken prose."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "And afterwards I was very glad that the coolie had been killed; it put me legally in the right and it gave me a sufficient pretext for shooting the elephant."
    ]
  }
}
```

### sample-3.txt (2042 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 2042,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence by chaining descriptive clauses with commas, stacking physical details in sequence before arriving at the point \u2014 e.g., 'Two of them stood by with rifles and fixed bayonets, while the others handcuffed him, passed a chain through his handcuffs and fixed it to their belts, and lashed his arms tight to his sides.'",
      "Use participial and absolute phrases to layer simultaneous actions onto a main clause: 'The superintendent of the jail, who was standing apart from the rest of us, moodily prodding the gravel with his stick, raised his head at the sound.'",
      "When a moment of emotional or moral significance arrives, shift to a deliberate, almost incantatory rhythm \u2014 repeating grammatical structures in series: 'bowels digesting food, skin renewing itself, nails growing, tissues forming \u2014 all toiling away in solemn foolery.'",
      "Use coordinating conjunctions (especially 'and') to chain independent clauses within a single sentence, creating a steady forward march that mirrors the procession described: 'He and we were a party of men walking together, seeing, hearing, feeling, understanding the same world; and in two minutes, with a sudden snap, one of us would be gone.'",
      "Place a short, blunt sentence after a long descriptive passage to deliver a moral or factual blow \u2014 let the brevity do the emotional work.",
      "Open sentences with concrete scene-setting details (time, light, weather, spatial arrangement) before introducing human actors."
    ],
    "do_not": [
      "Do not use syntactically fragmented or deliberately ungrammatical sentences \u2014 every sentence must be complete and structurally sound.",
      "Do not write sentences that are purely abstract or philosophical without anchoring them to a concrete physical detail observed in the scene.",
      "Do not use periodic sentences that withhold the main verb until the very end \u2014 place the subject and verb early, then extend the sentence with trailing modifiers and appositional phrases."
    ],
    "evidence": [
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "There was a clanking noise, and then dead silence.",
      "He was dangling with his toes pointed straight downwards, very slowly revolving, as dead as a stone."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness embedded in the scene \u2014 present yourself as a participant, not an outside commentator, using 'we' for shared experience and 'I' only for private moments of moral reckoning.",
      "Maintain a tone of restrained, almost clinical observation for the physical world \u2014 describe what you see with precision and detachment, letting the horror emerge from the facts themselves rather than from emotional commentary.",
      "Reserve direct emotional or philosophical language for a single concentrated passage (the epiphany), and even there, couch it in concrete bodily imagery ('bowels digesting food, skin renewing itself').",
      "Render speech in dialect-accurate direct quotation, reproducing the speakers' idioms, mispronunciations, and verbal tics without editorial correction \u2014 'All iss satisfactorily prepared' \u2014 to let characters reveal themselves.",
      "Signal moral judgment through precise physical observation rather than explicit condemnation \u2014 the prisoner stepping aside to avoid a puddle carries the argument, not a declaration that execution is wrong.",
      "Use contractions freely in dialogue and in the narrator's more conversational asides, but pull toward slightly more formal diction in descriptive and reflective passages."
    ],
    "do_not": [
      "Do not editorialize or state moral conclusions in abstract terms \u2014 never write 'This was cruel' or 'The injustice was obvious.'",
      "Do not adopt a sarcastic, clever, or self-consciously literary tone \u2014 the voice is earnest, plain, and deliberately unglamorous.",
      "Do not distance yourself from complicity \u2014 the narrator is part of the 'we' and does not position himself as morally superior to the other participants."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "I found that I was laughing quite loudly. Everyone was laughing.",
      "The dead man was a hundred yards away."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the central argument through pure narrative \u2014 arrange events in chronological sequence so that the reader arrives at the moral conclusion organically, without being told what to think.",
      "Place the epiphanic insight at the exact structural midpoint: first half is pure scene-setting and action, then a single observed detail (the puddle) triggers the essay's thesis, and the second half shows the aftermath.",
      "Use a single small, concrete, almost trivial detail as the pivot on which the entire argument turns \u2014 the more ordinary the detail, the more devastating the insight it unlocks.",
      "Let irony do the argumentative work in the final movement: the laughter, the cheerful drinking, Francis's anecdote about pulling legs \u2014 juxtapose normalcy against the horror without commentary.",
      "Introduce counterpoint through other characters' speech and behavior rather than through explicit counter-argument \u2014 the superintendent's impatience, Francis's bureaucratic satisfaction, and the Eurasian boy's small talk all serve as implicit arguments about institutional desensitization.",
      "Close the logical arc by returning to flat, factual statement that forces the reader to hold two incompatible realities at once: sociability and death."
    ],
    "do_not": [
      "Do not present a thesis statement at the beginning \u2014 the argument must emerge from accumulated detail.",
      "Do not use statistics, citations, or appeals to authority \u2014 all evidence must come from direct personal observation.",
      "Do not argue against a named opponent or explicitly rebut counter-positions \u2014 let the narrative itself be the only argument."
    ],
    "evidence": [
      "And once, in spite of the men who gripped him by each shoulder, he stepped slightly aside to avoid a puddle on the path.",
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete action, spatial marker, or time signal that advances the chronological narrative: 'We set out for the gallows,' 'Eight o'clock struck,' 'The gallows stood in a small yard.'",
      "Within paragraphs, sequence details from the general scene to the specific telling detail \u2014 move the camera from wide shot to close-up, ending on the most significant or unsettling image.",
      "Use dialogue paragraphs as structural punctuation \u2014 insert a line of quoted speech to break up long descriptive passages and shift the rhythm.",
      "Connect paragraphs through chronological progression rather than explicit transition words \u2014 the passage of time and physical movement from one location to the next provides all necessary connective tissue.",
      "When a paragraph contains the essay's central insight, build toward it with increasingly specific physical observations, then state the realization, then immediately elaborate it with a cascade of concrete bodily details.",
      "End key paragraphs on an image or detail that resonates beyond its literal meaning \u2014 'as dead as a stone,' 'The dead man was a hundred yards away' \u2014 without explaining the resonance."
    ],
    "do_not": [
      "Do not use explicit transitional phrases like 'furthermore,' 'in addition,' 'moreover,' or 'on the other hand' \u2014 transitions must be embedded in action and movement.",
      "Do not end paragraphs with summary statements that explain what the reader should have understood \u2014 trust the accumulated detail to carry the meaning.",
      "Do not begin paragraphs with abstract generalizations \u2014 always ground the opening in a concrete particular."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "The warders unfixed bayonets and marched away. The dog, sobered and conscious of having misbehaved itself, slipped after them.",
      "Several people laughed \u2014 at what, nobody seemed certain."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes that compare human situations to mundane, slightly degrading objects or animals to expose the dehumanizing machinery of the scene: 'like small animal cages,' 'like men handling a fish which is still alive,' 'as dead as a stone.'",
      "Deploy lists of parallel present participles to create a sense of ongoing life in the midst of death: 'seeing, hearing, feeling, understanding the same world.'",
      "Use the em dash to insert sudden, disruptive details or to pivot sharply within a sentence \u2014 'A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.'",
      "Employ deliberate repetition for incantatory effect, especially to render sounds or cries that persist over time: 'Ram! Ram! Ram! Ram!'",
      "Choose analogies from the everyday and domestic to make horror feel disturbingly ordinary \u2014 'grey like bad coffee,' 'a small cotton bag like a flour bag,' 'quite a homely, jolly scene.'",
      "Use animal imagery as a recurring motif \u2014 the dog functions as a structural device, appearing at key moments to disrupt, mirror, or comment on the human action without the narrator having to explain the parallel."
    ],
    "do_not": [
      "Do not use elaborate or literary metaphors that call attention to themselves as fine writing \u2014 all figurative language must feel plain-spoken and almost accidental.",
      "Do not use rhetorical questions to guide the reader's thinking \u2014 prefer declarative observation.",
      "Do not use exclamation marks in narration \u2014 reserve them exclusively for direct speech where a character is genuinely exclaiming."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a bare, declarative sentence that establishes place, weather, and atmosphere in the fewest possible words \u2014 drop the reader into the scene with no preamble or context-setting introduction.",
      "Establish the sensory world immediately \u2014 light, weather, spatial arrangement \u2014 before introducing any character or action, so the reader inhabits the physical environment first.",
      "Close with a short, devastatingly understated factual sentence that forces the reader to feel the gap between the characters' behavior and the reality of what has just occurred \u2014 the final line should be a quiet hammer blow.",
      "Structure the entire piece as a single chronological episode \u2014 one event, one morning, no flashbacks, no jumps forward \u2014 so the reader experiences the hanging in near-real-time.",
      "Use no section headers, no numbered lists, no formatting apparatus whatsoever \u2014 the essay should read as continuous unbroken prose, with only paragraph breaks and dialogue providing structure.",
      "Employ direct speech with single quotation marks, preceded by attribution verbs ('said,' 'shouted,' 'exclaimed') that are plain and unadorned.",
      "Use parenthetical asides within em dashes to insert small but crucial contextual details \u2014 '(he meant the dead man)' \u2014 keeping the narrative surface clean while smuggling in necessary information."
    ],
    "do_not": [
      "Do not open with a thesis, a question, or an abstract statement of theme \u2014 begin in the physical world, in a specific place, at a specific time.",
      "Do not close with an explicit moral, lesson, or call to action \u2014 the final image must do all the work.",
      "Do not use any typographic emphasis (bold, italic, underline) or structural formatting (headers, bullet points) \u2014 the prose must carry everything through syntax and diction alone."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "The dead man was a hundred yards away.",
      "'For God's sake hurry up, Francis,' he said irritably."
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
      "Build long sentences by stacking multiple independent and dependent clauses joined with commas, coordinating conjunctions ('and', 'but'), and occasional semicolons \u2014 let the sentence accumulate detail before arriving at its point.",
      "Use compound-complex sentences as the default structure: open with a main clause, then attach qualifying, parenthetical, or extending subordinate clauses that add context, caveats, or elaboration.",
      "When a sentence grows long through clause-chaining, ground it with concrete nouns and plain verbs so the complexity is syntactic, not lexical.",
      "Interrupt sentences with parenthetical asides set off by dashes or commas to insert qualifications, self-corrections, or tangential specifics mid-thought.",
      "After a sequence of extended, clause-heavy sentences, drop in a short declarative to deliver a verdict or pivot \u2014 let the brevity carry rhetorical weight by contrast.",
      "Use participial phrases and absolute constructions to pack descriptive detail into sentences without starting new ones: 'my mother taking it down to dictation', 'filtering through the muslin curtains'."
    ],
    "do_not": [
      "Do not write staccato sequences of simple subject-verb-object sentences \u2014 the rhythm depends on clausal accumulation, not telegraphic bursts.",
      "Do not use elaborate periodic sentence structures that withhold the main verb until the very end \u2014 the style is additive and forward-moving, not suspenseful in its syntax.",
      "Do not rely on semicolons as the primary way to join clauses \u2014 prefer commas with conjunctions or comma splices over formal semicolon linkage."
    ],
    "evidence": [
      "I had the lonely child's habit of making up stories and holding conversations with imaginary persons, and I think from the very start my literary ambitions were mixed up with the feeling of being isolated and undervalued.",
      "I knew that I had a facility with words and a power of facing unpleasant facts, and I felt that this created a sort of private world in which I could get my own back for my failure in everyday life.",
      "It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as the default mode, treating the essay as a direct, honest account addressed to an intelligent general reader \u2014 not a specialist, not a student, but an equal.",
      "Maintain a tone of plain-spoken earnestness tempered by self-awareness: be candid about your own flaws, vanities, and contradictions without lapsing into self-pity or performative humility.",
      "Project authority through directness and willingness to state uncomfortable truths plainly, not through academic credentials or technical jargon.",
      "Use contractions selectively \u2014 deploy them in passages of personal reflection or conversational aside, but shift to uncontracted forms when making declarations or general pronouncements to signal weight.",
      "Shift between 'I' for personal experience, 'one' for universal claims, and 'you' for drawing the reader momentarily into the experience \u2014 but let 'one' carry the philosophical and general statements.",
      "Allow dry, understated humor to emerge from the juxtaposition of grand claims and deflating admissions rather than from jokes or witticisms.",
      "Signal certainty by stating claims flatly ('It is humbug to pretend this is not a motive'); signal uncertainty with 'I suppose', 'I think', 'I fancy' \u2014 keep hedges conversational, never academic."
    ],
    "do_not": [
      "Do not adopt a detached, impersonal academic register \u2014 the voice must feel like a specific person speaking honestly, not an institution pronouncing.",
      "Do not use false modesty or coy evasion when making bold claims \u2014 state them directly and let the reader judge.",
      "Do not be sentimental or emotionally effusive \u2014 even when discussing painful experiences, maintain a matter-of-fact plainness."
    ],
    "evidence": [
      "All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.",
      "It is humbug to pretend this is not a motive, and a strong one.",
      "I fancy the poem was a plagiarism of Blake's 'Tiger, Tiger'."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with autobiographical narrative as the foundation for a larger argument \u2014 establish personal experience first, then extract general principles from it.",
      "Build arguments chronologically when tracing a personal intellectual development: move through time, marking turning points and shifts in understanding.",
      "When arriving at a general claim, state it as a bold assertion, then immediately qualify or complicate it in the next sentence \u2014 show that you've thought past the simple version.",
      "Introduce a taxonomy or classification (numbered list of motives, types, forces) as a structural anchor for the argument, then use the rest of the essay to explore tensions between the categories.",
      "Handle counterarguments by giving them real weight \u2014 quote the critic, state the objection fairly ('What he said was true') \u2014 then explain why the countervailing reason was stronger, not why the objection was wrong.",
      "Use concrete personal anecdotes as evidence rather than statistics or citations: a specific book, a specific age, a specific memory.",
      "Let the argument move between the particular and the universal: state a personal fact, then pivot to a general truth, then return to the personal."
    ],
    "do_not": [
      "Do not argue by pure abstraction \u2014 every general claim must be tethered to specific experience, example, or named work.",
      "Do not dismiss objections or alternative views \u2014 acknowledge them honestly, even when ultimately overriding them.",
      "Do not present a neat resolution where tensions genuinely exist \u2014 allow contradictions to stand as part of the argument's honesty."
    ],
    "evidence": [
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.",
      "'Why did you put in all that stuff?' he said. 'You've turned what might have been a good book into journalism.' What he said was true, but I could not have done otherwise.",
      "In a peaceful age I might have written ornate or merely descriptive books, and might have remained almost unaware of my political loyalties. As it is I have been forced into becoming a sort of pamphleteer."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal or logical marker that orients the reader to where in the narrative or argument you are: 'From a very early age', 'When I was about sixteen', 'However, throughout this time'.",
      "Within a paragraph, layer detail by moving from a general statement to increasingly specific examples, often accumulating them with 'and also', 'apart from', 'but side by side with'.",
      "Close paragraphs with a sentence that either delivers a judgment on the material just presented or pivots toward the next topic \u2014 do not let paragraphs trail off without a closing thought.",
      "Use transitional sentences at paragraph openings that explicitly acknowledge the preceding material before moving forward: 'I give all this background information because...', 'In one form or another this problem comes up again.'",
      "When a paragraph contains a list of examples or events, arrange them chronologically and let them build toward a culminating or summarizing statement.",
      "Allow paragraphs to grow long when accumulating autobiographical detail or working through a complex line of reasoning \u2014 the paragraph is the unit of a complete thought, not a visual break."
    ],
    "do_not": [
      "Do not begin paragraphs with unanchored abstractions \u2014 always ground the opening in time, place, or a concrete reference point.",
      "Do not use formulaic transition words ('Furthermore', 'Moreover', 'Additionally') \u2014 transitions should feel organic, often taking the form of a full sentence that bridges topics.",
      "Do not break a developing chain of examples into multiple paragraphs \u2014 keep the accumulation together so the reader feels the weight of the evidence."
    ],
    "evidence": [
      "However, throughout this time I did in a sense engage in literary activities. To begin with there was the made-to-order stuff which I produced quickly, easily and without much pleasure to myself.",
      "Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression.",
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use plain, concrete similes and metaphors drawn from everyday physical life \u2014 'Good prose is like a windowpane', 'like a long bout of some painful illness' \u2014 never from ornate, literary, or mythological sources.",
      "Deploy numbered or lettered lists (i, ii, iii, iv) to organize categories within the prose, giving the essay the feel of systematic thought presented in an accessible way.",
      "Use 'etc., etc.' or 'and the like' to gesture at a larger category without exhaustively enumerating it \u2014 this projects confidence that the reader can fill in the rest.",
      "Employ deliberate word and phrase repetition ('one', 'one', 'one' in successive clauses; 'every book is a failure') to create a drumbeat of emphasis without calling attention to the device.",
      "Use direct address sparingly but pointedly \u2014 'Was Smith? Was Jones? Were you?' \u2014 to jolt the reader out of passive reading.",
      "Employ antithesis to crystallize tensions: set two opposing ideas in parallel grammatical structures within the same sentence.",
      "Use parenthetical asides marked by dashes to insert clarifications, Latin abbreviations ('i.e.'), or self-interrupting qualifications mid-sentence."
    ],
    "do_not": [
      "Do not use elaborate extended metaphors that call attention to their own cleverness \u2014 metaphors should clarify, not display.",
      "Do not use rhetorical questions as a primary persuasive tool \u2014 prefer direct assertion to questioning.",
      "Do not employ alliteration, assonance, or other sound-based devices conspicuously \u2014 the prose should sound natural and unadorned, even when it is carefully crafted."
    ],
    "evidence": [
      "Good prose is like a windowpane.",
      "Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.",
      "It is humbug to pretend this is not a motive, and a strong one. Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a personal declaration that immediately establishes the subject and stakes \u2014 put 'I' in the first sentence and state the central preoccupation directly.",
      "Begin with autobiography, not thesis: let the argument emerge from the narrative rather than announcing it upfront as a claim to be proven.",
      "Close the essay with a passage of self-correction \u2014 look back at what you've just written, acknowledge its incompleteness or bias, and complicate your own argument in the final paragraphs.",
      "End on a note of unresolved honesty: state both what you know and what you cannot know, letting the final sentences carry the weight of paradox or tension rather than resolution.",
      "Use formatting sparingly but functionally: numbered lists for taxonomies, quoted verse set apart from prose, italicized or quoted titles for referenced works, dashes for parenthetical insertions.",
      "Follow the autobiographical essay convention of moving from personal past to general principle to present position \u2014 the chronological arc IS the argumentative arc.",
      "When quoting others (critics, other writers), use direct speech in single quotation marks and integrate it conversationally into the paragraph rather than setting it off formally."
    ],
    "do_not": [
      "Do not end with a tidy summary or call to action \u2014 the closing should feel like honest reckoning, not a conclusion.",
      "Do not open with an abstract philosophical question or a clever hook \u2014 begin with plain autobiographical fact.",
      "Do not use headers, subheadings, or section breaks within the prose body \u2014 the essay should flow as continuous, unbroken argument with only the numbered taxonomy as internal structure."
    ],
    "evidence": [
      "From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.",
      "Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression.",
      "I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed."
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
      "Build the default sentence by stacking multiple clauses with commas and coordinating conjunctions, embedding parenthetical qualifications and temporal markers mid-sentence to create a deliberate, discursive momentum \u2014 the sentence should feel like a mind working through memory in real time.",
      "Use participial and appositive phrases to pack descriptive detail into the middle of sentences rather than spreading it across multiple short sentences: 'Mrs Wilkes the Headmaster's wife, was sitting at the head of one of the tables, chatting with a lady of whom I knew nothing, except that she was on an afternoon's visit to the school.'",
      "When a sentence contains a dramatic or emotionally charged moment, extend it with dashes, parenthetical asides, or trailing qualifications that defer the emotional impact: 'I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey.'",
      "Use compound-complex structures as the workhorse \u2014 chain multiple independent clauses with 'and', 'but', 'for', while subordinating context and qualification into relative clauses and prepositional phrases.",
      "Deploy parallel 'partly...partly...but partly also' and 'not...but...' constructions to dissect emotional or moral complexity within a single sentence.",
      "When shifting from narration to reflection, signal the transition with a colon or a sentence-opening phrase like 'The fact that', 'This is that', or 'In general' \u2014 then allow the reflective sentence to run long and qualifying."
    ],
    "do_not": [
      "Do not write in clipped, staccato rhythms \u2014 avoid sequences of short declarative sentences that create a punchy, journalistic feel.",
      "Do not front-load sentences with the main clause and then tack on afterthoughts \u2014 instead, embed qualifications and digressions into the middle of the sentence so the reader must hold multiple threads simultaneously.",
      "Do not use semicolons to join independent clauses \u2014 prefer commas with coordinating conjunctions, or start a new sentence."
    ],
    "evidence": [
      "I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey: a sense of desolate loneliness and helplessness, of being locked up not only in a hostile world but in a world of good and evil where the rules were such that it was actually not possible for me to keep them.",
      "She was a stocky square-built woman with hard red cheeks, a flat top to her head, prominent brows and deep-set, suspicious eyes.",
      "I knew the bed-wetting was (a) wicked and (b) outside my control."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person retrospective stance \u2014 the adult narrator looking back at childhood \u2014 and maintain a clear temporal split between the child's perspective (what was felt then) and the adult's understanding (what is understood now).",
      "Adopt a tone of measured, unsentimental honesty: describe humiliation, cruelty, and emotional pain without melodrama or self-pity, letting the facts carry the emotional weight.",
      "Signal the adult narrator's present-tense commentary with phrases like 'Nowadays, I believe', 'I do not want to claim', 'Looking back, I realize', 'It is a mistake to think' \u2014 these intrusions mark the shift from narration to analysis.",
      "Use the generalized 'one' and 'you' to universalize personal experience without becoming confessional: shift from 'I' to 'you' or 'one' when drawing broader conclusions about childhood, memory, or institutional behavior.",
      "Maintain an undercurrent of dry, controlled irony \u2014 describe absurd or cruel behavior with the detachment of an anthropologist, letting the reader supply the outrage: present institutional cruelty as though it were merely the way things were done.",
      "Use contractions sparingly and primarily in quoted dialogue or moments of casual reflection, keeping the narrative prose itself relatively formal without being stiff.",
      "Express certainty through plain declarative statements ('This did not happen very often') and uncertainty through explicit hedges ('I cannot remember whether', 'I forget how', 'perhaps')."
    ],
    "do_not": [
      "Do not indulge in self-pity or emotional pleading \u2014 never write as though seeking the reader's sympathy; instead let the reader arrive at sympathy through the plain presentation of facts.",
      "Do not adopt a detached, clinical academic tone \u2014 the voice must remain personal and grounded in specific sensory memory even when reflecting abstractly.",
      "Do not moralize or sermonize \u2014 resist the urge to explicitly condemn; the moral judgment must emerge from the arrangement of detail, not from editorial pronouncement."
    ],
    "evidence": [
      "Nowadays, I believe, bed-wetting in such circumstances is taken for granted. It is normal reaction in children who have been removed from their homes to a strange place. In those days, however, it was looked on as a disgusting crime which the child committed on purpose and for which the proper cure was a beating.",
      "Any lesser person would have been called a dirty little beast and ordered out of the room instantly: but Sambo and Flip laughed it off in a 'boys will be boys' spirit.",
      "I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through narrative anecdote first, then extract the abstract principle \u2014 never lead with the thesis; let it emerge from the story as though the narrator is discovering it alongside the reader.",
      "Build arguments through accumulation of concrete episodes: stack specific incidents one after another until a pattern becomes undeniable, then state the pattern explicitly as a summary reflection.",
      "Handle counterarguments and qualifications with immediate, parenthetical honesty: insert 'perhaps', 'I cannot be sure', 'at any rate', 'I do not want to claim' to show the narrator wrestling with the accuracy of memory and the fairness of judgment.",
      "Use logical flow that is recursive \u2014 return to the same themes (shame, class, injustice, the child's helplessness) from different angles and through different episodes, deepening understanding with each return rather than proceeding linearly.",
      "When making a broad generalization about childhood, memory, or institutions, immediately ground it with a specific, concrete example from personal experience.",
      "Hedge by acknowledging the limitations of memory explicitly ('I forget how', 'I cannot remember whether', 'at any rate') rather than by weakening the claim itself \u2014 the claim, once made, stands firm; only the narrator's access to exact detail is questioned."
    ],
    "do_not": [
      "Do not present arguments as syllogisms or formal logical chains \u2014 the reasoning should feel like organic reflection, not structured persuasion.",
      "Do not use external citations, statistics, or appeals to authority \u2014 all evidence must come from personal experience, observed behavior, and remembered detail.",
      "Do not resolve moral complexity into simple conclusions \u2014 maintain the tension between competing truths (e.g., the punishment was cruel AND it worked)."
    ],
    "evidence": [
      "I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question. It was possible, therefore, to commit a sin without knowing that you committed it, without wanting to commit it, and without being able to avoid it.",
      "So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.",
      "It is a mistake to think such methods do not work. They work very well for their special purpose."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a temporal or situational anchor that places the reader in a specific moment ('Soon after I arrived', 'After the second or third offence', 'A little later'), then unfold the scene chronologically before pivoting to reflection at the end.",
      "Close paragraphs with a reflective or ironic coda that reframes the preceding narrative \u2014 the final sentence should crystallize the meaning of what was just described, often with a note of understated irony or lingering emotional resonance.",
      "Transition between paragraphs through chronological progression within an episode, or through explicit topic shifts marked by phrases like 'So much for', 'But there is one more thing', 'There was also'.",
      "Within paragraphs, sequence ideas from the specific and concrete to the abstract and reflective \u2014 move from what happened to what it meant, from the sensory detail to the moral or psychological insight.",
      "Use single-sentence paragraphs only for quoted speech or dramatic declarations that need to land with maximum force.",
      "When a paragraph covers a complex scene, embed multiple threads (physical setting, dialogue, emotional response, retrospective commentary) and weave between them rather than treating each in isolation."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract generalizations unless immediately followed by grounding in a specific anecdote \u2014 avoid floating in abstraction.",
      "Do not end paragraphs with cliffhangers or dramatic suspense \u2014 endings should feel like a mind settling on a conclusion, not a thriller building tension.",
      "Do not use explicit transitional phrases like 'Furthermore', 'Moreover', 'In addition' \u2014 prefer narrative continuity or abrupt topical pivots signaled by 'But', 'And yet', or simply by starting a new scene."
    ],
    "evidence": [
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "To this day I can feel myself almost swooning with shame as I stood, a very small, round-faced boy in short corduroy knickers, before the two women.",
      "'REPORT YOURSELF to the Headmaster after breakfast!'"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physically grounded metaphors and similes drawn from everyday experience \u2014 compare abstract psychological states to bodily sensations and material objects: 'Our brains were a gold-mine in which he had sunk money, and the dividends must be squeezed out of us.'",
      "Deploy lists of three (tricolon) to build rhetorical momentum, especially when cataloguing emotional states or social categories: 'partly because...partly from...but partly also because of'.",
      "Use direct quotation extensively \u2014 reproduce the exact words of authority figures to let their cruelty, absurdity, or manipulation speak for itself without editorial commentary.",
      "Employ ironic understatement as the primary tool of moral judgment \u2014 describe outrageous behavior in matter-of-fact language, creating a gap between tone and content that the reader must bridge.",
      "Use parenthetical asides to insert the adult narrator's wry, corrective voice into the child's narrative: '(What colour were those eyes, I wonder? I remember them as green, but actually no human being has green eyes. Perhaps they were hazel.)'",
      "Use repetition of key phrases across episodes to create thematic echoes \u2014 let the same words ('wouldn't be able to afford', 'a little office boy at forty pounds a year', 'REPORT YOURSELF') recur as motifs that accumulate meaning.",
      "When using analogy, draw comparisons that carry moral freight \u2014 compare education to force-feeding a goose, scholarship training to flogging a foundered horse \u2014 so the analogy does argumentative work."
    ],
    "do_not": [
      "Do not use literary or elevated metaphors \u2014 avoid comparisons to mythology, high art, or abstract philosophy; keep figurative language rooted in the physical and the domestic.",
      "Do not use rhetorical questions for persuasion \u2014 reserve them for quoting the manipulative speech of authority figures; the narrator's own voice states rather than asks.",
      "Do not employ ornamental or decorative language \u2014 every image and comparison must serve to illuminate a psychological truth or social dynamic, never merely to beautify the prose."
    ],
    "evidence": [
      "Our brains were a gold-mine in which he had sunk money, and the dividends must be squeezed out of us.",
      "Sambo was flogging him towards the goal as one might do with a foundered horse.",
      "'Do you think that's the sort of thing a boy like you should buy?' I remember her saying to somebody \u2014 and she said this in front of the whole school"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by plunging directly into a specific, concrete episode with temporal and spatial grounding \u2014 establish the scene and the child's situation immediately, without throat-clearing or abstract preamble.",
      "Establish context through embedded, parenthetical clarifications within the opening sentences rather than through separate expository paragraphs: 'Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life)'.",
      "Close episodes or sections with a sentence that simultaneously wraps up the immediate narrative and opens onto a larger reflection \u2014 the ending should feel conclusive yet resonant, leaving a moral or psychological insight hanging in the air.",
      "Use em dashes for mid-sentence interruptions and asides that insert the narrator's commentary or qualification into the flow of narration.",
      "Format quoted speech on its own line when it represents a dramatic moment or a display of institutional power \u2014 let the words stand exposed.",
      "Use ALL CAPS sparingly and only to reproduce the way certain words felt to the child \u2014 to convey the psychological weight of an utterance as experienced, not merely as heard.",
      "Structure the essay as a series of discrete episodes organized thematically (bed-wetting, class hierarchy, scholarship pressure, emotional manipulation) rather than as a strict chronological narrative \u2014 allow each thematic cluster to build its own argument through accumulated anecdote.",
      "Use parentheses for factual clarifications, personal corrections, and moments where the narrator's memory hesitates or self-corrects."
    ],
    "do_not": [
      "Do not open with a thesis statement, a question to the reader, or a provocative generalization \u2014 begin in the middle of experience.",
      "Do not close with a neat moral summary or a call to action \u2014 let the final image or reflection linger without resolution.",
      "Do not use headers, bullet points, or other structural formatting \u2014 the essay should flow as continuous prose broken only by paragraph breaks."
    ],
    "evidence": [
      "Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.",
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked. This is that I did not wet my bed again \u2014 at least, I did wet it once again, and received another beating, after which the trouble stopped. So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.",
      "'REPORT YOURSELF to the Headmaster after breakfast!'"
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
  "one_line_description": "plain-spoken, earnest, confessional \u2014 moral urgency delivered through concrete detail, cumulative syntax, and unsentimental honesty",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple clauses with commas and coordinating conjunctions ('and', 'but', 'for'), creating a cumulative, additive momentum where each clause layers on a new detail, qualification, or consequence before the period arrives.",
      "Use compound-complex structures as the default sentence type: open with a main clause, then extend it with subordinate clauses ('when', 'that', 'which', 'if'), participial phrases, and coordinate additions that pack context into a single syntactic unit.",
      "Interrupt sentences with parenthetical asides set off by dashes, commas, or actual parentheses to insert qualifications, self-corrections, or tangential specifics mid-thought without breaking the forward flow.",
      "Use participial and absolute constructions to compress simultaneous actions and descriptive detail into the main sentence: 'looking and feeling a fool, with the rifle over my shoulder and an ever-growing army of people jostling at my heels.'",
      "Deploy short declarative sentences as emphatic punctuation after a sequence of longer, winding ones \u2014 use brevity to land a verdict or deliver an emotional blow, not to set the default pace.",
      "Open sentences frequently with temporal, situational, or transitional markers ('When I pulled the trigger', 'At that distance', 'Now,', 'But', 'In our time') to ground each statement and chain the argument forward.",
      "Construct parallel catalogues within sentences \u2014 stack noun phrases, verb phrases, or present participles in series, often culminating in a summarizing or climactic final item.",
      "Use 'partly...partly...but partly also' and 'not...but...' constructions to dissect emotional or moral complexity within a single sentence."
    ],
    "do_not": [
      "Do NOT write in clipped, staccato bursts of uniformly short sentences \u2014 the rhythm depends on long sentences earning the weight of the occasional short one.",
      "Do NOT let sentences sprawl without logical connective tissue; every clause must advance the argument, add a qualification, or sharpen the point.",
      "Do NOT use elaborate periodic sentence structures that withhold the main verb until the very end \u2014 the style is additive and forward-moving, placing subject and verb early then extending with trailing modifiers.",
      "Do NOT use sentence fragments for stylistic effect \u2014 every sentence, however short, must be grammatically complete.",
      "Do NOT front-load sentences with abstract ideas before grounding them in a concrete situation or sensory detail."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as the dominant mode \u2014 use 'I' to anchor arguments in personal judgment, experience, and honest confession, not to heroize or seek sympathy.",
      "Adopt the stance of a plain-speaking intellectual who treats the reader as an intelligent equal \u2014 explain without condescending, assert without bullying, confess without self-pity.",
      "Maintain a tone that is simultaneously earnest and sardonic \u2014 take the subject deadly seriously while treating absurdity, hypocrisy, or pretension with dry, understated contempt rather than outrage.",
      "Admit ugly truths, personal contradictions, and your own complicity with matter-of-fact directness, as though stating weather conditions \u2014 this candor is the foundation of authority.",
      "Shift between 'I' for personal experience, 'we' for shared conditions, 'one' for universal claims, and 'you' for pulling the reader into active participation \u2014 let the pronouns modulate between confession and generalization naturally.",
      "Signal certainty through plain declarative assertion ('The great enemy of clear language is insincerity') and signal uncertainty through conversational hedges ('I dare say', 'I think', 'I suppose', 'perhaps') \u2014 never use academic hedging formulas.",
      "Use contractions selectively \u2014 deploy them in conversational passages and personal reflection, but shift to uncontracted forms when making formal moral pronouncements or general declarations to lend them gravity.",
      "Let dry humor emerge from juxtaposition of scale \u2014 placing enormous moral weight next to trivial social embarrassment, or describing violence in the same breath as petty concerns."
    ],
    "do_not": [
      "Do NOT adopt an aloof, detached academic register \u2014 the voice must feel personally invested, even morally urgent.",
      "Do NOT use false modesty, coy evasion, or excessive hedging \u2014 state positions plainly and let the evidence carry the argument.",
      "Do NOT express self-righteousness or moral superiority \u2014 the narrator must implicate himself in the systems he criticizes.",
      "Do NOT be sentimental or emotionally effusive \u2014 even when discussing painful experiences, maintain a matter-of-fact plainness.",
      "Do NOT use sarcasm that distances the writer from the subject \u2014 humor must emerge from genuine discomfort, not from cleverness."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments through concrete illustration first, abstraction second \u2014 present vivid examples, specific episodes, or real-world scenarios and then extract the principle from them.",
      "Open with a personal experience, commonly held assumption, or bold admission that establishes the central tension, then spend the piece unpacking it through narrative and evidence.",
      "Use the pivot from narrative to reflection as the primary rhetorical engine: narrate events in patient detail, then interrupt with a sudden generalization that reframes everything.",
      "Handle counterarguments by giving them genuine weight \u2014 state the objection fairly, even embody conflicting impulses within the narrator's own divided consciousness, before explaining why the countervailing position is stronger.",
      "Preemptively acknowledge your own contradictions and the limitations of your evidence \u2014 admit your guilt, your uncertainty, your imperfect memory \u2014 to strengthen credibility through honesty.",
      "Use analogy drawn from physical, everyday experience to make abstract processes tangible \u2014 compare political or moral dynamics to concrete, homely images.",
      "When arriving at a general claim, state it as a bold assertion, then immediately qualify or complicate it in the next sentence \u2014 show that you've thought past the simple version.",
      "End arguments with practical conclusions, actionable prescriptions, or honest admissions of unresolved tension \u2014 do not leave the reader with diagnosis alone, and do not resolve what cannot be honestly resolved."
    ],
    "do_not": [
      "Do NOT argue purely in the abstract \u2014 every claim must be grounded in a concrete example the reader can examine.",
      "Do NOT present arguments as formal syllogisms or logical chains \u2014 the argument must feel discovered through experience, not pre-constructed.",
      "Do NOT dismiss counterarguments without engaging them \u2014 give opposing views their due before dismantling them.",
      "Do NOT introduce external citations, statistics, or appeals to authority \u2014 all evidence is first-person observation, experience, and specific example.",
      "Do NOT present neat resolutions where genuine tensions exist \u2014 allow contradictions to stand as part of the argument's honesty."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal, situational, or logical marker that orients the reader and connects to the preceding argument: 'From a very early age', 'But at that moment', 'Now that I have made this catalogue'.",
      "Organize ideas within paragraphs as a cascade: state the principle or set the scene, provide examples or specific details, then draw out the implication \u2014 move from claim to evidence to so-what, or from scene to detail to reflection.",
      "Close paragraphs with a sentence that either clinches the point with a memorable formulation, delivers a moral punch, or pivots toward the next section's concern \u2014 endings should feel like a door shutting firmly or opening.",
      "Connect paragraphs through chronological or causal progression rather than explicit formulaic transitions \u2014 use narrative continuity, implicit 'and then', or direct pivots with 'But'.",
      "Within longer paragraphs, use internal pivots marked by 'But', 'And yet', 'On the other hand' to create dialectical movement \u2014 thesis, complication, synthesis \u2014 within a single block.",
      "Use the dash-and-catalogue technique: list concrete images in series, then gather them with a dash into a single emotional or moral summary.",
      "Embed digressions, background information, and multiple threads (setting, dialogue, emotional response, retrospective commentary) within a single paragraph using subordinate clauses and parentheticals rather than breaking them into separate paragraphs."
    ],
    "do_not": [
      "Do NOT use explicit formulaic transition words like 'furthermore', 'additionally', 'moreover', 'in addition' between paragraphs \u2014 transitions should feel organic, embedded in action, narrative, or direct logical connection.",
      "Do NOT begin paragraphs with vague throat-clearing or unanchored abstractions \u2014 every opening sentence must do work, grounded in time, place, or a concrete reference point.",
      "Do NOT end paragraphs with trailing qualifications that dilute the point or with summary statements that explain what the reader should have understood \u2014 close with force and trust the accumulated detail.",
      "Do NOT let paragraphs become mere lists of examples without a framing claim and a concluding synthesis."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use vivid, concrete similes and metaphors drawn from everyday physical experience \u2014 compare abstract processes to tangible, homely, often slightly degrading images: 'like soft snow, blurring the outline', 'like a toad under a steam-roller', 'like red velvet', 'like a windowpane'.",
      "Deploy parody, pastiche, and direct quotation as argumentative weapons \u2014 reproduce the exact words of those you criticize and let their absurdity speak for itself.",
      "Use the catalogue or list as a primary device for emotional and rhetorical accumulation \u2014 stack concrete images or examples in series, each slightly more vivid than the last, building pressure before releasing it into a summary.",
      "Employ antithesis and paradox to crystallize central ironies \u2014 place opposed ideas in parallel grammatical structures within the same sentence.",
      "Use deliberate repetition of key phrases and structural patterns to create thematic echoes and a drumbeat of emphasis without calling attention to the device.",
      "Deploy em dashes for dramatic parenthetical insertions that qualify, redirect, or sharpen the point mid-sentence, creating a spoken, thinking-aloud quality.",
      "Use direct imperatives ('Consider', 'Look again', 'Look back through this essay') and direct address sparingly but pointedly to command attention and pull the reader into active participation.",
      "Employ ironic understatement as a primary tool of moral judgment \u2014 describe outrageous behavior in matter-of-fact language and let the gap between tone and content do the arguing."
    ],
    "do_not": [
      "Do NOT use ornate, literary, or elevated metaphors that call attention to their own cleverness \u2014 all figurative language must feel plain-spoken, grounded in common experience.",
      "Do NOT use clich\u00e9d metaphors, stale idioms, or dead figures of speech \u2014 practice freshness of imagery.",
      "Do NOT use rhetorical questions as padding or as the primary persuasive device \u2014 prefer direct assertion; when questions appear, they must expose something specific or challenge the reader genuinely.",
      "Do NOT rely on abstract, Latinate vocabulary when a plain Anglo-Saxon word will do \u2014 rhetorical power comes from concreteness and simplicity, not from impressive diction.",
      "Do NOT employ conspicuous alliteration, assonance, or other sound-based devices \u2014 the prose should sound natural and unadorned."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by plunging directly into a specific, concrete situation \u2014 a personal declaration, a scene, or a commonly held assumption \u2014 that immediately establishes conflict, stakes, and the narrator's compromised or engaged position.",
      "Put 'I' in the first paragraph and establish the personal, confessional register from the very first sentence \u2014 never begin with impersonal abstraction.",
      "Begin with autobiography, anecdote, or observed experience rather than thesis statement \u2014 let the argument emerge from the narrative rather than announcing it upfront.",
      "Close with quiet, devastating honesty \u2014 the final paragraph should deliver an uncomfortable admission, an unresolved tension, or a practical prescription, never a tidy moral summary.",
      "Include a self-undermining moment near the end \u2014 acknowledge your own imperfection, bias, or complicity, which paradoxically strengthens authority through demonstrated honesty.",
      "Use no section headers, bullet points, or typographical divisions in narrative essays \u2014 the piece should read as continuous, unbroken prose with only paragraph breaks for structure.",
      "When prescriptive rules or taxonomies are needed, present them as numbered or lettered lists set apart from the prose, giving them visual prominence and imperative force.",
      "Use single quotation marks for reported speech and terms used with ironic distance, maintaining British typographic convention.",
      "Format quoted speech with plain attribution verbs ('said', 'shouted') and use ALL CAPS sparingly to reproduce the psychological weight of an utterance as experienced."
    ],
    "do_not": [
      "Do NOT open with a bland, neutral statement of topic or an abstract philosophical question \u2014 the first sentence must have argumentative energy, personal presence, and a clear stance.",
      "Do NOT close with vague, uplifting generalities, a tidy summary, or a call to action \u2014 endings must be specific, honest, and tonally consistent with the essay's critical edge.",
      "Do NOT treat the essay as a purely academic exercise \u2014 maintain throughout the sense that the argument has real-world moral, political, or personal stakes.",
      "Do NOT use typographic emphasis (bold, italic) or structural formatting (headers, subheadings) within the prose body \u2014 syntax and diction must carry everything."
    ]
  },
  "signature_phrases": {
    "use": [
      "It is curious",
      "I dare say",
      "I think",
      "I fancy",
      "I suppose",
      "at any rate",
      "in our time",
      "the point is",
      "it follows that",
      "the fact is",
      "in a word",
      "needless to say",
      "it is humbug to pretend",
      "looking back",
      "on the other hand",
      "in general",
      "etc., etc.",
      "that would never do",
      "so much for"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "in conclusion",
      "it is important to note",
      "it goes without saying",
      "paradigm",
      "synergy",
      "leverage",
      "utilize",
      "impactful",
      "stakeholder",
      "going forward",
      "at the end of the day",
      "basically",
      "literally",
      "incredibly",
      "absolutely",
      "amazing",
      "awesome",
      "facilitate",
      "optimize",
      "holistic",
      "robust"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', 'additionally' with 'But', 'And', 'Now', or simply start a new sentence with a direct statement.",
    "Convert passive constructions to active where possible \u2014 'the elephant was shot by me' becomes 'I shot the elephant'.",
    "Replace Latinate abstractions with plain Anglo-Saxon equivalents \u2014 'facilitate' becomes 'help', 'utilize' becomes 'use', 'commence' becomes 'begin'.",
    "If a sentence contains only abstract claims, anchor it by adding a concrete physical image, specific example, or named particular.",
    "Break any sentence that sprawls without logical connective tissue into two sentences, but combine sequences of choppy short sentences into compound-complex ones joined by 'and', 'but', or subordinate clauses.",
    "Convert academic hedges ('It could be argued that', 'It is not unreasonable to suggest') into plain speech ('I think', 'I dare say', or simply state the claim directly).",
    "Replace ornate or literary metaphors with plain, physically grounded comparisons drawn from everyday life.",
    "If a paragraph opens with an abstraction, move the abstraction after a concrete scene-setting sentence or a specific example.",
    "Strip out any sentence that merely restates what the previous sentence already said \u2014 redundancy dilutes force.",
    "When you find yourself explaining a moral judgment explicitly ('This was cruel', 'The injustice was obvious'), delete the judgment and instead present the concrete details that make the judgment self-evident."
  ]
}
```