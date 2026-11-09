# Loops Test Centre

Exam practice for Irish Leaving Cert students. Free quick-fire rounds earn keys; a key gets Markus to mark a piece of writing to the SEC marking scheme.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The landing page: the green leather bookcase. Each subject is a book; tap it to pick Higher or Ordinary. |
| `app.html` | The student app. Works on any phone. |
| `subjects/*.js` | One file per subject: LC es, fr, de, en, ga, bus, maths, art, cs, hist, geo, acc, bio, chem, phys, and the JC books (jc-*.js). `areas.js` tags every question with its paper area. the warm-up questions and marked tasks, Higher and Ordinary. Maths, English and Gaeilge are split into Paper 1 and Paper 2, each its own book on the shelf. English Paper 2 follows the 2027 prescribed list: update it each September. |
| `common.html`, `stats.js` | The Common Room (all subjects, projections, graphs) and the shared stats code. |
| `calc.js` | The scientific calculator, shown wherever a calculation can come up: Maths, the sciences, Accounting, Business, Geography and Computer Science (LC and JC). |
| `assets/` | Loops Test Centre plaque, white triskel, leather textures, favicons. |
| `admin.html` | Spend, markings and pass codes. For Seán only. |
| `worker.js` | Goes to Cloudflare, not GitHub Pages. Holds the marking schemes, passes and spend tracking. |
| `manifest.webmanifest` | Makes “Add to Home Screen” show the green triskel, labelled Test Centre. |

## Links to Loops

The plaque on the landing page goes to Loops; the triskel strip and footer go to the Loops Library (Exam Prep). In the app, the logo goes back to the bookcase.

## For colleagues

No account needed to check questions or test Markus: open `app.html?teacher`, tap the logo five times for a key, and mark your own old scripts against him.

## Editing your subject

1. Open your subject's file in `subjects/` on GitHub and tap the pencil icon. Everything happens in the browser and nothing needs installing.
2. Each quick-fire question looks like this:
   `{id:"fw7", skill:"Writing", type:"short", q:"Say it in French: “The weather is nice.”", a:["il fait beau"]}`
   - `type:"mcq"`: four `opts`, and `a` is the number of the right one (0 is the first).
   - `type:"short"`: `a` lists every answer you'd accept.
   - `lenient:true` forgives a one-letter slip, as the scheme does for "find it in the text" questions.
   - `why` is a one-line explanation shown when a student gets it wrong.
   - Every `id` must be unique.
3. Marked tasks need a `kind` that matches a marking scheme in `worker.js`. Ask Seán before adding a new kind.
4. Write a short note about what you changed, then tap **Commit changes**.

## Before a subject goes live

Run 20–30 scripts you have already marked through Markus and compare his marks with yours. He should be within 2–3 marks nearly every time.

## Cloudflare settings (new Worker)

- `ANTHROPIC_API_KEY` (secret)
- `STORE`: a KV namespace binding
- `ADMIN_CODE` (secret): your password for `admin.html`
- `MONTHLY_CAP_USD`: e.g. `30`. Marking stops for the month at this spend.
- `REQUIRE_PASS`: set to `1` to charge
- `STRIPE_SECRET`: only when charging
- Optional: `ALLOWED_ORIGINS` (your site), `MARK_MODEL`, `FEEDBACK_MODEL`, `PASS_DAYS`, `PASS_LIMIT`, `PASS_DAILY`

The Worker's address (`https://tiny-shape-0dcfar.seansynge.workers.dev`) is already in `WORKER_URL` at the top of `app.html` and `admin.html`.

© 2026 Loops Learning Tools · Dublin
