import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const Navbar = () => {
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
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed sticky-top w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="...">
            PAPOS Inc.
          </a>

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
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div>
        <div
          className="offcanvas offcanvas-start bg-dark text-white"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Menu de Administrador
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {accessKey ? (
              <p style={{ cursor: "pointer" }} onClick={(e) => handleLogOut(e)}>
                Log out
              </p>
            ) : (
              <p style={{ cursor: "pointer" }} onClick={history.push("/login")}>
                Log in
              </p>
            )}

            <p>Sobre nosotros</p>
            <p>Perfil</p>
            <p>More</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
