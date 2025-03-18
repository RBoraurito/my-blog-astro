import { config } from '@keystatic/core';
import { home, posts, aboutUs, stack, projects } from 'src/collections';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts,
  },
  singletons: {
    home,
    aboutUs,
    stack,
    projects
  }
});