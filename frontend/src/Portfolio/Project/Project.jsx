import React from "react";
import Slider from "react-slick";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Project.css"; // ✅ style file for cards
import image from "../../assets/Image/abroadhub.png";
import wonderlust from "../../assets/Image/wonderlust.png";


// Import slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      &#62;
    </div>
  );
};

// ✅ Custom Prev Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div 
      className={className} 
      style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
      onClick={onClick}
    >
      &#60;
    </div>
  );
};

// ✅ Project Data
const cardsData = [

  {
    id: "ai-chatbot",
    image: image,
    title: "AI Chatbot",
    description: "Conversational AI bot built with NLP & Flask backend.",
    techStack: ["Python", "NLTK", "Flask"],
    liveLink: "#",
    github: "https://github.com/yourname/chatbot",
    page: "/project/ai-chatbot",
  },
  {
    id: "ml-classifier",
    image: wonderlust,
    title: "Machine Learning Classifier",
    description: "Email spam classifier using Scikit-learn.",
    techStack: ["Python", "Scikit-learn"],
    liveLink: "#",
    github: "https://github.com/yourname/ml-classifier",
    page: "/project/ml-classifier",
  },
    {
    id: "abroadhub",
    image: image,
    title: "AbroadHub",
    description: "A full-stack MERN platform for immigration & study abroad services.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Hostinger"],
    liveLink: "https://www.abroadhub.in",
    github: "https://github.com/RajiaRani/Final-AbroadHub",
    page: "/project/abroadhub",
  },
  {
    id: "wonderlust",
    image: wonderlust,
    title: "Wonderlust",
    description: "Full-stack travel booking platform with maps, auth & CRUD features.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://miniwonderlust-project.onrender.com/listings",
    github: "https://github.com/RajiaRani/MiniWonderLust-Project",
    page: "/project/wonderlust",
  },
];

export default function Projects() {
  // ✅ Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="main-container">
      <div className="project-head">
        <h1>Projects</h1>
        <Link to="/projects">
          Learn more <HiOutlineArrowNarrowRight />
        </Link>
      </div>
      <hr />

      {/* ✅ Project Slider */}
      <Slider {...settings} className="project-slider">
        {cardsData.map((card, index) => (
          <div className="card-wrapper" key={index}>
            <div className="card">
              <div className="card-header">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="tech-stack">
                  {card.techStack.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card-links">
                {card.github && (
                  <a href={card.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {card.liveLink && (
                  <a href={card.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                <Link to={card.page} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
