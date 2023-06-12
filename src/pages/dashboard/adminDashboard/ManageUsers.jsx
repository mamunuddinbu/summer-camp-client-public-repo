import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [refetch, setRefetch] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [refetch]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/all-user");
    setUsers(response.data);
  };

  const handleMakeAdmin = async (userId) => {
    await axios.put(`http://localhost:5000/makeAdmin/${userId}`);
    setRefetch(new Date().getTime());
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Admin Successfully Crated',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handleMakeInstructor = async (userId) => {
    await axios.put(`http://localhost:5000/makeInstructor/${userId}`);
    setRefetch(new Date().getTime());
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Instructor Successfully Crated',
      showConfirmButton: false,
      timer: 1500
    })
  
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Email</th>
              <th className="table-header">Role</th>
              <th className="table-header">Make Admin</th>
              <th className="table-header">Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    disabled={user.role === "admin"}
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    disabled={user.role === "instructor" || user.role === "admin"}
                    onClick={() => handleMakeInstructor(user._id)}
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
