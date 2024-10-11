// import components
import Card from "./Card";

function CardList({ countries }) {
  return (
    <ul className="flex flex-col gap-6 mt-5 sm:flex-row sm:flex-wrap sm:justify-between">
      {countries.map((country) => (
        <Card key={country.name.common} country={country} />
      ))}
    </ul>
  );
}

export default CardList;
