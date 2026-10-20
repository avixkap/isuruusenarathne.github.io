import { getCollection, getEntry, type CollectionKey } from 'astro:content';

// Keeps entries in the same order as they appear in the JSON file.
export async function getOrderedCollection<C extends CollectionKey>(name: C) {
  const entries = await getCollection(name);
  return entries.sort((a, b) => Number(a.id) - Number(b.id));
}

export async function getProfile() {
  const entry = await getEntry('profile', 'profile');
  if (!entry) throw new Error('Missing src/content/profile.json');
  return entry.data;
}

export function formatPeriod(start: string, end?: string): string {
  return `${start} – ${end ?? 'Present'}`;
}
