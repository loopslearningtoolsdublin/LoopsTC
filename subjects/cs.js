// ═══════════════════════════════════════════════
// LOOPS · LC COMPUTER SCIENCE — Higher + Ordinary
// Styled on the SEC written examination (2023–2025 layout):
//   Section A: short questions (Higher: any 9 of 12)
//   Section B: long questions (Higher: 2 of 3)
//   Section C: programming on the computer (Python)
// The coursework project (ALT) is not covered here.
// Every code answer below was checked by running it.
// ═══════════════════════════════════════════════
(function(){
const OL_GRADES = [["O1",90],["O2",80],["O3",70],["O4",60],["O5",50],["O6",40],["O7",30],["O8",0]].map(([g,min]) => ({g,min}));
const HL_GRADES = [["H1",90],["H2",80],["H3",70],["H4",60],["H5",50],["H6",40],["H7",30],["H8",0]].map(([g,min]) => ({g,min}));
const TF = ["True","False"];

const ITEMS = [
  // Number systems and data
  {id:"cn1",skill:"Data & number",type:"short",q:"Convert 13 to binary.",a:["1101"]},
  {id:"cn2",skill:"Data & number",type:"short",q:"Convert binary 1011 to denary.",a:["11"]},
  {id:"cn3",skill:"Data & number",type:"short",q:"Convert hexadecimal FF to denary.",a:["255"]},
  {id:"cn4",skill:"Data & number",type:"short",q:"Convert 42 to hexadecimal.",a:["2A","2a","0x2A","0x2a"]},
  {id:"cn5",skill:"Data & number",type:"mcq",q:"How many bits in a byte?",opts:["8","4","16","10"],a:0},
  {id:"cn6",skill:"Data & number",type:"mcq",q:"How many different values can 8 bits represent?",opts:["256","255","128","512"],a:0,why:"2⁸ = 256"},
  {id:"cn7",skill:"Data & number",type:"mcq",q:"Unicode was introduced mainly because ASCII…",opts:["Can’t represent the characters of most of the world’s languages","Is too fast","Uses colours","Only works on Macs"],a:0},
  {id:"cn8",skill:"Data & number",type:"mcq",q:"Lossy compression…",opts:["Removes some data permanently to make files smaller","Keeps every bit of the original","Makes files bigger","Only works on text"],a:0},
  {id:"cn9",skill:"Data & number",type:"match",q:"Match the unit.",pairs:[["Bit","A single 0 or 1"],["Byte","8 bits"],["Kilobyte","About 1,000 bytes"],["Nibble","4 bits"]]},
  // Python
  {id:"cp1",skill:"Python",type:"short",q:"What is printed?\nx = 7 // 2\nprint(x)",a:["3"]},
  {id:"cp2",skill:"Python",type:"short",q:"What is printed?\nprint(7 % 2)",a:["1"]},
  {id:"cp3",skill:"Python",type:"short",q:"What is printed?\nprint(len(\"Hello\"))",a:["5"]},
  {id:"cp4",skill:"Python",type:"short",q:"What is printed?\nword = \"Hello\"\nprint(word[1])",a:["e"]},
  {id:"cp5",skill:"Python",type:"short",q:"What is printed?\ntotal = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)",a:["6"]},
  {id:"cp6",skill:"Python",type:"mcq",q:"What does range(3) produce?",opts:["0, 1, 2","1, 2, 3","0, 1, 2, 3","3"],a:0},
  {id:"cp7",skill:"Python",type:"mcq",q:"What is printed?\nnums = [4, 8, 15]\nprint(nums[-1])",opts:["15","4","8","An error"],a:0},
  {id:"cp8",skill:"Python",type:"mcq",q:"Which keyword defines a function in Python?",opts:["def","func","function","define"],a:0},
  {id:"cp9",skill:"Python",type:"mcq",q:"input() always returns…",opts:["A string","An integer","A float","A list"],a:0,why:"Use int(input()) to get a number."},
  {id:"cp10",skill:"Python",type:"mcq",q:"Which is a logic error rather than a syntax error?",opts:["Using > where you meant >=","Missing a colon after if","Unclosed bracket","Misspelling print as pritn"],a:0},
  {id:"cp11",skill:"Python",type:"order",q:"Put the lines in order to print the even numbers from 0 to 8.",words:["for n in range(0, 9):","    if n % 2 == 0:","        print(n)"]},
  {id:"cp12",skill:"Python",type:"match",q:"Match the data type.",pairs:[["\"Dublin\"","str"],["42","int"],["3.14","float"],["True","bool"]]},
  // Logic
  {id:"cl1",skill:"Logic",type:"mcq",q:"An AND gate outputs 1 when…",opts:["Both inputs are 1","Either input is 1","Both inputs are 0","The inputs are different"],a:0},
  {id:"cl2",skill:"Logic",type:"mcq",q:"An XOR gate outputs 1 when…",opts:["The inputs are different","Both inputs are 1","Both inputs are 0","Always"],a:0},
  {id:"cl3",skill:"Logic",type:"mcq",q:"NOT 1 = ",opts:["0","1","2","−1"],a:0},
  {id:"cl4",skill:"Logic",type:"mcq",q:"In Python, (True and False) or True is…",opts:["True","False","None","An error"],a:0},
  {id:"cl5",skill:"Logic",type:"match",q:"Match the gate to its output for inputs 1 and 0.",pairs:[["AND","0"],["OR","1"],["NAND","1 "],["NOR","0 "]]},
  // Hardware, networks, systems
  {id:"ch1",skill:"Systems",type:"mcq",q:"RAM is…",opts:["Volatile: it loses its contents when the power is off","Permanent storage","A type of printer","Only used by the GPU"],a:0},
  {id:"ch2",skill:"Systems",type:"mcq",q:"The CPU’s fetch-execute cycle fetches instructions from…",opts:["Memory (RAM)","The keyboard","The monitor","The internet"],a:0},
  {id:"ch3",skill:"Systems",type:"mcq",q:"Which protocol encrypts web traffic?",opts:["HTTPS","HTTP","FTP","SMTP"],a:0},
  {id:"ch4",skill:"Systems",type:"mcq",q:"An IP address is used to…",opts:["Identify a device on a network","Store passwords","Speed up the CPU","Compress files"],a:0},
  {id:"ch5",skill:"Systems",type:"mcq",q:"An embedded system is…",opts:["A computer built into a larger device for a specific job","A cloud server","A type of spreadsheet","A web browser"],a:0},
  {id:"ch6",skill:"Systems",type:"match",q:"Match the term.",pairs:[["Router","Forwards data between networks"],["DNS","Turns domain names into IP addresses"],["Packet","A small chunk of data sent over a network"],["Firewall","Filters traffic for security"]]},
  // Algorithms
  {id:"ca1",skill:"Algorithms",type:"mcq",q:"Binary search only works if the list is…",opts:["Sorted","Short","Made of strings","Empty"],a:0},
  {id:"ca2",skill:"Algorithms",type:"mcq",q:"The worst-case time of linear search on n items is…",opts:["O(n)","O(1)","O(log n)","O(n²)"],a:0},
  {id:"ca3",skill:"Algorithms",type:"mcq",q:"The worst-case time of binary search on n items is…",opts:["O(log n)","O(n)","O(n²)","O(1)"],a:0},
  {id:"ca4",skill:"Algorithms",type:"mcq",q:"Bubble sort is typically…",opts:["O(n²)","O(log n)","O(1)","O(n log n) always"],a:0},
  {id:"ca5",skill:"Algorithms",type:"short",q:"How many comparisons at most does binary search need to find an item in a sorted list of 16 items?",a:["5"],why:"16 → 8 → 4 → 2 → 1: up to 5 comparisons."},
  {id:"ca6",skill:"Algorithms",type:"mcq",q:"A recursive function must have…",opts:["A base case that stops the recursion","A loop","A global variable","No parameters"],a:0},
  {id:"ca7",skill:"Algorithms",type:"order",q:"Order the stages of the software development life cycle (one common model).",words:["Analysis","Design","Implementation","Testing","Evaluation"]},
  // People, society, design
  {id:"cs1",skill:"Society & design",type:"mcq",q:"User-centred design means…",opts:["Involving users throughout design and testing","Designing for the programmer only","Never changing a prototype","Skipping testing"],a:0},
  {id:"cs2",skill:"Society & design",type:"mcq",q:"Bias in an AI system often comes from…",opts:["Biased or unrepresentative training data","Too much RAM","The colour of the screen","Fast internet"],a:0},
  {id:"cs3",skill:"Society & design",type:"mcq",q:"Under GDPR, personal data should be…",opts:["Collected only for a clear purpose and kept secure","Sold freely","Kept forever","Made public"],a:0},
  {id:"cs4",skill:"Society & design",type:"mcq",q:"True or false: A prototype is the final finished product.",opts:TF,fixed:true,a:1,why:"A prototype is an early version used to test ideas."},
  {id:"cs5",skill:"Society & design",type:"mcq",q:"True or false: Accessibility means designing so that people with disabilities can use a system.",opts:TF,fixed:true,a:0}
];
// Keep match answers distinct where the gate outputs repeat
ITEMS.find(i => i.id === "cl5").pairs = [["AND","0 (needs both)"],["OR","1 (needs either)"],["NAND","1 (NOT AND)"],["NOR","0 (NOT OR)"]];

const HL = {
  id:"", builtin:true, title:"LC Computer Science · Higher", subject:"Computer Science", cycle:"LC", level:"HL",
  source:"Styled on the SEC Computer Science written examination (2023–2025 layout)", gradeBands: HL_GRADES, texts:{},
  items: ITEMS,
  tasks: [
    {id:"csh1",kind:"cs_parts",max:18,label:"Section A · 3 short questions · 6 marks each",title:"Answer all three. Show your working where needed.",pts:["(a) Convert the denary number 200 to binary and to hexadecimal.","(b) Explain the difference between a compiler and an interpreter.","(c) Draw or describe the truth table for A XOR B."],marks:[6,6,6]},
    {id:"csh2",kind:"cs_parts",max:38,label:"Section B · long question · 38 marks",title:"A school library wants a system to let students search for books.",pts:["(a) Describe how binary search would find a book by title in a sorted list of titles. Use an example.","(b) Compare linear and binary search in terms of efficiency, using Big O notation.","(c) Describe two ways the designers could involve students (the users) in the design of the system.","(d) Discuss one ethical issue the school should consider about storing students’ borrowing history."],marks:[10,10,8,10]},
    {id:"csh3",kind:"cs_parts",max:80,label:"Section C · programming (Python) · 80 marks",title:"Type your Python program. A game records players’ scores in a list, for example scores = [12, 45, 7, 30, 45].",pts:["(a) Write code that prints the highest score and the average score (to 1 decimal place).","(b) Write a function count_above(scores, n) that returns how many scores are greater than n.","(c) Extend the program so the user can type scores one at a time until they type −1, then print the highest, the average, and how many scores are above the average."],marks:[25,25,30]}
  ]
};
const OL = {
  id:"", builtin:true, title:"LC Computer Science · Ordinary", subject:"Computer Science", cycle:"LC", level:"OL",
  source:"Styled on the SEC Computer Science written examination", gradeBands: OL_GRADES, texts:{},
  items: ITEMS,
  tasks: [
    {id:"cso1",kind:"cs_parts",max:18,label:"Section A · 3 short questions · 6 marks each",title:"Answer all three.",pts:["(a) Convert the denary number 25 to binary.","(b) Name two input devices and two output devices.","(c) What is the difference between RAM and ROM?"],marks:[6,6,6]},
    {id:"cso2",kind:"cs_parts",max:30,label:"Section B · long question",title:"A shop wants an app so customers can order food online.",pts:["(a) Describe two features the app should have, and why.","(b) What is a prototype, and why would the developers make one?","(c) Describe one way the shop should keep customers’ data safe."],marks:[10,10,10]},
    {id:"cso3",kind:"cs_parts",max:50,label:"Section C · programming (Python)",title:"Type your Python program.",pts:["(a) Write a program that asks the user for their name and age, then prints a greeting with their name.","(b) Extend it: if the age is 18 or over print “You can vote”, otherwise print how many years until they can vote."],marks:[20,30]}
  ]
};
HL.store = "loops_lchl_cs_v1"; OL.store = "loops_lcol_cs_v1";
LOOPS_SUBJECTS.cs = { name: "Computer Science", flag: "💻", native: "Computer Science", colour: "cs", OL, HL };
})();

