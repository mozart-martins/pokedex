import { useContext, useEffect } from "react"
import { PokemonContext } from "../Context/Context"
import { useParams } from 'react-router-dom'


const PokemonItemDetail = props => {
    const [pokemonList, getPokemonList, pokemon, getPokemon] = useContext(PokemonContext)

    let {id} = useParams()
    
    useEffect(() => {
        getPokemon(id)
    }, [id])

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

    if(pokemon) {
        const hp = pokemon.data.stats[0].base_stat
        const hpProgressStyle = {
            width: hp + "%",
        }
        const attack = pokemon.data.stats[1].base_stat
        const attackProgressStyle = {
            width: attack + "%",
        }
        const defense = pokemon.data.stats[2].base_stat
        const defenseProgressStyle = {
            width: defense + "%",
        }
        const especialAttack = pokemon.data.stats[3].base_stat
        const especialAttackProgressStyle = {
            width: especialAttack + "%",
        }
        const especialDefense = pokemon.data.stats[4].base_stat
        const especialDefenseProgressStyle = {
            width: especialDefense + "%",
        }
        const speed = pokemon.data.stats[5].base_stat
        const speedProgressStyle = {
            width: speed + "%",
        }

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
                                        <div className="progress-bar bg-dark" style={hpProgressStyle} role="progressbar" aria-valuenow={hp} aria-valuemin="0" aria-valuemax="100">{hp} %</div>
                                    </div>
                                    <p className="mb-0">Attack</p>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-dark" style={attackProgressStyle} role="progressbar" aria-valuenow={attack} aria-valuemin="0" aria-valuemax="100">{attack} %</div>
                                    </div>
                                    <p className="mb-0">Defense</p>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-dark" style={defenseProgressStyle} role="progressbar" aria-valuenow={defense} aria-valuemin="0" aria-valuemax="100">{defense} %</div>
                                    </div>
                                    <p className="mb-0">Especial Attack</p>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-dark" style={especialAttackProgressStyle} role="progressbar" aria-valuenow={especialAttack} aria-valuemin="0" aria-valuemax="100">{especialAttack} %</div>
                                    </div>
                                    <p className="mb-0">Especial Defense</p>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-dark" style={especialDefenseProgressStyle} role="progressbar" aria-valuenow={especialDefense} aria-valuemin="0" aria-valuemax="100">{especialDefense} %</div>
                                    </div>
                                    <p className="mb-0">Speed</p>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-dark" style={speedProgressStyle} role="progressbar" aria-valuenow={speed} aria-valuemin="0" aria-valuemax="100">{speed} %</div>
                                    </div>
                                </div>
                                <h5 className="card-title">
                                    <span className="badge h3 bg-dark text-danger">
                                        <strong>{pokemon.data.types[0].type.name} type</strong>
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
    } else
        return (
            <div className="bg-danger text-dark">
                <h1>Pokemon não encontrado...</h1>
            </div>
        )
}

export default PokemonItemDetail