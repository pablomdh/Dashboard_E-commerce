import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

const DashboardCards = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-xl-4 col-lg-3  col-md-6 ">
            <Link to="/" className="nav-link " aria-current="page">
              <div
                className={`${styles.cardMenuDashboard} card shadow border-0`}
              >
                <div className="card-body d-flex  align-items-center justify-content-between">
                  <div>
                    <h5 className="fs-4">
                      Productos
                      <span className="text-white fs-6"> (stock)</span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column align-items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-menu-button-wide-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-3  col-md-6  ">
            <Link
              to="/create-product"
              className="nav-link active"
              aria-current="page"
            >
              <div
                className={`${styles.cardMenuAdd} w-100 card shadow border-0`}
              >
                <div className="card-body d-flex  align-items-center justify-content-between">
                  <div>
                    <h5 className="fs-2">
                      <span className="text-white fs-4"> Agregar Producto</span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column align-items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-3 col-md-6 ">
            <Link to="/orders" className="nav-link">
              <div className={`${styles.cardMenuOrders}  card shadow border-0`}>
                <div className="card-body d-flex  align-items-center justify-content-between">
                  <div>
                    <h5 className="fs-4">
                      Orders <span className="text-white fs-6"> (456) </span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-card-checklist"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-3  col-md-6  ">
            <Link
              to="/categories"
              className="nav-link active"
              aria-current="page"
            >
              <div
                className={`${styles.cardMenuCategory}  card shadow border-0`}
              >
                <div className="card-body d-flex  align-items-center justify-content-between">
                  <div>
                    <h5 className="fs-2">
                      <span className="text-white fs-4"> Categorias</span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column align-items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      class="bi bi-bookmark-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-3  col-md-6 ">
            <Link to="/graphs" className="nav-link">
              <div
                className={`${styles.cardMenuGraph} w-100  card shadow border-0`}
              >
                <div className="card-body d-flex  align-items-center justify-content-between">
                  <div>
                    <h5 className="fs-2">
                      <span className="text-white fs-4">Estadísticas </span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-bar-chart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-4 col-lg-3  col-md-6 ">
            <Link to="/users" className="nav-link">
              <div
                className={`${styles.cardMenuUsers} w-100  card shadow border-0`}
              >
                <div className="card-body d-flex  align-items-center justify-content-between">
                  <div>
                    <h5 className="fs-2">
                      <span className="text-white fs-4">Usuarios </span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      class="bi bi-people"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
