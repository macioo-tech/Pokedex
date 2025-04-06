import { useCallback, useContext, useEffect, useState, useRef } from "react";
import { LoginContext } from "../../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { findLooser, findWinner, timeout } from "../../services/utils";
import { LocalApi } from "../../services/api";

const useArenaBattle = () => {
  const [battleInProgress, setBattleInProgress] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);
  const refPokeWinner = useRef(""); 
  const refStatsWinner = useRef({})
  // const refMaxExperience = useRef(0);
  const refPokeLooser = useRef(""); 
  const refStatsLooser = useRef({});
  // const refMinExperience = useRef(0);

  const battle = useCallback(async (pokemons) => {
    
    
    
    const disableBattle = !isLoggedIn || pokemons?.length < 2
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
      const winner = await findWinner(pokemons, refStatsWinner.current, refPokeWinner.current)
      const looser = await findLooser(pokemons, refStatsLooser.current, refPokeLooser.current)
      console.log("winner", winner);
      console.log("looser", looser);
      refStatsWinner.current = winner[0]
      refPokeWinner.current = winner[1]
      refStatsLooser.current = looser[0]
      refPokeLooser.current = looser[1]
      
      refStatsWinner.current.win += 1;
      refStatsWinner.current.experience += 10;
      console.log("winner", refPokeWinner.current);
      console.log("Id in Stats", refStatsWinner.current);

      // update winner
      // if (refStatsId.current > 0) {
      //   await LocalApi.put(`/stats/${refStatsId.current}`, refStats.current, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      // } else {
      //   await LocalApi.post(`/stats`, refStats.current, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      // }

      //update looser

      
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
