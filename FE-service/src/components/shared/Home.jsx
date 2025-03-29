
import { Card, Loading, Pagination } from "../index";
import useLoadPokemons from "../../hooks/useLoadPokemons";

const Home = () => {
  const { pokemons, isError, isLoading, limit, page, setPage } =
    useLoadPokemons();

  if (isLoading) return <Loading />;
  if (isError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between m-10">
        {pokemons.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Pagination limit={limit} page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
