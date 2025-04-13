import useHeader from "../../hooks/useHeader";
import { NavLink } from "react-router-dom";
import { Menus } from "../../services/menus";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Search, Menu, Container, Button } from "../index";
import AlternativeSearch from "../shared/AlternativeSearch";

const Header = () => {
  const { setQuery } = useHeader();

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <Container variant="flex-between" className="px-5">
      <Button className="w-full hidden md:flex">
        <NavLink to={"/"}>
          <img src="/Pokedex-02-04-2025.png" className="h-36" alt="Pokedex logo" />
        </NavLink>
      </Button>
      <Container variant="flex-reverse">
        {/* <Switch /> */}
        {Menus?.map((menu) => (
          <Menu key={menu.name} menu={menu} />
        ))}
        <Search icon={<MagnifyingGlassIcon className="size-10" />} placeholder="Search your Pokemon" onChange={(e) => handleChange(e.target.value)} />
      </Container>
    </Container>
  );
};

export default Header;
