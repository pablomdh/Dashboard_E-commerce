import { React, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function PageLogIn() {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}admin/token`, {
        email,
        password,
      })
      .then((response) => {
        dispatch({ type: "LOGIN", payload: response.data });
        history.push("/");
      })
      .catch((error) => {
        history.push("/");
        console.log(error);
      });
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div
        className="
              d-flex
              flex-column
              justify-content-center
              align-items-center align-content-center
              px-lg-5
              py-4
            "
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="d-flex flex-column rounded border-dark border px-3 w-50"
        >
          <h3 className=" d-block text-center mt-2">Log In</h3>

          <label htmlFor="email" className="text-dark  my-3  ps-3 fs-8 fw-bold text-gray">
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="Ingrese su e-mail aquí"
            className="  px-3 py-2 w-100"
            required
          />
          <label htmlFor="password" className="text-dark  my-3  ps-3 fs-8 fw-bold">
            Contraseña
          </label>
          <div class="row d-flex text-align-center">
            <div className="col-10">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Ingrese su contraseña aquí"
                className="  px-3 py-2 w-100"
                value={password}
                required
              />
            </div>
            <div className="col-2" onClick={() => handleClickShowPassword()}>
              <span>{showPassword ? <Visibility /> : <VisibilityOff />}</span>
            </div>
          </div>
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
