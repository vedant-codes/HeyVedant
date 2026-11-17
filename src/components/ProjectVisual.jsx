// Themed fallback shown when a project has no screenshots yet.
const ProjectVisual = ({ title, lines = [], stack = [] }) => (
  <div className="project-visual">
    <div className="project-visual-bar">
      <span className="dot dot-r" />
      <span className="dot dot-y" />
      <span className="dot dot-g" />
      <span className="project-visual-title">{title.toLowerCase().replace(/\s+/g, "-")}</span>
    </div>
    <div className="project-visual-body">
      {lines.map((line, i) => (
        <div key={i} className="project-visual-line" style={{ animationDelay: `${i * 0.35}s` }}>
          {line}
        </div>
      ))}
      <span className="project-visual-cursor" />
    </div>
    {stack.length > 0 && (
      <div className="project-visual-stack">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    )}
  </div>
)

export default ProjectVisual
