import useLoadPokemons from "../../../hooks/useLoadPokemons";
import LoadingScreen from "../../shared/LoadingScreen";
import Pagination from "../../shared/Pagination";
import PokemonCard from "../../shared/PokemonCard";

const Home = () => {
  const { pokemons, isError, isLoading, limit, page, setPage } =
    useLoadPokemons();

  if (isLoading) return <LoadingScreen />;
  if (isError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between m-10">
        {pokemons.map((item) => (
          <PokemonCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination limit={limit} page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
