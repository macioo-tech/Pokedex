import useFavourites from "../../hooks/useFavourites";
import useGetPokemons from "../../hooks/useGetPokemons";
import Content from "../shared/Content";
import Loading from "../shared/Loading";

const Favourites = () => {
  const { getError, getLoading, maxPerPage, isPage, setPage, refetch } =
    useGetPokemons();
  const { favouritesError, favouritesLoading, favouritesLength } =
    useFavourites(refetch);

  if (favouritesLoading || getLoading) return <Loading />;
  if (favouritesError || getError) return <p>...Netwrok error occured</p>;

  return (
    <Content
      length={favouritesLength}
      limit={maxPerPage}
      page={isPage}
      setPage={setPage}
    />
  );
};

export default Favourites;
