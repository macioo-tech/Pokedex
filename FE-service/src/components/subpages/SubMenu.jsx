import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const SubMenu = ({ menu }) => {
  const [showItem, setShowItem] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    setShowItem((!menu?.loginRequired && !isLoggedIn) || (menu?.loginRequired && isLoggedIn));
  }, [isLoggedIn, menu?.loginRequired]);

  return (
    <>
      {showItem && (
        <NavLink to={menu.path} className="relative cursor-pointer">
          <div className="flex-center gap-x-4 group/menubox">
            <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
              <menu.icon />
            </div>
            <div>
              <h6 className="font-semibold">{menu.name}</h6>
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default SubMenu;
