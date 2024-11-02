import { useEffect, useState } from "react";
// import components
import SearchInput from "../components/SearchInput";
import Dropdown from "../components/Dropdown";
import CardList from "../components/CardList";
// import hooks
import useFetchCountries from "../hooks/useFetchCountries";

function HomePage() {
  const [fetchCountries, countries, setCountries] = useFetchCountries();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchTerm)
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm, countries]);

  useEffect(() => {
    fetchCountries().then(() => {
      setFilteredCountries(countries);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
        <Dropdown />
      </div>
      {filteredCountries && <CardList countries={filteredCountries} />}
    </>
  );
}

export default HomePage;
