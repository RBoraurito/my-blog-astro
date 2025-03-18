import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro"

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), tailwind() , markdoc(), keystatic()],
});