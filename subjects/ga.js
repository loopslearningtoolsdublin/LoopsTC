// ═══════════════════════════════════════════════
// LOOPS · LC GAEILGE — Ardleibhéal + Gnáthleibhéal, Páipéar 1 agus Páipéar 2
// Styled on the SEC 2025 papers:
//   P1: Cluastuiscint (not covered here) + Ceapadóireacht (AL: 100 marc; GL: dhá cheann de A–D, 50 marc an ceann)
//   P2: Léamhthuiscint (100), Prós, Filíocht (+ Litríocht Bhreise AL)
// Prescribed texts are asked ABOUT, never reproduced.
// The Ábhar / Cumas Gaeilge split in the Worker should be confirmed by an Irish teacher against the SEC scheme.
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));
const FB = ["Fíor","Bréagach"];

const TEXTS = {
  g1: "Is as Conamara é Seán Ó Flatharta agus tá sé seacht mbliana déag d’aois. Gach maidin, éiríonn sé ar a sé a chlog chun traenáil a dhéanamh ar an trá. Anuraidh, bhuaigh sé bonn óir i gcomórtas lúthchleasaíochta na hÉireann. ‘Bhí mé ar bís,’ a deir sé, ‘ach bhí mo mháthair níos sásta ná mé!’ Ba mhaith leis dul go dtí na Cluichí Oilimpeacha lá éigin, ach deir sé go bhfuil a chuid scrúduithe tábhachtach freisin.",
  g2: "Gach samhradh, téann na mílte déagóirí go dtí an Ghaeltacht. Fanann siad le teaghlach áitiúil, agus tugann ‘bean an tí’ aire dóibh. Bíonn ranganna Gaeilge acu ar maidin agus spórt, ceol agus céilithe acu san iarnóin agus san oíche. Deir go leor daltaí gurb é an chéad uair a labhair siad Gaeilge go nádúrtha. Ní bhíonn cead acu Béarla a labhairt, agus má labhraíonn, d’fhéadfaí iad a chur abhaile!",
  g3: "Tá níos mó daoine óga ná riamh ag úsáid na meán sóisialta. Creideann roinnt saineolaithe go gcuireann siad isteach ar chodladh agus ar fhéinmhuinín na ndéagóirí. Os a choinne sin, áitíonn daoine eile go gcabhraíonn na meáin le daoine óga fanacht i dteagmháil lena gcairde agus eolas a fháil go tapa. Is léir go bhfuil gá le cothromaíocht."
};

