import { BsTrash } from "react-icons/bs";

function Order({ order }) {
  function sumPrice() {
    const precioTotal = order.products.reduce(
      (acc, product) => acc + product.Order_Product.qty * product.Order_Product.unitPrice,
      0
    );
    return precioTotal;
  }

  return (
    <>
      <tr>
        <td>
          <span className="  border-0 p-2">{order.id}</span>
        </td>
        <td>
          <span className=" border-0 p-2">{order.createdAt}</span>
        </td>
        <td>
          <span className="  border-0 p-2">{order.user && order.user.email}</span>
        </td>
        <td>
          <span className="  border-0 p-2">{sumPrice()}</span>
        </td>
        <td>
          <span className="  border-0 p-2">{order.state}</span>
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
