# zfginucas.github.io

Personal academic homepage of **Thomas Zhao** — plain HTML / CSS / JS, no build step, no external dependencies.

## Local preview

```bash
cd zfginucas.github.io
python3 -m http.server 8000
# open http://localhost:8000
```

Do not open `index.html` directly with `file://`; the language toggle and project rendering rely on scripts that may be blocked by browser CORS rules.

## Where to edit

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and default English copy |
| `data.js` | Bilingual copy (`COPY`) and project records (`PROJECTS`) |
| `styles.css` | Light academic layout, responsive rules, accessibility, print styles |
| `main.js` | Language preference, project filters and details, navigation, copy email |
| `assets/favicon.svg` | Favicon |
| `assets/social-preview.png` | 1200×630 social preview image |
| `assets/portrait.jpg` | Profile illustration |
| `assets/Thomas-Zhao-Resume.pdf` | Downloadable CV |

To add a project, append an object to `PROJECTS` in `data.js`:

```js
{
  id: "my-project",
  category: "agents",          // agents | llm | systems
  diagram: "agents",           // agents | alignment | operator | robot | risk | web
  en: { title: "Project name", meta: "RESEARCH PROJECT", description: "Summary", details: "Details" },
  zh: { title: "项目名", meta: "研究项目", description: "简述", details: "详细介绍" },
  url: "https://github.com/..." // optional; omit for projects without public code
}
```

## Deploy

This repository is named `zfginucas.github.io`, so GitHub Pages serves it at the root:

1. Push to `main`.
2. Repository → Settings → Pages → Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Visit <https://zfginucas.github.io/>.

The `.nojekyll` file disables Jekyll processing.

## Notes

- No phone number is published. Contact is email + GitHub only.
- English is the default language; visitors can switch to Chinese. The preference is persisted in `localStorage` under `thomas-academic-language`.
- Three selected projects appear initially. Category filters and the expand button provide access to all six projects.
- Research projects are not presented as publications.
- All animations respect `prefers-reduced-motion`.

The previous design is retained in Git history at commit `b4e531bb4b10ca18ada359e6800af309bab16de0`.
