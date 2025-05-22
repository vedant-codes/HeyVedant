"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard"

const HomePage = () => {
  const projectsRef = useRef(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-20 flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center mb-6 md:mb-10">
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white ml-1"></div>
          </div>
        </div>

        <div className="text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-10">
            <span className="block mb-4">
              HEY! I'M{" "}
              <Link to="/about" className="bg-pink-500 px-2 md:px-4 py-1 rounded-xl inline-block no-hover">
                → VEDANT
              </Link>
            </span>
            <span className="block mb-4">
              A{" "}
              <Link to="/projects" className="bg-emerald-500 px-2 md:px-4 py-1 rounded-xl inline-block no-hover">
                → SOFTWARE DEVELOPER
              </Link>
            </span>
            <span className="block">
              BASED IN PUNE.
            </span>
          </h1>
        </div>
        <ScrollArrow targetId="projects" />
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="container mx-auto px-4 py-6 md:py-10">
        <h2 className="section-heading">SELECTED PROJECTS</h2>

        <div className="max-w-xl mx-auto">
          <ProjectCard
            id="oh-ja-cafe"
            title="OH, JA! CAFÉ"
            tags={["BRAND", "ILLUSTRATION"]}
            clientMessage="Hey! We’re two librarians trying to simplify our library’s system—your tool looks like just what we need to stay organized and help readers faster!"
            replyMessage="I’m in! Let’s make managing books a breeze!"
            imageUrl="/SQL1.png"
            additionalImages={["/oh-ja-extra.png"]}
            githubUrl="https://github.com/vedant/oh-ja-cafe"
            websiteUrl="https://oh-ja-cafe.com"
          />

          <ProjectCard
            id="lattice"
            title="LATTICE"
            tags={["EDITORIAL", "ILLUSTRATION"]}
            clientMessage="Hey! We struggle with writing queries—your tool could save us tons of time!"
            replyMessage="Say no more! Let’s turn plain English into powerful SQL!"
            imageUrl="/SQL1.png"
            githubUrl="https://github.com/vedant/lattice"
            websiteUrl="https://lattice-project.com"
          />
        </div>

        <div className="flex justify-center mt-6 md:mt-10">
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            SEE MORE PROJECTS
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section bg-pink-500 text-black py-12">
        <div className="container mx-w-xl mx-auto">
          <h2 className="text-white text-4xl font-extrabold text-center mb-8">A LITTLE ABOUT ME</h2>

          <div className="max-w-2xl mx-auto flex flex-col gap-4">

            <div className="bg-white text-black py-2 px-4 rounded-full font-semibold w-fit self-start">
              How did you get into design?
            </div>

            <div className="bg-white text-black p-4 rounded-xl font-semibold leading-relaxed shadow-md">
              Design has always been part of my life. My dad is a graphic designer, so I grew up surrounded by
              creativity. I spent a lot of time playing with Photoshop, Dreamweaver, Flash and After Effects as a kid.
            </div>

            <div className="bg-white text-black p-4 rounded-xl font-semibold leading-relaxed shadow-md">
              I wasn’t the best student in school, but I loved art. That passion led me to study multimedia, where I
              could channel my creativity into something meaningful.
            </div>

            <div className="bg-white text-black py-2 px-4 rounded-full font-semibold w-fit self-start mt-6">
              What’s your design process like?
            </div>

            <div className="bg-white text-black p-4 rounded-xl font-semibold leading-relaxed shadow-md">
              Curiosity and collaboration are key for me. I believe the best ideas come from exploring new possibilities
              and pushing boundaries with others.{" "}
              <Link to="/about" className="underline font-bold">
                Check my FAQ
              </Link>{" "}
              for more details.
            </div>

            <div className="flex justify-center mt-10">
              <Link
                to="/about"
                className="bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-lg px-6 py-3 rounded-full shadow-lg inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                SEE THE REST OF THE CONVERSATION
              </Link>
            </div>
          </div>
        </div>
</section>

    </div>
  )
}

export default HomePage
