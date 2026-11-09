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
| `index.html` | Page structure and Chinese default copy |
| `data.js` | Bilingual copy (`I18N`) and project cards (`PROJECTS`) |
| `styles.css` | Dark theme, layout, responsive rules |
| `main.js` | Language switch, project filter, scroll reveal, nav, copy email |
| `assets/favicon.svg` | Favicon |
| `assets/og.png` | 1200×630 social preview image |
| `assets/portrait.jpg` | Hero portrait (cropped from the resume) |
| `assets/avatar.jpg` | Square avatar used in the nav |
| `assets/Thomas-Zhao-Resume.pdf` | Downloadable CV |

To add a project, append an object to `PROJECTS` in `data.js`:

```js
{
  id: "my-project",
  category: "agents",          // all | agents | llm | systems | web3
  title: { zh: "项目名", en: "Project name" },
  subtitle: { zh: "一句话副标题", en: "One-line subtitle" },
  desc: { zh: "两行描述", en: "Two-line description" },
  tags: ["Tag", "Tag"],
  metric: { zh: "关键结果", en: "Key result" },
  status: { zh: "进行中", en: "Ongoing" },
  link: "https://github.com/..."
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
- The page is bilingual; the choice is persisted in `localStorage` under `thomas-site-lang`.
- All animations respect `prefers-reduced-motion`.
