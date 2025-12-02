import projects from "../data/projects.json"
import { ProjectCard } from "./Reusables/card"
import styled from "styled-components"
import { H2 } from "./Styling/Typography"

export const Project = () => {
  return (
    <>
      <H2>Featured Projects</H2>
      <Projects className="projectcards">
        {projects.projects.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            netlify={project.netlify}
            github={project.github}
          />))}
      </Projects>
    </>
  )
}

const Projects = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex - start;
padding: 0px;
gap: 64px;
width: 1440px;
height: 625px;`