import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { createPortal } from "react-dom";
import { SubMenu, Button } from "../index";

const Menu = ({ menu }) => {
  const [showItem, setShowItem] = useState(false);
  const [showSubItem, setShowSubItem] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

   const modal = createPortal(
       <SubMenu menu={menu?.sub} onClose={() => setShowSubItem(false)} />,
       document.body
   );

  useEffect(() => {
    setShowItem(!menu?.loginRequired || (menu?.loginRequired && isLoggedIn));
  }, [isLoggedIn, menu?.loginRequired]);

  return (
    <div>
      {showItem && (
          <Button fc="poke" onMouseEnter={() => setShowSubItem(true)} onClick={() => setShowSubItem(true)}>
            <menu.icon strokeWidth={2} className="size-14" />
          </Button>
      )}
      {showSubItem && modal}
    </div>
  );
};

export default Menu;

