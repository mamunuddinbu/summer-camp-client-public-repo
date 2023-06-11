// import React from "react";
// import { useQuery, useMutation } from "react-query";
// import axios from "axios";

// const ManageUsers = () => {
//   const fetchUsers = async () => {
//     const { data } = await axios.get("http://localhost:5000/all-user");
//     console.log('sdfsafd');
//     return data;
//   };

//   const { data: users, isLoading, isError } = useQuery("users", fetchUsers);

//   const updateUserRole = async (userId, newRole) => {
//     await axios.patch(`http://localhost:5000/update-role/${userId}`, { role: newRole });
//   };

//   const makeInstructor = useMutation((userId) => updateUserRole(userId, "instructor"));
//   const makeAdmin = useMutation((userId) => updateUserRole(userId, "admin"));

//   if (isLoading) {
//     return <p>Loading users...</p>;
//   }

//   if (isError) {
//     return <p>Error fetching users</p>;
//   }

//   return (
//     <div>
//       <h2>Manage Users</h2>
//       {users.map((user) => (
//         <div key={user._id}>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//           <p>Role: {user.role}</p>
//           <div>
//             <button
//               onClick={() => makeInstructor.mutate(user._id)}
//               disabled={user.role === "instructor" || user.role === "admin"}
//             >
//               Make Instructor
//             </button>
//             <button
//               onClick={() => makeAdmin.mutate(user._id)}
//               disabled={user.role === "admin"}
//             >
//               Make Admin
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ManageUsers;
import axios from "axios";
import React, { useState, useEffect } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/all-user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleMakeAdmin = async (userId) => {
    try {
      console.log("inside admin");
      await axios.put(`http://localhost:5000/makeAdmin/${userId}`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: "admin" } : user
        )
      );
    } catch (error) {
      console.error("Error making user admin:", error);
    }
  };

  const handleMakeInstructor = async (userId) => {
    console.log("inside instructor");
    try {
      await axios.put(`http://localhost:5000/makeInstructor/${userId}`);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: "instructor" } : user
        )
      );
    } catch (error) {
      console.error("Error making user instructor:", error);
    }
  };

  console.log(users);
  
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

