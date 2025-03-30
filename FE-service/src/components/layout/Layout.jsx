import { PokemonProvider } from "../../context/PokemonContext";
import { Header } from "../index";

const Layout = ({ children }) => {
  return (
    <div>
      <PokemonProvider>
        <Header />
        <div>{children}</div>
      </PokemonProvider>
    </div>
  );
};

export default Layout;
