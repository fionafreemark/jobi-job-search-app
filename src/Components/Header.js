// Modules
import { Routes, Route } from 'react-router-dom';
// Pages 
import HeaderIndex from '../Components/HeaderIndex';
import HeaderSecondary from '../Components/HeaderSecondary';

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderIndex title="Jobi: Home" />} />
        <Route path="/job-listings" element={<HeaderSecondary title="Jobi: Jobs" />} />
        <Route path="/work-in-progress" element={<HeaderSecondary title="Jobi: Work In Progress" />} />
        <Route path="/jobs/jobId" element={<HeaderSecondary title="Jobi: Jobs" />} />
        <Route path="/error" element={<HeaderSecondary title="Jobi: Jobs" />} />
        <Route path="/work-in-progress" element={<HeaderSecondary title="Jobi: Jobs" />} />
        <Route path="*" element={<HeaderSecondary title="Jobi: Jobs" />} />
      </Routes>
    </>
  )
};

export default Header;