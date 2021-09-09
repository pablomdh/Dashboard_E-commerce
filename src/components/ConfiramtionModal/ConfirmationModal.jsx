import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

function ConfirmationModal({
  onHide,
  show,
  user,
  users,
  setUsers,
  setLoading,
  element,
  product,
  products,
  setProducts,
}) {
  const location = useLocation();
  const accessKey = useSelector((state) => state.accessKey);

  const handleDestroyProduct = (e) => {
    e.preventDefault();
    const id = product.id;
    axios
      .delete(`${process.env.REACT_APP_API}products`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleDestroyUser = (e) => {
    const id = user.id;
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API}user`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        const newUsers = users.filter((item) => item.id !== id);

        setUsers(newUsers);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header>
        <Modal.Title
          className="fw-bolder text-danger"
          id="contained-modal-title-vcenter"
        >
          ¡ATENCION!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Se eliminara permanentemente a {element}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            setLoading(false);
            onHide();
          }}
        >
          Cancelar
        </Button>
        {location.pathname === "/products" ? (
          <Button onClick={(e) => handleDestroyProduct(e)}>
            Eliminar producto
          </Button>
        ) : (
          <Button onClick={(e) => handleDestroyUser(e)}>
            Eliminar usuario
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
