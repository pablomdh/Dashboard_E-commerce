import { useEffect } from "react";
import Product from "../Product/Product";
import axios from "axios";  
import { useState } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/products`,
      });
      setProducts(response.data);
    }
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container p-4">
        <h1 className="mb-4">Productos</h1>
        <table className="table table-hover  table-striped border-1 ">
          <thead className="fs-5">
            <td>Item</td>
            <td>Descripción</td>
            <td>Destacados</td>
            <td>Stock</td>
            <td>Precio</td>
            <td>Foto</td>
            <td>Acciones</td>
          </thead>
          <tbody className="p-0">
            {products &&
              products.map((product) => (
                <Product
                  product={product}
                  setProducts={setProducts}
                  products={products}
                  key={product.id}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
