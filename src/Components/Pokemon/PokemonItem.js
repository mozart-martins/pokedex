import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PokemonContext } from '../Context/Context'

const pokemonStyle = {
    "width": "18rem"
}

const PokemonItem = props => {
    const [pokemonList, getPokemonList, pokemon, getPokemon] = useContext(PokemonContext);

    const getPhoto = () => {
        var addressSplited = props.address.split("/")
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${addressSplited[6]}.png`
    }

    var addressSplited = props.address.split("/")
    
    return (
        <div className="col">
            <div className="card border-dark bg-danger text-white my-3 justify-content-center" style={pokemonStyle}>
                <img className="card-img-top"
                    src={getPhoto()} 
                    alt={props.name.charAt(0).toUpperCase() + props.name.slice(1)} 
                />
                <div className="card-body bg-dark d-flex justify-content-between">
                    <div className="card-title h3 me-3">
                        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                    </div>
                    <Link 
                        to={`/detail/${addressSplited[6]}`}
                        className="btn btn-secondary"
                    >
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem