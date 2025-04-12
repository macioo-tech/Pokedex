
import { Box, Card, Type, Button, Loading } from "../index";
import { useArenaBattle, useFetchPokemons } from "./hooks"

const ContentArena = ({ refetch }) => {
  const { pokemons, loading, error } = useFetchPokemons();
  const { battleInProgress, startBattle } = useArenaBattle(refetch);
  
  if (loading) return <Box size="screen"><Loading /></Box>;
  if (error) return <EmptyContent />

  return (
    <Box>
      <Box variant="content" size="content">
        <Card refetch={refetch} {...pokemons[0] || []} />
        {battleInProgress ? (<Loading value="Battle is in progress" />) : (<Type variant="title">Vs.</Type>)}
        <Card refetch={refetch} {...pokemons[1] || []} />
      </Box>
      <Box variant="row">
        <Button
          size="xl"
          fc="poke"
          border="yes"
          onClick={() => startBattle(pokemons)}
        >
          Start Battle
        </Button>
      </Box>
    </Box>
  );
};

export default ContentArena;
