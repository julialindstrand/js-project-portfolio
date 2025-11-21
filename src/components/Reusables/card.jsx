// import articles from "./src/data/articles.json"
import { Button } from "./buttons"

export const ArticleCard = ({ title, image, description, readmore }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" className="card-img" />
        <h3>{title}</h3>
        <p>{description}</p>
        <Button href={readmore} title="Read Article" className="read-more">
        </Button>
      </div></>
  )
}

export const ProjectCard = ({ name, image, description, netlify, github }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" className="card-img" />
        <h3>{name}</h3>
        <p>{description}</p>
        <Button href={netlify} title="Live Demo"
          className="live-demo">
        </Button>
        <Button href={github} title="View Code"
          className="view-code">
        </Button>
      </div>
    </>
  )
}