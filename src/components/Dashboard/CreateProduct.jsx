import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import slugify from "slugify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "@supabase/supabase-js";

const CreateProduct = () => {
  const accessKey = useSelector((state) => state.accessKey);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bestProduct, setBestProduct] = useState(false);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");

  async function uploadFunction(ev) {
    const supabase = createClient(
      "https://unyvfpzstnadbdhkxhbb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI5NzI2ODc3LCJleHAiOjE5NDUzMDI4Nzd9.OVxPQwXN-5qMGGCT8Pk49MuPEflhzb83MYejJppCbag"
    );
    const imagen = ev.target.files[0];
    const { data, error } = await supabase.storage
      .from("papos.photos")
      .upload(`images/${imagen.name}`, imagen, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(data);
    console.log(error);
  }

  const handleCreate = async (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    const data = new FormData(ev.target);
    await axios({
      method: "post",
      url: `http://localhost:3000/products`,
      data,
      headers: {
        Authorization: `Bearer ${accessKey.accesToken}`,
      },
    });

    setName("");
    setDescription("");
    setBestProduct(false);
    setStock(0);
    setPrice(0);
    toast("🦄 El producto fue creado correctamente!", {
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
        <h1 className="mb-4">Ingresa Productos</h1>

        {/* new form  */}
        <div className="container w-80">
          <form
            onSubmit={(ev) => {
              handleCreate(ev);
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                // key={`${name}name`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripcion
              </label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="bestproduct"
                id="bestproduct"
                value={bestProduct}
                checked={bestProduct}
                onChange={(e) => setBestProduct(!bestProduct)}
              />
              <label className="form-check-label" htmlFor="bestproduct">
                Destacado
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                name="stock"
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Foto
              </label>
              <input
                type="file"
                className="form-control"
                name="photo"
                id="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                Elige tu foto en formato (500x500)
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Crear producto
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

export default CreateProduct;