// ── Every unit and section (6 Nov 2026): more marked questions so each area of the paper is covered ──
(function(){
const S = LOOPS_SUBJECTS.cs;
S.HL.tasks.push(
  {id:"csh4",kind:"cs_parts",area:"Section A",max:18,label:"Section A · 3 short questions · 6 marks each",title:"Answer all three.",pts:["(a) Convert the binary number 1011 0110 to hexadecimal.", "(b) Explain what an algorithm is, with an everyday example.", "(c) What is the purpose of an IP address?"],marks:[6, 6, 6]},
  {id:"csh5",kind:"cs_parts",area:"Section B",max:38,label:"Section B · long question · 38 marks",title:"A weather station records the temperature every hour.",pts:["(a) Explain how the readings for one week could be stored in a two-dimensional list.", "(b) Explain the difference between iteration and recursion, with an example of each.", "(c) Show the steps bubble sort takes to sort the list [5, 2, 8, 1].", "(d) Discuss one way computing helps scientists to monitor climate change."],marks:[10, 10, 8, 10]},
  {id:"csh6",kind:"cs_parts",area:"Section C",max:80,label:"Section C · programming (Python) · 80 marks",title:"Type your Python program. A number-guessing game.",pts:["(a) The program picks a random whole number from 1 to 100. The user keeps guessing until they are right, and after each guess is told ‘higher’ or ‘lower’.", "(b) Count the guesses and print the total when the user wins.", "(c) Let the user play several games. Store the number of guesses for each game in a list, and at the end print the best (lowest) score and the average."],marks:[25, 25, 30]}
);
S.OL.tasks.push(
  {id:"cso4",kind:"cs_parts",area:"Section A",max:18,label:"Section A · 3 short questions · 6 marks each",title:"Answer all three.",pts:["(a) Convert the binary number 1010 to denary.", "(b) What does CPU stand for, and what does it do?", "(c) Name one operating system."],marks:[6, 6, 6]},
  {id:"cso5",kind:"cs_parts",area:"Section B",max:30,label:"Section B · long question",title:"A school wants to use a database to store students’ results.",pts:["(a) What is a database?", "(b) Name two fields the database should have, and give the data type of each.", "(c) Give one benefit and one risk of storing results in a database."],marks:[10, 10, 10]},
  {id:"cso6",kind:"cs_parts",area:"Section C",max:50,label:"Section C · programming (Python)",title:"Type your Python program.",pts:["(a) Ask the user for five numbers and print their total.", "(b) Also print the largest and the smallest number entered."],marks:[20, 30]}
);
})();
