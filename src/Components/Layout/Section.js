import { useContext, useEffect } from "react"
import { PokemonContext } from "../Context/Context"
import PokemonItem from '../Pokemon/PokemonItem'
import Pagination from "./Pagination"
import { useParams } from "react-router"

const sectionStyle = {
    height: "calc(100vh + 100%)",
}

const Section = () => {
    const [pokemonList, getPokemonList, pokemon] = useContext(PokemonContext)
    const {page} = useParams()

    useEffect(() => {
        getPokemonList(page)
    }, [page])

    return (
        <section className="container-fluid bg-danger text-white" style={sectionStyle}>
            <Pagination page={page} />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {pokemonList && pokemonList.results.map(pokemon => (
                    <PokemonItem
                        key={pokemon.name.toString()}
                        name={pokemon.name}
                        address={pokemon.url}
                    />)
                )}
            </div>
            <Pagination page={page} />
        </section>
    )
};



export default Section