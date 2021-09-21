import axios from 'axios'

const pokemonStyle = {
    "width": "18rem"
}

// Taking pokemon photo
const getPokemonPhoto = async (address) => {
    // front_default
    if(address) {
        const apiResult = await axios.get(address)
        const photo = apiResult.data.sprites.front_default
        return photo;
    }
}

const Pokemon = props => {
    const photo = getPokemonPhoto(props.address)
    return (
        <div className="col">
            <div className="card bg-danger text-white my-3 justify-content-center" style={pokemonStyle}>
                <img src={getPokemonPhoto(props.address)} alt={props.name} />
                <div className="card-body">
                    <div className="card-title">{props.name}</div>
                    <a href={props.address} className="card-link">Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Pokemon