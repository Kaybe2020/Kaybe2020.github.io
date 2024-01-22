import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kaybe2020.github.io',
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});