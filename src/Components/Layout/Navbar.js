import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../Context/Context";

const Navbar = () => {
  const [pokemonList, getPokemonList, pokemon, getPokemon] = useContext(PokemonContext);

  const handleSubmit = e => {
    e.preventDefault()
    getPokemon(e.target.search.value.toLowerCase())
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1 className="navbar-brand mb-0 px-3 h1">Pokedex</h1>
      <ul className="navbar-nav me-auto h5">
        <li className="nav-item">
          <Link exact to="/" className="nav-link">Home</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          name="search"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-light me-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
