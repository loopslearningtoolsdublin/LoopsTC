// ═══════════════════════════════════════════════
// LOOPS · LC ENGLISH — Higher + Ordinary, Paper 1 and Paper 2
// Styled on the SEC papers and the PCLM marking criteria
// (Purpose 30%, Coherence 30%, Language 30%, Mechanics 10%).
// Paper 2 content follows the prescribed material for 2027 (curriculumonline.ie).
// Poems are never reproduced here: questions are ABOUT the prescribed texts.
// Check the prescribed list each September and update the P2 items.
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));
const TF = ["True","False"];

const TEXTS = {
  e1: "The first thing you notice about the island is the silence. Not the polite hush of a library, but a vast, ancient quiet that seems to press against your ears. Then, slowly, the island begins to speak: the slap of waves on the slipway, the creak of a gate, a dog barking two fields away. My grandmother lived here for eighty years and never once wanted to leave. ‘Why would I?’ she asked me, the summer I turned fifteen. ‘Everything I need is within a mile of this door.’ At the time I thought she was mad. Now, stuck in traffic on the M50, I am not so sure.",
  e2: "Every generation believes its teenagers are uniquely lazy, distracted and rude. In 1907, a newspaper complained that young people ‘read nothing but cheap magazines’. In the 1950s it was comics; in the 1980s, video games; today it is the phone. Yet each generation of so-called hopeless teenagers went on to build hospitals, write novels and raise families of their own. Perhaps the problem is not the young at all, but the forgetfulness of the old.",
  e3: "Good morning everyone. I want to talk to you today about something that costs nothing, takes ten minutes, and could change your life: a walk. Not a run, not a gym session, not a step-count competition. A walk. Leave the headphones at home. Look up. Notice the trees on your road that you have walked past a thousand times. You will be amazed at what you have been missing."
};

