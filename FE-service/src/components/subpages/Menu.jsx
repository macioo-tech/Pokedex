import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import Button from "../shared/styled/Button";
import SubMenu from "./SubMenu";

const Menu = ({ menu }) => {
  const [showItem, setShowItem] = useState(false);
  const [showSubItem, setShowSubItem] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    setShowItem(!menu?.loginRequired || (menu?.loginRequired && isLoggedIn));
  }, [isLoggedIn, menu?.loginRequired]);

  return (
    <>
      {showItem && (
        <>
          <Button onMouseEnter={() => setShowSubItem(true)}>
            <menu.icon strokeWidth={2} className="size-14" />
          </Button>
          {showSubItem && (
            <div
              onMouseLeave={() => setShowSubItem(false)}
              className="sub-menu grid grid-cols-1 gap-7"
            >
              {menu?.sub?.map((item, index) => (
                <SubMenu key={index} menu={item} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Menu;
