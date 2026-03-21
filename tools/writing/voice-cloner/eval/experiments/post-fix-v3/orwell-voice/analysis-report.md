# Voice Analysis Report: George Orwell

**Samples analyzed:** 5
**Skill name:** `orwell-voice`
**Generator:** voice-cloner v2

**Voice:** plain, involved, morally urgent — confessional authority with democratic directness and cumulative precision

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
      "Build the default sentence as a compound or compound-complex structure, chaining independent clauses with commas, semicolons, and coordinating conjunctions ('and', 'but', 'or') to layer qualifications and elaborations within a single breath.",
      "Use subordinate clauses ('which', 'that', 'when', 'if', 'because') to embed reasoning and conditions directly inside the main assertion rather than splitting them into separate sentences.",
      "Vary the rhythm by following a long, layered sentence with a short, declarative punch that delivers the core judgment \u2014 e.g., a long diagnostic sentence followed by 'The point is that the process is reversible.'",
      "Chain parallel examples within a sentence using commas and semicolons, especially when cataloguing bad habits or illustrating a pattern \u2014 let the accumulation itself become the argument.",
      "Open sentences frequently with logical connectives or temporal markers ('Now,', 'But', 'In addition,', 'Meanwhile,', 'As I have tried to show,') to signal the argument's movement explicitly.",
      "Use colons to introduce an explanation, restatement, or consequence of the clause that precedes them \u2014 the colon functions as a logical 'therefore' or 'namely'."
    ],
    "do_not": [
      "Do not write strings of simple, subject-verb-object sentences in succession \u2014 the rhythm depends on embedded clauses and layered qualifications, not staccato declaration.",
      "Do not use semicolons merely for variety; use them only to balance two closely related independent clauses that form a logical pair or contrast.",
      "Do not let a sentence sprawl without internal punctuation \u2014 even the longest sentences must be governed by clear comma placement that guides the reader through each clause."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks.\"",
      "\"It becomes ugly and inaccurate because our thoughts are foolish, but the slovenliness of our language makes it easier for us to have foolish thoughts.\"",
      "\"The great enemy of clear language is insincerity.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person ('I') when stating your own position, making a concession, or narrating your own process \u2014 but shift to the impersonal 'one' or generic 'you' when stating general principles or addressing the reader as a fellow practitioner.",
      "Maintain the tone of a plain-speaking, confident authority who is slightly exasperated but never condescending \u2014 you are sharing a diagnosis with peers, not lecturing inferiors.",
      "Signal certainty through blunt declarative statements ('The great enemy of clear language is insincerity') and signal uncertainty through explicit hedges ('I should expect to find \u2014 this is a guess which I have not sufficient knowledge to verify').",
      "Use contractions freely in argumentative passages to maintain a conversational, unpretentious register \u2014 this enacts the very plainness you advocate.",
      "Adopt an attitude of democratic inclusion: frame the problem as 'our' shared failing and the solution as something 'one' or 'we' can achieve, rather than positioning yourself above the reader.",
      "Deploy dry, understated humor through ironic juxtaposition and deadpan observation rather than jokes or wit for its own sake."
    ],
    "do_not": [
      "Do not adopt an academic or detached register \u2014 the voice must feel personally invested and slightly combative, not neutral.",
      "Do not use false modesty or excessive hedging \u2014 state the position plainly, then qualify only where genuinely uncertain.",
      "Do not moralize or preach; instead, demonstrate the problem with concrete examples and let the reader draw the obvious conclusion."
    ],
    "evidence": [
      "\"I will come back to this presently, and I hope that by that time the meaning of what I have said here will have become clearer.\"",
      "\"Look back through this essay, and for certain you will find that I have again and again committed the very faults I am protesting against.\"",
      "\"In our age there is no such thing as 'keeping out of politics'.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a widely held but wrong assumption, state it fairly, then dismantle it \u2014 begin from the reader's likely position and work outward.",
      "Construct arguments as chains of cause and effect: present a claim, show its mechanism, then demonstrate how the mechanism can be reversed or exploited.",
      "Use concrete, everyday analogies to ground abstract arguments \u2014 prefer domestic and physical metaphors (drinking, hen-houses, tea leaves blocking a sink, cavalry horses answering the bugle) over technical or literary ones.",
      "Introduce long catalogues of real-world examples as primary evidence \u2014 quote actual bad writing at length and then anatomize it, rather than merely asserting that bad writing exists.",
      "Handle counterarguments by stating them fairly in the opponent's own words, then pivoting with 'But' or 'On the other hand' to show where they break down.",
      "Move the argument in a linear, progressive structure: diagnosis (the problem exists) \u2192 taxonomy (here are the specific forms) \u2192 mechanism (here is why it happens) \u2192 prescription (here is what to do) \u2192 self-aware caveat (I too am guilty).",
      "Anticipate the reader's objection by voicing it yourself, then immediately answering it \u2014 e.g., 'I do not want to exaggerate. This kind of writing is not yet universal...'"
    ],
    "do_not": [
      "Do not make claims without immediately providing concrete illustration \u2014 every assertion must be followed by an example or demonstration.",
      "Do not rely on appeals to authority; rely on the reader's own ability to see the problem once you have placed the evidence before them.",
      "Do not present the argument as settled or simple \u2014 always include a self-aware qualification that acknowledges your own complicity or the limits of your position."
    ],
    "evidence": [
      "\"A man may take to drink because he feels himself to be a failure, and then fail all the more completely because he drinks. It is rather the same thing that is happening to the English language.\"",
      "\"Defenceless villages are bombarded from the air, the inhabitants driven out into the countryside, the cattle machine-gunned, the huts set on fire with incendiary bullets: this is called pacification.\"",
      "\"I do not want to exaggerate. This kind of writing is not yet universal, and outcrops of simplicity will occur here and there in the worst-written page.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear topic sentence or thesis that announces what the paragraph will demonstrate \u2014 then spend the rest of the paragraph proving it through examples and elaboration.",
      "Close paragraphs by either pivoting to the next idea with a forward reference ('I will come back to this presently') or by delivering a summary judgment that locks the point into place.",
      "Within paragraphs, sequence ideas as: claim \u2192 mechanism/explanation \u2192 concrete example(s) \u2192 restatement or implication of the claim in stronger terms.",
      "Use transitional phrases at paragraph openings ('Now that I have made this catalogue', 'As I have tried to show', 'In our time') to explicitly connect each paragraph to the overall argument's progression.",
      "When cataloguing examples, let the paragraph expand to accommodate a full inventory \u2014 do not artificially break a list across paragraphs if it serves a single argumentative point.",
      "Use single-sentence paragraphs or very short paragraphs for rules, prescriptions, or summative declarations that deserve to stand alone with emphasis."
    ],
    "do_not": [
      "Do not begin paragraphs with an example before the reader knows the point \u2014 always establish the frame before filling it with evidence.",
      "Do not end paragraphs with a trailing, inconclusive thought \u2014 each paragraph must arrive somewhere, even if that destination is a deliberate pivot to the next section.",
      "Do not use abrupt, unmarked transitions between paragraphs \u2014 the logical connective tissue must be visible."
    ],
    "evidence": [
      "\"DYING METAPHORS. A newly invented metaphor assists thought by evoking a visual image, while on the other hand a metaphor which is technically 'dead' (e. g. iron resolution) has in effect reverted to being an ordinary word and can generally be used without loss of vividness.\"",
      "\"I will come back to this presently, and I hope that by that time the meaning of what I have said here will have become clearer. Meanwhile, here are five specimens of the English language as it is now habitually written.\"",
      "\"Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy extended analogies drawn from everyday physical life \u2014 plumbing, drinking, construction, animal behavior \u2014 to make abstract linguistic and political arguments tangible.",
      "Use the catalogue as a primary rhetorical weapon: accumulate lists of bad examples, clich\u00e9d phrases, or pretentious words until the sheer weight of evidence overwhelms any possible defense.",
      "Employ the 'translation' device \u2014 take a passage of good writing and rewrite it in the bad style you are criticizing, then anatomize the differences to make your case unanswerable.",
      "Use parallel structure in lists of prescriptions or condemnations: begin each item with the same grammatical form (e.g., 'Never use...', 'Never use...', 'If it is possible...').",
      "Place quoted bad writing in direct contrast with plain restatement to create ironic juxtaposition \u2014 let the reader feel the difference rather than merely being told about it.",
      "Use rhetorical questions sparingly and only when the answer is obvious and damning \u2014 the question should function as an accusation.",
      "Employ the em dash for parenthetical asides that inject a clarification, concession, or ironic aside into the middle of a sentence without breaking its momentum."
    ],
    "do_not": [
      "Do not use metaphors or similes that are themselves clich\u00e9d \u2014 the argument against stale language must be enacted in fresh language.",
      "Do not use exclamation marks \u2014 let the force of the argument and the precision of the words carry the emphasis.",
      "Do not use figurative language merely for decoration; every metaphor and analogy must advance the argument or clarify a point."
    ],
    "evidence": [
      "\"A mass of Latin words falls upon the facts like soft snow, blurring the outline and covering up all the details.\"",
      "\"...prose consists less and less of words chosen for the sake of their meaning, and more and more of phrases tacked together like the sections of a prefabricated hen-house.\"",
      "\"When there is a gap between one's real and one's declared aims, one turns as it were instinctively to long words and exhausted idioms, like a cuttlefish spurting out ink.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by stating the conventional wisdom on the topic \u2014 the thing 'most people' believe \u2014 then immediately signal that you will challenge it. The first paragraph should set up the complacent position so the rest of the essay can dismantle it.",
      "Establish context and stakes in the first paragraph: the reader should know within the opening sentences what is at issue and why it matters.",
      "Close the essay with concrete, actionable prescriptions \u2014 a numbered or bulleted list of rules \u2014 followed by a self-aware caveat that the rules are simple but demand a fundamental change of attitude.",
      "End with a return to the political stakes introduced at the beginning, closing the argumentative circle: the essay should land on the real-world consequences of the problem, not merely on the technical diagnosis.",
      "Use section headers (in caps or bold) to break a long essay into named taxonomic categories when cataloguing types of a phenomenon.",
      "Use numbered lists for specimens or examples that will be referenced later by number, and unnumbered lists for prescriptions or rules.",
      "Use parenthetical footnote markers to signal additional qualifications or examples without cluttering the main text.",
      "Employ quotation marks around words being discussed as words (use-mention distinction) and around phrases being held at ironic arm's length."
    ],
    "do_not": [
      "Do not open with an anecdote, a scene, or an attempt to be clever \u2014 open with the argument itself, stated plainly.",
      "Do not close with a vague, inspirational flourish \u2014 close with specific directives and a clear-eyed restatement of the stakes.",
      "Do not use formatting (bold, italic, headers) for emphasis within running prose \u2014 let word choice and sentence structure carry all tonal weight."
    ],
    "evidence": [
      "\"Most people who bother with the matter at all would admit that the English language is in a bad way, but it is generally assumed that we cannot by conscious action do anything about it.\"",
      "\"Break any of these rules sooner than say anything outright barbarous.\"",
      "\"Political language \u2014 and with variations this is true of all political parties, from Conservatives to Anarchists \u2014 is designed to make lies sound truthful and murder respectable, and to give an appearance of solidity to pure wind.\""
    ]
  }
}
```

### sample-2.txt (3397 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 3397,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the backbone of the prose from medium-length declarative sentences that stack concrete details in a steady, unhurried cadence \u2014 then periodically release tension with a short, blunt statement that lands like a verdict.",
      "Chain clauses with 'and' and 'but' to create a sense of events accumulating or thoughts unfolding in real time, as if the narrator is thinking through the experience while recounting it: 'I was young and ill-educated and I had had to think out my problems in the utter silence that is imposed on every Englishman in the East.'",
      "Use subordinate clauses beginning with 'when', 'if', 'as', and 'that' to embed context, conditions, and qualifications inside the sentence rather than splitting them into separate sentences \u2014 this creates a layered, deliberative quality.",
      "Deploy long catalogue sentences that stack images with commas before gathering them into a summarizing clause: 'The wretched prisoners huddling in the stinking cages of the lock-ups, the grey, cowed faces of the long-term convicts, the scarred buttocks of the men who had been flogged with bamboos \u2014 all these oppressed me with an intolerable sense of guilt.'",
      "Use em dashes to insert parenthetical asides, self-corrections, or restatements mid-sentence, giving the prose a spoken, confessional quality: 'Theoretically \u2014 and secretly, of course \u2014 I was all for the Burmese.'",
      "Place short declarative sentences after long descriptive or argumentative ones to deliver a moral or emotional punch: 'This happened more than once.' / 'That would never do.'"
    ],
    "do_not": [
      "Do not write in clipped, staccato fragments for stylistic effect \u2014 sentences should feel complete and grounded even when short.",
      "Do not front-load sentences with elaborate subordinate clauses before the main verb; keep the subject-verb core accessible early, then extend the sentence with trailing clauses and details.",
      "Do not use flowery periodic sentence structures that delay meaning for rhetorical suspense \u2014 the style is cumulative and additive, not suspenseful."
    ],
    "evidence": [
      "He neither stirred nor fell, but every line of his body had altered.",
      "I had got to shoot the elephant. I had committed myself to doing it when I sent for the rifle.",
      "But in falling he seemed for a moment to rise, for as his hind legs collapsed beneath him he seemed to tower upward like a huge rock toppling, his trunk reaching skyward like a tree."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a retrospective narrator who is simultaneously confessing, reflecting, and arguing \u2014 the 'I' is not heroic but self-aware, often self-incriminating.",
      "Maintain a tone that is earnest, wry, and morally uncomfortable \u2014 the narrator is honest about ugly feelings (hatred, cowardice, vanity) without performing guilt or seeking absolution.",
      "Shift between the personal and the general: move from 'I felt' to 'a white man mustn't' to 'he wears a mask' \u2014 use the specific incident to derive universal observations about power, without signposting the transition.",
      "Express certainty through plain, unhedged declarations ('I knew with perfect certainty that I ought not to shoot him') and uncertainty through candid admission ('I did not even know that the British Empire is dying').",
      "Use contractions freely in narration and inner thought to maintain a conversational, unpretentious register, but avoid them in more formal or generalizing passages to add weight.",
      "Deploy dry, understated irony rather than jokes \u2014 let the absurdity of the situation speak through flat delivery: 'I was very glad that the coolie had been killed; it put me legally in the right.'",
      "Use 'you' occasionally to draw the reader into the narrator's position, making the moral dilemma shared: 'In a job like that you see the dirty work of Empire at close quarters.'"
    ],
    "do_not": [
      "Do not adopt a detached, academic voice \u2014 the narrator must be implicated in what he describes, never above it.",
      "Do not sentimentalize or moralize overtly; let the moral weight emerge from the plain narration of facts and the narrator's candid admissions of ignoble motives.",
      "Do not use self-deprecation as charm \u2014 the self-criticism here is genuine and uncomfortable, not performed for likability."
    ],
    "evidence": [
      "With one part of my mind I thought of the British Raj as an unbreakable tyranny, as something clamped down, in saecula saeculorum, upon the will of prostrate peoples; with another part I thought that the greatest joy in the world would be to drive a bayonet into a Buddhist priest's guts.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "And my whole life, every white man's life in the East, was one long struggle not to be laughed at."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Structure the argument as a narrative that yields its thesis \u2014 do not state the argument first; instead let it emerge from the accumulation of concrete events, so the reader arrives at the conclusion alongside the narrator.",
      "Introduce the central claim through a moment of sudden realization embedded in the story: 'And suddenly I realized that I should have to shoot the elephant after all' \u2014 the argument crystallizes inside the experience rather than being imposed on it.",
      "Use the pattern: narrate event \u2192 reflect on its meaning \u2192 generalize outward. Move fluidly between what happened, what the narrator thought, and what it reveals about larger systems.",
      "Handle internal contradictions honestly by presenting both sides as simultaneously held rather than resolved: 'With one part of my mind I thought\u2026 with another part I thought\u2026' \u2014 do not flatten complexity into a neat thesis.",
      "Build the case through concrete, sensory evidence first (the dead coolie, the elephant eating grass, the crowd's faces) and let the abstraction arise from the image, never the reverse.",
      "Acknowledge counterarguments or alternative interpretations by embedding them in the narrative itself \u2014 'The older men said I was right, the younger men said it was a damn shame' \u2014 rather than constructing formal rebuttals.",
      "Use hedging sparingly and only for genuine epistemic humility ('I dare say', 'I thought then and I think now'), not as politeness or evasion."
    ],
    "do_not": [
      "Do not lead with the thesis or frame the essay as an argument from the opening \u2014 the essay should read as a story that happens to prove something.",
      "Do not resolve moral contradictions neatly; leave the tension between competing impulses visible and uncomfortable.",
      "Do not use abstract reasoning without grounding it in a specific, physical image or event from the narrative."
    ],
    "evidence": [
      "Here was I, the white man with his gun, standing in front of the unarmed native crowd \u2014 seemingly the leading actor of the piece; but in reality I was only an absurd puppet pushed to and fro by the will of those yellow faces behind.",
      "One day something happened which in a roundabout way was enlightening. It was a tiny incident in itself, but it gave me a better glimpse than I had had before of the real nature of imperialism \u2014 the real motives for which despotic governments act.",
      "Feelings like these are the normal by-products of imperialism; ask any Anglo-Indian official, if you can catch him off duty."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a simple temporal or situational statement that reorients the reader in the scene \u2014 'The orderly came back in a few minutes', 'I had halted on the road', 'But at that moment I glanced round' \u2014 then develop the paragraph's thought from that grounding.",
      "Build paragraphs as movements: begin with action or observation, shift into reflection or analysis in the middle, and close with a sentence that either delivers a moral insight or pivots to the next complication.",
      "Close paragraphs with resonant, often epigrammatic sentences that distill the paragraph's meaning: 'He wears a mask, and his face grows to fit it.' / 'That would never do.'",
      "Connect paragraphs through implicit narrative chronology rather than explicit transition words \u2014 the reader follows because events succeed one another, not because connectives steer them.",
      "Within paragraphs, sequence ideas from the concrete and external to the internal and abstract: describe what is seen, then what is felt, then what it means.",
      "Use the 'But' pivot \u2014 open a paragraph with 'But' to signal a reversal of the preceding paragraph's direction, creating a dialectical back-and-forth between intention and reality, desire and compulsion."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore', 'In addition', 'On the other hand') \u2014 let the narrative's own momentum carry the reader forward.",
      "Do not end paragraphs with trailing qualifications or afterthoughts that dilute the closing sentence's force.",
      "Do not organize paragraphs around a single abstract point with supporting examples underneath \u2014 organize them around a moment in time that contains its own argument."
    ],
    "evidence": [
      "But I did not want to shoot the elephant. I watched him beating his bunch of grass against his knees, with that preoccupied grandmotherly air that elephants have.",
      "In the end I could not stand it any longer and went away.",
      "All this was perplexing and upsetting. For at that time I had already made up my mind that imperialism was an evil thing and the sooner I chucked up my job and got out of it the better."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use simile and analogy drawn from the plain and domestic to defamiliarize the dramatic \u2014 compare an elephant to 'a huge and costly piece of machinery', its death-rise to 'a huge rock toppling', its trunk to a tree, skinning to 'one skins a rabbit'. Ground the extraordinary in the mundane.",
      "Employ catalogues of concrete, sensory images separated by commas to build cumulative emotional weight \u2014 stack noun phrases with vivid adjectives before gathering them with a summarizing clause.",
      "Use parenthetical asides in parentheses or dashes to insert candid, off-the-record commentary that breaks the narrative frame: '(Never tell me, by the way, that the dead look peaceful. Most of the corpses I have seen looked devilish.)'",
      "Deploy antithesis and parallel structure to crystallize moral paradoxes: 'seemingly the leading actor of the piece; but in reality I was only an absurd puppet', 'powerless to move and yet powerless to die'.",
      "Use direct address and imperatives sparingly but pointedly \u2014 'ask any Anglo-Indian official, if you can catch him off duty' \u2014 to implicate the reader or issue a quiet challenge.",
      "Employ repetition of key phrases ('I had got to', 'a sahib has got to') to create a sense of compulsion and inevitability, mirroring the narrator's feeling of being trapped.",
      "Use theatrical and performance metaphors (conjurer, trick, leading actor, puppet, mask, dummy, theatre curtain) to develop the essay's central metaphor of colonial authority as performance."
    ],
    "do_not": [
      "Do not use elaborate literary metaphors or allusions that call attention to the writer's cleverness \u2014 metaphors should clarify, not ornament.",
      "Do not use rhetorical questions as a regular device; when a question appears, it should be a genuine one embedded in the narrative rather than a persuasive flourish.",
      "Do not repeat words or phrases for rhythmic beauty alone \u2014 repetition must serve the argument or mirror the narrator's psychological state."
    ],
    "evidence": [
      "He was breathing very rhythmically with long rattling gasps, his great mound of a side painfully rising and falling.",
      "A sahib has got to act like a sahib; he has got to appear resolute, to know his own mind and do definite things.",
      "The thick blood welled out of him like red velvet, but still he did not die."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a plain declaration of situation, place, and the narrator's position within it \u2014 establish the 'I', the setting, and the central tension in the first sentence or two, with a note of self-aware irony: 'I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.'",
      "Provide essential context (who, where, what role) immediately, without scene-setting atmosphere \u2014 the context is factual and brisk, orienting the reader for what matters: the moral situation.",
      "Close the essay with a quiet, devastating admission that reframes everything that came before \u2014 the final sentence should reveal the narrator's true motive or the experience's true meaning in a way that is understated but unforgettable: 'I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.'",
      "Structure the essay as a single extended narrative with embedded argument \u2014 chronological storytelling carries the intellectual content. The form is the personal essay that functions as political argument through autobiography.",
      "Use minimal formatting \u2014 no headers, no lists, no bold or italic emphasis. The prose is a continuous flow of paragraphs. Use single quotation marks for reported speech and specialized terms.",
      "Reserve em dashes for parenthetical insertions and dramatic restatements \u2014 they are the primary punctuation tool for creating rhythm breaks and asides within the otherwise plain prose.",
      "End the narrative section before the argumentative coda \u2014 separate the story's climax (the elephant's death) from the aftermath and moral accounting, giving the reader space to feel before being asked to think."
    ],
    "do_not": [
      "Do not open with a philosophical statement or epigraph \u2014 begin in the concrete, specific situation.",
      "Do not close with a neat moral lesson or inspirational takeaway \u2014 the ending should be uncomfortable, honest, and slightly self-lacerating.",
      "Do not use any visual formatting devices (headers, bullet points, bold text) \u2014 the essay's authority comes from its prose alone."
    ],
    "evidence": [
      "In Moulmein, in Lower Burma, I was hated by large numbers of people \u2014 the only time in my life that I have been important enough for this to happen to me.",
      "I often wondered whether any of the others grasped that I had done it solely to avoid looking a fool.",
      "One day something happened which in a roundabout way was enlightening."
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
      "Build sentences by stacking concrete physical details in series, separated by commas, so the reader accumulates sensory impressions clause by clause: subject doing X, object doing Y, detail after detail.",
      "Chain clauses with 'and' to create a sense of continuous, unhurried observation \u2014 events linked as though the narrator is simply recording what happens next, without editorial intervention.",
      "When constructing longer sentences, use participial phrases and absolute constructions ('gripping him by arm and shoulder', 'his feet printed themselves on the wet gravel') to embed action within action, giving the prose a layered, simultaneous quality.",
      "Alternate between plain declarative sentences that state facts ('He was a Hindu') and longer sentences that unfold a scene through accumulated detail \u2014 the plain sentences anchor, the longer ones immerse.",
      "Use appositive phrases liberally to characterize people and things in passing ('Francis, the head jailer, a fat Dravidian in a white drill suit and gold spectacles') \u2014 embed description into the flow of narration rather than breaking it out into separate sentences."
    ],
    "do_not": [
      "Do not use rhetorical fragments for dramatic emphasis \u2014 maintain grammatically complete sentences even when delivering a shock.",
      "Do not front-load sentences with abstract commentary; lead with concrete observation and let the reader draw the abstraction.",
      "Do not use periodic sentence structures that withhold the main clause until the end for suspense \u2014 prefer cumulative sentences that begin with the subject and add details after."
    ],
    "evidence": [
      "At each step his muscles slid neatly into place, the lock of hair on his scalp danced up and down, his feet printed themselves on the wet gravel.",
      "They crowded very close about him, with their hands always on him in a careful, caressing grip, as though all the while feeling him to make sure he was there.",
      "Francis, the head jailer, a fat Dravidian in a white drill suit and gold spectacles, waved his black hand."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write as a first-person witness who is embedded in the scene but observing with detachment \u2014 'I' is present but rarely acting, mostly watching and recording.",
      "Use 'we' to implicate the narrator (and by extension the reader) in collective complicity \u2014 the narrator does not exempt himself from what is happening.",
      "Maintain a tone that is scrupulously calm and matter-of-fact even when describing horror \u2014 let the plain reporting of atrocity do the emotional work rather than editorializing.",
      "Reserve explicit moral commentary for one or two carefully placed passages; surround these with strictly observational prose so the commentary lands with maximum force.",
      "Use contractions freely in dialogue to capture spoken register, and use them in narration to maintain a conversational, unaffected voice \u2014 avoid any sense of literary stiffness.",
      "Signal uncertainty or moral discomfort through hedging phrases like 'it is curious' or 'perhaps' rather than through overt emotional language."
    ],
    "do_not": [
      "Do not adopt an overtly passionate or outraged tone \u2014 the power comes from restraint and understatement.",
      "Do not address the reader directly with 'you' \u2014 keep the reader as an implicit fellow witness, not an interlocutor.",
      "Do not moralize continuously; one concentrated passage of reflection is more devastating than scattered commentary."
    ],
    "evidence": [
      "It is curious, but till that moment I had never realized what it means to destroy a healthy, conscious man.",
      "the same thought was in all our minds: oh, kill him quickly, get it over, stop that abominable noise!",
      "I found that I was laughing quite loudly. Everyone was laughing."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument through narrative accumulation \u2014 let a sequence of observed details lead inexorably to a moral insight, rather than stating the thesis and then supporting it.",
      "Place the central epiphany at a moment of small, seemingly trivial action (stepping aside to avoid a puddle) rather than at the moment of greatest drama \u2014 the argument gains force from the contrast between the smallness of the trigger and the enormity of the realization.",
      "Use a single extended reflection passage to articulate the essay's core idea, then immediately return to concrete narration \u2014 do not belabor the point.",
      "Let irony carry the counter-argument: instead of engaging opposing views directly, juxtapose the gravity of the event with the characters' banal reactions so the reader feels the dissonance.",
      "Structure the logic as experiential discovery: the narrator did not know something, then saw something specific, and now understands \u2014 present moral arguments as things learned through witnessing, not as positions held in advance."
    ],
    "do_not": [
      "Do not present a formal thesis statement at the beginning \u2014 let the reader discover the argument through the narrative.",
      "Do not use syllogistic or deductive reasoning explicitly; the logic should feel inductive, arising from accumulated particulars.",
      "Do not argue against a named opponent or straw man \u2014 let the described reality be the argument."
    ],
    "evidence": [
      "When I saw the prisoner step aside to avoid the puddle, I saw the mystery, the unspeakable wrongness, of cutting a life short when it is in full tide.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a concrete action or scene-setting statement that anchors the reader in time and place ('We set out for the gallows', 'Eight o'clock struck').",
      "Within paragraphs, sequence details cinematically \u2014 move from wide establishing shot to close physical detail, as though a camera is tracking through the scene.",
      "Use the final sentence of a paragraph to introduce a complication, shift in tone, or telling detail that propels the reader into the next paragraph \u2014 create forward momentum at paragraph boundaries.",
      "Transition between paragraphs through chronological progression of events rather than through explicit logical connectives \u2014 the narrative sequence itself provides coherence.",
      "When a paragraph contains dialogue, embed it within narration so that speech acts are surrounded by physical description and the speaker's manner \u2014 never let dialogue float without scenic context.",
      "Reserve standalone single-sentence paragraphs for dialogue exchanges that need rapid pacing."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences \u2014 open with action or sensory detail.",
      "Do not use transitional phrases like 'furthermore,' 'in addition,' or 'on the other hand' \u2014 transitions should be implicit in the chronology and juxtaposition of scenes.",
      "Do not cluster all description at the start of a paragraph and all action at the end; interweave them throughout."
    ],
    "evidence": [
      "A dreadful thing had happened \u2014 a dog, come goodness knows whence, had appeared in the yard.",
      "The dead man was a hundred yards away."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use similes that compare the serious to the mundane or domestic to create dissonance and black humor \u2014 compare a condemned man's handling to 'men handling a fish which is still alive,' a moustache to 'the moustache of a comic man on the films.'",
      "Employ em dashes to insert sudden disruptions, asides, or pivots into otherwise steady prose \u2014 the dash should feel like an interruption of the narrator's composure.",
      "Use lists of concrete bodily details ('bowels digesting food, skin renewing itself, nails growing, tissues forming') to make abstract ideas viscerally physical.",
      "Deploy repetition of a word or sound to create incantatory effect \u2014 especially to represent something persistent and unbearable (the repeated 'Ram! Ram! Ram!').",
      "Use ironic juxtaposition as the primary persuasive device: place something horrific next to something banal, and let the reader feel the moral weight of the contrast without being told to feel it.",
      "Render dialect and speech patterns phonetically ('iss' for 'is,' 'hass' for 'has,' 'wass' for 'was') to give dialogue documentary texture and to individualize speakers."
    ],
    "do_not": [
      "Do not use extended metaphors or allegories \u2014 keep figurative language brief and grounded in everyday objects.",
      "Do not use rhetorical questions to the reader; if questions appear, they should be in dialogue or in the narrator's internal reflection, not as a persuasive device aimed outward.",
      "Do not use hyperbole or superlatives to amplify emotional effect \u2014 the more restrained the language, the more powerful the effect."
    ],
    "evidence": [
      "It was like men handling a fish which is still alive and may jump back into the water.",
      "A sickly light, like yellow tinfoil, was slanting over the high walls into the jail yard.",
      "'Ram! Ram! Ram! Ram! Ram!'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a simple declarative sentence that places the reader in a specific time and location \u2014 establish the scene immediately with no preamble or context-setting abstraction.",
      "In the opening paragraph, move quickly from setting to the human subjects and their situation \u2014 ground the reader in who is there and what is about to happen within the first few sentences.",
      "Close the piece with a brutally understated sentence that forces the reader to confront the moral chasm between what just happened and how people are behaving \u2014 the final line should land like a quiet punch.",
      "Use the closing to juxtapose normalcy with the extraordinary event that preceded it \u2014 the characters have moved on, but the reader cannot.",
      "Follow the genre conventions of literary reportage: first-person witness account, chronological narration, dialogue rendered as closely as possible to speech, minimal editorializing, one passage of explicit reflection embedded within the otherwise observational account.",
      "Use single quotation marks for dialogue (British convention). Render direct speech with full scenic context \u2014 who is speaking, their manner, their physical position.",
      "Use em dashes for parenthetical insertions and abrupt shifts. Avoid parentheses almost entirely. Do not use ellipses."
    ],
    "do_not": [
      "Do not open with a generalization, a thesis, or a philosophical statement \u2014 begin in the middle of the physical scene.",
      "Do not close with an explicit moral lesson or a neat summary of what the essay 'means' \u2014 end on a concrete image or statement that carries the meaning implicitly.",
      "Do not use section breaks, headers, or any structural formatting within the essay \u2014 it should read as one continuous, unbroken narrative flow."
    ],
    "evidence": [
      "It was in Burma, a sodden morning of the rains.",
      "We all had a drink together, native and European alike, quite amicably. The dead man was a hundred yards away."
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
      "Build sentences by chaining multiple independent and dependent clauses with commas and coordinating conjunctions ('and', 'but'), letting a single sentence carry several related observations before stopping.",
      "Use subordinate clauses at the front or middle of sentences to add temporal, causal, or conditional context before delivering the main point: 'For this and other reasons I was somewhat lonely, and I soon developed disagreeable mannerisms which made me unpopular throughout my schooldays.'",
      "Interrupt sentences with parenthetical asides set off by dashes or commas to insert qualifications, clarifications, or self-corrections mid-flow: 'I wrote vers d'occasion, semi-comic poems which I could turn out at what now seems to me astonishing speed \u2014 at fourteen I wrote a whole rhyming play, in imitation of Aristophanes, in about a week \u2014 and helped to edit a school magazines'.",
      "When constructing longer sentences, accumulate details through serial phrases separated by commas, building momentum through enumeration rather than through nested subordination.",
      "Periodically drop a plain, declarative sentence with no qualification to deliver a conclusion or judgment with maximum force: 'That was the total of the would-be serious work that I actually set down on paper during all those years.'"
    ],
    "do_not": [
      "Do not write in staccato bursts of consistently short, unconnected sentences \u2014 always weave clauses together to build a discursive, thinking-aloud rhythm.",
      "Do not use elaborate syntactic inversions or suspend the main verb until the end of a long sentence; keep the grammar flowing forward naturally even in complex sentences.",
      "Do not rely on semicolons as the primary way to join thoughts \u2014 prefer commas with conjunctions or dashes for mid-sentence pivots."
    ],
    "evidence": [
      "From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.",
      "I knew that I had a facility with words and a power of facing unpleasant facts, and I felt that this created a sort of private world in which I could get my own back for my failure in everyday life.",
      "It is bound to be a failure, every book is a failure, but I do know with some clarity what kind of book I want to write."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in a first-person voice that is confessional yet unsentimental \u2014 reveal personal weaknesses and failures plainly, without seeking the reader's sympathy or admiration.",
      "Maintain an earnest, slightly self-deprecating tone: acknowledge vanity, laziness, and failure as facts rather than performing humility theatrically.",
      "Use 'one' as an impersonal pronoun when generalizing from personal experience to universal truths: 'one can write nothing readable unless one constantly struggles to efface one's own personality.'",
      "Signal certainty through plain assertion ('It is humbug to pretend this is not a motive') and uncertainty through measured hedges like 'I think', 'I suppose', 'I cannot say with certainty' \u2014 never through excessive qualification or academic circumlocution.",
      "Use contractions in moments of direct, conversational assertion ('I don't want to leave that as the final impression') but default to uncontracted forms in more formal or reflective passages.",
      "When making bold claims, immediately ground them with concrete personal evidence or examples rather than leaving them abstract."
    ],
    "do_not": [
      "Do not adopt a detached, academic voice \u2014 always maintain the sense of a specific person thinking through their own experience.",
      "Do not wallow in self-pity or romanticize suffering; state hardships flatly and move on.",
      "Do not use irony or humor as the dominant mode \u2014 the tone is fundamentally serious and direct, with occasional dry understatement rather than jokes."
    ],
    "evidence": [
      "I was somewhat lonely, and I soon developed disagreeable mannerisms which made me unpopular throughout my schooldays.",
      "All writers are vain, selfish, and lazy, and at the very bottom of their motives there lies a mystery.",
      "I don't want to leave that as the final impression."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Begin with autobiographical narrative, then extract general principles from the specific experience \u2014 move from 'this happened to me' to 'this is how it works for all writers.'",
      "Introduce a taxonomy or numbered classification to organize abstract claims: present a list of categories (motives, types, impulses) and then discuss each one in turn with examples.",
      "Use concessive structures ('Nevertheless', 'But', 'And yet it is also true that') to acknowledge complexity \u2014 present one side of an argument, then pivot to the complicating truth.",
      "Ground abstract claims in concrete, specific evidence: name books, dates, places, and people rather than speaking in generalities.",
      "Preemptively address the reader's likely objection and fold it into the argument: 'I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.'",
      "Build the argument chronologically through personal history, using temporal markers ('From a very early age', 'When I was about sixteen', 'By the end of 1935') to structure the logical progression."
    ],
    "do_not": [
      "Do not present arguments as purely abstract philosophical positions without anchoring them in lived experience and specific instances.",
      "Do not hedge every claim into insignificance \u2014 state positions clearly and then qualify only where genuinely necessary.",
      "Do not use formal logical apparatus (premises, therefore, QED) \u2014 let the argument emerge naturally from the narrative."
    ],
    "evidence": [
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development.",
      "It is humbug to pretend this is not a motive, and a strong one.",
      "Every line of serious work that I have written since 1936 has been written, directly or indirectly, against totalitarianism and for democratic socialism, as I understand it."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal or thematic anchor that orients the reader: a time reference ('When I was about sixteen'), a logical transition ('However, throughout this time'), or a direct claim ('I give all this background information because...').",
      "Within a paragraph, develop a single thread through accumulation: state a point, then pile on examples, qualifications, and sub-narratives that elaborate on it before moving to the next paragraph.",
      "Close paragraphs with a sentence that either delivers a summary judgment or pivots toward the next idea, creating forward momentum: 'That was the total of the would-be serious work that I actually set down on paper during all those years.'",
      "Use explicit transition words and phrases at paragraph boundaries ('However', 'But side by side with all this', 'And yet') to signal the logical relationship between sections.",
      "Allow some paragraphs to function as extended narratives that cover years of experience in a single sweep, organized chronologically within the paragraph."
    ],
    "do_not": [
      "Do not begin paragraphs with vague or decorative openings \u2014 always establish what this paragraph is about in the first sentence.",
      "Do not let a paragraph drift across multiple unrelated topics; each paragraph should have a discernible central thread even when it contains digressions.",
      "Do not end paragraphs with trailing, unresolved fragments \u2014 close with a statement that has weight or direction."
    ],
    "evidence": [
      "However, throughout this time I did in a sense engage in literary activities.",
      "That was the total of the would-be serious work that I actually set down on paper during all those years.",
      "I give all this background information because I do not think one can assess a writer's motives without knowing something of his early development."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use enumeration and serial listing to give weight and comprehensiveness to a claim: 'Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity.'",
      "Deploy aphoristic, epigrammatic sentences as culminating statements: 'Good prose is like a windowpane.' 'Every book is a failure.'",
      "Use analogy and simile drawn from everyday, physical experience rather than literary or abstract domains: 'Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.'",
      "Employ the 'etc., etc.' or 'and the like' construction to suggest the list could continue \u2014 implying the reader can fill in the rest, creating a sense of shared understanding.",
      "Use deliberate repetition of key phrases across the essay to build thematic coherence: repeat 'political purpose', 'aesthetic', 'motive' as anchoring terms that recur throughout.",
      "Use em dashes for parenthetical insertions that add precision or ironic qualification: 'i.e. seriously intended', 'the Indian Imperial Police, in Burma'.",
      "Use direct quotation \u2014 both of others and of oneself \u2014 to dramatize moments and make abstract arguments concrete: ''Why did you put in all that stuff?' he said.'"
    ],
    "do_not": [
      "Do not use elaborate extended metaphors or allegorical structures \u2014 keep figurative language brief and pointed.",
      "Do not deploy rhetorical questions as a primary persuasive device; prefer direct assertion.",
      "Do not use flowery or ornamental language \u2014 the persuasive power comes from plainness and directness, not from verbal display."
    ],
    "evidence": [
      "Good prose is like a windowpane.",
      "Writing a book is a horrible, exhausting struggle, like a long bout of some painful illness.",
      "Writers share this characteristic with scientists, artists, politicians, lawyers, soldiers, successful businessmen \u2014 in short, with the whole top crust of humanity."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct, autobiographical declaration that establishes the essay's subject and the author's relationship to it in the very first sentence: plunge immediately into personal history without preamble or scene-setting.",
      "Structure the essay as a chronological autobiography that gradually widens into general argument \u2014 begin with childhood, move through formative experiences, arrive at present-day principles.",
      "Use a numbered or labeled list format (i, ii, iii, iv) when presenting a taxonomy or classification within an essay \u2014 break from pure prose to give the reader structural clarity.",
      "Close by circling back to complicate or qualify the essay's own argument \u2014 end with self-aware honesty rather than triumphant conclusion: acknowledge the impossibility of full self-knowledge.",
      "In the final paragraph, deliver a memorable aphorism or compressed truth that encapsulates the essay's central tension, then close with a confession of uncertainty that keeps the argument open.",
      "Use parenthetical abbreviations and Latin tags sparingly but naturally ('i.e.', 'etc.') as markers of educated but unpretentious prose.",
      "Incorporate quoted poetry or other texts when they serve as evidence for the autobiographical argument \u2014 let the quoted material do expressive work the prose alone cannot."
    ],
    "do_not": [
      "Do not open with a question, a provocative generalization, or a scene \u2014 open with a plain autobiographical statement.",
      "Do not close with a neat summary or call to action \u2014 end with an honest, unresolved tension that respects the complexity of the subject.",
      "Do not use headers, bullet points, or heavy formatting outside of enumerated lists \u2014 the essay should flow as continuous prose with minimal structural scaffolding."
    ],
    "evidence": [
      "From a very early age, perhaps the age of five or six, I knew that when I grew up I should be a writer.",
      "Looking back through the last page or two, I see that I have made it appear as though my motives in writing were wholly public-spirited. I don't want to leave that as the final impression.",
      "I cannot say with certainty which of my motives are the strongest, but I know which of them deserve to be followed."
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
      "Build sentences that accumulate detail through layered subordinate clauses and parenthetical asides, piling qualification upon qualification before arriving at the main point \u2014 the sentence should feel like a mind working through a memory in real time.",
      "Chain clauses with commas and coordinating conjunctions ('and', 'but', 'or') to create a rolling, discursive momentum that mimics spoken recollection rather than formal prose.",
      "Use parenthetical insertions \u2014 set off by dashes, parentheses, or commas \u2014 to inject commentary, correction, or self-doubt mid-sentence, as though the narrator is editing his own memory while narrating it.",
      "Deploy abrupt, declarative sentences after long, clause-heavy ones to deliver moral or emotional judgments with blunt force.",
      "Employ compound-complex structures as the default sentence shape: a main clause modified by at least one subordinate clause and often extended by a second main clause joined with a conjunction."
    ],
    "do_not": [
      "Do not write sentences that are uniformly balanced or symmetrical \u2014 the rhythm should feel asymmetric, with expansions and contractions that track the narrator's emotional engagement.",
      "Do not use fragmented, staccato prose for effect \u2014 even short sentences should be grammatically complete and tonally measured.",
      "Do not front-load sentences with multiple adverbial phrases before the subject \u2014 begin with the subject or a brief temporal/spatial marker, then expand afterward."
    ],
    "evidence": [
      "\"I was now aged eight, so that this was a reversion to a habit which I must have grown out of at least four years earlier.\"",
      "\"Sin was not necessarily something that you did: it might be something that happened to you.\"",
      "\"He would tap away at one's skull with his silver pencil, which, in my memory, seems to have been about the size of a banana, and which certainly was heavy enough to raise a bump: or he would pull the short hairs round one's ears, or, occasionally, reach out under the table and kick one's shin.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from the perspective of an adult narrator looking back at childhood, maintaining a double consciousness: the child's immediate terror and confusion layered beneath the adult's ironic, analytical detachment.",
      "Use the first person ('I') for specific autobiographical episodes but shift to the impersonal 'one' or generic 'you' when drawing general conclusions about childhood psychology \u2014 this elevates personal anecdote into universal observation.",
      "Maintain an earnest, unsparing tone that refuses both self-pity and sentimentality \u2014 describe suffering plainly and let the facts generate the emotional response.",
      "Signal certainty through flat declarative assertion ('It was a crime', 'This did not happen very often') and signal uncertainty through explicit hedges that name the limits of memory ('I forget how', 'I cannot remember whether', 'I must have had glimpses').",
      "Use contractions sparingly \u2014 reserve them almost exclusively for quoted dialogue and moments of colloquial immediacy, keeping the narrative voice itself largely uncontracted and formal.",
      "Employ dry, understated humor through juxtaposition and anticlimax rather than jokes \u2014 place an absurd detail next to a grave one and let the contrast do the work."
    ],
    "do_not": [
      "Do not adopt a confessional, emotionally effusive tone \u2014 avoid exclamation-heavy prose or language that begs the reader's sympathy.",
      "Do not write with clinical detachment that strips away all feeling \u2014 the voice must carry moral weight and suppressed anger beneath its measured surface.",
      "Do not use sarcasm or snark \u2014 the irony should be situational and restrained, arising from the gap between the child's understanding and the adult's."
    ],
    "evidence": [
      "\"I do not want to claim that this idea flashed into my mind as a complete novelty at this very moment, under the blows of Sambo's cane: I must have had glimpses of it even before I left home, for my early childhood had not been altogether happy.\"",
      "\"Any lesser person would have been called a dirty little beast and ordered out of the room instantly: but Sambo and Flip laughed it off in a 'boys will be boys' spirit.\"",
      "\"'I wish I'd had that caning before I went up for the exam,' he said sadly \u2014 a remark which I felt to be contemptible, but which I perfectly well understood.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through concrete anecdote first, then extract the general principle \u2014 never state the thesis abstractly before the reader has lived through the evidence.",
      "Build arguments by accumulating specific, vivid examples that together form an overwhelming case, rather than by citing authorities or constructing syllogisms.",
      "Handle counterarguments and complexity through honest self-qualification: acknowledge ambiguity in your own motives and memories ('I could not be sure which', 'partly... partly... but partly also') rather than presenting a clean narrative.",
      "Structure logic associatively within episodes \u2014 let one memory trigger another related memory, connected by phrases like 'Here is an example' or 'There is one more thing to be remarked' \u2014 but maintain a clear chronological and thematic spine across the whole piece.",
      "Use moral generalizations as pivot points between episodes: state a broad truth about childhood, power, or psychology, then immediately ground it in a new specific scene.",
      "Hedge by naming the specific source of uncertainty \u2014 faulty memory, emotional confusion, the child's limited understanding \u2014 rather than using vague qualifiers like 'perhaps' or 'somewhat'."
    ],
    "do_not": [
      "Do not construct arguments through formal logical apparatus (premises, therefore, QED) \u2014 the persuasion must feel experiential, not philosophical.",
      "Do not dismiss or minimize the significance of childhood experiences \u2014 treat the child's perspective with full moral seriousness even while noting its distortions.",
      "Do not present events as having single, clean causes \u2014 always gesture toward the layered, contradictory motivations operating simultaneously."
    ],
    "evidence": [
      "\"I knew the bed-wetting was (a) wicked and (b) outside my control. The second fact I was personally aware of, and the first I did not question.\"",
      "\"It was possible, therefore, to commit a sin without knowing that you committed it, without wanting to commit it, and without being able to avoid it.\"",
      "\"I was crying partly because I felt that this was expected of me, partly from genuine repentance, but partly also because of a deeper grief which is peculiar to childhood and not easy to convey.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal or situational marker that anchors the reader in a specific scene or moment ('After the second or third offence', 'A little later', 'Very early it was impressed upon me').",
      "Sequence ideas within paragraphs by moving from external event to internal reaction to reflective commentary \u2014 action, then feeling, then meaning.",
      "Close paragraphs with a sentence that delivers a moral insight, an ironic observation, or a forward-looking hook that propels the reader into the next episode.",
      "Connect paragraphs through chronological progression within episodes and thematic bridging between episodes \u2014 use transitional sentences like 'So much for the episode of the bed-wetting' to explicitly close one thread before opening another.",
      "Allow paragraphs to expand into long, unbroken blocks when narrating a sustained episode with mounting emotional intensity \u2014 do not break the paragraph at artificial intervals when the scene demands continuous immersion.",
      "Use single-sentence paragraphs exclusively for quoted speech or for stark declarations that deserve isolation for dramatic emphasis."
    ],
    "do_not": [
      "Do not begin paragraphs with abstract topic sentences that telegraph the argument \u2014 lead with scene, action, or a specific claim, not with meta-commentary about what the paragraph will discuss.",
      "Do not use formulaic transition words ('Furthermore', 'Moreover', 'In addition') \u2014 transitions should feel organic, arising from the narrative's own momentum.",
      "Do not break a continuous scene into multiple short paragraphs for visual variety \u2014 keep the scene unified in a single block and let its internal rhythm carry the reader."
    ],
    "evidence": [
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"To grasp the effect of this kind of thing on a child of ten or twelve, one has to remember that the child has little sense of proportion or probability.\"",
      "\"'REPORT YOURSELF to the Headmaster after breakfast!'\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use lists of three (tricolon) as the primary structural device for emphasis and completeness: 'without knowing that you committed it, without wanting to commit it, and without being able to avoid it'.",
      "Employ precise, sensory metaphors and similes drawn from the physical, everyday world \u2014 compare abstract experiences to concrete objects and actions ('like muffled drums', 'as cynically as a goose is crammed for Christmas', 'as one keeps a sleepy person awake by sticking pins in him').",
      "Use direct quotation liberally \u2014 reproduce dialogue and remembered phrases verbatim to let characters indict themselves through their own words rather than through the narrator's editorializing.",
      "Deploy typographical emphasis (capitals, italics) sparingly and only to reproduce how a phrase sounded or felt in the child's mind \u2014 'REPORT YOURSELF' in capitals because 'that was how it appeared in my mind'.",
      "Use rhetorical questions to invite the reader into a shared moral inquiry rather than to create dramatic effect \u2014 phrase them as genuine puzzles about memory, motive, or meaning.",
      "Repeat key phrases and words across paragraphs ('bed-wetting', 'the exam', 'your people aren't rich') to create motifs that accumulate weight through recurrence."
    ],
    "do_not": [
      "Do not use extended or elaborate metaphors that call attention to their own cleverness \u2014 metaphors should illuminate, not display.",
      "Do not use pop culture references or contemporary allusions \u2014 analogies should be drawn from universal physical experience or from the specific milieu being described.",
      "Do not employ apostrophe, exclamatory rhetoric, or sentimental appeals to the reader \u2014 persuade through accumulation of evidence and moral clarity, not through emotional pressure."
    ],
    "evidence": [
      "\"a sense of desolate loneliness and helplessness, of being locked up not only in a hostile world but in a world of good and evil where the rules were such that it was actually not possible for me to keep them.\"",
      "\"'You are living on my bounty' was his favourite phrase in this context. At least once I listened to these words between blows of the cane.\"",
      "\"crammed with learning as cynically as a goose is crammed for Christmas\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct plunge into a specific episode \u2014 name the place, establish the situation, and begin the narrative action within the first sentence, with no throat-clearing or abstract preamble.",
      "Use parenthetical qualifications in opening sentences to immediately establish the narrator's scrupulous honesty about memory ('not immediately, but after a week or two, just when I seemed to be settling into the routine').",
      "Close episodes with a terse, summary judgment that carries moral weight \u2014 a sentence that feels like the dropping of a gavel ('So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt').",
      "Transition between major sections by explicitly naming the shift: announce that one topic is finished and another is beginning, in plain language.",
      "Follow the conventions of the autobiographical essay: first-person retrospection, real names replaced by nicknames, chronological narration interrupted by present-tense reflection, and a consistent interplay between past experience and present understanding.",
      "Use em dashes for parenthetical commentary and mid-sentence interjections. Use colons to set up explanatory or climactic clauses. Avoid semicolons almost entirely.",
      "Format quoted dialogue as its own paragraph when it carries dramatic weight, and integrate brief quotations into the narrative flow when they serve as evidence."
    ],
    "do_not": [
      "Do not open with a generalization, a question, or a provocative thesis statement \u2014 begin in medias res with a concrete, situated 'I'.",
      "Do not close with a neat resolution or uplifting takeaway \u2014 endings should feel honest, unresolved, or darkly ironic, acknowledging complexity rather than providing comfort.",
      "Do not use headers, bullet points, or any formatting that breaks the continuous prose \u2014 the essay should flow as an unbroken narrative with only paragraph breaks for structure."
    ],
    "evidence": [
      "\"Soon after I arrived at St Cyprian's (not immediately, but after a week or two, just when I seemed to be settling into the routine of school life) I began wetting my bed.\"",
      "\"So much for the episode of the bed-wetting. But there is one more thing to be remarked.\"",
      "\"So perhaps this barbarous remedy does work, though at a heavy price, I have no doubt.\""
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
  "one_line_description": "plain, involved, morally urgent \u2014 confessional authority with democratic directness and cumulative precision",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build the default sentence as a compound or compound-complex structure, chaining independent clauses with commas, 'and', 'but', and subordinate clauses ('which', 'that', 'when', 'if', 'because') to layer qualifications and elaborations within a single breath.",
      "Use colons to introduce an explanation, restatement, or consequence of the preceding clause \u2014 the colon functions as a logical 'therefore' or 'namely'.",
      "Chain parallel examples within a sentence using commas and semicolons, especially when cataloguing instances or illustrating a pattern \u2014 let the accumulation itself become the argument.",
      "Use em dashes to insert parenthetical asides, self-corrections, or restatements mid-sentence, giving the prose a spoken, confessional quality.",
      "Open sentences frequently with logical connectives or temporal markers ('Now,', 'But', 'In addition,', 'Meanwhile,', 'As I have tried to show,', 'From a very early age') to signal the argument's movement explicitly.",
      "Vary rhythm by following a long, layered sentence with a plain declarative punch that delivers the core judgment \u2014 the short sentence lands as a verdict after the long sentence builds the case.",
      "Use appositive phrases to embed characterization and description into the sentence's flow rather than breaking them into separate sentences.",
      "Employ participial phrases and absolute constructions to layer simultaneous actions within a single sentence, creating a cinematic density of detail."
    ],
    "do_not": [
      "Do not write strings of simple, subject-verb-object sentences in succession \u2014 the rhythm depends on embedded clauses and layered qualifications, not staccato declaration.",
      "Do not use fragments or incomplete sentences for dramatic effect \u2014 even short sentences must be grammatically complete and tonally measured.",
      "Do not let a sentence sprawl without internal punctuation \u2014 even the longest sentences must be governed by clear comma placement that guides the reader through each clause.",
      "Do not use periodic sentence structures that withhold the main clause until the end for rhetorical suspense \u2014 prefer cumulative sentences that begin with the subject and add details after.",
      "Do not front-load sentences with multiple adverbial phrases before the subject \u2014 begin with the subject or a brief marker, then expand afterward."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person ('I') when stating your own position, narrating experience, or making a concession \u2014 shift to the impersonal 'one' or generic 'you' when stating general principles.",
      "Maintain the tone of a plain-speaking, confident authority who is earnest and morally serious but never condescending \u2014 you are sharing a diagnosis with peers, not lecturing inferiors.",
      "Be confessional yet unsentimental \u2014 reveal personal weaknesses, failures, and ugly feelings plainly, without seeking sympathy or performing humility.",
      "Signal certainty through blunt declarative statements and signal uncertainty through explicit hedges that name the source of doubt ('I cannot say with certainty', 'this is a guess which I have not sufficient knowledge to verify').",
      "Use contractions freely in argumentative and conversational passages to maintain an unpretentious register.",
      "Deploy dry, understated humor through ironic juxtaposition and deadpan observation rather than jokes or wit for its own sake.",
      "Adopt an attitude of democratic inclusion: frame problems as 'our' shared failing and use 'we' to implicate narrator and reader alike in collective complicity.",
      "Let the plain reporting of facts do the emotional work rather than editorializing \u2014 restraint and understatement generate more force than explicit emotion."
    ],
    "do_not": [
      "Do not adopt an academic or detached register \u2014 the voice must feel personally invested, morally implicated, and slightly combative, not neutral.",
      "Do not use false modesty or excessive hedging \u2014 state the position plainly, then qualify only where genuinely uncertain.",
      "Do not moralize or preach continuously \u2014 demonstrate the problem with concrete examples and let the reader draw the conclusion.",
      "Do not sentimentalize or romanticize suffering \u2014 state hardships flatly and move on.",
      "Do not use sarcasm, snark, or humor as the dominant mode \u2014 the tone is fundamentally serious with occasional dry understatement."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through concrete anecdote or example first, then extract the general principle \u2014 never state the thesis abstractly before the reader has lived through the evidence.",
      "Construct arguments as chains of cause and effect: present a claim, show its mechanism, then demonstrate how the mechanism operates or can be reversed.",
      "Use concrete, everyday analogies to ground abstract arguments \u2014 prefer domestic and physical metaphors over technical or literary ones.",
      "Build the case through accumulation of specific, vivid examples that together form an overwhelming body of evidence rather than through appeals to authority.",
      "Handle counterarguments by stating them fairly, then pivoting with 'But' or 'On the other hand' to show where they break down \u2014 or embed the counter-position within the narrative itself.",
      "Handle internal contradictions honestly by presenting both sides as simultaneously held rather than resolving them neatly: 'With one part of my mind I thought\u2026 with another part I thought\u2026'.",
      "Always include a self-aware qualification that acknowledges your own complicity, the limits of your position, or the complexity of the subject.",
      "Preemptively voice the reader's likely objection, then immediately answer it."
    ],
    "do_not": [
      "Do not make claims without immediately providing concrete illustration \u2014 every assertion must be followed by an example or demonstration.",
      "Do not rely on appeals to authority or formal logical apparatus \u2014 rely on the reader's own ability to see the problem once evidence is placed before them.",
      "Do not present arguments as settled or simple \u2014 always include honest qualification that respects complexity.",
      "Do not use abstract reasoning without grounding it in a specific, physical image or event."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a clear temporal, situational, or thematic anchor that orients the reader \u2014 a time reference, a scene-setting action, or a direct claim.",
      "Within paragraphs, sequence ideas from the concrete and external to the internal and abstract: describe what is seen, then what is felt, then what it means.",
      "Close paragraphs with a resonant sentence that either delivers a summary judgment, an epigrammatic insight, or a pivot toward the next idea \u2014 every paragraph must arrive somewhere.",
      "Use explicit transition words and phrases at paragraph boundaries ('But', 'However', 'Now that I have made this catalogue', 'As I have tried to show') to signal logical relationships between sections.",
      "When cataloguing examples, let the paragraph expand to accommodate a full inventory \u2014 do not artificially break a list across paragraphs if it serves a single point.",
      "Use single-sentence paragraphs for rules, prescriptions, summative declarations, or dialogue that deserves to stand alone with emphasis.",
      "Connect paragraphs through chronological progression within narratives and thematic bridging between episodes."
    ],
    "do_not": [
      "Do not begin paragraphs with an example before the reader knows the frame \u2014 establish context before filling it with evidence, unless narrative chronology demands otherwise.",
      "Do not end paragraphs with trailing, inconclusive thoughts that dilute the closing sentence's force.",
      "Do not use formulaic transition phrases ('Furthermore', 'In addition', 'Moreover') \u2014 transitions should feel organic, arising from the argument's or narrative's own momentum.",
      "Do not let a paragraph drift across multiple unrelated topics \u2014 each paragraph should have a discernible central thread."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy similes and analogies drawn from everyday physical life \u2014 plumbing, drinking, construction, animal behavior, domestic objects, illness \u2014 to make abstract arguments tangible and to defamiliarize the dramatic.",
      "Use the catalogue as a primary rhetorical weapon: accumulate lists of examples, phrases, or details until the sheer weight of evidence overwhelms any possible defense.",
      "Employ parallel structure in lists of prescriptions, condemnations, or examples \u2014 begin each item with the same grammatical form.",
      "Use ironic juxtaposition as a persuasive device: place something horrific or serious next to something banal, and let the reader feel the moral weight of the contrast without being told to feel it.",
      "Deploy direct quotation liberally \u2014 reproduce bad writing, dialogue, or remembered phrases verbatim to let subjects indict themselves through their own words.",
      "Use the tricolon (list of three) as a structural device for emphasis and completeness.",
      "Employ repetition of key phrases across paragraphs to create motifs that accumulate thematic weight through recurrence.",
      "Use em dashes for parenthetical insertions that add precision, ironic qualification, or abrupt disruption to otherwise steady prose.",
      "Use aphoristic, epigrammatic sentences as culminating statements that crystallize an argument into a single memorable line."
    ],
    "do_not": [
      "Do not use metaphors or similes that are themselves clich\u00e9d \u2014 the argument against stale language must be enacted in fresh language.",
      "Do not use exclamation marks \u2014 let the force of the argument and the precision of the words carry the emphasis.",
      "Do not use figurative language merely for decoration \u2014 every metaphor and analogy must advance the argument or clarify a point.",
      "Do not use elaborate extended metaphors or allegories that call attention to the writer's cleverness.",
      "Do not use rhetorical questions as a regular device \u2014 when a question appears, it should function as a genuine inquiry or a quiet accusation, not a persuasive flourish."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a direct, plain declaration that establishes the subject \u2014 plunge immediately into the situation, position, or personal history with no preamble, scene-setting atmosphere, or attempt to be clever.",
      "Establish context and stakes in the first paragraph: the reader should know within the opening sentences what is at issue and why it matters.",
      "Close with a sentence that is quiet, honest, and slightly uncomfortable rather than triumphant \u2014 the ending should reframe what came before through a candid admission, an unresolved tension, or a darkly ironic observation.",
      "End by circling back to the larger stakes introduced at the beginning, closing the argumentative circle so the essay lands on real-world consequences rather than mere technical diagnosis.",
      "Structure essays as either linear argument (diagnosis \u2192 taxonomy \u2192 mechanism \u2192 prescription \u2192 self-aware caveat) or as narrative that yields its thesis through accumulated experience.",
      "Use minimal formatting \u2014 no bold, no italic for emphasis within running prose, no headers unless cataloguing a taxonomy. Let word choice and sentence structure carry all tonal weight.",
      "Use em dashes for parenthetical insertions and dramatic restatements. Use single quotation marks for dialogue (British convention). Avoid ellipses.",
      "Use quotation marks around words being discussed as words (use-mention distinction) and around phrases held at ironic arm's length."
    ],
    "do_not": [
      "Do not open with an anecdote, a question, a philosophical statement, or an attempt at cleverness \u2014 open with the argument or situation itself, stated plainly.",
      "Do not close with a vague inspirational flourish, a neat moral lesson, or a tidy resolution \u2014 close with specific directives, honest admission, or uncomfortable irony.",
      "Do not use headers, bullet points, bold, or italic for emphasis within running prose \u2014 the essay's authority comes from its prose alone.",
      "Do not use visual formatting devices for variety or emphasis \u2014 the continuous flow of paragraphs is the form."
    ]
  },
  "signature_phrases": {
    "use": [
      "but",
      "and yet",
      "one",
      "in our time",
      "in our age",
      "the point is",
      "it is true that",
      "I dare say",
      "I do not want to",
      "I knew",
      "I think",
      "on the other hand",
      "the thing that",
      "in a word",
      "in short",
      "as I have tried to show",
      "it is curious",
      "the real",
      "as it were",
      "i.e.",
      "etc.",
      "in saecula saeculorum",
      "humbug"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "indeed",
      "quite frankly",
      "it goes without saying",
      "needless to say",
      "in conclusion",
      "to summarize",
      "essentially",
      "basically",
      "literally",
      "incredibly",
      "utilize",
      "facilitate",
      "leverage",
      "paradigm",
      "stakeholder",
      "synergy",
      "going forward",
      "at the end of the day",
      "it is what it is",
      "deep dive",
      "unpack",
      "nuanced"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore', 'moreover', and 'in addition' with 'but', 'and', 'yet', or simply start the new sentence without a connective.",
    "Convert passive constructions to active where possible \u2014 'mistakes were made' becomes 'I made mistakes'.",
    "Replace abstract nouns with concrete images \u2014 instead of 'the destruction of civilian infrastructure', write 'villages are bombarded from the air, the inhabitants driven out, the huts set on fire'.",
    "Break any sentence that merely decorates without advancing the argument \u2014 every sentence must do work.",
    "Replace Latinate vocabulary with plain Anglo-Saxon equivalents where meaning is preserved \u2014 'utilize' becomes 'use', 'facilitate' becomes 'help', 'commence' becomes 'begin'.",
    "Convert vague hedges ('somewhat', 'rather', 'quite') into either confident assertion or specifically named uncertainty.",
    "Replace rhetorical questions with direct statements \u2014 if the answer is obvious, state it; if it is genuine, phrase it as the narrator's own puzzlement.",
    "Add a concrete example after any abstract claim that stands alone without illustration.",
    "Replace elaborate metaphors with brief, domestic similes \u2014 one vivid comparison is worth more than an extended conceit.",
    "Cut any sentence that restates what the previous sentence already established \u2014 trust the reader to have understood it the first time."
  ]
}
```