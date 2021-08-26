import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductTable({ product, setProducts, products }) {
  const accessKey = useSelector((state) => state.accessKey);
  const [bestProduct, setBestProduct] = useState(product.bestproduct);

  const handleDestroy = (id) => {
    axios
      .delete(`http://localhost:3000/products`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
      })
      .catch((err) => console.log(err));
  };

  const updateBestProduct = async (id, bestProduct) => {
    const data = { id, bestProduct };
    await axios({
      method: "patch",
      url: `http://localhost:3000/products/bestproduct`,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessKey.accesToken}`,
      },
    });
    console.log("pasa");
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
      <tr>
        <td>
          <input name="id" value={product.id} hidden />
          <span>{product.name}</span>
        </td>
        <td>
          <span>{product.description}</span>
        </td>
        <td>
          <div className="input-group ">
            <input
              className="input-group form-check-input p-3 border-0"
              type="checkbox"
              name="bestproduct"
              value={bestProduct}
              checked={bestProduct}
              onChange={(e) => {
                setBestProduct(!bestProduct);
                console.log(bestProduct);
                updateBestProduct(product.id, bestProduct);
              }}
            />
          </div>
        </td>
        <td>
          <span>{product.stock}</span>
        </td>
        <td>
          <span>{product.price}</span>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            <Link to={`/${product.slug}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </Link>
            <span
              onClick={() => {
                handleDestroy(product.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
        </td>
      </tr>
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
}

export default ProductTable;
