// ═══════════════════════════════════════════════
// LOOPS · LC FRENCH — Ordinary + Higher
// Original material in the style and format of the SEC 2025 papers.
// Edit freely: texts, quick-fire items, writing tasks.
// Item: {id, skill, type:"mcq"|"short", q, opts?, a, why?, text?, lenient?}
// Task: {id, kind (marking scheme in the Worker), label, title, pts, max}
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));

// ───────────── ORDINARY ─────────────
const OL = {
  id:"", builtin:true, title:"LC French · Ordinary", subject:"French", cycle:"LC", level:"OL",
  source:"Styled on the SEC 2025 Ordinary Level paper and marking scheme", gradeBands: OL_GRADES,
  texts: {
    f1: "Bonjour ! Je m’appelle Chloé, j’ai seize ans et j’habite à Lyon avec ma mère et mes deux frères. Le week-end, je travaille dans un café près de la gare. J’aime ce travail parce que je rencontre beaucoup de touristes, mais je dois me lever à six heures et demie le samedi. Avec l’argent que je gagne, je veux acheter un scooter.",
    f2: "La Fête de la musique aura lieu le 21 juin dans toutes les villes de France. Les concerts sont gratuits et commencent à 18 heures. Cette année, à Nantes, il y aura un concert spécial pour les jeunes sur la place Royale. N’oubliez pas : il est interdit d’apporter des bouteilles en verre.",
    f3: "CAMPING LES PINS – BIARRITZ. À 200 mètres de la plage. Piscine chauffée, location de vélos, mini-golf. Ouvert d’avril à octobre. Animaux acceptés. Réservation obligatoire en juillet et août. Tél. : 05 59 23 41 18"
  },
  items: [
    {id:"fr1",skill:"Reading",type:"mcq",text:"f1",q:"Where does Chloé work at weekends?",opts:["In a café near the station","In a shop in the town centre","In a hotel","In the station ticket office"],a:0},
    {id:"fr2",skill:"Reading",type:"mcq",text:"f1",q:"Why does she like the job?",opts:["She meets lots of tourists","The pay is very good","It is beside her house","She gets free food"],a:0},
    {id:"fr3",skill:"Reading",type:"mcq",text:"f1",q:"What does she want to buy with her money?",opts:["A scooter","A phone","A car","A bike"],a:0},
    {id:"fr4",skill:"Reading",type:"mcq",text:"f2",q:"What time do the concerts start?",opts:["6pm","8pm","6am","Midday"],a:0},
    {id:"fr5",skill:"Reading",type:"mcq",text:"f2",q:"What is forbidden?",opts:["Bringing glass bottles","Bringing dogs","Taking photos","Arriving after 6pm"],a:0},
    {id:"fr6",skill:"Reading",type:"mcq",text:"f3",q:"How far is the campsite from the beach?",opts:["200 metres","2 kilometres","20 metres","2,000 metres"],a:0},
    {id:"fr7",skill:"Reading",type:"mcq",text:"f3",q:"When must you book?",opts:["In July and August","From April to October","At weekends","Only for groups"],a:0},
    {id:"fr8",skill:"Reading",type:"mcq",text:"f3",q:"Which of these does the campsite offer?",opts:["Bike hire","A restaurant","Horse riding","A cinema"],a:0},
    {id:"ff1",skill:"Find it",type:"short",lenient:true,text:"f1",q:"Find the French for: “I have to get up”",a:["je dois me lever"]},
    {id:"ff2",skill:"Find it",type:"short",lenient:true,text:"f1",q:"Find the French for: “with my mother”",a:["avec ma mère"]},
    {id:"ff3",skill:"Find it",type:"short",lenient:true,text:"f2",q:"Find the French for: “the concerts are free”",a:["les concerts sont gratuits"]},
    {id:"ff4",skill:"Find it",type:"short",lenient:true,text:"f3",q:"Find the French for: “animals accepted”",a:["animaux acceptés"]},
    {id:"fg1",skill:"Verbs",type:"mcq",q:"Hier, je ___ au cinéma avec mes amis.",opts:["suis allé","vais","irai","allais"],a:0,why:"Hier = yesterday → passé composé. Aller takes être."},
    {id:"fg2",skill:"Verbs",type:"mcq",q:"Demain, nous allons ___ à la plage.",opts:["aller","allons","allé","allions"],a:0,why:"Aller + infinitive for the near future."},
    {id:"fg3",skill:"Verbs",type:"mcq",q:"Ma sœur ___ seize ans.",opts:["a","est","fait","va"],a:0,why:"Age uses avoir: elle a seize ans."},
    {id:"fg4",skill:"Verbs",type:"mcq",q:"Le samedi, nous ___ au tennis.",opts:["jouons","jouez","jouent","joue"],a:0,why:"Nous → -ons."},
    {id:"fg5",skill:"Verbs",type:"mcq",q:"J’aime beaucoup ___ musique.",opts:["la","le","les","un"],a:0,why:"Musique is feminine: la musique."},
    {id:"fg6",skill:"Verbs",type:"mcq",q:"Ma mère est très ___ .",opts:["contente","content","contents","contentes"],a:0,why:"The adjective agrees: ma mère → contente."},
    {id:"fw1",skill:"Writing",type:"short",q:"Say it in French: “Thank you for your letter.”",a:["merci pour ta lettre","merci de ta lettre","merci beaucoup pour ta lettre"]},
    {id:"fw2",skill:"Writing",type:"short",q:"Say it in French: “I am seventeen years old.”",a:["j’ai dix-sept ans","j’ai dix sept ans"]},
    {id:"fw3",skill:"Writing",type:"short",q:"Say it in French: “Yesterday I played football.”",a:["hier j’ai joué au foot","hier j’ai joué au football","hier, j’ai joué au foot"]},
    {id:"fw4",skill:"Writing",type:"short",q:"Say it in French: “I’m sorry but I can’t come.”",a:["je suis désolé mais je ne peux pas venir","je suis désolée mais je ne peux pas venir","désolé mais je ne peux pas venir","désolée mais je ne peux pas venir"]},
    {id:"fw5",skill:"Writing",type:"short",q:"Say it in French: “I will be back at eight o’clock.”",a:["je serai de retour à huit heures","je rentrerai à huit heures","je reviendrai à huit heures"]},
    {id:"fw6",skill:"Writing",type:"short",q:"Sign off a postcard to a friend (one common way).",a:["à bientôt","grosses bises","bisous","gros bisous","amitiés","bises","à plus"]},
    {id:"fw7",skill:"Writing",type:"short",q:"Say it in French: “The weather is nice.”",a:["il fait beau"]},
    {id:"fw8",skill:"Writing",type:"short",q:"Say it in French: “I went to the beach.”",a:["je suis allé à la plage","je suis allée à la plage"]},
    {id:"fw9",skill:"Writing",type:"short",q:"Say it in French: “Dear Marc,” (start of a letter)",a:["cher marc"]},
    {id:"fw10",skill:"Writing",type:"short",q:"Say it in French: “I can’t wait to see you.”",a:["j’ai hâte de te voir","je suis impatient de te voir","je suis impatiente de te voir"]}
  ],
  tasks: [
    {id:"fom1",kind:"fr_ol_message",max:30,label:"Message · 3 points × 5 + language 15",title:"You are staying with a French family. Leave a message for Madame Durand. Mention THREE of the following:",pts:["you have gone into town with your friend and you will be back at 7pm","you have borrowed her bike and you will be careful with it","your mother phoned and she will call back tomorrow","you have bought bread and milk for breakfast","you would like to cook an Irish dinner on Saturday"]},
    {id:"fop1",kind:"fr_ol_postcard",max:30,label:"Postcard · 3 points × 5 + language 15",title:"You are on holiday in France. Write a postcard to your French friend Léa. Mention THREE of the following:",pts:["where you are staying and who you are with","what the weather is like and what you do every day","what you did yesterday","something you bought and who it is for","when you are going home and what you will do then"]},
    {id:"fod1",kind:"fr_ol_diary",max:30,label:"Diary · 3 points × 5 + language 15",title:"Write a diary entry in French. Mention THREE of the following:",pts:["you had a job interview today and how you felt","what you wore and how you got there","two questions they asked you","what you will do if you get the job","your plans for this evening"]},
    {id:"fof1",kind:"fr_ol_formal",max:30,label:"Formal letter · format 6 + 3 points × 4 + language 12",title:"You want to work in a campsite in France this summer. Write a formal letter to the manager, Monsieur Leroy, Camping Les Pins, 12 avenue de la Mer, 64200 Biarritz. Mention THREE of the following:",pts:["where you saw the advertisement and which job you want","your age and why you would be good at the job","the dates you are available","your experience and the languages you speak","ask about accommodation and pay"]}
  ]
};

