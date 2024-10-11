import { useEffect } from "react";
// import components
import Header from "../components/Header";
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

  console.log(countries);
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto mt-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <SearchInput />
          <Dropdown />
        </div>
        {countries && <CardList countries={countries} />}
      </main>
    </>
  );
}

export default HomePage;
