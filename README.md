# akgcybersec.github.io

Personal site + blog for **Aswin Gopalakrishnan** — Offensive Security Engineer, red teamer, cloud & web pentester.

Live at → https://akgcybersec.github.io

## Stack

- [Astro](https://astro.build) (static site generator)
- Tailwind CSS v4
- MDX for blog posts
- Deployed via GitHub Actions → GitHub Pages

## Local development

Requires Node.js **≥ 22.12**.

```sh
npm install
npm run dev        # starts dev server at http://localhost:4321
npm run build      # production build → ./dist
npm run preview    # preview the production build
```

## Writing a blog post

Add a `.mdx` file under `src/content/blog/`:

```md
---
title: "Post title"
description: "One-line teaser."
date: 2026-07-08
tags: ["red-team", "azure"]
draft: false
---

Your content here…
```

Push to `main` — GitHub Actions builds and deploys automatically.

## Structure

```
src/
├── components/       # Nav, Footer, Hero, About, Skills, etc.
├── content/blog/     # MDX blog posts
├── data/             # site config, certs, skills
├── layouts/          # BaseLayout, BlogPost
├── pages/            # index, blog, RSS
└── styles/global.css # Tailwind theme + tokens
```

## License

Content © Aswin Gopalakrishnan. Site source under MIT.
