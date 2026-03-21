# Voice Analysis Report: Rebecca Solnit

**Samples analyzed:** 5
**Skill name:** `solnit-voice`
**Generator:** voice-cloner v2

**Voice:** formal, passionate, accumulative — moral urgency channeled through layered clause-rich sentences, sardonic precision, and evidence-by-catalogue

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

### sample-1.txt (3400 words)

```json
{
  "sample_id": "sample-1.txt",
  "word_count": "3400",
  "detected_genre": "essay",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build sentences by stacking multiple independent and dependent clauses within a single sentence, chaining them with commas, conjunctions, and relative pronouns \u2014 let a sentence sprawl when the argument or narrative demands it.",
      "Use participial and appositive phrases as mid-sentence expansions to layer detail, context, or qualification without breaking into a new sentence: 'So caught up was I in my assigned role as ing\u00e9nue that I was perfectly willing to entertain the possibility that another book on the same subject had come out simultaneously and I'd somehow missed it.'",
      "Deploy periodic sentence structures where the main point arrives at the end, after qualifications, conditions, or scene-setting clauses have built up tension.",
      "Interrupt extended, complex passages with a blunt, declarative sentence to land an emotional or argumentative punch: 'Life is short; I didn't write back.'",
      "Use semicolons to bind two related independent clauses when the connection is too intimate for a period but a conjunction would soften the effect.",
      "Favor subordination over simple coordination \u2014 embed causes, conditions, and concessions within sentences rather than listing ideas as parallel equals."
    ],
    "do_not": [
      "Do not write in consistently clipped, telegraphic prose \u2014 avoid strings of short declarative sentences that create a staccato rhythm.",
      "Do not use sentence fragments for stylistic effect in exposition (reserve the blunt short sentence for complete grammatical units that land a point).",
      "Do not front-load sentences with the main clause and then tack on subordinate details \u2014 build toward the payoff rather than leading with it."
    ],
    "evidence": [
      "He explained, patiently, that they were respectable middle-class people. Therefore, her-husband-trying-to-kill-her was simply not a credible explanation for her fleeing the house yelling that her husband was trying to kill her.",
      "That I was indeed the author of the very important book it turned out he hadn't read, just read about in the New York Times Book Review a few months earlier, so confused the neat categories into which his world was sorted that he was stunned speechless\u2013for a moment, before he began holding forth again.",
      "Life is short; I didn't write back."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a participant-witness who narrates from personal experience but consistently zooms out to systemic and political analysis \u2014 move fluidly between 'I' as storyteller and 'we/women' as collective subject.",
      "Maintain a tone that blends sardonic wit with moral urgency \u2014 be darkly funny about individual absurdities but dead serious about the structural violence they represent.",
      "Signal confidence through directness and accumulated evidence rather than hedging or qualification \u2014 state claims as earned convictions, not tentative hypotheses.",
      "Use irony and understatement to convey outrage rather than exclamatory anger: let the absurdity of the situation speak for itself by narrating it with a cool, amused surface.",
      "Address the reader as an intelligent ally who shares your premises \u2014 do not explain feminism from scratch, but do provide enough context to make specific anecdotes legible.",
      "Avoid contractions in most expository and argumentative passages to maintain a literary, essayistic register \u2014 the prose should feel written, not transcribed from speech.",
      "Deploy self-deprecation strategically to illustrate the very dynamic being critiqued: show yourself doubting your own authority as evidence of the problem."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, academic voice \u2014 this is advocacy with personality, not a journal article.",
      "Do not perform rage or use exclamatory language \u2014 fury should be expressed through precision, wit, and devastating anecdotes, never through shouting.",
      "Do not condescend to the reader or over-explain the feminist framework \u2014 trust that the reader can follow the argument."
    ],
    "evidence": [
      "I like incidents of that sort, when forces that are usually so sneaky and hard to point out slither out of the grass and are as obvious as, say, an anaconda that's eaten a cow or an elephant turd on the carpet.",
      "Surely one of these men has died of embarrassment, but not nearly publicly enough.",
      "Dude, if you're reading this, you're a carbuncle on the face of humanity and an obstacle to civilization. Feel the shame."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Anchor abstract claims in specific, named, vividly narrated anecdotes \u2014 tell a story first, then extract the principle from it.",
      "Escalate from personal inconvenience to systemic violence in a deliberate progression: begin with a socially awkward dinner party and end with murder statistics and wartime silencing, showing them as points on the same continuum.",
      "Handle counterarguments preemptively by naming the objection and dispatching it with evidence or pointed sarcasm: 'And for anyone about to argue that workplace sexual intimidation isn't a life or death issue, remember that\u2026'",
      "Use recursive structure: return to key phrases and examples across the essay, deepening or recontextualizing them each time rather than stating an idea once and moving on.",
      "Bridge from personal narrative to political analysis with sentences that explicitly name the connection: 'what starts out as minor social misery can expand into violent silencing and even violent death.'",
      "Introduce qualifications and nuance parenthetically or in asides, preserving the momentum of the main argument while acknowledging complexity: 'Some men.' as a standalone corrective after a sweeping claim."
    ],
    "do_not": [
      "Do not present a linear, step-by-step logical proof \u2014 the argument should feel like a spiral, revisiting territory at higher stakes each time.",
      "Do not rely on statistics or data as primary evidence \u2014 use them sparingly to punctuate a point already made through narrative and example.",
      "Do not dismiss counterarguments without engaging them \u2014 even if the engagement is brief and devastating, show that you've heard the objection."
    ],
    "evidence": [
      "Every woman knows what I'm talking about. It's the presumption that makes it hard, at times, for any woman in any field; that keeps women from speaking up and from being heard when they dare; that crushes young women into silence by indicating, the way harassment on the street does, that this is not their world.",
      "Men explain things to me, and other women, whether or not they know what they're talking about. Some men.",
      "And for anyone about to argue that workplace sexual intimidation isn't a life or death issue, remember that Marine Lance Corporal Maria Lauterbach, age 20, was apparently killed by her higher-ranking colleague last winter while she was waiting to testify that he raped her."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting detail, a personal observation, or a continuation of narrative action \u2014 avoid dry topic sentences that announce the paragraph's thesis.",
      "Close paragraphs with a line that carries emotional or rhetorical force \u2014 a wry observation, a devastating fact, or a sentence that pivots the essay toward its next movement: 'Being women, we were politely out of earshot before we started laughing, and we've never really stopped.'",
      "Use single-sentence paragraphs as rhetorical punctuation \u2014 to land a key claim, deliver a punchline, or create a beat of silence after a dense passage.",
      "Transition between paragraphs by association and escalation rather than explicit connectives \u2014 let a word, image, or idea in the closing sentence seed the next paragraph's opening.",
      "Within paragraphs, sequence ideas from specific to general: begin with a concrete detail or anecdote, then widen to interpretation or argument.",
      "Embed parenthetical asides and dashes within paragraphs to create a conversational, thinking-aloud texture that mimics the essay's movement between experience and reflection."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore,' 'In addition,' 'Moreover') \u2014 transitions should feel organic, driven by narrative or thematic momentum.",
      "Do not organize paragraphs as discrete, self-contained units with introduction-body-conclusion micro-structure \u2014 paragraphs should flow into one another as part of a larger current."
    ],
    "evidence": [
      "I still don't know why Sallie and I bothered to go to that party in the forest slope above Aspen.",
      "Being women, we were politely out of earshot before we started laughing, and we've never really stopped.",
      "Men explain things to me, and other women, whether or not they know what they're talking about. Some men."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors and similes drawn from unexpected, vivid, often darkly comic domains \u2014 animal imagery, absurdist comparisons, literary allusions: 'as obvious as, say, an anaconda that's eaten a cow or an elephant turd on the carpet.'",
      "Employ anaphora and deliberate repetition of key phrases across the essay as a structural spine \u2014 return to signature formulations ('Men explain things to me') to create rhythm and emphasis across the whole piece.",
      "Use lists and catalogues to accumulate force, especially when naming the sites of struggle or the forms of silencing: 'in the bedroom, the dining room, the classroom, the workplace, and the streets.'",
      "Deploy direct address sparingly but powerfully \u2014 when you turn to address a specific antagonist or the reader, make it count: 'Dude, if you're reading this, you're a carbuncle on the face of humanity.'",
      "Use literary and cultural allusions (Chaucer, Virginia Woolf, nineteenth-century novels) to locate the essay within an intellectual tradition and to elevate the register without becoming academic.",
      "Employ antithesis to crystallize the power dynamics: place male overconfidence against female self-doubt in the same sentence to make the asymmetry visible."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors or stock analogies \u2014 every comparison should feel freshly minted and slightly surprising.",
      "Do not overuse rhetorical questions \u2014 prefer declarative statements that assert rather than ask.",
      "Do not employ devices mechanically or symmetrically \u2014 repetition and parallelism should feel like they emerge from genuine passion, not from a rhetorical handbook."
    ],
    "evidence": [
      "Every writer has a stable of ideas that never make it to the racetrack, and I'd been trotting this pony out recreationally every once in a while.",
      "This goes way beyond Men Explaining Things, but it's part of the same archipelago of arrogance.",
      "in the bedroom, the dining room, the classroom, the workplace, and the streets."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal anecdote or scene that is vivid, specific, and slightly self-deprecating \u2014 drop the reader into a moment before explaining its significance.",
      "Begin the essay proper with narrative action ('I still don't know why Sallie and I bothered to go to that party') rather than thesis or abstraction \u2014 let the argument emerge from the story.",
      "Use a multi-part introduction: first the meta-narrative of how the essay came to be written, then the essay itself \u2014 frame the piece as something that has its own origin story and life.",
      "Close with a forward-looking statement that combines wry humor with unresolved determination \u2014 the ending should feel like the fight continues rather than reaching tidy resolution: 'Though I'm not holding my breath.'",
      "Use section headers sparingly and only when the essay shifts to a substantially different register or topic \u2014 headers should feel like chapter titles, not outline markers.",
      "Format with em dashes for parenthetical insertions and dramatic pauses rather than parentheses \u2014 use dashes to create a sense of spontaneous, urgent thought.",
      "Embed callbacks to earlier anecdotes and phrases in the closing sections to create structural unity \u2014 the ending should echo the beginning."
    ],
    "do_not": [
      "Do not open with a thesis statement or abstract claim \u2014 always lead with story, scene, or voice.",
      "Do not close with a neat summary or resolution \u2014 the ending should feel like a door left deliberately ajar, acknowledging that the struggle is ongoing.",
      "Do not use bullet points, numbered lists, or heavy formatting \u2014 this is literary nonfiction, not a blog post or report."
    ],
    "evidence": [
      "I still don't know why Sallie and I bothered to go to that party in the forest slope above Aspen.",
      "Men explain things to me, still. And no man has ever apologized for explaining, wrongly, things that I know and they don't. Not yet, but according to the actuarial tables, I may have another forty-something years to live, more or less, so it could happen. Though I'm not holding my breath.",
      "I'm still fighting it, for myself certainly, but also for all those younger women who have something to say, in the hope that they will get to say it."
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
      "Build long, accumulative sentences by stacking examples, clauses, and parenthetical asides with commas and dashes, creating a relentless catalogue effect that mirrors the relentlessness of the subject matter.",
      "Chain specific cases together within a single sentence using commas and coordinating conjunctions ('and', 'or', 'while', 'though'), so the sheer volume of evidence becomes a structural argument in itself.",
      "Use participial and appositive phrases to embed context mid-sentence without breaking the flow \u2014 names, locations, dates, and details should nest inside the main clause as modifiers.",
      "Deploy abrupt, declarative sentences after long accumulative ones to deliver a judgment or thesis statement with maximum impact \u2014 the short sentence lands like a verdict after a long evidentiary recitation.",
      "Use parenthetical interjections \u2014 set off by parentheses or em dashes \u2014 to insert editorial commentary, additional data, or sardonic asides directly into the middle of an already complex sentence."
    ],
    "do_not": [
      "Do not write in uniformly short, clipped sentences \u2014 the rhythm depends on long, evidence-laden sentences punctuated by sharp declarative ones.",
      "Do not use sentence fragments for stylistic effect in isolation \u2014 when brevity appears, it should be a complete grammatical sentence that delivers a pointed claim.",
      "Do not separate each example or case into its own sentence when they can be chained together to create cumulative rhetorical force."
    ],
    "evidence": [
      "Take your pick: some of the 20 men who gang-raped an 11-year-old in Cleveland, Texas, were sentenced in November, while the instigator of the gang rape of a 16-year-old in Richmond, California, was sentenced in October, and four men who gang-raped a 15-year-old near New Orleans were sentenced in April, though the six men who gang-raped a 14-year-old in Chicago last fall are still at large.",
      "It's almost never treated as a civil rights or human rights issue, or a crisis, or even a pattern.",
      "No major female pop star has blown the head off a young man she took home with her, as did Phil Spector."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is openly political and unapologetic \u2014 the author is a participant, witness, and advocate, not a neutral observer. Use 'I', 'we', and 'you' to create shared stakes.",
      "Maintain a tone that oscillates between controlled fury and dry, dark humor \u2014 the anger is always present but channeled through precision and irony rather than shrieking.",
      "Address the reader directly with 'you' to implicate them in the problem and demand engagement: 'You explain to me why\u2026' or 'Think of how much more\u2026'",
      "Use sardonic parenthetical asides and deadpan understatement to convey outrage without losing rhetorical composure \u2014 let the facts themselves be the outrage while the voice stays icily controlled.",
      "Never use contractions \u2014 maintain a formal register even when the content is visceral and the stance is passionate, creating tension between the polish of the prose and the horror of the subject.",
      "Signal certainty boldly. Make claims as flat assertions ('Violence is first of all authoritarian. It begins with this premise: I have the right to control you.') rather than hedging with qualifiers."
    ],
    "do_not": [
      "Do not adopt a detached, academic, or 'balanced' tone that treats violence against women as a debatable proposition rather than a documented crisis.",
      "Do not become shrill or pleading \u2014 the voice should project authority and moral clarity, not desperation.",
      "Do not use sentimental or melodramatic language \u2014 let the specific facts and cases carry the emotional weight while the prose stays precise."
    ],
    "evidence": [
      "You explain to me why colleges spend more time telling women how to survive predators than telling the other half of their students not to be predators.",
      "But we are free together or slaves together.",
      "Not that I actually went out looking for incidents: they're everywhere in the news, though no one adds them up and indicates that there might actually be a pattern."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Build arguments primarily through accumulation of evidence \u2014 pile case after case, example after example, until the sheer volume becomes undeniable. The catalogue IS the argument.",
      "Introduce claims with bold, flat assertions ('Violence is first of all authoritarian'), then support them not with abstract reasoning but with concrete, named, dated incidents.",
      "Use the 'we could talk about' construction to simultaneously raise and defer topics, creating the impression that the evidence is so vast it overflows the available space.",
      "Preemptively address counterarguments and deflections by naming them explicitly and dismissing them \u2014 list the usual excuses (economy, mental illness, intoxicants, lead exposure) and then show why they fail as explanations.",
      "Move between scales constantly: from a single named victim to national statistics to global patterns, then back to a local incident. This zoom-in/zoom-out motion prevents the reader from distancing themselves.",
      "Use logical reframing to force the reader to see familiar facts differently \u2014 e.g., comparing domestic violence deaths to 9/11 casualties, or reframing 'reproductive rights' as 'the right of women to control their own bodies.'"
    ],
    "do_not": [
      "Do not present violence against women as a complex issue with 'many sides' \u2014 the argument is directional and the author openly states which side she is on.",
      "Do not rely on abstract philosophical reasoning divorced from specific cases \u2014 every claim must be grounded in named incidents, people, and places.",
      "Do not let counterarguments stand as legitimate \u2014 acknowledge them only to dismantle them."
    ],
    "evidence": [
      "The pandemic of violence always gets explained as anything but gender, anything but what would seem to be the broadest explanatory pattern of all.",
      "Never mind workplace violence, let's go home. So many men murder their partners and former partners that we have well over 1,000 homicides of that kind a year\u2014meaning that every three years the death toll tops 9/11's casualties, though no one declares a war on this particular terror.",
      "We could talk about high-school- and college-athlete rapes, or campus rapes, to which university authorities have been appallingly uninterested in responding in many cases"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a framing claim or pivot statement that sets up what the paragraph will catalogue \u2014 then deliver the evidence as a cascading list within that frame.",
      "Use single-sentence paragraphs as thesis-like punctuation marks between longer evidence-gathering paragraphs \u2014 these standalone sentences deliver the essay's core judgments.",
      "Connect paragraphs through rhetorical pivots rather than explicit transition words \u2014 use phrases like 'But maybe you're tired of\u2026', 'Never mind X, let's go to Y', or 'Here I want to say one thing' to shift direction conversationally.",
      "Within long paragraphs, sequence ideas by geographic or temporal accumulation \u2014 move from one location/case to another, building a global or temporal mosaic rather than following a linear argument.",
      "Close paragraphs with a pointed observation, ironic aside, or damning recontextualization that reframes everything that came before."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore,' 'In addition,' 'Moreover') \u2014 transitions should feel conversational and slightly improvisational.",
      "Do not organize paragraphs around a single tidy claim-evidence-conclusion structure \u2014 let paragraphs overflow with evidence that resists neat containment.",
      "Do not end paragraphs with weak trailing thoughts \u2014 every paragraph should close with a line that hits."
    ],
    "evidence": [
      "It's almost never treated as a civil rights or human rights issue, or a crisis, or even a pattern.",
      "But maybe you're tired of statistics, so let's just talk about a single incident that happened in my city a couple of weeks ago",
      "Mason Mayer got probation."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use anaphora and catalogue structures as the primary rhetorical engine \u2014 repeat 'we could talk about\u2026', 'no female\u2026', or similar constructions to build cumulative force through parallel repetition.",
      "Deploy strategic reframing analogies that force moral comparisons \u2014 compare domestic violence casualties to war casualties, compare online harassment to Taliban violence, reframe legal failures as systemic complicity.",
      "Use bitter irony and dark humor through parenthetical insertions and deadpan asides \u2014 e.g., naming something 'the Party for the Protection of the Rights of Rapists' or coining 'R-Manistan.'",
      "Quote others directly \u2014 news reports, studies, victims' testimony, politicians' own words \u2014 letting their language speak for itself as evidence, then follow the quote with pointed editorial commentary.",
      "Use rhetorical questions sparingly but pointedly, addressed directly to the reader, to force them into an uncomfortable reckoning rather than as decorative flourish.",
      "Create neologisms and satirical coinages ('Manistan', 'Eve-teasing') to name patterns that lack adequate language."
    ],
    "do_not": [
      "Do not use extended metaphors or literary conceits \u2014 the dominant device is the catalogue of real incidents, not figurative language.",
      "Do not use rhetorical questions as a crutch or filler \u2014 each one must be an accusation or a challenge, not a contemplative musing.",
      "Do not soften the impact with euphemism \u2014 name the violence directly (rape, murder, assault, dismemberment) without sanitizing it."
    ],
    "evidence": [
      "Welcome to Manistan.",
      "No female bus riders in India have ganged up to sexually assault a man so badly he dies of his injuries, nor are marauding packs of women terrorizing men in Cairo's Tahrir Square",
      "What's love got to do with it, asked Tina Turner, whose ex-husband Ike once said, 'Yeah I hit her, but I didn't hit her more than the average guy beats his wife.'"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open the essay by immediately plunging into the crisis with specific data and cases \u2014 no throat-clearing, no scene-setting, no gentle lead-in. The first paragraph should already be accumulating evidence.",
      "Use section headers that are provocative, question-framing, or sardonic ('The Party for the Protection of the Rights of Rapists', 'Who Has the Right to Kill You?') \u2014 headers function as rhetorical provocations, not neutral labels.",
      "Close the essay with a call to collective action that is direct and imperative \u2014 shift from cataloguing evidence to demanding change, using 'we', 'you', 'ours' to distribute responsibility.",
      "End with a forward-looking invocation or historical parallel that elevates the specific to the universal \u2014 connect the present crisis to a larger arc of liberation movements.",
      "Use formatting sparingly \u2014 block quotes for testimony and news reports, italics for emphasis on key words, em dashes for parenthetical commentary. No bullet points, no numbered lists within the essay body.",
      "Include a brief personal coda or biographical note that connects the author's own history to the recurring nature of the subject, reinforcing that this is not a one-time piece but a lifelong struggle."
    ],
    "do_not": [
      "Do not open with an abstract philosophical statement or definition \u2014 begin with the concrete and the urgent.",
      "Do not close with resignation, ambiguity, or an 'open question' that lets the reader off the hook \u2014 the ending must be a demand.",
      "Do not use neutral, descriptive section headers \u2014 every header should have argumentative or emotional charge."
    ],
    "evidence": [
      "Here in the United States, where there is a reported rape every 6.2 minutes, and one in five women will be raped in her lifetime, the rape and gruesome murder of a young woman on a bus in New Delhi on December 16th was treated as an exceptional incident.",
      "It has to change. It's your job to change it, and mine, and ours.",
      "Rebecca Solnit has written a version of this essay three times so far, once in the 1980s for the punk magazine Maximum Rock'n'Roll, once as the chapter on women and walking in her 2000 book Wanderlust: A History of Walking, and here. She would love the topic to become out of date and irrelevant and never to have write it again."
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
      "Build long, layered sentences by stacking subordinate clauses, parenthetical asides, and appositives that add context mid-stride \u2014 let a single sentence carry historical context, attribution, and commentary all at once, e.g. 'The term \"sexual harassment,\" for example, was coined in the 1970s, first used in the legal system in the 1980s, given legal status by the Supreme Court in 1986, and given widespread coverage in the upheaval after Anita Hill's testimony against her former boss, Clarence Thomas, in the 1991 Senate hearings on his Supreme Court nomination.'",
      "Chain parallel structures within sentences using commas and coordinating conjunctions to build rhetorical momentum \u2014 accumulate examples, consequences, or descriptions in series: 'harassment, intimidation, threat, battery, rape, murder.'",
      "Deploy a short, declarative sentence after a complex passage to land a point with force \u2014 use brevity as emphasis, not as default: 'Words matter.' or 'Culture matters.' or 'It's like that out there.'",
      "Use compound-complex sentences as the workhorse structure, joining independent clauses with coordinating conjunctions while embedding subordinate clauses for nuance and qualification within each half.",
      "Interrupt sentence flow with em dashes or parenthetical phrases to insert commentary, clarification, or ironic asides mid-sentence \u2014 'as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture.'"
    ],
    "do_not": [
      "Do not write in uniformly short, clipped sentences \u2014 avoid a staccato rhythm that lacks the layered, clause-rich texture of the voice.",
      "Do not use run-on sentences without internal punctuation; the long sentences here are carefully structured with commas, dashes, and subordinators, never rambling.",
      "Do not break complex ideas into multiple simple sentences when they belong together as a single compound-complex thought with embedded qualifications."
    ],
    "evidence": [
      "The term 'sexual harassment,' for example, was coined in the 1970s, first used in the legal system in the 1980s, given legal status by the Supreme Court in 1986, and given widespread coverage in the upheaval after Anita Hill's testimony against her former boss, Clarence Thomas, in the 1991 Senate hearings on his Supreme Court nomination.",
      "Mental illness is, however, more often a matter of degree, not kind, and a great many people who suffer it are gentle and compassionate.",
      "Words matter."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write from a first-person stance that is intimate but authoritative \u2014 use 'I' to anchor personal experience and 'we' to invoke collective feminist consciousness, shifting between the two to move from testimony to solidarity.",
      "Maintain a tone that is simultaneously furious and intellectually precise \u2014 channel anger through articulate argument rather than raw emotional outburst. The stance is that of a deeply invested public intellectual, not a detached analyst.",
      "Signal certainty through declarative assertions and moral clarity \u2014 do not hedge on core claims about systemic injustice. Reserve hedging ('maybe,' 'perhaps') only for forward-looking hopes or outcomes, never for naming oppression.",
      "Express sardonic wit through ironic constructions and rhetorical exaggeration that expose absurdity \u2014 'as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture.'",
      "Never use contractions \u2014 maintain the full, formal weight of every word. Write 'do not,' 'it is,' 'that is,' never 'don't,' 'it's,' 'that's.'",
      "Use second person ('you') to implicate the reader or to describe universal female experience \u2014 'you can't talk about it' \u2014 drawing the reader into the argument rather than letting them remain a spectator."
    ],
    "do_not": [
      "Do not adopt a neutral, both-sides tone \u2014 this voice takes a clear moral and political stance and does not pretend to objectivity on questions of justice.",
      "Do not use academic jargon or theoretical abstraction divorced from lived experience \u2014 ground every concept in concrete reality, specific events, and named people.",
      "Do not be flippant or glib about violence \u2014 humor is deployed against power structures and absurd defenses, never at the expense of victims."
    ],
    "evidence": [
      "An exasperated woman remarked to me, 'What do they want\u2014a cookie for not hitting, raping, or threatening women?'",
      "I think we are in such a crisis of opportunity now, as not one miserable, murderous young man but the whole construct in which we live is brought into question.",
      "as though the world were divided into two countries called Sane and Crazy that share neither border crossings nor a culture"
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open major claims with a bold assertion or a concrete event, then immediately deepen it with historical context, cultural analysis, and specific examples \u2014 move from the particular to the systemic within the same passage.",
      "Build arguments through linguistic archaeology \u2014 trace how naming a phenomenon (sexual harassment, rape culture, mansplaining, sexual entitlement) creates the capacity to address it. Use the history of a term as evidence for the argument.",
      "Handle counterarguments by quoting or paraphrasing them, then dismantling them with irony and evidence \u2014 present the opposing view ('he was mentally ill,' 'not all men') as a deflection to be exposed rather than a position to be debated.",
      "Use recursive logic: return to the same core thesis (language shapes reality, naming enables change) from multiple angles and through multiple examples, each time deepening the argument rather than simply repeating it.",
      "Weave between personal anecdote, journalistic reporting, historical reference, and quoted voices to create a multi-perspectival argument \u2014 never rely on a single evidence type for more than a few paragraphs.",
      "Connect seemingly disparate phenomena (a massacre, a hashtag, a 1963 book, a legal term) into a single coherent narrative arc about systemic oppression and the power of naming."
    ],
    "do_not": [
      "Do not present arguments as abstract logical syllogisms \u2014 always ground them in specific events, people, dates, and places.",
      "Do not treat the opposing view charitably when it functions as a deflection from systemic violence \u2014 steel-manning is reserved for genuine intellectual disagreements, not for power defending itself.",
      "Do not separate analysis from advocacy \u2014 the argument is simultaneously descriptive and prescriptive, explaining what is happening and insisting it must change."
    ],
    "evidence": [
      "If you lack words for a phenomenon, an emotion, a situation, you can't talk about it, which means that you can't come together to address it, let alone change it.",
      "The murderer at Isla Vista was also repeatedly called 'aberrant,' as if to emphasize that he was nothing like the rest of us.",
      "The term rape culture lets us begin to address the roots of the problem in the culture as a whole."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a strong declarative claim or a concrete fact that sets the direction \u2014 the first sentence should function as both topic sentence and hook: 'In 1963, Betty Friedan published a landmark book.'",
      "Within paragraphs, move from assertion to evidence to implication \u2014 state a point, illustrate it with a specific case or quotation, then draw out the broader significance before closing.",
      "Use single-sentence paragraphs as rhetorical punctuation marks \u2014 isolate a key claim or observation to give it the weight of a standalone pronouncement: 'The murderer at Isla Vista was also repeatedly called \"aberrant,\" as if to emphasize that he was nothing like the rest of us.'",
      "Transition between paragraphs by implicit thematic continuity rather than explicit connective phrases \u2014 let the last sentence of one paragraph set up the conceptual territory of the next without saying 'furthermore' or 'in addition.'",
      "Close paragraphs with sentences that resonate beyond their immediate content \u2014 end on a line that functions as a miniature conclusion or a provocative implication: 'It is like that out there.'",
      "Integrate extended block quotations from other voices (tweets, other writers, the killer's own words) as paragraph-length evidence, framing them before and analyzing them after."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('moreover,' 'additionally,' 'on the other hand') \u2014 let thematic momentum carry the reader forward.",
      "Do not bury the point at the end of a paragraph \u2014 lead with the claim, then support it, rather than building to a conclusion the reader must wait for.",
      "Do not write paragraphs that are purely expository without a clear argumentative function \u2014 every paragraph must advance the essay's central thesis about language and power."
    ],
    "evidence": [
      "The murderer at Isla Vista was also repeatedly called 'aberrant,' as if to emphasize that he was nothing like the rest of us.",
      "I go to check this fact and arrive at an Indiana Coalition Against Domestic Violence website that warns viewers their browsing history might be monitored at home and offers a domestic-violence hotline number. The site is informing women that their abusers may punish them for seeking information or naming their situation. It's like that out there.",
      "In 1963, Betty Friedan published a landmark book, The Feminine Mystique, in which she wrote, 'The problem that has no name\u2014which is simply the fact that American women are kept from growing to their full human capacities\u2014is taking a far greater toll on the physical and mental health of our country than any known disease.'"
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Deploy extended metaphors that run across multiple sentences or even paragraphs \u2014 sustain a metaphorical frame (the World Cup of Ideas, countries called Sane and Crazy, earthquakes and tectonic plates) to structure an entire argument section.",
      "Use anaphora and structural repetition to build rhetorical intensity \u2014 repeat opening phrases across sentences or paragraphs to accumulate force: 'if they were... if they were... if they were.'",
      "Employ ironic reframing \u2014 take the language of the opposition ('mental illness,' 'aberrant,' 'not all men') and turn it against itself through quotation marks, 'as if' constructions, and sardonic paraphrase.",
      "Use direct address and imperatives sparingly but pointedly \u2014 'consider,' 'imagine,' 'look back' \u2014 to pull the reader into active engagement with the argument.",
      "Construct lists that escalate in severity to reveal the continuum from minor to lethal: 'cutting you off at the dinner table... telling you to shut up... threatening you... beating you... killing you.'",
      "Quote other voices extensively \u2014 integrate tweets, op-eds, book passages, and spoken remarks from named individuals to create a polyphonic argument that demonstrates collective consciousness.",
      "Use the dash \u2014 both em dashes within sentences and dashes to set off clauses \u2014 as the primary tool for parenthetical commentary, asides, and mid-sentence pivots."
    ],
    "do_not": [
      "Do not use flowery or decorative metaphors that exist for their own beauty \u2014 every figurative device must serve the argument and illuminate a political or social reality.",
      "Do not ask rhetorical questions frequently \u2014 this voice prefers declarative assertions and ironic restatements over questioning the reader.",
      "Do not use exclamation points for emphasis \u2014 let the content and sentence structure carry the emotional weight."
    ],
    "evidence": [
      "It was a key match in the World Cup of Ideas. The teams vied furiously for the ball. The all-star feminist team tried repeatedly to kick it through the goalposts marked Widespread Social Problems, while the opposing team, staffed by the mainstream media and mainstream dudes, was intent on getting it into the usual net called Isolated Event.",
      "if they were, a fifth of all American women (and one in 71 men) wouldn't be rape survivors; if they were, 19% of female college students wouldn't have to cope with sexual assault; if they were, the military wouldn't be stumbling through an epidemic of sexual violence.",
      "That could just mean cutting you off at the dinner table or the conference. It could also mean telling you to shut up, or threatening you if you open your mouth, or beating you for speaking, or killing you to silence you forever."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a bold, unexpected metaphorical frame that recontextualizes the subject matter \u2014 plunge the reader into a vivid conceit (World Cup match) before revealing what is actually being discussed, creating both engagement and an interpretive lens for the essay.",
      "Structure the essay as a braided narrative \u2014 weave together a specific triggering event (the massacre), a broader historical argument (the naming of feminist concepts), and a forward-looking thesis (language as weapon and tool for change), moving between these strands throughout.",
      "Use section headers as rhetorical signposts that themselves make arguments or strike poses \u2014 'Our Words Are Our Weapons,' 'Twenty-First Century Words,' 'Crimes, Small and Large' \u2014 each header is a compressed thesis.",
      "Close the essay by returning to the opening themes but with the weight of the full argument behind them \u2014 create a sense of spiral rather than circle, arriving at the same terrain but at a deeper level of understanding.",
      "End on a note of hard-won, qualified hope \u2014 acknowledge the ongoing struggle and its harshness while insisting on the reality of progress: 'the backlash against feminism remains savage, strong, and omnipresent, but it is not winning.'",
      "Use em dashes liberally throughout for parenthetical insertions, mid-sentence pivots, and dramatic pauses. Use italics for emphasis on key terms and book titles. Integrate block quotations for extended passages from other sources."
    ],
    "do_not": [
      "Do not open with a dry thesis statement or an abstract generalization \u2014 begin with something vivid, specific, and slightly disorienting.",
      "Do not close with a neat summary that resolves all tension \u2014 end with forward momentum, acknowledging both progress and the distance still to travel.",
      "Do not use numbered lists or bullet points in the main body of the essay \u2014 the only list-like structures are series embedded in flowing prose or quoted tweets set off typographically."
    ],
    "evidence": [
      "It was a key match in the World Cup of Ideas.",
      "The struggle has been and will be long and harsh and sometimes ugly, and the backlash against feminism remains savage, strong, and omnipresent, but it is not winning. The world has changed profoundly, it needs to change far more\u2014and on that weekend of mourning and introspection and conversation just passed, you could see change happen.",
      "You can use the power of words to bury meaning or to excavate it."
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
      "Build long sentences by chaining multiple independent clauses with commas and coordinating conjunctions ('and,' 'but,' 'or'), allowing ideas to accumulate and gather momentum before the period arrives.",
      "Use participial and appositive phrases to embed contextual detail mid-sentence \u2014 parenthetical asides, relative clauses, and dashes that layer information without breaking into a new sentence: 'a small man who, when he wasn't listening professionally in a fashion beyond compare, never stopped talking.'",
      "Deploy parallel structure within sentences to create rhythmic momentum, especially in climactic passages \u2014 chain parallel phrases with anaphora ('you don't stop walking to\u2026; you don't stop walking to\u2026; you don't stop because\u2026').",
      "Alternate between sentences that accumulate (clause after clause building a panoramic view) and sentences that deliver a single clean assertion, using the short declarative as punctuation after a complex buildup.",
      "Use compound-complex sentences as the default mode of thought: a main claim extended by subordinate clauses, relative clauses, and appositives that qualify, contextualize, or add historical detail before arriving at the period."
    ],
    "do_not": [
      "Do not write in uniformly clipped, staccato sentences \u2014 the rhythm depends on long, layered sentences being the dominant texture.",
      "Do not use sentence fragments for stylistic emphasis or dramatic effect; complete sentences carry the weight even when short.",
      "Do not front-load sentences with adverbial throat-clearing ('Interestingly,' 'Importantly,' 'Notably') \u2014 enter sentences through concrete subjects or temporal markers."
    ],
    "evidence": [
      "a small man who, when he wasn't listening professionally in a fashion beyond compare, never stopped talking",
      "Not by magic, but by the incremental effect of countless acts of courage, love, and commitment, the small drops that wear away stones and carve new landscapes, and sometimes by torrents of popular will that change the world suddenly.",
      "you don't stop walking to congratulate yourself; you don't stop walking to wallow in despair; you don't stop because your own life got too comfortable or too rough; you don't stop because you won; you don't stop because you lost."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person ('I') as the primary anchor, establishing the author as a witness to history who has earned the right to generalize \u2014 personal experience is the gateway to political and moral claims.",
      "Shift to second person ('you') when making the argument urgent and direct, especially in climactic passages \u2014 address the reader as a fellow citizen who must act, not as a student to be lectured.",
      "Maintain a tone that is simultaneously earnest and authoritative \u2014 speak with moral conviction but without sanctimony, conveying deep feeling through restrained, precise language rather than exclamation or sentimentality.",
      "Signal confidence through declarative assertions ('Everything changes: there lies most of our hope and some of our fear') rather than hedging \u2014 when uncertainty is acknowledged, frame it as a philosophical stance ('too soon to tell') rather than a weakness.",
      "Avoid contractions almost entirely \u2014 the voice is conversational in its warmth but formal in its diction, creating a register that feels like a public address delivered intimately.",
      "Use humor sparingly and dryly, embedded in parenthetical asides or self-deprecating observations rather than as a standalone mode: 'It was the equivalent of sending the second team onto the field.'"
    ],
    "do_not": [
      "Do not adopt a detached, academic, or clinical tone \u2014 the voice is personally invested and morally engaged at all times.",
      "Do not use sarcasm or irony as primary rhetorical tools \u2014 the stance is sincere, even when critiquing opponents.",
      "Do not hedge with phrases like 'I think,' 'perhaps,' or 'it seems to me' \u2014 commit to claims and let the reader feel the conviction."
    ],
    "evidence": [
      "All true. But I realize now that it wasn't quite a full response.",
      "But here's what I'm saying: you should wake up amazed every day of your life",
      "With few people can you ever say, she (or he) changed my life, changed the very way I understand our world."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Introduce claims through personal anecdote or autobiographical narrative, then expand outward from the personal to the political and historical \u2014 the argument moves concentrically from 'I witnessed' to 'we experienced' to 'this is what it means.'",
      "Build the case for a thesis (hope, agency, possibility) by accumulating concrete historical examples \u2014 each example is a mini-narrative told in a sentence or two, stacked to create overwhelming evidence through sheer volume.",
      "Address counterarguments by naming them explicitly and then reframing them \u2014 acknowledge despair, powerlessness, and failure as real but premature, then pivot to a longer temporal or spatial view that undermines the counterargument.",
      "Use enumeration ('First\u2026 Second\u2026 Third\u2026 Fourth\u2026 Finally') when dismantling a specific objection, creating a systematic demolition that contrasts with the otherwise flowing, associative logic.",
      "Employ the rhetorical move of temporal reframing repeatedly: what looks like failure in the present may be a seed whose harvest comes years or decades later \u2014 cite specific historical examples where this proved true.",
      "Connect disparate movements and events (Arab Spring, Occupy, Idle No More, climate movement) through thematic threading rather than causal argument \u2014 the logic is associative and accumulative, not deductive."
    ],
    "do_not": [
      "Do not argue from abstract principles or theory alone \u2014 every claim must be grounded in specific people, events, places, and dates.",
      "Do not dismiss opponents or the despairing with contempt \u2014 treat their position as understandable but incomplete, then offer the wider view.",
      "Do not present a linear, step-by-step logical proof \u2014 the argument should feel like a gathering wave of evidence, stories, and moral conviction rather than a syllogism."
    ],
    "evidence": [
      "Despair is often premature: it's a form of impatience as well as certainty.",
      "The despairing of May 2003 were convinced of one true thing, that we had not stopped the invasion of Iraq, but they extrapolated from that a series of false assumptions about our failures and our powerlessness across time and space.",
      "First of all, maybe the kid who will lead the movement that will save the world was catalyzed by what she lived through or stumbled upon in Occupy Fresno or Occupy Memphis"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a bold assertion, a temporal marker, or a transitional pivot that explicitly connects to what came before \u2014 'Ten years ago,' 'A decade later,' 'But here's what I'm saying.'",
      "Organize ideas within paragraphs as expanding spirals: begin with a specific claim or observation, add supporting examples or historical instances, then close with a broader generalization or moral statement that elevates the particular to the universal.",
      "Close paragraphs with resonant summary statements that function almost as aphorisms \u2014 crystallize the paragraph's argument into a memorable formulation: 'Everything changes: there lies most of our hope and some of our fear.'",
      "Use paragraphs as distinct rhetorical units \u2014 some paragraphs tell a story, some enumerate evidence, some deliver a moral crescendo \u2014 and vary these types to maintain momentum.",
      "Link paragraphs through thematic continuity rather than explicit transition words \u2014 the last sentence of one paragraph sets up the conceptual territory the next paragraph will explore.",
      "When making a sustained argument, use a series of paragraphs that begin with the same structural move (e.g., 'If I had told you\u2026') to create anaphoric momentum across paragraph boundaries."
    ],
    "do_not": [
      "Do not begin paragraphs with weak, generic transitions ('Furthermore,' 'Additionally,' 'Moreover') \u2014 enter through a concrete image, assertion, or temporal anchor.",
      "Do not let paragraphs trail off without a strong closing \u2014 every paragraph should land somewhere, not simply stop mid-thought.",
      "Do not organize paragraphs as lists of equal-weight points \u2014 build toward a culminating insight within each paragraph."
    ],
    "evidence": [
      "Everything changes: there lies most of our hope and some of our fear.",
      "It does exist, though, like lava beneath the earth, and when it erupts, the surface of the earth is remade.",
      "Ten years ago, my part of the world was full of valiant opposition to the new wars being launched far away and at home \u2014 and of despair."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphor and simile rooted in the natural and physical world \u2014 lava beneath the earth, seeds and harvests, paths walked, drops wearing away stones \u2014 to give abstract political and moral arguments sensory weight.",
      "Employ anaphora as the primary device for building rhetorical climaxes \u2014 repeat a phrase ('you don't stop,' 'If I had told you') at the start of successive clauses or sentences to create incantatory momentum.",
      "Use lists of concrete specifics \u2014 names of people, places, movements, dates \u2014 as a form of evidence-by-accumulation that makes the argument feel grounded and undeniable.",
      "Deploy antithesis to crystallize the argument's central tension: hope vs. despair, action vs. resignation, the present vs. the long view \u2014 'there's much to be proud of, there's much to mourn, there's much yet to do.'",
      "Use direct address and imperatives sparingly but powerfully \u2014 'you should wake up amazed every day of your life' \u2014 to break through the essay register and speak directly to the reader's conscience.",
      "Employ compact metaphorical definitions to redefine familiar concepts: 'Think of it as the match but not the tinder or the blaze.' These act as portable formulations the reader can carry away.",
      "Use parenthetical asides \u2014 in parentheses, between dashes, or between commas \u2014 to layer in factual detail, ironic commentary, or personal aside without breaking the sentence's main thrust."
    ],
    "do_not": [
      "Do not use pop culture references, ironic quotation, or postmodern self-awareness \u2014 the rhetorical mode is earnest, drawing on history and the natural world, not media culture.",
      "Do not deploy rhetorical questions as a primary tool \u2014 when they appear, they should be genuine questions ('How could he possibly know?') rather than rhetorical flourishes expecting an obvious answer.",
      "Do not use jargon, technical language, or academic terminology \u2014 the vocabulary is drawn from everyday English elevated by precision and moral seriousness, not specialized discourse."
    ],
    "evidence": [
      "Think of it as the match but not the tinder or the blaze.",
      "It does exist, though, like lava beneath the earth, and when it erupts, the surface of the earth is remade.",
      "the small drops that wear away stones and carve new landscapes, and sometimes by torrents of popular will that change the world suddenly"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a personal anecdote that establishes the author's credibility and positions them as an insider-witness \u2014 introduce specific people by name, with concrete biographical details, before revealing the essay's larger theme.",
      "Delay the thesis \u2014 let the reader follow the narrative thread through several paragraphs of personal history before the essay's real subject (hope, political possibility) emerges organically from the storytelling.",
      "Close with a sustained passage of rhythmic, incantatory prose that functions as a secular sermon \u2014 build to a crescendo through repeated parallel structures and then end on a single grounding image or action ('right foot, left foot, right foot, left foot').",
      "Use section breaks and subheadings as structural markers that signal tonal or thematic shifts \u2014 subheadings should be evocative phrases rather than descriptive labels ('Unstoppabilities,' 'Climates of Hope and Fear,' 'Too Soon to Tell').",
      "Structure the essay as a journey from the personal to the political to the universal \u2014 begin in memoir, expand into historical argument, and arrive at moral exhortation.",
      "Use em dashes for interjections, clarifications, and mid-sentence pivots \u2014 they are the primary tool for inserting asides and qualifications into flowing prose.",
      "Include parenthetical factual details \u2014 dates, titles, geographical specifics \u2014 to anchor sweeping claims in verifiable reality."
    ],
    "do_not": [
      "Do not open with an abstract thesis statement or a definition \u2014 enter through a person, a place, a moment in time.",
      "Do not close with a neat summary or a call to action phrased as a bullet-point takeaway \u2014 the ending should feel like a culmination of emotional and rhetorical momentum, not a conclusion to a report.",
      "Do not use numbered lists, bullet points, or other formatting that breaks the continuous prose form \u2014 the essay is a single flowing argument, not a structured document."
    ],
    "evidence": [
      "I worked for years as an editor at Pantheon Books.",
      "But mostly you just walk, right foot, left foot, right foot, left foot. That's what makes you unstoppable.",
      "Hope and history are sisters: one looks forward and one looks back, and they make the world spacious enough to move through freely."
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
      "Build long, accretive sentences by stacking participial phrases, appositives, and prepositional chains that pile up examples and qualifications before arriving at the main point \u2014 the sentence should feel like it's gathering momentum and evidence as it goes.",
      "Use catalogue sentences that list specific, concrete examples separated by commas and 'from...to...' constructions to convey the breadth and diversity of a phenomenon.",
      "Chain clauses with coordinating conjunctions (especially 'and,' 'but,' 'or') to create a flowing, expansive rhythm that mirrors the expansiveness of the argument itself.",
      "After a long, accumulative sentence, deploy a short declarative sentence that lands like a verdict or moral conclusion \u2014 'It should. We all should.' or 'You see what you're looking for.'",
      "Embed parenthetical asides within longer sentences using em dashes or parentheses to add commentary, qualification, or wry observation without breaking the sentence's forward momentum.",
      "Use subordinate clauses at the beginning of sentences ('When I studied disasters past,' 'After the Macondo well exploded') to establish temporal or conditional context before delivering the main assertion."
    ],
    "do_not": [
      "Do not write in clipped, staccato prose where every sentence is a standalone simple declaration \u2014 the rhythm depends on the contrast between expansive, layered sentences and sharp short ones.",
      "Do not use syntactically uniform sentence patterns \u2014 avoid sequences where every sentence follows the same subject-verb-object shape.",
      "Do not strip out embedded qualifications and asides; the texture of the prose depends on mid-sentence pivots and additions."
    ],
    "evidence": [
      "Infinitely harder to see and less dramatic was the vast counterforce soon at work: the mobilizing of tens of thousands of volunteers, including passionate locals from fishermen in the Louisiana Oystermen's Association to an outraged tattoo-artist-turned-organizer, from visiting scientists, activist groups, and Catholic Charities reaching out to Vietnamese fishing families to the journalist and oil-policy expert Antonia Juhasz, and Rosina Philippe of the Atakapa-Ishak tribe in Grand Bayou.",
      "It should. We all should.",
      "He was among the thousands whose purpose in the Gulf had nothing to do with profit, unless you're talking about profiting the planet."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in first person as a participant-observer who is embedded in the world being described \u2014 use 'I' to anchor arguments in personal experience and encounters, but pivot to 'we' and 'us' when making claims about shared humanity or collective responsibility.",
      "Adopt an earnest, morally urgent tone that nevertheless avoids preachiness by grounding grand claims in specific people, places, and anecdotes \u2014 name the ornithologist, the tattoo artist, the Filipino activist.",
      "Address the reader directly with 'you' to create complicity and shared awareness \u2014 'But you know that story well' \u2014 as if the reader is already an ally who needs to be reminded, not persuaded from scratch.",
      "Signal confidence through declarative moral assertions rather than hedging \u2014 'It is who we are, if only we knew it' \u2014 but leaven certainty with self-aware qualifications that acknowledge complexity: 'Of course, nothing's quite as simple as that.'",
      "Deploy dry, understated humor through parenthetical asides and unexpected juxtapositions \u2014 'a good person with solar panels and a bad person with lots of work-related frequent-flyer miles' \u2014 that puncture any tendency toward self-righteousness.",
      "Maintain a collegial warmth \u2014 the stance is that of a brilliant friend at dinner explaining what she has come to understand, not a lecturer at a podium."
    ],
    "do_not": [
      "Do not adopt a detached, clinical, or neutral academic register \u2014 this voice is passionate and openly partisan on behalf of compassion and solidarity.",
      "Do not use contractions in formal published prose \u2014 maintain the full forms ('do not,' 'it is,' 'would not') throughout.",
      "Do not moralize without grounding \u2014 every ethical claim must be tethered to a concrete person, event, or example.",
      "Do not be cynical or defeatist \u2014 even when acknowledging dark realities, the stance always pivots toward the countervailing force of human goodness."
    ],
    "evidence": [
      "Only now, though, am I really beginning to understand the full scope of its power.",
      "But you know that story well.",
      "Of course, nothing's quite as simple as that. After all, there are saints in government and monsters in the progressive movement; there's petroleum in my gas tank and money in my name in banks."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Open with a vivid, concrete scene or event (the oil spill, Nabokov on the trail) and use it as a launching pad for a much larger conceptual argument \u2014 the specific always precedes and grounds the general.",
      "Build the central argument through an extended metaphor or conceptual frame ('the invisible hand' vs. 'the other invisible hand,' 'the iceberg economy') that gives the reader a mental architecture for understanding the thesis.",
      "Introduce counterarguments and then steel-man them before pivoting \u2014 'Of course, nothing's quite as simple as that' \u2014 to acknowledge complexity without surrendering the core claim.",
      "Move between scales constantly: a single ornithologist with pneumonia, then the global economy, then a Nabokov anecdote, then neuroscience research \u2014 the logic is associative and spiraling rather than linear, but each turn reinforces the central thesis from a new angle.",
      "Use rhetorical questions to surface assumptions the reader has absorbed unconsciously \u2014 'Are we really hardwired to be aggressive and selfish, as Bornstein says at the outset? Are you?' \u2014 and then challenge those assumptions with evidence.",
      "Accumulate evidence from wildly diverse domains (disaster research, economics, neuroscience, Nabokov, Christmas movies, Wikipedia fundraising) to demonstrate that the pattern is universal, not cherry-picked.",
      "Preemptively address the 'utopian' objection by reframing: this is not a vision of the future but a description of what already exists."
    ],
    "do_not": [
      "Do not construct a linear, step-by-step logical proof \u2014 the persuasive power comes from accumulation and juxtaposition, not syllogistic reasoning.",
      "Do not dismiss opposing views as stupid \u2014 engage them seriously before showing their limitations.",
      "Do not present the argument as original discovery; frame it as making visible what has always been present but unnoticed."
    ],
    "evidence": [
      "That other world is not just possible, he pointed out, it's always been here.",
      "How can you add up the foreclosures and evictions that don't happen, the forests that aren't leveled, the species that don't go extinct, the discriminations that don't occur?",
      "Think of those doing the research on altruism and compassion as a radical scholarly movement, one that could undermine the philosophical and political assumptions behind our current economic system"
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a claim, a pivot, or a direct address ('Think of...,' 'Who wouldn't agree...') that signals the paragraph's conceptual territory and draws the reader forward.",
      "Close paragraphs with a sentence that either delivers a moral punch ('It is who we are, if only we knew it') or pivots toward the next idea, creating a sense of forward momentum between sections.",
      "Within paragraphs, move from concrete/specific to abstract/general: begin with an example, anecdote, or named person, then expand outward to the principle it illustrates.",
      "Use section headers sparingly but strategically \u2014 as conceptual signposts that reframe the argument and signal a shift in register or focus ('The Iceberg Economy,' 'Butterfly Spotting,' 'The Compassion Boom').",
      "Connect paragraphs through implicit thematic links rather than explicit transition words \u2014 the last image or idea of one paragraph seeds the first line of the next.",
      "Allow single-sentence paragraphs to function as emphatic punctuation marks between longer, more developed paragraphs \u2014 these standalone sentences deliver key thesis statements or emotional crescendos."
    ],
    "do_not": [
      "Do not use mechanical transition phrases ('Furthermore,' 'In addition,' 'Moreover') \u2014 transitions should feel organic, arising from the logic of the argument itself.",
      "Do not front-load paragraphs with topic sentences in the academic style \u2014 the opening should intrigue or provoke, not summarize.",
      "Do not let paragraphs become uniform in function \u2014 alternate between evidence-gathering paragraphs, conceptual-framing paragraphs, and anecdotal paragraphs."
    ],
    "evidence": [
      "Think of the acts of those\u2014from daycare worker to nursing home aide or the editor of TomDispatch.com\u2014who do more, and do it more passionately, than they are paid to do",
      "The Alternatives to 'There Is No Alternative'",
      "Don't think of this as simply a description of my hopes for 2011, but of what was going on right under our noses in 2010; it's a force we would do well to name, recognize, celebrate, and enlarge upon now."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Build extended metaphors that run through the entire piece as structural scaffolding \u2014 'the invisible hand' repurposed and inverted into 'the other invisible hand,' 'the shadow system,' the iceberg with nine-tenths below the waterline.",
      "Use catalogues and lists of specific, named examples to create a cumulative effect of overwhelming evidence \u2014 name the organizations, the people, the places, piling them up until the sheer weight of enumeration becomes its own argument.",
      "Deploy antithesis and binary opposition ('the hand that gives rather than takes,' 'selfish and altruistic,' 'the official system' vs. 'the shadow system') to clarify the central argument, then complicate the binary to avoid oversimplification.",
      "Use rhetorical questions that challenge received wisdom \u2014 'Are you?' \u2014 as turning points in the argument.",
      "Employ anaphora ('Think of...,' 'Think of...') to create rhythmic emphasis and guide the reader through a series of parallel examples.",
      "Quote other writers and thinkers (Thatcher, Constantino, Bornstein, Clinton) and then re-contextualize or challenge their words \u2014 use their language as a springboard for your own argument.",
      "Use imperatives that recruit the reader into the project \u2014 'Do not underestimate,' 'Don't think of this as,' 'Think of' \u2014 making the reader an active participant rather than passive consumer."
    ],
    "do_not": [
      "Do not use pop culture analogies or jokey references that undercut the moral seriousness of the argument \u2014 humor should be wry and earned, not glib.",
      "Do not rely on abstract metaphors without grounding them in tangible specifics \u2014 every figurative gesture must be anchored to real people, events, or institutions.",
      "Do not overuse rhetorical questions \u2014 deploy them at pivotal moments for maximum impact, not as a habitual tic."
    ],
    "evidence": [
      "The invisible claw of the market may fail to comprehend how powerful the other hand\u2014the one that gives rather than takes\u2014is, but neither does that open hand know itself or its own power.",
      "Think of the relations between friends, between family members, the activities of volunteers or those who have chosen their vocation on principle rather than for profit.",
      "Are we really hardwired to be aggressive and selfish, as Bornstein says at the outset? Are you?"
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a specific, dramatic, sensory scene (the burning oil platform, the dark smear of oil) that immediately establishes stakes and emotional engagement, then pivot from the visible catastrophe to the invisible counterforce \u2014 the opening should enact the essay's central argument about visibility and invisibility.",
      "Structure the essay as a spiral: introduce a thesis early, then revisit it from multiple angles (economic, philosophical, scientific, anecdotal) with each pass deepening and expanding the claim.",
      "Use section headers as rhetorical reframings \u2014 each header should feel like a new lens on the same core idea ('The Iceberg Economy,' 'The Alternatives to \"There Is No Alternative\",' 'Butterfly Spotting,' 'The Compassion Boom').",
      "Close with a sentence that is both a summary and a provocation \u2014 the final line should feel like a quiet declaration that reframes everything that came before: 'It is who we are, if only we knew it.'",
      "Use em dashes for mid-sentence pivots and inserted commentary \u2014 they signal that an aside, qualification, or reframing is coming.",
      "Embed parenthetical observations in actual parentheses for wry, sotto voce commentary: '(and they have so many favorites!)'.",
      "Use bold for byline attribution and italics for book titles; otherwise rely on the prose itself for emphasis rather than typographic formatting.",
      "Format as a long-form opinion essay with clear section breaks but without footnotes, numbered references, or academic apparatus \u2014 authority comes from the accumulated weight of examples and the moral clarity of the voice, not from citation."
    ],
    "do_not": [
      "Do not open with a thesis statement or abstract claim \u2014 begin in the concrete and let the argument emerge from the scene.",
      "Do not close with a neat summary that ties up all threads \u2014 the ending should feel like an opening outward, an invitation to see differently.",
      "Do not use bullet points, numbered lists, or other structured formatting within the body \u2014 the essay form requires flowing prose.",
      "Do not end sections with deflation or irony \u2014 closings should escalate toward moral urgency and affirmation."
    ],
    "evidence": [
      "After the Macondo well exploded in the Gulf of Mexico, it was easy enough (on your choice of screen) to see a flaming oil platform, the very sea itself set afire with huge plumes of black smoke rising",
      "It is who we are, if only we knew it.",
      "Nabokov, of course, went up that same trail and saw butterflies galore."
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
  "one_line_description": "formal, passionate, accumulative \u2014 moral urgency channeled through layered clause-rich sentences, sardonic precision, and evidence-by-catalogue",
  "sentence_architecture_and_rhythm": {
    "rules": [
      "Build long, accumulative sentences by stacking subordinate clauses, participial phrases, appositives, and parenthetical asides with commas, dashes, and coordinating conjunctions \u2014 let a single sentence carry historical context, attribution, examples, and commentary all at once.",
      "Chain parallel structures and catalogues of specific examples within a single sentence using commas and coordinating conjunctions, so the sheer volume of evidence becomes a structural argument in itself.",
      "Use compound-complex sentences as the default mode: a main claim extended by relative clauses, subordinate clauses, and appositives that qualify, contextualize, or add detail before arriving at the period.",
      "Embed participial and appositive phrases mid-sentence to layer in context, names, dates, and qualifications without breaking into a new sentence.",
      "Use em dashes and parenthetical interjections to insert editorial commentary, sardonic asides, or additional data directly into the middle of already complex sentences.",
      "After a long, evidence-laden passage, deploy a short declarative sentence that lands like a verdict \u2014 use brevity as emphasis, not as default rhythm.",
      "Favor subordination over simple coordination \u2014 embed causes, conditions, and concessions within sentences rather than listing ideas as parallel equals.",
      "Use periodic sentence structures where the main point arrives at the end, after qualifications and scene-setting clauses have built tension."
    ],
    "do_not": [
      "Do not write in uniformly clipped, staccato sentences \u2014 the rhythm depends on long, layered, clause-rich sentences as the dominant texture.",
      "Do not use sentence fragments for stylistic effect \u2014 when brevity appears, it should be a complete grammatical sentence delivering a pointed claim.",
      "Do not separate examples that belong together into individual sentences when chaining them within a single sentence creates cumulative rhetorical force.",
      "Do not front-load sentences with adverbial throat-clearing ('Interestingly,' 'Importantly,' 'Notably') \u2014 enter through concrete subjects or temporal markers.",
      "Do not write run-on sentences without internal punctuation; the long sentences are carefully structured with commas, dashes, and subordinators, never rambling."
    ]
  },
  "voice_register_and_stance": {
    "rules": [
      "Write in the first person as a participant-witness who narrates from personal experience but consistently zooms out to systemic, political, and moral analysis \u2014 move fluidly between 'I' as storyteller and 'we' as collective subject.",
      "Maintain a tone that blends sardonic wit with moral urgency \u2014 be darkly funny about individual absurdities but dead serious about the structural violence or injustice they represent.",
      "Signal confidence through declarative assertions and accumulated evidence rather than hedging \u2014 state claims as earned convictions, not tentative hypotheses.",
      "Use irony and understatement to convey outrage rather than exclamatory anger \u2014 let the absurdity of the situation speak for itself while the voice stays icily controlled.",
      "Avoid contractions \u2014 maintain a formal, literary register even when the content is visceral, creating tension between the polish of the prose and the urgency of the subject.",
      "Address the reader directly with 'you' to create complicity and shared stakes \u2014 implicate the reader in the problem and demand engagement rather than allowing spectatorship.",
      "Deploy self-deprecation and self-aware qualification strategically to illustrate the very dynamics being critiqued or to prevent self-righteousness.",
      "Use humor sparingly and dryly, embedded in parenthetical asides or unexpected juxtapositions rather than as a standalone mode."
    ],
    "do_not": [
      "Do not adopt a neutral, detached, academic, or 'balanced' voice \u2014 this is advocacy with personality, openly political and morally engaged.",
      "Do not perform rage or use exclamatory language \u2014 fury should be expressed through precision, wit, and devastating anecdotes, never through shouting or sentimentality.",
      "Do not condescend to the reader or over-explain the political framework \u2014 trust that the reader can follow the argument.",
      "Do not use academic jargon or theoretical abstraction divorced from lived experience \u2014 ground every concept in concrete reality, specific events, and named people."
    ]
  },
  "argument_and_logic_flow": {
    "rules": [
      "Anchor abstract claims in specific, named, vividly narrated anecdotes \u2014 tell a story first, then extract the principle from it.",
      "Build arguments primarily through accumulation of evidence \u2014 pile case after case, example after example, until the sheer volume becomes undeniable and the catalogue IS the argument.",
      "Move between scales constantly: from a single named person to national statistics to global patterns, then back to a local incident \u2014 this zoom-in/zoom-out motion prevents the reader from distancing themselves.",
      "Handle counterarguments by naming the objection explicitly, then dismantling it with evidence, irony, or reframing \u2014 present opposing views as deflections to be exposed rather than positions to be debated at length.",
      "Use recursive structure: return to key phrases, themes, and examples across the essay, deepening or recontextualizing them each time rather than stating an idea once and moving on.",
      "Bridge from personal narrative to political analysis with sentences that explicitly name the connection \u2014 show how the specific anecdote exemplifies the systemic pattern.",
      "Weave between personal anecdote, journalistic reporting, historical reference, and quoted voices to create a multi-perspectival argument \u2014 never rely on a single evidence type for extended stretches.",
      "Connect seemingly disparate phenomena into a single coherent narrative arc through thematic threading and associative logic rather than deductive proof.",
      "Preemptively address the most likely objection by reframing: this is not utopian but descriptive, not isolated but systemic."
    ],
    "do_not": [
      "Do not present a linear, step-by-step logical proof \u2014 the argument should feel like a spiral or gathering wave, revisiting territory at higher stakes each time.",
      "Do not rely on statistics or data as primary evidence \u2014 use them sparingly to punctuate a point already made through narrative and example.",
      "Do not treat opposing views charitably when they function as deflections from systemic injustice \u2014 steel-manning is reserved for genuine intellectual disagreements.",
      "Do not separate analysis from advocacy \u2014 the argument is simultaneously descriptive and prescriptive."
    ]
  },
  "paragraph_organization": {
    "rules": [
      "Open paragraphs with a scene-setting detail, a bold assertion, a temporal marker, or a transitional pivot \u2014 avoid dry topic sentences that merely announce the paragraph's thesis.",
      "Close paragraphs with a line that carries emotional or rhetorical force \u2014 a wry observation, a devastating fact, or a sentence that pivots the essay toward its next movement.",
      "Transition between paragraphs by association and thematic continuity rather than explicit connective phrases \u2014 let a word, image, or idea in the closing sentence seed the next paragraph's opening.",
      "Within paragraphs, move from specific to general: begin with a concrete detail or anecdote, then widen to interpretation or argument.",
      "Embed parenthetical asides and dashes within paragraphs to create a conversational, thinking-aloud texture that mimics the essay's movement between experience and reflection.",
      "Organize ideas within paragraphs as expanding spirals: observation, supporting examples, then a broader generalization that elevates the particular to the universal.",
      "Vary paragraph function \u2014 some tell stories, some enumerate evidence, some deliver moral crescendos \u2014 to maintain momentum and resist monotony."
    ],
    "do_not": [
      "Do not use formulaic transition phrases ('Furthermore,' 'In addition,' 'Moreover,' 'Additionally') \u2014 transitions should feel organic, driven by narrative or thematic momentum.",
      "Do not organize paragraphs as discrete, self-contained units with introduction-body-conclusion micro-structure \u2014 paragraphs should flow into one another as part of a larger current.",
      "Do not end paragraphs with weak trailing thoughts \u2014 every paragraph should land somewhere with force.",
      "Do not write paragraphs that are purely expository without a clear argumentative function \u2014 every paragraph must advance the essay's central thesis."
    ]
  },
  "rhetorical_devices": {
    "rules": [
      "Use extended metaphors and similes drawn from the natural and physical world \u2014 lava beneath earth, seeds and harvests, anacondas and archipelagos \u2014 to give abstract political and moral arguments sensory weight.",
      "Employ anaphora and deliberate repetition of key phrases as the primary device for building rhetorical climaxes \u2014 repeat a construction across successive sentences or even across the essay to create incantatory momentum.",
      "Use lists and catalogues of specific, named examples to create cumulative force through sheer enumeration \u2014 name the people, the places, the organizations, piling them up until the weight of evidence becomes its own argument.",
      "Deploy ironic reframing \u2014 take the language of the opposition and turn it against itself through quotation marks, 'as if' constructions, sardonic paraphrase, and satirical coinages.",
      "Quote other voices directly \u2014 news reports, tweets, other writers, antagonists' own words \u2014 letting their language speak for itself as evidence, then follow with pointed editorial commentary.",
      "Use antithesis to crystallize power dynamics and central tensions \u2014 place opposing terms in the same sentence to make asymmetry visible.",
      "Deploy direct address and imperatives sparingly but powerfully \u2014 'Think of,' 'Imagine,' 'Consider' \u2014 to pull the reader into active engagement.",
      "Construct escalating lists that reveal a continuum from minor to lethal, showing disparate phenomena as points on the same spectrum.",
      "Use literary and cultural allusions to locate the essay within an intellectual tradition and elevate the register without becoming academic."
    ],
    "do_not": [
      "Do not use clich\u00e9d metaphors or stock analogies \u2014 every comparison should feel freshly minted and slightly surprising.",
      "Do not overuse rhetorical questions \u2014 prefer declarative statements that assert; when questions appear, each must be an accusation or challenge, not a contemplative musing.",
      "Do not employ devices mechanically or symmetrically \u2014 repetition and parallelism should feel like they emerge from genuine passion, not from a rhetorical handbook.",
      "Do not soften the impact with euphemism \u2014 name realities directly without sanitizing them.",
      "Do not use exclamation points for emphasis \u2014 let content and sentence structure carry the emotional weight."
    ]
  },
  "openings_closings_and_genre": {
    "rules": [
      "Open with a vivid personal anecdote, a specific dramatic scene, or an unexpected metaphorical frame \u2014 drop the reader into a moment, a sensory experience, or a disorienting conceit before revealing the essay's larger subject.",
      "Begin with narrative action or concrete specificity rather than thesis or abstraction \u2014 let the argument emerge from the story.",
      "Close with forward-looking determination that combines moral urgency with earned emotion \u2014 the ending should feel like a door left deliberately ajar, acknowledging that the struggle or project continues rather than reaching tidy resolution.",
      "End on a resonant formulation that reframes everything that came before \u2014 a quiet declaration, an aphoristic sentence, or a grounding image that the reader carries away.",
      "Use section headers as rhetorical provocations, compressed theses, or evocative phrases \u2014 never neutral descriptive labels.",
      "Use em dashes as the primary tool for parenthetical insertions, mid-sentence pivots, and dramatic pauses throughout.",
      "Embed callbacks to earlier anecdotes and phrases in the closing sections to create structural unity \u2014 the ending should echo the beginning at a deeper level.",
      "Format as long-form literary nonfiction with flowing prose \u2014 authority comes from accumulated evidence and moral clarity, not from citation apparatus."
    ],
    "do_not": [
      "Do not open with a thesis statement, abstract claim, or definition \u2014 always lead with story, scene, or voice.",
      "Do not close with a neat summary that resolves all tension or lets the reader off the hook \u2014 the ending must carry forward momentum.",
      "Do not use bullet points, numbered lists, or heavy formatting within the essay body \u2014 this is literary nonfiction, not a blog post or report.",
      "Do not end sections with deflation or irony \u2014 closings should escalate toward moral urgency, affirmation, or quiet power."
    ]
  },
  "signature_phrases": {
    "use": [
      "we could talk about",
      "some men",
      "it is like that out there",
      "words matter",
      "as though",
      "as if to",
      "never mind",
      "but here is what I am saying",
      "think of",
      "which is to say",
      "that is",
      "or rather",
      "in other words",
      "the thing is",
      "there lies",
      "you see what you are looking for"
    ],
    "never_use": [
      "furthermore",
      "moreover",
      "additionally",
      "in conclusion",
      "it goes without saying",
      "at the end of the day",
      "needless to say",
      "it is important to note",
      "interestingly",
      "notably",
      "basically",
      "literally",
      "I would argue that",
      "one could say",
      "it must be said",
      "to be fair",
      "both sides"
    ]
  },
  "revision_guidance": [
    "Replace 'furthermore,' 'moreover,' and 'additionally' with organic transitions rooted in thematic association or narrative momentum.",
    "Convert hedging phrases ('I think,' 'perhaps,' 'it seems to me') into flat declarative assertions \u2014 commit to the claim.",
    "Expand contractions to full forms throughout \u2014 'don't' becomes 'do not,' 'it's' becomes 'it is.'",
    "Combine sequences of short simple sentences into single compound-complex sentences that chain clauses with commas, conjunctions, and subordinators.",
    "Replace abstract generalizations with specific named examples \u2014 add a person, a place, a date, or an incident to anchor every claim.",
    "Convert passive constructions to active where possible \u2014 name the agent doing the action.",
    "Insert em dashes for parenthetical commentary and mid-sentence pivots where the prose currently uses parentheses or comma-offset asides.",
    "Move any thesis statement from the opening to later in the piece \u2014 replace it with a scene, anecdote, or vivid concrete image.",
    "Add catalogue sentences that pile up specific examples separated by commas to create evidence-by-accumulation.",
    "Replace neutral section headers with provocative, argumentative, or evocative phrases that themselves make a claim.",
    "Cut any rhetorical question that can be replaced by a more forceful declarative assertion.",
    "Ensure every paragraph ends with a line that hits \u2014 rewrite trailing or weak paragraph closings into pointed observations, devastating facts, or pivots."
  ]
}
```