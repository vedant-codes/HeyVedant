"use client"

import { useState, useEffect } from "react"

const ScrollArrow = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTarget = (e) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const offsetTop = target.offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="flex justify-center my-6 md:my-8 cursor-pointer animate-bounce-slow" onClick={scrollToTarget}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  )
}

export default ScrollArrow
