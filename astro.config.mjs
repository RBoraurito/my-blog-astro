import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), tailwind(), /*NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main'
      },
      media_folder: 'public/img',
      public_folder: 'img',
      media_library: {
        name: 'cloudinary'
      },
      config: {
        cloud_name: 'dzgf40ghh',
        api_key: '958272413457741'
      },
      collections: [
        {
          name: "pages",
          label: "Pages",
          files: [
            {
              label: "Home",
              name: "home",
              file: "src/content/en/home.md",
              fields: [
                { label: "Meta Title", name: "metaTitle", widget: "string" },
                { label: "Meta Description", name: "metaDescription", widget: "text" },
                { label: "Meta Image", name: "metaImage", widget: "image" },
                { label: "Title", name: "title", widget: "string"},
                { label: "Description", name: "description", widget: "markdown" },
                {
                  label: 'Jobs',
                  name: "jobs",
                  widget: 'list',
                  fields: [
                    { label: "Company", name: "company", widget: "string"},
                    { label: "Position", name: "position", widget: "string", default: 'Frontend Developer'},
                    { label: "Start date", name: "startDate", widget: "date" },
                    { label: "End date", name: "endDate", widget: "date" },
                    { label: "Is Actual", name: 'isActual', widget: "boolean", default: false },
                    { label: "Image",  name: "image", widget: "image",allow_multiple: false }
                  ]
                },
              ]
            },
            {
              label: "About us",
              name: "about-us",
              file: "src/content/en/about-us.md",
              fields: [
                { label: "Meta Title", name: "metaTitle", widget: "string" },
                { label: "Meta Description", name: "metaDescription", widget: "text" },
                { label: "Meta Image", name: "metaImage", widget: "image" },
                { label: "Title", name: "title", widget: "string"},
                { label: "Description", name: "description", widget: "markdown" },
                { label: "Image", name: "image", widget: "image"}
              ]
            },
            {
              label: "Stack",
              name: "stack",
              file: "src/content/en/stack.md",
              fields: [
                { label: "Meta Title", name: "metaTitle", widget: "string" },
                { label: "Meta Description", name: "metaDescription", widget: "text" },
                { label: "Meta Image", name: "metaImage", widget: "image" },
                { label: "Title", name: "title", widget: "string"},
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Sections",
                  name: "sections",
                  widget: "list",
                  fields: [
                    { label: "Title", name: "title", widget: "string"},
                    {
                      label: "Technologies",
                      name: "tech",
                      widget: "list",
                      fields:[
                        { label: "Title", name: "title", widget: "string"},
                        { label: "Description", name: "description", widget: "markdown" },
                        { label: "Link", name: "link", widget: "string", required: false}
                      ]
                    }
                  ]
                }
              ] 
            },
            {
              label: "Projects",
              name: "projects",
              file: "src/content/en/projects.md",
              fields: [
                { label: "Meta Title", name: "metaTitle", widget: "string" },
                { label: "Meta Description", name: "metaDescription", widget: "text" },
                { label: "Meta Image", name: "metaImage", widget: "image" },
                { label: "Title", name: "title", widget: "string"},
                { label: "Description", name: "description", widget: "text" },
                {
                  label: "Projects",
                  name: "projects",
                  widget: "list",
                  fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Description", name: "description", widget: "text" },
                    { label: "Image", name: "image", widget: "image" },
                    { label: "Link label", name: "linkLabel", widget: "string" },
                    { label: "Link href", name: "linkHref", widget: "string" },
                  ]
                }
              ]
            },
            {
              label: "Articles",
              name: "articles",
              file: "src/content/en/articles.md",
              fields: [
                { label: "Meta Title", name: "metaTitle", widget: "string" },
                { label: "Meta Description", name: "metaDescription", widget: "text" },
                { label: "Meta Image", name: "metaImage", widget: "image" },
                { label: "Title", name: "title", widget: "string"},
                { label: "Description", name: "description", widget: "text" }
              ]
            },
          ],
        },
        {
          name: "articles",
          label: "Articles",
          identifier_field: "title",
          folder: 'content/en/posts',
          create: true,
          slug: "{{slug}}",
          fields: [
            { label: "Meta Title", name: "metaTitle", widget: "string" },
            { label: "Meta Description", name: "metaDescription", widget: "text" },
            { label: "Meta Image", name: "metaImage", widget: "image" },
            { label: "Author", name: "author", widget: "string", default: "Ricardo Boraure"},
            { label: "Publish Date", name: "publishDate", widget: "datetime"},
            { label: "Title", name: "title", widget: "string"},
            { label: "Description", name: "description", widget: "text" },
            { label: "content", name: "content", widget: "markdown" }
          ]
        }
      ],
    },
  }),*/],

});