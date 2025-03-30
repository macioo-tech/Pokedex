import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
