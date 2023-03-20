// Modules
import { Routes, Route } from 'react-router-dom';

// Components
import Nav from './Components/Nav';

// Pages 
import Error from './Pages/Error';
import Home from './Pages/Home';
import JobListings from './Pages/JobListings';
import JobDetails from './Pages/JobDetails';

// Styles
import './App.scss';

function App() {
  return (
<>
        <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>

      </footer>
</>
  );
}

export default App;
