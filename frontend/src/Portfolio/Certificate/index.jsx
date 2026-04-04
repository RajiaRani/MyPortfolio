import React, { useState } from "react";
import "./index.css";
import cpp  from "../../assets/Certificate/cpp.png";
import cpp1 from "../../assets/Certificate/cpp1.png";
import cpp2 from "../../assets/Certificate/cpp2.png";
import cpp3 from "../../assets/Certificate/cpp3.png";
import cpp4 from "../../assets/Certificate/cpp4.png";
import react from "../../assets/Certificate/react.png";
import git  from "../../assets/Certificate/git.png";
import html from "../../assets/Certificate/html.png";
import html1 from "../../assets/Certificate/html1.png";
import la   from "../../assets/Certificate/la.png";
import algo from "../../assets/Certificate/algo.png";
import algo2 from "../../assets/Certificate/algo2.png";
import math from "../../assets/Certificate/math.png";

const certificates = [
  { src: cpp,  alt: "Programming in C++: A Hands-on Introduction Specialization (Codio)", link: "https://www.coursera.org/account/accomplishments/specialization/ZCPULNSH7UWM" },
  { src: react, alt: "React Basics", link: "https://www.coursera.org/account/accomplishments/verify/P6E569X9FNAM" },
  { src: git,  alt: "Getting Started with Git and GitHub", link: "https://www.coursera.org/account/accomplishments/verify/7Q7MUK54BDE5" },
  { src: html, alt: "Introduction to HTML5", link: "https://www.coursera.org/account/accomplishments/verify/WTYMZT8DKC9M" },
  { src: la,   alt: "Math for AI Beginner Part 1: Linear Algebra", link: "https://www.coursera.org/account/accomplishments/verify/DEP2TLR8XW6Q" },
  { src: html1, alt: "Introduction to HTML", link: "https://www.coursera.org/account/accomplishments/verify/JFTVDAMY4P94" },
  { src: cpp1, alt: "Object-Oriented C++: Inheritance and Encapsulation", link: "https://www.coursera.org/account/accomplishments/verify/WW9ECKTK2NF5" },
  { src: cpp2, alt: "C++ Basic Structures: Vectors, Pointers, Strings, and Files", link: "https://www.coursera.org/account/accomplishments/verify/9SXTEJ7RY3SU" },
  { src: cpp3, alt: "C++ Object Basics: Functions, Recursion, and Objects", link: "https://www.coursera.org/account/accomplishments/verify/2P83TQUB32BA" },
  { src: cpp4, alt: "C++ Basics: Selection and Iteration", link: "https://www.coursera.org/account/accomplishments/verify/X844C4ZNAY86" },
  { src: algo, alt: "Algorithms on Graphs", link: "https://www.coursera.org/account/accomplishments/verify/49GR62XB6MCE" },
  { src: algo2, alt: "Algorithmic Toolbox", link: "https://www.coursera.org/account/accomplishments/verify/G7EL5JBQTH4Y" },
  { src: math, alt: "Math Prep: College & Work Ready", link: "https://www.coursera.org/account/accomplishments/verify/A8SGGTBBHHRV" },
];

const INITIAL_SHOW = 6;

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const visible = showAll ? certificates : certificates.slice(0, INITIAL_SHOW);

  return (
    <div className="cert-page">
      <div className="cert-page-header">
        <h1 className="cert-main-title">Certifications</h1>
        <p className="cert-subtitle">
          {certificates.length} professional certificates from Coursera — covering C++, React, Git, Linear Algebra, Algorithms, HTML, and more.
        </p>
      </div>

      <div className="cert-grid">
        {visible.map((cert, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-img-wrap" onClick={() => setLightbox(cert)}>
              <img src={cert.src} alt={cert.alt} className="cert-img" />
              <div className="cert-img-overlay">
                <span>View full</span>
              </div>
            </div>
            <div className="cert-card-body">
              <h3 className="cert-name">{cert.alt}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-btn"
              >
                Verify Certificate ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      <div className="cert-toggle-wrap">
        <button
          className="cert-toggle-btn"
          type="button"
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll
            ? `Show Less ↑`
            : `Show All ${certificates.length} Certificates ↓`}
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <div className="cert-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.src} alt={lightbox.alt} className="cert-lightbox-img" />
            <div className="cert-lightbox-footer">
              <p>{lightbox.alt}</p>
              <a href={lightbox.link} target="_blank" rel="noreferrer" className="cert-verify-btn">
                Verify on Coursera ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
