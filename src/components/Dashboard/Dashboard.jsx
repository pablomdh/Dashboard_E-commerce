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
    <div className="container">
      <main className="bg-light">
        <h1>Productos</h1>
        <table className="table">
          <tr>
            <th>Item</th>
            <th>Descripción</th>
            <th>Destacados</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
          {products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </table>
        <div className="d-flex justify-content-center">
          <Link to="/create-product" className="btn btn-success">
            Nuevo producto
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
