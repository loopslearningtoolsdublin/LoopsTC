// ═══════════════════════════════════════════════
// LOOPS · LC GERMAN — Ordinary + Higher
// Original material in the style and format of the SEC 2025 papers.
// Edit freely: texts, quick-fire items, writing tasks.
// Item: {id, skill, type:"mcq"|"short", q, opts?, a, why?, text?, lenient?}
// Task: {id, kind (marking scheme in the Worker), label, title, pts, max}
// NB de_ol_email needs exactly 5 points worth (2,1,2,2,1); de_hl_aeusserung exactly 3 (A3, B4, C4).
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));

// ───────────── ORDINARY ─────────────
const OL = {
  id:"", builtin:true, title:"LC German · Ordinary", subject:"German", cycle:"LC", level:"OL",
  source:"Styled on the SEC 2025 Ordinary Level paper and marking scheme", gradeBands: OL_GRADES,
  texts: {
    g1: "Hallo! Ich heiße Jonas, bin 16 Jahre alt und wohne in Hamburg. Ich habe eine Schwester und einen Hund. Am Wochenende arbeite ich in einer Bäckerei. Die Arbeit beginnt um sechs Uhr – das ist sehr früh! Aber ich verdiene 12 Euro pro Stunde. Mit dem Geld möchte ich im Sommer nach Irland fahren.",
    g2: "STADTBIBLIOTHEK KÖLN – Neue Öffnungszeiten: Montag bis Freitag 9 bis 20 Uhr, Samstag 10 bis 16 Uhr, Sonntag geschlossen. Für Schüler ist die Mitgliedschaft kostenlos. Essen und Trinken sind in der Bibliothek verboten. Es gibt kostenloses WLAN.",
    g3: "Gestern war ich mit meiner Klasse im Zoo. Wir sind mit dem Bus gefahren. Am besten haben mir die Elefanten gefallen. Leider hat es am Nachmittag stark geregnet, und wir sind früher nach Hause gefahren."
  },
  items: [
    {id:"gr1",skill:"Reading",type:"mcq",text:"g1",q:"Where does Jonas work at weekends?",opts:["In a bakery","In a supermarket","In a café","In a zoo"],a:0},
    {id:"gr2",skill:"Reading",type:"mcq",text:"g1",q:"What does he say about the work?",opts:["It starts very early, at six","It is boring","It is far away","It is badly paid"],a:0},
    {id:"gr3",skill:"Reading",type:"mcq",text:"g1",q:"What will he do with the money?",opts:["Go to Ireland in the summer","Buy a dog","Buy a phone","Save it for college"],a:0},
    {id:"gr4",skill:"Reading",type:"mcq",text:"g2",q:"When is the library closed?",opts:["On Sundays","On Saturdays","On Mondays","Every evening"],a:0},
    {id:"gr5",skill:"Reading",type:"mcq",text:"g2",q:"What is free for students?",opts:["Membership","Food and drink","Printing","Parking"],a:0},
    {id:"gr6",skill:"Reading",type:"mcq",text:"g3",q:"How did the class travel to the zoo?",opts:["By bus","By train","On foot","By car"],a:0},
    {id:"gr7",skill:"Reading",type:"mcq",text:"g3",q:"Why did they go home early?",opts:["It rained heavily","The zoo closed","Someone was sick","The bus broke down"],a:0},
    {id:"gf1",skill:"Find it",type:"short",lenient:true,text:"g1",q:"Find the German for: “a dog”",a:["einen Hund"]},
    {id:"gf2",skill:"Find it",type:"short",lenient:true,text:"g1",q:"Find the German for: “that is very early”",a:["das ist sehr früh"]},
    {id:"gf3",skill:"Find it",type:"short",lenient:true,text:"g2",q:"Find the German for: “closed”",a:["geschlossen"]},
    {id:"gf4",skill:"Find it",type:"short",lenient:true,text:"g3",q:"Find the German for: “we went home earlier”",a:["wir sind früher nach Hause gefahren"]},
    {id:"gg1",skill:"Verbs",type:"mcq",q:"Gestern ___ ich Fußball gespielt.",opts:["habe","bin","werde","hatte"],a:0,why:"Spielen takes haben: ich habe gespielt."},
    {id:"gg2",skill:"Verbs",type:"mcq",q:"Wir ___ nach Berlin gefahren.",opts:["sind","haben","werden","hatten"],a:0,why:"Fahren (movement) takes sein: wir sind gefahren."},
    {id:"gg3",skill:"Verbs",type:"mcq",q:"Am Samstag ___ ich ins Kino.",opts:["gehe","gehen","geht","gehst"],a:0,why:"Ich → -e: ich gehe."},
    {id:"gg4",skill:"Verbs",type:"mcq",q:"Ich habe ___ Bruder.",opts:["einen","ein","eine","einer"],a:0,why:"Haben + accusative; Bruder is masculine → einen."},
    {id:"gg5",skill:"Verbs",type:"mcq",q:"Mein Vater ___ Lehrer.",opts:["ist","hat","sind","bist"],a:0,why:"Er → ist."},
    {id:"gg6",skill:"Verbs",type:"mcq",q:"Heute ___ nach Hause.",opts:["fahre ich","ich fahre","fahren ich","ich fahren"],a:0,why:"The verb comes second: Heute fahre ich…"},
    {id:"gw1",skill:"Writing",type:"short",q:"Say it in German: “I am sixteen years old.”",a:["ich bin sechzehn Jahre alt","ich bin 16 Jahre alt"]},
    {id:"gw2",skill:"Writing",type:"short",q:"Say it in German: “I live in Dublin with my family.”",a:["ich wohne mit meiner Familie in Dublin","ich wohne in Dublin mit meiner Familie","ich lebe mit meiner Familie in Dublin","ich lebe in Dublin mit meiner Familie"]},
    {id:"gw3",skill:"Writing",type:"short",q:"Say it in German: “Yesterday I played football.”",a:["gestern habe ich Fußball gespielt","gestern habe ich Fussball gespielt"]},
    {id:"gw4",skill:"Writing",type:"short",q:"Say it in German: “I went to the cinema.”",a:["ich bin ins Kino gegangen"]},
    {id:"gw5",skill:"Writing",type:"short",q:"Say it in German: “Thank you for your letter.”",a:["danke für deinen Brief","vielen Dank für deinen Brief"]},
    {id:"gw6",skill:"Writing",type:"short",q:"Say it in German: “Dear Anna,” (start of a letter)",a:["liebe Anna"]},
    {id:"gw7",skill:"Writing",type:"short",q:"End a letter to a friend (one common way).",a:["viele Grüße","liebe Grüße","bis bald","alles Liebe","tschüss"]},
    {id:"gw8",skill:"Writing",type:"short",q:"Say it in German: “I like reading.”",a:["ich lese gern","ich lese gerne"]},
    {id:"gw9",skill:"Writing",type:"short",q:"Say it in German: “My favourite subject is German.”",a:["mein Lieblingsfach ist Deutsch"]},
    {id:"gw10",skill:"Writing",type:"short",q:"Say it in German: “The weather is good.”",a:["das Wetter ist gut"]}
  ],
  tasks: [
    {id:"goe1",kind:"de_ol_email",max:15,label:"E-mail · content 8 + expression 7 (25–30 words)",title:"You want to join a sports club in Germany. Write an e-mail of 25–30 words in German:",pts:["introduce yourself: name and age (2)","say why you are in Germany (1)","give two reasons you want to join (2)","name one sport you like and say why (2)","ask one question about the club (1)"]},
    {id:"gol1",kind:"de_ol_letter",max:26,label:"Letter · content 16 + expression 10",title:"Your German friend Lukas is coming to stay in August. Write him a letter in German, giving up to three details for each point:",pts:["where you live and what your house is like","two things you will do together","why August is a good time to visit","what the weather is usually like in summer","how he will get from the airport to your house"]},
    {id:"goe2",kind:"de_ol_email",max:15,label:"E-mail · content 8 + expression 7 (25–30 words)",title:"You want to join a youth choir in Munich. Write an e-mail of 25–30 words in German:",pts:["introduce yourself: name and where you are from (2)","say how long you are staying in Munich (1)","give two reasons you want to join (2)","name one singer you like and say why (2)","ask one question about the choir (1)"]}
  ]
};

