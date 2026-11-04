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

// ── More, mid-level, exam-style (2 Nov 2026) ──
Object.assign(TEXTS, {
  t5: "Hola Mamá: He salido con Carlos al centro comercial. Vuelvo a las siete y media. He sacado la basura y he paseado al perro. No te olvides de que mañana tengo dentista a las diez. Hay pizza en la nevera para la cena. Un beso, Ana",
  t6: "CAMPAMENTO DE VERANO EN LOS PIRINEOS. Para jóvenes de 14 a 17 años. Del 1 al 15 de julio. Actividades: senderismo, piragüismo y escalada. Precio: 450 euros con comida y alojamiento. Hay que traer saco de dormir y botas. Plazas limitadas: inscríbete antes del 30 de mayo.",
  t7: "¡Hola Darragh! Te escribo desde Mallorca. Estoy aquí con mis primos en un hotel cerca del mar. Hace mucho calor, unos treinta y cinco grados, así que pasamos el día en la playa. Ayer alquilamos bicicletas y fuimos a un pueblo en la montaña. La comida es riquísima, pero todo es bastante caro. Vuelvo a Madrid el domingo. Hasta pronto, Marta",
  t8: "Pablo tiene diecisiete años y está en segundo de bachillerato. Este año tiene mucho estrés porque en junio tiene la Selectividad, el examen para entrar en la universidad. Quiere estudiar enfermería. Estudia cuatro horas cada tarde en la biblioteca, pero los viernes juega al baloncesto con sus amigos para desconectar. Dice que el deporte le ayuda a dormir mejor."
});
const TF = ["True","False"];
BUILTIN_OL.items.push(
  // Reading
  {id:"r11",skill:"Reading",type:"mcq",text:"t5",q:"Where has Ana gone?",opts:["To the shopping centre","To the supermarket","To the dentist","To the park"],a:0},
  {id:"r12",skill:"Reading",type:"mcq",text:"t5",q:"What time will she be back?",opts:["7:30","7:00","8:30","10:00"],a:0},
  {id:"r13",skill:"Reading",type:"mcq",text:"t5",q:"What jobs has she done?",opts:["Taken out the rubbish and walked the dog","Made the dinner","Done the shopping","Tidied her room"],a:0},
  {id:"r14",skill:"Reading",type:"mcq",text:"t5",q:"What is there for dinner?",opts:["Pizza in the fridge","Paella","Nothing, she will buy something","Soup"],a:0},
  {id:"r15",skill:"Reading",type:"mcq",text:"t5",q:"True or false: Ana has the dentist tomorrow at ten.",opts:TF,fixed:true,a:0},
  {id:"r16",skill:"Reading",type:"mcq",text:"t6",q:"Who is the camp for?",opts:["Young people aged 14 to 17","Children under 12","Families","University students"],a:0},
  {id:"r17",skill:"Reading",type:"mcq",text:"t6",q:"How long does the camp last?",opts:["Two weeks","One week","A month","A weekend"],a:0,why:"Del 1 al 15 de julio."},
  {id:"r18",skill:"Reading",type:"mcq",text:"t6",q:"Which activity is NOT mentioned?",opts:["Swimming","Hiking","Canoeing","Climbing"],a:0},
  {id:"r19",skill:"Reading",type:"mcq",text:"t6",q:"What does the price include?",opts:["Food and accommodation","Travel","Equipment","Insurance"],a:0},
  {id:"r20",skill:"Reading",type:"mcq",text:"t6",q:"What must you bring?",opts:["A sleeping bag and boots","A tent","A bike","Your own food"],a:0},
  {id:"r21",skill:"Reading",type:"mcq",text:"t6",q:"True or false: You must sign up before the 30th of May.",opts:TF,fixed:true,a:0},
  {id:"r22",skill:"Reading",type:"mcq",text:"t7",q:"Who is Marta with?",opts:["Her cousins","Her parents","Her school","Her friends"],a:0},
  {id:"r23",skill:"Reading",type:"mcq",text:"t7",q:"What is the weather like?",opts:["Very hot, about 35 degrees","Rainy","Windy","Cold at night"],a:0},
  {id:"r24",skill:"Reading",type:"mcq",text:"t7",q:"What did they do yesterday?",opts:["Hired bikes and went to a mountain village","Went on a boat trip","Went to a concert","Stayed in the hotel"],a:0},
  {id:"r25",skill:"Reading",type:"mcq",text:"t7",q:"What does she not like?",opts:["Everything is quite expensive","The food","The hotel","The heat"],a:0},
  {id:"r26",skill:"Reading",type:"mcq",text:"t7",q:"True or false: Marta goes back to Madrid on Saturday.",opts:TF,fixed:true,a:1,why:"El domingo: on Sunday."},
  {id:"r27",skill:"Reading",type:"mcq",text:"t8",q:"Why is Pablo stressed this year?",opts:["He has an exam in June to get into university","He has a new job","He is moving house","He failed his exams"],a:0},
  {id:"r28",skill:"Reading",type:"mcq",text:"t8",q:"What does he want to study?",opts:["Nursing","Medicine","Teaching","Sport"],a:0},
  {id:"r29",skill:"Reading",type:"mcq",text:"t8",q:"How long does he study every afternoon?",opts:["Four hours","Two hours","Six hours","One hour"],a:0},
  {id:"r30",skill:"Reading",type:"mcq",text:"t8",q:"Why does he play basketball?",opts:["To switch off","To get fit for a match","Because his parents make him","To meet new people"],a:0},
  {id:"r31",skill:"Reading",type:"mcq",text:"t8",q:"True or false: Pablo says sport helps him sleep better.",opts:TF,fixed:true,a:0},
  // Find it (spelling forgiven)
  {id:"f9",skill:"Find it",type:"short",text:"t5",q:"Find the Spanish for: “I have taken out the rubbish”",a:["he sacado la basura"],lenient:true},
  {id:"f10",skill:"Find it",type:"short",text:"t5",q:"Find the Spanish for: “Don’t forget”",a:["no te olvides"],lenient:true},
  {id:"f11",skill:"Find it",type:"short",text:"t5",q:"Find the Spanish for: “in the fridge”",a:["en la nevera"],lenient:true},
  {id:"f12",skill:"Find it",type:"short",text:"t6",q:"Find the Spanish for: “sleeping bag”",a:["saco de dormir"],lenient:true},
  {id:"f13",skill:"Find it",type:"short",text:"t6",q:"Find the Spanish for: “food and accommodation”",a:["comida y alojamiento"],lenient:true},
  {id:"f14",skill:"Find it",type:"short",text:"t7",q:"Find the Spanish for: “it is very hot”",a:["hace mucho calor"],lenient:true},
  {id:"f15",skill:"Find it",type:"short",text:"t7",q:"Find the Spanish for: “we hired bikes”",a:["alquilamos bicicletas"],lenient:true},
  {id:"f16",skill:"Find it",type:"short",text:"t7",q:"Find the Spanish for: “see you soon”",a:["hasta pronto"],lenient:true},
  {id:"f17",skill:"Find it",type:"short",text:"t8",q:"Find the Spanish for: “to switch off”",a:["para desconectar","desconectar"],lenient:true},
  {id:"f18",skill:"Find it",type:"short",text:"t8",q:"Find the Spanish for: “every afternoon”",a:["cada tarde"],lenient:true},
  // Verbs
  {id:"v7",skill:"Verbs",type:"mcq",q:"Normalmente ___ a las siete.",opts:["me levanto","me levanté","levanto","me levantaré"],a:0,why:"Normalmente = usually → present: me levanto."},
  {id:"v8",skill:"Verbs",type:"mcq",q:"Mi madre ___ profesora.",opts:["es","está","tiene","hay"],a:0,why:"Jobs use ser."},
  {id:"v9",skill:"Verbs",type:"mcq",q:"Hoy ___ mucho frío.",opts:["hace","es","está","hay"],a:0,why:"Weather: hace frío, hace calor."},
  {id:"v10",skill:"Verbs",type:"mcq",q:"Mis amigos y yo ___ al fútbol los sábados.",opts:["jugamos","juego","juegan","jugáis"],a:0,why:"Mis amigos y yo = we → jugamos."},
  {id:"v11",skill:"Verbs",type:"mcq",q:"La semana pasada ___ una película muy buena.",opts:["vi","veo","veré","ver"],a:0,why:"La semana pasada → preterite: vi."},
  {id:"v12",skill:"Verbs",type:"mcq",q:"El año que viene ___ en la universidad.",opts:["estudiaré","estudié","estudiaba","estudiara"],a:0,why:"Next year → future: estudiaré."},
  {id:"v13",skill:"Verbs",type:"mcq",q:"¿Dónde ___ el cine?",opts:["está","es","hay","tiene"],a:0,why:"Where something is → estar."},
  {id:"v14",skill:"Verbs",type:"mcq",q:"Me ___ la música rock.",opts:["encanta","encantan","encanto","encantas"],a:0,why:"La música is singular → encanta."},
  {id:"v15",skill:"Verbs",type:"mcq",q:"En mi pueblo ___ un polideportivo.",opts:["hay","está","es","tiene"],a:0,why:"There is / there are → hay."},
  {id:"v16",skill:"Verbs",type:"mcq",q:"Mi hermano y yo ___ altos.",opts:["somos","estamos","son","tenemos"],a:0,why:"Description, we → somos."},
  // Writing (typed, short)
  {id:"w14",skill:"Writing",type:"short",q:"Say it in Spanish: “Thanks for the present.”",a:["gracias por el regalo","muchas gracias por el regalo"]},
  {id:"w15",skill:"Writing",type:"short",q:"Say it in Spanish: “I am going to the beach.”",a:["voy a la playa"]},
  {id:"w16",skill:"Writing",type:"short",q:"Say it in Spanish: “My mum is a nurse.”",a:["mi madre es enfermera","mi mamá es enfermera"]},
  {id:"w17",skill:"Writing",type:"short",q:"Say it in Spanish: “It’s sunny.”",a:["hace sol"]},
  {id:"w18",skill:"Writing",type:"short",q:"Say it in Spanish: “I’m hungry.”",a:["tengo hambre"]},
  {id:"w19",skill:"Writing",type:"short",q:"Say it in Spanish: “See you soon.”",a:["hasta pronto","hasta luego","nos vemos pronto","hasta la vista"]},
  {id:"w20",skill:"Writing",type:"short",q:"Say it in Spanish: “I have a headache.”",a:["me duele la cabeza","tengo dolor de cabeza"]},
  {id:"w21",skill:"Writing",type:"short",q:"Say it in Spanish: “I’m going out with my friends.”",a:["salgo con mis amigos","voy a salir con mis amigos","he salido con mis amigos"]},
  {id:"w22",skill:"Writing",type:"short",q:"Say it in Spanish: “I went shopping.”",a:["fui de compras","fui a las tiendas","fui de tiendas"]},
  // Build it
  {id:"eo5",skill:"Writing",type:"order",q:"Build it: “I get up at seven.”",words:["Me","levanto","a","las","siete"]},
  {id:"eo6",skill:"Writing",type:"order",q:"Build it: “I’m going to visit my grandparents.”",words:["Voy","a","visitar","a","mis","abuelos"]},
  {id:"eo7",skill:"Writing",type:"order",q:"Build it: “Yesterday it was very hot.”",words:["Ayer","hizo","mucho","calor"]},
  {id:"eo8",skill:"Writing",type:"order",q:"Build it: “I really like sports.”",words:["Me","gustan","mucho","los","deportes"]},
  // Match
  {id:"em3",skill:"Vocab",type:"match",q:"Match the note phrases.",pairs:[["He salido","I have gone out"],["Vuelvo a las ocho","I’ll be back at eight"],["No te preocupes","Don’t worry"],["Llámame","Call me"]]},
  {id:"em4",skill:"Vocab",type:"match",q:"Match the weather.",pairs:[["Hace calor","It’s hot"],["Hace frío","It’s cold"],["Llueve","It’s raining"],["Nieva","It’s snowing"]]},
  {id:"em5",skill:"Vocab",type:"match",q:"Match the letter phrases.",pairs:[["Querida Ana","Dear Ana"],["Un abrazo","Hugs"],["Gracias por tu carta","Thanks for your letter"],["Escríbeme pronto","Write soon"]]},
  {id:"em6",skill:"Vocab",type:"match",q:"Match the times.",pairs:[["las ocho y media","8:30"],["las siete menos cuarto","6:45"],["las nueve y cuarto","9:15"],["mediodía","12:00"]]}
);
Object.assign(HL_TEXTS, {
  h3: "Según una encuesta reciente, los adolescentes españoles pasan una media de cuatro horas al día conectados al móvil. Muchos padres están preocupados porque creen que sus hijos duermen menos y leen menos que antes. Sin embargo, los jóvenes defienden las redes sociales: dicen que les ayudan a mantener el contacto con sus amigos y a descubrir nuevas aficiones. Los expertos recomiendan que las familias establezcan normas claras, como no usar el móvil durante las comidas ni una hora antes de dormir.",
  h4: "Hace dos años, el ayuntamiento de Villanueva prohibió los coches en el centro del pueblo. Al principio, muchos comerciantes protestaron porque pensaban que perderían clientes. Hoy, en cambio, la mayoría está contenta: hay más gente paseando por las calles y las tiendas venden más. Además, la contaminación ha bajado un 60% y los niños pueden ir solos al colegio. «Si me lo hubieran dicho hace diez años, no me lo habría creído», confiesa Manuel, dueño de una cafetería."
});
const VF = ["Verdadero","Falso"];
BUILTIN_HL.items.push(
  {id:"hr7",skill:"Reading",type:"mcq",text:"h3",q:"How long do Spanish teenagers spend on their phones?",opts:["Four hours a day on average","Two hours a day","Four hours a week","All evening"],a:0},
  {id:"hr8",skill:"Reading",type:"mcq",text:"h3",q:"What worries many parents?",opts:["Their children sleep and read less","Their children spend too much money","Their children have no friends","Their children don’t do sport"],a:0},
  {id:"hr9",skill:"Reading",type:"mcq",text:"h3",q:"How do young people defend social media?",opts:["It helps them keep in touch and find new hobbies","It helps them study","It is cheaper than going out","Their teachers use it"],a:0},
  {id:"hr10",skill:"Reading",type:"mcq",text:"h3",q:"What do the experts recommend?",opts:["Clear family rules, like no phones at meals or before bed","Banning phones for teenagers","Only using phones at weekends","Giving phones only at 16"],a:0},
  {id:"hr11",skill:"Reading",type:"mcq",text:"h3",q:"¿Verdadero o falso? Los jóvenes están de acuerdo con sus padres.",opts:VF,fixed:true,a:1,why:"Sin embargo, los jóvenes defienden las redes."},
  {id:"hr12",skill:"Reading",type:"mcq",text:"h4",q:"What did the council do?",opts:["Banned cars from the town centre","Built a new car park","Closed the shops on Sundays","Opened a new school"],a:0},
  {id:"hr13",skill:"Reading",type:"mcq",text:"h4",q:"Why did shopkeepers protest at first?",opts:["They thought they would lose customers","Rents went up","They had nowhere to park","The streets were dirty"],a:0},
  {id:"hr14",skill:"Reading",type:"mcq",text:"h4",q:"How do most shopkeepers feel now?",opts:["Happy: more people walk around and shops sell more","Still angry","They want to move","They are not sure yet"],a:0},
  {id:"hr15",skill:"Reading",type:"mcq",text:"h4",q:"What has happened to pollution?",opts:["It has dropped by 60%","It has doubled","It has not changed","It has dropped by 6%"],a:0},
  {id:"hr16",skill:"Reading",type:"mcq",text:"h4",q:"What does Manuel mean?",opts:["He would never have believed it ten years ago","He wanted this ten years ago","He has been there ten years","He doesn’t believe it now"],a:0},
  {id:"hr17",skill:"Reading",type:"mcq",text:"h4",q:"¿Verdadero o falso? Ahora los niños pueden ir solos al colegio.",opts:VF,fixed:true,a:0},
  {id:"hf6",skill:"Find it",type:"short",text:"h3",q:"Find the phrase meaning “on average”",a:["una media de","de media"],lenient:true},
  {id:"hf7",skill:"Find it",type:"short",text:"h3",q:"Busca en el texto un verbo en el presente de subjuntivo.",a:["establezcan"]},
  {id:"hf8",skill:"Find it",type:"short",text:"h4",q:"Busca en el texto un verbo en el condicional.",a:["perderían","habría creído","habría"]},
  {id:"hf9",skill:"Find it",type:"short",text:"h4",q:"Find the phrase meaning “on the other hand”",a:["en cambio"],lenient:true},
  {id:"hf10",skill:"Find it",type:"short",text:"h4",q:"Busca en el texto un verbo en el pluscuamperfecto de subjuntivo.",a:["hubieran dicho","me lo hubieran dicho"]},
  {id:"hf11",skill:"Find it",type:"short",text:"h4",q:"Find the Spanish for: “at first”",a:["al principio"],lenient:true},
  {id:"hg9",skill:"Grammar",type:"mcq",q:"Me alegro de que ___ venir.",opts:["puedas","puedes","podrás","pudiste"],a:0,why:"Me alegro de que + subjunctive."},
  {id:"hg10",skill:"Grammar",type:"mcq",q:"Cuando era niño, ___ al fútbol cada día.",opts:["jugaba","jugué","juego","jugaría"],a:0,why:"Used to → imperfect."},
  {id:"hg11",skill:"Grammar",type:"mcq",q:"Quiero que mis padres me ___ ir.",opts:["dejen","dejan","dejarán","dejaron"],a:0,why:"Quiero que + subjunctive."},
  {id:"hg12",skill:"Grammar",type:"mcq",q:"Te llamaré en cuanto ___ a casa.",opts:["llegue","llego","llegaré","llegué"],a:0,why:"En cuanto + future event → subjunctive."},
  {id:"hg13",skill:"Grammar",type:"mcq",q:"Si ___ más tiempo, aprendería a tocar la guitarra.",opts:["tuviera","tengo","tendría","tenga"],a:0,why:"Si + imperfect subjunctive → conditional."},
  {id:"hg14",skill:"Grammar",type:"mcq",q:"Gracias ___ tu ayuda.",opts:["por","para","de","a"],a:0,why:"Gracias por."},
  {id:"hg15",skill:"Grammar",type:"mcq",q:"Llevo dos años ___ en un supermercado.",opts:["trabajando","trabajar","trabajo","trabajado"],a:0,why:"Llevar + time + -ando."},
  {id:"hg16",skill:"Grammar",type:"mcq",q:"Cuando llegué a la estación, el tren ya ___.",opts:["había salido","salió","sale","ha salido"],a:0,why:"Already, before another past event → pluperfect."},
  {id:"hg17",skill:"Grammar",type:"mcq",q:"Es una pena que no ___ más zonas verdes.",opts:["haya","hay","habrá","había"],a:0,why:"Es una pena que + subjunctive."},
  {id:"hg18",skill:"Grammar",type:"mcq",q:"Mañana mis amigos ___ a mi casa.",opts:["vendrán","vinieron","venían","vengan"],a:0,why:"Mañana → future."},
  {id:"hw11",skill:"Writing",type:"short",q:"Say it in Spanish: “I agree.”",a:["estoy de acuerdo"]},
  {id:"hw12",skill:"Writing",type:"short",q:"Say it in Spanish: “I don’t agree.”",a:["no estoy de acuerdo"]},
  {id:"hw13",skill:"Writing",type:"short",q:"Say it in Spanish: “Furthermore”",a:["además","es más"]},
  {id:"hw14",skill:"Writing",type:"short",q:"Say it in Spanish: “Social media”",a:["las redes sociales","redes sociales"]},
  {id:"hw15",skill:"Writing",type:"short",q:"Say it in Spanish: “Thanks for everything.”",a:["gracias por todo","muchas gracias por todo"]},
  {id:"hw16",skill:"Writing",type:"short",q:"Say it in Spanish: “It depends.”",a:["depende"]},
  {id:"hw17",skill:"Writing",type:"short",q:"Say it in Spanish: “The environment”",a:["el medio ambiente","medio ambiente"]},
  {id:"hw18",skill:"Writing",type:"short",q:"Say it in Spanish: “I think that…”",a:["creo que","pienso que","me parece que","opino que"]},
  {id:"ho4",skill:"Writing",type:"order",q:"Build it: “I don’t think it’s a good idea.”",words:["No","creo","que","sea","una","buena","idea"]},
  {id:"ho5",skill:"Writing",type:"order",q:"Build it: “When I finish school, I will travel.”",words:["Cuando","termine","el","colegio,","viajaré"]},
  {id:"hm3",skill:"Vocab",type:"match",q:"Match the opinion phrases.",pairs:[["Estoy de acuerdo","I agree"],["Me parece que","It seems to me that"],["Hay que","You have to"],["Vale la pena","It’s worth it"]]},
  {id:"hm4",skill:"Vocab",type:"match",q:"Match the environment words.",pairs:[["el medio ambiente","the environment"],["la contaminación","pollution"],["el reciclaje","recycling"],["el cambio climático","climate change"]]}
);

