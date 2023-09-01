import { ArticleLayout } from "components/ArticleLayout"
import { Article, getAllArticles, importArticle } from "lib/getAllArticles"
import { marked } from "marked"
const ArticleDetail = ({ article }: {article: Article}) => {
  const meta: Omit<Article, 'content'> = {
    slug: article.slug,
    title: article.title,
    description: article.description,
    publishDate: article.publishDate,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    metaImage: article.metaImage,
    author: article.author,
  }

  return (
    <ArticleLayout meta={meta} isRssFeed={false} previousPathname="Articles">
      <div dangerouslySetInnerHTML={{__html: marked.parse(article.content)}} />
    </ArticleLayout>
  )
}

export default ArticleDetail 

export async function getStaticProps({ params }) {
  const source = await importArticle(params.slug + ".md")

  return { 
    props: {
      article: source
    }
  }
}

export async function getStaticPaths() {
  const articles = await getAllArticles()
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }))
  return { paths, fallback: false }
}
