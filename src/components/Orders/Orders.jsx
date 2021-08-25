import { useEffect, useState } from "react";
import axios from "axios";
import Order from "../Order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/orders`,
      });
      setOrders(response.data);
    }
    getOrders();
    // eslint-disable-next-line
  }, []);
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
          {orders && orders.map((order) => <Order order={order} />)}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning my-4">Guardar Cambios</button>
      </div>
    </div>
  );
}

export default Orders;
