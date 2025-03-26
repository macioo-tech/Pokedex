import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Menus } from "../../services/menus";
import SearchBar from "./SearchBar";
import Button from "./Button";
import UserMenu from "../subpages/navbar/UserMenu";

const Header = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const handleChange = (value) => {
    console.log(value);
  };

  // use createPortal for submenu to render component user menu

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
        {Menus?.map((item) => (
          <>
            {!item.loggedIn ? (
              <Button key={item.name}>
                <item.icon strokeWidth={2} className="size-14" />
              </Button>
            ) : (
              isLoggedIn && (
                <Button key={item.name}>
                  <item.icon strokeWidth={2} className="size-14" />
                </Button>
              )
            )}
          </>
        ))}
        <div className="flex items-center p-4 ...">
          <SearchBar
            placeholder="Search your pokemon"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </nav>
    {/* // test */}
    {/* <UserMenu options={Menus[0].sub} show={true}/> */}
    </>
  );
};

export default Header;
