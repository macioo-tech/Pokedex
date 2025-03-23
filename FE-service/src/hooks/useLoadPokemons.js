import { useEffect, useState } from "react";
import api from "../services/api";

const useLoadPokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 15;

  useEffect(() => {
    const loadPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(
          `/pokemon?limit=${limit}&offset=${limit * page}`
        );
        const names = [...(response.data?.results || [])].map(
          (item) => item.name
        );

        const promises = names.map((name) => api.get(`/pokemon/${name}`));
        const datalist = await Promise.all(promises);
        const pokelist = [...datalist].map((item) => ({
          id: item.data.id,
          name: item.data.name,
          height: item.data.height,
          weight: item.data.weight,
          base: item.data.base_experience,
          ability: item.data.abilities[0].ability.name,
          img: item.data.sprites.front_default,
        }));

        setPokemons(pokelist);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPokemons();

    return () => {
      setIsLoading(false);
    };
  }, [page]);

  return { pokemons, isError, isLoading, limit, page, setPage };
};

export default useLoadPokemons;
