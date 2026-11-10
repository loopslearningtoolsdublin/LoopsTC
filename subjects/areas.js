// ═══════════════════════════════════════════════
// LOOPS TEST CENTRE · PAPER AREAS (6 Nov 2026)
// Every warm-up item and every marked question gets the official area of its paper,
// so progress and weak spots can be shown area by area. Listening / aural parts are not covered (yet).
// Loaded after all subject files. Never changes a question; it only adds an `area` tag.
// Items whose area is not on a level's paper (e.g. HL-only options at OL) are left out of that level.
// ═══════════════════════════════════════════════
(function(){
const S = LOOPS_SUBJECTS;
const MFL = { areas: ["Reading comprehension","Written expression"],
  item: i => ({Reading:0,"Find it":0,Vocab:0,Grammar:1,Verbs:1,Writing:1,"Your writing":1}[i.skill]),
  task: t => t.section === "Reading" ? 0 : 1 };
const byId = map => t => map[t.id];
const CFG = {
  es: MFL, fr: MFL, de: MFL, jc_es: MFL, jc_fr: MFL, jc_de: MFL,
  en: { areas: ["Question A · comprehending","Question B · functional writing","Composing","Single text","Comparative","Prescribed poetry","Unseen poetry"],
    item: i => i.area === "Unseen poetry" ? 6 : ({Comprehending:0,Language:1,Composing:2,"Your writing":2,"Single text":3,Comparative:4,Poetry:5}[i.skill]),
    task: t => { const L = (t.label || "") + " " + (t.section || "");
      return /Question A/.test(L) ? 0 : /Question B/.test(L) ? 1 : /Composing/.test(L) ? 2 : /Single Text/i.test(L) ? 3 : /Comparative/.test(L) ? 4 : /Unseen/.test(L) ? 6 : /Poetry/.test(L) ? 5 : undefined; } },
  jc_en: { areas: ["Reading an unseen text","Writing","Language","Studied texts"],
    item: i => ({Comprehending:0,Composing:1,"Your writing":1,Language:2,"Responding to texts":3}[i.skill]),
    task: t => ({"Reading an unseen text":0,"Creative writing":1,"Functional writing":1,Language:2,"Studied texts":3}[t.section]) },
  ga: { areas: ["Ceapadóireacht","Léamhthuiscint","Prós","Filíocht","Litríocht Bhreise"], hlOnly: ["Litríocht Bhreise"],
    item: i => i.skill === "Gramadach" || i.skill === "Nathanna" || i.skill === "Your writing" ? 0 : i.skill === "Léamhthuiscint" ? 1 :
      ({gp1:2,gp3:2,gp4:2,gp5:2,gp7:2,gp9:2,gp2:3,gp6:3,gp10:3,gp8:4,gp11:4,gp12:4}[i.id]),
    task: t => t.paper === 1 ? 0 : ({"Léamhthuiscint":1,"Prós":2,"Filíocht":3,"Litríocht Bhreise":4}[t.section]) },
  jc_ga: { areas: ["Scríobh","Léamh","Litríocht"],
    item: i => ({Gramadach:0,Nathanna:0,"Your writing":0,"Léamhthuiscint":1,"Litríocht":2}[i.skill]),
    task: t => ({"Scríobh":0,"Léamh":1,"Litríocht":2}[t.section]) },
  maths: { areas: ["Algebra & number","Functions & calculus","Sequences & finance","Geometry & trigonometry","Statistics & probability"],
    item: i => ({Algebra:0,Number:0,Calculus:1,Sequences:2,"Geometry & Trig":3,"Stats & Probability":4}[i.skill]),
    // (OL "Number" items sit in Algebra & number; OL finance and calculus warm-ups added 6 Nov)
    task: byId({mht1:1,mht2:2,mht3:3,mht4:0,mht5:0,mht6:2,mht7:1,mht8:1,mht9:3,mht10:3,mht11:4,mht12:4,mht13:3,
                mot1:0,mot2:1,mot3:3,mot4:0,mot5:1,mot6:2,mot7:3,mot8:3,mot9:4,mot10:4}) },
  jc_maths: { areas: ["Number","Algebra & functions","Geometry & trigonometry","Statistics & probability"],
    item: i => i.skill === "Calculus" ? -1 : ({ms1:0,ms2:0,ms3:1,ms4:1}[i.id] ?? {Number:0,Algebra:1,"Geometry & Trig":2,"Stats & Probability":3}[i.skill]),
    task: t => { const n = parseInt(t.id.replace(/\D/g, ""), 10), hl = /^jmh/.test(t.id);
      const H = {1:1,2:0,3:2,4:1,5:2,6:1,7:0,8:0,9:1,10:1,11:2,12:2,13:2,14:1,15:3,16:3,17:1,18:1,19:0,20:2};
      const O = {1:0,2:2,3:3,4:3,5:2,6:0,7:1,8:0,9:0,10:2,11:2,12:3,13:1,14:0,15:1,16:3,17:2,18:2,19:1,20:3};
      return (hl ? H : O)[n]; } },
  // New course from 2027: Question 1 (the business story) and the four strands
  bus: { areas: ["Question 1 · The Business World","Exploring the business environment","Understanding enterprise","Leading in business","Informed decisions"],
    item: i => ["Question 1 · The Business World","Exploring the business environment","Understanding enterprise","Leading in business","Informed decisions"].indexOf(i.strand),
    task: t => ["Question 1 · The Business World","Exploring the business environment","Understanding enterprise","Leading in business","Informed decisions"].indexOf(t.strand) },
  cs: { areas: ["Section A · short questions","Section B · long questions","Section C · programming"],
    item: i => ({Python:2,Algorithms:1,"Society & design":1}[i.skill] ?? 0),
    task: t => /Section A/.test(t.label) ? 0 : /Section B/.test(t.label) ? 1 : 2 },
  art: { areas: ["Section A · Today’s world","Section B · European & world art","Section C · Art in Ireland"],
    item: i => ({Terminology:0,"European art":1,"Irish art":2}[i.skill]),
    task: t => /Section A/.test(t.label) ? 0 : /Section B/.test(t.label) ? 1 : 2 },
  hist: { areas: ["DBQ · documents-based study","Irish history","Europe & the wider world"],
    item: i => ({"Reform 1870–1914 (DBQ)":0,Skills:0,"Sovereignty 1912–1949":1,"Northern Ireland 1949–1993":1,"Dictatorship & democracy":2,"USA & the world":2}[i.skill]),
    task: t => /DBQ/.test(t.section) ? 0 : /Ireland/.test(t.section) ? 1 : 2 },
  geo: { areas: ["Short questions & skills","Physical","Regional","Economic activities","Human environment","Option: Geoecology","Option: Culture & identity"], hlOnly: ["Option: Geoecology","Option: Culture & identity"],
    item: i => ({Skills:0,Physical:1,Regional:2,Economic:3,Human:4,Geoecology:5,"Culture & identity":6}[i.skill]),
    task: t => { const s = t.section || ""; return /short/.test(s) ? 0 : /Physical/.test(s) ? 1 : /Regional/.test(s) ? 2 : /Economic/.test(s) ? 3 : /Human/.test(s) ? 4 : /Geoecology/.test(s) ? 5 : /Culture/.test(s) ? 6 : undefined; } },
  acc: { areas: ["Section 1 · financial accounting","Section 2 · interpretation & other accounts","Section 3 · management accounting"],
    item: i => ({"Financial accounting":0,"Concepts & theory":0,Ratios:1,"Management accounting":2}[i.skill]),
    task: t => /Section 1/.test(t.section) ? 0 : /Section 2/.test(t.section) ? 1 : 2 },
  bio: { areas: ["Nature of science","Organisation of life","Structures & processes","Interactions"],
    item: i => ({"Nature of science":0,"Organisation of life":1,"Structures & processes":2,"Interactions":3}[i.skill]),
    task: t => ({"Nature of science":0,"Organisation of life":1,"Structures & processes":2,"Interactions":3}[t.strand]) },
  chem: { areas: ["Nature of science","Nature of matter","Behaviour of matter","Interactions of matter","Matter in our world"],
    item: i => ({"Nature of science":0,"Nature of matter":1,"Behaviour of matter":2,"Interactions of matter":3,"Matter in our world":4}[i.skill]),
    task: t => ({"Nature of science":0,"Nature of matter":1,"Behaviour of matter":2,"Interactions of matter":3,"Matter in our world":4}[t.strand]) },
  phys: { areas: ["Nature of science","Forces & motion","Waves & energy transfer","Electric & magnetic fields","Modern physics"],
    item: i => ({"Nature of science":0,"Forces & motion":1,"Waves & energy transfer":2,"Electric & magnetic fields":3,"Modern physics":4}[i.skill]),
    task: t => ({"Nature of science":0,"Forces & motion":1,"Waves & energy transfer":2,"Electric & magnetic fields":3,"Modern physics":4}[t.strand]) },
  jc_sci: { areas: ["Nature of science","Biological world","Chemical world","Physical world","Earth & space"],
    item: i => ({"Nature of science":0,"Biological world":1,"Chemical world":2,"Physical world":3,"Earth & space":4}[i.skill]),
    task: byId({jsc1:0,jsc2:1,jsc3:3,jsc4:2,jsc5:4,jsc6:1,jsc7:3,jsc8:3,jsc9:2,jsc10:1,jsc11:1,jsc12:2,jsc13:3,jsc14:1,jsc15:3,jsc16:3,jsc17:2,jsc18:1,jsc19:4,jsc20:3,jsc21:0,jsc22:0}) },
  jc_re: { areas: ["Expressing beliefs","Exploring religion","Living our values"],
    item: i => ({"Exploring questions":0,"World religions":1,Christianity:1,Ethics:2}[i.skill]),
    task: byId({jre1:0,jre2:1,jre3:2,jre4:2,jre5:1,jre6:1,jre7:0,jre8:0,jre9:1,jre10:2,jre11:0,jre12:1,jre13:1,jre14:0,jre15:1,jre16:2,jre17:0,jre18:1,jre19:0,jre20:2}) },
  jc_bus: { areas: ["Personal finance","Enterprise","Our economy"],
    item: i => ({"Personal finance":0,Consumer:0,Calculations:0,Enterprise:1,Accounts:1,"Key terms":1,Definitions:1,Economy:2}[i.skill]),
    task: byId({jbs1:0,jbs2:0,jbs3:1,jbs4:1,jbs5:0,jbs6:0,jbs7:0,jbs8:2,jbs9:2,jbs10:1,jbs11:0,jbs12:0,jbs13:0,jbs14:0,jbs15:1,jbs16:2,jbs17:1,jbs18:2,jbs19:0,jbs20:2}) },
  jc_hist: { areas: ["The nature of history","Irish history","European & world history"],
    item: i => ({"Historian’s skills":0,"Irish history":1,"European history":2,"World history":2}[i.skill]),
    task: t => ({"Historian’s skills":0,"Irish history":1,"European history":2,"World history":2}[t.section]) },
  jc_geo: { areas: ["Geographical skills","The physical world","Interacting with the physical world","People, place and change"],
    item: i => ({"Map skills":0,"Physical world":1,"Weather & climate":1,"Economic activities":2,"People & places":3}[i.skill]),
    task: t => ({"Map skills":0,"Physical world":1,"Weather & climate":1,"Economic activities":2,"People & places":3}[t.section]) }
};
Object.keys(CFG).forEach(k => {
  const sub = S[k]; if (!sub) return;
  const c = CFG[k];
  ["HL","OL","CL"].forEach(L => {
    const P = sub[L]; if (!P) return;
    const areas = c.areas.filter(a => !(L === "OL" && (c.hlOnly || []).includes(a)));
    P.areas = areas;
    const name = n => (n === undefined || n === null || n < 0) ? undefined : c.areas[n];
    // Items and tasks can be shared between levels: always work from the tag they were written with.
    const orig = o => { if (!("area0" in o)) o.area0 = o.area || null; return Object.assign({}, o, {area: o.area0 || undefined}); };
    P.items = P.items.filter(i => { const n = c.item(orig(i)); if (n === -1) return false; const a = name(n); if (a && !areas.includes(a)) return false; if (a) i.area = a; return true; });
    P.tasks.forEach(t => { const a = name(c.task(orig(t))); if (a) t.area = a; });
  });
});
// For tests and the coverage table: where every area stands
window.LOOPS_COVERAGE = function(){
  const rows = [];
  Object.keys(CFG).forEach(k => ["HL","OL","CL"].forEach(L => { const P = S[k] && S[k][L]; if (!P || !P.areas) return;
    P.areas.forEach(a => rows.push({k, L, area:a, warm:P.items.filter(i => i.area === a).length, marked:P.tasks.filter(t => t.area === a).length}));
    P.items.filter(i => !i.area).forEach(i => rows.push({k, L, area:"(untagged item)", id:i.id}));
    P.tasks.filter(t => !t.area).forEach(t => rows.push({k, L, area:"(untagged task)", id:t.id}));
  }));
  return rows;
};
})();
