import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TAGS } from './config';

// Posts live in src/content/blog/en/*.md(x) and src/content/blog/vi/*.md(x).
// Use the SAME file name in both folders so the language button links the translations.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(TAGS)).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
