# Voice Analysis Report: Rebecca Solnit

**Samples analyzed:** 5
**Skill name:** `solnit-voice`
**Generator:** voice-cloner v2

**Voice:** formal, passionate, expansive — morally committed essayist who builds accumulative arguments from personal witness to systemic critique, wielding long clause-rich sentences and extended metaphors with rhetorical precision

## Corpus Metrics (averaged)

```
Metric                                   Value
-----------------------------------------------
contraction_rate                          0.01
fw_articles                               7.52
fw_conjunctions                           5.79
fw_demonstratives                         2.64
fw_hedges                                 0.88
fw_intensifiers                           1.27
fw_modals_aux                             5.13
fw_negation                               0.87
fw_prepositions                          11.64
fw_relatives                              1.62
hapax_ratio                              21.04
open_adverb_pct                           3.03
open_article_pct                         10.73
open_conjunction_pct                      8.38
open_pronoun_pct                         18.85
open_subordinate_pct                      7.74
para_avg_sentences                        2.84
para_avg_words                           70.52
para_pct_long                             7.92
para_pct_single_sent                     31.73
para_stddev_sentences                     1.69
polysyndeton_pct                          8.97
punct_colons_per_100w                     0.30
punct_comma_before_conj                   0.79
punct_commas_per_sent                     1.99
punct_dashes_per_100w                     0.48
punct_ellipses_per_100w                   0.02
punct_exclamations_per_100w               0.03
punct_parens_per_100w                     0.24
punct_questions_per_100w                  0.11
punct_quotes_per_100w                     0.01
punct_semicolons_per_sent                 0.06
sent_avg_length                          28.34
sent_length_max                         126.40
sent_length_min                           2.20
sent_length_stddev                       19.83
sent_median_length                       24.90
sent_pct_long                            47.21
sent_pct_medium                          36.12
sent_pct_short                           16.67
type_token_ratio                          0.74
word_avg_length                           4.54
word_pct_long                            13.71
word_pct_monosyllable                    66.47
word_pct_short                           59.29
```

## Vocabulary Profile

**Register score:** 0.08 (0=casual, 1=formal)

**Top 20 words:**
- the: 51.69/1000
- and: 34.03/1000
- of: 30.67/1000
- to: 27.31/1000
- in: 23.08/1000
- a: 20.81/1000
- that: 18.38/1000
- it: 12.24/1000
- s: 9.86/1000
- i: 9.24/1000
- is: 9.09/1000
- was: 8.26/1000
- for: 7.69/1000
- you: 7.69/1000
- or: 7.23/1000
- as: 6.97/1000
- women: 6.51/1000
- on: 6.25/1000
- with: 5.58/1000
- are: 5.52/1000

**Absent common words (3):** ask, line, shall

## Per-Sample Analyses

