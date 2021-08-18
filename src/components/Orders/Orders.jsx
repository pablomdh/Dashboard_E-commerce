import React from "react";
import Order from "../Order/Order";

function Orders() {
  return (
    <div className="container">
      <main className="bg-light">
        <h1>Órdenes</h1>
        <table className="table">
          <tr>
            <th>Número de Órden</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Precio Total</th>
            <th>Estado</th>
            <th>Eliminar</th>
          </tr>
          {/* map de productos rendering el componente */}
          <Order />
        </table>
      </main>
    </div>
  );
}

export default Orders;
