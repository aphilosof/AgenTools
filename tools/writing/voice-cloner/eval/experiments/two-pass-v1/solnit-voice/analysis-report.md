# Voice Analysis Report: Rebecca Solnit

**Samples analyzed:** 5
**Skill name:** `solnit-voice`
**Generator:** voice-cloner v2

**Voice:** formal, involved, explicit — controlled moral authority with accumulative prose, personal grounding, and rhetorical urgency

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

### sample-1.txt (3200 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "3200",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long, layered sentences by stacking multiple clauses with commas and coordinating conjunctions, often piling three or four ideas into a single sentence before arriving at the point: use the accumulation itself as rhetorical momentum.",
      "Chain clauses with semicolons to yoke together closely related but independently powerful statements, especially when drawing a logical connection the reader should feel as inevitable.",
      "Deploy short, blunt sentences as punchlines or emotional pivots after longer, more complex passages \u2014 the brevity should land like a verdict after deliberation.",
      "Use participial and appositional phrases to embed digression, qualification, or scene-setting within the main sentence without breaking the flow: 'So caught up was I in my assigned role as ing\u00e9nue that I was perfectly willing to entertain the possibility that\u2026'",
      "Favor polysyndeton \u2014 repeat 'and' to create a rolling, cumulative, almost breathless quality: 'the laboratory, or the library, or the conversation, or the revolution, or even the category called human.'"
    ],
    "do_not": [
      "Do not write in clipped, telegraphic prose \u2014 avoid sequences of uniformly short declarative sentences that create a staccato, journalistic rhythm.",
      "Do not front-load sentences with subordinate clauses in a formulaic academic pattern (e.g., 'Although X, Y'); instead vary where dependent clauses land \u2014 beginning, middle, or end.",
      "Do not use sentence fragments for stylistic effect except extremely sparingly, and only when delivering a wry aside or afterthought."
    ],
    "evidence": [
      "\"Every writer has a stable of ideas that never make it to the racetrack, and I'd been trotting this pony out recreationally every once in a while.\"",
      "\"Life is short; I didn't write back.\"",
      "\"It wanted to be written; it was restless for the racetrack; it galloped along once I sat down at the computer; and since Marina slept in later than me in those days, I served it for breakfast and sent it to Tom later that day.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a participant-witness: narrate personal anecdotes with the authority of lived experience, but pivot seamlessly to broader cultural and political analysis, so the personal story is always a portal to a systemic argument.",
      "Maintain a tone that is simultaneously conversational and intellectually serious \u2014 warm and wry in anecdote, unflinching and precise in argument. The voice should feel like a brilliant friend telling you something important over dinner, not a lecturer at a podium.",
      "Signal certainty through declarative assertion and moral clarity, not through hedging or qualification. When uncertain, express it as genuine exploration ('I wouldn't be surprised if\u2026') rather than academic caution.",
      "Use dry, understated humor as a weapon \u2014 let the absurdity of the situation deliver the comedy rather than straining for laughs. The humor should coexist with genuine anger without undermining it.",
      "Avoid contractions in most formal or analytical passages; permit them only in the most conversational, intimate moments to signal casual directness.",
      "Address the reader as an implicit ally \u2014 never condescend to them, never explain feminism from scratch, assume shared outrage and intelligence."
    ],
    "do_not": [
      "Do not adopt an academic, detached, or impersonal register \u2014 never write as though observing from outside the experience.",
      "Do not become shrill, pleading, or performatively angry \u2014 let the facts and stories carry the emotional weight; the author's composure in the face of outrageous behavior IS the rhetorical power.",
      "Do not use self-deprecation that genuinely undermines authority \u2014 when acknowledging self-doubt, frame it as a symptom of the very problem being critiqued."
    ],
    "evidence": [
      "\"Being women, we were politely out of earshot before we started laughing, and we've never really stopped.\"",
      "\"Dude, if you're reading this, you're a carbuncle on the face of humanity and an obstacle to civilization. Feel the shame.\"",
      "\"He explained, patiently, that they were respectable middle-class people.\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Begin with a specific, vivid personal anecdote that dramatizes the thesis before stating the thesis explicitly \u2014 let the reader experience the problem before naming it.",
      "Construct arguments by spiraling outward from the personal to the political: start with a dinner party, move to cultural patterns, arrive at domestic violence statistics and global women's rights. Each step should feel like a natural escalation, not a logical leap.",
      "Use recursive structure \u2014 return to key phrases and ideas ('Men explain things to me') at intervals, each time with added weight and expanded meaning, so the essay accumulates force rather than simply progressing linearly.",
      "Handle counterarguments preemptively and with withering specificity: quote or paraphrase the opposing position in enough detail to make its absurdity self-evident, then dismiss it with a terse, decisive sentence.",
      "Use analogies and concrete examples as primary evidence rather than abstract reasoning \u2014 the argument should be built from stories, incidents, and observed behavior, with the analytical framework emerging from the accumulation of cases.",
      "Link disparate examples (a dinner party in Aspen, a physicist's neighbor, testimony laws in the Middle East) to reveal them as manifestations of a single underlying structure. Name that structure explicitly."
    ],
    "do_not": [
      "Do not present arguments as balanced, both-sides explorations \u2014 take a clear moral position and let the evidence support it without false equivalence.",
      "Do not rely on abstract theoretical frameworks or jargon to make your case \u2014 the argument must be grounded in tangible, narrated experience.",
      "Do not soften conclusions with excessive qualification \u2014 state what the evidence shows and trust the reader to assess it."
    ],
    "evidence": [
      "\"What starts out as minor social misery can expand into violent silencing and even violent death.\"",
      "\"Credibility is a basic survival tool.\"",
      "\"This goes way beyond Men Explaining Things, but it's part of the same archipelago of arrogance.\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting detail, a bold claim, or a narrative continuation \u2014 rarely with a formal topic sentence. The paragraph's purpose should emerge as it unfolds rather than being announced upfront.",
      "Close paragraphs with a sharp, memorable sentence that either delivers a verdict, pivots to the next idea, or lands a wry observation. The final sentence should have disproportionate weight \u2014 it is where the paragraph's meaning crystallizes.",
      "Transition between paragraphs through thematic escalation rather than explicit connectives: each paragraph should feel like a natural deepening or widening of the previous one, often linked by a repeated word or concept rather than 'however' or 'moreover.'",
      "Within paragraphs, sequence ideas from concrete to abstract, from anecdote to analysis, from particular to universal \u2014 let the specific incident teach the general lesson.",
      "Allow some paragraphs to be a single scene or anecdote told in full, and others to be a single sharp observation standing alone for emphasis."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore,' 'In addition,' 'On the other hand') \u2014 transitions should be organic, built on conceptual or narrative momentum.",
      "Do not organize paragraphs as thesis-evidence-conclusion mini-essays \u2014 the structure should feel essayistic and exploratory, not like a five-paragraph essay."
    ],
    "evidence": [
      "\"I like incidents of that sort, when forces that are usually so sneaky and hard to point out slither out of the grass and are as obvious as, say, an anaconda that's eaten a cow or an elephant turd on the carpet.\"",
      "\"Life is short; I didn't write back.\"",
      "\"Which there rarely is.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors that begin as playful conceits and develop into serious analytical tools \u2014 e.g., the 'racetrack' metaphor for an essay idea that 'wanted to be written,' 'galloped along,' and was 'served for breakfast.' Let the metaphor do narrative work.",
      "Deploy lists and catalogues to create a sense of overwhelming accumulation, especially when enumerating the spaces or domains where the problem manifests: 'the bedroom, the dining room, the classroom, the workplace, and the streets.'",
      "Use repetition of key phrases across the essay ('Men explain things to me') as a structural refrain that gains force with each recurrence \u2014 the phrase should become more loaded and resonant each time it appears.",
      "Employ vivid, sometimes absurdist analogies to deflate pomposity and make abstract dynamics concrete: 'an anaconda that's eaten a cow or an elephant turd on the carpet.'",
      "Use parenthetical asides \u2014 set off by dashes or actual parentheses \u2014 to insert commentary, qualification, or sardonic observations that complicate the main statement without derailing it.",
      "Address antagonists directly in occasional second-person eruptions that break the essay's default register for dramatic effect."
    ],
    "do_not": [
      "Do not use rhetorical questions as a primary persuasive device \u2014 when questions appear, they should be genuine and piercing ('How, I asked, did you know that he wasn't trying to kill her?'), not decorative.",
      "Do not use clich\u00e9d metaphors or similes \u2014 every figurative comparison should feel surprising, specific, and earned.",
      "Do not rely on exclamation marks to convey intensity \u2014 let word choice and sentence construction carry the emotional force."
    ],
    "evidence": [
      "\"Every writer has a stable of ideas that never make it to the racetrack, and I'd been trotting this pony out recreationally every once in a while.\"",
      "\"\u2026not allowed into the laboratory, or the library, or the conversation, or the revolution, or even the category called human.\"",
      "\"\u2026as obvious as, say, an anaconda that's eaten a cow or an elephant turd on the carpet.\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal, scene-setting anecdote that is engaging and slightly self-deprecating before the essay's real argument emerges \u2014 draw the reader in with narrative before asking them to think critically. The opening should feel like the beginning of a story, not an argument.",
      "Establish context through narrative action and dialogue rather than exposition \u2014 show the reader a scene and let them inhabit it before explaining its significance.",
      "Close with a sentence that combines wry humor with unresolved tension \u2014 the ending should feel like a deliberate refusal to wrap things up neatly, acknowledging that the problem persists while maintaining the author's characteristic composure and wit.",
      "Use section headers sparingly and as rhetorical gestures rather than organizational scaffolding \u2014 a header should feel like a chapter title that carries thematic weight ('The Slippery Slope of Silencings,' 'Women Fighting on Two Fronts').",
      "Use em dashes liberally for parenthetical insertions, mid-sentence pivots, and dramatic pauses. Use semicolons to connect closely related independent clauses with a formal, deliberate cadence.",
      "Format direct dialogue with standard quotation marks, and use it to dramatize power dynamics \u2014 let the reader hear the condescension in the antagonist's actual words.",
      "Italicize for emphasis sparingly but pointedly, and use it to mark key terms or to highlight the absurdity of a phrase by calling attention to it."
    ],
    "do_not": [
      "Do not open with a thesis statement, a definition, or a broad generalization \u2014 always enter through a specific scene or moment.",
      "Do not close with a tidy summary, a call to action, or an inspirational platitude \u2014 the ending should be open, honest about ongoing struggle, and inflected with dark humor.",
      "Do not use bullet points, numbered lists, or other formatting that breaks the essayistic flow \u2014 the piece should read as continuous, discursive prose."
    ],
    "evidence": [
      "\"I still don't know why Sallie and I bothered to go to that party in the forest slope above Aspen.\"",
      "\"Not yet, but according to the actuarial tables, I may have another forty-something years to live, more or less, so it could happen. Though I'm not holding my breath.\"",
      "\"I'm still fighting it, for myself certainly, but also for all those younger women who have something to say, in the hope that they will get to say it.\""
    ]
  }
}
```

### sample-2.txt (4636 words)

```json
{
  "sample_id": "sample-2.txt",
  "word_count": 4636,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long, accumulative sentences by stacking examples, clauses, and parenthetical asides with commas and dashes, creating a relentless cataloguing effect that mirrors the overwhelming scale of the subject.",
      "Chain coordinate clauses with 'and,' 'or,' 'but,' and 'while' to pile evidence within a single sentence, forcing the reader to confront the sheer volume before reaching a period.",
      "Use parenthetical insertions mid-sentence\u2014set off by dashes or actual parentheses\u2014to layer in additional facts, qualifications, or sardonic commentary without breaking the sentence's forward momentum.",
      "Deploy occasional short, declarative sentences as blunt punctuation after a long accumulative passage to deliver a thesis statement or moral judgment with maximum force.",
      "Construct sentences that begin with a concrete case and then telescope outward through subordinate clauses to connect the specific to the systemic.",
      "Use polysyndeton (repeated 'and' or 'or') within lists to create a breathless, never-ending quality that refuses to let the reader look away."
    ],
    "do_not": [
      "Do not write in evenly paced, uniform sentence lengths\u2014the rhythm depends on dramatic contrast between sprawling catalogues and terse verdicts.",
      "Do not use tidy, self-contained sentences that address one fact each; the point is to overwhelm through accumulation within a single syntactic unit.",
      "Do not strip out parenthetical asides or mid-sentence digressions; these layered interruptions are essential to the voice's density and rhetorical urgency."
    ],
    "evidence": [
      "Take your pick: some of the 20 men who gang-raped an 11-year-old in Cleveland, Texas, were sentenced in November, while the instigator of the gang rape of a 16-year-old in Richmond, California, was sentenced in October, and four men who gang-raped a 15-year-old near New Orleans were sentenced in April, though the six men who gang-raped a 14-year-old in Chicago last fall are still at large.",
      "It begins with this premise: I have the right to control you.",
      "No female bus riders in India have ganged up to sexually assault a man so badly he dies of his injuries, nor are marauding packs of women terrorizing men in Cairo's Tahrir Square, and there's just no maternal equivalent to the 11 percent of rapes that are by fathers or stepfathers."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is simultaneously personal and essayistic\u2014use 'I' to ground the argument in lived experience and 'we' to implicate the reader and society collectively.",
      "Maintain a tone that is controlled fury: the voice is measured and articulate but seething underneath, deploying facts and evidence as instruments of moral indictment rather than neutral reportage.",
      "Address the reader directly with 'you' to create confrontation and complicity\u2014phrases like 'you explain to me' or 'you don't want to know' turn the reader into an active participant who cannot remain a bystander.",
      "Signal certainty through declarative moral statements delivered without hedging, but use occasional concessive phrases ('of course,' 'to be clear') to preempt objections before returning to the main argument with redoubled force.",
      "Employ dry, bitter irony rather than jokes\u2014sardonic asides that reveal the absurdity or horror of a situation without ever becoming flippant or detached.",
      "Never use contractions in formal declarative passages to maintain the gravity and authority of the prose."
    ],
    "do_not": [
      "Do not adopt a neutral, objective, or journalistic tone\u2014this is advocacy writing that openly takes a moral position and insists the reader do the same.",
      "Do not use tentative or diffident language ('perhaps we might consider,' 'it could be argued')\u2014the voice speaks with the authority of someone who has assembled overwhelming evidence.",
      "Do not become shrill, pleading, or emotionally overwrought; the power comes from the contrast between the horrific content and the controlled, almost lawyerly presentation of it."
    ],
    "evidence": [
      "You explain to me why colleges spend more time telling women how to survive predators than telling the other half of their students not to be predators.",
      "Here I want to say one thing: though virtually all the perpetrators of such crimes are men, that doesn't mean all men are violent.",
      "But we are free together or slaves together."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build the argument through relentless accumulation of evidence\u2014pile case after case, statistic after statistic, example after example until the pattern becomes undeniable through sheer volume.",
      "Introduce claims with bold, unequivocal assertions, then support them not through abstract reasoning but through a cascade of specific, named, dated incidents that serve as proof by overwhelming enumeration.",
      "Handle counterarguments by preemptively acknowledging them in a concessive clause ('of course,' 'not that,' 'to be clear') and then immediately pivoting back to the central argument with even more evidence, effectively using the concession as a springboard.",
      "Use the pattern of 'we could talk about X, or Y, or Z' to create a rhetorical structure where the mere listing of what could be discussed becomes the argument itself.",
      "Connect the specific to the systemic: move from a particular incident to a broader claim about patterns, power structures, and cultural complicity, making the reader see each case as a symptom rather than an anomaly.",
      "Expose false explanations by listing them ('the economy is bad,' 'mental problems,' 'intoxicants,' 'head injuries,' 'lead exposure') and then demolishing the entire category with a single devastating observation."
    ],
    "do_not": [
      "Do not present the argument as a balanced weighing of perspectives\u2014the evidence is marshaled to a clear conclusion and the essay moves toward that conclusion with prosecutorial intent.",
      "Do not rely on abstract theorizing or philosophical frameworks detached from concrete cases; every claim must be grounded in specific, verifiable incidents.",
      "Do not allow counterarguments to occupy significant space or create genuine ambiguity\u2014acknowledge them briefly and move on."
    ],
    "evidence": [
      "Not that I actually went out looking for incidents: they're everywhere in the news, though no one adds them up and indicates that there might actually be a pattern.",
      "The pandemic of violence always gets explained as anything but gender, anything but what would seem to be the broadest explanatory pattern of all.",
      "We have dots so close they're splatters melting into a stain, but hardly anyone connects them, or names that stain."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a thematic assertion or transitional bridge that sets up the paragraph's territory, then flood it with supporting evidence in an accumulative cascade.",
      "Use single-sentence paragraphs as rhetorical hammer-blows\u2014standalone declarations that distill an entire section's argument into one inescapable statement, positioned between dense evidence paragraphs for maximum contrast.",
      "Connect paragraphs through thematic echo and verbal callback rather than mechanical transition words\u2014repeat key phrases ('we could talk about,' 'it's a pattern,' 'control') across paragraph boundaries to create cohesion through motif.",
      "Structure some paragraphs as a single breathless sentence or a pair of sentences where one enormous accumulative sentence is followed by a short, devastating verdict.",
      "Use section headers sparingly but pointedly, often as provocative questions or sardonic reframings that function as mini-arguments themselves."
    ],
    "do_not": [
      "Do not use formulaic topic-sentence-then-support paragraph structures; the organizational logic is rhetorical accumulation and contrast, not textbook exposition.",
      "Do not rely on explicit transitional phrases ('furthermore,' 'in addition,' 'moreover') between paragraphs\u2014cohesion comes from thematic threading and repeated motifs.",
      "Do not let paragraphs feel self-contained and resolved; many should create a sense of being part of an unfinishable catalogue, pushing the reader forward."
    ],
    "evidence": [
      "It's almost never treated as a civil rights or human rights issue, or a crisis, or even a pattern.",
      "Violence doesn't have a race, a class, a religion, or a nationality, but it does have a gender.",
      "We could talk about the assault and rape of a 73-year-old in Manhattan's Central Park last September, or the recent rape of a four-year-old and an 83-year-old in Louisiana, or the New York City policeman who was arrested in October for what appeared to be serious plans to kidnap, rape, cook, and eat a woman, any woman, because the hate wasn't personal"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use anaphoric repetition ('we could talk about,' 'no female,' 'or the') to create a liturgical, incantatory rhythm that transforms a list of horrors into an overwhelming rhetorical performance.",
      "Deploy antithesis and parallel construction to expose contradictions and double standards: set male behavior against female behavior in identical syntactic structures to make the contrast inescapable.",
      "Use extended metaphor sparingly but memorably\u2014when a metaphor appears (dots becoming splatters becoming a stain), it should crystallize the essay's entire argument in a single image.",
      "Employ sardonic coinages and renamings ('Manistan,' 'the Party for the Protection of the Rights of Rapists') to defamiliarize and indict through naming.",
      "Borrow and subvert familiar cultural references (song titles, literary allusions, political slogans) by placing them in the context of violence against women, forcing a collision between the familiar and the horrific.",
      "Use direct address and imperatives ('think of,' 'look at it this way,' 'you explain to me') to break the fourth wall and make the reader a participant rather than a spectator."
    ],
    "do_not": [
      "Do not use decorative or lyrical figurative language for its own sake\u2014every metaphor and device must serve the argument's moral force.",
      "Do not deploy rhetorical questions in a soft, wondering, exploratory way; when questions appear, they should be accusatory or designed to expose an absurdity.",
      "Do not use analogies that soften or aestheticize the violence; comparisons should amplify horror or expose hypocrisy, never domesticate it."
    ],
    "evidence": [
      "We have dots so close they're splatters melting into a stain, but hardly anyone connects them, or names that stain. In India they did.",
      "Welcome to Manistan.",
      "What's love got to do with it, asked Tina Turner, whose ex-husband Ike once said, 'Yeah I hit her, but I didn't hit her more than the average guy beats his wife.'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open by plunging immediately into the subject with a barrage of specific, dated facts that establish the essay's territory and moral urgency from the first sentence\u2014no throat-clearing, no abstract preamble.",
      "Use section headers as rhetorical devices: phrase them as provocative questions ('Who Has the Right to Kill You?'), sardonic labels ('The Party for the Protection of the Rights of Rapists'), or evocative phrases that reframe the argument.",
      "Close the essay with a pivot from documentation to exhortation\u2014move from the accumulated evidence to a call for recognition and change, using second-person address to place responsibility directly on the reader.",
      "In the final paragraphs, connect the specific catalyzing incident back to a historical precedent or larger movement to give the essay a sense of scale and possibility beyond mere despair.",
      "Use parenthetical asides throughout\u2014set off by parentheses or em dashes\u2014to smuggle in additional facts, sardonic commentary, or devastating qualifications that the main sentence cannot contain.",
      "Format the essay as long-form polemic with clear section breaks but no numbered lists or bullet points; the density and continuousness of prose is itself a rhetorical choice that refuses to let the reader skim."
    ],
    "do_not": [
      "Do not open with a personal anecdote, a question, or a reflective scene-setting moment\u2014begin with the facts and the scale of the problem.",
      "Do not close with resignation, despair, or an open-ended question that leaves the reader comfortable; the ending must demand action and assert that change is both necessary and possible.",
      "Do not use listicle formatting, bullet points, or any structure that allows the reader to consume the content in fragments\u2014the essay's power depends on immersive, unbroken prose."
    ],
    "evidence": [
      "Here in the United States, where there is a reported rape every 6.2 minutes, and one in five women will be raped in her lifetime, the rape and gruesome murder of a young woman on a bus in New Delhi on December 16th was treated as an exceptional incident.",
      "It has to change. It's your job to change it, and mine, and ours.",
      "May she be to women\u2014and men\u2014worldwide what Emmett Till, murdered by white supremacists in 1955, was to African-Americans and the then-nascent U.S. civil rights movement."
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
      "Build long, multi-clause sentences by stacking subordinate clauses, participial phrases, and appositives to layer context and qualification before arriving at the main point \u2014 e.g., 'In the years that followed, that problem gained several names: male chauvinism, then sexism, misogyny, inequality, and oppression.'",
      "Use the colon as a structural hinge: set up an idea in the first half and deliver the payoff, list, or elaboration after the colon \u2014 e.g., 'here's what surprised me: though I began with a ridiculous example\u2026'",
      "Chain clauses with commas and coordinating conjunctions to build momentum within a single sentence, especially when cataloguing related consequences or examples \u2014 'she now has access to legal remedies that occasionally work, occasionally protect her, and\u2014even more occasionally\u2014send her abuser to jail.'",
      "Use em dashes to insert parenthetical asides, qualifications, or escalations mid-sentence without breaking the syntactic flow \u2014 'the mainstream's goalie shouted \"mental illness\" again and again' paired with dashes elsewhere for interruption.",
      "Deploy parallel structure in threes (tricolons) as a default rhythmic unit: 'harassment, intimidation, threat, battery, rape, murder' or 'share experiences, revisit meanings and definitions, and arrive at new understandings.'",
      "Alternate between dense, qualifying sentences and short declarative assertions that land a moral or political point \u2014 use the short sentence as a hammer blow after a longer buildup."
    ],
    "do_not": [
      "Do not write in consistently uniform sentence lengths \u2014 avoid a monotonous cadence where every sentence has the same clause count and rhythm.",
      "Do not use sentence fragments as stylistic flair or for dramatic effect \u2014 this voice prefers grammatically complete sentences even when making punchy points.",
      "Do not front-load sentences with long adverbial phrases that delay the subject excessively \u2014 subordinate clauses should add texture, not obscure the main assertion."
    ],
    "evidence": [
      "\"Mental illness is, however, more often a matter of degree, not kind, and a great many people who suffer it are gentle and compassionate.\"",
      "\"It's a slippery slope.\"",
      "\"A woman is still beaten every nine seconds in this country, but thanks to the heroic feminist campaigns of the 1970s and 1980s, she now has access to legal remedies that occasionally work, occasionally protect her, and\u2014even more occasionally\u2014send her abuser to jail.\""
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is intellectually authoritative yet personally invested \u2014 use 'I' to ground arguments in lived experience and 'we' to invoke collective feminist consciousness and shared stakes.",
      "Maintain a tone that oscillates between measured analytical calm and controlled moral outrage \u2014 let indignation surface through word choice ('savage,' 'dismal,' 'omnipresent') rather than through exclamation or hyperbole.",
      "Signal confidence through declarative assertions without hedging \u2014 state claims as established facts when the evidence is cultural or historical: 'Language is power.' 'Words matter.'",
      "Use dry, sardonic wit to expose absurdity rather than for humor's own sake \u2014 e.g., 'as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture.'",
      "When quoting or referencing others, frame them with editorial context that guides the reader's interpretation \u2014 introduce voices as allies or exemplars, never neutrally.",
      "Never use contractions \u2014 maintain the formal register throughout, which conveys gravity and literary seriousness even when the subject matter is colloquial."
    ],
    "do_not": [
      "Do not adopt a detached, academic voice that distances the author from the stakes \u2014 always write as someone who is personally affected by and invested in the subject.",
      "Do not use tentative or apologetic hedging ('perhaps,' 'it might be argued,' 'one could say') when making moral or political claims \u2014 state them with conviction.",
      "Do not use casual humor, jokes, or levity that could undercut the seriousness of violence against women \u2014 wit must serve the argument, never trivialize it."
    ],
    "evidence": [
      "\"I think we are in such a crisis of opportunity now, as not one miserable, murderous young man but the whole construct in which we live is brought into question.\"",
      "\"It's like that out there.\"",
      "\"An exasperated woman remarked to me, 'What do they want\u2014a cookie for not hitting, raping, or threatening women?'\""
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open arguments with a bold, often metaphorical framing that recontextualizes a familiar event \u2014 then build outward from that frame to the broader cultural analysis (e.g., the World Cup metaphor for the battle over meaning).",
      "Construct arguments by moving from specific incidents to systemic analysis \u2014 use individual events (Isla Vista, Kitty Genovese, Anita Hill) as entry points into larger cultural patterns, never as endpoints.",
      "Deploy the history of language and naming as a central argumentative strategy \u2014 trace when terms were coined, how they entered circulation, and what cultural shifts they enabled, treating linguistic change as evidence of political change.",
      "Preemptively address counterarguments by reframing them as part of the problem \u2014 do not steel-man opposing positions but instead show how the opposing frame itself is a symptom of the dysfunction being critiqued (e.g., 'Not All Men' reframed as comfort-seeking).",
      "Build cumulative evidence through layered examples rather than single decisive proofs \u2014 stack three, four, or five instances of the same pattern to create an overwhelming impression of systemic rather than isolated behavior.",
      "Use extended quotations from allies and experts as structural pillars \u2014 let other voices carry key sub-arguments, then resume authorial control to synthesize and advance the thesis."
    ],
    "do_not": [
      "Do not present opposing viewpoints charitably or give them equal weight \u2014 this voice treats the opposition as symptoms to diagnose, not positions to debate.",
      "Do not rely on statistical evidence or data-driven argumentation as the primary mode \u2014 use cultural, historical, and linguistic evidence instead, with data only as occasional punctuation.",
      "Do not structure arguments as linear problem-solution \u2014 instead use a recursive, associative flow that circles back to deepen and complicate earlier claims."
    ],
    "evidence": [
      "\"The term 'sexual harassment,' for example, was coined in the 1970s, first used in the legal system in the 1980s, given legal status by the Supreme Court in 1986, and given widespread coverage in the upheaval after Anita Hill's testimony\u2026\"",
      "\"We tend to treat violence and the abuse of power as though they fit into airtight categories: harassment, intimidation, threat, battery, rape, murder. But I realize now that what I was saying is: it's a slippery slope.\"",
      "\"as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture\""
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a strong declarative claim or a concrete reference point (a name, a date, a specific event) \u2014 then expand outward into analysis and implication.",
      "Close paragraphs with a sentence that either delivers a moral verdict, a pithy summation, or a pivot toward the next idea \u2014 endings should land with weight, not trail off.",
      "Connect paragraphs through thematic association rather than explicit transition words \u2014 let the reader feel the link between a closing idea and the next paragraph's opening without 'however,' 'moreover,' or 'furthermore.'",
      "Use single-sentence paragraphs as emphatic standalone assertions that punctuate the argument \u2014 these should feel like the essay pausing to let a crucial point resonate.",
      "Within multi-sentence paragraphs, sequence ideas from specific to general: begin with a concrete fact, example, or anecdote, then widen to cultural significance or historical context.",
      "When incorporating block quotations, use the preceding paragraph to frame the quote's significance and the following paragraph to interpret or extend its implications \u2014 never let a quote stand without authorial framing."
    ],
    "do_not": [
      "Do not use formulaic topic-sentence-then-support paragraph structures \u2014 the opening sentence should provoke or assert, not merely preview.",
      "Do not end paragraphs with trailing qualifications or weakening clauses \u2014 the final sentence should be the strongest or most resonant in the paragraph.",
      "Do not use explicit transitional phrases ('In addition,' 'On the other hand,' 'Furthermore') \u2014 rely on the associative logic of juxtaposed ideas to carry the reader forward."
    ],
    "evidence": [
      "\"The murderer at Isla Vista was also repeatedly called 'aberrant,' as if to emphasize that he was nothing like the rest of us.\"",
      "\"It's like that out there.\"",
      "\"Words matter.\""
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors to reframe political and cultural conflicts \u2014 sustain a metaphor across multiple sentences to make abstract struggles visceral (e.g., the World Cup match for ideological contest, earthquake/tectonic plates for cultural shift).",
      "Deploy anaphora and deliberate repetition of key phrases to build rhetorical momentum and hammer home a point \u2014 repeat the same structural opening ('if they were,' 'he could be') to create a cascading, accumulating effect.",
      "Use 'as though' and 'as if' constructions to expose the absurdity of opposing positions by articulating their implicit assumptions \u2014 make the reader see how ludicrous the assumption is when stated plainly.",
      "Employ lists and catalogues as rhetorical escalation \u2014 arrange items in ascending order of severity or scope to create a sense of intensifying gravity.",
      "Use direct address and imperatives sparingly but pointedly \u2014 address the reader as part of a collective ('we,' 'our') to create solidarity rather than using 'you' to instruct.",
      "Quote and name specific individuals, publications, and hashtags \u2014 ground rhetorical claims in real voices and real texts to create a sense of documented, witnessed reality."
    ],
    "do_not": [
      "Do not use rhetorical questions as a primary persuasive device \u2014 prefer declarative assertions that tell the reader what to think rather than asking them to arrive there.",
      "Do not use pop-culture analogies or humorous comparisons that could trivialize the subject \u2014 analogies should elevate and clarify, drawn from history, geology, literature, or political theory.",
      "Do not use exclamation marks for emphasis \u2014 let word choice and sentence structure carry the emotional weight."
    ],
    "evidence": [
      "\"as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture\"",
      "\"If they were, a fifth of all American women\u2026 wouldn't be rape survivors; if they were, 19% of female college students wouldn't have to cope with sexual assault; if they were, the military wouldn't be stumbling through an epidemic of sexual violence.\"",
      "\"He could be your husband, your father, your boss or editor, or the stranger at some meeting or on the train, or the guy you've never seen who's mad at someone else but thinks 'women' is a small enough category that you can stand in for 'her.'\""
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with an extended metaphor or dramatic conceit that reframes the event being analyzed \u2014 the first paragraph should function as a scene that dramatizes the intellectual conflict, not merely state a thesis.",
      "Establish the essay's central argument through the opening metaphor rather than through direct thesis statement \u2014 let the reader discover the argument through the figural language.",
      "Close by returning to the long historical arc \u2014 end with an assertion about the direction of change, combining acknowledgment of ongoing struggle with measured, hard-won optimism.",
      "Structure the essay as a series of named or thematically distinct sections (using subheadings) that each address a different facet of the central argument \u2014 the sections should feel like chapters in a miniature book.",
      "Use subheadings as rhetorical devices in themselves \u2014 make them evocative phrases or borrowed language that advance the argument rather than neutral descriptors.",
      "Format block quotations from allies and sources as indented, extended passages \u2014 use them as structural pillars that carry part of the argumentative weight, introduced and followed by authorial framing.",
      "Use em dashes liberally for parenthetical insertions, dramatic asides, and mid-sentence pivots \u2014 they are the signature punctuation of this voice, preferred over parentheses or commas for interjection.",
      "Use italics for book titles and coined terms, and quotation marks for phrases being examined as language \u2014 distinguish between using a word and mentioning a word."
    ],
    "do_not": [
      "Do not open with a question, a statistic, or a dry factual statement \u2014 the opening must have narrative or metaphorical energy.",
      "Do not close on a note of despair or unresolved pessimism \u2014 even when the subject is grim, end with a sense of forward motion, change, or possibility.",
      "Do not use numbered lists or bullet points in the body of the essay \u2014 the voice is prose-driven and literary, not formatted for scanning.",
      "Do not use parenthetical citations or academic footnote style \u2014 integrate sources conversationally by naming the person, publication, or event directly in the sentence."
    ],
    "evidence": [
      "\"It was a key match in the World Cup of Ideas.\"",
      "\"The world has changed profoundly, it needs to change far more\u2014and on that weekend of mourning and introspection and conversation just passed, you could see change happen.\"",
      "\"The struggle has been and will be long and harsh and sometimes ugly, and the backlash against feminism remains savage, strong, and omnipresent, but it is not winning.\""
    ]
  }
}
```

### sample-4.txt (4293 words)

```json
{
  "sample_id": "sample-4.txt",
  "word_count": 4293,
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long sentences by chaining multiple independent clauses with commas and coordinating conjunctions ('and,' 'but,' 'or'), often stacking three or more clauses before arriving at the period.",
      "Use subordinate clauses and participial phrases to embed context, qualification, or backstory mid-sentence \u2014 pack multiple layers of information into a single syntactic unit: 'Asked in the early 1970s about his opinion of the French Revolution, he reportedly answered, \"Too soon to tell.\"'",
      "Deploy parenthetical asides \u2014 set off by commas, dashes, or actual parentheses \u2014 to insert secondary commentary, specifics, or wry qualification without breaking the sentence's forward momentum.",
      "When building toward a climactic or emotional point, extend the sentence with parallel 'if' or conditional clauses that accumulate rhetorical force before the payoff: 'If I had told you... you would have thought I was crazy. If I had told you... you would have considered me delusional.'",
      "Alternate between these long, layered sentences and medium-length declarative statements that land a clean, direct point: 'Everything changes: there lies most of our hope and some of our fear.'",
      "Use the colon as a hinge within sentences \u2014 to introduce an elaboration, restatement, or dramatic reveal after a setup clause."
    ],
    "do_not": [
      "Do not write in clipped, staccato bursts of consistently short sentences \u2014 avoid a telegraphic or minimalist rhythm.",
      "Do not construct sentences with only one clause and no modification; nearly every sentence should carry at least one embedded qualifier, aside, or secondary idea.",
      "Do not rely on semicolons as the primary method of joining clauses \u2014 prefer commas with conjunctions or colons."
    ],
    "evidence": [
      "If I had told you in 1988 that, within three years, the Soviet satellite states would liberate themselves nonviolently and the Soviet Union would cease to exist, you would have thought I was crazy.",
      "Everything changes: there lies most of our hope and some of our fear.",
      "He was an experience \u2014 a small man who, when he wasn't listening professionally in a fashion beyond compare, never stopped talking."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a participant and witness \u2014 'I've seen,' 'I know,' 'I was born in' \u2014 grounding arguments in personal experience and relationships rather than abstract authority.",
      "Shift to direct second-person address ('you') when making the argument universal or issuing a call to action: 'you should wake up amazed every day of your life.'",
      "Maintain the tone of an experienced, earnest elder speaking to a community \u2014 warm but serious, hopeful but unsentimental. The stance is that of someone who has lived through enough to earn their optimism.",
      "Express certainty through personal testimony and historical evidence, not through academic citation or data. Conviction comes from 'I've seen it' and 'here's what happened,' not from statistics.",
      "Signal uncertainty with honest admission rather than hedge words: 'I don't know. Neither do you. Anything could happen.' Use directness even in acknowledging limits of knowledge.",
      "Avoid contractions in most cases \u2014 write 'do not,' 'it is,' 'would not' \u2014 which creates a measured, slightly formal register that lends gravity to the moral arguments."
    ],
    "do_not": [
      "Do not adopt a detached, clinical, or academic tone \u2014 never write as an outside observer analyzing events from a distance.",
      "Do not use irony, sarcasm, or cynicism \u2014 the voice treats despair as the enemy and never indulges in it, even for rhetorical effect.",
      "Do not hedge with phrases like 'it seems,' 'one might argue,' or 'perhaps' \u2014 when uncertain, state the uncertainty plainly and boldly."
    ],
    "evidence": [
      "I don't know. Neither do you. Anything could happen.",
      "But here's what I'm saying: you should wake up amazed every day of your life",
      "With few people can you ever say, she (or he) changed my life, changed the very way I understand our world."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments through historical narrative: introduce a claim, then support it by narrating a sequence of real events that demonstrate the claim's truth. History is the primary evidence.",
      "Use the pattern of 'people believed X, but then Y happened' \u2014 contrast the confident predictions of the despairing with what actually unfolded, to demonstrate the unreliability of pessimistic forecasts.",
      "Stack multiple historical examples in rapid succession to create cumulative force \u2014 Soviet collapse, South American liberation, Arab Spring, Occupy \u2014 each one reinforcing the same thesis from a different angle.",
      "Handle counterarguments by acknowledging them fully ('Syria is a turbulent version of hell now') before pivoting to the larger point ('but it could be leaving the dynasty of the Assads in the past; its future remains to be written').",
      "Structure the overall argument as a spiral: return to the same central thesis (the future is unpredictable; action matters; hope is warranted) from different vantage points, each time deepening or expanding it rather than simply repeating it.",
      "Use personal anecdotes as entry points into larger political arguments \u2014 begin with 'I had lunch with...' or 'I ran into a guy who...' and expand outward to systemic claims.",
      "Introduce the strongest version of the opposing position (fatalism, despair, the evidence for failure) before dismantling it \u2014 never strawman the opposition."
    ],
    "do_not": [
      "Do not argue from data, statistics, or formal logic \u2014 avoid charts, percentages, or cost-benefit frameworks as persuasive tools.",
      "Do not present arguments as settled or closed \u2014 always leave room for the verdict being 'too soon to tell.'",
      "Do not dismiss or mock those who despair \u2014 treat their position seriously before offering the counter-case."
    ],
    "evidence": [
      "The despairing of May 2003 were convinced of one true thing, that we had not stopped the invasion of Iraq, but they extrapolated from that a series of false assumptions about our failures and our powerlessness across time and space.",
      "Despair is often premature: it's a form of impatience as well as certainty.",
      "Not long ago, I ran into a guy who'd been involved in the Occupy Wall Street movement... He offered a tailspin of a description of how Occupy was over and had failed. But I wonder: How could he possibly know?"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a bold, declarative claim or a narrative hook that establishes the paragraph's direction immediately: 'Things change.' or 'Hope and history are sisters.'",
      "Develop paragraphs by layering specific examples, historical instances, and personal testimony on top of the opening claim \u2014 move from general assertion to concrete particulars.",
      "Close paragraphs with a sentence that either synthesizes the evidence into a broader truth or pivots forward to what comes next: 'Everything changes: there lies most of our hope and some of our fear.'",
      "Connect paragraphs through thematic continuation rather than explicit transition words \u2014 the last idea of one paragraph seeds the first idea of the next, creating a flowing, essay-like progression.",
      "Use enumeration paragraphs (First... Second... Third... Fourth... Finally...) when building a sustained multi-point argument, giving each point its own paragraph with a clear ordinal marker.",
      "When a paragraph contains a list of examples, let the examples accumulate with 'and' connectors and commas rather than using bullet points or numbered lists \u2014 keep the prose flowing."
    ],
    "do_not": [
      "Do not use mechanical transition phrases like 'Furthermore,' 'Moreover,' 'In addition,' or 'On the other hand' \u2014 transitions should feel organic and conversational.",
      "Do not end paragraphs on a weak or trailing note \u2014 the final sentence should land with rhetorical weight or propulsive energy.",
      "Do not organize paragraphs as topic-sentence-then-support in a rigid five-paragraph-essay style \u2014 allow the internal logic to feel exploratory even when it is structured."
    ],
    "evidence": [
      "Things change. And people sometimes have the power to make that happen, if and when they come together and act",
      "Hope and history are sisters: one looks forward and one looks back, and they make the world spacious enough to move through freely.",
      "Second, Occupy began to say what needed to be said about greed and capitalism, exposing a brutality that had long been hushed up, revealing both the victims of debt and the rigged economy that created it."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use anaphora \u2014 repeating the same opening phrase across consecutive clauses or sentences \u2014 as the primary device for building emotional momentum: 'you don't stop walking to congratulate yourself; you don't stop walking to wallow in despair; you don't stop because...'",
      "Deploy extended metaphor sparingly but powerfully: 'Think of it as the match but not the tinder or the blaze.' Use concrete, physical imagery (walking, lava, paths, seeds, doors) to embody abstract concepts (hope, change, activism).",
      "Use antithesis and balanced pairings to give ideas rhythmic and intellectual force: 'one looks forward and one looks back,' 'there's much to be proud of, there's much to mourn, there's much yet to do.'",
      "Build rhetorical lists that accumulate three or more items, often with the final item carrying extra weight or surprise: 'a labyrinth of surprises, gifts, and afflictions.'",
      "Use direct address and imperative constructions sparingly but at crucial moments \u2014 'Think of it as,' 'you should wake up amazed' \u2014 to break through the narrative register and speak directly to the reader.",
      "Employ the conditional counterfactual ('If I had told you in 1988 that...') to dramatize the gap between expectation and reality, making the argument for unpredictability viscerally felt.",
      "Use personification and figurative kinship to make abstractions vivid: 'Hope and history are sisters,' 'civil society... like lava beneath the earth.'"
    ],
    "do_not": [
      "Do not use pop culture references, jokes, or light analogies \u2014 analogies should be drawn from history, nature, and the physical world.",
      "Do not overuse rhetorical questions \u2014 when used, they should be genuine invitations to uncertainty ('How could he possibly know?'), not sarcastic or leading.",
      "Do not employ academic or literary allusion for its own sake \u2014 references should be to real historical events and real people the author has encountered."
    ],
    "evidence": [
      "you don't stop walking to congratulate yourself; you don't stop walking to wallow in despair; you don't stop because your own life got too comfortable or too rough; you don't stop because you won; you don't stop because you lost.",
      "Think of it as the match but not the tinder or the blaze.",
      "Hope and history are sisters: one looks forward and one looks back, and they make the world spacious enough to move through freely."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal narrative \u2014 place yourself in a specific moment, relationship, or encounter that grounds the reader in lived experience before expanding to the essay's larger argument.",
      "Establish the essay's emotional and intellectual stakes within the first two paragraphs through a specific human connection (a mentor, a friend, an interviewer's question) before moving to the political or philosophical plane.",
      "Use section headers as tonal and thematic markers \u2014 brief, evocative phrases ('Too Soon to Tell,' 'Unstoppabilities,' 'Climates of Hope and Fear') that function as chapter titles in a long essay, signaling shifts without summarizing.",
      "Close the essay with a sustained passage of direct address and imperative rhythm \u2014 the ending should feel like a charge, a benediction, or a call to keep moving. The final paragraph should build to a crescendo of repeated structure.",
      "Mirror the opening's personal, narrative register in the closing, but elevate it \u2014 what began as a specific story should end as a universal exhortation.",
      "Use em dashes for mid-sentence insertions and asides. Use parentheses for specific factual details, dates, or clarifying examples that would interrupt the sentence's rhetorical flow if integrated directly.",
      "Italicize book titles and publication names. Use quotation marks for article titles and spoken quotes."
    ],
    "do_not": [
      "Do not open with a thesis statement, abstract claim, or definition \u2014 always begin in scene or story.",
      "Do not close with a summary of points made \u2014 the ending should push forward into the future, not look back at the essay.",
      "Do not use bullet points, numbered lists, or other formatting that breaks the continuous prose flow \u2014 even when enumerating, use ordinal words within paragraphs ('First... Second... Third...')."
    ],
    "evidence": [
      "I worked for years as an editor at Pantheon Books. Its publisher, maybe the most adventurous in the business, was Andr\u00e9 Schiffrin.",
      "But mostly you just walk, right foot, left foot, right foot, left foot. That's what makes you unstoppable.",
      "You look forward to possibility. That's what we mean by hope, and you look past it into the impossible and that doesn't stop you either."
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
      "Build expansive sentences by stacking appositional phrases, participial clauses, and prepositional chains that accumulate concrete examples\u2014pile detail upon detail within a single grammatical frame before reaching the main verb or closing the thought.",
      "Use comma-separated lists of specific people, organizations, and roles within sentences to create a sense of abundant, overflowing evidence: name names, give titles, specify affiliations.",
      "Chain clauses with coordinating conjunctions (especially 'and,' 'but,' 'or') to extend sentences into long, breath-spanning arcs that feel conversational rather than academic.",
      "Follow extended, densely packed sentences with a short declarative or imperative that delivers the emotional or argumentative punch: the payoff arrives compressed after the buildup.",
      "Use dashes to insert parenthetical asides, qualifications, or reframings mid-sentence, creating a sense of the author thinking in real time and adjusting as she goes.",
      "Rely on subordinate clauses beginning with 'when,' 'though,' 'if,' 'whether,' and 'as' to nest conditions and contexts before the main assertion, giving the reader the framing before the claim."
    ],
    "do_not": [
      "Do not write clipped, telegraphic prose that strips away modifiers and qualifiers\u2014the rhythm depends on layered elaboration within each sentence.",
      "Do not use uniform sentence shapes; avoid falling into a pattern where every sentence follows subject-verb-object without embedded clauses or asides.",
      "Do not front-load all long sentences at the start of a paragraph and all short ones at the end\u2014intersperse them so the rhythm breathes."
    ],
    "evidence": [
      "Infinitely harder to see and less dramatic was the vast counterforce soon at work: the mobilizing of tens of thousands of volunteers, including passionate locals from fishermen in the Louisiana Oystermen's Association to an outraged tattoo-artist-turned-organizer, from visiting scientists, activist groups, and Catholic Charities reaching out to Vietnamese fishing families to the journalist and oil-policy expert Antonia Juhasz, and Rosina Philippe of the Atakapa-Ishak tribe in Grand Bayou.",
      "It should. We all should.",
      "Think of the acts of those\u2014from daycare worker to nursing home aide or the editor of TomDispatch.com\u2014who do more, and do it more passionately, than they are paid to do"
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is earnest, politically engaged, and intellectually generous\u2014address the reader as a fellow citizen who shares common stakes ('our silence,' 'our collective throat,' 'our country').",
      "Shift between 'I' for personal testimony and reflection, 'we' for shared moral responsibility, and 'you' for direct address that recruits the reader into the argument. Use 'you' to make the reader a participant, not a spectator.",
      "Maintain a tone that is warm and impassioned but grounded\u2014never shrill, never detached. Express moral conviction without moralizing; let the specificity of examples carry the emotional weight rather than adjectives of outrage.",
      "Signal confidence through declarative assertions ('It is who we are') but temper with self-aware asides and concessions ('Of course, nothing's quite as simple as that,' 'Imperfect as it may be').",
      "Use occasional wry humor and parenthetical wit to leaven serious political analysis ('and they have so many favorites!', 'a good person with solar panels and a bad person with lots of work-related frequent-flyer miles').",
      "Avoid contractions entirely\u2014write out 'do not,' 'it is,' 'is not'\u2014to maintain a register that is conversational in spirit but elevated in diction."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, or 'objective' journalistic voice\u2014the author is an advocate who openly takes sides while remaining intellectually honest.",
      "Do not use sarcasm or contempt toward opponents; critique systems and ideologies, not individuals' character.",
      "Do not hedge to the point of undermining your own convictions\u2014concede complexity, then reassert your position with renewed force."
    ],
    "evidence": [
      "The invisible claw of the market may fail to comprehend how powerful the other hand\u2014the one that gives rather than takes\u2014is, but neither does that open hand know itself or its own power. It should. We all should.",
      "Of course, nothing's quite as simple as that. After all, there are saints in government and monsters in the progressive movement; there's petroleum in my gas tank and money in my name in banks.",
      "Do not underestimate the power of this force."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a vivid, concrete scene or event, then pivot to the unseen counterforce or hidden reality that the scene obscures\u2014the argument proceeds by revealing what is invisible beneath the visible.",
      "Build arguments through accumulation of specific examples rather than abstract reasoning: name real people, real organizations, real places, and real events, then draw the general principle from the heap of particulars.",
      "Use a dialectical structure: present the dominant narrative (capitalism, selfishness, competition), then systematically reveal its shadow opposite (gift economies, altruism, solidarity), and argue that the shadow is actually the larger and more foundational force.",
      "Introduce counterarguments and complexity honestly ('nothing's quite as simple as that') but treat them as brief concessions before returning to the main thesis with greater force\u2014steel-man briefly, then reassert.",
      "Invoke authorities and sources conversationally\u2014weave in scholars, activists, and writers by name and context rather than with formal citations. Quote them in a way that makes them feel like dinner companions, not footnotes.",
      "Use rhetorical questions to reframe assumptions ('Who wouldn't agree that our society is capitalistic?') and then immediately challenge the premise embedded in the question.",
      "Progress from the concrete and local (one ornithologist in Grand Bayou) to the systemic and global (the nature of human nature), building outward in concentric circles."
    ],
    "do_not": [
      "Do not argue through pure abstraction or theoretical frameworks without grounding each claim in specific, named examples from the real world.",
      "Do not dismiss opposing views without engagement\u2014always acknowledge the dominant narrative's power before subverting it.",
      "Do not present a linear, thesis-then-evidence structure; instead, weave between story, reflection, evidence, and assertion in a recursive, associative pattern."
    ],
    "evidence": [
      "After the Macondo well exploded in the Gulf of Mexico, it was easy enough (on your choice of screen) to see a flaming oil platform... Infinitely harder to see and less dramatic was the vast counterforce soon at work",
      "Recently, I had dinner with Renato Redentor Constantino, a climate and social justice activist from the Philippines, and he mentioned that he never cared for the slogan, 'Another world is possible.' That other world is not just possible, he pointed out, it's always been here.",
      "How can you add up the foreclosures and evictions that don't happen, the forests that aren't leveled, the species that don't go extinct, the discriminations that don't occur?"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a bold claim, a scene-setting detail, or an imperative ('Think of...') that establishes the paragraph's direction immediately\u2014do not ease in with throat-clearing.",
      "Close paragraphs with a sentence that delivers emotional or moral force, often a restatement of the core thesis in compressed, declarative form\u2014the paragraph should land on its strongest note.",
      "Connect paragraphs through thematic echoes and image-callbacks rather than explicit transition words: carry a metaphor (the invisible hand, the iceberg, the butterflies) from one paragraph to the next to create cohesion.",
      "Within paragraphs, sequence ideas from concrete example to broader principle, or from commonly accepted view to surprising reframing\u2014move from the known to the revealed.",
      "Use section headers as rhetorical pivots that reframe the argument and signal a shift in scale or focus while maintaining the essay's cumulative momentum.",
      "Allow some paragraphs to function as single-sentence declarations that serve as pivots, emotional beats, or thesis restatements between longer, evidence-dense paragraphs."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore,' 'In addition,' 'Moreover') to connect paragraphs\u2014let the logic and imagery create the bridge.",
      "Do not structure paragraphs as self-contained mini-essays with introduction, body, and conclusion; let them flow into each other as movements in a continuous argument.",
      "Do not bury the most important sentence in the middle of a paragraph\u2014place it at the opening or the close."
    ],
    "evidence": [
      "Capitalism is only kept going by this army of anti-capitalists, who constantly exert their powers to clean up after it, and at least partially compensate for its destructiveness. Behind the system we all know, in other words, is a shadow system of kindness, the other invisible hand.",
      "It is who we are, if only we knew it.",
      "You see what you're looking for."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors that carry through entire sections or the whole essay\u2014introduce a central image (invisible hand, iceberg, butterflies) and return to it repeatedly, developing and complicating it each time.",
      "Deploy anaphora and imperative repetition to build rhetorical momentum: 'Think of... Think of...' or 'the foreclosures that don't happen, the forests that aren't leveled, the species that don't go extinct.'",
      "Use antithesis to set up the essay's core binary: visible vs. invisible, market vs. gift, claw vs. open hand, selfishness vs. solidarity\u2014then complicate the binary without abandoning it.",
      "Employ catalogs and lists of specific, concrete examples that create a cumulative sense of overwhelming abundance\u2014the sheer volume of names, organizations, and acts is itself an argument.",
      "Use direct address and imperatives sparingly but strategically to recruit the reader: 'Do not underestimate,' 'Think of,' 'Don't think of this as simply.'",
      "Repurpose opponents' language against them: take a phrase like 'invisible hand' and transform it into 'invisible claw,' or take Thatcher's 'There is no alternative' and invert it into a section title.",
      "Use parenthetical asides for wry commentary or self-implication that humanizes the author and acknowledges complicity."
    ],
    "do_not": [
      "Do not use analogies from pop culture, sports, or technology\u2014draw instead from literature, natural history, economics, and political philosophy.",
      "Do not rely on rhetorical questions without immediately offering your own answer or reframing\u2014questions should provoke, then be answered.",
      "Do not deploy devices for mere ornamentation; every metaphor and repetition must advance the argument or deepen the emotional register."
    ],
    "evidence": [
      "a phrase which always brings to my mind horror movies and Gothic novels in which detached and phantasmagorical limbs go about their work crawling and clawing away",
      "How can you add up the foreclosures and evictions that don't happen, the forests that aren't leveled, the species that don't go extinct, the discriminations that don't occur?",
      "The invisible claw of the market may fail to comprehend how powerful the other hand\u2014the one that gives rather than takes\u2014is"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay with a vivid, specific scene grounded in a recent event\u2014establish the visible, dramatic surface before pivoting to the invisible, quieter force that is the essay's true subject.",
      "Begin with the concrete and sensory ('a flaming oil platform, the very sea itself set afire') and use it as a launching point for the essay's larger argument about hidden structures.",
      "Close the essay with a direct address to the reader that reframes everything preceding it as a description of the present, not a wish for the future\u2014end by insisting that the alternative already exists.",
      "Use the final sentence to deliver a compressed, emotionally resonant thesis statement that serves as both summary and call to recognition: 'It is who we are, if only we knew it.'",
      "Structure the essay in named sections with thematic headers that function as mini-arguments in themselves ('The Iceberg Economy,' 'The Alternatives to \"There Is No Alternative\"').",
      "Mirror the opening's focus on a specific event or scene with the closing's expansion to universal human nature\u2014the essay should move from particular to universal and end at the widest possible aperture.",
      "Use formatting sparingly: bold for byline only, section headers for structural shifts, no bullet lists or numbered points. Let the prose carry all organizational weight.",
      "Include a brief, self-deprecating or self-implicating author note that undercuts any impression of moral superiority ('a good person with solar panels and a bad person with lots of work-related frequent-flyer miles')."
    ],
    "do_not": [
      "Do not open with an abstract thesis statement or a definition\u2014begin in the world of events and particulars.",
      "Do not close with a list of action items, a call to action in the conventional sense, or a summary of points made\u2014close with a statement of identity and recognition.",
      "Do not use bullet points, numbered lists, or other formatting that would break the essay's flowing, discursive character."
    ],
    "evidence": [
      "After the Macondo well exploded in the Gulf of Mexico, it was easy enough (on your choice of screen) to see a flaming oil platform, the very sea itself set afire with huge plumes of black smoke rising",
      "It is who we are, if only we knew it.",
      "Don't think of this as simply a description of my hopes for 2011, but of what was going on right under our noses in 2010"
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
  "one_line_description": "formal, involved, explicit \u2014 controlled moral authority with accumulative prose, personal grounding, and rhetorical urgency",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long, layered sentences by stacking multiple subordinate clauses, participial phrases, appositives, and parenthetical asides within a single grammatical frame, letting the accumulation itself generate rhetorical momentum.",
      "Chain clauses with coordinating conjunctions ('and,' 'but,' 'or') and commas to pile evidence, examples, or consequences into sprawling sentences that force the reader to confront the sheer volume before reaching a period.",
      "Use em dashes to insert parenthetical asides, qualifications, sardonic commentary, or mid-sentence pivots without breaking the sentence's forward momentum \u2014 these layered interruptions are signature to the voice.",
      "Use the colon as a structural hinge: set up an idea in the first half and deliver the payoff, elaboration, list, or dramatic reveal after the colon.",
      "Deploy polysyndeton \u2014 repeated 'and' or 'or' \u2014 within lists and catalogues to create a rolling, breathless, never-ending quality that refuses to let the reader look away.",
      "Use parallel structure in threes (tricolons) as a default rhythmic unit when listing consequences, domains, or examples.",
      "After extended, densely packed sentences, place a medium-length declarative statement that lands a clean, direct point \u2014 the contrast between accumulative buildup and compressed assertion is essential to the rhythm.",
      "Nest conditions and contexts using subordinate clauses beginning with 'when,' 'though,' 'if,' 'whether,' and 'as' before the main assertion, giving the reader framing before the claim."
    ],
    "do_not": [
      "Do not write in evenly paced, uniform sentence lengths \u2014 the rhythm depends on dramatic contrast between sprawling accumulative sentences and more compressed declarative ones.",
      "Do not write clipped, telegraphic, or minimalist prose \u2014 avoid sequences of uniformly short declarative sentences that create a staccato, journalistic rhythm.",
      "Do not strip out parenthetical asides or mid-sentence digressions; these layered interruptions are essential to the voice's density and rhetorical urgency.",
      "Do not use sentence fragments for stylistic effect \u2014 this voice prefers grammatically complete sentences even when making emphatic points.",
      "Do not front-load sentences with subordinate clauses in a formulaic academic pattern; vary where dependent clauses land \u2014 beginning, middle, or end."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a participant-witness: use 'I' to ground arguments in lived experience, 'we' to invoke collective responsibility and shared stakes, and 'you' for direct address that recruits the reader into the argument.",
      "Maintain a tone that is simultaneously conversational and intellectually serious \u2014 warm and wry in anecdote, unflinching and precise in argument, seething with controlled moral conviction underneath.",
      "Signal certainty through declarative assertion and moral clarity, not through hedging or qualification \u2014 state claims as established when the evidence warrants it.",
      "When uncertain, express it as bold, honest admission ('I don't know. Neither do you.') rather than academic caution or tentative hedging.",
      "Use dry, understated humor and sardonic wit to expose absurdity rather than for comedy's own sake \u2014 let the absurdity of the situation deliver the point without becoming flippant or detached.",
      "Address the reader as an implicit ally \u2014 assume shared intelligence, shared stakes, and the capacity for outrage without condescending or explaining from scratch.",
      "Avoid contractions \u2014 write 'do not,' 'it is,' 'would not' \u2014 to maintain a formal register that conveys gravity and literary seriousness even when the subject matter is colloquial."
    ],
    "do_not": [
      "Do not adopt a detached, clinical, academic, or impersonal register \u2014 never write as though observing from outside the experience or analyzing events from a safe distance.",
      "Do not use tentative or apologetic hedging ('perhaps,' 'it might be argued,' 'one could say') when making moral or political claims.",
      "Do not become shrill, pleading, or emotionally overwrought \u2014 the power comes from the contrast between serious content and controlled, articulate presentation.",
      "Do not use irony or cynicism that indulges in despair \u2014 even when documenting horrors, the voice refuses to surrender to hopelessness.",
      "Do not use self-deprecation that genuinely undermines authority \u2014 when acknowledging complicity or self-doubt, frame it as part of the shared human condition."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Begin with a specific, vivid scene, anecdote, or event that dramatizes the thesis before stating it explicitly \u2014 let the reader experience the problem or revelation before naming it.",
      "Construct arguments by spiraling outward from the personal to the political: start with a dinner party, a lunch, a specific incident, then move to cultural patterns, then arrive at systemic analysis \u2014 each step should feel like a natural escalation.",
      "Build arguments through relentless accumulation of specific, named, dated examples rather than abstract reasoning \u2014 the sheer volume of evidence is itself the argument.",
      "Handle counterarguments by acknowledging them briefly and honestly ('of course,' 'not that,' 'nothing's quite as simple as that') then pivoting back to the central argument with redoubled force \u2014 use concessions as springboards, never as destinations.",
      "Link disparate examples to reveal them as manifestations of a single underlying structure \u2014 name that structure explicitly once the evidence has made it undeniable.",
      "Use the history of language, naming, and framing as evidence of political and cultural change \u2014 trace when terms were coined, how they entered circulation, and what shifts they enabled.",
      "Use the pattern of revealing what is invisible beneath the visible \u2014 present the dominant narrative, then systematically expose the hidden counterforce, the unseen structure, or the unacknowledged pattern.",
      "Use recursive structure: return to key phrases, images, and ideas at intervals, each time with added weight and expanded meaning, so the essay accumulates force rather than simply progressing linearly."
    ],
    "do_not": [
      "Do not present arguments as balanced, both-sides explorations \u2014 take a clear moral position and let the evidence support it without false equivalence.",
      "Do not rely on abstract theoretical frameworks, jargon, statistics, or data-driven argumentation as the primary mode \u2014 ground every claim in tangible, narrated experience and named examples.",
      "Do not soften conclusions with excessive qualification \u2014 state what the evidence shows and trust the reader to assess it.",
      "Do not structure arguments as linear problem-solution \u2014 use a recursive, associative flow that circles back to deepen and complicate earlier claims."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a bold declarative claim, a concrete reference point, a scene-setting detail, or a narrative continuation \u2014 rarely with a formal topic sentence that merely previews.",
      "Close paragraphs with the strongest or most resonant sentence \u2014 a verdict, a pithy summation, a wry observation, or a pivot toward the next idea that lands with disproportionate weight.",
      "Transition between paragraphs through thematic echo, verbal callback, and conceptual association rather than explicit connectives \u2014 repeat a key word or concept across paragraph boundaries to create cohesion through motif.",
      "Within paragraphs, sequence ideas from concrete to abstract, from anecdote to analysis, from particular to universal \u2014 let the specific incident teach the general lesson.",
      "When incorporating quotations or other voices, frame their significance in the preceding sentence and interpret or extend their implications afterward \u2014 never let a quote stand without authorial framing.",
      "Use section headers sparingly as rhetorical gestures \u2014 phrase them as evocative titles, provocative questions, or sardonic reframings that advance the argument rather than merely organizing it."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore,' 'In addition,' 'Moreover,' 'On the other hand') \u2014 transitions should be organic, built on conceptual and narrative momentum.",
      "Do not organize paragraphs as thesis-evidence-conclusion mini-essays \u2014 the structure should feel essayistic and exploratory, not like a five-paragraph essay.",
      "Do not end paragraphs with trailing qualifications or weakening clauses \u2014 the final sentence should be the strongest in the paragraph.",
      "Do not bury the most important sentence in the middle of a paragraph \u2014 place it at the opening or the close."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors that begin as vivid conceits and develop into serious analytical tools \u2014 sustain a metaphor across multiple sentences or the whole essay, returning to it and complicating it each time (racetrack, invisible hand, dots becoming splatters becoming a stain).",
      "Deploy anaphora \u2014 repeating the same opening phrase across consecutive clauses or sentences \u2014 to build incantatory, liturgical momentum that transforms a list into an overwhelming rhetorical performance.",
      "Use antithesis and parallel construction to expose contradictions, double standards, and hidden binaries: set opposing realities in identical syntactic structures to make the contrast inescapable.",
      "Employ catalogues and lists of specific, concrete examples within prose sentences to create a cumulative sense of overwhelming abundance \u2014 the sheer volume of names, organizations, and incidents is itself an argument.",
      "Use 'as though' and 'as if' constructions to expose the absurdity of opposing positions by articulating their implicit assumptions \u2014 make the reader see how ludicrous the assumption is when stated plainly.",
      "Employ vivid, sometimes absurdist analogies to deflate pomposity and make abstract dynamics concrete \u2014 every figurative comparison should feel surprising, specific, and earned.",
      "Use parenthetical asides set off by dashes to insert commentary, qualification, or sardonic observations that complicate the main statement without derailing it.",
      "Repurpose opponents' language against them \u2014 take a familiar phrase and transform or invert it to expose its assumptions."
    ],
    "do_not": [
      "Do not use rhetorical questions as a primary persuasive device \u2014 when questions appear, they should be piercing, accusatory, or genuine invitations to uncertainty, not decorative.",
      "Do not use clich\u00e9d metaphors or similes \u2014 every figurative comparison must feel fresh, specific, and earned.",
      "Do not rely on exclamation marks to convey intensity \u2014 let word choice and sentence construction carry the emotional force.",
      "Do not use analogies that soften, aestheticize, or trivialize the subject \u2014 comparisons should amplify, clarify, or expose, never domesticate.",
      "Do not deploy devices for mere ornamentation; every metaphor and repetition must advance the argument or deepen the emotional register."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with either a personal scene-setting anecdote or a vivid concrete event that grounds the reader before the essay's real argument emerges \u2014 enter through a specific moment, never through abstraction.",
      "Establish the essay's emotional and intellectual stakes within the first paragraphs through narrative action, a specific human connection, or a dramatic scene before moving to the political or philosophical plane.",
      "Close by pivoting from documentation to exhortation or from specific story to universal claim \u2014 the ending should push forward, asserting that change is both necessary and possible, without tidy summary or inspirational platitude.",
      "Use the final sentence to deliver a compressed, emotionally resonant thesis statement that serves as both summation and charge \u2014 it should feel like a verdict or a benediction.",
      "Structure essays as long-form prose with named sections using evocative, thematic headers that function as mini-arguments in themselves rather than neutral descriptors.",
      "Use em dashes liberally for parenthetical insertions, mid-sentence pivots, and dramatic pauses throughout \u2014 they are the signature punctuation of this voice.",
      "Use semicolons to connect closely related independent clauses with formal, deliberate cadence.",
      "Format direct dialogue with standard quotation marks and use it to dramatize power dynamics or let other voices carry part of the argument.",
      "Italicize book titles and coined terms; use quotation marks for phrases being examined as language."
    ],
    "do_not": [
      "Do not open with a thesis statement, a definition, a statistic, or a broad generalization \u2014 always enter through a specific scene, moment, or event.",
      "Do not close with a tidy summary, a list of action items, resignation, despair, or an open-ended question that leaves the reader comfortable.",
      "Do not use bullet points, numbered lists, or any formatting that breaks the essayistic flow \u2014 the piece should read as continuous, discursive prose.",
      "Do not use parenthetical citations or academic footnote style \u2014 integrate sources conversationally by naming the person, publication, or event directly in the sentence."
    ]
  },
  "signature_phrases": {
    "use": [
      "it is a slippery slope",
      "everything changes",
      "this goes way beyond",
      "part of the same archipelago",
      "too soon to tell",
      "we could talk about",
      "here is what I am saying",
      "language is power",
      "words matter",
      "the invisible hand",
      "if only we knew it",
      "as though",
      "as if",
      "of course",
      "to be clear",
      "which is to say",
      "that is",
      "in other words",
      "not that",
      "but here is the thing",
      "think of it as"
    ],
    "never_use": [
      "in conclusion",
      "it goes without saying",
      "needless to say",
      "at the end of the day",
      "it is what it is",
      "moving forward",
      "let us unpack this",
      "problematic",
      "stakeholders",
      "leverage",
      "synergy",
      "deep dive",
      "game-changer",
      "on the other hand",
      "furthermore",
      "moreover",
      "in addition",
      "firstly",
      "lastly",
      "to sum up",
      "thus",
      "hence",
      "arguably",
      "interestingly",
      "importantly"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' 'in addition,' and 'on the other hand' with organic thematic transitions or remove them entirely \u2014 let juxtaposed ideas create their own bridge.",
    "Convert any sentence containing a single clause and no modification into a layered sentence with at least one embedded aside, qualifier, or parenthetical \u2014 pack more into each syntactic unit.",
    "Expand any contractions ('don't,' 'isn't,' 'can't') to their full forms ('do not,' 'is not,' 'cannot') to maintain the formal register.",
    "Replace abstract claims with specific, named, dated examples \u2014 if a sentence makes a general assertion, add a concrete incident, a real person, or a real place to anchor it.",
    "Convert passive constructions to active voice with a named agent wherever possible \u2014 'mistakes were made' becomes 'they made mistakes.'",
    "Replace decorative or clich\u00e9d metaphors with surprising, concrete, physically vivid analogies drawn from nature, history, or the material world.",
    "Move any weak or trailing sentence from the end of a paragraph to the middle, and promote the strongest sentence to the closing position.",
    "Replace tentative hedges ('perhaps,' 'it might be argued,' 'one could say') with bold, declarative assertions or honest admissions of uncertainty.",
    "Add em dashes for mid-sentence asides and qualifications where commas or parentheses currently sit \u2014 em dashes are the signature punctuation.",
    "If a paragraph opens with throat-clearing or a formulaic topic sentence, replace it with a bold claim, a concrete detail, or a narrative hook.",
    "Convert any bullet-pointed or numbered list into flowing prose with polysyndeton or comma-separated catalogues."
  ]
}
```