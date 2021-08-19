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
      <tr>
        <td>
          <input
            className="input"
            type="text"
            name="item"
            id={`${item}name`}
            key={`${item}name`}
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="description"
            id={`${item}description`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="checkbox"
            name="bestproduct"
            id={`${item}bestproduct`}
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
            id={`${item}stock`}
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="price"
            id={`${item}price`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </td>
        <td>
          <input
            className="input"
            type="text"
            name="photo"
            id={`${item}photo`}
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </td>
        <td>
          <p>
            <BsTrash />
          </p>
        </td>
      </tr>
    </>
  );
}

export default Product;
