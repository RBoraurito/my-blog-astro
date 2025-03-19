import { collection, fields } from '@keystatic/core'

export const posts = collection({
  label: 'Posts',
  slugField: 'metaTitle',
  path: 'src/content/posts/*',
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
    author: fields.text({
      label: 'Author',
      validation: {
        isRequired: true,
      },
    }),
    publishDate: fields.date({
      label: 'Publish date',
      defaultValue: {
        kind: 'today',
      },
    }),
    title: fields.text({
      label: 'Title',
      validation: {
        isRequired: true,
      },
    }),
    description: fields.text({
      label: 'Description',
      validation: {
        isRequired: true,
      },
    }),
    content: fields.markdoc({
      label: 'Content',
      options: {
        image: {
          directory: 'src/images/posts',
          publicPath: '/src/images/posts/',
        },
      },
    }),
  },
})
