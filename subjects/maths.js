// ═══════════════════════════════════════════════
// LOOPS · LC MATHS — Ordinary + Higher
// Quick-fire items are checked instantly. Marked questions are photographed and
// marked on SEC scales: 10C (0,4,6,10) · 10D (0,3,5,7,10) · 15D (0,4,8,10,15).
// Each part needs: pts (question), marks, scales, credit (what earns each level).
// All answers verified by calculation.
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));

const OL = {
  id:"", builtin:true, title:"LC Maths · Ordinary", subject:"Maths", cycle:"LC", level:"OL", photoFirst:true,
  source:"Styled on the SEC 2025 Ordinary Level papers and marking scheme", gradeBands: OL_GRADES, texts:{},
  items: [
    {id:"mo1",skill:"Number",type:"short",q:"Increase €30 by 23%.",a:["36.90","€36.90","36.9","€36.9"],why:"30 × 1.23 = €36.90"},
    {id:"mo2",skill:"Number",type:"short",q:"€500 is invested at 4% compound interest per year. Value after 2 years?",a:["540.80","€540.80","540.8","€540.8"],why:"500 × 1.04² = €540.80"},
    {id:"mo3",skill:"Number",type:"mcq",q:"0.00045 in scientific notation is…",opts:["4.5 × 10⁻⁴","4.5 × 10⁻³","45 × 10⁻⁵","4.5 × 10⁴"],a:0},
    {id:"mo4",skill:"Number",type:"mcq",q:"A car travels 120 km in 1.5 hours. Average speed?",opts:["80 km/h","180 km/h","60 km/h","90 km/h"],a:0,why:"120 ÷ 1.5 = 80"},
    {id:"mo5",skill:"Algebra",type:"short",q:"Solve: 3x − 7 = 11",a:["6","x=6","x = 6"],why:"3x = 18, so x = 6"},
    {id:"mo6",skill:"Algebra",type:"short",q:"f(x) = x² − 3x + 5. Find f(2).",a:["3"],why:"4 − 6 + 5 = 3"},
    {id:"mo7",skill:"Algebra",type:"short",q:"Simplify: 2(x + 3) − (x − 4)",a:["x + 10","x+10","10 + x","10+x"],why:"2x + 6 − x + 4 = x + 10"},
    {id:"mo8",skill:"Algebra",type:"mcq",q:"Solve: x² − 5x + 6 = 0",opts:["x = 2 or x = 3","x = −2 or x = −3","x = 1 or x = 6","x = −1 or x = 6"],a:0,why:"(x − 2)(x − 3) = 0"},
    {id:"mo9",skill:"Algebra",type:"short",q:"Find the 10th term: 3, 7, 11, 15, …",a:["39"],why:"a = 3, d = 4: 3 + 9 × 4 = 39"},
    {id:"mo10",skill:"Geometry & Trig",type:"mcq",q:"The slope of the line y = 4x − 2 is…",opts:["4","−2","2","−4"],a:0},
    {id:"mo11",skill:"Geometry & Trig",type:"mcq",q:"Distance between (1, 2) and (4, 6)?",opts:["5","7","25","√7"],a:0,why:"√(3² + 4²) = 5"},
    {id:"mo12",skill:"Geometry & Trig",type:"mcq",q:"Midpoint of (2, 8) and (6, 4)?",opts:["(4, 6)","(8, 12)","(2, 2)","(4, 2)"],a:0},
    {id:"mo13",skill:"Geometry & Trig",type:"mcq",q:"sin 30° = ",opts:["1/2","√3/2","1","√2/2"],a:0},
    {id:"mo14",skill:"Geometry & Trig",type:"short",q:"A right-angled triangle has shorter sides 6 cm and 8 cm. Length of the hypotenuse (cm)?",a:["10","10 cm","10cm"],why:"√(36 + 64) = 10"},
    {id:"mo15",skill:"Geometry & Trig",type:"mcq",q:"Volume of a cylinder with radius 3 and height 10 (in terms of π)?",opts:["90π","30π","60π","9π"],a:0,why:"πr²h = π × 9 × 10"},
    {id:"mo16",skill:"Stats & Probability",type:"short",q:"Mean of 4, 7, 9, 12, 8?",a:["8"],why:"40 ÷ 5 = 8"},
    {id:"mo17",skill:"Stats & Probability",type:"mcq",q:"A fair die is rolled. P(a number greater than 4)?",opts:["1/3","1/2","2/3","1/6"],a:0,why:"5 or 6: 2 out of 6"},
    {id:"mo18",skill:"Stats & Probability",type:"mcq",q:"The median of 3, 9, 4, 7, 5 is…",opts:["5","4","7","5.6"],a:0,why:"In order: 3, 4, 5, 7, 9"}
  ],
  tasks: [
    {id:"mot1",kind:"maths",max:20,label:"Long question · 2 parts · photo your working",title:"Answer both parts. Show all your work.",
      pts:["(a) Solve the simultaneous equations: 2x + y = 7 and x − y = 2.","(b) A jacket costs €80 after a 20% reduction. Find the original price."],
      marks:[10,10], scales:["10D","10C"],
      credit:["Steps: (1) eliminate a variable, (2) equation in one variable (3x = 9), (3) x = 3, (4) y = 1. Low partial: some work of merit, e.g. one variable isolated. Mid partial: two steps correct. High partial: three steps correct. Full credit: x = 3, y = 1.",
              "Low partial: work of merit, e.g. 0.8 or 80% written, or 80 × 1.2 = €96. High partial: 80 ÷ 0.8 set up with an error, or 80% = €80 stated. Full credit: €100."]},
    {id:"mot2",kind:"maths",max:30,label:"Long question · 3 parts · photo your working",title:"f(x) = x² − 4x + 3. Show all your work.",
      pts:["(a) Find f(0) and f(5).","(b) Find the roots of f(x) = 0.","(c) Find the co-ordinates of the minimum point of the graph of f."],
      marks:[10,10,10], scales:["10C","10D","10C"],
      credit:["Low partial: one substitution attempted. High partial: one value correct (f(0) = 3 or f(5) = 8). Full credit: f(0) = 3 and f(5) = 8.",
              "Low partial: work of merit, e.g. correct formula with some substitution. Mid partial: correct factors (x − 1)(x − 3) or correct substitution in the formula. High partial: one root correct. Full credit: x = 1 and x = 3.",
              "Low partial: work of merit, e.g. x = 2 from symmetry (midway between the roots) or a table. High partial: x = 2 with an error in y. Full credit: (2, −1)."]}
  ]
};

