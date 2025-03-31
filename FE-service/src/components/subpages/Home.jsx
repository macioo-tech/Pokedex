import { Card, Loading, Pagination } from "../index";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import useHome from "../../hooks/useHome";

const Home = () => {
  const { pokemons } = useContext(PokemonContext);
  const { isError, isLoading, maxPerPage, isPage, setPage } = useHome();

  if (isLoading) return <Loading />;
  if (isError) return <p>...Netwrok error occured</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between m-10">
        {pokemons.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <div className="relative bg-black w-1/2 h-[50px]">jkdjsk
        <div className="absolute top-0 left-0 bg-white">sjdhjd</div>
        <div className="flex flex-col justify-center content-center items-center bg-white " >
          <div>dkjfskf</div>
        </div>
      </div>
      <Pagination length={pokemons.length} limit={maxPerPage} page={isPage} setPage={setPage} />
    </div>
  );
};

export default Home;
