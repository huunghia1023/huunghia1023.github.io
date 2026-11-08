import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your live URL. Repo must be named <username>.github.io, so no "base" is needed.
  site: 'https://huunghia1023.github.io',
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', vi: 'vi-VN' } },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: { prefixDefaultLocale: false }, // English: /   Vietnamese: /vi/
  },
  markdown: {
    // Syntax highlighting (Shiki) with light + dark themes
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
