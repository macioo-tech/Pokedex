import usePokemons from "../../hooks/usePokemons";
import { PokeApi } from "../../services/api";
import { Box, Loading } from "../index";
import { ContentRanking } from "./Table";

const Ranking = () => {
  const { error, loading } = usePokemons(PokeApi, `pokemon?limit=${150}&offset=${0}`);

  if (loading) return <Loading />;
  if (error) return <EmptyContent />;

  return <ContentRanking />;
};

export default Ranking;
