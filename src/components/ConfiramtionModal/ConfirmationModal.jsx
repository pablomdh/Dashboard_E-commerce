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
  setCategories,
  categories,
  category,
}) {
  const location = useLocation();
  const accessKey = useSelector((state) => state.accessKey);
  const object = () => {
    if (location.pathname === "/users") {
      return "usuario";
    } else if (location.pathname === "/categories") {
      return "categoría";
    } else {
      return "producto";
    }
  };

  const handleDestroyCategory = (e) => {
    const id = category.id;
    e.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API}category`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        const newCategories = categories.filter((item) => item.id !== id);
        setCategories(newCategories);
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
        {object() === "/usuario" && (
          <Button onClick={(e) => handleDestroyUser(e)}>
            Eliminar {object()}
          </Button>
        )}
        {object() === "categoría" && (
          <Button onClick={(e) => handleDestroyCategory(e)}>
            Eliminar {object()}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
