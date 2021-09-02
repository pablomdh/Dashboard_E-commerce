import axios from "axios";
import { useState } from "react";

import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BestProductButton({ product }) {
  const accessKey = useSelector((state) => state.accessKey);
  const [bestProduct, setBestProduct] = useState(product.bestproduct);

  const updateBestProduct = async (id, bestProduct) => {
    const data = { id, bestProduct };
    await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API}products/bestproduct`,
      data,
      headers: {
        Authorization: `Bearer ${accessKey.accesToken}`,
      },
    });
    toast("🦄 El producto fue actualizado correctamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          name="bestproduct"
          value={bestProduct}
          checked={bestProduct}
          onChange={(e) => {
            updateBestProduct(product.id, !bestProduct);
            setBestProduct(!bestProduct);
          }}
        />
      </div>
    </>
  );
}

export default BestProductButton;
