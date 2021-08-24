import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Product({ product }) {
  const dispatch = useDispatch();
  const accessKey = useSelector((state) => state.accessKey);

  const [item, setItem] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [bestProduct, setBestProduct] = useState(product.bestProduct);
  const [stock, setStock] = useState(product.stock);
  const [price, setPrice] = useState(product.price);
  const [photo, setPhoto] = useState(product.photo);

  const handleDestroy = (id) => {
    axios
      .delete(`http://localhost:3000/products`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: id,
        });
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <tr>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className="form-control border-0 p-2"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className="input-group form-check-input p-3 border-0"
              type="checkbox"
              name="bestproduct"
              value={bestProduct}
              checked={bestProduct}
              onChange={(e) => setBestProduct(!bestProduct)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group">
            <input
              className=" form-control border-0 p-2 "
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="d-flex justify-content-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
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
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Product;
