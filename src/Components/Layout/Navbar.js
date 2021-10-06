import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const Navbar = () => {
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const value = e.target.search.value.toLowerCase()
    history.push(`/detail/${value}`)
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
