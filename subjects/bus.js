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
