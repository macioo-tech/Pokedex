
import useArena from "../../hooks/useFavourites";
import useGetPokemons from "../../hooks/useGetPokemons";
import Loading from "../shared/Loading";
import Content from "../shared/Content";

const Arena = () => {
  const { getError, getLoading, refetch } =
    useGetPokemons();
  const { arenaError, arenaLoading } =
    useArena(refetch);

    if (arenaLoading || getLoading) return <Loading />;
    if (arenaError || getError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <Content />
    </div>
  )
};

export default Arena;
