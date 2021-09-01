import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const SideBar = () => {
  const accessKey = useSelector((state) => state.accessKey);
  const dispatch = useDispatch();
  const history = useHistory();
  function handleLogOut(e) {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
    });
    history.push("/login");
  }

  return (
    <div className={`${styles.sideBar}`}>
      <div className="d-flex  flex-column justify-content-between h-100 ">
        <div>
          <div className="d-flex justify-content-between">
            <div className="navbar-brand" to="/">
              LOGO
            </div>
            <div
              className="btn "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
          </div>
          <Link to="/" className="active">
            Dashboard
          </Link>
          <Link to="/products">Productos</Link>
          <Link to="/create-product">+ Producto</Link>
          <Link to="/categories">Categorias</Link>
          <Link to="/create-category">+ Categorias</Link>
          <Link to="/users">Usuarios</Link>
          <Link to="/orders">Ordenes</Link>
          <Link to="/graphs">Estadísticas</Link>
        </div>
        <div className="mb-3">
          {accessKey ? (
            <Link
              style={{ cursor: "pointer", color: "white" }}
              onClick={(e) => handleLogOut(e)}
            >
              Log out
            </Link>
          ) : (
            <Link
              style={{ cursor: "pointer", color: "white" }}
              onClick={history.push("/login")}
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
