import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className={`${styles.sideBar}`}>
        <a className="navbar-brand" href="...">
          LOGO
        </a>
        <div className="d-flex  flex-column justify-content-around h-100">
          <div>
            <Link to="/" className="active">
              Dashboard
            </Link>
            <Link to="/">Productos</Link>
            <Link to="/create-product">+ Producto</Link>
            <Link to="/categories">+ Categorias</Link>
            <Link to="/users">Usuarios</Link>
            <Link to="/orders">Ordenes</Link>
            <Link to="/graphs">Estadísticas</Link>
          </div>

          <div>
            <a href="#about">Login</a>
            <a href="#about">Logout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
