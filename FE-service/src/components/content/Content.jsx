import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Pagination, EmptyContent } from "../index";

const Content = () => {
  const { pokemons, queryPokeList, currentPage, setCurrentPage } =
    useContext(PokemonContext);

  if (queryPokeList?.length === 0 || queryPokeList == undefined) {
    return (
      <EmptyContent
        hint="Try searching another pokemon or refresh the page"
      />
    );
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
