import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  return (
    <div className="relative">
      {/* <div className="absolute left-7 top-4">
        <FontAwesomeIcon icon={faAngleDown} />
      </div> */}
      <select className="px-6 py-4 shadow-md rounded-md">
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Dropdown;
