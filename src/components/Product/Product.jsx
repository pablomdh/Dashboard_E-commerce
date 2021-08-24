import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Product({ product }) {
  const [item, setItem] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [bestProduct, setBestProduct] = useState(product.bestProduct);
  const [stock, setStock] = useState(product.stock);
  const [price, setPrice] = useState(product.price);
  const [photo, setPhoto] = useState(product.photo);

  return (
    <>
      <form method="POST" class="row g-3 mt-3" enctype="multipart/form-data"></form>
      <tr>
        <td>
          <input
            className="input"
            type="text"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="checkbox"
            name="bestproduct"
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
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </td>
        <td>
          <p>
            Modificar
            <BsTrash />
          </p>
        </td>
      </tr>
    </>
  );
}

export default Product;
