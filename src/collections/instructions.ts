import { collection, fields } from '@keystatic/core'

export const instructions = collection({
  label: 'Instructions food',
  slugField: 'metaTitle',
  path: 'src/content/instructions/*',
  format: { contentField: 'content' },
  schema: {
    metaTitle: fields.slug({
      name: {
        label: 'Meta title',
        validation: {
          isRequired: true,
        },
      },
    }),
    metaDescription: fields.text({
      label: 'Meta description',
      validation: {
        isRequired: true,
      },
    }),
    metaImage: fields.image({
      label: 'Meta image',
      directory: 'src/images/posts',
      publicPath: '/posts',
      validation: {
        isRequired: true,
      },
    }),
    content: fields.markdoc({
      label: 'Content',
      options: {
        image: {
          directory: 'src/images/instructions',
          publicPath: '/src/images/instructions/',
        },
      },
    }),
  },
})
