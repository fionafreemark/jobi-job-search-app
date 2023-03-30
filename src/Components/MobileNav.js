// Modules
import { Link } from "react-router-dom";
import { useState } from "react";
// Pages
import Index from '../Pages/Index';
import JobListings from '../Pages/JobListings';
//Assets
import CategoryIcon from "../assets/icons/category-icon.svg";
import { AiOutlinePlus } from "react-icons/ai";

const MobileNav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navMenuClass, setNavMenuClass] = useState("nav-menu unclicked");
  const [navButtonClass, setNavButtonClass] = useState("nav-button unclicked");
  const [navVisibility, setNavVisibility] = useState("nav-ul unclicked")

  //Mobile menu toggle open/closed:
  const updateMenu = () => {
    if (!isMenuClicked) {
      setNavMenuClass("nav-menu clicked");
      setNavButtonClass("nav-button clicked");
      setNavVisibility("nav-ul clicked")
    } else {
      setNavMenuClass("nav-menu unclicked");
      setNavButtonClass("nav-button unclicked");
      setNavVisibility("nav-ul unclicked")
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
          <Link className="button-link secondary-button hire-talents" to={''} element={''} onClick={closeMenu}>Hire Top Talents</Link>
        </div>
      </div>
    </nav>
  )
}

export default MobileNav;