
import useArena from "../../hooks/useArena";
import useGetPokemons from "../../hooks/useGetPokemons";
import Loading from "../shared/Loading";
import ContentArena from "../shared/ContentArena";

const Arena = () => {
  const { getError, getLoading, refetch } =
    useGetPokemons();
  const { arenaError, arenaLoading } =
    useArena(refetch);

    if (arenaLoading || getLoading) return <Loading />;
    if (arenaError || getError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <ContentArena />
    </div>
  )
};

export default Arena;
