import { useContext, useEffect, useState } from "react";
import { PokeApi } from "../../services/api";
import { PokemonContext } from "../../context/PokemonContext";

const useHome = (onSuccess) => {
  const [homeError, setHomeError] = useState(false);
  const [homeLoading, setHomeLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      setHomeLoading(true);
      try {
        const response = await PokeApi.get(
          `/pokemon?limit=${150}&offset=${0}`
        );
        const names = [...(response.data?.results || [])].map(
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
