import { fields, singleton } from "@keystatic/core";

export const stack = singleton({
  label: 'Stack',
  path: 'src/content/stack',
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
    sections: fields.array(
      fields.object({
        title: fields.text({label: "Title", validation: {
          isRequired: true
        }}),
        tech: fields.array(
          fields.object({
            title: fields.text({label: "Title", validation: {
              isRequired: true
            }}),
            description: fields.text({label: "Description", validation: {
              isRequired: true
            }}),
            url: fields.url({label: "HREF"})
          }),
          {
            label: "Tech",
            slugField: 'title',
            itemLabel: (props) => props.fields.title.value
          }
        )
      }),
      {
        label: "Sections",
        slugField: 'title',
        itemLabel: (props) => props.fields.title.value
      }
    )
  }
})