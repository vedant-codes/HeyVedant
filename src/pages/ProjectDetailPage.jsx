"use client"

import { Link, useParams } from "react-router-dom"

const ProjectDetailPage = () => {
  const { id } = useParams()

  // In a real application, you would fetch project data based on the ID
  // For this demo, we'll use hardcoded data
  const projects = {
    lattice: {
      title: "LATTICE",
      tags: ["EDITORIAL", "ILLUSTRATION"],
      clientMessage: "Do you want to explore some styles with our articles and ebook?",
      replyMessage: "Where do I sign?",
      imageUrl: "/placeholder.svg?height=450&width=800",
      content:
        "This project involved creating a series of illustrations for Lattice's ebook and article series. The goal was to establish a consistent visual language that would complement their brand identity while adding a unique touch to their content.",
    },
    "oh-ja-cafe": {
      title: "OH, JA! CAFÉ",
      tags: ["BRAND", "ILLUSTRATION"],
      clientMessage:
        "Hey! We're two designers opening a small cafe and love your illustrations. They'd fit perfectly with our vibe!",
      replyMessage: "I'm in—let's make your cafe shine!",
      imageUrl: "/placeholder.svg?height=450&width=800",
      additionalImages: ["/placeholder.svg?height=450&width=800"],
      content:
        "Oh, Ja! Cafe approached me to create a vibrant and playful brand identity for their new cafe. The project included logo design, menu layouts, and a series of illustrations that would be used across their physical space and digital presence.",
    },
  }

  const project = projects[id]

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-10 md:py-20 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Project Not Found</h1>
        <p className="mb-6 md:mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="button-primary text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-400 hover:text-white mb-4 md:mb-8 text-sm md:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
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

        <div className="bg-white text-black rounded-xl p-4 md:p-6 mb-4 md:mb-6 max-w-[90%] self-start">
          <p className="text-sm md:text-lg">{project.clientMessage}</p>
        </div>

        <div className="self-end text-right mb-4 md:mb-6">
          <div className="inline-block bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
            {project.replyMessage}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="bg-purple-300 rounded-xl aspect-video flex items-center justify-center">
              <img
                src={project.additionalImages[0] || "/placeholder.svg"}
                alt={`${project.title} additional`}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="prose prose-lg prose-invert max-w-none text-sm md:text-base">
          <p>{project.content}</p>

          <p className="mt-4 md:mt-6">
            This is a placeholder for more detailed project content. In a real portfolio, this section would include:
          </p>

          <ul>
            <li>Project background and objectives</li>
            <li>Design process and challenges</li>
            <li>Solutions and implementation details</li>
            <li>Results and impact</li>
            <li>Client testimonials</li>
          </ul>

          <p className="mt-4 md:mt-6">
            Additional images, mockups, and interactive elements would also be included to showcase the project in
            detail.
          </p>
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            <div className="bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
              Like what you see?
            </div>
            <Link
              to="/contact"
              className="bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm"
            >
              Let's chat!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
