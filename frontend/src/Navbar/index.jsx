import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdDisabledByDefault } from "react-icons/md";
import "./index.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // This will close the menu after clicking
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="left-side">
            <p><Link to="/portfolio">Rajia Rani</Link></p>
          </div>
          <div className={`middle-side ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-menu">
              {/* <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
              </li> */}
              <li className="nav-item">
                <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link" onClick={handleLinkClick}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link to="/education" className="nav-link" onClick={handleLinkClick}>Academic</Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link" onClick={handleLinkClick}>Experience</Link>
              </li>
              <li className="nav-item">
                <Link to="/certificates" className="nav-link" onClick={handleLinkClick}>Certificates</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link" onClick={handleLinkClick}>Resume</Link>
              </li>
            </ul>
          </div>

          <div className="right-side">
                         <li className="nav-link"><a href=" https://www.linkedin.com/in/rajia-rani-935b71187/"><FaLinkedin /></a></li>
    <li className="nav-link"><a href="https://github.com/RajiaRani"><FaGithub /></a></li>
   
          </div>

          <div className="menu-toggle">
            {!isMenuOpen ? (
              <div className="icon" onClick={toggleMenu}><FaBars /></div>
            ) : (
              <div className="close" onClick={toggleMenu}><MdDisabledByDefault /></div>
            )}
          </div>
        </div>
      </header>
    </>
  )

}