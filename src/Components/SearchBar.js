
const SearchBar = () => {
  return (
    <>
    <form className="search-form">
    <label htmlFor="keyword">Your job title, keyword or company?</label>
    <input type="text" id="keyword" />
    <label htmlFor="category">Category</label>
    {/* Drop down list */}
    <select name="category" id="category">
      <option value="front-end">Front-End Development</option>
      <option value="full-stack">Full-Stack Development</option>
      <option value="graphic-designer">Graphic Design</option>
      <option value="web-design">Web Design</option>
      <option value="web-development">Web Development</option>
      <option value="ui-design">UI Design</option>
      <option value="ux-design">UX Design</option>
    </select>
    <button type="submit">Search</button>
    </form>
    </>
  )
}

export default SearchBar;