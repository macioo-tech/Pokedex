import { useArena } from "./hooks";
import { ContentArena, Loading, Box, EmptyContent } from "../index";

const Arena = () => {
  const { error, loading } = useArena();

  if (loading) return (<Box size="screen"><Loading /></Box>);
  if (error) return <EmptyContent />;

  return <ContentArena />;
};

export default Arena;
