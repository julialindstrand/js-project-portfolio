import { Icons } from "./Reusables/icons"
import styled from "styled-components"
import { H2, H3 } from "./Styling/Typography"

export const Contact = () => {
  return (
    <ContactSection>
      <Picture src="../src/images/profilepicture.png" alt="Picture of Julia" />
      <ContactInfo>
        <H2>Let's talk</H2>
        <H3>Julia Lindstrand</H3>
        <H3>+46 (0) 768 28 97 94</H3>
        <H3>julia.lindstrand@pm.me</H3>
        <Icons /></ContactInfo>
    </ContactSection>
  )
}

const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Picture = styled.img`
  width: 476px;
`
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`