import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-very-dark-blue font-bold underline">Hello World!</h1>
      <FontAwesomeIcon icon={faHouse} />
    </>
  );
}

export default App;
