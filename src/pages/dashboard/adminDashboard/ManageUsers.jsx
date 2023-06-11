import axios from "axios";
import React, { useState, useEffect } from "react";

const ManageUsers = () => {
  const refresh = () => window.location.reload(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/all-user");
    setUsers(response.data);
  };

  const handleMakeAdmin = async (userId) => {
    await axios.put(`http://localhost:5000/makeAdmin/${userId}`);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: "admin" } : user
      )
    );
    fetchUsers(); // Refetch the updated user data

    setUsers((prevUsers)=> prevUsers.filter((user)=>user._id !==userId))
    

    // const handleDelete = async (id) => {
    //   const confirmed = window.confirm('Are you sure you want to delete this toy?');
    //   if (!confirmed) return;
  
    //   const response = await fetch(`https://toy-server-rho.vercel.app/toys/${id}`, {
    //     method: 'DELETE',
    //   });
  
    //   if (response.ok) {
    //     setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
    //     alert('Toy deleted successfully');
    //   }
    // };
    
  };

  const handleMakeInstructor = async (userId) => {
    await axios.put(`http://localhost:5000/makeInstructor/${userId}`);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: "instructor" } : user
      )
    );
    fetchUsers(); // Refetch the updated user data
  };

  return (
    <div>
      {users.map((user, index) => (
        <div className="bg-green-200 m-4 p-4" key={user._id}>
          <div className="flex ">
            <p className="w-5">{index + 1}.</p>
            <p className="w-1/5">Name: {user.name}</p>
            <p className="w-1/4">{user.email}</p>
            <p className="w-1/5">Role: {user.role}</p>
          </div>

          <button
            className="bg-green-700 p-4 m-4 text-white"
            disabled={user.role === "admin"}
            onClick={() => handleMakeAdmin(user._id)}
          >
            Make Admin
          </button>
          <button
            className="bg-green-700 p-4 m-4 text-white"
            disabled={user.role === "instructor" || user.role === "admin"}
            onClick={() => handleMakeInstructor(user._id)}
          >
            Make Instructor
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageUsers;
