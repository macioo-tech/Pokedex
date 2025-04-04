import { useContext, useEffect, useState } from "react";
import { LocalApi } from "../services/api";
import { LoginContext } from "../context/LoginContext";

const useStats = (item) => {
    const { isLoggedIn } = useContext(LoginContext);
  const [statsError, setstatsError] = useState(false);
  const [statsLoading, setStatsLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [win, setWin] = useState(0);
  const [lost, setLost] = useState(0);

  useEffect(() => {
    if (item?.name == undefined || !isLoggedIn) return;

    
    const loadPokemons = async () => {
      setStatsLoading(true);
      try {
        const response = await LocalApi.get(`/stats/?name=${item.name}`);
        if (response.data?.length > 0) {
            setWin(response.data[0]?.win);
            setLost(response.data[0]?.lost);          
            setShowStats(true);
            setStatsLoading(false);
        }     
      } catch (error) {
        setstatsError(error);
      } finally {
        setStatsLoading(false);
      }
    };
    loadPokemons();
    return () => {
      setStatsLoading(false);
    };
  }, [item.name, isLoggedIn]);

  return {
    statsError,
    statsLoading,
    win,
    lost,
    showStats,
  };
};

export default useStats;
