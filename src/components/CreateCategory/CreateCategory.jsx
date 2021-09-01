import { useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCategory = () => {
  const accessKey = useSelector((state) => state.accessKey);
  const [name, setName] = useState("");
  // const [photo, setPhoto] = useState("");

  const handleCreate = async (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.target);

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API}category`,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessKey.accesToken}`,
      },
    });

    setName("");
    toast("🦄 La categoría fue creado correctamente!", {
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
              handleCreate(ev);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
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
              Crear categoría
            </button>
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

export default CreateCategory;
