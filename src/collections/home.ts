import { fields, singleton } from '@keystatic/core'

export const home = singleton({
  label: 'Home',
  path: 'src/content/home',
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
      directory: 'src/images/home',
      publicPath: '/home',
      validation: {
        isRequired: true,
      },
    }),
    date: fields.date({
      label: 'Date',
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
    jobs: fields.array(
      fields.object({
        position: fields.text({
          label: 'Position',
          validation: {
            isRequired: true,
          },
        }),
        isActual: fields.checkbox({
          label: 'Is current',
          defaultValue: false,
        }),
        startDate: fields.date({
          label: 'Start date',
          validation: {
            isRequired: true,
          },
        }),
        endDate: fields.date({ label: 'End date' }),
        company: fields.text({
          label: 'Company',
          validation: {
            isRequired: true,
          },
        }),
        image: fields.image({
          label: 'Image',
          directory: 'src/images/home',
          publicPath: '/home',
          validation: {
            isRequired: true,
          },
        }),
      }),
      {
        label: 'Authors',
        slugField: 'company',
        itemLabel: (props) => props.fields.company.value,
        validation: {
          length: {
            min: 1,
          },
        },
      },
    ),
  },
})
