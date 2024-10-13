import { Outlet } from "react-router-dom";
// import components
import Header from "./components/Header";
// import statics
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto mt-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
