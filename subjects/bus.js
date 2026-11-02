// ═══════════════════════════════════════════════
// LOOPS · LC BUSINESS — Ordinary + Higher
// Original material in the style and format of the SEC papers.
// Item: {id, skill, type:"mcq"|"short", q, opts?, a, why?, lenient?}
// Task: {id, kind, label, title, pts, max, case?, marks?}
//   bus_short    : marks[] per part, from the task
//   bus_long_ne  : student gives 4 points, Name 2 + Explain 3
//   bus_long_nee : student gives 4 points, Name 2 + Explain 2 + Example 1
//   bus_abq_5    : 4 points, Name 2 + Explain 2 + Link 1 (quote from the case)
//   bus_abq_7    : 4 points, Name 1 + Explain 2 + Link 1 + Evaluate 3
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));

const CASE = "BURREN BITES. Aoife Daly set up Burren Bites in Co. Clare in 2021, making healthy snack bars from local oats and honey. “I saw a gap in the market when I couldn’t find a snack I’d give my own kids,” she says. She risked her savings and worked from her kitchen for the first year. Now she employs twelve people. Every Monday Aoife meets her team to set targets for the week, and staff are encouraged to suggest new flavours; the best idea each month wins a bonus. Recently a supplier delivered damaged packaging and Aoife phoned him the same day, calmly explaining the problem and agreeing a discount. Sales are now flat, however, and two staff have said they feel they have no say in decisions about the new factory.";

const SHARED_ITEMS = [
  {id:"bk1",skill:"Key terms",type:"mcq",q:"An entrepreneur is someone who…",opts:["Identifies an opportunity and takes the risk of setting up a business","Manages a business owned by someone else","Lends money to businesses","Works for a state body"],a:0},
  {id:"bk2",skill:"Key terms",type:"mcq",q:"In a SWOT analysis, “threats” are…",opts:["External factors that could harm the business","Internal weaknesses of the business","Opportunities to grow","Strengths the business has"],a:0},
  {id:"bk3",skill:"Key terms",type:"mcq",q:"The top level of Maslow’s hierarchy of needs is…",opts:["Self-actualisation","Esteem","Safety","Social"],a:0},
  {id:"bk4",skill:"Key terms",type:"mcq",q:"McGregor’s Theory Y managers believe workers…",opts:["Enjoy work and will take responsibility","Dislike work and must be controlled","Are motivated only by money","Avoid all responsibility"],a:0},
  {id:"bk5",skill:"Key terms",type:"mcq",q:"The four Ps of the marketing mix are product, price, place and…",opts:["Promotion","People","Profit","Packaging"],a:0},
  {id:"bk6",skill:"Key terms",type:"mcq",q:"Which body enforces consumer law in Ireland?",opts:["The Competition and Consumer Protection Commission (CCPC)","The Labour Court","The Revenue Commissioners","The Central Statistics Office"],a:0},
  {id:"bk7",skill:"Key terms",type:"mcq",q:"Which body helps resolve industrial relations disputes first, before the Labour Court?",opts:["The Workplace Relations Commission (WRC)","The CCPC","The Small Claims Court","Enterprise Ireland"],a:0},
  {id:"bk8",skill:"Key terms",type:"mcq",q:"Span of control means…",opts:["The number of workers reporting directly to one manager","The length of the chain of command","How long a manager stays in a job","The area a business sells in"],a:0},
  {id:"bk9",skill:"Key terms",type:"mcq",q:"Which management activity involves comparing actual results with targets?",opts:["Controlling","Planning","Organising","Delegating"],a:0},
  {id:"bk10",skill:"Key terms",type:"mcq",q:"Which EU institution proposes new EU laws?",opts:["The European Commission","The European Parliament","The Court of Justice","The European Central Bank"],a:0},
  {id:"bk11",skill:"Key terms",type:"mcq",q:"Which tax is charged on most goods and services sold?",opts:["VAT","PAYE","PRSI","Corporation tax"],a:0},
  {id:"bk12",skill:"Key terms",type:"mcq",q:"A strike where workers stay at work but refuse certain duties is…",opts:["A work-to-rule","A lockout","An all-out strike","A token stoppage"],a:0},
  {id:"bc1",skill:"Calculations",type:"short",q:"Fixed costs €20,000; selling price €50; variable cost €30 per unit. Break-even point in units?",a:["1000","1,000","1000 units"],why:"20,000 ÷ (50 − 30) = 1,000 units."},
  {id:"bc2",skill:"Calculations",type:"mcq",q:"Current assets €60,000; current liabilities €30,000. Working capital ratio?",opts:["2:1","1:2","0.5:1","3:1"],a:0,why:"60,000 ÷ 30,000 = 2:1, the ideal ratio."},
  {id:"bc3",skill:"Calculations",type:"short",q:"Sales €200,000; gross profit €50,000. Gross profit margin (%)?",a:["25","25%"],why:"50,000 ÷ 200,000 × 100 = 25%."},
  {id:"bc4",skill:"Calculations",type:"mcq",q:"Current assets €40,000 (including closing stock €10,000); current liabilities €30,000. Acid test ratio?",opts:["1:1","1.33:1","0.75:1","2:1"],a:0,why:"(40,000 − 10,000) ÷ 30,000 = 1:1."},
  {id:"bw1",skill:"Definitions",type:"short",q:"Name the stage of the product life cycle that comes straight after introduction.",a:["growth"]},
  {id:"bw2",skill:"Definitions",type:"short",q:"What does the “S” in SWOT stand for?",a:["strengths"]},
  {id:"bw3",skill:"Definitions",type:"short",q:"Name the lowest level of Maslow’s hierarchy of needs.",a:["physiological","physiological needs","basic needs"]},
  {id:"bw4",skill:"Definitions",type:"short",q:"Name the type of finance a business gets by selling shares.",a:["equity","share capital","equity capital","ordinary share capital"]}
];

