import"./HeroSection.css"
import myimg from "../assets/myimg.png";


export default function herosection(){
    return(

    <div className ="herosection">
     <div className="left">
       <div className="para">
         <p>Web Developer,</p>
       </div>
       <div className="herosectionh1">
         <h1>I'm <span>Neeraj Prajapati</span> </h1>
       </div>
       <div className="stack">
         <h1>Full Stack Developer</h1>
       </div>
       <div className="para2">
          <p>To secure a position as a web developer in a reputable organization to apply my
           web developping skills and contribute to the company's growth while
           continuously advancing my knowledge and expertise in the field.</p>
       </div>
      </div>
       <div className="right">
       <img src={myimg} alt="" className="myimage" /> 
     </div>
   
    </div>
    )
}