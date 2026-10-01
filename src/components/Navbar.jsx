import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { resumePath } from "../config/siteConfig";
import "./Navbar.css";

const links = [
    ["Home", "hero"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["CV", resumePath, true],
    ["Contact Me", "contact"],
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveSection(visible.target.id);
            },
            { rootMargin: "-30% 0px -55%" },
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="navbar">
            <a className="logo" href="#hero" onClick={closeMenu} aria-label="Neeraj Prajapati home">
                N<span>eeraj Prajapati</span>
            </a>
            <button
                className="menu-toggle"
                type="button"
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>
            <nav id="primary-navigation" className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
                {links.map(([label, id, isResume]) => (
                    <a key={id} className={isResume ? "nav-cv" : activeSection === id ? "active" : ""} href={isResume ? id : `#${id}`} download={isResume ? true : undefined} onClick={closeMenu}>
                        {label}{isResume && <FiDownload aria-hidden="true" />}
                    </a>
                ))}
            </nav>
        </header>
    );
}
