import { useCallback, useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { getItems, LocalApi } from "../../services/api";

const useArena = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  const loadPokemons = useCallback(async () => {
    setLoading(true);
    console.log("refetch arena");
    
    try {
      const data = await getItems(LocalApi, `arena`);
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
    refetch: loadPokemons,
  };
};

export default useArena;
