import useFavourites from "./useFavourites";
import useGetPokemons from "../../hooks/useGetPokemons";
import { Content, Loading, Box } from "../index";

const Favourites = () => {
  const { getError, getLoading, refetch } = useGetPokemons();
  const { favouritesError, favouritesLoading } = useFavourites(refetch);

  if (favouritesLoading || getLoading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (favouritesError || getError) return <p>...Netwrok error occured</p>;

  return <Content />;
};

export default Favourites;
