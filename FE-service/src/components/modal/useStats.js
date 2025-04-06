import { useCallback, useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { LocalApi } from "../../services/api";

const useStats = (item) => {
  const [showStats, setShowStats] = useState(false);
  const [win, setWin] = useState(0);
  const [lost, setLost] = useState(0);
  const [experience, setExperience] = useState(item.base || 0);
  const { isLoggedIn } = useContext(LoginContext);

  const fetchStats = useCallback(
    async (item) => {
      if (item?.name == undefined) return;
      if (!isLoggedIn) {
        setShowStats(false);
        return;
      }
      try {
        const response = await LocalApi.get(`/stats/?name=${item.name}`);
        if (response.data?.length > 0) {
          setWin(response.data[0]?.win);
          setLost(response.data[0]?.lost);
          setExperience(response.data[0]?.experience);
          setShowStats(true);
        }
      } catch {
        setWin(0);
        setLost(0);
      }
    },
    [isLoggedIn]
  );

  useEffect(() => {
    fetchStats(item);
    return () => {};
  }, [item, fetchStats]);

  return {
    win,
    lost,
    experience,
    showStats,
    refetchStats: fetchStats,
  };
};

export default useStats;