// ───────────── HIGHER ─────────────
const HL = {
  id:"", builtin:true, title:"LC German · Higher", subject:"German", cycle:"LC", level:"HL",
  source:"Styled on the SEC 2025 Higher Level paper and marking scheme", gradeBands: HL_GRADES,
  texts: {
    k1: "Immer mehr junge Deutsche verbringen nach dem Abitur ein Jahr im Ausland. Lena (19) hat zehn Monate als Au-pair in Kanada gearbeitet. „Am Anfang hatte ich großes Heimweh“, erzählt sie. „Aber ich habe gelernt, selbstständig zu sein, und mein Englisch ist viel besser geworden.“ Viele Eltern machen sich trotzdem Sorgen, weil ihre Kinder ein Jahr verlieren, bevor sie studieren. Experten meinen jedoch, dass Arbeitgeber solche Erfahrungen sehr schätzen.",
    k2: "Als Max die Tür öffnete, war die Wohnung dunkel. Niemand hatte an seinen Geburtstag gedacht, dachte er. Müde legte er seine Tasche auf den Boden. Plötzlich ging das Licht an, und zwanzig Stimmen riefen: „Überraschung!“ Seine Großmutter, die extra aus Wien gekommen war, stand in der ersten Reihe und lachte."
  },
  items: [
    {id:"kr1",skill:"Reading",type:"mcq",text:"k1",q:"Wie lange war Lena in Kanada?",opts:["Zehn Monate","Ein Jahr","Zwei Monate","Neunzehn Monate"],a:0},
    {id:"kr2",skill:"Reading",type:"mcq",text:"k1",q:"What problem did Lena have at the start?",opts:["She was very homesick","She could not speak English","She lost her job","She was ill"],a:0},
    {id:"kr3",skill:"Reading",type:"mcq",text:"k1",q:"Warum machen sich viele Eltern Sorgen?",opts:["Weil ihre Kinder ein Jahr verlieren, bevor sie studieren","Weil Kanada gefährlich ist","Weil Au-pairs wenig verdienen","Weil Lena nicht zurückkommen will"],a:0},
    {id:"kr4",skill:"Reading",type:"mcq",text:"k1",q:"What do the experts say?",opts:["Employers value such experiences highly","A gap year is a waste of time","The parents are right to worry","Students should study first"],a:0},
    {id:"kr5",skill:"Reading",type:"mcq",text:"k2",q:"Was dachte Max, als er nach Hause kam?",opts:["Niemand hatte an seinen Geburtstag gedacht","Er hatte den Schlüssel vergessen","Die Wohnung war leer geräumt","Seine Oma war krank"],a:0},
    {id:"kr6",skill:"Reading",type:"mcq",text:"k2",q:"Why is the grandmother’s presence special?",opts:["She had come all the way from Vienna","She organised the party","She is very old","She never laughs"],a:0},
    {id:"kf1",skill:"Find it",type:"short",lenient:true,text:"k1",q:"Finden Sie im Text ein Verb im Perfekt.",a:["hat gearbeitet","habe gelernt","ist geworden","ist besser geworden"]},
    {id:"kf2",skill:"Find it",type:"short",lenient:true,text:"k1",q:"Find the German for: “to be independent”",a:["selbstständig zu sein"]},
    {id:"kf3",skill:"Find it",type:"short",lenient:true,text:"k2",q:"Finden Sie im Text ein Verb im Plusquamperfekt.",a:["hatte gedacht","war gekommen"]},
    {id:"kf4",skill:"Find it",type:"short",lenient:true,text:"k2",q:"Find the German for: “suddenly”",a:["plötzlich"]},
    {id:"kg1",skill:"Grammar",type:"mcq",q:"Ich bleibe zu Hause, weil ich krank ___ .",opts:["bin","ist","sein","war ich"],a:0,why:"Weil sends the verb to the end: …weil ich krank bin."},
    {id:"kg2",skill:"Grammar",type:"mcq",q:"Wenn ich reich ___, würde ich reisen.",opts:["wäre","bin","war","sei"],a:0,why:"Konjunktiv II: wenn ich reich wäre."},
    {id:"kg3",skill:"Grammar",type:"mcq",q:"Trotz ___ Regens sind wir gewandert.",opts:["des","dem","der","den"],a:0,why:"Trotz + Genitiv: trotz des Regens."},
    {id:"kg4",skill:"Grammar",type:"mcq",q:"Ich interessiere mich ___ Musik.",opts:["für","an","auf","mit"],a:0,why:"Sich interessieren für."},
    {id:"kg5",skill:"Grammar",type:"mcq",q:"Das ist der Mann, ___ ich gestern gesehen habe.",opts:["den","der","dem","dessen"],a:0,why:"Relative pronoun, masculine accusative: den."},
    {id:"kg6",skill:"Grammar",type:"mcq",q:"Mit ___ Freunden fahre ich nach Berlin.",opts:["meinen","meine","meiner","mein"],a:0,why:"Mit + Dativ plural: meinen Freunden."},
    {id:"kg7",skill:"Grammar",type:"mcq",q:"Nachdem wir gegessen ___, gingen wir spazieren.",opts:["hatten","haben","sind","hätten"],a:0,why:"Nachdem + Plusquamperfekt."},
    {id:"kg8",skill:"Grammar",type:"mcq",q:"Ich freue mich ___ die Ferien.",opts:["auf","für","an","über"],a:0,why:"Sich freuen auf = look forward to."},
    {id:"kw1",skill:"Writing",type:"short",q:"Say it in German: “In my opinion”",a:["meiner Meinung nach","ich bin der Meinung","meines Erachtens"]},
    {id:"kw2",skill:"Writing",type:"short",q:"Say it in German: “On the one hand…” (first half of the pair)",a:["einerseits","auf der einen Seite"]},
    {id:"kw3",skill:"Writing",type:"short",q:"Say it in German: “Nowadays”",a:["heutzutage","heute"]},
    {id:"kw4",skill:"Writing",type:"short",q:"Say it in German: “I would like to study abroad.”",a:["ich möchte im Ausland studieren","ich würde gern im Ausland studieren","ich würde gerne im Ausland studieren"]},
    {id:"kw5",skill:"Writing",type:"short",q:"Say it in German: “If I had more time, I would do more sport.”",a:["wenn ich mehr Zeit hätte, würde ich mehr Sport machen","wenn ich mehr Zeit hätte, würde ich mehr Sport treiben"]},
    {id:"kw6",skill:"Writing",type:"short",q:"Say it in German: “I am looking forward to seeing you.”",a:["ich freue mich darauf, dich zu sehen","ich freue mich, dich zu sehen"]},
    {id:"kw7",skill:"Writing",type:"short",q:"Say it in German: “However” (one word)",a:["jedoch","allerdings","trotzdem"]},
    {id:"kw8",skill:"Writing",type:"short",q:"Say it in German: “All in all”",a:["alles in allem","zusammenfassend"]},
    {id:"kw9",skill:"Writing",type:"short",q:"Say it in German: “I have been learning German for five years.”",a:["ich lerne seit fünf Jahren Deutsch","ich lerne Deutsch seit fünf Jahren"]},
    {id:"kw10",skill:"Writing",type:"short",q:"Say it in German: “It is important to protect the environment.”",a:["es ist wichtig, die Umwelt zu schützen"]}
  ],
  tasks: [
    {id:"kae1",kind:"de_hl_aeusserung",max:25,label:"Äußerung zum Thema · content 13 + expression 12",title:"Thema: Handys im Alltag. Schreiben Sie zu A, B und C.",pts:["A: Wie benutzen Sie Ihr Handy im Alltag? (drei Sätze)","B: Sollte man Handys in der Schule verbieten? Begründen Sie Ihre Meinung in zwei Sätzen. Welche Probleme kann es dabei geben? (zwei Sätze)","C: Was machen Sie in Ihrer Freizeit ohne Handy? Was halten Sie von einem handyfreien Tag pro Woche? (vier Sätze)"]},
    {id:"kle1",kind:"de_hl_letter",max:50,label:"Letter · content 25 + expression 25 (about 160 words)",title:"Ihre deutsche Freundin Anna hat Ihnen geschrieben. Antworten Sie auf Deutsch und gehen Sie auf VIER der fünf Themen ein. Schreiben Sie ca. 160 Wörter.",pts:["A: Anna macht ein Praktikum. Haben Sie schon gearbeitet? Wo und wie war es? Was möchten Sie später beruflich machen? Warum?","B: Annas Schule hat ein Handyverbot. Was halten Sie davon? Warum? Wie oft benutzen Sie Ihr Handy, und wofür?","C: Anna war auf einem Konzert. Wann waren Sie zuletzt auf einem Konzert oder Fest? Wie war es? Welche Musik hören Sie gern? Warum?","D: Anna kommt im Sommer nach Irland. Was sollte sie unbedingt sehen? Warum? Was sollte sie mitbringen? Warum?","E: Anna macht sich Sorgen um die Umwelt. Was tun Sie selbst für die Umwelt? Was sollte die Regierung tun?"]},
    {id:"kph1",kind:"de_hl_photo",max:50,label:"Thema · five of six points · content 25 + expression 25",title:"Thema: Ehrenamt und Freiwilligenarbeit. Beantworten Sie FÜNF der sechs Punkte.",pts:["A: Beschreiben Sie in vier Sätzen, wie Sie anderen Menschen helfen.","B: Haben Sie schon einmal ehrenamtlich gearbeitet? Nennen Sie drei Gründe, warum junge Leute das tun sollten.","C: Ihr Jugendzentrum sucht Helfer für ein Sommerlager. Wie würden Sie helfen? (zwei Sätze) Was wäre schwierig? (zwei Sätze)","D: Sollte ein soziales Jahr nach der Schule Pflicht sein? Nennen Sie drei Gründe.","E: Welche Vorteile hat Freiwilligenarbeit für den Lebenslauf? Nennen Sie zwei. Welche Nachteile? Nennen Sie zwei.","F: Wer ist für Sie ein Vorbild? Warum? Nennen Sie drei Gründe."]},
    {id:"kae2",kind:"de_hl_aeusserung",max:25,label:"Äußerung zum Thema · content 13 + expression 12",title:"Thema: Ein Jahr im Ausland. Schreiben Sie zu A, B und C.",pts:["A: Wohin würden Sie gern für ein Jahr gehen, und warum? (drei Sätze)","B: Welche Vorteile hat ein Jahr im Ausland für Sie? (zwei Sätze) Welche Probleme kann es geben? (zwei Sätze)","C: Lena hatte Heimweh. Was vermissen Sie, wenn Sie weg von zu Hause sind? Was machen Sie dagegen? (vier Sätze)"]}
  ]
};

