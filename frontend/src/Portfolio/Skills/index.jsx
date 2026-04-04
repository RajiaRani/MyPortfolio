import React from "react";
import "./index.css";

import python     from "../../assets/png-512/Python.png";
import java       from "../../assets/png-512/Java.png";
import Cplus      from "../../assets/png-512/C++-(CPlusPlus).png";
import C          from "../../assets/png-512/C.png";
import mysql      from "../../assets/png-512/MySQL.png";
import html       from "../../assets/png-512/HTML5.png";
import css        from "../../assets/png-512/CSS3.png";
import js         from "../../assets/png-512/JavaScript.png";
import cuda       from "../../assets/png-512/cuda.png";
import julia      from "../../assets/png-512/Julia.png";
import R          from "../../assets/png-512/R-.png";
import tensorflow from "../../assets/png-512/TensorFlow.png";
import pytorch    from "../../assets/png-512/PyTorch.png";
import scikit     from "../../assets/png-512/scikit-learn.png";
import pandas     from "../../assets/png-512/Pandas.png";
import numpy      from "../../assets/png-512/NumPy.png";
import matplotlib from "../../assets/png-512/Matplotlib.png";
import keras      from "../../assets/png-512/Keras.png";
import seaborn    from "../../assets/png-512/seaborn.png";
import scipy      from "../../assets/png-512/scipy.png";
import opencv     from "../../assets/png-512/OpenCV.png";
import mongodb    from "../../assets/png-512/MongoDB.png";
import docker     from "../../assets/png-512/Docker.png";
import git        from "../../assets/png-512/Git.png";
import kubernetes from "../../assets/png-512/Kubernetes.png";
import aws        from "../../assets/png-512/AWS.png";
import azure      from "../../assets/png-512/Azure.png";
import hadoop     from "../../assets/png-512/Apache-Hadoop.png";

const categories = [
  {
    label: "Programming & Cloud",
    skills: [
      { name: "Python", img: python },
      { name: "Java", img: java },
      { name: "C++", img: Cplus },
      { name: "C", img: C },
      { name: "SQL", img: mysql },
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "JavaScript", img: js },
      { name: "CUDA", img: cuda },
      { name: "Julia", img: julia },
      { name: "R", img: R },
    ],
  },
  {
    label: "ML Libraries & Frameworks",
    skills: [
      { name: "PyTorch", img: pytorch },
      { name: "TensorFlow", img: tensorflow },
      { name: "Keras", img: keras },
      { name: "Scikit-learn", img: scikit },
      { name: "Pandas", img: pandas },
      { name: "NumPy", img: numpy },
      { name: "Matplotlib", img: matplotlib },
      { name: "Seaborn", img: seaborn },
      { name: "SciPy", img: scipy },
      { name: "OpenCV", img: opencv },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", img: aws },
      { name: "Azure", img: azure },
      { name: "Docker", img: docker },
      { name: "Kubernetes", img: kubernetes },
      { name: "Git", img: git },
      { name: "MongoDB", img: mongodb },
      { name: "Hadoop", img: hadoop },
    ],
  },
  {
    label: "Pre-Training & Inference",
    skills: [
      "Tensor Parallelism", "Pipeline Parallelism",
      "Sequence & Context Parallelism", "ZeRO (Stage 1/2/FSDP)",
      "Gradient Accumulation", "Ring-All Reduce",
      "Activation Recomputation", "Memory Optimization",
    ],
  },
  {
    label: "Machine Learning & GenAI",
    skills: [
      "ML", "DL", "Transformers", "Attention Mechanisms",
      "Scaling Laws", "LLMs", "Instruction Tuning",
      "LoRA/QLoRA", "Diffusion Models",
      "GPU Acceleration", "Distributed Training",
    ],
  },
  {
    label: "Agentic AI & LLM Systems",
    skills: [
      "LangGraph", "FastAPI", "MCP Tool Contracts", "ChromaDB",
      "Vector Retrieval", "RAG Pipelines",
      "Agent Orchestration", "OpenTelemetry",
    ],
  },
  {
    label: "NLP & Vision",
    skills: [
      "NLP", "Tokenization (BPE, WordPiece)", "SentencePiece",
      "Vector Search", "Computer Vision",
      "Vision-Language Models (VLMs)", "Multimodal Architectures",
    ],
  },
  {
    label: "Math & CS Foundations",
    skills: [
      "Statistics", "Linear Algebra", "Probability",
      "Optimization", "Calculus", "Data Structures & Algorithms",
    ],
  },
  {
    label: "Data & Tools",
    skills: [
      "NumPy", "Pandas", "MongoDB", "MySQL",
      "Git", "GitHub", "Flask", "Node.js", "REST APIs",
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-page">
      <h1 className="skills-heading">Technical Skills</h1>

      <div className="skills-table">
        {categories.map((cat, i) => (
          <div className="skill-row" key={i}>
            <div className="skill-label">{cat.label}</div>
            <div className="skill-values">
              {cat.skills.map((s, j) => {
                const isObj = typeof s === "object";
                return (
                  <span className="skill-item" key={j}>
                    {isObj && s.img && (
                      <img src={s.img} alt={s.name} className="skill-logo" />
                    )}
                    <span>{isObj ? s.name : s}</span>
                    {j < cat.skills.length - 1 && (
                      <span className="skill-sep">,</span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}