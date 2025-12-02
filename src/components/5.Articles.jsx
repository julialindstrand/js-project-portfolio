import articles from "../data/articles.json"
import { ArticleCard } from "./Reusables/card"
import styled from "styled-components"
import { H2 } from "./Styling/Typography"

export const Articles = () => {
  return (
    <>
      <H2>My Journey</H2>
      <ArticlesSection className="articlescards">
        {articles.articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
          />))}
      </ArticlesSection>
    </>
  )
}

const ArticlesSection = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex - start;
padding: 0px;
gap: 64px;
width: 1440px;
height: 625px;`