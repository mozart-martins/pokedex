import { useContext } from "react"
import { PokemonContext } from "../Context/Context"
import Pokemon from '../Pokemon/Pokemon'

const sectionStyle = {
    height: "calc(100vh + 100%)",
}

const Section = () => {
    const [pokemonList, getPokemonList] = useContext(PokemonContext)

    return (
        <section className="container-fluid bg-danger text-white" style={sectionStyle}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {pokemonList && pokemonList.results.map(pokemon => (
                    <Pokemon
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