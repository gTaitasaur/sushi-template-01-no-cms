// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';
import path from 'path';

function getEnvSiteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  for (const file of ['.env.local', '.env']) {
    try {
      const envPath = path.resolve(process.cwd(), file);
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        const match = content.match(/^SITE_URL=(.+)$/m);
        if (match) return match[1].trim();
      }
    } catch (e) {}
  }
  return undefined;
}

const siteUrl = getEnvSiteUrl();

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [sitemap()],
  server: {
    allowedHosts: true,
  },
});



