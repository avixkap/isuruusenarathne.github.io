import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are provided by the GitHub Pages workflow.
export default defineConfig({
  site: process.env.SITE_URL || 'https://isuruusenarathne.github.io',
  base: process.env.BASE_PATH || '/',
});
