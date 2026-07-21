import { softwareSkills, serviceSkills } from '../data'

function SkillGroup({ groups }) {
  return (
    <div className="skills__box">
      {groups.map((group, i) => (
        <div className="skills__group" key={i}>
          {group.map((skill) => (
            <div className="skills__data" key={skill.name}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function Skills() {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">Softwares</h2>

      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Software Proficiency</h3>
          <SkillGroup groups={softwareSkills} />
        </div>

        <div className="skills__content">
          <h3 className="skills__title">My Services</h3>
          <SkillGroup groups={serviceSkills} />
        </div>
      </div>
    </section>
  )
}

export default Skills