const HL = {
  id:"", builtin:true, title:"LC Maths · Higher", subject:"Maths", cycle:"LC", level:"HL", photoFirst:true,
  source:"Styled on SEC Leaving Certificate Higher Level papers and marking schemes", gradeBands: HL_GRADES, texts:{},
  items: [
    {id:"mh1",skill:"Calculus",type:"mcq",q:"Differentiate f(x) = 3x⁴ − 2x² + 7",opts:["12x³ − 4x","12x³ − 4x + 7","3x³ − 2x","12x⁴ − 4x"],a:0},
    {id:"mh2",skill:"Calculus",type:"mcq",q:"∫ 6x² dx = ",opts:["2x³ + c","12x + c","6x³ + c","3x³ + c"],a:0},
    {id:"mh3",skill:"Calculus",type:"mcq",q:"The derivative of sin(2x) is…",opts:["2cos(2x)","cos(2x)","−2cos(2x)","2sin(2x)"],a:0},
    {id:"mh4",skill:"Calculus",type:"short",q:"Slope of the tangent to y = x³ at x = 2?",a:["12"],why:"dy/dx = 3x² = 12"},
    {id:"mh5",skill:"Calculus",type:"short",q:"Area under y = 2x from x = 0 to x = 3?",a:["9"],why:"[x²] from 0 to 3 = 9"},
    {id:"mh6",skill:"Algebra",type:"short",q:"Solve: log₂(x) = 5",a:["32","x=32","x = 32"],why:"x = 2⁵"},
    {id:"mh7",skill:"Algebra",type:"mcq",q:"Solve: eˣ = 7",opts:["x = ln 7","x = 7/e","x = log₁₀ 7","x = e⁷"],a:0},
    {id:"mh8",skill:"Algebra",type:"short",q:"(x − 2) is a factor of x³ + kx − 4. Find k.",a:["-2","−2","k=-2","k = -2","k = −2","k=−2"],why:"f(2) = 8 + 2k − 4 = 0"},
    {id:"mh9",skill:"Algebra",type:"mcq",q:"Solve: |x − 3| < 2",opts:["1 < x < 5","x < 5","−1 < x < 5","x < 1 or x > 5"],a:0},
    {id:"mh10",skill:"Algebra",type:"mcq",q:"f(x) = x² and g(x) = x + 1. f(g(2)) = ",opts:["9","5","6","4"],a:0,why:"g(2) = 3, f(3) = 9"},
    {id:"mh11",skill:"Algebra",type:"mcq",q:"(2 + 3i)(1 − i) = ",opts:["5 + i","−1 + i","5 − i","2 − 3i"],a:0,why:"2 − 2i + 3i − 3i² = 5 + i"},
    {id:"mh12",skill:"Sequences",type:"short",q:"Sum of the first 20 terms: 5, 8, 11, …",a:["670"],why:"Sₙ = n/2 (2a + (n − 1)d) = 10 × 67"},
    {id:"mh13",skill:"Sequences",type:"short",q:"Sum to infinity: 8 + 4 + 2 + …",a:["16"],why:"a/(1 − r) = 8 ÷ 0.5"},
    {id:"mh14",skill:"Geometry & Trig",type:"mcq",q:"Equation of the circle with centre (2, −1) and radius 3:",opts:["(x − 2)² + (y + 1)² = 9","(x + 2)² + (y − 1)² = 9","(x − 2)² + (y + 1)² = 3","(x − 2)² + (y − 1)² = 9"],a:0},
    {id:"mh15",skill:"Geometry & Trig",type:"mcq",q:"Period of y = sin(3x):",opts:["2π/3","3π","π/3","6π"],a:0},
    {id:"mh16",skill:"Stats & Probability",type:"short",q:"How many ways can the letters of MATHS be arranged?",a:["120"],why:"5! = 120"},
    {id:"mh17",skill:"Stats & Probability",type:"short",q:"A and B are independent. P(A) = 0.5, P(B) = 0.4. P(A ∩ B)?",a:["0.2"],why:"0.5 × 0.4"},
    {id:"mh18",skill:"Stats & Probability",type:"mcq",q:"Standard deviation measures…",opts:["How spread out the data is","The middle value","The most common value","The total"],a:0}
  ],
  tasks: [
    {id:"mht1",kind:"maths",max:25,label:"Long question · 2 parts · photo your working",title:"f(x) = x³ − 6x² + 9x + 2. Show all your work.",
      pts:["(a) Find the co-ordinates of the local maximum and local minimum points of f.","(b) Find the equation of the tangent to the curve y = f(x) at x = 0."],
      marks:[15,10], scales:["15D","10C"],
      credit:["Low partial: f′(x) correct or partly correct. Mid partial: f′(x) = 0 solved, x = 1 and x = 3. High partial: one turning point correct, or both found without identifying max/min. Full credit: local max (1, 6), local min (3, 2).",
              "Low partial: f′(0) = 9 found, or the point (0, 2) found. High partial: slope and point both found, error in the equation. Full credit: y = 9x + 2."]},
    {id:"mht2",kind:"maths",max:20,label:"Long question · 2 parts · photo your working",title:"Show all your work.",
      pts:["(a) A loan of €12,000 is repaid in 5 equal annual repayments at 6% per annum compound interest, the first one year after the loan. Find the annual repayment, correct to the nearest cent.","(b) Find the sum of the first 30 terms of the arithmetic sequence 4, 7, 10, …"],
      marks:[10,10], scales:["10D","10C"],
      credit:["Low partial: some correct substitution into the amortisation formula, or 1.06⁵ found. Mid partial: correct formula fully substituted. High partial: correct method, error in calculation or rounding. Full credit: €2,848.76.",
              "Low partial: a = 4 and d = 3 identified. High partial: correct formula substituted with an error. Full credit: 1,425."]}
  ]
};
OL.items.push(
  {id:"om1",skill:"Number",type:"match",q:"Match the equal values.",pairs:[["25%","1/4"],["0.2","1/5"],["75%","3/4"],["0.5","1/2"]]},
  {id:"om2",skill:"Number",type:"match",q:"Match each to its value.",pairs:[["2³","8"],["√49","7"],["10²","100"],["5⁰","1"]]},
  {id:"oo1",skill:"Number",type:"order",q:"Put in order, smallest first.",words:["−3","0.3","1/2","0.6","3/4"]},
  {id:"oo2",skill:"Algebra",type:"order",q:"Order the steps to solve 2x + 3 = 11.",words:["Subtract 3 from both sides","2x = 8","Divide both sides by 2","x = 4"]},
  {id:"ot1",skill:"Geometry & Trig",type:"mcq",q:"True or false: The angles in a triangle add up to 180°.",opts:["True","False"],fixed:true,a:0},
  {id:"ot2",skill:"Stats & Probability",type:"mcq",q:"True or false: The mean of 2, 4 and 6 is 4.",opts:["True","False"],fixed:true,a:0},
  {id:"ot3",skill:"Number",type:"mcq",q:"True or false: −5 is greater than −2.",opts:["True","False"],fixed:true,a:1,why:"−5 is further below zero, so it’s smaller."}
);
HL.items.push(
  {id:"hm1",skill:"Calculus",type:"match",q:"Match each to its derivative.",pairs:[["x³","3x²"],["eˣ","eˣ"],["ln x","1/x"],["cos x","−sin x"]]},
  {id:"hm2",skill:"Algebra",type:"match",q:"Match the equal values.",pairs:[["i²","−1"],["i³","−i"],["i⁴","1"],["|3 + 4i|","5"]]},
  {id:"ho1",skill:"Calculus",type:"order",q:"Order the steps to find a turning point.",words:["Differentiate f(x)","Set f′(x) = 0","Solve for x","Substitute x into f(x)"]},
  {id:"ho2",skill:"Algebra",type:"order",q:"Put in order, smallest first.",words:["log₂ 4","e","π","√10"]},
  {id:"ht1",skill:"Calculus",type:"mcq",q:"True or false: ∫ 2x dx = x² + c",opts:["True","False"],fixed:true,a:0},
  {id:"ht2",skill:"Sequences",type:"mcq",q:"True or false: A geometric series has a sum to infinity only if |r| < 1.",opts:["True","False"],fixed:true,a:0},
  {id:"ht3",skill:"Algebra",type:"mcq",q:"True or false: ln(ab) = ln a × ln b",opts:["True","False"],fixed:true,a:1,why:"ln(ab) = ln a + ln b"}
);

