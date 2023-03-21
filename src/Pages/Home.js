// Modules
// import { Link } from "react-router-dom";
// Pages
// import JobListings from './JobListings';
// import JobDetails from './JobDetails';
// Components
import Nav from "../Components/Nav";
import SearchBar from "../Components/SearchBar";


const Home = () => {
  return (
    <>
      <header className="home-header">
        <Nav />
        <div className="home-container">
        <h2>Find & Hire Experts for any job.</h2>
        <p>Unlock your potential with quality job & earn from world leading brands.</p>
        <div className="home-search-container">
          <SearchBar />
        </div>
        </div>
      </header>
    </>
  )
}

export default Home;