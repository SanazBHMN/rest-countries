import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function ToggleSwitch() {
  return (
    <button className="flex items-center gap-2">
      <FontAwesomeIcon icon={faMoon} />
      <span>Dark Mode</span>
    </button>
  );
}

export default ToggleSwitch;
