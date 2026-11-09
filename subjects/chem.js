// ═══════════════════════════════════════════════
// LOOPS · LC CHEMISTRY — Higher + Ordinary (8 Nov 2026)
// The NEW specification (first exam June 2027): one written paper, 300 marks, Q1 + any five of Q2–Q7, 50 marks each.
// Styled on the SEC sample papers. No official marking schemes for the new spec yet, so marks follow the
// SEC's Chemistry conventions (3 marks per step or point, −1 per arithmetical slip, −1 for a missing unit).
// The Chemistry in Practice Investigation (AAC, 40%) is coursework and is not covered.
// ═══════════════════════════════════════════════
(function(){
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const NOS = "Nature of science", NOM = "Nature of matter", BOM = "Behaviour of matter", IOM = "Interactions of matter", MIW = "Matter in our world";
const T = (id, strand, short, title, parts) => { const max = parts.reduce((t,p) => t + p[1], 0);
  return {id, kind:"chem_parts", strand, section: short ? "Question 1 · short parts" : "Questions 2–7 · in context",
    max, label: (short ? "Short question" : "Structured question") + " · " + strand + " · " + max + " marks", title,
    pts: parts.map(p => p[0]), marks: parts.map(p => p[1]), credit: parts.map(p => p[2])}; };

const ITEMS = [
  // Nature of matter
  {id:"c1",skill:NOM,type:"mcq",q:"The atomic number of an element is the number of…",opts:["Protons in the nucleus","Neutrons in the nucleus","Protons plus neutrons","Electron shells"],a:0},
  {id:"c2",skill:NOM,type:"mcq",q:"Isotopes of an element have the same number of protons but a different number of…",opts:["Neutrons","Electrons","Protons","Shells"],a:0},
  {id:"c3",skill:NOM,type:"mcq",q:"The electron configuration of sodium (atomic number 11) is…",opts:["1s² 2s² 2p⁶ 3s¹","1s² 2s² 2p⁷","1s² 2s² 2p⁶ 3p¹","1s² 2s⁸ 3s¹"],a:0},
  {id:"c4",skill:NOM,type:"mcq",q:"The elements in Group 1 are called the…",opts:["Alkali metals","Halogens","Noble gases","Transition metals"],a:0},
  {id:"c5",skill:NOM,type:"mcq",q:"The noble gases are unreactive because…",opts:["They have a full outer shell of electrons","They are very heavy","They have no protons","They are liquids"],a:0},
  {id:"c6",skill:NOM,type:"mcq",q:"Going down Group 1, the reactivity of the metals…",opts:["Increases","Decreases","Stays the same","Falls, then rises"],a:0},
  {id:"c7",skill:NOM,type:"mcq",q:"How many moles are in 18 g of water (H₂O, Mr = 18)?",opts:["1","18","0.5","2"],a:0},
  {id:"c8",skill:NOM,type:"mcq",q:"The relative molecular mass of CO₂ is (C = 12, O = 16)…",opts:["44","28","32","40"],a:0},
  {id:"c9",skill:NOM,type:"mcq",q:"Avogadro’s constant is about…",opts:["6 × 10²³ per mole","3 × 10⁸ per mole","9.8 per mole","1.6 × 10⁻¹⁹ per mole"],a:0},
  {id:"c10",skill:NOM,type:"mcq",q:"Electronegativity increases…",opts:["Across a period from left to right","Down a group","From right to left","Only in the noble gases"],a:0},
  {id:"c11",skill:NOM,type:"match",q:"Match the scientist to their idea about the atom.",pairs:[["Dalton","Atoms are tiny solid spheres"],["Thomson","Discovered the electron (plum pudding model)"],["Rutherford","A small, dense, positive nucleus"],["Bohr","Electrons in fixed energy levels"]]},
  {id:"c12",skill:NOM,type:"match",q:"Match the metal to its flame colour.",pairs:[["Lithium","Crimson red"],["Sodium","Yellow-orange"],["Potassium","Lilac"],["Copper","Blue-green"]]},
  // Behaviour of matter
  {id:"c13",skill:BOM,type:"mcq",q:"An ionic bond is formed by…",opts:["The transfer of electrons from one atom to another","Sharing a pair of electrons","Sharing protons","A sea of electrons"],a:0},
  {id:"c14",skill:BOM,type:"mcq",q:"A covalent bond is…",opts:["A shared pair of electrons","The transfer of an electron","An attraction between ions","A bond between molecules"],a:0},
  {id:"c15",skill:BOM,type:"mcq",q:"The shape of a water molecule is…",opts:["V-shaped (bent)","Linear","Tetrahedral","Pyramidal"],a:0},
  {id:"c16",skill:BOM,type:"mcq",q:"The shape of a methane (CH₄) molecule is…",opts:["Tetrahedral","Linear","V-shaped","Flat square"],a:0},
  {id:"c17",skill:BOM,type:"mcq",q:"Hydrogen bonds form between molecules where hydrogen is bonded to…",opts:["Nitrogen, oxygen or fluorine","Carbon","Sodium","Any metal"],a:0},
  {id:"c18",skill:BOM,type:"mcq",q:"Water has a high boiling point for its size because of…",opts:["Hydrogen bonding between its molecules","Ionic bonds","Its tetrahedral shape","Van der Waals forces only"],a:0},
  {id:"c19",skill:BOM,type:"mcq",q:"The general formula of the alkanes is…",opts:["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙHₙ"],a:0},
  {id:"c20",skill:BOM,type:"mcq",q:"Ethene (C₂H₄) contains…",opts:["A carbon–carbon double bond","Only single bonds","A triple bond","An –OH group"],a:0},
  {id:"c21",skill:BOM,type:"mcq",q:"Boyle’s law: at constant temperature, for a fixed mass of gas…",opts:["Pressure × volume is constant","Volume ÷ temperature is constant","Pressure rises with volume","Mass changes with pressure"],a:0},
  {id:"c22",skill:BOM,type:"mcq",q:"25 °C in kelvin is…",opts:["298 K","248 K","25 K","-248 K"],a:0},
  {id:"c23",skill:BOM,type:"mcq",q:"Which of these is a polar molecule?",opts:["HCl","Cl₂","CH₄","CO₂"],a:0},
  // Interactions of matter
  {id:"c24",skill:IOM,type:"mcq",q:"An exothermic reaction…",opts:["Releases heat (ΔH is negative)","Takes in heat (ΔH is positive)","Has no energy change","Only happens in a flame"],a:0},
  {id:"c25",skill:IOM,type:"mcq",q:"Hess’s law states that the heat change of a reaction…",opts:["Is the same whatever route is taken","Depends on the route taken","Is always negative","Equals the activation energy"],a:0},
  {id:"c26",skill:IOM,type:"mcq",q:"A catalyst…",opts:["Speeds up a reaction without being used up","Is used up in the reaction","Slows down a reaction","Changes the products"],a:0},
  {id:"c27",skill:IOM,type:"mcq",q:"Raising the temperature speeds up a reaction mainly because…",opts:["More collisions have energy above the activation energy","The particles get bigger","The catalyst is activated","There are more particles"],a:0},
  {id:"c28",skill:IOM,type:"mcq",q:"Adding more reactant to a system at equilibrium shifts the equilibrium…",opts:["Towards the products (to the right)","Towards the reactants (to the left)","Nowhere","It stops the reaction"],a:0},
  {id:"c29",skill:IOM,type:"mcq",q:"The pH of 0.01 M HCl is…",opts:["2","1","0.01","12"],a:0},
  {id:"c30",skill:IOM,type:"mcq",q:"A Brønsted–Lowry acid is a…",opts:["Proton donor","Proton acceptor","Electron donor","Hydroxide donor"],a:0},
  {id:"c31",skill:IOM,type:"mcq",q:"The conjugate base of HCl is…",opts:["Cl⁻","H⁺","H₃O⁺","OH⁻"],a:0},
  {id:"c32",skill:IOM,type:"mcq",q:"Oxidation, in terms of electrons, is…",opts:["Loss of electrons","Gain of electrons","Gain of protons","Loss of neutrons"],a:0},
  {id:"c33",skill:IOM,type:"mcq",q:"In electrolysis, reduction happens at the…",opts:["Cathode (negative electrode)","Anode (positive electrode)","Salt bridge","Power supply"],a:0},
  {id:"c34",skill:IOM,type:"mcq",q:"At 25 °C, pH + pOH equals…",opts:["14","7","1","10"],a:0},
  // Matter in our world
  {id:"c35",skill:MIW,type:"mcq",q:"A suitable indicator for titrating HCl against sodium carbonate is…",opts:["Methyl orange","Phenolphthalein","Universal indicator","Litmus paper"],a:0},
  {id:"c36",skill:MIW,type:"mcq",q:"A primary standard must be…",opts:["Pure and stable, so a solution of exact concentration can be made","Coloured","A liquid","Very reactive with air"],a:0},
  {id:"c37",skill:MIW,type:"mcq",q:"0.5 mol of a solute is dissolved to make 250 cm³ of solution. The concentration is…",opts:["2 mol/L","0.5 mol/L","0.125 mol/L","125 mol/L"],a:0},
  {id:"c38",skill:MIW,type:"match",q:"Match the family to its functional group.",pairs:[["Alcohol","–OH"],["Carboxylic acid","–COOH"],["Aldehyde","–CHO"],["Ketone","C=O between two carbons"]]},
  {id:"c39",skill:MIW,type:"mcq",q:"An ester is made from…",opts:["A carboxylic acid and an alcohol","Two alkanes","An alkene and water","A ketone and an acid"],a:0},
  {id:"c40",skill:MIW,type:"mcq",q:"Soap is made by…",opts:["Heating a fat or oil with sodium hydroxide (base hydrolysis)","Mixing two acids","Burning a fat","Cracking crude oil"],a:0},
  {id:"c41",skill:MIW,type:"mcq",q:"Hard water is caused by dissolved…",opts:["Calcium and magnesium ions","Sodium and chloride ions","Oxygen","Carbon dioxide only"],a:0},
  {id:"c42",skill:MIW,type:"mcq",q:"The ozone layer has been damaged mainly by…",opts:["CFCs","Carbon dioxide","Methane","Water vapour"],a:0},
  // Nature of science
  {id:"c43",skill:NOS,type:"mcq",q:"A burette is read…",opts:["At the bottom of the meniscus, with your eye level with it","At the top of the meniscus","From above, at an angle","Only before the titration"],a:0},
  {id:"c44",skill:NOS,type:"mcq",q:"A burette is rinsed with the solution it will hold, not water, so that…",opts:["The solution is not diluted","It dries faster","It is sterile","The indicator works"],a:0},
  {id:"c45",skill:NOS,type:"mcq",q:"Results that are very close to each other are…",opts:["Precise","Accurate by definition","Biased","Anomalous"],a:0},
  {id:"c46",skill:NOS,type:"mcq",q:"The mean titre should be worked out from…",opts:["Concordant titres (within about 0.1 cm³)","Every titre, including the rough one","The first titre only","The largest titre"],a:0},
  {id:"c47",skill:NOS,type:"mcq",q:"Ethanol is heated in a water bath rather than over a flame because…",opts:["Ethanol is flammable","Water baths are faster","It stops evaporation","Flames are too cold"],a:0}
];

const SRC = "Styled on the SEC sample papers for the 2027 specification (Q1 + any five of Q2–Q7, 50 marks each). No official marking schemes yet: marks follow SEC Chemistry conventions. Use the Formulae and Tables values given in each question.";
const HL = { id:"", builtin:true, title:"LC Chemistry · Higher", subject:"Chemistry", cycle:"LC", level:"HL", photoFirst:false, source: SRC,
  gradeBands: HL_GRADES, texts:{}, items: ITEMS, tasks: [
  T("ch1", NOS, false, "A student titrates hydrochloric acid from a burette against 25.0 cm³ of sodium carbonate solution in a conical flask.", [
    ["(a) Name a suitable indicator and give its colour change at the end point.", 6, "Methyl orange 3 // yellow to orange / peach (red) 3."],
    ["(b) Why is the burette rinsed with the acid and not with water before filling?", 3, "Water would dilute the acid and change its concentration."],
    ["(c) Why is the acid added drop by drop near the end point, with swirling?", 3, "So the end point is not overshot / to mix and see the exact colour change."],
    ["(d) What are concordant titres, and why is the mean taken from them?", 6, "Titres that agree within 0.1 cm³ 3 // gives a reliable / accurate result 3."]]),
  T("ch2", NOS, true, "An advert claims: ‘Our alkaline water (pH 9.5) changes your blood pH and makes you healthier.’", [
    ["(a) Give two criteria you would use to judge whether this claim is trustworthy.", 6, "Any two at 3: peer-reviewed evidence / controlled study / sample size / funded independently, no commercial interest / supported by other scientists."],
    ["(b) Use chemistry to explain why drinking alkaline water is unlikely to change your blood pH.", 3, "Stomach acid (pH about 2) neutralises it / blood pH is buffered and kept constant by the body."],
    ["(c) Describe how you would compare the pH of three brands of bottled water fairly.", 6, "Use a calibrated pH meter (or the same indicator) 3 // same volume and temperature, repeat and average 3."]]),
  T("ch3", NOS, false, "A student investigates the effect of temperature on the rate of reaction between sodium thiosulfate and hydrochloric acid, timing how long a cross under the flask takes to disappear.", [
    ["(a) Name the independent and the dependent variables.", 6, "Temperature 3 // time for the cross to disappear (rate) 3."],
    ["(b) Name two variables that must be kept constant.", 6, "Any two at 3: concentrations / volumes of both solutions / the same cross and flask / the same observer."],
    ["(c) Why can 1/time be used as a measure of rate?", 3, "The same amount of sulfur (cloudiness) forms each time, so rate is inversely proportional to the time."],
    ["(d) Use collision theory to explain the effect of temperature on rate.", 6, "Particles move faster, collide more often 3 // more collisions have energy ≥ the activation energy, so more are successful 3."]]),
  T("ch4", IOM, false, "50 cm³ of 1.0 M HCl is added to 50 cm³ of 1.0 M NaOH in a polystyrene cup. The temperature rises by 6.8 °C. Take the specific heat capacity of the solution as 4.18 J g⁻¹ K⁻¹ and its density as 1.0 g cm⁻³.", [
    ["(a) Calculate the heat produced. Show your working.", 6, "q = mcΔT = 100 × 4.18 × 6.8 3 // = 2842 J (2.84 kJ) 3. −1 if unit missing."],
    ["(b) How many moles of water are formed?", 3, "0.05 mol (0.050 × 1.0)."],
    ["(c) Calculate the heat of neutralisation, with its sign and unit.", 6, "2.842 ÷ 0.05 = 56.8 3 // ΔH = −56.8 kJ mol⁻¹ (accept −57) 3; sign and unit needed for the second 3."],
    ["(d) Why is a polystyrene cup used?", 3, "It is a good insulator, so little heat is lost / it has a low heat capacity."]]),
  T("ch5", NOS, true, "Safety in the laboratory.", [
    ["(a) Distinguish between a hazard and a risk.", 6, "Hazard: something that could cause harm 3 // risk: the chance of that harm happening (and how serious it is) 3."],
    ["(b) Give two precautions when using concentrated sulfuric acid.", 6, "Any two at 3: goggles / gloves / add acid to water, not water to acid / use a fume cupboard / have a spill kit or water nearby."],
    ["(c) Why is ethanol heated in a water bath rather than over a flame?", 3, "Ethanol is highly flammable."]]),
  T("ch6", NOM, false, "Atomic structure and ionisation energy.", [
    ["(a) Write the electron configuration (s, p) of chlorine (atomic number 17).", 3, "1s² 2s² 2p⁶ 3s² 3p⁵."],
    ["(b) Define first ionisation energy.", 6, "The minimum energy needed to remove the most loosely bound electron 3 // from one mole of gaseous atoms (in the ground state) 3."],
    ["(c) Explain why the first ionisation energy of oxygen is lower than that of nitrogen.", 6, "Nitrogen has a half-filled 2p sublevel, which is especially stable 3 // in oxygen one 2p orbital holds a pair of electrons, which repel, so one is easier to remove 3."],
    ["(d) How does first ionisation energy change going down a group? Give a reason.", 3, "It decreases: larger atomic radius / more screening, so the outer electron is held less tightly."]]),
  T("ch7", NOM, true, "Emission spectra and flame tests.", [
    ["(a) Explain how an element produces lines in its emission spectrum.", 6, "Electrons absorb energy and jump to higher energy levels 3 // they fall back and emit light of a definite energy (frequency) 3."],
    ["(b) Why does each element have its own line spectrum?", 3, "Each element has its own set of energy levels, so the energy gaps differ."],
    ["(c) Give the flame colour of lithium and of potassium.", 6, "Lithium: crimson red 3 // potassium: lilac 3."]]),
  T("ch8", NOM, false, "Calcium carbonate reacts with hydrochloric acid: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. (Ca = 40, C = 12, O = 16; 1 mole of gas occupies 24 L at room temperature and pressure.)", [
    ["(a) Calculate the relative molecular mass of CaCO₃. Show the working.", 3, "40 + 12 + 3(16) = 100 (no marks if the addition is not shown)."],
    ["(b) How many moles are in 25 g of CaCO₃?", 3, "25 ÷ 100 = 0.25 mol."],
    ["(c) Calculate the mass of CO₂ produced from 25 g of CaCO₃.", 6, "0.25 mol CO₂ (1:1 ratio) 3 // × 44 = 11 g 3."],
    ["(d) Calculate the volume of this CO₂ at room temperature and pressure.", 3, "0.25 × 24 = 6 L (6000 cm³)."]]),
  T("ch9", NOM, true, "Trends in the periodic table.", [
    ["(a) How does atomic radius change across a period? Explain.", 6, "Decreases 3 // increasing nuclear charge pulls the electrons in, with the same number of shells 3."],
    ["(b) Define electronegativity.", 3, "The relative attraction of an atom for the shared pair of electrons in a covalent bond."],
    ["(c) How does the reactivity of the halogens change down Group 7? Explain.", 6, "Decreases 3 // larger atoms with more screening attract an extra electron less strongly 3."]]),
  T("ch10", NOM, false, "A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. Its relative molecular mass is 60. (C = 12, H = 1, O = 16)", [
    ["(a) Find the empirical formula. Show your working.", 9, "Divide by atomic masses: 3.33, 6.7, 3.33 3 // ratio 1 : 2 : 1 3 // CH₂O 3."],
    ["(b) Find the molecular formula.", 3, "CH₂O = 30, 60 ÷ 30 = 2, so C₂H₄O₂."],
    ["(c) The compound is an acid. Name it.", 3, "Ethanoic acid."]]),
  T("ch11", BOM, false, "Bonding and shape.", [
    ["(a) Describe how the ionic bond in sodium chloride forms.", 6, "Sodium transfers one electron to chlorine 3 // forming Na⁺ and Cl⁻ ions, which attract (electrostatic attraction) 3."],
    ["(b) What type of bond holds the atoms together in a water molecule?", 3, "(Polar) covalent: shared pairs of electrons."],
    ["(c) Give the shape of an ammonia (NH₃) molecule and explain it.", 6, "Pyramidal 3 // three bond pairs and one lone pair repel (VSEPR); lone pair repels more 3."]]),
  T("ch12", BOM, false, "Boiling points: methane (CH₄) −162 °C, hydrogen chloride (HCl) −85 °C, water (H₂O) 100 °C.", [
    ["(a) Name the main intermolecular force in each of the three substances.", 9, "Methane: van der Waals (dispersion) forces 3 // HCl: dipole–dipole forces 3 // water: hydrogen bonds 3."],
    ["(b) Use these forces to explain the order of the boiling points.", 3, "Hydrogen bonds are the strongest and van der Waals the weakest, so more energy is needed to separate water molecules."],
    ["(c) Is CO₂ polar or non-polar? Explain, although its bonds are polar.", 6, "Non-polar 3 // linear, so the bond dipoles cancel 3."]]),
  T("ch13", BOM, false, "Gases. (R = 8.31 J K⁻¹ mol⁻¹)", [
    ["(a) Give two assumptions of the kinetic theory of gases.", 6, "Any two at 3: particles are in constant random motion / collisions are perfectly elastic / no forces between particles / particle volume negligible / average kinetic energy ∝ kelvin temperature."],
    ["(b) Calculate the pressure of 0.50 mol of a gas at 300 K in a volume of 0.012 m³.", 9, "p = nRT ÷ V 3 // = 0.50 × 8.31 × 300 ÷ 0.012 3 // = 1.04 × 10⁵ Pa (103,875 Pa) 3. −1 if unit missing."],
    ["(c) Why do real gases deviate from ideal behaviour at high pressure?", 3, "Particles are close together, so their volume and the forces between them are no longer negligible."]]),
  T("ch14", BOM, false, "Hydrocarbons.", [
    ["(a) Give the molecular formulas of propane and propene.", 6, "Propane C₃H₈ 3 // propene C₃H₆ 3."],
    ["(b) Describe a test to show that propene is unsaturated.", 6, "Add bromine water 3 // it turns from orange (red-brown) to colourless 3."],
    ["(c) Name the type of reaction when ethene reacts with hydrogen, and the product.", 3, "Addition (hydrogenation), giving ethane."],
    ["(d) What is meant by the octane number of a fuel?", 3, "A measure of its tendency to resist auto-ignition (knocking)."]]),
  T("ch15", IOM, false, "Ammonia is made by the Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ mol⁻¹.", [
    ["(a) Write the expression for the equilibrium constant, Kc.", 3, "Kc = [NH₃]² ÷ ([N₂][H₂]³)."],
    ["(b) Predict and explain the effect of increasing the pressure on the yield of ammonia.", 6, "Yield increases 3 // the equilibrium shifts to the side with fewer gas molecules (4 → 2), to reduce the pressure (Le Châtelier) 3."],
    ["(c) Predict and explain the effect of raising the temperature on the yield.", 6, "Yield decreases 3 // the forward reaction is exothermic, so the equilibrium shifts in the endothermic (reverse) direction 3."],
    ["(d) What is the effect of a catalyst on the position of equilibrium?", 3, "None: it only lets equilibrium be reached faster."]]),
  T("ch16", IOM, false, "Acids and bases.", [
    ["(a) Calculate the pH of 0.05 M hydrochloric acid.", 6, "[H⁺] = 0.05 3 // pH = −log(0.05) = 1.3 3."],
    ["(b) Calculate the pH of 0.01 M sodium hydroxide.", 6, "pOH = −log(0.01) = 2 3 // pH = 14 − 2 = 12 3."],
    ["(c) Why is ethanoic acid described as a weak acid?", 3, "It is only slightly dissociated (ionised) in water."],
    ["(d) Identify a conjugate acid–base pair in: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.", 3, "NH₄⁺ / NH₃ or H₂O / OH⁻."]]),
  T("ch17", IOM, true, "Redox and electrolysis.", [
    ["(a) Define oxidation and reduction in terms of electrons.", 6, "Oxidation: loss of electrons 3 // reduction: gain of electrons 3."],
    ["(b) A key is plated with copper. Which electrode is the key, and write the half-equation there.", 6, "Cathode (negative) 3 // Cu²⁺ + 2e⁻ → Cu 3."],
    ["(c) Give one use of electroplating.", 3, "To protect against corrosion / to improve appearance (e.g. jewellery, cutlery)."]]),
  T("ch18", IOM, false, "Use these heats of reaction: C + O₂ → CO₂, ΔH = −394 kJ mol⁻¹; H₂ + ½O₂ → H₂O, ΔH = −286 kJ mol⁻¹; CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = −890 kJ mol⁻¹.", [
    ["(a) State Hess’s law.", 3, "The heat change of a reaction depends only on the initial and final states, not on the route taken."],
    ["(b) Calculate the heat of formation of methane, C + 2H₂ → CH₄. Show your working.", 9, "Uses −394 + 2(−286) 3 // subtracts (−890), i.e. reverses the combustion 3 // = −76 kJ mol⁻¹ 3. −1 if unit missing."],
    ["(c) Is the formation of methane exothermic or endothermic?", 3, "Exothermic (ΔH negative)."]]),
  T("ch19", MIW, false, "25 cm³ of vinegar is diluted to 250 cm³. 25.0 cm³ of the diluted vinegar needs a mean titre of 21.0 cm³ of 0.10 M NaOH. CH₃COOH + NaOH → CH₃COONa + H₂O. (Mr of ethanoic acid = 60)", [
    ["(a) Calculate the moles of NaOH used.", 3, "0.10 × 21.0 ÷ 1000 = 0.0021 mol."],
    ["(b) Calculate the concentration of the diluted vinegar in mol/L.", 3, "0.0021 ÷ 0.025 = 0.084 M."],
    ["(c) Calculate the concentration of the original vinegar in mol/L.", 3, "× 10 = 0.84 M."],
    ["(d) Express this in grams per litre.", 3, "0.84 × 60 = 50.4 g/L."],
    ["(e) Express it as % (w/v).", 3, "5.04%."],
    ["(f) Name a suitable indicator.", 3, "Phenolphthalein."]]),
  T("ch20", MIW, false, "Propanone and propanal are isomers.", [
    ["(a) Name the functional group in each.", 6, "Propanone: ketone (carbonyl, C=O) 3 // propanal: aldehyde (–CHO) 3."],
    ["(b) Describe a test that tells them apart.", 6, "Fehling’s (heated) / Tollens’ / acidified dichromate 3 // propanal gives a red precipitate / silver mirror / orange to green; propanone does not 3."],
    ["(c) Name the product when propanal is oxidised.", 3, "Propanoic acid."]]),
  T("ch21", MIW, false, "Esters and soap.", [
    ["(a) Name the ester formed from ethanol and ethanoic acid, and the type of reaction.", 6, "Ethyl ethanoate 3 // esterification (condensation) 3."],
    ["(b) Name the catalyst used.", 3, "Concentrated sulfuric acid."],
    ["(c) Name the reagents used to make soap.", 3, "A fat or oil and sodium hydroxide (base hydrolysis / saponification)."],
    ["(d) Explain how soap removes grease.", 3, "The non-polar tail dissolves in the grease and the polar (ionic) head in water, lifting the grease off."]]),
  T("ch22", MIW, true, "Water and the environment.", [
    ["(a) What causes hardness in water?", 3, "Dissolved calcium and magnesium ions."],
    ["(b) Distinguish between temporary and permanent hardness.", 6, "Temporary: removed by boiling (hydrogencarbonates) 3 // permanent: not removed by boiling (sulfates / chlorides) 3."],
    ["(c) How does an ion-exchange resin remove hardness?", 3, "Swaps Ca²⁺ and Mg²⁺ ions for Na⁺ (or H⁺) ions."],
    ["(d) Give one way to reduce carbon dioxide emissions.", 3, "Renewable energy / less fossil fuel / better insulation / public transport / carbon capture."]])
] };

const OL = { id:"", builtin:true, title:"LC Chemistry · Ordinary", subject:"Chemistry", cycle:"LC", level:"OL", photoFirst:false, source: SRC,
  gradeBands: OL_GRADES, texts:{}, items: ITEMS, tasks: [
  T("co1", NOS, false, "A student does a titration of hydrochloric acid against 25.0 cm³ of sodium carbonate solution.", [
    ["(a) Name the piece of equipment used to add the acid.", 3, "Burette."],
    ["(b) Name the piece of equipment used to measure exactly 25.0 cm³ of sodium carbonate.", 3, "Pipette."],
    ["(c) Name a suitable indicator and its colour change.", 6, "Methyl orange 3 // yellow to orange / peach (red) 3."],
    ["(d) Why is the conical flask placed on a white tile?", 3, "To see the colour change clearly."]]),
  T("co2", IOM, true, "Marble chips (calcium carbonate) react with hydrochloric acid.", [
    ["(a) Name the gas produced.", 3, "Carbon dioxide."],
    ["(b) Give two ways to make this reaction go faster.", 6, "Any two at 3: heat the acid / use more concentrated acid / use smaller chips (powder) / stir."],
    ["(c) Why does powder react faster than large chips?", 3, "It has a larger surface area, so more collisions."]]),
  T("co3", NOM, true, "The atom.", [
    ["(a) Name the three particles in an atom and give the charge of each.", 6, "Proton +1, neutron 0, electron −1: 2 each."],
    ["(b) Sodium has 11 electrons. Give their arrangement in shells.", 3, "2, 8, 1."],
    ["(c) Why is sodium in Group 1?", 3, "It has one electron in its outer shell."]]),
  T("co4", NOM, false, "The periodic table.", [
    ["(a) Name Group 1 and Group 7.", 6, "Alkali metals 3 // halogens 3."],
    ["(b) Why are the noble gases unreactive?", 3, "They have a full outer shell of electrons."],
    ["(c) Give two things you would see when a small piece of sodium is added to water.", 6, "Any two at 3: floats / moves around / fizzes / melts into a ball / gets smaller and disappears / (orange flame)."]]),
  T("co5", BOM, true, "Bonding.", [
    ["(a) What is an ionic bond?", 3, "The attraction between oppositely charged ions, formed when electrons are transferred."],
    ["(b) What is a covalent bond?", 3, "A shared pair of electrons."],
    ["(c) Is sodium chloride ionic or covalent?", 3, "Ionic."],
    ["(d) Give one property of ionic compounds.", 3, "High melting point / dissolve in water / conduct when melted or dissolved / crystals."]]),
  T("co6", NOM, true, "The mole. (H = 1, O = 16; Avogadro’s constant = 6 × 10²³)", [
    ["(a) Calculate the relative molecular mass of water, H₂O.", 3, "2(1) + 16 = 18."],
    ["(b) How many moles are in 36 g of water?", 3, "36 ÷ 18 = 2 mol."],
    ["(c) What is a mole?", 3, "The amount of substance containing 6 × 10²³ particles (Avogadro’s number)."],
    ["(d) How many molecules are in 2 moles of water?", 3, "1.2 × 10²⁴ (2 × 6 × 10²³)."]]),
  T("co7", NOM, true, "Flame tests.", [
    ["(a) Give the flame colour of sodium, potassium and lithium.", 9, "Sodium yellow-orange 3 // potassium lilac 3 // lithium crimson red 3."],
    ["(b) Why do metals give coloured flames?", 3, "Electrons are excited to higher energy levels and give out light as they fall back."]]),
  T("co8", BOM, false, "Hydrocarbons.", [
    ["(a) Give the general formula of the alkanes.", 3, "CₙH₂ₙ₊₂."],
    ["(b) Give the molecular formula of methane.", 3, "CH₄."],
    ["(c) Describe a test to show that ethene is unsaturated.", 6, "Add bromine water 3 // goes from orange to colourless 3."],
    ["(d) Give one use of ethene.", 3, "Making plastics (polythene) / ripening fruit."]]),
  T("co9", BOM, true, "Gases.", [
    ["(a) State Boyle’s law.", 6, "At constant temperature 3 // the volume of a fixed mass of gas is inversely proportional to its pressure 3."],
    ["(b) Convert 27 °C to kelvin.", 3, "300 K."],
    ["(c) Why does the pressure of a gas in a sealed can rise when it is heated?", 3, "The particles move faster and hit the walls harder and more often."]]),
  T("co10", IOM, false, "Acids and bases.", [
    ["(a) Give the pH range of an acid.", 3, "Below 7 (0–6)."],
    ["(b) Name an indicator that shows the pH.", 3, "Universal indicator (or a pH meter)."],
    ["(c) Write a word equation for the reaction of hydrochloric acid with sodium hydroxide.", 6, "Hydrochloric acid + sodium hydroxide 3 → sodium chloride + water 3."],
    ["(d) What is the pH of 0.1 M HCl?", 3, "1."]]),
  T("co11", IOM, true, "Energy changes.", [
    ["(a) What is an exothermic reaction? What is an endothermic reaction?", 6, "Exothermic: gives out heat 3 // endothermic: takes in heat 3."],
    ["(b) Give one example of each.", 6, "Exothermic: burning / neutralisation / respiration 3 // endothermic: photosynthesis / dissolving ammonium nitrate / thermal decomposition 3."]]),
  T("co12", IOM, false, "A student measures the heat of neutralisation of HCl and NaOH in a polystyrene cup.", [
    ["(a) Why is a polystyrene cup used?", 3, "It is a good insulator, so heat is not lost."],
    ["(b) How is the temperature rise measured?", 3, "Record the starting temperature, then the highest temperature reached, with a thermometer."],
    ["(c) Is the reaction exothermic or endothermic?", 3, "Exothermic."],
    ["(d) Give one source of error.", 3, "Heat lost to the air or cup / thermometer reading errors / solutions not at the same starting temperature."]]),
  T("co13", IOM, true, "Equilibrium.", [
    ["(a) What is a reversible reaction?", 3, "A reaction that can go forwards and backwards."],
    ["(b) What is meant by dynamic equilibrium?", 3, "The forward and reverse reactions happen at the same rate, so amounts stay constant."],
    ["(c) State Le Châtelier’s principle.", 3, "If a system at equilibrium is disturbed, it shifts to oppose the change."],
    ["(d) What effect does a catalyst have on the position of equilibrium?", 3, "None (it only gets there faster)."]]),
  T("co14", IOM, true, "Oxidation, reduction and electrolysis.", [
    ["(a) Define oxidation and reduction in terms of electrons.", 6, "Oxidation is loss 3 // reduction is gain of electrons (OIL RIG) 3."],
    ["(b) In copper plating, at which electrode does copper form?", 3, "Cathode (negative)."],
    ["(c) Give one use of electrolysis.", 3, "Electroplating / extracting metals (aluminium) / purifying copper."]]),
  T("co15", MIW, false, "25.0 cm³ of diluted vinegar is titrated with 0.10 M sodium hydroxide. The mean titre is 20.0 cm³. The acid and base react 1 : 1.", [
    ["(a) Calculate the moles of NaOH used. Show your working.", 6, "0.10 × 20.0 ÷ 1000 3 // = 0.002 mol 3."],
    ["(b) Calculate the concentration of the diluted vinegar in mol/L.", 3, "0.002 ÷ 0.025 = 0.08 M."],
    ["(c) Name a suitable indicator.", 3, "Phenolphthalein."]]),
  T("co16", MIW, true, "Organic chemistry.", [
    ["(a) Name the functional group in ethanol and in ethanoic acid.", 6, "Hydroxyl (–OH) 3 // carboxyl (–COOH) 3."],
    ["(b) Give one use of ethanol.", 3, "Drinks / fuel / solvent / antiseptic."],
    ["(c) What kind of smell do esters have?", 3, "Fruity / sweet."]]),
  T("co17", MIW, true, "Making soap.", [
    ["(a) Name the two main substances used to make soap.", 6, "A fat or oil 3 // sodium hydroxide 3."],
    ["(b) What is this reaction called?", 3, "Saponification (base hydrolysis)."],
    ["(c) How does soap clean grease?", 3, "One end dissolves in grease and the other in water, so the grease is lifted off and washed away."]]),
  T("co18", MIW, false, "Water treatment.", [
    ["(a) Name three stages in the treatment of drinking water.", 9, "Any three at 3: screening / settling with flocculation / filtration / chlorination / fluoridation / pH adjustment."],
    ["(b) Why is chlorine added?", 3, "To kill bacteria (germs)."]]),
  T("co19", MIW, true, "Chemistry and the environment.", [
    ["(a) What causes acid rain?", 3, "Sulfur dioxide and nitrogen oxides from burning fuels dissolve in rain."],
    ["(b) Explain the greenhouse effect.", 3, "Gases such as CO₂ trap heat (infrared) in the atmosphere, warming the Earth."],
    ["(c) Give one way to reduce carbon dioxide emissions.", 3, "Renewable energy / less driving / insulation / plant trees."],
    ["(d) Why should plastics be recycled?", 3, "Most are not biodegradable / saves crude oil / less landfill and litter."]]),
  T("co20", NOS, false, "A shampoo advert says it is ‘100% chemical-free’.", [
    ["(a) Why is this claim not scientific?", 3, "Everything, including water, is made of chemicals."],
    ["(b) Give two ways to judge whether an advert or article about science is reliable.", 6, "Any two at 3: evidence from a fair test / who wrote it and why / published by scientists / peer reviewed / other sources agree."],
    ["(c) Describe a fair test to compare two indigestion tablets.", 6, "Add each to the same volume and concentration of acid 3 // measure pH or titrate; same temperature, repeat 3."]]),
  T("co21", NOS, true, "Working safely and accurately.", [
    ["(a) Give the meaning of two hazard symbols you know.", 6, "Any two at 3: flammable / corrosive / toxic / harmful or irritant / oxidising / explosive."],
    ["(b) Why should you wear goggles in the lab?", 3, "To protect your eyes from splashes."],
    ["(c) Where should you read the level of liquid in a burette?", 3, "At the bottom of the meniscus, with your eye level with it."]])
] };
HL.store = "loops_lchl_chem_v1"; OL.store = "loops_lcol_chem_v1";
LOOPS_SUBJECTS.chem = { name: "Chemistry", flag: "⚗️", native: "New course, 2027", colour: "chem", OL, HL };
})();
