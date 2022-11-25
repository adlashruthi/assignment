import React from 'react'
import "./WhyChooseStyles.css";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
const WhyChoose = () => {
  return (
    <>
    <div>
        <div className="container">
        <div className="y-container">
            <img src="https://static.wixstatic.com/media/a0f9e4_a8789be7ec7b4591bf04dc84fad39c6e~mv2.jpg/v1/fill/w_540,h_882,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0f9e4_a8789be7ec7b4591bf04dc84fad39c6e~mv2.jpg" className="image" alt="image" />
            <div>
                <h2 className="heading">Why Choose Us</h2>
                <p className="para">We care about your career and provide these unique features: Strictly 1 on 1 live Classes with Digital whiteboard. Highest Rated Teachers with regular homework and weekly Test<br /><br /> Progress Report for Parents with Custom, Handmade Notes and 24 x 7 Support (We are just WhatsApp call/message away</p>
            </div>
        </div>
        <h4 className="started">Let's Get Started</h4>
        <div className="s-container">
            <p className="des">With Sikho.live it is easy to find expert teachers in under 5 minutes. Just follow 3 easy steps Also 24 x 7 Support available, we are just a call / WhatsApp away. <br/>1 Tell us what you want to learn? <br/>2 We find you a sutaible teacher<br/> 3 Book and pay for your class</p>
            <img src="https://storage.googleapis.com/classcraft-1188.appspot.com/uploads/2020/12/Child-smiling-while-using-tablet-computer-Julia-M-Cameron-from-Pexels-Blog-Featured-Image-1-1024x576.png" className="image1" alt="image" />
        </div>
        <p className="demo">BOOK A Free demo <FaArrowCircleRight className="arrow" /></p>
        <div className="s-container1">
            <img src="https://images.ctfassets.net/rvt0uslu5yqp/4BFEC7rfWlFOOl1qVX5OJD/c7726d287f804d04c7c3f24bb6a18eb5/linkedin-sales-solutions-VtKoSy_XzNU-unsplash.jpg?w=1200&fm=webp" class="image2" alt="image" />
            <div>
                <p className="des">Are you a passionate teacher?Be a part of sikho.live and boost your carrier and business growth. Follow 3 simple steps tostart with.<br />
                   <br/> 1 Make a profile (It's FREE)
                   <br/> 2 We connect you with student
                   <br/> 3 Monthly payouts</p>

                <p className="demo"><FaArrowCircleLeft className="arrow1" />Join as a teacher </p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default WhyChoose