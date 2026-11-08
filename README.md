# Nghia's Dev Notes

A personal blog built with [Astro](https://astro.build), hosted on GitHub Pages.
It is bilingual: English (`/`) and Vietnamese (`/vi/`), with a language button in the header.

Live site: https://huunghia1023.github.io

## Run locally

You need Node.js 22 LTS (version 22.23.4 or newer) and Git.

```bash
npm install
npm run dev
```

Open http://localhost:4321. The page reloads when you save a file.

Other commands:

```bash
npm run build     # build the site into dist/
npm run preview   # open the built site locally
```

## Write a new post

1. Copy `templates/post-template.mdx` to `src/content/blog/en/my-post-name.mdx`.
   (Use `.md` if you do not need a YouTube video.)
2. Fill in the front matter and write the post.
3. Set `draft: false` when you are ready to publish.
4. `git add . && git commit -m "Add post: my post name" && git push`

The file name becomes the URL: `/blog/my-post-name/`.

### Front matter

```yaml
---
title: "Your post title"
date: 2026-01-01
tags: ["learning-log"]   # ai-engineering, dotnet-angular, career, learning-log
summary: "One or two sentences."
draft: false             # true = hidden on the live site
---
```

- `draft: true` posts show in `npm run dev` (with a DRAFT badge) but are **not** built for the live site.
- To add a new tag, edit `TAGS` in `src/config.ts` and add its labels in `src/i18n/ui.ts`.

### Vietnamese version (optional)

Put a translated file with the **same file name** in `src/content/blog/vi/`
(you can start from `templates/post-template.vi.mdx`).
The language button will then switch between the two versions.
If a post has no translation, the button goes to the blog list of the other language.

## Embed a YouTube video

Use an `.mdx` file. Add the import under the front matter, then use the component:

```mdx
import YouTube from '../../../components/YouTube.astro';

<YouTube id="VIDEO_ID" title="What the video is about" />
```

`VIDEO_ID` is the part after `v=` in the YouTube link. The video is 16:9, responsive,
lazy-loaded, and uses `youtube-nocookie.com`. Optional: `start={90}` starts at 90 seconds.

## Change your links and name

Edit `src/config.ts`:

- `SOCIAL.youtube` is a placeholder. Put your real channel URL there.
- `SOCIAL.github` is your GitHub profile.
- `AUTHOR` is the name shown in the footer.

The About page text is in `src/pages/[...lang]/about.astro`.

## Deploy

The site deploys automatically with GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

One-time setup:

1. Create a **public** repo named `huunghia1023.github.io` on GitHub.
2. Push this project to the `main` branch.
3. In the repo, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for "Deploy to GitHub Pages" to turn green.
5. Visit https://huunghia1023.github.io.

## Project structure

```text
src/
  config.ts              site name, links, allowed tags
  content.config.ts      post front matter rules
  content/blog/en|vi/    your posts (Markdown / MDX)
  components/            Header, Footer, PostCard, YouTube
  layouts/               BaseLayout, PostLayout
  pages/[...lang]/       all pages (English and Vietnamese share the same code)
  i18n/ui.ts             translated UI text and tag names
templates/               post templates (not published)
```

## Later (optional)

- Analytics: Plausible or GoatCounter (add their script in `src/layouts/BaseLayout.astro`).
- Comments: Giscus (add it at the end of `src/layouts/PostLayout.astro`).
- Custom domain: add `public/CNAME`, set `site` in `astro.config.mjs`, and set the domain in Settings → Pages.
