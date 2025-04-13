import { PokemonProvider } from "../../context/PokemonContext";
import { Header } from "../index";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <PokemonProvider>
        <Header />
        <div>{children}</div>
      </PokemonProvider>
    </div>
  );
};

export default Layout;
