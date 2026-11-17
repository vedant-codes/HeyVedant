"use client"

import { Link, useParams } from "react-router-dom"
import { getProject } from "../data/projects"
import ProjectVisual from "../components/ProjectVisual"
import ZetrosDemo from "../components/ZetrosDemo"

const ProjectDetailPage = () => {
  const { id } = useParams()

  const project = getProject(id)


  if (!project) {
    return (
      <div className="page-content container mx-auto px-4 py-10 md:py-20 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Project Not Found</h1>
        <p className="mb-6 md:mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="button-primary text-sm md:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-400 hover:text-white mb-4 md:mb-8 text-sm md:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="mr-2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Projects
      </Link>

      <div className="max-w-3xl mx-auto project-card p-4 md:p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 md:px-3 py-1 bg-gray-800 rounded-full text-xs md:text-sm uppercase">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-purple-300 text-black flex items-center justify-center font-bold text-sm md:text-xl">
            {project.title.charAt(0)}
          </div>
          <h1 className="text-xl md:text-4xl font-bold uppercase">{project.title}</h1>
        </div>

        {project.period && <p className="text-xs md:text-sm text-gray-400 -mt-2 mb-4 md:mb-6">{project.period}</p>}

        <div className="bg-white text-black rounded-xl p-4 md:p-6 mb-4 md:mb-6 max-w-[90%] self-start">
          <p className="text-sm md:text-lg">{project.clientMessage}</p>
        </div>

        <div className="self-end text-right mb-4 md:mb-6">
          <div className="inline-block bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
            {project.replyMessage}
          </div>
        </div>

        {project.demo === "zetros" ? (
          <div className="mb-4 md:mb-6">
            <ZetrosDemo />
          </div>
        ) : project.imageUrl ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            {[project.imageUrl, ...(project.additionalImages || [])].map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                className={`rounded-xl w-full h-auto border border-gray-700 ${i === 0 ? "md:col-span-2" : ""}`}
              />
            ))}
          </div>
        ) : (
          <div className="mb-4 md:mb-6">
            <ProjectVisual title={project.title} lines={project.terminal} stack={project.stack} />
          </div>
        )}

        <div className="prose prose-lg prose-invert max-w-none text-sm md:text-base">
          <p>{project.content}</p>
        </div>

        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {project.stack && (
          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((t) => (
              <span key={t} className="project-stack-chip">{t}</span>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
