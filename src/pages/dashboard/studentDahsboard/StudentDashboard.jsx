import React from "react";
import MySelectedClasses from "./MySelectedClasses";
import MyEnrolledClasses from "./MyEnrolledClasses";
import PaymentHistory from "./PaymentHistory";

const StudentDashboard = () => {
  return (
    <div>
      <h1 className="bg-green-400 p-10 text-center text-5xl">Student Dashboard</h1>
    
      <div className="">
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