OL.items.push(
  {id:"do1",skill:"Writing",type:"order",q:"Build it: “I go to school by bus.”",words:["Ich","fahre","mit","dem","Bus","zur","Schule"]},
  {id:"do2",skill:"Writing",type:"order",q:"Build it: “Yesterday I played football.”",words:["Gestern","habe","ich","Fußball","gespielt"]},
  {id:"do3",skill:"Writing",type:"order",q:"Build it: “I would like to visit Berlin.”",words:["Ich","möchte","Berlin","besuchen"]},
  {id:"dm1",skill:"Vocab",type:"match",q:"Match them up.",pairs:[["der Bahnhof","the station"],["der Strand","the beach"],["das Wetter","the weather"],["die Hausaufgaben","homework"]]},
  {id:"dm2",skill:"Verbs",type:"match",q:"Match each verb to its meaning.",pairs:[["ich ging","I went"],["ich gehe","I go"],["ich werde gehen","I will go"],["ich würde gehen","I would go"]]},
  {id:"dt1",skill:"Reading",type:"mcq",text:"g1",q:"True or false: Jonas has a brother and a cat.",opts:["True","False"],fixed:true,a:1,why:"A sister and a dog."},
  {id:"dt2",skill:"Reading",type:"mcq",text:"g2",q:"True or false: The library has free Wi-Fi.",opts:["True","False"],fixed:true,a:0},
  {id:"dt3",skill:"Reading",type:"mcq",text:"g3",q:"True or false: The class went to the zoo by train.",opts:["True","False"],fixed:true,a:1,why:"Mit dem Bus: by bus."}
);
HL.items.push(
  {id:"ko1",skill:"Writing",type:"order",q:"Build it: “I stayed at home because I was ill.”",words:["Ich","blieb","zu","Hause,","weil","ich","krank","war"]},
  {id:"ko2",skill:"Writing",type:"order",q:"Build it: “If I had more time, I would travel.”",words:["Wenn","ich","mehr","Zeit","hätte,","würde","ich","reisen"]},
  {id:"ko3",skill:"Writing",type:"order",q:"Build it: “I am looking forward to the holidays.”",words:["Ich","freue","mich","auf","die","Ferien"]},
  {id:"km1",skill:"Vocab",type:"match",q:"Match the connectors.",pairs:[["jedoch","however"],["außerdem","furthermore"],["deshalb","therefore"],["trotz","despite"]]},
  {id:"km2",skill:"Grammar",type:"match",q:"Match the verb to its Perfekt.",pairs:[["fahren","ist gefahren"],["essen","hat gegessen"],["bleiben","ist geblieben"],["schreiben","hat geschrieben"]]},
  {id:"kt1",skill:"Reading",type:"mcq",text:"k1",q:"Richtig oder falsch? Lena hat als Au-pair in Kanada gearbeitet.",opts:["Richtig","Falsch"],fixed:true,a:0},
  {id:"kt2",skill:"Reading",type:"mcq",text:"k1",q:"Richtig oder falsch? Lenas Englisch ist schlechter geworden.",opts:["Richtig","Falsch"],fixed:true,a:1,why:"Es ist viel besser geworden."},
  {id:"kt3",skill:"Reading",type:"mcq",text:"k2",q:"Richtig oder falsch? Max’ Großmutter war aus Wien gekommen.",opts:["Richtig","Falsch"],fixed:true,a:0}
);

