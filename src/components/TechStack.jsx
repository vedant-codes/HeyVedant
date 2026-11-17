import { useEffect, useRef, useState } from "react"
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss3,
  SiReact, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiFastapi, SiFirebase, SiSupabase, SiMysql,
  SiScikitlearn, SiHuggingface, SiOllama, SiPandas, SiNumpy,
  SiGit, SiGithub, SiLinux, SiDocker, SiAnsible, SiVercel,
  SiSolidity, SiEthereum,
} from "react-icons/si"
import { FaDatabase, FaTerminal, FaWindows, FaServer } from "react-icons/fa"
import { DiJava } from "react-icons/di"

// `color` is the glow/brand colour. Dark brand colours are swapped for white so they show on black.
const skills = [
  { name: "C", icon: SiC, color: "#5C9BD5", cat: "Languages" },
  { name: "C++", icon: SiCplusplus, color: "#3F8CD9", cat: "Languages" },
  { name: "Python", icon: SiPython, color: "#FFD43B", cat: "Languages" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", cat: "Languages" },
  { name: "Java", icon: DiJava, color: "#F89820", cat: "Languages" },
  { name: "SQL", icon: FaDatabase, color: "#4DA3D4", cat: "Languages" },
  { name: "Solidity", icon: SiSolidity, color: "#9AA5B1", cat: "Languages" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", cat: "Languages" },
  { name: "CSS3", icon: SiCss3, color: "#2965F1", cat: "Languages" },

  { name: "React", icon: SiReact, color: "#61DAFB", cat: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", cat: "Frontend" },
  { name: "Vite", icon: SiVite, color: "#A78BFA", cat: "Frontend" },

  { name: "Node.js", icon: SiNodedotjs, color: "#68A063", cat: "Backend & Data" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF", cat: "Backend & Data" },
  { name: "FastAPI", icon: SiFastapi, color: "#05B79B", cat: "Backend & Data" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", cat: "Backend & Data" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", cat: "Backend & Data" },
  { name: "MySQL", icon: SiMysql, color: "#4DA3D4", cat: "Backend & Data" },

  { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E", cat: "AI / ML" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E", cat: "AI / ML" },
  { name: "Ollama", icon: SiOllama, color: "#FFFFFF", cat: "AI / ML" },
  { name: "Pandas", icon: SiPandas, color: "#8E7CF0", cat: "AI / ML" },
  { name: "NumPy", icon: SiNumpy, color: "#4DABCF", cat: "AI / ML" },

  { name: "Git", icon: SiGit, color: "#F05032", cat: "DevOps & Tools" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF", cat: "DevOps & Tools" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", cat: "DevOps & Tools" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", cat: "DevOps & Tools" },
  { name: "Ansible", icon: SiAnsible, color: "#EE0000", cat: "DevOps & Tools" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF", cat: "DevOps & Tools" },
  { name: "SSH", icon: FaTerminal, color: "#10B981", cat: "DevOps & Tools" },
  { name: "WinRM", icon: FaWindows, color: "#0EA5E9", cat: "DevOps & Tools" },

  { name: "Ethereum", icon: SiEthereum, color: "#8C9EFF", cat: "Security & Web3" },
  { name: "Zero-Trust IoT", icon: FaServer, color: "#EC4899", cat: "Security & Web3" },
]

const categories = ["All", "Languages", "Frontend", "Backend & Data", "AI / ML", "DevOps & Tools", "Security & Web3"]

const TechStack = () => {
  const [active, setActive] = useState("All")
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  // Reveal the grid when it scrolls into view
  useEffect(() => {
    const el = sectionRef.current
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Cursor-following spotlight: sets CSS vars the card's glow reads
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
  }

  const shown = active === "All" ? skills : skills.filter((s) => s.cat === active)

  return (
    <section ref={sectionRef} className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">MY TECH STACK</h2>

        {/* Filter chips — horizontally scrollable on small screens */}
        <div className="skill-filters" role="tablist" aria-label="Skill categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`skill-chip ${active === c ? "skill-chip-active" : ""}`}
            >
              {c}
              <span className="skill-chip-count">
                {c === "All" ? skills.length : skills.filter((s) => s.cat === c).length}
              </span>
            </button>
          ))}
        </div>

        <div key={active} className={`skill-grid ${visible ? "skill-grid-in" : ""}`}>
          {shown.map((tech, i) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.name}
                className="skill-card"
                onMouseMove={handleMove}
                style={{ "--accent": tech.color, "--i": i }}
                tabIndex={0}
              >
                <div className="skill-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="skill-name">{tech.name}</div>
                <div className="skill-cat">{tech.cat}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
