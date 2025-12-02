import projectsData from "../data/projects.json"
import { ProjectCard } from "./Reusables/card"
import styled from "styled-components"
import { H2 } from "./Styling/Typography"
import { Carousel } from "./Styling/Carousel"

export const Project = () => {
  return (
    <ProjectSection>
      <H2>Featured Projects</H2>
      <Carousel
        data={projectsData.projects}
        renderItem={(project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            netlify={project.netlify}
            github={project.github}
          />
        )}
      />
    </ProjectSection>
  )
}


// Styling
const ProjectSection = styled.div`
  margin-top: 80px;
`

const Projects = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 64px;
width: 1440px;
height: 625px;`