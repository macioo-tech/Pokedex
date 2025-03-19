import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useGet from "../../../hooks/useGet";

const BASE_URL = "https://pokeapi.co/api/v2";

const Home = () => {
  const [page, setPage] = useState(1);
  const maxOnPage = 15;
  let offset = page * maxOnPage;

  const { data, error, loading } = useFetch(
    `${BASE_URL}/pokemon?limit=${maxOnPage}&offset=${offset}`
  );


  console.log("error", error);
  console.log("loading", loading);
  console.log("page", page)
  console.log("offset", offset)
  console.log("data", data);

  return (
    <>
      <h1>Hejka</h1>
      <button onClick={() => setPage(page+1)}>Page++</button>
    </>
  );
};

export default Home;
