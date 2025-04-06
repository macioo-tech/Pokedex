import { useContext, useEffect, useState, useCallback } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokeApi } from "../services/api";

const usePokemons = () => {
  const { setPokemons, currentPage } = useContext(PokemonContext);
  const [getError, setGetError] = useState(false);
  const [getLoading, setGetLoading] = useState(true);
  const maxPerPage = 15;

  const loadPokemons = useCallback(
    async (arrayPokemons) => {
      if (arrayPokemons == undefined) return;
      if (arrayPokemons?.length === 0) {
        setPokemons([]);
        return;
      }
      setGetLoading(true);
      try {
        const offset = maxPerPage * (currentPage - 1);
        const pages = arrayPokemons.slice(offset, offset + maxPerPage);
        const promises = pages.map((name) => PokeApi.get(`/pokemon/${name}`));

        const datalist = await Promise.all(promises);
        const pokelist = [...datalist].map((item) => ({
          id: item.data.id,
          name: item.data.name,
          height: item.data.height,
          weight: item.data.weight,
          base: item.data.base_experience,
          ability: item.data.abilities[0].ability.name,
          img: item.data.sprites.other.dream_world.front_default,
        }));
        setPokemons(pokelist);
      } catch (error) {
        setGetError(error);
      } finally {
        setGetLoading(false);
      }
    },
    [currentPage, setPokemons]
  );

  useEffect(() => {
    loadPokemons();
    return () => {
      setGetLoading(false);
    };
  }, [loadPokemons]);

  return {
    getError,
    getLoading,
    refetch: loadPokemons,
  };
};

export default usePokemons;
