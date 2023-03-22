// Components
import Nav from "./Nav";
import SearchBar from "./SearchBar";

const HeaderSecondary = () => {
  return (
    <header className="secondary-header">
      <Nav />
      <div className="secondary-header-box wrapper">
        <h2>Job Listings</h2>
        <p>We deliver blazing fast & striking work solutions</p>
        <div className="index-search-box">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

export default HeaderSecondary;
