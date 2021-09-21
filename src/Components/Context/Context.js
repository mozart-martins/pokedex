import { useState, createContext } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState()

  // Take first Pokemon page
  const getPokemonList = async () => {
    const apiResult = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
    )
    setPokemonList(apiResult.data)
  }

  return (
    <PokemonContext.Provider value={[pokemonList, getPokemonList]}>
      {props.children}
    </PokemonContext.Provider>
  )
}
