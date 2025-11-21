import projects from "../data/projects.json"
import { ProjectCard } from "./card"

export const Project = () => {
  return (
    <>
      <h2>Featured Projects</h2>
      <div className="projectcards">
        {projects.projects.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            netlify={project.netlify}
            github={project.github}
          />))}
      </div>
    </>
  )
}