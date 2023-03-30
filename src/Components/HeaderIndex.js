// Components
// import MobileNav from "./MobileNav";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

const HeaderIndex = () => {
  return (
    <header className="index-header">
      <Nav />
      <div className="index-header-box wrapper">
        <h2>Find & Hire Experts for any job.</h2>
        <p>Unlock your potential with quality job & earn from world leading brands.</p>
        <div className="index-search-box">
          <SearchBar />
        </div>
      </div>
      <div className="stats-bar">
        <div className="stats-box">
          <p>30k+</p>
          <p>Worldwide</p>
        </div>
        <div className="stats-box">
          <p>3%</p>
          <p>Top Talents</p>
        </div>
        <div className="stats-box">
          <p>12mil</p>
          <p>Dollar Payout</p>
        </div>
      </div>

    </header>
  )
}

export default HeaderIndex;
