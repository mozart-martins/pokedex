import { useState, createContext } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState();


  const getPokemonList = async () => {
    const pokeapi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
    );
    setPokemonList(pokeapi.data.results)
    console.log(pokemonList)
  };


  return (
    <PokemonContext.Provider value={[pokemonList, getPokemonList]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
