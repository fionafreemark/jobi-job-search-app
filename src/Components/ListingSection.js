// Modules
import { Link } from "react-router-dom";
// Pages
import JobListings from '../Pages/JobListings';
// Assets
import Bookmark from "../assets/icons/bookmark.png"

const ListingSection = () => {
  return (
    <section className="listing-section wrapper">
      <div className="listing-container">
        <div className="header-box">
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
      </div>
    </section>
  )
};

export default ListingSection;