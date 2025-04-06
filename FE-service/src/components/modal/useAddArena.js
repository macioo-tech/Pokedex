import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../../services/api";
import { timeout } from "../../services/utils";

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
        enqueueSnackbar(`Arena is full. Remove other pokemons first.`, { variant: "warning" });
        return;
      }
      try {
        await LocalApi.post(`/arena`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        enqueueSnackbar(`Pokemon ${data.name} added to Arena`, {
          variant: "success",
        });
      } catch {
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      } finally {
        onSuccess(data);
      }
    } else {
      try {
        await LocalApi.delete(`/arena/${refArena}`);
        enqueueSnackbar(`Pokemon ${data.name} removed from Arena`, {
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
  return { toggleArena:onEvent };
};

export default useAddToArena;
