// ═══════════════════════════════════════════════
// LOOPS · LC ART — Visual Studies (the written paper, 30%)
// The practical work is not covered. The 2025 scheme gives one set of written
// criteria, so Higher and Ordinary share the same questions here.
//   art_short : Section A, parts marked Low / Moderate / High (marks from the task)
//   art_essay : Sections B and C, Coherence 10 + Knowledge 20 + Examples 10 + Visual Language 10
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));

const ITEMS = [
  {id:"ai1",skill:"Irish art",type:"mcq",q:"Newgrange, Co. Meath, is a…",opts:["Neolithic passage tomb","Bronze Age fort","Early Christian monastery","Norman castle"],a:0},
  {id:"ai2",skill:"Irish art",type:"mcq",q:"The Book of Kells is held in…",opts:["Trinity College Dublin","The National Gallery","Kells Abbey","The British Museum"],a:0},
  {id:"ai3",skill:"Irish art",type:"mcq",q:"The Ardagh Chalice is famous for its…",opts:["Filigree and enamel decoration","Stained glass","Carved stone panels","Oil-painted scenes"],a:0},
  {id:"ai4",skill:"Irish art",type:"mcq",q:"Muiredach’s Cross at Monasterboice is an example of a…",opts:["High cross","Round tower","Ogham stone","Dolmen"],a:0},
  {id:"ai5",skill:"Irish art",type:"mcq",q:"Cormac’s Chapel on the Rock of Cashel is in which style?",opts:["Hiberno-Romanesque","Gothic","Baroque","Neoclassical"],a:0},
  {id:"ai6",skill:"Irish art",type:"mcq",q:"Harry Clarke is best known for his…",opts:["Stained glass","Bronze sculpture","Landscape painting","Architecture"],a:0},
  {id:"ai7",skill:"Irish art",type:"mcq",q:"Mainie Jellett was a pioneer of…",opts:["Abstract and Cubist art in Ireland","Irish portrait photography","Celtic Revival metalwork","Irish landscape watercolour"],a:0},
  {id:"ai8",skill:"Irish art",type:"mcq",q:"Evie Hone’s “My Four Green Fields” is a…",opts:["Stained glass window","Tapestry","Bronze relief","Oil painting"],a:0},
  {id:"ai9",skill:"Irish art",type:"mcq",q:"Seán Keating painted…",opts:["Men of the South","The Liffey Swim","Decoration","The Eve of St Agnes"],a:0},
  {id:"ae1",skill:"European art",type:"mcq",q:"Who painted The Birth of Venus?",opts:["Botticelli","Leonardo da Vinci","Raphael","Titian"],a:0},
  {id:"ae2",skill:"European art",type:"mcq",q:"Linear perspective is credited to…",opts:["Brunelleschi","Giotto","Michelangelo","Caravaggio"],a:0},
  {id:"ae3",skill:"European art",type:"mcq",q:"Giotto’s frescoes are in the…",opts:["Scrovegni (Arena) Chapel, Padua","Sistine Chapel, Rome","Louvre, Paris","Uffizi, Florence"],a:0},
  {id:"ae4",skill:"European art",type:"mcq",q:"Monet’s Impression, Sunrise (1872) gave its name to…",opts:["Impressionism","Expressionism","Cubism","Romanticism"],a:0},
  {id:"ae5",skill:"European art",type:"mcq",q:"Pointed arches, rib vaults and flying buttresses belong to…",opts:["Gothic architecture","Romanesque architecture","Classical Greek temples","Art Nouveau"],a:0},
  {id:"ae6",skill:"European art",type:"mcq",q:"Michelangelo’s David is carved from…",opts:["Marble","Bronze","Limestone","Wood"],a:0},
  {id:"at1",skill:"Terminology",type:"mcq",q:"Chiaroscuro means…",opts:["Strong contrast between light and dark","Soft blurred outlines","Thick paint texture","Painting on wet plaster"],a:0},
  {id:"at2",skill:"Terminology",type:"mcq",q:"Sfumato, used by Leonardo, means…",opts:["Soft, smoky transitions between tones","Bright, flat colour","Gold leaf decoration","A dramatic spotlight"],a:0},
  {id:"at3",skill:"Terminology",type:"mcq",q:"Contrapposto describes…",opts:["A figure with weight on one leg, hips and shoulders tilted","A painting on a wall","A sculpture carved in relief","Overlapping shapes"],a:0},
  {id:"at4",skill:"Terminology",type:"mcq",q:"Impasto is…",opts:["Paint applied thickly so brush marks show","A wash of thin colour","Painting on wet plaster","Scratching through a top layer"],a:0},
  {id:"at5",skill:"Terminology",type:"short",q:"Name the technique of painting on wet plaster.",a:["fresco","buon fresco","true fresco"]}
];
ITEMS.push(
  {id:"am1",skill:"Irish art",type:"match",q:"Match the treasure to its type.",pairs:[["Book of Kells","Insular manuscript"],["Ardagh Chalice","Metalwork"],["Muiredach’s Cross","High cross"],["Newgrange","Passage tomb"]]},
  {id:"am2",skill:"European art",type:"match",q:"Match the artist to the work.",pairs:[["Botticelli","The Birth of Venus"],["Leonardo da Vinci","The Last Supper"],["Monet","Impression, Sunrise"],["Michelangelo","David"]]},
  {id:"am3",skill:"Irish art",type:"match",q:"Match the artist to what they’re known for.",pairs:[["Harry Clarke","Stained glass"],["Mainie Jellett","Abstraction"],["Seán Keating","Men of the South"],["Jack B. Yeats","The Liffey Swim"]]},
  {id:"ao1",skill:"Terminology",type:"order",q:"Earliest first.",words:["Newgrange","The Book of Kells","Cormac’s Chapel","The Renaissance","Impressionism"]},
  {id:"ao2",skill:"European art",type:"order",q:"Put the styles in order, earliest first.",words:["Romanesque","Gothic","Renaissance","Baroque"]},
  {id:"at6",skill:"European art",type:"mcq",q:"True or false: Romanesque churches use pointed arches.",opts:["True","False"],fixed:true,a:1,why:"Round arches. Pointed arches are Gothic."},
  {id:"at7",skill:"European art",type:"mcq",q:"True or false: The Impressionists often painted outdoors.",opts:["True","False"],fixed:true,a:0,why:"En plein air."},
  {id:"at8",skill:"Terminology",type:"mcq",q:"True or false: Fresco is painted onto dry plaster.",opts:["True","False"],fixed:true,a:1,why:"Wet plaster. That’s the whole trick."}
);

