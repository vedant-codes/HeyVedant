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
      githubUrl: "https://github.com/vedant/oh-ja-cafe",
      websiteUrl: "https://oh-ja-cafe.com",
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
      githubUrl: "https://github.com/vedant/oh-ja-cafe",
      websiteUrl: "https://oh-ja-cafe.com",
    },
    {
      id: "Plynion-mobile-app",
      title: "Plynion MOBILE",
      tags: ["MOBILE", "APP", "REACT"],
      clientMessage: "We're building a premium club with exclusive features to boost engagement and monetization.",
      replyMessage: "Let's make them feel like VIPs!",
      imageUrl: "/placeholder.svg?height=600&width=300",
      additionalImages: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      githubUrl: "https://github.com/vedant/omada-mobile",
      websiteUrl: "https://omada-app.com",
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
