import type { Tag } from '../config';

export type Lang = 'en' | 'vi';
export const LANGS: Lang[] = ['en', 'vi'];
export const DEFAULT_LANG: Lang = 'en';

export const ui = {
  en: {
    siteTitle: 'Nghia’s Dev Notes',
    siteDescription: 'Notes on software engineering, AI engineering, and career growth.',
    nav: { home: 'Home', blog: 'Blog', tags: 'Tags', about: 'About' },
    heroTitle: 'Hi, I’m Nghia 👋',
    heroText:
      'I’m a software developer from Vietnam (Angular, C#, .NET) learning AI engineering. I write down what I learn, what I get wrong, and what I try next.',
    recentPosts: 'Recent posts',
    allPosts: 'All posts',
    noPosts: 'No posts yet. Come back soon!',
    readMore: 'Read more',
    allTags: 'All tags',
    postsTagged: 'Posts tagged',
    updated: 'Updated',
    backToBlog: '← Back to all posts',
    notTranslated: 'This post is only available in English.',
    switchLang: 'Tiếng Việt',
    switchLangLabel: 'Đổi sang Tiếng Việt',
    theme: 'Toggle dark mode',
    rss: 'RSS feed',
    footer: 'Built with Astro. Hosted on GitHub Pages.',
    follow: 'Follow me',
    locale: 'en-US',
  },
  vi: {
    siteTitle: 'Nghĩa’s Dev Notes',
    siteDescription: 'Ghi chép về kỹ thuật phần mềm, AI engineering và phát triển sự nghiệp.',
    nav: { home: 'Trang chủ', blog: 'Bài viết', tags: 'Thẻ', about: 'Giới thiệu' },
    heroTitle: 'Xin chào, mình là Nghĩa 👋',
    heroText:
      'Mình là lập trình viên đến từ Việt Nam (Angular, C#, .NET) và đang học AI engineering. Mình ghi lại những gì đã học, những chỗ làm sai và bước tiếp theo.',
    recentPosts: 'Bài viết mới',
    allPosts: 'Tất cả bài viết',
    noPosts: 'Chưa có bài viết nào. Hãy quay lại sau nhé!',
    readMore: 'Đọc tiếp',
    allTags: 'Tất cả thẻ',
    postsTagged: 'Bài viết với thẻ',
    updated: 'Cập nhật',
    backToBlog: '← Quay lại danh sách bài viết',
    notTranslated: 'Bài viết này chưa có bản tiếng Việt.',
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    theme: 'Bật/tắt chế độ tối',
    rss: 'RSS',
    footer: 'Xây dựng bằng Astro. Lưu trữ trên GitHub Pages.',
    follow: 'Theo dõi mình',
    locale: 'vi-VN',
  },
} as const;

export const tagLabels: Record<Lang, Record<Tag, string>> = {
  en: {
    'ai-engineering': 'AI Engineering',
    'dotnet-angular': '.NET & Angular',
    career: 'Career',
    'learning-log': 'Learning Log',
  },
  vi: {
    'ai-engineering': 'AI Engineering',
    'dotnet-angular': '.NET & Angular',
    career: 'Sự nghiệp',
    'learning-log': 'Nhật ký học tập',
  },
};

/** Build a URL for a language. English has no prefix, Vietnamese has /vi. */
export function url(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === DEFAULT_LANG ? '' : 'vi';
  const joined = [prefix, clean].filter(Boolean).join('/');
  return '/' + joined + (joined ? '/' : '');
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'vi' : 'en';
}

/** Used by getStaticPaths: English uses an empty (undefined) path segment. */
export const langParam = (lang: Lang) => (lang === DEFAULT_LANG ? undefined : lang);
