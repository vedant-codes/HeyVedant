import { Link } from "react-router-dom"



const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
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
          In 2016, during an internship, I worked with mentors who showed me the true potential of software development.
          They helped me realize that great code isn't just about how things look...
        </div>

        <div className="speech-bubble ml-auto mr-0 max-w-xl">
          It's about creating meaningful experiences that resonate with people.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">What do you do now?</div>

        <div className="speech-bubble">
          Today, I embrace my role as a Software Developer, bringing a unique perspective to my work. I aim to create
          applications that not only meet but exceed expectations, connecting with audiences and making a positive
          impact.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">What's your development process like?</div>

        <div className="speech-bubble">
          Curiosity and collaboration are key for me. I believe the best ideas come from exploring new possibilities and
          pushing boundaries with others. Together, we can create something truly special that inspires and leaves a
          lasting impression.
        </div>

        <div className="question-bubble mb-4 mt-8 self-start">How can people reach you?</div>

        <div className="speech-bubble">
          If you're interested in my services or share my values and passion, feel free to contact me.
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/contact"
            className="bg-red-400 text-white rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-center gap-2 hover:bg-red-500 transition-colors text-sm md:text-base"
          >
            Start a conversation with me!
          </Link>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <h2 className="section-heading">CURRENTLY</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2">
            Software Developer at{" "}
            <Link to="#" className="text-blue-400">
              Omada
            </Link>
          </p>
          <p className="mb-2">
            Founding Developer at{" "}
            <Link to="#" className="text-emerald-400">
              Vortex
            </Link>
          </p>
          <p className="mb-2">Freelance Developer</p>
        </div>

        <h2 className="section-heading mt-10 md:mt-20">RESOURCES</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2">Technical Documentation</p>
          <p className="mb-2">Code Snippets</p>
        </div>

        <h2 className="section-heading mt-10 md:mt-20">SOCIALS</h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2">Instagram</p>
          <p className="mb-2">Twitter (X)</p>
          <p className="mb-2">Twitch</p>
        </div>

        <h2 className="section-heading mt-10 md:mt-20">SELECTED CLIENTS</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <p className="mb-2">Aircall</p>
            <p className="mb-2">Contournement</p>
            <p className="mb-2">Komando</p>
            <p className="mb-2">Luni</p>
            <p className="mb-2">Pepper Clip</p>
          </div>
          <div>
            <p className="mb-2">Auth0</p>
            <p className="mb-2">Fernande</p>
            <p className="mb-2">Lattice</p>
            <p className="mb-2">Oh, Ja!</p>
            <p className="mb-2">Pepette</p>
          </div>
          <div>
            <p className="mb-2">Castorama</p>
            <p className="mb-2">Fimeb</p>
            <p className="mb-2">Les Others</p>
            <p className="mb-2">PayFit</p>
            <p className="mb-2">Pyxo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
