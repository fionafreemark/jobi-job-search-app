// Modules
import { Link } from "react-router-dom";
// Assets
import BlackArrow from "../assets/icons/right-arrow-black.svg"

const GuidesCard = ({ title, date, guideContent, img, imgAlt }) => {

  return (
    <li className="guides-li">
      <div className="guides-img-box">
        <img src={img} alt={imgAlt} className="guide-img"/>
      </div>
      <p className="guides-date">{date}</p>
      <h4 className="guides-h4">{title}</h4>
      <p className="guides-content">{guideContent}</p>
      <div className="guides-arrow-box">
        <Link className="guides-arrow-link">
          <img src={BlackArrow} alt="Right arrow icon." aria-label="Click to learn more." />
        </Link>
      </div>
    </li>
  );
};

export default GuidesCard;
