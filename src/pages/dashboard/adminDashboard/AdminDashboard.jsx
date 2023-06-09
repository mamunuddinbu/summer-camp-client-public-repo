import React from "react";
import ManageUsers from "./ManageUsers";
import ManageClasses from "./ManageClasses";
const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <ManageUsers></ManageUsers>
        <ManageClasses></ManageClasses>
      
    </div>
  );
};

export default AdminDashboard;
