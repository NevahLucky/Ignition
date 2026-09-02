# Ignition — Clemson Build Pitch Competition

A GitHub Pages site for **Ignition**, the Clemson Build pitch competition.
One page, every thing people need: the club, the flyer, the application,
the competitors, and the judging criteria.

**Design:** palette pulled from `buildlogo.jpeg` — orange `#E57326` as the
main background, beige `#F1EDE4` as the accent, purple `#522D7D` as ink.
**Engine theme:** the title is an engine-block nameplate (stamped letters,
corner bolts, cooling fins) with animated pistons above and an exhaust pipe
beside it; rotating gears decorate the sections, and the apply card carries
a tachometer. All pure SVG/CSS — no extra assets, and animations respect
`prefers-reduced-motion`.

## Publish checklist (do this before going live)

1. **Paperform link** — open `script.js`, set `CONFIG.APPLY_URL`
2. **Spectator RSVP link** — `script.js`, `CONFIG.RSVP_URL`
3. **Competitors** — replace the placeholder entries in the `COMPETITORS`
   array in `script.js` (keep the `openSlot` card until the field is full)
4. **Prize pool** — currently described generically ("a share of the prize
   pool"); add the amount to the flyer/apply sections when announced
5. **Event year** — dates are shown without a year (source materials say
   September 18, a Thursday); add the year if you want it explicit
6. Confirm Tillman Hall Room 160 booking and the September 10 deadline

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole hub: hero, how-it-works, club, competitors, judging, flyer, apply, FAQ |
| `styles.css` | Theme (orange bg / beige accent / purple ink), responsive |
| `script.js` | `CONFIG` links + competitor roster rendering + mobile nav |
| `assets/` | Logo (`logo-web.jpg`), favicon, all derived from `buildlogo.jpeg` |
| `flyer/flyer.svg` | The promotional flyer, embedded on the page |
| `flyer/flyer.html` | Printable 8.5×11 version of the flyer |

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo named `Ignition` on GitHub and push this folder:

   ```bash
   git remote add origin git@github.com:<your-username>/Ignition.git
   git push -u origin main
   ```

2. Enable Pages — pick **one**:
   - **GitHub Actions (recommended):** repo → Settings → Pages → Source:
     *GitHub Actions*. The included workflow (`.github/workflows/deploy.yml`)
     deploys automatically on every push to `main`.
   - **Branch:** Settings → Pages → Source: *Deploy from a branch* → `main`
     / `/ (root)`. (`.nojekyll` is already included.)

Your site will be live at `https://<your-username>.github.io/Ignition/`
(or at your custom domain if you add one).

---

*Clemson Build — student-run, founder-first.*

## Promotional cover (TigerQuest)

TigerQuest crops every Event Cover Photo to **1.67:1** (min 1300×780, ≤10MB),
so both covers are composed at exactly that ratio — no content is lost to the
crop:

- `promo/cover-tigerquest.png` — **recommended upload**: engine lockup +
  tagline + date/time/location chips (1920×1152, ~264 KB PNG)
- `promo/cover-tigerquest-notext.png` — text-free variant per the platform's
  "avoid text or logos" guidance; engine lockup only

Edit `promo/cover.html` (or `cover-notext.html`) and re-render:

```bash
cd promo
google-chrome --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --virtual-time-budget=12000 \
  --window-size=1920,1152 --screenshot=cover-tigerquest.png \
  "file://$PWD/cover.html"
```
