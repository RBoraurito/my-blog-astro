import { fields, singleton } from "@keystatic/core";

export const aboutUs = singleton({
  label: 'About us',
  path: 'src/content/about-us',
  schema: {
    metaTitle: fields.text({label: 'Meta title', validation: {
      isRequired: true
    }}),
    metaDescription: fields.text({
      label: "Meta description",
      validation: {
        isRequired: true
      }
    }),
    metaImage: fields.image({
      label: "Meta image",
      directory: 'src/images/about-us',
      publicPath: '/about-us',
      validation: {
        isRequired: true
      }
    }),
    title: fields.text({ label: 'Title', validation: {
      isRequired: true
    } }),
    description: fields.text({ label: 'Description', validation: {
      isRequired: true
    } }),
    image: fields.image({
      label: "Image",
      validation: {
        isRequired: true
      }
    }),
  }
})