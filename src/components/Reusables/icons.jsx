import githubicon from "../../images/icons/github.png"
import linkedinicon from "../../images/icons/linkedin.png"
import stackoverflowicon from "../../images/icons/stackoverflow.png"
import styled from "styled-components"

export const Icons = () => {
  return (
    <IconRow>
      <a href="https://github.com/julialindstrand"><Picture src={githubicon} alt="Github Logo" /></a>
      <a href="https://www.linkedin.com/flagship-web/mynetwork/grow/"><Picture src={linkedinicon} alt="LinkedIn Logo" /></a>
      <a href="https://stackoverflow.com/users/31290851/user31290851"><Picture src={stackoverflowicon} alt="Stackoverflow Logo" /></a>
    </IconRow>
  )
}

const IconRow = styled.div`
  display: flex;
  flex-direction: row;`

const Picture = styled.img`
 padding-right: 15px;
`