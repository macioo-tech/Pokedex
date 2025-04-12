import { useHome } from "./hooks";
import { Content, Loading, Box, EmptyContent } from "../index";

const Home = () => {
  const { error, loading } = useHome();

  if (loading) return <Box size="screen"><Loading /></Box>;
  if (error) return <EmptyContent />

  return <Content />;
};

export default Home;
