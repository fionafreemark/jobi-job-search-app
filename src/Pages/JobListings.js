// Modules
import { Link } from "react-router-dom";
// Pages
import JobDetails from './JobDetails';
import Index from './Index';

const JobListings = () => {
  return (
    <>
      <Link to={'/index'} element={<Index />} className="">Home</Link>
      <Link to={'/job-listings'} element={<JobListings />} className="">Job Listings</Link>
      <Link to={'/job-details'} element={<JobDetails />} className="">Job Details</Link>
    </>
  )
}

export default JobListings;