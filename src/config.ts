// Edit this file to change site-wide settings.
export const SITE_URL = 'https://huunghia1023.github.io';
export const AUTHOR = 'Nguyen Gia Huu Nghia';

export const SOCIAL = {
  github: 'https://github.com/huunghia1023',
  // TODO: replace with your real YouTube channel URL
  youtube: 'https://www.youtube.com/@YOUR_CHANNEL',
};

// Allowed tags. Add a new tag here (and its labels) before using it in a post.
export const TAGS = ['ai-engineering', 'dotnet-angular', 'career', 'learning-log'] as const;
export type Tag = (typeof TAGS)[number];
