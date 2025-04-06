import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext"
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../../services/api";
import { timeout } from "../../services/utils";

const useAddToFavourites = (onSuccess, refFavourite) => {
  const { isLoggedIn } = useContext(LoginContext);

  const onEvent = async (isFavourite, item, event) => {
    if (!isLoggedIn || item.name == undefined) return;
    event.preventDefault();
    const data = {
      name: item.name,
    };
    if (!isFavourite) {
      try {
        await LocalApi.post(`/favourites`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        enqueueSnackbar(`Pokemon ${data.name} added to Favourites`, {
          variant: "success",
        });
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      } finally {
        onSuccess(data);
      }
    } else {
      try {
        await LocalApi.delete(`/favourites/${refFavourite}`);
        enqueueSnackbar(`Pokemon ${data.name} removed from Favourites`, {
          variant: "warning",
        });
        await timeout(2000);
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      } finally {
        onSuccess(data);
      }
    }
  };
  return { toggleFavourite:onEvent };
};

export default useAddToFavourites;
