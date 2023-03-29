// Modules
import { Link } from "react-router-dom";
import { useState } from "react";
//Components
import { AiOutlinePlus } from "react-icons/ai";
// Pages
import Index from '../Pages/Index';
import JobListings from '../Pages/JobListings';
//Assets
import CategoryIcon from "../assets/icons/category-icon.png";

const Nav = () => {

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navMenuClass, setNavMenuClass] = useState("nav-menu unclicked");
  const [navButtonClass, setNavButtonClass] = useState("nav-button unclicked");
  const [navVisibility, setNavVisibility] = useState("nav-ul unclicked")
  const [navBarStyles, setNavBarStyles] = useState("nav-bar ")

  //Mobile menu toggle open/closed:
  const updateMenu = () => {
    if (!isMenuClicked) {
      setNavMenuClass("nav-menu clicked");
      setNavButtonClass("nav-button clicked");
      setNavVisibility("nav-ul clicked")
      setNavBarStyles("nav-bar clicked")
    } else {
      setNavMenuClass("nav-menu unclicked");
      setNavButtonClass("nav-button unclicked");
      setNavVisibility("nav-ul unclicked")
      setNavBarStyles("nav-bar unclicked")
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // Closes mobile nav once a link is clicked:
  const closeMenu = () => {
    setNavButtonClass("nav-button unclicked");
    setNavVisibility("nav-ul unclicked");
    setIsMenuClicked(false);
  };

  return (
    <div className="nav-wrapper">
      <div className={navBarStyles}>
        <Link className="h1-link" to={`/`} element={<Index />}>
          <div className="logo-container">
            <div className="logo-circle-box circle-primary"></div>
            <div className="logo-circle-box circle-secondary"></div>
            <h1>jobi</h1>
          </div>
        </Link>
        <nav className="desktop-nav">
          <button className={navMenuClass} onClick={updateMenu}>
            <AiOutlinePlus className={navButtonClass} />
          </button>
          <div className={navVisibility} >
            <div className="nav-left-box">
              <Link className="button-link-sm tertiary-button category-link" to={''} element={''}>
                <img src={CategoryIcon} alt="" className="category-icon" />
                Category
              </Link>
              <ul className="nav-ul">
                <li>
                  <Link className="menu-link" to={'/'} element={<Index />}>Index</Link>
                </li>
                <li>
                  <Link className="menu-link" to={'/job-listings'} element={<JobListings />}>Job</Link>
                </li>
                <li>
                  <Link className="menu-link" to={''} element={''}>Explore</Link>
                </li>
                <li>
                  <Link className="menu-link" to={''} element={''}>Contact</Link>
                </li>
                <li>
                  <Link className="menu-link" to={''} element={''}>Pages</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-box">
              <Link className="menu-link post-job-link" to={''} element={''}>Post Job</Link>
              <Link className="menu-link login-link" to={''} element={''}>Login</Link>
              <Link className="button-link secondary-button hire-talents" to={''} element={''}>Hire Top Talents</Link>
            </div>
          </div>
        </nav>
        <nav className="mobile-nav">
          <button className={navMenuClass} onClick={updateMenu}>
            <AiOutlinePlus className={navButtonClass} />
          </button>
          <div className={navVisibility} >
            <div className="nav-left-box">
              <Link className="button-link-sm tertiary-button category-link" to={''} element={''} onClick={closeMenu}>
                <img src={CategoryIcon} alt="" className="category-icon" />
                Category
              </Link>
              <ul className="nav-ul">
                <li>
                  <Link className="menu-link" to={'/'} element={<Index />} onClick={closeMenu}>Index</Link>
                </li>
                <li>
                  <Link className="menu-link" to={'/job-listings'} element={<JobListings />} onClick={closeMenu}>Job</Link>
                </li>
                <li>
                  <Link className="menu-link" to={''} element={''} onClick={closeMenu}>Explore</Link>
                </li>
                <li>
                  <Link className="menu-link" to={''} element={''} onClick={closeMenu}>Contact</Link>
                </li>
                <li>
                  <Link className="menu-link" to={''} element={''} onClick={closeMenu}>Pages</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-box">
              <Link className="menu-link post-job-link" to={''} element={''} onClick={closeMenu}>Post Job</Link>
              <Link className="menu-link login-link" to={''} element={''} onClick={closeMenu}>Login</Link>
              <Link className="button-link secondary-button" to={''} element={''} onClick={closeMenu}>Hire Top Talents</Link>
            </div>
          </div>
        </nav>
      </div>
    </div >
  )
}

export default Nav;