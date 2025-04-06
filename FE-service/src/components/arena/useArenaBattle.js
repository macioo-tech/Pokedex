import { useCallback, useEffect, useState } from "react";
import { LocalApi } from "../../services/api";
import { enqueueSnackbar } from "notistack";
import { timeout } from "../../services/utils";

const useArenaBattle = () => {
  const [battleInProgress, setBattleInProgress] = useState(false);

  const battle = useCallback(async (pokemon1, pokemon2) => {

    const disableBattle =
      pokemon1 == undefined ||
      Object.keys(pokemon1).length === 0 ||
      pokemon2 == undefined ||
      Object.keys(pokemon2).length === 0;

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
      await timeout(5000);
    } catch {
      setBattleInProgress(false);
      enqueueSnackbar(`Something went wrong`, { variant: "error" });
    } finally {
      setBattleInProgress(false);
    }
  }, []);

  useEffect(() => {
    battle();
    return setBattleInProgress(false);
  }, [battle]);

  return { battleInProgress, startBattle: battle };
};

export default useArenaBattle;
