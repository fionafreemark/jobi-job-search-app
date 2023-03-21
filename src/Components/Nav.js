// Modules
import { Link } from "react-router-dom";
// Pages
import Home from '../Pages/Home';
import JobListings from '../Pages/JobListings';
const Nav = () => {
  return (
      <nav className="wrapper">
        <div className="logo-container">
          <div className="logo-circle-box circle-primary"></div>
          <div className="logo-circle-box circle-secondary"></div>
          <h1>jobi</h1>
        </div>
        <ul className="nav-ul">
          <li>
            <Link className="menu-link" to={'/'} element={<Home />}>Home</Link>
          </li>
          <li>
            <Link className="menu-link" to={'/job-listings'} element={<JobListings />}>Job</Link>
          </li>
          <li>
            <Link className="menu-link" to={''} element={''}>Explore</Link>
          </li>
          <li>
            <Link className="menu-link" to={''} element={''}>Category</Link>
          </li>
          <li>
            <Link className="menu-link" to={''} element={''}>Pages</Link>
          </li>
        </ul>
        <div className="nav-button-container">
          <Link className="button-link secondary-button" to={''} element={''}>Login/Sign Up</Link>
          <Link className="button-link primary-button" to={''} element={''}>Post a Job</Link>
        </div>
      </nav>
  )
}

export default Nav;