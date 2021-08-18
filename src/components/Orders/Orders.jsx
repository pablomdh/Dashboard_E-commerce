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
        <div className="d-flex justify-content-center">
          <button className="btn btn-warning my-4">Guardar Cambios</button>
        </div>
      </main>
    </div>
  );
}

export default Orders;
