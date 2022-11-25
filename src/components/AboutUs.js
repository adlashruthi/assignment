import React from 'react'
import "../AboutUsStyles.css";
import {VscCircleFilled} from "react-icons/vsc"
import {VscChevronDown} from "react-icons/vsc"
import {FiCircle} from "react-icons/fi";
const AboutUs = () => {
  return (
    <>
    <div>
      <h1 className="browse">
      Browse Teachers at One Click
      </h1>
      <h2 className="am">I am a</h2>
      <div className="student-container">
      <p className="student"><VscCircleFilled className="circle" />Student/Parent </p>
      <p className="teacher"><FiCircle className="fic" />Teacher  </p>
      </div>
      <div className="teacher-container">
        <h4 className="sub">Subject</h4>
        <h4 className="grade">Grade</h4>
      </div>
      <div className="color-container">
    <div className="background">
    <h1 className="i"> <VscChevronDown className="i"/></h1>
     <hr className="line"/>
     </div>

       <div className="background1">
    <h1 className="i"> <VscChevronDown className="i"/></h1>
     <hr className="line"/>
    </div>
    
     </div>
    <div>
        <h2 className="about">About Us</h2>
    <div className="a-container">
        <p className="about-para">Sikho.live provides a virtual classroom 
        which includes features like video chat, whiteboard interface and 
        files sharing that allow tutors and students to communicate face to face in a virtual classroom space all from comfart of their own homes.<br/><br/>
            At the moment, we provide tutoring for all subjects
             from primary, middle school, high school, university 
             and also test prep.<br/><br/>
            We have students for IB board, Cambridge, K-12 of USA 
            and Canada and even specialisation of various university subjects 
            such as operation reserach, signal processing, etc.
            <br /><br />Learn More </p>
        <img className="about-image" alt="img" src="https://images.pexels.com/photos/4260314/pexels-photo-4260314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

    </div>


    
    </div>
    </div>
    </>
  )
}

export default AboutUs