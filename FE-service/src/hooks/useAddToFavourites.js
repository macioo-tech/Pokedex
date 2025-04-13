import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../services/api";

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
        await onSuccess(data);
        enqueueSnackbar(`Pokemon ${data.name} added to Favourites`, {
          variant: "success",
        });
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      }
    } else {
      try {
        await LocalApi.delete(`/favourites/${refFavourite}`);
        await onSuccess(data);
        enqueueSnackbar(`Pokemon ${data.name} removed from Favourites`, {
          variant: "warning",
        });
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      }
    }
  };
  return { toggleFavourite: onEvent };
};

export default useAddToFavourites;
