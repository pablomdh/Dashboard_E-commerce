import React from "react";

function PageSignUp() {
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
        <form className=" d-flex flex-column rounded border-dark border px-3 w-50">
          <h3 className="mb-3 d-block text-center">Sign up</h3>
          <label
            htmlFor="firstname"
            className="text-dark  mt-4  ps-3 fs-8 fw-bold text-gray"
          >
            Nombre
          </label>
          <input
            placeholder="Ingrese aquí su nombre  "
            type="text"
            name="firstname"
            id="firstname"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <label
            htmlFor="lastname-sp"
            className="text-dark  mt-4  ps-3 fs-8 fw-bold text-gray "
          >
            Apellidos
          </label>
          <input
            placeholder="Ingrese aquí sus apellidos "
            type="text"
            name="lastname"
            id="lastname"
            className="  px-3 py-2 w-100 border-0"
            required
          />

          <label
            htmlFor="email"
            className="text-dark  mt-4  ps-3 fs-8 fw-bold text-gray "
          >
            E-mail
          </label>
          <input
            placeholder="Ingrese aquí su e-mail "
            type="email"
            name="email"
            id="email"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <label
            htmlFor="address"
            className="text-dark  mt-4  ps-3 fs-8 fw-bold text-gray"
          >
            Dirección
          </label>
          <input
            placeholder="Ingrese aquí su dirección "
            type="address"
            name="address"
            id="address"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <label
            htmlFor="phoneNumber"
            className="text-dark  mt-4  ps-3 fs-8 fw-bold text-gray"
          >
            Teléfono
          </label>
          <input
            placeholder="Ingrese aquí su teléfono "
            type="phoneNumber"
            name="phoneNumber"
            id="phoneNumber"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <label
            htmlFor="password"
            className="text-dark  mt-4  ps-3 fs-8 fw-bold text-gray"
          >
            Contraseña
          </label>
          <input
            placeholder="Ingrese aquí su contraseña "
            type="password"
            name="password"
            id="password"
            className="  px-3 py-2 w-100 border-0"
            required
          />
          <button type="submit" className="btn btn-dark my-3">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default PageSignUp;
