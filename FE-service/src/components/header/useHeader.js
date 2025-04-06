import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";

const useHeader = (onSuccess) => {
  const [headerError, setHeaderError] = useState(false);
  const [headerLoading, setHeaderLoading] = useState(false);
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
      setHeaderLoading(true);
      try {
        const names = [...pokeList].filter((name) =>
          name.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setQueryPokeList(names);
        onSuccess(names);
        setHeaderLoading(false);
      } catch (error) {
        setHeaderError(error);
      } finally {
        setHeaderLoading(false);
      }
    };
    loadPokemons();
    return () => {
      setHeaderLoading(false);
    };
  }, [onSuccess, query, pokeList, setQueryPokeList]);

  return {
    headerError,
    headerLoading,
    setQuery,
  };
};

export default useHeader;
