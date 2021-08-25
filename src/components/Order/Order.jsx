import { BsTrash } from "react-icons/bs";
// import {useState, useEffect} from 'react';

function Order({ order }) {
  console.log(order);

  return (
    <>
      <tr>
        <td>
          <span
            className="  border-0 p-2"
            type="text"
            name="orderId"
            id={`${order.id}`}
            value={order.id}
          >
            {order.id}
          </span>
        </td>
        <td>
          <span
            className=" border-0 p-2"
            type="text"
            name="date"
            value={order.createdAt}
          >
            {order.createdAt}
          </span>
        </td>
        <td>
          <span
            className="  border-0 p-2"
            type="text"
            name="client"
            id={`${order.userId}`}
            value={order.userId}
          >
            {order.user.email}
          </span>
        </td>
        <td>
          <span
            className="  border-0 p-2"
            type="text"
            name="price"
            value={order.price}
          >
            {order.price}
          </span>
        </td>
        <td>
          <span
            className="  border-0 p-2"
            type="text"
            name="state"
            value={order.state}
          >
            {order.state}
          </span>
        </td>
        <td>
          <p>
            <BsTrash />
          </p>
        </td>
      </tr>
    </>
  );
}

export default Order;
