import { PokemonContext } from "../context/PokemonContext";
import { useContext, useEffect, useState, useCallback } from "react";
import { PokeApi, LocalApi, getItems } from "../services/api";
import { updateList } from "../services/utils";

const useFetchPokemons = (type) => {
  const { queryPokeList } = useContext(PokemonContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const maxPerPage = 15;

  const loadPokemons = useCallback(async () => {
    if (queryPokeList == undefined) return;
    if (queryPokeList?.length === 0) {
      setPokemons([]);
      return;
    }
    setLoading(true);
    try {
      let pages = [];
      let offset = 0;
      if (type === "all") {
        pages = [...queryPokeList];
      } else {
        offset = maxPerPage * (currentPage - 1);
        pages = queryPokeList.slice(offset, offset + maxPerPage);
      }
      const remotePromises = pages.map((name) => PokeApi.get(`/pokemon/${name}`));
      const remoteData = await Promise.all(remotePromises);
      const remoteList = [...(remoteData || [])].map((item) => ({
        id: item.data.id,
        name: item.data.name,
        height: item.data.height,
        weight: item.data.weight,
        experience: item.data.base_experience,
        ability: item.data.abilities[0].ability.name,
        img: item.data.sprites.other.dream_world.front_default,
        win: 0,
        lost: 0,
      }));
      const localList = await getItems(LocalApi, `edits`);
      const pokelist = updateList(remoteList, localList);
      setPokemons(pokelist);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, queryPokeList, type]);

  useEffect(() => {
    loadPokemons();
    return () => {
      setLoading(false);
    };
  }, [loadPokemons]);

  return {
    pokemons,
    currentPage,
    setCurrentPage,
    error,
    loading,
    refetch: loadPokemons,
  };
};

export default useFetchPokemons;
