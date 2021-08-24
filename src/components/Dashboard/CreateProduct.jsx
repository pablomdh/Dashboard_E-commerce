import { useState } from "react";
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
      <div className="container">
        <main className="bg-light">
          <h1>Ingresa Productos</h1>

          <form
            class="row g-3 mt-3"
            onSubmit={(ev) => {
              handleCreate(ev);
            }}
          >
            <table className="table">
              <tr>
                <th>name</th>
                <th>Descripción</th>
                <th>Destacados</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Foto</th>
              </tr>
              <tr>
                <td>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    // key={`${name}name`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="checkbox"
                    name="bestproduct"
                    id="bestproduct"
                    value={bestProduct}
                    checked={bestProduct}
                    onChange={(e) => setBestProduct(!bestProduct)}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="text"
                    name="stock"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="input"
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="form-control form-control-sm border-0"
                    type="file"
                    name="photo"
                    id="photo"
                    onChange={(event) => uploadFunction(event)}
                  />
                </td>
              </tr>
            </table>
          </form>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success my-4">Crear Producto</button>
          </div>
        </main>
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
