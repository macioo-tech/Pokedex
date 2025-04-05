import { NavLink } from "react-router-dom";
import { Menus } from "../../services/menus";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import useGetPokemons from "../../hooks/useGetPokemons";
import useHeader from "../../hooks/useHeader";
import Search from "../shared/Search";
import Menu from "./Menu";
import Switch from "../shared/Switch";

const Header = () => {
  const { refetch } = useGetPokemons();
  const { setQuery } = useHeader(refetch);

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <>
      <nav className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
        <div className="hidden md:flex flex-row px-10">
          <NavLink
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/Pokedex-02-04-2025.png"
              className="h-36"
              alt="Pokedex logo"
            />
          </NavLink>
        </div>
        <div className="flex flex-row-reverse items-center px-10">
          {/* <Switch /> */}
          {Menus?.map((menu) => (
            <Menu key={menu.name} menu={menu} />
          ))}
          <div className="flex items-center p-4 ...">
            <Search
              icon={<MagnifyingGlassIcon className="size-10" />}
              placeholder="Search your Pokemon"
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
