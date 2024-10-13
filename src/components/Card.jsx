import { Link } from "react-router-dom";

function Card({ country }) {
  return (
    <li className="w-full sm:w-72 my-5 shadow-md rounded-md">
      <img
        src={country.flags.png}
        alt=""
        className="h-44 min-w-full rounded-t-md"
      />
      <div className="px-5 pt-7 pb-9">
        <Link
          to={`/name/${country.name.common}`}
          className="font-bold mb-5 text-lg"
        >
          {country.name.official}
        </Link>
        <p className="font-bold">
          Population:{" "}
          <span className="font-normal">
            {country.population.toLocaleString()}
          </span>
        </p>
        <p className="font-bold">
          Region: <span className="font-normal">{country.region}</span>
        </p>
        <p className="font-bold">
          Capital: <span className="font-normal">{country.capital}</span>
        </p>
      </div>
    </li>
  );
}

export default Card;
