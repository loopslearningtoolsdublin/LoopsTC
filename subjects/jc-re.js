// ═══════════════════════════════════════════════
// LOOPS · JUNIOR CYCLE RELIGIOUS EDUCATION — first version (4 Nov 2026)
// Styled on the SEC Junior Cycle papers (see the JC research in the Loops project).
// Warm-ups reuse the easier Leaving Cert Ordinary items where they fit; JC-specific banks grow next.
// ═══════════════════════════════════════════════
(function(){
const JC_GRADES = [["Distinction",85],["Higher Merit",70],["Merit",55],["Achieved",40],["Partially Achieved",20],["Not Graded",0]].map(([g,min]) => ({g,min}));
const TF = ["True","False"];
const ITEMS = [
  {id:"r1",skill:"World religions",type:"match",q:"Match the religion to its sacred text.",pairs:[["Christianity","The Bible"],["Islam","The Qur’an"],["Judaism","The Torah"],["Sikhism","The Guru Granth Sahib"]]},
  {id:"r2",skill:"World religions",type:"match",q:"Match the religion to its place of worship.",pairs:[["Christianity","Church"],["Islam","Mosque"],["Judaism","Synagogue"],["Hinduism","Mandir"]]},
  {id:"r3",skill:"World religions",type:"match",q:"Match the founder or key figure.",pairs:[["Christianity","Jesus"],["Islam","Muhammad"],["Buddhism","Siddhartha Gautama"],["Sikhism","Guru Nanak"]]},
  {id:"r4",skill:"World religions",type:"mcq",q:"A monotheistic religion believes in…",opts:["One God","Many gods","No god","Nature spirits only"],a:0},
  {id:"r5",skill:"World religions",type:"mcq",q:"The Five Pillars belong to…",opts:["Islam","Hinduism","Christianity","Buddhism"],a:0},
  {id:"r6",skill:"World religions",type:"mcq",q:"Passover (Pesach) remembers…",opts:["The Exodus from Egypt","The birth of Jesus","The Buddha’s enlightenment","The first Guru"],a:0},
  {id:"r7",skill:"World religions",type:"mcq",q:"Ramadan is a month of…",opts:["Fasting from dawn to sunset","Feasting","Pilgrimage to Rome","Silence"],a:0},
  {id:"r8",skill:"World religions",type:"mcq",q:"The Four Noble Truths are central to…",opts:["Buddhism","Judaism","Islam","Christianity"],a:0},
  {id:"r9",skill:"Christianity",type:"mcq",q:"The first four books of the New Testament are called…",opts:["The Gospels","The Psalms","The Epistles","The Prophets"],a:0},
  {id:"r10",skill:"Christianity",type:"mcq",q:"Easter celebrates…",opts:["The resurrection of Jesus","The birth of Jesus","Pentecost","The Last Supper"],a:0},
  {id:"r11",skill:"Christianity",type:"mcq",q:"A parable is…",opts:["A story with a moral or religious lesson","A prayer","A hymn","A type of church"],a:0},
  {id:"r12",skill:"Christianity",type:"mcq",q:"Saint Patrick is remembered for…",opts:["Spreading Christianity in Ireland","Writing the Qur’an","Founding Buddhism","Building the pyramids"],a:0},
  {id:"r13",skill:"Christianity",type:"order",q:"Put the Christian seasons in order through the year, starting with Advent.",words:["Advent","Christmas","Lent","Easter","Pentecost"]},
  {id:"r14",skill:"Ethics",type:"mcq",q:"Conscience is…",opts:["An inner sense of right and wrong","A religious building","A sacred text","A type of prayer"],a:0},
  {id:"r15",skill:"Ethics",type:"mcq",q:"The Golden Rule says…",opts:["Treat others as you would like to be treated","Always obey the strongest","Look after yourself first","Never change your mind"],a:0},
  {id:"r16",skill:"Ethics",type:"mcq",q:"Stewardship means…",opts:["Caring for the earth and its resources","Owning land","Leading a church","Fasting"],a:0},
  {id:"r17",skill:"Ethics",type:"match",q:"Match the term.",pairs:[["Morality","Ideas of right and wrong"],["Justice","Fairness for all"],["Prejudice","Judging before knowing"],["Tolerance","Respecting difference"]]},
  {id:"r18",skill:"Exploring questions",type:"mcq",q:"Agnosticism is the view that…",opts:["We cannot know whether God exists","God definitely exists","God definitely does not exist","There are many gods"],a:0},
  {id:"r19",skill:"Exploring questions",type:"mcq",q:"A ritual is…",opts:["A ceremony with set actions and words","A holy book","A building","A founder"],a:0},
  {id:"r20",skill:"Exploring questions",type:"mcq",q:"A pilgrimage is…",opts:["A journey to a holy place","A fast","A song","A prayer bead"],a:0},
  {id:"r21",skill:"Exploring questions",type:"mcq",q:"True or false: The Junior Cycle RE exam marks how religious you are.",opts:TF,fixed:true,a:1,why:"Never. It marks knowledge and understanding only."},
  {id:"r22",skill:"World religions",type:"short",q:"Name the holy city that Muslims travel to on Hajj.",a:["mecca","makkah"]}
];
const CL = {
  id:"", builtin:true, title:"Junior Cycle Religious Education", subject:"Religious Education", cycle:"JC", level:"CL",
  source:"Styled on the SEC Junior Cycle RE paper (common level, 360 marks, 3 sections). Personal faith is never assessed.", gradeBands: JC_GRADES, texts:{},
  items: ITEMS,
  tasks: [
    {id:"jre1",kind:"jc_re",section:"Section A",max:20,label:"Short questions · 20 marks",title:"Answer all parts.",pts:["(a) Name two world religions and the sacred text of each.","(b) Explain what is meant by a ‘ritual’ and give one example."],marks:[10,10]},
    {id:"jre2",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Choose ONE world religion you studied.",pts:["(a) Describe one important festival in this religion.","(b) Explain why this festival is important to followers.","(c) Explain how the festival connects to the religion’s beliefs."],marks:[8,10,12]},
    {id:"jre3",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Ethics.",pts:["(a) What is conscience?","(b) Describe a moral decision a young person might face.","(c) Explain how a religious or non-religious person might use their values to make this decision."],marks:[6,10,14]},
    {id:"jre4",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Stewardship and the environment.",pts:["(a) Explain what stewardship means.","(b) Describe how one religion teaches care for the earth.","(c) Suggest two ways a school community could put stewardship into action."],marks:[6,12,12]},
    {id:"jre5",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Founders and leaders.",pts:["(a) Name the founder or key figure of one world religion.","(b) Describe two events from their life.","(c) Explain how their teaching still influences followers today."],marks:[4,12,14]}
  ],
  store: "loops_jc_re_v1"
};
LOOPS_SUBJECTS.jc_re = { name: "Religious Education", flag: "🕊️", colour: "art", CL };
// ── Towards 20 marked questions and 40+ warm-ups (4 Nov 2026) ──
LOOPS_SUBJECTS.jc_re.CL.items.push(
  {id:"r23",skill:"World religions",type:"mcq",q:"Ramadan is a month of fasting in…",opts:["Islam", "Hinduism", "Judaism", "Buddhism"],a:0},
  {id:"r24",skill:"World religions",type:"mcq",q:"Diwali, the festival of lights, is celebrated in…",opts:["Hinduism", "Judaism", "Islam", "Christianity"],a:0},
  {id:"r25",skill:"World religions",type:"mcq",q:"The Buddha taught the Four Noble Truths and the…",opts:["Eightfold Path", "Ten Commandments", "Five Pillars", "Five Ks"],a:0},
  {id:"r26",skill:"World religions",type:"mcq",q:"The Five Ks are worn by members of…",opts:["Sikhism", "Islam", "Buddhism", "Judaism"],a:0},
  {id:"r27",skill:"World religions",type:"mcq",q:"A pilgrimage is…",opts:["A journey to a sacred place", "A daily prayer", "A religious meal", "A holy book"],a:0},
  {id:"r28",skill:"World religions",type:"match",q:"Match the religion to a place of pilgrimage.",pairs:[["Islam", "Mecca"], ["Catholic Christianity in Ireland", "Knock"], ["Hinduism", "Varanasi"], ["Sikhism", "Amritsar"]]},
  {id:"r29",skill:"Christianity",type:"mcq",q:"The first four books of the New Testament are called the…",opts:["Gospels", "Psalms", "Letters", "Prophets"],a:0},
  {id:"r30",skill:"Christianity",type:"mcq",q:"Easter celebrates…",opts:["The Resurrection of Jesus", "The birth of Jesus", "The coming of the Holy Spirit", "The Last Supper only"],a:0},
  {id:"r31",skill:"Christianity",type:"mcq",q:"Pentecost remembers…",opts:["The coming of the Holy Spirit on the apostles", "The birth of Jesus", "The Exodus", "The creation of the world"],a:0},
  {id:"r32",skill:"Christianity",type:"mcq",q:"The sacraments of initiation are…",opts:["Baptism, Confirmation and Eucharist", "Marriage, Holy Orders and Reconciliation", "Christmas and Easter", "Advent and Lent"],a:0},
  {id:"r33",skill:"Christianity",type:"short",q:"What name is given to the forty days before Easter?",a:["lent"]},
  {id:"r34",skill:"Ethics",type:"mcq",q:"A moral dilemma is…",opts:["A situation where you must choose between two difficult options", "A rule of grammar", "A type of prayer", "A festival"],a:0},
  {id:"r35",skill:"Ethics",type:"mcq",q:"The Golden Rule says…",opts:["Treat others as you would like to be treated", "Always obey the strongest", "Never share", "Look after yourself first"],a:0},
  {id:"r36",skill:"Ethics",type:"mcq",q:"Human rights belong to…",opts:["Every person, simply because they are human", "Only adults", "Only citizens of rich countries", "Only religious people"],a:0},
  {id:"r37",skill:"Exploring questions",type:"mcq",q:"An atheist believes that…",opts:["There is no God", "There is one God", "There are many gods", "We cannot know whether God exists"],a:0},
  {id:"r38",skill:"Exploring questions",type:"mcq",q:"An agnostic believes that…",opts:["We cannot know whether God exists", "There is no God", "There is one God", "There are many gods"],a:0},
  {id:"r39",skill:"Exploring questions",type:"mcq",q:"Which of these is a ‘big question’ that religions try to answer?",opts:["What happens after we die?", "What is 7 × 8?", "What time is the bus?", "What is the capital of France?"],a:0},
  {id:"r40",skill:"Exploring questions",type:"match",q:"Match the term to its meaning.",pairs:[["Prayer", "Communicating with God"], ["Worship", "Showing honour and praise to God"], ["Ritual", "An action repeated in a set way"], ["Symbol", "Something that stands for something else"]]}
);
LOOPS_SUBJECTS.jc_re.CL.tasks.push(
  {id:"jre6",kind:"jc_re",section:"Section A",max:20,label:"Short questions · 20 marks",title:"Answer all parts.",pts:["(a) What is a pilgrimage? Name one place of pilgrimage.", "(b) Name two of the Five Pillars of Islam."],marks:[10, 10]},
  {id:"jre7",kind:"jc_re",section:"Section A",max:20,label:"Short questions · 20 marks",title:"Answer all parts.",pts:["(a) Explain the difference between an atheist and an agnostic.", "(b) Name a symbol used in a religion you studied and explain its meaning."],marks:[10, 10]},
  {id:"jre8",kind:"jc_re",section:"Section A",max:20,label:"Short questions · 20 marks",title:"Answer all parts.",pts:["(a) What is a sacrament? Name two.", "(b) What is meant by ‘the Golden Rule’?"],marks:[10, 10]},
  {id:"jre9",kind:"jc_re",section:"Section A",max:20,label:"Short questions · 20 marks",title:"Answer all parts.",pts:["(a) Name two Christian denominations in Ireland.", "(b) Explain what ‘ecumenism’ means."],marks:[10, 10]},
  {id:"jre10",kind:"jc_re",section:"Section A",max:20,label:"Short questions · 20 marks",title:"Answer all parts.",pts:["(a) What is a moral dilemma?", "(b) Name one human right and explain why it matters."],marks:[10, 10]},
  {id:"jre11",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Prayer and worship.",pts:["(a) Describe two different forms of prayer.", "(b) Describe how members of one religion worship together.", "(c) Explain why prayer is important to many believers."],marks:[8, 10, 12]},
  {id:"jre12",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Sacred texts.",pts:["(a) Name the sacred text of one world religion and describe how it is organised.", "(b) Explain how believers use this text in their daily lives.", "(c) Explain why sacred texts are treated with respect."],marks:[8, 10, 12]},
  {id:"jre13",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Jesus of Nazareth.",pts:["(a) Describe the political and religious situation in Palestine at the time of Jesus.", "(b) Describe one parable Jesus told and explain its message.", "(c) Explain why Jesus’ teaching challenged people at the time."],marks:[8, 10, 12]},
  {id:"jre14",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Rites of passage.",pts:["(a) What is a rite of passage?", "(b) Describe a rite of passage in one religion you studied.", "(c) Explain why rites of passage matter to individuals and communities."],marks:[6, 12, 12]},
  {id:"jre15",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Religion in Ireland today.",pts:["(a) Name two ways religion is visible in Irish society.", "(b) Describe how religious practice in Ireland has changed in recent decades.", "(c) Suggest reasons for these changes."],marks:[6, 12, 12]},
  {id:"jre16",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Justice and peace.",pts:["(a) What is meant by justice?", "(b) Describe the work of a person or organisation that works for justice.", "(c) Explain how their work is inspired by their beliefs or values."],marks:[6, 12, 12]},
  {id:"jre17",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Life and death.",pts:["(a) Name one ‘big question’ people ask about life.", "(b) Describe what one religion teaches about life after death.", "(c) Explain how this belief might affect the way a person lives."],marks:[6, 12, 12]},
  {id:"jre18",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Religious leaders today.",pts:["(a) Name a religious leader in the world today.", "(b) Describe two parts of this person’s role.", "(c) Explain how a religious leader can influence society."],marks:[4, 12, 14]},
  {id:"jre19",kind:"jc_re",section:"Section B",max:30,label:"Explain · 30 marks",title:"Sacred places.",pts:["(a) Name a sacred place in a religion you studied.", "(b) Describe what believers do there.", "(c) Explain why the place is sacred to them."],marks:[6, 12, 12]},
  {id:"jre20",kind:"jc_re",section:"Section C",max:30,label:"Explain · 30 marks",title:"Relationships and respect.",pts:["(a) Give two qualities of a good friendship.", "(b) Describe how one religion teaches people to treat others.", "(c) Explain how respect for others can be shown in a school community."],marks:[6, 12, 12]}
);
})();
