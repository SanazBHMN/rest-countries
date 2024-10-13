import { useEffect } from "react";
// import components
import SearchInput from "../components/SearchInput";
import Dropdown from "../components/Dropdown";
import CardList from "../components/CardList";
// import hooks
import useFetchCountries from "../hooks/useFetchCountries";

function HomePage() {
  const [fetchCountries, countries] = useFetchCountries();

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
        <SearchInput />
        <Dropdown />
      </div>
      {countries && <CardList countries={countries} />}
    </>
  );
}

export default HomePage;
