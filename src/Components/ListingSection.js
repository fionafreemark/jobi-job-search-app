// Modules
import { Link } from "react-router-dom";
// Pages
import JobListings from '../Pages/JobListings';

// Assets
import Bookmark from "../assets/icons/bookmark.svg";
import {MdOutlineDesktopMac} from "react-icons/md";

const ListingSection = () => {



  return (
    <section className="listing-section wrapper">
      <div className="listing-container">
        <div className="heading-box">
          <h3>New Job Listings</h3>
          <div className="categories-link-box">
            <Link to={'/job-listings'} element={<JobListings />} className="explore-jobs-link">Explore all jobs &#62;
            </Link>
          </div>
        </div>
      </div>
      <div className="job-listings-container">
        <ul className="job-listings-ul">
          <li>
            <div className="icon-box">
              <MdOutlineDesktopMac />
            </div>
            <h5>Developer & expert in java c++</h5>
            <div className="job-time-box">
              <p className="full-part">Fulltime</p>
              <p className="date-posted">18 Jul 2018 by <span className="bold-company">slack</span></p>
            </div>
            <div className="job-location-box">
              <p className="location">Spain, Barcelona</p>
              <p className="listing-cat">Developer, Coder</p>
            </div>
            <div className="listing-button-box">
              <div className="save-icon-box">
                <img src={Bookmark} alt="" />
              </div>
              <button type="button" className="apply-button">Apply</button>
            </div>
          </li>
          <li>
            <div className="icon-box">
              <MdOutlineDesktopMac />
            </div>
            <h5>Developer & expert in java c++</h5>
            <div className="job-time-box">
              <p className="full-part">Fulltime</p>
              <p className="date-posted">18 Jul 2018 by <span className="bold-company">slack</span></p>
            </div>
            <div className="job-location-box">
              <p className="location">Spain, Barcelona</p>
              <p className="listing-cat">Developer, Coder</p>
            </div>
            <div className="listing-button-box">
              <div className="save-icon-box">
                <img src={Bookmark} alt="" />
              </div>
              <button type="button" className="apply-button">Apply</button>
            </div>
          </li>
          <li>
            <div className="icon-box">
              <MdOutlineDesktopMac />
            </div>
            <h5>Developer & expert in java c++</h5>
            <div className="job-time-box">
              <p className="full-part">Fulltime</p>
              <p className="date-posted">18 Jul 2018 by <span className="bold-company">slack</span></p>
            </div>
            <div className="job-location-box">
              <p className="location">Spain, Barcelona</p>
              <p className="listing-cat">Developer, Coder</p>
            </div>
            <div className="listing-button-box">
              <div className="save-icon-box">
                <img src={Bookmark} alt="" />
              </div>
              <button type="button" className="apply-button">Apply</button>
            </div>
          </li>
          <li>
            <div className="icon-box">
              <MdOutlineDesktopMac />
            </div>
            <h5>Developer & expert in java c++</h5>
            <div className="job-time-box">
              <p className="full-part">Fulltime</p>
              <p className="date-posted">18 Jul 2018 by <span className="bold-company">slack</span></p>
            </div>
            <div className="job-location-box">
              <p className="location">Spain, Barcelona</p>
              <p className="listing-cat">Developer, Coder</p>
            </div>
            <div className="listing-button-box">
              <div className="save-icon-box">
                <img src={Bookmark} alt="" />
              </div>
              <button type="button" className="apply-button">Apply</button>
            </div>
          </li>
          <li>
            <div className="icon-box">
              <MdOutlineDesktopMac />
            </div>
            <h5>Developer & expert in java c++</h5>
            <div className="job-time-box">
              <p className="full-part">Fulltime</p>
              <p className="date-posted">18 Jul 2018 by <span className="bold-company">slack</span></p>
            </div>
            <div className="job-location-box">
              <p className="location">Spain, Barcelona</p>
              <p className="listing-cat">Developer, Coder</p>
            </div>
            <div className="listing-button-box">
              <div className="save-icon-box">
                <img src={Bookmark} alt="" />
              </div>
              <button type="button" className="apply-button">Apply</button>
            </div>
          </li>
        </ul>
        <div className="post-job-container">
          <div className="outline-box">
          <p>Do you want to post a job for your company? <span>We can help.  
          <Link to={'/job-listings'} element={<JobListings />} className=""> Click here.
          </Link>
          </span>
          </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ListingSection;