// ── More, mid-level (2 Nov 2026). Every answer checked by calculation. ──
const TFm = ["True","False"];
OL.items.push(
  {id:"mo19",skill:"Number",type:"short",q:"Find 15% of €80.",a:["12","€12","12.00","€12.00"],why:"80 × 0.15 = €12"},
  {id:"mo20",skill:"Number",type:"short",q:"Reduce €60 by 10%.",a:["54","€54","54.00","€54.00"],why:"60 × 0.9 = €54"},
  {id:"mo21",skill:"Number",type:"short",q:"Find 3/4 of 120.",a:["90"]},
  {id:"mo22",skill:"Number",type:"mcq",q:"€240 is shared in the ratio 3 : 1. The bigger share is…",opts:["€180","€160","€80","€60"],a:0,why:"4 parts: €60 each. 3 × 60 = €180"},
  {id:"mo23",skill:"Number",type:"short",q:"Round 3.476 to two decimal places.",a:["3.48"]},
  {id:"mo24",skill:"Number",type:"short",q:"VAT at 23% on a bill of €200. How much is the VAT?",a:["46","€46","46.00","€46.00"],why:"200 × 0.23"},
  {id:"mo25",skill:"Number",type:"mcq",q:"0.375 as a fraction is…",opts:["3/8","3/4","3/5","37/100"],a:0},
  {id:"mo26",skill:"Number",type:"short",q:"How many minutes in 2.5 hours?",a:["150","150 minutes"]},
  {id:"mo27",skill:"Number",type:"short",q:"A train travels 240 km at 80 km/h. How many hours does it take?",a:["3","3 hours"],why:"Time = distance ÷ speed"},
  {id:"mo28",skill:"Number",type:"mcq",q:"Gross pay €800. Tax at 20%. How much tax?",opts:["€160","€200","€640","€16"],a:0},
  {id:"mo29",skill:"Number",type:"short",q:"Find 2⁵.",a:["32"]},
  {id:"mo30",skill:"Number",type:"short",q:"Find √144.",a:["12"]},
  {id:"mo31",skill:"Algebra",type:"short",q:"Solve: 5x + 2 = 17",a:["3","x=3","x = 3"]},
  {id:"mo32",skill:"Algebra",type:"short",q:"Solve: x/4 = 3",a:["12","x=12","x = 12"]},
  {id:"mo33",skill:"Algebra",type:"mcq",q:"Expand: (x + 2)(x + 3)",opts:["x² + 5x + 6","x² + 6x + 5","x² + 5x + 5","2x + 5"],a:0},
  {id:"mo34",skill:"Algebra",type:"mcq",q:"Factorise: x² − 9",opts:["(x − 3)(x + 3)","(x − 9)(x + 1)","(x − 3)²","x(x − 9)"],a:0,why:"Difference of two squares"},
  {id:"mo35",skill:"Algebra",type:"short",q:"a = 3 and b = −2. Find 2a − 3b.",a:["12"],why:"6 − (−6) = 12"},
  {id:"mo36",skill:"Algebra",type:"short",q:"Solve: 2(x − 1) = 10",a:["6","x=6","x = 6"]},
  {id:"mo37",skill:"Algebra",type:"mcq",q:"Solve: 2x < 8",opts:["x < 4","x > 4","x < 6","x < 16"],a:0},
  {id:"mo38",skill:"Algebra",type:"mcq",q:"The nth term of 5, 8, 11, 14, … is…",opts:["3n + 2","3n + 5","5n + 3","2n + 3"],a:0},
  {id:"mo39",skill:"Geometry & Trig",type:"short",q:"Area of a rectangle 8 cm by 5 cm (cm²)?",a:["40","40 cm²","40cm²"]},
  {id:"mo40",skill:"Geometry & Trig",type:"mcq",q:"Area of a circle of radius 10 (in terms of π)?",opts:["100π","20π","10π","200π"],a:0},
  {id:"mo41",skill:"Geometry & Trig",type:"short",q:"Area of a triangle, base 10 cm, height 6 cm (cm²)?",a:["30","30 cm²","30cm²"]},
  {id:"mo42",skill:"Geometry & Trig",type:"short",q:"Slope of the line through (1, 2) and (3, 8)?",a:["3"],why:"(8 − 2) ÷ (3 − 1) = 3"},
  {id:"mo43",skill:"Geometry & Trig",type:"short",q:"Two angles of a triangle are 50° and 60°. The third angle (degrees)?",a:["70","70°"]},
  {id:"mo44",skill:"Geometry & Trig",type:"mcq",q:"cos 60° = ",opts:["1/2","√3/2","1","0"],a:0},
  {id:"mo45",skill:"Geometry & Trig",type:"mcq",q:"tan 45° = ",opts:["1","0","1/2","√3"],a:0},
  {id:"mo46",skill:"Stats & Probability",type:"short",q:"Mode of 2, 3, 3, 5, 7?",a:["3"]},
  {id:"mo47",skill:"Stats & Probability",type:"short",q:"Range of 4, 9, 2, 11?",a:["9"],why:"11 − 2"},
  {id:"mo48",skill:"Stats & Probability",type:"mcq",q:"A bag has 3 red and 5 blue sweets. P(red)?",opts:["3/8","3/5","5/8","1/3"],a:0},
  {id:"mo49",skill:"Stats & Probability",type:"mcq",q:"A coin is tossed twice. P(two heads)?",opts:["1/4","1/2","1/3","3/4"],a:0},
  {id:"oo3",skill:"Geometry & Trig",type:"order",q:"Order the steps to find the slope of a line through two points.",words:["Write down (x₁, y₁) and (x₂, y₂)","Find y₂ − y₁","Find x₂ − x₁","Divide the first by the second"]},
  {id:"om3",skill:"Geometry & Trig",type:"match",q:"Match the shape to its area formula.",pairs:[["Rectangle","length × width"],["Triangle","½ × base × height"],["Circle","πr²"],["Parallelogram","base × height"]]},
  {id:"ot4",skill:"Number",type:"mcq",q:"True or false: 10% of €50 is €5.",opts:TFm,fixed:true,a:0},
  {id:"ot5",skill:"Algebra",type:"mcq",q:"True or false: If 3x = 12, then x = 36.",opts:TFm,fixed:true,a:1,why:"x = 12 ÷ 3 = 4"}
);
HL.items.push(
  {id:"mh19",skill:"Calculus",type:"mcq",q:"Differentiate: x² + 5x",opts:["2x + 5","x + 5","2x² + 5","2x"],a:0},
  {id:"mh20",skill:"Calculus",type:"mcq",q:"Differentiate: e³ˣ",opts:["3e³ˣ","e³ˣ","3xe³ˣ","e³ˣ/3"],a:0},
  {id:"mh21",skill:"Calculus",type:"mcq",q:"Differentiate: x·eˣ",opts:["eˣ + xeˣ","eˣ","xeˣ","1 + eˣ"],a:0,why:"Product rule"},
  {id:"mh22",skill:"Calculus",type:"mcq",q:"∫ (4x + 1) dx = ",opts:["2x² + x + c","4x² + x + c","2x² + c","4 + c"],a:0},
  {id:"mh23",skill:"Calculus",type:"short",q:"Evaluate ∫₀² 3x² dx.",a:["8"],why:"[x³] from 0 to 2 = 8"},
  {id:"mh24",skill:"Calculus",type:"short",q:"f(x) = x² − 4x. At what value of x is the turning point?",a:["2","x=2","x = 2"],why:"f′(x) = 2x − 4 = 0"},
  {id:"mh25",skill:"Algebra",type:"short",q:"Solve: 2ˣ = 16",a:["4","x=4","x = 4"]},
  {id:"mh26",skill:"Algebra",type:"short",q:"Find log₃ 81.",a:["4"],why:"3⁴ = 81"},
  {id:"mh27",skill:"Algebra",type:"mcq",q:"Solve: x² − 2x − 15 = 0",opts:["x = 5 or x = −3","x = −5 or x = 3","x = 15 or x = −1","x = 3 or x = 5"],a:0,why:"(x − 5)(x + 3) = 0"},
  {id:"mh28",skill:"Algebra",type:"short",q:"Find |6 − 8i|.",a:["10"],why:"√(36 + 64)"},
  {id:"mh29",skill:"Algebra",type:"mcq",q:"The conjugate of 3 + 2i is…",opts:["3 − 2i","−3 + 2i","−3 − 2i","2 + 3i"],a:0},
  {id:"mh30",skill:"Sequences",type:"short",q:"2, 7, 12, … Find the 20th term.",a:["97"],why:"2 + 19 × 5"},
  {id:"mh31",skill:"Sequences",type:"short",q:"3, 6, 12, … Find the 6th term.",a:["96"],why:"3 × 2⁵"},
  {id:"mh32",skill:"Sequences",type:"short",q:"€1,000 at 3% compound interest. Value after 3 years, to the nearest cent?",a:["1092.73","€1092.73","1,092.73","€1,092.73"],why:"1000 × 1.03³"},
  {id:"mh33",skill:"Sequences",type:"short",q:"A €20,000 car depreciates by 15% a year. Value after 2 years?",a:["14450","€14450","14,450","€14,450"],why:"20000 × 0.85²"},
  {id:"mh34",skill:"Geometry & Trig",type:"mcq",q:"Slope of the line 3x − 2y + 6 = 0:",opts:["3/2","−3/2","2/3","3"],a:0,why:"y = (3/2)x + 3"},
  {id:"mh35",skill:"Geometry & Trig",type:"short",q:"Distance between (−1, 2) and (5, 10)?",a:["10"]},
  {id:"mh36",skill:"Geometry & Trig",type:"short",q:"Radius of the circle x² + y² = 49?",a:["7"]},
  {id:"mh37",skill:"Geometry & Trig",type:"mcq",q:"60° in radians is…",opts:["π/3","π/6","π/2","2π/3"],a:0},
  {id:"mh38",skill:"Stats & Probability",type:"short",q:"How many ways can 2 people be chosen from 6? (⁶C₂)",a:["15"]},
  {id:"mh39",skill:"Stats & Probability",type:"mcq",q:"Two coins are tossed. P(at least one head)?",opts:["3/4","1/2","1/4","2/3"],a:0,why:"1 − P(no heads) = 1 − 1/4"},
  {id:"mh40",skill:"Stats & Probability",type:"short",q:"A game wins €10 with probability 0.2, otherwise nothing. Expected value (€)?",a:["2","€2","2.00","€2.00"]},
  {id:"mh41",skill:"Stats & Probability",type:"short",q:"Mean 50, standard deviation 5. z-score of 60?",a:["2","z=2","z = 2"],why:"(60 − 50) ÷ 5"},
  {id:"ht4",skill:"Geometry & Trig",type:"mcq",q:"True or false: sin²θ + cos²θ = 1",opts:TFm,fixed:true,a:0},
  {id:"hm3",skill:"Algebra",type:"match",q:"Match the log rules.",pairs:[["log(ab)","log a + log b"],["log(a/b)","log a − log b"],["log(aⁿ)","n log a"],["log 1","0"]]}
);


