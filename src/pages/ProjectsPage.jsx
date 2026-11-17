import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

const ProjectsPage = () => {
  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <h1 className="section-heading">ALL PROJECTS</h1>
      <div className="max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} reverse={false} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
