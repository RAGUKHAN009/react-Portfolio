# Aliyan Arif — Portfolio (React + Vite)

This is a React conversion of the original HTML/CSS/JS portfolio, built with Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  assets/
    img/          -> all portfolio images
    cv/            -> CV.docx (also copied into public/ for the download link)
  components/
    Header.jsx      -> nav bar, theme toggle, active-link scroll logic
    Home.jsx         -> hero section
    About.jsx
    Skills.jsx
    Services.jsx    -> "What I Offer" cards + modals
    Work.jsx        -> portfolio grid with All / Web / Mobile filter
    Testimonials.jsx -> Swiper carousel
    Contact.jsx      -> contact cards + form (opens a pre-filled email on submit)
    Footer.jsx
  hooks/
    useScrollReveal.js -> recreates the original ScrollReveal entrance animations
  data.js            -> skills / services / work / content data
  App.jsx
  App.css            -> section & component styles (from the original styles.css)
  index.css          -> CSS variables, reset, theme, scrollbar styles
  main.jsx           -> app entry point, imports Boxicons/FontAwesome/Bootstrap Icons + Swiper CSS
```

## Notes on the conversion

- **Icons**: Boxicons, Bootstrap Icons, and Font Awesome are now installed as npm packages
  (rather than loaded from CDN links in `<head>`) and imported in `main.jsx`.
- **Theme toggle**: reimplemented with React state + `useEffect`, still persists to
  `localStorage` exactly like the original.
- **Active nav link on scroll** and **header background on scroll**: reimplemented as
  `useEffect` scroll listeners inside `Header.jsx`.
- **Work filter**: originally used the `mixitup` library (jQuery-era DOM plugin). It's been
  reimplemented with plain React state (`Work.jsx`) for a more idiomatic React approach —
  no extra DOM library required.
- **Testimonials carousel**: uses `swiper/react` official React components instead of
  vanilla Swiper JS.
- **Scroll reveal animations**: the `scrollreveal` library is still used (it's DOM-based,
  not React-specific), wired up through a small `useScrollReveal` hook.
- **Contact form**: there was no real backend in the original (`action=""`), so the form
  is now a controlled React form that opens a pre-filled `mailto:` link on submit. Swap
  `handleSubmit` in `Contact.jsx` for a real API call / form service (e.g. Formspree) if
  you want it to submit without opening the user's email client.

## ⚠️ Missing images

Your uploaded zip only contained `work5.png`, `work6.png`, and `work9.png` in
`assets/img/` — `work1.png`, `work2.png`, `work3.png`, `work4.png`, `work7.png`, and
`work8.png` were referenced in the HTML but not present in the zip. I generated simple
placeholder images for those six so the site builds and runs correctly. Just replace the
files in `src/assets/img/` with your real project screenshots (keep the same filenames,
or update the imports in `src/data.js`).
