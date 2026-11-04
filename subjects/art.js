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


// ── More, mid-level (2 Nov 2026) ──
const TFa = ["True","False"];
ITEMS.push(
  {id:"ai10",skill:"Irish art",type:"mcq",q:"The Tara Brooch is an example of…",opts:["Early Christian metalwork","Bronze Age gold","Norman stone carving","Georgian silver"],a:0},
  {id:"ai11",skill:"Irish art",type:"mcq",q:"Round towers were built mainly as…",opts:["Bell towers and lookouts for monasteries","Castles for kings","Lighthouses","Prisons"],a:0},
  {id:"ai12",skill:"Irish art",type:"mcq",q:"Ogham is…",opts:["An early Irish alphabet cut into stone","A style of high cross","A type of brooch","A Celtic spiral pattern"],a:0},
  {id:"ai13",skill:"Irish art",type:"mcq",q:"The Broighter Boat is made of…",opts:["Gold","Bronze","Wood","Stone"],a:0},
  {id:"ai14",skill:"Irish art",type:"mcq",q:"Jack B. Yeats is known for…",opts:["Expressive paintings with thick, bold brushwork","Stained glass","Abstract sculpture","Book illumination"],a:0},
  {id:"ai15",skill:"Irish art",type:"mcq",q:"The Book of Durrow is an example of…",opts:["An early insular manuscript","A Norman castle","A Bronze Age torc","A high cross"],a:0},
  {id:"ae7",skill:"European art",type:"mcq",q:"Leonardo da Vinci painted…",opts:["The Mona Lisa","The Starry Night","Guernica","The Night Watch"],a:0},
  {id:"ae8",skill:"European art",type:"mcq",q:"Van Gogh’s The Starry Night belongs to…",opts:["Post-Impressionism","Renaissance","Gothic","Baroque"],a:0},
  {id:"ae9",skill:"European art",type:"mcq",q:"Picasso and Braque developed…",opts:["Cubism","Impressionism","Surrealism","Pop Art"],a:0},
  {id:"ae10",skill:"European art",type:"mcq",q:"Michelangelo painted the ceiling of…",opts:["The Sistine Chapel","Notre-Dame","St Paul’s Cathedral","The Louvre"],a:0},
  {id:"ae11",skill:"European art",type:"mcq",q:"Caravaggio is famous for…",opts:["Dramatic light and dark (chiaroscuro)","Soft pastel colours","Abstract shapes","Painting outdoors"],a:0},
  {id:"ae12",skill:"European art",type:"mcq",q:"Stained glass rose windows are typical of…",opts:["Gothic cathedrals","Romanesque churches","Greek temples","Modern galleries"],a:0},
  {id:"at9",skill:"Terminology",type:"mcq",q:"Complementary colours sit…",opts:["Opposite each other on the colour wheel","Next to each other on the colour wheel","Only in black and white","In the same family"],a:0},
  {id:"at10",skill:"Terminology",type:"mcq",q:"The three primary colours (paint) are…",opts:["Red, yellow and blue","Red, green and blue","Orange, green and purple","Black, white and grey"],a:0},
  {id:"at11",skill:"Terminology",type:"mcq",q:"Composition means…",opts:["How the parts of an artwork are arranged","The paint used","The size of the canvas","The artist’s signature"],a:0},
  {id:"at12",skill:"Terminology",type:"mcq",q:"A vanishing point is used in…",opts:["Linear perspective","Watercolour washes","Mosaic","Sculpture in the round"],a:0},
  {id:"at13",skill:"Terminology",type:"mcq",q:"Relief sculpture is…",opts:["Carved so it stands out from a flat background","Sculpture you can walk all round","A painted statue","Sculpture made of glass"],a:0},
  {id:"at14",skill:"Terminology",type:"short",q:"Name the colour you get by mixing blue and yellow.",a:["green"]},
  {id:"at15",skill:"Terminology",type:"short",q:"Name the style of art that shows things exactly as they look in real life.",a:["realism","realistic","naturalism","photorealism"]},
  {id:"am4",skill:"Terminology",type:"match",q:"Match the term to its meaning.",pairs:[["Tone","Lightness or darkness"],["Texture","How a surface feels"],["Hue","The name of a colour"],["Line","A mark between two points"]]},
  {id:"am5",skill:"European art",type:"match",q:"Match the artist to the movement.",pairs:[["Monet","Impressionism"],["Picasso","Cubism"],["Dalí","Surrealism"],["Warhol","Pop Art"]]},
  {id:"at16",skill:"Irish art",type:"mcq",q:"True or false: Newgrange is older than the Egyptian pyramids at Giza.",opts:TFa,fixed:true,a:0},
  {id:"at17",skill:"Terminology",type:"mcq",q:"True or false: Warm colours (reds, oranges) tend to come forward in a painting.",opts:TFa,fixed:true,a:0}
);
const TASKS = [
  {id:"as1",kind:"art_short",max:10,label:"Section A · Today’s World · 6 + 4",title:"Answer (a) and (b).",pts:["(a) Describe a public sculpture you have seen, referring to its materials, scale and setting.","(b) Why is public art important to a community?"],marks:[6,4]},
  {id:"ab1",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss the key characteristics of Impressionism. Refer in detail to one named work by Claude Monet and one by another Impressionist artist. Use sketches to support your answer.",pts:[]},
  {id:"as2",kind:"art_short",max:10,label:"Section A · Today’s World · 5 + 5",title:"Answer (a) and (b).",pts:["(a) Discuss the design of a logo or poster you know well, referring to colour, layout and typography.","(b) How effectively does it communicate its message?"],marks:[5,5]},
  {id:"ac1",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the work of Harry Clarke, referring to one named stained glass work. Describe his technique, style and themes. Use sketches to support your answer.",pts:[]},
  {id:"ac2",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the Book of Kells, referring to its decoration, materials and the context in which it was made. Use sketches to support your answer.",pts:[]}
];
// ── Towards 20 marked questions (4 Nov 2026) ──
TASKS.push(
  {id:"as3",kind:"art_short",max:10,label:"Section A · Today’s World · 6 + 4",title:"Answer (a) and (b).",pts:["(a) Describe an exhibition or gallery you have visited, referring to how the work was displayed.", "(b) How did the layout and lighting affect your experience of the work?"],marks:[6, 4]},
  {id:"as4",kind:"art_short",max:10,label:"Section A · Today’s World · 6 + 4",title:"Answer (a) and (b).",pts:["(a) Choose an everyday object you think is well designed (for example a chair, a phone or a bike). Describe its form, materials and function.", "(b) How does its design suit the person who uses it?"],marks:[6, 4]},
  {id:"as5",kind:"art_short",max:10,label:"Section A · Today’s World · 6 + 4",title:"Answer (a) and (b).",pts:["(a) Discuss the visual style of a film, animation or video game you know well, referring to colour, setting and character design.", "(b) How does the visual style create mood?"],marks:[6, 4]},
  {id:"as6",kind:"art_short",max:10,label:"Section A · Today’s World · 5 + 5",title:"Answer (a) and (b).",pts:["(a) Describe a mural or piece of street art in Ireland, referring to its imagery, colour and location.", "(b) Should street art be protected like gallery art? Give reasons."],marks:[5, 5]},
  {id:"ab2",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss the Italian Renaissance, referring in detail to one named work by Leonardo da Vinci and one by Michelangelo. Describe composition, technique and subject matter. Use sketches to support your answer.",pts:[]},
  {id:"ab3",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss the characteristics of Gothic architecture, referring in detail to one named cathedral. Refer to structure, light and decoration. Use sketches to support your answer.",pts:[]},
  {id:"ab4",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss Cubism, referring in detail to one named work by Pablo Picasso and one by Georges Braque. Explain how the Cubists changed the way objects were shown. Use sketches to support your answer.",pts:[]},
  {id:"ab5",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss Post-Impressionism, referring in detail to one named work by Vincent van Gogh and one by Paul Cézanne. Describe their use of colour, brushwork and form. Use sketches to support your answer.",pts:[]},
  {id:"ab6",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss Surrealism, referring in detail to one named work by Salvador Dalí and one by René Magritte. Explain the ideas behind the movement. Use sketches to support your answer.",pts:[]},
  {id:"ab7",kind:"art_essay",max:50,label:"Section B essay · 50 marks · sketches welcome",title:"Discuss the work of Caravaggio, referring in detail to one named painting. Describe his use of light and shadow (chiaroscuro), composition and drama. Use sketches to support your answer.",pts:[]},
  {id:"ac3",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss Newgrange, referring to its structure, its decorated stones and the winter solstice. Explain what it tells us about the people who built it. Use sketches to support your answer.",pts:[]},
  {id:"ac4",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the Ardagh Chalice, referring to its form, materials, decorative techniques and the context in which it was made. Use sketches to support your answer.",pts:[]},
  {id:"ac5",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the Irish high crosses, referring in detail to Muiredach’s Cross at Monasterboice. Describe its structure, carved panels and purpose. Use sketches to support your answer.",pts:[]},
  {id:"ac6",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the work of Jack B. Yeats, referring in detail to one named painting. Describe his subject matter and how his style changed over his career. Use sketches to support your answer.",pts:[]},
  {id:"ac7",kind:"art_essay",max:50,label:"Section C essay · 50 marks · sketches welcome",title:"Discuss the work of Mainie Jellett, referring in detail to one named work. Explain her role in bringing modern art to Ireland. Use sketches to support your answer.",pts:[]}
);
const base = { id:"", builtin:true, subject:"Art", cycle:"LC", texts:{}, items: ITEMS, tasks: TASKS, photoFirst:false,
  source:"Styled on the SEC 2025 Visual Studies paper and marking scheme" };
const HL = Object.assign({}, base, { title:"LC Art · Visual Studies · Higher", level:"HL", gradeBands: HL_GRADES });
const OL = Object.assign({}, base, { title:"LC Art · Visual Studies · Ordinary", level:"OL", gradeBands: OL_GRADES });
LOOPS_SUBJECTS.art = { name: "Art", flag: "🎨", native: "Visual Studies", colour: "art", OL, HL };
})();
