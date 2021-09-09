import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmationDeleteModal from "./ConfirmationDeleteModal";

function CategoriesCard({ category, setCategories, categories }) {
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <tr key={category.id}>
      <td>
        <input name="id" value={category.id} hidden readOnly />
        <span>{category.name}</span>
      </td>
      <td colSpan="2">
        <div className="d-flex justify-content-between">
          <Link to={`/category/${category.slug}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </Link>
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
          <ConfirmationDeleteModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setLoading={setLoading}
            element={category.name}
            categories={categories}
            category={category}
            setCategories={setCategories}
          />
        </div>
      </td>
    </tr>
  );
}

export default CategoriesCard;
