import React from "react";

function PageLogIn() {
  
  return (
    <div className="container">
      <div
        className="
              d-flex
              flex-column
              justify-content-center
              align-items-center align-content-center
              vh-100
              px-lg-5
            "
      >
        <form className="d-flex flex-column rounded border-dark border px-3 w-50">
          <h3 className=" d-block text-center mt-2">Log In</h3>

          <label
            htmlFor="email"
            className="text-dark  my-3  ps-3 fs-8 fw-bold text-gray"
          >
            E-mail
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Ingrese su e-mail aquí"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <label
            htmlFor="password"
            className="text-dark  my-3  ps-3 fs-8 fw-bold"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Ingrese su contraseña aquí"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <button type="submit" className="btn btn-dark mt-3">
            Ingresar
          </button>
          <a className="text-dark mb-3 mt-2" href="...">
            Olivde mi contraseña.
          </a>
        </form>
      </div>
    </div>
  );
}

export default PageLogIn;
