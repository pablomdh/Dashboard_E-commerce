import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Order from "../Order/Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const accessKey = useSelector((state) => state.accessKey);

  useEffect(() => {
    async function getOrders() {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}orders`,
        headers: {
          Authorization: `Bearer ${accessKey.accesToken}`,
        },
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
        <thead>
          <tr className="fs-5">
            <th>Número de Orden</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Precio Total</th>
            <th>Estado</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="p-0">
          {orders && orders.map((order) => <Order order={order} key={order.id} />)}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning my-4">Guardar Cambios</button>
      </div>
    </div>
  );
}

export default Orders;
