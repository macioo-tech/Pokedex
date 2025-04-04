import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { LocalApi } from "../services/api";

const useFavourites = (onSuccess) => {
  const [favouritesError, setFavouritesError] = useState(false);
  const [favouritesLoading, setFavouritesLoading] = useState(true);
  const { setPokeList } = useContext(PokemonContext);

  useEffect(() => {
    const loadPokemons = async () => {
      setFavouritesLoading(true);
      try {
        const response = await LocalApi.get(`/favourites`);
        const names = [...(response?.data || [])].map((item) => item.name);
        setPokeList(names);  
        onSuccess(names);
        setFavouritesLoading(false);
      } catch (error) {
        setFavouritesError(error);
      } finally {
        setFavouritesLoading(false);
      }
    };
    loadPokemons();
    return () => {
      setFavouritesLoading(false);
    };
  }, [onSuccess]);

  return {
    favouritesError,
    favouritesLoading,
  };
};

export default useFavourites;
