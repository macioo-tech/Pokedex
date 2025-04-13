import { useCallback, useRef, useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { getItems, LocalApi } from "../services/api";

const useFetchArena = (item) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isInArena, setIsInArena] = useState(false);
  const [isTotalInArena, setTotalInArena] = useState(0);
  const refArena = useRef(0);

  const fetchArena = useCallback(async (item) => {
    try {
      const pokemonsInArena = await getItems(LocalApi, `arena`)
      if (pokemonsInArena.length == undefined) return;
      if (pokemonsInArena.length === 0) {
        setTotalInArena(0);
        setIsInArena(false);
        return;
      };
      setTotalInArena(pokemonsInArena.length);
      const data = await getItems(LocalApi, `arena/?name=${item.name}`);
      if (data.length > 0) {
        setIsInArena(true);
        refArena.current = data[0]?.id || 0;
      } else {
        setIsInArena(false);
      }
    } catch {
      setIsInArena(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetchArena(item);
  }, [fetchArena, isLoggedIn, item]);

  return {
    refArena: refArena.current,
    isInArena,
    isTotalInArena,
    refetchArena: fetchArena,
  };
};

export default useFetchArena;
