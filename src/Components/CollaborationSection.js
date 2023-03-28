// Modules
import { Link } from "react-router-dom";
// Assets
import BlackArrow from "../assets/icons/right-arrow-black-short.svg";
import { FaInstagram } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaGoogleDrive } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaSlackHash } from 'react-icons/fa';

const CollaborationSection = () => {
  return (
    <section className="collaboration-section wrapper">
      <div className="collaboration-left">
        <div className="collaboration-graphic-box">
          <div className="outer-circle">
            {/* Instagram Graphic */}
            <div className="circle-graphic circle-graphic-1">
              <div className="circle-icon circle-icon-1">
                <FaInstagram />
              </div>
            </div>
            {/* Google Graphic */}
            <div className="circle-graphic circle-graphic-2">
              <div className="circle-icon circle-icon-2">
                <FaGoogle />
              </div>
            </div>
            {/* Facebook Messenger */}
            <div className="circle-graphic circle-graphic-3">
              <div className="circle-icon circle-icon-3">
                <FaFacebookMessenger />
              </div>
            </div>
            {/* Slack Logo */}
            <div className="circle-graphic circle-graphic-4">
              <div className="circle-icon circle-icon-4">
                <FaSlackHash />
              </div>
            </div>
            {/* Google Drive */}
            <div className="circle-graphic circle-graphic-5">
              <div className="circle-icon circle-icon-5">
                <FaGoogleDrive />
              </div>
            </div>
            <div className="div inner-circle">

              {/* Jobi Logo */}
              <div className=" circle-graphic-6">
                <div className="circle-logo-icon">
                  <div className="logo-container">
                    <div className="logo-circle-box circle-secondary"></div>
                    <div className="logo-circle-box circle-primary"></div>
                  </div>
                  <h4 className="jobi-h4">jobi</h4>
                </div>
              </div>
            </div> {/* End of inner circle */}
          </div>{/* End of outer circle */}
          {/* Build out image here */}
        </div>
      </div>
      <div className="collaboration-right">
        <p>Top Brand</p>
        <h3>Collaboration with Top Brands.</h3>
        <p className="collaboration-text">We collaborate with a number of top tier companies on imagining the future of work, have a look.</p>
        <Link className="learn-more-link">Learn More
          <img src={BlackArrow} alt="Right arrow icon." aria-label="Click to learn more." />
        </Link>
      </div>
    </section>
  )
};

export default CollaborationSection;