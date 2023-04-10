// Modules
import { Routes, Route } from 'react-router-dom';
// Pages 
import Error from './Pages/Error';
import Index from './Pages/Index';
import JobListings from './Pages/JobListings';
import JobDetails from './Pages/JobDetails';
import WIP from './Pages/WIP';
// Components
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';

// Styles
import './App.scss';

function App() {
  return (
    <>
      {/* If url = home display <HeaderHome>, if not display <header> */}
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Index title="Jobi: Home" />} />
            <Route path="/job-listings" element={<JobListings title="Jobi: Jobs" />} />
            <Route path="/jobs/jobId" element={<JobDetails />} />
            <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/error" element={<Error title="404 Error" />} />
            <Route path="/work-in-progress" element={<WIP title="Work in Progress" />} />
            <Route path="*" element={<Error title="404 Error" />} />
          </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
