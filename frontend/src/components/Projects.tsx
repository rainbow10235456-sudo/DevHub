import ProjectCard, { type Project } from './ProjectCard'

const projects: Project[] = [
  {
    title: 'DevHub',
    description:
      'A personal developer workspace for organizing projects, learning progress, and technical goals.',
    technologies: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'Task Tracker API',
    description:
      'A REST API for creating tasks, updating their status, and organizing daily work.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Learning Journal',
    description:
      'A simple application for recording study notes and reviewing completed learning topics.',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <p className="section-label">Projects</p>
        <h2>Things I am building</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
