import { useContext, useEffect } from "react"
import { PokemonContext } from "../Context/Context"
import PokemonItem from '../Pokemon/PokemonItem'
import Pagination from "./Pagination"

const sectionStyle = {
    height: "calc(100vh + 100%)",
}

const Section = () => {
    const [pokemonList, getPokemonList, pokemon] = useContext(PokemonContext)

    useEffect(() => {
        getPokemonList()
    }, [pokemon])

    return (
        <section className="container-fluid bg-danger text-white" style={sectionStyle}>
            <Pagination />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {pokemonList && pokemonList.results.map(pokemon => (
                    <PokemonItem
                        key={pokemon.name.toString()}
                        name={pokemon.name}
                        address={pokemon.url}
                    />)
                )}
            </div>
        </section>
    )
};



export default Section