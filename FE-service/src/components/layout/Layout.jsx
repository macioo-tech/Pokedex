import { PokemonProvider } from "../../context/PokemonContext";
import { Header } from "../index";
import Container from "../shared/Container";

const Layout = ({ children }) => {
  return (
    <Container className="p-16">
      <Container variant="body">
        <PokemonProvider>
          <Header />
          <div>{children}</div>
        </PokemonProvider>
      </Container>
    </Container>
  );
};

export default Layout;
