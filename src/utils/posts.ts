import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** Folder is the language: "en/my-post" -> lang "en", slug "my-post". */
export const postLang = (p: Post): Lang => p.id.split('/')[0] as Lang;
export const postSlug = (p: Post) => p.id.split('/').slice(1).join('/').replace(/\.(md|mdx)$/, '');

/** Published posts for one language, newest first. Drafts are hidden in production. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function hasTranslation(lang: Lang, slug: string): Promise<boolean> {
  return (await getPosts(lang)).some((p) => postSlug(p) === slug);
}
