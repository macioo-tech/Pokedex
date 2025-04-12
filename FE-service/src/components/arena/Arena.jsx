import { useArena } from "./hooks";
import { ContentArena, Loading, Box, EmptyContent } from "../index";

const Arena = () => {
  const { error, loading, refetchArena } = useArena();

  if (loading) return (<Box size="screen"><Loading /></Box>);
  if (error) return <EmptyContent />;

  return <ContentArena reFetch={refetchArena} />;
};

export default Arena;
