// ═══════════════════════════════════════════════
// LOOPS · LC PHYSICS — Higher + Ordinary (8 Nov 2026)
// The NEW specification (first exam June 2027): one written paper, 300 marks, Q1 + any five of Q2–Q7, 50 marks each.
// Styled on the SEC sample papers. No official marking schemes for the new spec yet, so marks follow the
// SEC's Physics conventions (calculations in steps, −1 for a missing unit, graph marks for axes, points and line).
// The Physics in Practice Investigation (AAC, 40%) is coursework and is not covered. Take g = 9.8 m s⁻².
// ═══════════════════════════════════════════════
(function(){
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const NOS = "Nature of science", FM = "Forces & motion", WE = "Waves & energy transfer", EM = "Electric & magnetic fields", MOD = "Modern physics";
const T = (id, strand, short, title, parts) => { const max = parts.reduce((t,p) => t + p[1], 0);
  return {id, kind:"phys_parts", strand, section: short ? "Question 1 · short parts" : "Questions 2–7 · in context",
    max, label: (short ? "Short question" : "Structured question") + " · " + strand + " · " + max + " marks", title,
    pts: parts.map(p => p[0]), marks: parts.map(p => p[1]), credit: parts.map(p => p[2])}; };

const ITEMS = [
  // Forces & motion
  {id:"p1",skill:FM,type:"mcq",q:"The unit of force is the…",opts:["Newton","Joule","Watt","Pascal"],a:0},
  {id:"p2",skill:FM,type:"mcq",q:"Acceleration is the rate of change of…",opts:["Velocity","Distance","Mass","Force"],a:0},
  {id:"p3",skill:FM,type:"mcq",q:"Which of these is a vector quantity?",opts:["Velocity","Speed","Mass","Energy"],a:0},
  {id:"p4",skill:FM,type:"mcq",q:"Newton’s second law can be written as…",opts:["F = ma","E = mc²","V = IR","p = F/A"],a:0},
  {id:"p5",skill:FM,type:"mcq",q:"Momentum is…",opts:["Mass × velocity","Mass × acceleration","Force × distance","Mass ÷ volume"],a:0},
  {id:"p6",skill:FM,type:"mcq",q:"In a collision with no external forces, the total momentum…",opts:["Stays the same (is conserved)","Always increases","Always decreases","Becomes zero"],a:0},
  {id:"p7",skill:FM,type:"mcq",q:"Hooke’s law: the extension of a spring is proportional to the force, up to the…",opts:["Elastic limit","Breaking point","Centre of gravity","Terminal velocity"],a:0},
  {id:"p8",skill:FM,type:"mcq",q:"The weight of a 5 kg mass on Earth (g = 9.8 m s⁻²) is…",opts:["49 N","5 N","0.5 N","98 N"],a:0},
  {id:"p9",skill:FM,type:"mcq",q:"The kinetic energy of a 2 kg ball moving at 3 m s⁻¹ is…",opts:["9 J","6 J","18 J","3 J"],a:0},
  {id:"p10",skill:FM,type:"mcq",q:"The watt is the unit of…",opts:["Power (joules per second)","Energy","Force","Pressure"],a:0},
  {id:"p11",skill:FM,type:"mcq",q:"An object moving in a circle at constant speed is accelerating because…",opts:["Its direction keeps changing","Its speed keeps changing","Its mass changes","Gravity is switched off"],a:0},
  {id:"p12",skill:FM,type:"mcq",q:"If the distance between two masses is doubled, the gravitational force becomes…",opts:["A quarter as big","Half as big","Twice as big","Four times as big"],a:0},
  {id:"p13",skill:FM,type:"mcq",q:"A 200 g stone has a volume of 50 cm³. Its density is…",opts:["4 g cm⁻³","0.25 g cm⁻³","250 g cm⁻³","10,000 g cm⁻³"],a:0},
  {id:"p14",skill:FM,type:"mcq",q:"Work done is…",opts:["Force × displacement in the direction of the force","Force ÷ area","Mass × velocity","Power × distance"],a:0},
  // Waves & energy transfer
  {id:"p15",skill:WE,type:"mcq",q:"A wave has frequency 50 Hz and wavelength 2 m. Its speed is…",opts:["100 m s⁻¹","25 m s⁻¹","52 m s⁻¹","0.04 m s⁻¹"],a:0},
  {id:"p16",skill:WE,type:"mcq",q:"Sound waves are…",opts:["Longitudinal","Transverse","Electromagnetic","Stationary only"],a:0},
  {id:"p17",skill:WE,type:"mcq",q:"Only transverse waves can be…",opts:["Polarised","Reflected","Refracted","Diffracted"],a:0},
  {id:"p18",skill:WE,type:"mcq",q:"Refraction is the bending of light when it…",opts:["Passes from one medium into another","Bounces off a mirror","Spreads out through a gap","Is absorbed"],a:0},
  {id:"p19",skill:WE,type:"mcq",q:"Total internal reflection is used in…",opts:["Optical fibres","Solar panels","Loudspeakers","Fuses"],a:0},
  {id:"p20",skill:WE,type:"mcq",q:"Specific heat capacity is the heat energy needed to raise the temperature of…",opts:["1 kg of a substance by 1 K","1 g of water to boiling","Any mass by 100 °C","1 m³ by 1 K"],a:0},
  {id:"p21",skill:WE,type:"mcq",q:"Latent heat is the heat taken in or given out…",opts:["During a change of state, at constant temperature","When temperature rises","By radiation only","In a vacuum"],a:0},
  {id:"p22",skill:WE,type:"order",q:"Put these in order of increasing frequency.",words:["Radio waves","Microwaves","Infrared","Visible light","Ultraviolet","X-rays"]},
  {id:"p23",skill:WE,type:"mcq",q:"As an ambulance comes towards you, its siren sounds…",opts:["Higher pitched (Doppler effect)","Lower pitched","The same","Quieter"],a:0},
  {id:"p24",skill:WE,type:"mcq",q:"Resonance happens when…",opts:["The driving frequency equals the natural frequency","Two waves cancel","A wave is reflected","The amplitude is zero"],a:0},
  {id:"p25",skill:WE,type:"mcq",q:"An object beyond 2F of a converging lens forms an image that is…",opts:["Real, inverted and smaller","Virtual, upright and bigger","Real, upright and the same size","Virtual and inverted"],a:0},
  {id:"p26",skill:WE,type:"mcq",q:"Heat can travel through a vacuum only by…",opts:["Radiation","Conduction","Convection","Evaporation"],a:0},
  // Electric & magnetic fields
  {id:"p27",skill:EM,type:"match",q:"Match the quantity to its unit.",pairs:[["Current","Ampere"],["Potential difference","Volt"],["Resistance","Ohm"],["Charge","Coulomb"]]},
  {id:"p28",skill:EM,type:"mcq",q:"A 4 Ω resistor is connected to 12 V. The current is…",opts:["3 A","48 A","0.33 A","16 A"],a:0},
  {id:"p29",skill:EM,type:"mcq",q:"2 Ω and 3 Ω in series give a total resistance of…",opts:["5 Ω","1.2 Ω","6 Ω","1 Ω"],a:0},
  {id:"p30",skill:EM,type:"mcq",q:"6 Ω and 3 Ω in parallel give a total resistance of…",opts:["2 Ω","9 Ω","4.5 Ω","18 Ω"],a:0},
  {id:"p31",skill:EM,type:"mcq",q:"An appliance takes 2 A from a 230 V supply. Its power is…",opts:["460 W","115 W","232 W","0.009 W"],a:0},
  {id:"p32",skill:EM,type:"mcq",q:"A diode lets current flow…",opts:["In one direction only","In both directions equally","Only when it is dark","Only in a magnetic field"],a:0},
  {id:"p33",skill:EM,type:"mcq",q:"As a thermistor gets hotter, its resistance usually…",opts:["Decreases","Increases","Stays the same","Becomes infinite"],a:0},
  {id:"p34",skill:EM,type:"mcq",q:"An emf is induced in a coil when…",opts:["The magnetic flux through it changes","It is kept still in a steady field","It is made of plastic","The current is constant"],a:0},
  {id:"p35",skill:EM,type:"mcq",q:"A transformer works only with…",opts:["Alternating current","Direct current","Static charge","Batteries"],a:0},
  {id:"p36",skill:EM,type:"mcq",q:"The force on a current-carrying wire in a magnetic field is used in…",opts:["An electric motor","A thermometer","A lens","A battery"],a:0},
  // Modern physics
  {id:"p37",skill:MOD,type:"match",q:"Match the radiation to what it is.",pairs:[["Alpha","A helium nucleus (2 protons, 2 neutrons)"],["Beta","A fast electron from the nucleus"],["Gamma","High-energy electromagnetic radiation"]]},
  {id:"p38",skill:MOD,type:"mcq",q:"Which radiation is the most penetrating?",opts:["Gamma","Alpha","Beta","They are all the same"],a:0},
  {id:"p39",skill:MOD,type:"mcq",q:"Half-life is…",opts:["The time for half the nuclei in a sample to decay","Half the time a nucleus lives","The time for all nuclei to decay","Half the mass of a nucleus"],a:0},
  {id:"p40",skill:MOD,type:"mcq",q:"E = mc² shows that…",opts:["Mass and energy are equivalent","Energy depends on speed only","Mass is always conserved","Light has no energy"],a:0},
  {id:"p41",skill:MOD,type:"mcq",q:"The photoelectric effect is evidence that light…",opts:["Behaves as particles (photons)","Is a longitudinal wave","Has mass","Cannot travel in a vacuum"],a:0},
  {id:"p42",skill:MOD,type:"mcq",q:"Nuclear fusion is…",opts:["Small nuclei joining to form a larger nucleus","A large nucleus splitting","An electron leaving an atom","A chemical reaction"],a:0},
  {id:"p43",skill:MOD,type:"mcq",q:"Rutherford’s gold foil experiment showed that the atom…",opts:["Is mostly empty space, with a small, dense, positive nucleus","Is a solid sphere","Has no charge","Is made of plum pudding"],a:0},
  {id:"p44",skill:MOD,type:"mcq",q:"The becquerel is the unit of…",opts:["Activity (decays per second)","Half-life","Dose","Energy"],a:0},
  // Nature of science
  {id:"p45",skill:NOS,type:"mcq",q:"To avoid parallax error when reading a scale…",opts:["Read with your eye directly in line with the mark","Read from a low angle","Read quickly","Use a longer ruler"],a:0},
  {id:"p46",skill:NOS,type:"mcq",q:"The slope of a distance–time graph gives the…",opts:["Speed","Acceleration","Distance","Force"],a:0},
  {id:"p47",skill:NOS,type:"mcq",q:"A straight-line graph through the origin shows that the two quantities are…",opts:["Directly proportional","Inversely proportional","Not related","Equal"],a:0},
  {id:"p48",skill:NOS,type:"mcq",q:"1 kilowatt-hour (kWh) is equal to…",opts:["3.6 × 10⁶ J","1000 J","3600 J","60 J"],a:0},
  {id:"p49",skill:NOS,type:"mcq",q:"Taking several readings and averaging them mainly reduces…",opts:["Random errors","Systematic errors","The need for units","Parallax only"],a:0}
];

const SRC = "Styled on the SEC sample papers for the 2027 specification (Q1 + any five of Q2–Q7, 50 marks each). No official marking schemes yet: marks follow SEC Physics conventions. Take g = 9.8 m s⁻²; other constants are given in each question.";
const HL = { id:"", builtin:true, title:"LC Physics · Higher", subject:"Physics", cycle:"LC", level:"HL", photoFirst:false, source: SRC,
  gradeBands: HL_GRADES, texts:{}, items: ITEMS, tasks: [
  T("ph1", NOS, false, "A student adds weights to a spring and measures the extension. Force (N): 0, 1, 2, 3, 4, 5. Extension (cm): 0, 2.1, 3.9, 6.0, 8.1, 10.0.", [
    ["(a) State Hooke’s law.", 3, "The extension is directly proportional to the applied force (restoring force), provided the elastic limit is not exceeded."],
    ["(b) Describe how you would draw the graph of force against extension.", 6, "Axes labelled with quantities and units 2 // points plotted correctly 2 // straight line of best fit through the origin 2."],
    ["(c) Use the graph to find the spring constant. Show your working.", 6, "Slope = 5 N ÷ 0.100 m 3 // k = 50 N m⁻¹ (accept 48–52) 3. −1 if unit missing; −1 if cm not converted."],
    ["(d) Give one precaution to make the results accurate.", 3, "Read the scale at eye level (avoid parallax) / let the spring settle before reading / do not exceed the elastic limit / repeat with weights removed."]]),
  T("ph2", NOS, true, "An online article claims that mobile phone masts cause cancer in people living nearby.", [
    ["(a) Give two criteria for judging whether this article is trustworthy.", 6, "Any two at 3: peer-reviewed evidence / large controlled studies / qualified, independent authors / sources cited / agreement with other scientific bodies."],
    ["(b) Explain why the radiation from phone masts is unlikely to damage DNA.", 6, "It is radio / microwave radiation, which is non-ionising 3 // its photons have too little energy to ionise atoms or break bonds 3."],
    ["(c) What kind of evidence would make you take the claim seriously?", 3, "A large, well-controlled study showing a higher rate near masts that others can repeat."]]),
  T("ph3", NOS, false, "A student measures g by timing a steel ball falling from rest through 0.80 m. The mean time is 0.404 s.", [
    ["(a) Describe how the time could be measured accurately.", 6, "Electronic timer started when the ball is released (electromagnet switched off) 3 // stopped when the ball hits a trapdoor / light gate 3."],
    ["(b) Calculate g. Show your working.", 6, "s = ½gt², so g = 2s ÷ t² = 1.6 ÷ 0.163 3 // g = 9.8 m s⁻² 3. −1 if unit missing."],
    ["(c) Why is the experiment repeated and an average taken?", 3, "To reduce random error / make the result more reliable."],
    ["(d) Give one source of error.", 3, "Air resistance / measuring the height (from the bottom of the ball) / timer delay in the electromagnet releasing."]]),
  T("ph4", NOS, false, "A 0.50 kg trolley moving at 0.60 m s⁻¹ hits a stationary 0.25 kg trolley. They stick together and move at 0.40 m s⁻¹.", [
    ["(a) How could the velocities be measured?", 3, "Light gates and a timer (card of known length) / ticker tape / motion sensor."],
    ["(b) Calculate the momentum before and after the collision. What does this show?", 9, "Before: 0.50 × 0.60 = 0.30 kg m s⁻¹ 3 // after: 0.75 × 0.40 = 0.30 kg m s⁻¹ 3 // momentum is conserved 3."],
    ["(c) How is friction compensated for in this experiment?", 3, "Tilt the runway slightly until a trolley moves at constant speed when pushed."]]),
  T("ph5", FM, false, "A car of mass 1200 kg accelerates uniformly from 5 m s⁻¹ to 25 m s⁻¹ in 8 s.", [
    ["(a) Calculate its acceleration.", 6, "a = (v − u) ÷ t = 20 ÷ 8 3 // = 2.5 m s⁻² 3."],
    ["(b) Calculate the distance travelled in this time.", 6, "s = (u + v)t ÷ 2 = 15 × 8 3 // = 120 m 3."],
    ["(c) Calculate the resultant force on the car.", 3, "F = ma = 1200 × 2.5 = 3000 N."],
    ["(d) Why does the braking distance increase on a wet road?", 3, "Less friction between the tyres and the road, so a smaller decelerating force."]]),
  T("ph6", FM, false, "A sled of mass 40 kg is pulled with a force of 200 N at 30° above the horizontal. The friction force is 120 N.", [
    ["(a) Calculate the horizontal component of the pulling force.", 6, "200 cos 30° 3 // = 173 N 3."],
    ["(b) Calculate the net horizontal force.", 3, "173 − 120 = 53 N."],
    ["(c) Calculate the acceleration of the sled.", 3, "53 ÷ 40 = 1.3 m s⁻² (accept 1.33)."],
    ["(d) How does the vertical component of the pull affect the friction? Explain.", 3, "It reduces the normal reaction force (the sled is pressed down less), so friction is less."]]),
  T("ph7", FM, false, "Gravitation.", [
    ["(a) State Newton’s law of universal gravitation.", 6, "The force between two point masses is proportional to the product of the masses 3 // and inversely proportional to the square of the distance between them 3."],
    ["(b) The acceleration due to gravity on Mars is 3.7 m s⁻². Calculate the weight of a 60 kg astronaut there.", 3, "60 × 3.7 = 222 N."],
    ["(c) Explain why astronauts in orbit feel weightless.", 6, "They and their spacecraft are in free fall together 3 // so there is no reaction force from the floor 3."],
    ["(d) What does Kepler’s third law tell us about planets?", 3, "T² is proportional to r³: planets further from the Sun take longer to orbit."]]),
  T("ph8", FM, true, "A car of mass 900 kg goes around a bend of radius 50 m at 15 m s⁻¹.", [
    ["(a) Calculate the centripetal force needed.", 6, "F = mv² ÷ r = 900 × 225 ÷ 50 3 // = 4050 N 3."],
    ["(b) What provides this force?", 3, "Friction between the tyres and the road."],
    ["(c) Why is the bend dangerous on ice?", 3, "Friction is too small to provide the force needed, so the car skids outwards (in a straight line)."],
    ["(d) Define angular velocity.", 3, "The rate of change of angle (ω = θ ÷ t, in rad s⁻¹)."]]),
  T("ph9", FM, false, "A roller coaster car of mass 500 kg starts from rest and drops 20 m.", [
    ["(a) Calculate its loss in potential energy.", 6, "mgh = 500 × 9.8 × 20 3 // = 98,000 J 3."],
    ["(b) Calculate its speed at the bottom, ignoring friction.", 6, "½mv² = 98,000, so v² = 392 3 // v = 19.8 m s⁻¹ 3."],
    ["(c) State the principle of conservation of energy.", 3, "Energy cannot be created or destroyed, only changed from one form to another."]]),
  T("ph10", WE, false, "Waves and sound. (Speed of sound in air = 340 m s⁻¹)", [
    ["(a) Distinguish between transverse and longitudinal waves.", 6, "Transverse: vibrations at right angles to the direction of travel 3 // longitudinal: vibrations parallel to the direction of travel 3."],
    ["(b) Calculate the wavelength of a 512 Hz tuning fork note.", 6, "λ = v ÷ f = 340 ÷ 512 3 // = 0.66 m 3."],
    ["(c) Explain the Doppler effect for a moving sound source.", 6, "The observed frequency changes when the source moves relative to the observer 3 // waves are bunched up in front (higher frequency) and spread out behind (lower) 3."]]),
  T("ph11", WE, false, "A ray of light passes from air into glass. The angle of incidence is 40° and the angle of refraction is 25°.", [
    ["(a) State Snell’s law.", 3, "sin i ÷ sin r is constant (the refractive index) for two given media."],
    ["(b) Calculate the refractive index of the glass.", 6, "n = sin 40° ÷ sin 25° 3 // = 1.52 3."],
    ["(c) Calculate the critical angle of the glass.", 6, "sin C = 1 ÷ n 3 // C = 41° 3."],
    ["(d) Give one use of total internal reflection.", 3, "Optical fibres (communications) / endoscopes / prism binoculars / reflectors."]]),
  T("ph12", WE, false, "A 2.0 kW kettle heats 1.5 kg of water from 15 °C to 100 °C. (Specific heat capacity of water = 4180 J kg⁻¹ K⁻¹)", [
    ["(a) Calculate the heat energy needed.", 6, "Q = mcΔθ = 1.5 × 4180 × 85 3 // = 5.33 × 10⁵ J 3."],
    ["(b) Calculate the minimum time this takes.", 6, "t = E ÷ P = 532,950 ÷ 2000 3 // = 266 s (about 4.4 min) 3."],
    ["(c) Why does it take longer in practice?", 3, "Heat is lost to the surroundings and used to heat the kettle itself."]]),
  T("ph13", WE, true, "A string 0.50 m long vibrates in its fundamental mode. The speed of waves on the string is 200 m s⁻¹.", [
    ["(a) What are a node and an antinode?", 6, "Node: a point of zero displacement (no vibration) 3 // antinode: a point of maximum displacement 3."],
    ["(b) Calculate the fundamental frequency.", 6, "λ = 2L = 1.0 m, f = v ÷ λ 3 // = 200 Hz 3."],
    ["(c) What happens to the frequency if the tension is increased?", 3, "It increases (f ∝ √T)."]]),
  T("ph14", WE, true, "An object is placed 30 cm from a converging lens of focal length 10 cm.", [
    ["(a) Calculate the image distance.", 6, "1/f = 1/u + 1/v, so 1/v = 1/10 − 1/30 3 // v = 15 cm 3."],
    ["(b) Calculate the magnification.", 3, "m = v ÷ u = 15 ÷ 30 = 0.5."],
    ["(c) Describe the image.", 3, "Real, inverted and diminished."],
    ["(d) Define the focal length of a lens.", 3, "The distance from the lens to the point where rays parallel to the principal axis converge (the focal point)."]]),
  T("ph15", WE, false, "Waves in medicine and technology.", [
    ["(a) Name three regions of the electromagnetic spectrum, in order of increasing frequency.", 3, "Any three in the correct order, e.g. radio, infrared, X-rays."],
    ["(b) Ultrasound is used to scan babies before birth. What is ultrasound, and why is it safer than X-rays?", 6, "Sound above 20 kHz (above human hearing) 3 // it is not ionising, so it does not damage cells / DNA 3."],
    ["(c) Give one danger of too much ultraviolet radiation.", 3, "Sunburn / skin cancer / eye damage."],
    ["(d) Give one use of infrared radiation.", 3, "Remote controls / thermal imaging / heaters / cooking."]]),
  T("ph16", EM, false, "A 12 V battery is connected to a 4 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω resistors.", [
    ["(a) Calculate the total resistance of the circuit.", 6, "Parallel: 1/R = 1/6 + 1/3, R = 2 Ω 3 // total = 4 + 2 = 6 Ω 3."],
    ["(b) Calculate the current from the battery.", 3, "I = V ÷ R = 12 ÷ 6 = 2 A."],
    ["(c) Calculate the potential difference across the 4 Ω resistor.", 3, "V = IR = 2 × 4 = 8 V."],
    ["(d) Calculate the current in the 6 Ω resistor.", 3, "4 V across the pair, so 4 ÷ 6 = 0.67 A."]]),
  T("ph17", EM, true, "Electric charge. (k = 8.99 × 10⁹ N m² C⁻²)", [
    ["(a) State Coulomb’s law.", 3, "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them."],
    ["(b) Calculate the force between charges of 2 μC and 3 μC that are 0.10 m apart.", 6, "F = kq₁q₂ ÷ d² = 8.99 × 10⁹ × 6 × 10⁻¹² ÷ 0.01 3 // = 5.4 N 3."],
    ["(c) Explain how a lightning conductor protects a building.", 3, "Charge concentrates at its point and leaks (point discharge), or the strike is carried safely to earth."],
    ["(d) Which way do electric field lines point?", 3, "From positive to negative (the direction of the force on a positive charge)."]]),
  T("ph18", EM, false, "A student investigates how the resistance of a thermistor changes with temperature.", [
    ["(a) Describe how the investigation is carried out.", 6, "Thermistor in a beaker of water (or oil), heated, with a thermometer 3 // resistance read with an ohmmeter at regular temperatures 3."],
    ["(b) Describe the shape of the graph of resistance against temperature.", 3, "Resistance falls as temperature rises (a curve, not a straight line)."],
    ["(c) Give one use of a thermistor.", 3, "Temperature sensor / fire alarm / thermostat."],
    ["(d) How does the resistance of a metal conductor change with temperature? Explain.", 3, "It increases: the atoms vibrate more and obstruct the electrons."]]),
  T("ph19", EM, false, "Electromagnetic induction.", [
    ["(a) State Faraday’s law.", 3, "The size of the induced emf is proportional to the rate of change of magnetic flux."],
    ["(b) State Lenz’s law.", 3, "The direction of the induced current always opposes the change that causes it."],
    ["(c) A magnet is dropped through a copper coil. Explain why it falls more slowly than expected.", 3, "The induced current makes a magnetic field that opposes the magnet’s motion (Lenz’s law)."],
    ["(d) A transformer changes 230 V to 12 V. The primary coil has 2300 turns. Calculate the number of turns on the secondary.", 6, "Vs ÷ Vp = Ns ÷ Np 3 // Ns = 2300 × 12 ÷ 230 = 120 turns 3."]]),
  T("ph20", EM, true, "A 0.50 m wire carries a current of 3.0 A at right angles to a magnetic field of 0.20 T.", [
    ["(a) Calculate the force on the wire.", 6, "F = BIL = 0.20 × 3.0 × 0.50 3 // = 0.30 N 3."],
    ["(b) How can the direction of the force be found?", 3, "Fleming’s left-hand rule."],
    ["(c) Name a device that uses this effect.", 3, "Electric motor / loudspeaker / moving-coil meter."],
    ["(d) Define the tesla.", 3, "The magnetic flux density when a 1 m wire carrying 1 A at right angles to the field feels a force of 1 N."]]),
  T("ph21", MOD, false, "Radioactivity.", [
    ["(a) Compare alpha, beta and gamma radiation by what they are and how penetrating they are.", 6, "Nature of each (helium nucleus / electron / EM wave) 3 // penetration: alpha stopped by paper, beta by aluminium, gamma reduced by lead / concrete 3."],
    ["(b) A sample contains 80 g of a radioisotope with a half-life of 3 days. How much is left after 9 days?", 6, "9 days = 3 half-lives 3 // 80 → 40 → 20 → 10 g 3."],
    ["(c) Give one use of radioisotopes and one safety precaution.", 6, "Use: medical tracers / cancer treatment / smoke alarms / carbon dating / sterilising 3 // precaution: shielding, distance, time limit, tongs, monitoring badge 3."]]),
  T("ph22", MOD, false, "The photoelectric effect. (h = 6.63 × 10⁻³⁴ J s)", [
    ["(a) What is the photoelectric effect?", 3, "Electrons are emitted from a metal surface when light (EM radiation) of high enough frequency falls on it."],
    ["(b) What is the threshold frequency?", 3, "The minimum frequency of light that will release electrons from that metal."],
    ["(c) Light of frequency 7.5 × 10¹⁴ Hz falls on a metal with work function 3.6 × 10⁻¹⁹ J. Calculate the maximum kinetic energy of the emitted electrons.", 6, "E = hf = 4.97 × 10⁻¹⁹ J 3 // KE = 4.97 × 10⁻¹⁹ − 3.6 × 10⁻¹⁹ = 1.4 × 10⁻¹⁹ J 3."],
    ["(d) Why does brighter light not give the electrons more kinetic energy?", 3, "Each photon’s energy depends only on frequency; brighter light gives more photons, so more electrons, not faster ones."]]),
  T("ph23", MOD, true, "Nuclear energy. (c = 3.0 × 10⁸ m s⁻¹)", [
    ["(a) Distinguish between nuclear fission and fusion.", 6, "Fission: a large nucleus splits into smaller nuclei 3 // fusion: small nuclei join to form a larger nucleus 3."],
    ["(b) In a reaction, the mass lost is 3.0 × 10⁻²⁸ kg. Calculate the energy released.", 6, "E = mc² = 3.0 × 10⁻²⁸ × 9.0 × 10¹⁶ 3 // = 2.7 × 10⁻¹¹ J 3."],
    ["(c) What is the role of the moderator in a fission reactor?", 3, "Slows down the neutrons so they can cause further fission."]]),
  T("ph24", MOD, false, "Models of the atom.", [
    ["(a) In Rutherford’s gold foil experiment, describe what was observed and what it showed.", 9, "Most alpha particles went straight through: the atom is mostly empty space 3 // a few were deflected: the nucleus is positive 3 // very few bounced back: the nucleus is small and dense 3."],
    ["(b) How did Bohr’s model explain line spectra?", 3, "Electrons occupy fixed energy levels; light of a definite frequency is emitted when an electron falls between levels."],
    ["(c) How are X-rays produced?", 3, "High-speed electrons hit a metal target and lose energy, which is emitted as X-rays."]])
] };

const OL = { id:"", builtin:true, title:"LC Physics · Ordinary", subject:"Physics", cycle:"LC", level:"OL", photoFirst:false, source: SRC,
  gradeBands: OL_GRADES, texts:{}, items: ITEMS, tasks: [
  T("po1", NOS, true, "A student finds the density of a small stone.", [
    ["(a) Name the instrument used to measure its mass.", 3, "Electronic balance (scales)."],
    ["(b) Describe how its volume can be measured.", 3, "Displacement: put it in a graduated cylinder (or overflow can) of water and measure the rise in water level."],
    ["(c) The stone has a mass of 120 g and a volume of 40 cm³. Calculate its density.", 6, "Density = mass ÷ volume = 120 ÷ 40 3 // = 3 g cm⁻³ 3. −1 if unit missing."]]),
  T("po2", NOS, true, "A student hangs weights on a spring. A force of 2 N gives an extension of 4 cm.", [
    ["(a) Name the independent and the dependent variables.", 6, "Force (weight) 3 // extension 3."],
    ["(b) Predict the extension for a force of 3 N.", 3, "6 cm."],
    ["(c) The graph of force against extension is a straight line through the origin. What does this show?", 3, "Force and extension are directly proportional (Hooke’s law)."]]),
  T("po3", NOS, true, "An online article claims that phone masts are dangerous to health.", [
    ["(a) Give two ways to check whether the article is reliable.", 6, "Any two at 3: who wrote it, are they qualified / is there evidence from fair tests / is it peer reviewed / do other scientists agree / is anyone selling something."],
    ["(b) What is a fair test?", 3, "Only one variable is changed; all others are kept the same."],
    ["(c) What does peer review mean?", 3, "Other scientists check the work before it is published."]]),
  T("po4", FM, false, "Motion.", [
    ["(a) A car travels 120 km in 1.5 hours. Calculate its average speed.", 6, "Speed = distance ÷ time = 120 ÷ 1.5 3 // = 80 km h⁻¹ 3."],
    ["(b) Define acceleration.", 3, "The rate of change of velocity."],
    ["(c) A car goes from rest to 20 m s⁻¹ in 10 s. Calculate its acceleration.", 6, "a = (v − u) ÷ t = 20 ÷ 10 3 // = 2 m s⁻² 3."]]),
  T("po5", FM, true, "Newton’s laws.", [
    ["(a) State Newton’s first law of motion.", 3, "An object stays at rest or moves with constant velocity unless an external (unbalanced) force acts on it."],
    ["(b) Calculate the force needed to give a 1000 kg car an acceleration of 2 m s⁻².", 6, "F = ma = 1000 × 2 3 // = 2000 N 3."],
    ["(c) Use Newton’s first law to explain why seat belts are needed.", 3, "In a crash the car stops but your body keeps moving forward; the belt provides the force to stop you."]]),
  T("po6", FM, true, "A sled of mass 15 kg is pulled with a force of 100 N at 60° to the horizontal. Friction is 20 N. (cos 60° = 0.5)", [
    ["(a) Calculate the horizontal part of the pulling force.", 6, "100 × cos 60° 3 // = 50 N 3."],
    ["(b) Calculate the net horizontal force.", 3, "50 − 20 = 30 N."],
    ["(c) Calculate the acceleration of the sled.", 3, "30 ÷ 15 = 2 m s⁻²."]]),
  T("po7", FM, true, "Mass and weight. (g on Earth = 9.8 m s⁻², g on the Moon = 1.6 m s⁻²)", [
    ["(a) Explain the difference between mass and weight.", 6, "Mass: the amount of matter, in kg, the same everywhere 3 // weight: the force of gravity on it, in newtons, changes with g 3."],
    ["(b) Calculate the weight of a 60 kg person on Earth.", 3, "60 × 9.8 = 588 N."],
    ["(c) Calculate their weight on the Moon.", 3, "60 × 1.6 = 96 N."]]),
  T("po8", FM, true, "A ball of mass 0.5 kg is dropped from a height of 10 m.", [
    ["(a) Calculate its potential energy at the top.", 6, "PE = mgh = 0.5 × 9.8 × 10 3 // = 49 J 3."],
    ["(b) What energy change happens as it falls?", 3, "Potential energy changes to kinetic energy."],
    ["(c) Define power and give its unit.", 3, "The rate of doing work (energy per second), in watts."]]),
  T("po9", WE, true, "Waves.", [
    ["(a) Define the frequency and the wavelength of a wave.", 6, "Frequency: the number of waves per second 3 // wavelength: the distance between two crests (in a row) 3."],
    ["(b) A water wave has frequency 10 Hz and wavelength 0.5 m. Calculate its speed.", 6, "v = fλ = 10 × 0.5 3 // = 5 m s⁻¹ 3."]]),
  T("po10", WE, false, "Heat transfer.", [
    ["(a) Explain conduction, convection and radiation, giving an example of each.", 9, "Conduction: heat through a solid, particle to particle (e.g. a metal spoon) 3 // convection: heat carried by a moving liquid or gas (e.g. a radiator heating a room) 3 // radiation: heat by infrared waves, no medium needed (e.g. the Sun) 3."],
    ["(b) Why are attics insulated?", 3, "To reduce heat loss (by conduction and convection), saving energy and money."]]),
  T("po11", WE, true, "Sound. (Speed of sound in air = 340 m s⁻¹)", [
    ["(a) Is sound a transverse or a longitudinal wave?", 3, "Longitudinal."],
    ["(b) Why can sound not travel through a vacuum?", 3, "It needs a medium (particles) to travel through."],
    ["(c) A girl shouts at a cliff and hears the echo 2 s later. How far away is the cliff?", 6, "Distance travelled = 340 × 2 = 680 m 3 // cliff = 680 ÷ 2 = 340 m 3."]]),
  T("po12", WE, true, "Light.", [
    ["(a) State the law of reflection.", 3, "The angle of incidence equals the angle of reflection."],
    ["(b) What is refraction?", 3, "The bending of light as it passes from one medium into another."],
    ["(c) Give one use of total internal reflection.", 3, "Optical fibres / endoscopes / reflectors on roads."],
    ["(d) What happens to rays parallel to the axis when they pass through a converging lens?", 3, "They meet (converge) at the focal point."]]),
  T("po13", WE, true, "Heat. (Specific heat capacity of water = 4200 J kg⁻¹ K⁻¹)", [
    ["(a) Calculate the heat needed to raise 2 kg of water by 10 °C.", 6, "Q = mcΔθ = 2 × 4200 × 10 3 // = 84,000 J 3."],
    ["(b) What is specific heat capacity?", 3, "The heat needed to raise the temperature of 1 kg of a substance by 1 K (1 °C)."],
    ["(c) What is latent heat?", 3, "The heat needed to change the state of a substance without changing its temperature."]]),
  T("po14", EM, true, "Circuits.", [
    ["(a) A 3 Ω resistor is connected to a 9 V battery. Calculate the current.", 6, "I = V ÷ R = 9 ÷ 3 3 // = 3 A 3."],
    ["(b) What is the total resistance of 2 Ω and 4 Ω in series?", 3, "6 Ω."],
    ["(c) Give one difference between bulbs in series and bulbs in parallel.", 3, "In parallel, if one bulb breaks the others stay lit (in series they all go out) / parallel bulbs are brighter / same voltage across each in parallel."]]),
  T("po15", EM, false, "Electricity in the home.", [
    ["(a) A 2 kW kettle is used for half an hour. How many units (kWh) does it use, and what does it cost at 40 c per unit?", 6, "2 × 0.5 = 1 kWh 3 // cost = 40 c 3."],
    ["(b) What is the job of a fuse?", 3, "It melts and breaks the circuit if the current is too high."],
    ["(c) Why is a metal appliance earthed?", 3, "If a live wire touches the case, the current flows safely to earth (and blows the fuse), preventing a shock."]]),
  T("po16", EM, true, "Magnetism.", [
    ["(a) How can you show the magnetic field around a bar magnet?", 3, "Iron filings sprinkled on paper over it / a plotting compass."],
    ["(b) Give two ways to make an electromagnet stronger.", 6, "Any two at 3: more turns of wire / bigger current / iron core."],
    ["(c) Give one use of an electromagnet.", 3, "Electric bell / scrapyard crane / relay / MRI / door lock."]]),
  T("po17", EM, true, "Electromagnetic induction.", [
    ["(a) What happens when a magnet is pushed into a coil connected to a meter?", 3, "A current (voltage) is induced; the meter needle moves."],
    ["(b) Give two ways to increase the induced current.", 6, "Any two at 3: move the magnet faster / stronger magnet / more turns on the coil."],
    ["(c) What energy change happens in a generator?", 3, "Kinetic (mechanical) energy to electrical energy."]]),
  T("po18", EM, true, "Electronics and static electricity.", [
    ["(a) What happens to the resistance of an LDR in bright light?", 3, "It decreases."],
    ["(b) Give one use of a diode.", 3, "To let current flow one way only / rectifying AC / protecting circuits / LED lights."],
    ["(c) How is a balloon charged by rubbing it on a jumper?", 3, "Electrons are transferred between the jumper and the balloon by friction."],
    ["(d) Why are tall buildings fitted with lightning conductors?", 3, "To carry the lightning safely to the ground."]]),
  T("po19", MOD, false, "Radioactivity.", [
    ["(a) Name the three types of nuclear radiation.", 6, "Alpha, beta, gamma: 2 each."],
    ["(b) What is meant by half-life?", 3, "The time for half the radioactive nuclei in a sample to decay."],
    ["(c) A sample has 40 g of a radioisotope. How much is left after two half-lives?", 3, "10 g (40 → 20 → 10)."],
    ["(d) Give one use of radioactivity.", 3, "Treating cancer / tracers / sterilising equipment / smoke alarms / carbon dating."]]),
  T("po20", MOD, true, "Nuclear energy.", [
    ["(a) What is nuclear fission?", 3, "The splitting of a large nucleus into smaller ones, releasing energy."],
    ["(b) What is nuclear fusion?", 3, "Small nuclei joining to form a bigger nucleus, releasing energy."],
    ["(c) Where does the Sun get its energy?", 3, "Nuclear fusion (of hydrogen into helium)."],
    ["(d) Give one disadvantage of nuclear power.", 3, "Radioactive waste / risk of accidents / expensive to build and close down."]]),
  T("po21", MOD, true, "The atom and X-rays.", [
    ["(a) Describe the structure of an atom.", 6, "A small nucleus of protons and neutrons 3 // with electrons orbiting around it 3."],
    ["(b) Give one use of X-rays and one safety precaution.", 6, "Use: imaging bones / airport security / checking welds 3 // precaution: lead apron or screen, limit exposure, radiographer stands behind a screen 3."]])
] };
HL.store = "loops_lchl_phys_v1"; OL.store = "loops_lcol_phys_v1";
LOOPS_SUBJECTS.phys = { name: "Physics", flag: "⚛️", native: "New course, 2027", colour: "phys", OL, HL };
})();
