import React from 'react'
import "./StudentStyles.css";
const Student = () => {
  return (
    <>
    <div>
    <h1 className="how">How It Works</h1>
    <p className="for">For Students</p>
    <div className="i-container">
        <img className="avatar" alt="img" src="https://i0.wp.com/salbagossinc.org/wp-content/uploads/2019/01/pexels-photo-4260325.jpeg?zoom=2&resize=350%2C350&ssl=1" />
        <h2 className="code">&#8594;</h2>
        <img className="avatar" alt="img" src="https://www.starseedlearning.org/wp-content/uploads/2020/11/pexels-julia-m-cameron-4143791-1-300x300.jpg" />
        <h2 className="code">&#x2192;</h2>
        <img className="avatar" alt="img" src="https://parentandteen.com/wp-content/uploads/change-behavior-category.jpg" />
    </div>
    <div className="learn">
        <p className="more">Learn More</p>
    </div>
    <p className="for">For Teachers</p>
    <div className="i-container">
        <img className="avatar" alt="img" src="https://im.rediff.com/getahead/2021/mar/31happy-employee1.jpg?w=670&h=900" />
        <h2 className="code">&#8594;</h2>
        <img className="avatar" alt="img" src="https://ugc.futurelearn.com/uploads/images/51/c3/large_hero_51c344b8-e7c3-42f2-b415-36a61926c804.jpg" />
        <h2 className="code">&#x2192;</h2>
        <img className="avatar" alt="img" src="https://efuinsurance.com/images/products-services/miscellaneous/financial-line-insurance/electronic-computer-crime-insurance/electronic-computer-instructions.jpg" />
    </div>
    <div className="learn">
        <p className="more">Learn More</p>
    </div>

    </div>
    </>
  )
}

export default Student