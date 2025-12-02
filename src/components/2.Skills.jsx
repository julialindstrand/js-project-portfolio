import skills from "../data/skills.json"
import styled from "styled-components"
import { H2, H4 } from "./Styling/Typography"


export const Skills = () => {
  return (
    <SkillSection>
      <H2>Skills</H2>
      <SkillSectionSkills className="skills">
        {skills.skills.map((skill) => (
          <ol className="skill"
            key={skill.name}>
            <H4>
              {skill.group}</H4> <br></br>
            {skill.items.map(skilling => <ul key={skilling}>{skilling}</ul>)}
          </ol>))}
      </SkillSectionSkills>
    </SkillSection>
  )
}

// Styling

const SkillSection = styled.div`
  text-align: center;
`

const SkillSectionSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;`