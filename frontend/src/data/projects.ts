import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    name: 'DevHub',
    description:
      'Personal developer productivity and portfolio platform for documenting projects, skills, and growth.',
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-username/devhub',
  },
  {
    id: 2,
    name: 'Restaurant Management System',
    description:
      'Application for managing restaurant sales, operating expenses, and inventory from one workspace.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-username/restaurant-management-system',
  },
  {
    id: 3,
    name: 'Expense Management Application',
    description:
      'Personal finance tracking application for recording expenses and understanding spending habits.',
    technologies: ['React', 'TypeScript', 'REST API'],
    githubUrl: 'https://github.com/your-username/expense-management-app',
  },
]
