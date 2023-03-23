// Modules
import { Link } from "react-router-dom";
import { useState } from "react";
// Assets
import Dots from "../assets/icons/dot-pattern.svg"
import DownArrow from "../assets/icons/down-arrow.svg"
import PortraitPink from "../assets/images/portrait-of-woman-in-pink.jpg"
import PortraitGrey from "../assets/images/portrait-of-man-in-grey.jpg"
import PortraitPeach from "../assets/images/portrait-of-woman-in-peach.jpg"
import PortraitOrange from "../assets/images/portrait-of-woman-in-orange.jpg"
import Swoosh from "../assets/icons/swoosh.svg"
import UpArrow from "../assets/icons/up-arrow.svg"

const TalentSection = () => {
  const [isHeaderClicked, setIsHeaderClicked] = useState(false);
  const [headerClass, setHeaderClass] = useState("accordion-header");

  // Open/Close Accordion Text
  const updateAccordion = () => {
    if (isHeaderClicked) {
      setHeaderClass("accordion-header active")
    } else {
      setHeaderClass("accordion-header")
    }
    setIsHeaderClicked(!isHeaderClicked);
  };

  return (
    <section className="talent-section wrapper">
      <div className="talent-left">
        <p className="talent-choose">Why choose us?</p>
        <h3>A world of talent at your fingertips</h3>
        <div className="accordion-container acc-cont-1">
          <div className={headerClass} onClick={updateAccordion}>
            <h4>Seamless search</h4>
            <img src={{headerClass} === "accordion-header active" ? {UpArrow} : {DownArrow}} alt="" />
          </div>
          <div className="accordion-text">
            <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page designs to reflect your brand.</p>
          </div>
        </div>
        <div className="accordion-container acc-cont-2">
          <div className={headerClass} onClick={updateAccordion}>
            <h4>Hire top talents</h4>
            <img src={{ headerClass } === "accordion-header active" ? { UpArrow } : { DownArrow }} alt="" />
          </div>
          <div className="accordion-text">
            <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page designs to reflect your brand.</p>
          </div>
        </div>
        <div className="accordion-container acc-cont-3">
          <div className={headerClass} onClick={updateAccordion}>
            <h4>Protected payments, every time.</h4>
            <img src={{ headerClass } === "accordion-header active" ? { UpArrow } : { DownArrow }} alt="" />
          </div>
          <div className="accordion-text">
            <p>It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page designs to reflect your brand.</p>
          </div>
        </div>
        <Link className="button-link">Learn More</Link>
      </div>
      <div className="talent-right">
        <div className="talent-top-img img-pos">
          <img src={PortraitPeach} alt="" />
        </div>
        <div className="talent-swoosh img-pos">
          <img src={Swoosh} alt="" />
        </div>
        <div className="talent-dot-pattern img-pos">
          <img src={Dots} alt="" />
        </div>
        <div className="talent-search-bar img-pos">

        </div>
        <div className="talent-right-img img-pos">
          <img src={PortraitGrey} alt="" />
        </div>
        <div className="talent-payment-box img-pos">

        </div>
        <div className="talent-left-img img-pos">
          <img src={PortraitPink} alt="" />
        </div>
        <div className="talent-candidate-box">
          <p>18k+ Candidates</p>
          <ul className="talent-layered-imgs">

            <li className="layered-img layer-1 img-pos">
              <img src={PortraitPeach} alt="" />
            </li>

            <li className="layered-img layer-2 img-pos">
              <img src={PortraitGrey} alt="" />
            </li>

            <li className="layered-img layer-3 img-pos">
              <img src={PortraitPink} alt="" />
            </li>

            <li className="layered-img layer-4 img-pos">
              <img src={PortraitOrange} alt="" />
            </li>

            <li className="layered-img layer-5 img-pos blue-box">
              <p>+</p>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
};

export default TalentSection;