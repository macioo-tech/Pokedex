
import { Box, Card, Type, Button, Loading } from "../index";
import { useArenaBattle, useFetchPokemons } from "./hooks"

const ContentArena = ({ reFetch }) => {
  const { pokemons, loading, error } = useFetchPokemons();
  const { battleInProgress, startBattle } = useArenaBattle();
  
  if (loading) return <Box size="screen"><Loading /></Box>;
  if (error) return <EmptyContent />

  return (
    <Box>
      <Box variant="content" size="content">
        <Card reFetch={reFetch} {...pokemons[0] || []} />
        {battleInProgress ? (<Loading value="Battle is in progress" />) : (<Type variant="title">Vs.</Type>)}
        <Card reFetch={reFetch} {...pokemons[1] || []} />
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
