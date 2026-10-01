import "./Projects.css";
import portfolio from "../assets/portfolio.jpeg";
import spotify from "../assets/spotify.jpeg";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-heading">
        <p className="section-eyebrow">Selected work</p>
        <h1>Projects</h1>
      </div>
      <div className="projects1">
        <article className="box1">
          <img
            src={portfolio}
            alt="Voice Assistant project preview"
            className="project-image"
          />
          <div className="project-content">
            <p className="project-kicker">Featured project</p>
            <h2>Voice Assistant (TechGuru)</h2>
            <p>
              A browser-based voice assistant built with speech recognition and
              a responsive React interface.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>Web Speech API</span>
            </div>
            <a
              className="project-link"
              href="https://tech-guru-pearl.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo -&gt;
            </a>
          </div>
        </article>
        <article className="box1">
          <img
            src={spotify}
            alt="Smart News Aggregator project preview"
            className="project-image"
          />
          <div className="project-content">
            <p className="project-kicker">Featured project</p>
            <h2>Smart News Aggregator</h2>
            <p>
              A responsive news experience combining React, a Node.js backend,
              News API and Tailwind CSS.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>Node.js</span>
              <span>News API</span>
              <span>Vercel</span>
            </div>
            <a
              className="project-link"
              href="https://daily-news-com-flask-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo -&gt;
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
