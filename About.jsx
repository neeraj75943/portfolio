import"./About.css"
import about from "../assets/about.jpeg"
export default function About(){
    return(
        <div className="about">
          <div className="img">
            <img src={about} alt="" className="aboutimg" />
          </div>
          <div className="aboutsection">
            <div className="headingabout">
                <h1>ABOUT</h1>
            </div>
            <div className="headingh3about">
                <h3>Full Stack Web Developer (Learning & Building Projects)</h3>
            </div>
            <div className="paraabout">
                <p>Hi, I’m Neeraj Prajapati, a beginner Web Developer who is passionate about learning and building modern, responsive websites.I have hands-on experience with HTML, CSS, JavaScript, React, Bootstrap ,nodejs, expressjs, API and I’m currently learning database by creating small projects and improving my problem-solving skills.</p>
            </div>
            <div className="para1about">
                <p>I’m focused on strengthening my fundamentals and growing step by step as a developer. I enjoy learning new technologies and turning ideas into simple, functional web pages.</p>
            </div>
            <div className="btnabout">
                <button className="btnabout1">Download CV</button>
            </div>
         </div>
        </div>
    )
}