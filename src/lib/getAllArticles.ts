import glob from 'fast-glob'
import * as path from 'path'

export interface Article extends MetaData {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishDate: string;
}

export async function importArticle(articleFilename: string): Promise<Article> {
  let { ...attrs } = await import(
    `../content/posts/${articleFilename}`
  )

  delete attrs.default

  return {
    slug: articleFilename.replace(/(\/index)?\.md$/, ''),
    ...attrs,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  let articleFilenames = await glob('*.md', {
    cwd: path.join(process.cwd(), 'content/posts'),
  })

  let articles: Article[] = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.publishDate).getDate() - new Date(a.publishDate).getDate())
}
