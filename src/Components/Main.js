// Modules
import { Routes, Route } from 'react-router-dom';
// Pages 
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import JobListings from '../Pages/JobListings';
import JobDetails from '../Pages/JobDetails';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home title="Jobi: Home"/>} />
        <Route path="/job-listings" element={<JobListings title="Jobi: Jobs"/>} />
        <Route path="/jobs/jobId" element={<JobDetails />} />
        <Route path="/error" element={<Error title="404 Error" />} />
        <Route path="*" element={<Error title="404 Error" />} />
      </Routes>
    </main>
  )
}

export default Main;