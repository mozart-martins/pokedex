import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const Navbar = () => {
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    let value
    try {
      value = e.target.search.value.toLowerCase()
      history.push(`/detail/${value}`)
    }
    catch (e) {
      alert(`Erro: ${e}`);
    }
  }

  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0 px-3 h1">Pokedex</h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#barraComprimida" aria-controls="barraComprimida" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="barraComprimida">  
          <div className="navbar-nav me-auto h5 d-flex">
            <Link exact to="/page/0" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">About</Link>
          </div>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
