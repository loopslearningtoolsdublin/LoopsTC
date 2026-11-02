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
LOOPS_SUBJECTS.de = { name: "German", flag: "🇩🇪", colour: "de", OL, HL };
})();
