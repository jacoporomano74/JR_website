# CLAUDE.md — jacoporomano.com

Project brief for Claude Code. Read this before making any change.

---

## 1. Who this site is for

Jacopo Romano — composer and sound designer for **games** and **film**.
Classical guitar background (Summa Cum Laude degree, first prizes in international
competitions, concert and orchestral experience). Currently studying game audio at
Berklee Online: FMOD (Game Audio 101) and Wwise, plus Unity integration.

**Primary audience, in priority order:**

1. Indie game developers and audio directors — need proof of *implementation*, not
   just composition. They want to see FMOD/Wwise sessions, parameter logic, gameplay
   with audio in context.
2. Film directors — need proof of *scoring to picture*: sync, emotional arc, taste.
3. Everyone else (brands, artists) — not a target. Do not optimise for them.

**Positioning statement:** composer and sound designer who both writes the music AND
implements it in middleware. That combination is the differentiator. The classical
performance background is the second layer, not the headline.

---

## 2. Stack and deployment

- Static HTML / CSS / vanilla JS. No build step, no framework.
- Entry point: `index.html`
- Local path: `C:\Users\jacop\Desktop\Sito\JR_website\`
- Deployed on **Netlify**.
- Multi-page is trivial here: add `.html` files, they are served directly.

Do not introduce React, a bundler, or a static site generator. Keep it plain.

---

## 3. Current problems — ordered by impact

### P0 — Portfolio inflation (fix first)

The portfolio shows **13 cards for 7 actual projects**:

| Project | Currently | Should be |
|---|---|---|
| Fishy Business (MangoWorks) | 3 cards | 1 card, 3 tracks |
| Junkienator (Interactive Dreams Studio) | 5 cards | 1 card, 5 tracks |
| Cardboard Cars (MangoWorks) | 2 cards | 1 card, 2 tracks |
| Survivors (Christopher Hill) | 1 card | 1 card |
| Saturday Morning (Olivia Mundy) | 1 card | 1 card |
| The Origin of Jack Frost | 1 card | 1 card — mark as **rescore / exercise**, not a credit |

Repeating the same thumbnail three times in a row reads as padding and *lowers*
perceived stature. One card per project; multiple tracks live inside the project card
or on the project's own page.

### P1 — Add a plain-text email address

The contact form uses **Formspree and works — verified**. Do not touch the form
backend. See §9 for why.

What is missing is a visible email address. Many people — especially anyone writing
from a phone or wanting to attach a brief — will not fill in a form. Add the address
in plain text below the form.

Also add a LinkedIn link. The footer currently has only Instagram and YouTube;
LinkedIn matters more than either for studio hiring.

### P0 — Missing social preview image

`<head>` declares `twitter:card: summary_large_image` but there is no `og:image` or
`twitter:image`. Result: sharing the link anywhere (Discord, LinkedIn, WhatsApp,
email) renders an empty card — worse than declaring nothing.

Add a 1200×630 image at `/og-image.jpg` and:

```html
<meta property="og:image" content="https://jacoporomano.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Jacopo Romano — Composer & Sound Designer">
<meta property="og:url" content="https://jacoporomano.com">
<meta name="twitter:image" content="https://jacoporomano.com/og-image.jpg">
```

Note: a favicon is a separate thing and does not cover this.

### P1 — YouTube embeds

Thirteen live YouTube iframes on one page. Problems: slow load, heavy on mobile,
third-party cookies set before any user interaction, and the YouTube chrome
(red button, "Guarda su YouTube", share icons, channel avatar) clashes badly with the
site's otherwise elegant dark/gold identity.

Replace with a **lite embed / facade**: a static custom thumbnail plus a play button;
inject the real iframe only on click. Use clean gameplay or key-art stills, not the
YouTube thumbnails (those carry burned-in promo text designed for the YouTube feed).

For audio-only tracks, prefer the existing waveform player — it is the best-looking
component on the site.

### P1 — Emoji used as service icons

The Services section uses 🎬 🎮 🔊 🎚️ 📢 🎵. This is the single strongest "generated
from a template" signal on the page. Replace with inline SVG icons (Lucide or
Phosphor, both MIT-licensed) or remove icons entirely.

### P1 — Two factual/credibility fixes in Services copy

- **"WWise" is misspelled.** The correct spelling is **Wwise** (capital W, lowercase w).
  This is the exact keyword a game audio recruiter scans for.
- **Remove "From indie projects to AAA titles."** Jacopo has never worked on a AAA
  title. It reads as a bluff and undermines the claims that *are* true.

Also trim six services down to three or four. Drop "Sonic Branding for Brands" and
"Music Production for artists and podcasts" — they dilute the film/games positioning.

### P1 — Bio leads with the wrong thing

Current bio opens with "I am a highly accomplished classical guitarist..." and spends
its first half on classical performance. Someone arriving for game audio reads two
sentences without finding what they came for. Self-praise ("highly accomplished")
weakens rather than strengthens — the awards can state themselves.

Restructure: what he does now → then where he comes from → then how the two connect.

### P2 — Typography and layout

- **About paragraph is centred and near-full-viewport width.** Set `max-width: 68ch`,
  left-aligned. Centred long-form body text is hard to read.
- **Orphaned cards.** With 4 testimonials and single trailing portfolio items, the last
  element sits alone in its row (Jack Frost, The Beloved Queen, MangoWorks
  testimonial). Use a 2×2 grid for four items; balance the portfolio grid after
  consolidation.
- **Testimonials are too long** — ~100 words, italic, centred, low-contrast grey.
  Nobody reads that. Show 1–2 punchy sentences with an expand control. Drop the
  italic on long blocks; keep it only for short pull-quotes.
- **Contact section is mostly empty black space.** Tighten vertical rhythm.
- Submit button reads "Send Message ↓" — a down arrow implies download. Use → or none.

### P2 — Inconsistent taxonomy

Cards currently use five labels for three concepts: `INDIE GAME / GAME JAM`,
`VIDEO GAME / GAME JAM`, `VIDEO GAME / INDIE`, `SHORT FILM`, `FILM/CINEMATIC`.

Standardise to: **GAME** / **FILM** / **DEMO**. Detail (game jam, indie, short film)
belongs in the project description, not the tag.

### P2 — Unattached demo tracks

"Riot Challenge Finalist", "Cave Ambient", "Before Battle", "The Beloved Queen" are
labelled "Videogame/Film track" — the slash announces they belong to nothing. Move
them into a separate clearly-labelled block (e.g. *Concept & Demos*) after the
commissioned work. Do not mix them into the project grid.

### P2 — Visual identity says "classical guitarist"

The hero photo, the embedded About video, and all five About photos are classical
performance. There is not a single image of Jacopo working: no studio, no Cubase, no
FMOD session. Keep the classical material — it is a genuine differentiator — but add
at least two production images to the About gallery.

### P3 — No per-project URLs

Single-page with anchors means there is no way to send a studio a link to *one*
project. This becomes blocking once the FMOD/Wwise showcase videos exist.

### P3 — Content invisible to crawlers

All content is injected via JS, so the served HTML is effectively empty. Not fatal
(most portfolio traffic is direct links) but it means the site does not rank for
"Jacopo Romano composer". Consider putting core text directly in the HTML.

Also: meta description currently reads "films, video games, trailers, and media
projects" — too broad to mean anything. Make it specific to games + film + middleware.

---

## 4. Target architecture

Build the structure now; populate as material becomes available.

```
/                              hero, positioning line, two clear paths, featured work
/games.html                    game projects + sound design
/games/hedgehogs-hollow.html   showcase video, FMOD breakdown, screenshots
/games/junkienator.html        5 tracks, testimonial from Roberto Domenella
/games/fishy-business.html     3 tracks
/games/cardboard-cars.html     2 tracks
/film.html                     reel + film projects
/film/<project>.html           per-film pages (3 shorts pending release)
/about.html
/contact.html
```

**Do not build a splash-page fork** ("click here for games / click here for film").
It adds a click before the visitor has heard anything and loses traffic arriving from
shared links. The two paths belong inside the homepage, immediately below the name.

**One identity, one bio, one name — then two clear routes.** A composer who does both
games and film is completely normal in this industry; nobody gets confused.

Sound design is **not** a third pillar. It lives inside the games branch — same tools,
same projects, same showcase videos. Listing it separately makes it read as a skills
inventory rather than a craft.

---

## 5. Content status — be honest about what exists

**Games (real credits):** Junkienator (Interactive Dreams Studio), Fishy Business
(MangoWorks), Cardboard Cars (MangoWorks). Four named testimonials, two from Game
Directors.

**Games (in progress, coursework):** Hedgehog's Hollow — Unity + FMOD, adaptive music
with intro/loop architecture, two intensity states, transition timeline, snapshot
reverb. A second Unity project with Wwise integration. These are *coursework*, not
credits, but once documented with video they are the strongest implementation proof
on the site.

**Film (live):** Survivors (Christopher Hill), Saturday Morning (Olivia Mundy).
The Origin of Jack Frost is a **rescore exercise** — label it as such.

**Film (pending):** three original short films, awaiting release.

Never inflate this. No AAA claims. Mark exercises as exercises. The real material is
strong enough.

---

## 6. Planned feature: interactive music player

A Web Audio crossfade demo, to sit on the homepage or the games page.

**Requirements:**

- Use **Web Audio API**, not `<audio>` elements. Two `<audio>` tags started together
  drift apart within seconds because each has its own clock. Load buffers via
  `decodeAudioData`, create one `AudioBufferSourceNode` per stem, start them all at
  the same `ctx.currentTime + delay`.
- **Equal-power crossfade**, not linear. Linear loses ~3 dB at the midpoint and
  audibly dips:
  ```js
  gainA.gain.setTargetAtTime(Math.cos(x * 0.5 * Math.PI), ctx.currentTime, 0.01);
  gainB.gain.setTargetAtTime(Math.cos((1 - x) * 0.5 * Math.PI), ctx.currentTime, 0.01);
  ```
  Use `setTargetAtTime`, never assign `.value` directly — direct assignment clicks.
- **Explicit play button required.** Browsers block audio until a user gesture;
  create or `resume()` the AudioContext inside the click handler.
- **Preload and decode both stems before enabling play**, so they truly start together.
- **MP3 192 kbps stereo**, not WAV. Two one-minute WAVs are ~20 MB and will not load.
- Stems must be exported from the same session, same locator range, same tempo, so
  they share sample zero. Export below the master limiter or leave headroom —
  summing two limited stems at midpoint will pump.

**Parameter naming:** map the slider to something that actually exists in the game
(e.g. Calm ↔ Danger, or Exploration ↔ Discovery), not to Electronic ↔ Orchestral.
A game parameter makes it the web version of a real FMOD parameter, which the
showcase video can then mirror. A genre slider is just a toy.

---

## 7. Working priorities

Quick wins first — items 1–3 are minutes of work each and all reduce credibility damage.

1. Fix "WWise" → "Wwise"; delete the "to AAA titles" claim.
2. Add `og:image` / `twitter:image`.
3. Add plain-text email + LinkedIn link to the contact section.
4. Consolidate portfolio to one card per project.
5. Replace emoji icons with SVG.
6. Replace YouTube embeds with click-to-load facades.
7. Standardise taxonomy; separate demo tracks from commissioned work.
8. Rewrite bio (games/film first, classical second); fix About typography.
9. Trim testimonials; fix 2×2 grid.
10. Split into multi-page structure with per-project URLs.
11. Build the Web Audio interactive player.
12. Add Hedgehog's Hollow project page once showcase video exists.

---

## 8. Constraints

- Keep the existing dark/gold visual identity — it is coherent and works. The problems
  are content architecture and a few cheap details, not the overall look.
- Keep the hero photograph. It is genuinely good.
- Keep the waveform audio player component.
- No frameworks, no build step.
- Never invent credits, testimonials, or project details. If information is missing,
  ask rather than filling it in.

---

## 9. Do not change: the form backend

The contact form runs on **Formspree** and is confirmed working. Do not migrate it to
Netlify Forms, and do not refactor it as part of any other task.

Reasoning, so this decision is not re-litigated:

- Migrating does not remove a third-party dependency. The site is already hosted,
  DNS-managed and deployed by Netlify. Swapping Formspree for Netlify Forms
  concentrates dependencies rather than eliminating them.
- The real differences are marginal: a same-origin POST with no external JS, and a
  slightly cleaner GDPR story. Free-tier limits (Netlify 100/month, Formspree
  50/month) are irrelevant at this traffic level.
- **There is a specific failure mode here.** Netlify detects forms by parsing static
  HTML at deploy time. This site injects its content via JavaScript, so the served
  HTML is close to empty. If the form is JS-generated, Netlify's parser never sees it
  and the form silently fails — no error, no submissions, no notification. The
  workaround (a hidden static duplicate form with a matching `name` and identical
  field names) adds complexity to solve a problem that does not currently exist.
- The contact channel is the one thing on this site that cannot afford to break.
  Changing it is risk with no return.

If form detection is ever enabled in the Netlify dashboard, that alone changes
nothing — the markup would still need migrating.
