import usePokemons from "../../hooks/usePokemons";
import { ContentArena, Loading, Box, EmptyContent } from "../index";
import { LocalApi } from "../../services/api";

const Arena = () => {
  const { error, loading, refetch } = usePokemons(LocalApi, "arena");

  if (loading) return <Loading />;
  if (error) return <EmptyContent />;

  return <ContentArena refetch={refetch} />;
};

export default Arena;
