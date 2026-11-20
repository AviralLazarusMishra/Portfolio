# Aviral Mishra | Portfolio

A responsive, dark-first developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. Portfolio content is organized in `src/data/portfolio.js`; archived copy is labeled separately from the current page copy.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Development

```bash
npm install
npm run dev
```

Vite prints a local development URL after the server starts.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`. The site uses root-relative asset paths for deployment at a domain root, including Netlify. Netlify builds with `npm run build` and publishes `dist/`.

## Project structure

```text
public/
└── assets/
src/
├── assets/
├── components/
│   ├── ProjectCard.jsx
│   ├── SectionLayout.jsx
│   ├── SiteHeader.jsx
│   └── SocialLinks.jsx
├── data/
├── sections/
├── App.jsx
├── index.css
└── main.jsx
```

The data module contains profile, experience, project, skill, certification, leadership, education, and contact information. Dates, statuses, and links are shown only where provided; missing project statuses and URLs are left unset rather than inferred.
