import articlesData from "../data/articles.json"
import { ArticleCard } from "./Reusables/card"
import styled from "styled-components"
import { H2 } from "./Styling/Typography"
import { Carousel } from "./Styling/Carousel"

export const Articles = () => {
  return (
    <ArticlesSection>
      <H2>My Journey</H2>
      <Carousel
        data={articlesData.articles}
        renderItem={(article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        )}
      />
    </ArticlesSection>
  )
}


// Styling
const ArticlesSection = styled.div`
  margin-top: 100px;
`

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex - start;
  padding: 0px;
  gap: 64px;
  width: 1440px;
  height: 625px;`