// ── More, mid-level, exam-style (2 Nov 2026) ──
Object.assign(OL.texts, {
  g4: "Hallo Mama! Ich bin mit Lisa ins Einkaufszentrum gegangen. Ich komme um halb acht zurück. Ich habe den Müll rausgebracht und bin mit dem Hund spazieren gegangen. Vergiss nicht: Morgen um zehn Uhr habe ich einen Termin beim Zahnarzt. Im Kühlschrank ist Pizza für heute Abend. Liebe Grüße, Mia",
  g5: "FERIENLAGER IN DEN ALPEN. Für Jugendliche von 14 bis 17 Jahren. Vom 3. bis 17. Juli. Aktivitäten: Wandern, Kanufahren und Klettern. Preis: 460 Euro mit Essen und Unterkunft. Bitte einen Schlafsack und Wanderschuhe mitbringen. Nur wenige Plätze: Anmeldung bis zum 31. Mai.",
  g6: "Hallo Seán! Ich schreibe dir aus Mallorca. Ich bin hier mit meinen Cousins in einem Hotel am Meer. Es ist sehr heiß, ungefähr 35 Grad, also sind wir den ganzen Tag am Strand. Gestern haben wir Fahrräder gemietet und sind in ein kleines Dorf in den Bergen gefahren. Das Essen ist lecker, aber alles ist ziemlich teuer. Am Sonntag fahre ich zurück nach Hamburg. Bis bald, Lea",
  g7: "Paul ist siebzehn Jahre alt und macht nächstes Jahr das Abitur. Er hat viel Stress, weil er gute Noten braucht. Er möchte Krankenpfleger werden. Jeden Nachmittag lernt er vier Stunden in der Bibliothek, aber freitags spielt er mit seinen Freunden Basketball, um abzuschalten. Er sagt, dass er durch den Sport besser schläft."
});
const TF = ["True","False"];
OL.items.push(
  {id:"dx1",skill:"Reading",type:"mcq",text:"g4",q:"Where has Mia gone?",opts:["To the shopping centre","To the supermarket","To the dentist","To the park"],a:0},
  {id:"dx2",skill:"Reading",type:"mcq",text:"g4",q:"What time will she be back?",opts:["7:30","8:30","6:30","10:00"],a:0,why:"Halb acht = half past seven."},
  {id:"dx3",skill:"Reading",type:"mcq",text:"g4",q:"What jobs has she done?",opts:["Taken out the rubbish and walked the dog","Made the dinner","Done the shopping","Tidied her room"],a:0},
  {id:"dx4",skill:"Reading",type:"mcq",text:"g4",q:"True or false: Mia has the dentist tomorrow at ten.",opts:TF,fixed:true,a:0},
  {id:"dx5",skill:"Reading",type:"mcq",text:"g5",q:"Who is the camp for?",opts:["Young people aged 14 to 17","Children under 12","Families","Students"],a:0},
  {id:"dx6",skill:"Reading",type:"mcq",text:"g5",q:"How long does the camp last?",opts:["Two weeks","One week","A month","A weekend"],a:0},
  {id:"dx7",skill:"Reading",type:"mcq",text:"g5",q:"Which activity is NOT mentioned?",opts:["Swimming","Hiking","Canoeing","Climbing"],a:0},
  {id:"dx8",skill:"Reading",type:"mcq",text:"g5",q:"What must you bring?",opts:["A sleeping bag and hiking boots","A tent","A bike","Your own food"],a:0},
  {id:"dx9",skill:"Reading",type:"mcq",text:"g6",q:"Who is Lea with?",opts:["Her cousins","Her parents","Her class","Her friends"],a:0},
  {id:"dx10",skill:"Reading",type:"mcq",text:"g6",q:"What did they do yesterday?",opts:["Hired bikes and went to a mountain village","Went on a boat","Went to a concert","Stayed at the hotel"],a:0},
  {id:"dx11",skill:"Reading",type:"mcq",text:"g6",q:"What is the downside?",opts:["Everything is quite expensive","The food","The weather","The hotel"],a:0},
  {id:"dx12",skill:"Reading",type:"mcq",text:"g6",q:"True or false: Lea goes home on Saturday.",opts:TF,fixed:true,a:1,why:"Am Sonntag: on Sunday."},
  {id:"dx13",skill:"Reading",type:"mcq",text:"g7",q:"Why is Paul stressed?",opts:["He needs good grades","He has a new job","He is moving house","He is ill"],a:0},
  {id:"dx14",skill:"Reading",type:"mcq",text:"g7",q:"What does he want to be?",opts:["A nurse","A doctor","A teacher","A footballer"],a:0},
  {id:"dx15",skill:"Reading",type:"mcq",text:"g7",q:"Why does he play basketball?",opts:["To switch off","To get fit for a match","His parents make him","To meet new people"],a:0},
  {id:"dx16",skill:"Find it",type:"short",lenient:true,text:"g4",q:"Find the German for: “Don’t forget”",a:["vergiss nicht"]},
  {id:"dx17",skill:"Find it",type:"short",lenient:true,text:"g4",q:"Find the German for: “in the fridge”",a:["im Kühlschrank"]},
  {id:"dx18",skill:"Find it",type:"short",lenient:true,text:"g5",q:"Find the German for: “sleeping bag”",a:["einen Schlafsack","Schlafsack"]},
  {id:"dx19",skill:"Find it",type:"short",lenient:true,text:"g6",q:"Find the German for: “it is very hot”",a:["es ist sehr heiß"]},
  {id:"dx20",skill:"Find it",type:"short",lenient:true,text:"g6",q:"Find the German for: “see you soon”",a:["bis bald"]},
  {id:"dx21",skill:"Find it",type:"short",lenient:true,text:"g7",q:"Find the German for: “every afternoon”",a:["jeden Nachmittag"]},
  {id:"dx22",skill:"Verbs",type:"mcq",q:"Normalerweise ___ ich um sieben Uhr auf.",opts:["stehe","stehen","steht","stand"],a:0,why:"Ich → stehe … auf."},
  {id:"dx23",skill:"Verbs",type:"mcq",q:"Heute ___ es sehr kalt.",opts:["ist","hat","macht","wird"],a:0,why:"Es ist kalt."},
  {id:"dx24",skill:"Verbs",type:"mcq",q:"Meine Eltern ___ Ärzte.",opts:["sind","haben","ist","seid"],a:0,why:"Sie (plural) → sind."},
  {id:"dx25",skill:"Verbs",type:"mcq",q:"Am Wochenende ___ ich einen Film gesehen.",opts:["habe","bin","hatte","werde"],a:0,why:"Sehen takes haben."},
  {id:"dx26",skill:"Verbs",type:"mcq",q:"Nächstes Jahr ___ ich an der Uni studieren.",opts:["werde","wurde","habe","bin"],a:0,why:"Future: werden + infinitive."},
  {id:"dx27",skill:"Verbs",type:"mcq",q:"In meiner Stadt gibt es ___ Schwimmbad.",opts:["ein","einen","eine","einer"],a:0,why:"Es gibt + accusative; das Schwimmbad → ein."},
  {id:"dx28",skill:"Verbs",type:"mcq",q:"Ich ___ Hunger. Ich möchte ein Brot.",opts:["habe","bin","mache","gehe"],a:0,why:"Hunger haben."},
  {id:"dx29",skill:"Verbs",type:"mcq",q:"Am Samstag ___ wir ins Restaurant gegangen.",opts:["sind","haben","seid","hatten"],a:0,why:"Gehen takes sein."},
  {id:"dx30",skill:"Writing",type:"short",q:"Say it in German: “Thanks for the present.”",a:["danke für das Geschenk","vielen Dank für das Geschenk","danke für dein Geschenk"]},
  {id:"dx31",skill:"Writing",type:"short",q:"Say it in German: “I’m hungry.”",a:["ich habe Hunger"]},
  {id:"dx32",skill:"Writing",type:"short",q:"Say it in German: “It’s raining.”",a:["es regnet"]},
  {id:"dx33",skill:"Writing",type:"short",q:"Say it in German: “I have a headache.”",a:["ich habe Kopfschmerzen","ich habe Kopfweh"]},
  {id:"dx34",skill:"Writing",type:"short",q:"Say it in German: “My mother is a nurse.”",a:["meine Mutter ist Krankenschwester","meine Mutter ist Krankenpflegerin"]},
  {id:"dx35",skill:"Writing",type:"short",q:"Say it in German: “I play tennis.”",a:["ich spiele Tennis"]},
  {id:"dx36",skill:"Writing",type:"short",q:"Say it in German: “I went to the beach.”",a:["ich bin an den Strand gegangen","ich bin zum Strand gegangen","ich bin an den Strand gefahren"]},
  {id:"do4",skill:"Writing",type:"order",q:"Build it: “I get up at seven o’clock.”",words:["Ich","stehe","um","sieben","Uhr","auf"]},
  {id:"do5",skill:"Writing",type:"order",q:"Build it: “At the weekend I visit my grandparents.”",words:["Am","Wochenende","besuche","ich","meine","Großeltern"]},
  {id:"do6",skill:"Writing",type:"order",q:"Build it: “I like playing football.”",words:["Ich","spiele","gern","Fußball"]},
  {id:"dm3",skill:"Vocab",type:"match",q:"Match the note phrases.",pairs:[["Ich bin weggegangen","I have gone out"],["Ich komme um acht zurück","I’ll be back at eight"],["Mach dir keine Sorgen","Don’t worry"],["Ruf mich an","Call me"]]},
  {id:"dm4",skill:"Vocab",type:"match",q:"Match the weather.",pairs:[["Es ist heiß","It’s hot"],["Es ist kalt","It’s cold"],["Es regnet","It’s raining"],["Es schneit","It’s snowing"]]},
  {id:"dm5",skill:"Vocab",type:"match",q:"Match the letter phrases.",pairs:[["Liebe Anna","Dear Anna"],["Viele Grüße","Best wishes"],["Danke für deinen Brief","Thanks for your letter"],["Schreib bald","Write soon"]]}
);
Object.assign(HL.texts, {
  k3: "Laut einer neuen Umfrage verbringen deutsche Jugendliche im Durchschnitt vier Stunden pro Tag am Handy. Viele Eltern machen sich Sorgen, weil sie glauben, dass ihre Kinder weniger schlafen und weniger lesen als früher. Die Jugendlichen dagegen verteidigen die sozialen Medien: Sie sagen, dass sie dadurch Kontakt mit ihren Freunden halten und neue Hobbys entdecken. Experten empfehlen den Familien klare Regeln, zum Beispiel kein Handy beim Essen und eine Stunde vor dem Schlafengehen.",
  k4: "Vor zwei Jahren hat die Stadt Neustadt Autos in der Innenstadt verboten. Am Anfang protestierten viele Geschäftsleute, weil sie dachten, dass sie Kunden verlieren würden. Heute dagegen sind die meisten zufrieden: Es gibt mehr Leute auf den Straßen und die Geschäfte verkaufen mehr. Außerdem ist die Luftverschmutzung um 60 Prozent gesunken und die Kinder können allein zur Schule gehen. „Wenn man mir das vor zehn Jahren gesagt hätte, hätte ich es nicht geglaubt“, sagt Thomas, Besitzer eines Cafés."
});
const RF = ["Richtig","Falsch"];
HL.items.push(
  {id:"kx1",skill:"Reading",type:"mcq",text:"k3",q:"How long do German teenagers spend on their phones?",opts:["Four hours a day on average","Two hours a day","Four hours a week","All evening"],a:0},
  {id:"kx2",skill:"Reading",type:"mcq",text:"k3",q:"Warum machen sich viele Eltern Sorgen?",opts:["Ihre Kinder schlafen und lesen weniger","Ihre Kinder geben zu viel Geld aus","Ihre Kinder haben keine Freunde","Ihre Kinder treiben keinen Sport"],a:0},
  {id:"kx3",skill:"Reading",type:"mcq",text:"k3",q:"What do the experts recommend?",opts:["Clear family rules, like no phones at meals or before bed","Banning phones for teens","Phones only at weekends","No phone until 16"],a:0},
  {id:"kx4",skill:"Reading",type:"mcq",text:"k3",q:"Richtig oder falsch? Die Jugendlichen sind mit ihren Eltern einer Meinung.",opts:RF,fixed:true,a:1,why:"Die Jugendlichen dagegen verteidigen die sozialen Medien."},
  {id:"kx5",skill:"Reading",type:"mcq",text:"k4",q:"Was hat die Stadt gemacht?",opts:["Sie hat Autos in der Innenstadt verboten","Sie hat ein Parkhaus gebaut","Sie hat die Geschäfte sonntags geschlossen","Sie hat eine Schule eröffnet"],a:0},
  {id:"kx6",skill:"Reading",type:"mcq",text:"k4",q:"Why did business people protest at first?",opts:["They thought they would lose customers","Rents went up","They had nowhere to park","The streets were dirty"],a:0},
  {id:"kx7",skill:"Reading",type:"mcq",text:"k4",q:"What has happened to air pollution?",opts:["It has fallen by 60%","It has doubled","It hasn’t changed","It has fallen by 6%"],a:0},
  {id:"kx8",skill:"Reading",type:"mcq",text:"k4",q:"What does Thomas mean?",opts:["He would never have believed it ten years ago","He wanted this ten years ago","He has had the café ten years","He doesn’t believe it now"],a:0},
  {id:"kx9",skill:"Reading",type:"mcq",text:"k4",q:"Richtig oder falsch? Die Kinder können jetzt allein zur Schule gehen.",opts:RF,fixed:true,a:0},
  {id:"kx10",skill:"Find it",type:"short",lenient:true,text:"k3",q:"Find the German for: “on average”",a:["im Durchschnitt"]},
  {id:"kx11",skill:"Find it",type:"short",lenient:true,text:"k3",q:"Finden Sie im Text ein Verb mit der Bedeutung „schützen, für etwas sprechen“.",a:["verteidigen"]},
  {id:"kx12",skill:"Find it",type:"short",text:"k4",q:"Finden Sie im Text ein Verb im Konjunktiv II.",a:["verlieren würden","würden","hätte","gesagt hätte","hätte geglaubt"]},
  {id:"kx13",skill:"Find it",type:"short",lenient:true,text:"k4",q:"Find the German for: “at the beginning”",a:["am Anfang"]},
  {id:"kx14",skill:"Find it",type:"short",lenient:true,text:"k4",q:"Find the German for: “on the other hand”",a:["dagegen"]},
  {id:"kx15",skill:"Grammar",type:"mcq",q:"Ich weiß nicht, ob er heute ___ .",opts:["kommt","kommt er","er kommt","komme"],a:0,why:"Ob sends the verb to the end."},
  {id:"kx16",skill:"Grammar",type:"mcq",q:"Als ich klein ___, wohnte ich in Cork.",opts:["war","bin","wäre","sei"],a:0,why:"Als + Präteritum: als ich klein war."},
  {id:"kx17",skill:"Grammar",type:"mcq",q:"Ich lerne Deutsch, ___ ich in Berlin arbeiten möchte.",opts:["weil","denn","aber","deshalb"],a:0,why:"Verb at the end → weil."},
  {id:"kx18",skill:"Grammar",type:"mcq",q:"Wenn ich mehr Geld ___, würde ich ein Auto kaufen.",opts:["hätte","habe","hatte","haben"],a:0,why:"Konjunktiv II: hätte."},
  {id:"kx19",skill:"Grammar",type:"mcq",q:"Ich wohne ___ fünf Jahren in Dublin.",opts:["seit","vor","für","während"],a:0,why:"Still true now → seit + Dativ."},
  {id:"kx20",skill:"Grammar",type:"mcq",q:"Wir fahren ___ Sommer nach Spanien.",opts:["im","am","um","in der"],a:0,why:"Seasons and months: im."},
  {id:"kx21",skill:"Grammar",type:"mcq",q:"Ich habe keine Lust, heute Abend ___ .",opts:["auszugehen","ausgehen","ausgegangen","gehe aus"],a:0,why:"Lust haben + zu + infinitive: auszugehen."},
  {id:"kx22",skill:"Grammar",type:"mcq",q:"Es ist schade, dass es hier so wenige Parks ___ .",opts:["gibt","gibt es","geben","gab es"],a:0,why:"Dass sends the verb to the end."},
  {id:"kx23",skill:"Writing",type:"short",q:"Say it in German: “I agree.”",a:["ich bin einverstanden","ich stimme zu","ich bin der gleichen Meinung","das finde ich auch"]},
  {id:"kx24",skill:"Writing",type:"short",q:"Say it in German: “Furthermore”",a:["außerdem","darüber hinaus","zudem"]},
  {id:"kx25",skill:"Writing",type:"short",q:"Say it in German: “Social media”",a:["die sozialen Medien","soziale Medien","die sozialen Netzwerke","soziale Netzwerke"]},
  {id:"kx26",skill:"Writing",type:"short",q:"Say it in German: “The environment”",a:["die Umwelt"]},
  {id:"kx27",skill:"Writing",type:"short",q:"Say it in German: “I think that…”",a:["ich denke, dass","ich glaube, dass","ich finde, dass","ich meine, dass"]},
  {id:"kx28",skill:"Writing",type:"short",q:"Say it in German: “It depends.”",a:["es kommt darauf an","das kommt darauf an","es hängt davon ab"]},
  {id:"kx29",skill:"Writing",type:"short",q:"Say it in German: “Thanks for everything.”",a:["danke für alles","vielen Dank für alles"]},
  {id:"ko4",skill:"Writing",type:"order",q:"Build it: “I don’t think that it is a good idea.”",words:["Ich","glaube","nicht,","dass","es","eine","gute","Idee","ist"]},
  {id:"ko5",skill:"Writing",type:"order",q:"Build it: “When I finish school, I will travel.”",words:["Wenn","ich","mit","der","Schule","fertig","bin,","werde","ich","reisen"]},
  {id:"km3",skill:"Vocab",type:"match",q:"Match the opinion phrases.",pairs:[["Ich bin einverstanden","I agree"],["Meiner Meinung nach","In my opinion"],["Man muss","You have to"],["Es lohnt sich","It’s worth it"]]},
  {id:"km4",skill:"Vocab",type:"match",q:"Match the environment words.",pairs:[["die Umwelt","the environment"],["die Luftverschmutzung","air pollution"],["das Recycling","recycling"],["der Klimawandel","climate change"]]}
);
LOOPS_SUBJECTS.de = { name: "German", flag: "🇩🇪", colour: "de", OL, HL };
})();
