import { BsTrash } from "react-icons/bs";
import moment from "moment";

function Order({ order }) {
  function sumPrice() {
    const precioTotal = order.products.reduce(
      (acc, product) =>
        acc + product.Order_Product.qty * product.Order_Product.unitPrice,
      0
    );
    return precioTotal;
  }

  return (
    <>
      <tr>
        <td className="border-0 p-2">{order.id}</td>
        <td className=" border-0 p-2">
          {moment(order.createdAt).subtract(12, "days").calendar()}
        </td>
        <td className="border-0 p-2">{order.user && order.user.email}</td>
        <td className="border-0 p-2">{sumPrice()}</td>
        <td className="border-0 p-2">{order.state}</td>
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
