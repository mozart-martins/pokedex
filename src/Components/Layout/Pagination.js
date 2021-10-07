import { useContext } from "react"
import { PokemonContext } from "../Context/Context"
import { Link } from 'react-router-dom'

const Pagination = props => {

    const [pokemonList, getPokemonList, pokemon, getPokemon, page, hasMorePage] = useContext(PokemonContext)

    return (
        <nav aria-label="Paginação dos Pokemons">
            <ul className="pagination bg-danger text-dark justify-content-center pt-4">
                {(parseInt(props.page) - 2 >= 0) && <li className="page-item">
                    <Link to={`/page/${parseInt(props.page) - 2}`} className="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>}
                { (props.page-1 >= 0) && <li className="page-item">
                    <Link to={`/page/${props.page - 1}`} className="page-link">
                        {parseInt(props.page) - 1}
                    </Link>
                </li>}
                <li className="page-item">
                    <Link to={`/page/${props.page}`} className="page-link">
                        {props.page}
                    </Link>
                </li>
                { hasMorePage(parseInt(props.page) + 1) && <li className="page-item">
                    <Link to={`/page/${parseInt(props.page) + 1}`} className="page-link">
                        {parseInt(props.page) + 1}
                    </Link>
                </li>}
                { hasMorePage(parseInt(props.page) + 2) && <li className="page-item">
                    <Link to={`/page/${parseInt(props.page) + 2}`} className="page-link">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>}
            </ul>
        </nav>
    )
}

export default Pagination