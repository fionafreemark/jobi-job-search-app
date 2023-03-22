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
      </Routes>
    </>
  )
};

export default Header;