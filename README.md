# Personal Portfolio

My simple single-page portfolio site built with HTML, JS, SCSS, and Eleventy.

## Project Structure

```
profile/
├── src/
│   ├── index.html
│   ├── cv/
│   │   └── index.html
│   ├── styles/
│   │   ├── scss/
│   │   └── css/
│   │       └── main.css        # Compiled CSS (generated from the scss files)
│   ├── scripts/
│   │   ├── main.js
│   │   ├── animation.js
│   │   ├── smooth-scroll.js
│   │   ├── scroll-lock.js
│   │   ├── projects.js
│   │   ├── contact-validation.js
│   │   └── cv-toggle.js
│   ├── sections/
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── skills.html
│   │   ├── projects.html
│   │   └── contact.html
│   ├── images/
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .eleventy.js
├── .gitignore
├── .prettierrc
├── package.json
├── CNAME                        # Custom domain configuration
└── README.md
```

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Build the site:

   ```
   npm run build
   ```

3. Run locally:

   ```
   npx serve _site
   ```

   Open the provided local URL in your browser.

4. For development (auto-rebuild on changes):
   ```
   npm run watch
   ```

## Deployment

- The site is automatically deployed to GitHub Pages using GitHub Actions.
- Only the contents of the `_site` folder are published.
- The deployment process builds & deploys it to the `gh-pages` branch.
- Custom domain configured via CNAME file pointing to `rsahakyan.dev`

## Notes

- All source files are in `src/`. The final site is built to `_site/`.
- Do **not** commit the `_site/` or `src/styles/css/` folders; they are generated automatically.
- The site includes a CV format page at `/cv/` with collapsible project sections.
- Landing animation plays once per session using `sessionStorage`.
