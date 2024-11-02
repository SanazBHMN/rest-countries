import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ searchTerm, handleSearch }) {
  return (
    <div className="relative">
      <div className="absolute left-7 top-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full pl-16 py-4 shadow-md rounded-md md:w-[500px]"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
