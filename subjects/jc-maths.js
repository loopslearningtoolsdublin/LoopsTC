// ═══════════════════════════════════════════════
// LOOPS · JUNIOR CYCLE MATHEMATICS — first version (4 Nov 2026)
// Styled on the SEC Junior Cycle papers (see the JC research in the Loops project).
// Warm-ups reuse the easier Leaving Cert Ordinary items where they fit; JC-specific banks grow next.
// ═══════════════════════════════════════════════
(function(){
const JC_GRADES = [["Distinction",85],["Higher Merit",70],["Merit",55],["Achieved",40],["Partially Achieved",20],["Not Graded",0]].map(([g,min]) => ({g,min}));
const LCM = LOOPS_SUBJECTS.maths.OL;
const ITEMS = LCM.items.map(i => Object.assign({}, i, {paper: undefined}));
const T_OL = [
  {id:"jm1",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Solve: 4x − 5 = 19","(b) A coat costs €60. It is reduced by 15%. Find the new price."],marks:[10,10]},
  {id:"jm2",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Find the area of a rectangle 12 cm by 7 cm.","(b) Find the area of a circle of radius 5 cm. Use π = 3.14."],marks:[10,10]},
  {id:"jm3",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A bag has 4 red, 3 blue and 5 green counters. One is taken at random.",pts:["(a) Find P(blue).","(b) Find P(not green)."],marks:[10,10]},
  {id:"jm4",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Find the mean of 6, 9, 4, 11, 10.","(b) Find the median and the range of the same numbers."],marks:[10,10]},
  {id:"jm5",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"The points A(1, 3) and B(5, 11).",pts:["(a) Find the slope of AB.","(b) Find the midpoint of AB."],marks:[10,10]}
];
const T_HL = [
  {id:"jmh1",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Solve the simultaneous equations: 3x + 2y = 16 and x − y = 2.","(b) Solve: x² − 7x + 12 = 0."],marks:[10,10]},
  {id:"jmh2",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) €2,000 is invested at 3% compound interest per year. Find its value after 2 years.","(b) A phone costs €492 including VAT at 23%. Find the price before VAT."],marks:[10,10]},
  {id:"jmh3",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A right-angled triangle has sides 9 cm and 12 cm either side of the right angle.",pts:["(a) Find the length of the hypotenuse.","(b) Find the smaller angle of the triangle, correct to the nearest degree."],marks:[10,10]},
  {id:"jmh4",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"f(x) = 2x² − 3x − 5.",pts:["(a) Find f(−1) and f(3).","(b) Find the values of x for which f(x) = 0."],marks:[10,10]},
  {id:"jmh5",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"The line l has equation y = 2x − 4.",pts:["(a) Find where l crosses the x-axis and the y-axis.","(b) Find the equation of the line through (1, 5) parallel to l."],marks:[10,10]}
];
// ── Towards 20 marked questions (4 Nov 2026) ──
T_OL.push(
  {id:"jm6",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Write 0.35 as a fraction in its simplest form.", "(b) Find 3/5 of 240."],marks:[10,10]},
  {id:"jm7",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Simplify 3(2x + 4) − 2(x − 1).", "(b) Factorise x² + 5x."],marks:[10,10]},
  {id:"jm8",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Share €150 between Aoife and Ben in the ratio 2 : 3.", "(b) 5 pens cost €3.50. Find the cost of 8 pens."],marks:[10,10]},
  {id:"jm9",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A car travels 180 km in 2 hours 30 minutes.",pts:["(a) Find its average speed in km/h.", "(b) At the same speed, how long would it take to travel 252 km?"],marks:[10,10]},
  {id:"jm10",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Two angles of a triangle are 48° and 67°.",pts:["(a) Find the third angle.", "(b) Is the triangle isosceles? Explain your answer."],marks:[10,10]},
  {id:"jm11",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A cuboid measures 8 cm by 5 cm by 4 cm.",pts:["(a) Find its volume.", "(b) Find its total surface area."],marks:[10,10]},
  {id:"jm12",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"In a class of 28 students, 15 play football, 12 play hurling and 5 play both.",pts:["(a) Show this information on a Venn diagram.", "(b) How many students play neither sport?"],marks:[10,10]},
  {id:"jm13",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Here is a pattern: 5, 9, 13, 17, …",pts:["(a) Write down the next two terms.", "(b) Find a formula for the nth term, and use it to find the 20th term."],marks:[10,10]},
  {id:"jm14",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Niamh earns €12.70 an hour and works 30 hours a week.",pts:["(a) Find her gross weekly wage.", "(b) She pays tax at 20% on all of it. Find her take-home pay."],marks:[10,10]},
  {id:"jm15",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Solve 3x − 2 < 13, x ∈ ℝ, and show your answer on a number line.", "(b) Solve 2(x + 3) = 5x − 9."],marks:[10,10]},
  {id:"jm16",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"The ages of seven students are: 14, 15, 15, 16, 14, 15, 17.",pts:["(a) Find the mode.", "(b) Find the mean, correct to one decimal place."],marks:[10,10]},
  {id:"jm17",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"The points A(−2, 1), B(4, 1) and C(4, 5).",pts:["(a) Find the length of AB.", "(b) Find the area of the triangle ABC."],marks:[10,10]},
  {id:"jm18",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A right-angled triangle has hypotenuse 10 cm and one side of 6 cm.",pts:["(a) Find the length of the third side.", "(b) Write sin A as a fraction, where A is the angle opposite the 6 cm side."],marks:[10,10]},
  {id:"jm19",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"f(x) = 3x − 2.",pts:["(a) Find f(4).", "(b) Find the value of x for which f(x) = 13."],marks:[10,10]},
  {id:"jm20",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A fair six-sided die is rolled.",pts:["(a) Find the probability of getting an even number.", "(b) The die is rolled 60 times. How many sixes would you expect?"],marks:[10,10]}
);
T_HL.push(
  {id:"jmh6",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Factorise 2x² + 7x + 3.", "(b) Simplify (x² − 9) / (x − 3)."],marks:[10,10]},
  {id:"jmh7",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Evaluate 8^(2/3).", "(b) Write 2⁵ × 4³ as a single power of 2."],marks:[10,10]},
  {id:"jmh8",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Calculate (3.2 × 10⁴) × (5 × 10⁻²). Give your answer in the form a × 10ⁿ.", "(b) Light travels at 3 × 10⁸ m/s. How long does it take light to travel 1.5 × 10¹¹ m?"],marks:[10,10]},
  {id:"jmh9",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Show all your work.",pts:["(a) Solve −3 ≤ 2x + 1 < 9, x ∈ ℝ, and show the solution on a number line.", "(b) Solve 5 − 2x > 11, x ∈ ℝ."],marks:[10,10]},
  {id:"jmh10",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A rectangle has length (x + 3) cm and width x cm. Its area is 40 cm².",pts:["(a) Show that x² + 3x − 40 = 0.", "(b) Solve the equation and write down the length and width of the rectangle."],marks:[10,10]},
  {id:"jmh11",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A cylinder has radius 3.5 cm and height 10 cm. Take π = 22/7.",pts:["(a) Find its volume.", "(b) Find its curved surface area."],marks:[10,10]},
  {id:"jmh12",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"A ladder 5 m long leans against a wall. It makes an angle of 70° with the ground.",pts:["(a) How high up the wall does the ladder reach? Give your answer to two decimal places.", "(b) How far is the foot of the ladder from the wall?"],marks:[10,10]},
  {id:"jmh13",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"The points A(−1, 2) and B(3, 10).",pts:["(a) Find |AB|, in surd form.", "(b) Find the equation of the perpendicular bisector of [AB]."],marks:[10,10]},
  {id:"jmh14",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"f(x) = x² − 2x − 3, for −2 ≤ x ≤ 4.",pts:["(a) Draw the graph of f.", "(b) Use your graph to find the roots of f(x) = 0 and the minimum point of f."],marks:[10,10]},
  {id:"jmh15",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Two fair six-sided dice are rolled and the scores are added.",pts:["(a) Find the probability that the total is 7.", "(b) Find the probability that both dice show an even number."],marks:[10,10]},
  {id:"jmh16",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"The mean of five numbers is 12. Four of the numbers are 10, 15, 9 and 14.",pts:["(a) Find the fifth number.", "(b) The number 18 is added to the list. Find the new mean."],marks:[10,10]},
  {id:"jmh17",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Two adult tickets and three child tickets cost €47. One adult ticket and two child tickets cost €27.",pts:["(a) Write two equations to show this information.", "(b) Solve them to find the price of each ticket."],marks:[10,10]},
  {id:"jmh18",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Here is a pattern: 3, 8, 15, 24, …",pts:["(a) Write down the next two terms.", "(b) Show that the nth term is n² + 2n, and find the 10th term."],marks:[10,10]},
  {id:"jmh19",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Seán earns €46,000 a year. Tax is 20% on the first €40,000 and 40% on the rest. His tax credits are €3,750.",pts:["(a) Find his gross tax.", "(b) Find his net income after tax."],marks:[10,10]},
  {id:"jmh20",kind:"jc_maths",max:20,label:"Question · 10 + 10",title:"Geometry.",pts:["(a) Prove that the three angles in any triangle add up to 180°.", "(b) An isosceles triangle has one angle of 40° between its two equal sides. Find the other two angles."],marks:[10,10]}
);
const mk = (lvl) => ({
  id:"", builtin:true, title:"Junior Cycle Maths · " + (lvl === "HL" ? "Higher" : "Ordinary"), subject:"Mathematics", cycle:"JC", level:lvl, photoFirst:true,
  source:"Styled on the SEC Junior Cycle Mathematics papers (270 marks, 13 compulsory questions)", gradeBands: JC_GRADES, texts:{},
  items: ITEMS, tasks: lvl === "HL" ? T_HL : T_OL, store: "loops_jc_ma_" + lvl + "_v1"
});
LOOPS_SUBJECTS.jc_maths = { name: "Maths", flag: "📐", colour: "maths", HL: mk("HL"), OL: mk("OL") };
})();
