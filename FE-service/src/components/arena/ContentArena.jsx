import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Type, Button, Loading } from "../index";
import { useArenaBattle } from "./hooks"

const ContentArena = () => {
  const { pokemons } = useContext(PokemonContext);
  const { battleInProgress, startBattle } = useArenaBattle();

  const pokemon1 = pokemons[0] || [];
  const pokemon2 = pokemons[1] || [];

  return (
    <Box>
      <Box variant="content" size="content">
        <Card {...pokemon1} />
        {battleInProgress ? (<Loading value="Battle is in progress" />) : (<Type variant="title">Vs.</Type>)}
        <Card {...pokemon2} />
      </Box>
      <Box variant="row">
        <Button
          size="xl"
          fc="poke"
          border="yes"
          onClick={() => startBattle(pokemon1, pokemon2)}
        >
          Start Battle
        </Button>
      </Box>
    </Box>
  );
};

export default ContentArena;
