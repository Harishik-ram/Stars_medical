# STARS Training Academy Website

A responsive, multi-page website for STARS Training Academy — hands-on emergency and life-saving skills training in Bengaluru.

## Pages

- `index.html` — Home (hero, impact stats, why STARS, programme preview, CTA)
- `about.html` — About the academy + "learn by doing"
- `programmes.html` — Full course catalogue (STARS Certified / AHA tabs)
- `team.html` — Founder + faculty
- `partners.html` — Partner institutions
- `blog.html` — Blog listing (posts rendered by Jekyll from `_posts/`)
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

## Blog & admin panel

Blog posts are markdown files in `_posts/` (named `YYYY-MM-DD-slug.md` with YAML
frontmatter: `title`, `date`, optional `cover` and `description`). GitHub Pages'
built-in Jekyll build renders each one at `/blog/<slug>/` using `_layouts/post.html`,
and `blog.html` lists them — no local build tooling needed; just push to `main`.

The client edits posts at `<site-url>/admin/` (Sveltia CMS, config in
`admin/config.yml`). Publishing from the CMS commits straight to `main`, which
triggers the Pages rebuild (~1 minute). Sign-in options:

1. **Personal access token** (quick start): the client needs a GitHub account with
   write access to this repo, and a fine-grained PAT (Contents: read/write). Paste
   it once on the /admin sign-in screen.
2. **"Sign in with GitHub" button** (nicer): deploy the free
   [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) Cloudflare
   Worker, create a GitHub OAuth app, then add `base_url: <worker-url>` under
   `backend:` in `admin/config.yml`.

Note: image paths in posts are stored as `/Stars_medical/assets/blog/...` (the
GitHub Pages project path). If a custom domain is added later, set `baseurl: ""`
in `_config.yml`, change `public_folder` in `admin/config.yml`, and fix the paths
in old posts.

## Contact form

Backend-free — on submit it opens the visitor's email app with a pre-filled request to
`starshealthcareacademy@gmail.com`. Connect a form service later for server-side capture.
The floating WhatsApp button opens a chat to +91 99026 24108.
