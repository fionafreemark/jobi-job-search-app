// Modules
import { Link } from "react-router-dom";
// Pages
import JobListings from '../Pages/JobListings';
//Assets
import Pen from '../assets/icons/pen.svg';
import Development from '../assets/icons/code.svg';
import Shopping from '../assets/icons/shopping.svg';
import Phone from '../assets/icons/phone.svg';
import Building from '../assets/icons/building.svg';
import Controls from '../assets/icons/controls.svg';


const CategoriesSection = () => {
  return (
    <section className="categories-section wrapper">
      <div className="categories-container">

        <div className="header-box">
          <h4>Most In-Demand Categories</h4>
          <div className="categories-link-box">
            <Link to={'/job-listings'} element={<JobListings />} className="explore-link">Explore all fields &#62;
            </Link>
          </div>
        </div>
        <div className="categories-list-box">
          <ul className="categories-ul">
            <li>
              <button className="ui-button cat-buttons">
                <img src={Pen} alt="" />
                UI/UXDesign
              </button>
            </li>
            <li>
              <button className="dev-button cat-buttons">
                <img src={Development} alt="" />
                Development
              </button>
            </li>
            <li>
              <button className="marketing-button cat-buttons">
                <img src={Shopping} alt="" />
                Marketing
              </button>
            </li>
            <li>
              <button className="tele-button cat-buttons">
                <img src={Phone} alt="" />
                Telemarketing
              </button>
            </li>
            <li>
              <button className="accounting-button cat-buttons">
                <img src={Building} alt="" />
                Accounting
              </button>
            </li>
            <li>
              <button className="editing-button cat-buttons">
                <img src={Controls} alt="" />
                Editing
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default CategoriesSection;