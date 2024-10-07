import ToggleSwitch from "./ToggleSwitch";

function Header() {
  return (
    <header className="flex justify-between px-4 py-8 shadow-md">
      <h3 className="font-bold">Where in the world?</h3>
      <ToggleSwitch />
    </header>
  );
}

export default Header;
