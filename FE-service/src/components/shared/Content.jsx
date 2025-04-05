import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Pagination } from "../index"

const Content = () => {
  const { pokemons, queryPokeList, currentPage, setCurrentPage } =
    useContext(PokemonContext);

  return (
    <>
      <Box variant="content" size="content">
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
