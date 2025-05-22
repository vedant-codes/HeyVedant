"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="px-4 md:px-6 py-4 flex items-center justify-between relative">
      <Link to="/" className="text-xl md:text-2xl font-bold z-10">
        hey?vedant
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden z-10" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-3">
  <Link
    to="/projects"
    className="px-4 py-2 font-bold rounded-xl text-white transition-colors duration-200"
    style={{ backgroundColor: "#2196f3" }} // Blue
  >
    PROJECTS
  </Link>
  <Link
    to="/about"
    className="px-4 py-2 font-bold rounded-xl text-white transition-colors duration-200"
    style={{ backgroundColor: "#ec4899" }} // Pink
  >
    ABOUT
  </Link>
  <Link
    to="/contact"
    className="px-4 py-2 font-bold rounded-xl text-white transition-colors duration-200"
    style={{ backgroundColor: "#f87171" }} // Red
  >
    CONTACT & FAQ
  </Link>
</nav>



      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-0">
          <nav className="flex flex-col gap-6 text-center">
            <Link
              to="/projects"
              className={`nav-button text-xl ${location.pathname.includes("/projects") ? "nav-button-projects" : ""}`}
              onClick={toggleMobileMenu}
            >
              PROJECTS
            </Link>
            <Link
              to="/about"
              className={`nav-button text-xl ${location.pathname.includes("/about") ? "nav-button-about" : ""}`}
              onClick={toggleMobileMenu}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className={`nav-button text-xl ${location.pathname.includes("/contact") ? "nav-button-contact" : ""}`}
              onClick={toggleMobileMenu}
            >
              CONTACT & FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
