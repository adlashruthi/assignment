import React from 'react'
import "./NavbarStyles.css";
import {FiPhone,FiMail} from "react-icons/fi";
import {AiTwotoneMessage} from "react-icons/ai";
const Navbar = () => {
  return (
    <>
    <div className="color">

    </div>
    <div className="navbar">
        <div className="nav-container">
        </div>
        

          <h1 className="phone-icon"><FiPhone className="phone" /></h1>
          <h1 className="mail-icon"> <FiMail className="mail" /></h1>
    
            <button className="button">Sign Up</button>
        
    </div>
    <div className="navbar1">
        <div>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
      
        <h1 className="ai"><AiTwotoneMessage /></h1>
      
    </div>

    <div className="bg">
        <div className="head-block">
            <p className="bg-para">IT'S EASY IT'S FREE </p>
            <h2 className="bg-heading">We provide On- Demand Live <br />1 on 1 Classes </h2>
            <p className="bg-para1">A free platform for students to interact 1 on 1<br />
                with their chosen tutor at the click of a mouse!</p>
            <button className="yellow-button">Book A Free Demo</button>
            <button className="join">join as a Teacher</button>

        </div>

    </div>
   </>
  )
}

export default Navbar;