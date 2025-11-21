import articles from "../data/articles.json"
import { ArticleCard } from "./Reusables/card"

export const Articles = () => {
  return (
    <>
      <h2>My Journey</h2>
      <div className="articlescards">
        {articles.articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
          />))}
      </div>
    </>
  )
}