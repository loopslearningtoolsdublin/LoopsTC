// ═══════════════════════════════════════════════
// LOOPS · LC BIOLOGY — Higher + Ordinary (8 Nov 2026)
// The NEW specification (first exam June 2027): one written paper, 300 marks, Q1 + any five of Q2–Q7, 50 marks each.
// Styled on the SEC sample papers. No official marking schemes for the new spec yet, so marks follow the
// SEC's Biology conventions (3 marks per point, 2 per label, units and working count). Research: docs/lc-sciences-research-2026-11-04.md
// The Biology in Practice Investigation (AAC, 40%) is coursework and is not covered.
// ═══════════════════════════════════════════════
(function(){
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const NOS = "Nature of science", ORG = "Organisation of life", SP = "Structures & processes", INT = "Interactions";
const T = (id, strand, short, title, parts) => { const max = parts.reduce((t,p) => t + p[1], 0);
  return {id, kind:"bio_parts", strand, section: short ? "Question 1 · short parts" : "Questions 2–7 · in context",
    max, label: (short ? "Short question" : "Structured question") + " · " + strand + " · " + max + " marks", title,
    pts: parts.map(p => p[0]), marks: parts.map(p => p[1]), credit: parts.map(p => p[2])}; };

const ITEMS = [
  // Nature of science
  {id:"b1",skill:NOS,type:"mcq",q:"In an investigation, the variable you deliberately change is the…",opts:["Independent variable","Dependent variable","Controlled variable","Control"],a:0},
  {id:"b2",skill:NOS,type:"mcq",q:"A control in an experiment is…",opts:["A set-up without the factor being tested, used for comparison","The variable you measure","The person who checks the results","The hypothesis"],a:0},
  {id:"b3",skill:NOS,type:"mcq",q:"Repeating an experiment and getting similar results makes the results more…",opts:["Reliable","Expensive","Biased","Dangerous"],a:0},
  {id:"b4",skill:NOS,type:"mcq",q:"A hypothesis is…",opts:["A testable prediction or explanation","A proven fact","A table of results","A type of graph"],a:0},
  {id:"b5",skill:NOS,type:"mcq",q:"In a double-blind trial…",opts:["Neither the volunteers nor the researchers know who gets the real treatment","Only the volunteers know who gets the treatment","Everyone knows who gets the treatment","There is no placebo group"],a:0},
  {id:"b6",skill:NOS,type:"mcq",q:"A placebo is given in a drug trial to…",opts:["Rule out effects that come only from believing you are being treated","Make the drug work faster","Save money","Replace the treatment group"],a:0},
  {id:"b7",skill:NOS,type:"mcq",q:"Peer review means…",opts:["Other scientists check the work before it is published","The scientist checks their own work","Students mark each other’s homework","A newspaper reports the results"],a:0},
  {id:"b8",skill:NOS,type:"match",q:"Catalase and temperature: match each to its role.",pairs:[["Independent variable","Temperature"],["Dependent variable","Volume of foam (oxygen) per minute"],["Controlled variable","pH and volume of hydrogen peroxide"],["Control","The same set-up with boiled (denatured) enzyme"]]},
  // Organisation of life
  {id:"b9",skill:ORG,type:"mcq",q:"Which element is found in all proteins but not in carbohydrates?",opts:["Nitrogen","Carbon","Hydrogen","Oxygen"],a:0},
  {id:"b10",skill:ORG,type:"mcq",q:"Glucose is a…",opts:["Monosaccharide","Disaccharide","Polysaccharide","Lipid"],a:0},
  {id:"b11",skill:ORG,type:"match",q:"Match the food test to a positive result.",pairs:[["Iodine (starch)","Blue-black"],["Benedict’s, heated (reducing sugar)","Brick red"],["Biuret (protein)","Purple / violet"],["Brown paper (fat)","Translucent spot"]]},
  {id:"b12",skill:ORG,type:"match",q:"Match the organelle to its function.",pairs:[["Mitochondrion","Aerobic respiration"],["Ribosome","Protein synthesis"],["Chloroplast","Photosynthesis"],["Nucleus","Holds the DNA and controls the cell"]]},
  {id:"b13",skill:ORG,type:"mcq",q:"Prokaryotic cells, such as bacteria, have no…",opts:["Nucleus surrounded by a membrane","DNA","Ribosomes","Cell membrane"],a:0},
  {id:"b14",skill:ORG,type:"mcq",q:"In DNA, the bases pair as…",opts:["A with T, and C with G","A with C, and T with G","A with G, and C with T","A with U, and C with G"],a:0},
  {id:"b15",skill:ORG,type:"mcq",q:"In RNA, thymine is replaced by…",opts:["Uracil","Adenine","Guanine","Cytosine"],a:0},
  {id:"b16",skill:ORG,type:"mcq",q:"A gene is…",opts:["A section of DNA that codes for a protein","A pair of chromosomes","A type of cell","A protein"],a:0},
  {id:"b17",skill:ORG,type:"mcq",q:"An organism with the genotype Bb is…",opts:["Heterozygous","Homozygous dominant","Homozygous recessive","Haploid"],a:0},
  {id:"b18",skill:ORG,type:"mcq",q:"Crossing Bb × Bb gives which ratio of phenotypes (B dominant)?",opts:["3 dominant : 1 recessive","1 : 1","All dominant","1 dominant : 3 recessive"],a:0},
  {id:"b19",skill:ORG,type:"mcq",q:"Who proposed the theory of natural selection along with Darwin?",opts:["Alfred Russel Wallace","Gregor Mendel","Louis Pasteur","Robert Hooke"],a:0},
  {id:"b20",skill:ORG,type:"mcq",q:"A mutation is…",opts:["A change in the DNA (genetic material)","A type of cell division","A change in diet","A new species"],a:0},
  {id:"b21",skill:ORG,type:"mcq",q:"Which of these is NOT a characteristic of ALL living things?",opts:["Photosynthesis","Nutrition","Excretion","Reproduction"],a:0},
  {id:"b22",skill:ORG,type:"mcq",q:"Colour blindness is more common in males because the gene is carried on the…",opts:["X chromosome","Y chromosome","Mitochondria","Ribosomes"],a:0},
  // Structures & processes
  {id:"b23",skill:SP,type:"mcq",q:"Enzymes are made of…",opts:["Protein","Starch","Fat","Glucose"],a:0},
  {id:"b24",skill:SP,type:"mcq",q:"A very high temperature stops an enzyme working because…",opts:["The shape of its active site changes (it is denatured)","It runs out of energy","It turns into a substrate","It dissolves"],a:0},
  {id:"b25",skill:SP,type:"mcq",q:"The products of photosynthesis are…",opts:["Glucose and oxygen","Carbon dioxide and water","Glucose and carbon dioxide","Oxygen and water"],a:0},
  {id:"b26",skill:SP,type:"mcq",q:"In the light stage of photosynthesis, water is split, releasing…",opts:["Oxygen","Carbon dioxide","Glucose","Nitrogen"],a:0},
  {id:"b27",skill:SP,type:"mcq",q:"Stage 1 of respiration (glycolysis) takes place in the…",opts:["Cytoplasm","Mitochondrion","Nucleus","Chloroplast"],a:0},
  {id:"b28",skill:SP,type:"mcq",q:"Anaerobic respiration (fermentation) in yeast produces…",opts:["Ethanol and carbon dioxide","Lactic acid only","Oxygen and glucose","Water and oxygen"],a:0},
  {id:"b29",skill:SP,type:"mcq",q:"Mitosis produces…",opts:["Two genetically identical cells","Four different haploid cells","Gametes only","One larger cell"],a:0},
  {id:"b30",skill:SP,type:"mcq",q:"Meiosis produces…",opts:["Four haploid cells that are genetically different","Two identical diploid cells","Skin cells for repair","Bacteria"],a:0},
  {id:"b31",skill:SP,type:"order",q:"Blood returning from the body: put its path through the heart in order.",words:["Vena cava","Right atrium","Right ventricle","Pulmonary artery"]},
  {id:"b32",skill:SP,type:"mcq",q:"Transpiration is…",opts:["The loss of water vapour from the leaves, mainly through stomata","The movement of food in the phloem","The uptake of carbon dioxide","The splitting of water"],a:0},
  {id:"b33",skill:SP,type:"mcq",q:"Xylem carries…",opts:["Water and minerals up from the roots","Sugars down from the leaves","Oxygen to the roots","Hormones only"],a:0},
  {id:"b34",skill:SP,type:"match",q:"Match the hormone to the gland that makes it.",pairs:[["Insulin","Pancreas"],["Adrenaline","Adrenal glands"],["Thyroxine","Thyroid"],["FSH","Pituitary"]]},
  {id:"b35",skill:SP,type:"mcq",q:"Osmosis is the movement of water…",opts:["From a high to a low water concentration across a selectively permeable membrane","From a low to a high water concentration using energy","Of any molecule from high to low concentration","Through the xylem only"],a:0},
  {id:"b36",skill:SP,type:"mcq",q:"Pollination is…",opts:["The transfer of pollen from an anther to a stigma","The joining of male and female gametes","The spreading of seeds","The growth of a pollen tube"],a:0},
  {id:"b37",skill:SP,type:"mcq",q:"A chemical crosses the gap between two neurons. The gap is called a…",opts:["Synapse","Dendrite","Myelin sheath","Receptor"],a:0},
  {id:"b38",skill:SP,type:"mcq",q:"Antibodies are made by…",opts:["B lymphocytes","Red blood cells","Platelets","Neurons"],a:0},
  // Interactions
  {id:"b39",skill:INT,type:"mcq",q:"A food chain always begins with a…",opts:["Producer","Primary consumer","Decomposer","Predator"],a:0},
  {id:"b40",skill:INT,type:"mcq",q:"Nitrogen-fixing bacteria convert nitrogen gas into…",opts:["Compounds plants can use, such as ammonium and nitrates","Oxygen","Proteins in animals","Carbon dioxide"],a:0},
  {id:"b41",skill:INT,type:"mcq",q:"A quadrat is used to survey…",opts:["Plants and slow-moving animals","Birds in flight","Fish in a river","Soil pH"],a:0},
  {id:"b42",skill:INT,type:"mcq",q:"Decomposers…",opts:["Break down dead matter and recycle nutrients","Make their own food from sunlight","Only eat plants","Are always animals"],a:0},
  {id:"b43",skill:INT,type:"mcq",q:"In genetic engineering, restriction enzymes are used to…",opts:["Cut DNA at specific base sequences","Join pieces of DNA together","Copy proteins","Kill bacteria"],a:0},
  {id:"b44",skill:INT,type:"mcq",q:"Biodiversity is…",opts:["The variety of living things in an area","The number of one species","The study of soil","The food eaten by a predator"],a:0},
  {id:"b45",skill:INT,type:"mcq",q:"Antibiotics work against…",opts:["Bacteria, but not viruses","Viruses, but not bacteria","Both bacteria and viruses","Fungi only"],a:0},
  {id:"b46",skill:INT,type:"mcq",q:"Bacteria reproduce by…",opts:["Binary fission","Meiosis","Pollination","Budding of spores only"],a:0},
  {id:"b47",skill:INT,type:"mcq",q:"Aseptic technique is used in microbiology to…",opts:["Prevent contamination by unwanted microorganisms","Make bacteria grow faster","Kill all bacteria on the plate","Measure pH"],a:0},
  {id:"b48",skill:INT,type:"match",q:"Match the relationship to its example.",pairs:[["Predation","A fox eats a rabbit"],["Competition","Two plants need the same light"],["Parasitism","A tapeworm lives in a gut"],["Mutualism","Nitrogen-fixing bacteria in clover root nodules"]]}
];

const HL = { id:"", builtin:true, title:"LC Biology · Higher", subject:"Biology", cycle:"LC", level:"HL", photoFirst:false,
  source:"Styled on the SEC sample papers for the 2027 specification (Q1 + any five of Q2–Q7, 50 marks each). No official marking schemes yet: marks follow SEC Biology conventions.",
  gradeBands: HL_GRADES, texts:{}, items: ITEMS, tasks: [
  T("bh1", NOS, false, "A student investigates the effect of temperature on the activity of catalase (from celery) on hydrogen peroxide. Catalase breaks hydrogen peroxide into water and oxygen, which forms foam.", [
    ["(a) State a hypothesis for this investigation.", 3, "A testable statement linking temperature to rate, e.g. ‘as temperature rises to an optimum, the rate of foam production increases’."],
    ["(b) Name the dependent variable and say how it could be measured.", 6, "Volume (height) of foam / oxygen produced 3 // measured in a graduated cylinder after a fixed time, e.g. per minute 3."],
    ["(c) Name two variables that must be kept constant.", 6, "Any two at 3: pH (buffer) / volume or concentration of hydrogen peroxide / mass of celery / time / size of cylinder."],
    ["(d) How could the student show that any foam is caused by the enzyme?", 3, "Control: repeat with boiled (denatured) celery/enzyme, so no foam is produced."],
    ["(e) Describe the expected shape of a graph of rate against temperature, and explain it.", 6, "Rises to an optimum, then falls sharply 3 // above the optimum the enzyme is denatured: the active site changes shape and the substrate no longer fits 3."]]),
  T("bh2", NOS, false, "A new vaccine is tested on 2,000 volunteers. Half receive the vaccine and half receive a placebo. The trial is double-blind.", [
    ["(a) Why is a placebo group needed?", 6, "To compare / act as a control 3 // so any effect can be shown to be caused by the vaccine and not by expectation or chance 3."],
    ["(b) Explain why the trial is double-blind.", 6, "Neither volunteers nor researchers know who received the vaccine 3 // removes bias in reporting or measuring results 3."],
    ["(c) Why were 2,000 volunteers used, rather than 20?", 3, "A large sample makes results more reliable / reduces the effect of chance or individual variation."],
    ["(d) Give one ethical issue in a vaccine trial.", 3, "Any one: informed consent / risk of side effects / withholding a possibly useful vaccine from the placebo group / fair selection of volunteers."]]),
  T("bh3", NOS, true, "An online post claims: ‘Taking our vitamin supplement every day doubles your immunity. Thousands of happy customers!’", [
    ["(a) Give two criteria you would use to judge whether this claim is trustworthy.", 6, "Any two at 3: published in a peer-reviewed journal / evidence from a controlled trial / sample size given / author or funder has no commercial interest / claim repeated by independent scientists."],
    ["(b) What kind of evidence would support the claim?", 3, "A large, controlled (placebo, double-blind) trial showing a measured effect."],
    ["(c) Customers who take the supplement get fewer colds. Explain why this does not prove the supplement works.", 3, "Correlation is not causation: other factors (diet, exercise, age) may cause it / no control group."]]),
  T("bh4", NOS, true, "A student examines a prepared slide of an onion root tip under the light microscope. 24 of the 200 cells counted are dividing.", [
    ["(a) Name the type of cell division seen in a root tip.", 3, "Mitosis."],
    ["(b) Calculate the mitotic index as a percentage. Show your working.", 6, "24 ÷ 200 × 100 3 // = 12% 3 (−1 if % missing)."],
    ["(c) Why is a root tip used?", 3, "It is a growing region (meristem) where cells divide often."],
    ["(d) Name a stain used for this slide and say why it is used.", 6, "Toluidine blue / acetic orcein (accept methylene blue) 3 // makes the chromosomes / nuclei visible 3."]]),
  T("bh5", NOS, false, "A student counts bubbles from pondweed at different distances from a lamp. Results — distance (cm): 10, 20, 30, 40; bubbles per minute: 48, 30, 15, 8.", [
    ["(a) Name the independent variable. What does it represent?", 3, "Distance from the lamp, which represents light intensity."],
    ["(b) Describe the trend in the results.", 3, "As distance increases (light intensity falls), the number of bubbles per minute falls."],
    ["(c) Explain the trend.", 3, "Less light energy, so the light stage / rate of photosynthesis slows, and less oxygen is made."],
    ["(d) Name one other factor that limits the rate of photosynthesis.", 3, "Carbon dioxide concentration / temperature."],
    ["(e) Why should the plant be left for a few minutes at each new distance before counting?", 3, "To let it adjust (acclimatise) so the rate is steady."]]),
  T("bh6", ORG, true, "Biomolecules and food tests.", [
    ["(a) Name the reagent used to test for a reducing sugar, and give a positive result.", 6, "Benedict’s (or Fehling’s) 3 // brick red (orange-red) when heated 3."],
    ["(b) Name the reagent used to test for protein, and give a positive result.", 6, "Biuret (sodium hydroxide + copper sulfate) 3 // purple / violet 3."],
    ["(c) Give one function of lipids in the body.", 3, "Any one: energy store / insulation / cell membranes (phospholipids) / protection of organs / hormones."]]),
  T("bh7", SP, false, "DNA and protein synthesis.", [
    ["(a) Name the four bases in DNA and state how they pair.", 6, "Adenine, thymine, cytosine, guanine 3 // A–T and C–G 3."],
    ["(b) What is a codon?", 3, "A sequence of three bases (on mRNA) that codes for one amino acid."],
    ["(c) Give the role of mRNA in protein synthesis.", 3, "Carries a copy of the gene’s code from the nucleus to the ribosome."],
    ["(d) Give the role of tRNA in protein synthesis.", 3, "Brings a specific amino acid to the ribosome, matching its anticodon to the codon."]]),
  T("bh8", ORG, false, "In pea plants, tall (T) is dominant over dwarf (t). Two heterozygous tall plants are crossed.", [
    ["(a) Give the genotype of each parent and the gametes each can produce.", 3, "Tt × Tt; gametes T and t from each."],
    ["(b) Show the cross and list the genotypes of the offspring.", 6, "Punnett square or cross shown 3 // TT, Tt, Tt, tt 3."],
    ["(c) Give the expected ratio of phenotypes.", 3, "3 tall : 1 dwarf."],
    ["(d) What is meant by heterozygous?", 3, "Having two different alleles for a gene (one dominant, one recessive)."]]),
  T("bh9", ORG, false, "Colour blindness is a sex-linked recessive condition. A carrier mother (XᴮXᵇ) and a father with normal vision (XᴮY) have children.", [
    ["(a) Explain why colour blindness is more common in males.", 6, "The gene is on the X chromosome 3 // males have only one X, so one recessive allele shows; there is no second X to mask it 3."],
    ["(b) Show the cross and give the genotypes of the children.", 6, "Cross shown 3 // XᴮXᴮ, XᴮXᵇ, XᴮY, XᵇY 3."],
    ["(c) What is the chance that a son of this couple is colour blind?", 3, "1 in 2 (50%) of sons. (Accept 1 in 4 of all children only if clearly stated as all children.)"]]),
  T("bh10", ORG, false, "Some bacteria are now resistant to antibiotics.", [
    ["(a) What is meant by natural selection?", 3, "Individuals best adapted to their environment survive and reproduce, passing on their genes."],
    ["(b) Explain how a population of antibiotic-resistant bacteria arises.", 9, "Three points at 3: a mutation gives some bacteria resistance // the antibiotic kills the non-resistant bacteria // the resistant ones survive and multiply, passing on the resistance gene."],
    ["(c) Give one piece of evidence for evolution.", 3, "Any one: fossils / comparative anatomy (homologous structures) / DNA or protein similarities / observed changes such as resistance."]]),
  T("bh11", ORG, true, "Cells.", [
    ["(a) Give two differences between a prokaryotic cell and a eukaryotic cell.", 6, "Any two at 3: no membrane-bound nucleus / no membrane-bound organelles (mitochondria, chloroplasts) / smaller ribosomes / DNA in a loop, often with plasmids / smaller size."],
    ["(b) Give the function of a mitochondrion and of a ribosome.", 6, "Mitochondrion: aerobic respiration (releases energy / makes ATP) 3 // ribosome: protein synthesis 3."],
    ["(c) The cell membrane is selectively permeable. Explain.", 3, "It lets some molecules through but not others."]]),
  T("bh12", SP, false, "Photosynthesis.", [
    ["(a) Write a balanced chemical equation for photosynthesis.", 3, "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light / chlorophyll)."],
    ["(b) Describe three events in the light stage.", 9, "Three at 3: light energy is absorbed by chlorophyll // water is split (photolysis) // oxygen is released // electrons are energised / ATP and NADPH are made // protons (H⁺) are released."],
    ["(c) Where in the chloroplast does the dark stage (Calvin cycle) take place?", 3, "In the stroma."]]),
  T("bh13", SP, false, "Respiration.", [
    ["(a) Where does stage 1 of respiration happen, and what is its main product?", 6, "Cytoplasm 3 // pyruvate (pyruvic acid), with a little ATP 3."],
    ["(b) Where does stage 2 of aerobic respiration happen?", 3, "In the mitochondria (matrix and inner membrane)."],
    ["(c) Why does aerobic respiration release much more energy than anaerobic?", 3, "Glucose is fully broken down to CO₂ and water, so much more ATP is made."],
    ["(d) Give the products of fermentation in yeast.", 3, "Ethanol and carbon dioxide."]]),
  T("bh14", SP, false, "The heart and circulation.", [
    ["(a) Why is the wall of the left ventricle thicker than the right?", 3, "It pumps blood all around the body, so needs a higher pressure."],
    ["(b) What is the role of the heart valves?", 3, "To stop blood flowing backwards / keep it flowing one way."],
    ["(c) Explain the difference between the pulmonary and the systemic circulation.", 6, "Pulmonary: heart to lungs and back 3 // systemic: heart to the rest of the body and back 3."],
    ["(d) Explain why the pulse rate rises during exercise.", 3, "Muscles need more oxygen and glucose for respiration, and more CO₂ must be removed."]]),
  T("bh15", SP, false, "Defence against disease.", [
    ["(a) Distinguish between innate (general) and adaptive (specific) immunity.", 6, "Innate: present from birth, non-specific (skin, mucus, phagocytes) 3 // adaptive: acquired, targets a specific antigen (lymphocytes, antibodies) 3."],
    ["(b) Give the role of B lymphocytes and of T lymphocytes.", 6, "B: make antibodies 3 // T: destroy infected cells / help activate B cells / memory 3."],
    ["(c) Explain how a vaccine gives immunity.", 3, "A harmless form of the antigen triggers antibodies and memory cells, so a later infection is fought quickly."]]),
  T("bh16", SP, true, "Transport in plants.", [
    ["(a) What is transpiration?", 3, "The loss of water vapour from the leaves (through the stomata)."],
    ["(b) Name two factors that increase the rate of transpiration.", 6, "Any two at 3: higher temperature / wind / low humidity / high light intensity."],
    ["(c) Give one way in which xylem is adapted to carry water.", 3, "Hollow tubes with no end walls / lignin makes it strong / continuous from root to leaf."],
    ["(d) What is the role of the guard cells?", 3, "Open and close the stomata, controlling gas exchange and water loss."]]),
  T("bh17", SP, false, "Human reproduction.", [
    ["(a) Where does fertilisation usually take place?", 3, "In the fallopian tube (oviduct)."],
    ["(b) Give the role of FSH and of progesterone in the menstrual cycle.", 6, "FSH: stimulates a follicle / egg to develop (and oestrogen production) 3 // progesterone: maintains / thickens the endometrium (lining) 3."],
    ["(c) What is implantation?", 3, "The embryo (blastocyst) attaching to the lining of the uterus."],
    ["(d) Name one method of contraception and say how it works.", 3, "e.g. condom: barrier stops sperm reaching the egg / pill: hormones stop ovulation."]]),
  T("bh18", INT, false, "A student places 10 quadrats at random in a field. Daisies are found in 4 of them.", [
    ["(a) What is a habitat?", 3, "The place where an organism lives."],
    ["(b) Calculate the percentage frequency of daisies. Show your working.", 6, "4 ÷ 10 × 100 3 // = 40% 3."],
    ["(c) Name one abiotic factor and say how you would measure it.", 6, "Factor 3 // method 3, e.g. soil pH with a pH meter or universal indicator / light with a light meter / temperature with a thermometer."],
    ["(d) Why are the quadrats placed at random?", 3, "To avoid bias, so the sample is representative."]]),
  T("bh19", INT, false, "The nitrogen cycle.", [
    ["(a) What is the role of nitrogen-fixing bacteria?", 3, "Convert nitrogen gas from the air into compounds (ammonium / nitrates) that plants can use."],
    ["(b) What is nitrification?", 3, "Bacteria convert ammonium into nitrites and then nitrates."],
    ["(c) What is denitrification?", 3, "Bacteria convert nitrates back into nitrogen gas."],
    ["(d) Explain how fertiliser running off a farm can harm a lake.", 6, "Nitrates cause algae to grow fast (algal bloom / eutrophication) 3 // when they die, decomposers use up the oxygen, so fish and other animals die 3."]]),
  T("bh20", INT, false, "Genetic engineering is used to make human insulin in bacteria.", [
    ["(a) Describe three stages in genetic engineering.", 9, "Three at 3: isolation of the gene/DNA // cutting with restriction enzymes // ligation: inserting the gene into a plasmid with ligase // transformation: the plasmid is taken up by the bacterium // expression: the bacterium makes the protein."],
    ["(b) Give one other application of genetic engineering.", 3, "e.g. herbicide-resistant crops / Golden Rice (vitamin A) / gene therapy."],
    ["(c) Give one ethical concern about genetic engineering.", 3, "e.g. effects on the environment or other species / safety of GM food / ownership (patents) / ‘designer’ organisms."]]),
  T("bh21", INT, false, "Bacteria are grown in a nutrient broth and counted every hour.", [
    ["(a) Name the four phases of a typical bacterial growth curve, in order.", 8, "Lag, log (exponential), stationary, decline (death): 2 each."],
    ["(b) Explain what happens in the lag phase.", 3, "Bacteria adjust to the new conditions, making enzymes, so numbers barely increase."],
    ["(c) Give two aseptic precautions used when working with bacteria.", 6, "Any two at 3: flame the inoculating loop / work near a Bunsen flame / sterilise equipment (autoclave) / wash and disinfect hands and bench / tape lids, do not open plates."]])
] };

const OL = { id:"", builtin:true, title:"LC Biology · Ordinary", subject:"Biology", cycle:"LC", level:"OL", photoFirst:false,
  source:"Styled on the SEC sample papers for the 2027 specification (Q1 + any five of Q2–Q7, 50 marks each). No official marking schemes yet: marks follow SEC Biology conventions.",
  gradeBands: OL_GRADES, texts:{}, items: ITEMS, tasks: [
  T("bo1", NOS, false, "A student investigates the effect of salt concentration on potato strips. Each strip is weighed, left in salt water for 30 minutes, and weighed again.", [
    ["(a) Name the independent variable.", 3, "Salt concentration."],
    ["(b) Name the dependent variable.", 3, "Change in mass of the potato strip."],
    ["(c) Name one thing that must be kept the same.", 3, "Any one: size / starting mass of the strips / time / temperature / volume of solution / type of potato."],
    ["(d) Give one safety precaution.", 3, "Take care with the knife / cut on a tile, away from the body."],
    ["(e) What happens to a strip in very salty water, and why?", 3, "It loses mass (gets soft) because water leaves it by osmosis."]]),
  T("bo2", ORG, true, "Food tests.", [
    ["(a) Name the test for starch and give a positive result.", 6, "Iodine 3 // blue-black 3."],
    ["(b) Name the test for reducing sugar and give a positive result.", 6, "Benedict’s (heated) 3 // brick red 3."]]),
  T("bo3", ORG, true, "You prepare a slide of onion cells and look at it under a light microscope.", [
    ["(a) Name two parts found in a plant cell but not in an animal cell.", 6, "Any two at 3: cell wall / chloroplast / large (permanent) vacuole."],
    ["(b) Why is a stain used?", 3, "To make the cell parts (e.g. the nucleus) easier to see."],
    ["(c) Name a stain used for plant cells.", 3, "Iodine (accept toluidine blue / methylene blue)."]]),
  T("bo4", SP, false, "Photosynthesis.", [
    ["(a) Write the word equation for photosynthesis.", 6, "Carbon dioxide + water 3 → glucose + oxygen 3 (light / chlorophyll)."],
    ["(b) In which part of the cell does photosynthesis happen?", 3, "Chloroplast."],
    ["(c) Name two factors that affect the rate of photosynthesis.", 6, "Any two at 3: light intensity / carbon dioxide concentration / temperature."]]),
  T("bo5", SP, false, "Enzymes.", [
    ["(a) What is an enzyme?", 3, "A protein that speeds up a reaction (a biological catalyst) without being used up."],
    ["(b) Describe the effect of temperature on enzyme activity.", 3, "Activity rises to an optimum temperature, then falls quickly."],
    ["(c) What does ‘denatured’ mean?", 3, "The enzyme’s shape (active site) is permanently changed so it no longer works."],
    ["(d) Name one enzyme and its substrate.", 6, "e.g. amylase 3 // starch 3 (or catalase / hydrogen peroxide, pepsin / protein)."]]),
  T("bo6", SP, true, "Respiration.", [
    ["(a) Write the word equation for aerobic respiration.", 6, "Glucose + oxygen 3 → carbon dioxide + water (+ energy) 3."],
    ["(b) In which part of the cell does most aerobic respiration happen?", 3, "Mitochondria."],
    ["(c) Name the two products of anaerobic respiration in yeast, and one use of each.", 6, "Ethanol (alcohol) – drinks / biofuel 3 // carbon dioxide – makes bread rise 3."]]),
  T("bo7", SP, false, "The human heart.", [
    ["(a) Name the four chambers of the heart.", 8, "Left atrium, right atrium, left ventricle, right ventricle: 2 each."],
    ["(b) What is the job of the valves?", 3, "To stop blood flowing backwards."],
    ["(c) Why is the wall of the left ventricle the thickest?", 3, "It pumps blood all around the body."]]),
  T("bo8", ORG, false, "In humans, brown eyes (B) are dominant over blue eyes (b).", [
    ["(a) What do the words dominant and recessive mean?", 6, "Dominant: the allele that shows when present 3 // recessive: only shows when there is no dominant allele (two recessive alleles) 3."],
    ["(b) A Bb parent and a bb parent have children. Show the cross and give the ratio of eye colours.", 6, "Cross shown 3 // 1 brown : 1 blue (50%) 3."],
    ["(c) What is a gene?", 3, "A section of DNA that controls a characteristic (codes for a protein)."]]),
  T("bo9", ORG, true, "Fill in the gaps, using words from the list: genes, evolution, offspring, adapted, variation, competition. “Living things produce more (1)___ than can survive. There is (2)___ for food and space. Individuals show (3)___. Those best (4)___ survive and reproduce, passing on their (5)___. Over many generations this leads to (6)___.”", [
    ["Write the six missing words, (1) to (6).", 12, "2 each: (1) offspring (2) competition (3) variation (4) adapted (5) genes (6) evolution."]]),
  T("bo10", SP, true, "Cell division.", [
    ["(a) What is mitosis?", 3, "Cell division that makes two identical cells (with the same number of chromosomes)."],
    ["(b) Give one place in the body where mitosis happens.", 3, "Any one: skin / bone marrow / root tip (in plants) / anywhere for growth and repair."],
    ["(c) How many chromosomes are in a human egg or sperm cell?", 3, "23."],
    ["(d) Cancer is uncontrolled cell division. Give one possible cause.", 3, "Any one: UV light / smoking (carcinogens) / radiation / some viruses / genes."]]),
  T("bo11", ORG, true, "DNA.", [
    ["(a) Where in the cell is DNA found?", 3, "In the nucleus (chromosomes)."],
    ["(b) Describe the shape of DNA.", 3, "A double helix (twisted ladder)."],
    ["(c) Complete the base pairing: A pairs with __; C pairs with __.", 3, "T; G."],
    ["(d) Give one use of DNA profiling.", 3, "Crime scene evidence / paternity testing / identifying bodies."]]),
  T("bo12", SP, true, "Transport in plants.", [
    ["(a) What is transpiration?", 3, "Loss of water vapour from the leaves."],
    ["(b) What does xylem carry?", 3, "Water and minerals from the roots up the plant."],
    ["(c) Name two conditions that increase transpiration.", 6, "Any two at 3: warm / windy / dry air / bright light."]]),
  T("bo13", SP, false, "Microbes and defence against disease.", [
    ["(a) Give one difference between a bacterium and a virus.", 3, "e.g. a bacterium is a living cell / a virus can only reproduce inside a host cell / viruses are much smaller."],
    ["(b) Why do antibiotics not cure a cold or the flu?", 3, "They are caused by viruses, and antibiotics only work against bacteria."],
    ["(c) How does a vaccine protect you?", 3, "It makes your body produce antibodies and memory cells against a germ without causing the disease."],
    ["(d) Give one way the body stops germs getting in.", 3, "Skin / mucus and hairs in the nose / stomach acid / blood clotting."]]),
  T("bo14", SP, false, "Human reproduction.", [
    ["(a) Where are sperm made?", 3, "In the testes."],
    ["(b) Where does fertilisation usually happen?", 3, "In the fallopian tube (oviduct)."],
    ["(c) Give one function of the placenta.", 3, "Passes food and oxygen to the foetus / removes waste / makes hormones."],
    ["(d) How long is a typical menstrual cycle, and name one hormone involved?", 6, "About 28 days 3 // oestrogen / progesterone / FSH / LH 3."]]),
  T("bo15", INT, false, "A food chain: grass → rabbit → fox.", [
    ["(a) Name the producer.", 3, "Grass."],
    ["(b) Name the primary consumer.", 3, "Rabbit."],
    ["(c) Suggest what would happen to the rabbits if all the foxes were removed. Explain.", 3, "Rabbits would increase, because fewer are eaten (later they may fall as food runs out)."],
    ["(d) Name two abiotic factors in a habitat.", 6, "Any two at 3: light / temperature / water / soil pH / wind / slope."]]),
  T("bo16", INT, true, "A student surveys a field with a quadrat. Buttercups are found in 6 of 20 quadrats.", [
    ["(a) What is a quadrat?", 3, "A square frame used to sample plants (and slow animals) in an area."],
    ["(b) Calculate the percentage frequency of buttercups. Show your working.", 6, "6 ÷ 20 × 100 3 // = 30% 3."],
    ["(c) Why should the quadrats be thrown at random?", 3, "To avoid bias / get a fair sample."]]),
  T("bo17", INT, true, "Recycling nutrients.", [
    ["(a) Name two types of decomposer.", 6, "Bacteria 3 // fungi 3."],
    ["(b) What do decomposers do?", 3, "Break down dead plants and animals (and waste)."],
    ["(c) Why are decomposers important in an ecosystem?", 3, "They return nutrients (e.g. nitrogen, carbon) to the soil and air for plants to use."]]),
  T("bo18", INT, false, "Yeast is a microorganism used to make bread.", [
    ["(a) What type of organism is yeast?", 3, "A fungus (single-celled)."],
    ["(b) Write a word equation for fermentation by yeast.", 6, "Glucose 3 → ethanol + carbon dioxide 3."],
    ["(c) Name two conditions yeast needs to grow well.", 6, "Any two at 3: warmth / food (sugar) / water / suitable pH."]]),
  T("bo19", NOS, false, "A website says: ‘Eating carrots lets you see in the dark.’", [
    ["(a) Give two ways to check if a claim like this is reliable.", 6, "Any two at 3: is there evidence from a fair test / is it published by scientists / peer reviewed / who wrote it and why / do other sources agree."],
    ["(b) How could you test the claim fairly?", 3, "Compare two similar groups, one eating carrots and one not, with everything else the same; test their night vision."],
    ["(c) Why should a test like this use a large number of people?", 3, "To make the results more reliable / reduce the effect of chance."]]),
  T("bo20", NOS, true, "A student measures their pulse rate (beats per minute). At rest: 70. After exercise: 1 min, 120; 2 min, 110; 5 min, 80.", [
    ["(a) By how much did the pulse rise after exercise?", 3, "50 beats per minute (120 − 70)."],
    ["(b) Why does the pulse rate rise during exercise?", 3, "The muscles need more oxygen and glucose for respiration."],
    ["(c) What is meant by recovery time?", 3, "The time taken for the pulse to return to its resting rate."],
    ["(d) Why should the student repeat the experiment?", 3, "To make the results more reliable."]]),
  T("bo21", INT, true, "Genetic engineering.", [
    ["(a) What is genetic engineering?", 3, "Changing the DNA (genes) of an organism, e.g. moving a gene from one organism into another."],
    ["(b) Give one product made by genetic engineering.", 3, "Human insulin made by bacteria (or GM crops)."],
    ["(c) Give one concern people have about it.", 3, "Safety of the food / harm to the environment / ethical concerns."]])
] };
HL.store = "loops_lchl_bio_v1"; OL.store = "loops_lcol_bio_v1";
LOOPS_SUBJECTS.bio = { name: "Biology", flag: "🧬", native: "New course, 2027", colour: "bio", OL, HL };
})();