### sample-1.txt (3900 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "3900",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long sentences by stacking multiple clauses with commas and coordinating conjunctions, allowing ideas to accumulate and gather rhetorical momentum before landing on a final decisive phrase.",
      "Use participial and appositive phrases to embed additional context mid-sentence without breaking to a new sentence: insert descriptive, qualifying, or identifying information as parenthetical asides set off by commas or dashes.",
      "Alternate between expansive, clause-heavy sentences and short, clipped declarations to create a rhythm of buildup and release \u2014 let the long sentence carry the argument, then land a terse judgment.",
      "Chain clauses with semicolons to juxtapose related but independent observations within a single sentence, creating a sense of accumulation and parallel witness.",
      "Use the em dash to inject sudden asides, self-corrections, or tonal shifts mid-sentence, breaking the expected flow to insert a personal reaction or qualifier."
    ],
    "do_not": [
      "Do not write in a monotonous cadence of same-length sentences \u2014 avoid strings of medium-length sentences that plod without variation.",
      "Do not use overly formal or academic subordination patterns (e.g., 'Inasmuch as,' 'Notwithstanding that') \u2014 keep clause connections conversational even when sentences are long.",
      "Do not let long sentences lose their rhetorical endpoint \u2014 every extended sentence must land on a purposeful final clause or image, not trail off."
    ],
    "evidence": [
      "\"Every writer has a stable of ideas that never make it to the racetrack, and I'd been trotting this pony out recreationally every once in a while.\"",
      "\"Life is short; I didn't write back.\"",
      "\"He was already telling me about the very important book\u2013with that smug look I know so well in a man holding forth, eyes fixed on the fuzzy far horizon of his own authority.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a participant-witness \u2014 you are both inside the story and commenting on its larger meaning. Shift between intimate personal anecdote and sweeping sociopolitical observation within the same paragraph.",
      "Maintain a tone that is simultaneously warm and cutting: be generous toward allies and the reader, but deploy dry, devastating wit when describing antagonists or systemic absurdity.",
      "Signal confidence through declarative assertion and personal experience, not through hedging or appeals to authority. When you know something, state it plainly. Reserve uncertainty for genuine intellectual humility, not performative modesty.",
      "Address the reader as a fellow traveler who already senses what you're describing \u2014 speak as if naming something the reader has felt but not articulated.",
      "Use self-deprecating humor sparingly and strategically \u2014 acknowledge your own moments of doubt or complicity to build credibility, then pivot to the structural critique.",
      "Deploy direct, colloquial address ('Dude, if you're reading this') to puncture formality and signal that your authority comes from lived experience, not institutional position."
    ],
    "do_not": [
      "Do not adopt a detached, objective, or clinical tone \u2014 this voice is always personally implicated in the argument.",
      "Do not be uniformly angry or polemical \u2014 the power comes from alternating between wry humor, tenderness, and moral seriousness.",
      "Do not hedge every claim with qualifiers \u2014 when making a point about systemic patterns, commit to it."
    ],
    "evidence": [
      "\"So lovely, immeasurably valuable Sam, this one always was for you in particular.\"",
      "\"Dude, if you're reading this, you're a carbuncle on the face of humanity and an obstacle to civilization. Feel the shame.\"",
      "\"Don't forget that I've had a lot more confirmation of my right to think and speak than most women, and I've learned that a certain amount of self-doubt is a good tool for correcting, understanding, listening, and progressing\u2013though too much is paralyzing and total self-confidence produces arrogant idiots.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Begin with a specific, vivid personal anecdote that seems minor or entertaining, then gradually reveal its connection to a much larger systemic pattern \u2014 move from the comic to the grave.",
      "Construct arguments through escalation: start with social embarrassment, progress to professional silencing, then to legal erasure, then to physical violence. Let each anecdote raise the stakes.",
      "Use repeated encounters and parallel incidents as cumulative evidence \u2014 don't cite statistics or studies as primary proof; instead, stack specific stories that demonstrate the same pattern recurring across different contexts.",
      "Handle counterarguments preemptively and with wit: acknowledge the obvious objection ('yes, guys like this pick on other men's books too') then immediately redirect to the deeper structural point.",
      "Thread a single metaphorical or thematic thread through the entire piece \u2014 return to key phrases, images, or formulations to create structural unity (e.g., 'men explain things to me' as a refrain).",
      "Move between the personal and the political through associative logic \u2014 let one anecdote remind you of another context, another country, another scale of the same problem, creating an expanding web rather than a linear argument."
    ],
    "do_not": [
      "Do not construct arguments as formal syllogisms or numbered points \u2014 the logic should feel organic, associative, and narrative rather than schematic.",
      "Do not rely primarily on statistics or external citations as evidence \u2014 personal experience and specific stories are the primary currency of credibility.",
      "Do not separate the personal from the political into discrete sections \u2014 they must be woven together throughout."
    ],
    "evidence": [
      "\"what starts out as minor social misery can expand into violent silencing and even violent death.\"",
      "\"I like incidents of that sort, when forces that are usually so sneaky and hard to point out slither out of the grass and are as obvious as, say, an anaconda that's eaten a cow or an elephant turd on the carpet.\"",
      "\"Men explain things to me, and other women, whether or not they know what they're talking about. Some men.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting detail or a direct continuation of the narrative thread \u2014 plunge the reader into a moment before drawing out its significance.",
      "Close paragraphs with a punchy judgment, a wry aside, or a sentence that pivots from the specific anecdote to the universal claim. The final sentence should land with rhetorical weight.",
      "Transition between paragraphs through narrative chronology ('A few years after'), thematic escalation ('More extreme versions'), or abrupt tonal shift \u2014 avoid mechanical transition phrases like 'furthermore' or 'in addition.'",
      "Within paragraphs, sequence ideas from concrete to abstract: begin with what happened, then say what it means. Let the reader see the scene before receiving the interpretation.",
      "Use standalone short paragraphs as emphatic punctuation marks \u2014 a single declarative sentence or a brief aside that resets the reader's attention before the next extended passage."
    ],
    "do_not": [
      "Do not begin paragraphs with topic sentences that announce what the paragraph will argue \u2014 let the argument emerge from the narrative.",
      "Do not use academic transition phrases ('Moreover,' 'Furthermore,' 'In conclusion') \u2014 transitions should feel conversational or implicit.",
      "Do not let paragraphs end weakly on qualifications or trailing subordinate clauses \u2014 the final beat must have force."
    ],
    "evidence": [
      "\"I still don't know why Sallie and I bothered to go to that party in the forest slope above Aspen.\"",
      "\"That was April 2008 and it struck a chord.\"",
      "\"Surely one of these men has died of embarrassment, but not nearly publicly enough.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors and similes drawn from vivid, unexpected, sometimes absurd imagery \u2014 compare intellectual phenomena to physical, animal, or geographical realities ('an anaconda that's eaten a cow,' 'an archipelago of arrogance,' 'the fuzzy far horizon of his own authority').",
      "Employ anaphora and deliberate repetition of key phrases as a structural and rhetorical refrain \u2014 repeat a core formulation at intervals to build cumulative force and unity ('Men explain things to me').",
      "Use lists and catalogs to accumulate examples, escalating from the mundane to the severe, creating a rhetorical pile-up that overwhelms any single objection ('in the bedroom, the dining room, the classroom, the workplace, and the streets').",
      "Deploy parenthetical asides \u2014 set off by dashes, parentheses, or commas \u2014 to insert sardonic commentary, self-aware qualifications, or darkly comic observations that undercut or complicate the main clause.",
      "Use direct address and imperatives sparingly but devastatingly \u2014 when you shift to addressing someone directly ('Feel the shame'), make it land as a tonal rupture.",
      "Construct antithesis and juxtaposition to expose absurdity: place the ridiculous next to the grave, the man's confidence next to his ignorance, the woman's expertise next to her enforced silence."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors or dead similes \u2014 every figurative comparison should be fresh, specific, and slightly surprising.",
      "Do not overuse rhetorical questions \u2014 when you do ask a question, make it genuinely pointed rather than merely ornamental.",
      "Do not deploy literary allusions without grounding them in a personal context \u2014 references to Chaucer, Woolf, or Freud should feel organic to the narrative, not academically dropped in."
    ],
    "evidence": [
      "\"when forces that are usually so sneaky and hard to point out slither out of the grass and are as obvious as, say, an anaconda that's eaten a cow or an elephant turd on the carpet.\"",
      "\"This goes way beyond Men Explaining Things, but it's part of the same archipelago of arrogance.\"",
      "\"like the Clerk in The Canterbury Tales I still remember from Mr. Pelen's class on Chaucer\u2013'gladly would he learn and gladly teach.'\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the piece with a personal, seemingly casual origin story that establishes an intimate, conversational register before the argument reveals its larger stakes. The first paragraph should feel like the beginning of a story you're telling a friend.",
      "Structure the essay as a series of nested anecdotes that radiate outward from the personal to the political \u2014 begin with a party, expand to a cultural pattern, arrive at systemic violence, then return to the personal.",
      "Close with a sentence that combines wry humor with unresolved tension \u2014 end on a note that is simultaneously funny, defiant, and melancholy, acknowledging that the fight continues without offering false resolution.",
      "Use section headers as rhetorical markers that name the escalation ('The Slippery Slope of Silencings,' 'Women Fighting on Two Fronts') \u2014 headers should read as argumentative claims, not neutral labels.",
      "Use em dashes liberally for interjections and asides. Use parenthetical remarks for darkly comic qualifications. Use italics or direct quotation to ventriloquize antagonists.",
      "Embed the essay's thesis in a refrain that recurs with slight variations throughout the piece rather than stating it once in a thesis paragraph."
    ],
    "do_not": [
      "Do not open with an abstract thesis statement or a definition \u2014 begin in scene, in story, in a specific moment.",
      "Do not close with a tidy summary or a call to action that resolves the tension \u2014 let the ending sit with the ongoing nature of the struggle.",
      "Do not use numbered lists, bullet points, or formal structural apparatus \u2014 the essay should flow as continuous prose with occasional section breaks."
    ],
    "evidence": [
      "\"One evening over dinner, I began to joke, as I often had before, about writing an essay called 'Men Explain Things to Me.'\"",
      "\"Not yet, but according to the actuarial tables, I may have another forty-something years to live, more or less, so it could happen. Though I'm not holding my breath.\"",
      "\"I'm still fighting it, for myself certainly, but also for all those younger women who have something to say, in the hope that they will get to say it.\""
    ]
  }
}
```

### sample-2.txt (4361 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 4361,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long, accumulative sentences by stacking examples, clauses, and parenthetical asides with commas and dashes, creating a relentless cataloguing effect that mirrors the overwhelming scale of the subject matter.",
      "Chain concrete cases together within a single sentence using commas and coordinating conjunctions ('and,' 'or,' 'while,' 'though') so that the sheer volume of evidence becomes its own rhetorical force.",
      "Interrupt the accumulative flow with abrupt, declarative sentences that land like verdicts\u2014use these short sentences to deliver the central thesis or a moral judgment after a long evidentiary buildup.",
      "Embed parenthetical qualifications, statistics, and cross-references mid-sentence using dashes and parentheses, so that the sentence keeps expanding and the reader cannot look away from the accumulating weight.",
      "Use participial and subordinate clauses to pack additional context into sentences without starting new ones\u2014layer information rather than parceling it out."
    ],
    "do_not": [
      "Do not write in consistently short, clipped sentences\u2014the rhythm depends on long, densely packed sentences that are periodically punctuated by terse moral declarations.",
      "Do not use simple subject-verb-object structures as the default; the baseline sentence should carry multiple embedded clauses and appositives.",
      "Do not let long sentences become directionless\u2014each accumulative sentence must drive toward a point, not meander."
    ],
    "evidence": [
      "\"Take your pick: some of the 20 men who gang-raped an 11-year-old in Cleveland, Texas, were sentenced in November, while the instigator of the gang rape of a 16-year-old in Richmond, California, was sentenced in October, and four men who gang-raped a 15-year-old near New Orleans were sentenced in April, though the six men who gang-raped a 14-year-old in Chicago last fall are still at large.\"",
      "\"It's a system of control. It's why so many intimate-partner murders are of women who dared to break up with those partners.\"",
      "\"Violence is first of all authoritarian. It begins with this premise: I have the right to control you.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is both personally implicated ('here in my city,' 'it happened to me') and broadly authoritative\u2014position yourself as someone who has both lived experience and a panoramic view of the systemic problem.",
      "Maintain a tone of controlled fury: the anger is unmistakable but channeled through precision, evidence, and moral clarity rather than through ranting or emotional overflow.",
      "Address the reader directly and confrontationally when delivering moral challenges\u2014use 'you' to implicate the reader in the problem or demand their attention ('You explain to me why colleges spend more time telling women how to survive predators than telling the other half of their students not to be predators').",
      "Use sardonic, darkly ironic asides to expose absurdity\u2014name things with bitter precision ('Welcome to Manistan,' 'The Party for the Protection of the Rights of Rapists') to make the monstrous legible.",
      "Never use contractions\u2014maintain a formal, deliberate register even when the tone is conversational or sardonic, which creates a sense of gravity and controlled composition.",
      "Insert preemptive qualifications to acknowledge complexity ('though virtually all the perpetrators of such crimes are men, that doesn't mean all men are violent') but do so briskly, without letting the qualification dilute the central argument."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, or academic tone\u2014the voice must carry moral urgency and personal investment.",
      "Do not let anger become shrill or unfocused; every expression of outrage must be tethered to a specific, concrete piece of evidence.",
      "Do not hedge the central thesis or soften the moral judgment\u2014qualifications are offered for fairness, not to weaken the argument."
    ],
    "evidence": [
      "\"You explain to me why colleges spend more time telling women how to survive predators than telling the other half of their students not to be predators.\"",
      "\"Welcome to Manistan.\"",
      "\"Here I want to say one thing: though virtually all the perpetrators of such crimes are men, that doesn't mean all men are violent. Most are not.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments by overwhelming accumulation of evidence: pile case after case, incident after incident, until the sheer volume makes the pattern undeniable. The method is inductive\u2014let the evidence force the conclusion rather than asserting the conclusion first.",
      "Introduce the central claim not as a hypothesis but as a suppressed truth that society refuses to name. Frame the argument as an act of making visible what is deliberately overlooked.",
      "Use the structure of 'We could talk about X, or Y, or Z' to simultaneously catalogue evidence and critique society's refusal to discuss it\u2014the rhetorical gesture of listing what is not discussed IS the discussion.",
      "Handle counterarguments by preemptive acknowledgment followed by dismissal through evidence: briefly concede the point ('women are capable of all sorts of major unpleasantness') then demolish it with a catalogue of asymmetries.",
      "Expose false explanations by listing them and then collapsing them: name the bad-faith framings (economy, class resentment, mental illness, lead exposure) and show that they all avoid the one common variable.",
      "Move between scales constantly\u2014from a single incident in your city to global patterns to political systems\u2014to show that the problem exists at every level simultaneously."
    ],
    "do_not": [
      "Do not present the argument as a balanced debate with two equally valid sides\u2014the essay takes a clear moral position and marshals evidence for it.",
      "Do not rely on abstract reasoning alone; every claim must be grounded in specific, named incidents, places, and people.",
      "Do not let the catalogue of evidence become a mere list\u2014each example must advance the argument or open a new dimension of it."
    ],
    "evidence": [
      "\"The pandemic of violence always gets explained as anything but gender, anything but what would seem to be the broadest explanatory pattern of all.\"",
      "\"We could talk about high-school- and college-athlete rapes, or campus rapes, to which university authorities have been appallingly uninterested in responding in many cases\"",
      "\"No female bus riders in India have ganged up to sexually assault a man so badly he dies of his injuries, nor are marauding packs of women terrorizing men in Cairo's Tahrir Square\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a framing statement that names what is being overlooked or what could be discussed, then fill the paragraph with cascading evidence that substantiates the frame.",
      "Use single-sentence paragraphs as moral punctuation marks\u2014place them after long, evidence-heavy paragraphs to deliver the distilled thesis or a devastating summary ('It's almost never treated as a civil rights or human rights issue, or a crisis, or even a pattern.').",
      "Connect paragraphs through thematic escalation rather than explicit transition words: each paragraph should raise the stakes or shift the scale (from local to global, from individual to systemic, from incident to policy).",
      "Close paragraphs with a pivot or a twist that reframes what came before\u2014end on a line that forces the reader to see the accumulated evidence in a new light.",
      "Use subheadings as rhetorical provocations, not neutral labels\u2014they should be questions, allusions, or phrases that carry argument ('Who Has the Right to Kill You?', 'The Party for the Protection of the Rights of Rapists')."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('furthermore,' 'in addition,' 'moreover') to connect paragraphs\u2014let the juxtaposition and escalation of content create the connections.",
      "Do not end paragraphs with soft, trailing qualifications\u2014the final sentence should land with force or open a new angle."
    ],
    "evidence": [
      "\"It's almost never treated as a civil rights or human rights issue, or a crisis, or even a pattern.\"",
      "\"Not that I actually went out looking for incidents: they're everywhere in the news, though no one adds them up and indicates that there might actually be a pattern.\"",
      "\"If we talked about it, we'd be talking about masculinity, or male roles, or maybe patriarchy, and we don't talk much about that.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use anaphora and structural repetition to create a drumbeat effect\u2014repeat parallel constructions ('We could talk about,' 'No female,' 'or the') to hammer home the cumulative weight of evidence.",
      "Deploy bitter irony and sardonic naming to expose absurdity: coin phrases or repurpose familiar ones to make systemic violence legible as ideology ('Welcome to Manistan,' 'The Party for the Protection of the Rights of Rapists').",
      "Use direct address and imperatives to break the fourth wall and confront the reader ('Take your pick,' 'You explain to me why,' 'Look at it this way').",
      "Employ reframing analogies that force the reader to see familiar things differently\u2014compare domestic violence deaths to 9/11, compare online harassment to the Taliban, to recalibrate the reader's sense of scale.",
      "Use parenthetical asides to smuggle in devastating additional facts or commentary that would break the sentence flow if placed in the main clause, creating a layered texture of argument-within-argument.",
      "Repurpose or allude to well-known cultural references (Tina Turner, Raymond Carver's title structure 'What We Don't Talk About When We Don't Talk About') to ground the argument in shared cultural knowledge."
    ],
    "do_not": [
      "Do not use decorative or lyrical metaphors\u2014figurative language must serve the argument and expose something, not beautify it.",
      "Do not use rhetorical questions as filler; each one must be a genuine challenge to the reader or an indictment of a social failure.",
      "Do not rely on abstraction when a concrete, named example is available\u2014the rhetoric draws its power from specificity."
    ],
    "evidence": [
      "\"meaning that every three years the death toll tops 9/11's casualties, though no one declares a war on this particular terror\"",
      "\"The fury and desire come in a package, all twisted together into something that always threatens to turn eros into thanatos, love into death, sometimes literally.\"",
      "\"We have dots so close they're splatters melting into a stain, but hardly anyone connects them, or names that stain.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by immediately establishing scale and urgency\u2014drop the reader into the problem with concrete data and a specific recent incident, then immediately widen the lens to show the incident is not isolated.",
      "Use section subheadings that function as rhetorical provocations or allusions, structuring the essay into escalating movements (from evidence to analysis to indictment to call to action).",
      "Close with a call to collective action that is direct, imperative, and morally unambiguous\u2014end on 'it has to change' and 'it's your job,' not on a nuanced reflection or an open question.",
      "In the final movement, pivot from cataloguing horrors to invoking hope and historical analogy (Emmett Till, the civil rights movement) to channel the accumulated outrage into a demand for transformation.",
      "Use the essay's closing paragraphs to return to the personal and local ('one of the best journalists I know') before zooming out to the global and historical, creating a closing spiral that mirrors the opening.",
      "Use em dashes for parenthetical insertions and dramatic pivots; use parentheses for factual asides and additional data; use colons to introduce thesis-like declarations after setup clauses."
    ],
    "do_not": [
      "Do not open with abstraction, throat-clearing, or gentle scene-setting\u2014begin with the problem at full force.",
      "Do not close with ambiguity, irresolution, or a return to academic balance\u2014the ending must be a demand.",
      "Do not use bullet points or numbered lists\u2014the essay form is continuous, flowing prose organized under provocative subheadings."
    ],
    "evidence": [
      "\"Here in the United States, where there is a reported rape every 6.2 minutes, and one in five women will be raped in her lifetime, the rape and gruesome murder of a young woman on a bus in New Delhi on December 16th was treated as an exceptional incident.\"",
      "\"It has to change. It's your job to change it, and mine, and ours.\"",
      "\"We have dots so close they're splatters melting into a stain, but hardly anyone connects them, or names that stain. In India they did.\""
    ]
  }
}
```

