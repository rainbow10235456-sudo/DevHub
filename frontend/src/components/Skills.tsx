const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'Git',
  'Docker',
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <p className="section-label">Skills</p>

        <h2>Technologies I work with</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills