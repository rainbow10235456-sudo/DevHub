# DevHub

DevHub is a personal developer productivity and portfolio platform built as a full-stack learning project.

The goal of this project is to build a real-world application while improving skills in frontend development, backend development, databases, testing, DevOps, cloud deployment, and software architecture.

## Project Goals

DevHub will eventually provide:

- A public developer portfolio
- Personal project management
- Task tracking
- A learning progress tracker
- A coding journal
- Skills tracking
- Authentication and user accounts
- Dashboard analytics
- Cloud deployment
- AI-assisted productivity features

This project is also intended to demonstrate professional software development practices such as clean architecture, testing, Git workflows, CI/CD, containerization, and cloud deployment.

---

## Planned Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security

### Database

- PostgreSQL

### Authentication

- Spring Security
- JWT authentication

### Testing

Frontend:

- Vitest
- React Testing Library

Backend:

- JUnit
- Mockito
- Spring Boot Test

API Testing:

- Postman

### DevOps

- Git
- GitHub
- Docker
- Docker Compose
- GitHub Actions

### Cloud

Planned cloud platform:

- AWS

Possible AWS services:

- EC2
- RDS
- S3
- IAM
- CloudWatch

---

## Project Architecture

The planned application architecture is:

```text
User
 |
 v
React + TypeScript
Frontend
 |
 | HTTPS / REST API
 v
Spring Boot
Backend
 |
 v
PostgreSQL
Database
```

The frontend and backend will be developed as separate applications.

```text
devhub/
|
|-- frontend/
|
|-- backend/
|
|-- docs/
|
|-- docker-compose.yml
|
|-- .gitignore
|
`-- README.md
```

---

## Planned Features

### Public Portfolio

The public part of DevHub will include:

- Home page
- About page
- Skills
- Projects
- Contact information

### Authentication

Users will be able to:

- Register
- Log in
- Log out
- Access protected dashboard pages

### Dashboard

The private dashboard will eventually contain:

- Project overview
- Learning progress
- Recent coding journal entries
- Task statistics
- Skill progress

### Project Manager

Users will be able to:

- Create projects
- Update projects
- Delete projects
- Track project status
- Add project technologies
- Add GitHub links
- Manage project tasks

### Learning Tracker

Users will be able to track technologies they are learning.

Example:

```text
Java              In Progress
Spring Boot        In Progress
React              Learning
PostgreSQL         Planned
Docker             Planned
AWS                Planned
```

### Coding Journal

The coding journal will allow users to record:

- What they learned
- Problems they encountered
- Solutions they discovered
- Useful commands
- Architecture decisions
- Development notes

### Task Management

Each project can contain tasks.

Example:

```text
DevHub

[x] Create React project
[x] Create repository
[ ] Build navbar
[ ] Build homepage
[ ] Add routing
[ ] Create Spring Boot backend
```

---

## Development Roadmap

### Phase 1 - Project Setup

- [ ] Create Git repository
- [ ] Create React + TypeScript application
- [ ] Configure project structure
- [ ] Create first Git commit
- [ ] Create GitHub repository

### Phase 2 - Frontend Foundation

- [ ] Remove default Vite content
- [ ] Create navigation bar
- [ ] Create hero section
- [ ] Create About section
- [ ] Create Skills section
- [ ] Create Projects section
- [ ] Create footer

### Phase 3 - Frontend Architecture

- [ ] Add React Router
- [ ] Create reusable components
- [ ] Create application layouts
- [ ] Add responsive design
- [ ] Add TypeScript models

### Phase 4 - Backend

- [ ] Create Spring Boot application
- [ ] Create REST API
- [ ] Create controller layer
- [ ] Create service layer
- [ ] Create repository layer
- [ ] Add validation
- [ ] Add global exception handling

### Phase 5 - Database

- [ ] Install PostgreSQL
- [ ] Configure database connection
- [ ] Create database entities
- [ ] Create database relationships
- [ ] Add migrations
- [ ] Connect Spring Boot to PostgreSQL

### Phase 6 - Full-Stack Integration

- [ ] Connect React to Spring Boot
- [ ] Load projects from API
- [ ] Create projects
- [ ] Update projects
- [ ] Delete projects
- [ ] Add loading states
- [ ] Add error handling

### Phase 7 - Authentication

- [ ] Add Spring Security
- [ ] Implement user registration
- [ ] Implement login
- [ ] Add password hashing
- [ ] Add JWT authentication
- [ ] Protect API endpoints
- [ ] Protect React routes

### Phase 8 - Testing

- [ ] Add backend unit tests
- [ ] Add backend integration tests
- [ ] Add frontend component tests
- [ ] Add API tests

### Phase 9 - Docker

- [ ] Dockerize frontend
- [ ] Dockerize backend
- [ ] Dockerize PostgreSQL
- [ ] Configure Docker Compose

### Phase 10 - CI/CD

- [ ] Create GitHub Actions workflow
- [ ] Run tests automatically
- [ ] Build application automatically
- [ ] Prepare automatic deployment

### Phase 11 - Cloud Deployment

- [ ] Deploy application
- [ ] Configure production PostgreSQL
- [ ] Configure environment variables
- [ ] Configure monitoring
- [ ] Configure logging

### Phase 12 - Advanced Features

- [ ] Dashboard analytics
- [ ] Search
- [ ] Notifications
- [ ] File uploads
- [ ] AI development assistant features

---

## Development Workflow

Features should be developed using separate Git branches.

Example:

```bash
git checkout -b feature/home-page
```

Development workflow:

```text
Create feature branch
        |
        v
Write code
        |
        v
Run application
        |
        v
Test changes
        |
        v
Commit changes
        |
        v
Push branch
        |
        v
Create Pull Request
        |
        v
Merge into main
```

Example commit messages:

```text
chore: initialize project

feat: add navigation bar

feat: add homepage hero section

feat: add projects page

fix: correct mobile navigation

test: add project service tests

docs: update project documentation
```

---

## Development Philosophy

The goal of this project is not simply to generate working code.

For every feature, the development process should follow:

```text
Understand
    |
    v
Design
    |
    v
Implement
    |
    v
Test
    |
    v
Debug
    |
    v
Refactor
    |
    v
Document
```

AI development tools such as Codex may be used to assist development, but generated code should be reviewed and understood before it is accepted into the project.

---

## Current Status

Project status:

```text
Early Development
```

Current focus:

```text
Frontend foundation
```

Initial milestone:

```text
Create and run the React + TypeScript application.
```

---

## Author

Personal full-stack software development learning project.

---

## License

This project is currently intended for personal learning and portfolio use.