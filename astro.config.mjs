import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro"
import yaml from '@rollup/plugin-yaml';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  output: 'static',
  adapter: vercel(),
  integrations: [react(), mdx(), tailwind() , markdoc(), keystatic()],
});