// import articles from "./src/data/articles.json"
// import projects from "./src/data/projects.json"

export const ArticleCard = () => {
  return (
    <></>
  )
}

export const ProjectCard = ({ name, image, description }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" className="card-img" />
        <h3>{name}</h3>
        <p>{description}</p>
        {/* <a href={netlify}></a> */}
      </div>
    </>
  )
}