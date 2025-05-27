"use client"

import { Link } from "react-router-dom"

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <h1 className="section-heading">NICE TO MEET YOU!</h1>

      <div className="max-w-3xl mx-auto">
        <div className="question-bubble mb-4 self-start">How did you get into software development?</div>

        <div className="speech-bubble">
          Design has always been part of my life. My dad is a graphic designer, so I grew up surrounded by creativity. I
          spent a lot of time playing with Photoshop, Dreamweaver, Flash and After Effects as a kid.
        </div>

        <div className="speech-bubble">
          I wasn't the best student in school, but I loved art. That passion led me to study multimedia, where I could
          channel my creativity into something meaningful.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">
          When did you realize software development was your thing?
        </div>

        <div className="speech-bubble">
          It clicked for me the first time I solved a real-world problem with code. I had written a small script to automate a repetitive task—and watching it run felt incredibly empowering.
        </div>

        <div className="speech-bubble ml-auto mr-0 max-w-xl">
          From there, every bug I fixed, every feature I built, reinforced that this was the kind of work I wanted to do every day.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">What do you do now?</div>

        <div className="speech-bubble">
          I'm currently pursuing my degree in Computer Science, where I’m building a solid foundation in algorithms, data structures, and system design. Outside of academics, I work on personal and collaborative projects to sharpen my skills—ranging from web apps to data-driven tools
        </div>

        <div className="speech-bubble">
          I'm also actively exploring open-source contributions and internships to grow professionally.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">What's your development process like?</div>

        <div className="speech-bubble">
          My process begins with clearly understanding the problem—whether it’s a project requirement or a bug report. I break it down, plan the solution, and build iteratively, constantly testing and refining. I like using Git for version control, and I believe in writing clean, well-documented code that others (and future me) can easily understand.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">How can people reach you?</div>

        <div className="speech-bubble">
          Feel free to reach out to me at <a href="mailto:vedantshinde.vs12@gmail.com" className="text-blue-400 underline">vedantshinde.vs12@gmail.com</a> or connect with me on LinkedIn. I'm always open to internships, collaborations, or just a chat about tech and ideas.
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="bg-red-400 text-white rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-center gap-2 hover:bg-white hover:text-red-400 border-2 border-transparent hover:border-red-400 transition-all duration-300 text-sm md:text-base"
          >
            Start a conversation with me!
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <h2 className="section-heading">CURRENTLY</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2">
            Sophomore Engineer at{" "}
            <a href="https://www.coeptech.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              COEP
            </a>
          </p>
          <p className="mb-2">
            Technical Coordinator at{" "}
            <a href="https://www.mind-spark.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">
              Mindspark
            </a>
          </p>
          <p className="mb-2">
            Intern at{" "}
            <a href="https://www.sensetechnologysolutions.com/" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline">
              Sense Tech Solutions
            </a>
          </p>
          <p className="mb-2">Freelance Developer</p>
        </div>

        <h2 className="section-heading mt-10 md:mt-20">RESOURCES</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2">Technical Documentation</p>
          <p className="mb-2">Code Snippets</p>
        </div>

        <h2 className="section-heading mt-10 md:mt-20">SOCIALS</h2>

        <div className="text-center flex flex-col md:flex-row md:justify-center md:gap-6 gap-2">
          <a
            href="https://www.instagram.com/_ve_dantt._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 flex items-center justify-center gap-1 hover:text-white"
          >
            INSTAGRAM ↗
          </a>

          <a
            href="https://x.com/vedantshinde343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 flex items-center justify-center gap-1 hover:text-white"
          >
            TWITTER (X) ↗
          </a>

          <a
            href="mailto:vedantshinde.vs12@gmail.com"
            className="text-gray-400 flex items-center justify-center gap-1 hover:text-white"
          >
            MAIL ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
