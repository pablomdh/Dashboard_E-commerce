import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";

const CreateProduct = () => {
  const user = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bestProduct, setBestProduct] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const handleCreate = async (ev) => {
    const response = await axios({
      method: "post",
      url: `http://localhost:3000/products`,
      data: {
        name: name,
        description: description,
        photo: photo,
        stock: stock,
        bestproduct: bestProduct,
        slug: slugify(name.toLowerCase(), { replacement: "-" }),
        price: price,
      },
      // headers:{
      //   Authorization: `Bearer ${user.token}`
      // }
    });

    setName("");
    setDescription("");
    setBestProduct("");
    setStock("");
    setPrice("");
    setPhoto("");
  };

  return (
    <>
      <div className="container">
        <main className="bg-light">
          <h1>Ingresa Productos</h1>
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
                  id={`${name}name`}
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
                  id={`${name}description`}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input"
                  type="checkbox"
                  name="bestproduct"
                  id={`${name}bestproduct`}
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
                  id={`${name}stock`}
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input"
                  type="text"
                  name="price"
                  id={`${name}price`}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="input"
                  type="text"
                  name="photo"
                  id={`${name}photo`}
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </td>
            </tr>
          </table>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success my-4"
              onClick={(ev) => {
                handleCreate(ev);
              }}
            >
              Crear Producto
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateProduct;
