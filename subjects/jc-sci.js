// ═══════════════════════════════════════════════
// LOOPS · JUNIOR CYCLE SCIENCE — first version (4 Nov 2026)
// Styled on the SEC Junior Cycle papers (see the JC research in the Loops project).
// Warm-ups reuse the easier Leaving Cert Ordinary items where they fit; JC-specific banks grow next.
// ═══════════════════════════════════════════════
(function(){
const JC_GRADES = [["Distinction",85],["Higher Merit",70],["Merit",55],["Achieved",40],["Partially Achieved",20],["Not Graded",0]].map(([g,min]) => ({g,min}));
const TF = ["True","False"];
const ITEMS = [
  // Biological world
  {id:"sb1",skill:"Biological world",type:"mcq",q:"Which part of a plant cell carries out photosynthesis?",opts:["Chloroplast","Nucleus","Cell wall","Vacuole"],a:0},
  {id:"sb2",skill:"Biological world",type:"mcq",q:"Which of these is found in plant cells but NOT animal cells?",opts:["Cell wall","Nucleus","Cell membrane","Cytoplasm"],a:0},
  {id:"sb3",skill:"Biological world",type:"mcq",q:"The word equation for respiration is: glucose + oxygen → …",opts:["carbon dioxide + water + energy","starch + oxygen","glucose + water","oxygen + light"],a:0},
  {id:"sb4",skill:"Biological world",type:"mcq",q:"Which organ pumps blood around the body?",opts:["Heart","Lungs","Liver","Kidney"],a:0},
  {id:"sb5",skill:"Biological world",type:"mcq",q:"In a food chain, the arrow points…",opts:["From the food to the animal that eats it","From the predator to its prey","From the sun to the moon","Downwards always"],a:0},
  {id:"sb6",skill:"Biological world",type:"short",q:"Name the gas plants take in for photosynthesis.",a:["carbon dioxide","co2"]},
  {id:"sb7",skill:"Biological world",type:"match",q:"Match the organ to its system.",pairs:[["Stomach","Digestive"],["Lungs","Respiratory"],["Heart","Circulatory"],["Brain","Nervous"]]},
  {id:"sb8",skill:"Biological world",type:"mcq",q:"True or false: Arteries carry blood away from the heart.",opts:TF,fixed:true,a:0},
  // Chemical world
  {id:"sc1",skill:"Chemical world",type:"mcq",q:"The chemical symbol for sodium is…",opts:["Na","So","S","Sd"],a:0},
  {id:"sc2",skill:"Chemical world",type:"mcq",q:"A solution with pH 2 is…",opts:["Strongly acidic","Neutral","Strongly basic","Weakly basic"],a:0},
  {id:"sc3",skill:"Chemical world",type:"mcq",q:"Neutral water has a pH of…",opts:["7","0","14","1"],a:0},
  {id:"sc4",skill:"Chemical world",type:"mcq",q:"Acid + base → salt + …",opts:["water","oxygen","hydrogen","carbon dioxide"],a:0},
  {id:"sc5",skill:"Chemical world",type:"mcq",q:"Which is a compound?",opts:["Water (H₂O)","Oxygen (O₂)","Iron (Fe)","Helium (He)"],a:0},
  {id:"sc6",skill:"Chemical world",type:"mcq",q:"The positive particle in the nucleus of an atom is the…",opts:["Proton","Electron","Neutron","Ion"],a:0},
  {id:"sc7",skill:"Chemical world",type:"short",q:"Name the gas that relights a glowing splint.",a:["oxygen","o2"]},
  {id:"sc8",skill:"Chemical world",type:"match",q:"Match the separation method.",pairs:[["Filtration","Sand from water"],["Evaporation","Salt from salt water"],["Distillation","Pure water from ink"],["Chromatography","Dyes in ink"]]},
  // Physical world
  {id:"sp1",skill:"Physical world",type:"mcq",q:"Speed = ",opts:["distance ÷ time","time ÷ distance","distance × time","mass × acceleration"],a:0},
  {id:"sp2",skill:"Physical world",type:"short",q:"A car travels 150 m in 10 s. Its average speed in m/s?",a:["15","15 m/s","15m/s"]},
  {id:"sp3",skill:"Physical world",type:"mcq",q:"The unit of force is the…",opts:["Newton","Joule","Watt","Volt"],a:0},
  {id:"sp4",skill:"Physical world",type:"mcq",q:"Ohm’s law: V = ",opts:["I × R","I ÷ R","R ÷ I","I + R"],a:0},
  {id:"sp5",skill:"Physical world",type:"short",q:"A current of 2 A flows through a 6 Ω resistor. What is the voltage (V)?",a:["12","12 v","12v"]},
  {id:"sp6",skill:"Physical world",type:"mcq",q:"Energy can be…",opts:["Converted from one form to another, but not created or destroyed","Created from nothing","Destroyed","Only stored as heat"],a:0},
  {id:"sp7",skill:"Physical world",type:"mcq",q:"Density = ",opts:["mass ÷ volume","volume ÷ mass","mass × volume","weight × height"],a:0},
  {id:"sp8",skill:"Physical world",type:"match",q:"Match the energy change.",pairs:[["Solar panel","Light → electrical"],["Kettle","Electrical → heat"],["Battery","Chemical → electrical"],["Loudspeaker","Electrical → sound"]]},
  // Earth and space
  {id:"se1",skill:"Earth & space",type:"mcq",q:"The Earth takes about how long to orbit the Sun?",opts:["365 days","24 hours","28 days","12 hours"],a:0},
  {id:"se2",skill:"Earth & space",type:"mcq",q:"Day and night are caused by…",opts:["The Earth spinning on its axis","The Earth orbiting the Sun","The Moon blocking the Sun","Clouds"],a:0},
  {id:"se3",skill:"Earth & space",type:"mcq",q:"The seasons are caused by…",opts:["The tilt of the Earth’s axis","The distance of the Moon","Volcanoes","The Sun switching on and off"],a:0},
  {id:"se4",skill:"Earth & space",type:"mcq",q:"Which gas is the main cause of the enhanced greenhouse effect?",opts:["Carbon dioxide","Nitrogen","Oxygen","Argon"],a:0},
  {id:"se5",skill:"Earth & space",type:"mcq",q:"True or false: The Moon gives off its own light.",opts:TF,fixed:true,a:1,why:"It reflects light from the Sun."},
  // Nature of science
  {id:"sn1",skill:"Nature of science",type:"mcq",q:"In a fair test you change…",opts:["Only one variable at a time","Everything at once","Nothing","The results"],a:0},
  {id:"sn2",skill:"Nature of science",type:"mcq",q:"The variable you measure is the…",opts:["Dependent variable","Independent variable","Control variable","Random variable"],a:0},
  {id:"sn3",skill:"Nature of science",type:"mcq",q:"Repeating an experiment makes the results more…",opts:["Reliable","Expensive","Dangerous","Colourful"],a:0},
  {id:"sn4",skill:"Nature of science",type:"order",q:"Put the steps of an investigation in order.",words:["Question","Hypothesis","Plan a fair test","Collect data","Conclusion"]}
];
const CL = {
  id:"", builtin:true, title:"Junior Cycle Science", subject:"Science", cycle:"JC", level:"CL",
  source:"Styled on the SEC Junior Cycle Science paper (common level, 360 marks: Section A 10 × 15, Section B long questions)", gradeBands: JC_GRADES, texts:{},
  items: ITEMS,
  tasks: [
    {id:"jsc1",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"A student investigates how temperature affects how quickly sugar dissolves in water.",pts:["(a) Name the independent and the dependent variable.","(b) Name two things that must be kept the same.","(c) Predict what will happen as the temperature rises, and explain."],marks:[6,4,5]},
    {id:"jsc2",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Answer all parts.",pts:["(a) Write the word equation for photosynthesis.","(b) Name the green pigment in leaves and say what it does.","(c) Why is photosynthesis important for animals as well as plants?"],marks:[5,5,5]},
    {id:"jsc3",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"A 12 V battery is connected to a lamp. A current of 3 A flows.",pts:["(a) State Ohm’s law as a formula.","(b) Calculate the resistance of the lamp, with units.","(c) Name the energy change in the lamp."],marks:[4,6,5]},
    {id:"jsc4",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Acids and bases.",pts:["(a) Give one example of an acid and one of a base found at home.","(b) Describe how you would find the pH of a liquid in the lab.","(c) Describe an experiment to neutralise an acid with a base. Name the products.","(d) Give one everyday use of neutralisation."],marks:[6,8,10,6]},
    {id:"jsc5",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Earth and space.",pts:["(a) Explain what causes day and night.","(b) Explain what causes the seasons.","(c) Describe the greenhouse effect and one way it is changing the climate.","(d) Suggest two actions that would reduce greenhouse gases."],marks:[6,8,10,6]},
    {id:"jsc6",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"The human body.",pts:["(a) Name the parts of the digestive system in order, from mouth to large intestine.","(b) What is the job of enzymes in digestion? Give one example.","(c) Describe the path of blood from the body, through the heart, to the lungs.","(d) Give two ways to keep the heart healthy."],marks:[8,6,10,6]}
  ],
  store: "loops_jc_sci_v1"
};
LOOPS_SUBJECTS.jc_sci = { name: "Science", flag: "🔬", colour: "cs", CL };
// ── Towards 20 marked questions and 40+ warm-ups (4 Nov 2026) ──
LOOPS_SUBJECTS.jc_sci.CL.items.push(
  {id:"sb9",skill:"Biological world",type:"mcq",q:"Which blood cells help fight infection?",opts:["White blood cells", "Red blood cells", "Platelets", "Plasma"],a:0},
  {id:"sb10",skill:"Biological world",type:"short",q:"What name is given to an animal that eats only plants?",a:["herbivore", "a herbivore", "herbivores"]},
  {id:"sc9",skill:"Chemical world",type:"mcq",q:"The nucleus of an atom contains…",opts:["Protons and neutrons", "Electrons only", "Protons and electrons", "Neutrons and electrons"],a:0},
  {id:"sc10",skill:"Chemical world",type:"mcq",q:"A liquid with a pH of 2 is…",opts:["Strongly acidic", "Neutral", "Weakly basic", "Strongly basic"],a:0},
  {id:"sp9",skill:"Physical world",type:"short",q:"What is the unit of force?",a:["newton", "the newton", "newtons", "n"]},
  {id:"sp10",skill:"Physical world",type:"mcq",q:"Speed is calculated as…",opts:["Distance ÷ time", "Time ÷ distance", "Distance × time", "Mass × acceleration"],a:0},
  {id:"se6",skill:"Earth & space",type:"mcq",q:"Which planet is closest to the Sun?",opts:["Mercury", "Venus", "Earth", "Mars"],a:0},
  {id:"se7",skill:"Earth & space",type:"mcq",q:"About how long does the Moon take to orbit the Earth?",opts:["About a month", "One day", "One year", "One week"],a:0},
  {id:"se8",skill:"Earth & space",type:"match",q:"Match the term to its meaning.",pairs:[["Galaxy", "A huge group of stars"], ["Orbit", "The path of one body around another"], ["Satellite", "An object that orbits a planet"], ["Light year", "The distance light travels in a year"]]},
  {id:"sn5",skill:"Nature of science",type:"mcq",q:"In a fair test, you change…",opts:["Only one variable at a time", "Every variable at once", "Nothing at all", "The results to fit"],a:0},
  {id:"sn6",skill:"Nature of science",type:"mcq",q:"The variable you measure in an experiment is the…",opts:["Dependent variable", "Independent variable", "Controlled variable", "Fixed variable"],a:0},
  {id:"sn7",skill:"Nature of science",type:"mcq",q:"Repeating an experiment several times makes the results more…",opts:["Reliable", "Expensive", "Dangerous", "Colourful"],a:0}
);
LOOPS_SUBJECTS.jc_sci.CL.tasks.push(
  {id:"jsc7",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Density.",pts:["(a) Write the formula for density.", "(b) A block has a mass of 240 g and a volume of 30 cm³. Calculate its density, with units.", "(c) Will the block float in water (density 1 g/cm³)? Explain."],marks:[4, 6, 5]},
  {id:"jsc8",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Speed.",pts:["(a) A cyclist travels 600 m in 120 s. Calculate her average speed, with units.", "(b) What is the difference between speed and velocity?", "(c) Name one instrument you could use to measure the time."],marks:[6, 5, 4]},
  {id:"jsc9",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Elements and compounds.",pts:["(a) What is the difference between an element and a compound?", "(b) Give the chemical formula of water and of carbon dioxide.", "(c) Name one metal and one non-metal from the periodic table."],marks:[5, 6, 4]},
  {id:"jsc10",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Microorganisms.",pts:["(a) Name two types of microorganism.", "(b) Give one useful and one harmful effect of microorganisms.", "(c) Explain how vaccines help to protect the body."],marks:[4, 6, 5]},
  {id:"jsc11",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"A habitat study.",pts:["(a) Name a habitat you studied.", "(b) Name two pieces of equipment used to collect animals, and say how one of them works.", "(c) Why is it important to return the animals to the habitat afterwards?"],marks:[3, 8, 4]},
  {id:"jsc12",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Separating mixtures.",pts:["(a) How would you separate sand from water?", "(b) How would you get salt back from salty water?", "(c) Name the method used to separate the dyes in ink."],marks:[5, 5, 5]},
  {id:"jsc13",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"Energy.",pts:["(a) State the principle of conservation of energy.", "(b) Name the energy changes in a wind turbine.", "(c) Give one advantage and one disadvantage of wind energy."],marks:[5, 5, 5]},
  {id:"jsc14",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Plants.",pts:["(a) Describe an experiment to show that a plant needs light to make starch.", "(b) Name the test for starch and give the colour change.", "(c) Describe how water moves from the roots to the leaves.", "(d) Why do farmers use fertilisers? Give one risk of using too much."],marks:[10, 6, 8, 6]},
  {id:"jsc15",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Forces.",pts:["(a) What is a force? Give its unit.", "(b) Describe an experiment to show how the extension of a spring depends on the force applied.", "(c) What is friction? Give one useful and one unwanted example.", "(d) A box weighs 50 N. Find its mass. (Take g = 10 N/kg.)"],marks:[6, 10, 8, 6]},
  {id:"jsc16",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Electricity.",pts:["(a) Draw a circuit with a battery, a switch and two bulbs in series.", "(b) What happens to the other bulb if one bulb blows? Explain.", "(c) How would this change if the bulbs were in parallel? Explain.", "(d) Give two rules for using electricity safely at home."],marks:[8, 6, 10, 6]},
  {id:"jsc17",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Reactions and metals.",pts:["(a) Magnesium is placed in hydrochloric acid. Name the gas produced and give a test for it.", "(b) What is rust? Name the two conditions needed for it to form.", "(c) Describe two ways to prevent rusting.", "(d) Write the word equation for magnesium burning in oxygen."],marks:[10, 8, 6, 6]},
  {id:"jsc18",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Genetics and reproduction.",pts:["(a) What are genes, and where are they found?", "(b) Explain the difference between inherited and acquired characteristics, with an example of each.", "(c) Briefly describe the main stages of the menstrual cycle.", "(d) Explain why a child can look like both parents."],marks:[6, 8, 10, 6]},
  {id:"jsc19",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"The solar system and space.",pts:["(a) Name the planets in order from the Sun.", "(b) Explain why we have a leap year.", "(c) Describe one benefit and one risk of space exploration.", "(d) What is a satellite? Give one use of artificial satellites."],marks:[8, 6, 10, 6]},
  {id:"jsc20",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"Heat.",pts:["(a) Describe an experiment to show that metals conduct heat better than wood.", "(b) Explain the difference between heat and temperature.", "(c) Explain how a convection current forms in a room with a radiator.", "(d) Give two ways to reduce heat loss from a house."],marks:[10, 6, 8, 6]}
);
})();

// ── Nature of science, marked (6 Nov 2026) ──
(function(){ LOOPS_SUBJECTS.jc_sci.CL.tasks.push(
  {id:"jsc21",kind:"jc_sci",section:"Section A",max:15,label:"Section A · 15 marks",title:"The scientific method.",pts:["(a) What is a hypothesis?", "(b) Explain what makes a test fair.", "(c) Why should an experiment be repeated?"],marks:[5, 5, 5],credit:["2 points at 2–3.", "Change one variable only; keep the others the same (graded).", "Reliability: to check results are consistent (graded)."]},
  {id:"jsc22",kind:"jc_sci",section:"Section B",max:30,label:"Section B · 30 marks",title:"A student heated water and recorded its temperature every minute: 0 min 20 °C; 1 min 32 °C; 2 min 44 °C; 3 min 56 °C; 4 min 68 °C.",pts:["(a) Draw a line graph of the results (temperature against time), or describe how you would draw it.", "(b) Describe the trend shown by the results.", "(c) Predict the temperature at 5 minutes, and explain your prediction.", "(d) Suggest one way to make the results more reliable."],marks:[10, 8, 6, 6],credit:["Axes labelled with units 4, points plotted 4, line 2.", "The temperature rises steadily by 12 °C every minute (graded).", "80 °C (3) + steady rise of 12 °C a minute (3).", "Repeat the experiment and average, or use a more accurate thermometer (graded)."]}
); })();
