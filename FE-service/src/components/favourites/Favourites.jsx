import { useFavourites, usePokemons } from "./hooks";
import { Content, Loading, Box, EmptyContent } from "../index";

const Favourites = () => {
  const { getError, getLoading, refetch } = usePokemons();
  const { favouritesError, favouritesLoading } = useFavourites(refetch);

  if (favouritesLoading || getLoading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (favouritesError || getError) return <EmptyContent />;

  return <Content />;
};

export default Favourites;
