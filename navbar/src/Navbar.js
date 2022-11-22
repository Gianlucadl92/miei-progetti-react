import React, { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Project from "./pages/Projects";
import NoPage from "./pages/NoPage";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Router>
      <nav className="nav-center">
        <div className="nav-header">
          <h4 className="logo">Logo</h4>

          <div className="nav-toggle" onClick={toggleLinks}>
            <Hamburger
              size={24}
              duration={0.6}
              color="#ff4c4c"
              label="show menu"
              hideOutline={false}
              rounded
            />
          </div>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li>About</li>
            </Link>
            <Link to="/contact" className="nav-link">
              <li>Contact</li>
            </Link>
            <Link to="/profile" className="nav-link">
              <li>Profile</li>
            </Link>
            <Link to="/projects" className="nav-link">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Project />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
