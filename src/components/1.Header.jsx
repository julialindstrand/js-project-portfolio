import styled from "styled-components"
import { Icons } from "./Reusables/icons"
import { H1, H3, P } from "./Styling/Typography"

export const Header = () => {
  return (
    <HeaderSection>
      <TextSection>
        <H3>I am Julia Lindstrand</H3>
        <H1>Junior Frontend Developer</H1>
        <P>I am a developer with a passion for everything technology. For my whole life technology played a big part and I've always found much joy in learning about everything tech. What I bring to a new team is the same relentless curiosity that helped me debug code late into the night for school-projects, the discipline to learn independently, and the proven ability to thrive under pressure. I’m eager to apply these strengths to build robust, user‑focused products at  my next job.</P>
        <Icons /></TextSection>
      <Picture src="../../public/profilepicture.png" alt="Picture of Julia" />
    </HeaderSection>
  )
}


// Styling
const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 1440px) {
  flex-direction: column;
  align-items: center;
}`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 128px 128px 0 128px;
  max-width: 580px;
`

const Picture = styled.img`
  width: 526px;
  height: auto;
  object-fit: contain;
`