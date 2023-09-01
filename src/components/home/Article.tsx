import { Card } from "../Card";
import type { Article as IArticle } from '../../lib/getAllArticles'
import { formatDate } from "../../lib/formatDate";

export function Article({ article }: { article: IArticle}) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.publishDate} decorate>
        {formatDate(article.publishDate)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}