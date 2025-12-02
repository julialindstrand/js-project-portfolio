import styled from "styled-components"
import {
  theme
} from "../Styling/Theme"

export const Button = ({ href, title, className }) => {

  return (
    <>
      <StyledButton $color={theme.color} $className={className}>
        <StyledLink $color={theme.color} $className={className} href={href}>{title}</StyledLink>
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button`
  width: 192px;
  height: 48px;
  background: ${(props) => theme.variant[props.$className]?.background};
  border-radius: 12px;
  border: 2px solid ${(props) => props.$color};
  gap: 5xp;
  `

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => theme.variant[props.$className]?.color};
  `