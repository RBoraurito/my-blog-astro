import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getAllArticles } from './getAllArticles'
import { marked } from 'marked'

export async function generateRssFeed() {
  const articles = await getAllArticles()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const author = {
    name: 'Ricardo Boraure',
    email: 'ricardoboraure@gmail.com',
  }

  const feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let article of articles) {
    const {content, slug, title, description, publishDate} = article
    const url = `${siteUrl}/articles/${slug}`
    const Component = React.createElement(
      'div',
      {
        isRssFeed: true,
        dangerouslySetInnerHTML: {
          __html: marked.parse(content)
        }
      })
    const html = ReactDOMServer.renderToStaticMarkup(Component)

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(publishDate),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
