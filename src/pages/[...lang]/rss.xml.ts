import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { LANGS, ui, url, langParam, type Lang } from '../../i18n/ui';
import { getPosts, postSlug } from '../../utils/posts';

export function getStaticPaths() {
  return LANGS.map((l) => ({ params: { lang: langParam(l) }, props: { lang: l } }));
}

export async function GET(context: APIContext) {
  const lang = (context.props as { lang: Lang }).lang;
  const t = ui[lang];
  const posts = await getPosts(lang);
  return rss({
    title: t.siteTitle,
    description: t.siteDescription,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: url(lang, `blog/${postSlug(p)}`),
      categories: p.data.tags,
    })),
    customData: `<language>${t.locale}</language>`,
  });
}
