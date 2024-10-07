import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

function HomePage() {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto mt-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <SearchInput />
          <Dropdown />
        </div>
      </main>
    </>
  );
}

export default HomePage;
