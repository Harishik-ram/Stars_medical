# STARS Training Academy Website

A responsive, multi-page website for STARS Training Academy — hands-on emergency and life-saving skills training in Bengaluru.

## Pages

- `index.html` — Home (hero, impact stats, why STARS, programme preview, CTA)
- `about.html` — About the academy + "learn by doing"
- `programmes.html` — Full course catalogue (STARS Certified / JeevaRaksha / AHA tabs)
- `team.html` — Founder + faculty
- `partners.html` — Partner institutions
- `faq.html` — Frequently asked questions
- `contact.html` — Enquiry form, contact details + Google map

## Shared files

- `styles.css` — full responsive design system (fonts, layout, components)
- `script.js` — mobile nav, programme tabs, scroll reveals, counters, contact email helper
- `assets/` — optimized images and logo

## Editing note (multi-page)

The header and footer are duplicated in each `.html` file (standard for a no-build static
site — keeps SEO and no-JS users working). If you change a nav link or footer detail,
update it in every page.

## Design

- Headings: **Fraunces** (loaded from Google Fonts); body/UI: **Inter**
- Brand palette: teal `#0b5366`, emergency red `#e52d38`, gold accent `#dba746`
- Each page has its own `<title>` + meta description for SEO; `LocalBusiness`,
  `EducationalOrganization` and `FAQPage` structured data are included (JSON-LD)

## Preview

```bash
python3 -m http.server 8090
```

Then open `http://localhost:8090`.

## Publish

Upload the whole folder to any static host (Netlify, GitHub Pages, Cloudflare Pages).
No build step. Before going live, set the canonical URL: uncomment and fill the
`<link rel="canonical">` line in each page's `<head>` with your real domain.

## Contact form

Backend-free — on submit it opens the visitor's email app with a pre-filled request to
`starshealthcareacademy@gmail.com`. Connect a form service later for server-side capture.
The floating WhatsApp button opens a chat to +91 99026 24108.
