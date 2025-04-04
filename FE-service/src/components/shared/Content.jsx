import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import Box from "../shared/styled/Box";
import Card from "../shared/Card";
import Pagination from "./Pagination";

const Content = () => {
  const { pokemons, queryPokeList, currentPage, setCurrentPage } =
    useContext(PokemonContext);

  return (
    <>
      <Box variant="content" size="content" className="border-none shadow-none">
        {pokemons.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Box>
      <Pagination
        totalPages={Math.ceil(queryPokeList.length / 15)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Content;
