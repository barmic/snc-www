import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const defaultLocale = 'fr';
const locales = ['en', 'fr'];

// https://astro.build/config
export default defineConfig({
  site: 'https://snowcamp.io',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [mdx()]
});
