import React, { useState } from "react";
import "./Project.css";

// Actual project images from assets
import abroadhubImg from "../../assets/Image/abroadhub.png";
import wonderlustImg from "../../assets/Image/wonderlust.png";
import fullstackImg from "../../assets/Skills/fullstack.jpg";
import bgImg from "../../assets/Image/background.jpg";

// Skill icons re-used as project visuals
import pytorchImg from "../../assets/png-512/PyTorch.png";
import tfImg from "../../assets/png-512/TensorFlow.png";
import dockerImg from "../../assets/png-512/Docker.png";
import awsImg from "../../assets/png-512/AWS.png";
import opencvImg from "../../assets/png-512/OpenCV.png";

const projects = [
  {
    img: null,
    imgFit: "contain",
    title: "Scalable LLM Training - 5D Parallelism",
    category: "AI / Distributed Systems",
    desc: "Distributed GPT-2 training framework across 8× H100/A100 GPUs implementing all 5 parallelism strategies (DP, TP, PP, CP, EP) from scratch using PyTorch Distributed and NCCL. Achieved ~1.5M tok/sec on DP=8 baseline. Includes LoRA fine-tuning, Ring Attention, and MoE with top-k routing.",
    tech: ["PyTorch", "NCCL", "CUDA", "Megatron", "LoRA", "MoE"],
    github: "https://github.com/RajiaRani/Scalable-LLM-Training-with-5D-Parallelism",
    demo: "",
    date: "2025",
    accent: "#1a6e8e",
    gradientColor: "#1a6e8e",
  },
  {
    img: null,
    imgFit: "contain",
    title: "PulseGuard AIOps - AI Incident Commander",
    category: "Agentic AI",
    desc: "10-node LangGraph agent workflow for automated incident triage, orchestrating evidence collection across service health, deployments, feature flags, and dependency health through 5 deterministic MCP-style tool contracts. Includes FastAPI backend with ChromaDB vector retrieval over runbooks.",
    tech: ["LangGraph", "FastAPI", "ChromaDB", "RAG", "OpenTelemetry", "MCP"],
    github: "https://github.com/RajiaRani/Pulseguard-Aiops",
    demo: "",
    date: "2025",
    accent: "#5c4b8a",
    gradientColor: "#5c4b8a",
  },
  {
    img: null,
    imgFit: "contain",
    title: "RAG-Based Information Retrieval System",
    category: "NLP / AI",
    desc: "RAG pipeline from scratch (no LangChain/LlamaIndex) implementing fixed, semantic, and structural chunking with hybrid BM25, IVF indexing, and ms-marco cross-encoder reranking on AWS. Integrated FAISS, Chroma, Supabase (pgvector); evaluated with RAGAS.",
    tech: ["Python", "FAISS", "ChromaDB", "BM25", "pgvector", "AWS", "RAGAS"],
    github: "https://github.com/RajiaRani/RAG-ChatBot--Based-Information-Retrieval-System-",
    demo: "",
    date: "2024–2025",
    accent: "#2a7c6f",
    gradientColor: "#2a7c6f",
  },
  {
    img: null,
    imgFit: "contain",
    title: "CNN Brain Tumor Detection",
    category: "Computer Vision / Deep Learning",
    desc: "Deep learning model using Convolutional Neural Networks for MRI-based brain tumor classification. Achieved high accuracy in multi-class tumor detection using transfer learning and data augmentation techniques.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "NumPy"],
    github: "https://github.com/RajiaRani/Brain_Tumor_detection",
    demo: "",
    date: "2024",
    accent: "#b5451b",
    gradientColor: "#b5451b",
  },
  {
    img: fullstackImg,
    imgFit: "cover",
    title: "Machine Learning Classifier",
    category: "Machine Learning",
    desc: "Spam email classifier and general ML classifier pipeline using Scikit-learn, featuring preprocessing, feature engineering, model selection, and evaluation metrics.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/RajiaRani",
    demo: "",
    date: "2024",
    accent: "#7a6e1a",
  },
  {
    img: bgImg,
    imgFit: "cover",
    title: "AI Chatbot",
    category: "NLP",
    desc: "Conversational AI chatbot built with NLP techniques. Processes natural language input, manages conversation context, and delivers contextually relevant responses via a Flask web interface.",
    tech: ["Python", "NLTK", "Flask", "REST API"],
    github: "https://github.com/RajiaRani",
    demo: "",
    date: "Prototype 2024",
    accent: "#1a6e8e",
  },
    {
    img: abroadhubImg,
    imgFit: "cover",
    title: "AbroadHub",
    category: "Full-Stack Web",
    desc: "A full-stack immigration & study-abroad platform with user dashboards, content management, and real-world business integrations. Deployed to production.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Hostinger"],
    github: "https://github.com/RajiaRani/Final-AbroadHub",
    demo: "https://www.abroadhub.in",
    date: "Deployed August 2024",
    accent: "#1a6e8e",
  },
  {
    img: wonderlustImg,
    imgFit: "cover",
    title: "MiniWonderLust",
    category: "Full-Stack Web",
    desc: "A dynamic platform for users to create, browse, and manage travel listings with map integration, user authentication, and responsive design.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Render"],
    github: "https://github.com/RajiaRani/MiniWonderLust-Project",
    demo: "https://miniwonderlust-project.onrender.com/listings",
    date: "Completed June 2024",
    accent: "#2a7c6f",
  },
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        {project.img ? (
          <img src={project.img} alt={project.title} className="modal-img" style={{ objectFit: project.imgFit }} />
        ) : (
          <div className="modal-img modal-gradient" style={{ background: `linear-gradient(135deg, ${project.gradientColor || '#1a6e8e'}22, ${project.gradientColor || '#1a6e8e'}55)` }}>
            <span className="modal-category-badge">{project.category}</span>
          </div>
        )}
        <div className="modal-body">
          <span className="modal-cat">{project.category}</span>
          <h2 className="modal-title" style={{ color: project.accent }}>{project.title}</h2>
          <p className="modal-desc">{project.desc}</p>
          <div className="modal-tags">
            {project.tech.map(t => <span className="modal-tag" key={t}>{t}</span>)}
          </div>
          <div className="modal-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="modal-btn modal-btn-primary">
                ⭐ View on GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="modal-btn modal-btn-outline">
                🔗 Live Demo
              </a>
            )}
          </div>
          <small className="modal-date">{project.date}</small>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-main-title">Projects</h1>
        <p className="projects-subtitle">
          AI research, distributed systems, full-stack applications, and computer vision a portfolio of work
          spanning academic research and startup engineering.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelected(project)}
            style={{ cursor: "pointer", borderTop: `3px solid ${project.accent}` }}
          >
            {project.img ? (
              <div className="project-img-wrap">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                  style={{ objectFit: project.imgFit }}
                />
                <div className="project-img-overlay">
                  <span>Click to view details</span>
                </div>
              </div>
            ) : (
              <div
                className="project-img-wrap project-placeholder"
                style={{ background: `linear-gradient(135deg, ${project.gradientColor}18, ${project.gradientColor}40)` }}
              >
                <span className="placeholder-label">{project.category}</span>
                <div className="project-img-overlay">
                  <span>Click to view details</span>
                </div>
              </div>
            )}

            <div className="project-card-body">
              <span className="project-cat-badge">{project.category}</span>
              <h3 className="project-title" style={{ color: project.accent }}>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tech.slice(0, 4).map(t => (
                  <span className="project-tag" key={t}>{t}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="project-tag project-tag-more">+{project.tech.length - 4}</span>
                )}
              </div>
              <div className="project-card-footer">
                <small>{project.date}</small>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-gh-link"
                    onClick={e => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
