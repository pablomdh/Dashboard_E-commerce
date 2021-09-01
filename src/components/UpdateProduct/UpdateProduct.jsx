import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./UpdateProduct.module.css";

const UpdateProduct = () => {
  const { slug } = useParams();
  const accessKey = useSelector((state) => state.accessKey);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bestProduct, setBestProduct] = useState(false);
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get(`${process.env.REACT_APP_API}products/${slug}`)
        .then((response) => {
          setId(response.data.id);
          setName(response.data.name);
          setDescription(response.data.description);
          setBestProduct(response.data.bestproduct);
          setStock(response.data.stock);
          setPrice(response.data.price);
          setPhoto(response.data.photo);
          setCategoryId(response.data.categoryId);
        })
        .catch((err) => console.log(err));
    };
    getProduct();
  }, [slug]);

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}category`,
      });
      setCategories(response.data);
    }
    getCategories();
    // eslint-disable-next-line
  }, []);

  const handleUpdate = async (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.target);
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API}products`,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessKey.accesToken}`,
      },
    });
    toast("🦄 El producto fue actualizado correctamente!", {
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
                required
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
                required
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
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Categoría
              </label>
              <select
                name="categoryId"
                id="categoryId"
                value={categoryId}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
              >
                {categories.map((category) => (
                  <option
                    value={category.id}
                    selected={categoryId === category.id && true}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
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
                aria-describedby="emailHelp"
              />
              {/* <img id="blah" alt="your image" src={newPhoto} /> */}
              <img
                className={styles.cartImg}
                src={`${process.env.REACT_APP_SUPABASE_BUCKET}${photo}`}
                alt={name}
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Elige tu foto en formato (500x500)
              </div>
            </div>

            <button type="submit" className="btn btn-success me-2">
              Guardar cambios
            </button>
            <Link to="/products" className="btn btn-warning">
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

export default UpdateProduct;
