import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro"
import yaml from '@rollup/plugin-yaml';
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml(), tailwindcss()]
  },
  output: 'static',
  adapter: vercel(),
  integrations: [react(), mdx() , markdoc(), keystatic()],
});