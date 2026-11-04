// ═══════════════════════════════════════════════
// LOOPS · JUNIOR CYCLE BUSINESS STUDIES — first version (4 Nov 2026)
// Styled on the SEC Junior Cycle papers (see the JC research in the Loops project).
// Warm-ups reuse the easier Leaving Cert Ordinary items where they fit; JC-specific banks grow next.
// ═══════════════════════════════════════════════
(function(){
const JC_GRADES = [["Distinction",85],["Higher Merit",70],["Merit",55],["Achieved",40],["Partially Achieved",20],["Not Graded",0]].map(([g,min]) => ({g,min}));
const TF = ["True","False"];
const LCB = LOOPS_SUBJECTS.bus.OL;
const keep = ["bk1","bk5","bk6","bk11","bk13","bk15","bk17","bk18","bk20","bc1","bc5","bc8","bc9","bw2","bw6","bw7","bm2","bt2","bt3","bt4","bt6","bm4"];
const ITEMS = LCB.items.filter(i => keep.includes(i.id)).map(i => Object.assign({}, i)).concat([
  {id:"jb1",skill:"Personal finance",type:"mcq",q:"A household budget compares…",opts:["Planned income and planned spending","Last year’s holidays","Bank interest rates only","Prices in two shops"],a:0},
  {id:"jb2",skill:"Personal finance",type:"short",q:"Income €2,400. Spending €2,150. What is the surplus (€)?",a:["250","€250"]},
  {id:"jb3",skill:"Personal finance",type:"mcq",q:"Discretionary spending is spending on…",opts:["Things you choose, like entertainment","Rent and loans you must pay","Tax","Insurance by law"],a:0},
  {id:"jb4",skill:"Personal finance",type:"mcq",q:"APR stands for…",opts:["Annual Percentage Rate","Average Price Rise","Annual Payment Return","Account Payment Record"],a:0},
  {id:"jb5",skill:"Personal finance",type:"short",q:"€500 saved at 2% simple interest for one year earns how much interest (€)?",a:["10","€10"]},
  {id:"jb6",skill:"Consumer",type:"mcq",q:"Under consumer law, goods must be…",opts:["Of merchantable quality and fit for purpose","Cheap","Made in Ireland","Sold with a free gift"],a:0},
  {id:"jb7",skill:"Enterprise",type:"mcq",q:"An entrepreneur takes…",opts:["A risk to start a business","A salary from the state","No responsibility","Only orders"],a:0},
  {id:"jb8",skill:"Accounts",type:"mcq",q:"In a cash book, money received goes on the…",opts:["Debit (left) side","Credit (right) side","Bottom line only","Front page"],a:0},
  {id:"jb9",skill:"Accounts",type:"short",q:"Sales €20,000; cost of sales €12,000. Gross profit (€)?",a:["8000","8,000","€8000","€8,000"]},
  {id:"jb10",skill:"Economy",type:"mcq",q:"Inflation means…",opts:["A general rise in prices","A fall in wages","More jobs","Lower taxes"],a:0}
]);
const CL = {
  id:"", builtin:true, title:"Junior Cycle Business Studies", subject:"Business Studies", cycle:"JC", level:"CL",
  source:"Styled on the SEC Junior Cycle Business Studies paper (common level: 15 short questions + 3 long questions × 60, all compulsory)", gradeBands: JC_GRADES, texts:{},
  items: ITEMS,
  tasks: [
    {id:"jbs1",kind:"jc_bus",section:"Section A",max:12,label:"Short questions · 2 × 6 marks",title:"Answer both.",pts:["(a) Explain the term ‘discretionary spending’ and give an example.","(b) Name two rights a consumer has when buying goods."],marks:[6,6]},
    {id:"jbs2",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"The Murphy household has a monthly income of €3,200. Fixed costs are €1,450, irregular costs €600 and discretionary costs €850.",pts:["(a) Calculate the monthly surplus or deficit.","(b) Suggest two ways the household could save money.","(c) Explain why a household should keep a budget."],marks:[9,9,12]},
    {id:"jbs3",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Aoife wants to start a small business making phone cases.",pts:["(a) Name three qualities of an entrepreneur.","(b) Explain two sources of finance she could use.","(c) Describe two ways she could do market research."],marks:[6,12,12]},
    {id:"jbs4",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"A shop’s figures: Sales €50,000; Cost of sales €30,000; Expenses €12,000.",pts:["(a) Calculate the gross profit.","(b) Calculate the net profit.","(c) Calculate the gross profit margin as a percentage.","(d) Suggest two ways to increase net profit."],marks:[6,6,6,12]},
    {id:"jbs5",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Banking.",pts:["(a) Explain the difference between a current account and a savings account.","(b) What is an overdraft? Give one advantage and one disadvantage.","(c) Explain what APR means and why it matters when borrowing."],marks:[10,10,10]}
  ],
  store: "loops_jc_bus_v1"
};
LOOPS_SUBJECTS.jc_bus = { name: "Business Studies", flag: "📊", colour: "bus", CL };
// ── Towards 20 marked questions and 40+ warm-ups (4 Nov 2026) ──
LOOPS_SUBJECTS.jc_bus.CL.items.push(
  {id:"jb11",skill:"Personal finance",type:"mcq",q:"Gross pay minus deductions equals…",opts:["Net pay", "Overtime", "Gross profit", "Income tax"],a:0},
  {id:"jb12",skill:"Personal finance",type:"mcq",q:"USC stands for…",opts:["Universal Social Charge", "Unified Savings Credit", "Union Social Contribution", "Usual Spending Cost"],a:0},
  {id:"jb13",skill:"Consumer",type:"mcq",q:"Which body helps consumers with their rights in Ireland?",opts:["The Competition and Consumer Protection Commission (CCPC)", "The Revenue Commissioners", "The Central Statistics Office", "The Road Safety Authority"],a:0},
  {id:"jb14",skill:"Consumer",type:"mcq",q:"A receipt is…",opts:["Proof of purchase", "A guarantee", "A refund", "A loan"],a:0},
  {id:"jb15",skill:"Enterprise",type:"mcq",q:"A sole trader…",opts:["Owns and runs a business alone, with unlimited liability", "Has many shareholders", "Is owned by the government", "Never pays tax"],a:0},
  {id:"jb16",skill:"Enterprise",type:"match",q:"Match the term to its meaning.",pairs:[["Market research", "Finding out what customers want"], ["Brand", "A name or symbol that identifies a product"], ["Advertising", "Paid messages that persuade people to buy"], ["Profit", "Income left after costs"]]},
  {id:"jb17",skill:"Accounts",type:"mcq",q:"In a household cash book, money received is recorded on the…",opts:["Debit (left) side", "Credit (right) side", "Bottom line only", "Top line only"],a:0},
  {id:"jb18",skill:"Economy",type:"mcq",q:"Inflation means…",opts:["A general rise in prices", "A fall in unemployment", "A rise in taxes", "More exports"],a:0},
  {id:"jb19",skill:"Economy",type:"mcq",q:"The currency used in Ireland is the…",opts:["Euro", "Pound", "Punt", "Dollar"],a:0},
  {id:"jb20",skill:"Economy",type:"mcq",q:"Taxes on goods and services, such as VAT, are called…",opts:["Indirect taxes", "Direct taxes", "Income taxes", "Corporation taxes"],a:0}
);
LOOPS_SUBJECTS.jc_bus.CL.tasks.push(
  {id:"jbs6",kind:"jc_bus",section:"Section A",max:12,label:"Short questions · 2 × 6 marks",title:"Answer both.",pts:["(a) Explain the difference between gross pay and net pay.", "(b) Name two compulsory deductions from pay in Ireland."],marks:[6, 6]},
  {id:"jbs7",kind:"jc_bus",section:"Section A",max:12,label:"Short questions · 2 × 6 marks",title:"Answer both.",pts:["(a) What is a guarantee?", "(b) Explain what the CCPC does for consumers."],marks:[6, 6]},
  {id:"jbs8",kind:"jc_bus",section:"Section A",max:12,label:"Short questions · 2 × 6 marks",title:"Answer both.",pts:["(a) Explain ‘opportunity cost’, with an example.", "(b) Give two reasons why people save."],marks:[6, 6]},
  {id:"jbs9",kind:"jc_bus",section:"Section A",max:12,label:"Short questions · 2 × 6 marks",title:"Answer both.",pts:["(a) Explain the term ‘inflation’.", "(b) Give one effect of high unemployment on the economy."],marks:[6, 6]},
  {id:"jbs10",kind:"jc_bus",section:"Section A",max:12,label:"Short questions · 2 × 6 marks",title:"Answer both.",pts:["(a) What is a sole trader?", "(b) Give one advantage and one disadvantage of being a sole trader."],marks:[6, 6]},
  {id:"jbs11",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"A consumer complaint.",pts:["(a) You bought headphones that stopped working after a week. List the steps you would take to complain.", "(b) Write a short letter of complaint to the shop.", "(c) Explain your rights under consumer law in this situation."],marks:[8, 12, 10]},
  {id:"jbs12",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Insurance.",pts:["(a) Explain the terms ‘premium’ and ‘claim’.", "(b) Name two types of household insurance.", "(c) Explain why young drivers pay higher car insurance premiums."],marks:[10, 8, 12]},
  {id:"jbs13",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Ciara earns €650 gross per week. Her deductions are PAYE €65, PRSI €26 and USC €12.",pts:["(a) Calculate her total deductions.", "(b) Calculate her net pay.", "(c) Explain why PRSI is paid."],marks:[8, 8, 14]},
  {id:"jbs14",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Cash book. 1 May: balance €400. 3 May: paid rent €250. 10 May: received wages €600. 15 May: bought groceries €120. 28 May: paid phone bill €45.",pts:["(a) Write up the cash book for May, showing receipts and payments.", "(b) Balance the account at the end of May.", "(c) Explain why it is useful to keep a cash book."],marks:[14, 8, 8]},
  {id:"jbs15",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Marketing a new energy drink.",pts:["(a) Name the four Ps of the marketing mix.", "(b) Suggest a suitable pricing strategy for the drink, and explain your choice.", "(c) Describe two ways to promote the drink to teenagers."],marks:[8, 10, 12]},
  {id:"jbs16",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Employment.",pts:["(a) Explain the difference between full-time and part-time work.", "(b) Name two rights of an employee under Irish law.", "(c) Explain the role of a trade union."],marks:[8, 10, 12]},
  {id:"jbs17",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"A student enterprise sells keyrings for €5 each. Each keyring costs €2 to make. Fixed costs are €150.",pts:["(a) Calculate the contribution per keyring.", "(b) Calculate the break-even point in units.", "(c) Calculate the profit if 100 keyrings are sold."],marks:[8, 10, 12]},
  {id:"jbs18",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Government and the economy.",pts:["(a) Name two sources of government revenue.", "(b) Name two areas the government spends money on.", "(c) Explain what a budget surplus is and why it matters."],marks:[8, 8, 14]},
  {id:"jbs19",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Liam wants to borrow €8,000 to buy a car.",pts:["(a) Name two sources of borrowing he could use.", "(b) Explain what ‘security’ (collateral) means for a loan.", "(c) Explain two things he should consider before taking out the loan."],marks:[8, 10, 12]},
  {id:"jbs20",kind:"jc_bus",section:"Section B",max:30,label:"Long question part · 30 marks",title:"Sustainability and business.",pts:["(a) Explain what is meant by sustainable development.", "(b) Describe two ways a business can reduce its impact on the environment.", "(c) Explain why being environmentally friendly can benefit a business."],marks:[6, 12, 12]}
);
})();
