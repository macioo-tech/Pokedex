import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Type, Pagination } from "../index"

const Content = () => {
  const { pokemons, queryPokeList, currentPage, setCurrentPage } =
    useContext(PokemonContext);

  if (queryPokeList?.length === 0 || queryPokeList == undefined) {
    return (
      <Box size="screen">
        <Type variant="focus" color="inactive">Couldn't find your pokemons</Type>
        <Type>Search another pokemon</Type>
      </Box>
    )
  }

  return (
    <Box>
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
    </Box>
  );
};

export default Content;
