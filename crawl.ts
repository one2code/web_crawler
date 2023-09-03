export function normalizeUrl(url: string): string{
  if (url.startsWith('http://')) {
    url = url.replace('http://', 'https://');
  }
return url.replace(/\/$/, '')
}
