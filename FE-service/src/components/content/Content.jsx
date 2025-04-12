import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Pagination, EmptyContent, Loading } from "../index";
import { useFetchPokemons } from "./hooks";

const Content = ( refetch ) => {
  const { queryPokeList } = useContext(PokemonContext);
  const { pokemons, loading, error, currentPage, setCurrentPage } = useFetchPokemons();

  if (loading) return <Box size="screen"><Loading /></Box>;
  if (error) return <EmptyContent />

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
          <Card key={item.id} refetch={refetch} {...item} />
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
