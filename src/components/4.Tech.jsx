import styled from "styled-components"
import { H2, H3 } from "./Styling/Typography"


export const Tech = () => {
  return (
    <TechSection>
      <H2>Tech</H2>
      <TechContainer>
        <H3>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, Mob-programming, Pair-programming, GitHub</H3>
      </TechContainer>
    </TechSection>
  )
}


// Styling
const TechSection = styled.div`
  margin-top: 120px;
`

const TechContainer = styled.div`
  justify-self: center;
  text-align: center;
  max-width: 782px;
`