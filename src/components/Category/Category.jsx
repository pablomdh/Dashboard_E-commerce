import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Category = () => {
  const { slug } = useParams();
  const accessKey = useSelector((state) => state.accessKey);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const getProduct = () => {
      axios
        .get(`${process.env.REACT_APP_API}category/${slug}`)
        .then((response) => {
          setId(response.data.id);
          setName(response.data.name);
        })
        .catch((err) => console.log(err));
    };
    getProduct();
  }, [slug]);

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.target);
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API}category`,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessKey.accesToken}`,
      },
    });
    toast("🦄 La categoría fue actualizada correctamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="container p-4">
        <h1 className="mb-4">Ingresa Categoría</h1>
        <div className="container w-80">
          <form
            onSubmit={(ev) => {
              handleUpdate(ev);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input name="id" value={id} hidden />
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Guardar cambios
            </button>
            <Link to="/categories" className="btn btn-warning">
              Volver
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Category;
