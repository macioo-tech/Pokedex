import { useCallback, useRef, useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { LocalApi } from "../../services/api";

const useFetchFavourites = (item) => {
  const { isLoggedIn } = useContext(LoginContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const refFavourite = useRef(0);
  
  const fetchFavourites = useCallback(async (item) => {
    try {
      const response = await LocalApi.get(`/favourites/?name=${item.name}`);
      if (response.data?.length > 0) {
        setIsFavourite(true);
        refFavourite.current = response.data[0]?.id || 0;
      }
    } catch {
      setIsFavourite(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetchFavourites(item);
  }, [fetchFavourites, isLoggedIn, item]);

  return { refFavourite:refFavourite.current, isFavourite, refetchFavourites: fetchFavourites };
};

export default useFetchFavourites;
