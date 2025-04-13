import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const useHeader = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const { pokeList, setQueryPokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      if (pokeList == undefined) return;
      if (pokeList?.length === 0) {
        setQueryPokeList([]);
        return;
      }
      if (query == undefined) return;
      setLoading(true);
      try {
        const names = [...pokeList].filter((name) =>
          name.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setQueryPokeList(names);
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
  }, [query, pokeList, setQueryPokeList]);

  return {
    error,
    loading,
    setQuery,
  };
};

export default useHeader;
