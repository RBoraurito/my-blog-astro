import { config } from '@keystatic/core'
import {
  home,
  posts,
  aboutUs,
  stack,
  projects,
  articles,
  qrPanDeJamon,
  instructions,
} from 'src/collections'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    instructions,
    posts,
  },
  singletons: {
    home,
    aboutUs,
    stack,
    projects,
    articles,
    qrPanDeJamon,
  },
})
