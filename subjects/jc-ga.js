// ═══════════════════════════════════════════════
// LOOPS · JUNIOR CYCLE GAEILGE (T2) — first version (4 Nov 2026)
// Styled on the SEC Junior Cycle papers (see the JC research in the Loops project).
// Warm-ups reuse the easier Leaving Cert Ordinary items where they fit; JC-specific banks grow next.
// ═══════════════════════════════════════════════
(function(){
const JC_GRADES = [["Distinction",85],["Higher Merit",70],["Merit",55],["Achieved",40],["Partially Achieved",20],["Not Graded",0]].map(([g,min]) => ({g,min}));
const LCG = LOOPS_SUBJECTS.ga.OL;
const ITEMS = LCG.items.filter(i => ["Gramadach","Nathanna","Léamhthuiscint"].includes(i.skill)).map(i => Object.assign({}, i, {paper: undefined}));
const mk = (lvl) => ({
  id:"", builtin:true, title:"Junior Cycle Gaeilge · " + (lvl === "HL" ? "Ardleibhéal" : "Gnáthleibhéal"), subject:"Gaeilge", cycle:"JC", level:lvl,
  source:"Styled on the SEC Junior Cycle Irish T2 paper. Marking criteria to be confirmed by an Irish teacher.", gradeBands: JC_GRADES, texts: LCG.texts,
  items: ITEMS,
  tasks: [
    {id:"jg1",kind:"jc_ga",section:"Scríobh",max:20,label:"Teachtaireacht · 20 marc",title:"Scríobh teachtaireacht chuig do chara. Luaigh: (a) nach féidir leat dul go dtí an cluiche, (b) cén fáth, (c) lá eile a mholadh.",pts:["Do theachtaireacht"],marks:[20]},
    {id:"jg2",kind:"jc_ga",section:"Scríobh",max:35,label:"Scéal · 35 marc",title:"Scríobh scéal a thosaíonn leis na focail seo: “Nuair a dhúisigh mé ar maidin, bhí an teach ciúin…”",pts:["Do scéal"],marks:[35]},
    {id:"jg3",kind:"jc_ga",section:"Léamh",max:30,label:"Léamhthuiscint · 10 + 10 + 10",case:"TÉACS: " + LCG.texts.g2,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cá bhfanann na daltaí sa Ghaeltacht?","(b) Luaigh dhá rud a dhéanann siad.","(c) Cad a tharlaíonn má labhraíonn dalta Béarla?"],marks:[10,10,10]},
    {id:"jg4",kind:"jc_ga",section:"Scríobh",max:30,label:"Fógra nó póstaer · 30 marc",title:"Scríobh fógra don scoil faoi cheolchoirm. Luaigh an dáta, an t-am, an áit, an praghas agus cé atá ag seinm.",pts:["D’fhógra"],marks:[30]},
    {id:"jg5",kind:"jc_ga",section:"Litríocht",max:30,label:"Litríocht · 30 marc",title:"Roghnaigh dán nó amhrán a ndearna tú staidéar air. Cad é an téama? Ar thaitin sé leat? Cuir fáthanna le do fhreagra.",pts:["Do fhreagra"],marks:[30]},
    {id:"jg6",kind:"jc_ga",section:"Léamh",max:30,label:"Léamhthuiscint · 10 + 10 + 10",case:"TÉACS: " + LCG.texts.g1,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cén t-am a éiríonn Seán gach maidin, agus cén fáth?","(b) Cad a bhuaigh sé anuraidh?","(c) Cad ba mhaith leis a dhéanamh lá éigin?"],marks:[10,10,10]}
  ],
  store: "loops_jc_ga_" + lvl + "_v1"
});
LOOPS_SUBJECTS.jc_ga = { name: "Gaeilge", flag: "☘️", colour: "ga", HL: mk("HL"), OL: mk("OL") };
// ── I dtreo 20 ceist mharcáilte (4 Samhain 2026) ──
const JT1 = "TÉACS: Tá Aoife ocht mbliana déag d’aois agus oibríonn sí i gcaifé i nGaillimh gach Satharn. Tosaíonn sí ag a hocht a chlog ar maidin. Glanann sí na boird, déanann sí caife agus labhraíonn sí leis na custaiméirí. ‘Is breá liom an post,’ a deir sí, ‘mar buailim le daoine nua gach lá.’ Sábhálann sí a cuid airgid mar ba mhaith léi dul go dtí an Spáinn an samhradh seo chugainn lena cairde.";
const JT2 = "TÉACS: Bhí ceolchoirm mhór ar siúl i bPáirc an Chrócaigh Dé Sathairn seo caite. Chuaigh Niamh agus a deartháir Cian ann ar an traein ó Chorcaigh. Thosaigh an cheolchoirm ar a hocht a chlog agus chríochnaigh sí ag a haon déag. ‘Bhí an t-atmaisféar dochreidte,’ a dúirt Niamh. ‘Bhí gach duine ag canadh.’ Ar an mbealach abhaile, áfach, bhí an traein an-phlódaithe agus ní raibh suíochán ar bith acu.";
const EXTRA = [
  {id:"jg7",kind:"jc_ga",section:"Scríobh",max:20,label:"Ríomhphost · 20 marc",title:"Scríobh ríomhphost chuig do chara faoi do laethanta saoire. Luaigh: (a) cá raibh tú, (b) cé a bhí leat, (c) an aimsir, (d) rud amháin a rinne tú.",pts:["Do ríomhphost"],marks:[20]},
  {id:"jg8",kind:"jc_ga",section:"Scríobh",max:30,label:"Blag · 30 marc",title:"Scríobh blag faoi lá speisialta i do scoil.",pts:["Do bhlag"],marks:[30]},
  {id:"jg9",kind:"jc_ga",section:"Scríobh",max:35,label:"Scéal · 35 marc",title:"Scríobh scéal dar teideal “An lá a chaill mé m’fhón”.",pts:["Do scéal"],marks:[35]},
  {id:"jg10",kind:"jc_ga",section:"Scríobh",max:30,label:"Litir · 30 marc",title:"Scríobh litir chuig do chara pinn faoi do theaghlach agus faoi do cheantar.",pts:["Do litir"],marks:[30]},
  {id:"jg11",kind:"jc_ga",section:"Scríobh",max:30,label:"Comhrá · 30 marc",title:"Scríobh comhrá idir tú féin agus do chara faoi na pleananna don deireadh seachtaine.",pts:["Do chomhrá"],marks:[30]},
  {id:"jg12",kind:"jc_ga",section:"Léamh",max:30,label:"Léamhthuiscint · 10 + 10 + 10",case:"TÉACS: " + LCG.texts.g3,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cad a cheapann roinnt saineolaithe faoi na meáin shóisialta?","(b) Luaigh buntáiste amháin de na meáin shóisialta, de réir an téacs.","(c) An aontaíonn tú leis an téacs? Tabhair fáth amháin."],marks:[10,10,10]},
  {id:"jg13",kind:"jc_ga",section:"Léamh",max:30,label:"Léamhthuiscint · 10 + 10 + 10",case:JT1,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Cá n-oibríonn Aoife, agus cén lá?","(b) Luaigh dhá rud a dhéanann sí sa phost.","(c) Cén fáth a bhfuil sí ag sábháil airgid?"],marks:[10,10,10]},
  {id:"jg14",kind:"jc_ga",section:"Léamh",max:30,label:"Léamhthuiscint · 10 + 10 + 10",case:JT2,title:"Léigh an téacs agus freagair na ceisteanna.",pts:["(a) Conas a thaistil Niamh agus Cian go dtí an cheolchoirm?","(b) Cén t-am ar thosaigh agus ar chríochnaigh an cheolchoirm?","(c) Cén fhadhb a bhí acu ar an mbealach abhaile?"],marks:[10,10,10]},
  {id:"jg15",kind:"jc_ga",section:"Scríobh",max:20,label:"Fógra · 20 marc",title:"Scríobh fógra faoi mhadra atá caillte. Luaigh: cén sórt madra é, a ainm, cá háit agus cathain a cailleadh é, agus d’uimhir fóin.",pts:["D’fhógra"],marks:[20]},
  {id:"jg16",kind:"jc_ga",section:"Scríobh",max:20,label:"Cárta poist · 20 marc",title:"Scríobh cárta poist chuig do theaghlach ón nGaeltacht.",pts:["Do chárta poist"],marks:[20]},
  {id:"jg17",kind:"jc_ga",section:"Litríocht",max:30,label:"Litríocht · 30 marc",title:"Roghnaigh gearrscéal nó úrscéal a ndearna tú staidéar air. Déan cur síos ar an bpríomhcharachtar. Ar thaitin an carachtar leat? Cuir fáthanna le do fhreagra.",pts:["Do fhreagra"],marks:[30]},
  {id:"jg18",kind:"jc_ga",section:"Litríocht",max:30,label:"Litríocht · 30 marc",title:"Roghnaigh dán a ndearna tú staidéar air. Cad é an mothúchán is láidre sa dán? Tabhair dhá fháth le do fhreagra.",pts:["Do fhreagra"],marks:[30]},
  {id:"jg19",kind:"jc_ga",section:"Litríocht",max:30,label:"Litríocht · 30 marc",title:"Roghnaigh scannán nó dráma Gaeilge a ndearna tú staidéar air. Déan cur síos ar an radharc is fearr leat agus luaigh cén fáth.",pts:["Do fhreagra"],marks:[30]},
  {id:"jg20",kind:"jc_ga",section:"Scríobh",max:35,label:"Alt · 35 marc",title:"Scríobh alt don iris scoile faoi do chaitheamh aimsire.",pts:["D’alt"],marks:[35]}
];
["HL","OL"].forEach(l => EXTRA.forEach(t => LOOPS_SUBJECTS.jc_ga[l].tasks.push(Object.assign({}, t))));

})();

// ── Warm-ups for Litríocht (6 Nov 2026) ──
(function(){ const G = LOOPS_SUBJECTS.jc_ga; const I = [
  {id:"jgl1",skill:"Litríocht",type:"match",q:"Meaitseáil na téarmaí.",pairs:[["Íomhá", "Image"], ["Téama", "Theme"], ["Mothúchán", "Emotion"], ["Meafar", "Metaphor"]]},
  {id:"jgl2",skill:"Litríocht",type:"mcq",q:"Is éard is téama ann…",opts:["An príomhsmaoineamh i dtéacs", "Ainm an údair", "Líon na línte", "An teideal"],a:0},
  {id:"jgl3",skill:"Litríocht",type:"mcq",q:"Cad is carachtar ann?",opts:["Duine i scéal", "Saghas dáin", "Ainm an fhile", "Rím"],a:0},
  {id:"jgl4",skill:"Litríocht",type:"mcq",q:"Rím is ea…",opts:["Focail a bhfuil an fhuaim chéanna ag a ndeireadh", "Líne an-fhada", "Teideal an dáin", "Scéal grinn"],a:0}
]; G.HL.items = G.HL.items.concat(I); G.OL.items = G.OL.items.concat(I); })();
