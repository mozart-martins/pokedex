import { useContext } from "react"
import { PokemonContext } from "../Context/Context"

const Pagination = () => {

    const [getQtdPokemon, page, setPage] = useContext(PokemonContext)

    return (
        <nav aria-label="Paginação dos Pokemons">
            <ul className="pagination bg-danger text-dark justify-content-center pt-4">
                <li className="page-item">
                    <a href="#" className="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination