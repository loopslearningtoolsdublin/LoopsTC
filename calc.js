// ═══════════════════════════════════════════════
// LOOPS TEST CENTRE · CALCULATOR (8 Nov 2026)
// A scientific calculator for the Maths books, like the one allowed in the exam.
// Buttons only. It never touches the answer box or a save. No eval: its own small parser.
// ═══════════════════════════════════════════════
(function(){
const css = `
.calc-fab{position:fixed;right:16px;bottom:16px;z-index:60;width:56px;height:56px;border-radius:50%;border:0;background:var(--navy,#112480);color:#fff;font-size:1.5rem;box-shadow:0 6px 18px rgba(0,0,0,.25);cursor:pointer;display:flex;align-items:center;justify-content:center}
.calc-fab[hidden],.calc[hidden]{display:none}
body.calc-on .app{padding-bottom:84px}
.calc{position:fixed;left:50%;transform:translateX(-50%);bottom:0;z-index:70;width:100%;max-width:440px;background:#1B2A4A;color:#fff;border-radius:18px 18px 0 0;box-shadow:0 -8px 30px rgba(0,0,0,.3);padding:10px 10px calc(10px + env(safe-area-inset-bottom));user-select:none;-webkit-user-select:none;touch-action:manipulation}
.calc-top{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.calc-top b{flex:1;font-size:.85rem;letter-spacing:.06em;opacity:.8}
.calc-x{background:rgba(255,255,255,.14);border:0;color:#fff;border-radius:999px;padding:7px 14px;font-weight:700;font-size:.85rem;cursor:pointer}
.calc-scr{background:#E8F0E0;color:#1B2A4A;border-radius:10px;padding:8px 12px;min-height:72px;display:flex;flex-direction:column;justify-content:space-between;font-family:ui-monospace,Menlo,monospace}
.calc-mode{font-size:.72rem;font-weight:800;display:flex;gap:10px}
.calc-mode .on{background:#1B2A4A;color:#E8F0E0;border-radius:4px;padding:0 4px}
.calc-exp{font-size:1rem;word-break:break-all;min-height:1.3em;text-align:left}
.calc-res{font-size:1.6rem;font-weight:800;text-align:right;min-height:1.3em}
.calc-res.err{font-size:1rem;color:#B42318}
.calc-keys{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:8px}
.calc-keys button{border:0;border-radius:9px;padding:0;height:42px;font-size:1rem;font-weight:700;cursor:pointer;background:#2F4066;color:#fff;font-family:inherit}
.calc-keys button.f{background:#3B4C73;font-size:.82rem}
.calc-keys button.n{background:#F7F3EA;color:#1B2A4A;font-size:1.15rem}
.calc-keys button.o{background:#5A6E99;font-size:1.15rem}
.calc-keys button.sh{background:#D98A16;color:#1B2A4A}
.calc-keys button.sh.on{outline:3px solid #fff}
.calc-keys button.ac{background:#C8614A}
.calc-keys button.eq{background:#2E9E7A;font-size:1.2rem}
.calc-keys button:active{transform:translateY(1px);filter:brightness(1.15)}
`;
// Key: label, what goes into the sum, shifted label, shifted insert, class
const KEYS = [
  ["SHIFT","§shift",null,null,"sh"], ["DEG","§mode",null,null,"f"], ["(","(",null,null,"f"], [")",")",null,null,"f"], ["DEL","§del",null,null,"ac"], ["AC","§ac",null,null,"ac"],
  ["sin","sin(","sin⁻¹","asin(","f"], ["cos","cos(","cos⁻¹","acos(","f"], ["tan","tan(","tan⁻¹","atan(","f"], ["log","log(","10ˣ","10^(","f"], ["ln","ln(","eˣ","e^(","f"], ["√","√(","∛","cbrt(","f"],
  ["x²","^2","x³","^3","f"], ["xʸ","^(","ʸ√x","§root","f"], ["x⁻¹","^(-1)","n!","!","f"], ["nCr","C","nPr","P","f"], ["π","π","e","e","f"], ["%","%",null,null,"f"],
  ["7","7",null,null,"n"], ["8","8",null,null,"n"], ["9","9",null,null,"n"], ["÷","÷",null,null,"o"], ["a b/c","§frac",null,null,"f"], ["S⇔D","§sd",null,null,"f"],
  ["4","4",null,null,"n"], ["5","5",null,null,"n"], ["6","6",null,null,"n"], ["×","×",null,null,"o"], ["(−)","−",null,null,"f"], ["×10ˣ","E",null,null,"f"],
  ["1","1",null,null,"n"], ["2","2",null,null,"n"], ["3","3",null,null,"n"], ["+","+",null,null,"o"], ["−","-",null,null,"o"], ["Ans","Ans",null,null,"f"],
  ["0","0",null,null,"n"], [".",".",null,null,"n"], ["=","§eq",null,null,"eq"]
];

// ── The parser: + − × ÷, powers (right to left), implicit ×, unary minus, n!, %, nCr, nPr, E ──
function evaluate(src, deg, ans){
  let s = src.replace(/Ans/g, "A");
  // close any open brackets, the way the exam calculator does
  let open = 0; for (const ch of s){ if (ch === "(") open++; else if (ch === ")") open--; if (open < 0) throw "Syntax ERROR"; }
  s += ")".repeat(open);
  const toks = []; let i = 0;
  const FN = ["asin","acos","atan","sin","cos","tan","log","ln","cbrt","√"];
  while (i < s.length){
    const c = s[i];
    if (/[0-9.]/.test(c)){ let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; const t = s.slice(i, j); if ((t.match(/\./g) || []).length > 1) throw "Syntax ERROR"; toks.push({t:"n", v:parseFloat(t === "." ? "0" : t)}); i = j; continue; }
    const f = FN.find(f => s.startsWith(f, i)); if (f){ toks.push({t:"f", v:f}); i += f.length; continue; }
    if (c === "π"){ toks.push({t:"n", v:Math.PI}); i++; continue; }
    if (c === "e"){ toks.push({t:"n", v:Math.E}); i++; continue; }
    if (c === "A"){ toks.push({t:"n", v:ans}); i++; continue; }
    if ("+-−×÷^()!%CPE".includes(c)){ toks.push({t:c === "−" ? "neg" : c}); i++; continue; }
    throw "Syntax ERROR";
  }
  let p = 0;
  const peek = () => toks[p], take = () => toks[p++];
  const rad = x => deg ? x * Math.PI / 180 : x, unrad = x => deg ? x * 180 / Math.PI : x;
  const fact = n => { if (n < 0 || n > 170 || Math.abs(n - Math.round(n)) > 1e-9) throw "Math ERROR"; let r = 1; for (let k = 2; k <= Math.round(n); k++) r *= k; return r; };
  const tidy = x => Math.abs(x) < 1e-12 ? 0 : x;
  function expr(){ let v = term(); while (peek() && (peek().t === "+" || peek().t === "-")){ const o = take().t; const r = term(); v = o === "+" ? v + r : v - r; } return v; }
  // nCr and nPr sit just above + and −, like on the exam calculator
  function term(){ let v = comb(); while (peek() && (peek().t === "×" || peek().t === "÷" || startsFactor(peek()))){ const o = (peek().t === "×" || peek().t === "÷") ? take().t : "×"; const r = comb(); if (o === "÷" && r === 0) throw "Math ERROR"; v = o === "×" ? v * r : v / r; } return v; }
  function comb(){ let v = unary(); while (peek() && (peek().t === "C" || peek().t === "P")){ const o = take().t; const r = unary(); const n = Math.round(v), k = Math.round(r);
      if (Math.abs(v - n) > 1e-9 || Math.abs(r - k) > 1e-9 || k < 0 || n < 0 || k > n) throw "Math ERROR";
      let out = 1; for (let j = 0; j < k; j++) out *= (n - j); if (o === "C") out /= fact(k); v = Math.round(out); } return v; }
  function startsFactor(t){ return t.t === "n" || t.t === "f" || t.t === "("; }
  function unary(){ if (peek() && (peek().t === "neg" || peek().t === "-")){ take(); return -unary(); } if (peek() && peek().t === "+"){ take(); return unary(); } return power(); }
  function power(){ let b = postfix(); if (peek() && peek().t === "^"){ take(); const e = unary(); const r = Math.pow(b, e); if (!isFinite(r) || isNaN(r)) throw "Math ERROR"; return r; } return b; }
  function postfix(){ let v = atom(); while (peek() && (peek().t === "!" || peek().t === "%")){ v = take().t === "!" ? fact(v) : v / 100; } return v; }
  function atom(){
    const t = take(); if (!t) throw "Syntax ERROR";
    if (t.t === "n"){ let v = t.v; if (peek() && peek().t === "E"){ take(); let sg = 1; if (peek() && (peek().t === "neg" || peek().t === "-")){ take(); sg = -1; } const e = take(); if (!e || e.t !== "n") throw "Syntax ERROR"; v = v * Math.pow(10, sg * e.v); } return v; }
    if (t.t === "("){ const v = expr(); if (!take() || toks[p-1].t !== ")") throw "Syntax ERROR"; return v; }
    if (t.t === "f"){
      let a; if (peek() && peek().t === "("){ take(); a = expr(); if (!take() || toks[p-1].t !== ")") throw "Syntax ERROR"; } else a = power();
      switch (t.v){
        case "sin": return tidy(Math.sin(rad(a)));
        case "cos": return tidy(Math.cos(rad(a)));
        case "tan": { if (deg && Math.abs(((a % 180) + 180) % 180 - 90) < 1e-9) throw "Math ERROR"; return tidy(Math.tan(rad(a))); }
        case "asin": if (a < -1 || a > 1) throw "Math ERROR"; return unrad(Math.asin(a));
        case "acos": if (a < -1 || a > 1) throw "Math ERROR"; return unrad(Math.acos(a));
        case "atan": return unrad(Math.atan(a));
        case "log": if (a <= 0) throw "Math ERROR"; return Math.log10(a);
        case "ln": if (a <= 0) throw "Math ERROR"; return Math.log(a);
        case "√": if (a < 0) throw "Math ERROR"; return Math.sqrt(a);
        case "cbrt": return Math.cbrt(a);
      }
    }
    throw "Syntax ERROR";
  }
  const v = expr(); if (p < toks.length) throw "Syntax ERROR";
  if (!isFinite(v) || isNaN(v)) throw "Math ERROR";
  return v;
}
function show(v){
  if (Object.is(v, -0)) v = 0;
  const a = Math.abs(v);
  if (a !== 0 && (a >= 1e10 || a < 1e-9)){ const [m, e] = v.toExponential(9).split("e"); return String(parseFloat(m)) + "×10^" + parseInt(e); }
  return String(parseFloat(v.toPrecision(10)));
}
// Fraction of a decimal, when it is a tidy one (denominator up to 1000)
function frac(v){
  if (Math.abs(v - Math.round(v)) < 1e-10) return null;
  const sign = v < 0 ? "−" : ""; const x = Math.abs(v);
  for (let d = 2; d <= 1000; d++){ const n = Math.round(x * d); if (Math.abs(n / d - x) < 1e-9){ const w = Math.floor(n / d), r = n - w * d; return {s:sign, w, n:r, d, imp:sign + n + "/" + d}; } }
  return null;
}

let el, fab, scr, expEl, resEl, modeEl, shBtn;
let exp = "", ans = 0, last = null, deg = true, shift = false, fracView = 0, justEq = false;
function render(){
  expEl.textContent = exp || " ";
  modeEl.innerHTML = "<span class='" + (deg ? "on" : "") + "'>D</span><span class='" + (deg ? "" : "on") + "'>R</span>" + (shift ? "<span class='on'>S</span>" : "");
  shBtn.classList.toggle("on", shift);
  el.querySelectorAll("button[data-k]").forEach(b => { const k = KEYS[+b.dataset.k]; b.textContent = (shift && k[2]) ? k[2] : k[0]; });
  el.querySelector("[data-k='1']").textContent = deg ? "DEG" : "RAD";
}
function result(text, err){ resEl.textContent = text; resEl.classList.toggle("err", !!err); }
function press(idx){
  const k = KEYS[idx]; const ins = (shift && k[3]) ? k[3] : k[1];
  if (ins !== "§shift") shift = false;
  switch (ins){
    case "§shift": shift = !shift; break;
    case "§mode": deg = !deg; break;
    case "§ac": exp = ""; result(""); justEq = false; break;
    case "§del": exp = exp.replace(/(asin\(|acos\(|atan\(|sin\(|cos\(|tan\(|log\(|ln\(|cbrt\(|√\(|Ans|10\^\(|e\^\(|\^\(-1\)|.)$/u, ""); justEq = false; break;
    case "§root": exp += "^(1÷"; justEq = false; break;
    case "§eq":
      if (!exp) break;
      try { const v = evaluate(exp, deg, ans); ans = v; last = v; fracView = 0; result(show(v)); justEq = true; }
      catch(e){ result(typeof e === "string" ? e : "Syntax ERROR", true); }
      break;
    case "§frac": case "§sd":
      if (last === null) break;
      { const f = frac(last);
        if (!f){ result(show(last)); break; }
        fracView = (fracView + 1) % 3;
        if (ins === "§sd" && fracView === 2) fracView = 0;
        result(fracView === 0 ? show(last) : fracView === 1 ? (f.w ? f.s + f.w + " " + f.n + "/" + f.d : f.imp) : f.imp); }
      break;
    default:
      // After =, an operator carries on from Ans; a number starts a new sum
      if (justEq){ if (/^[\^+\-×÷!%CPE]/.test(ins)) exp = "Ans"; else exp = ""; }
      exp += ins; justEq = false;
  }
  render();
}
function build(){
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  fab = document.createElement("button"); fab.className = "calc-fab"; fab.type = "button"; fab.hidden = true;
  fab.setAttribute("aria-label", "Open the calculator"); fab.innerHTML = "<svg viewBox='0 0 24 24' width='26' height='26' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' aria-hidden='true'><rect x='5' y='2.5' width='14' height='19' rx='2.5'/><rect x='8' y='5.5' width='8' height='4' rx='1'/><path d='M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01'/></svg>";
  el = document.createElement("div"); el.className = "calc"; el.hidden = true; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Calculator");
  el.innerHTML = "<div class='calc-top'><b>CALCULATOR</b><button class='calc-x' type='button'>Close ✕</button></div>" +
    "<div class='calc-scr' aria-live='polite'><div class='calc-mode'></div><div class='calc-exp'></div><div class='calc-res'></div></div>" +
    "<div class='calc-keys'>" + KEYS.map((k,i) => "<button type='button' data-k='" + i + "' class='" + k[4] + "'" + (k[1] === "§eq" ? " style='grid-column:span 4'" : "") + ">" + k[0] + "</button>").join("") + "</div>";
  document.body.appendChild(fab); document.body.appendChild(el);
  expEl = el.querySelector(".calc-exp"); resEl = el.querySelector(".calc-res"); modeEl = el.querySelector(".calc-mode"); shBtn = el.querySelector("[data-k='0']");
  // pointerdown keeps the focus (and the phone keyboard) where it was
  el.querySelectorAll("button[data-k]").forEach(b => { b.addEventListener("pointerdown", e => e.preventDefault()); b.onclick = () => press(+b.dataset.k); });
  el.querySelector(".calc-x").onclick = () => { el.hidden = true; fab.hidden = false; };
  fab.onclick = () => { el.hidden = false; fab.hidden = true; };
  render();
}
window.LOOPS_CALC = {
  enable(on){ if (!fab) build(); fab.hidden = !on || !el.hidden; if (!on) el.hidden = true; document.body.classList.toggle("calc-on", !!on); },
  _eval: evaluate, _show: show, _frac: frac
};
})();
