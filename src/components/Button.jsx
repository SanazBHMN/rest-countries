import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Button({ hasIcon, text }) {
  return (
    <button className="shadow-md py-3 px-7 capitalize">
      <Link to="/">
        {hasIcon ? (
          <FontAwesomeIcon icon={faArrowLeftLong} className="mr-5" />
        ) : null}
        {text}
      </Link>
    </button>
  );
}

export default Button;