const P1 = [
  // Comprehending
  {id:"e1",skill:"Comprehending",type:"mcq",text:"e1",q:"What is the writer’s main contrast in this passage?",opts:["The quiet of the island and the noise of city life","Her grandmother’s youth and old age","Summer and winter on the island","Dogs and gates"],a:0},
  {id:"e2",skill:"Comprehending",type:"mcq",text:"e1",q:"“a vast, ancient quiet that seems to press against your ears” is an example of…",opts:["Vivid descriptive imagery","A rhetorical question","Statistics","Dialogue"],a:0},
  {id:"e3",skill:"Comprehending",type:"mcq",text:"e1",q:"What does the final sentence suggest about the writer now?",opts:["She has begun to understand her grandmother’s view","She wants to move to the M50","She still thinks her grandmother was mad","She has never left the island"],a:0},
  {id:"e4",skill:"Comprehending",type:"mcq",text:"e1",q:"The tone of the passage is best described as…",opts:["Reflective and nostalgic","Angry and bitter","Comic and silly","Formal and scientific"],a:0},
  {id:"e5",skill:"Comprehending",type:"mcq",text:"e2",q:"What is the main argument of this passage?",opts:["Every generation unfairly criticises its young people","Teenagers today are lazier than ever","Phones are worse than comics","Newspapers in 1907 were accurate"],a:0},
  {id:"e6",skill:"Comprehending",type:"mcq",text:"e2",q:"How does the writer support the argument?",opts:["With examples from different decades","With a personal story","With a quotation from a scientist","With statistics about phone use"],a:0},
  {id:"e7",skill:"Comprehending",type:"mcq",text:"e2",q:"The final sentence uses…",opts:["Irony: it turns the criticism back on the old","A simile","Onomatopoeia","A list of three"],a:0},
  {id:"e8",skill:"Comprehending",type:"mcq",text:"e3",q:"What kind of text is this?",opts:["A talk or speech to an audience","A diary entry","A short story","A formal report"],a:0},
  {id:"e9",skill:"Comprehending",type:"mcq",text:"e3",q:"Which feature shows it is meant to be spoken?",opts:["Direct address: “Good morning everyone”","Footnotes","A bibliography","Chapter headings"],a:0},
  {id:"e10",skill:"Comprehending",type:"mcq",text:"e3",q:"“Not a run, not a gym session, not a step-count competition.” This technique is…",opts:["Repetition and a list for emphasis","Alliteration","A metaphor","Hyperbole"],a:0},
  {id:"e11",skill:"Comprehending",type:"mcq",text:"e1",q:"True or false: The grandmother wanted to leave the island.",opts:TF,fixed:true,a:1,why:"She lived there eighty years and never once wanted to leave."},
  // Composing
  {id:"e12",skill:"Composing",type:"mcq",q:"In the PCLM marking scheme, what does the “P” stand for?",opts:["Clarity of purpose","Punctuation","Paragraphing","Personal voice"],a:0},
  {id:"e13",skill:"Composing",type:"mcq",q:"Which part of PCLM is worth only 10%?",opts:["Mechanics: spelling and grammar","Purpose","Coherence","Language"],a:0},
  {id:"e14",skill:"Composing",type:"mcq",q:"A personal essay is usually written…",opts:["In the first person, reflective, with personal experience","In the third person, like a news report","As a list of bullet points","As a dialogue"],a:0},
  {id:"e15",skill:"Composing",type:"mcq",q:"A good short story for the exam usually has…",opts:["A small number of characters and a clear moment of change","Twenty characters and many plots","No dialogue at all","A bibliography"],a:0},
  {id:"e16",skill:"Composing",type:"mcq",q:"Which is the best opening for a persuasive speech?",opts:["A striking question or fact that grabs the audience","“My name is… and I am going to talk about…”","A list of statistics with no comment","An apology"],a:0},
  {id:"e17",skill:"Composing",type:"mcq",q:"Register means…",opts:["The level of formality suited to the audience","The number of paragraphs","A list of names","The title of the piece"],a:0},
  {id:"e18",skill:"Composing",type:"mcq",q:"A feature article differs from a news report because it…",opts:["Explores a topic in depth, often with the writer’s view","Only gives the bare facts","Has no headline","Is always written in verse"],a:0},
  {id:"e19",skill:"Composing",type:"mcq",q:"Coherence (C) in PCLM is about…",opts:["Sustaining the response: sequencing, paragraphing, linking ideas","Spelling","Handwriting","Word count only"],a:0},
  {id:"e20",skill:"Composing",type:"order",q:"Put the parts of a persuasive speech in a sensible order.",words:["Greet the audience","State your view","Give reasons and examples","Answer the other side","Strong conclusion"]},
  {id:"e21",skill:"Composing",type:"match",q:"Match the genre to a feature.",pairs:[["Speech","Direct address to listeners"],["Diary","Private, dated, first person"],["Short story","Character, setting, conflict"],["Report","Headings and recommendations"]]},
  // Language
  {id:"e22",skill:"Language",type:"match",q:"Match the technique.",pairs:[["Alliteration","Silent, still, slow"],["Simile","As cold as ice"],["Metaphor","The classroom was a zoo"],["Rhetorical question","Who could disagree?"]]},
  {id:"e23",skill:"Language",type:"match",q:"Match the technique.",pairs:[["Hyperbole","I’ve told you a million times"],["Onomatopoeia","The bees buzzed"],["Personification","The wind howled its anger"],["Oxymoron","Bittersweet"]]},
  {id:"e24",skill:"Language",type:"mcq",q:"Which sentence is correct?",opts:["Their coats are over there.","There coats are over their.","They’re coats are over there.","Their coats are over they’re."],a:0},
  {id:"e25",skill:"Language",type:"mcq",q:"Which uses the apostrophe correctly?",opts:["The dog wagged its tail.","The dog wagged it’s tail.","The dog’s wagged its tail.","The dogs’ wagged it’s tail."],a:0,why:"It’s = it is. Its = belonging to it."},
  {id:"e26",skill:"Language",type:"mcq",q:"Which is a complete sentence?",opts:["Although it was raining, we went out.","Although it was raining.","Because the bus.","Running down the road."],a:0},
  {id:"e27",skill:"Language",type:"mcq",q:"Choose the correct word: “The weather will ___ the match.”",opts:["affect","effect","afect","efect"],a:0,why:"Affect is usually the verb; effect is usually the noun."},
  {id:"e28",skill:"Language",type:"short",q:"Correct the spelling: “definately”",a:["definitely"]},
  {id:"e29",skill:"Language",type:"short",q:"Correct the spelling: “seperate”",a:["separate"]},
  {id:"e30",skill:"Language",type:"short",q:"Name the technique: “The city never sleeps.” (one word)",a:["personification","metaphor"]},
  {id:"e31",skill:"Language",type:"mcq",q:"Tone in a piece of writing means…",opts:["The writer’s attitude, shown through word choice","The number of words","The font","The page layout"],a:0}
];

