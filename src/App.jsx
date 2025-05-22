"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"
import ScrollToTop from "./components/ScrollToTop"
import SmoothScroll from "./components/SmoothScroll"

// Wrapper component for page transitions
const PageTransition = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page-transition" timeout={500}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <ProjectsPage />
                  </PageTransition>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <PageTransition>
                    <ProjectDetailPage />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                }
              />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
