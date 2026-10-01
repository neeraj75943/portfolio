import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import myimg from "../assets/myimg.jpeg";
import { resumePath, socialLinks } from "../config/siteConfig";
import "./HeroSection.css";

const configuredLink = (value) =>
  value && !value.startsWith("YOUR_") ? value : "";

const socialItems = [
  [
    "LinkedIn",
    <FaLinkedinIn aria-hidden="true" />,
    configuredLink(socialLinks.linkedin),
  ],
  [
    "Instagram",
    <FaInstagram aria-hidden="true" />,
    configuredLink(socialLinks.instagram),
  ],
  [
    "GitHub",
    <FaGithub aria-hidden="true" />,
    configuredLink(socialLinks.github),
  ],
  [
    "Email",
    <FiMail aria-hidden="true" />,
    configuredLink(socialLinks.email) ? `mailto:${socialLinks.email}` : "",
  ],
];

const highlights = [
  ["Full Stack Development", "Building complete web applications."],
  ["Responsive UI", "Creating interfaces for every screen."],
  ["REST APIs", "Connecting useful, functional experiences."],
];

export default function HeroSection() {
  return (
    <section id="hero" className="herosection">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">MERN Stack Developer</p>
          <h1>
            I&apos;m <span>Neeraj Prajapati</span>
          </h1>
          <p className="hero-role">Full Stack Developer</p>
          <p className="hero-description">
            I build responsive, user-friendly web experiences with React.js,
            Node.js, Express.js and RESTful APIs, while continuing to grow
            through practical MERN projects.
          </p>
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#contact">
              Contact Me
            </a>
            <a
              className="hero-button hero-button-secondary"
              href={resumePath}
              download
            >
              Download CV <FiDownload aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            {socialItems.map(([label, icon, href]) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  title={label}
                >
                  {icon}
                </a>
              ) : (
                <span
                  key={label}
                  className="hero-social-disabled"
                  aria-label={`${label} link not configured`}
                  title={`${label} link not configured`}
                >
                  {icon}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={myimg}
              alt="Neeraj Prajapati, Full Stack Developer"
              className="myimage"
            />
            <span className="hero-badge">Full Stack Developer</span>
          </div>
        </div>
      </div>
      <div className="hero-highlights" aria-label="Developer highlights">
        {highlights.map(([title, description]) => (
          <article key={title} className="highlight-card">
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