// ── A bigger pool of marked questions (3 Nov 2026): each student meets them in their own order ──
BUILTIN_OL.tasks.push(
  {id:"letter3",kind:"letter",label:"Letter / E-mail · 5 points × 8 marks",title:"Your Spanish friend Diego has just moved to a new town. Write an e-mail to him in which you:",pts:["ask how he likes his new town","describe your own town or area","say what you did with your friends last weekend","say what you would like to do this summer","ask him to send you a photo of his new house"]},
  {id:"note2",kind:"note",label:"Note · 4 points × 5 marks",title:"You are on an exchange in Spain. Leave a note for your exchange partner, Pablo, in which you say:",pts:["you have gone to the football match with his brother","you took his jacket because it was raining","you will be home after the match","ask him to record the film on TV for you"]},
  {id:"diary2",kind:"diary",label:"Diary entry · 4 points × 5 marks",title:"Write a diary entry in which you say:",pts:["today you got your exam results","how you felt when you opened them","how you celebrated or what you did after","what you plan to do next"]}
);
BUILTIN_HL.tasks.push(
  {id:"hop4",kind:"hl_opinion",max:50,label:"Opinion piece · 25 content + 25 language",title:"«Los jóvenes de hoy no se preocupan por el medio ambiente.» ¿Estás de acuerdo? (unas 100 palabras)",pts:[]},
  {id:"hle2",kind:"hl_letter",max:30,label:"Letter / E-mail · 5 points × 6 marks",title:"Your Spanish friend Carmen is worried about her exams. Write an e-mail to her in which you:",pts:["say you are sorry to hear she is stressed","describe how you prepare for exams","give her two pieces of advice","say what you will do when your own exams are over","invite her to visit Ireland next summer"]},
  {id:"hdl2",kind:"hl_dialogue",max:30,label:"Dialogue · 5 turns × 6 marks",title:"You and a Spanish friend are planning a weekend away. Write a dialogue in which you:",pts:["suggest where to go and say why","disagree about how to travel and give a reason","explain what you did on your last weekend away","talk about how much money you will need","agree on a date and what to bring"]}
);