HL.items.push(
  {id:"mh42",skill:"Geometry & Trig",paper:2,type:"short",q:"Area of a triangle with sides 8 and 5 and included angle 30°?",a:["10"],why:"½ × 8 × 5 × sin 30°"},
  {id:"mh43",skill:"Geometry & Trig",paper:2,type:"mcq",q:"cos 120° = ",opts:["−1/2","1/2","−√3/2","√3/2"],a:0},
  {id:"mh44",skill:"Geometry & Trig",paper:2,type:"mcq",q:"Length of an arc: radius 6, angle π/3 radians.",opts:["2π","π","6π","π/2"],a:0,why:"rθ = 6 × π/3"},
  {id:"mh45",skill:"Geometry & Trig",paper:2,type:"mcq",q:"A line has slope 2/3. The slope of a line perpendicular to it is…",opts:["−3/2","3/2","−2/3","2/3"],a:0},
  {id:"mh46",skill:"Geometry & Trig",paper:2,type:"short",q:"Perpendicular distance from (0, 0) to the line 3x + 4y − 10 = 0?",a:["2"],why:"|−10| ÷ √(9 + 16)"},
  {id:"mh47",skill:"Geometry & Trig",paper:2,type:"mcq",q:"Centre of the circle (x − 3)² + (y + 4)² = 16:",opts:["(3, −4)","(−3, 4)","(3, 4)","(4, −3)"],a:0},
  {id:"mh48",skill:"Geometry & Trig",paper:2,type:"mcq",q:"The line with slope 2 through (1, 3) is…",opts:["y = 2x + 1","y = 2x + 3","y = 2x − 1","y = x + 2"],a:0},
  {id:"mh49",skill:"Geometry & Trig",paper:2,type:"mcq",q:"The sine rule is…",opts:["a/sin A = b/sin B","a² = b² + c² − 2bc cos A","½ab sin C","sin²A + cos²A = 1"],a:0},
  {id:"mh50",skill:"Stats & Probability",paper:2,type:"short",q:"Median of 2, 5, 7, 9?",a:["6"]},
  {id:"mh51",skill:"Stats & Probability",paper:2,type:"mcq",q:"A fair coin is tossed 3 times. P(exactly 2 heads)?",opts:["3/8","1/4","1/2","3/4"],a:0,why:"³C₂ × (½)³"},
  {id:"mh52",skill:"Stats & Probability",paper:2,type:"short",q:"How many ways can a 1st and 2nd place be awarded among 5 people?",a:["20"],why:"5 × 4"},
  {id:"mh53",skill:"Stats & Probability",paper:2,type:"mcq",q:"In a normal distribution, about what % of data lies within 1 standard deviation of the mean?",opts:["68%","95%","99.7%","50%"],a:0},
  {id:"mh54",skill:"Stats & Probability",paper:2,type:"mcq",q:"The interquartile range is…",opts:["Upper quartile − lower quartile","Largest − smallest","Mean − median","Half the range"],a:0}
);
// ── Paper 1 / Paper 2 (3 Nov 2026). Each paper is its own book on the shelf. ──
const P2_SKILLS = ["Geometry & Trig","Stats & Probability"];
[OL, HL].forEach(P => {
  P.papers = {1:"Paper 1", 2:"Paper 2"};
  P.items.forEach(i => { i.paper = P2_SKILLS.includes(i.skill) ? 2 : 1; });
  P.tasks.forEach(t => { if (!t.paper) t.paper = 1; });
});
OL.tasks.push(
  {id:"mot3",kind:"maths",max:30,paper:2,label:"Long question · 3 parts · photo your working",title:"Show all your work.",
    pts:["(a) A is (1, 2) and B is (5, 10). Find the slope of AB and the equation of the line AB.","(b) A right-angled triangle has hypotenuse 13 cm and one side 5 cm. Find the length of the third side, and the angle opposite the 5 cm side, correct to the nearest degree.","(c) A fair coin is tossed and a fair die is rolled. List the sample space and find P(a head and an even number)."],
    marks:[10,10,10], scales:["10C","10D","10C"],
    credit:["Low partial: slope formula with some substitution. High partial: slope = 2 found, or the equation with an error. Full credit: slope 2 and y = 2x (or 2x − y = 0).",
            "Low partial: Pythagoras written down with some substitution. Mid partial: third side = 12 cm. High partial: 12 cm and a correct trig ratio set up (sin A = 5/13). Full credit: 12 cm and 23°.",
            "Low partial: some outcomes listed. High partial: all 12 outcomes, or 3 favourable outcomes identified. Full credit: 3/12 = 1/4."]}
);
HL.tasks.push(
  {id:"mht3",kind:"maths",max:35,paper:2,label:"Long question · 3 parts · photo your working",title:"The circle c has equation x² + y² − 4x + 6y − 12 = 0. Show all your work.",
    pts:["(a) Find the centre and radius of c.","(b) Show that (5, 1) is on c, and find the equation of the tangent to c at (5, 1).","(c) A and B are independent events with P(A) = 0.3 and P(B) = 0.5. Find P(A ∪ B)."],
    marks:[10,15,10], scales:["10C","15D","10C"],
    credit:["Low partial: centre or radius attempted with some correct work. High partial: centre (2, −3) or radius 5 correct. Full credit: centre (2, −3), radius 5.",
            "Low partial: (5, 1) substituted into the equation. Mid partial: slope of the radius 4/3 found. High partial: tangent slope −3/4 with an error in the equation. Full credit: (5, 1) verified and 3x + 4y − 19 = 0.",
            "Low partial: the formula P(A) + P(B) − P(A ∩ B) written down. High partial: P(A ∩ B) = 0.15 found. Full credit: 0.65."]}
);
LOOPS_SUBJECTS.maths = { name: "Maths", flag: "📐", native: "Maths", colour: "maths", OL, HL };
})();

