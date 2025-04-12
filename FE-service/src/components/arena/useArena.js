import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { getItems, LocalApi } from "../../services/api";

const useArena = (onSuccess) => {
  const [arenaError, setArenaError] = useState(false);
  const [arenaLoading, setArenaLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      setArenaLoading(true);
      try {
        const data = await getItems(LocalApi, `arena`)     
        const names = data.map((item) => item.name);
        setPokeList(names);  
        onSuccess(names);
        setArenaLoading(false);
      } catch (error) {
        setArenaError(error);
      } finally {
        setArenaLoading(false);
      }
    };
    loadPokemons();
    return () => {
      setArenaLoading(false);
    };
  }, [onSuccess]);

  return {
    arenaError,
    arenaLoading,
  };
};

export default useArena;
