import { createContext, useState } from "react"
import axios from 'axios'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState()

  const getPokemonList = async () => {
    const apiResult = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")

    setPokemonList(apiResult.data)

    // console.log(value)
  }

  return (
    <PokemonContext.Provider value={[pokemonList, getPokemonList]}>
      {props.children}
    </PokemonContext.Provider>
  )
}
