# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** formal-conversational, confessional, analytic — plain-spoken moral authority grounded in concrete physical detail and unflinching self-examination

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
      "Build the default sentence as a compound or compound-complex structure, chaining two or three independent clauses with commas and coordinating conjunctions (and, but, or) to create a rolling, argumentative momentum.",
      "Use subordinate clauses at the front of sentences ('When you think of a concrete object\u2026', 'If you use ready-made phrases\u2026') to set up conditions or concessions before delivering the main assertion.",
      "Deploy long, accumulative sentences when cataloguing examples or building an extended argument, stacking phrases with commas: 'Words like phenomenon, element, individual (as noun), objective, categorical, effective, virtual, basic, primary, promote, constitute, exhibit, exploit, utilize, eliminate, liquidate, are used to dress up a simple statement.'",
      "Follow a long, elaborated sentence with a short, declarative punch to land the point: 'This is a parody, but not a very gross one.' / 'It is easy.'",
      "Use colons to split a sentence into claim and elaboration \u2014 the first half states the thesis, the second half unpacks it: 'it is not due simply to the bad influence of this or that individual writer.'",
      "Employ participial and gerund phrases to extend sentences without starting new ones: 'blurring the outline and covering up all the details.'"
    ],
    "do_not": [
      "Do not write a series of sentences that are all the same length or structure \u2014 monotonous rhythm deadens the argument.",
      "Do not use sentence fragments for dramatic effect or stylistic flair; every sentence must be grammatically complete.",
      "Do not chain more than three independent clauses without breaking into a new sentence \u2014 the rhythm should feel controlled, not breathless."
    ],
    "evidence": [
      "A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.",
      "It is easier \u2014 even quicker, once you have the habit \u2014 to say In my opinion it is not an unjustifiable assumption that than to say I think.",
      "The great enemy of clear language is insincerity."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person singular ('I') when stating personal positions, transitioning between sections, or making self-aware admissions; shift to impersonal 'one' or second-person 'you' when stating general principles the reader should follow.",
      "Maintain a tone that is simultaneously authoritative and conversational \u2014 state judgments with confidence ('the great enemy of clear language is insincerity') but leaven them with asides and self-deprecation ('Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against').",
      "Use contractions freely in argumentative and informal passages to keep the voice colloquial rather than stiff, but drop them when the sentence demands a more measured, emphatic cadence.",
      "Signal certainty through flat declarative statements without hedging ('political writing is bad writing'). Reserve hedges ('probably', 'I think', 'it is broadly true') for moments of genuine uncertainty or deliberate modesty.",
      "Address the reader directly with 'you' when issuing practical advice or inviting them to test a claim: 'You can shirk it by simply throwing your mind open.'",
      "Adopt a stance of the engaged, somewhat exasperated teacher \u2014 someone who cares deeply about the subject, is frustrated by widespread malpractice, but still believes improvement is possible."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, or academic register \u2014 always sound like a person with a stake in the argument.",
      "Do not use false modesty or excessive qualification; when you believe something is true, say it plainly.",
      "Do not be cruel or contemptuous toward individual writers \u2014 criticize the habits and the prose, not the person (note how the essay critiques 'Professor Laski' by analyzing his sentence, not his character)."
    ],
    "evidence": [
      "I said earlier that the decadence of our language is probably curable.",
      "Look again at the examples I gave at the beginning of this essay.",
      "But you are not obliged to go to all this trouble. You can shirk it by simply throwing your mind open and letting the ready-made phrases come crowding in."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a commonly held belief or conventional wisdom, then immediately complicate or invert it: present the orthodoxy, then show why it is wrong or incomplete.",
      "Anchor abstract arguments with concrete, physical analogies drawn from everyday life: drinking and failure, prefabricated hen-houses, tea leaves blocking a sink, cavalry horses answering the bugle, a cuttlefish spurting ink.",
      "Build arguments through a dialectical pattern: state the problem, show examples of the problem, diagnose the cause, then propose a remedy \u2014 always in that order.",
      "Use extended demonstration as evidence \u2014 rather than merely asserting that bad writing exists, quote it at length and then dissect it piece by piece.",
      "Acknowledge counterarguments and your own imperfections before the reader can raise them ('Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against'), then pivot to show why your core point still holds.",
      "Use the technique of translation or parody to make your case visceral: rewrite good prose in the bad style (or vice versa) to show the difference through direct comparison rather than abstract description.",
      "End an argumentative arc with explicit, numbered rules or actionable prescriptions \u2014 move from diagnosis to prescription."
    ],
    "do_not": [
      "Do not make claims without immediately demonstrating them through quoted examples, analogies, or parodies.",
      "Do not present only your side \u2014 always acknowledge the strongest version of the opposing view before refuting it.",
      "Do not leave arguments at the level of abstraction; always ground each claim in a concrete illustration.",
      "Do not rely on appeals to authority or citation alone \u2014 show, don't just tell."
    ],
    "evidence": [
      "It follows that any struggle against the abuse of language is a sentimental archaism, like preferring candles to electric light or hansom cabs to aeroplanes. Underneath this lies the half-conscious belief that language is a natural growth and not an instrument which we shape for our own purposes.",
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "Here is a well-known verse from Ecclesiastes: \u2026 Here it is in modern English: \u2026"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear thesis or transitional statement that tells the reader exactly where the argument is headed: 'In our time, political speech and writing are largely the defence of the indefensible.'",
      "Organize ideas within a paragraph in a claim-evidence-elaboration-implication sequence: state the rule, show examples, explain the mechanism, then draw the consequence.",
      "Use internal paragraph structure to create a miniature argument: set up, develop with examples, then close with a pithy conclusion or a pivot to the next point.",
      "Connect paragraphs through logical sequencing \u2014 each paragraph's opening either extends, contrasts with, or answers the previous paragraph's closing thought. Use explicit connectives sparingly ('Now that I have made this catalogue\u2026', 'As I have tried to show\u2026').",
      "When a paragraph contains a list of examples, embed them in running prose rather than breaking into bullet points \u2014 weave examples into the sentence fabric with commas and semicolons.",
      "Close paragraphs with a sentence that either crystallizes the paragraph's point in memorable language or pivots forward to set up the next section: 'I will come back to this presently.'"
    ],
    "do_not": [
      "Do not start consecutive paragraphs with the same syntactic pattern \u2014 vary your openings between declarations, transitions, and qualifications.",
      "Do not end a paragraph inconclusively unless you are deliberately creating a forward-leaning transition to the next one.",
      "Do not let a paragraph become a mere list of examples without a governing assertion and a concluding implication."
    ],
    "evidence": [
      "As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer.",
      "Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.",
      "I said earlier that the decadence of our language is probably curable. Those who deny this would argue, if they produced an argument at all, that language merely reflects existing social conditions\u2026"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Build vivid, original analogies from concrete, physical imagery \u2014 preferably drawn from domestic or natural life rather than literary or intellectual sources: 'like soft snow, blurring the outline', 'like tea leaves blocking a sink', 'like a cuttlefish spurting out ink', 'like the sections of a prefabricated hen-house.'",
      "Use rhetorical questions to challenge the reader or dramatize absurdity, placing them at moments of peak engagement: 'what is a \"rift\", for instance?', 'Since you don't know what Fascism is, how can you struggle against Fascism?'",
      "Deploy lists and catalogues as rhetorical weapons \u2014 heap up examples to overwhelm the reader with the sheer volume of the problem: 'Ring the changes on, take up the cudgel for, toe the line, ride roughshod over\u2026'",
      "Use parallel structure within sentences to create emphasis through repetition of syntactic form: 'It has nothing to do with correct grammar and syntax\u2026 It has nothing to do with\u2026 On the other hand, it is not concerned with\u2026'",
      "Employ direct address and imperatives to break the fourth wall and activate the reader: 'Consider for instance\u2026', 'Look again at the examples I gave\u2026', 'Look back through this essay.'",
      "Use the device of self-implication \u2014 include yourself among those who commit the fault you criticize, to avoid sanctimony and to strengthen credibility.",
      "Employ antithesis and contrast to sharpen distinctions: place good prose directly beside bad prose, Saxon words beside Latin words, concrete beside abstract."
    ],
    "do_not": [
      "Do not use stale metaphors, clich\u00e9d similes, or idioms that have become automatic \u2014 practice what you preach.",
      "Do not use rhetorical questions as padding or decoration; each one must genuinely challenge a position or provoke thought.",
      "Do not overuse any single device \u2014 rotate between analogy, example, direct address, catalogue, and contrast."
    ],
    "evidence": [
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "an accumulation of stale phrases chokes him like tea leaves blocking a sink",
      "his words, like cavalry horses answering the bugle, group themselves automatically into the familiar dreary pattern"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by engaging with a widely held belief and immediately complicating it \u2014 the first sentence should acknowledge conventional wisdom, and the first paragraph should reveal the flaw in that wisdom: 'Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.'",
      "Establish context and stakes in the opening paragraphs before introducing any evidence or examples \u2014 the reader must understand why they should care before being shown proof.",
      "Use section headers (in caps) to structure a long essay into clearly demarcated analytical categories, giving the piece the architecture of a taxonomic guide or diagnostic manual.",
      "Close the essay with actionable, numbered rules or principles \u2014 transform the preceding analysis into a prescriptive toolkit the reader can apply immediately.",
      "Add a final self-undermining caveat after the rules ('Break any of these rules sooner than say anything outright barbarous') to prevent rigidity and signal intellectual honesty.",
      "End on a note that connects the specific subject (language) to the larger stakes (politics, thought, freedom) \u2014 broaden the frame in the final paragraph to show that the essay's concern is not merely aesthetic but existential.",
      "Use em dashes for parenthetical asides that add color or qualification without breaking the sentence's main thrust: 'so the argument runs \u2014'",
      "Use parenthetical numbers and footnotes for cross-referencing examples within the essay."
    ],
    "do_not": [
      "Do not open with a personal anecdote or scene-setting \u2014 open with the intellectual problem itself.",
      "Do not close with vague inspiration or a call to general action; close with specific, concrete directives.",
      "Do not use formatting (bold, italics, bullet points) as a substitute for prose argument \u2014 keep the body of the essay in continuous, flowing paragraphs even when categorizing."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "Break any of these rules sooner than say anything outright barbarous.",
      "one ought to recognise that the present political chaos is connected with the decay of language, and that one can probably bring about some improvement by starting at the verbal end."
    ]
  }
}
```

### sample-2.txt (3364 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3364,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking clauses with 'and', 'but', and commas, letting actions and observations accumulate in a single breath \u2014 chain two, three, or even four clauses before stopping.",
      "Use em dashes to insert parenthetical asides, elaborations, or restatements mid-sentence, creating a conversational pause that deepens the point without breaking the sentence.",
      "When narrating a sequence of events, connect them with semicolons or commas-plus-conjunctions rather than splitting into separate sentences, so the reader feels swept along by momentum.",
      "Deploy abrupt, flat declarative sentences after long descriptive or argumentative passages to land a point with blunt force \u2014 the shift in sentence shape IS the emphasis.",
      "Open sentences with temporal or spatial markers ('At that moment', 'In the end', 'When I pulled the trigger') to anchor the reader in the scene before unfolding the clause.",
      "Use participial and absolute phrases to compress secondary actions into the main sentence rather than giving them their own sentence: 'looking and feeling a fool, with the rifle over my shoulder'."
    ],
    "do_not": [
      "Do NOT use sentence fragments for stylistic effect \u2014 every sentence should be grammatically complete, even the short ones.",
      "Do NOT front-load sentences with abstract nominalization; start with concrete subjects (I, he, the crowd, the elephant) doing concrete things.",
      "Do NOT use ellipses or trailing punctuation to suggest unfinished thought \u2014 finish the thought, then stop."
    ],
    "evidence": [
      "I was sub-divisional police officer of the town, and in an aimless, petty kind of way anti-European feeling was very bitter.",
      "He looked suddenly stricken, shrunken, immensely old, as though the frightful impact of the bullet had paralysed him without knocking him down.",
      "This happened more than once."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a confessional participant \u2014 someone who was there, did the thing, and is now reflecting on it with uncomfortable honesty about his own motives and failures.",
      "Maintain a tone that is simultaneously self-deprecating and authoritative: admit weakness, confusion, and moral failure, but narrate with total command of the scene and the argument.",
      "Use contractions freely in reflective and conversational passages ('I didn't', 'couldn't', 'wasn't') but shift to uncontracted forms when making formal pronouncements or universal claims ('it is the condition of his rule', 'He becomes a sort of hollow, posing dummy').",
      "Signal irony and moral complexity through understatement rather than exclamation \u2014 let the gap between what is said flatly and what is obviously terrible do the emotional work.",
      "Address the reader directly but sparingly \u2014 a single 'you' or imperative ('ask any Anglo-Indian official') to break the fourth wall and implicate the reader in the argument.",
      "Express internal conflict as two opposing forces stated plainly, without melodrama: 'With one part of my mind I thought X; with another part I thought Y.'"
    ],
    "do_not": [
      "Do NOT adopt a detached, academic tone \u2014 always keep the author visibly present, feeling, reacting, judging himself.",
      "Do NOT use sentimental or emotionally inflated language; keep moral horror expressed through concrete description, not adjective-heavy editorializing.",
      "Do NOT hedge moral claims with excessive qualification \u2014 state the uncomfortable truth plainly, then let the narrative complicate it."
    ],
    "evidence": [
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "Theoretically \u2014 and secretly, of course \u2014 I was all for the Burmese and all against their oppressors, the British.",
      "Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis through a specific, concrete incident \u2014 never state the abstract argument first, but let narrative force the reader to arrive at the principle.",
      "Build arguments through the logic of 'I thought I would do X, but then Y happened, and I realized Z' \u2014 use the gap between intention and action as the engine of insight.",
      "Handle counterarguments by embodying them personally: rather than saying 'some argue X,' show yourself believing X and then being forced by experience to confront its failure.",
      "Use parenthetical asides to insert secondary arguments or qualifications that would disrupt the main flow if given full paragraph treatment: '(Somehow it always seems worse to kill a large animal.)'",
      "Let the moral argument emerge from the accumulation of physical, sensory detail \u2014 describe what you saw, smelled, heard, and let the reader draw the conclusion one beat before you state it.",
      "Move between the specific incident and the universal principle, using the incident as evidence and returning to it whenever the abstract claim needs grounding."
    ],
    "do_not": [
      "Do NOT present arguments as logical syllogisms or numbered points \u2014 embed them in narrative and let the story structure carry the reasoning.",
      "Do NOT resolve moral ambiguity neatly; leave the reader sitting with contradiction, as the author sits with it.",
      "Do NOT introduce evidence from outside the personal experience being narrated \u2014 no citations, no statistics, no appeals to authority beyond one's own witness."
    ],
    "evidence": [
      "Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.",
      "And it was at this moment, as I stood there with the rifle in my hands, that I first grasped the hollowness, the futility of the white man's dominion in the East.",
      "I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear situational anchor \u2014 a temporal marker, a shift in scene, or a declaration of the narrator's state of mind that tells the reader where they now stand.",
      "Build paragraphs as narrative units: each paragraph covers one phase of action, one stage of reflection, or one turn in the argument, and the transition to the next paragraph signals a new phase.",
      "Close paragraphs with sentences that carry thematic weight \u2014 a generalization drawn from the preceding detail, an ironic reversal, or a sentence that pivots toward the next complication.",
      "Use 'But' at the start of paragraphs to create dialectical turns \u2014 state a position in one paragraph, then open the next with 'But' to introduce the complicating counterforce.",
      "Within paragraphs, sequence ideas from the external and concrete to the internal and reflective: describe what happened, then describe what you thought about it, then extract the principle."
    ],
    "do_not": [
      "Do NOT use bullet points, headers, or any typographical structuring devices \u2014 let paragraph breaks alone organize the argument.",
      "Do NOT write paragraphs that are purely abstract or purely descriptive; every paragraph should contain both concrete detail and reflective commentary, woven together.",
      "Do NOT begin consecutive paragraphs with the same syntactic structure \u2014 vary the openings to prevent mechanical rhythm."
    ],
    "evidence": [
      "But at that moment I glanced round at the crowd that had followed me.",
      "But I did not want to shoot the elephant.",
      "All this was perplexing and upsetting."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended simile and analogy drawn from the everyday and mechanical to deflate grandeur: compare an elephant to 'a huge and costly piece of machinery,' a dying elephant to something 'thousands of years old,' a man's chance to 'a toad under a steam-roller.'",
      "Deploy lists of concrete sensory details connected by commas to build cumulative force \u2014 stack images so the weight of evidence becomes overwhelming: 'the wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos.'",
      "Use parenthetical remarks as a rhetorical device to insert a personal aside, a dark joke, or a universal claim that disrupts the narrative tone just enough to remind the reader of the author's presence and judgment.",
      "Employ antithesis to crystallize moral paradoxes: set two opposing truths in parallel structure within the same sentence to make the contradiction inescapable.",
      "Use repetition of key phrases ('I had got to', 'a sahib has got to') to hammer home the theme of compulsion and the erasure of individual will."
    ],
    "do_not": [
      "Do NOT use metaphors that are literary, ornate, or self-consciously poetic \u2014 keep figurative language rooted in the physical, the mechanical, and the mundane.",
      "Do NOT use rhetorical questions as a primary persuasive device \u2014 make declarative assertions and let the narrative prove them.",
      "Do NOT employ alliteration, assonance, or other sound-based devices conspicuously; the prose should sound plain even when it is carefully constructed."
    ],
    "evidence": [
      "I should have about as much chance as a toad under a steam-roller.",
      "a deep, low, happy sigh, as of people who see the theatre curtain go up at last, breathed from innumerable throats.",
      "The thick blood welled out of him like red velvet, but still he did not die."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a declarative first-person sentence that immediately establishes the situation, the narrator's position within it, and an ironic or self-deprecating note that hooks the reader: state the premise and undercut it in the same breath.",
      "Establish context through a combination of place, role, and emotional state in the first paragraph \u2014 the reader should know where, who, and what's at stake before the narrative proper begins.",
      "Close the piece with a sentence that circles back to the narrator's psychology, delivering the final insight as a confession of motive \u2014 the last line should reframe everything that came before.",
      "End on a note of ironic self-awareness rather than resolution \u2014 do not tie up the moral neatly, but leave the reader with the uncomfortable gap between what should have been done and what was actually done, and why.",
      "Use em dashes liberally for mid-sentence interruptions, elaborations, and dramatic pauses throughout \u2014 they are a signature punctuation mark that creates a conversational, digressive rhythm.",
      "Avoid all formatting beyond plain paragraphs: no headers, no emphasis markers, no lists, no block quotes. The essay is a continuous spoken voice on the page."
    ],
    "do_not": [
      "Do NOT open with a question, a quotation, or a scene in medias res \u2014 begin with a plain statement of situation that carries ironic weight.",
      "Do NOT close with a call to action, a prescriptive moral, or a forward-looking statement \u2014 end with retrospective self-examination.",
      "Do NOT use any typographical emphasis (bold, italic, underline) to signal importance \u2014 let word choice and sentence position do that work."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "He wears a mask, and his face grows to fit it."
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
      "Build sentences by stacking concrete physical details in series, separated by commas, creating an accumulative effect: subject, then layer after layer of observed particulars.",
      "Chain clauses with 'and' to create a sense of continuous, unfolding action \u2014 events flowing one into the next without artificial pause or summary.",
      "Use participial phrases to compress simultaneous actions into a single sentence: 'gripping him by arm and shoulder, as though at once pushing and supporting him.'",
      "Interrupt narrative momentum with a stark, short declarative to deliver emotional or moral weight \u2014 place the blunt statement after a sequence of longer, more descriptive sentences.",
      "Favor compound sentences joined by commas and coordinating conjunctions over subordinating constructions \u2014 keep the syntax flat and forward-moving, mirroring the march of events.",
      "When building long sentences, anchor them in concrete sensory detail rather than abstract reasoning \u2014 let the length come from accumulating things seen, heard, and felt."
    ],
    "do_not": [
      "Do not use elaborate subordinate clause nesting or periodic sentence structures that delay the main verb \u2014 keep syntax direct and sequential.",
      "Do not rely on semicolons to join independent clauses as a primary rhythm tool \u2014 prefer 'and,' commas, or full stops.",
      "Do not construct sentences around abstract nouns as subjects \u2014 ground sentences in people, objects, and physical actions."
    ],
    "evidence": [
      "Two of them stood by with rifles and fixed bayonets, while the others handcuffed him, passed a chain through his handcuffs and fixed it to their belts, and lashed his arms tight to his sides.",
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "He was dangling with his toes pointed straight downwards, very slowly revolving, as dead as a stone."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who is embedded in the scene but morally apart from it \u2014 use 'we' for shared actions and 'I' only at moments of personal reckoning or revelation.",
      "Maintain a controlled, understated tone even when describing horror \u2014 let the facts carry the emotional weight rather than adjectives or exclamations.",
      "Signal moral judgment through precise, plain observation rather than overt condemnation \u2014 describe what happened and trust the reader to feel the wrongness.",
      "Use contractions freely in dialogue to render speech naturalistically, and use them selectively in narration to keep the prose conversational without becoming slangy.",
      "Deploy irony through juxtaposition: place something grotesque next to something mundane, and let the contrast do the rhetorical work without commenting on it.",
      "When stating a moral insight directly, do so once, plainly, then immediately return to concrete narration \u2014 do not linger or elaborate on the abstract point."
    ],
    "do_not": [
      "Do not editorialize with emotional adjectives or adverbs \u2014 avoid 'horrifyingly,' 'tragically,' 'heartbreakingly.' Let scene and detail create the feeling.",
      "Do not adopt a detached, clinical tone \u2014 the narrator is affected, just disciplined in showing it.",
      "Do not address the reader directly with 'you' or imperative constructions \u2014 the reader witnesses alongside the narrator, not as an addressee."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "the same thought was in all our minds: oh, kill him quickly, get it over, stop that abominable noise!",
      "I found that I was laughing quite loudly. Everyone was laughing."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument through narrative rather than exposition \u2014 arrange scenes so that the moral conclusion arrives as an inevitable consequence of what has been witnessed, not as a thesis imposed from outside.",
      "Use a single pivotal concrete detail as the fulcrum of the entire argument \u2014 one small observed action (stepping aside to avoid a puddle) that crystallizes the abstract insight.",
      "Move from the physical to the philosophical in a single, brief passage, then immediately return to physical narration \u2014 the abstract reflection is a flash, not a sustained digression.",
      "Let ironic juxtapositions serve as implicit arguments: place the aftermath (jolly breakfast, laughter, drinks) against the event (a man killed) without explaining the contradiction.",
      "Accumulate physical evidence before the moment of insight \u2014 the reader must see everything the narrator saw before the narrator draws any conclusion."
    ],
    "do_not": [
      "Do not state the argument at the beginning \u2014 build toward it through scene and detail, letting it emerge.",
      "Do not argue both sides or introduce counterarguments \u2014 this is testimony, not debate. The moral force comes from witnessed reality, not from reasoning through objections.",
      "Do not repeat or belabor the central insight \u2014 state it once with precision and move on."
    ],
    "evidence": [
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "An enormous relief had come upon us now that the job was done. One felt an impulse to sing, to break into a run, to snigger.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs by establishing a physical action, location, or moment in time \u2014 ground the reader in the scene before anything else.",
      "Organize paragraphs as miniature scenes: set the stage, describe the action, and close with an image or detail that carries emotional or thematic resonance.",
      "Use paragraph breaks to mark shifts in the phase of action \u2014 each paragraph corresponds to a distinct beat in the unfolding event (the preparation, the march, the interruption, the execution).",
      "Close paragraphs with a striking image, a simile, or a quiet observation that resonates beyond its literal meaning: 'as dead as a stone,' 'The dead man was a hundred yards away.'",
      "Embed dialogue paragraphs between narrative paragraphs to break up description and inject the voices of other characters \u2014 use these to reveal character through speech patterns and diction.",
      "Transition between paragraphs through chronological or spatial continuity \u2014 the next paragraph picks up where the last left off in time or place, without explicit transition words."
    ],
    "do_not": [
      "Do not open paragraphs with topic sentences that announce what the paragraph will discuss \u2014 enter through action or image.",
      "Do not use explicit transition phrases like 'Furthermore,' 'In addition,' 'Moreover' \u2014 let temporal and spatial sequence provide the connective tissue.",
      "Do not end paragraphs with abstract summary or moral commentary (except the single pivotal passage) \u2014 end with the concrete."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "We went round the gallows to inspect the prisoner's body. He was dangling with his toes pointed straight downwards, very slowly revolving, as dead as a stone.",
      "We went through the big double gates of the prison, into the road."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes drawn from ordinary, even homely life to describe extraordinary situations \u2014 compare the terrible to the familiar to make it vivid and uncomfortably real: 'like men handling a fish which is still alive and may jump back into the water.'",
      "Deploy lists of concrete physical details in series to create visceral accumulation: 'bowels digesting food, skin renewing itself, nails growing, tissues forming.'",
      "Use repetition for rhythmic and emotional intensification \u2014 repeat a word or phrase to create the effect of relentless, inescapable reality: 'Ram! Ram! Ram! Ram!'",
      "Employ em dashes to introduce sudden narrative interruptions that mirror the disruption of events: 'A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.'",
      "Use the dog as a foil \u2014 introduce an element that is tonally discordant (joyful, oblivious) to heighten the horror of the central event through contrast.",
      "Place the key moral insight in plain, unadorned language \u2014 no metaphor, no flourish \u2014 so that its simplicity gives it authority."
    ],
    "do_not": [
      "Do not use elaborate or literary metaphors \u2014 keep figurative language grounded in the everyday and the physical.",
      "Do not use rhetorical questions to engage the reader \u2014 present, don't ask.",
      "Do not use exclamation marks in narration \u2014 reserve them strictly for dialogue and reported thought."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "'Ram! Ram! Ram! Ram! Ram!'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with immediate scene-setting: place, weather, time \u2014 drop the reader into the physical reality without preamble or context-setting explanation.",
      "Establish the first sentence with a simple declarative that locates the reader geographically and temporally: 'It was in Burma, a sodden morning of the rains.'",
      "Close the piece with a quiet, devastating juxtaposition \u2014 place an ordinary social moment against the fact of death, and let the final sentence land with understated force.",
      "Structure the essay as a linear chronological narrative from a single continuous scene \u2014 no flashbacks, no jumping forward, no structural experimentation.",
      "Use the essay form to embed a moral argument inside a personal narrative \u2014 the 'essay' disguises itself as a story, and the insight emerges from within the action rather than being imposed as commentary.",
      "Render dialect and accent through spelling ('iss,' 'hass,' 'wass') to individualize speakers and mark social/ethnic difference without editorial comment.",
      "Use minimal formatting \u2014 no headers, no lists, no emphasis markers. The prose is continuous and unbroken, relying entirely on paragraph breaks for structure."
    ],
    "do_not": [
      "Do not open with a thesis statement, a question, or an abstract generalization \u2014 begin in the concrete scene.",
      "Do not close with an explicit moral lesson or summary of what the reader should take away \u2014 end with an image or fact that carries the weight implicitly.",
      "Do not use section breaks, headers, or any structural apparatus \u2014 the piece is one continuous flow from first sentence to last."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "'All iss satisfactorily prepared. The hangman iss waiting. We shall proceed.'"
    ]
  }
}
```

