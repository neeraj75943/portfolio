import "./Skills.css";

const skillGroups = [
    ["Programming", ["JavaScript", "Java", "C"]],
    ["Frontend", ["HTML5", "CSS", "React.js", "Tailwind CSS", "Bootstrap"]],
    ["Backend", ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"]],
    ["Database", ["PostgreSQL", "MySQL", "SQL"]],
    ["Tools", ["Git", "GitHub", "Vercel", "VS Code", "Agile / Scrum"]],
];


export default function Skills(){
    return(
        <section id="skills" className="skills">
            <div className="skills-heading"><p className="section-eyebrow">What I work with</p><h1>Technical Skills</h1></div>
            <div className="skills-grid">
                {skillGroups.map(([group, skills]) => <article className="skill-card" key={group}><h2>{group}</h2><div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
            </div>
        </section>
    )
}