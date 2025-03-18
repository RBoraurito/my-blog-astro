import { fields, singleton } from "@keystatic/core";

export const projects = singleton({
  label: 'Projects',
  path: 'src/content/projects',
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
    projects: fields.array(
      fields.object({
        title: fields.text({label: "Title", validation: {
          isRequired: true
        }}),
        description: fields.text({label: "Description", validation: {
          isRequired: true
        }}),
        image: fields.image({label: "Image", validation: {
          isRequired: true
        }}),
        linkHref: fields.url({
          label: "Link",
          validation: {
            isRequired: true
          }
        }),
        linkLabel: fields.text({
          label: "Link label",
          validation: {
            isRequired: true
          }
        })
      }),
      {
        label: "Projects",
        slugField: 'title',
        itemLabel: (props) => props.fields.title.value
      }
    )
  }
})