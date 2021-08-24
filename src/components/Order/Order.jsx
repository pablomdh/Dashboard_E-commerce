import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Order() {
  const [orderId, setOrderId] = useState(123);
  const [date, setDate] = useState("05/05/2020");
  const [client, setClient] = useState("User1");
  const [price, setPrice] = useState(1000);
  const [state, setState] = useState("Sin Pagar");

  return (
    <>
      <tr>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="orderId"
              id={`${orderId}`}
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="date"
              id={`${orderId}date`}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="client"
              id={`${orderId}client`}
              value={client}
              checked={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="price"
              id={`${orderId}price`}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="input-group ">
            <input
              className=" form-control border-0 p-2"
              type="text"
              name="state"
              id={`${orderId}state`}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
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
