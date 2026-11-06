# Research page

Live URL: https://kisen7.github.io/UNet-Camelyon/

The site is a static, bilingual HTML/CSS/JavaScript page. Open `index.html` or serve this directory with any static HTTP server. There is no build step.

- `index.html`: publication, method, figures and paper results.
- `assets/style.css`: responsive layout.
- `assets/site.js`: language switching, result tabs, figure zoom and citation copying.
- `assets/paper/`: six original paper crops, with provenance in `SOURCES.md`.

GitHub Pages deploys this directory through `.github/workflows/pages.yml` when `docs/` changes on `main`. Paper metrics are transcribed from Table II and kept alongside the original table image.

Source baseline: `apple2pig/UNet-Camelyon` (now redirected to `aplish064/UNet-Camelyon`), commit `dee97a827132b15ba4c5c8e7f923f3c210fe18f5`. The presentation update changes the root README and adds documentation, paper assets and a Pages workflow. Existing source files, notebooks, dependencies and architecture materials retain their original Git blobs.