// ── Every area of both papers (6 Nov 2026): one or more marked questions per area. Answers checked by calculation. ──
(function(){
const M = LOOPS_SUBJECTS.maths;
M.HL.tasks.push(
  {id:"mht4",kind:"maths",paper:1,area:"Algebra",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) x = 1 is a root of x³ − 2x² − 5x + 6 = 0. Find the other two roots.", "(b) Solve |2x − 3| < 5, x ∈ ℝ."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: x − 1 identified as a factor, or division started. Mid partial: quadratic factor x² − x − 6 found. High partial: quadratic factorised with one root found. Full credit: x = 3 and x = −2.", "Low partial: one correct inequality written. High partial: one end correct. Full credit: −1 < x < 4."]},
  {id:"mht5",kind:"maths",paper:1,area:"Complex numbers",max:25,label:"Long question · 2 parts · photo your working",title:"z₁ = 3 + 4i and z₂ = 1 − 2i. Show all your work.",pts:["(a) Find z₁z₂ and |z₁|.", "(b) Write z₁ ÷ z₂ in the form a + bi."],marks:[10, 15],scales:["10C", "15D"],credit:["Low partial: multiplication started, or |z₁| formula written. High partial: one of the two correct. Full credit: z₁z₂ = 11 − 2i, |z₁| = 5.", "Low partial: multiply by the conjugate 1 + 2i. Mid partial: numerator or denominator correct. High partial: −5 + 10i over 5. Full credit: −1 + 2i."]},
  {id:"mht6",kind:"maths",paper:1,area:"Sequences & series",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) The 3rd term of an arithmetic sequence is 11 and the 7th term is 27. Find the first term, the common difference and S₂₀.", "(b) Find the sum to infinity of 12 + 6 + 3 + …"],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: one equation written. Mid partial: d = 4 found. High partial: a = 3 and d = 4. Full credit: S₂₀ = 820.", "Low partial: r = ½ found. High partial: formula a/(1 − r) with substitution. Full credit: 24."]},
  {id:"mht7",kind:"maths",paper:1,area:"Calculus",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) Find ∫(6x² − 4x + 1) dx.", "(b) Find the area enclosed between the curve y = 4x − x² and the x-axis."],marks:[10, 15],scales:["10C", "15D"],credit:["Low partial: one term integrated correctly. High partial: all terms correct, no + C. Full credit: 2x³ − 2x² + x + C.", "Low partial: limits 0 and 4 found. Mid partial: correct integral set up. High partial: integrated correctly with an error in substitution. Full credit: 32/3 square units (10.67)."]},
  {id:"mht8",kind:"maths",paper:1,area:"Calculus",max:25,label:"Long question · 2 parts · photo your working",title:"The radius of a spherical balloon increases at 0.5 cm per second. Show all your work.",pts:["(a) Write down dV/dr, where V = (4/3)πr³.", "(b) Find the rate at which the volume is increasing when r = 10 cm."],marks:[10, 15],scales:["10C", "15D"],credit:["Low partial: any attempt at differentiation. High partial: correct except for a constant. Full credit: 4πr².", "Low partial: chain rule dV/dt = dV/dr × dr/dt written. Mid partial: values substituted. High partial: 4π(100)(0.5) with one slip. Full credit: 200π cm³/s (628.3)."]},
  {id:"mht9",kind:"maths",paper:2,area:"Co-ordinate geometry",max:25,label:"Long question · 2 parts · photo your working",title:"A is (−2, 1) and B is (4, 5). Show all your work.",pts:["(a) Find the equation of the line AB.", "(b) Find the perpendicular distance from C(3, −2) to the line AB."],marks:[10, 15],scales:["10C", "15D"],credit:["Low partial: slope formula with substitution. High partial: slope 2/3 with an error in the equation. Full credit: 2x − 3y + 7 = 0.", "Low partial: distance formula written. Mid partial: values substituted. High partial: 19/√13 with one slip. Full credit: 19/√13 ≈ 5.27."]},
  {id:"mht10",kind:"maths",paper:2,area:"Trigonometry",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) Solve cos 2x = ½ for 0° ≤ x ≤ 360°.", "(b) In triangle ABC, a = 7, b = 8 and C = 60°. Find c and the area of the triangle."],marks:[15, 10],scales:["15D", "10D"],credit:["Low partial: 2x = 60° found. Mid partial: two solutions. High partial: three solutions. Full credit: x = 30°, 150°, 210°, 330°.", "Low partial: cosine rule written. Mid partial: c² = 57. High partial: c correct, area with an error. Full credit: c = √57 ≈ 7.55; area = 14√3 ≈ 24.25."]},
  {id:"mht11",kind:"maths",paper:2,area:"Probability",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) A bag has 5 red and 3 blue discs. Two are taken without replacement. Find the probability that both are red, and that one of each colour is taken.", "(b) A fair coin is tossed 6 times. Find the probability of exactly 4 heads."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: 5/8 found. Mid partial: P(both red) = 5/14. High partial: one of each attempted with one branch. Full credit: 5/14 and 15/28.", "Low partial: binomial idea or C(6,4) written. High partial: 15 × (½)⁶ with an error. Full credit: 15/64."]},
  {id:"mht12",kind:"maths",paper:2,area:"Statistics",max:25,label:"Long question · 2 parts · photo your working",title:"Exam marks are normally distributed with mean 60 and standard deviation 8. Show all your work.",pts:["(a) Find the probability that a student scores more than 72.", "(b) Find the mark exceeded by the top 10% of students."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: z formula written. Mid partial: z = 1.5. High partial: 0.9332 found. Full credit: 0.0668.", "Low partial: z = 1.28 identified. High partial: 60 + 1.28 × 8 set up. Full credit: about 70 (70.24)."]},
  {id:"mht13",kind:"maths",paper:2,area:"Geometry",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) Prove that the angle at the centre of a circle is twice the angle at the circumference standing on the same arc.", "(b) The angle at the centre of a circle is 110°. Find the angle at the circumference standing on the same arc."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: diagram with construction. Mid partial: isosceles triangles identified. High partial: proof complete apart from one step. Full credit: complete, correctly argued proof.", "Low partial: relationship stated. Full credit: 55°."]}
);
M.OL.tasks.push(
  {id:"mot4",kind:"maths",paper:1,area:"Complex numbers",max:20,label:"Long question · 2 parts · photo your working",title:"z = 2 + 3i and w = 1 − i. Show all your work.",pts:["(a) Find z + w and |z|.", "(b) Find z × w."],marks:[10, 10],scales:["10C", "10C"],credit:["Low partial: one correct. High partial: |z| formula with substitution. Full credit: 3 + 2i, |z| = √13 ≈ 3.61.", "Low partial: multiplication started. High partial: i² not replaced by −1. Full credit: 5 + i."]},
  {id:"mot5",kind:"maths",paper:1,area:"Calculus",max:25,label:"Long question · 2 parts · photo your working",title:"y = x³ − 3x² + 2. Show all your work.",pts:["(a) Find dy/dx, and the slope of the curve at x = 3.", "(b) Find the values of x where the slope is 0."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: one term differentiated. Mid partial: dy/dx = 3x² − 6x. High partial: substitution with an error. Full credit: slope = 9.", "Low partial: 3x² − 6x = 0 written. High partial: one value. Full credit: x = 0 and x = 2."]},
  {id:"mot6",kind:"maths",paper:1,area:"Number & finance",max:25,label:"Long question · 2 parts · photo your working",title:"Show all your work.",pts:["(a) A meal costs €85 before VAT at 13.5%. Find the total cost.", "(b) €5,000 is invested at 4% compound interest per year. Find its value after 3 years."],marks:[10, 15],scales:["10C", "15D"],credit:["Low partial: 13.5% of 85 attempted. High partial: VAT €11.48 found. Full credit: €96.48.", "Low partial: one year correct (€5,200). Mid partial: two years (€5,408). High partial: correct method, rounding error. Full credit: €5,624.32."]},
  {id:"mot7",kind:"maths",paper:2,area:"Area & volume",max:25,label:"Long question · 2 parts · photo your working",title:"A cylinder has radius 4 cm and height 10 cm. Show all your work.",pts:["(a) Find its volume, in terms of π and correct to two decimal places.", "(b) Find its curved surface area."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: formula πr²h written. Mid partial: values substituted. High partial: 160π. Full credit: 160π ≈ 502.65 cm³.", "Low partial: formula 2πrh. High partial: 80π. Full credit: 80π ≈ 251.33 cm²."]},
  {id:"mot8",kind:"maths",paper:2,area:"Co-ordinate geometry",max:25,label:"Long question · 2 parts · photo your working",title:"A circle has centre (0, 0) and radius 5. Show all your work.",pts:["(a) Write down the equation of the circle, and show that (3, 4) is on it.", "(b) Find where the circle crosses the x-axis."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: x² + y² = r² written. Mid partial: equation correct. High partial: substitution with a slip. Full credit: x² + y² = 25; 9 + 16 = 25 ✓.", "Low partial: y = 0 substituted. High partial: one point. Full credit: (5, 0) and (−5, 0)."]},
  {id:"mot9",kind:"maths",paper:2,area:"Probability",max:25,label:"Long question · 2 parts · photo your working",title:"A bag has 4 red and 6 green counters. Show all your work.",pts:["(a) Find the probability of picking a red counter, and the probability of two greens if the first is put back before the second pick.", "(b) A counter is picked and put back 20 times. How many reds would you expect?"],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: P(red) = 4/10. Mid partial: P(green) = 6/10. High partial: multiplication set up. Full credit: 0.4 and 0.36.", "Low partial: 20 × P(red) set up. Full credit: 8."]},
  {id:"mot10",kind:"maths",paper:2,area:"Statistics",max:25,label:"Long question · 2 parts · photo your working",title:"The data: 12, 15, 11, 18, 15, 20, 14. Show all your work.",pts:["(a) Find the mean and the median.", "(b) Find the range, and say what it tells you about the data."],marks:[15, 10],scales:["15D", "10C"],credit:["Low partial: data in order, or total 105 found. Mid partial: one of mean or median. High partial: both with one slip. Full credit: mean 15, median 15.", "Low partial: highest or lowest identified. High partial: range 9 without a comment. Full credit: range 9, with a sensible comment on spread."]}
);
})();

// ── OL warm-ups for Functions & calculus and Finance (6 Nov 2026) ──
(function(){ const S = LOOPS_SUBJECTS.maths; const I = [
  {id:"mf1",skill:"Calculus",type:"mcq",q:"If y = x², then dy/dx is…",opts:["2x", "x", "2", "x³/3"],a:0},
  {id:"mf2",skill:"Calculus",type:"mcq",q:"At a maximum or minimum point, the slope (dy/dx) is…",opts:["0", "1", "Undefined", "Negative"],a:0},
  {id:"mf3",skill:"Calculus",type:"mcq",q:"If f(x) = 3x − 2, then f(4) is…",opts:["10", "12", "14", "2"],a:0},
  {id:"mf4",skill:"Calculus",type:"mcq",q:"If y = 5x³, then dy/dx is…",opts:["15x²", "5x²", "15x³", "3x²"],a:0},
  {id:"ms1",skill:"Sequences",type:"mcq",q:"A meal costs €100 before VAT at 13.5%. The total is…",opts:["€113.50", "€86.50", "€135", "€101.35"],a:0},
  {id:"ms2",skill:"Sequences",type:"mcq",q:"€1,000 at 5% compound interest for 2 years becomes…",opts:["€1,102.50", "€1,100", "€1,050", "€1,105"],a:0},
  {id:"ms3",skill:"Sequences",type:"mcq",q:"The next term of 4, 7, 10, 13, … is…",opts:["16", "15", "17", "26"],a:0},
  {id:"ms4",skill:"Sequences",type:"mcq",q:"The common difference of 20, 17, 14, … is…",opts:["−3", "3", "−17", "14"],a:0}
].map(i => Object.assign({paper:1}, i)); S.OL.items = S.OL.items.concat(I); })();
