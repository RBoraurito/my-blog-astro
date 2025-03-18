import { config } from '@keystatic/core';
import { posts } from 'src/collections/posts';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts,
  },
});