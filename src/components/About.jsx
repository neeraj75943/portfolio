import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-heading">
        <p className="section-eyebrow">About me</p>
        <h1>Building useful products with thoughtful code.</h1>
        <p className="about-lead">
          I&apos;m Neeraj Prajapati, a MERN / Full Stack Developer focused on
          learning, building and improving modern web experiences.
        </p>
      </div>
      <div className="about-grid">
        <article className="about-card about-intro-card">
          <h2>Career objective</h2>
          <p>
            To secure a position as a web developer in a reputable organization
            where I can apply my web development skills, contribute to the
            company&apos;s growth and continuously advance my knowledge and
            expertise.
          </p>
          <p>
            I enjoy turning ideas into simple, functional web pages while
            strengthening my fundamentals and problem-solving skills step by
            step.
          </p>
        </article>
        <article className="about-card skills-card">
          <h2>Technical skills</h2>
          <div className="skill-groups">
            <div>
              <h3>Programming</h3>
              <p>
                JavaScript <span>Java</span> <span>C</span>
              </p>
            </div>
            <div>
              <h3>Frontend</h3>
              <p>
                HTML5 <span>CSS</span> <span>React.js</span>{" "}
                <span>Tailwind CSS</span> <span>Bootstrap</span>
              </p>
            </div>
            <div>
              <h3>Backend</h3>
              <p>
                Node.js <span>Express.js</span> <span>RESTful APIs</span>{" "}
                <span>JWT</span>
              </p>
            </div>
            <div>
              <h3>Database &amp; tools</h3>
              <p>
                PostgreSQL <span>MySQL</span> <span>SQL</span> <span>Git</span>{" "}
                <span>GitHub</span> <span>Vercel</span> <span>VS Code</span>{" "}
                <span>Agile / Scrum</span>
              </p>
            </div>
          </div>
        </article>
        <article className="about-card experience-card">
          <p className="card-kicker">Experience</p>
          <h2>MERN Stack Developer Intern</h2>
          <p className="card-meta">
            GRAS Tech, Lucknow <span>Jun 2025 - Aug 2025</span>
          </p>
          <p>
            Worked on responsive web interfaces, reusable React components and
            API-connected features while building practical MERN stack
            experience.
          </p>
        </article>
        <div className="about-mini-grid">
          <article className="about-card">
            <p className="card-kicker">Education</p>
            <h2>B.Tech - Computer Science &amp; Engineering</h2>
            <p className="card-meta">
              Babu Banarasi Das University, Lucknow <span>2022 - 2026</span>
            </p>
          </article>
          <article className="about-card">
            <p className="card-kicker">Certification</p>
            <h2>Web Development Training (MERN Stack)</h2>
            <p className="card-meta">
              GRAS Tech Private Limited <span>Jun 2025 - Aug 2025</span>
            </p>
            <a
              className="credential-link"
              href="https://ibb.co/67tQnqCr"
              target="_blank"
              rel="noopener noreferrer"
            >
              View credential -&gt;
            </a>
          </article>
        </div>
      </div>
      <p className="availability-badge">
        Available for opportunities <span>Immediate Joiner</span>
      </p>
    </section>
  );
}
