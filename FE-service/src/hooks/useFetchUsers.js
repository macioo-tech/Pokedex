import { useCallback, useEffect, useState } from "react";
import { getItems } from "../services/api";

const useFetchUsers = (api, path) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const loadUsers = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getItems(api, path);
      const names = data.map((item) => item.name);
      setUsers(names);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [api, path, setUsers]);

  useEffect(() => {
    loadUsers();
    return () => {
      setLoading(false);
    };
  }, [loadUsers]);

  return {
    users,
    error,
    loading,
    refetch: loadUsers,
  };
};

export default useFetchUsers;
