import { useArena, usePokemons } from "./hooks";
import { Loading, ContentArena } from "../index";

const Arena = () => {
  const { getError, getLoading, refetch } = usePokemons();
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
