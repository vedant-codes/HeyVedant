"use client"

import { useState, useEffect } from "react"

const LoadingScreen = ({ onComplete }) => {
  const [loadingState, setLoadingState] = useState(0)
  const [loadingText, setLoadingText] = useState("(PRETENDING TO LOAD)")
  const [isComplete, setIsComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const loadingTexts = [
      "(PRETENDING TO LOAD)",
      "(WOW THIS STUFF IS HEAVY)",
    ]

    const loadingInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 3

        if (newProgress >= 33 && newProgress < 66 && loadingState === 0) {
          setLoadingState(1)
          setLoadingText(loadingTexts[1])
        }

        if (newProgress >= 66 && newProgress < 100 && loadingState === 1) {
          setLoadingState(2)
        }

        if (newProgress >= 75 && newProgress < 100 && loadingState === 2) {
          setLoadingText("GETTING READY")
        }

        if (newProgress >= 100) {
          clearInterval(loadingInterval)
          setIsComplete(true)
          setLoadingText("(NOW JUST CLICK SOMEWHERE)")
          return 100
        }

        return newProgress
      })
    }, 200)

    return () => clearInterval(loadingInterval)
  }, [loadingState])

  const handleClick = () => {
    if (isComplete) {
      const loadingElement = document.querySelector(".loading-screen")
      if (loadingElement) {
        loadingElement.style.transition = "opacity 0.5s ease-out"
        loadingElement.style.opacity = "0"

        setTimeout(() => {
          onComplete()
        }, 500)
      } else {
        onComplete()
      }
    }
  }

  return (
    <div
      className="loading-screen"
      onClick={handleClick}
      style={{ cursor: isComplete ? "pointer" : "default" }}
    >
      {progress >= 100 && <div className="loading-ready">READY</div>}

      <div className="loading-line-container">
        <div className="loading-line" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="loading-text">{loadingText}</div>
    </div>
  )
}

export default LoadingScreen
