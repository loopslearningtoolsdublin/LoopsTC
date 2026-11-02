# Mark my Words · A Loops Learning Tool

Exam practice for Irish Leaving Cert students. Free quick-fire rounds earn keys; a key gets The Brother to mark a piece of writing to the SEC marking scheme.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The landing page: the green leather bookcase. Each subject is a book; tap it to pick Higher or Ordinary. |
| `app.html` | The student app. Works on any phone. |
| `subjects/*.js` | One file per subject (es, fr, de, bus, maths, art): the questions and marked tasks, Higher and Ordinary. |
| `assets/` | Mark my Words plaque, white triskel, leather textures, favicons. |
| `admin.html` | Spend, markings and pass codes. For Seán only. |
| `worker.js` | Goes to Cloudflare, not GitHub Pages. Holds the marking schemes, passes and spend tracking. |
| `manifest.webmanifest` | Makes “Add to Home Screen” show the green triskel, labelled Mark my Words. |

## Links to Loops

The plaque on the landing page goes to Loops; the triskel strip and footer go to the Loops Library (Exam Prep). In the app, the logo goes back to the bookcase.

## For colleagues

No account needed to check questions or test The Brother: open `app.html?teacher`, tap the logo five times for a key, and mark your own old scripts against him.

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

Run 20–30 scripts you have already marked through The Brother and compare his marks with yours. He should be within 2–3 marks nearly every time.

## Cloudflare settings (new Worker)

- `ANTHROPIC_API_KEY` (secret)
- `STORE`: a KV namespace binding
- `ADMIN_CODE` (secret): your password for `admin.html`
- `MONTHLY_CAP_USD`: e.g. `30`. Marking stops for the month at this spend.
- `REQUIRE_PASS`: set to `1` to charge
- `STRIPE_SECRET`: only when charging
- Optional: `ALLOWED_ORIGINS` (your site), `MARK_MODEL`, `FEEDBACK_MODEL`, `PASS_DAYS`, `PASS_LIMIT`, `PASS_DAILY`

Then paste the Worker’s address into `WORKER_URL` at the top of `app.html` and `admin.html`.

© 2026 Loops Learning Tools · Dublin
