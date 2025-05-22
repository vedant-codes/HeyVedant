import ProjectCard from "../components/ProjectCard"

const ProjectsPage = () => {
  const projects = [
    {
      id: "oh-ja-cafe",
      title: "OH, JA! CAFÉ",
      tags: ["BRAND", "ILLUSTRATION"],
      clientMessage:
        "Hey! We're two designers opening a small cafe and love your illustrations. They'd fit perfectly with our vibe!",
      replyMessage: "I'm in—let's make your cafe shine!",
      imageUrl: "/placeholder.svg?height=450&width=800",
      additionalImages: ["/placeholder.svg?height=450&width=800"],
      githubUrl: "https://github.com/vedant/oh-ja-cafe",
      websiteUrl: "https://oh-ja-cafe.com",
    },
    {
      id: "lattice",
      title: "LATTICE",
      tags: ["EDITORIAL", "ILLUSTRATION"],
      clientMessage: "Do you want to explore some styles with our articles and ebook?",
      replyMessage: "Where do I sign?",
      imageUrl: "/placeholder.svg?height=450&width=800",
      githubUrl: "https://github.com/vedant/lattice",
      websiteUrl: "https://lattice-project.com",
    },
    {
      id: "project-3",
      title: "PROJECT 3",
      tags: ["WEB", "DEVELOPMENT"],
      clientMessage: "We need a modern website that showcases our products in an innovative way.",
      replyMessage: "I have some ideas that would work perfectly for your brand.",
      imageUrl: "/placeholder.svg?height=450&width=800",
      githubUrl: "https://github.com/vedant/project-3",
      websiteUrl: "https://project-3.com",
    },
    {
      id: "project-4",
      title: "PROJECT 4",
      tags: ["MOBILE", "UI/UX"],
      clientMessage: "Our app needs a complete redesign to improve user engagement and retention.",
      replyMessage: "Let's create something that users will love to interact with.",
      imageUrl: "/placeholder.svg?height=450&width=800",
      githubUrl: "https://github.com/vedant/project-4",
      websiteUrl: "https://project-4.com",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6 md:py-10">
      <h1 className="section-heading">ALL PROJECTS</h1>

      {/* <h2 className="section-heading mt-10 md:mt-20">SELECTED PROJECTS</h2> */}

      <div className="max-w-3xl mx-auto">
        {projects.map((project) => (
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
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
