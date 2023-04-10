// Modules
import { Link } from "react-router-dom";
//Components
import MobileNav from "./MobileNav";
// Pages
import Index from '../Pages/Index';
import JobListings from '../Pages/JobListings';
import WIP from '../Pages/WIP';
//Assets
import CategoryIcon from "../assets/icons/category-icon.svg";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <Link className="h1-link" to={`/`} element={<Index />}>
          <div className="logo-container">
            <div className="logo-circle-box circle-primary"></div>
            <div className="logo-circle-box circle-secondary"></div>
            <h1>jobi</h1>
          </div>
        </Link>
        <nav className="desktop-nav">
          <div className="nav-ul unclicked" >
            <div className="nav-left-box">
              <Link className="button-link-sm tertiary-button category-link" to={'/work-in-progress'} element={<WIP />}>
                <img src={CategoryIcon} alt="" className="category-icon" />
                Category
              </Link>
              <ul className="nav-ul">
                <li>
                  <Link className="menu-link" to={'/'} element={<Index />}>Home</Link>
                </li>
                <li>
                  <Link className="menu-link" to={'/job-listings'} element={<JobListings />}>Job</Link>
                </li>
                <li>
                  <Link className="menu-link" to={'/work-in-progress'} element={<WIP />}>Explore</Link>
                </li>
                <li>
                  <Link className="menu-link" to={'/work-in-progress'} element={<WIP />}>Contact</Link>
                </li>
                <li>
                  <Link className="menu-link" to={'/work-in-progress'} element={<WIP />} >Pages</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-box">
              <Link className="menu-link post-job-link" to={''} element={''}>Post Job</Link>
              <Link className="menu-link login-link" to={'/login'} element={'<Login />'}>Login</Link>
              <Link className="button-link secondary-button hire-talents" to={''} element={''}>Hire Top Talents</Link>
            </div>
          </div>
        </nav>
        {/* Mobile Nav Component */}
        < MobileNav/>
      </div>
    </div >
  )
}

export default Nav;