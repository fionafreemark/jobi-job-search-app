// Modules
import { Link } from "react-router-dom";
// Pages
import JobDetails from './JobDetails';
import Home from './Home';

const JobListings = () => {
  return (
    <>
      <Link to={'/home'} element={<Home />} className="">Home</Link>
      <Link to={'/job-listings'} element={<JobListings />} className="">Job Listings</Link>
      <Link to={'/job-details'} element={<JobDetails />} className="">Job Details</Link>
    </>
  )
}

export default JobListings;