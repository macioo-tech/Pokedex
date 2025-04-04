import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const useHeader = (onSuccess) => {
  const [headerError, setHeaderError] = useState(false);
  const [headerLoading, setHeaderLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [queryList, setQueryList] = useState([])
  const { pokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      if (pokeList?.length === 0 || pokeList == undefined) return;
      if (query == undefined) return;
      
      setHeaderLoading(true);
      try {
        const names = [...pokeList].filter((name) =>
          name.toLowerCase().includes(query.toLocaleLowerCase())
        ); 
        setQueryList(names);
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
  }, [onSuccess, query, pokeList]);

  return {
    headerError,
    headerLoading,
    setQuery,
    queryList
  };
};

export default useHeader;