SHARED_ITEMS.push(
  {id:"bm1",skill:"Key terms",type:"match",q:"Match them up.",pairs:[["Theory X","Workers dislike work"],["Theory Y","Workers seek responsibility"],["Span of control","Number reporting to one manager"],["Delegation","Giving authority to a subordinate"]]},
  {id:"bm2",skill:"Key terms",type:"match",q:"Match each tax.",pairs:[["VAT","Tax on goods and services"],["PAYE","Income tax taken from wages"],["PRSI","Social insurance"],["Corporation tax","Tax on company profits"]]},
  {id:"bm3",skill:"Key terms",type:"match",q:"Match each body to its job.",pairs:[["WRC","Workplace disputes"],["CCPC","Consumer protection"],["Revenue","Collects taxes"],["Enterprise Ireland","Helps Irish firms grow and export"]]},
  {id:"bo1",skill:"Definitions",type:"order",q:"Put the product life cycle in order.",words:["Introduction","Growth","Maturity","Saturation","Decline"]},
  {id:"bo2",skill:"Definitions",type:"order",q:"Maslow’s hierarchy, from the bottom up.",words:["Physiological","Safety","Social","Esteem","Self-actualisation"]},
  {id:"bt1",skill:"Key terms",type:"mcq",q:"True or false: A lockout is when an employer stops workers from working.",opts:["True","False"],fixed:true,a:0},
  {id:"bt2",skill:"Calculations",type:"mcq",q:"True or false: Break-even is where total revenue equals total costs.",opts:["True","False"],fixed:true,a:0},
  {id:"bt3",skill:"Key terms",type:"mcq",q:"True or false: A sole trader has limited liability.",opts:["True","False"],fixed:true,a:1,why:"Unlimited liability: personal assets are at risk."},
  {id:"bt4",skill:"Calculations",type:"mcq",q:"True or false: Gross profit is sales minus cost of sales.",opts:["True","False"],fixed:true,a:0}
);

const OL = {
  id:"", builtin:true, title:"LC Business · Ordinary", subject:"Business", cycle:"LC", level:"OL",
  source:"Styled on SEC Leaving Certificate Business papers and marking schemes", gradeBands: OL_GRADES, texts:{},
  items: SHARED_ITEMS,
  tasks: [
    {id:"bo1",kind:"bus_short",max:10,label:"Short question · 10 marks",title:"Name the four Ps of the marketing mix and explain one of them.",pts:["Name the four Ps","Explain one of them"],marks:[6,4]},
    {id:"bo2",kind:"bus_long_ne",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four sources of finance a small business could use.",pts:[]},
    {id:"bo3",kind:"bus_abq_5",max:20,label:"ABQ · 4 points × (Name 2 + Explain 2 + Link 1)",case:CASE,title:"Identify and explain four characteristics of an entrepreneur shown by Aoife Daly. Use the case to support your answer.",pts:[]},
    {id:"bo4",kind:"bus_short",max:10,label:"Short question · 10 marks",title:"Distinguish between a strike and a lockout.",pts:["Strike","Lockout"],marks:[5,5]},
    {id:"bo5",kind:"bus_long_nee",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four ways a business can protect the environment.",pts:[]}
  ]
};
const HL = {
  id:"", builtin:true, title:"LC Business · Higher", subject:"Business", cycle:"LC", level:"HL",
  source:"Styled on the SEC 2025 Higher Level paper and marking scheme", gradeBands: HL_GRADES, texts:{},
  items: SHARED_ITEMS,
  tasks: [
    {id:"bh1",kind:"bus_abq_7",max:28,label:"ABQ · 4 points × (Name 1 + Explain 2 + Link 1 + Evaluate 3)",case:CASE,title:"Evaluate the effectiveness of the management skills Aoife Daly uses in Burren Bites. Refer to the case in your answer.",pts:[]},
    {id:"bh2",kind:"bus_long_ne",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four characteristics of an entrepreneur.",pts:[]},
    {id:"bh3",kind:"bus_long_nee",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four ways the Irish government can create a positive climate for business.",pts:[]},
    {id:"bh4",kind:"bus_short",max:10,label:"Short question · 10 marks",title:"Distinguish between Theory X and Theory Y (McGregor).",pts:["Theory X","Theory Y"],marks:[5,5]},
    {id:"bh5",kind:"bus_abq_5",max:20,label:"ABQ · 4 points × (Name 2 + Explain 2 + Link 1)",case:CASE,title:"Using Maslow’s hierarchy of needs, explain how Aoife motivates her staff and why two staff feel left out. Use the case to support your answer.",pts:[]}
  ]
};
LOOPS_SUBJECTS.bus = { name: "Business", flag: "📊", native: "Business", colour: "bus", OL, HL };
})();
