// ═══════════════════════════════════════════════
// THE COACH — the kind figure who marks the work.
// Change the name here (and COACH_NAME in the Worker settings to match).
// image: "" keeps the silhouette; or a picture, e.g. "assets/coach.png" (square works best).
// ═══════════════════════════════════════════════
window.COACH = { name: "The Brother", image: "" };

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".coach").forEach(e => { e.textContent = COACH.name; });
  if (COACH.image) document.querySelectorAll(".bro-ic").forEach(svg => {
    const img = document.createElement("img");
    img.src = COACH.image; img.alt = COACH.name; img.width = svg.getAttribute("width"); img.height = svg.getAttribute("height");
    img.style.borderRadius = "50%"; img.style.objectFit = "cover"; img.className = "bro-ic";
    svg.replaceWith(img);
  });
});
