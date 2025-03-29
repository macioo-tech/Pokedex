
import { NavLink } from "react-router-dom";
import { Menus } from "../../../services/menus";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const Header = () => {

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <nav className=" bg-white grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
        <div className="hidden md:flex flex-row px-10  ...">
          <NavLink
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse ..."
          >
            <img src="/pngegg.png" className="h-36" alt="Pokedex logo" />
          </NavLink>
        </div>
        <div className="flex flex-row-reverse bg-white px-10 ...">
          {Menus?.map((menu) => (
            <Menu key={menu.name} menu={menu} />
          ))}
          <div className="flex items-center p-4 ...">
            <SearchBar
              placeholder="Search your pokemon"
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
