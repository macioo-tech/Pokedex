import { useEffect, useState } from "react";
import { PokeApi } from "../services/api";

const useHome = (onSuccess) => {
  const [homeError, setHomeError] = useState(false);
  const [homeLoading, setHomeLoading] = useState(true);
  const [homeLength, setHomeLength] = useState(0);
  const limitAll = 150;

  useEffect(() => {
    const loadPokemons = async () => {
      setHomeLoading(true);
      try {
        const response = await PokeApi.get(
          `/pokemon?limit=${limitAll}&offset=${0}`
        );
        const names = [...(response.data?.results || [])].map(
          (item) => item.name
        );
        onSuccess(names);
        setHomeLength(names.length);
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
    homeLength,
  };
};

export default useHome;
