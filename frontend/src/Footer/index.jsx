import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import "./index.css"
import { Link } from "react-router-dom";
export default function Footer(){
    const year = new Date().getFullYear();
return(
    <>
    <footer>
    <div className="footer">
                    <div className="footer-left-side">
                        <p> &copy; {year} Rajia Rani</p>
                    </div>
                    <div className="footer-middle-side">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-right-side">
                        <a href="https://www.linkedin.com/in/rajia-rani-935b71187/ "  target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/RajiaRani "  target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href=" "  target="_blank" rel="noopener noreferrer"><FaMedium /></a>
                    </div>
                </div>
    </footer>
    </>
)
}