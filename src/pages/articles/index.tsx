import Head from 'next/head'

import { Card } from 'components/Card'
import { SimpleLayout } from 'components/SimpleLayout'
import { getAllArticles } from 'lib/getAllArticles'
import { formatDate } from 'lib/formatDate'
import type { Article } from 'lib/getAllArticles'

import * as content from 'content/en/articles.md'
import { ArticlesPage } from 'types/articles'

const { title, description, metaTitle, metaDescription, metaImage } = content as unknown as ArticlesPage

export default function ArticlesIndex({ articles }: { articles: Article[]}) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />
        <meta
          name="og:image"
          content={metaImage}
        />
      </Head>
      <SimpleLayout
        title={title}
        intro={description}
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

function Article({ article }: {article: Article}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.publishDate}
          className="md:hidden"
          decorate
        >
          {formatDate(article.publishDate)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.publishDate}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.publishDate)}
      </Card.Eyebrow>
    </article>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ content, ...meta }) => meta),
    },
  }
}
