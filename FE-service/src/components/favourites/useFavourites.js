import { useCallback, useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { getItems, LocalApi } from "../../services/api";

const useFavourites = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  const loadPokemons = useCallback(async () => {
      setLoading(true);
      try {
        const data = await getItems(LocalApi, `favourites`);
        const names = data.map((item) => item.name);
        setPokeList(names);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, [setPokeList]);

  useEffect(() => {
    loadPokemons();
    return () => {
      setLoading(false);
    };
  }, [loadPokemons]);

  return {
    error,
    loading,
    reFetch: loadPokemons,
  };
};

export default useFavourites;
