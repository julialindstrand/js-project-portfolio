import { H3, P } from "../Styling/Typography"
import { Button } from "./buttons"
import styled from "styled-components"

export const ArticleCard = ({ title, image, description, readmore }) => {
  return (
    <>
      <Card className="card">
        <img src={image} alt="" className="card-img" />
        <H3>{title}</H3>
        <P>{description}</P>
        <Button href={readmore} title="Read Article" className="read-article">
        </Button>
      </Card></>
  )
}

export const ProjectCard = ({ name, image, description, netlify, github }) => {
  return (
    <>
      <Card className="card">
        <img src={image} alt="" className="card-img" />
        <H3>{name}</H3>
        <P>{description}</P>
        <Buttons>
          <Button href={netlify} title="Live Demo"
            className="live-demo">
          </Button>
          <Button href={github} title="View Code"
            className="view-code">
          </Button>
        </Buttons>
      </Card>
    </>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex - start;
  padding: 0px;
  gap: 24px;
  width: 400px;
  height: 700px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
