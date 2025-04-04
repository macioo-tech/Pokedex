import useHome from "../../hooks/useHome";
import useGetPokemons from "../../hooks/useGetPokemons";
import Content from "../shared/Content";
import Loading from "../shared/Loading";

const Home = () => {
  const { getError, getLoading, refetch } = useGetPokemons();
  const { homeError, homeLoading } = useHome(refetch);

  if (getLoading || homeLoading) return <Loading />;
  if (getError || homeError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <Content />
    </div>
  );
};

export default Home;