const TASKS = [
  {id:"as1",kind:"art_short",max:10,label:"Section A · Today’s World · 6 + 4",title:"Answer (a) and (b).",pts:["(a) Describe a public sculpture you have seen, referring to its materials, scale and setting.","(b) Why is public art important to a community?"],marks:[6,4]},
  {id:"ab1",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss the key characteristics of Impressionism. Refer in detail to one named work by Claude Monet and one by another Impressionist artist. Use sketches to support your answer.",pts:[]},
  {id:"as2",kind:"art_short",max:10,label:"Section A · Today’s World · 5 + 5",title:"Answer (a) and (b).",pts:["(a) Discuss the design of a logo or poster you know well, referring to colour, layout and typography.","(b) How effectively does it communicate its message?"],marks:[5,5]},
  {id:"ac1",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the work of Harry Clarke, referring to one named stained glass work. Describe his technique, style and themes. Use sketches to support your answer.",pts:[]},
  {id:"ac2",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the Book of Kells, referring to its decoration, materials and the context in which it was made. Use sketches to support your answer.",pts:[]}
];
const base = { id:"", builtin:true, subject:"Art", cycle:"LC", texts:{}, items: ITEMS, tasks: TASKS, photoFirst:false,
  source:"Styled on the SEC 2025 Visual Studies paper and marking scheme" };
const HL = Object.assign({}, base, { title:"LC Art · Visual Studies · Higher", level:"HL", gradeBands: HL_GRADES });
const OL = Object.assign({}, base, { title:"LC Art · Visual Studies · Ordinary", level:"OL", gradeBands: OL_GRADES });
LOOPS_SUBJECTS.art = { name: "Art", flag: "🎨", native: "Visual Studies", colour: "art", OL, HL };
})();
