import skills from "../data/skills.json"
import styled from "styled-components"
import { H2, H4, P, UL } from "./Styling/Typography"
import {
  theme
} from "./Styling/Theme"

export const Skills = () => {
  return (
    <SkillSection>
      <H2>Skills</H2>
      <SkillSectionSkills className="skills">
        {skills.skills.map((skill) => (
          <SkillColumn $color={theme.color}>
            <ol className="skill"
              key={skill.name}>
              <H4>
                {skill.group}</H4> <br></br>
              {skill.items.map(skilling => <UL key={skilling}>{skilling}</UL>)}
            </ol></SkillColumn>))}
      </SkillSectionSkills>
    </SkillSection>
  )
}

// Styling
const SkillSection = styled.div`
  text-align: center;
  margin-top: 80px;
  `

const SkillSectionSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 15px;

@media(max-width: 1440px) {
  flex-direction: column;
  align-items: center;
}`

const SkillColumn = styled.div`
    text-align: center;
    width: 180px;
    padding-right: 30px;
    &:not(:last-child) {
    border-right: 2px solid ${(props) => props.$color};
    }

    @media (max-width: 1440px) {
        &:not(:last-child) {
            border-right: none;
            border-bottom: 2px solid ${(props) => props.$color};
            padding-bottom: 20px;
            margin-bottom: 20px;
        }}`