const P1 = [
  // Gramadach (needed for the ceapadóireacht)
  {id:"gg1",skill:"Gramadach",type:"mcq",q:"Inné ___ mé go dtí an siopa.",opts:["chuaigh","téim","rachaidh","théinn"],a:0,why:"Inné → an aimsir chaite: chuaigh mé."},
  {id:"gg2",skill:"Gramadach",type:"mcq",q:"Gach lá ___ mé mo bhricfeasta ar a hocht.",opts:["ithim","d’ith","íosfaidh","d’íosfainn"],a:0,why:"Gach lá → an aimsir láithreach: ithim."},
  {id:"gg3",skill:"Gramadach",type:"mcq",q:"Amárach ___ mé cuairt ar mo sheanmháthair.",opts:["tabharfaidh","thug","tugaim","thabharfainn"],a:0,why:"Amárach → an aimsir fháistineach."},
  {id:"gg4",skill:"Gramadach",type:"mcq",q:"Dá mbeadh airgead agam, ___ mé carr.",opts:["cheannóinn","cheannaigh","ceannaím","ceannóidh"],a:0,why:"Dá → an modh coinníollach."},
  {id:"gg5",skill:"Gramadach",type:"mcq",q:"___ mé ag obair gach Satharn.",opts:["Bím","Tá","Bhí","Beidh"],a:0,why:"Gach Satharn = something habitual → bím."},
  {id:"gg6",skill:"Gramadach",type:"mcq",q:"mo + bád = ",opts:["mo bhád","mo bád","mo mbád","mo t-bád"],a:0,why:"Séimhiú after mo."},
  {id:"gg7",skill:"Gramadach",type:"mcq",q:"ar an + bord = ",opts:["ar an mbord","ar an bhord","ar an bord","ar an t-bord"],a:0,why:"Urú after ar an (in the standard)."},
  {id:"gg8",skill:"Gramadach",type:"mcq",q:"i + Gaillimh = ",opts:["i nGaillimh","i Ghaillimh","i Gaillimh","in Gaillimh"],a:0,why:"Urú after i."},
  {id:"gg9",skill:"Gramadach",type:"mcq",q:"an + athair = ",opts:["an t-athair","an athair","an hathair","an tathair"],a:0,why:"Masculine noun starting with a vowel → t- after an."},
  {id:"gg10",skill:"Gramadach",type:"mcq",q:"dhá + cat = ",opts:["dhá chat","dhá cat","dhá gcat","dhá cait"],a:0,why:"Séimhiú after dhá."},
  {id:"gg11",skill:"Gramadach",type:"mcq",q:"ag + mé = ",opts:["agam","agat","aige","againn"],a:0},
  {id:"gg12",skill:"Gramadach",type:"mcq",q:"le + í = ",opts:["léi","leis","liom","leo"],a:0},
  {id:"gg13",skill:"Gramadach",type:"mcq",q:"do + iad = ",opts:["dóibh","dó","di","dúinn"],a:0},
  {id:"gg14",skill:"Gramadach",type:"mcq",q:"Ní ___ mé an scannán sin riamh.",opts:["fhaca","chonaic","feicim","bhfaca"],a:0,why:"Ní + aimsir chaite of feic → ní fhaca."},
  {id:"gg15",skill:"Gramadach",type:"mcq",q:"An ___ tú go dtí an cluiche aréir?",opts:["ndeachaigh","chuaigh","téann","rachaidh"],a:0,why:"An + aimsir chaite of téigh → an ndeachaigh."},
  // Nathanna don cheapadóireacht
  {id:"gn1",skill:"Nathanna",type:"match",q:"Meaitseáil na nathanna.",pairs:[["Ar an gcéad dul síos","First of all"],["Mar fhocal scoir","In conclusion"],["Os a choinne sin","On the other hand"],["Gan amhras","Without doubt"]]},
  {id:"gn2",skill:"Nathanna",type:"match",q:"Meaitseáil na nathanna.",pairs:[["I mo thuairim","In my opinion"],["Ina theannta sin","In addition to that"],["Is fiú a lua","It is worth mentioning"],["Dá bhrí sin","Therefore"]]},
  {id:"gn3",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “I’m hungry.”",a:["tá ocras orm"]},
  {id:"gn4",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “I’m tired.”",a:["tá tuirse orm","táim tuirseach","tá mé tuirseach"]},
  {id:"gn5",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “In my opinion”",a:["i mo thuairim","dar liom","is é mo thuairim"]},
  {id:"gn6",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “Thank you very much.”",a:["go raibh míle maith agat","go raibh maith agat"]},
  {id:"gn7",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “the environment”",a:["an timpeallacht","an comhshaol"]},
  {id:"gn8",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “social media”",a:["na meáin shóisialta","meáin shóisialta"]},
  {id:"gn9",skill:"Nathanna",type:"short",q:"Abair i nGaeilge: “I agree.”",a:["aontaím","aontaím leis sin","táim ar aon intinn","tá mé ar aon intinn"]},
  {id:"gn10",skill:"Nathanna",type:"mcq",q:"Cad is brí le “ceangal cinnte leanúnach” sa cheapadóireacht?",opts:["A clear, continuous link between the title and the content","A long introduction","A list of words","The word count"],a:0},
  {id:"gn11",skill:"Nathanna",type:"order",q:"Cuir in ord: “I would like to go to the Gaeltacht.”",words:["Ba","mhaith","liom","dul","go","dtí","an","Ghaeltacht"]},
  {id:"gn12",skill:"Nathanna",type:"order",q:"Cuir in ord: “Yesterday I played football with my friends.”",words:["Inné","d’imir","mé","peil","le","mo","chairde"]},
  {id:"gn13",skill:"Nathanna",type:"match",q:"Meaitseáil an cineál ceapadóireachta.",pairs:[["Díospóireacht","Debate"],["Óráid","Speech"],["Aiste","Essay"],["Scéal","Story"]]}
];

const P2 = [
  // Léamhthuiscint
  {id:"gl1",skill:"Léamhthuiscint",type:"mcq",text:"g1",q:"Cén t-am a éiríonn Seán gach maidin?",opts:["Ar a sé a chlog","Ar a seacht a chlog","Ar a hocht a chlog","Ar a naoi a chlog"],a:0},
  {id:"gl2",skill:"Léamhthuiscint",type:"mcq",text:"g1",q:"Cad a bhuaigh Seán anuraidh?",opts:["Bonn óir","Bonn airgid","Corn peile","Duais airgid"],a:0},
  {id:"gl3",skill:"Léamhthuiscint",type:"mcq",text:"g1",q:"Cé a bhí níos sásta ná Seán?",opts:["A mháthair","A athair","A chóitseálaí","A dheirfiúr"],a:0},
  {id:"gl4",skill:"Léamhthuiscint",type:"mcq",text:"g1",q:"Fíor nó bréagach? Deir Seán nach bhfuil a chuid scrúduithe tábhachtach.",opts:FB,fixed:true,a:1,why:"Deir sé go bhfuil a chuid scrúduithe tábhachtach freisin."},
  {id:"gl5",skill:"Léamhthuiscint",type:"mcq",text:"g2",q:"Cá bhfanann na daltaí sa Ghaeltacht?",opts:["Le teaghlach áitiúil","In óstán","I bpuball","Sa scoil"],a:0},
  {id:"gl6",skill:"Léamhthuiscint",type:"mcq",text:"g2",q:"Cad a bhíonn ar siúl san iarnóin agus san oíche?",opts:["Spórt, ceol agus céilithe","Ranganna Gaeilge","Obair bhaile","Scrúduithe"],a:0},
  {id:"gl7",skill:"Léamhthuiscint",type:"mcq",text:"g2",q:"Cad a tharlaíonn má labhraíonn dalta Béarla?",opts:["D’fhéadfaí é a chur abhaile","Faigheann sé duais","Ní tharlaíonn aon rud","Caithfidh sé amhrán a chanadh"],a:0},
  {id:"gl8",skill:"Léamhthuiscint",type:"mcq",text:"g3",q:"Cad a cheapann roinnt saineolaithe faoi na meáin shóisialta?",opts:["Go gcuireann siad isteach ar chodladh agus ar fhéinmhuinín","Go gcabhraíonn siad le hobair scoile","Go bhfuil siad go hiomlán slán","Nach n-úsáideann daoine óga iad"],a:0},
  {id:"gl9",skill:"Léamhthuiscint",type:"short",text:"g3",lenient:true,q:"Aimsigh an frása sa téacs a chiallaíonn “on the other hand”.",a:["os a choinne sin"]},
  {id:"gl10",skill:"Léamhthuiscint",type:"short",text:"g1",lenient:true,q:"Aimsigh briathar san aimsir chaite in Alt 1.",a:["bhuaigh","bhí"]},
  {id:"gl11",skill:"Léamhthuiscint",type:"short",text:"g2",lenient:true,q:"Aimsigh briathar san aimsir láithreach.",a:["téann","fanann","bíonn","deir","labhraíonn"]},
  {id:"gl12",skill:"Léamhthuiscint",type:"short",text:"g1",lenient:true,q:"Aimsigh briathar sa mhodh coinníollach.",a:["ba mhaith"]},
  // Prós agus filíocht (about the prescribed texts; never quoting them)
  {id:"gp1",skill:"Litríocht",type:"match",q:"Meaitseáil an téacs leis an údar.",pairs:[["Hurlamaboc","Éilís Ní Dhuibhne"],["Dís","Siobhán Ní Shúilleabháin"],["An tEarrach Thiar","Máirtín Ó Direáin"],["Mo Ghrá-sa (idir lúibíní)","Nuala Ní Dhomhnaill"]]},
  {id:"gp2",skill:"Litríocht",type:"mcq",q:"In “Oisín i dTír na nÓg”, cad a tharlaíonn nuair a thagann Oisín anuas den chapall?",opts:["Éiríonn sé ina sheanfhear","Imíonn sé ar ais go Tír na nÓg","Buann sé cath","Pósann sé Niamh"],a:0},
  {id:"gp3",skill:"Litríocht",type:"mcq",q:"Cé a thug Oisín go Tír na nÓg?",opts:["Niamh Chinn Óir","Gráinne","Deirdre","Méabh"],a:0},
  {id:"gp4",skill:"Litríocht",type:"mcq",q:"Is é an spailpín fánach in “An Spailpín Fánach”…",opts:["Oibrí feirme a théann ó áit go háit ag lorg oibre","Rí","Sagart","Iascaire saibhir"],a:0},
  {id:"gp5",skill:"Litríocht",type:"mcq",q:"Sa dán “Colscaradh”, cad atá i gceist?",opts:["Fear agus bean a bhfuil tuairimí difriúla acu faoin saol a theastaíonn uathu","Cath idir dhá thír","Turas farraige","Bás seanduine"],a:0},
  {id:"gp6",skill:"Litríocht",type:"mcq",q:"Sa dán “Mo Ghrá-sa (idir lúibíní)”, déanann an file…",opts:["Magadh ar ghnáthdhánta grá","Cur síos ar an bhfarraige","Caoineadh ar chara","Moladh ar rí"],a:0},
  {id:"gp7",skill:"Litríocht",type:"mcq",q:"Sa ghearrscéal “Dís”, tá fear agus bean ag caint…",opts:["Nuair a thagann bean suirbhé chuig an teach","Ar an traein","Ar a laethanta saoire","Sa scoil"],a:0},
  {id:"gp8",skill:"Litríocht",type:"mcq",q:"Sa dán “An tEarrach Thiar”, déanann an file cur síos ar…",opts:["Radhairc ón earrach in Árainn, mar a chuimhníonn sé orthu","An chathair mhór","Cogadh","Scoil"],a:0},
  {id:"gp9",skill:"Litríocht",type:"mcq",q:"Agus tú ag freagairt ar an bPrós Roghnach, ní mór duit…",opts:["Teideal an téacs agus ainm an údair a scríobh go cruinn","An téacs ar fad a chóipeáil","Scríobh i mBéarla","Téacs ainmnithe a úsáid"],a:0},
  {id:"gp10",skill:"Litríocht",type:"match",q:"Meaitseáil na téarmaí filíochta.",pairs:[["Íomhá","Image"],["Téama","Theme"],["Mothúchán","Emotion"],["Meafar","Metaphor"]]}
];
P1.forEach(i => i.paper = 1); P2.forEach(i => i.paper = 2);

const HL = {
  id:"", builtin:true, title:"LC Gaeilge · Ardleibhéal", subject:"Gaeilge", cycle:"LC", level:"HL",
  source:"Styled on the SEC 2025 Higher Level papers", gradeBands: HL_GRADES, texts: TEXTS,
  papers: {1:"Páipéar 1", 2:"Páipéar 2"},
  items: P1.concat(P2),
  tasks: [
    {id:"gah1",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Aiste · 100 marc",title:"Aiste: “Na meáin shóisialta – cara nó namhaid don óige?”",pts:[]},
    {id:"gah2",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Díospóireacht · 100 marc",title:"Díospóireacht: “Tá an iomarca brú ar dhaltaí na hArdteistiméireachta.” Scríobh an chaint a thabharfá ar son nó in aghaidh an rúin.",pts:[]},
    {id:"gah3",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Scéal · 100 marc",title:"Scéal a bhfuil an teideal seo air: “An oíche nach ndéanfaidh mé dearmad uirthi go deo.”",pts:[]},
    {id:"gah4",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Óráid · 100 marc",title:"Óráid: Tá tú ag labhairt le daltaí na scoile faoin tábhacht a bhaineann le caitheamh aimsire do dhaoine óga. Scríobh an óráid.",pts:[]},
    {id:"gah5",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Léamhthuiscint · 7 + 8 + 15",case:"TÉACS: " + TEXTS.g3,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cad é tuairim roinnt saineolaithe faoi na meáin shóisialta? (Alt 1)","(b) Luaigh dhá bhuntáiste a bhaineann leis na meáin shóisialta, de réir an téacs.","(c) Aimsigh sampla de bhriathar sa mhodh coinníollach nó san aimsir láithreach sa téacs, agus tabhair do thuairim féin ar an ábhar (timpeall 60 focal)."],marks:[7,8,15]},
    {id:"gah6",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Prós · 30 marc",title:"Prós Ainmnithe: Hurlamaboc nó Oisín i dTír na nÓg.",pts:["“Is léir go bhfuil coimhlint lárnach sa scéal.” Déan plé ar an ráiteas sin maidir le ceann amháin de na téacsanna thuas."],marks:[30]},
    {id:"gah7",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Filíocht · 15 + 6 + 9",title:"Filíocht Ainmnithe: Colscaradh.",pts:["(i) Déan plé ar na tuairimí difriúla faoin bpósadh atá ag an bhfear agus ag an mbean sa dán.","(ii) Cén mothúchán is láidre sa dán, dar leat? Cuir fáth le do fhreagra.","(iii) Scríobh nóta gairid ar shaol agus ar shaothar an fhile."],marks:[15,6,9]}
  ]
};
const OL = {
  id:"", builtin:true, title:"LC Gaeilge · Gnáthleibhéal", subject:"Gaeilge", cycle:"LC", level:"OL",
  source:"Styled on the SEC 2025 Ordinary Level papers", gradeBands: OL_GRADES, texts: TEXTS,
  papers: {1:"Páipéar 1", 2:"Páipéar 2"},
  items: P1.concat(P2),
  tasks: [
    {id:"gao1",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · A: Blag · 50 marc",title:"Blag: Scríobh blag faoi lá iontach a bhí agat le do chairde. (Leathleathanach nó mar sin.)",pts:[]},
    {id:"gao2",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · B: Scéal · 50 marc",title:"Scéal a thosaíonn leis na focail seo: “Bhí an bus déanach agus bhí an bháisteach ag titim…”",pts:[]},
    {id:"gao3",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · C: Litir/Ríomhphost · 50 marc",title:"Ríomhphost: Tá tú sa Ghaeltacht. Scríobh ríomhphost chuig do chara faoin teaghlach, faoi na ranganna agus faoi na céilithe.",pts:[]},
    {id:"gao4",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · D: Comhrá · 50 marc",title:"Comhrá: Ba mhaith leat post páirtaimseartha a fháil. Scríobh an comhrá idir tú féin agus do thuismitheoir faoi.",pts:[]},
    {id:"gao5",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Léamhthuiscint · 10 + 10 + 10",case:"TÉACS: " + TEXTS.g2,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cá bhfanann na daltaí sa Ghaeltacht?","(b) Luaigh dhá rud a dhéanann na daltaí sa Ghaeltacht.","(c) Cad a tharlaíonn má labhraíonn dalta Béarla?"],marks:[10,10,10]},
    {id:"gao6",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Prós · 25 marc",title:"Prós Ainmnithe: Oisín i dTír na nÓg.",pts:["Déan cur síos ar an méid a tharla nuair a d’fhill Oisín ar Éirinn."],marks:[25]},
    {id:"gao7",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Filíocht · 8 + 8 + 9",title:"Filíocht Ainmnithe: An tEarrach Thiar.",pts:["(i) Scríobh síos dhá phointe eolais faoin áit atá i gceist sa dán.","(ii) Cén mothúchán atá ag an bhfile sa dán? Tabhair fáth amháin.","(iii) Ar thaitin an dán leat? Tabhair dhá fháth le do fhreagra."],marks:[8,8,9]}
  ]
};

// ── A bigger pool of marked questions (3 Nov 2026) ──
HL.tasks.push(
  {id:"gah8",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Aiste · 100 marc",title:"Aiste: “An timpeallacht – is í an fhadhb is mó atá romhainn.”",pts:[]},
  {id:"gah9",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Alt · 100 marc",title:"Alt nuachtáin: Scríobh alt don nuachtán scoile faoi dhuine a bhfuil meas mór agat air nó uirthi.",pts:[]}
);
OL.tasks.push(
  {id:"gao8",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · A: Blag · 50 marc",title:"Blag: Scríobh blag faoi do chaitheamh aimsire is fearr leat. (Leathleathanach nó mar sin.)",pts:[]},
  {id:"gao9",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · C: Litir/Ríomhphost · 50 marc",title:"Litir: Scríobh litir chuig do chara faoi phost samhraidh a bhí agat.",pts:[]}
);
// ── I dtreo 20 an leibhéal (4 Samhain 2026) ──
const G4 = "TÉACS: Tá spórt na mban ag dul ó neart go neart in Éirinn. Le blianta beaga anuas, bíonn na mílte duine ag freastal ar chluichí ceannais peile na mban i bPáirc an Chrócaigh. Deir imreoirí go bhfuil níos mó cailíní óga ag glacadh páirte sa spórt anois toisc go bhfeiceann siad eiseamláirí ar an teilifís. Mar sin féin, áitíonn go leor daoine nach bhfaigheann foirne na mban an tacaíocht airgid chéanna is a fhaigheann foirne na bhfear, agus go gcaithfear é sin a athrú.";
const G5 = "TÉACS: Tá Aoife ocht mbliana déag d’aois agus oibríonn sí i gcaifé i nGaillimh gach Satharn. Tosaíonn sí ag a hocht a chlog ar maidin. Glanann sí na boird, déanann sí caife agus labhraíonn sí leis na custaiméirí. ‘Is breá liom an post,’ a deir sí, ‘mar buailim le daoine nua gach lá.’ Sábhálann sí a cuid airgid mar ba mhaith léi dul go dtí an Spáinn an samhradh seo chugainn lena cairde.";
const G1 = "TÉACS: " + TEXTS.g1;
HL.tasks.push(
  {id:"gah10",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Scéal · 100 marc",title:"Scéal dar teideal “An Rún”.",pts:[]},
  {id:"gah11",kind:"ga_hl_ceap",paper:1,max:100,label:"Páipéar 1 · Blag · 100 marc",title:"Blag: Scríobh blag faoin saol i do cheantar féin agus faoi na hathruithe ba mhaith leat a fheiceáil ann.",pts:[]},
  {id:"gah12",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Léamhthuiscint · 7 + 8 + 15",case:G4,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cad atá ag tarlú do spórt na mban in Éirinn, de réir an téacs?","(b) Cén fáth a bhfuil níos mó cailíní óga ag glacadh páirte sa spórt anois?","(c) An aontaíonn tú gur cheart an tacaíocht airgid chéanna a thabhairt d’fhoirne na mban agus d’fhoirne na bhfear? Tabhair do thuairim (timpeall 60 focal)."],marks:[7,8,15]},
  {id:"gah13",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Léamhthuiscint · 7 + 8 + 15",case:G1,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cad a dhéanann Seán gach maidin, agus cén fáth?","(b) Conas a mhothaigh Seán agus a mháthair nuair a bhuaigh sé an bonn?","(c) An bhfuil sé deacair spórt agus scrúduithe a chothromú? Tabhair do thuairim féin (timpeall 60 focal)."],marks:[7,8,15]},
  {id:"gah14",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Prós · 30 marc",title:"Prós Ainmnithe: Dís.",pts:["“Léiríonn an scéal Dís an t-uaigneas atá i saol na mná.” Déan plé ar an ráiteas sin."],marks:[30]},
  {id:"gah15",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Prós · 30 marc",title:"Prós Ainmnithe: An Gnáthrud.",pts:["Déan plé ar an gcaoi a léiríonn an t-údar tionchar an fhoréigin ar ghnáthshaol an teaghlaigh sa ghearrscéal An Gnáthrud."],marks:[30]},
  {id:"gah16",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Prós · 30 marc",title:"Prós Ainmnithe: Seal i Neipeal.",pts:["“Is duine fiosrach, oscailte é an t-údar in Seal i Neipeal.” Déan plé ar an ráiteas sin."],marks:[30]},
  {id:"gah17",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Prós · 30 marc",title:"Prós Ainmnithe: Cáca Milis (scannán).",pts:["Déan plé ar an gcaidreamh idir Catherine agus Paul sa scannán Cáca Milis."],marks:[30]},
  {id:"gah18",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Filíocht · 15 + 6 + 9",title:"Filíocht Ainmnithe: Géibheann.",pts:["(i) Déan plé ar an gcodarsnacht idir saol an ainmhí roimhe seo agus a shaol anois sa dán.","(ii) Cad é an mothúchán is láidre sa dán, dar leat? Cuir fáth le do fhreagra.","(iii) Scríobh nóta gairid ar an meafar atá lárnach sa dán."],marks:[15,6,9]},
  {id:"gah19",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Filíocht · 15 + 6 + 9",title:"Filíocht Ainmnithe: Mo Ghrá-sa (idir lúibíní).",pts:["(i) Cén pictiúr den fhear a fhaighimid sa dán? Déan plé.","(ii) An dán grá traidisiúnta é seo, dar leat? Cuir fáth le do fhreagra.","(iii) Scríobh nóta gairid ar an ngreann sa dán."],marks:[15,6,9]},
  {id:"gah20",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Filíocht · 15 + 6 + 9",title:"Filíocht Ainmnithe: An Spailpín Fánach.",pts:["(i) Déan plé ar an saol crua a bhí ag an spailpín, de réir an dáin.","(ii) Cén mothúchán atá le brath sa dán? Cuir fáth le do fhreagra.","(iii) Scríobh nóta gairid ar an gcúlra stairiúil a bhaineann leis an dán."],marks:[15,6,9]}
);
OL.tasks.push(
  {id:"gao10",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · B: Scéal · 50 marc",title:"Scéal a thosaíonn leis na focail seo: “D’oscail mé an doras agus ní raibh mé in ann mo shúile a chreidiúint…”",pts:[]},
  {id:"gao11",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · D: Comhrá · 50 marc",title:"Comhrá: Tá tú féin agus do chara ag pleanáil turas don deireadh seachtaine. Scríobh an comhrá.",pts:[]},
  {id:"gao12",kind:"ga_ol_ceap",paper:1,max:50,label:"Páipéar 1 · A: Blag · 50 marc",title:"Blag: Scríobh blag faoi lá spóirt i do scoil. (Leathleathanach nó mar sin.)",pts:[]},
  {id:"gao13",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Léamhthuiscint · 10 + 10 + 10",case:G5,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cá n-oibríonn Aoife, agus cén lá?","(b) Luaigh dhá rud a dhéanann sí sa phost.","(c) Cén fáth a bhfuil sí ag sábháil airgid?"],marks:[10,10,10]},
  {id:"gao14",kind:"ga_parts",paper:2,max:30,label:"Páipéar 2 · Léamhthuiscint · 10 + 10 + 10",case:G1,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cén aois é Seán, agus cárb as é?","(b) Cad a bhuaigh sé anuraidh?","(c) Cad ba mhaith leis a dhéanamh lá éigin?"],marks:[10,10,10]},
  {id:"gao15",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Prós · 25 marc",title:"Prós Ainmnithe: Hurlamaboc.",pts:["Déan cur síos ar an gcóisir sa scéal Hurlamaboc agus ar an teaghlach."],marks:[25]},
  {id:"gao16",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Prós · 25 marc",title:"Prós Ainmnithe: Dís.",pts:["Déan cur síos ar an mbean sa scéal Dís agus ar a saol."],marks:[25]},
  {id:"gao17",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Prós · 25 marc",title:"Prós Ainmnithe: Cáca Milis (scannán).",pts:["Déan cur síos ar an méid a tharlaíonn ar an traein sa scannán Cáca Milis."],marks:[25]},
  {id:"gao18",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Filíocht · 8 + 8 + 9",title:"Filíocht Ainmnithe: Géibheann.",pts:["(i) Cén sórt ainmhí atá i gceist sa dán? Cá bhfuil sé anois?","(ii) Cén mothúchán atá ag an ainmhí? Tabhair fáth amháin.","(iii) Ar thaitin an dán leat? Tabhair dhá fháth le do fhreagra."],marks:[8,8,9]},
  {id:"gao19",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Filíocht · 8 + 8 + 9",title:"Filíocht Ainmnithe: Colscaradh.",pts:["(i) Cén sórt saoil a theastaigh ón bhfear?","(ii) Cén sórt saoil a theastaigh ón mbean?","(iii) Cé acu ab fhearr leat, saol an fhir nó saol na mná? Tabhair dhá fháth."],marks:[8,8,9]},
  {id:"gao20",kind:"ga_parts",paper:2,max:25,label:"Páipéar 2 · Filíocht · 8 + 8 + 9",title:"Filíocht Ainmnithe: An Spailpín Fánach.",pts:["(i) Cén sórt oibre a dhéanadh an spailpín?","(ii) Cén mothúchán atá aige sa dán? Tabhair fáth amháin.","(iii) Ar thaitin an dán leat? Tabhair dhá fháth le do fhreagra."],marks:[8,8,9]}
);
HL.store = "loops_lchl_ga_v1"; OL.store = "loops_lcol_ga_v1";
LOOPS_SUBJECTS.ga = { name: "Gaeilge", flag: "☘️", native: "Gaeilge", colour: "ga", OL, HL };
})();
