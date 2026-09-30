// Parses a pasted YouTube URL down to its video ID. Supports the three link
// shapes people actually paste: the standard watch URL, the short youtu.be
// link, and an embed URL. No video file ever touches this server — the
// thumbnail is YouTube's own CDN image for the ID, and playback embeds the ID
// directly, so storing the ID (via the original URL) is all that's needed.
const YOUTUBE_ID_PATTERNS = [
  /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
  /(?:youtu\.be\/)([\w-]{11})/,
  /(?:youtube\.com\/embed\/)([\w-]{11})/,
  /(?:youtube\.com\/shorts\/)([\w-]{11})/,
];

export function extractYoutubeId(url?: string | null): string | null {
  if (!url) return null;
  for (const pattern of YOUTUBE_ID_PATTERNS) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function isValidYoutubeUrl(url?: string | null): boolean {
  return extractYoutubeId(url) !== null;
}

export function youtubeThumbnailUrl(url?: string | null): string | null {
  const id = extractYoutubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export function youtubeEmbedUrl(url?: string | null): string | null {
  const id = extractYoutubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}