// ───────────── HIGHER ─────────────
const HL = {
  id:"", builtin:true, title:"LC French · Higher", subject:"French", cycle:"LC", level:"HL",
  source:"Styled on the SEC 2025 Higher Level paper and marking scheme", gradeBands: HL_GRADES,
  texts: {
    h1: "Depuis la rentrée, le téléphone portable est interdit dans tous les collèges du département. Les élèves doivent le laisser dans un casier à l’entrée. Au début, beaucoup d’adolescents étaient furieux. « Je pensais que je ne survivrais pas une journée sans mon portable », avoue Inès, 14 ans. Pourtant, après quelques semaines, les professeurs constatent que la cour de récréation est plus animée : on joue au ballon, on discute, on rit. Certains parents restent cependant inquiets, car ils ne peuvent plus joindre leurs enfants en cas d’urgence.",
    h2: "Ce matin-là, la gare était presque déserte. Mon père a posé ma valise sur le quai sans rien dire. Il évitait mon regard, comme s’il avait peur de pleurer. Quand le train est arrivé, il m’a serrée dans ses bras si fort que j’ai failli perdre l’équilibre. « Écris-nous », a-t-il murmuré. Je suis montée dans le wagon et, à travers la vitre sale, je l’ai vu devenir de plus en plus petit."
  },
  items: [
    {id:"hr1",skill:"Reading",type:"mcq",text:"h1",q:"Qu’est-ce que les élèves doivent faire avec leur portable ?",opts:["Le laisser dans un casier à l’entrée","L’éteindre pendant les cours","Le donner aux professeurs","Le laisser à la maison"],a:0},
    {id:"hr2",skill:"Reading",type:"mcq",text:"h1",q:"Comment Inès a-t-elle réagi au début ?",opts:["Elle croyait qu’elle ne pourrait pas vivre une journée sans","Elle était soulagée","Elle a changé de collège","Elle a acheté un deuxième portable"],a:0},
    {id:"hr3",skill:"Reading",type:"mcq",text:"h1",q:"What change have the teachers noticed?",opts:["The yard is livelier: pupils play, chat and laugh","The yard is much quieter","There are more arguments","Pupils stay indoors at break"],a:0},
    {id:"hr4",skill:"Reading",type:"mcq",text:"h1",q:"Pourquoi certains parents restent-ils inquiets ?",opts:["Ils ne peuvent plus joindre leurs enfants en cas d’urgence","Les casiers coûtent trop cher","Leurs enfants jouent trop","Les professeurs sont trop stricts"],a:0},
    {id:"hr5",skill:"Reading",type:"mcq",text:"h2",q:"Comment sait-on que le père est ému ?",opts:["Il évite le regard de sa fille, comme s’il avait peur de pleurer","Il parle beaucoup","Il porte la valise","Il monte aussi dans le train"],a:0},
    {id:"hr6",skill:"Reading",type:"mcq",text:"h2",q:"What does the father ask as she leaves?",opts:["That she writes to them","That she phones every day","That she comes back soon","That she is careful"],a:0},
    {id:"hf1",skill:"Find it",type:"short",text:"h1",q:"Relevez un verbe au conditionnel.",a:["survivrais","je ne survivrais pas"]},
    {id:"hf2",skill:"Find it",type:"short",lenient:true,text:"h1",q:"Trouvez le mot qui veut dire « remarquent ».",a:["constatent"]},
    {id:"hf3",skill:"Find it",type:"short",lenient:true,text:"h2",q:"Trouvez l’expression qui veut dire « j’ai presque perdu l’équilibre ».",a:["j’ai failli perdre l’équilibre","failli perdre l’équilibre"]},
    {id:"hf4",skill:"Find it",type:"short",lenient:true,text:"h2",q:"Relevez un verbe à l’imparfait.",a:["était","évitait","avait"]},
    {id:"hg1",skill:"Grammar",type:"mcq",q:"Il faut que tu ___ tes devoirs.",opts:["fasses","fais","feras","faisais"],a:0,why:"Il faut que + subjonctif."},
    {id:"hg2",skill:"Grammar",type:"mcq",q:"Si j’avais le temps, je ___ plus de sport.",opts:["ferais","ferai","fais","fasse"],a:0,why:"Si + imparfait → conditionnel."},
    {id:"hg3",skill:"Grammar",type:"mcq",q:"Bien qu’il ___ malade, il est venu.",opts:["soit","est","était","sera"],a:0,why:"Bien que + subjonctif."},
    {id:"hg4",skill:"Grammar",type:"mcq",q:"Les filles sont ___ hier soir.",opts:["sorties","sortis","sorti","sortie"],a:0,why:"Être verbs agree with the subject: les filles → sorties."},
    {id:"hg5",skill:"Grammar",type:"mcq",q:"J’ai décidé ___ apprendre l’espagnol.",opts:["d’","à","pour","par"],a:0,why:"Décider de + infinitive."},
    {id:"hg6",skill:"Grammar",type:"mcq",q:"Quand j’___ petit, j’habitais à Cork.",opts:["étais","ai été","serai","sois"],a:0,why:"Description in the past → imparfait."},
    {id:"hg7",skill:"Grammar",type:"mcq",q:"C’est le livre ___ je t’ai parlé.",opts:["dont","que","qui","où"],a:0,why:"Parler de → dont."},
    {id:"hg8",skill:"Grammar",type:"mcq",q:"Après ___ mangé, nous sommes sortis.",opts:["avoir","ayant","avons","avait"],a:0,why:"Après + avoir + past participle."},
    {id:"hw1",skill:"Writing",type:"short",q:"Say it in French: “In my opinion”",a:["à mon avis","selon moi","d’après moi","pour moi"]},
    {id:"hw2",skill:"Writing",type:"short",q:"Say it in French: “On the one hand…” (first half of the pair)",a:["d’un côté","d’une part"]},
    {id:"hw3",skill:"Writing",type:"short",q:"Say it in French: “Nowadays”",a:["de nos jours","aujourd’hui","actuellement","à notre époque"]},
    {id:"hw4",skill:"Writing",type:"short",q:"Say it in French: “It is important that young people sleep enough.”",a:["il est important que les jeunes dorment assez","il est important que les jeunes dorment suffisamment"]},
    {id:"hw5",skill:"Writing",type:"short",q:"Say it in French: “If I had money, I would travel.”",a:["si j’avais de l’argent, je voyagerais"]},
    {id:"hw6",skill:"Writing",type:"short",q:"Say it in French: “However”",a:["cependant","pourtant","toutefois","néanmoins"]},
    {id:"hw7",skill:"Writing",type:"short",q:"Say it in French: “To sum up”",a:["en conclusion","pour conclure","en résumé","bref"]},
    {id:"hw8",skill:"Writing",type:"short",q:"Say it in French: “I have been learning French for five years.”",a:["j’apprends le français depuis cinq ans","ça fait cinq ans que j’apprends le français","il y a cinq ans que j’apprends le français","j’étudie le français depuis cinq ans"]},
    {id:"hw9",skill:"Writing",type:"short",q:"Say it in French: “It’s not worth it.”",a:["ça ne vaut pas la peine","cela ne vaut pas la peine","ça ne vaut pas le coup"]},
    {id:"hw10",skill:"Writing",type:"short",q:"Say it in French: “I agree with the author.”",a:["je suis d’accord avec l’auteur"]}
  ],
  tasks: [
    {id:"fq1a",kind:"fr_hl_q1",max:60,label:"Q1 · Communication 30 + Language 30",title:"« Les réseaux sociaux rendent les jeunes plus seuls que jamais. » Qu’en pensez-vous ? (environ 90 mots)",pts:[]},
    {id:"fq2a",kind:"fr_hl_q2",max:40,label:"Q2–6 · Communication 20 + Language 20",title:"Journal intime : vous venez d’apprendre que vous avez réussi votre examen de conduite. Vous écrivez dans votre journal. (environ 75 mots)",pts:[]},
    {id:"fq1b",kind:"fr_hl_q1",max:60,label:"Q1 · Communication 30 + Language 30",title:"« Le Leaving Certificate met trop de pression sur les jeunes. » Êtes-vous d’accord ? (environ 90 mots)",pts:[]},
    {id:"fq2b",kind:"fr_hl_q2",max:40,label:"Q2–6 · Communication 20 + Language 20",title:"Vous passez l’été dans une famille française. Écrivez un e-mail à votre amie Julie : parlez de la famille, de ce que vous avez fait et de vos projets pour la semaine prochaine. (environ 75 mots)",pts:[]},
    {id:"fq1c",kind:"fr_hl_q1",max:60,label:"Q1 · Communication 30 + Language 30",title:"Inès pensait qu’elle ne survivrait pas une journée sans portable. Et vous ? Pourriez-vous vivre une semaine sans téléphone ? (environ 90 mots)",pts:[]},
    {id:"fq2c",kind:"fr_hl_q2",max:40,label:"Q2–6 · Communication 20 + Language 20",title:"« Le sport à l’école devrait être aussi important que les mathématiques. » Donnez votre réaction. (environ 75 mots)",pts:[]}
  ]
};

