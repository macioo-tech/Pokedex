import { useCallback, useRef, useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { LocalApi } from "../services/api";

const useFetchArena = (item) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isInArena, setIsInArena] = useState(false);
  const [isTotalInArena, setTotalInArena] = useState(0);
  const refArena = useRef(0);

  const fetchArena = useCallback(
    async (item) => {
    try {
      const pokemonsInArena = await LocalApi.get(`/arena`);
      if (pokemonsInArena.data?.length == undefined || pokemonsInArena.data?.length <=0 ) return;
      setTotalInArena(pokemonsInArena.data.length);
      
      const response = await LocalApi.get(`/arena/?name=${item.name}`);
      if (response.data?.length > 0) {
        setIsInArena(true);
        refArena.current = response.data[0]?.id || 0;
      }
    } catch {
      setIsInArena(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return; 
    fetchArena(item);
  }, [fetchArena, isLoggedIn, item]);

  return { refArena:refArena.current, isInArena, isTotalInArena, refetchArena: fetchArena};
};

export default useFetchArena;
