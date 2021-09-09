import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}products`,
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
        <div className="table-responsive">
          <table className="table table-hover  table-striped border-1 ">
            <thead className="fs-5">
              <tr>
                <td>Item</td>
                <td>Descripción</td>
                <td>Destacados</td>
                <td>Stock</td>
                <td>Precio</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody className="p-0">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  products={products}
                  setProducts={setProducts}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
