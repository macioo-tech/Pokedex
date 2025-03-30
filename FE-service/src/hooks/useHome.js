import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokeApi } from "../services/api";

const useHome = () => {
  const { setPokemons } = useContext(PokemonContext);
  const [allPokemons, setAllPokemons] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPage, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const limitAll = 150;
  const maxPerPage = 15;

  useEffect(() => {
    const loadAllPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await PokeApi.get(
          `/pokemon?limit=${limitAll}&offset=${0}`
        );
        const names = [...(response.data?.results || [])].map(
          (item) => item.name
        );
        setAllPokemons(names);
      } catch (error) {
        setIsError(error);
      }
    };

    loadAllPokemons();
    return () => {
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    const loadPokemons = async () => {
      if (allPokemons?.length === 0) return;

      setIsLoading(true);
      try {
        const offset = maxPerPage * isPage;
        let pagePokemons = allPokemons.slice(offset, offset + maxPerPage);

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
  }, [isPage, allPokemons, query]);

  return {
    isError,
    isLoading,
    maxPerPage,
    isPage,
    setPage,
    query,
    setQuery,
  };
};

export default useHome;
