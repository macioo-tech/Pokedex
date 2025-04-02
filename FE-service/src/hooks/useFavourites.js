import { useEffect, useState } from "react";
import { LocalApi } from "../services/api";

const useFavourites = (onSuccess) => {
  const [favouritesError, setFavouritesError] = useState(false);
  const [favouritesLoading, setFavouritesLoading] = useState(true);
  const [favouritesLength, setFavouritesLength] = useState(0);

  useEffect(() => {
    const loadPokemons = async () => {
      setFavouritesLoading(true);
      try {
        const response = await LocalApi.get(`/favourites`);
        const names = [...(response?.data || [])].map((item) => item.name);
        onSuccess(names);
        setFavouritesLength(names.length);
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
    favouritesLength,
  };
};

export default useFavourites;
