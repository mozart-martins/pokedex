import { createContext, useState } from "react"
import axios from 'axios'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState()
  const [pokemon, setPokemon] = useState()

  // Getting a pokemon list
  const getPokemonList = async () => {
    console.log("getPokemonList method called")
    const apiResult = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
    setPokemonList(apiResult.data)
  }

  // Getting a especific pokemon
  const getPokemon = async value => {
    console.log("getPokemon method called")
    if(value && parseInt(value) > 0) {
      const apiResult = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      setPokemon(apiResult)
    }
  }

  return (
    <PokemonContext.Provider value={[pokemonList, getPokemonList, pokemon, getPokemon]}>
      {props.children}
    </PokemonContext.Provider>
  )
}
