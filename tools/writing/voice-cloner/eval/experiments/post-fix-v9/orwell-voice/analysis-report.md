# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** earnest, plainspoken, morally serious — confessional authority grounded in concrete evidence and cumulative compound-complex prose

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
      "Build sentences that unfold through layers of qualification and elaboration \u2014 start with a main claim, then append subordinate clauses, parenthetical asides, and illustrative examples within the same sentence using commas, dashes, and semicolons.",
      "Chain clauses with coordinating conjunctions ('and', 'but') to create extended, cumulative sentences that mimic the unfolding of a thought process, as if reasoning aloud on paper.",
      "Use compound-complex sentences as the default mode \u2014 combine at least two independent clauses with one or more dependent clauses to build dense, argumentative units.",
      "Deploy short declarative sentences as punctuation marks after long, elaborated passages to land a point with force, creating a rhythmic contrast that snaps the reader to attention.",
      "Use colons and semicolons to yoke related ideas within a single sentence rather than splitting them across two sentences \u2014 the colon introduces a consequence or elaboration, the semicolon joins parallel observations.",
      "When listing examples or cataloguing faults, embed the list within the sentence itself using commas rather than breaking into bullet points, maintaining prose momentum."
    ],
    "do_not": [
      "Do not write in consistently short, clipped sentences \u2014 the prose must breathe through extended, multi-clause constructions as its baseline.",
      "Do not front-load sentences with adverbial or participial phrases as a habitual opener; instead, lead with the subject or a transitional word ('But', 'Now', 'Yet') and let complexity build after the main clause.",
      "Do not use sentence fragments for stylistic effect \u2014 every sentence must be grammatically complete, even the short emphatic ones."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.\"",
      "\"It consists in gumming together long strips of words which have already been set in order by someone else, and making the results presentable by sheer humbug.\"",
      "\"The point is that the process is reversible.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from first person ('I') as a confident, opinionated authority who has examined the evidence and reached firm conclusions \u2014 but present those conclusions as the product of reasoning, not mere assertion.",
      "Address the reader directly with 'you' and inclusively with 'we' and 'one' to create a sense of shared intellectual responsibility \u2014 the reader is a fellow thinker being enlisted in the argument, not a student being lectured.",
      "Use 'one' as an impersonal pronoun when stating general principles or universal observations, shifting to 'I' for personal judgments and 'you' when challenging the reader to act or self-examine.",
      "Maintain an earnest, morally serious tone throughout \u2014 the subject matter demands urgency, and the writer treats it as a matter of civic duty, not academic exercise.",
      "Signal confidence through directness ('The great enemy of clear language is insincerity') rather than through hedging then overriding the hedge. When uncertain, state the uncertainty plainly ('this is a guess which I have not sufficient knowledge to verify').",
      "Use contractions naturally in argumentative passages to maintain conversational directness, but omit them in more formal declarative statements to lend gravity.",
      "Practice self-aware honesty \u2014 acknowledge your own susceptibility to the very faults you criticize, which strengthens rather than undermines your authority."
    ],
    "do_not": [
      "Do not adopt a detached, academic tone \u2014 the voice must be engaged, opinionated, and plainspoken even when discussing complex ideas.",
      "Do not use false modesty or excessive hedging \u2014 state your position clearly and let the reasoning carry the weight.",
      "Do not be sarcastic or snide toward the reader; reserve sharp wit and scorn for the bad writing practices themselves and for unnamed 'hacks' and exemplars of poor style."
    ],
    "evidence": [
      "\"Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.\"",
      "\"I should expect to find \u2014 this is a guess which I have not sufficient knowledge to verify \u2014 that the German, Russian and Italian languages have all deteriorated in the last ten or fifteen years, as a result of dictatorship.\"",
      "\"In our age there is no such thing as 'keeping out of politics'.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a widely-held assumption or conventional wisdom, then immediately challenge or complicate it \u2014 use the common belief as a springboard to introduce your real thesis.",
      "Build arguments through a diagnosis-then-prescription structure: first demonstrate the problem with extensive evidence and examples, then offer concrete remedies.",
      "Use vivid analogies drawn from everyday physical experience to make abstract points tangible \u2014 compare linguistic decay to alcoholism, prefabricated phrases to hen-house sections, Latin words to soft snow blurring outlines.",
      "Present concrete specimens and examples as the backbone of your argument \u2014 quote, number, and refer back to real passages rather than arguing in the abstract.",
      "Construct arguments that loop back on themselves recursively: state a thesis, develop it, introduce complications, then return to the original thesis with greater force and nuance.",
      "Handle counterarguments by stating them fairly ('Those who deny this would argue...') and then conceding what is valid before showing where the objection breaks down.",
      "Use parody and translation (rewriting good prose into bad prose, or vice versa) as a form of evidence \u2014 let the contrast between two versions make the argument more powerfully than assertion could."
    ],
    "do_not": [
      "Do not argue purely from abstract principle without concrete illustration \u2014 every claim must be anchored to a specific example, quotation, or demonstration.",
      "Do not dismiss counterarguments without engaging them \u2014 acknowledge their partial truth before refuting their conclusion.",
      "Do not pile up authorities or citations as proof; rely instead on the reader's own ability to see the evidence once it is laid before them."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks. It is rather the same thing that is happening to the English language.\"",
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"I am going to translate a passage of good English into modern English of the worst sort.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear thesis or transitional claim that announces the paragraph's purpose \u2014 the first sentence should orient the reader immediately.",
      "Develop paragraphs by layering evidence: state a principle, then illustrate with examples, then draw out the implication, creating a claim-evidence-implication sandwich.",
      "Close paragraphs by either pivoting to the next idea ('I will come back to this presently') or by landing a strong, conclusive statement that encapsulates the paragraph's point.",
      "Use explicit connective phrases between paragraphs ('Now that I have made this catalogue...', 'As I have tried to show...', 'I said earlier that...') to signal the logical relationship between sections.",
      "Allow certain paragraphs to function as catalogues or taxonomies \u2014 organize subtopics under bold section headers (e.g., 'DYING METAPHORS', 'PRETENTIOUS DICTION') when presenting a systematic breakdown.",
      "Sequence ideas within a paragraph from general to specific: begin with the broad observation, narrow to particular instances, then widen back to the general significance."
    ],
    "do_not": [
      "Do not begin paragraphs with examples or evidence before establishing the claim they support \u2014 lead with the idea, then illustrate.",
      "Do not leave paragraphs without a clear logical connection to what precedes and follows \u2014 the reader should never wonder 'why is this here now?'",
      "Do not use abrupt or unmarked transitions between major sections; use explicit signposting or header labels."
    ],
    "evidence": [
      "\"Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.\"",
      "\"As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer.\"",
      "\"I said earlier that the decadence of our language is probably curable.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies and similes drawn from concrete, physical, everyday domains to illuminate abstract arguments \u2014 cuttlefish spurting ink, cavalry horses answering the bugle, tea leaves blocking a sink.",
      "Deploy the technique of contrastive juxtaposition: place a good example beside a bad one and let the reader feel the difference rather than merely being told about it.",
      "Use catalogue-style enumeration embedded in prose (listing examples separated by commas within a sentence) to build a cumulative, overwhelming case.",
      "Employ rhetorical questions sparingly and pointedly \u2014 use them to challenge the reader or expose an absurdity ('what is a \"rift\", for instance?'), not as a decorative tic.",
      "Use direct imperatives and commands ('Look again', 'Consider for instance', 'Never use') when delivering prescriptive advice \u2014 address the reader as someone capable of action.",
      "Repeat key phrases and structural patterns (anaphora) within a paragraph to build rhythmic intensity, especially when cataloguing faults: 'Defenceless villages are bombarded... the inhabitants driven out... the cattle machine-gunned... the huts set on fire'.",
      "Use scare quotes around words and phrases to flag them as suspect, hollow, or dishonest \u2014 this signals that the word itself is the problem, not just how it is used."
    ],
    "do_not": [
      "Do not use literary or highbrow allusions as the primary source of analogies \u2014 prefer analogies from physical life, manual labor, nature, and everyday objects.",
      "Do not employ metaphors that are themselves 'dying' or clich\u00e9d \u2014 practice what you preach by inventing fresh figurative language.",
      "Do not use exclamation marks to generate emphasis \u2014 let the force of the words and sentence structure do the work."
    ],
    "evidence": [
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"...like a cuttlefish spurting out ink.\"",
      "\"Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by identifying a widely-held but wrong assumption, then immediately destabilize it \u2014 the first paragraph should set up the conventional view so that the rest of the essay can dismantle it.",
      "Establish the stakes early: make clear in the opening paragraphs why the topic matters beyond its surface subject \u2014 connect language to politics, thought, and civic life within the first few sentences.",
      "Promise a return ('I will come back to this presently') and deliver on it \u2014 create structural callbacks that reward attentive readers and give the essay a sense of planned architecture.",
      "Close with concrete, numbered rules or a clear prescriptive list that distills the essay's argument into actionable directives \u2014 then immediately qualify or complicate the rules with a final caveat that prevents dogmatism.",
      "End the essay by zooming out from the specific topic to its broader political and moral implications \u2014 the final paragraph should connect the essay's argument to the largest possible stakes.",
      "Use ALL-CAPS headers (e.g., 'DYING METAPHORS') to label taxonomic sections within the body of the essay, creating a quasi-scientific organizational structure within a fundamentally argumentative and literary form.",
      "Use em dashes for parenthetical asides and qualifications within sentences, and use parenthetical numbers (1), (2), etc. to cross-reference examples introduced earlier in the essay.",
      "Format prescriptive rules as standalone single-sentence paragraphs for maximum emphasis and clarity \u2014 isolate each rule on its own line."
    ],
    "do_not": [
      "Do not open with a personal anecdote or narrative scene \u2014 begin with ideas, not stories.",
      "Do not close on an ambiguous or open-ended note that leaves the reader without direction \u2014 the ending must point toward action, even if it acknowledges complexity.",
      "Do not bury the prescriptive payoff deep in the essay without structural emphasis \u2014 when you arrive at concrete advice, make it visually and rhetorically distinct from the surrounding argument."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.\"",
      "\"...one ought to recognise that the present political chaos is connected with the decay of language, and that one can probably bring about some improvement by starting at the verbal end.\""
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
      "Build default sentences by chaining multiple independent clauses with 'and' and 'but', layering details and qualifications onto a single grammatical spine \u2014 let the sentence accumulate meaning rather than delivering it in one strike.",
      "Use compound-complex sentences as the workhorse structure: start with a main clause, attach subordinate context ('when', 'if', 'as', 'which'), then extend with another main clause joined by a conjunction.",
      "Deploy parenthetical asides \u2014 in dashes, parentheses, or appositional phrases \u2014 to inject commentary, clarification, or self-correction mid-sentence without breaking the forward momentum: 'I took my rifle, an old .44 Winchester and much too small to kill an elephant, but I thought the noise might be useful in terrorem.'",
      "When narrating action, shift to shorter, declarative sentences that land flatly and factually, creating a deadpan effect: 'I got up.' 'This happened more than once.'",
      "Chain concrete physical details in catalogue-like sequences using commas and semicolons before landing on a summarizing emotional or moral clause: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos \u2014 all these oppressed me with an intolerable sense of guilt.'"
    ],
    "do_not": [
      "Do NOT write sentences that are structurally uniform \u2014 never let three or more consecutive sentences share the same clause pattern or length.",
      "Do NOT use sentence fragments for rhetorical emphasis or stylistic flair; every sentence should be grammatically complete, even the short ones.",
      "Do NOT front-load sentences with adverbial modifiers or participial phrases as a habitual opener \u2014 lead with the subject or a brief situating phrase, then build outward."
    ],
    "evidence": [
      "I was sub-divisional police officer of the town, and in an aimless, petty kind of way anti-European feeling was very bitter.",
      "He neither stirred nor fell, but every line of his body had altered.",
      "I got up."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a participant-narrator who is simultaneously inside the experience and judging it from a later, wiser vantage \u2014 use past tense narration with present-tense interjections for moral commentary: 'I thought then and I think now.'",
      "Maintain a tone that is confessional yet unsentimental \u2014 admit to ugly feelings (rage, cowardice, relief at a man's death) without self-pity or apology, as if simply recording an honest inventory.",
      "Project an anti-heroic stance: undercut your own authority and competence at every turn \u2014 describe yourself as foolish, trapped, incompetent, or acting against your own convictions.",
      "Use contractions freely in narrative and reflective passages to sustain a conversational, spoken quality \u2014 'I didn't', 'couldn't', 'mustn't' \u2014 but shift to uncontracted forms when making formal moral pronouncements or generalizations: 'it is the condition of his rule that he shall spend his life in trying to impress the natives'.",
      "Address the reader directly with casual imperatives and asides that assume shared experience or invite complicity: 'ask any Anglo-Indian official, if you can catch him off duty' and 'Never tell me, by the way, that the dead look peaceful.'",
      "Signal uncertainty through plain, colloquial hedges \u2014 'I dare say', 'I suppose', 'possibly', 'somehow' \u2014 rather than academic qualifiers."
    ],
    "do_not": [
      "Do NOT adopt a neutral, detached, or journalistic tone \u2014 the narrator must always be emotionally implicated and morally conflicted.",
      "Do NOT write with false modesty or performative self-deprecation; the self-criticism must feel genuinely uncomfortable, not charming.",
      "Do NOT moralize from a position of superiority \u2014 present ethical insights as things discovered reluctantly and painfully, not proclaimed."
    ],
    "evidence": [
      "And afterwards I was very glad that the coolie had been killed; it put me legally in the right and it gave me a sufficient pretext for shooting the elephant.",
      "I marched down the hill, looking and feeling a fool, with the rifle over my shoulder and an ever-growing army of people jostling at my heels.",
      "Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments through concrete narrative first, then extract the general principle \u2014 never state the thesis abstractly before grounding it in specific, lived experience. The shooting of the elephant comes before the insight about imperialism destroying the tyrant's freedom.",
      "Introduce the central claim at the moment of experiential revelation, embedded within the narrative rather than separated from it: 'I first grasped the hollowness, the futility of the white man's dominion in the East.'",
      "Present internal contradictions and moral paradoxes without resolving them \u2014 hold two opposing feelings in tension and let the reader sit with the discomfort: hatred of imperialism alongside wanting to bayonet a priest; gladness that a man died because it justified your actions.",
      "Use the movement from particular incident to universal insight as the structural logic: one specific event (the elephant) illuminates an entire system (imperialism, the psychology of power).",
      "Handle counterarguments by embedding them as the narrator's own conflicting impulses rather than as external objections \u2014 the debate is internal, between parts of the narrator's own mind: 'With one part of my mind I thought... with another part I thought.'",
      "Let the logical progression feel reluctant \u2014 use 'but', 'and yet', 'moreover' to show the narrator being dragged toward conclusions he doesn't want to reach."
    ],
    "do_not": [
      "Do NOT present a clean, resolved argument \u2014 the essay must end with moral ambiguity or an uncomfortable admission, not a tidy conclusion.",
      "Do NOT use external authorities, citations, or data to support claims \u2014 all evidence comes from personal observation and felt experience.",
      "Do NOT separate analysis from narrative into distinct sections; the thinking must emerge organically from the telling."
    ],
    "evidence": [
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny, as something clamped down, in saecula saeculorum, upon the will of prostrate peoples; with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts.",
      "Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear situating statement that orients the reader in time, place, or emotional state \u2014 'One day something happened which in a roundabout way was enlightening' or 'But I did not want to shoot the elephant.'",
      "Structure long narrative paragraphs as chains of sequential events connected by 'and', 'but', and temporal markers, building toward a climactic image or revelation at the paragraph's end.",
      "Close paragraphs with a sentence that delivers an emotional punch, a moral observation, or a striking image \u2014 never let a paragraph trail off without a landing: 'The friction of the great beast's foot had stripped the skin from his back as neatly as one skins a rabbit.'",
      "Use paragraph breaks to mark shifts between narrative action, internal reflection, and generalized commentary \u2014 each paragraph should occupy one of these modes as its primary register, even if it touches the others.",
      "Alternate between dense, event-packed narrative paragraphs and shorter reflective paragraphs that pause to process the meaning of what just happened.",
      "Within paragraphs, sequence ideas from external observation inward toward personal feeling or moral judgment \u2014 move from what happened to what it meant."
    ],
    "do_not": [
      "Do NOT begin paragraphs with abstract generalizations that haven't been earned by prior narrative \u2014 the reader must see the experience before hearing the interpretation.",
      "Do NOT let paragraphs consist entirely of reflection without any concrete anchoring detail \u2014 even philosophical passages should include a physical image or sensory particular.",
      "Do NOT use explicit transitional phrases like 'furthermore', 'in addition', or 'on the other hand' between paragraphs \u2014 transitions should emerge from the narrative logic or from a conjunction like 'but' or 'and'."
    ],
    "evidence": [
      "But at that moment I glanced round at the crowd that had followed me.",
      "I had halted on the road. As soon as I saw the elephant I knew with perfect certainty that I ought not to shoot him.",
      "The tortured gasps continued as steadily as the ticking of a clock."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended analogies drawn from everyday, physical experience to illuminate abstract political or psychological points \u2014 compare the elephant's value to machinery, the narrator to a puppet, the crowd's anticipation to a theatre curtain rising.",
      "Deploy catalogues of concrete sensory details in tricolon or longer list structures, connected by commas and culminating in a dash followed by a summarizing emotional clause: 'the stinking cages... the grey, cowed faces... the scarred buttocks \u2014 all these oppressed me.'",
      "Use antithesis to dramatize contradictions \u2014 set up parallel structures that oppose each other: 'seemingly the leading actor of the piece; but in reality I was only an absurd puppet.'",
      "Employ simile sparingly but make each one vivid and physically grounded: 'as neatly as one skins a rabbit', 'as much chance as a toad under a steam-roller', 'like red velvet'.",
      "Use parenthetical asides \u2014 in actual parentheses or set off by dashes \u2014 to insert confessional commentary, self-correction, or darkly ironic observations that disrupt the narrative surface: '(Never tell me, by the way, that the dead look peaceful.)'",
      "Build toward key moments with em-dashes that introduce a restatement, clarification, or amplification of what just came before \u2014 use the dash as a tool for emphasis and redirection rather than mere punctuation."
    ],
    "do_not": [
      "Do NOT use metaphors that are literary, elevated, or poetic \u2014 keep figurative language grounded in the physical and mundane (machinery, animals, mud, theatre).",
      "Do NOT employ rhetorical questions as a persuasive device; when questions appear, they should be genuine narrative questions ('Would I please come and do something about it?') rather than posed for rhetorical effect.",
      "Do NOT use repetition as a rhythmic or incantatory device (no anaphora for its own sake) \u2014 when words or phrases recur, it should be because the narrator is circling back to an unresolved problem, not for musical effect."
    ],
    "evidence": [
      "a deep, low, happy sigh, as of people who see the theatre curtain go up at last, breathed from innumerable throats",
      "He becomes a sort of hollow, posing dummy, the conventionalized figure of a sahib.",
      "I should have about as much chance as a toad under a steam-roller."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, factual statement of situation that immediately establishes the narrator's position and emotional predicament in one or two sentences \u2014 locate the reader in a specific place and a specific feeling: 'In Moulmein, in Lower Burma, I was hated by large numbers of people.'",
      "Follow the opening situating sentence with an ironic or self-undercutting aside that sets the essay's confessional, anti-heroic tone from the very first paragraph.",
      "Structure the essay as a single extended narrative episode framed by broader reflections \u2014 the opening paragraphs establish context and internal conflict, the middle narrates the central incident in close detail, and the closing paragraphs pull back to assess aftermath and meaning.",
      "Close with a short, devastatingly honest final sentence that reframes everything that came before in terms of a petty or uncomfortable personal motive \u2014 undercut any grand interpretation with blunt self-knowledge: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Use the final paragraph to deflate \u2014 after the moral and emotional intensity of the central narrative, end with a clipped, almost offhand admission that is more revealing than any explicit moralizing.",
      "Employ em dashes extensively for parenthetical insertions, dramatic pauses, and restatements. Use parentheses for genuine asides and darkly comic commentary. Use single quotation marks for terms used with ironic distance or reported speech."
    ],
    "do_not": [
      "Do NOT open with a dramatic hook, a provocative question, or an in medias res action scene \u2014 begin with quiet, situating facts that carry an undertow of tension.",
      "Do NOT close with a summary of lessons learned, a call to action, or an uplifting resolution \u2014 the ending must be uncomfortable, honest, and deliberately anticlimactic.",
      "Do NOT use headers, bullet points, or any structural formatting beyond paragraph breaks \u2014 the essay should read as continuous, unbroken prose."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "In the end I could not stand it any longer and went away."
    ]
  }
}
```

### sample-3.txt (1932 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1932,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build default sentences as simple declarative statements with one or two modifying phrases \u2014 subject, verb, object, then a participial or prepositional phrase that adds sensory detail: 'He walked clumsily with his bound arms, but quite steadily, with that bobbing gait of the Indian who never straightens his knees.'",
      "Chain physical observations within a single sentence using commas to create a cinematic tracking effect \u2014 move the eye from one detail to the next in spatial or temporal sequence: 'At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.'",
      "When building toward a moral or emotional insight, extend sentences by stacking subordinate clauses and appositional phrases, letting the grammar itself accumulate weight: 'When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.'",
      "Use em dashes to inject a sudden disruption or dramatic aside into an otherwise steady sentence: 'A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.'",
      "Deploy parallel structure for lists of bodily or sensory details, using present participles to convey ongoing life against the backdrop of death: 'bowels digesting food, skin renewing itself, nails growing, tissues forming \u2014 all toiling away in solemn foolery.'"
    ],
    "do_not": [
      "Do not use periodic sentences that withhold the main clause until the end \u2014 lead with the subject and verb, then elaborate.",
      "Do not chain sentences with semicolons as a primary connective strategy; prefer periods and fresh sentences or comma-spliced parallel clauses.",
      "Do not use inverted syntax or literary affectation in sentence construction \u2014 maintain plain, declarative word order even when the content is emotional."
    ],
    "evidence": [
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.",
      "His nails would still be growing when he stood on the drop, when he was falling through the air with a tenth of a second to live."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who participates in events but withholds explicit moral judgment \u2014 let the described details carry the ethical weight. Present yourself as 'we' (the complicit group) and 'I' (the observing conscience) without ever directly condemning.",
      "Maintain a tone that is calm, precise, and almost clinical in describing horrifying events \u2014 the restraint itself generates the moral force. Never raise your voice rhetorically where the facts are already damning.",
      "Use contractions freely in dialogue and in the narrator's informal observations to maintain a conversational, unheroic register: 'The man ought to have been dead by this time. Aren't you ready yet?'",
      "Signal uncertainty or moral complexity through understated phrasing rather than hedging words \u2014 use 'curious' instead of 'deeply troubling,' 'somehow' instead of elaborate qualification: 'It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.'",
      "Render other characters' speech with phonetic fidelity and distinct verbal tics to reveal their attitudes indirectly \u2014 Francis's 'iss' and 'hass,' the superintendent's clipped impatience."
    ],
    "do_not": [
      "Do not editorialize or insert overt moral commentary \u2014 never write 'this was wrong' or 'how terrible'; let the reader draw that conclusion from the accumulated detail.",
      "Do not adopt an ironic or detached tone that distances you from complicity \u2014 the narrator is part of the group, not above it.",
      "Do not use academic or formal register; avoid Latinate abstractions when Anglo-Saxon words will serve."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "'He's all right,' said the superintendent. He backed out from under the gallows, and blew out a deep breath.",
      "I found that I was laughing quite loudly. Everyone was laughing."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument entirely through narrative accumulation \u2014 do not state a thesis. Instead, arrange scenes so that the meaning emerges from the sequence of concrete events. The prisoner stepping around a puddle becomes the essay's argument without ever being labeled as such.",
      "Place the central insight at approximately the two-thirds mark, introduced as a personal realization rather than a logical proposition: 'It is curious, but till that moment I had never realized...'",
      "Use a single, small, concrete detail as the pivot for the entire argument \u2014 one physical gesture that crystallizes the moral point. Build toward it with scene-setting, then let the essay's remaining scenes radiate outward from that revelation.",
      "After the central insight, shift from the narrator's interiority back to external events \u2014 let the post-climax scenes (the laughter, the drinking, the casual anecdotes about botched hangings) serve as implicit counterargument and ironic commentary without stating the irony.",
      "Use juxtaposition as the primary logical connector: place the jolly breakfast scene immediately after the execution, place laughter beside death, without explaining the connection."
    ],
    "do_not": [
      "Do not state the essay's thesis or moral explicitly \u2014 never write a sentence that begins 'The point is' or 'This shows that.'",
      "Do not use abstract argument structures (premise-evidence-conclusion); instead let the narrative itself be the argument.",
      "Do not resolve the tension at the end \u2014 leave the irony and horror coexisting with the laughter and whisky without reconciliation."
    ],
    "evidence": [
      "And once, in spite of the men who gripped him by each shoulder, he stepped slightly aside to avoid a puddle on the path.",
      "it seemed quite a homely, jolly scene, after the hanging.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete spatial or temporal anchor \u2014 a location, a time marker, or a physical action that orients the reader: 'Eight o'clock struck and a bugle call, desolately thin in the wet air, floated from the distant barracks.'",
      "Within paragraphs, organize details as a camera would \u2014 moving from wide establishing shots to close physical details, or tracking a sequence of actions in chronological order.",
      "Use single-sentence dialogue paragraphs to punctuate longer narrative paragraphs, creating a rhythm of description-speech-description that controls pacing.",
      "Close narrative paragraphs with a detail or image that resonates beyond its literal meaning, functioning as an implicit comment: 'The dead man was a hundred yards away.'",
      "When a paragraph contains the essay's central reflection, let it expand into a longer meditation but keep it grounded in physical specifics \u2014 always return from abstraction to bodily detail ('bowels digesting food, skin renewing itself')."
    ],
    "do_not": [
      "Do not open paragraphs with topic sentences that announce what the paragraph will argue or discuss.",
      "Do not use explicit transition phrases between paragraphs ('Furthermore,' 'In addition,' 'On the other hand') \u2014 let temporal and spatial movement provide the transitions.",
      "Do not end paragraphs with summary statements that explain what the reader should have understood."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "'Well, quick march, then. The prisoners can't get their breakfast till this job's over.'"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes that compare human situations to mundane or slightly degrading objects \u2014 this creates the essay's characteristic effect of making the extraordinary feel banal and the banal feel sinister: 'like yellow tinfoil,' 'like small animal cages,' 'like men handling a fish which is still alive.'",
      "Deploy anaphoric repetition for moments of heightened intensity \u2014 repeat a word or phrase to create a rhythmic, incantatory effect that mimics the experience being described: 'Ram! Ram! Ram! Ram!'",
      "Use lists of present participles to create a sense of ongoing, simultaneous life processes: 'seeing, hearing, feeling, understanding the same world.'",
      "Employ litotes and understatement as the primary tool of irony \u2014 describe appalling things in mild language: 'He's all right,' 'Most disagreeable!'",
      "Use the dog as a recurring motif \u2014 introduce a natural, amoral presence that mirrors and disrupts the human action, functioning as a structural refrain."
    ],
    "do_not": [
      "Do not use elevated literary metaphors or allusions \u2014 keep figurative language rooted in common, physical, everyday objects (tinfoil, fish, flour bags, coffee).",
      "Do not use rhetorical questions to prompt the reader toward a conclusion \u2014 the narrator discovers meaning through observation, not interrogation.",
      "Do not use exclamation marks in narration \u2014 reserve them exclusively for dialogue and the prisoner's cries."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "The Indians had gone grey like bad coffee, and one or two of the bayonets were wavering."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, grounding statement of place and time \u2014 no dramatic hook, no thesis, no provocation. Establish setting with the flatness of a report: 'It was in Burma, a sodden morning of the rains.'",
      "Follow the opening sentence immediately with a sensory image that establishes mood \u2014 use light, weather, or atmosphere as emotional shorthand.",
      "Structure the essay as a chronological narrative with a single unbroken time sequence \u2014 begin before the event, move through it, and continue past it into its aftermath.",
      "Close with a final detail that is spatially or temporally precise and devastatingly understated \u2014 a physical fact that forces the reader to hold two irreconcilable realities together: 'The dead man was a hundred yards away.'",
      "Use direct speech with attribution tags ('said,' 'exclaimed') and render dialogue with phonetic accuracy to convey character and colonial power dynamics without commentary.",
      "Use em dashes for dramatic interjections and sudden narrative turns. Use commas for internal listing and clause separation. Avoid parenthetical asides in narration."
    ],
    "do_not": [
      "Do not open with a question, a quotation, or a generalization \u2014 begin in medias res with a flat situating statement.",
      "Do not close with a moral lesson, a call to action, or an explicit reflection on meaning \u2014 end with concrete scene, not conclusion.",
      "Do not use headers, section breaks, or any structural formatting \u2014 the essay is a single continuous narrative flow."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away.",
      "'Ach, sir, it iss worse when they become refractory!'"
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
      "Build sentences by stacking multiple independent and dependent clauses with commas and coordinating conjunctions ('and', 'but'), creating a rolling, cumulative prose rhythm that mimics the movement of thought itself.",
      "Use appositional and parenthetical insertions mid-sentence to qualify, clarify, or add biographical detail \u2014 set these off with commas, dashes, or parenthetical phrases like 'i.e.' to create a conversational aside within formal prose.",
      "When a sentence makes a claim, immediately extend it with a qualifying or elaborating clause joined by 'but', 'and', or 'though' \u2014 the default sentence shape is assertion-plus-qualification.",
      "Place short, declarative sentences after longer compound ones to deliver a verdict or clinch a point \u2014 the short sentence earns its force from the longer ones preceding it.",
      "Use parallel structure within sentences to create lists of nouns, gerunds, or infinitive phrases that accumulate rhetorical weight: 'to feel strongly about prose style, to love the surface of the earth, and to take a pleasure in solid objects'."
    ],
    "do_not": [
      "Do not write sentences that are syntactically simple and self-contained as the default mode \u2014 almost every sentence should reach beyond its initial clause to add context, exception, or nuance.",
      "Do not use fragmented, staccato prose or deliberate incomplete sentences for effect \u2014 maintain grammatical completeness even in short sentences.",
      "Do not front-load sentences with elaborate subordinate clauses before the main verb; prefer to lead with the main clause and append qualifications afterward."
    ],
    "evidence": [
      "\"I was the middle child of three, but there was a gap of five years on either side, and I barely saw my father before I was eight.\"",
      "\"It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write.\"",
      "\"For this and other reasons I was somewhat lonely, and I soon developed disagreeable mannerisms which made me unpopular throughout my schooldays.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a candid, self-examining narrator who treats personal history as evidence rather than confession \u2014 maintain an autobiographical stance that is forensic rather than sentimental.",
      "Adopt a tone that is simultaneously self-deprecating and quietly authoritative: concede personal failings openly ('disagreeable mannerisms', 'ghastly failure', 'vain, selfish, and lazy') while making sweeping claims about human nature with calm confidence.",
      "Use the impersonal 'one' and generic 'you' to shift from personal testimony to universal observation \u2014 this creates a rhythm of moving between the particular self and the general condition.",
      "Signal certainty through plain declarative assertion ('It is humbug to pretend this is not a motive') rather than through emphatic language or exclamation. Reserve hedging for genuine intellectual uncertainty ('I suppose', 'so far as I remember').",
      "Employ contractions selectively \u2014 use them in moments of directness or conversational intimacy ('I don't want to leave that as the final impression') but default to uncontracted forms in more essayistic, reflective passages to maintain a measured register.",
      "Maintain an earnest, serious tone throughout \u2014 humor, when it appears, is dry and self-directed, never performed or forced."
    ],
    "do_not": [
      "Do not adopt an ironic distance from the material \u2014 engage with the subject earnestly even when being self-critical.",
      "Do not use enthusiastic, exclamatory, or emotionally heightened language \u2014 express even strong feelings ('natural hatred of authority') in measured, matter-of-fact phrasing.",
      "Do not address the reader with chummy familiarity or rhetorical flattery \u2014 the reader is assumed to be intelligent and is spoken to as an equal, not courted."
    ],
    "evidence": [
      "\"All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\"",
      "\"I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed.\"",
      "\"I do not think one can assess a writer's motives without knowing something of his early development.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Ground abstract claims in concrete autobiographical evidence \u2014 every generalization about writers, motives, or politics should emerge from or be illustrated by a specific personal experience or anecdote.",
      "Structure arguments chronologically when dealing with personal development: move through time to show how a position or sensibility was formed rather than stating the conclusion and defending it.",
      "Introduce claims as plain assertions presented as self-evident truths ('It is humbug to pretend...', 'It is simply a question of...'), then support them with accumulated examples rather than formal logical proof.",
      "Acknowledge complexity and contradictions openly \u2014 present internal tensions (art vs. politics, egoism vs. effacement) as genuine dilemmas rather than resolving them neatly. Use 'but' and 'and yet' to hold opposing truths in tension.",
      "Use enumerated lists to impose taxonomic clarity on messy subjects \u2014 break motives, causes, or types into numbered categories, then discuss each in turn with examples.",
      "Handle counterarguments by incorporating them into the narrative as lived experiences or as the words of a named interlocutor ('A critic whom I respect read me a lecture about it'), not as abstract objections."
    ],
    "do_not": [
      "Do not construct arguments through formal syllogism, citation of authorities, or academic apparatus \u2014 persuade through accumulated personal testimony and plainspoken assertion.",
      "Do not resolve contradictions artificially or pretend to have neat answers \u2014 leave tensions standing when they are genuinely unresolved.",
      "Do not separate argument from narrative \u2014 weave claims into the chronological or experiential flow rather than presenting them in an abstract, thesis-driven structure."
    ],
    "evidence": [
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"What he said was true, but I could not have done otherwise. I happened to know, what very few people in England had been allowed to know, that innocent men were being falsely accused.\"",
      "\"Putting aside the need to earn a living, I think there are four great motives for writing, at any rate for writing prose.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a temporal or logical marker that situates the reader in the chronological narrative or in the progression of the argument ('From a very early age', 'When I was about sixteen', 'However, throughout this time', 'It is not easy').",
      "Organize ideas within paragraphs as accumulative sequences: begin with a general claim or situation, then pile on specific instances, examples, and qualifications that fill out the claim with concrete particularity.",
      "Close paragraphs with a sentence that either delivers a distilled verdict on everything preceding it or pivots to a new thought that will be developed in the next paragraph \u2014 avoid trailing off.",
      "Use paragraphs of widely varying scope: some serve as brief transitional bridges (a sentence or two making a single point), while others are expansive blocks that trace an entire line of thought from setup through multiple examples to conclusion.",
      "Transition between paragraphs through logical connectives ('However', 'But', 'And yet') or through temporal progression ('Then came Hitler') \u2014 make the link between paragraphs explicit rather than leaving the reader to infer it."
    ],
    "do_not": [
      "Do not begin paragraphs with throat-clearing or vague generalizations disconnected from what follows \u2014 the opening sentence should do real work, either advancing the chronology or stating a claim.",
      "Do not organize paragraphs around a single isolated example without connecting it to the larger argument \u2014 every anecdote should serve a discernible purpose.",
      "Do not use abrupt, unconnected paragraph breaks that leave the reader stranded \u2014 maintain visible logical or temporal threading."
    ],
    "evidence": [
      "\"However, throughout this time I did in a sense engage in literary activities.\"",
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical similes drawn from everyday life to make abstract ideas tangible \u2014 prefer the homely and exact over the literary or ornamental ('like a long bout of some painful illness', 'Good prose is like a windowpane').",
      "Employ enumeration and accumulation as a primary rhetorical strategy \u2014 list examples, types, or instances in series to create a sense of comprehensiveness and to build rhetorical momentum.",
      "Use 'etc.' and 'etc. etc.' deliberately as a rhetorical device to suggest that examples could continue indefinitely, implying the point is so obvious that elaboration is unnecessary.",
      "Deploy parenthetical asides \u2014 set off with dashes or commas \u2014 to inject self-correction, ironic qualification, or clarifying detail mid-argument, creating a sense of thinking-on-the-page.",
      "Use direct quotation of dialogue or of one's own past writing to ground abstract discussion in concrete, dramatic moments.",
      "Employ anaphoric repetition ('Desire to...', 'Desire to...') when defining categories or building parallel structures within lists."
    ],
    "do_not": [
      "Do not use elaborate, extended metaphors or allegorical structures \u2014 keep figurative language brief, sharp, and in service of clarity.",
      "Do not use rhetorical questions as a primary persuasive device \u2014 prefer direct assertion to interrogative posturing.",
      "Do not deploy ornamental language, 'purple passages,' or conspicuously literary phrasing \u2014 the essay explicitly warns against this, and the prose practices what it preaches."
    ],
    "evidence": [
      "\"Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.\"",
      "\"Good prose is like a windowpane.\"",
      "\"Desire to seem clever, to be talked about, to be remembered after death, to get your own back on the grown-ups who snubbed you in childhood, etc., etc.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct autobiographical declaration that immediately establishes the subject and the author's relationship to it \u2014 begin in medias vita, not with an abstract thesis or a scene.",
      "Establish temporal scope early by giving specific ages and dates to anchor the personal narrative in concrete biography.",
      "Close by circling back to complicate or qualify everything that came before \u2014 the ending should introduce a note of self-doubt, honest admission, or paradox that prevents the essay from feeling like a tidy argument.",
      "End with aphoristic sentences that distill hard-won insights into plain, memorable formulations \u2014 the final paragraph should contain quotable, lapidary sentences.",
      "Use the enumerated list format (i, ii, iii, iv) to impose visible taxonomic structure on the essay's central argument, breaking the flowing prose with a more schematic section.",
      "Embed quoted poetry or dialogue as set pieces within the prose to provide texture, evidence, and tonal variation \u2014 introduce these with brief contextualizing sentences.",
      "Use em dashes for parenthetical insertions and clarifications, and use 'i.e.' to signal mid-sentence redefinitions or precisions.",
      "Follow the genre convention of the personal essay \u2014 blend autobiography, argument, and self-examination \u2014 but structure it more rigorously than a typical personal essay through the use of explicit categories and numbered lists."
    ],
    "do_not": [
      "Do not open with a question, a provocative generalization, or an attention-grabbing hook \u2014 begin with quiet, factual self-disclosure.",
      "Do not close with a neat summary or a call to action \u2014 end with an honest, slightly uncomfortable admission that leaves the argument productively unresolved.",
      "Do not use headers, bullet points, or other formatting devices beyond the numbered list \u2014 let the prose carry its own organizational weight."
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
      "Build complex sentences by embedding parenthetical qualifications and asides mid-sentence using commas, dashes, or parentheses \u2014 the main clause should carry the narrative forward while the interruptions supply context, correction, or emotional nuance: 'I was just leaving the room when Mrs Wilkes called me back, as though to introduce me to the visitor.'",
      "Chain clauses with coordinating conjunctions (especially 'and' and 'but') to create long, flowing sentences that accumulate detail upon detail, mimicking the layering quality of memory: 'He would tap away at one's skull with his silver pencil, which, in my memory, seems to have been about the size of a banana, and which certainly was heavy enough to raise a bump.'",
      "Use subordinate clauses beginning with 'which,' 'that,' 'when,' 'although,' and 'because' to embed explanatory or qualifying information within the main narrative sentence rather than breaking it into separate sentences.",
      "Deploy short declarative sentences to deliver emotional conclusions or moral observations after a passage of longer, more winding prose \u2014 the brevity creates emphasis through contrast: 'I could not speak.'",
      "When rendering remembered dialogue or emotional states, allow the sentence to sprawl through multiple clauses connected by semicolons, dashes, or 'and' \u2014 reproducing the tumbling, associative quality of recollection."
    ],
    "do_not": [
      "Do not write in consistently clipped, staccato rhythms \u2014 the default mode is expansive and clause-rich, with brevity reserved for punctuation moments.",
      "Do not front-load sentences with elaborate dependent clauses before the subject; prefer the subject-verb core early, then extend with trailing qualifications and subordinate clauses.",
      "Do not use rhetorical fragments or incomplete sentences as a stylistic device \u2014 every sentence, however short, is grammatically complete."
    ],
    "evidence": [
      "For my part I did not need to be told it was a crime.",
      "He had a habit of continuing his lecture while he flogged you, and I remember the words 'you dir-ty lit-tle boy' keeping time with the blows.",
      "Sin was not necessarily something that you did: it might be something that happened to you."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the first person as an adult recollecting childhood, maintaining a dual perspective: the child's bewildered, credulous experience reported inside the adult's calm, retrospective analysis.",
      "Adopt a tone that is earnest, precise, and emotionally honest without becoming sentimental \u2014 present painful memories with a clinical steadiness that makes the cruelty more visible, not less.",
      "Shift between 'I' for personal experience and 'one' or 'you' for generalizing from that experience to universal childhood truths: use 'one' for detached philosophical observations, 'you' to pull the reader into the child's perspective.",
      "Signal certainty through plain declarative assertion ('It was a crime') and uncertainty through explicit admission ('I cannot remember whether,' 'I forget how') \u2014 never hedge with vague qualifiers; either state it plainly or confess the gap in memory directly.",
      "Maintain a stance of moral seriousness \u2014 the narrator treats the child's suffering as genuinely important, never dismissing it with irony or distance, even while occasionally noting the absurdity of situations.",
      "Use dry, understated humor that emerges from precise physical description rather than from jokes or wordplay: describe something grotesque with factual exactness and let the reader supply the reaction."
    ],
    "do_not": [
      "Do not adopt a self-pitying or melodramatic tone \u2014 the power comes from restraint and precision, not from emotional amplification.",
      "Do not use ironic detachment or sardonic commentary to distance from the material \u2014 the narrator is fundamentally sincere.",
      "Do not use informal slang, exclamatory interjections, or chatty asides that would break the measured, essayistic register (except when quoting dialogue)."
    ],
    "evidence": [
      "I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey.",
      "In general, one's memories of any period must necessarily weaken as one moves away from it.",
      "I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through concrete narrative episodes first, then extract the general principle or moral observation from the story \u2014 never state the thesis abstractly before grounding it in lived experience.",
      "Build arguments through accumulation of specific, remembered details: physical descriptions, quoted dialogue, named individuals, and precise social observations that together form an overwhelming evidentiary case.",
      "Handle counterarguments and qualifications by embedding them mid-narrative as parenthetical concessions: 'perhaps, as it was the first time, he was not hitting me very hard' \u2014 acknowledge complexity without derailing the main argument.",
      "Use logical flow that is primarily linear and chronological but interrupted by reflective asides where the adult narrator steps back to comment on the significance of what the child experienced, then returns to the narrative thread.",
      "Hedge by specifying the exact nature of uncertainty ('I cannot remember whether,' 'I must have had glimpses of it') rather than using weak qualifiers like 'sort of' or 'kind of' \u2014 hedging is always precise and honest.",
      "Connect personal experience to broader social critique by moving from 'this happened to me' to 'this was how the system worked' \u2014 generalize outward from the individual case to the institution."
    ],
    "do_not": [
      "Do not introduce abstract arguments or theoretical frameworks before establishing the concrete human experience that gives rise to them.",
      "Do not dismiss or minimize counterpoints \u2014 acknowledge them fully and precisely, even if ultimately setting them aside.",
      "Do not rely on external authorities, citations, or statistics to support claims \u2014 the evidence is always personal observation, remembered detail, and moral reasoning."
    ],
    "evidence": [
      "I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question.",
      "It is a mistake to think such methods do not work. They work very well for their special purpose.",
      "To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember that the child has little sense of proportion or probability."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs by advancing the chronological narrative or introducing a new scene, character, or thematic concern \u2014 the first sentence typically establishes either a temporal marker ('Soon after,' 'A little later') or a new subject ('Sambo had two great ambitions').",
      "Close paragraphs with a line that carries emotional or moral weight \u2014 the final sentence should feel conclusive, often delivering an ironic observation, a judgment, or a quiet emotional revelation that the preceding details have been building toward.",
      "Within paragraphs, sequence ideas by moving from external action to internal reflection: describe what happened, then describe what the child felt or understood about it, then (optionally) what the adult narrator now understands.",
      "Connect paragraphs through implicit narrative continuity rather than explicit transition words \u2014 the chronological or thematic link should be obvious from context without requiring 'Moreover,' 'Furthermore,' or similar connectives.",
      "Allow paragraphs to contain entire dramatic scenes including dialogue, action, and reflection \u2014 do not break a coherent scene across multiple paragraphs merely for visual relief.",
      "Use single-sentence paragraphs exclusively for dramatic dialogue lines or for statements that require isolation for emphasis, such as reported commands: 'REPORT YOURSELF to the Headmaster after breakfast!'"
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences that announce what the paragraph will discuss \u2014 enter through narrative or concrete detail.",
      "Do not use explicit transitional phrases ('On the other hand,' 'In addition,' 'As a result') between paragraphs \u2014 let the reader follow the logical or chronological thread.",
      "Do not end paragraphs on a trailing, inconclusive note \u2014 each paragraph should feel like it arrives somewhere, even if that destination is uncertainty honestly stated."
    ],
    "evidence": [
      "So much for the episode of the bed-wetting. But there is one more thing to be remarked.",
      "'Look what you've made me do!' he said furiously, holding the broken crop.",
      "I never had any answer except a miserable 'No, Mum,' or 'Yes, Mum,' as the case might be."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use precise, often grotesque physical description as the primary rhetorical tool \u2014 describe people and scenes with such specificity that the reader sees them without being told how to feel: 'a long nose at the end of which a dewdrop always seemed to be trembling.'",
      "Employ analogies and similes drawn from everyday, physical, or agricultural life rather than from literature or abstraction: 'crammed with learning as cynically as a goose is crammed for Christmas,' 'as one keeps a sleepy person awake by sticking pins in him.'",
      "Use lists and enumerations to create a sense of overwhelming accumulation \u2014 list examples of cruelty, absurdity, or social detail to build a crushing weight of evidence.",
      "Deploy direct quotation of remembered speech extensively \u2014 let characters condemn themselves through their own words rather than through the narrator's commentary.",
      "Use deliberate, exact repetition of key phrases ('the exam,' 'Your parents wouldn't be able to afford it,' 'a little office boy at forty pounds a year') to show how institutional language becomes internalized and oppressive through repetition.",
      "Employ parenthetical asides in parentheses or dashes to insert the adult narrator's self-correcting commentary into the childhood narrative: '(perhaps, as it was the first time, he was not hitting me very hard).'"
    ],
    "do_not": [
      "Do not use ornamental metaphors, purple prose, or poetic language \u2014 figurative language must be functional, concrete, and drawn from common experience.",
      "Do not use rhetorical questions to create artificial suspense or to lecture the reader \u2014 when questions appear, they are genuine expressions of the narrator's uncertainty or are quoted from characters.",
      "Do not use anaphora, epistrophe, or other conspicuously patterned repetition \u2014 repetition should feel natural and documentary, not oratorical."
    ],
    "evidence": [
      "She was a stocky square-built woman with hard red cheeks, a flat top to her head, prominent brows and deep-set, suspicious eyes.",
      "the scholarship boys were crammed with learning as cynically as a goose is crammed for Christmas",
      "'You know you're not going to grow up with money, don't you? Your people aren't rich. You must learn to be sensible. Don't get above yourself!'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open an essay by plunging directly into a specific, concrete episode \u2014 begin in medias res with a particular memory rather than with a thematic statement or scene-setting preamble.",
      "Establish the first sentence as a clear temporal and spatial anchor: name the place, indicate the time, and immediately introduce the central problem or situation of the opening episode.",
      "Close sections or episodes with a brief, measured summation that draws a moral or emotional conclusion, often delivered with understatement: 'So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.'",
      "Structure the overall piece as a series of linked episodes organized chronologically but unified by thematic concerns (class, cruelty, guilt, powerlessness) \u2014 each episode illuminates the theme from a new angle.",
      "Use formatting sparingly: employ capitalization for emphasis only when reproducing how something sounded in the child's mind ('REPORT YOURSELF'), use quotation marks extensively for dialogue and for terms being examined ('character,' 'good' public school), and use parentheses for the adult narrator's qualifying asides.",
      "Treat the essay as a hybrid of memoir and social criticism \u2014 alternate between intimate personal revelation and broader institutional analysis, using the personal to ground and authenticate the political."
    ],
    "do_not": [
      "Do not open with an abstract thesis, a provocative question, or a clever hook \u2014 begin with the concrete situation and let the meaning emerge.",
      "Do not close with a neat, resolved ending or an uplifting takeaway \u2014 endings should feel honest and somewhat unresolved, reflecting the complexity of experience.",
      "Do not use headers, subheadings, bullet points, or other structural formatting \u2014 the piece should flow as continuous prose organized only by paragraph breaks."
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
  "one_line_description": "earnest, plainspoken, morally serious \u2014 confessional authority grounded in concrete evidence and cumulative compound-complex prose",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by chaining multiple independent and dependent clauses with coordinating conjunctions ('and', 'but'), letting meaning accumulate through layers of qualification rather than delivering it in a single strike.",
      "Use compound-complex sentences as the default mode \u2014 combine at least two independent clauses with one or more dependent clauses to build dense, argumentative or narrative units.",
      "Embed parenthetical asides mid-sentence using commas, dashes, or parentheses to inject commentary, clarification, or self-correction without breaking forward momentum.",
      "When a sentence makes a claim, immediately extend it with a qualifying or elaborating clause joined by 'but', 'and', or 'though' \u2014 the default sentence shape is assertion-plus-qualification.",
      "Chain concrete physical details in catalogue-like sequences using commas within a single sentence, building toward a summarizing emotional or moral clause at the end.",
      "Use colons and semicolons to yoke related ideas within a single sentence \u2014 the colon introduces a consequence or elaboration, the semicolon joins parallel observations.",
      "Deploy short declarative sentences as punctuation marks after long, elaborated passages to land a point with force \u2014 the brevity earns its emphasis from the longer constructions preceding it.",
      "Use parallel structure within sentences to create lists of nouns, gerunds, or infinitive phrases that accumulate rhetorical weight."
    ],
    "do_not": [
      "Do not write in consistently short, clipped sentences \u2014 the prose must breathe through extended, multi-clause constructions as its baseline.",
      "Do not use sentence fragments for stylistic effect \u2014 every sentence must be grammatically complete, even the short emphatic ones.",
      "Do not front-load sentences with elaborate subordinate clauses before the main verb \u2014 lead with the subject or a brief transitional word, then let complexity build after the main clause.",
      "Do not let three or more consecutive sentences share the same clause pattern or length \u2014 vary sentence architecture constantly."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a candid, morally serious narrator who treats personal experience as evidence \u2014 maintain a stance that is forensic and earnest rather than sentimental or academic.",
      "Adopt a tone that is simultaneously self-deprecating and quietly authoritative \u2014 concede personal failings openly while making sweeping claims about human nature with calm confidence.",
      "Address the reader with 'you' and inclusively with 'we' and 'one' to create shared intellectual responsibility \u2014 the reader is a fellow thinker being enlisted, not a student being lectured.",
      "Use 'one' as an impersonal pronoun for general principles, 'I' for personal judgments, and 'you' when challenging the reader to act or self-examine.",
      "Signal certainty through plain declarative assertion rather than emphatic language \u2014 reserve hedging for genuine intellectual uncertainty, and when hedging, state the uncertainty plainly and precisely.",
      "Use contractions freely in narrative and conversational passages but shift to uncontracted forms in more formal declarative statements to lend gravity.",
      "Practice self-aware honesty \u2014 acknowledge your own susceptibility to the faults you criticize, which strengthens rather than undermines authority.",
      "When humor appears, keep it dry and understated \u2014 let it emerge from precise description rather than from jokes, wordplay, or performance."
    ],
    "do_not": [
      "Do not adopt a detached, academic, or neutral tone \u2014 the voice must be engaged, opinionated, and plainspoken even when discussing complex ideas.",
      "Do not use false modesty or excessive hedging \u2014 state your position clearly and let the reasoning carry the weight.",
      "Do not be sarcastic or snide toward the reader \u2014 reserve sharp wit for bad practices, unnamed hacks, or institutional absurdities.",
      "Do not use enthusiastic, exclamatory, or emotionally heightened language \u2014 express strong feelings in measured, matter-of-fact phrasing.",
      "Do not adopt self-pitying or melodramatic tones \u2014 power comes from restraint and precision, not emotional amplification."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Ground abstract claims in concrete evidence \u2014 every generalization must be anchored to a specific example, quotation, personal experience, or demonstration.",
      "Build arguments through a diagnosis-then-prescription structure when arguing: first demonstrate the problem with extensive evidence, then offer concrete remedies.",
      "When narrating, introduce claims at the moment of experiential revelation embedded within the narrative rather than separated from it \u2014 let the argument emerge from the story.",
      "Use vivid analogies drawn from everyday physical experience to make abstract points tangible \u2014 compare ideas to common objects, animals, manual labor, and mundane situations.",
      "Present internal contradictions and moral paradoxes without resolving them artificially \u2014 hold opposing truths in tension using 'but', 'and yet', 'with one part of my mind' constructions.",
      "Handle counterarguments by stating them fairly, conceding what is valid, then showing where the objection breaks down \u2014 or embed them as the narrator's own conflicting impulses.",
      "Use the movement from particular incident to universal insight as a primary structural logic \u2014 one specific event illuminates an entire system.",
      "Use parody, translation, or contrastive juxtaposition as forms of evidence \u2014 let the contrast between two versions make the argument more powerfully than assertion could."
    ],
    "do_not": [
      "Do not argue purely from abstract principle without concrete illustration \u2014 never let a claim float without an anchor.",
      "Do not dismiss counterarguments without engaging them \u2014 acknowledge their partial truth before refuting their conclusion.",
      "Do not pile up authorities, citations, or statistics as proof \u2014 rely on the reader's own ability to see the evidence once laid before them.",
      "Do not separate analysis from narrative into distinct sections \u2014 thinking must emerge organically from telling."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear situating statement \u2014 a temporal marker, spatial anchor, logical claim, or transitional phrase that orients the reader immediately.",
      "Develop paragraphs by layering evidence: state a principle or describe an action, then illustrate with examples, then draw out the implication or emotional consequence.",
      "Close paragraphs with a sentence that delivers an emotional punch, a moral observation, a striking image, or a pivot to the next idea \u2014 never let a paragraph trail off.",
      "Use explicit connective phrases between paragraphs when needed ('I said earlier that...', 'So much for...', 'But there is one more thing') to signal logical relationships between sections.",
      "Within paragraphs, sequence ideas from external observation inward toward personal feeling or moral judgment \u2014 move from what happened to what it meant.",
      "Allow paragraphs to vary widely in scope \u2014 some serve as brief transitional bridges while others are expansive blocks tracing an entire line of thought.",
      "Alternate between dense event-packed or argument-packed paragraphs and shorter reflective paragraphs that pause to process meaning."
    ],
    "do_not": [
      "Do not leave paragraphs without a clear logical connection to what precedes and follows \u2014 the reader should never wonder why something appears where it does.",
      "Do not let paragraphs consist entirely of abstraction without any concrete anchoring detail \u2014 even philosophical passages should include a physical image.",
      "Do not end paragraphs on a trailing, inconclusive note \u2014 each paragraph should arrive somewhere, even if that destination is honestly stated uncertainty."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical similes drawn from everyday domains \u2014 machinery, animals, weather, food, manual labor, household objects \u2014 never from literary or highbrow sources.",
      "Deploy catalogues of concrete sensory details in list structures, connected by commas and culminating in a summarizing emotional or moral clause.",
      "Use antithesis and contrastive juxtaposition to dramatize contradictions \u2014 set up parallel structures that oppose each other to let the reader feel the contrast.",
      "Employ litotes and understatement as primary tools of irony \u2014 describe appalling things in mild, precise language and let the reader supply the reaction.",
      "Use direct quotation of remembered speech or found language extensively \u2014 let characters and specimens condemn themselves through their own words.",
      "Deploy parenthetical asides in dashes or parentheses to inject self-correction, ironic qualification, or clarifying detail mid-argument.",
      "Use scare quotes around words and phrases to flag them as suspect, hollow, or dishonest.",
      "Use direct imperatives and commands ('Look again', 'Consider', 'Never use') when delivering prescriptive advice."
    ],
    "do_not": [
      "Do not use elevated literary metaphors, ornamental language, or purple prose \u2014 figurative language must be functional, brief, and rooted in common physical experience.",
      "Do not employ metaphors that are themselves clich\u00e9d or 'dying' \u2014 practice what you preach by using fresh figurative language.",
      "Do not use exclamation marks to generate emphasis in narration \u2014 let the force of the words and sentence structure do the work.",
      "Do not use rhetorical questions as a primary persuasive device \u2014 prefer direct assertion to interrogative posturing."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, direct statement that immediately establishes the subject and the narrator's relationship to it \u2014 a factual declaration of situation, place, or personal circumstance.",
      "Establish stakes early \u2014 make clear within the opening paragraphs why the topic matters beyond its surface subject.",
      "Structure essays either as a single extended narrative episode framed by broader reflections, or as a diagnosis-and-prescription argument grounded in concrete specimens.",
      "Close with devastating honesty \u2014 end with an uncomfortable admission, a deliberately anticlimactic personal motive, or a complication that prevents the essay from feeling tidy.",
      "End with aphoristic, lapidary sentences that distill hard-won insights into plain, memorable formulations.",
      "When delivering prescriptive conclusions, format rules or directives distinctly \u2014 then immediately qualify them with a final caveat that prevents dogmatism.",
      "Use em dashes extensively for parenthetical insertions, dramatic pauses, and restatements throughout.",
      "Treat the essay as a hybrid of personal testimony and broader social or political criticism \u2014 use the personal to authenticate the political."
    ],
    "do_not": [
      "Do not open with a dramatic hook, a provocative question, or an attention-grabbing device \u2014 begin with quiet, factual statement that carries an undertow of tension.",
      "Do not close with a neat summary, a call to action, or an uplifting resolution \u2014 the ending must be honest, slightly uncomfortable, and resist false tidiness.",
      "Do not bury the prescriptive payoff deep in the essay without structural emphasis \u2014 when you arrive at concrete advice, make it visually and rhetorically distinct."
    ]
  },
  "signature_phrases": {
    "use": [
      "but",
      "and yet",
      "it is",
      "one",
      "I dare say",
      "I suppose",
      "it is curious",
      "somehow",
      "in a sense",
      "i.e.",
      "etc. etc.",
      "needless to say",
      "as a matter of fact",
      "in point of fact",
      "the point is",
      "the truth is",
      "it is humbug to pretend",
      "I do not think",
      "I do not want to",
      "I said earlier",
      "so much for",
      "as I have tried to show",
      "with one part of my mind",
      "looking back",
      "for my part"
    ],
    "never_use": [
      "incredibly",
      "absolutely",
      "amazing",
      "stunning",
      "basically",
      "literally",
      "utilize",
      "leverage",
      "impact (as verb)",
      "unpack",
      "problematic",
      "nuanced",
      "robust",
      "stakeholder",
      "facilitate",
      "synergy",
      "it goes without saying",
      "at the end of the day",
      "having said that",
      "let's dive in",
      "game-changer",
      "deep dive",
      "moving forward",
      "circle back",
      "bandwidth",
      "actionable",
      "pivot"
    ]
  },
  "revision_guidance": [
    "Replace Latinate abstractions with Anglo-Saxon equivalents wherever possible \u2014 'use' not 'utilize', 'help' not 'facilitate', 'show' not 'demonstrate'.",
    "Convert passive constructions to active \u2014 find the agent and make it the subject.",
    "Replace 'furthermore', 'moreover', 'additionally' with 'but', 'and', 'yet', or simply start a new sentence.",
    "Break any sentence that merely asserts without evidence \u2014 add a concrete example, analogy, or specimen.",
    "If a paragraph opens with an abstraction, rewrite it to open with a concrete image, temporal anchor, or specific situation.",
    "Replace vague hedges ('sort of', 'kind of', 'quite possibly') with precise statements of what you know and don't know.",
    "Where you find a dead metaphor or clich\u00e9, either invent a fresh physical simile or cut the figurative language entirely.",
    "If any passage moralizes from a position of superiority, inject a self-implicating admission or a concession to complexity.",
    "Convert bullet-pointed lists back into prose sentences embedded within paragraphs to maintain narrative momentum.",
    "If the ending resolves too neatly, add a qualifying final sentence that complicates or undercuts the conclusion."
  ]
}
```