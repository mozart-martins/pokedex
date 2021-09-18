import { useContext } from "react"
import { PokemonContext } from "../Context/Context"
import Pokemon from '../Pokemon/Pokemon'

const sectionStyle = {
    height: "100vh"
}

const Section = () => {
    const [pokemonList, getPokemonList] = useContext(PokemonContext)

    return (
        <section className="container-fluid bg-danger text-white" style={sectionStyle}>
            {pokemonList && pokemonList.map(pokemon => (
                <Pokemon name={pokemon.name} />
            ))}
        </section>
    )
};



export default Section