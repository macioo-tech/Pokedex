import { useCallback, useRef, useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { getItems, LocalApi } from "../../services/api";

const useFetchFavourites = (item) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const refFavourite = useRef(0);

  const fetchFavourites = useCallback(async (item) => {
    try {
      const data = await getItems(LocalApi, `favourites/?name=${item.name}`);
      if (data.length > 0) {
        setIsFavourite(true);
        refFavourite.current = data[0]?.id || 0;
      } else {
        setIsFavourite(false);
      }
    } catch {
      setIsFavourite(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetchFavourites(item);
  }, [fetchFavourites, isLoggedIn, item]);

  return {
    refFavourite: refFavourite.current,
    isFavourite,
    refetchFavourites: fetchFavourites,
  };
};

export default useFetchFavourites;
