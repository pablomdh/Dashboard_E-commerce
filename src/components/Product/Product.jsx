import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Product() {
  const [item, setItem] = useState("Championes");
  const [description, setDescription] = useState("Adidas Negros");
  const [bestProduct, setBestProduct] = useState(true);
  const [stock, setStock] = useState(10);
  const [price, setPrice] = useState(100);
  const [photo, setPhoto] = useState("championes.jpg");

  return (
    <>
      <tr>
        <td>
          <input
            className="input"
            type="text"
            name="item"
            id={`${item}name`}
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
            onChange={(e) => setBestProduct(e.target.value)}
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
