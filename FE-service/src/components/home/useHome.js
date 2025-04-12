import { useContext, useEffect, useState } from "react";
import { getItems, PokeApi } from "../../services/api";
import { PokemonContext } from "../../context/PokemonContext";

const useHome = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true);
      try {
        const data = await getItems(PokeApi, `pokemon?limit=${150}&offset=${0}`)     
        const names = data.map(
          (item) => item.name
        );
        setPokeList(names);     
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemons();
    return () => {
      setLoading(false);
    };
  }, [setPokeList]);

  return {
    error,
    loading,
  };
};

export default useHome;
