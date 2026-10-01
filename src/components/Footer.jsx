import { socialLinks } from "../config/siteConfig";
import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect</h3>
                    <ul className="footer-links">
                        <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href={`mailto:${socialLinks.email}`}>Email</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li><a href="#projects">Web Development</a></li>
                        <li><a href="#projects">UI/UX Design</a></li>
                        <li><a href="#projects">Consulting</a></li>
                        <li><a href="#contact">Get In Touch</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} <span>NNeerraajj</span>. All rights reserved.</p>
                <p className="footer-credit">Crafted with <span className="heart">♥</span> by NNeerraajj</p>
            </div>
        </footer>
    );
}
