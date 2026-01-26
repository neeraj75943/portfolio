import "./Contact.css"

export default function Contact(){
    return(
        <div className="contact">
         <div className="headingcontact">
            <h1>Contact Me</h1>
         </div>
         <div className="headingh3contact">
            <h3>Please fill out he form below to discuss any work opportunities.</h3>
         </div>
         <form>
            <input placeholder="Your Name" className="input1"/>
            <br></br>
            <input placeholder="Your No." className="input2"/>
            <textarea placeholder="Your Message" rows="5" cols="50" className="textarea"></textarea>
            <br></br>
            <button className="submitbtn">Submit</button>
         </form>
        </div>
    )
}