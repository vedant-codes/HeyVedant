"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const ProjectCard = ({
  id,
  title,
  tags,
  clientMessage,
  replyMessage,
  imageUrl,
  additionalImages = [],
  githubUrl,
  websiteUrl,
  reverse = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const allImages = [imageUrl, ...additionalImages].filter(Boolean)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleImageHover = () => {
    setIsHovering(true)
  }

  const handleImageLeave = () => {
    setIsHovering(false)
  }

  return (
    <div className="project-card">
      <div className={`project-layout ${reverse ? "reverse" : ""}`}>
        {/* Project Info */}
        <div className="project-info">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm uppercase font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-400 text-black flex items-center justify-center font-bold text-lg">
              {title.charAt(0)}
            </div>
            <h3 className="text-3xl font-bold uppercase">{title}</h3>
          </div>

          {clientMessage && (
            <div className="speech-bubble mb-4">
              <p>{clientMessage}</p>
            </div>
          )}

          {replyMessage && (
            <div className="text-right mb-6">
              <div className="question-bubble">{replyMessage}</div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {/* <div className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium">Like what you see?</div> */}
            <Link to={`/projects/${id}`} className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium">
              Like what you see?
            </Link>
            <Link to={"/contacts"} className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium">
              Let's chat!
            </Link>
          </div>
        </div>

        {/* Project Images */}
        <div className="project-images" onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
          {/* Main Image */}
          <div className="project-main-image">
            <img
              src={allImages[currentImageIndex] || "/placeholder.svg?height=400&width=600"}
              alt={`${title} - Main`}
              onClick={nextImage}
              style={{ cursor: allImages.length > 1 ? "pointer" : "default" }}
            />

            {/* Hover Overlay with Links */}
            {isHovering && (
              <div className="project-links">
                <a
                  href={githubUrl || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={websiteUrl || "#"} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Secondary Images */}
          {additionalImages.length > 0 && (
            <div className="project-secondary-images">
              {additionalImages.slice(0, 3).map((img, index) => (
                <div key={index} className="project-secondary-image" onClick={() => setCurrentImageIndex(index + 1)}>
                  <img src={img || "/placeholder.svg"} alt={`${title} - ${index + 1}`} />
                </div>
              ))}
            </div>
          )}

          {/* Mobile Mockup (for mobile/app projects) */}
          {id.includes("mobile") || id.includes("app") ? (
            <div className="project-mobile-mockup">
              <div className="project-mobile-screen">
                <img src={imageUrl || "/placeholder.svg?height=400&width=200"} alt={`${title} - Mobile`} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
