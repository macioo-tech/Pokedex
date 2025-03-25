
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {

  return (
    <div>
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8) backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <NavLink
              to={"/"}
              className="font-mono text-xl font-bold text-white"
            >
              Poke<span className="text-blue-500">Dex</span>
            </NavLink>
            <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
              &#9776;
            </div>
            <div className="hidden md:flex item-center space-x-8">
              <div className="text-gray-300 hover:text-white transition-colors">
                {/* <div>Ulubione</div>
                <div>Arena</div>
                <div>Ranking</div>
                <div>Edycja</div>
                <div>Wyloguj</div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
