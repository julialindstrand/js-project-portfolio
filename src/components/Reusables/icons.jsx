import githubicon from "../../images/icons/github.png"
import linkedinicon from "../../images/icons/linkedin.png"
import stackoverflowicon from "../../images/icons/stackoverflow.png"

export const Icons = () => {
  return (
    <>
      <a href="https://github.com/julialindstrand"><img src={githubicon} alt="Github Logo" /></a>
      <a href="https://www.linkedin.com/flagship-web/mynetwork/grow/"><img src={linkedinicon} alt="LinkedIn Logo" /></a>
      <a href="https://stackoverflow.com/users/31290851/user31290851"><img src={stackoverflowicon} alt="Stackoverflow Logo" /></a>
    </>
  )
}