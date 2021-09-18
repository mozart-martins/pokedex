const pokemonStyle = {
    "width": "18rem"
}

const Pokemon = props => {
    return (
        <div className="card bg-danger text-white" style={pokemonStyle}>
            <div className="card-title">{props.name}</div>
            <div className="card-text"> ??? </div>
        </div>
    )
}

export default Pokemon