import { NavLink } from "react-router-dom";
import Header from "../subpages/navbar/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
