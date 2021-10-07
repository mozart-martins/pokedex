import { createContext, useState } from "react"
import axios from 'axios'

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState()
  const [pokemon, setPokemon] = useState()
  const [page, setPage] = useState(0)
  const itemsPerPage = 40

  // Has more page?
  const hasMorePage = page => {
    // Setted fixed quantity
    const qtd_pokemons = 1118
    const qtd_pages = qtd_pokemons / itemsPerPage
    if (page < qtd_pages)
      return true
    else
      return false
  }

  // Getting a pokemon list
  const getPokemonList = async page => {
    setPage(page)
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
    <PokemonContext.Provider value={[pokemonList, getPokemonList, pokemon, getPokemon, page, hasMorePage]}>
      {props.children}
    </PokemonContext.Provider>
  )
}
