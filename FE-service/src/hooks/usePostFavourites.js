import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { LocalApi } from "../services/api";

const usePostFavourites = (item) => {
    const { isLoggedIn } = useContext(LoginContext);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) return
        const loadPokemons = async () => {     
            try {
            const response = await LocalApi.get(`/favourites/?name=${item.name}`);
            if (response.data?.length > 0) {
                setIsFavourite(true);
                  }
        } catch {
            setIsFavourite(false);
        }
    }
    loadPokemons();    
    },[isLoggedIn, item.name, setIsFavourite]);

  return { isFavourite,  setIsFavourite };
};

export default usePostFavourites;
