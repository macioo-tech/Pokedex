import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { LocalApi } from "../services/api";

const useDetailsArena = (item) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isInArena, setIsInArena] = useState(false);
  const [isTotalInArena, setTotalInArena] = useState(0);

  useEffect(() => {
    if (!isLoggedIn) return;
    const loadPokemons = async () => {
      try {
        const pokemonsInArena = await LocalApi.get(`/arena`);
        if (pokemonsInArena.data?.length == undefined || pokemonsInArena.data?.length <=0 ) return;
        setTotalInArena(pokemonsInArena.data.length);
        const response = await LocalApi.get(`/arena/?name=${item.name}`);
        if (response.data?.length > 0) {
          setIsInArena(true);
        }
      } catch {
        setIsInArena(false);
      }
    };
    loadPokemons();
  }, [isLoggedIn, item.name, setIsInArena]);

  return { isInArena, isTotalInArena, setIsInArena };
};

export default useDetailsArena;
