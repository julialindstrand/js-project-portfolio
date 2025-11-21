import skills from "../data/skills.json"

export const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <div className="skills">
        {skills.skills.map((skill) => (
          <div className="skill"
            key={skill.name}>
            {skill.group}
            {skill.items.map(skilling => <span key={skilling}>{skilling}</span>)}
          </div>))}
      </div>
    </>
  )
}