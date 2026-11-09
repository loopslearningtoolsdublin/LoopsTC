// ═══════════════════════════════════════════════
// LOOPS TEST CENTRE · STATS (6 Nov 2026)
// Shared by the Waiting Room stats and the Common Room. Reads only what is saved on this phone.
// Nothing here changes a save. Projections are honest ranges, only shown after 3 marked pieces.
// ═══════════════════════════════════════════════
(function(){
const LC_POINTS = {H1:100,H2:88,H3:77,H4:66,H5:56,H6:46,H7:37,H8:0,O1:56,O2:46,O3:37,O4:28,O5:20,O6:12,O7:0,O8:0};
const MIN_FOR_PROJECTION = 3;

// Same key the app uses: the pack's own store, or the older per-subject name
function storeKey(P, k, L){ return P.store || ("loops_lc_" + (k || P.subj) + "_" + (L || P.level) + "_v1"); }
function readSave(P, k, L){ try { return JSON.parse(localStorage.getItem(storeKey(P, k, L))) || null; } catch(e){ return null; } }
function gradeFor(P, pct){ const b = P.gradeBands.find(b => pct >= b.min); return b ? b.g : P.gradeBands[P.gradeBands.length - 1].g; }

// Every subject and level that has a save on this phone
function allSaved(){
  const out = [];
  const S = window.LOOPS_SUBJECTS || {};
  Object.keys(S).forEach(k => ["HL","OL","CL"].forEach(L => {
    const P = S[k] && S[k][L]; if (!P) return;
    const s = readSave(P, k, L); if (!s) return;
    if (!(s.attempts || []).length && !(s.rounds || []).length) return;
    out.push({k, L, P, S:s, name:S[k].name, flag:S[k].flag || "", colour:S[k].colour || k});
  }));
  return out;
}

// Weighted towards recent work; the range widens when results jump about.
function projection(P, s){
  const a = (s.attempts || []).slice(-8);
  if (a.length < MIN_FOR_PROJECTION) return {locked:true, need: MIN_FOR_PROJECTION - a.length};
  let wsum = 0, tot = 0; a.forEach((x,i) => { const w = i + 1; wsum += w; tot += w * x.pct; });
  const mid = tot / wsum;
  const mean = a.reduce((t,x) => t + x.pct, 0) / a.length;
  const sd = Math.sqrt(a.reduce((t,x) => t + (x.pct - mean) * (x.pct - mean), 0) / a.length);
  const half = Math.max(4, Math.min(12, Math.round(sd / Math.sqrt(a.length) * 2)));
  const lo = Math.max(0, Math.round(mid - half)), hi = Math.min(100, Math.round(mid + half));
  const prev = a.slice(-6, -3), last = a.slice(-3);
  const avg = arr => arr.reduce((t,x) => t + x.pct, 0) / arr.length;
  const trend = prev.length >= 2 ? Math.round(avg(last) - avg(prev)) : 0;
  return {locked:false, mid:Math.round(mid), lo, hi, gLo:gradeFor(P, lo), gHi:gradeFor(P, hi), g:gradeFor(P, mid), trend, n:(s.attempts || []).length};
}

// Paper areas: warm-up mastery and marked average for each
function areaStats(P, s){
  const items = P.items.concat(s.mine || []);
  return (P.areas || []).map(area => {
    const its = items.filter(i => i.area === area || (i.mine && i.from && (P.tasks.find(t => t.id === i.from) || {}).area === area));
    const c = {nail:0, learn:0, weak:0, none:0};
    its.forEach(i => { const it = (s.items || {})[i.id];
      if (!it || !it.seen) c.none++; else if (it.box === 1 && it.lapses > 0) c.weak++; else if (it.box >= 4) c.nail++; else c.learn++; });
    const ids = new Set(P.tasks.filter(t => t.area === area).map(t => t.id));
    const att = (s.attempts || []).filter(x => ids.has(x.task));
    const pct = att.length ? Math.round(att.slice(-3).reduce((t,x) => t + x.pct, 0) / Math.min(3, att.length)) : null;
    return {area, n:its.length, c, marked:att.length, pct};
  });
}

// Dated line graph: one or more series of {at, v} (0–100), optional target line
function timeline(series, opts){
  opts = opts || {};
  const W = 340, H = 190, L = 34, R = 10, T = 14, B = 34;
  const pts = series.flatMap(s => s.points);
  if (!pts.length) return "";
  let t0 = Math.min(...pts.map(p => p.at)), t1 = Math.max(...pts.map(p => p.at));
  if (t1 - t0 < 864e5) { t0 -= 432e5; t1 += 432e5; }
  const X = t => L + (t - t0) / (t1 - t0) * (W - L - R), Y = v => T + (100 - v) / 100 * (H - T - B);
  let g = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + (opts.label || "Progress over time") + '" style="width:100%;height:auto;display:block">';
  [0,25,50,75,100].forEach(v => { g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(v) + '" y2="' + Y(v) + '" stroke="rgba(0,0,0,.08)"/><text x="' + (L - 6) + '" y="' + (Y(v) + 3) + '" font-size="9" text-anchor="end" fill="#6B7280">' + v + '%</text>'; });
  if (opts.target != null) g += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(opts.target) + '" y2="' + Y(opts.target) + '" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="5 4"/><text x="' + (W - R) + '" y="' + (Y(opts.target) - 4) + '" font-size="9" text-anchor="end" fill="#16A34A" font-weight="700">🎯 ' + (opts.targetLabel || "target") + '</text>';
  const fmt = t => new Date(t).toLocaleDateString("en-IE", {day:"numeric", month:"short"});
  const ticks = t1 - t0 > 864e5 * 2 ? [t0, (t0 + t1) / 2, t1] : [t0, t1];
  ticks.forEach((t,i) => g += '<text x="' + X(t) + '" y="' + (H - B + 16) + '" font-size="9" text-anchor="' + (i === 0 ? "start" : i === ticks.length - 1 ? "end" : "middle") + '" fill="#6B7280">' + fmt(t) + '</text>');
  series.forEach(s => {
    const p = s.points.slice().sort((a,b) => a.at - b.at);
    if (p.length > 1) g += '<polyline points="' + p.map(q => X(q.at).toFixed(1) + "," + Y(q.v).toFixed(1)).join(" ") + '" fill="none" stroke="' + s.colour + '" stroke-width="' + (s.dash ? 1.8 : 2.6) + '"' + (s.dash ? ' stroke-dasharray="4 4"' : "") + ' stroke-linejoin="round" stroke-linecap="round"/>';
    if (!s.dash) p.forEach(q => g += '<circle cx="' + X(q.at).toFixed(1) + '" cy="' + Y(q.v).toFixed(1) + '" r="3.6" fill="#fff" stroke="' + s.colour + '" stroke-width="2.2"><title>' + fmt(q.at) + ": " + Math.round(q.v) + "%</title></circle>");
  });
  let lx = L;
  series.forEach(s => { g += '<rect x="' + lx + '" y="' + (H - 11) + '" width="12" height="3" fill="' + s.colour + '"/><text x="' + (lx + 16) + '" y="' + (H - 7) + '" font-size="9.5" fill="#374151">' + s.name + '</text>'; lx += 26 + s.name.length * 5.4; });
  return g + "</svg>";
}

// Overall line across every subject: rolling average of the last 5 marked pieces, at each date
function overallPoints(){
  const all = allSaved().flatMap(x => (x.S.attempts || []).map(a => ({at:a.at, v:a.pct}))).filter(p => p.at).sort((a,b) => a.at - b.at);
  return all.map((p,i) => { const w = all.slice(Math.max(0, i - 4), i + 1); return {at:p.at, v:w.reduce((t,x) => t + x.v, 0) / w.length}; });
}

// Leaving Cert points from projected grades: best six, +25 for Higher Level Maths at H6 or above
function lcPoints(rows){
  const per = rows.map(r => { const lo = LC_POINTS[r.pr.gLo] || 0, hi = LC_POINTS[r.pr.gHi] || 0, bonus = (r.k === "maths" && r.L === "HL") ? 25 : 0;
    return {r, lo: lo + (lo >= 46 && bonus ? bonus : 0), hi: hi + (hi >= 46 && bonus ? bonus : 0)}; });
  const best = (key) => per.map(p => p[key]).sort((a,b) => b - a).slice(0, 6).reduce((t,x) => t + x, 0);
  return {lo:best("lo"), hi:best("hi"), counted:Math.min(6, per.length), of:per.length};
}

window.LOOPS_STATS = {storeKey, readSave, gradeFor, allSaved, projection, areaStats, timeline, overallPoints, lcPoints, LC_POINTS, MIN_FOR_PROJECTION};
})();
