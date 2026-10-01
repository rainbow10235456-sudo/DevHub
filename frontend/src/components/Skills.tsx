interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST API'],
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'AWS'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills page-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Technical Skills</p>
          <h2>Tools I use to build complete applications.</h2>
          <p>
            My current toolkit covers the browser, server, database, and the
            development workflow connecting them.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article key={category.name} className="skill-card">
              <h3>{category.name}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
