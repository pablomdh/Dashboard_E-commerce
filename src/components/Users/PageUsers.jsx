import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminCard from "./AdminCard";
import UserCard from "./UserCard";

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
  }, []);

  return (
    <div className="container">
      <h2>Estos son los admins!</h2>
      <div className="table-responsive">
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
              <AdminCard
                key={admin.id}
                admin={admin}
                admins={admins}
                setAdmins={setAdmins}
              />
            ))}
          </tbody>
        </table>
      </div>
      <h2>Estos son los usuarios!</h2>
      <div className="table-responsive">
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
              <UserCard
                key={user.id}
                user={user}
                users={users}
                setUsers={setUsers}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PageUsers;
