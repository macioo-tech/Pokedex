import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeList, setPokeList] = useState([]);
  const [queryPokeList, setQueryPokeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PokemonContext.Provider
      value={{ pokemons, setPokemons, pokeList, setPokeList, queryPokeList, setQueryPokeList, currentPage, setCurrentPage }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
