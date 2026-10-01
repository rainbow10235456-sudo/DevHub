import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-number" aria-hidden="true">
          {String(project.id).padStart(2, '0')}
        </span>
        <h3>{project.name}</h3>
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="project-technologies" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <a
        className="project-link"
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}

export default ProjectCard
