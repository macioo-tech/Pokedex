import usePokemons from "../../hooks/usePokemons";
import { Content, Loading, Box, EmptyContent } from "../index";
import { LocalApi } from "../../services/api";

const Favourites = () => {
  const { loading, error, refetch } = usePokemons(LocalApi, "favourites");

  if (loading) return <Loading />;
  if (error) return <EmptyContent />;

  return <Content refetch={refetch} />;
};

export default Favourites;
