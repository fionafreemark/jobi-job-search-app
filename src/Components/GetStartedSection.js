// Modules
import { Link } from "react-router-dom";
// Assets
import DocIcon from "../assets/icons/document.svg"
import Pencil from "../assets/icons/pencil.svg"
import Play from "../assets/icons/play-button.svg"
import Profile from "../assets/icons/profile.svg"

const GetStartedSection = () => {
  return (
    <section className="get-started-section wrapper">
      <div className="section-gradient">
        <div className="get-started-container">
          <div className="get-started-heading-box">
            <div className="icon-container">
              <div className="icon-box">
                <img src={Play} alt="Profile icon." />
              </div>
            </div>
            <h3>Let's get started. It's <span>simple.</span></h3>
            <p>Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
          </div>
          <div className="get-started-gallery-box">
            <div className="get-started-card">
              <div className="get-started-card-box">
                <div className="icon-container">
                  <div className="icon-box">
                    <img src={Profile} alt="Profile icon." />
                  </div>
                </div>
                <div className="get-started-text-box">
                  <p>It takes 2 minutes to open an account.</p>
                  <Link>Open Account</Link>
                </div>
              </div>
            </div>

            <div className="get-started-card">
              <div className="get-started-card-box">
                <div className="icon-container">
                  <div className="icon-box">
                    <img src={DocIcon} alt="Profile icon." />
                  </div>
                </div>
                <div className="get-started-text-box">
                  <p>Find talent or search for your desired work.</p>
                  <Link>Apply or Hire</Link>
                </div>
              </div>
            </div>

            <div className="get-started-card">
              <div className="get-started-card-box">
                <div className="icon-container">
                  <div className="icon-box">
                    <img src={Pencil} alt="Profile icon." />
                  </div>
                </div>
                <div className="get-started-text-box">
                  <p>Get your work done quickly with jobi.</p>
                  <Link>Payment Method</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default GetStartedSection;