import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [queryPokeList, setQueryPokeList] = useState([]);

  return (
    <PokemonContext.Provider
      value={{ pokeList, setPokeList, queryPokeList, setQueryPokeList }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