### sample-3.txt (3050 words)

```json
{
  "sample_id": "sample-3.txt",
  "word_count": 3050,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking multiple subordinate clauses, appositives, and parenthetical insertions within a single sentence frame \u2014 let the sentence accumulate meaning as it extends, adding qualifications and examples before arriving at its point.",
      "Chain clauses with coordinating conjunctions (especially 'and,' 'but,' 'or') to create compound sentences that keep the reader moving forward through a series of connected ideas without full stops.",
      "Use participial and appositive phrases to embed context mid-sentence: 'The murderer at Isla Vista was also repeatedly called \"aberrant,\" as if to emphasize that he was nothing like the rest of us.'",
      "Deploy the em dash to insert asides and amplifications that would otherwise require a separate sentence \u2014 this creates a layered, conversational density within formal prose.",
      "Employ parallel structure within long sentences to create rhetorical momentum: stack items in series using the same grammatical form, often three or more items separated by commas.",
      "When making a definitive claim, follow it with a shorter declarative sentence that lands the point with force: 'It will help change things. Words matter.'"
    ],
    "do_not": [
      "Do not write clipped, staccato sequences of simple subject-verb-object sentences \u2014 the rhythm depends on long, clause-rich sentences being the norm, with shorter ones deployed for emphasis.",
      "Do not front-load sentences with hedging qualifiers ('It seems that,' 'One might argue') \u2014 lead with the assertion and let qualifications emerge within the sentence's architecture.",
      "Do not use semicolons as the primary clause-joining device \u2014 prefer commas with conjunctions, em dashes, or subordination."
    ],
    "evidence": [
      "Mental illness is, however, more often a matter of degree, not kind, and a great many people who suffer it are gentle and compassionate.",
      "The term 'sexual harassment,' for example, was coined in the 1970s, first used in the legal system in the 1980s, given legal status by the Supreme Court in 1986, and given widespread coverage in the upheaval after Anita Hill's testimony against her former boss, Clarence Thomas, in the 1991 Senate hearings on his Supreme Court nomination.",
      "It will help change things. Words matter."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is politically committed and intellectually rigorous \u2014 the 'I' is not confessional but reportorial and analytical, someone who has witnessed and participated in history.",
      "Adopt a tone that is simultaneously urgent, angry, and controlled \u2014 express moral outrage through precise language and marshaled evidence rather than through exclamation or hyperbole.",
      "Address the reader as an assumed ally who shares basic values of justice and equality, but who may not yet have the language or framework to articulate what they sense \u2014 position yourself as providing that framework.",
      "Use 'we' and 'our' to locate both writer and reader within the culture being critiqued: 'the world we live in,' 'our conversations,' 'our arguments.'",
      "Signal certainty through declarative assertions delivered without hedging, and signal the gravity of the subject through precise, unsentimental description of violence and injustice.",
      "Never use contractions \u2014 maintain a formal register throughout, even when the content is passionate or conversational in its rhetorical address.",
      "Shift between the personal ('I go to check this fact') and the analytical ('The history of feminism is one of punctuated equilibriums') to move between lived experience and broader argument."
    ],
    "do_not": [
      "Do not adopt a detached, academic neutrality \u2014 the voice is openly partisan and morally committed while remaining intellectually precise.",
      "Do not use sarcasm or humor as primary tonal modes \u2014 when irony appears, it is bitter and brief, subordinated to earnest argument.",
      "Do not address the reader with imperatives or instructional language ('consider this,' 'think about it') \u2014 instead draw the reader into a shared perspective through inclusive pronouns and shared cultural references."
    ],
    "evidence": [
      "I go to check this fact and arrive at an Indiana Coalition Against Domestic Violence website that warns viewers their browsing history might be monitored at home and offers a domestic-violence hotline number. The site is informing women that their abusers may punish them for seeking information or naming their situation. It's like that out there.",
      "Despite this dismal subject matter, I'm impressed with the powers feminism has flexed of late.",
      "If you lack words for a phenomenon, an emotion, a situation, you can't talk about it, which means that you can't come together to address it, let alone change it."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a vivid extended metaphor or concrete scene that dramatizes the abstract conflict the essay will explore \u2014 establish the stakes through narrative before pivoting to analysis.",
      "Build the central argument around a thesis about language and naming: show how creating or adopting new terminology reshapes understanding and enables collective action.",
      "Move between specific incidents (the Isla Vista massacre, Anita Hill's testimony, Kitty Genovese's murder) and broad cultural analysis, using each incident as evidence for systemic claims \u2014 the particular always serves the general.",
      "Introduce historical evidence chronologically to show a pattern of progress: trace the coining and adoption of terms ('sexual harassment,' 'domestic violence,' 'rape culture,' 'mansplaining') across decades to demonstrate cumulative change.",
      "Handle counterarguments by naming and then dismantling them in the same breath: 'The murderer at Isla Vista was also repeatedly called \"aberrant,\" as if to emphasize that he was nothing like the rest of us. But other versions of such violence are all around us.'",
      "Incorporate other voices \u2014 named feminists, scholars, tweeters, friends \u2014 as supporting witnesses, quoting them at length to create a chorus effect that reinforces the argument's communal nature.",
      "End sections and the essay itself on a note of qualified hope: acknowledge the ongoing struggle while asserting that progress is real and visible."
    ],
    "do_not": [
      "Do not present arguments as hypotheticals or thought experiments \u2014 ground every claim in specific named events, people, dates, and cultural artifacts.",
      "Do not steel-man the opposing position or give extended space to counterarguments \u2014 name the opposing frame briefly, then dismantle or redirect it.",
      "Do not rely on statistical data as the primary form of evidence \u2014 when statistics appear, they are embedded in narrative context and subordinated to the argument about language and power."
    ],
    "evidence": [
      "It was a key match in the World Cup of Ideas. The teams vied furiously for the ball.",
      "The term 'sexual harassment,' for example, was coined in the 1970s, first used in the legal system in the 1980s, given legal status by the Supreme Court in 1986, and given widespread coverage in the upheaval after Anita Hill's testimony.",
      "Voices in the mainstream insisted he was mentally ill, as though that settled it, as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a topic sentence that makes a claim or introduces a new piece of evidence, then develop that claim through accumulating examples, historical context, or quoted voices.",
      "Use single-sentence paragraphs as emphatic punctuation \u2014 to deliver a pivotal claim, a devastating aside, or a transition that reframes everything that follows.",
      "Build paragraphs that move from the specific to the general: begin with a concrete detail or event, then widen to the cultural or political implication.",
      "Connect paragraphs through thematic echo rather than explicit transition words \u2014 the last idea of one paragraph seeds the first idea of the next, creating a chain of association.",
      "When quoting at length (tweets, other writers, the killer's manifesto), set up the quote with one or two sentences of context, then let the quoted material stand as its own paragraph or block, followed by a paragraph of analysis.",
      "Embed parenthetical asides and mid-paragraph pivots that momentarily break the forward flow to offer a personal observation or historical footnote before returning to the main thread."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore,' 'In addition,' 'Moreover') to connect paragraphs \u2014 let the logical and thematic relationship do the connecting.",
      "Do not end paragraphs with summary sentences that restate what was just said \u2014 prefer forward-looking closings that propel the reader into the next section.",
      "Do not isolate quotes without analytical framing \u2014 always contextualize who is speaking and why their words matter before or after the quotation."
    ],
    "evidence": [
      "The murderer at Isla Vista was also repeatedly called 'aberrant,' as if to emphasize that he was nothing like the rest of us.",
      "I go to check this fact and arrive at an Indiana Coalition Against Domestic Violence website that warns viewers their browsing history might be monitored at home and offers a domestic-violence hotline number. The site is informing women that their abusers may punish them for seeking information or naming their situation. It's like that out there.",
      "It will help people identify and discredit manifestations of this phenomenon. It will help change things. Words matter."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy extended metaphors that are sustained across an entire opening section (the World Cup of Ideas, the goalposts, the ball) \u2014 commit fully to the metaphor rather than using fleeting figurative language.",
      "Use anaphora and deliberate repetition to build rhetorical force: repeat a key phrase at the start of successive clauses or sentences to hammer a point home ('if they were... if they were... if they were').",
      "Employ the rhetorical device of naming and listing \u2014 accumulate terms, examples, or instances in series to convey both abundance and pattern: 'harassment, intimidation, threat, battery, rape, murder.'",
      "Use 'as though' and 'as if' constructions to expose the absurdity of an opposing position by dramatizing its implicit logic: 'as though the world were divided into two countries called Sane and Crazy.'",
      "Quote other writers, tweeters, and public voices extensively \u2014 use their words as rhetorical ammunition, creating a polyphonic effect that makes the argument feel collective rather than individual.",
      "Use the catalog of specific dates, names, and historical markers as a rhetorical device in itself \u2014 the accumulation of precise references builds authority and demonstrates depth of knowledge.",
      "Employ the pivot from the personal anecdote to the political argument as a signature move \u2014 a small, seemingly casual observation ('I go to check this fact') opens onto a vast structural critique."
    ],
    "do_not": [
      "Do not use similes as the primary figurative device \u2014 prefer metaphors that assert identity rather than comparison ('it's a slippery slope' rather than 'it's like a slippery slope').",
      "Do not use pop-culture references for levity or relatability \u2014 when cultural references appear, they serve the argument seriously (action-movie solutions, the World Cup metaphor).",
      "Do not ask rhetorical questions as a structural device \u2014 prefer declarative assertions that answer the question before it can be asked."
    ],
    "evidence": [
      "It was a key match in the World Cup of Ideas. The teams vied furiously for the ball. The all-star feminist team tried repeatedly to kick it through the goalposts marked Widespread Social Problems, while the opposing team, staffed by the mainstream media and mainstream dudes, was intent on getting it into the usual net called Isolated Event.",
      "as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture",
      "If they were, a fifth of all American women (and one in 71 men) wouldn't be rape survivors; if they were, 19% of female college students wouldn't have to cope with sexual assault; if they were, the military wouldn't be stumbling through an epidemic of sexual violence."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with an extended, vivid metaphor that is playful in form but deadly serious in content \u2014 use the metaphor to frame the essay's central conflict in narrative terms before any direct statement of thesis.",
      "Delay the explicit thesis until several paragraphs in, after the reader has been drawn into the narrative and emotional stakes through scene and metaphor.",
      "Structure the essay in sections marked by subheadings that function as thematic signposts \u2014 each section advances the argument while also serving as a semi-independent unit.",
      "Close the essay by circling back to the opening themes and to a historical reference introduced earlier (Friedan's 'problem that has no name'), creating a sense of the argument completing a large arc from past to present.",
      "End on a note of fierce, qualified optimism \u2014 acknowledge the ongoing struggle explicitly ('the backlash against feminism remains savage, strong, and omnipresent') but insist on visible progress ('but it is not winning').",
      "Use formatting conventions of long-form journalism: block quotes for extended passages from other writers, em dashes for parenthetical insertions, italicized titles for books and publications.",
      "Include a biographical note and links to related pieces at the end, following the conventions of magazine or web-published longform essays."
    ],
    "do_not": [
      "Do not open with a thesis statement or abstract claim \u2014 always begin with narrative, image, or metaphor that makes the reader feel the stakes before understanding them intellectually.",
      "Do not close with a neat resolution or tidy summary \u2014 end with tension between hope and ongoing struggle, leaving the reader activated rather than satisfied.",
      "Do not use numbered lists or bullet points in the body of the essay \u2014 when listing, embed the list within flowing prose or use formatted block quotes for tweets and excerpts."
    ],
    "evidence": [
      "It was a key match in the World Cup of Ideas.",
      "The struggle has been and will be long and harsh and sometimes ugly, and the backlash against feminism remains savage, strong, and omnipresent, but it is not winning. The world has changed profoundly, it needs to change far more\u2014and on that weekend of mourning and introspection and conversation just passed, you could see change happen.",
      "Six years ago, when I sat down and wrote the essay 'Men Explain Things to Me,' here's what surprised me: though I began with a ridiculous example of being patronized by a man, I ended with rapes and murders."
    ]
  }
}
```

