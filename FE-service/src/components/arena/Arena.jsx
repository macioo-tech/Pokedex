import { useArena } from "./hooks";
import { Loading, ContentArena } from "../index";
import useGetPokemons from "../../hooks/useGetPokemons";

const Arena = () => {
  const { getError, getLoading, refetch } = useGetPokemons();
  const { arenaError, arenaLoading } = useArena(refetch);

  if (arenaLoading || getLoading) return <Loading />;
  if (arenaError || getError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <ContentArena />
    </div>
  );
};

export default Arena;
