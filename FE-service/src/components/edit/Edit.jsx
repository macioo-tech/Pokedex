import usePokemons from "../../hooks/usePokemons";
import { PokeApi } from "../../services/api";
import { Box, Button, Loading } from "../index";
import { ContentRanking } from "../ranking/Table";

const Edit = () => {
  const { error, loading } = usePokemons(PokeApi, `pokemon?limit=${150}&offset=${0}`);

  if (loading) return <Loading />;
  if (error) return <EmptyContent />;

  return (
    <>
      <Button>Create new</Button>
      <Button>Edit exiting</Button>
    </>
  );
};

export default Edit;
