import { useCallback, useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { getItems } from "../services/api";

const usePokemons = (api, path) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  const loadPokemons = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getItems(api, path);
      const names = data.map((item) => item.name);
      setPokeList(names);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [api, path, setPokeList]);

  useEffect(() => {
    loadPokemons();
    return () => {
      setLoading(false);
    };
  }, [loadPokemons]);

  return {
    error,
    loading,
    refetch: loadPokemons,
  };
};

export default usePokemons;
