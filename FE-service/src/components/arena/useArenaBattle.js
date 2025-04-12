import { useCallback, useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import {
  timeout,
  updateWin,
  updateLost,
  battle
} from "../../services/utils";
import { LocalApi } from "../../services/api";

const useArenaBattle = (onSuccess) => {
  const [battleInProgress, setBattleInProgress] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);

  const arenaBattle = useCallback(
    async (pokemons) => {
      const disableBattle = !isLoggedIn || pokemons?.length < 2;
      if (disableBattle) {
        enqueueSnackbar(
          `Card/s are Empty. Add your Pokemons to begin the battle`,
          {
            variant: "error",
          }
        );
        return;
      }
      try {
        setBattleInProgress(true);
        await timeout(2000);
        const result  = battle(pokemons);  
        if (result.win.name === result.lost.name || result == undefined ) {
          enqueueSnackbar(`Nobody wins... nobody looses...`, { variant: "success" });
          return;
        }
        updateWin(LocalApi, result.win)
        updateLost(LocalApi, result.lost)
        enqueueSnackbar(`${result.win.name} won this battle!`, { variant: "success" });
        onSuccess();
      } catch {
        setBattleInProgress(false);
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      } finally {
        setBattleInProgress(false);
      }
    },
    [isLoggedIn, onSuccess]
  );

  useEffect(() => {
    battle();
    return setBattleInProgress(false);
  }, [arenaBattle]);

  return { battleInProgress, startBattle: arenaBattle };
};

export default useArenaBattle;
