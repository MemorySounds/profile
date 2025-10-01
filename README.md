# Personal Portfolio

My simple single-page portfolio site built with HTML, JS, SCSS, and Eleventy.

## Project Structure

```
profile/
├── src/
│   ├── index.html
│   ├── styles/
│   │   ├── scss/         # SCSS partials and main.scss
│   │   └── css/          # Compiled main.css
│   ├── scripts/
│   │   └── smooth-scroll.js
│   │   └── projects.js
│   │   └── contact-validation.js
│   │   └── main.js
│   ├── sections/
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── projects.html
│   │   └── contact.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .eleventy.js
├── .gitignore
├── package.json
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

## Notes

- All source files are in `src/`. The final site is built to `_site/`.
- Do **not** commit the `_site/` folder; it is generated automatically.
