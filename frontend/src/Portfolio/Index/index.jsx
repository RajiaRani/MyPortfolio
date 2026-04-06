import "./index.css";
import { Link } from "react-router-dom";
import rajia from "../../assets/Image/rajia.jpeg";

// Skill icons for preview
import python from "../../assets/png-512/Python.png";
import pytorch from "../../assets/png-512/PyTorch.png";
import tensorflow from "../../assets/png-512/TensorFlow.png";
import docker from "../../assets/png-512/Docker.png";
import aws from "../../assets/png-512/AWS.png";
import git from "../../assets/png-512/Git.png";

// Cert images
import cpp from "../../assets/Certificate/cpp.png";
import react from "../../assets/Certificate/react.png";
import la from "../../assets/Certificate/la.png";

const featuredProjects = [
  {
    title: "Scalable LLM Training - 5D Parallelism",
    desc: "Distributed GPT-2 training across 8× H100/A100 GPUs implementing all 5 parallelism strategies using PyTorch & NCCL. Achieved ~1.5M tok/sec.",
    tags: ["PyTorch", "CUDA", "Megatron", "DistributedTraining"],
    github: "https://github.com/RajiaRani/Scalable-LLM-Training-with-5D-Parallelism",
    color: "#1a6e8e",
  },
  {
    title: "PulseGuard AIOps - AI Incident Commander",
    desc: "10-node LangGraph agent workflow for automated incident triage with FastAPI backend, ChromaDB vector retrieval over runbooks.",
    tags: ["LangGraph", "FastAPI", "ChromaDB", "RAG", "OpenTelemetry", "MCP"],
    github: "https://github.com/RajiaRani/Pulseguard-Aiops",
    color: "#2a7c6f",
  },
  {
    title: "RAG-Based Information Retrieval System",
    desc: "RAG pipeline from scratch (no LangChain/LlamaIndex) implementing fixed, semantic, and structural chunking with hybrid BM25, IVF indexing, and ms-marco cross-encoder",
    tags: ["Python", "FAISS", "ChromaDB", "BM25", "pgvector", "AWS", "RAGAS"],
    github: "https://github.com/RajiaRani/RAG-ChatBot--Based-Information-Retrieval-System-",
    color: "#2a7c6f",
  },
];

const featuredCerts = [
  { src: cpp, title: "C++ Specialization", issuer: "Coursera / Codio" },
  { src: react, title: "React Basics", issuer: "Coursera" },
  { src: la, title: "Linear Algebra for AI", issuer: "Coursera" },
];

const skillIcons = [
  { img: python, name: "Python" },
  { img: pytorch, name: "PyTorch" },
  { img: tensorflow, name: "TensorFlow" },
  { img: docker, name: "Docker" },
  { img: aws, name: "AWS" },
  { img: git, name: "Git" },
];

export default function Index() {
  return (
    <div className="home-root">

      {/* ── Hero — Andrew Ng style ── */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-name">Rajia Rani</h1>
            <p className="hero-bio">
              Rajia Rani is an MS in Artificial Intelligence candidate and Research Assistant at the
              <strong> University of South Dakota</strong>, specialising in LLM pre-training, distributed
              systems, and GPU performance optimisation. 
            </p>
            <p className="hero-bio">
              She is the Co-Founder of <strong>Majorana AI Labs</strong>, where she led AI-driven
              solutions in computational chemistry, molecular modelling, and drug discovery. Before
              pivoting to tech, she served as an <strong>Assistant Professor of Chemistry</strong> for
              over 4 years.
            </p>
            <p className="hero-bio">
              She holds an MSc in Chemistry (LPU, India) and a BSc in Mathematics, Physics &amp;
              Chemistry. Her expertise spans LLM distributed training, agentic AI pipelines,
              full-stack development, and vision-language models.
            </p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/rajia-rani-935b71187/" target="_blank" rel="noreferrer" className="hero-link">
                LinkedIn
              </a>
              <a href="https://github.com/RajiaRani" target="_blank" rel="noreferrer" className="hero-link">
                GitHub
              </a>
              <Link to="/contact" className="hero-link">Contact</Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={rajia} alt="Rajia Rani" className="hero-photo" />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Skills Preview ── */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="section-heading">Technical Skills</h2>
          <Link to="/skills" className="section-link">View all →</Link>
        </div>
        <p className="section-desc">
          Specialising in LLM pre-training, distributed GPU computing, agentic AI systems, and full-stack development.
        </p>
        <div className="skill-tags-row">
          {["Tensor Parallelism","Pipeline Parallelism","ZeRO / FSDP","LangGraph","RAG Pipelines","LoRA / QLoRA","FastAPI","CUDA","PyTorch","Docker","AWS / GCP","LLM Pre-Training"].map(t => (
            <span className="skill-tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="skill-icons-row">
          {skillIcons.map(s => (
            <div className="skill-icon-item" key={s.name}>
              <img src={s.img} alt={s.name} />
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Featured Projects ── */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="section-heading">Featured Projects</h2>
          <Link to="/projects" className="section-link">All projects →</Link>
        </div>
        <div className="fp-grid">
          {featuredProjects.map((p, i) => (
            <div className="fp-card" key={i} style={{ borderTop: `3px solid ${p.color}` }}>
              <h3 className="fp-title" style={{ color: p.color }}>{p.title}</h3>
              <p className="fp-desc">{p.desc}</p>
              <div className="fp-tags">
                {p.tags.map(t => <span className="fp-tag" key={t}>{t}</span>)}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer" className="fp-github">
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Certificates Preview ── */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="section-heading">Certifications</h2>
          <Link to="/certificates" className="section-link">All 13 certificates →</Link>
        </div>
        <p className="section-desc">
          13 professional certifications from Coursera covering C++, React, Git, Linear Algebra, Algorithms, and more.
        </p>
        <div className="cert-preview-row">
          {featuredCerts.map((c, i) => (
            <div className="cert-preview-card" key={i}>
              <img src={c.src} alt={c.title} className="cert-preview-img" />
              <div className="cert-preview-info">
                <strong>{c.title}</strong>
                <span>{c.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Contact CTA ── */}
      <section className="home-section home-cta">
        <h2 className="section-heading">Let's Connect</h2>
        <p className="section-desc">
          Open to research collaborations, AI/ML roles, and conversations about distributed systems,
          LLMs, or full-stack development.
        </p>
        <div className="hero-links">
          <a href="mailto:rajia@example.com" className="hero-link">Email</a>
          <a href="https://www.linkedin.com/in/rajia-rani-935b71187/" target="_blank" rel="noreferrer" className="hero-link">LinkedIn</a>
          <Link to="/resume" className="hero-link hero-link-outline">View Resume</Link>
        </div>
      </section>

    </div>
  );
}
