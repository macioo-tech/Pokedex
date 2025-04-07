import { useCallback, useContext, useEffect, useState, useRef } from "react";
import { LoginContext } from "../../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import {
  findLooser,
  findWinner,
  timeout,
  updateStats,
} from "../../services/utils";
import { LocalApi } from "../../services/api";

const useArenaBattle = () => {
  const [battleInProgress, setBattleInProgress] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);
  const refWinStats = useRef({});
  const refLostStats = useRef({});

  const battle = useCallback(
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
        refWinStats.current = await findWinner(
          LocalApi,
          pokemons,
          refWinStats.current
        );
        refLostStats.current = await findLooser(
          LocalApi,
          pokemons,
          refLostStats.current
        );
        await timeout(2000);
        if (refWinStats.current.strength > refLostStats.current.strength) {
          refWinStats.current.experience += 10;
          refWinStats.current.win += 1;
          refLostStats.current.lost += 1;
          enqueueSnackbar(
            `The winner is ${refWinStats.current.name}! New experience: ${refWinStats.current.experience}`,
            { variant: "success" }
          );
          await updateStats(LocalApi, refWinStats.current);
          await updateStats(LocalApi, refLostStats.current);
          enqueueSnackbar(`Updated stats successfully`, { variant: "success" });
        } else {
          enqueueSnackbar(`Draaaaaw! Pokemons are equal!`, {
            variant: "success",
          });
        }
      } catch {
        setBattleInProgress(false);
        enqueueSnackbar(`Something went wrong`, { variant: "error" });
      } finally {
        setBattleInProgress(false);
      }
    },
    [isLoggedIn]
  );

  useEffect(() => {
    battle();
    return setBattleInProgress(false);
  }, [battle]);

  return { battleInProgress, startBattle: battle };
};

export default useArenaBattle;
