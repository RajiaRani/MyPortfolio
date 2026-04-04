import "./index.css";
import rajia from "../../assets/Image/rajia.jpeg";
import Project from "../Project";
export default function About() {
  return (
    <>
    <div className="main-container">
      <div className="left-container">
        <img src={rajia} alt="rajia" />
        <h2>RAJIA RANI</h2>
        <p> AI/ML Engineer / Full Stack Developer/ <br/> Ex. Assistent Professor </p>
        <a href=" https://www.linkedin.com/in/rajia-rani-935b71187/">Linkdlin</a> &nbsp; &nbsp;
        <a href="https://github.com/RajiaRani">Github</a> &nbsp; &nbsp;
        <a>Portfolio</a>
      </div>
      <div className="right-container">
        <div className="about-container">
          <div className="about">
            <p>
              {" "}
              Hi, I'm Rajia Rani - 
              <br/> a passionate educator turned Full-Stack
              Developer and Co-Founder of a deep-tech startup.
            </p>
            <p>
              Ex-Assistant Professor | Full-Stack Web Developer | Co-founder of
              MAJORANA AI LABS <br />
              With 4+ years in academia and 1+ year in tech, I bridge the gap
              between science and software. Currently building AI + Quantum
              Computing solutions, exploring deep tech, and coding full-stack
              applications. <br />
              📍 Based in USA | AI 
            </p>
            <p>
              My journey began with a BSc in Non-Medical Sciences, where I
              developed a strong interest in Quantum Mechanics, Mathematics, and
              Computational Thinking. Later, I earned an MSc in Chemistry,
              further sharpening my analytical skills and scientific mindset.
              For over 4 years, I worked as an Assistant Professor of Chemistry,
              and for 5+ years, I tutored high school students in Chemistry
              (Grades 10–12) and Mathematics (Grades 6–10). Teaching not only
              deepened my love for learning but also honed my skills in
              communication, problem-solving, and mentoring.
            </p>
          </div>
        </div>
        <div>
          In 2023, I began a focused transition into Computer Science & Web
          Development. Since then, I’ve mastered core technologies including:{" "}
          <br />
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
            <li>Backend: Node.js, Express.js, Flask</li>
            <li>Databases: MongoDB, MySQL</li>
            <li>Concepts: DSA, OOPs, REST APIs, MVC Architecture</li>
          </ul>
          <h3> 🚀 Startup Journey</h3>
          <p>
            {" "}
            In January 2025, I co-founded MAJORANA AI LABS PRIVATE LIMITED with
            my husband. Our vision is to develop cutting-edge solutions at the
            intersection of Artificial Intelligence and Quantum Computing.
          </p>
          {/* <h3>
            {" "}
            🌐 Featured Project:{" "}
            <a href="https://abroadhub.in/">Abroadhub.in</a>{" "}
          </h3>
          <p>
            A full-stack web platform built for an educational service company,
            integrating user registration, dashboards, content management, and
            more - aligned with real-world business needs.
          </p>
          <p>
            🧠 With a strong foundation in Linear Algebra, Calculus, and Quantum
            Science, I’m now preparing to pursue an MSc in Quantum Computing in
            the U.S. to align academically with our startup’s mission. <br />
            💬 Let’s connect if you’re working on projects in AI, Quantum
            Computing, or Full-Stack Development - or if you simply enjoy
            meaningful conversations about the future of technology!
          </p> */}
        </div>
      </div>
       </div>

    </>
  );
}
