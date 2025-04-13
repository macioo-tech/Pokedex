import usePokemons from "../../hooks/usePokemons";
import { Content, Loading, Box, EmptyContent } from "../index";
import { PokeApi } from "../../services/api";

const Home = () => {
  const { error, loading } = usePokemons(
    PokeApi,
    `pokemon?limit=${150}&offset=${0}`
  );

  if (loading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (error) return <EmptyContent />;

  return <Content />;
};

export default Home;