const P2 = [
  // Prescribed poetry: Higher Level poets, 2027
  {id:"p1",skill:"Poetry",type:"match",q:"Match the poem to the poet.",pairs:[["The Fish","Elizabeth Bishop"],["The Flea","John Donne"],["Canal Bank Walk","Patrick Kavanagh"],["Easter 1916","W. B. Yeats"]]},
  {id:"p2",skill:"Poetry",type:"match",q:"Match the poem to the poet.",pairs:[["Aunt Jennifer’s Tigers","Adrienne Rich"],["Buying Winkles","Paula Meehan"],["A Disused Shed in Co. Wexford","Derek Mahon"],["“Hope” is the thing with feathers","Emily Dickinson"]]},
  {id:"p3",skill:"Poetry",type:"match",q:"Match the poem to the poet.",pairs:[["In the Waiting Room","Elizabeth Bishop"],["The Lake Isle of Innisfree","W. B. Yeats"],["Shancoduff","Patrick Kavanagh"],["Diving into the Wreck","Adrienne Rich"]]},
  {id:"p4",skill:"Poetry",type:"match",q:"Match the poem to the poet.",pairs:[["A Valediction Forbidding Mourning","John Donne"],["I Heard a fly buzz – when I died","Emily Dickinson"],["Grandfather","Derek Mahon"],["The Pattern","Paula Meehan"]]},
  {id:"p5",skill:"Poetry",type:"mcq",q:"John Donne is known as a…",opts:["Metaphysical poet","Romantic poet","War poet","Beat poet"],a:0},
  {id:"p6",skill:"Poetry",type:"mcq",q:"Which poet often set poems in Co. Monaghan and later along Dublin’s Grand Canal?",opts:["Patrick Kavanagh","Derek Mahon","W. B. Yeats","Paula Meehan"],a:0},
  {id:"p7",skill:"Poetry",type:"mcq",q:"Emily Dickinson’s poems are known for…",opts:["Dashes, slant rhyme and short stanzas","Very long lines with no punctuation","Being written in Irish","Being plays"],a:0},
  {id:"p8",skill:"Poetry",type:"mcq",q:"Which poet is known for close, precise observation of the natural world and travel?",opts:["Elizabeth Bishop","John Donne","W. B. Yeats","Patrick Kavanagh"],a:0},
  {id:"p9",skill:"Poetry",type:"mcq",q:"Paula Meehan often writes about…",opts:["Dublin’s inner city, family and memory","Medieval knights","Space travel","The American Civil War"],a:0},
  {id:"p10",skill:"Poetry",type:"mcq",q:"Adrienne Rich’s poetry often explores…",opts:["Power, gender and women’s experience","Farming in Monaghan","Love sonnets to a king","Sea battles"],a:0},
  {id:"p11",skill:"Poetry",type:"mcq",q:"For the unseen poem, the best first step is to…",opts:["Read it twice and note what it is about and how it makes you feel","Count the lines","Write about a different poem","Copy out the poem"],a:0},
  {id:"p12",skill:"Poetry",type:"mcq",q:"An answer on a prescribed poet should…",opts:["Address the statement and refer to a range of poems with quotation","Retell the life story of the poet","Discuss one poem only","Avoid quotation"],a:0},
  // Single text (Higher/Ordinary texts, 2027)
  {id:"s1",skill:"Single text",type:"match",q:"Match the text to its author.",pairs:[["Hamnet","Maggie O’Farrell"],["The Great Gatsby","F. Scott Fitzgerald"],["Dracula","Bram Stoker"],["Girl on an Altar","Marina Carr"]]},
  {id:"s2",skill:"Single text",type:"mcq",q:"In Othello, who manipulates Othello into believing Desdemona is unfaithful?",opts:["Iago","Cassio","Roderigo","Brabantio"],a:0},
  {id:"s3",skill:"Single text",type:"mcq",q:"Othello is set in…",opts:["Venice and Cyprus","Verona and Mantua","Scotland","Athens"],a:0},
  {id:"s4",skill:"Single text",type:"mcq",q:"Who narrates The Great Gatsby?",opts:["Nick Carraway","Jay Gatsby","Daisy Buchanan","Tom Buchanan"],a:0},
  {id:"s5",skill:"Single text",type:"mcq",q:"In The Great Gatsby, what does Gatsby watch across the bay?",opts:["A green light at the end of Daisy’s dock","A lighthouse","A burning house","A ship"],a:0},
  {id:"s6",skill:"Single text",type:"mcq",q:"Dracula is told mainly through…",opts:["Letters, diary entries and journals","A single first-person narrator","A play script","Poems"],a:0},
  {id:"s7",skill:"Single text",type:"mcq",q:"Hamnet imagines the family life of…",opts:["William Shakespeare","Charles Dickens","Bram Stoker","Jane Austen"],a:0},
  {id:"s8",skill:"Single text",type:"mcq",q:"Girl on an Altar retells the story of…",opts:["Agamemnon, Clytemnestra and Iphigenia","Romeo and Juliet","Cú Chulainn","King Arthur"],a:0},
  {id:"s9",skill:"Single text",type:"mcq",q:"A good single text answer…",opts:["Answers the question asked, with close reference to key moments","Retells the plot from start to end","Gives the author’s biography","Avoids quotation"],a:0},
  // Comparative
  {id:"c1",skill:"Comparative",type:"mcq",q:"The Higher Level comparative modes for 2027 are…",opts:["Theme or Issue, Cultural Context, General Vision and Viewpoint","Theme, Social Setting, Relationships","Literary Genre, Hero, Plot","Setting, Character, Style"],a:0},
  {id:"c2",skill:"Comparative",type:"mcq",q:"The Ordinary Level comparative modes for 2027 are…",opts:["Theme, Social Setting, Relationships","Cultural Context, General Vision and Viewpoint, Literary Genre","Hero, Villain, Plot","Theme or Issue, Literary Genre, Cultural Context"],a:0},
  {id:"c3",skill:"Comparative",type:"mcq",q:"Cultural Context means…",opts:["The world of the text: values, power, class, religion, gender roles","The author’s life","The number of chapters","The cover design"],a:0},
  {id:"c4",skill:"Comparative",type:"mcq",q:"General Vision and Viewpoint is about…",opts:["Whether the text’s outlook on life is hopeful or bleak, and why","The narrator’s eyesight","The camera angles only","The length of the text"],a:0},
  {id:"c5",skill:"Comparative",type:"mcq",q:"A strong comparative answer…",opts:["Compares texts throughout, with linking phrases","Writes about each text separately with no links","Discusses one text only","Lists the plots"],a:0},
  {id:"c6",skill:"Comparative",type:"match",q:"Match the linking phrase to its use.",pairs:[["Similarly","Shows a likeness"],["In contrast","Shows a difference"],["Whereas","Contrasts within a sentence"],["Likewise","Adds a matching point"]]}
];
P1.forEach(i => i.paper = 1); P2.forEach(i => i.paper = 2);

