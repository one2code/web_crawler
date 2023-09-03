export function normalizeUrl(url: string): string{
  if (url.startsWith('http://')) {
    url = url.replace('http://', 'https://');
  }
  
  try {
    new URL(url);
  } catch (e) {
    throw new Error(`Invalid URL ${url}`);
  }

return url.replace(/\/$/, '')
}
