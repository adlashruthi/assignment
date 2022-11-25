import React from 'react'
import "./FaqStyles.css";
import {FaAngleDown} from "react-icons/fa";

const Faq = () => {
  return (
    <>
    
    <div>
        <h3 className="faqs">FAQS</h3>
        <p className="fa">Q Lorem ipsum dolor sit amet, consectetur adipiscing? <FaAngleDown className="angle" /></p>
        <p className="fa">Q Lorem ipsum dolor sit amet, consectetur adipiscing? <FaAngleDown className="angle" /></p>
        <p className="fa">Q Lorem ipsum dolor sit amet, consectetur adipiscing? <FaAngleDown className="angle" /></p>
        <p className="fa">Q Lorem ipsum dolor sit amet, consectetur adipiscing? <FaAngleDown className="angle" /></p>

    </div>
    <div className="give">
        <p className="feed">Give Feedback</p>
        <p className="view">View All</p>
    </div>
   <div className="c-container">
    
   </div>
    
    </>
  )
}

export default Faq