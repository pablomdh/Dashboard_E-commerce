import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PageUsers() {
  const accessKey = useSelector((state) => state.accessKey);
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}user`, {
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${process.env.REACT_APP_API}admin`, {
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then((response) => {
        setAdmins(response.data);
      })
      .catch((err) => console.log(err));
  });
  const handleDestroyUser = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}user`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        const newUsers = users.filter((item) => item.id !== id);

        setUsers(newUsers);
      })
      .catch((err) => console.log(err));
  };
  const handleDestroyAdmin = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}admin`, {
        data: { id },
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then(() => {
        const newUsers = users.filter((item) => item.id !== id);

        setUsers(newUsers);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h2>Estos son los admins!</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>
                <span>
                  {admin.firstname} {admin.lastname}
                </span>
              </td>
              <td>
                <span>{admin.email}</span>
              </td>
              <td>
                <div className="d-flex justify-content-between">
                  <span
                    onClick={() => {
                      handleDestroyAdmin(admin.id);
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
                </div>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
      <h2>Estos son los usuarios!</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <span>
                  {user.firstname} {user.lastname}
                </span>
              </td>
              <td>
                <span>{user.email}</span>
              </td>
              <td>
                <span>{user.addresses}</span>
              </td>
              <td>
                <span>{user.phonenumbers}</span>
              </td>
              <td>
                <div className="d-flex justify-content-between">
                  <span
                    onClick={() => {
                      handleDestroyUser(user.id);
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PageUsers;
