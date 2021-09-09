import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

function ConfirmationDeleteModal({
  onHide,
  show,
  setLoading,
  element,
  setCategories,
  categories,
  category,
}) {
  const accessKey = useSelector((state) => state.accessKey);
  const handleDestroyCategory = (e) => {
    const id = category.id;
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}category/empty`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then((response) => {
        console.log(response.data.length);
        if (response.data.length === 0) {
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
        } else {
          alert(
            "Esta categoría no se puede eliminar porque hay productos relacionados a ella."
          );
        }
      });
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

        <Button onClick={(e) => handleDestroyCategory(e)}>
          Eliminar categoría
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationDeleteModal;
