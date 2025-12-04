import { fields, singleton } from '@keystatic/core'

export const qrPanDeJamon = singleton({
  label: 'QR Pan de Jamon',
  path: 'src/content/qr-pan-de-jamon',
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
      directory: 'src/images/qr-pan-de-jamon',
      publicPath: '/qr-pan-de-jamon',
      validation: {
        isRequired: true,
      },
    }),
    bankInfo: fields.image({
      label: 'Bank info image',
      directory: 'src/images/qr-pan-de-jamon',
      publicPath: '/qr-pan-de-jamon',
      validation: {
        isRequired: true,
      },
    }),
  },
})
