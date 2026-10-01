import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects page-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Selected Projects</p>
          <h2>Applying what I learn through practical work.</h2>
          <p>
            These projects explore full-stack architecture, useful product
            features, and maintainable implementation patterns.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
