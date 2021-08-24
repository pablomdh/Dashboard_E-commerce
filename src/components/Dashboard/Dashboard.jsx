import { useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard() {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/products`,
      });
      console.log(response.data);
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data,
      });
    }
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container p-4">
        <h1 className="mb-4">Productos</h1>
        <table className="table table-hover  table-striped border-1 ">
          <tr className="fs-5">
            <th>Item</th>
            <th>Descripción</th>
            <th>Destacados</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
          <tbody className="p-0">
            {products.map((product) => (
              <Product product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
