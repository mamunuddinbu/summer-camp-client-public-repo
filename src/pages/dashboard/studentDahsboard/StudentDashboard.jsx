import React from "react";
import { Route,  NavLink } from "react-router-dom";
import MySelectedClasses from "./MySelectedClasses";
import MyEnrolledClasses from "./MyEnrolledClasses";
import PaymentHistory from "./PaymentHistory";

const StudentDashboard = () => {
  return (
    <div>
      <h1 className="bg-green-400 p-10 text-center text-5xl">Student Dashboard</h1>
    
      <div className="grid grid-cols-3">
        <div className="bg-yellow-50, m-3"></div>
        <div className="bg-yellow-50, m-3"></div>
        <div className="bg-yellow-50, m-3"></div>
        <MySelectedClasses></MySelectedClasses>
        <MyEnrolledClasses></MyEnrolledClasses>
        <PaymentHistory></PaymentHistory>
      </div>
    </div>
  );
};

export default StudentDashboard;
