import "./Projects.css"
import portfolio from "../assets/portfolio.png"
import spotify from "../assets/spotify.jpeg"
import ecommerce from "../assets/ecommerce.jpeg"


export default function Projects(){
    return (
        <div className="projects">
           <div className="headingprojects">
            <h1>My Projects</h1>
            <div/>
            <div className="projects1">
                <div className="box1">
                    <div className="headingportfolio">
                        <h4>Portfolio</h4>
                    </div>
                    <img src={portfolio} alt=""  className="portfolioimg"/>
                </div>
                <div className="box1">
                    <div className="headingspotify">
                        <h4>Social Media Platform</h4>
                    </div>
                    <img src={spotify} alt="" className="spotifyimg"/>
                </div>
                <div className="box1">
                    <div className="headingecommerce">
                        <h4>Library Book Management</h4>
                    </div>
                    <img src={ecommerce} alt="" className="ecommerceimg"/>
                </div>
            </div>
           </div>
        </div>
    )
}