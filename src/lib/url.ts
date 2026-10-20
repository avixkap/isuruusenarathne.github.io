export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
