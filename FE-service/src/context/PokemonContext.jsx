import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeList, setPokeList] = useState([]);

  return (
    <PokemonContext.Provider
      value={{ pokemons, setPokemons, pokeList, setPokeList }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
