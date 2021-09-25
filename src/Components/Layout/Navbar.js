import { useContext, useEffect } from "react";
import { PokemonContext } from "../Context/Context";

const Navbar = () => {
  const [pokemonList, getPokemonList, pokemon, getPokemon] = useContext(PokemonContext);

  const handleSubmit = e => {
    e.preventDefault()
    getPokemon(e.target.search.value.toLowerCase())
  }

  useEffect(() => {
    getPokemonList()
  }, [pokemon])

  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1 className="navbar-brand mb-0 px-3 h1">Pokedex</h1>
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
