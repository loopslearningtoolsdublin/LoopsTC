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


// ── More, mid-level (2 Nov 2026) ──
const TFb = ["True","False"];
SHARED_ITEMS.push(
  {id:"bk13",skill:"Key terms",type:"mcq",q:"A business owned and run by one person is a…",opts:["Sole trader","Partnership","Private limited company","Co-operative"],a:0},
  {id:"bk14",skill:"Key terms",type:"mcq",q:"Limited liability means…",opts:["Owners can only lose what they invested","Owners can lose their personal assets","The business cannot borrow","Profits are limited by law"],a:0},
  {id:"bk15",skill:"Key terms",type:"mcq",q:"Market research that you carry out yourself (surveys, interviews) is…",opts:["Primary (field) research","Secondary (desk) research","Test marketing","Advertising"],a:0},
  {id:"bk16",skill:"Key terms",type:"mcq",q:"A brand name helps a business to…",opts:["Make its product easy to recognise","Pay less tax","Avoid competition law","Lower its wages"],a:0},
  {id:"bk17",skill:"Key terms",type:"mcq",q:"Which is a source of SHORT-term finance?",opts:["Bank overdraft","Mortgage","Share capital","Long-term loan"],a:0},
  {id:"bk18",skill:"Key terms",type:"mcq",q:"Which is a source of LONG-term finance?",opts:["Share capital","Bank overdraft","Trade credit","Accrued expenses"],a:0},
  {id:"bk19",skill:"Key terms",type:"mcq",q:"Planning, organising and controlling are…",opts:["Management activities","Marketing activities","Sources of finance","Types of business"],a:0},
  {id:"bk20",skill:"Key terms",type:"mcq",q:"Under consumer law, if a new product is faulty you are entitled to…",opts:["A refund, repair or replacement","Only a credit note","Nothing after one day","A free extra product"],a:0},
  {id:"bk21",skill:"Key terms",type:"mcq",q:"An employer who treats a worker unfairly because of age is breaking…",opts:["Equality law","Consumer law","Company law","Tax law"],a:0},
  {id:"bk22",skill:"Key terms",type:"mcq",q:"Which body helps Irish businesses to grow and export?",opts:["Enterprise Ireland","The CCPC","The Revenue Commissioners","The Labour Court"],a:0},
  {id:"bk23",skill:"Key terms",type:"mcq",q:"The European Central Bank’s main job is to…",opts:["Keep prices stable in the eurozone","Collect taxes in Ireland","Make EU laws","Run Irish banks"],a:0},
  {id:"bk24",skill:"Key terms",type:"mcq",q:"Insurance is based on the idea that…",opts:["The losses of a few are paid for by the premiums of many","Everyone gets paid back every year","Only businesses can insure","The government pays all claims"],a:0},
  {id:"bk25",skill:"Key terms",type:"mcq",q:"A good leader who lets workers share in decisions is…",opts:["Democratic","Autocratic","Laissez-faire","Bureaucratic"],a:0},
  {id:"bk26",skill:"Key terms",type:"mcq",q:"Giving a worker more tasks at the same level is…",opts:["Job enlargement","Job enrichment","Delegation","Promotion"],a:0},
  {id:"bc5",skill:"Calculations",type:"short",q:"Sales €80,000; cost of sales €50,000. Gross profit (€)?",a:["30000","30,000","€30,000","€30000"]},
  {id:"bc6",skill:"Calculations",type:"short",q:"Net profit €12,000 on sales of €100,000. Net profit margin (%)?",a:["12","12%"]},
  {id:"bc7",skill:"Calculations",type:"short",q:"Fixed costs €9,000; price €25; variable cost €10 per unit. Break-even (units)?",a:["600","600 units"],why:"9,000 ÷ 15"},
  {id:"bc8",skill:"Calculations",type:"short",q:"Opening cash €2,000. Receipts €5,000. Payments €6,500. Closing cash (€)?",a:["500","€500"],why:"2,000 + 5,000 − 6,500"},
  {id:"bc9",skill:"Calculations",type:"mcq",q:"Gross pay €600. PAYE €90, PRSI €24, USC €18. Net pay?",opts:["€468","€510","€486","€432"],a:0,why:"600 − 132"},
  {id:"bw5",skill:"Definitions",type:"short",q:"Name the type of strike that is official and approved by the union executive.",a:["official strike","official","an official strike"]},
  {id:"bw6",skill:"Definitions",type:"short",q:"What does PAYE stand for?",a:["pay as you earn"]},
  {id:"bw7",skill:"Definitions",type:"short",q:"What does the “O” in SWOT stand for?",a:["opportunities"]},
  {id:"bo3",skill:"Definitions",type:"order",q:"Put the stages of developing a new product in order.",words:["Idea generation","Product screening","Concept development","Feasibility study","Prototype","Test marketing","Launch"]},
  {id:"bm4",skill:"Key terms",type:"match",q:"Match the source of finance to what it is.",pairs:[["Bank overdraft","Spend more than is in the account"],["Leasing","Rent an asset instead of buying it"],["Share capital","Sell part-ownership"],["Trade credit","Buy now, pay the supplier later"]]},
  {id:"bm5",skill:"Key terms",type:"match",q:"Match the management skill.",pairs:[["Leading","Directing and inspiring people"],["Motivating","Getting the best out of workers"],["Communicating","Passing on information clearly"],["Controlling","Checking results against targets"]]},
  {id:"bt5",skill:"Key terms",type:"mcq",q:"True or false: A partnership usually has between 2 and 20 partners.",opts:TFb,fixed:true,a:0},
  {id:"bt6",skill:"Key terms",type:"mcq",q:"True or false: Secondary research means collecting new information yourself.",opts:TFb,fixed:true,a:1,why:"That’s primary research. Secondary uses information that already exists."}
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

// ── Every unit and section (6 Nov 2026): more marked questions so each area of the paper is covered ──
(function(){
const S = LOOPS_SUBJECTS.bus;
S.HL.tasks.push(
  {id:"bh6",kind:"bus_long_ne",area:"Unit 1 · People in business",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four ways in which conflict can arise between the stakeholders of a business.",pts:[]},
  {id:"bh7",kind:"bus_long_nee",area:"Unit 3 · Managing I",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four management activities (for example planning, organising, controlling) and give an example of each in a business you know.",pts:[]},
  {id:"bh8",kind:"bus_long_ne",area:"Unit 4 · Managing II",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain the stages in the recruitment and selection of new staff.",pts:[]},
  {id:"bh9",kind:"bus_long_ne",area:"Unit 5 · Business in action",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four stages in the development of a new product.",pts:[]},
  {id:"bh10",kind:"bus_long_nee",area:"Unit 7 · International environment",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four benefits for Irish business of Ireland’s membership of the European Union.",pts:[]},
  {id:"bh11",kind:"bus_long_nee",area:"Unit 6 · Domestic environment",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four ways a business can show corporate social responsibility.",pts:[]},
  {id:"bh12",kind:"bus_short",area:"Short questions",max:10,label:"Short question · 10 marks",title:"Explain the term ‘break-even point’ and say why it is useful to a business.",pts:["Explain the term", "Why it is useful"],marks:[6, 4]},
  {id:"bh13",kind:"bus_short",area:"Short questions",max:10,label:"Short question · 10 marks",title:"Distinguish between a private limited company and a public limited company.",pts:["Private limited company", "Public limited company"],marks:[5, 5]}
);
S.OL.tasks.push(
  {id:"bo6",kind:"bus_long_nee",area:"Unit 1 · People in business",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four rights consumers have when they buy goods.",pts:[]},
  {id:"bo7",kind:"bus_long_ne",area:"Unit 3 · Managing I",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four skills a good manager needs.",pts:[]},
  {id:"bo8",kind:"bus_long_ne",area:"Unit 4 · Managing II",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four stages in the recruitment and selection of staff.",pts:[]},
  {id:"bo9",kind:"bus_long_nee",area:"Unit 5 · Business in action",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline the four elements of the marketing mix, with an example of each.",pts:[]},
  {id:"bo10",kind:"bus_long_nee",area:"Unit 7 · International environment",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four benefits for Ireland of being a member of the European Union.",pts:[]},
  {id:"bo11",kind:"bus_short",area:"Short questions",max:10,label:"Short question · 10 marks",title:"Explain what is meant by a trade union and give one of its functions.",pts:["Explain the term", "One function"],marks:[6, 4]},
  {id:"bo12",kind:"bus_long_nee",area:"Unit 6 · Domestic environment",max:20,label:"Long question · 4 points × (Name 2 + Explain 2 + Example 1)",title:"Outline four ways a business benefits its local community.",pts:[]}
);
})();

// ── Warm-ups for every unit (6 Nov 2026) ──
(function(){ const S = LOOPS_SUBJECTS.bus; const I = [
  {id:"bu1",skill:"Key terms",type:"mcq",q:"A stakeholder is…",opts:["Anyone with an interest in a business", "Only the owner", "Only the customers", "A type of share"],a:0,area:"Unit 1 · People in business"},
  {id:"bu2",skill:"Key terms",type:"mcq",q:"Under the Consumer Rights Act 2022, goods must be…",opts:["Of satisfactory quality, fit for purpose and as described", "Cheaper than last year", "Made in Ireland", "Sold with a free gift"],a:0,area:"Unit 1 · People in business"},
  {id:"bu3",skill:"Key terms",type:"mcq",q:"The Workplace Relations Commission (WRC) helps to…",opts:["Resolve disputes between employers and employees", "Collect taxes", "Set interest rates", "Run the stock exchange"],a:0,area:"Unit 1 · People in business"},
  {id:"bu4",skill:"Key terms",type:"mcq",q:"An entrepreneur is someone who…",opts:["Takes the risk of setting up a business to make a profit", "Works for a large company only", "Lends money to banks", "Manages a public service"],a:0,area:"Unit 2 · Enterprise"},
  {id:"bu5",skill:"Key terms",type:"mcq",q:"Intrapreneurship means…",opts:["Enterprise shown by employees inside a business", "Starting a business abroad", "A business with no employees", "Government enterprise grants"],a:0,area:"Unit 2 · Enterprise"},
  {id:"bu6",skill:"Key terms",type:"mcq",q:"Which is a characteristic of an entrepreneur?",opts:["Willing to take risks", "Avoids all decisions", "Dislikes change", "Works only alone"],a:0,area:"Unit 2 · Enterprise"},
  {id:"bu7",skill:"Key terms",type:"mcq",q:"Planning, organising and controlling are management…",opts:["Activities", "Skills", "Products", "Sources of finance"],a:0,area:"Unit 3 · Managing I"},
  {id:"bu8",skill:"Key terms",type:"mcq",q:"Theory Y (McGregor) assumes workers…",opts:["Enjoy work and can be trusted", "Dislike work and must be controlled", "Want only money", "Never take responsibility"],a:0,area:"Unit 3 · Managing I"},
  {id:"bu9",skill:"Key terms",type:"mcq",q:"Maslow’s highest need is…",opts:["Self-actualisation", "Safety", "Social", "Physiological"],a:0,area:"Unit 3 · Managing I"},
  {id:"bu10",skill:"Key terms",type:"mcq",q:"The first stage of recruitment is usually…",opts:["Identifying the vacancy and writing a job description", "The interview", "Induction", "Paying wages"],a:0,area:"Unit 4 · Managing II"},
  {id:"bu11",skill:"Key terms",type:"mcq",q:"A cash flow forecast shows…",opts:["Expected money in and out over the coming months", "Last year’s profit", "The value of shares", "The company’s debts only"],a:0,area:"Unit 4 · Managing II"},
  {id:"bu12",skill:"Key terms",type:"mcq",q:"Which is a short-term source of finance?",opts:["Bank overdraft", "Debenture", "Equity capital", "Retained earnings over ten years"],a:0,area:"Unit 4 · Managing II"},
  {id:"bu13",skill:"Key terms",type:"mcq",q:"The four Ps of the marketing mix are product, price, place and…",opts:["Promotion", "Profit", "People", "Planning"],a:0,area:"Unit 5 · Business in action"},
  {id:"bu14",skill:"Key terms",type:"mcq",q:"Market research done by collecting new information yourself is called…",opts:["Field (primary) research", "Desk research", "Product screening", "Branding"],a:0,area:"Unit 5 · Business in action"},
  {id:"bu15",skill:"Key terms",type:"mcq",q:"Organic growth means a business grows by…",opts:["Expanding from its own resources", "Merging with another firm", "Taking over a rival", "Selling shares abroad"],a:0,area:"Unit 5 · Business in action"},
  {id:"bu16",skill:"Key terms",type:"mcq",q:"Farming, fishing and forestry are…",opts:["Primary sector industries", "Secondary sector industries", "Tertiary sector industries", "Public services"],a:0,area:"Unit 6 · Domestic environment"},
  {id:"bu17",skill:"Key terms",type:"mcq",q:"A co-operative is owned by…",opts:["Its members, with one vote each", "The government", "A single shareholder", "Its bank"],a:0,area:"Unit 6 · Domestic environment"},
  {id:"bu18",skill:"Key terms",type:"mcq",q:"Corporate social responsibility means a business…",opts:["Acts ethically towards society and the environment", "Pays no tax", "Sells only online", "Has no employees"],a:0,area:"Unit 6 · Domestic environment"},
  {id:"bu19",skill:"Key terms",type:"mcq",q:"A tariff is…",opts:["A tax on imported goods", "A grant for exporters", "A type of loan", "A trade union"],a:0,area:"Unit 7 · International environment"},
  {id:"bu20",skill:"Key terms",type:"mcq",q:"The European Central Bank sets…",opts:["Interest rates for the euro area", "Irish income tax", "Wages in Ireland", "EU tariffs on Ireland only"],a:0,area:"Unit 7 · International environment"},
  {id:"bu21",skill:"Key terms",type:"mcq",q:"A transnational company…",opts:["Operates in many countries", "Sells only in Ireland", "Is run by the EU", "Has one shop"],a:0,area:"Unit 7 · International environment"},
  {id:"bu22",skill:"ABQ skills",type:"mcq",q:"In an ABQ answer, ‘linking’ means…",opts:["Connecting each point to evidence in the case", "Repeating the question", "Writing a heading", "Giving a definition only"],a:0},
  {id:"bu23",skill:"ABQ skills",type:"mcq",q:"In an ABQ, ‘evaluate’ asks you to…",opts:["Give your judgement, with a reason", "Copy a line from the case", "Name the business", "Define a term"],a:0}
];
S.HL.items = S.HL.items.concat(I); S.OL.items = S.OL.items.concat(I);
S.OL.tasks.push({id:"bo13",kind:"bus_long_ne",area:"Unit 2 · Enterprise",max:20,label:"Long question · 4 points × (Name 2 + Explain 3)",title:"Explain four characteristics of an entrepreneur.",pts:[]});
})();

// ═══════════════════════════════════════════════
// NEW COURSE (10 Nov 2026): LC Business specification, first examined June 2027.
// Written paper 60% (2½ hours, 300 marks): Q1 "The Business World" (90, compulsory, a business story that grows part by part)
// + any 3 of Q2–Q5 (70 each). The Business Alive Investigative Study (AAC, 40%) is coursework and is not covered.
// No official marking scheme for the new course yet: marked as SEC Business always has (point stated, explained, applied).
// Every old question whose topic is still on the new course is kept, moved into the four strands; ratios are gone from the course.
// ═══════════════════════════════════════════════
(function(){
const S = LOOPS_SUBJECTS.bus;
const Q1 = "Question 1 · The Business World", ENV = "Exploring the business environment", ENT = "Understanding enterprise", LEAD = "Leading in business", INF = "Informed decisions";
S.native = "New course, 2027";
S.HL.source = "Styled on the SEC sample papers for the new course (first exam 2027): Q1 business story (90) + any three of Q2–Q5 (70 each). No official marking scheme yet: marked as SEC Business always has.";
S.OL.source = S.HL.source;

// Off the course now: liquidity ratios and profit margins (they live in Accounting)
const GONE = ["bc2","bc3","bc4","bc6"];
// Every kept warm-up, into its strand
const ITEM_STRAND = {bk1:ENT,bk2:ENT,bk3:LEAD,bk4:LEAD,bk5:ENT,bk6:INF,bk7:INF,bk8:LEAD,bk9:LEAD,bk10:ENV,bk11:INF,bk12:INF,bc1:ENT,bc5:ENT,bc7:ENT,bc8:ENT,bc9:INF,
  bw1:ENT,bw2:ENT,bw3:LEAD,bw4:ENT,bw5:INF,bw6:INF,bw7:ENT,bm1:LEAD,bm2:INF,bm3:ENV,bm4:ENT,bm5:LEAD,bo1:ENT,bo2:LEAD,bo3:ENT,bt1:INF,bt2:ENT,bt3:ENV,bt4:ENT,bt5:ENV,bt6:ENT,
  bk13:ENV,bk14:ENV,bk15:ENT,bk16:ENT,bk17:ENT,bk18:ENT,bk19:LEAD,bk20:INF,bk21:INF,bk22:ENV,bk23:ENV,bk24:ENT,bk25:LEAD,bk26:LEAD,
  bu1:ENV,bu2:INF,bu3:INF,bu4:ENT,bu5:LEAD,bu6:ENT,bu7:LEAD,bu8:LEAD,bu9:LEAD,bu10:LEAD,bu11:ENT,bu12:ENT,bu13:ENT,bu14:ENT,bu15:ENT,bu16:ENV,bu17:ENV,bu18:ENV,bu19:ENV,bu20:ENV,bu21:ENV,bu22:Q1,bu23:Q1};
const TASK_STRAND = {bh1:LEAD,bh2:ENT,bh3:ENV,bh4:LEAD,bh5:LEAD,bh6:ENV,bh7:LEAD,bh8:LEAD,bh9:ENT,bh10:ENV,bh11:ENV,bh12:ENT,bh13:ENV,
  bo1:ENT,bo2:ENT,bo3:ENT,bo4:INF,bo5:ENT,bo6:INF,bo7:LEAD,bo8:LEAD,bo9:ENT,bo10:ENV,bo11:INF,bo12:ENV,bo13:ENT};
const tidyItems = arr => arr.filter(i => !GONE.includes(i.id)).map(i => {
  const o = Object.assign({}, i, {strand: ITEM_STRAND[i.id] || i.strand});
  if (i.id === "bu22") Object.assign(o, {skill:"Question 1 skills", q:"In Question 1, ‘refer to the story’ means…", opts:["Back up each point with a fact from the story","Repeat the question","Write a heading","Give a definition only"]});
  if (i.id === "bu23") Object.assign(o, {skill:"Question 1 skills", q:"When a question asks you to ‘evaluate’, you should…", opts:["Give your judgement, with a reason", "Copy a line from the story", "Name the business", "Define a term"]});
  return o; });
// Old-format questions stay as extra practice, with honest labels
const tidyTasks = arr => arr.map(t => Object.assign({}, t, {strand: TASK_STRAND[t.id] || t.strand,
  label: "Practice · " + t.label.replace(/^ABQ/, "Story question").replace(/^Long question/, "Long question").replace(/^Short question/, "Short question")}));

const STORY = "GLAS ROASTERS. Ciara and Tomás Ó Briain started Glas Roasters in Galway in 2019, roasting coffee in a converted shed and selling at farmers’ markets. Today Glas has three cafés in Galway and 34 staff, and it supplies beans to 60 restaurants and hotels in the west. Ciara leads product and marketing; Tomás runs finance and operations.\n\nIn 2025 Glas launched a subscription service: customers get fresh beans posted every month, ordered through the Glas app. Subscribers have grown to 2,400, though some say the app is hard to use.\n\nCosts are rising. The minimum wage went up again in January 2026, and the price of green coffee beans has nearly doubled since 2023 after poor harvests in Brazil and Vietnam. Glas has raised its prices twice in a year.\n\nGlas wants to be a sustainable business. It already uses compostable cups and gives used coffee grounds to local gardeners, and Tomás is looking at solar panels for the roastery.\n\nThe owners now face a big decision: open a fourth café in Dublin, paid for partly with a bank loan, or build a drive-through on the edge of Galway. Some long-serving staff worry that the business is growing too fast and losing its ‘family feel’.";

const T = (id, strand, title, parts, story) => { const max = parts.reduce((t,p) => t + p[1], 0);
  return Object.assign({id, kind:"bus27_parts", strand, max, title,
    label: (story ? Q1 : "Questions 2–5 · " + strand) + " · " + max + " marks",
    pts: parts.map(p => p[0]), marks: parts.map(p => p[1]), credit: parts.map(p => p[2])}, story ? {case: STORY, caseName: "business story"} : {}); };

const NEW_ITEMS = [
  {id:"bn1",strand:Q1,skill:"Question 1 skills",type:"mcq",q:"On a power–interest grid, a stakeholder with HIGH power and HIGH interest should be…",opts:["Managed closely (a key player)","Monitored","Kept informed","Kept satisfied"],a:0},
  {id:"bn2",strand:Q1,skill:"Question 1 skills",type:"mcq",q:"On a power–interest grid, a stakeholder with HIGH interest but LOW power should be…",opts:["Kept informed","Managed closely","Kept satisfied","Ignored"],a:0},
  {id:"bn3",strand:Q1,skill:"Question 1 skills",type:"mcq",q:"On a power–interest grid, a stakeholder with HIGH power but LOW interest should be…",opts:["Kept satisfied","Kept informed","Monitored only","Managed closely"],a:0},
  {id:"bn4",strand:Q1,skill:"Question 1 skills",type:"mcq",q:"Force-field analysis weighs up…",opts:["The forces driving a change against the forces resisting it","Costs against revenue","Strengths against weaknesses","Supply against demand"],a:0},
  {id:"bn5",strand:Q1,skill:"Question 1 skills",type:"mcq",q:"A cost-benefit analysis…",opts:["Compares the costs and benefits of a decision to reach a recommendation","Lists the business’s costs only","Measures customer satisfaction","Calculates break-even"],a:0},
  {id:"bn6",strand:Q1,skill:"Question 1 skills",type:"mcq",q:"ESG stands for…",opts:["Environmental, Social and Governance","Economic, Sales and Growth","Employees, Shareholders and Government","Ethics, Strategy and Goals"],a:0},
  {id:"bn7",strand:ENV,skill:"Business environment",type:"mcq",q:"An EU regulation…",opts:["Applies directly as law in every member state","Must be written into Irish law before it applies","Is advice only","Applies only to the euro area"],a:0},
  {id:"bn8",strand:ENV,skill:"Business environment",type:"mcq",q:"An EU directive…",opts:["Sets a goal that each member state must reach through its own laws","Applies directly with no national law","Is a court ruling","Is a tax"],a:0},
  {id:"bn9",strand:ENV,skill:"Business environment",type:"mcq",q:"The balance of trade is…",opts:["Exports of goods minus imports of goods","All money coming into the country","Exports of services only","Government income minus spending"],a:0},
  {id:"bn10",strand:ENV,skill:"Business environment",type:"mcq",q:"Foreign direct investment (FDI) is…",opts:["A foreign company setting up or investing in a business in Ireland","Irish people buying foreign shares online","An EU grant","A loan from a foreign bank"],a:0},
  {id:"bn11",strand:ENV,skill:"Business environment",type:"mcq",q:"Which Irish agency works to attract foreign direct investment?",opts:["IDA Ireland","The CCPC","The Revenue Commissioners","The WRC"],a:0},
  {id:"bn12",strand:ENV,skill:"Business environment",type:"mcq",q:"Mercosur is a trading bloc in…",opts:["South America","Asia","Africa","North America"],a:0},
  {id:"bn13",strand:ENV,skill:"Business environment",type:"mcq",q:"Inflation is…",opts:["A general rise in prices over time","A fall in unemployment","A rise in exports","A cut in interest rates"],a:0},
  {id:"bn14",strand:ENV,skill:"Business environment",type:"mcq",q:"Globalisation makes countries’ economies more…",opts:["Interdependent","Isolated","Self-sufficient","Equal"],a:0},
  {id:"bn15",strand:ENV,skill:"Business environment",type:"mcq",q:"Governance in an organisation means…",opts:["How it is directed and controlled, and who it answers to","Its marketing plan","Its government grants","Its tax returns"],a:0},
  {id:"bn16",strand:ENV,skill:"Business environment",type:"mcq",q:"A not-for-profit enterprise…",opts:["Puts any surplus back into its purpose, such as a charity","Is always owned by the State","Pays dividends to shareholders","Cannot employ staff"],a:0},
  {id:"bn17",strand:ENT,skill:"Enterprise",type:"match",q:"STEEPLE: match the letter to its heading.",pairs:[["S","Social"],["T","Technological"],["P","Political"],["L","Legal"]]},
  {id:"bn18",strand:ENT,skill:"Enterprise",type:"mcq",q:"Which is one of Porter’s five forces?",opts:["The threat of new entrants","The price of shares","The number of employees","Interest rates"],a:0},
  {id:"bn19",strand:ENT,skill:"Enterprise",type:"mcq",q:"A USP is…",opts:["A unique selling point: what makes a product stand out from rivals","A universal sales price","A type of loan","A union rule"],a:0},
  {id:"bn20",strand:ENT,skill:"Enterprise",type:"mcq",q:"Design thinking is…",opts:["A people-centred way of developing, testing and improving ideas","A course in logo design","A type of market research report","A government grant"],a:0},
  {id:"bn21",strand:ENT,skill:"Enterprise",type:"mcq",q:"A feasibility study checks…",opts:["Whether a business idea is likely to work and make money","How many staff are absent","Last year’s accounts","The tax owed"],a:0},
  {id:"bn22",strand:ENT,skill:"Enterprise",type:"mcq",q:"The business model canvas…",opts:["Sets out on one page how a business creates, delivers and earns value","Is a painting for the office","Is a legal contract","Is a cash flow forecast"],a:0},
  {id:"bn23",strand:ENT,skill:"Enterprise",type:"mcq",q:"A freemium business model…",opts:["Gives a basic version free and charges for premium features","Charges nothing ever","Sells only to businesses","Rents out equipment"],a:0},
  {id:"bn24",strand:ENT,skill:"Enterprise",type:"mcq",q:"A platform business model…",opts:["Connects buyers and sellers and earns from the transactions","Makes and sells its own products only","Is run by the government","Has no customers"],a:0},
  {id:"bn25",strand:ENT,skill:"Enterprise",type:"short",q:"Opening cash €3,000. Receipts €8,000. Payments €9,500. Closing cash (€)?",a:["1500","1,500","€1500","€1,500"],why:"3,000 + 8,000 − 9,500 = €1,500."},
  {id:"bn26",strand:ENT,skill:"Enterprise",type:"mcq",q:"Taking out insurance is a way of managing risk by…",opts:["Transferring it to an insurer","Avoiding it completely","Ignoring it","Increasing it"],a:0},
  {id:"bn27",strand:LEAD,skill:"Leading",type:"mcq",q:"Leadership, more than management, is about…",opts:["Setting a vision and inspiring people","Checking budgets line by line","Filling in rosters","Paying wages"],a:0},
  {id:"bn28",strand:LEAD,skill:"Leading",type:"mcq",q:"A corporate wellness programme aims to…",opts:["Support employees’ physical and mental wellbeing","Cut wages","Measure sales","Replace training"],a:0},
  {id:"bn29",strand:LEAD,skill:"Leading",type:"mcq",q:"A 360-degree appraisal gathers feedback from…",opts:["Managers, colleagues, the staff they manage and sometimes customers","The manager only","The employee only","Customers only"],a:0},
  {id:"bn30",strand:LEAD,skill:"Leading",type:"mcq",q:"Blended (hybrid) working means…",opts:["Splitting work time between the workplace and home","Working two jobs","Working nights only","Working without a contract"],a:0},
  {id:"bn31",strand:LEAD,skill:"Leading",type:"mcq",q:"Human capital is…",opts:["The knowledge, skills and experience of the workforce","The money in the bank","The buildings and machines","The share capital"],a:0},
  {id:"bn32",strand:LEAD,skill:"Leading",type:"mcq",q:"A contingency plan is…",opts:["A back-up plan for if something goes wrong","A five-year sales plan","A marketing campaign","A staff rota"],a:0},
  {id:"bn33",strand:LEAD,skill:"Leading",type:"mcq",q:"People often resist change in a workplace because of…",opts:["Fear of the unknown or for their job security","Too much information","High wages","Good communication"],a:0},
  {id:"bn34",strand:INF,skill:"Informed decisions",type:"mcq",q:"A central bank digital currency, such as a possible digital euro, is…",opts:["Digital money issued and backed by a central bank","A cryptocurrency created by private users","A credit card","A type of share"],a:0},
  {id:"bn35",strand:INF,skill:"Informed decisions",type:"mcq",q:"In Ireland, your credit history is held on…",opts:["The Central Credit Register (Central Bank)","The Revenue database","The CCPC register","The Companies Office register"],a:0},
  {id:"bn36",strand:INF,skill:"Informed decisions",type:"mcq",q:"The gig economy is…",opts:["Short-term, task-based work, often found through apps","Working for the State","A music business","Full-time permanent jobs"],a:0},
  {id:"bn37",strand:INF,skill:"Informed decisions",type:"mcq",q:"Phishing is…",opts:["A fake email or message trying to trick you into giving personal or bank details","A type of savings account","A legal way to borrow","A stock market term"],a:0},
  {id:"bn38",strand:INF,skill:"Informed decisions",type:"mcq",q:"The GDPR protects…",opts:["People’s personal data","Workers’ wages","Product safety","Shop opening hours"],a:0},
  {id:"bn39",strand:INF,skill:"Informed decisions",type:"mcq",q:"Buying online from an EU trader, you usually have a cooling-off period of…",opts:["14 days","2 days","30 days","No cooling-off period"],a:0},
  {id:"bn40",strand:INF,skill:"Informed decisions",type:"mcq",q:"The APR of a loan shows…",opts:["The yearly cost of borrowing, including interest and charges, as a percentage","The amount you borrow","The bank’s profit","Your credit score"],a:0},
  {id:"bn41",strand:INF,skill:"Informed decisions",type:"mcq",q:"Fintech means…",opts:["Technology used to provide financial services, such as payment apps","A type of bank loan","Finance taught in schools","Fish farming"],a:0},
  {id:"bn42",strand:INF,skill:"Informed decisions",type:"mcq",q:"Your risk tolerance is…",opts:["How much risk of losing money you are willing to accept","Your bank’s interest rate","Your credit limit","Your insurance excess"],a:0}
];

const HL_NEW = [
  T("bq1", Q1, "(a) Conduct a stakeholder mapping exercise for Glas Roasters’ plan to open a café in Dublin. Identify four stakeholders and prioritise them using power and interest.", [
    ["Four stakeholders, each placed on the power–interest grid with a reason from the story", 16, "4 stakeholders × 4: a relevant stakeholder named 1 // placed correctly (manage closely / keep satisfied / keep informed / monitor) 2 // reason linked to the story 1. e.g. bank (high power, high interest: loan), long-serving staff (high interest: ‘family feel’), Dublin customers, owners, suppliers, local council (planning)."]], true),
  T("bq2", Q1, "(b) Explain how two economic indicators could affect Glas Roasters.", [
    ["Two economic indicators and their effect on Glas", 12, "2 × 6: indicator named, e.g. inflation / wage rates / interest rates / exchange rates / unemployment 2 // effect explained 2 // linked to the story (bean prices doubled, minimum wage rise, bank loan repayments, imports priced in dollars) 2."]], true),
  T("bq3", Q1, "(c) Use force-field analysis to examine Glas Roasters’ plan to open a café in Dublin.", [
    ["Two driving forces, explained with the story", 6, "2 × 3: e.g. growing brand and 2,400 subscribers / bigger market in Dublin / supplier base already strong."],
    ["Two restraining forces, explained with the story", 6, "2 × 3: e.g. rising costs / loan repayments / staff fear of losing the ‘family feel’ / competition in Dublin."],
    ["A reasoned conclusion", 3, "Which forces are stronger, with a recommendation and a reason."]], true),
  T("bq4", Q1, "(d) Outline the three factors covered in an ESG report, and evaluate how well Glas Roasters performs on one of them.", [
    ["The three ESG factors", 9, "3 × 3: Environmental (impact on the planet: energy, waste, emissions) // Social (people: staff, community, customers) // Governance (how it is run: leadership, accountability, transparency)."],
    ["Evaluate Glas on one factor", 6, "Evidence from the story (compostable cups, grounds to gardeners, solar plans) 3 // a judgement with a reason 3."]], true),
  T("bq5", Q1, "(e) Glas sells beans by subscription. Analyse two advantages and one challenge of this business model for Glas.", [
    ["Two advantages", 8, "2 × 4: named 1, explained 2, linked to the story 1 (e.g. regular, predictable income; loyal customers; data on buyers; easier to plan roasting)."],
    ["One challenge", 4, "Named 1, explained 2, linked 1 (e.g. app hard to use, customers cancelling, postage costs rising)."]], true),
  T("bq6", Q1, "(f) Carry out a cost-benefit analysis of paying for the Dublin café partly with a bank loan, and make a recommendation.", [
    ["Two costs", 6, "2 × 3: e.g. interest and repayments while costs are rising / security needed / risk if the café fails."],
    ["Two benefits", 6, "2 × 3: e.g. owners keep full ownership and control / interest is tax-deductible / faster growth / no dilution."],
    ["Recommendation", 3, "A clear decision with a reason drawn from the costs and benefits."]], true),
  T("bh14", ENT, "An Irish start-up plans to rent out electric bikes by monthly subscription in cities across the EU. Carry out a STEEPLE analysis for the start-up.", [
    ["One factor under any five STEEPLE headings, each explained", 15, "5 × 3: heading correct 1 + relevant factor explained 2. Social, Technological, Economic, Environmental, Political, Legal, Ethical (e.g. demand for green transport; app and battery tech; interest rates; emissions targets; city cycling policy; safety and data law; fair treatment of riders)."]]),
  T("bh15", ENT, "A new coffee shop is opening on a busy Dublin street.", [
    ["Use Porter’s five forces to analyse the competition it faces", 15, "5 × 3: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, rivalry among existing competitors, each applied to the coffee shop."],
    ["Identify one possible competitive advantage", 3, "e.g. unique product / location / price / service / brand, with a reason."]]),
  T("bh16", ENT, "Technology-driven business models.", [
    ["Explain one technology-driven business model, with an example", 6, "Model named 2 // key features explained 2 // real example 2 (e.g. subscription: Netflix; platform: Airbnb; freemium: Spotify; on-demand: Deliveroo)."],
    ["Explain a second model, with an example", 6, "As above, for a different model."],
    ["Compare the two models", 3, "One clear difference or similarity, e.g. how each earns its money."]]),
  T("bh17", ENV, "In one year a country exports goods worth €230bn and imports goods worth €140bn. It exports services worth €340bn and imports services worth €360bn.", [
    ["(a) Calculate the balance of trade", 6, "230 − 140 3 // = €90bn surplus 3."],
    ["(b) Calculate the balance of payments on goods and services", 6, "(230 + 340) − (140 + 360) 3 // = €70bn surplus 3."],
    ["(c) Distinguish between the balance of trade and the balance of payments", 3, "Trade: goods (visibles) only; payments: all goods, services and other money flows with the rest of the world."]]),
  T("bh18", ENV, "EU law and Irish business.", [
    ["(a) Distinguish between an EU regulation and an EU directive", 6, "Regulation: binding in full and applies directly in every member state 3 // directive: sets a goal; each state passes its own law to reach it by a deadline 3."],
    ["(b) Evaluate the impact on Irish businesses of one EU regulation you have studied", 9, "Regulation named with its purpose (e.g. GDPR: protects personal data) 3 // two effects on business explained 2 × 2 = 4 // a judgement 2."]]),
  T("bh19", ENV, "Foreign direct investment.", [
    ["(a) Explain foreign direct investment (FDI)", 3, "A foreign company investing in Ireland, e.g. setting up a factory or office."],
    ["(b) Outline two ways the Irish government promotes FDI", 6, "2 × 3: e.g. IDA Ireland / 12.5–15% corporation tax / grants / educated English-speaking workforce / access to the EU single market."],
    ["(c) Evaluate FDI’s contribution to the Irish economy", 6, "Two contributions or risks explained (jobs, tax revenue, exports, skills; over-reliance, housing pressure) 4 // a judgement 2."]]),
  T("bh20", LEAD, "Remote and blended working.", [
    ["Two opportunities", 8, "2 × 4, for employers or employees: e.g. wider talent pool, lower office costs, no commute, better work–life balance; each named 1, explained 3."],
    ["Two challenges", 8, "2 × 4: e.g. isolation, weaker team culture, harder to supervise, data security, blurred work–home line; each named 1, explained 3."]]),
  T("bh21", LEAD, "Change in organisations.", [
    ["(a) Analyse two reasons why employees resist change", 8, "2 × 4: e.g. fear of the unknown, job loss, loss of status, new skills needed, poor communication; named 1, analysed 3."],
    ["(b) Outline two approaches that help overcome resistance to change", 8, "2 × 4: e.g. communicate the reasons early, involve staff, training and support, incentives, Kotter’s eight steps; named 1, explained 3."]]),
  T("bh22", LEAD, "A business is hit by a cyber-attack that shuts down its online ordering.", [
    ["(a) Explain contingency planning", 3, "Planning in advance how to respond to a crisis or unexpected event."],
    ["(b) Discuss three factors to consider when developing a contingency plan", 9, "3 × 3: e.g. identify the risks / who is responsible / communication with customers and staff / back-ups and alternative systems / cost / testing and review."]]),
  T("bh23", INF, "Credit ratings.", [
    ["(a) Outline how a credit rating is established", 3, "Lenders report loans and repayments to the Central Credit Register, building a record of how you borrow and repay."],
    ["(b) Two factors that affect a credit rating", 6, "2 × 3: e.g. repaying on time, missed payments, amount of debt, number of applications, length of history."],
    ["(c) Two consequences of a poor credit rating", 6, "2 × 3: e.g. loans refused, higher interest, smaller limits, difficulty getting a mortgage or phone contract."]]),
  T("bh24", INF, "The ECB is preparing a digital euro.", [
    ["(a) Describe a central bank digital currency (CBDC)", 3, "Digital money issued and backed by a central bank, with the same value as cash."],
    ["(b) Two differences between a CBDC and crypto assets", 6, "2 × 3: e.g. backed by a central bank vs no backing; stable value vs volatile; regulated vs largely unregulated; legal tender vs not."],
    ["(c) Assess one impact on consumers and one on businesses", 6, "Consumer impact explained 3 // business impact explained 3 (e.g. cheap, safe payments; privacy concerns; lower card fees; new systems needed)."]]),
  T("bh25", INF, "The gig economy.", [
    ["Discuss two opportunities and two challenges of the gig economy for workers", 16, "4 × 4: opportunities such as flexibility, extra income, choosing work; challenges such as no guaranteed income, no sick pay or pension, weak employment rights, algorithm control. Named 1, discussed 3."]]),
  T("bh26", INF, "Being an informed employee.", [
    ["(a) Outline three rights employees have under current employment legislation", 9, "3 × 3: e.g. minimum wage, written terms of employment, annual leave, rest breaks, protection from unfair dismissal, equality (nine grounds), sick leave."],
    ["(b) Describe two roles of a trade union in the workplace", 6, "2 × 3: e.g. negotiate pay and conditions, represent members in disputes, protect jobs, advise members."]]),
  T("bh27", ENT, "A café’s cash flow forecast. Opening cash in January: €4,000. Receipts: Jan €18,000, Feb €15,000, Mar €21,000. Payments: Jan €20,000, Feb €19,000, Mar €18,000.", [
    ["(a) Calculate the closing cash for each month", 9, "Jan €2,000 3 // Feb −€2,000 3 // Mar €1,000 3."],
    ["(b) Identify the problem and recommend two actions", 9, "Cash shortfall in February 3 // two actions explained 2 × 3: e.g. arrange an overdraft, delay a payment, chase debtors, cut or spread costs, run a promotion to lift sales."]]),
  T("bh28", LEAD, "Employee appraisal.", [
    ["(a) Describe effective employee appraisal", 3, "A regular, fair, two-way review of performance against agreed goals, with feedback and a plan."],
    ["(b) Analyse how two approaches to appraisal can support motivation", 10, "2 × 5: approach named 1 (360-degree, self-appraisal, peer review, management by objectives) // how it works 2 // effect on motivation 2."]]),
  T("bh29", ENT, "Developing a business idea.", [
    ["(a) Outline design thinking", 6, "A people-centred, iterative approach 3 // stages such as empathise, define, ideate, prototype, test 3."],
    ["(b) Explain the importance of a feasibility study, naming two areas it examines", 9, "Why it matters: avoids wasting money on an idea that will not work 3 // two areas 2 × 3: market (demand), technical (can it be made), financial (costs, profit)."]])
];

const OL_NEW = [
  T("bq7", Q1, "(a) Name three stakeholders of Glas Roasters and explain the interest each one has in the business.", [
    ["Three stakeholders and their interests", 12, "3 × 4: stakeholder named 1 // interest explained 2 // linked to the story 1. e.g. staff (jobs, ‘family feel’), customers (coffee, the app), the bank (loan repaid), suppliers, the owners."]], true),
  T("bq8", Q1, "(b) Glas has raised its prices twice in a year. Using the story, explain two reasons why its costs have risen.", [
    ["Two reasons from the story", 8, "2 × 4: higher wages after the minimum wage rise // green coffee bean prices nearly doubled after poor harvests. Named 2, explained 2."]], true),
  T("bq9", Q1, "(c) Describe three ways Glas Roasters is trying to be a sustainable business.", [
    ["Three ways, from the story", 9, "3 × 3: compostable cups // coffee grounds given to local gardeners // looking at solar panels (accept supplying local businesses, cutting waste)."]], true),
  T("bq10", Q1, "(d) Explain two sources of finance Glas could use to open a new café, and say which one you would recommend.", [
    ["Two sources of finance", 8, "2 × 4: e.g. bank loan, retained earnings, new shares/investor, leasing, grant; named 2, explained 2."],
    ["Your recommendation", 4, "A choice with a reason linked to Glas."]], true),
  T("bq11", Q1, "(e) Outline two advantages for Glas of selling coffee beans by subscription.", [
    ["Two advantages", 8, "2 × 4: e.g. steady monthly income, loyal customers, knows how much to roast, sells beyond Galway; named 2, outlined 2."]], true),
  T("bo14", ENT, "A business is launching a new reusable water bottle for teenagers.", [
    ["Develop its marketing mix: one point under each of the four Ps", 12, "4 × 3: product, price, place, promotion, each suited to teenagers."],
    ["State its unique selling point (USP)", 3, "A clear feature that makes it stand out, e.g. keeps drinks cold 24 hours, custom colours."]]),
  T("bo15", ENT, "Market research.", [
    ["(a) Distinguish between primary and secondary research", 6, "Primary: collecting new information yourself (field research) 3 // secondary: using information that already exists (desk research) 3."],
    ["(b) Give one example of each", 4, "Primary: survey / interview / observation / taste test 2 // secondary: CSO figures / reports / internet / company records 2."]]),
  T("bo16", ENV, "Ireland and the world.", [
    ["(a) Explain what a trading bloc is", 3, "A group of countries that agree to reduce or remove trade barriers between them."],
    ["(b) Name one trading bloc, other than the EU, that matters to Irish businesses", 3, "e.g. USMCA (North America), Mercosur, ASEAN, the African Continental Free Trade Area."],
    ["(c) Outline two benefits for Irish businesses of EU membership", 6, "2 × 3: e.g. single market of 450 million customers, no tariffs, the euro (no currency risk), EU funding, free movement of workers."]]),
  T("bo17", ENV, "Forms of enterprise.", [
    ["Distinguish between public, private and not-for-profit enterprises, with an Irish example of each", 12, "3 × 4: explained 3 + example 1. Public: owned by the State (e.g. RTÉ, Irish Rail) // private: owned by individuals or shareholders for profit (e.g. a local shop, Ryanair) // not-for-profit: surplus goes back into its purpose (e.g. a charity, a GAA club)."]]),
  T("bo18", LEAD, "Leading and managing.", [
    ["(a) Give two differences between leadership and management", 8, "2 × 4: e.g. leaders set a vision, managers plan and organise; leaders inspire, managers control; leaders drive change, managers keep things running."],
    ["(b) Name one leadership style and describe it", 4, "Named 1 + described 3: democratic, autocratic, laissez-faire, transformational."]]),
  T("bo19", LEAD, "Communication at work.", [
    ["(a) Name three modes of communication used in a business", 6, "3 × 2: e.g. email, meetings, phone, video call, notice board, intranet, letter, reports."],
    ["(b) Explain two reasons why good communication matters", 6, "2 × 3: e.g. fewer mistakes, better motivation, faster decisions, less conflict, good customer service."]]),
  T("bo20", LEAD, "Wellbeing at work.", [
    ["(a) What is corporate wellness?", 3, "Supporting employees’ physical and mental health at work."],
    ["(b) Two ways an employer can promote wellness", 6, "2 × 3: e.g. flexible hours, gym or walking groups, healthy food, mental health supports (EAP), right to disconnect."],
    ["(c) How can wellness improve motivation?", 3, "Healthier, happier staff feel valued, so they work harder and stay longer."]]),
  T("bo21", INF, "Saving and borrowing.", [
    ["(a) Two factors to consider before borrowing money", 6, "2 × 3: e.g. the interest rate (APR), can you afford the repayments, the length of the loan, the purpose, other costs."],
    ["(b) Two reasons to save", 6, "2 × 3: e.g. emergencies, a big purchase, a house deposit, retirement, earning interest."],
    ["(c) Why should you compare the APR of different loans?", 3, "It shows the full yearly cost of borrowing, so you can find the cheapest."]]),
  T("bo22", INF, "Financial fraud.", [
    ["(a) What is financial fraud?", 3, "Using deception to take someone’s money or financial details."],
    ["(b) Name two types of financial fraud", 4, "2 × 2: e.g. phishing (email), smishing (text), vishing (call), card skimming, investment scams."],
    ["(c) Two ways consumers can protect themselves", 6, "2 × 3: e.g. never share PINs or passwords, check the sender, use two-factor authentication, check the Central Bank warning list, call the bank on a known number."]]),
  T("bo23", INF, "Buying online.", [
    ["(a) Two rights you have when buying online from an EU trader", 6, "2 × 3: e.g. 14-day cooling-off period, clear information on price and the trader, goods must be as described and fit for purpose, refund for faulty goods."],
    ["(b) What is the role of the CCPC?", 3, "Enforces consumer law and informs consumers of their rights."],
    ["(c) Give one way digital technology affects how consumers buy", 3, "e.g. online reviews, comparing prices instantly, targeted ads, buy-now-pay-later, impulse buying with one click."]]),
  T("bo24", ENT, "A small shop: opening cash €1,000. Receipts €6,000. Payments €7,500.", [
    ["(a) Calculate the closing cash. Show your working.", 6, "1,000 + 6,000 − 7,500 3 // = −€500 3."],
    ["(b) What problem does this show?", 3, "A cash shortage: it cannot pay all its bills."],
    ["(c) Suggest two solutions", 6, "2 × 3: e.g. an overdraft, delay a payment, collect money owed sooner, cut costs, boost sales."]]),
  T("bo25", INF, "The gig economy.", [
    ["(a) Explain the gig economy", 3, "Short-term, task-based work, often found through apps (e.g. food delivery)."],
    ["(b) Two advantages for workers", 4, "2 × 2: e.g. flexible hours, extra income, choose your jobs."],
    ["(c) Two disadvantages for workers", 4, "2 × 2: e.g. no guaranteed income, no sick pay or holidays, no pension, little job security."]]),
  T("bo26", ENV, "Stakeholders.", [
    ["(a) What is a stakeholder?", 3, "Anyone with an interest in, or affected by, a business."],
    ["(b) Give one example of conflict between two stakeholders", 4, "Two stakeholders named 2 // the conflict explained 2, e.g. workers want higher pay but owners want lower costs."],
    ["(c) Explain two ways the conflict could be resolved", 6, "2 × 3: e.g. negotiation, compromise, communication, the WRC, a third party."]]),
  T("bo27", ENT, "Risk in business.", [
    ["(a) Outline two risks a new business faces", 6, "2 × 3: e.g. not enough customers, running out of cash, competition, rising costs, theft or fire."],
    ["(b) Explain two ways a business can manage risk", 6, "2 × 3: e.g. insurance, market research, a business plan, keeping cash reserves, health and safety."]])
];

S.HL.items = tidyItems(S.HL.items).concat(NEW_ITEMS);
S.OL.items = tidyItems(S.OL.items).concat(NEW_ITEMS);
// New-course questions first, then the old ones as extra practice
S.HL.tasks = HL_NEW.concat(tidyTasks(S.HL.tasks));
S.OL.tasks = OL_NEW.concat(tidyTasks(S.OL.tasks));
})();
