import { NavLink } from "react-router-dom";
import { Menus } from "../../services/menus";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Search, Menu } from "../index";
import useHome from "../../hooks/useHome";

const Header = () => {
  const { setQuery } = useHome();

  const handleChange = (value) => {
    setQuery(value);
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
        <div className="flex flex-row-reverse items-center bg-white px-10 ...">
          {Menus?.map((menu) => (
            <Menu key={menu.name} menu={menu} />
          ))}
          <div className="flex items-center p-4 ...">
            <Search
              icon={
                <MagnifyingGlassIcon
                  className={`text-indigo-800 h-10 cursor-pointer`}
                />
              }
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
