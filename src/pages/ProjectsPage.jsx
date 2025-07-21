import ProjectCard from "../components/ProjectCard"

const ProjectsPage = () => {
  const projects = [
    {
      id: "SQL",
      title: "SQuerreL",
      tags: ["react", "AI/ML"],
      clientMessage:
        "Hey! We struggle with writing queries—your tool could save us tons of time!",
      replyMessage: "Say no more! Let's turn plain English into powerful SQL!",
      imageUrl: "/SQL2.png",
      additionalImages: [
        "/SQL2.png",
        "/SQL3.png",
        "/SQL.png"
      ],
      githubUrl: "https://github.com/shevkar-shubhra/SQuerreL/",
      websiteUrl: "https://s-querrel-j6ki.vercel.app/",
    },
    {
      id: "LegalMind",
      title: "LegalMindAI",
      tags: ["WEB DEVELOPMENT", "AI/ML", "NLP"],
      clientMessage: "We deal with tons of complex legal contracts—can you help us simplify and analyze them faster?",
      replyMessage: "Yes! Let’s build an AI-powered tool to summarize and extract risks from contracts efficiently.",
      imageUrl: "/lm1.png",
      additionalImages: [
        "/lm2.png",
        "/lm3.png",
        "/lm4.png",
        "/lm5.png",
        "/lm6.png"
      ],
      githubUrl: "https://github.com/vedant-codes/LegalMindAi",
      websiteUrl: "https://legal-mind-ai-alpha.vercel.app/",
      reverse: false
    },
    {
      id: "B4C",
      title: "BOOK4COEP",
      tags: ["WEB DEVELOPMENT", "DESIGN"],
      clientMessage:
        "Hey! We're two librarians—your tool could really streamline our library!",
      replyMessage: "I'm in! Let's make managing books a breeze!",
      imageUrl: "/b4c1.png",
      additionalImages: [
        "/b4c.png",
        "/b4c3.png",
        "/b4c1.png"
      ],
      githubUrl: "https://github.com/vedant-codes/BOOK4COEP",
      websiteUrl: "https://book-4-coep.vercel.app/",
    },

     {
      id: "EnRoute",
      title: "EnRoute: Transit Navigator",
      tags: ["DSA", "GRAPHS", "SHORTEST PATH", "REACT"],
      clientMessage:
        "We're looking to optimize metro and bus routes across the city—can your app help?",
      replyMessage:
        "Absolutely! Let’s minimize interchanges and give users the fastest path possible.",
      imageUrl: "/enroute1.png",
      additionalImages: [
        "/enroute1.png",
        "/enroute2.png",
        "/enroute3.png"
      ],
      githubUrl: "https://github.com/vedant-codes/Enroute-Transit_Navigator",
      reverse: false
    },
    
  
    // Add more projects as needed
  
    // {
    //   id: "project-4",
    //   title: "PROJECT 4",
    //   tags: ["WEB", "DEVELOPMENT"],
    //   clientMessage: "Our app needs a complete redesign to improve user engagement and retention.",
    //   replyMessage: "Let's create something that users will love to interact with.",
    //   imageUrl: "/placeholder.svg?height=400&width=600",
    //   additionalImages: ["/placeholder.svg?height=300&width=400"],
    //   githubUrl: "https://github.com/vedant/project-4",
    //   websiteUrl: "https://project-4.com",
    // },
  ]

  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <h1 className="section-heading">ALL PROJECTS</h1>
      <div className="max-w-7xl mx-auto">
       {projects.map((project, index) => (
  <ProjectCard
    key={project.id}
    id={project.id}
    title={project.title}
    tags={project.tags}
    clientMessage={project.clientMessage}
    replyMessage={project.replyMessage}
    imageUrl={project.imageUrl}
    additionalImages={project.additionalImages}
    githubUrl={project.githubUrl}
    websiteUrl={project.websiteUrl}
    reverse={index >= 2 && index % 2 === 1} // ❗️ Reverse starts from the 3rd item
  />
))}

      </div>
    </div>
  )
}

export default ProjectsPage