OL.items.push(
  {id:"fo1",skill:"Writing",type:"order",q:"Build it: “I go to school by bus.”",words:["Je","vais","au","collège","en","bus"]},
  {id:"fo2",skill:"Writing",type:"order",q:"Build it: “Last weekend I went to the cinema.”",words:["Le","week-end","dernier,","je","suis","allé","au","cinéma"]},
  {id:"fo3",skill:"Writing",type:"order",q:"Build it: “I would like to visit Paris.”",words:["Je","voudrais","visiter","Paris"]},
  {id:"fm1",skill:"Vocab",type:"match",q:"Match them up.",pairs:[["la gare","the station"],["la plage","the beach"],["le temps","the weather"],["les devoirs","homework"]]},
  {id:"fm2",skill:"Verbs",type:"match",q:"Match each verb to its meaning.",pairs:[["je suis allé","I went"],["je vais","I go"],["j’irai","I will go"],["j’irais","I would go"]]},
  {id:"ft1",skill:"Reading",type:"mcq",text:"f1",q:"True or false: Chloé lives in Lyon with her father.",opts:["True","False"],fixed:true,a:1,why:"With her mother and two brothers."},
  {id:"ft2",skill:"Reading",type:"mcq",text:"f2",q:"True or false: The concerts are free.",opts:["True","False"],fixed:true,a:0},
  {id:"ft3",skill:"Reading",type:"mcq",text:"f3",q:"True or false: Dogs are not allowed at the campsite.",opts:["True","False"],fixed:true,a:1,why:"Animaux acceptés: animals are welcome."}
);
HL.items.push(
  {id:"go1",skill:"Writing",type:"order",q:"Build it: “It is important that we protect the planet.”",words:["Il","est","important","que","nous","protégions","la","planète"]},
  {id:"go2",skill:"Writing",type:"order",q:"Build it: “If I had time, I would read more.”",words:["Si","j’avais","le","temps,","je","lirais","plus"]},
  {id:"go3",skill:"Writing",type:"order",q:"Build it: “Although it is raining, we are going out.”",words:["Bien","qu’il","pleuve,","nous","sortons"]},
  {id:"gm1",skill:"Vocab",type:"match",q:"Match the connectors.",pairs:[["cependant","however"],["de plus","furthermore"],["donc","therefore"],["malgré","despite"]]},
  {id:"gm2",skill:"Grammar",type:"match",q:"Match each form to its tense.",pairs:[["que je fasse","subjonctif"],["je ferais","conditionnel"],["je faisais","imparfait"],["j’ai fait","passé composé"]]},
  {id:"gt1",skill:"Reading",type:"mcq",text:"h1",q:"Vrai ou faux ? Les élèves gardent leur portable dans leur sac.",opts:["Vrai","Faux"],fixed:true,a:1,why:"Ils le laissent dans un casier à l’entrée."},
  {id:"gt2",skill:"Reading",type:"mcq",text:"h1",q:"Vrai ou faux ? Certains parents restent inquiets.",opts:["Vrai","Faux"],fixed:true,a:0},
  {id:"gt3",skill:"Reading",type:"mcq",text:"h2",q:"Vrai ou faux ? Le père a pleuré ouvertement sur le quai.",opts:["Vrai","Faux"],fixed:true,a:1,why:"Il évitait son regard, comme s’il avait peur de pleurer."}
);
LOOPS_SUBJECTS.fr = { name: "French", flag: "🇫🇷", colour: "fr", OL, HL };
})();
