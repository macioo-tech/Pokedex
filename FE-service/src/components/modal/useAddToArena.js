import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../../services/api";

const useAddToArena = (onSuccess, refArena, isTotalInArena) => {
  const { isLoggedIn } = useContext(LoginContext);
  const maxArenaTotal = 2;

  const onEvent = async (isInArena, item, event) => {
    if (!isLoggedIn || item.name == undefined) return;
    event.preventDefault();
    const data = {
      name: item.name,
    };
    if (!isInArena) {
      if (isTotalInArena >= maxArenaTotal) {
        enqueueSnackbar(`Arena is full. Remove other pokemons first.`, {
          variant: "warning",
        });
        return;
      }
      try {
        await LocalApi.post(`/arena`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        await onSuccess(data);
        enqueueSnackbar(`Pokemon ${data.name} added to Arena`, {
          variant: "success",
        });
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      }
    } else {
      try {
        await LocalApi.delete(`/arena/${refArena}`);
        await onSuccess(data);
        enqueueSnackbar(`Pokemon ${data.name} removed from Arena`, {
          variant: "warning",
        });
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      }
    }
  };
  return { toggleArena: onEvent };
};

export default useAddToArena;
