import useHeader from "../../hooks/useHeader";
import { NavLink } from "react-router-dom";
import { Menus } from "../../services/menus";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Search, Menu, Box, Button } from "../index"
import AlternativeSearch from "../shared/AlternativeSearch";

const Header = () => {
  const { setQuery } = useHeader();

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
