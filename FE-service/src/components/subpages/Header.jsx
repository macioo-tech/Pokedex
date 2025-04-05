import { NavLink } from "react-router-dom";
import { Menus } from "../../services/menus";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import useGetPokemons from "../../hooks/useGetPokemons";
import useHeader from "../../hooks/useHeader";
import Search from "../shared/Search";
import Menu from "./Menu";
import Switch from "../shared/Switch";
import Box from "../shared/styled/Box";
import Button from "../shared/styled/Button";

const Header = () => {
  const { refetch } = useGetPokemons();
  const { setQuery } = useHeader(refetch);

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <Box variant="header">
      <Box className="hidden md:flex flex-row px-10">
        <Button>
          <NavLink to={"/"}>
            <img
              src="/Pokedex-02-04-2025.png"
              className="h-36"
              alt="Pokedex logo"
            />
          </NavLink>
        </Button>
      </Box>
      <Box className="flex flex-row-reverse items-center px-10">
        {/* <Switch /> */}
        {Menus?.map((menu) => (
          <Menu key={menu.name} menu={menu} />
        ))}
        <Search
          icon={<MagnifyingGlassIcon className="size-10" />}
          placeholder="Search your Pokemon"
          onChange={(e) => handleChange(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Header;
