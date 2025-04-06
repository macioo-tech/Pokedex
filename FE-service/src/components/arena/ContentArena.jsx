import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Type, Button, Loading } from "../index";
import { useArenaBattle } from "./hooks"

const ContentArena = () => {
  const { pokemons } = useContext(PokemonContext);
  const { battleInProgress, startBattle } = useArenaBattle();

  return (
    <Box>
      <Box variant="content" size="content">
        <Card {...pokemons[0] || []} />
        {battleInProgress ? (<Loading value="Battle is in progress" />) : (<Type variant="title">Vs.</Type>)}
        <Card {...pokemons[1] || []} />
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
