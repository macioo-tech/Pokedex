import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Card, Type, Button } from "../index";

const ContentArena = () => {
  const { pokemons } = useContext(PokemonContext);

  const pokemon1 = pokemons[0] || [];
  const pokemon2 = pokemons[1] || [];

  return (
    <>
      <Box variant="content" size="content">
        <Card {...pokemon1} />
        <Type variant="title">Vs.</Type>
        <Card {...pokemon2} />
      </Box>
      <Box variant="row">
        <Button>Walcz</Button>
      </Box>
    </>
  );
};

export default ContentArena;
