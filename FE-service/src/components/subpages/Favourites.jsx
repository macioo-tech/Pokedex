import useFavourites from "../../hooks/useFavourites";
import useGetPokemons from "../../hooks/useGetPokemons";
import Content from "../shared/Content";
import Loading from "../shared/Loading";

const Favourites = () => {
  const { getError, getLoading, refetch } =
    useGetPokemons();
  const { favouritesError, favouritesLoading } =
    useFavourites(refetch);

  if (favouritesLoading || getLoading) return <Loading />;
  if (favouritesError || getError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <Content />
    </div>
  );
};

export default Favourites;
