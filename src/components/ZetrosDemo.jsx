import { useCallback, useEffect, useRef, useState } from "react"

// A scripted, illustrative replay of the ZETROS flow (not live logs).
// Each step appends one terminal line and may update node states / the active link.
// Node states: idle | trusted | blocked | flagged | blacklisted
const SCRIPT = [
  { cls: "cmd", text: "$ python3 -m server_hub.hub" },
  { cls: "dim", text: "hub online · trust ledger connected (Ganache)" },
  { cls: "info", text: "[HANDSHAKE] SENSOR-A → hub  (PUF challenge sent)", link: "A" },
  { cls: "ok", text: "✅ [AUTH SUCCESS] SENSOR-A verified via PUF", nodes: { A: "trusted" } },
  { cls: "info", text: "[HANDSHAKE] SENSOR-B → hub  (PUF challenge sent)", link: "B" },
  { cls: "ok", text: "✅ [AUTH SUCCESS] SENSOR-B verified via PUF", nodes: { B: "trusted" } },
  { cls: "warn", text: "[ATTACK] ROGUE replays a captured handshake", link: "R", nodes: { R: "flagged" } },
  { cls: "bad", text: "🚫 [REPLAY] stale nonce rejected · connection blocked", nodes: { R: "blocked" } },
  { cls: "warn", text: "[ATTACK] ROGUE starts flooding the hub", link: "R" },
  { cls: "bad", text: "🚨 [ML ALERT] anomalous traffic from ROGUE", nodes: { R: "flagged" } },
  { cls: "bad", text: "   ATTACK PROB: 0.88" },
  { cls: "chain", text: "⛓  [CONTRACT] blacklistNode(ROGUE) → tx mined", nodes: { R: "blacklisted" } },
  { cls: "ok", text: "✔ network secure · 2 trusted · 1 blacklisted" },
]

const NODES = [
  { id: "A", label: "SENSOR-A", x: 60, y: 48 },
  { id: "B", label: "SENSOR-B", x: 60, y: 172 },
  { id: "R", label: "ROGUE", x: 270, y: 110 },
]
const HUB = { x: 165, y: 110 }

const STEP_MS = 900

const ZetrosDemo = () => {
  const [lines, setLines] = useState([])
  const [states, setStates] = useState({ A: "idle", B: "idle", R: "idle" })
  const [activeLink, setActiveLink] = useState(null)
  const [running, setRunning] = useState(false)
  const timers = useRef([])
  const bodyRef = useRef(null)
  const rootRef = useRef(null)
  const started = useRef(false)

  const clear = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const finalState = () => {
    const s = { A: "idle", B: "idle", R: "idle" }
    SCRIPT.forEach((st) => st.nodes && Object.assign(s, st.nodes))
    return s
  }

  const play = useCallback(() => {
    clear()
    setLines([])
    setStates({ A: "idle", B: "idle", R: "idle" })
    setActiveLink(null)

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setLines(SCRIPT)
      setStates(finalState())
      setRunning(false)
      return
    }

    setRunning(true)
    SCRIPT.forEach((step, i) => {
      timers.current.push(
        setTimeout(() => {
          setLines((l) => [...l, step])
          if (step.nodes) setStates((s) => ({ ...s, ...step.nodes }))
          setActiveLink(step.link || null)
          if (i === SCRIPT.length - 1) {
            setActiveLink(null)
            setRunning(false)
          }
        }, 400 + i * STEP_MS)
      )
    })
  }, [])

  // Start when scrolled into view; clean up on unmount
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const start = () => {
      if (!started.current) {
        started.current = true
        play()
      }
    }
    if (!("IntersectionObserver" in window)) {
      start()
      return clear
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && start(), { threshold: 0.3 })
    io.observe(el)
    return () => {
      io.disconnect()
      clear()
    }
  }, [play])

  // Keep the terminal scrolled to the newest line (without scrolling the page)
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  const skip = () => {
    clear()
    setLines(SCRIPT)
    setStates(finalState())
    setActiveLink(null)
    setRunning(false)
  }

  return (
    <div className="zetros-demo" ref={rootRef}>
      <div className="zetros-grid">
        {/* Terminal */}
        <div className="zetros-term">
          <div className="project-visual-bar">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="project-visual-title">zetros · simulated walkthrough</span>
          </div>
          <div className="zetros-term-body" ref={bodyRef} aria-live="polite">
            {lines.map((l, i) => (
              <div key={i} className={`zetros-line zl-${l.cls}`}>
                {l.text}
              </div>
            ))}
            {running && <span className="project-visual-cursor" />}
          </div>
        </div>

        {/* Network diagram */}
        <div className="zetros-net">
          <svg viewBox="0 0 330 220" role="img" aria-label="Network diagram showing two trusted sensors and one blacklisted rogue node connected to the ZETROS hub">
            {NODES.map((n) => (
              <line
                key={n.id}
                x1={HUB.x}
                y1={HUB.y}
                x2={n.x}
                y2={n.y}
                className={`zn-link zn-${states[n.id]} ${activeLink === n.id ? "zn-active" : ""}`}
              />
            ))}

            {/* hub */}
            <circle cx={HUB.x} cy={HUB.y} r="26" className="zn-hub-ring" />
            <circle cx={HUB.x} cy={HUB.y} r="18" className="zn-hub" />
            <text x={HUB.x} y={HUB.y + 4} textAnchor="middle" className="zn-hub-text">HUB</text>

            {NODES.map((n) => (
              <g key={n.id} className={`zn-node zn-${states[n.id]}`}>
                <circle cx={n.x} cy={n.y} r="16" className="zn-node-circle" />
                <text x={n.x} y={n.y + 4} textAnchor="middle" className="zn-node-icon">
                  {states[n.id] === "trusted" ? "✓" : states[n.id] === "blacklisted" ? "✕" : states[n.id] === "blocked" ? "!" : states[n.id] === "flagged" ? "?" : "·"}
                </text>
                <text x={n.x} y={n.y + 34} textAnchor="middle" className="zn-label">{n.label}</text>
              </g>
            ))}
          </svg>

          <div className="zetros-legend">
            <span><i className="lg lg-trusted" /> trusted</span>
            <span><i className="lg lg-flagged" /> suspicious</span>
            <span><i className="lg lg-blacklisted" /> blacklisted</span>
          </div>
        </div>
      </div>

      <div className="zetros-controls">
        <button onClick={play} className="zetros-btn">↻ Replay</button>
        <button onClick={skip} disabled={!running} className="zetros-btn zetros-btn-ghost">Skip to end</button>
        <span className="zetros-note">Illustrative replay of the framework flow</span>
      </div>
    </div>
  )
}

export default ZetrosDemo
