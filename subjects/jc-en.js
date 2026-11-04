// ═══════════════════════════════════════════════
// LOOPS · JUNIOR CYCLE ENGLISH — first version (4 Nov 2026)
// Styled on the SEC Junior Cycle papers (see the JC research in the Loops project).
// Warm-ups reuse the easier Leaving Cert Ordinary items where they fit; JC-specific banks grow next.
// ═══════════════════════════════════════════════
(function(){
const JC_GRADES = [["Distinction",85],["Higher Merit",70],["Merit",55],["Achieved",40],["Partially Achieved",20],["Not Graded",0]].map(([g,min]) => ({g,min}));
const LCE = LOOPS_SUBJECTS.en.HL;
const ITEMS = LCE.items.filter(i => i.paper === 1).map(i => Object.assign({}, i, {paper: undefined})).concat([
  {id:"je1",skill:"Responding to texts",type:"mcq",q:"In a Junior Cycle answer on a character, the best approach is to…",opts:["Make a point, support it with a quotation or reference, and explain it","Retell the whole story","Describe the author’s life","List every character"],a:0},
  {id:"je2",skill:"Responding to texts",type:"mcq",q:"An answer on a text that is NOT on the prescribed list gets…",opts:["Half marks","Full marks","No marks at all","An extra bonus"],a:0},
  {id:"je3",skill:"Responding to texts",type:"mcq",q:"A theme is…",opts:["A big idea the text explores, like friendship or power","The setting","The main character’s name","The number of chapters"],a:0},
  {id:"je4",skill:"Responding to texts",type:"mcq",q:"In a play, a soliloquy is…",opts:["A character speaking their thoughts alone on stage","A song","A fight scene","The stage directions"],a:0},
  {id:"je5",skill:"Responding to texts",type:"mcq",q:"In film, a close-up shot is often used to…",opts:["Show a character’s emotion","Show the whole landscape","Show the credits","Speed up the plot"],a:0},
  {id:"je7",skill:"Responding to texts",type:"mcq",q:"A simile compares two things using…",opts:["‘like’ or ‘as’","a full stop","a question","rhyme"],a:0},
  {id:"je8",skill:"Responding to texts",type:"mcq",q:"Personification gives…",opts:["Human qualities to something that is not human","A list of facts","A rhyme at the end of each line","The time and place of a story"],a:0},
  {id:"je9",skill:"Responding to texts",type:"mcq",q:"The tone of a text is…",opts:["The attitude or mood the writer creates","The number of words","The title","The font size"],a:0},
  {id:"je10",skill:"Responding to texts",type:"mcq",q:"In functional writing, ‘register’ means…",opts:["Choosing language that suits the audience and purpose","Writing your name at the top","Using only long words","Writing in the past tense"],a:0},
  {id:"je11",skill:"Responding to texts",type:"match",q:"Match the persuasive technique to its example.",pairs:[["Rhetorical question","Isn’t it time we acted?"],["Rule of three","Faster, cheaper, better."],["Statistic","Eight out of ten students agree."],["Direct address","You can make a difference."]]},
  {id:"je6",skill:"Responding to texts",type:"match",q:"Match the term to its meaning.",pairs:[["Narrator","The voice telling the story"],["Setting","Where and when it happens"],["Climax","The turning point of highest tension"],["Resolution","How it ends"]]}
]);
const TEXT = LCE.texts.e1;
const mk = (lvl) => ({
  id:"", builtin:true, title:"Junior Cycle English · " + (lvl === "HL" ? "Higher" : "Ordinary"), subject:"English", cycle:"JC", level:lvl,
  source:"Styled on the SEC Junior Cycle English papers (180 marks, all compulsory, impression bands)", gradeBands: JC_GRADES, texts: LCE.texts,
  items: ITEMS,
  tasks: [
    {id:"jen1",kind:"jc_en",section:"Reading an unseen text",max:30,label:"Unseen text · 10 + 20 marks",case:TEXT,title:"Read the extract and answer.",pts:["What impression of the island do you get from the extract? Support your answer.","How does the writer’s attitude to her grandmother change? Explain with reference to the text."],marks:[10,20]},
    {id:"jen2",kind:"jc_en",section:"Studied texts",max:25,label:"Studied text · 25 marks",title:"Choose a character from a novel or play you studied. Explain how this character changes during the text, with reference to key moments.",pts:["Your answer"],marks:[25]},
    {id:"jen3",kind:"jc_en",section:"Studied texts",max:20,label:"Poetry · 20 marks",title:"Choose a poem you studied. What is the poet saying, and how does the language help to say it?",pts:["Your answer"],marks:[20]},
    {id:"jen4",kind:"jc_en",section:"Functional writing",max:20,label:"Functional writing · 20 marks",title:"Write a speech for your class proposing a person you admire as ‘Person of the Year’.",pts:["Your speech"],marks:[20]},
    {id:"jen5",kind:"jc_en",section:"Creative writing",max:25,label:"Creative writing · 25 marks",title:"Write a short story that begins: “The door was open, which was strange, because I always locked it.”",pts:["Your story"],marks:[25]},
    {id:"jen6",kind:"jc_en",section:"Language",max:15,label:"Critical appreciation of language · 15 marks",case:TEXT,title:"Read the extract again.",pts:["Choose two phrases that appeal to the senses. Explain why each is effective."],marks:[15]},
    {id:"jen7",kind:"jc_en",section:"Functional writing",max:20,label:"Functional writing · 20 marks",title:"Write a review of a film or series you enjoyed, for your school website.",pts:["Your review"],marks:[20]}
  ],
  store: "loops_jc_en_" + lvl + "_v1"
});
LOOPS_SUBJECTS.jc_en = { name: "English", flag: "📖", colour: "en", HL: mk("HL"), OL: mk("OL") };
// ── Towards 20 marked questions (4 Nov 2026) ──
const JTEXT_DARA = "TEXT: Dara counted the steps up to the stage: eleven. He had counted them every morning for three years, at assembly, never once imagining he would climb them. Now the hall had gone quiet, and two hundred faces were turned his way. His hands were damp. Somewhere at the back, his mother’s phone was already recording. He took the first step, then the second, and by the fifth he realised his legs had stopped shaking.";
const JPOEM = "UNSEEN POEM: First Frost\n\nThe field wakes white and stiff as starch.\nEach blade of grass has grown a coat.\nThe cattle breathe out little clouds\nand stamp, as if to warm the ground.\nBy ten the sun has paid its debt;\nthe white goes back to green, and wet.";
const EXTRA = [
  {id:"jen8",kind:"jc_en",section:"Reading an unseen text",max:30,label:"Unseen text · 10 + 20 marks",case:"TEXT: " + LCE.texts.e2,title:"Read the extract and answer.",pts:["What point is the writer making about how adults see teenagers?","Do you agree with the writer? Give reasons, with reference to the text and your own experience."],marks:[10,20]},
  {id:"jen9",kind:"jc_en",section:"Language",max:15,label:"Critical appreciation of language · 15 marks",case:"TEXT: " + LCE.texts.e3,title:"Read the speech.",pts:["Identify two techniques the speaker uses to persuade the audience, and explain how each one works."],marks:[15]},
  {id:"jen10",kind:"jc_en",section:"Creative writing",max:25,label:"Creative writing · 25 marks",title:"Write a personal essay about a place where you feel completely yourself.",pts:["Your essay"],marks:[25]},
  {id:"jen11",kind:"jc_en",section:"Creative writing",max:25,label:"Creative writing · 25 marks",title:"Write a short story in which the main character finds something they were not supposed to find.",pts:["Your story"],marks:[25]},
  {id:"jen12",kind:"jc_en",section:"Functional writing",max:20,label:"Functional writing · 20 marks",title:"Write a letter to your principal proposing one change that would improve your school.",pts:["Your letter"],marks:[20]},
  {id:"jen13",kind:"jc_en",section:"Functional writing",max:20,label:"Functional writing · 20 marks",title:"Write the text of a short talk for first years, giving them advice on settling into secondary school.",pts:["Your talk"],marks:[20]},
  {id:"jen14",kind:"jc_en",section:"Studied texts",max:25,label:"Studied text · 25 marks",title:"Choose a novel you studied. Describe a key moment and explain why it is important to the story as a whole.",pts:["Your answer"],marks:[25]},
  {id:"jen15",kind:"jc_en",section:"Studied texts",max:25,label:"Studied text · 25 marks",title:"Choose a play you studied. How does the playwright create tension in one scene? Refer closely to the text.",pts:["Your answer"],marks:[25]},
  {id:"jen16",kind:"jc_en",section:"Studied texts",max:25,label:"Poetry · 25 marks",title:"Choose two poems you studied that deal with a similar theme. Compare how each poet explores that theme.",pts:["Your answer"],marks:[25]},
  {id:"jen17",kind:"jc_en",section:"Studied texts",max:20,label:"Film · 20 marks",title:"Choose a film you studied. How does the director use camera, sound or music to make one scene memorable?",pts:["Your answer"],marks:[20]},
  {id:"jen18",kind:"jc_en",section:"Reading an unseen text",max:20,label:"Unseen poem · 10 + 10 marks",case:JPOEM,title:"Read the poem and answer.",pts:["What picture of the morning does the poet create?","Choose one image you found effective and explain why."],marks:[10,10]},
  {id:"jen19",kind:"jc_en",section:"Reading an unseen text",max:30,label:"Unseen text · 10 + 10 + 10 marks",case:JTEXT_DARA,title:"Read the extract and answer.",pts:["Why are the steps important to Dara?","How does the writer show Dara’s nerves?","What do you think happens next? Explain, with reference to the extract."],marks:[10,10,10]},
  {id:"jen20",kind:"jc_en",section:"Functional writing",max:20,label:"Functional writing · 20 marks",title:"Write a blog post about a hobby or interest, encouraging others to try it.",pts:["Your blog post"],marks:[20]}
];
["HL","OL"].forEach(l => EXTRA.forEach(t => LOOPS_SUBJECTS.jc_en[l].tasks.push(Object.assign({}, t))));

})();
