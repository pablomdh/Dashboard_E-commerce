import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item me-1 ms-1">
                <Link to="/" className="nav-link active" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item me-1 ms-1">
                <Link to="/tienda" className="nav-link">
                  Tienda
                </Link>
              </li>
              <li className="nav-item me-1 ms-1">
                <Link to="categorias" className="nav-link">
                  Categorías
                </Link>
              </li>
              <li className="nav-item me-1 ms-1">
                <Link
                  to="sobre-nosotros"
                  className="nav-link"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Sobre el proyecto
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item me-1 ms-1">
                <Link to="/login" className="nav-link">
                  Login
                </Link>{" "}
              </li>
              <li className="nav-item me-1 ms-1">
                <Link to="registro" className="nav-link">
                  Registro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
