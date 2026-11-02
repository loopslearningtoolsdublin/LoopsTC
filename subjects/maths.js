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
LOOPS_SUBJECTS.maths = { name: "Maths", flag: "📐", native: "Maths", colour: "maths", OL, HL };
})();
