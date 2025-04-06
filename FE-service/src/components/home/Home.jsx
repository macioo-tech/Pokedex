import { useHome, usePokemons } from "./hooks"
import { Content, Loading, Box } from "../index";

const Home = () => {
  const { getError, getLoading, refetch } = usePokemons();
  const { homeError, homeLoading } = useHome(refetch);

  if (getLoading || homeLoading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (getError || homeError) return <p>...Netwrok error occured</p>;

  return <Content />;
};

export default Home;
