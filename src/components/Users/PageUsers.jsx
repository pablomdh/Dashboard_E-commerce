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
      .get(`http://localhost:3000/user`, {
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://localhost:3000/admin`, {
        headers: { Authorization: `Bearer ${accessKey.accesToken}` },
      })
      .then((response) => {
        setAdmins(response.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="container">
      <h1>Estos son los admins!</h1>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
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
                <span>{admin.addresses}</span>
              </td>
              <td>
                <span>{admin.phonenumbers}</span>
              </td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
      <h2>Estos son los usuarios!</h2>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          <td>Phone number</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PageUsers;
