// Modules
import { Link } from "react-router-dom";
// Pages
import Index from '../Pages/Index';
import JobListings from '../Pages/JobListings';
//Assets
import CategoryIcon from "../assets/icons/category-icon.png";

const Nav = () => {

  return (
    <nav className="nav-wrapper">
      <div className="nav-left-box">
        <div className="logo-container">
          <div className="logo-circle-box circle-primary"></div>
          <div className="logo-circle-box circle-secondary"></div>
          <h1>jobi</h1>
        </div>
        <Link className="button-link-sm tertiary-button" to={''} element={''}>
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
          <Link className="button-link secondary-button" to={''} element={''}>Hire Top Talents</Link>
        </div>
    </nav>
  )
}

export default Nav;