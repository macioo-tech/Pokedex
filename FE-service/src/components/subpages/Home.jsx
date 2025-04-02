import useHome from "../../hooks/useHome";
import useGetPokemons from "../../hooks/useGetPokemons";
import Content from "../shared/Content";
import Loading from "../shared/Loading";

const Home = () => {
  const { getError, getLoading, maxPerPage, isPage, setPage, refetch } =
    useGetPokemons();
  const { homeError, homeLoading, homeLength } = useHome(refetch);

  if (getLoading || homeLoading) return <Loading />;
  if (getError || homeError) return <p>...Netwrok error occured</p>;

  return (
    <div>
    <Content
      length={homeLength}
      limit={maxPerPage}
      page={isPage}
      setPage={setPage}
    /></div>
  );
};

export default Home;
