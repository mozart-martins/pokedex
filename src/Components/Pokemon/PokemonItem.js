
const pokemonStyle = {
    "width": "18rem"
}

const PokemonItem = props => {

    const getPhoto = () => {
        var addressSplited = props.address.split("/")
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${addressSplited[6]}.png`
    }

    return (
        <div className="col">
            <div className="card border-dark bg-danger text-white my-3 justify-content-center" style={pokemonStyle}>
                <img className="card-img-top"
                    src={getPhoto()} 
                    alt={props.name.charAt(0).toUpperCase() + props.name.slice(1)} 
                />
                <div className="card-body bg-dark">
                    <div className="card-title h3">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
                    <a href={props.address} className="card-link">Profile</a>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem