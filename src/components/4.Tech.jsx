import styled from "styled-components"
import { H2, H3 } from "./Styling/Typography"


export const Tech = () => {
  return (
    <>
      <H2>Tech</H2>
      <TechSection>
        <H3>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, Mob-programming, Pair-programming, GitHub</H3>
      </TechSection>
    </>
  )
}


// Styling

const TechSection = styled.div`
  justify-self: center;
  text-align: center;
  max-width: 782px;
`