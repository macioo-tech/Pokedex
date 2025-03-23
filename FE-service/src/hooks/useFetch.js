import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network Error");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      setIsLoading(false);
    };
  }, [url]);

  return { data, isError, isLoading };
};

export default useFetch;
