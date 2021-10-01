import { useContext, useEffect } from "react"
import { PokemonContext } from "../Context/Context"
import { useParams } from 'react-router-dom'

const PokemonItemDetail = props => {
    const [pokemonList, getPokemonList, pokemon, getPokemon] = useContext(PokemonContext)

    let {id} = useParams()
    
    useEffect(() => {
        getPokemon(id)
    }, [id])

    // return (
    //     <div>
    //         <h1>Teste {id}</h1>
    //     </div>
    // )

    // Getting pokemon photograph
    const getPhoto = () => {
        const photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        return photo
    }
    
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

    // Getting pokemon moves
    const getMoves = () => {
        var moves = ""

        for(var i=0; i < pokemon.data.moves.length; i++) {
            moves += pokemon.data.moves[i].move.name
            
            if(i+1 < pokemon.data.moves.length)
                moves += ", "
        }
        moves += "."
            
        return moves
    }

    // console.log("hp", pokemon.data.stats[0].base_stat)
    // console.log("attack", pokemon.data.stats[1].base_stat)
    // console.log("defense", pokemon.data.stats[2].base_stat)
    // console.log("especial-attack", pokemon.data.stats[3].base_stat)
    // console.log("especial-defense", pokemon.data.stats[4].base_stat)
    // console.log("speed", pokemon.data.stats[5].base_stat)
    if(pokemon)
        return (
            <div className="bg-danger">
                <div className="row justify-content-center">
                    <div className="card col-4 border-dark bg-danger m-3 p-0">
                            <div className="card-header bg-dark text-white">
                                <h3>
                                    {pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)}
                                </h3>
                            </div>
                            <img
                                    className="card-img-top"
                                    src={getPhoto()} 
                                    alt={pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1)} 
                            />
                            <div className="card-body">

                                <h5 className="card-title">
                                    <span className="badge h3 bg-dark text-danger">
                                        Stats
                                    </span>
                                </h5>
                                <div className="mb-5">
                                    <p className="mb-0">HP</p>
                                    <div className="progress mb-3">
                                        <div style={"width: " + pokemon.data.stats[0].base_stat + "%"} role="progressbar" aria-valuenow={pokemon.data.stats[0].base_stat} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <h5 className="card-title">
                                    <span className="badge h3 bg-dark text-danger">
                                        {/* <strong>{pokemon.data.type} type</strong> */}
                                    </span>
                                </h5>
                                <ul>
                                    <li className="card-text">
                                        It's abilities are {getAbilities()}
                                    </li>
                                    <li className="card-text">
                                        It's moves are {getMoves()}
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        )
}

export default PokemonItemDetail