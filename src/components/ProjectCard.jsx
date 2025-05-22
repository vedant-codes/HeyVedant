"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import ProjectImageOverlay from "./ProjectImageOverlay"

const ProjectCard = ({
  id,
  title,
  tags,
  clientMessage,
  replyMessage,
  imageUrl,
  additionalImages,
  githubUrl,
  websiteUrl,
}) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const handleImageClick = (e) => {
    e.preventDefault()
    setIsImageExpanded(true)
  }

  return (
    <div className="project-card mb-10">
      <div className="p-4 md:p-6">
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 md:px-3 py-1 bg-gray-800 rounded-full text-xs md:text-sm uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-300 text-black flex items-center justify-center font-bold text-sm md:text-base">
              {title.charAt(0)}
            </div>
            <h3 className="text-xl md:text-3xl font-bold uppercase">{title}</h3>
          </div>

          {clientMessage && (
            <div className="bg-white text-black rounded-xl p-3 md:p-4 mb-3 md:mb-4 max-w-[90%] self-start">
              <p className="text-sm md:text-base">{clientMessage}</p>
            </div>
          )}

          {replyMessage && (
            <div className="self-end">
              <div className="inline-block bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm mb-4 md:mb-6">
                {replyMessage}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            <div
              className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center cursor-pointer overflow-hidden project-image-container"
              onClick={handleImageClick}
            >
              <img
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                className="rounded-xl w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            {additionalImages && additionalImages.length > 0 && (
              <div
                className="bg-purple-300 rounded-xl aspect-video flex items-center justify-center cursor-pointer overflow-hidden project-image-container"
                onClick={handleImageClick}
              >
                <img
                  src={additionalImages[0] || "/placeholder.svg"}
                  alt={`${title} additional`}
                  className="rounded-xl w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            )}
          </div>

          <div className="flex justify-center mt-4">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
              <div className="bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                Like what you see?
              </div>
              <Link
                to={`/projects/${id}`}
                className="bg-white text-black rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm"
              >
                Let's chat!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isImageExpanded && (
        <ProjectImageOverlay
          imageUrl={imageUrl}
          title={title}
          onClose={() => setIsImageExpanded(false)}
          githubUrl={githubUrl || "https://github.com"}
          websiteUrl={websiteUrl || "#"}
        />
      )}
    </div>
  )
}

export default ProjectCard
