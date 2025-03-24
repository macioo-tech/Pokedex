import useLoadPokemons from "../../../hooks/useLoadPokemons";
import LoadingScreen from "../../shared/LoadingScreen";
import Pagination from "../../shared/Pagination";
import PokemonCard from "../../shared/PokemonCard";
import SearchBar from "../../shared/SearchBar";

const Home = () => {
  const { pokemons, isError, isLoading, limit, page, setPage } =
    useLoadPokemons();

  const handleChange = (value) => {
    console.log(value);
  };

  if (isLoading) return <LoadingScreen />;
  if (isError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between m-10">
        <div></div>
        <SearchBar
          placeholder="Search your pokemon"
          onChange={(e) => handleChange(e.target.value)}
        />
        <div></div>
        {pokemons.map((item) => (
          <PokemonCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination limit={limit} page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