const CASE_QA = "TEXT: " + TEXTS.e1;
const HL = {
  id:"", builtin:true, title:"LC English · Higher", subject:"English", cycle:"LC", level:"HL",
  source:"Styled on the SEC Higher Level papers and the PCLM criteria; Paper 2 follows the 2027 prescribed material", gradeBands: HL_GRADES, texts: TEXTS,
  papers: {1:"Paper 1", 2:"Paper 2"},
  items: P1.concat(P2),
  tasks: [
    {id:"eh1",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks (P30 C30 L30 M10)",title:"Write a personal essay in which you reflect on a place that matters to you and why.",pts:[]},
    {id:"eh2",kind:"en_qb",paper:1,max:50,label:"Paper 1 · Question B · 50 marks",title:"You have been asked to give a talk to your year group encouraging them to spend less time on their phones. Write the text of the talk you would deliver.",pts:[]},
    {id:"eh3",kind:"en_parts",paper:1,max:50,label:"Paper 1 · Question A · 15 + 15 + 20",case:CASE_QA,title:"Read the text and answer the questions.",pts:["(i) What impression of the island do you get from the first half of the passage? Support your answer with reference to the text.","(ii) How does the writer’s attitude to her grandmother change? Explain.","(iii) Discuss the language techniques the writer uses to make the passage engaging."],marks:[15,15,20]},
    {id:"eh4",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks",title:"Write a short story in which a character makes a decision they later regret.",pts:[]},
    {id:"eh5",kind:"en_single",paper:2,max:60,label:"Paper 2 · Single Text · 60 marks",title:"Othello: “Iago’s success depends as much on the weaknesses of others as on his own cunning.” Discuss this statement, supporting your answer with reference to the play.",pts:[]},
    {id:"eh6",kind:"en_comparative",paper:2,max:70,label:"Paper 2 · Comparative · 70 marks",title:"Theme or Issue: Compare how a theme or issue is introduced and developed in at least two of the texts you studied.",pts:[]},
    {id:"eh7",kind:"en_poetry",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 50 marks",title:"“Patrick Kavanagh finds wonder and beauty in ordinary places and everyday experience.” Discuss this statement, with reference to the poems by Kavanagh on your course.",pts:[]},
    {id:"eh8",kind:"en_poetry",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 50 marks",title:"“Elizabeth Bishop’s precise observation of detail leads us to moments of deeper insight.” Discuss, with reference to the poems by Bishop on your course.",pts:[]}
  ]
};
const OL = {
  id:"", builtin:true, title:"LC English · Ordinary", subject:"English", cycle:"LC", level:"OL",
  source:"Styled on the SEC Ordinary Level papers and the PCLM criteria; Paper 2 follows the 2027 prescribed material", gradeBands: OL_GRADES, texts: TEXTS,
  papers: {1:"Paper 1", 2:"Paper 2"},
  items: P1.concat(P2.filter(i => !["c1","p5","p8"].includes(i.id))).concat([
    {id:"op1",skill:"Poetry",type:"match",paper:2,q:"Match the Ordinary Level poem to the poet.",pairs:[["Ozymandias","Percy Bysshe Shelley"],["Valentine","Carol Ann Duffy"],["Sonnet XVIII (Shall I compare thee…)","William Shakespeare"],["The Loaf","Paul Muldoon"]]},
    {id:"op2",skill:"Poetry",type:"match",paper:2,q:"Match the Ordinary Level poem to the poet.",pairs:[["Genetics","Sinéad Morrissey"],["Lament for Christy Ring","Billy Ramsell"],["Mammy Dozes","Colette Bryce"],["My Father’s Kites","Alison Joseph"]]}
  ]),
  tasks: [
    {id:"eo1",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks (P30 C30 L30 M10)",title:"Write a short story set on the last day of the summer holidays.",pts:[]},
    {id:"eo2",kind:"en_qb",paper:1,max:50,label:"Paper 1 · Question B · 50 marks",title:"Write a letter to your local council asking for better facilities for young people in your area.",pts:[]},
    {id:"eo3",kind:"en_parts",paper:1,max:50,label:"Paper 1 · Question A · 10 + 10 + 30",case:CASE_QA,title:"Read the text and answer the questions.",pts:["(i) Name two sounds the writer hears on the island.","(ii) What did the grandmother say about living on the island?","(iii) Would you like to live on an island like this? Give reasons for your answer."],marks:[10,10,30]},
    {id:"eo4",kind:"en_parts",paper:2,max:60,label:"Paper 2 · Single Text · 10 + 20 + 30",title:"Answer on the single text you studied (for example The Great Gatsby).",pts:["(a) Describe one important event in the text.","(b) Which character did you find most interesting? Explain why, with reference to the text.","(c) Did you enjoy the ending of the text? Give reasons, with reference to the text."],marks:[10,20,30]},
    {id:"eo5",kind:"en_comparative",paper:2,max:70,label:"Paper 2 · Comparative · 70 marks",title:"Relationships: Compare an important relationship in two of the texts you studied.",pts:[]},
    {id:"eo6",kind:"en_parts",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 10 + 10 + 30",title:"Answer on ONE poem from your Ordinary Level course (for example Ozymandias by Shelley).",pts:["(a) What is the poem about? Explain in your own words.","(b) Choose one image from the poem that you found striking. Explain why.","(c) Would you recommend this poem to a friend? Give reasons, with reference to the poem."],marks:[10,10,30]}
  ]
};

// ── A bigger pool of marked questions (3 Nov 2026) ──
HL.tasks.push(
  {id:"eh9",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks",title:"Write a speech, to be delivered to your class, in which you argue that young people are more capable than adults give them credit for.",pts:[]},
  {id:"eh10",kind:"en_poetry",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 50 marks",title:"“Paula Meehan writes with honesty and compassion about people often overlooked.” Discuss, with reference to the poems by Meehan on your course.",pts:[]}
);
OL.tasks.push(
  {id:"eo7",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks",title:"Write an article for a school magazine about a person who has had a big influence on your life.",pts:[]},
  {id:"eo8",kind:"en_qb",paper:1,max:50,label:"Paper 1 · Question B · 50 marks",title:"Write an e-mail to a friend who is nervous about starting a part-time job, giving them advice.",pts:[]}
);
// ── Towards 20 per level (4 Nov 2026) ──
const UNSEEN = "UNSEEN POEM: Bus Stop, November\n\nThe shelter holds us like a cupped hand,\nsix strangers and the rain.\nA child draws faces in the steamed-up glass;\nan old man counts his change again.\nNobody speaks. The road hisses past.\nThen the bus swings in, lit up like a kitchen,\nand we climb in, one by one, out of the dark.";
const CASE_E2 = "TEXT: " + TEXTS.e2, CASE_E3 = "TEXT: " + TEXTS.e3;
HL.tasks.push(
  {id:"eh11",kind:"en_parts",paper:1,max:50,label:"Paper 1 · Question A · 15 + 15 + 20",case:CASE_E2,title:"Read the text and answer the questions.",pts:["(i) What is the writer’s view of how older people judge teenagers? Support your answer with reference to the text.","(ii) Identify two features of persuasive writing in the passage and explain how each is effective.","(iii) Do you agree with the writer’s final point? Write a response of 150–200 words, referring to the text and your own experience."],marks:[15,15,20]},
  {id:"eh12",kind:"en_parts",paper:1,max:50,label:"Paper 1 · Question A · 15 + 15 + 20",case:CASE_E3,title:"Read the text and answer the questions.",pts:["(i) What is the speaker asking the audience to do? Explain with reference to the text.","(ii) Discuss how the speaker creates a personal, friendly tone.","(iii) Analyse the use of short sentences and repetition in the speech. How effective are they?"],marks:[15,15,20]},
  {id:"eh13",kind:"en_qb",paper:1,max:50,label:"Paper 1 · Question B · 50 marks",title:"Your school is producing a guide for first-year students. Write the introduction to the guide, offering advice on how to settle in and make the most of their time in school.",pts:[]},
  {id:"eh14",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks",title:"Write a feature article for a national newspaper on the importance of failure in a young person’s life.",pts:[]},
  {id:"eh15",kind:"en_single",paper:2,max:60,label:"Paper 2 · Single Text · 60 marks",title:"The Great Gatsby: “Gatsby is a character we admire and pity in equal measure.” Discuss this statement, supporting your answer with reference to the novel.",pts:[]},
  {id:"eh16",kind:"en_single",paper:2,max:60,label:"Paper 2 · Single Text · 60 marks",title:"Othello: Discuss how Shakespeare presents Desdemona as both strong and vulnerable, supporting your answer with reference to the play.",pts:[]},
  {id:"eh17",kind:"en_comparative",paper:2,max:70,label:"Paper 2 · Comparative · 70 marks",title:"Cultural Context: Compare how power is held and used in the worlds of at least two of the texts you studied.",pts:[]},
  {id:"eh18",kind:"en_comparative",paper:2,max:70,label:"Paper 2 · Comparative · 70 marks",title:"General Vision and Viewpoint: Compare the extent to which the endings of at least two texts you studied leave you hopeful or not.",pts:[]},
  {id:"eh19",kind:"en_poetry",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 50 marks",title:"“W. B. Yeats’s poetry moves between personal feeling and public events.” Discuss this statement, with reference to the poems by Yeats on your course.",pts:[]},
  {id:"eh20",kind:"en_parts",paper:2,max:20,label:"Paper 2 · Unseen Poetry · 10 + 10",case:UNSEEN,title:"Read the poem and answer the questions.",pts:["(a) What impression of the people at the bus stop do you get from the poem? Support your answer with reference to the poem.","(b) Choose one image from the poem that you find effective and explain why."],marks:[10,10]}
);
OL.tasks.push(
  {id:"eo9",kind:"en_parts",paper:1,max:50,label:"Paper 1 · Question A · 10 + 10 + 30",case:CASE_E2,title:"Read the text and answer the questions.",pts:["(i) Name two things that older people complained about in the past, according to the text.","(ii) What did those teenagers go on to do?","(iii) Do you think adults are fair to teenagers today? Give reasons for your answer."],marks:[10,10,30]},
  {id:"eo10",kind:"en_parts",paper:1,max:50,label:"Paper 1 · Question A · 10 + 10 + 30",case:CASE_E3,title:"Read the text and answer the questions.",pts:["(i) What does the speaker want the audience to do?","(ii) Find two things the speaker says you should notice or leave behind.","(iii) Write a short talk of your own (about 150 words) encouraging your class to try a new habit."],marks:[10,10,30]},
  {id:"eo11",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks",title:"Write a personal essay about a time you were proud of yourself.",pts:[]},
  {id:"eo12",kind:"en_comp",paper:1,max:100,label:"Paper 1 · Composing · 100 marks",title:"Write a short story that begins with the words: ‘The phone buzzed at three in the morning.’",pts:[]},
  {id:"eo13",kind:"en_qb",paper:1,max:50,label:"Paper 1 · Question B · 50 marks",title:"Write a review of a film, series or game you enjoyed recently, for your school website.",pts:[]},
  {id:"eo14",kind:"en_parts",paper:2,max:60,label:"Paper 2 · Single Text · 10 + 20 + 30",title:"Answer on the single text you studied.",pts:["(a) Describe the opening of the text.","(b) Choose one character who changes during the text. How do they change?","(c) Describe a moment in the text that you found tense or exciting, and explain why."],marks:[10,20,30]},
  {id:"eo15",kind:"en_parts",paper:2,max:60,label:"Paper 2 · Single Text · 10 + 20 + 30",title:"Answer on the single text you studied.",pts:["(a) Where and when is the text set?","(b) Describe an important relationship in the text.","(c) Would you recommend this text to a friend? Give reasons, with reference to the text."],marks:[10,20,30]},
  {id:"eo16",kind:"en_comparative",paper:2,max:70,label:"Paper 2 · Comparative · 70 marks",title:"Theme: Compare how an important theme is shown in two of the texts you studied.",pts:[]},
  {id:"eo17",kind:"en_comparative",paper:2,max:70,label:"Paper 2 · Comparative · 70 marks",title:"Social Setting: Compare what it would be like to live in the world of two of the texts you studied.",pts:[]},
  {id:"eo18",kind:"en_parts",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 10 + 10 + 30",title:"Answer on ONE poem from your Ordinary Level course.",pts:["(a) Who or what is the poem about?","(b) Choose two lines you like and explain why.","(c) How does the poem make you feel? Give reasons, with reference to the poem."],marks:[10,10,30]},
  {id:"eo19",kind:"en_parts",paper:2,max:50,label:"Paper 2 · Prescribed Poetry · 10 + 10 + 30",title:"Answer on ONE poem from your Ordinary Level course that deals with family, love or loss.",pts:["(a) What happens in the poem?","(b) What words or images best show the poet’s feelings? Explain.","(c) Why do you think this poem is still read today? Give reasons, with reference to the poem."],marks:[10,10,30]},
  {id:"eo20",kind:"en_parts",paper:2,max:20,label:"Paper 2 · Unseen Poetry · 10 + 10",case:UNSEEN,title:"Read the poem and answer the questions.",pts:["(a) Describe the scene at the bus stop in your own words.","(b) What do you think the poet means by ‘lit up like a kitchen’? Explain."],marks:[10,10]}
);
HL.store = "loops_lchl_en_v1"; OL.store = "loops_lcol_en_v1";
LOOPS_SUBJECTS.en = { name: "English", flag: "📖", native: "English", colour: "en", OL, HL };
})();
