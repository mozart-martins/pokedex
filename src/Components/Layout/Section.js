import { useContext } from "react"
import { PokemonContext } from "../Context/Context"
import PokemonItem from '../Pokemon/PokemonItem'

const sectionStyle = {
    height: "calc(100vh + 100%)",
}

const Section = () => {
    const [pokemonList, getPokemonList, pokemon, getPokemon] = useContext(PokemonContext)

    // Getting pokemon abilities
    const getAbilities = () => {
        var abilities = ""

        for(var i=0; i < pokemon.data.abilities.length; i++) {
            abilities += pokemon.data.abilities[i].ability.name
            
            if(i+1 < pokemon.data.abilities.length)
                abilities += ", "
        }
        abilities += "."
            
        return abilities
    }


    if(!pokemon) {
        return (
            <section className="container-fluid bg-danger text-white" style={sectionStyle}>
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
    } else {
        return (
            <section className="container-fluid bg-danger text-white" style={sectionStyle}>
                <div className="card">
                    <div className="card-header">{pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)}</div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {pokemon.data.types[0].type.name} type
                    </h5>
                    <p className="card-text">
                        It's abilities are {getAbilities()}
                    </p>
                </div>
            </section>
        )
    }
};



export default Section