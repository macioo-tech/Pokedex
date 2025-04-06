import { useHome, usePokemons } from "./hooks";
import { Content, Loading, Box, EmptyContent } from "../index";

const Home = () => {
  const { getError, getLoading, refetch } = usePokemons();
  const { homeError, homeLoading } = useHome(refetch);

  if (getLoading || homeLoading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (getError || homeError) return <EmptyContent />

  return <Content />;
};

export default Home;
