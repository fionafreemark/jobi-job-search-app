// Assets
import SearchIcon from "../assets/icons/search.svg";


const SmallSearchBar = () => {
  return (
      <form className="small-search-form">
        <div className="small-keyword-box">
          <label htmlFor="keyword">Enter Designer, Brand or Logo</label>
          <input type="text" id="search" placeholder="Designer, Brand, Logo" />
        </div>
        <button type="submit" className="search-button">
          <div className="search-button-box">
            <img src={SearchIcon} alt="Submit search button." />
          </div>
        </button>
      </form>
  )
}

export default SmallSearchBar;