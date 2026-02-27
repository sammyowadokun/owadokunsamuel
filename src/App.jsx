import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'  


function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Nav /><Hero /></>} />
        <Route path="/about" element={<><Nav /><About /><Footer/></>} />
        <Route path="/skills" element={<><Nav /><Skills /><Footer/></>} />
        <Route path="/projects" element={<><Nav /><Projects /><Footer/></>} />
        <Route path="/contact" element={<><Nav /><Contact /></>} />
      </Routes>
    </Router>
  )
}

export default App
