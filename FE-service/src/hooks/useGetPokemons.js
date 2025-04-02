import { useContext, useEffect, useState, useCallback } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokeApi } from "../services/api";

const useGetPokemons = () => {
  const { setPokemons } = useContext(PokemonContext);
  const [getError, setGetError] = useState(false);
  const [getLoading, setGetLoading] = useState(true);
  const [isPage, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const maxPerPage = 15;

  const loadPokemons = useCallback(
    async (arrayPokemons) => {
      if (arrayPokemons?.length === 0 || arrayPokemons == undefined) return;

      setGetLoading(true);

      try {
        const offset = maxPerPage * isPage;
        let pagePokemons = arrayPokemons.slice(offset, offset + maxPerPage);

        if (query !== "") {
          pagePokemons = pagePokemons.filter((name) =>
            name.toLowerCase().includes(query.toLowerCase())
          );
        }
        const promises = pagePokemons.map((name) =>
          PokeApi.get(`/pokemon/${name}`)
        );

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
    [isPage, query, setPokemons]
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
    maxPerPage,
    isPage,
    setPage,
    query,
    setQuery,
    refetch: loadPokemons,
  };
};

export default useGetPokemons;
