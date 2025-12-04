import { defineCollection, z } from 'astro:content'

import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
})
const instructions = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/instructions' }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    metaImage: z.string(),
  }),
})

export const collections = { posts, instructions }
