import "./index.css";

const experiences = [
  {
    role: "Research Assistant",
    company: "University of South Dakota",
    location: "Vermillion, SD, USA",
    period: "Jan 2026 - Present",
    bullets: [
      <>Implemented an LLM pre-training pipeline using Megatron-DeepSpeed with 5D parallelism (DP+TP+PP+CP/SP+EP) and ZeRO (stage 2/3) across 8 GPUs; improved tokens/sec by <strong>28%</strong> while maintaining 85% scaling efficiency.</>,
      <>Profiled end-to-end pre-training step time; reduced step time from <strong>520ms to 410ms</strong> and increased GPU utilization from <strong>62% to 81%</strong> by tuning micro-batch size, gradient accumulation, and communication overlap.</>,
      <>Extended sequence length from <strong>2K to 8K tokens</strong> with 35% lower peak memory and 18% throughput improvement via sequence/context parallelism and activation recomputation.</>,
      "Conducted ablation studies on parallelism configurations, identifying optimal TP/PP/DP ratios for different model sizes and cluster topologies.",
      "Maintained reproducible experiment pipelines using SLURM job scheduling with custom profiling hooks in Megatron training loops.",
    ],
  },
  {
    role: "AI & Full-Stack Developer - Co-Founder",
    company: "Majorana AI Labs Pvt. Ltd.",
    location: "India",
    period: "Oct 2023 – Dec 2025",
    bullets: [
      "Co-founded Majorana AI Labs and led AI solutions in computational chemistry, molecular modeling, drug discovery, and laboratory automation.",
      "Built and deployed end-to-end AI-driven applications; backend in Python and Node.js, RESTful APIs, and cloud infrastructure on AWS and GCP.",
      "Drove product design, system architecture, and cross-functional research translating scientific requirements into production software.",
      "Integrated NLP and generative AI to automate research literature synthesis and hypothesis generation for chemistry workflows.",
      "Led client engagement, technical roadmap planning, and delivery for multiple products from prototype to production.",
      "Built CI/CD pipelines with Docker; managed cloud deployments with monitoring and alerting infrastructure.",
    ],
  },
  {
    role: "Assistant Professor - Chemistry",
    company: "St. Soldier College",
    location: "India",
    period: "Jul 2019 – Jul 2023",
    bullets: [
      "Taught Organic Chemistry to undergraduate and senior secondary students for 4 years, emphasizing conceptual clarity and practical application.",
      "Organized seminars, workshops, and conferences to enhance student engagement and research exposure.",
      "Designed course curriculum and lab practicals; consistently achieved high student satisfaction and academic outcomes.",
      "Tutored students in Chemistry (Grades 10–12) and Mathematics (Grades 6–10), developing strong mentoring and communication skills.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="exp-page">
      <h1 className="exp-title">Experience</h1>
      <p className="exp-sub">
       MS in AI and Research Assistant at the University of South Dakota, specializing in LLM pre-training, distributed systems, and GPU performance optimization with deep hands-on experience across distributed training infrastructure, agentic AI systems, and production ML deployment.
      </p>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-header">
              <div className="exp-left">
                <h2 className="exp-role">{exp.role}</h2>
                <div className="exp-org">
                  {exp.company} <span className="exp-dot">·</span> {exp.location}
                </div>
              </div>
              <div className="exp-period">{exp.period}</div>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}