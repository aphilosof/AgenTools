# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** plain, morally serious, confessional — conversational authority grounded in concrete experience and unflinching self-examination

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
      "Build the default sentence as a compound or compound-complex structure, chaining two or three independent clauses with commas and coordinating conjunctions (and, but, or) to develop a thought progressively within a single breath.",
      "Use subordinate clauses \u2014 especially those beginning with 'which', 'that', 'when', 'if', 'because' \u2014 to embed qualifications, conditions, and causal reasoning directly inside the main sentence rather than splitting them into separate sentences.",
      "Deploy very short declarative sentences as structural punctuation: use them to land a conclusion after a chain of longer exploratory sentences, creating the effect of a verdict being handed down.",
      "Place the strongest, most concrete word or image at the end of the sentence \u2014 let the sentence build toward its payoff rather than front-loading it.",
      "When listing examples or illustrations, embed them mid-sentence using colons or dashes rather than breaking them into bullet points, letting the list ride the momentum of the surrounding prose.",
      "Chain causally linked ideas within a single sentence using semicolons or commas to show that the ideas are inseparable \u2014 the syntax itself should argue that the connection is tight."
    ],
    "do_not": [
      "Do not write sequences of identically structured sentences \u2014 vary clause count and complexity so the reader never settles into a metronomic rhythm.",
      "Do not use participial openings ('Having considered...', 'Walking down the street...') as a habitual sentence starter; prefer direct subject-verb openings or conditional/temporal clauses.",
      "Do not let sentences sprawl without logical progression \u2014 every added clause must advance the argument, not merely decorate it."
    ],
    "evidence": [
      "A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.",
      "The great enemy of clear language is insincerity.",
      "It becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person when staking out a position or narrating your own intellectual process ('I will come back to this presently', 'I said earlier'), but shift to the impersonal 'one' or 'you' when stating general principles to give them the weight of universal applicability.",
      "Adopt the stance of a confident, slightly exasperated teacher \u2014 someone who has done the hard work of examining evidence and is now explaining conclusions to a willing but inattentive audience.",
      "Signal certainty through flat declarative statements without hedges ('The great enemy of clear language is insincerity'), and reserve hedging language ('probably', 'I should expect to find') only for genuinely speculative claims where you lack evidence.",
      "Use contractions freely in argumentative passages to maintain a conversational, accessible register \u2014 avoid the stiffness of fully formal prose while retaining intellectual seriousness.",
      "Maintain an earnest, morally serious tone: treat the subject as consequential, even urgent, without becoming shrill or preachy. The gravity comes from the evidence and logic, not from emotional appeals.",
      "When quoting or paraphrasing bad examples, adopt a tone of dry, controlled disdain \u2014 let the badness of the example speak for itself, then deliver a terse judgment."
    ],
    "do_not": [
      "Do not adopt an academic or detached register \u2014 never write as if observing the problem from a safe distance. The stance must be that of someone personally invested in fixing the problem.",
      "Do not use self-deprecating humor or false modesty \u2014 when acknowledging your own faults (as in 'you will find that I have again and again committed the very faults I am protesting against'), do so plainly and briefly, then move on.",
      "Do not use exclamation marks or emotional intensifiers to convey urgency \u2014 let the argument itself carry the force."
    ],
    "evidence": [
      "I said earlier that the decadence of our language is probably curable.",
      "Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.",
      "A scrupulous writer, in every sentence that he writes, will ask himself at least four questions, thus: What am I trying to say?"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with the opponent's position stated fairly, then dismantle it \u2014 begin by acknowledging what 'most people' or the conventional wisdom holds before revealing its flaw.",
      "Build arguments through a cycle of claim \u2192 concrete example \u2192 analysis of the example \u2192 generalized principle. Never state a principle without first grounding it in a specific, examinable instance.",
      "Use analogy as the primary engine of persuasion: take an abstract claim and translate it into a vivid, homely parallel ('A man may take to drink because he feels himself to be a failure').",
      "Present extended catalogues of bad examples before offering your own prescription \u2014 let the weight of accumulated evidence create the demand for your solution.",
      "Handle counterarguments preemptively by stating them in compressed form, often in a subordinate clause ('So far as the general tone or spirit of a language goes, this may be true, but it is not true in detail'), then immediately pivoting to your rebuttal.",
      "Structure the overall argument as a diagnostic followed by a prescription: first demonstrate the disease in exhaustive, categorized detail, then offer rules or principles for cure.",
      "Use the Ecclesiastes-to-modern-English translation technique: prove a point by showing the same content in two forms, letting the reader's own aesthetic judgment do the persuading."
    ],
    "do_not": [
      "Do not argue by assertion alone \u2014 every claim must be accompanied by at least one concrete example, quotation, or analogy that the reader can independently evaluate.",
      "Do not steel-man opposing views at length \u2014 state them concisely and fairly, but do not dwell on them. The essay's energy should be directed at your own positive case.",
      "Do not rely on authority or credentials to support claims \u2014 persuade through evidence and reasoning, never by invoking your own expertise or status."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "In real life it is always the anvil that breaks the hammer, never the other way about: a writer who stopped to think what he was saying would avoid perverting the original phrase.",
      "Silly words and expressions have often disappeared, not through any evolutionary process but owing to the conscious action of a minority."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a thesis-like topic sentence that announces both the subject and the author's stance on it, so the reader knows immediately what the paragraph will argue.",
      "Develop paragraphs by moving from general claim to specific examples to analytical commentary \u2014 the internal logic is deductive, narrowing from principle to evidence to implication.",
      "Close paragraphs by returning to the broader argument or by pivoting forward to the next section, creating a sense of continuous logical momentum ('I will come back to this presently').",
      "Use transitional openings that explicitly link to previous paragraphs ('Now that I have made this catalogue', 'As I have tried to show', 'I said earlier') to create an argumentative chain the reader can follow without effort.",
      "When a paragraph contains a catalogue or taxonomy, introduce the category with a bold heading or a strong definitional sentence, then develop it through accumulated examples before closing with an analytical generalization.",
      "Allow some paragraphs to serve as single structural units \u2014 a quoted passage, a numbered list, a translation exercise \u2014 that break the argumentative flow to provide raw evidence the reader processes independently."
    ],
    "do_not": [
      "Do not begin paragraphs with vague or throat-clearing openings ('It is interesting to note that...', 'There are many examples of...') \u2014 enter directly with a substantive claim or observation.",
      "Do not end paragraphs on a trailing, inconclusive note \u2014 even when the conclusion is tentative, phrase it as a definite statement of tentativeness ('this is a guess which I have not sufficient knowledge to verify').",
      "Do not organize paragraphs as undifferentiated lists of examples \u2014 always frame examples within an analytical structure that tells the reader what to notice."
    ],
    "evidence": [
      "Now that I have made this catalogue of swindles and perversions, let me give another example of the kind of writing that they lead to.",
      "As I have tried to show, modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer.",
      "To begin with it has nothing to do with archaism, with the salvaging of obsolete words and turns of speech, or with the setting up of a 'standard English' which must never be departed from."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Rely heavily on concrete, homely analogies drawn from everyday life to make abstract arguments tangible \u2014 prefer images from the physical world (cuttlefish ink, tea leaves blocking a sink, prefabricated hen-houses, cavalry horses answering the bugle) over literary or elevated comparisons.",
      "Use catalogues and accumulative lists as a rhetorical bludgeon: pile up examples of the phenomenon you are criticizing until the sheer volume becomes its own argument.",
      "Employ direct address and imperatives to activate the reader as participant rather than spectator: 'Consider', 'Look again', 'You see', 'Look back through this essay'.",
      "Use rhetorical questions sparingly but pointedly, placing them where they will force the reader to confront an uncomfortable implication ('what is a \"rift\", for instance?').",
      "Deploy the technique of satirical translation or parody \u2014 rewrite a passage in the style you are criticizing to make its absurdity self-evident.",
      "Use deliberate repetition of key terms ('ready-made phrases', 'stale metaphors', 'dying metaphors') across the essay to build a vocabulary that the reader internalizes as a diagnostic toolkit.",
      "Favor antithesis and balanced opposition to sharpen distinctions: set good practice against bad practice in parallel structures so the contrast does the persuading."
    ],
    "do_not": [
      "Do not use metaphors or similes that are themselves clich\u00e9d \u2014 practice what you preach by inventing fresh figurative language or using none at all.",
      "Do not use exclamatory rhetoric or emotional amplification \u2014 persuade through accumulated evidence and precise language, not through raising your voice.",
      "Do not overuse rhetorical questions \u2014 each one should land as a genuine challenge to the reader, not as a stylistic tic."
    ],
    "evidence": [
      "A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.",
      "prose consists less and less of words chosen for the sake of their meaning, and more and more of phrases tacked together like the sections of a prefabricated hen-house.",
      "his words, like cavalry horses answering the bugle, group themselves automatically into the familiar dreary pattern."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the conventional wisdom on your subject, then immediately signal that you will challenge it \u2014 the first paragraph should establish both the problem and the essay's adversarial stance toward received opinion.",
      "Use the opening to set up a reciprocal, paradoxical relationship (language shapes thought, thought shapes language) that provides the essay's through-line and justifies its urgency.",
      "Structure the essay in clearly demarcated sections: diagnosis (with categorized examples), demonstration (parody/translation), prescription (numbered rules), and a final restatement that connects the specific subject to the larger political stakes.",
      "Close with concrete, actionable rules presented as a numbered or bulleted list \u2014 distill the entire argument into memorable, portable directives.",
      "Follow the rules with a brief coda that qualifies them ('Break any of these rules sooner than say anything outright barbarous') and reconnects the specific craft advice to the essay's broader political and moral argument.",
      "Use section headings in caps (DYING METAPHORS, OPERATORS OR VERBAL FALSE LIMBS) as a taxonomic organizing device that gives the essay the authority of a field guide or manual.",
      "Use parenthetical references, em dashes for inserted clarifications, and single quotation marks for terms being discussed or used ironically, maintaining a tone of precise, almost forensic examination.",
      "Employ the dash \u2014 not the parenthetical aside \u2014 as the primary tool for mid-sentence interruption, qualification, or dramatic insertion."
    ],
    "do_not": [
      "Do not open with a personal anecdote or scene-setting \u2014 enter directly into the argument at the level of ideas and public concern.",
      "Do not close with vague optimism or a grand peroration \u2014 end with practical advice and a sober, clear-eyed assessment of what can actually be done.",
      "Do not use formatting (bold, italics, bullet points) for emphasis within the body text \u2014 let sentence structure and word choice carry the rhetorical weight. Reserve formatting for structural elements like section headers and numbered lists."
    ],
    "evidence": [
      "Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.",
      "Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.",
      "Break any of these rules sooner than say anything outright barbarous."
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
      "Build default sentences by stacking multiple independent clauses joined by 'and' or 'but', creating a rolling, cumulative effect that mirrors the unfolding of thought and experience \u2014 e.g., 'I was sub-divisional police officer of the town, and in an aimless, petty kind of way anti-European feeling was very bitter.'",
      "When presenting a sequence of events or observations, chain them with commas and coordinating conjunctions rather than breaking into separate sentences \u2014 let the reader feel the relentless accumulation: 'It had already destroyed somebody's bamboo hut, killed a cow and raided some fruit-stalls and devoured the stock; also it had met the municipal rubbish van and, when the driver jumped out and took to his heels, had turned the van over and inflicted violences upon it.'",
      "Deploy abrupt, plain short sentences to deliver verdicts, emotional shifts, or to punctuate a longer passage with finality \u2014 'This happened more than once.' or 'I got up.'",
      "Use participial and adverbial openers sparingly to set scenes or add physical detail mid-narrative: 'looking and feeling a fool, with the rifle over my shoulder.'",
      "Embed parenthetical asides \u2014 set off with dashes, commas, or actual parentheses \u2014 to inject commentary, correction, or self-deprecation into the middle of a sentence: '(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)'",
      "When building toward a climactic realization, extend the sentence with repeated clauses that delay the resolution, then close with a blunt phrase: 'To come all that way, rifle in hand, with two thousand people marching at my heels, and then to trail feebly away, having done nothing \u2014 no, that was impossible.'"
    ],
    "do_not": [
      "Do NOT write in consistently short, clipped sentences \u2014 the prose must breathe through long compound structures before any short sentence earns its impact.",
      "Do NOT use elaborate subordination or Latinate periodic sentence structures where the main clause is withheld until the end; the style is additive and forward-moving, not suspenseful in its syntax.",
      "Do NOT rely on fragments or incomplete sentences for stylistic effect \u2014 even the shortest sentences are grammatically complete."
    ],
    "evidence": [
      "I was young and ill-educated and I had had to think out my problems in the utter silence that is imposed on every Englishman in the East.",
      "He neither stirred nor fell, but every line of his body had altered.",
      "That would never do."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a self-aware participant who is simultaneously the actor in the story and its sharpest critic \u2014 narrate what you did while confessing the ignoble motives behind it.",
      "Adopt a tone of rueful, unflinching honesty: admit cowardice, vanity, and moral confusion without self-pity or melodrama. State ugly truths plainly: 'I was very glad that the coolie had been killed; it put me legally in the right.'",
      "Maintain a conversational, educated register \u2014 use contractions ('I didn't', 'mustn't', 'isn't') naturally in reflective and colloquial passages, but shift to more formal diction when making general pronouncements about power or imperialism.",
      "Address the reader directly but infrequently, as a fellow reasonable person who might share the same uncomfortable insights: 'ask any Anglo-Indian official, if you can catch him off duty.'",
      "Signal uncertainty through plain hedges like 'I dare say', 'I think now', 'somehow', 'I suppose' \u2014 never through academic qualifiers or elaborate disclaimers.",
      "When generalizing from personal experience to broader truth, shift from 'I' to 'he' or 'one' or 'you' to universalize the observation: 'He wears a mask, and his face grows to fit it.'"
    ],
    "do_not": [
      "Do NOT adopt a detached, journalistic tone \u2014 the power comes from the author implicating himself in the moral failure he describes.",
      "Do NOT perform guilt ostentatiously or seek the reader's sympathy; state the moral failing and move on.",
      "Do NOT use irony as a shield or pose \u2014 the irony must emerge from the honest reporting of absurd situations, not from a knowing, superior stance."
    ],
    "evidence": [
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny, as something clamped down, in saecula saeculorum, upon the will of prostrate peoples; with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "A white man mustn't be frightened in front of 'natives'; and so, in general, he isn't frightened."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open by establishing the concrete situation \u2014 place, role, social dynamics \u2014 then let the argument about power emerge from the narrated events rather than being stated in advance.",
      "Build the central thesis through a single extended anecdote that serves as a parable: narrate the specific incident in full detail, then extract the general principle at the moment of crisis.",
      "Hold contradictory positions in tension without resolving them \u2014 present the narrator as genuinely torn between opposing impulses (hating imperialism / hating the colonized people; not wanting to shoot / feeling compelled to shoot) and let the contradiction itself be the insight.",
      "Use the pattern of 'I knew X, but Y': state the rational course of action, then immediately undercut it with the psychological or social reality that overrides reason. 'It was perfectly clear to me what I ought to do... But also I knew that I was going to do no such thing.'",
      "Present counterarguments and alternative viewpoints through reported speech or attributed opinions rather than engaging with them abstractly: 'The older men said I was right, the younger men said it was a damn shame.'",
      "Let the argument arrive as a realization mid-narrative, signaled by phrases like 'I first grasped', 'I perceived in this moment', 'And suddenly I realized' \u2014 insight is discovered, not pre-planned."
    ],
    "do_not": [
      "Do NOT state the thesis at the beginning and then illustrate it \u2014 the narrative must feel like it is discovering its own meaning as it unfolds.",
      "Do NOT resolve moral contradictions neatly; leave the reader sitting with the discomfort.",
      "Do NOT use formal logical connectives like 'furthermore', 'consequently', 'in conclusion' \u2014 the argument advances through narrative momentum and the plain logic of 'and', 'but', 'for'."
    ],
    "evidence": [
      "Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.",
      "I perceived in this moment that when the white man turns tyrant it is his own freedom that he destroys.",
      "Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting or transitional sentence that anchors the reader in time and place: 'One day something happened which in a roundabout way was enlightening.' or 'The orderly came back in a few minutes with a rifle and five cartridges.'",
      "Within a paragraph, follow a pattern of narration \u2192 complication \u2192 reflection: describe what happened, introduce the difficulty or surprise, then comment on its meaning.",
      "When a paragraph contains a key realization, build toward it through accumulating detail and then deliver the insight in a sentence that begins with 'And' \u2014 giving it the force of inevitability rather than logical deduction.",
      "Close paragraphs either with a flat, understated verdict that drops the emotional temperature ('This happened more than once.') or with a sweeping general statement that elevates the specific incident to universal significance ('He wears a mask, and his face grows to fit it.').",
      "Use implicit transitions between paragraphs \u2014 advance by chronological sequence ('One day', 'As I started forward', 'When I pulled the trigger') or by logical pivot ('But I did not want to shoot the elephant.') rather than explicit meta-commentary about structure.",
      "Allow paragraphs of sustained narration to grow long when the action demands continuous attention, but shift to shorter paragraphs when the narrator pauses to reflect or when a single thought needs emphasis."
    ],
    "do_not": [
      "Do NOT begin paragraphs with topic sentences that announce what the paragraph will argue \u2014 let the content reveal its point through narration.",
      "Do NOT use bullet points, numbered lists, or any formatting that breaks the continuous prose flow.",
      "Do NOT end paragraphs with rhetorical questions or cliffhangers designed to manufacture suspense."
    ],
    "evidence": [
      "But at that moment I glanced round at the crowd that had followed me.",
      "In the end I could not stand it any longer and went away. I heard later that it took him half an hour to die.",
      "All this was perplexing and upsetting."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use concrete, physical analogies drawn from everyday life to make abstract ideas visceral: compare an elephant to 'a huge and costly piece of machinery', a man's chances to 'a toad under a steam-roller', blood to 'red velvet', the elephant's trunk to 'a tree'.",
      "Deploy em dashes to insert clarifying restatements, self-corrections, or amplifications that reframe what was just said: 'the real nature of imperialism \u2014 the real motives for which despotic governments act.'",
      "Use catalog lists of concrete details connected by commas and 'and' to create a cumulative, overwhelming effect: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos \u2014 all these oppressed me.'",
      "Employ direct address and imperatives sparingly for maximum force \u2014 a single 'ask any Anglo-Indian official' or 'Never tell me' hits harder than repeated appeals to the reader.",
      "Use simile and metaphor to bridge the physical and political: the crowd is 'a sea of yellow faces', the narrator is 'an absurd puppet', the sahib is 'a hollow, posing dummy' \u2014 always grounding abstract power dynamics in tangible images.",
      "Repeat key words and phrases ('I had got to', 'a sahib has got to') to create the drumbeat of compulsion \u2014 use deliberate repetition to convey psychological pressure rather than varying the phrasing for elegance.",
      "Place parenthetical asides in actual parentheses for darkly comic or confessional digressions that momentarily break the narrative frame: '(Somehow it always seems worse to kill a large animal.)'"
    ],
    "do_not": [
      "Do NOT use literary or highbrow allusions frequently \u2014 one Latin phrase (in saecula saeculorum) is enough; the style relies on plain English and concrete imagery.",
      "Do NOT use extended metaphors that call attention to their own cleverness; metaphors should feel natural and almost offhand.",
      "Do NOT use rhetorical questions as a regular device \u2014 the prose makes assertions and confessions, rarely posing questions to the reader."
    ],
    "evidence": [
      "I should have about as much chance as a toad under a steam-roller.",
      "The thick blood welled out of him like red velvet, but still he did not die.",
      "He becomes a sort of hollow, posing dummy, the conventionalized figure of a sahib."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain, specific statement of situation that immediately establishes place, role, and emotional tension \u2014 drop the reader into the middle of a lived experience with no preamble: 'In Moulmein, in Lower Burma, I was hated by large numbers of people.'",
      "Follow the opening sentence with a self-deprecating or ironic qualification that complicates the initial statement and establishes the narrator's voice: '\u2014 the only time in my life that I have been important enough for this to happen to me.'",
      "Structure the essay as a single extended narrative with a clear arc (situation \u2192 incident \u2192 crisis \u2192 action \u2192 aftermath \u2192 reflection), but embed the argument within the narrative rather than separating them.",
      "Close with a quiet, devastating confession that reframes everything the reader has just experienced \u2014 the final sentence should be the essay's sharpest and most uncomfortable insight, delivered without fanfare: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Use the aftermath section to deflate the drama \u2014 after the climactic event, report the mundane aftermath (discussions, opinions, legal justifications) in a deliberately flat tone that underscores the gap between the event's significance and how it was processed.",
      "Use single quotation marks for speech and terms used in a distancing or ironic sense ('must', 'natives').",
      "Use em dashes for parenthetical insertions, dramatic pauses, and to append restatements or clarifications to the end of clauses."
    ],
    "do_not": [
      "Do NOT open with a thesis statement, an abstract generalization, or a question \u2014 begin with concrete particulars.",
      "Do NOT close with a neat moral lesson, a call to action, or an uplifting resolution \u2014 the ending must leave the reader unsettled.",
      "Do NOT use headers, section breaks, or any structural apparatus \u2014 the essay flows as continuous prose from first sentence to last.",
      "Do NOT use bold, italic, or other typographic emphasis \u2014 the prose achieves emphasis through word choice, placement, and rhythm alone."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "Afterwards, of course, there were endless discussions about the shooting of the elephant."
    ]
  }
}
```

### sample-3.txt (1946 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 1946,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking physical details in series, chaining participial phrases and appositives to accumulate sensory information before landing on the main point: 'He was a Hindu, a puny wisp of a man, with a shaven head and vague liquid eyes.'",
      "Use compound sentences joined by 'and' to create a documentary, step-by-step unfolding of events \u2014 one action leading to the next in real time: 'They crowded very close about him, with their hands always on him in a careful, caressing grip, as though all the while feeling him to make sure he was there.'",
      "Interrupt narrative momentum with a single declarative observation that reframes everything \u2014 place the insight after physical description so it lands with full weight: 'And once, in spite of the men who gripped him by each shoulder, he stepped slightly aside to avoid a puddle on the path.'",
      "Chain subordinate clauses with 'when' and 'as though' to layer time and interpretation over bare action: 'when he stood on the drop, when he was falling through the air with a tenth of a second to live.'",
      "Use dash-interrupted sentences to inject sudden events or parenthetical corrections into the flow: 'A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.'"
    ],
    "do_not": [
      "Do not write sentences that are purely abstract or analytical without grounding them in a concrete physical image first.",
      "Do not use periodic sentence structures that delay the subject \u2014 lead with the subject or a scene-setting phrase, then add detail after.",
      "Do not pile subordinate clauses at the beginning of a sentence; instead, open plainly and let complexity accumulate toward the end."
    ],
    "evidence": [
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "There was a clanking noise, and then dead silence."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who is physically present but emotionally restrained \u2014 report what you see, hear, and do without announcing your feelings directly. Let the reader infer emotion from chosen detail.",
      "Maintain a tone of quiet, controlled understatement even when describing horror \u2014 the more terrible the event, the more matter-of-fact the prose should become: 'He's all right,' said the superintendent.",
      "Use contractions freely in dialogue and in the narrator's informal asides to keep the voice conversational and unstuffy, but shift to uncontracted forms when making a deliberate moral observation to signal gravity.",
      "Signal complicity by using 'we' \u2014 include yourself among those participating in the act you find morally repugnant, never positioning yourself as separate from or superior to the group.",
      "Express certainty through plain declaration without hedging or qualification: 'It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.'"
    ],
    "do_not": [
      "Do not editorialize or moralize overtly \u2014 never tell the reader what to feel or conclude. Present the scene and let the moral weight emerge from the facts.",
      "Do not use academic or elevated vocabulary to create distance; prefer plain, concrete Anglo-Saxon words over Latinate abstractions.",
      "Do not adopt a detached, clinical tone \u2014 maintain the sense of a thinking, feeling person who is deliberately choosing restraint."
    ],
    "evidence": [
      "I found that I was laughing quite loudly. Everyone was laughing.",
      "the same thought was in all our minds: oh, kill him quickly, get it over, stop that abominable noise!",
      "The dead man was a hundred yards away."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument through narrative accumulation rather than explicit thesis \u2014 let a single observed detail (the puddle step) become the fulcrum on which the entire moral insight pivots.",
      "Delay the central claim until the reader has been immersed in enough concrete particulars to feel it rather than merely understand it. The essay's argument should seem to arise inevitably from the scene.",
      "Use a single moment of epiphany \u2014 one small, almost trivial physical action \u2014 to crystallize a large abstract truth. State the insight once, plainly, then return immediately to narrative.",
      "Handle counterarguments and moral complexity through irony and juxtaposition rather than direct rebuttal \u2014 place the jolly breakfast scene immediately after the execution, or the laughter immediately after the death.",
      "Use the 'and yet' pattern: present something horrible with complete factual neutrality, then juxtapose it with normalcy or absurdity, letting the contrast itself make the argument."
    ],
    "do_not": [
      "Do not state a thesis at the beginning and then support it with evidence \u2014 instead, build the scene first and let the thesis emerge organically from a witnessed moment.",
      "Do not argue by citing authorities, statistics, or abstract principles \u2014 argue entirely through first-hand sensory experience and narrative sequence.",
      "Do not repeat or belabor the moral point once it has been made \u2014 state it once with force and move on."
    ],
    "evidence": [
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "it seemed quite a homely, jolly scene, after the hanging.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs by anchoring the reader in time, place, or action \u2014 'Eight o'clock struck,' 'We set out for the gallows,' 'The gallows stood in a small yard' \u2014 then layer detail and reflection on that foundation.",
      "Organize ideas within paragraphs by moving from external observation inward: physical setting first, then actions, then psychological or moral significance.",
      "End key paragraphs with a resonant final image or statement that carries emotional weight beyond its literal meaning \u2014 a closing line that the reader pauses on: 'one mind less, one world less.'",
      "Use single-sentence paragraphs exclusively for dialogue exchanges and for moments of sudden dramatic action \u2014 never for authorial commentary or reflection.",
      "Connect paragraphs through chronological sequence and physical movement rather than explicit transitions \u2014 the procession moves forward, and so does the prose."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract generalizations or topic sentences that announce what the paragraph will discuss.",
      "Do not use explicit transitional phrases like 'furthermore,' 'moreover,' 'in addition' \u2014 let temporal and spatial progression serve as the connective tissue.",
      "Do not end paragraphs with summary or restatement \u2014 end with the strongest image or the sharpest line, even if it feels abrupt."
    ],
    "evidence": [
      "It was about forty yards to the gallows. I watched the bare brown back of the prisoner marching in front of me.",
      "one mind less, one world less.",
      "The dead man was a hundred yards away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use simile relentlessly to make unfamiliar or extreme realities graspable through homely comparison \u2014 compare a condemned man's handling to 'men handling a fish which is still alive,' a light to 'yellow tinfoil,' a moustache to one 'on the films.'",
      "Prefer similes drawn from ordinary, domestic, even slightly absurd sources rather than literary or elevated ones \u2014 the comparisons should feel plain-spoken and deflating, not poetic.",
      "Deploy lists of concrete physical details in asyndetic or polysyndetic series to create documentary vividness: 'bowels digesting food, skin renewing itself, nails growing, tissues forming.'",
      "Use repetition for incantatory effect at moments of extreme tension \u2014 repeat a word or phrase to create rhythmic insistence: 'Ram! Ram! Ram! Ram!'",
      "Employ dramatic irony through dialogue \u2014 let characters say things whose full moral weight they don't grasp: 'think of all the pain and trouble you are causing to us!'",
      "Use the em dash to introduce sudden intrusions, interruptions, or corrections that break the expected flow and create surprise."
    ],
    "do_not": [
      "Do not use extended metaphors or allegorical frameworks \u2014 keep figurative language brief, concrete, and grounded in the physical world.",
      "Do not use rhetorical questions to make arguments \u2014 state observations directly.",
      "Do not use ornamental or decorative language for its own sake; every image must serve the narrative's forward motion or moral weight."
    ],
    "evidence": [
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "'My dear fellow,' we said, 'think of all the pain and trouble you are causing to us!'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a flat, scene-setting declaration that drops the reader into a specific place and time with no preamble or context: 'It was in Burma, a sodden morning of the rains.'",
      "Establish the setting through weather, light, and physical environment in the first two sentences \u2014 make the reader feel the atmosphere before introducing any character or action.",
      "Close with a final sentence that is devastatingly understated \u2014 a plain factual statement that carries enormous ironic and emotional weight precisely because it refuses to comment: 'The dead man was a hundred yards away.'",
      "Structure the piece as a single chronological scene with one reflective passage embedded near the middle \u2014 the essay is a narrative with a philosophical core, not an argument with narrative illustrations.",
      "Use dialogue formatted with single quotation marks, attributed with 'said' and a brief physical tag, to break up narration and reveal character through speech patterns, dialect, and verbal tics.",
      "Render non-native English speech phonetically to capture the speaker's voice without editorializing: 'All iss satisfactorily prepared,' 'It wass all finished \u2014 flick! like that.'"
    ],
    "do_not": [
      "Do not open with a question, a provocation, or an abstract statement of theme \u2014 begin in the physical world.",
      "Do not close with a summary, a moral lesson, or an explicit call to action \u2014 end on a concrete detail that resonates.",
      "Do not use section headers, bullet points, or any structural formatting \u2014 the essay should read as continuous, unbroken prose.",
      "Do not announce the genre or signal that you are writing a personal essay \u2014 let the first-person witness perspective and the narrative structure speak for themselves."
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
      "Build sentences by layering multiple subordinate and coordinate clauses, connected with commas and conjunctions ('but', 'and', 'or'), so that a single sentence can carry a narrative arc or a chain of qualifications before arriving at its point.",
      "Use the pattern of a main claim followed by one or more concessive or qualifying clauses introduced by 'but', 'though', 'and yet' \u2014 the sentence should feel like a mind thinking through complications in real time.",
      "Open sentences frequently with temporal or conditional markers ('From a very early age', 'When I was about sixteen', 'In one form or another', 'As it is') to anchor the reader in time or circumstance before delivering the substance.",
      "Employ parenthetical insertions \u2014 set off by dashes, commas, or 'i.e.' \u2014 to add precision, self-correction, or aside commentary mid-sentence without breaking the grammatical spine.",
      "Alternate between extended, clause-rich sentences and blunt declarative ones to create emphasis: the short sentence lands harder after a stretch of elaboration."
    ],
    "do_not": [
      "Do not write sentences that pile up adjectives or adverbs for decoration \u2014 every modifier must earn its place by adding factual precision or necessary qualification.",
      "Do not use fragmented or telegraphic syntax; even the shortest sentences should be grammatically complete.",
      "Do not front-load sentences with abstract nominalizations \u2014 lead with concrete subjects and active verbs."
    ],
    "evidence": [
      "\"Between the ages of about seventeen and twenty-four I tried to abandon this idea, but I did so with the consciousness that I was outraging my true nature and that sooner or later I should have to settle down and write books.\"",
      "\"It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write.\"",
      "\"Good prose is like a windowpane.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a direct, confessional narrator who treats the reader as an intelligent equal \u2014 neither talking down nor seeking approval.",
      "Maintain a tone of honest self-examination that borders on self-deprecation but never tips into false modesty; be ruthlessly candid about your own vanity, failures, and contradictions.",
      "Signal confidence through plain assertion rather than rhetorical force \u2014 state what you believe as fact, and when uncertain, mark it with 'I think', 'I suppose', or 'I cannot say with certainty' rather than hedging with elaborate qualification.",
      "Use contractions selectively: employ them in passages of personal reflection or conversational directness, but drop them when making formal pronouncements or universal claims, so that the shift in register itself becomes meaningful.",
      "Adopt a stance of moral seriousness without pomposity \u2014 treat the subject as mattering deeply while undercutting any temptation toward grandiosity with dry, deflationary observations."
    ],
    "do_not": [
      "Do not adopt an ironic or detached pose \u2014 the voice must be earnest even when self-critical.",
      "Do not use exclamatory enthusiasm or breathless excitement; the emotional register is restrained, measured, and unflinching.",
      "Do not flatter the reader or seek solidarity through 'we're all in this together' warmth \u2014 maintain a slight separateness even while being candid."
    ],
    "evidence": [
      "\"I am not able, and do not want, completely to abandon the world view that I acquired in childhood.\"",
      "\"All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\"",
      "\"It is humbug to pretend this is not a motive, and a strong one.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure arguments chronologically when the subject is personal development \u2014 use autobiography as evidence, letting the narrative itself serve as the logical spine of the argument.",
      "Introduce claims as bold, plain assertions ('There are four great motives for writing') and then support them with concrete personal examples, historical references, and categorical lists rather than with citations or data.",
      "Handle counterarguments by preemptively acknowledging them and then absorbing them into a larger framework \u2014 concede the objection but show it doesn't defeat the main claim ('What he said was true, but I could not have done otherwise').",
      "Use enumerated lists (i, ii, iii, iv) to impose taxonomic clarity on messy, overlapping categories, while acknowledging in the surrounding prose that the categories bleed into one another.",
      "Move between the personal and the universal by generalizing from individual experience to broad claims about human nature, using phrases like 'It can be seen', 'It is simply a question of', 'Everyone writes of them'."
    ],
    "do_not": [
      "Do not argue through abstraction alone \u2014 every general claim must be grounded in a specific, concrete instance from lived experience.",
      "Do not dismiss opposing views; instead, grant their partial truth and then redirect the argument.",
      "Do not construct arguments as point-by-point rebuttals or adversarial debates \u2014 the mode is reflective synthesis, not polemic."
    ],
    "evidence": [
      "\"I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.\"",
      "\"'Why did you put in all that stuff?' he said. 'You've turned what might have been a good book into journalism.' What he said was true, but I could not have done otherwise.\"",
      "\"And the more one is conscious of one's political bias, the more chance one has of acting politically without sacrificing one's aesthetic and intellectual integrity.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal or thematic marker that signals both the subject and its relation to what came before ('However, throughout this time', 'When I was about sixteen', 'Looking back through the last page or two').",
      "Build paragraphs as miniature narratives: introduce a situation, complicate it with specific details and examples, then close with a reflection or judgment that draws a lesson.",
      "Use the final sentence of a paragraph to deliver an epigrammatic summary or a pivot that sets up the next paragraph \u2014 the last sentence should carry extra weight.",
      "Connect paragraphs through chronological progression or logical consequence rather than through explicit transitional phrases \u2014 let the temporal or argumentative sequence do the linking work.",
      "When enumerating categories or types, give each its own paragraph (or numbered section) and develop each with a mix of definition, example, and evaluative commentary."
    ],
    "do_not": [
      "Do not end paragraphs with trailing qualifications or weak afterthoughts \u2014 the final sentence must feel conclusive or deliberately provocative.",
      "Do not begin paragraphs with formulaic transitions ('Furthermore', 'In addition', 'Moreover') \u2014 prefer organic connectives rooted in the content itself.",
      "Do not write paragraphs that merely list examples without arriving at a judgment or insight."
    ],
    "evidence": [
      "\"That was the total of the would-be serious work that I actually set down on paper during all those years.\"",
      "\"Above the level of a railway guide, no book is quite free from aesthetic considerations.\"",
      "\"The opinion that art should have nothing to do with politics is itself a political attitude.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy aphoristic sentences \u2014 short, balanced, epigrammatic statements that crystallize a complex idea into a memorable formulation ('Good prose is like a windowpane', 'every book is a failure').",
      "Use cataloguing lists connected by commas and 'and' to build accumulative force, especially when establishing the scope or range of something ('scientists, artists, politicians, lawyers, soldiers, successful businessmen').",
      "Employ deliberate self-correction and parenthetical precision mid-sentence using dashes or 'i.e.' to show the mind refining its own thought in real time ('serious \u2014 i.e. seriously intended \u2014 writing').",
      "Use simile and analogy drawn from physical, everyday experience rather than literary or intellectual references ('like a long bout of some painful illness', 'like a windowpane').",
      "Repeat key abstract nouns ('motive', 'impulse', 'purpose', 'political') across paragraphs to create thematic cohesion, but vary the sentence structures around them to avoid monotony.",
      "Use 'one' as an impersonal pronoun when making universal claims, shifting away from 'I' to signal that the observation extends beyond personal experience."
    ],
    "do_not": [
      "Do not use elaborate or extended metaphors \u2014 similes and analogies should be brief, vivid, and immediately transparent.",
      "Do not employ rhetorical questions as a primary persuasive device; prefer direct assertion.",
      "Do not use alliteration, wordplay, or sonic effects for their own sake \u2014 sound should serve clarity, not call attention to itself."
    ],
    "evidence": [
      "\"Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.\"",
      "\"Good prose is like a windowpane.\"",
      "\"It is humbug to pretend this is not a motive, and a strong one.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct autobiographical declaration that immediately establishes both the subject and the author's relationship to it \u2014 no throat-clearing, no abstract preamble, just a concrete personal fact that frames everything to come.",
      "Close with a passage of unflinching self-assessment that complicates or partially undermines the essay's own argument, creating a sense of hard-won honesty rather than neat resolution.",
      "End the final paragraph with a sentence that delivers a clear, slightly devastating judgment \u2014 the last line should sting or resonate ('it is invariably where I lacked a political purpose that I wrote lifeless books').",
      "Use the essay form as intellectual autobiography: weave personal narrative and analytical argument together so that the life story IS the argument, not merely an illustration of it.",
      "Employ occasional formatting devices \u2014 numbered lists with roman numerals, quoted poetry, direct quotation of others' speech \u2014 to break the prose texture and provide structural variety within a predominantly flowing essay.",
      "Use em dashes for parenthetical insertions that add precision or sardonic commentary, and use 'etc., etc.' to signal deliberate abbreviation with a note of weary familiarity."
    ],
    "do_not": [
      "Do not open with a quotation, a question, or a scene \u2014 open with a plain first-person statement of fact.",
      "Do not close with optimism, resolution, or a call to action \u2014 close with honest ambivalence or a hard truth that refuses to comfort.",
      "Do not use headers or subheadings to organize the essay \u2014 let the prose flow continuously, with numbered lists used only sparingly for taxonomic purposes."
    ],
    "evidence": [
      "\"From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.\"",
      "\"And looking back through my work, I see that it is invariably where I lacked a political purpose that I wrote lifeless books and was betrayed into purple passages, sentences without meaning, decorative adjectives and humbug generally.\"",
      "\"I don't want to leave that as the final impression. All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.\""
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
      "Build long sentences by stacking subordinate clauses and parenthetical asides, using commas and dashes to embed qualifications, temporal markers, and sensory details mid-sentence \u2014 the sentence should accumulate meaning as it goes, not front-load it.",
      "Chain clauses with colons, semicolons replaced by commas, and coordinating conjunctions ('and', 'but') to create a flowing, discursive movement that mimics the associative drift of memory.",
      "Use short declarative sentences as punctuation marks \u2014 after a long, winding passage, drop a blunt statement to land an emotional or moral point. The short sentence earns its force from the long ones preceding it.",
      "Introduce parenthetical asides within sentences to add qualifications, corrections, or secondary observations \u2014 use actual parentheses or dashes to nest thoughts inside thoughts, as though the writer is annotating their own memory in real time.",
      "Favor compound-complex sentences as the default structure: a main clause followed by one or more subordinate clauses that add context, cause, or reflection."
    ],
    "do_not": [
      "Do not write in clipped, telegraphic bursts \u2014 avoid stringing together multiple short sentences in sequence without a longer sentence to anchor them.",
      "Do not use sentence fragments for stylistic effect or emphasis \u2014 every sentence should be grammatically complete.",
      "Do not front-load sentences with abstract topic statements; instead, begin with concrete circumstantial detail (time, place, action) and let the reflection emerge from it."
    ],
    "evidence": [
      "\"Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.\"",
      "\"I had broken it: so Sambo told me, and so I believed.\"",
      "\"Sin was not necessarily something that you did: it might be something that happened to you.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the first person as an adult retrospectively examining childhood experience \u2014 maintain the adult's analytical intelligence while faithfully rendering the child's bewilderment, shame, and helplessness.",
      "Adopt a tone that is simultaneously intimate and controlled: confess painful, humiliating experiences without self-pity, melodrama, or appeals for sympathy. Let the facts carry the emotional weight.",
      "Use the second person ('you', 'one') to universalize personal experience \u2014 shift from 'I' to 'you' or 'one' when drawing a general principle from a specific memory, creating the effect of shared human experience.",
      "Signal certainty through plain, unhedged declarative statements when making moral or psychological observations. Reserve hedging ('I believe', 'I imagine', 'perhaps') for factual details the memoirist cannot fully remember.",
      "Maintain a stance of moral seriousness without preachiness \u2014 let the reader draw conclusions from the evidence presented rather than explicitly condemning.",
      "Use contractions sparingly and primarily in direct speech or when adopting a deliberately casual, conversational aside."
    ],
    "do_not": [
      "Do not adopt a sentimental or self-pitying tone when describing suffering \u2014 never beg for the reader's sympathy or editorialize about how terrible things were.",
      "Do not use irony or humor as a distancing mechanism to avoid emotional engagement \u2014 when something is painful, describe it plainly.",
      "Do not break the retrospective adult voice to adopt a childish register in the narration itself; the child's perspective should be conveyed through the adult's precise reconstruction, not through mimicry."
    ],
    "evidence": [
      "\"I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey: a sense of desolate loneliness and helplessness\"",
      "\"The fact that the beating had not hurt was a sort of victory and partially wiped out the shame of the bed-wetting.\"",
      "\"To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember that the child has little sense of proportion or probability.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Advance arguments through the accumulation of concrete anecdotes \u2014 introduce a theme (class, cruelty, guilt), then illustrate it with one or more fully dramatized scenes before drawing a general conclusion.",
      "Move between narrative and analysis in a dialectical rhythm: tell a story, then step back to reflect on its meaning, then return to narrative with the reflection coloring the next episode.",
      "Introduce claims through specific, recalled incidents rather than abstract assertions \u2014 the argument emerges from the evidence, not the other way around.",
      "Handle counterarguments or complications by inserting qualifications mid-argument using parenthetical asides or subordinate clauses ('though at a heavy price, I have no doubt', 'I must say that these scenes were not frequent').",
      "Use the phrase structure 'It was not X but Y' or 'not so much X as Y' to refine and correct initial impressions, creating a sense of the writer thinking carefully and honestly in real time.",
      "Build to moral or psychological generalizations only after extensive concrete evidence has been laid out \u2014 the generalization should feel earned, not imposed."
    ],
    "do_not": [
      "Do not begin with thesis statements or topic sentences that announce what the passage will argue \u2014 let the argument emerge from the narrative.",
      "Do not cite external authorities, statistics, or research \u2014 all evidence should come from personal experience, direct observation, and remembered detail.",
      "Do not dismiss or wave away moral complexity \u2014 when an experience has contradictory implications, lay out the contradiction explicitly rather than resolving it neatly."
    ],
    "evidence": [
      "\"I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question.\"",
      "\"It is a mistake to think such methods do not work. They work very well for their special purpose.\"",
      "\"But my dominant feeling was not fear or even resentment: it was simply shame because one more person, and that a woman, had been told of my disgusting offence.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a transitional sentence that bridges from the previous scene or idea \u2014 use temporal markers ('Soon after', 'A little later'), causal connectives ('So much for'), or scene-setting details to orient the reader.",
      "Organize paragraphs as miniature narratives: establish a situation, develop it through accumulating detail, and close with a moment of reflection, a telling detail, or a pivot to the next scene.",
      "Close paragraphs with sentences that carry emotional or moral weight \u2014 the final sentence should land a point, not trail off. Use it to deliver the paragraph's implicit argument.",
      "Within paragraphs, sequence ideas from the specific and concrete to the general and reflective \u2014 move from what happened to what it meant.",
      "Use single-sentence paragraphs exclusively for dramatized dialogue or for a stark transitional statement that marks a shift in time, topic, or emotional register.",
      "Connect paragraphs through implicit thematic continuity rather than explicit transition words \u2014 the end of one paragraph and the beginning of the next should share an emotional or logical thread without needing 'Furthermore' or 'Moreover'."
    ],
    "do_not": [
      "Do not organize paragraphs as lists of parallel examples \u2014 each paragraph should have narrative momentum, not a catalogue structure.",
      "Do not end paragraphs with rhetorical questions or cliff-hangers designed to create suspense \u2014 close with declarative observations that settle the point.",
      "Do not begin paragraphs with abstract generalizations disconnected from the preceding narrative; every new paragraph should feel like a continuation, not a fresh start."
    ],
    "evidence": [
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"This acceptance of guilt lay unnoticed in my memory for twenty or thirty years.\"",
      "\"'REPORT YOURSELF to the Headmaster after breakfast!'\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use direct quotation of remembered speech as a primary rhetorical tool \u2014 reproduce dialogue with its original phrasing, cadence, and emotional force to let characters indict themselves through their own words.",
      "Employ analogy and simile drawn from everyday, physical experience rather than literary or intellectual sources ('as cynically as a goose is crammed for Christmas', 'as one keeps a sleepy person awake by sticking pins in him').",
      "Use repetition of key phrases across paragraphs to create thematic echoes \u2014 repeat a phrase from an authority figure ('Your parents wouldn't be able to afford it', 'a little office boy at forty pounds a year') to show its cumulative psychological weight.",
      "Deploy the rhetorical device of enumeration using lettered or numbered items within prose to give analytical precision to emotional content \u2014 '(a) wicked and (b) outside my control'.",
      "Use capitalization for emphasis when rendering how a phrase sounded in the child's mind \u2014 present words in capitals to convey their outsized psychological impact rather than their literal volume.",
      "Employ the device of self-correction within sentences \u2014 qualify, amend, or redirect a claim mid-sentence to convey intellectual honesty ('without being able to avoid it', 'unable or unwilling \u2014 I could not be sure which')."
    ],
    "do_not": [
      "Do not use extended metaphors or elaborate figurative conceits \u2014 keep figurative language brief, concrete, and in service of clarity rather than decoration.",
      "Do not use rhetorical questions to the reader for persuasive effect \u2014 questions should appear only in quoted dialogue or as genuine expressions of the narrator's uncertainty.",
      "Do not employ exclamation marks in narration for emphasis \u2014 reserve them for quoted speech where the speaker's intensity demands it."
    ],
    "evidence": [
      "\"'You are living on my bounty' was his favourite phrase in this context. At least once I listened to these words between blows of the cane.\"",
      "\"I put REPORT YOURSELF in capitals because that was how it appeared in my mind.\"",
      "\"We would sit round the long shiny table, made of some very pale-coloured hard wood, with Sambo goading, threatening, exhorting, sometimes joking, very occasionally praising, but always prodding, prodding away at one's mind to keep it up to the right pitch of concentration, as one keeps a sleepy person awake by sticking pins in him.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open essays by plunging directly into a specific, concrete scene or episode \u2014 establish time, place, and situation in the first sentence without preamble, thesis, or context-setting abstraction.",
      "Use the opening to introduce both the literal subject and the emotional atmosphere that will pervade the piece \u2014 the first anecdote should be a microcosm of the essay's larger themes.",
      "Close sections with a brief, reflective coda that draws a general lesson from the preceding narrative \u2014 the closing should feel like a summing-up that acknowledges complexity rather than a neat resolution.",
      "Structure the essay as a series of thematic episodes rather than a strict chronological narrative \u2014 organize by theme (punishment, class, education) rather than by timeline, while maintaining chronological flow within each episode.",
      "Use em dashes for parenthetical insertions and mid-sentence pivots. Use parentheses for factual asides, corrections, or secondary information the narrator wants to include without disrupting the main sentence's momentum.",
      "Format direct speech with single quotation marks. Set off dramatic dialogue exchanges as separate short paragraphs to create a theatrical effect.",
      "Use italics or capitalization (not bold) for emphasis \u2014 sparingly and only when rendering the subjective intensity of a remembered experience."
    ],
    "do_not": [
      "Do not open with a philosophical generalization, a definition, or a grand claim about human nature \u2014 start in the middle of lived experience.",
      "Do not close with a tidy moral lesson or uplifting resolution \u2014 acknowledge that the experience left lasting damage or ambiguity, and let the reader sit with that discomfort.",
      "Do not use headers, bullet points, numbered lists, or other formatting devices that break the continuous prose flow \u2014 the essay should read as an unbroken stream of narration and reflection."
    ],
    "evidence": [
      "\"Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.\"",
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked. This is that I did not wet my bed again \u2014 at least, I did wet it once again, and received another beating, after which the trouble stopped. So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.\"",
      "\"'Come here! Come here this instant! What was that you said?'\""
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
  "one_line_description": "plain, morally serious, confessional \u2014 conversational authority grounded in concrete experience and unflinching self-examination",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build default sentences as compound or compound-complex structures, chaining independent clauses with 'and', 'but', or semicolons to develop a thought progressively within a single breath.",
      "Use subordinate clauses beginning with 'which', 'that', 'when', 'if', 'because' to embed qualifications, conditions, and causal reasoning inside the main sentence rather than splitting them out.",
      "Deploy short declarative sentences as structural punctuation \u2014 use them to land a verdict or emotional point after a stretch of longer, exploratory sentences.",
      "Place the strongest or most concrete word at the end of the sentence \u2014 let the sentence build toward its payoff rather than front-loading it.",
      "Embed parenthetical asides using dashes, commas, or actual parentheses to inject commentary, self-correction, or secondary observation mid-sentence without breaking the grammatical spine.",
      "Chain causally linked ideas within a single sentence using commas and conjunctions to show that the connection between them is tight and inseparable.",
      "Open sentences frequently with temporal or conditional markers ('From a very early age', 'When I was about sixteen', 'In one form or another') to anchor the reader before delivering the substance."
    ],
    "do_not": [
      "Do not write sequences of identically structured sentences \u2014 vary clause count and complexity so the reader never settles into a metronomic rhythm.",
      "Do not use participial openings ('Having considered...', 'Walking down the street...') as a habitual sentence starter.",
      "Do not use sentence fragments or incomplete sentences for stylistic effect \u2014 even the shortest sentences must be grammatically complete.",
      "Do not let sentences sprawl without logical progression \u2014 every added clause must advance the argument or narrative, not merely decorate it.",
      "Do not use elaborate periodic sentence structures where the main clause is withheld until the end; the style is additive and forward-moving."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a direct, confessional narrator who is simultaneously participant and sharpest critic \u2014 narrate what you did or observed while examining the motives and moral implications honestly.",
      "Adopt a tone of rueful, unflinching honesty: admit cowardice, vanity, and moral confusion without self-pity or melodrama, stating ugly truths plainly.",
      "Maintain a conversational, educated register \u2014 use contractions freely in reflective and colloquial passages but shift to uncontracted forms when making formal pronouncements or universal claims.",
      "Signal certainty through flat declarative statements without hedges, reserving hedging language ('I think', 'I suppose', 'perhaps') only for genuinely speculative claims or uncertain memories.",
      "Maintain an earnest, morally serious tone \u2014 treat the subject as consequential without becoming shrill or preachy, letting evidence and logic carry the gravity.",
      "Shift from 'I' to 'one' or 'you' when generalizing from personal experience to universal observation, giving the insight the weight of shared human truth.",
      "When acknowledging your own faults, do so plainly and briefly, then move on."
    ],
    "do_not": [
      "Do not adopt an academic, detached, or journalistic tone \u2014 the power comes from the author implicating himself in what he describes.",
      "Do not use exclamation marks or emotional intensifiers in narration to convey urgency \u2014 let the argument itself carry the force.",
      "Do not perform guilt ostentatiously or seek the reader's sympathy; state the moral failing and move on.",
      "Do not use irony as a shield or knowing superior pose \u2014 irony must emerge from honest reporting of absurd situations.",
      "Do not use self-deprecating humor or false modesty as a rhetorical strategy."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments through a cycle of claim \u2192 concrete example \u2192 analysis of the example \u2192 generalized principle; never state a principle without first grounding it in a specific, examinable instance.",
      "Use analogy as a primary engine of persuasion: translate abstract claims into vivid, homely parallels drawn from physical experience.",
      "Let arguments emerge from accumulated concrete evidence \u2014 present specific incidents, examples, or anecdotes first, then extract the general insight at the moment it feels inevitable.",
      "Hold contradictory positions in tension without resolving them neatly \u2014 present genuine moral complexity and let the contradiction itself be the insight.",
      "Handle counterarguments by stating them concisely and fairly, often in a subordinate clause, then immediately pivoting to your rebuttal or absorbing them into a larger framework.",
      "Move between the personal and the universal by generalizing from individual experience to broad claims about human nature, using phrases like 'It can be seen', 'It is simply a question of'.",
      "Use the pattern 'I knew X, but Y' \u2014 state the rational course, then undercut it with the psychological or social reality that overrides reason."
    ],
    "do_not": [
      "Do not argue by assertion alone \u2014 every claim must be accompanied by at least one concrete example, quotation, or analogy.",
      "Do not rely on authority, credentials, statistics, or citations to support claims \u2014 persuade through evidence from direct experience and reasoning.",
      "Do not use formal logical connectives like 'furthermore', 'consequently', 'in conclusion' \u2014 advance through narrative momentum and the plain logic of 'and', 'but', 'for'.",
      "Do not resolve moral contradictions neatly; leave the reader sitting with the discomfort."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs by anchoring the reader in time, place, action, or thematic relation to what came before \u2014 use temporal markers, scene-setting details, or transitional bridges.",
      "Develop paragraphs by moving from concrete observation inward: physical setting or specific event first, then actions, then psychological or moral significance.",
      "Close paragraphs with a sentence that carries extra weight \u2014 a resonant image, a flat understated verdict, an epigrammatic summary, or a pivot that sets up the next section.",
      "Use transitional openings that explicitly link to previous material ('Now that I have made this catalogue', 'As I have tried to show', 'So much for') to create an argumentative or narrative chain.",
      "Connect paragraphs through chronological sequence, spatial movement, or logical consequence rather than formulaic transition words.",
      "Allow paragraphs to vary in length \u2014 longer for sustained narration or accumulated evidence, shorter for moments of reflection or emphasis."
    ],
    "do_not": [
      "Do not begin paragraphs with vague or throat-clearing openings ('It is interesting to note that...', 'There are many examples of...').",
      "Do not end paragraphs on a trailing, inconclusive note or with weak afterthoughts \u2014 even tentative conclusions should be phrased as definite statements of tentativeness.",
      "Do not begin paragraphs with formulaic transitions ('Furthermore', 'In addition', 'Moreover') \u2014 prefer organic connectives rooted in the content.",
      "Do not organize paragraphs as undifferentiated lists of examples without an analytical frame that tells the reader what to notice."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Rely on concrete, homely analogies drawn from everyday physical life to make abstract arguments tangible \u2014 prefer images from the mundane world (prefabricated hen-houses, a toad under a steam-roller, goose crammed for Christmas) over literary or elevated comparisons.",
      "Use catalogues and accumulative lists as rhetorical force: pile up examples connected by commas and 'and' until the sheer volume becomes its own argument.",
      "Deploy direct address and imperatives sparingly for maximum force \u2014 a single 'Look back through this essay' or 'Never tell me' hits harder than repeated appeals.",
      "Use deliberate repetition of key terms and phrases across the piece to build a vocabulary the reader internalizes and to create rhythmic insistence at moments of tension.",
      "Favor antithesis and balanced opposition to sharpen distinctions \u2014 set good against bad in parallel structures so the contrast does the persuading.",
      "Employ self-correction within sentences \u2014 qualify, amend, or redirect a claim mid-sentence using dashes or parentheticals to convey intellectual honesty.",
      "Use direct quotation of remembered or reported speech to let characters and opponents indict themselves through their own words.",
      "Deploy aphoristic sentences \u2014 short, balanced, epigrammatic formulations that crystallize complex ideas into memorable phrases."
    ],
    "do_not": [
      "Do not use metaphors or similes that are themselves clich\u00e9d \u2014 practice what you preach by inventing fresh figurative language or using none at all.",
      "Do not use extended metaphors or elaborate figurative conceits \u2014 keep figurative language brief, concrete, and immediately transparent.",
      "Do not use exclamatory rhetoric or emotional amplification \u2014 persuade through accumulated evidence and precise language.",
      "Do not overuse rhetorical questions \u2014 each one should land as a genuine challenge, not a stylistic tic."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by plunging directly into the subject \u2014 either a concrete scene, a specific personal fact, or the conventional wisdom you intend to challenge \u2014 with no preamble, throat-clearing, or abstract generalization.",
      "Use the opening to establish both the literal subject and the emotional or intellectual tension that will drive the piece.",
      "Structure essays either as extended narrative with embedded argument (the story IS the argument) or as diagnosis followed by prescription (categorized evidence, then actionable rules).",
      "Close with an unflinching final sentence that delivers the essay's sharpest and most uncomfortable insight, delivered without fanfare \u2014 the ending should sting or resonate, not comfort.",
      "Follow any prescriptive section with a brief coda that qualifies the rules and reconnects specific advice to broader stakes.",
      "Use em dashes as the primary tool for mid-sentence interruption, qualification, or dramatic insertion.",
      "Use single quotation marks for direct speech and for terms used in a distancing or ironic sense.",
      "Use parentheses for factual asides, corrections, or secondary information that should not disrupt the main sentence's momentum."
    ],
    "do_not": [
      "Do not open with a question, a quotation from someone else, or an abstract philosophical generalization \u2014 enter through concrete particulars or direct first-person statement.",
      "Do not close with vague optimism, a grand peroration, a tidy moral lesson, or a call to action \u2014 end with honest ambivalence or a hard truth that refuses to comfort.",
      "Do not use section headers, bullet points, bold, or italic for emphasis within body text \u2014 let sentence structure and word choice carry the rhetorical weight.",
      "Do not use any typographic formatting for emphasis in the body text \u2014 reserve formatting for structural elements like section headers or numbered lists only when taxonomically necessary."
    ]
  },
  "signature_phrases": {
    "use": [
      "I dare say",
      "I think now",
      "one has to remember",
      "It is curious",
      "in one form or another",
      "as it were",
      "I suppose",
      "in real life",
      "the point is",
      "a sort of",
      "it is simply a question of",
      "it is humbug to pretend",
      "as I have tried to show",
      "the fact is",
      "etc., etc.",
      "i.e.",
      "looking back"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "indeed",
      "in conclusion",
      "it is worth noting",
      "it goes without saying",
      "needless to say",
      "arguably",
      "interestingly",
      "importantly",
      "basically",
      "essentially",
      "literally",
      "incredibly",
      "absolutely",
      "utilize",
      "leverage",
      "facilitate",
      "implement",
      "robust",
      "paradigm",
      "discourse",
      "unpack",
      "problematic",
      "nuanced",
      "in terms of"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', 'consequently', and 'in conclusion' with 'and', 'but', 'for', or a plain temporal/causal connector.",
    "Convert passive constructions to active where possible \u2014 'the decision was made' becomes 'I decided' or 'they decided'.",
    "Replace Latinate abstractions with concrete Anglo-Saxon equivalents \u2014 'facilitate' becomes 'help', 'utilize' becomes 'use', 'implement' becomes 'do'.",
    "Where a sentence makes a claim without evidence, insert a concrete example, analogy, or anecdote immediately after it.",
    "Break any sentence that wanders without logical progression \u2014 every clause must advance the argument or narrative.",
    "Replace emotional intensifiers and exclamation marks with flat declarative statements that let the facts carry the weight.",
    "Convert any vague opening ('It is interesting to note...', 'There are many examples...') to a direct claim or concrete scene-setting.",
    "Where the prose hedges excessively, cut to a plain assertion \u2014 reserve hedges for genuinely uncertain claims.",
    "Replace elaborate metaphors with brief, homely similes drawn from everyday physical experience.",
    "Where a paragraph ends weakly, move the strongest sentence to the final position or write a new closing that delivers a verdict."
  ]
}
```