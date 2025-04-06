import { useArena, usePokemons } from "./hooks";
import { ContentArena, Loading, Box, EmptyContent } from "../index";

const Arena = () => {
  const { getError, getLoading, refetch } = usePokemons();
  const { arenaError, arenaLoading } = useArena(refetch);

  if (arenaLoading || getLoading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (arenaError || getError) return <EmptyContent />;

  return <ContentArena />;
};

export default Arena;
