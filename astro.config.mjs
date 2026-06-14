// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// JarvisCo svetainės domenas — turi sutapti su content.js `url`
export const SITE_URL = 'https://jarvisweb.lt';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !/\/(privatumo-politika|taisykles)\/?$/.test(page),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
