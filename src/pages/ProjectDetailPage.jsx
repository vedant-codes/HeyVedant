"use client"

import { Link, useParams } from "react-router-dom"

const ProjectDetailPage = () => {
  const { id } = useParams()

  const projects = {
    SQL: {
      title: "SQuerreL",
      tags: ["REACT", "AI/ML"],
      clientMessage: "Hey! We struggle with writing queries—your tool could save us tons of time!",
      replyMessage: "Say no more! Let's turn plain English into powerful SQL!",
      imageUrl: "/SQL2.png",
      additionalImages: ["/SQL2.png", "/SQL3.png", "/SQL.png"],
      githubUrl: "https://github.com/shevkar-shubhra/SQuerreL/",
      websiteUrl: "https://s-querrel-j6ki.vercel.app/",
      content: `SQuerreL is an intelligent SQL generator that allows users to write natural language queries and get SQL statements instantly. Built using React and OpenAI's API, it simplifies database access for analysts and non-developers, removing the need to learn SQL syntax. The tool handles query generation, optimization, and supports multiple SQL dialects.`
    },
    // B4C: {
    //   title: "BOOK4COEP",
    //   tags: ["WEB DEVELOPMENT", "DESIGN"],
    //   clientMessage: "Hey! We're two librarians—your tool could really streamline our library!",
    //   replyMessage: "I'm in! Let's make managing books a breeze!",
    //   imageUrl: "/b4c1.png",
    //   additionalImages: ["/b4c.png", "/b4c3.png", "/b4c1.png"],
    //   githubUrl: "https://github.com/vedant/oh-ja-cafe",
    //   websiteUrl: "https://oh-ja-cafe.com",
    //   content: `BOOK4COEP is a digital platform created for COEP’s library to digitize the book borrowing and reservation system. Users can browse book availability in real time, request holds, and track overdue returns. Built with a focus on clean UI and librarian-focused workflows, it enhances efficiency and accessibility in a campus library environment.`
    // },
    LegalMind: {
      title: "LegalMindAI",
      tags: ["WEB DEVELOPMENT", "AI/ML", "NLP"],
      clientMessage: "We deal with tons of complex legal contracts—can you help us simplify and analyze them faster?",
      replyMessage: "Yes! Let’s build an AI-powered tool to summarize and extract risks from contracts efficiently.",
      imageUrl: "/lm1.png",
      additionalImages: ["/lm2.png", "/lm3.png", "/lm4.png", "/lm5.png", "/lm6.png"],
      githubUrl: "https://github.com/vedant-codes/LegalMindAi",
      websiteUrl: "https://legal-mind-ai-alpha.vercel.app/",
      content: `LegalMindAI leverages AI and NLP to automatically summarize legal contracts, extract clauses, and highlight risk factors. Built using OpenAI's LLMs, the platform offers a structured view of unstructured documents, enabling startups and legal professionals to review contracts efficiently. It includes multi-page upload support, clause comparison, and legal glossary integration.`
    },
    EnRoute: {
      title: "EnRoute: Transit Navigator",
      tags: ["C", "DSA", "GTK 3.0"],
      clientMessage: "We're looking to optimize metro and bus routes across the city—can your app help?",
      replyMessage: "Absolutely! Let’s minimize interchanges and give users the fastest path possible.",
      imageUrl: "/enroute1.png",
      additionalImages: ["/enroute1.png", "/enroute2.png", "/enroute3.png"],
      githubUrl: "https://github.com/vedant-codes/Enroute-Transit_Navigator",
      content: `EnRoute is a graph-based transit navigation system designed for cities like Delhi. It uses Dijkstra’s algorithm to compute the shortest and most efficient metro or bus routes, while minimizing interchanges. With real-time filtering, intuitive UI, and dynamic map-based suggestions, it helps users reach destinations faster in urban public transport networks.`
    }
  }

  const project = projects[id]

  if (!project) {
    return (
      <div className="page-content container mx-auto px-4 py-10 md:py-20 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Project Not Found</h1>
        <p className="mb-6 md:mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="button-primary text-sm md:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="page-content container mx-auto px-4 py-6 md:py-10">
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-400 hover:text-white mb-4 md:mb-8 text-sm md:text-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="mr-2">
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
          {project.additionalImages?.[0] && (
            <div className="bg-purple-300 rounded-xl aspect-video flex items-center justify-center">
              <img
                src={project.additionalImages[0]}
                alt={`${project.title} additional`}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="prose prose-lg prose-invert max-w-none text-sm md:text-base">
          <p>{project.content}</p>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
