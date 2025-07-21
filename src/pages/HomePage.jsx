"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import ScrollArrow from "../components/ScrollArrow"
import ProjectCard from "../components/ProjectCard"
import TechStack from "../components/TechStack"

const HomePage = () => {
  const projectsRef = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Height */}
      <section className="hero-section container mx-auto px-4">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-white flex items-center justify-center mb-6 md:mb-10 overflow-hidden">
  <img
    src="/main.png"
    alt="Profile"
    className="w-full h-full object-cover filter invert"
  />
</div>



        <div className="text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-10">
            HEY! I'M{" "}
            <Link to="/about" className="hero-button hero-button-pink">
              → VEDANT
            </Link>
            , A{" "}
            <Link to="/projects" className="hero-button hero-button-green">
              → SOFTWARE DEVELOPER
            </Link>{" "}
            BASED IN PUNE.
          </h1>
        </div>

        <ScrollArrow targetId="projects" />
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="container mx-auto px-4 py-6 md:py-10">
        <h2 className="section-heading">SELECTED PROJECTS</h2>

        <div className="max-w-7xl mx-auto">

          <ProjectCard
            id="LegalMind"
            title="LegalMindAI"
            tags={["WEB DEVELOPMENT", "AI/ML", "NLP"]}
            clientMessage="Hey! We’re two librarians—your tool could really streamline our library!"
            replyMessage="I’m in! Let’s make managing books a breeze!"
            imageUrl="/lm1.png"
            additionalImages={[
              "/lm2.png",
              "/lm3.png",
              "/lm4.png",
              "/lm5.png",
              "/lm6.png"
            ]}
            githubUrl="https://github.com/vedant-codes/LegalMindAi"
            websiteUrl="https://legal-mind-ai-alpha.vercel.app/"
            reverse={false}
          />

          <ProjectCard
            id="SQL"
            title="SQuerreL"
            tags={["react", "AI/ML"]}
            clientMessage="Hey! We struggle with writing queries—your tool could save us tons of time!"
            replyMessage="Say no more! Let’s turn plain English into powerful SQL!"
            imageUrl="/SQL.png"
            additionalImages={[
              "/SQL2.png",
              "/SQL3.png",
              "/SQL.png"
            ]}
            githubUrl="https://github.com/vedant/oh-ja-cafe"
            websiteUrl="https://oh-ja-cafe.com"
            reverse={false}
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

      <TechStack />

      {/* About Section */}
      <section className="about-section">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-white">A LITTLE ABOUT ME</h2>

          <div className="max-w-3xl mx-auto">
            <div className="question-bubble mb-4 self-start">How did you get into Computer Science?</div>

            <div className="speech-bubble">
              Technology has fascinated me for as long as I can remember. I was always the one trying to understand how apps work or experimenting with gadgets. That curiosity naturally led me to programming.
            </div>

            <div className="speech-bubble">
             Once I built my first working project, I knew this was what I wanted to pursue. Computer Science became the perfect blend of logic and creativity—and it's been my passion ever since.
            </div>

            <div className="question-bubble mb-4 mt-8 self-start">What’s your development process like?</div>

            <div className="speech-bubble">
              I like to start with a deep understanding of the problem. Then I sketch out{" "}
              <Link to="/about" onClick={scrollToTop} className="underline">
                Check my FAQ
              </Link>{" "}
              for more details.
            </div>

            <div className="flex justify-center mt-10">
              <Link to="/about" onClick={scrollToTop} className="conversation-button text-sm md:text-base">
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
