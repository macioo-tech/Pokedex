import { useCallback, useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { getItems, LocalApi } from "../../services/api";

const useStats = (item) => {
  const [showStats, setShowStats] = useState(false);
  const [win, setWin] = useState(0);
  const [lost, setLost] = useState(0);
  const [experience, setExperience] = useState(item.experience || 0);
  const { isLoggedIn } = useContext(LoginContext);

  const fetchStats = useCallback(
    async (item) => {
      if (item?.name == undefined) return;
      if (!isLoggedIn) {
        setShowStats(false);
        return;
      }
      try {
        const data = await getItems(LocalApi, `stats/?name=${item.name}`);
        if (data?.length > 0) {
          setWin(data[0]?.win);
          setLost(data[0]?.lost);
          setExperience(data[0]?.experience);
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
