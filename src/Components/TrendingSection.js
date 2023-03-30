// Modules
import { Link } from "react-router-dom";
// Pages
import JobListings from '../Pages/JobListings';
// Assets
import PersonLaptop1 from "../assets/images/person-on-laptop-1.jpg";
import PersonLaptop2 from "../assets/images/person-on-laptop-2.jpg";
import PersonLaptop3 from "../assets/images/person-on-laptop-3.jpg";
import PersonLaptop4 from "../assets/images/person-on-laptop-4.jpg";
import LeftArrowBlack from "../assets/icons/back-arrow-icon-black.svg";
import RightArrowWhite from "../assets/icons/next-arrow-white.svg";

const TrendingSection = () => {
  return (
    <section className="trending-section wrapper">
      <div className="trending-container">
        <div className="heading-box">
          <h3>Trending Jobs</h3>
          <div className="heading-button-box">
            <button type="button" title="previous" aria-label="previous" className="heading-button heading-icon-left-box">
              <img src={LeftArrowBlack} alt="" className="heading-icon" />
            </button>

            <button type="button" title="previous" aria-label="previous" className="heading-button heading-icon-right-box">
              <img src={RightArrowWhite} alt="" className="heading-icon" />
            </button>

          </div>
        </div>
        <ul className="trending-ul">
          <li>
            <Link to={'/job-listings'} element={<JobListings />} className="">
              <div className="trending-img-div">
                <div className="img-container">
                <img src={PersonLaptop1} alt="Man smiling while working on a laptop." />
                </div>
                <p>WordPress Development.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={'/job-listings'} element={<JobListings />} className="">
              <div className="trending-img-div">
                <div className="img-container">
                <img src={PersonLaptop2} alt="Woman leaning against couch while on laptop." />
                </div>
                <p>Audio & Video Editing.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={'/job-listings'} element={<JobListings />} className="">
              <div className="trending-img-div">
                <div className="img-container">
                <img src={PersonLaptop3} alt="Person on laptop while sitting on an outdoor patio." />
                </div>
                <p>Product & Branding Design.</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to={'/job-listings'} element={<JobListings />} className="">
              <div className="trending-img-div">
                <div className="img-container">
                <img src={PersonLaptop4} alt="Woman on tablet at dining table." />
                </div>
                <p>Admin & Customer Support.</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default TrendingSection;