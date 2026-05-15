import eslintPluginAstro from 'eslint-plugin-astro'
export default [
  {
    ignores: ['.astro/**', '.vercel/**', 'dist/**', 'node_modules/**'],
  },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
