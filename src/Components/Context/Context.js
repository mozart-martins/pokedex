import { createContext, useState } from "react"
import axios from 'axios'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState()
  const [pokemon, setPokemon] = useState()
  const [qtdPokemons, setQtdPokemons] = useState()
  const [page, setPage] = useState()

  // Getting pokemon counting
  const getQtdPokemon = async () => {
    const apiResult = await axios.get("https://pokeapi.co/api/v2/pokemon")
    setQtdPokemons(parseInt(apiResult.count))
    return qtdPokemons
  }

  // Getting a pokemon list
  const getPokemonList = async () => {
    const itemsPerPage = 40
    const apiResult = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page*itemsPerPage}&limit=${itemsPerPage}`)
    setPokemonList(apiResult.data)
  }

  // Getting a especific pokemon
  const getPokemon = async value => {
    if(value) {
      const apiResult = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      setPokemon(apiResult)
    }
  }

  return (
    <PokemonContext.Provider value={[pokemonList, getPokemonList, pokemon, getPokemon, page, setPage]}>
      {props.children}
    </PokemonContext.Provider>
  )
}
