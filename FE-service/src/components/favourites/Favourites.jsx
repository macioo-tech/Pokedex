import { useFavourites } from "./hooks";
import { Content, Loading, Box, EmptyContent } from "../index";

const Favourites = () => {
  const { loading, error, refetch } = useFavourites();

  if (loading) return <Box size="screen"><Loading /></Box>;
  if (error) return <EmptyContent />

  return <Content refetch={refetch} />;
};

export default Favourites;
