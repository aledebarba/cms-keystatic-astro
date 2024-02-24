// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: "./tailwind.config.js",
    applyBaseStyles: true
  }), react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: vercel()
});