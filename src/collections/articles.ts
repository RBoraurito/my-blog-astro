import { fields, singleton } from '@keystatic/core'

export const articles = singleton({
  label: 'Articles',
  path: 'src/content/articles',
  schema: {
    metaTitle: fields.text({
      label: 'Meta title',
      validation: {
        isRequired: true,
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
      directory: 'src/images/articles',
      publicPath: '/articles',
      validation: {
        isRequired: true,
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
  },
})