### sample-4.txt (4295 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 4295,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long sentences by chaining multiple independent clauses with commas and coordinating conjunctions ('and', 'but', 'or'), letting ideas accumulate within a single breath before the period lands.",
      "Use participial and appositive phrases to pack background information, credentials, or context into the middle of sentences without breaking into new ones: 'Its publisher, maybe the most adventurous in the business, was Andr\u00e9 Schiffrin.'",
      "Deploy parenthetical asides \u2014 set off by parentheses, dashes, or commas \u2014 to layer commentary, clarification, or editorial voice into the main clause without derailing it.",
      "When making a sweeping claim or emotional turn, follow it with a compact sentence that lands like a verdict: 'Everything changes: there lies most of our hope and some of our fear.'",
      "Chain parallel 'you don't stop' or 'if I had told you' clauses in extended anaphoric sequences, letting the rhythm build through repetition of the same syntactic frame with varying content.",
      "Use colons to set up amplifications, explanations, or restatements rather than starting a new sentence: 'Despair is often premature: it's a form of impatience as well as certainty.'"
    ],
    "do_not": [
      "Do not write clipped, telegraphic prose with consistently short, punchy sentences \u2014 the rhythm here is expansive and cumulative, not staccato.",
      "Do not front-load sentences with adverbial modifiers in a formulaic way; instead let the subject arrive naturally, sometimes early, sometimes after a brief contextual setup.",
      "Do not rely on semicolons as the primary clause-joining device; prefer commas with conjunctions, colons, or dashes."
    ],
    "evidence": [
      "He was an experience \u2014 a small man who, when he wasn't listening professionally in a fashion beyond compare, never stopped talking.",
      "You don't stop walking because there is no way forward. Of course there is no way. You walk the path into being, you make the way, and if you do it well, others can follow the route.",
      "If we were to fully exploit this new oil source, and continue to burn our conventional oil, gas, and coal supplies, concentrations of carbon dioxide in the atmosphere eventually would reach levels higher than in the Pliocene era, more than 2.5 million years ago, when sea level was at least 50 feet higher than it is now."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a participant-witness \u2014 someone who was there, knew the people, lived the events \u2014 not as a detached commentator. Ground authority in personal experience and relationships: 'I worked for years,' 'I had lunch with,' 'I know people personally.'",
      "Shift to second person ('you') when making universal claims or issuing calls to action, pulling the reader into shared responsibility: 'you should wake up amazed every day of your life.'",
      "Maintain a tone that is earnest and impassioned without being sentimental \u2014 conviction expressed through accumulated evidence and moral clarity rather than emotional pleading.",
      "Signal certainty through declarative assertions and historical examples rather than hedging. When acknowledging uncertainty, do it with candor and directness: 'Will we get it? I don't know. Neither do you. Anything could happen.'",
      "Avoid contractions in most formal or sweeping passages, reserving them for moments of conversational directness or when channeling spoken voice.",
      "Treat hope not as naive optimism but as a moral and strategic stance \u2014 always pair hopefulness with acknowledgment of genuine darkness, loss, and difficulty."
    ],
    "do_not": [
      "Do not adopt a detached, academic, or clinical tone \u2014 this voice is warm, engaged, and personally invested.",
      "Do not use irony or sarcasm as primary rhetorical tools; the humor here, when present, is gentle and self-aware, never cutting or dismissive.",
      "Do not hedge every claim with qualifiers \u2014 when the writer is uncertain, they say so plainly rather than padding with 'perhaps' and 'it seems.'"
    ],
    "evidence": [
      "All true. But I realize now that it wasn't quite a full response. I had left out one crucial figure in my life: Rebecca Solnit, who taught me how to hope in a world that seemed dismal indeed.",
      "Will we get it? I don't know. Neither do you. Anything could happen.",
      "With few people can you ever say, she (or he) changed my life, changed the very way I understand our world."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Construct arguments by accumulating historical examples \u2014 stack case after case to demonstrate a pattern, letting the evidence do the persuading rather than abstract logic.",
      "Introduce claims as bold assertions, then immediately support them with concrete narrative: state the thesis, then tell the story that proves it.",
      "Handle counterarguments by naming despair and defeatism as the opposing position, then systematically dismantling it with historical evidence of unexpected change.",
      "Use numbered or sequentially signaled points ('First,' 'Second,' 'Third,' 'Fourth,' 'Finally') to organize extended rebuttals, giving each point its own paragraph and evidence.",
      "Move between personal anecdote and sweeping historical claim \u2014 zoom from a lunch conversation to the fall of the Soviet Union, from a specific friendship to the nature of civil society.",
      "Build arguments dialectically: acknowledge the darkness (wars, climate change, failures) and then pivot to the countervailing evidence (movements, victories, unexpected change), maintaining tension between both.",
      "Use the 'if I had told you X, you would have thought Y' counterfactual structure to dramatize how unpredictable change is."
    ],
    "do_not": [
      "Do not argue purely from abstraction or theory \u2014 every major claim must be grounded in a named event, person, or movement.",
      "Do not dismiss opposing views with contempt; instead, show understanding of why people despair before demonstrating why they are wrong.",
      "Do not present a linear, triumphalist narrative \u2014 always acknowledge setbacks, ongoing struggles, and the incompleteness of victories."
    ],
    "evidence": [
      "If you fix your eye on where we started out, you'll see that we've come a long way by those means. If you look forward, you'll see that we have a long way to go \u2014 and that sometimes we go backward when we forget that we fought for the eight-hour workday or workplace safety or women's rights or voting rights or affordable education",
      "The despairing of May 2003 were convinced of one true thing, that we had not stopped the invasion of Iraq, but they extrapolated from that a series of false assumptions about our failures and our powerlessness across time and space.",
      "But I wonder: How could he possibly know? It really is too soon to tell."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a thesis statement or a bold declarative claim, then unpack it with examples, anecdotes, or elaboration: 'Civil society is our power, our joy, and our possibility.'",
      "Close paragraphs with a resonant, aphoristic sentence that distills the paragraph's argument into a memorable formulation \u2014 a landing that echoes.",
      "Transition between paragraphs through thematic continuation rather than explicit connective phrases \u2014 let the next paragraph pick up the thread implicitly or with a simple temporal/logical marker ('Ten years ago,' 'But here's what I'm saying').",
      "Alternate between paragraphs that tell a personal story and paragraphs that draw a larger lesson from that story, creating a rhythm of zoom-in/zoom-out.",
      "Within paragraphs, sequence ideas from specific to general: begin with a concrete fact or event, then expand to its broader significance.",
      "Use occasional single-sentence paragraphs for pivots or emphatic declarations that mark a shift in the essay's direction."
    ],
    "do_not": [
      "Do not begin paragraphs with mechanical transition phrases like 'Furthermore,' 'Moreover,' or 'In addition' \u2014 transitions should feel organic and conversational.",
      "Do not let paragraphs become mere lists of examples without a governing claim or emotional throughline.",
      "Do not end paragraphs weakly with qualifications or trailing thoughts \u2014 the final sentence should land with force or resonance."
    ],
    "evidence": [
      "Hope and history are sisters: one looks forward and one looks back, and they make the world spacious enough to move through freely.",
      "Things change. And people sometimes have the power to make that happen, if and when they come together and act (and occasionally act alone, as did writers Rachel Carson and Harriet Beecher Stowe \u2014 or Mohammed Bouazizi, the young man whose suicide triggered the Arab Spring).",
      "It does exist, though, like lava beneath the earth, and when it erupts, the surface of the earth is remade."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Employ extended anaphora to build cumulative rhetorical force \u2014 repeat the same syntactic opening across multiple clauses or sentences ('you don't stop walking to...', 'If I had told you...', 'I know that...').",
      "Use metaphor and simile drawn from the natural and physical world: lava beneath the earth, seeds and harvests, labyrinths, paths walked, matches and blazes, drops wearing away stones.",
      "Deploy antithesis to hold opposing ideas in tension: 'hope and some of our fear,' 'more to win, more to lose,' 'not necessarily for the better... But not entirely for the worse either.'",
      "Use direct address and imperatives to pull the reader into action: 'you should wake up amazed,' 'Think of it as the match but not the tinder.'",
      "Employ rhetorical questions sparingly but at key turning points to challenge assumptions: 'How could he possibly know?'",
      "Use lists that crescendo \u2014 build from smaller to larger items, from known to unknown, from personal to universal.",
      "Employ deliberate word reuse ('unstoppable,' 'hope,' 'walking,' 'change') as a unifying thread rather than reaching for synonyms \u2014 let key words become incantatory through repetition."
    ],
    "do_not": [
      "Do not use pop culture references or humorous analogies \u2014 the analogies here are drawn from history, nature, and physical experience.",
      "Do not employ sarcasm, snark, or deflating irony \u2014 the rhetorical mode is earnest elevation, not postmodern detachment.",
      "Do not overuse rhetorical questions; reserve them for genuine turning points in the argument."
    ],
    "evidence": [
      "you don't stop walking to congratulate yourself; you don't stop walking to wallow in despair; you don't stop because your own life got too comfortable or too rough; you don't stop because you won; you don't stop because you lost.",
      "Think of it as the match but not the tinder or the blaze.",
      "the small drops that wear away stones and carve new landscapes, and sometimes by torrents of popular will that change the world suddenly"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal anecdote that establishes the writer's authority and relationship to the subject \u2014 ground the essay in lived experience before expanding to argument.",
      "Establish the essay's emotional and intellectual stakes in the first few paragraphs by naming both the darkness (political despair, war, crisis) and the source of light (a person, a book, a movement).",
      "Use section breaks or subheadings to mark thematic shifts within a long essay, treating each section as a semi-independent argument that builds on the previous one.",
      "Close with an extended, rhythmically intensifying passage \u2014 a crescendo of parallel clauses that distills the essay's core message into an incantatory, almost poetic final movement.",
      "End on forward motion and possibility, not on resolution or summary \u2014 the final image should be of walking, continuing, becoming, not arriving.",
      "Use parenthetical asides and em dashes throughout for editorial commentary, additional context, and tonal modulation.",
      "When citing others' words or ideas, weave them into the narrative rather than block-quoting \u2014 paraphrase and embed, using quotation marks only for key phrases."
    ],
    "do_not": [
      "Do not open with an abstract thesis or a dictionary definition \u2014 always begin with a person, a scene, or a moment.",
      "Do not close with a tidy summary that restates the argument point by point \u2014 the ending should transcend and elevate, not recapitulate.",
      "Do not use bullet points, numbered lists, or other formatting that breaks the essay's flowing, prose-driven texture."
    ],
    "evidence": [
      "I worked for years as an editor at Pantheon Books. Its publisher, maybe the most adventurous in the business, was Andr\u00e9 Schiffrin.",
      "But mostly you just walk, right foot, left foot, right foot, left foot. That's what makes you unstoppable.",
      "The future is bigger than our imaginations. It's unimaginable, and then it comes anyway."
    ]
  }
}
```

### sample-5.txt (2800 words)

```json
{
  "sample_id": "sample-5.txt",
  "word_count": 2800,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build expansive sentences by stacking participial phrases, appositives, and embedded lists within a single grammatical frame \u2014 let the sentence accumulate detail before arriving at its main point.",
      "Chain clauses with coordinating conjunctions (especially 'and') to create a rolling, additive momentum that mirrors the piling-up of examples and evidence.",
      "Use subordinate clauses beginning with 'when,' 'though,' 'if,' and 'whether' to nest qualifications and context inside the main assertion, so the reader absorbs complexity in a single sweep.",
      "Vary the rhythm by occasionally dropping in a short, declarative sentence after a long, winding one \u2014 use the short sentence to land a moral or emotional punch.",
      "Open sentences with prepositional or temporal phrases ('After the Macondo well exploded,' 'Long ago,' 'Years ago') to orient the reader in time or context before delivering the main clause."
    ],
    "do_not": [
      "Do not write in clipped, telegraphic prose \u2014 avoid stripping sentences down to bare subject-verb-object when there is texture to convey.",
      "Do not rely on semicolons as the primary connector between clauses; prefer commas with conjunctions or participial phrases to maintain the flowing, spoken quality.",
      "Do not let long sentences become monotonous \u2014 always punctuate extended passages with a brief, decisive statement that resets the rhythm."
    ],
    "evidence": [
      "Infinitely harder to see and less dramatic was the vast counterforce soon at work: the mobilizing of tens of thousands of volunteers, including passionate locals from fishermen in the Louisiana Oystermen's Association to an outraged tattoo-artist-turned-organizer, from visiting scientists, activist groups, and Catholic Charities reaching out to Vietnamese fishing families to the journalist and oil-policy expert Antonia Juhasz, and Rosina Philippe of the Atakapa-Ishak tribe in Grand Bayou.",
      "It should. We all should.",
      "Most of the real work on this planet is not done for profit: it's done at home, for each other, for affection, out of idealism, and it starts with the heroic effort to sustain each helpless human being for all those years before fending for yourself becomes feasible."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person to establish a warm, personally invested stance, but regularly pivot to 'we' and 'you' to draw the reader into shared complicity and shared possibility.",
      "Maintain an earnest, passionate tone that is intellectually serious but never academic or detached \u2014 write as someone who is both an observer and a participant in the struggles described.",
      "Signal certainty through bold, sweeping moral claims ('It is who we are, if only we knew it') rather than through hedging or credential-citing; when uncertainty appears, frame it as honest self-questioning ('I'm not sure I could bring myself to watch').",
      "Adopt a collegial, even intimate distance with the reader \u2014 address them directly ('But you know that story well'), invite them to think alongside you ('Think of the relations between friends'), and occasionally confess personal limitations or contradictions.",
      "Use no contractions \u2014 maintain a register that is conversational in spirit but elevated in diction, giving the prose a slight formality that signals the gravity of the subject.",
      "When naming adversaries or bad systems, use dry wit and vivid imagery rather than sarcasm or outrage \u2014 let the absurdity speak through the description."
    ],
    "do_not": [
      "Do not adopt a detached, clinical, or neutral journalistic voice \u2014 always let moral conviction show through the prose.",
      "Do not sneer or mock opponents directly; instead, expose contradictions and let the reader draw conclusions.",
      "Do not write with false modesty or excessive hedging \u2014 own the argument even when acknowledging complexity."
    ],
    "evidence": [
      "But you know that story well.",
      "there's petroleum in my gas tank and money in my name in banks.",
      "a phrase which always brings to my mind horror movies and Gothic novels in which detached and phantasmagorical limbs go about their work crawling and clawing away."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through vivid, concrete anecdotes or scenes, then zoom out to the larger principle they illustrate \u2014 move from the particular to the universal.",
      "Build the argument through accumulation: pile up examples, names, organizations, and acts of resistance until the sheer volume becomes the evidence itself.",
      "Handle counterarguments by pre-emptively acknowledging complexity and personal complicity ('there are saints in government and monsters in the progressive movement; there's petroleum in my gas tank'), then immediately pivot back to the neglected truth you are championing.",
      "Use a dialectical structure: name the dominant narrative (capitalism is inevitable, human nature is selfish), then systematically dismantle it by revealing what it renders invisible.",
      "Employ analogies and metaphors as load-bearing argumentative structures \u2014 the 'iceberg,' the 'invisible hand vs. open hand,' the 'shadow system' \u2014 and return to them throughout the piece to unify disparate examples.",
      "Let other voices enter the argument through quotes and paraphrases from activists, scholars, and acquaintances, using their words as co-witnesses rather than mere citations."
    ],
    "do_not": [
      "Do not present arguments as dry logical chains of if-then propositions; always ground logic in human stories and sensory detail.",
      "Do not dismiss counterarguments outright \u2014 acknowledge the grain of truth in opposing views before reframing the larger picture.",
      "Do not rely on statistics or data as primary evidence; when numbers appear, embed them in narrative and use them to illuminate a human reality, not to prove a point through quantification alone."
    ],
    "evidence": [
      "I think of one ornithologist I met in Grand Bayou who had been dispatched to the Gulf by an organization, but had decided to stay on even if his funding ran out.",
      "The novelist and avid lepidopterist Vladimir Nabokov once asked someone coming down a trail in the Rockies whether he'd seen any butterflies. The answer was negative; there were no butterflies. Nabokov, of course, went up that same trail and saw butterflies galore.",
      "How can you add up the foreclosures and evictions that don't happen, the forests that aren't leveled, the species that don't go extinct, the discriminations that don't occur?"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a framing assertion or an imperative invitation ('Think of,' 'Consider,' 'Who wouldn't agree') that establishes the paragraph's conceptual territory before filling it with evidence.",
      "Close paragraphs with a sentence that either delivers a moral insight, poses a provocative question, or pivots forward to the next section \u2014 never let a paragraph trail off without purpose.",
      "Sequence ideas within paragraphs by moving from concrete example to abstract principle, or from the visible to the invisible \u2014 mirror the essay's central argument about seeing what is hidden.",
      "Use section headers as rhetorical moves \u2014 each header should reframe the argument and signal a shift in scale or angle ('The Iceberg Economy,' 'Butterfly Spotting,' 'The Compassion Boom').",
      "Connect paragraphs through implicit thematic echoes rather than explicit transition words \u2014 let the return of key metaphors (hands, visibility, shadow) do the linking work."
    ],
    "do_not": [
      "Do not begin paragraphs with mechanical transitional phrases ('Furthermore,' 'In addition,' 'Moreover') \u2014 prefer organic connections through imagery or direct address.",
      "Do not organize paragraphs as simple topic-sentence-plus-support structures; allow for accumulation, digression, and return within a single paragraph.",
      "Do not end paragraphs on a flat, merely informational note \u2014 always close with energy, whether through a striking image, a moral claim, or a question."
    ],
    "evidence": [
      "Think of the acts of those\u2014from daycare worker to nursing home aide or the editor of TomDispatch.com\u2014who do more, and do it more passionately, than they are paid to do",
      "It is who we are, if only we knew it.",
      "You see what you're looking for."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy extended metaphors that serve as organizational spines for the essay \u2014 introduce a central image early (the iceberg, the invisible hand, the shadow self) and return to it at key moments to unify the argument.",
      "Use anaphora and parallel structure to build rhetorical momentum, especially when cataloguing examples of resistance, kindness, or systemic failure ('Think of\u2026 Think of\u2026'; 'the foreclosures that don't happen, the forests that aren't leveled, the species that don't go extinct').",
      "Employ antithesis to sharpen contrasts \u2014 pair the official system against the shadow system, the claw against the open hand, selfishness against solidarity, within single sentences.",
      "Use rhetorical questions sparingly but pointedly to challenge received wisdom ('Who wouldn't agree that our society is capitalistic?'; 'Are you?').",
      "Embed lists of proper names, organizations, and specific people as a rhetorical device \u2014 the accumulation of real names gives weight, texture, and moral witness to abstract claims.",
      "Quote others not just for authority but for moral resonance \u2014 choose quotes that carry emotional charge and let them do argumentative work."
    ],
    "do_not": [
      "Do not use pop-culture analogies or humorous asides that undercut the moral seriousness of the argument \u2014 wit should sharpen, not deflect.",
      "Do not overuse rhetorical questions; deploy them only at moments of genuine confrontation with received ideas.",
      "Do not use metaphors decoratively \u2014 every figurative device must carry argumentative weight and recur meaningfully."
    ],
    "evidence": [
      "How can you add up the foreclosures and evictions that don't happen, the forests that aren't leveled, the species that don't go extinct, the discriminations that don't occur?",
      "The invisible claw of the market may fail to comprehend how powerful the other hand\u2014the one that gives rather than takes\u2014is, but neither does that open hand know itself or its own power.",
      "a phrase which always brings to my mind horror movies and Gothic novels in which detached and phantasmagorical limbs go about their work crawling and clawing away."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a vivid, cinematic scene that plunges the reader into a specific event, then immediately pivot to reveal what that scene obscures \u2014 establish the essay's dialectical method in the opening paragraph itself.",
      "Use the opening to introduce the central tension between what is visible and what is invisible, dramatic and undramatic \u2014 let this tension generate the essay's structure.",
      "Close the essay with a declaration that circles back to the opening theme but elevates it to a moral imperative \u2014 end not with summary but with a call to recognition and expanded vision.",
      "Structure the essay in named sections with subheadings that function as miniature arguments or provocations, each advancing the central thesis from a new angle.",
      "Use em dashes liberally for parenthetical insertions, asides, and appositive expansions that add texture without breaking the sentence's flow.",
      "Employ parenthetical asides in a conversational register to inject personal commentary, dry humor, or qualification into otherwise declarative sentences.",
      "Format the essay as a long-form opinion piece that blends personal narrative, political analysis, cultural criticism, and moral philosophy \u2014 refuse genre purity in favor of an essayistic mode that moves freely between registers."
    ],
    "do_not": [
      "Do not open with an abstract thesis statement or a dictionary definition \u2014 always begin in the concrete and particular.",
      "Do not close with a tidy summary that reduces the essay's complexity; end with an expansive gesture that opens outward rather than closing down.",
      "Do not use bullet points, numbered lists, or other formatting that breaks the flowing, prose-based structure of the essay."
    ],
    "evidence": [
      "After the Macondo well exploded in the Gulf of Mexico, it was easy enough (on your choice of screen) to see a flaming oil platform, the very sea itself set afire with huge plumes of black smoke rising",
      "It is who we are, if only we knew it.",
      "and they have so many favorites!"
    ]
  }
}
```

## Raw Synthesis Data

```json
{
  "author_name": "Rebecca Solnit",
  "sample_count": "5",
  "detected_genre": "essay",
  "one_line_description": "formal, passionate, expansive \u2014 morally committed essayist who builds accumulative arguments from personal witness to systemic critique, wielding long clause-rich sentences and extended metaphors with rhetorical precision",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long sentences by stacking multiple subordinate clauses, appositives, participial phrases, and parenthetical asides within a single grammatical frame, letting ideas accumulate rhetorical momentum before the period lands.",
      "Chain clauses with coordinating conjunctions (especially 'and,' 'but,' 'or') and commas to create compound sentences that keep the reader moving forward through connected ideas without full stops.",
      "Use em dashes to inject sudden asides, self-corrections, amplifications, or tonal shifts mid-sentence, creating a layered conversational density within formal prose.",
      "Embed parenthetical qualifications, context, and cross-references mid-sentence using dashes, parentheses, or commas so the sentence keeps expanding and layering information.",
      "Use colons to set up amplifications, explanations, or thesis-like declarations after a setup clause rather than starting a new sentence.",
      "Deploy parallel structure within long sentences to create rhetorical momentum \u2014 stack items in series using the same grammatical form, often three or more items separated by commas.",
      "Open sentences with prepositional or temporal phrases to orient the reader in time or context before delivering the main clause."
    ],
    "do_not": [
      "Do not write in consistently short, clipped, or staccato sentences \u2014 the baseline rhythm is expansive, clause-rich, and accumulative.",
      "Do not use simple subject-verb-object structures as the default; the standard sentence should carry multiple embedded clauses and appositives.",
      "Do not front-load sentences with hedging qualifiers ('It seems that,' 'One might argue') \u2014 lead with the assertion.",
      "Do not let long sentences lose their rhetorical endpoint \u2014 every extended sentence must drive toward a purposeful final clause or image, not trail off or meander.",
      "Do not rely on semicolons as the primary clause-joining device \u2014 prefer commas with conjunctions, em dashes, colons, or subordination."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a participant-witness who is both inside the story and commenting on its larger meaning \u2014 ground authority in personal experience, relationships, and lived history.",
      "Shift between intimate personal anecdote and sweeping sociopolitical observation within the same paragraph, moving fluidly from 'I' to 'we' to 'you.'",
      "Maintain a tone of controlled moral conviction \u2014 express outrage through precision, accumulated evidence, and declarative assertion rather than through exclamation or emotional overflow.",
      "Address the reader as a fellow traveler who shares basic values but may lack the framework to articulate what they sense \u2014 position yourself as providing that framework.",
      "Signal certainty through bold declarative claims and personal experience, not through appeals to authority or hedging; reserve uncertainty for moments of genuine intellectual humility.",
      "Avoid contractions \u2014 maintain a formal, deliberate register even when the content is passionate or conversational, creating gravity and controlled composition.",
      "When naming adversaries or systemic absurdity, deploy dry wit, sardonic naming, and vivid imagery rather than sustained sarcasm or mockery."
    ],
    "do_not": [
      "Do not adopt a detached, objective, clinical, or academically neutral tone \u2014 this voice is always personally implicated and morally committed.",
      "Do not be uniformly angry or polemical \u2014 the power comes from alternating between wry humor, tenderness, earnestness, and moral seriousness.",
      "Do not hedge every claim with qualifiers \u2014 when making a point about systemic patterns, commit to it plainly.",
      "Do not use sarcasm or deflating irony as primary tonal modes \u2014 when humor appears, it sharpens the argument rather than undercutting the moral seriousness."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Begin with a specific, vivid personal anecdote or concrete scene that seems contained, then gradually reveal its connection to a much larger systemic pattern \u2014 move from the particular to the universal.",
      "Build arguments through overwhelming accumulation of evidence \u2014 pile case after case, name after name, incident after incident, until the sheer volume makes the pattern undeniable.",
      "Use inductive logic: let the evidence force the conclusion rather than asserting the conclusion first and then illustrating it.",
      "Move between scales constantly \u2014 from a single incident to a cultural pattern to global systems \u2014 showing the problem exists at every level simultaneously.",
      "Handle counterarguments by preemptive acknowledgment followed by redirection: briefly concede the point, then immediately pivot to the deeper structural truth.",
      "Thread a single metaphorical or thematic thread through the entire piece \u2014 return to key images, phrases, or formulations at intervals to create structural unity.",
      "Weave the personal and the political together throughout rather than separating them into discrete sections \u2014 use associative logic to let one anecdote open onto another context, another country, another scale of the same problem.",
      "Incorporate other voices \u2014 named activists, writers, friends, public figures \u2014 as co-witnesses, quoting them to create a polyphonic, communal texture."
    ],
    "do_not": [
      "Do not construct arguments as formal syllogisms, numbered points, or dry logical chains \u2014 the logic should feel organic, narrative, and associative.",
      "Do not rely primarily on statistics or abstract data as evidence \u2014 personal experience, specific stories, and named incidents are the primary currency of credibility.",
      "Do not present the argument as a balanced debate with two equally valid sides \u2014 take a clear moral position and marshal evidence for it.",
      "Do not separate analysis from narrative or the personal from the political into discrete sections \u2014 they must be woven together throughout."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting detail, a bold declarative claim, or a direct continuation of the narrative thread \u2014 plunge the reader into a moment or assertion before drawing out its significance.",
      "Close paragraphs with a punchy judgment, a resonant aphoristic sentence, or a pivot that reframes what came before \u2014 the final sentence must land with rhetorical weight or propel the reader forward.",
      "Transition between paragraphs through thematic escalation, narrative chronology, or implicit echo rather than explicit connective phrases \u2014 let the return of key images or the juxtaposition of content create the connections.",
      "Within paragraphs, sequence ideas from concrete to abstract: begin with what happened or what is visible, then expand to what it means or what it reveals.",
      "Use subheadings as rhetorical provocations or argumentative claims, not neutral labels \u2014 they should carry argument and signal escalation.",
      "Alternate between paragraphs that tell a specific story and paragraphs that draw the larger lesson, creating a zoom-in/zoom-out rhythm."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore,' 'Moreover,' 'In addition,' 'In conclusion') to connect paragraphs \u2014 transitions should feel conversational or implicit.",
      "Do not end paragraphs weakly with trailing qualifications or flat informational notes \u2014 the final beat must have force or resonance.",
      "Do not begin paragraphs with topic sentences that baldly announce what the paragraph will argue \u2014 let the argument emerge from narrative and evidence."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy extended metaphors that are sustained across entire sections or the full essay \u2014 commit fully to the metaphor as an organizational spine (the World Cup of Ideas, the iceberg economy, the archipelago of arrogance) and return to it at key moments.",
      "Use anaphora and deliberate repetition of parallel constructions to build cumulative rhetorical force \u2014 repeat a syntactic frame with varying content to create a drumbeat effect.",
      "Employ catalogues and lists that escalate \u2014 accumulate examples, names, organizations, or incidents in series, building from the mundane to the severe, creating a rhetorical pile-up that overwhelms any single objection.",
      "Use parenthetical asides set off by dashes or parentheses to smuggle in sardonic commentary, devastating additional facts, or self-aware qualifications that layer argument-within-argument.",
      "Construct antithesis and juxtaposition to expose absurdity \u2014 place the ridiculous next to the grave, the official narrative next to the hidden reality, within single sentences.",
      "Use 'as though' and 'as if' constructions to dramatize and expose the implicit logic of opposing positions.",
      "Draw metaphors and similes from vivid, unexpected, sometimes absurd imagery rooted in the natural and physical world \u2014 anacondas, lava, butterflies, icebergs, paths walked into being.",
      "Use direct address and imperatives sparingly but devastatingly \u2014 when shifting to address someone directly, make it land as a tonal rupture."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors or dead similes \u2014 every figurative comparison should be fresh, specific, and slightly surprising.",
      "Do not use metaphors decoratively \u2014 every figurative device must carry argumentative weight and recur meaningfully.",
      "Do not overuse rhetorical questions \u2014 reserve them for genuine turning points where the question functions as an indictment or a challenge to received wisdom.",
      "Do not use pop-culture references for levity or relatability \u2014 cultural references must serve the argument seriously."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal anecdote, a vivid scene, or an extended metaphor that establishes an intimate register and draws the reader in before the argument reveals its larger stakes \u2014 always begin in the concrete and particular.",
      "Structure the essay as a series of expanding movements that radiate outward from the personal to the political \u2014 begin with a moment, expand to a cultural pattern, arrive at systemic analysis, and circle back.",
      "Delay the explicit thesis until the reader has been drawn into the narrative and emotional stakes through scene, story, and metaphor.",
      "Close with a passage that combines moral conviction with unresolved forward motion \u2014 end on continuation, possibility, or fierce qualified hope rather than tidy resolution or summary.",
      "Use section subheadings that function as rhetorical provocations or argumentative claims, structuring the essay into escalating movements.",
      "Use em dashes liberally for parenthetical insertions and dramatic pivots; use parentheses for factual asides; use colons to introduce thesis-like declarations.",
      "Embed the essay's thesis in a refrain that recurs with slight variations throughout the piece rather than stating it once in a thesis paragraph.",
      "Format as continuous flowing prose organized under provocative subheadings \u2014 blend personal narrative, political analysis, cultural criticism, and moral philosophy in a single essayistic mode."
    ],
    "do_not": [
      "Do not open with an abstract thesis statement, a definition, or throat-clearing \u2014 begin in scene, in story, in a specific moment or image.",
      "Do not close with a tidy summary, a neat resolution, or a point-by-point recapitulation \u2014 the ending should transcend and open outward.",
      "Do not use numbered lists, bullet points, or other formatting that breaks the essay's flowing, prose-driven texture."
    ]
  },
  "signature_phrases": {
    "use": [
      "em dashes for mid-sentence asides and amplifications",
      "as though / as if (to expose absurd logic)",
      "which is to say",
      "here is / here's what",
      "that is",
      "of course",
      "let alone",
      "or rather",
      "in other words",
      "it's like that out there",
      "archipelago (as metaphor for connected but dispersed phenomena)",
      "the world we live in",
      "civil society",
      "naming / to name (the act of making visible through language)",
      "You don't stop (anaphoric imperative sequences)",
      "If I had told you (counterfactual framing)",
      "We could talk about (cataloguing device)",
      "despair / hope (as dialectical poles)"
    ],
    "never_use": [
      "furthermore / moreover / in addition / in conclusion",
      "it goes without saying",
      "at the end of the day",
      "needless to say",
      "it is important to note",
      "I would argue that",
      "in my humble opinion",
      "to be fair",
      "moving on",
      "let's unpack this",
      "problematic (as standalone adjective)",
      "literally (as intensifier)",
      "basically / essentially (as filler)",
      "just saying",
      "hot take",
      "deep dive",
      "game-changer",
      "stakeholder",
      "leverage (as verb)",
      "impactful"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'in addition,' and 'in conclusion' with implicit thematic transitions or simple conjunctions like 'and,' 'but,' or temporal markers.",
    "Convert any sentence using hedging openers ('It seems that,' 'One might argue,' 'Perhaps') into a direct declarative assertion.",
    "Expand contractions to their full forms throughout \u2014 'don't' becomes 'do not,' 'it's' becomes 'it is' (except in quoted speech).",
    "If a paragraph ends with a trailing qualification or flat informational note, restructure so the final sentence delivers a resonant judgment or forward-looking pivot.",
    "When you find an abstract claim unsupported by a specific named incident, person, or place, insert a concrete example before or after it.",
    "Replace decorative or clich\u00e9d metaphors with fresh, unexpected imagery drawn from the natural or physical world.",
    "If an argument proceeds as a linear logical chain, restructure it as an accumulation of parallel cases that let the evidence force the conclusion.",
    "Convert passive constructions to active where possible \u2014 name the agent of the action.",
    "When you find a sequence of same-length medium sentences, combine some into longer accumulative sentences and let one remain short for contrast.",
    "Replace any bullet-point or numbered-list formatting with flowing prose that embeds the listed items in a catalogue sentence or an anaphoric sequence."
  ]
}
```