// ── Whole-paper bank (4 Nov 2026): 20 marked questions per level, Reading 8 + Writing 12 ──
const RD = (id, text, label, title, pts, marks) => ({id, kind:"mfl_read", section:"Reading", max: marks.reduce((a,b) => a + b, 0), label, case: text, title, pts, marks});
BUILTIN_OL.tasks.push(
  {id:"letter4",kind:"letter",label:"Letter / E-mail · 5 points × 8 marks",title:"Your Spanish friend Ana has invited you to her birthday party in Madrid. Write an e-mail to her in which you:",pts:["thank her for the invitation","say you can’t go and explain why","say what you did for your own last birthday","describe a present you would like to send her","suggest a time to meet up next summer"]},
  {id:"letter5",kind:"letter",label:"Letter / E-mail · 5 points × 8 marks",title:"You have just come back from a holiday with a Spanish family. Write a letter to them in which you:",pts:["thank them for the holiday","say what you liked most and why","describe your journey home","say what you are doing now that you are back","invite one of the family to Ireland"]},
  RD("rd1", TEXTS.t1, "Reading comprehension · answer in English · 20 marks", "Read the text and answer in English.", ["Where does Lucía live, and who does she live with?","Describe her neighbourhood (two details).","Where does she work, and when?","Give one advantage and one disadvantage of the job."], [4,6,4,6]),
  RD("rd2", TEXTS.t2, "Reading comprehension · answer in English · 20 marks", "Read the text and answer in English.", ["How did the class travel, and how long did the journey take?","Name the two places they visited.","What happened on the last day?","How does the writer feel about the trip? Quote the Spanish that tells you."], [5,4,5,6]),
  RD("rd3", TEXTS.t3, "Reading comprehension · answer in English · 20 marks", "Read the advertisement and answer in English.", ["What job is being advertised, and where?","What are the working hours and days?","What is required, and what is offered free?","How can you apply? (two ways)"], [4,6,6,4]),
  RD("rd4", TEXTS.t4, "Reading comprehension · answer in English · 20 marks", "Read Pablo’s note and answer in English.", ["Why is Pablo writing?","What does he say about the present?","How did he celebrate his birthday?","What are his plans, and what does he ask?"], [4,4,6,6]),
  RD("rd5", TEXTS.t5, "Reading comprehension · answer in English · 20 marks", "Read Ana’s note and answer in English.", ["Where has Ana gone and who with?","When will she be back?","Name the two jobs she has done.","What must her mother remember, and what is there for dinner?"], [4,4,6,6]),
  RD("rd6", TEXTS.t6, "Reading comprehension · answer in English · 20 marks", "Read the advertisement and answer in English.", ["Who is the camp for, and when is it on?","Name the three activities.","What does the price include?","What must you bring, and what is the deadline?"], [4,6,4,6]),
  RD("rd7", TEXTS.t7, "Reading comprehension · answer in English · 20 marks", "Read Marta’s postcard and answer in English.", ["Where is Marta, and who is she with?","What is the weather like and how do they spend the day?","What did they do yesterday?","What does she like and dislike about the place?"], [4,6,4,6]),
  RD("rd8", TEXTS.t8, "Reading comprehension · answer in English · 20 marks", "Read the text and answer in English.", ["Why is Pablo stressed this year?","What does he want to study?","Describe his study routine.","What does he do on Fridays, and why?"], [4,4,6,6])
);
BUILTIN_HL.tasks.push(
  {id:"hop5",kind:"hl_opinion",max:50,label:"Opinion piece · 25 content + 25 language",title:"«Hoy en día los jóvenes pasan demasiado tiempo delante de una pantalla.» ¿Qué opinas? (unas 100 palabras)",pts:[]},
  {id:"hle3",kind:"hl_letter",max:30,label:"Letter / E-mail · 5 points × 6 marks",title:"You are applying for a summer job in a hotel in Spain. Write an e-mail to the manager in which you:",pts:["say where you saw the job and which job you want","describe your experience","explain why you would be good at the job","say when you are available","ask about accommodation and pay"]},
  RD("hrd1", HL_TEXTS.h1, "Reading comprehension · 30 marks", "Lee el texto y contesta.", ["¿Cómo ha cambiado el número de estudiantes que se plantean un año sabático? (Answer in Spanish.)","What did Lucía Moreno do during her gap year?","What did her parents fear at first, and how did it turn out?","What warning do the experts give? Explain in English."], [6,6,8,10]),
  RD("hrd2", HL_TEXTS.h1, "Reading comprehension · language · 30 marks", "Lee el texto y contesta.", ["Busca en el texto un verbo en el imperfecto de subjuntivo y explica por qué se usa.","Busca una expresión que significa “however”.","Busca en el texto una palabra que significa “joven que estudia antes de la universidad”.","¿Qué opinas tú de un año sabático? Contesta en español (unas 50 palabras)."], [6,6,6,12]),
  RD("hrd3", HL_TEXTS.h2, "Reading comprehension · 30 marks", "Lee el texto y contesta.", ["How does the writer show that the village was quiet? (two details)","Describe the grandmother (two details).","How long was it since they had seen each other?","What does the grandmother’s final gesture suggest about their relationship? Explain in English."], [6,6,6,12]),
  RD("hrd4", HL_TEXTS.h2, "Reading comprehension · language · 30 marks", "Lee el texto y contesta.", ["Busca en el texto un verbo en el pluscuamperfecto.","Busca dos verbos en el pretérito indefinido.","Explica la expresión “de arriba abajo”.","¿Cómo crees que se siente la narradora? Contesta en español (unas 50 palabras)."], [6,6,6,12]),
  RD("hrd5", HL_TEXTS.h3, "Reading comprehension · 30 marks", "Lee el texto y contesta.", ["¿Cuánto tiempo pasan los adolescentes españoles con el móvil?","What are parents worried about?","How do young people defend social media? (two points)","What do the experts recommend? Explain in English."], [6,6,8,10]),
  RD("hrd6", HL_TEXTS.h3, "Reading comprehension · language · 30 marks", "Lee el texto y contesta.", ["Busca en el texto un verbo en el presente de subjuntivo y explica por qué se usa.","Busca una expresión que significa “however”.","Busca dos sustantivos plurales.","¿Estás de acuerdo con las normas que proponen los expertos? Contesta en español (unas 50 palabras)."], [6,6,6,12]),
  RD("hrd7", HL_TEXTS.h4, "Reading comprehension · 30 marks", "Lee el texto y contesta.", ["¿Qué decidió el ayuntamiento hace dos años?","Why did the shopkeepers protest at first?","How has the town changed since? (three points)","Explain what Manuel means in the final quotation."], [6,6,8,10]),
  RD("hrd8", HL_TEXTS.h4, "Reading comprehension · language · 30 marks", "Lee el texto y contesta.", ["Busca en el texto un verbo en el condicional.","Busca el verbo en el pluscuamperfecto de subjuntivo y explica la estructura de la frase.","Busca una expresión que significa “on the other hand”.","¿Te gustaría vivir en un pueblo sin coches? Contesta en español (unas 50 palabras)."], [6,6,6,12])
);
[BUILTIN_OL, BUILTIN_HL].forEach(P => P.tasks.forEach(t => { if (!t.section) t.section = "Writing"; }));
BUILTIN_OL.store = "loops_lcol_es_v1"; BUILTIN_HL.store = "loops_lchl_es_v1";
LOOPS_SUBJECTS.es = { name: "Spanish", flag: "🇪🇸", colour: "es", OL: BUILTIN_OL, HL: BUILTIN_HL };
})();
