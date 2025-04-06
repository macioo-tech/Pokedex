import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import { NavLink } from "react-router-dom";
import { Box, Button, Type } from "../index";

const SubMenuItem = ({ item }) => {
  const [showItem, setShowItem] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    setShowItem(
      (!item?.loginRequired && !isLoggedIn) ||
        (item?.loginRequired && isLoggedIn)
    );
  }, [isLoggedIn, item]);

  return (
    <Box variant="column">
      {showItem && (
        <Button>
          <NavLink to={item.path}>
            <Box variant="row">
              <item.icon className="size-8" />
              <Type>{item.name}</Type>
            </Box>
          </NavLink>
        </Button>
      )}
    </Box>
  );
};

export default SubMenuItem;
