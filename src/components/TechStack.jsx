import {
  SiC,
  SiCplusplus
} from 'react-icons/si'

import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiLinux,
  DiFirebase,
  DiMysql
} from 'react-icons/di'

const TechStack = () => {
  const technologies = [
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: DiJava, color: "#007396" },
    { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
    { name: "React", icon: DiReact, color: "#61DAFB" },
    { name: "Git", icon: DiGit, color: "#F05032" },
    { name: "GitHub", icon: DiGithubBadge, color: "#181717" },
    { name: "Linux", icon: DiLinux, color: "#FCC624" },
    { name: "Firebase", icon: DiFirebase, color: "#FFCA28" },
    { name: "MySQL", icon: DiMysql, color: "#4479A1" },
  ]

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="section-heading text-center">MY TECH STACK</h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"></div>

        {/* First row - moving left */}
        <div className="marquee-row mb-8">
          <div className="marquee-content-left">
            {/* First set */}
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div key={`first-${index}`} className="tech-logo-item">
                  <IconComponent
                    className="w-12 h-12 transition-colors duration-300 hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>
              )
            })}

            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div key={`first-duplicate-${index}`} className="tech-logo-item">
                  <IconComponent
                    className="w-12 h-12 transition-colors duration-300 hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Second row - moving right */}
        <div className="marquee-row">
          <div className="marquee-content-right">
            {/* First set */}
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div key={`second-${index}`} className="tech-logo-item">
                  <IconComponent
                    className="w-12 h-12 transition-colors duration-300 hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>
              )
            })}

            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <div key={`second-duplicate-${index}`} className="tech-logo-item">
                  <IconComponent
                    className="w-12 h-12 transition-colors duration-300 hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
