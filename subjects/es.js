// ═══════════════════════════════════════════════
// LOOPS · LC SPANISH — Ordinary + Higher
// Edit freely: texts, quick-fire items, writing tasks.
// Item: {id, skill, type:"mcq"|"short", q, opts?, a, why?, text?, lenient?}
// Task: {id, kind (marking scheme in the Worker), label, title, pts, max}
// ═══════════════════════════════════════════════
(function(){
// ═══════════════════════════════════════════════
// CONTENT — original, exam-style (LC OL Spanish)
// read = Section A style, answer in English
// find = Section A Q1 style, transcribe the Spanish (spelling not penalised)
// write = Section B building blocks (verbs must be right)
// ═══════════════════════════════════════════════
const TEXTS = {
  t1: "Me llamo Lucía y vivo en Sevilla con mis padres y mi hermano pequeño. Mi barrio es tranquilo, pero hay muchas tiendas y un parque enorme. Los sábados por la mañana trabajo en una panadería. Me gusta porque hablo con mucha gente, pero tengo que levantarme a las seis. ¡Qué sueño!",
  t2: "El año pasado mi clase fue de viaje a Madrid. Viajamos en tren y tardamos cuatro horas. Visitamos el Museo del Prado y el estadio Santiago Bernabéu. El último día llovió mucho y nos quedamos en el hotel jugando a las cartas. Fue el mejor viaje de mi vida.",
  t3: "SE BUSCA camarero/a para el verano en un restaurante de la playa en Valencia. Horario: de 18:00 a 23:00, cinco días a la semana. Es necesario hablar inglés. Comida gratis. Llamar al 963 41 22 08 o escribir a info@marazul.es",
  t4: "Querido Seán: ¿Qué tal? Te escribo para darte las gracias por el regalo. ¡Me encanta la camiseta de Dublín! Ayer celebré mi cumpleaños con mi familia y comimos paella. El verano que viene voy a ir a Irlanda. ¿Puedo quedarme en tu casa? Un abrazo, Pablo"
};

const ITEMS = [
  // READ (English answers, tap)
  {id:"r1",type:"read",text:"t1",q:"Where does Lucía work on Saturdays?",opts:["In a bakery","In a supermarket","In the park","In a school"],a:0},
  {id:"r2",type:"read",text:"t1",q:"Why does she like the job?",opts:["She talks to lots of people","The pay is good","It is beside her house","She gets free bread"],a:0},
  {id:"r3",type:"read",text:"t1",q:"What is the downside of the job?",opts:["She has to get up at six","Her boss is strict","It is far away","It is very noisy"],a:0},
  {id:"r4",type:"read",text:"t2",q:"How did the class travel to Madrid?",opts:["By train","By bus","By plane","By car"],a:0},
  {id:"r5",type:"read",text:"t2",q:"What happened on the last day?",opts:["It rained, so they stayed in the hotel","They missed the train home","They went to a football match","They got lost in the city"],a:0},
  {id:"r6",type:"read",text:"t3",q:"What are the working hours?",opts:["6pm to 11pm","6am to 11am","8pm to 1am","11am to 6pm"],a:0},
  {id:"r7",type:"read",text:"t3",q:"What is required for the job?",opts:["Speaking English","A driving licence","Two years’ experience","Your own uniform"],a:0},
  {id:"r8",type:"read",text:"t3",q:"What extra is offered?",opts:["Free food","Free accommodation","A bonus","A bike"],a:0},
  {id:"r9",type:"read",text:"t4",q:"Why is Pablo writing?",opts:["To thank Seán for a present","To invite Seán to a party","To apologise","To ask for money"],a:0},
  {id:"r10",type:"read",text:"t4",q:"How did Pablo celebrate his birthday?",opts:["He ate paella with his family","He went to a concert","He had a party at school","He went to the beach"],a:0},

  // FIND (transcribe from the text)
  {id:"f1",type:"find",text:"t1",q:"Find the Spanish for: “I have to get up”",a:["tengo que levantarme"]},
  {id:"f2",type:"find",text:"t1",q:"Find the Spanish for: “a huge park”",a:["un parque enorme","parque enorme"]},
  {id:"f3",type:"find",text:"t2",q:"Find the Spanish for: “we stayed”",a:["nos quedamos"]},
  {id:"f4",type:"find",text:"t2",q:"Find the Spanish for: “the best trip of my life”",a:["el mejor viaje de mi vida","mejor viaje de mi vida"]},
  {id:"f5",type:"find",text:"t3",q:"Find the Spanish for: “five days a week”",a:["cinco días a la semana"]},
  {id:"f6",type:"find",text:"t4",q:"Find the Spanish for: “I am writing to you to…”",a:["te escribo para"]},
  {id:"f7",type:"find",text:"t4",q:"Find the Spanish for: “Can I stay in your house?”",a:["puedo quedarme en tu casa"]},
  {id:"f8",type:"find",text:"t2",q:"Find the Spanish for: “it rained a lot”",a:["llovió mucho"]},

  // WRITE — verbs (tap)
  {id:"v1",type:"write",q:"Ayer ___ al cine con mis amigos.",opts:["fui","voy","iré","iba a"],a:0,why:"Ayer = yesterday → preterite: fui."},
  {id:"v2",type:"write",q:"Mañana ___ a mi abuela.",opts:["voy a visitar","visité","visitaba","he visitado"],a:0,why:"Mañana = future → voy a + infinitive."},
  {id:"v3",type:"write",q:"Me ___ mucho los deportes.",opts:["gustan","gusta","gusto","gustas"],a:0,why:"Los deportes is plural → gustan."},
  {id:"v4",type:"write",q:"Mi hermana ___ quince años.",opts:["tiene","es","está","hay"],a:0,why:"Age uses tener: tiene quince años."},
  {id:"v5",type:"write",q:"El año pasado ___ a España.",opts:["fuimos","vamos","iremos","vayamos"],a:0,why:"El año pasado = last year → fuimos."},
  {id:"v6",type:"write",q:"Cuando era pequeño, ___ en Cork.",opts:["vivía","viví","vivo","viviré"],a:0,why:"‘When I was small’ = ongoing past → imperfect: vivía."},

  // WRITE — say it in Spanish (typed, verbs must be right)
  {id:"w1",type:"write",q:"Say it in Spanish: “Thanks for your letter.”",a:["gracias por tu carta","muchas gracias por tu carta"]},
  {id:"w2",type:"write",q:"Say it in Spanish: “I am seventeen years old.”",a:["tengo diecisiete años"]},
  {id:"w3",type:"write",q:"Say it in Spanish: “Last weekend I went to the cinema.”",a:["el fin de semana pasado fui al cine"]},
  {id:"w4",type:"write",q:"Say it in Spanish: “I live in Dublin with my family.”",a:["vivo en Dublín con mi familia"]},
  {id:"w5",type:"write",q:"Say it in Spanish: “Next summer I am going to work.”",a:["el verano que viene voy a trabajar","el próximo verano voy a trabajar","el verano próximo voy a trabajar"]},
  {id:"w6",type:"write",q:"Say it in Spanish: “Write soon.”",a:["escribe pronto","escríbeme pronto"]},
  {id:"w7",type:"write",q:"Sign off a letter to a friend (one common way).",a:["un abrazo","un fuerte abrazo","besos","saludos","un beso","abrazos"]},
  {id:"w8",type:"write",q:"Say it in Spanish: “I’m sorry but I can’t come.”",a:["lo siento pero no puedo venir","lo siento pero no puedo ir"]},
  {id:"w9",type:"write",q:"Say it in Spanish: “I will be back at eight.”",a:["volveré a las ocho","vuelvo a las ocho","estaré de vuelta a las ocho"]},
  {id:"w10",type:"write",q:"Say it in Spanish: “Yesterday I played football.”",a:["ayer jugué al fútbol","ayer jugué fútbol"]},
  {id:"w11",type:"write",q:"Say it in Spanish: “Dear Ana,” (start of a letter)",a:["querida ana"]},
  {id:"w12",type:"write",q:"Say it in Spanish: “I want to study medicine.”",a:["quiero estudiar medicina"]},
  {id:"w13",type:"write",q:"Say it in Spanish: “It was great.”",a:["fue genial","fue estupendo","fue fenomenal","fue guay","fue increíble"]}
];

// Section B tasks — original, modelled on the OL paper format
const TASKS = {
  letter: {label:"Letter / E-mail · 5 points × 8 marks", list:[
    {title:"Your Spanish friend Lucía sent you a birthday present. Write an e-mail to her in which you:",pts:["thank her for the present","say how you celebrated your birthday","describe your plans for the summer","ask about her family","invite her to visit Ireland"]},
    {title:"Write a letter to your new Spanish pen-pal, Javier, in which you:",pts:["introduce yourself and your family","describe your school","say what you did last weekend","say what you will do after the Leaving Cert","ask him two questions about his life"]},
    {title:"You are going on an exchange to Spain. Write an e-mail to your host family in which you:",pts:["say when you will arrive and how you are travelling","say what food you like and do not like","describe your hobbies","say one place you would like to visit in Spain","ask what you should bring"]}
  ]},
  note: {label:"Note · 4 points × 5 marks", list:[
    {title:"You are staying with a Spanish family. Leave a note for Señora García in which you say:",pts:["you have gone into town with friends","you will be back at eight o’clock","you left your phone at home","she can ring your friend’s house if necessary"]},
    {title:"Leave a note for your Spanish friend Marta in which you say:",pts:["you cannot go to dinner tonight","why you cannot go","suggest another day","thank her for the invitation"]}
  ]},
  diary: {label:"Diary entry · 4 points × 5 marks", list:[
    {title:"Write a diary entry in which you say:",pts:["today was your first day in a summer job","describe the work you do","how you felt at the end of the day","what you will do tomorrow"]},
    {title:"Write a diary entry in which you say:",pts:["you went to a concert last night and who you went with","what the concert was like","something that went wrong","how you feel today"]}
  ]}
};

// The built-in Spanish OL set, expressed as a pack (same shape the co-op Pack Maker produces)
const SKILL_OF = {read:"Reading", find:"Find it"};
const BUILTIN = {
  id:"", builtin:true, title:"LC Spanish · Ordinary", subject:"Spanish", cycle:"LC", level:"OL",
  source:"Styled on the SEC 2025 Ordinary Level paper and marking scheme", texts:TEXTS,
  items: ITEMS.map(i => Object.assign({}, i, {
    type: i.opts ? "mcq" : "short",
    skill: SKILL_OF[i.type] || (i.opts ? "Verbs" : "Writing"),
    lenient: i.type === "find"
  })),
  tasks: [].concat(...Object.keys(TASKS).map(k => TASKS[k].list.map((t,n) => ({id:k+n, kind:k, label:TASKS[k].label, title:t.title, pts:t.pts})))),
  gradeBands:[["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}))
};
// ═══════════════════════════════════════════════
// HIGHER LEVEL — original, styled on the SEC 2025 HL paper
// ═══════════════════════════════════════════════
const BUILTIN_OL = BUILTIN;
const HL_TEXTS = {
  h1: "Cada vez más jóvenes españoles deciden tomarse un año sabático antes de empezar la universidad. Según un estudio reciente, el 18% de los estudiantes de bachillerato se plantea esta opción, frente al 7% hace una década. Lucía Moreno, de 19 años, pasó seis meses trabajando como voluntaria en una granja ecológica en Galicia. «Al principio mis padres temían que perdiera el ritmo de estudio, pero volví con las ideas mucho más claras», explica. Los expertos advierten, sin embargo, de que un año sin objetivos concretos puede convertirse en un año perdido.",
  h2: "Cuando bajé del autobús, el pueblo parecía dormido. Las persianas estaban cerradas y solo se oía el ladrido lejano de un perro. Mi abuela me esperaba en la plaza, apoyada en su bastón, con el mismo pañuelo azul que llevaba siempre. No nos habíamos visto en diez años. Me miró de arriba abajo y, sin decir nada, me cogió de la mano como si yo todavía fuera una niña."
};
const HL_ITEMS = [
  {id:"hr1",skill:"Reading",text:"h1",type:"mcq",q:"¿Qué ha cambiado en la última década?",opts:["Más estudiantes se plantean un año sabático","Menos jóvenes van a la universidad","Los padres prefieren el año sabático","El bachillerato dura un año más"],a:0},
  {id:"hr2",skill:"Reading",text:"h1",type:"mcq",q:"What did Lucía’s parents fear at first?",opts:["That she would lose the habit of studying","That she would not come back","That the farm was dangerous","That it would cost too much"],a:0},
  {id:"hr3",skill:"Reading",text:"h1",type:"mcq",q:"What warning do the experts give?",opts:["A year without concrete goals can become a wasted year","Gap years damage your health","Volunteering is badly paid","Universities refuse gap-year students"],a:0},
  {id:"hr4",skill:"Reading",text:"h2",type:"mcq",q:"How does the narrator show that the village was quiet?",opts:["The shutters were closed and only a distant dog barked","Everyone was at Mass","The bus was empty","It was raining heavily"],a:0},
  {id:"hr5",skill:"Reading",text:"h2",type:"mcq",q:"¿Cuánto tiempo hacía que no se veían?",opts:["Diez años","Diez meses","Dos años","No se conocían"],a:0},
  {id:"hr6",skill:"Reading",text:"h2",type:"mcq",q:"What does the grandmother’s final gesture suggest?",opts:["She still sees the narrator as a little girl","She is angry with the narrator","She needs help to walk","She does not recognise the narrator"],a:0},
  {id:"hf1",skill:"Find it",text:"h1",type:"short",q:"Busca en el texto un verbo en el imperfecto de subjuntivo.",a:["perdiera"]},
  {id:"hf2",skill:"Find it",text:"h1",type:"short",q:"Find the Spanish for: “however”",a:["sin embargo"],lenient:true},
  {id:"hf3",skill:"Find it",text:"h1",type:"short",q:"Find the phrase meaning “with much clearer ideas”",a:["con las ideas mucho más claras"],lenient:true},
  {id:"hf4",skill:"Find it",text:"h2",type:"short",q:"Busca en el texto un verbo en el pluscuamperfecto.",a:["habíamos visto","nos habíamos visto"]},
  {id:"hf5",skill:"Find it",text:"h2",type:"short",q:"Find the phrase meaning “from head to toe”",a:["de arriba abajo"],lenient:true},
  {id:"hg1",skill:"Grammar",type:"mcq",q:"Es importante que los jóvenes ___ más deporte.",opts:["hagan","hacen","harán","hicieron"],a:0,why:"Es importante que + subjunctive."},
  {id:"hg2",skill:"Grammar",type:"mcq",q:"Si tuviera dinero, ___ por todo el mundo.",opts:["viajaría","viajaré","viajo","viaje"],a:0,why:"Si + imperfect subjunctive → conditional."},
  {id:"hg3",skill:"Grammar",type:"mcq",q:"Cuando ___ a la universidad, estudiaré medicina.",opts:["vaya","voy","iré","fui"],a:0,why:"Cuando + a future event → present subjunctive."},
  {id:"hg4",skill:"Grammar",type:"mcq",q:"Mientras ___ la tele, sonó el teléfono.",opts:["veía","vi","veo","viera"],a:0,why:"Background action in the past → imperfect."},
  {id:"hg5",skill:"Grammar",type:"mcq",q:"Estudio mucho ___ sacar buenas notas.",opts:["para","por","de","a"],a:0,why:"Purpose (in order to) → para."},
  {id:"hg6",skill:"Grammar",type:"mcq",q:"Ojalá ___ buen tiempo mañana.",opts:["haga","hace","hará","hizo"],a:0,why:"Ojalá + subjunctive."},
  {id:"hg7",skill:"Grammar",type:"mcq",q:"Hoy mi hermano ___ muy cansado.",opts:["está","es","hay","tiene"],a:0,why:"Temporary state → estar."},
  {id:"hg8",skill:"Grammar",type:"mcq",q:"No creo que el gobierno ___ lo suficiente.",opts:["haga","hace","hará","ha hecho"],a:0,why:"No creo que + subjunctive."},
  {id:"hw1",skill:"Writing",type:"short",q:"Say it in Spanish: “In my opinion”",a:["en mi opinión","a mi parecer","desde mi punto de vista","a mi juicio"]},
  {id:"hw2",skill:"Writing",type:"short",q:"Say it in Spanish: “On the one hand…” (first half of the pair)",a:["por un lado","por una parte"]},
  {id:"hw3",skill:"Writing",type:"short",q:"Say it in Spanish: “I would like to study abroad.”",a:["me gustaría estudiar en el extranjero"]},
  {id:"hw4",skill:"Writing",type:"short",q:"Say it in Spanish: “It’s worth it.”",a:["vale la pena","merece la pena"]},
  {id:"hw5",skill:"Writing",type:"short",q:"Say it in Spanish: “If I had time, I would go.”",a:["si tuviera tiempo, iría","si tuviese tiempo, iría"]},
  {id:"hw6",skill:"Writing",type:"short",q:"Say it in Spanish: “I hope you are well.” (to a friend)",a:["espero que estés bien"]},
  {id:"hw7",skill:"Writing",type:"short",q:"Say it in Spanish: “Nowadays”",a:["hoy en día","actualmente","hoy día","en la actualidad"]},
  {id:"hw8",skill:"Writing",type:"short",q:"Say it in Spanish: “I have been learning Spanish for five years.”",a:["llevo cinco años aprendiendo español","llevo cinco años estudiando español","hace cinco años que aprendo español","hace cinco años que estudio español","estudio español desde hace cinco años","aprendo español desde hace cinco años"]},
  {id:"hw9",skill:"Writing",type:"short",q:"Say it in Spanish: “To sum up”",a:["en resumen","para concluir","en conclusión","para terminar","en definitiva"]},
  {id:"hw10",skill:"Writing",type:"short",q:"Say it in Spanish: “I’m looking forward to seeing you.”",a:["tengo ganas de verte","estoy deseando verte"]}
];
const HL_TASKS = [
  {id:"hop1",kind:"hl_opinion",max:50,label:"Opinion piece · 25 content + 25 language",title:"«Las redes sociales hacen más daño que bien a los adolescentes.» ¿Estás de acuerdo? Da tu opinión (unas 100 palabras).",pts:[]},
  {id:"hdl1",kind:"hl_dialogue",max:30,label:"Dialogue · 5 turns × 6 marks",title:"A Spanish friend is visiting you in Dublin. Write a dialogue in which you:",pts:["welcome your friend and ask about the journey","suggest two things to do in Dublin and say why","explain what you did the last time you went into town","disagree politely about where to eat and give a reason","agree on plans for tomorrow"]},
  {id:"hdi1",kind:"hl_diary",max:20,label:"Diary entry · 4 points × 5 marks",title:"Write a diary entry about a job interview you had today. Say:",pts:["how you felt this morning","what happened at the interview","what you would have to do in the job","what you will do with the money if you get it"]},
  {id:"hop2",kind:"hl_opinion",max:50,label:"Opinion piece · 25 content + 25 language",title:"«Los jóvenes irlandeses tienen demasiada presión para sacar buenas notas.» ¿Qué opinas? (unas 100 palabras)",pts:[]},
  {id:"hle1",kind:"hl_letter",max:30,label:"Letter / E-mail · 5 points × 6 marks",title:"You will stay with a Spanish host family this summer. Write an e-mail to them in which you:",pts:["thank them for agreeing to host you","describe yourself and your interests","say what you did last summer","explain what you would like to do while in Spain","ask a question about the area where they live"]},
  {id:"hno1",kind:"hl_note",max:20,label:"Note · 4 points × 5 marks",title:"Leave a note for your host mother, Carmen, in which you say:",pts:["you have gone to the pharmacy because you have a headache","you will be back before dinner","ask her to keep some food for you","thank her for yesterday’s trip"]},
  {id:"hop3",kind:"hl_opinion",max:50,label:"Opinion piece · 25 content + 25 language",title:"«Viajar es la mejor manera de aprender.» ¿Estás de acuerdo? (unas 100 palabras)",pts:[]}
];
const BUILTIN_HL = {
  id:"", builtin:true, title:"LC Spanish · Higher", subject:"Spanish", cycle:"LC", level:"HL",
  source:"Styled on the SEC 2025 Higher Level paper and marking scheme", texts:HL_TEXTS, items:HL_ITEMS, tasks:HL_TASKS,
  gradeBands:[["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}))
};
BUILTIN_OL.items.push(
  {id:"eo1",skill:"Writing",type:"order",q:"Build it: “I go to school by bus.”",words:["Voy","al","instituto","en","autobús"]},
  {id:"eo2",skill:"Writing",type:"order",q:"Build it: “Yesterday I went to the beach.”",words:["Ayer","fui","a","la","playa"]},
  {id:"eo3",skill:"Writing",type:"order",q:"Build it: “I would like to visit Spain.”",words:["Me","gustaría","visitar","España"]},
  {id:"eo4",skill:"Writing",type:"order",q:"Build it: “My sister is taller than me.”",words:["Mi","hermana","es","más","alta","que","yo"]},
  {id:"em1",skill:"Vocab",type:"match",q:"Match them up.",pairs:[["el lunes","Monday"],["la playa","the beach"],["el tiempo","the weather"],["los deberes","homework"]]},
  {id:"em2",skill:"Verbs",type:"match",q:"Match each verb to its meaning.",pairs:[["fui","I went"],["voy","I go"],["iré","I will go"],["iría","I would go"]]},
  {id:"et1",skill:"Reading",type:"mcq",text:"t1",q:"True or false: Lucía lives with her parents and her little brother.",opts:["True","False"],fixed:true,a:0},
  {id:"et2",skill:"Reading",type:"mcq",text:"t1",q:"True or false: Lucía works on Sunday mornings.",opts:["True","False"],fixed:true,a:1,why:"It’s Saturday mornings: los sábados."},
  {id:"et3",skill:"Reading",type:"mcq",text:"t4",q:"True or false: Pablo is coming to Ireland next summer.",opts:["True","False"],fixed:true,a:0}
);
BUILTIN_HL.items.push(
  {id:"ho1",skill:"Writing",type:"order",q:"Build it: “It is important that we protect the environment.”",words:["Es","importante","que","protejamos","el","medio","ambiente"]},
  {id:"ho2",skill:"Writing",type:"order",q:"Build it: “If I had money, I would travel around the world.”",words:["Si","tuviera","dinero,","viajaría","por","todo","el","mundo"]},
  {id:"ho3",skill:"Writing",type:"order",q:"Build it: “I have been studying Spanish for five years.”",words:["Llevo","cinco","años","estudiando","español"]},
  {id:"hm1",skill:"Vocab",type:"match",q:"Match the connectors.",pairs:[["sin embargo","however"],["además","furthermore"],["por lo tanto","therefore"],["a pesar de","despite"]]},
  {id:"hm2",skill:"Grammar",type:"match",q:"Match each form to its tense.",pairs:[["hable","present subjunctive"],["hablaría","conditional"],["hablaba","imperfect"],["hablé","preterite"]]},
  {id:"ht1",skill:"Reading",type:"mcq",text:"h1",q:"¿Verdadero o falso? El número de estudiantes que se plantea un año sabático se ha más que duplicado.",opts:["Verdadero","Falso"],fixed:true,a:0,why:"Del 7% al 18%."},
  {id:"ht2",skill:"Reading",type:"mcq",text:"h1",q:"¿Verdadero o falso? Lucía trabajó en una granja en Andalucía.",opts:["Verdadero","Falso"],fixed:true,a:1,why:"Fue en Galicia."},
  {id:"ht3",skill:"Reading",type:"mcq",text:"h2",q:"¿Verdadero o falso? La abuela habló enseguida.",opts:["Verdadero","Falso"],fixed:true,a:1,why:"Sin decir nada, le cogió la mano."}
);
BUILTIN_OL.store = "loops_lcol_es_v1"; BUILTIN_HL.store = "loops_lchl_es_v1";
LOOPS_SUBJECTS.es = { name: "Spanish", flag: "🇪🇸", colour: "es", OL: BUILTIN_OL, HL: BUILTIN_HL };
})();
