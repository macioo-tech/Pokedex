import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import Box from "../shared/styled/Box"
import Card from "../shared/Card"
import Pagination from "./Pagination";

const Content = ({length, limit, page, setPage}) => {
    const { pokemons } = useContext(PokemonContext);

  return (
    <>
      <Box variant="content" size="content" className="border-none shadow-none">
        {pokemons.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Box>
      <Pagination
        length={length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Content;
