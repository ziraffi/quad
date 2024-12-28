import { PropTypes } from "prop-types";
import DOMPurify from "dompurify";
const Search = ({ setParPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setParPage(parseInt(e.target.value))}
        className="px-1 md:w-[80px] w-1/6 lg:px-4 py-1 outline-none border-4 rounded-md text-green-950 focus:border-4 bg-stone-50 
        focus:duration-200 focus:transition-all focus:ease-in-out focus:bg-white focus:border-x-purple-400 "
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <input
        onChange={(e) => setSearchValue(DOMPurify.sanitize(e.target.value))}
        value={searchValue}
        className="md:w-[280px] w-2/6 px-3 py-2 rounded-md focus:outline-none bg-stone-50 focus:duration-200 focus:transition-all focus:ease-in-out focus:bg-white"
        type="text"
        placeholder="search"
      />
    </div>
  );
};

Search.propTypes = {
  setParPage: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Search;

