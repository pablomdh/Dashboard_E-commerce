import React from "react";
import Product from "../Product/Product";

function Dashboard() {
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
            <th>Eliminar</th>
          </tr>
          {/* map de productos rendering el componente */}
          <Product />
        </table>
      </main>
    </div>
  );
}

export default Dashboard;
