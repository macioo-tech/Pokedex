import { useContext, useEffect, useState } from "react";
import { getItems, PokeApi } from "../../services/api";
import { PokemonContext } from "../../context/PokemonContext";

const useHome = (onSuccess) => {
  const [homeError, setHomeError] = useState(false);
  const [homeLoading, setHomeLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      setHomeLoading(true);
      try {
        const data = await getItems(PokeApi, `pokemon?limit=${150}&offset=${0}`)     
        const names = data.map(
          (item) => item.name
        );
        setPokeList(names);     
        onSuccess(names);
        setHomeLoading(false);
      } catch (error) {
        setHomeError(error);
      } finally {
        setHomeLoading(false);
      }
    };
    loadPokemons();
    return () => {
      setHomeLoading(false);
    };
  }, [onSuccess]);

  return {
    homeError,
    homeLoading,
  };
};

export default useHome;
