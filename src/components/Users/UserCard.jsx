import { useState } from "react";
import ConfirmationModal from "../ConfiramtionModal/ConfirmationModal";
function UserCard({ user, setUsers, users }) {
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <tr key={user.id}>
        <td>
          {user.firstname} {user.lastname}
        </td>
        <td>{user.email}</td>
        <td>{user.addresses}</td>
        <td>{user.phonenumbers}</td>
        <td>
          <div className="d-flex justify-content-between">
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <span
                onClick={(e) => {
                  setModalShow(true);
                  setLoading(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            )}
            <ConfirmationModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              setUsers={setUsers}
              users={users}
              user={user}
              setLoading={setLoading}
              element={`${user.firstname} ${user.lastname}`}
              products={null}
              setProducts={null}
              product={null}
            />
          </div>
        </td>
      </tr>
    </>
  );
}

export default UserCard;