### sample-4.txt (2468 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 2468,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple independent and dependent clauses with commas and coordinating conjunctions ('and', 'but'), creating a flowing, discursive rhythm that mimics the movement of thought itself.",
      "Use compound-complex structures as the default: open with a main clause, then append qualifications, elaborations, or parenthetical asides before arriving at the sentence's true point.",
      "Interrupt sentences with dashes or parenthetical phrases (set off by commas or em dashes) to insert clarifications, self-corrections, or caveats mid-stream \u2014 e.g. 'i.e. seriously intended' or 'the Indian Imperial Police, in Burma'.",
      "Place the most important or surprising element at the END of a long sentence, so the accumulated clauses build toward it rather than away from it.",
      "When a short sentence appears, use it as a verdict or summation after a longer exploratory passage \u2014 a declarative full stop that closes a line of reasoning.",
      "Use semicolons to yoke together two closely related independent clauses that could stand alone but gain force from juxtaposition."
    ],
    "do_not": [
      "Do NOT write staccato sequences of uniformly short declarative sentences \u2014 the rhythm depends on long, clause-rich sentences punctuated by occasional brevity, not the reverse.",
      "Do NOT front-load sentences with the main point and then trail off \u2014 the architecture depends on deferred resolution, where qualifications come before or alongside the payoff.",
      "Do NOT use sentence fragments for stylistic emphasis \u2014 every sentence, however short, must be grammatically complete."
    ],
    "evidence": [
      "\"Between the ages of about seventeen and twenty-four I tried to abandon this idea, but I did so with the consciousness that I was outraging my true nature and that sooner or later I should have to settle down and write books.\"",
      "\"I knew that I had a facility with words and a power of facing unpleasant facts, and I felt that this created a sort of private world in which I could get my own back for my failure in everyday life.\"",
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person with unflinching honesty about personal failings, vanity, and contradictions \u2014 present yourself as a flawed specimen being examined, not as an authority dispensing wisdom.",
      "Maintain a tone that is simultaneously confessional and analytical: reveal personal details not for intimacy's sake but as evidence in an argument about larger human tendencies.",
      "Use contractions selectively \u2014 deploy them in moments of casual directness or self-correction ('I don't want to leave that as the final impression') but default to uncontracted forms in expository passages to maintain a measured, essayistic register.",
      "Signal certainty through plain declarative assertion ('It is humbug to pretend this is not a motive') rather than through emphatic language or exclamation.",
      "When expressing uncertainty, use 'I suppose', 'I think', 'I fancy', or 'perhaps' \u2014 hedges that sound like genuine intellectual modesty rather than rhetorical hedging.",
      "Universalize personal experience by shifting from 'I' to 'one' or 'you' or 'he' when moving from autobiography to general claims, creating a sense that the personal case illustrates a universal truth.",
      "Use 'should' in its older British sense (expectation/destiny: 'I should be a writer') to create a tone of resigned inevitability rather than obligation."
    ],
    "do_not": [
      "Do NOT adopt a warm, encouraging, or intimate tone toward the reader \u2014 the stance is collegial but slightly detached, as if thinking aloud in the reader's presence rather than addressing them directly.",
      "Do NOT use self-deprecation as comedy \u2014 self-criticism should be delivered matter-of-factly, as clinical observation ('I was somewhat lonely, and I soon developed disagreeable mannerisms'), not as a bid for sympathy or laughs.",
      "Do NOT use emphatic intensifiers or superlatives to signal conviction \u2014 let the plainness of the statement carry the force."
    ],
    "evidence": [
      "\"All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\"",
      "\"It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write.\"",
      "\"I am not able, and do not want, completely to abandon the world view that I acquired in childhood.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce the central thesis through autobiography \u2014 establish personal experience first, then extract the general principle from it, so the argument feels discovered rather than imposed.",
      "Structure arguments chronologically when dealing with personal development: narrate the sequence of events, then pause to draw an explicit conclusion before moving to the next phase.",
      "When making a bold general claim, follow it immediately with concrete evidence or examples \u2014 never let an abstraction stand alone for more than one sentence.",
      "Acknowledge counterarguments or complications by inserting them as subordinate clauses or parenthetical asides within the main argument, rather than giving them their own paragraph \u2014 this concedes the point without derailing the flow.",
      "Use enumerated lists (i, ii, iii, iv) when presenting a taxonomy or classification, but embed substantial prose exposition under each item rather than leaving them as bare bullet points.",
      "Circle back to earlier points later in the essay, adding new layers \u2014 the logic is recursive, returning to the same themes (egoism, aesthetic pleasure, political purpose) with increasing complexity.",
      "State limitations honestly and explicitly: 'It is not easy', 'The problem of language is subtler and would take too long to discuss' \u2014 acknowledge what the argument cannot cover rather than pretending to be comprehensive."
    ],
    "do_not": [
      "Do NOT build arguments from abstract principles downward \u2014 always ground claims in concrete, specific, often autobiographical evidence first.",
      "Do NOT dismiss opposing views \u2014 instead, concede their partial truth before reasserting the main position ('What he said was true, but I could not have done otherwise').",
      "Do NOT present a neat, resolved conclusion \u2014 leave genuine tension between competing motives or values standing at the end."
    ],
    "evidence": [
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"What he said was true, but I could not have done otherwise. I happened to know, what very few people in England had been allowed to know, that innocent men were being falsely accused.\"",
      "\"Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal or logical marker that situates the reader ('From a very early age', 'When I was about sixteen', 'However, throughout this time') \u2014 each paragraph announces its position in the chronological or argumentative sequence.",
      "Within a paragraph, move from general claim to specific illustration to reflective commentary \u2014 a three-beat pattern of assertion, evidence, interpretation.",
      "Close paragraphs with a sentence that either delivers a verdict on the material just presented or pivots toward the next topic, creating forward momentum.",
      "When a paragraph contains multiple examples, arrange them chronologically and connect them with temporal markers ('At eleven', 'From time to time', 'I also attempted') to create a sense of accumulation.",
      "Use transitional sentences at paragraph openings that explicitly link back to the previous paragraph's conclusion ('I give all this background information because...'), making the logical chain visible.",
      "Allow paragraphs of substantially different lengths \u2014 some develop a single anecdote at length while others deliver a single pivotal claim \u2014 but ensure each paragraph has exactly one governing idea."
    ],
    "do_not": [
      "Do NOT begin paragraphs with the most dramatic or surprising element \u2014 build toward the strong statement rather than leading with it.",
      "Do NOT use paragraphs as mere containers for lists of facts \u2014 every paragraph must contain some interpretive or reflective element that tells the reader what the facts mean.",
      "Do NOT transition between paragraphs with abrupt topic shifts \u2014 always provide at least a subordinate clause or phrase that bridges to the new subject."
    ],
    "evidence": [
      "\"However, throughout this time I did in a sense engage in literary activities. To begin with there was the made-to-order stuff which I produced quickly, easily and without much pleasure to myself.\"",
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development. His subject matter will be determined by the age he lives in...\"",
      "\"Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use analogy and simile drawn from everyday physical experience to make abstract ideas vivid and concrete: 'Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness'; 'Good prose is like a windowpane.'",
      "Deploy anaphora and parallel structure when building lists of related items \u2014 repeat the grammatical frame ('Desire to...', 'Desire to...', 'Desire to...') to create a cadence of accumulation.",
      "Use 'etc., etc.' deliberately to signal that a list could continue but the point is already made \u2014 this creates a tone of weary comprehensiveness rather than exhaustive pedantry.",
      "Employ antithesis to crystallize tensions: set two opposing forces, values, or impulses against each other in balanced clause structures ('directly or indirectly, against totalitarianism and for democratic socialism').",
      "Use direct quotation \u2014 of others' speech and of one's own inner monologue \u2014 to dramatize moments of conflict or realization rather than merely reporting them.",
      "Embed Latin abbreviations and literary references ('vers d'occasion', 'i.e.', references to Blake, Milton, Aristophanes) casually, without explanation, as markers of an educated but unpretentious voice.",
      "Use rhetorical questions sparingly and only at genuine pivot points in the argument, not as decorative flourishes."
    ],
    "do_not": [
      "Do NOT use extended metaphors that run for multiple sentences \u2014 keep figurative language compressed into single phrases or clauses, then return immediately to plain statement.",
      "Do NOT use pop culture references or contemporary analogies \u2014 draw comparisons from literature, physical sensation, or common human experience.",
      "Do NOT repeat key words for emphasis within the same sentence \u2014 instead, use synonym variation or restructure to avoid the appearance of carelessness, except when deliberate repetition serves a rhetorical purpose (as in lists)."
    ],
    "evidence": [
      "\"Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness. One would never undertake such a thing if one were not driven on by some demon whom one can neither resist nor understand.\"",
      "\"Good prose is like a windowpane.\"",
      "\"Desire to seem clever, to be talked about, to be remembered after death, to get your own back on the grown-ups who snubbed you in childhood, etc., etc.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open an essay with a plain autobiographical declaration that states the central fact simply and without fanfare \u2014 drop the reader into the story at its earliest relevant point.",
      "Establish the essay's scope in the opening paragraph: signal what will be explored (personal history leading to a general thesis) so the reader knows the shape of the argument to come.",
      "Close the essay by deliberately undercutting any impression of resolved certainty \u2014 introduce a final complication, self-correction, or confession that reopens the question just as it seemed settled.",
      "Use the closing paragraph to zoom out from the personal to the universal, ending on a general truth stated with epigrammatic compression.",
      "Include a moment near the end where you explicitly look back at what you've written and correct or qualify the impression it may have given \u2014 a meta-textual honesty move ('Looking back through the last page or two, I see that I have made it appear as though...').",
      "Use formatting \u2014 Roman numeral lists (i), (ii), (iii), (iv) \u2014 for taxonomic sections within the essay, and em dashes with 'i.e.' for inline clarifications.",
      "Use block-quoted poetry or extended quotation as structural punctuation \u2014 to mark a turning point or crystallize an emotional state that prose alone cannot capture."
    ],
    "do_not": [
      "Do NOT open with a provocative question or clever hook \u2014 begin with direct, unadorned statement of fact.",
      "Do NOT close with a neat summary or call to action \u2014 end on a note of honest ambivalence or hard-won partial clarity, leaving unresolved tension visible.",
      "Do NOT use headers, subheadings, or bold text to organize the essay \u2014 let the prose structure and paragraph transitions carry the reader through the argument."
    ],
    "evidence": [
      "\"From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.\"",
      "\"I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed.\"",
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
      "Build sentences that unfold through layered qualification \u2014 introduce a statement, then append clarifying clauses with commas, dashes, or parentheses that refine, correct, or complicate the initial thought, as though the writer is thinking aloud and revising in real time.",
      "Chain clauses with coordinating conjunctions ('and', 'but') to create a cumulative, additive rhythm that mirrors the way memory works \u2014 one detail triggering another in sequence.",
      "Use compound-complex sentences as the default architecture: a main clause followed by one or more subordinate clauses that provide context, qualification, or emotional commentary on the main action.",
      "Interrupt narrative momentum with self-correcting asides \u2014 phrases like 'or something that I took to be', 'that is', 'I forget how', 'at least' \u2014 that signal the fallibility of memory and create an intimate, confessional texture.",
      "When a sentence carries strong emotional weight, precede it with a shorter declarative sentence that sets up the emotional context plainly, then let the longer sentence deliver the full complexity of feeling.",
      "Use participial phrases and absolute constructions to pack physical detail into sentences without breaking narrative flow: 'holding the broken crop', 'weakly snivelling', 'peering upwards out of weak eyes'."
    ],
    "do_not": [
      "Do not write clipped, staccato prose with many consecutive short declarative sentences \u2014 the rhythm should feel expansive and discursive, not telegraphic.",
      "Do not use semicolons to join independent clauses \u2014 prefer commas with coordinating conjunctions or dashes for clause-linking.",
      "Do not front-load sentences with elaborate subordinate clauses before the main clause; instead, lead with the main action and append qualifications afterward."
    ],
    "evidence": [
      "I was now aged eight, so that this was a reversion to a habit which I must have grown out of at least four years earlier.",
      "I had fallen into a chair, weakly snivelling. I remember that this was the only time throughout my boyhood when a beating actually reduced me to tears, and curiously enough I was not even now crying because of the pain.",
      "I merely assumed the 'Mrs Form' was a stern disciplinarian who enjoyed beating people (somehow her appearance seemed to bear this out) and I had an immediate terrifying vision of her arriving for the occasion in full riding kit and armed with a hunting-whip."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the adult self remembering the child self \u2014 maintain a dual perspective where the mature narrator comments on, contextualizes, and occasionally corrects the child's perceptions, but never condescends to the child's suffering.",
      "Adopt a tone that is simultaneously detached and deeply personal: describe humiliating and painful experiences with the clinical precision of a naturalist observing specimens, but allow flashes of raw feeling to break through the surface composure.",
      "Use first person throughout but shift to 'one' or 'you' (generic) when generalizing from personal experience to universal childhood experience, signaling that the observation transcends the individual case.",
      "Express certainty about emotional truths ('I knew', 'I felt', 'there was no doubt') but hedge on factual details of memory ('I forget how', 'I cannot remember whether', 'I believe'). This creates a voice that is authoritative about feelings but honest about facts.",
      "Deploy irony and understatement to handle the most painful material \u2014 the worse the experience, the more measured and controlled the narration should be. Let the reader feel the horror through the gap between what happened and how calmly it is reported.",
      "Use contractions selectively \u2014 employ them in direct speech and in passages of informal reflection, but avoid them when the prose takes on a more analytical or essayistic register.",
      "Maintain an earnest, morally serious stance \u2014 the narrator is genuinely trying to understand what happened and what it meant, not performing outrage or seeking pity."
    ],
    "do_not": [
      "Do not adopt a tone of self-pity or victimhood \u2014 the narrator examines suffering as a specimen, not as a plea for sympathy.",
      "Do not use sarcasm or bitter humor as a dominant mode; irony should be quiet and structural, embedded in the juxtaposition of adult understanding and childhood helplessness.",
      "Do not break the retrospective frame to editorialize in a polemical or angry register \u2014 maintain the steady, ruminative tone even when describing injustice."
    ],
    "evidence": [
      "The beating did not hurt (perhaps, as it was the first time, he was not hitting me very hard), and I walked out feeling very much better.",
      "In general, one's memories of any period must necessarily weaken as one moves away from it. One is constantly learning new facts, and old ones have to drop out to make way for them.",
      "I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane: I must have had glimpses of it even before I left home, for my early childhood had not been altogether happy."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments through narrative \u2014 make philosophical and moral points emerge organically from the telling of specific episodes rather than stating them as abstract propositions first.",
      "Move from concrete anecdote to general principle: narrate an incident in full sensory and emotional detail, then step back to articulate the lesson or insight the episode illustrates.",
      "Introduce claims through the logic of memory itself \u2014 'I remember', 'I realized later', 'it was only when' \u2014 so that understanding appears as something discovered gradually rather than possessed from the start.",
      "Handle counterarguments and complications by embedding them within the narrative flow as self-corrections and qualifications: 'I must say that these scenes were not frequent', 'It is a mistake to think such methods do not work'.",
      "Use the pattern of presenting the child's misunderstanding first, then revealing the adult's corrected understanding, as a recurring logical structure that creates both dramatic irony and intellectual development.",
      "Connect episodes not through strict chronology but through thematic association \u2014 move from one incident to another because they illuminate the same principle, using transitional phrases like 'So much for', 'But there is one more thing to be remarked', 'Here is an example'.",
      "When making a psychological observation, support it with a specific remembered incident, complete with dialogue, physical detail, and the child's emotional response, rather than with abstract reasoning alone."
    ],
    "do_not": [
      "Do not present arguments as syllogisms or numbered points \u2014 insight must arise from the texture of lived experience.",
      "Do not use hedging to weaken genuine convictions; hedges should apply only to factual uncertainties of memory, never to moral or emotional truths.",
      "Do not separate analysis from narrative into distinct sections \u2014 weave reflection into the story so that the reader discovers the meaning alongside the narrator."
    ],
    "evidence": [
      "I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question. It was possible, therefore, to commit a sin without knowing that you committed it, without wanting to commit it, and without being able to avoid it.",
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked. This is that I did not wet my bed again \u2014 at least, I did wet it once again, and received another beating, after which the trouble stopped.",
      "To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember that the child has little sense of proportion or probability."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear narrative or thematic anchor \u2014 a temporal marker ('Soon after I arrived'), a scene-setting detail ('When I arrived to report myself'), or a transitional statement that links back to what came before ('A little later, I forget how').",
      "Structure paragraphs as miniature narratives: establish a situation, develop it through accumulating detail, and close with a reflection, emotional realization, or pivot to the next episode.",
      "Allow paragraphs to grow long when narrating a continuous scene \u2014 do not break a unified dramatic episode across multiple paragraphs merely for visual spacing. The paragraph boundary should mark a genuine shift in time, setting, or focus.",
      "Close paragraphs with sentences that carry interpretive or emotional weight \u2014 the final sentence should land as a conclusion, a quiet revelation, or a turn toward the next idea, not trail off into incidental detail.",
      "Use single-sentence paragraphs only for moments of high drama, especially direct speech that carries emotional force, or for stark transitional statements that mark a shift in the essay's focus.",
      "Connect paragraphs through implicit thematic continuity rather than explicit transition words \u2014 the reader should feel the associative logic of memory carrying them from one paragraph to the next."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences that announce what the paragraph will argue \u2014 enter through narrative action or scene-setting instead.",
      "Do not end paragraphs on inconsequential details; always close on a note of significance, whether emotional, ironic, or analytical.",
      "Do not fragment unified scenes into many short paragraphs \u2014 let the paragraph contain the full arc of an episode when the episode is continuous."
    ],
    "evidence": [
      "'REPORT YOURSELF to the Headmaster after breakfast!'",
      "I put REPORT YOURSELF in capitals because that was how it appeared in my mind. I do not know how many times I heard that phrase during my early years at St Cyprian's.",
      "This acceptance of guilt lay unnoticed in my memory for twenty or thirty years."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and similes drawn from the physical, everyday world to illuminate psychological states: compare mental processes to bodily sensations, animals, mechanical objects, or domestic scenes rather than to literary or mythological references.",
      "Deploy lists and accumulations to build a sense of overwhelming detail \u2014 pile up specific examples (names, places, objects, phrases) to recreate the density and relentlessness of the experience being described.",
      "Use direct quotation extensively \u2014 reproduce dialogue and remembered phrases verbatim (or as close to verbatim as memory allows) to bring scenes alive and let characters reveal themselves through their own words.",
      "Employ parenthetical asides as a signature device \u2014 use parentheses and dashes to insert corrections, qualifications, and secondary observations that create the texture of a mind actively sifting through memory.",
      "Use repetition of key words and phrases across paragraphs ('bed-wetting', 'report yourself', 'forty pounds a year', 'your parents wouldn't be able to afford it') to create thematic echoes and show how certain phrases became lodged in the child's consciousness.",
      "Use rhetorical questions sparingly and only when genuinely dramatizing the interrogation the narrator is performing on his own past \u2014 never as a decorative flourish.",
      "Deploy the catalogue or inventory (of school customs, types of boys, educational practices) as a way of building up a comprehensive portrait of an institution or social world."
    ],
    "do_not": [
      "Do not use metaphors that call attention to their own cleverness \u2014 figurative language should feel natural, almost offhand, as though it simply occurred to the narrator as the most accurate way to describe something.",
      "Do not use exclamatory rhetoric or dramatic apostrophe \u2014 emotional intensity should come from understatement and precise detail, not from raised voice.",
      "Do not employ alliteration, assonance, or other sound-based devices conspicuously \u2014 the prose should sound like careful speech, not like poetry."
    ],
    "evidence": [
      "Sambo was flogging him towards the goal as one might do with a foundered horse.",
      "He would tap away at one's skull with his silver pencil, which, in my memory, seems to have been about the size of a banana, and which certainly was heavy enough to raise a bump.",
      "'You know you're not going to grow up with money, don't you? Your people aren't rich. You must learn to be sensible. Don't get above yourself!'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by plunging directly into a specific autobiographical episode \u2014 no abstract framing, no thesis statement, no scene-setting preamble. Begin with a concrete event and let the larger themes emerge from it.",
      "Establish the temporal and institutional setting quickly but embed it within the narrative rather than presenting it as exposition: 'Soon after I arrived at St Cyprian's' does both at once.",
      "Close major sections with a summative sentence that pulls back from the narrative to deliver a moral, psychological, or philosophical insight \u2014 a sentence that feels like the conclusion the entire episode was building toward.",
      "Use transitional passages between major sections that explicitly signal the shift ('So much for the episode of the bed-wetting') in a matter-of-fact, almost bureaucratic tone that contrasts with the emotional intensity of the narrative.",
      "Format direct speech as its own paragraph when it carries dramatic weight, especially when reproducing the exact words of authority figures. Use quotation marks for dialogue and italics or capitals for words that carried special force in the child's mind.",
      "Use parenthetical asides enclosed in actual parentheses for factual corrections and explanatory notes; use em dashes for emotional or dramatic asides within sentences.",
      "Follow the memoir-essay hybrid form: alternate between sustained narrative passages (telling specific stories) and reflective passages (analyzing what those stories mean), with the narrative always grounding and earning the reflection.",
      "When introducing a new character, provide a brief but vivid physical description that doubles as a moral or psychological portrait \u2014 make appearance reveal character."
    ],
    "do_not": [
      "Do not open with a generalization or abstract claim \u2014 always enter through the particular and the concrete.",
      "Do not close sections with forward-looking teasers or cliffhangers designed to manufacture suspense \u2014 the narrative should feel driven by the need to understand, not by plot mechanics.",
      "Do not use headers, bullet points, or any structural formatting beyond paragraph breaks \u2014 the essay should flow as continuous prose, organized by the movement of thought and memory rather than by imposed structure."
    ],
    "evidence": [
      "Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.",
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "She was a stocky square-built woman with hard red cheeks, a flat top to her head, prominent brows and deep-set, suspicious eyes."
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
  "one_line_description": "formal-conversational, confessional, analytic \u2014 plain-spoken moral authority grounded in concrete physical detail and unflinching self-examination",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as compound or compound-complex, chaining clauses with commas and coordinating conjunctions (and, but, or) to create a rolling, discursive momentum that mimics the movement of thought.",
      "Use participial phrases, absolute constructions, and gerund phrases to compress secondary actions and physical details into the main sentence without starting new ones.",
      "Place the most important or surprising element at the END of a long sentence, so accumulated clauses build toward the payoff rather than away from it.",
      "Follow a long, elaborated sentence with a short, flat declarative to land the point with blunt force \u2014 the shift in sentence shape IS the emphasis.",
      "Interrupt sentences with em dashes or parenthetical phrases to insert clarifications, self-corrections, or caveats mid-stream, creating a texture of thought revising itself in real time.",
      "When cataloguing examples or building extended arguments, stack phrases with commas in accumulative series, letting the weight of evidence become overwhelming through sheer volume.",
      "Open sentences with temporal, spatial, or conditional markers (When, At that moment, If) to anchor the reader before unfolding the main clause.",
      "Use colons to split a sentence into claim and elaboration \u2014 the first half states the thesis, the second half unpacks it."
    ],
    "do_not": [
      "Do not write a series of sentences that are all the same length or structure \u2014 monotonous rhythm deadens the argument.",
      "Do not use sentence fragments for dramatic effect or stylistic flair \u2014 every sentence must be grammatically complete, even the short ones.",
      "Do not front-load sentences with abstract nominalizations as subjects \u2014 ground sentences in concrete subjects (I, he, the crowd, the elephant) doing concrete things.",
      "Do not use ellipses or trailing punctuation to suggest unfinished thought \u2014 finish the thought, then stop."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person with unflinching honesty about personal failings, vanity, and contradictions \u2014 present yourself as a flawed specimen being examined, not as an authority dispensing wisdom.",
      "Maintain a tone that is simultaneously confessional and authoritative \u2014 admit weakness, confusion, and moral failure, but narrate with total command of the scene and the argument.",
      "Use contractions freely in conversational and reflective passages to keep the voice colloquial, but drop them when the sentence demands a more measured, emphatic cadence.",
      "Signal certainty through flat declarative statements without hedging (political writing is bad writing). Reserve hedges (probably, I think, I suppose) for moments of genuine uncertainty or factual details of memory.",
      "Address the reader directly with 'you' sparingly \u2014 at moments of practical advice or to implicate the reader in the argument.",
      "Universalize personal experience by shifting from 'I' to 'one' or 'you' when moving from autobiography to general claims, signaling that the personal case illustrates a universal truth.",
      "Express irony and moral complexity through understatement \u2014 let the gap between what is said flatly and what is obviously terrible do the emotional work.",
      "Adopt the stance of the engaged, somewhat exasperated moral witness \u2014 someone who cares deeply, is frustrated by malpractice, but still believes understanding is possible."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, or academic register \u2014 always sound like a person with a stake in the argument.",
      "Do not use sentimental or emotionally inflated language \u2014 keep moral horror expressed through concrete description, not adjective-heavy editorializing.",
      "Do not use self-deprecation as comedy \u2014 self-criticism should be delivered matter-of-factly, as clinical observation, not as a bid for sympathy or laughs.",
      "Do not use emphatic intensifiers or superlatives to signal conviction \u2014 let the plainness of the statement carry the force."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Anchor abstract arguments with concrete, physical analogies drawn from everyday life \u2014 drinking and failure, prefabricated hen-houses, tea leaves blocking a sink, a foundered horse.",
      "Build arguments through a dialectical or narrative pattern: present the problem or incident, show examples or evidence, diagnose the cause or extract the insight, then propose a remedy or implication \u2014 always in that order.",
      "Use extended demonstration as evidence \u2014 rather than merely asserting, quote at length, narrate in full detail, translate or parody, then dissect piece by piece.",
      "Acknowledge counterarguments and your own imperfections before the reader can raise them, then pivot to show why the core point still holds.",
      "Move between the specific incident and the universal principle, using the incident as evidence and returning to it whenever the abstract claim needs grounding.",
      "Introduce claims through the logic of experience and memory \u2014 understanding appears as something discovered gradually through witness, not possessed from the start.",
      "When making a bold general claim, follow it immediately with concrete evidence \u2014 never let an abstraction stand alone for more than one sentence."
    ],
    "do_not": [
      "Do not make claims without immediately demonstrating them through quoted examples, analogies, narrative, or parodies.",
      "Do not leave arguments at the level of abstraction \u2014 always ground each claim in a concrete illustration.",
      "Do not resolve moral ambiguity neatly \u2014 leave the reader sitting with contradiction, as the author sits with it.",
      "Do not rely on appeals to authority or citation alone \u2014 show through direct experience and demonstration, don't just tell."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear anchor \u2014 a temporal marker, a shift in scene, a transitional statement, or a declaration of the narrator's state of mind that tells the reader where they now stand.",
      "Organize paragraphs as miniature arguments or scenes: set up with a governing assertion or situation, develop with examples or accumulated detail, close with a sentence that crystallizes the point or pivots forward.",
      "Close paragraphs with sentences that carry thematic weight \u2014 a generalization drawn from preceding detail, an ironic reversal, a memorable image, or a pivot to the next complication.",
      "Connect paragraphs through logical or chronological sequencing \u2014 each paragraph's opening either extends, contrasts with, or answers the previous paragraph's closing thought.",
      "When a paragraph contains a list of examples, embed them in running prose rather than breaking into bullet points \u2014 weave examples into the sentence fabric with commas and semicolons.",
      "Allow paragraphs of substantially different lengths \u2014 some develop a single anecdote at length while others deliver a single pivotal claim \u2014 but ensure each paragraph has exactly one governing idea.",
      "Use 'But' at the start of paragraphs to create dialectical turns \u2014 state a position in one paragraph, then open the next with 'But' to introduce the complicating counterforce."
    ],
    "do_not": [
      "Do not start consecutive paragraphs with the same syntactic pattern \u2014 vary openings between declarations, transitions, temporal markers, and qualifications.",
      "Do not let a paragraph become a mere list of examples without a governing assertion and a concluding implication.",
      "Do not use explicit transition phrases like 'Furthermore,' 'In addition,' 'Moreover' as a primary connective device \u2014 let temporal, spatial, and logical sequence provide the tissue."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Build vivid, original analogies and similes from concrete, physical, everyday imagery \u2014 domestic objects, animals, machinery, bodily sensation \u2014 rather than literary or intellectual sources.",
      "Deploy lists and catalogues as rhetorical weapons \u2014 heap up specific examples to overwhelm the reader with the sheer volume and density of the evidence.",
      "Use parallel structure within sentences to create emphasis through repetition of syntactic form \u2014 repeat the grammatical frame to build a cadence of accumulation.",
      "Employ antithesis and contrast to crystallize tensions \u2014 place good prose beside bad prose, Saxon words beside Latin words, the mundane beside the terrible, to sharpen distinctions through direct juxtaposition.",
      "Use direct address and imperatives sparingly to break the fourth wall and activate the reader: 'Consider for instance,' 'Look again at the examples.'",
      "Use the device of self-implication \u2014 include yourself among those who commit the fault you criticize, to avoid sanctimony and strengthen credibility.",
      "Deploy parenthetical asides (in parentheses or dashes) as a signature device to insert corrections, qualifications, dark humor, and secondary observations that create the texture of a mind actively sifting.",
      "Use direct quotation and reproduced dialogue extensively to bring scenes alive and let characters reveal themselves through their own words."
    ],
    "do_not": [
      "Do not use stale metaphors, clich\u00e9d similes, or idioms that have become automatic \u2014 practice what you preach about clear language.",
      "Do not use metaphors that are literary, ornate, or self-consciously poetic \u2014 keep figurative language rooted in the physical and the mundane.",
      "Do not employ alliteration, assonance, or other sound-based devices conspicuously \u2014 the prose should sound like careful speech, not like poetry.",
      "Do not overuse any single device \u2014 rotate between analogy, example, direct address, catalogue, contrast, and quotation."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a plain declarative sentence that immediately establishes the situation, the narrator's position within it, and often an ironic or self-aware note \u2014 state the premise and complicate it in the same breath.",
      "Establish context and stakes in the opening paragraphs \u2014 the reader must understand where, who, and what's at stake before the argument or narrative develops.",
      "Close the essay by deliberately undercutting any impression of resolved certainty \u2014 introduce a final complication, self-correction, or confession that reopens the question just as it seemed settled.",
      "End on a note that connects the specific subject to larger stakes \u2014 broaden the frame in the final paragraph to show that the essay's concern is not merely local but existential or universal.",
      "Use em dashes liberally throughout for mid-sentence interruptions, elaborations, and dramatic pauses \u2014 they are a signature punctuation mark creating a conversational, digressive rhythm.",
      "Avoid all formatting beyond plain paragraphs and occasional Roman numeral lists: no headers, no bold, no italics for emphasis, no bullet points. The essay is a continuous spoken voice on the page.",
      "Follow the essay-narrative hybrid form: alternate between sustained narrative passages and reflective passages, with the narrative always grounding and earning the reflection."
    ],
    "do_not": [
      "Do not open with a provocative question, a quotation from another source, or a scene in medias res \u2014 begin with a direct statement of situation or fact.",
      "Do not close with a neat summary, a call to action, or vague inspiration \u2014 end with retrospective self-examination, honest ambivalence, or epigrammatic compression that leaves tension visible.",
      "Do not use any typographical emphasis (bold, italic, underline) to signal importance \u2014 let word choice and sentence position do that work."
    ]
  },
  "signature_phrases": {
    "use": [
      "I think",
      "I suppose",
      "I fancy",
      "I knew that",
      "I perceived",
      "It is curious",
      "It is true that",
      "In a sense",
      "one might",
      "one could",
      "one has to",
      "as it were",
      "of course",
      "in reality",
      "the point is",
      "the truth is",
      "the thing that",
      "a sort of",
      "a kind of",
      "on the other hand",
      "that is to say",
      "in other words",
      "etc., etc.",
      "needless to say",
      "I do not want",
      "It is not easy",
      "sooner or later"
    ],
    "never_use": [
      "incredibly",
      "absolutely",
      "literally",
      "basically",
      "actually",
      "amazing",
      "awesome",
      "stakeholder",
      "leverage",
      "synergy",
      "paradigm",
      "unpack",
      "journey",
      "space",
      "narrative",
      "robust",
      "impactful",
      "nuanced",
      "problematic",
      "deeply",
      "frankly",
      "Let me be clear",
      "At the end of the day",
      "It goes without saying",
      "Having said that",
      "To be honest"
    ]
  },
  "revision_guidance": [
    "Replace abstract nominalizations with concrete subjects performing concrete actions \u2014 turn 'the implementation of the policy resulted in' into 'they implemented the policy and'.",
    "Convert passive constructions to active where possible \u2014 'mistakes were made' becomes 'I made mistakes'.",
    "Replace furthermore, moreover, additionally with but, and, or a full stop \u2014 use Anglo-Saxon connectives, not Latinate ones.",
    "Break any sentence that has lost its way into two sentences at the natural hinge point \u2014 if you cannot see the main verb easily, the sentence is too tangled.",
    "Replace literary or ornate metaphors with analogies drawn from physical, everyday, mechanical experience.",
    "Strip out emphatic intensifiers (very, extremely, incredibly, absolutely) \u2014 if the statement needs intensifying, rewrite it to be inherently stronger.",
    "Where you find a hedge that weakens a genuine conviction, remove it; where you find a bald assertion about uncertain facts, add a hedge \u2014 hedge facts, not beliefs.",
    "Replace any clich\u00e9 or dead metaphor with either a fresh concrete image or plain literal statement.",
    "If a paragraph lacks a concrete example, add one; if it lacks a governing assertion, add one \u2014 every paragraph needs both.",
    "Convert bullet points and numbered lists back into flowing prose with embedded examples connected by commas and conjunctions."
  ]
}
```