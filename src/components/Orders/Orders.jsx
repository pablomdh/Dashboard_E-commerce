import React from "react";
import Order from "../Order/Order";

function Orders() {
  return (
    <div className="container p-4">
      <h1 className="mb-4">Órdenes</h1>
      <table className="table table-hover  table-striped border-1 ">
        <tr className="fs-5">
          <th>Número de Orden</th>
          <th>Fecha</th>
          <th>Cliente</th>
          <th>Precio Total</th>
          <th>Estado</th>
          <th>Eliminar</th>
        </tr>
        <tbody className="p-0">
          {/* map de productos rendering el componente */}
          <Order />
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning my-4">Guardar Cambios</button>
      </div>
    </div>
  );
}

export default Orders;
