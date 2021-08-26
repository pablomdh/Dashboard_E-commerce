import axios from "axios";
import { useEffect, useState } from "react";
import ProductTable from "../ProductTable/ProductTable";

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
            <td>Acciones</td>
          </thead>
          <tbody className="p-0">
            {products.map((product) => (
              <ProductTable
                key={product.id}
                product={product}
                setProducts={setProducts}
                products={products}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
