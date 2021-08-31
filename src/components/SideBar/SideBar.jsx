import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={`${styles.sideBar}`}>
        <a className="navbar-brand" href="...">
          LOGO
        </a>
        <div className="d-flex  flex-column justify-content-around h-100">
          <div>
            <a className="active" href="#home">
              Inicio
            </a>
            <a href="#news">Productos</a>
            <a href="#contact">+ Producto</a>
            <a href="#contact">+ Categoria</a>
            <a href="#contact">Usuarios</a>
            <a href="#contact">Ordenes</a>
            <a href="#about">Estadisticas</a>
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
