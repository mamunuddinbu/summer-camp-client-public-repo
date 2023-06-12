import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/classes");
        setClasses(response.data);
      } catch (error) {
        console.error("Failed to fetch classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const handleApprove = async (classId) => {
    try {
      await axios.put(`http://localhost:5000/approveClass/${classId}`);
      setClasses((prevClasses) =>
        prevClasses.map((cls) =>
          cls._id === classId ? { ...cls, status: "approved" } : cls
        )
      );
    } catch (error) {
      console.error("Failed to approve class:", error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.put(`http://localhost:5000/denyClass/${classId}`);
      setClasses((prevClasses) =>
        prevClasses.map((cls) =>
          cls._id === classId ? { ...cls, status: "denied" } : cls
        )
      );
    } catch (error) {
      console.error("Failed to deny class:", error);
    }
  };

  const handleSendFeedback = (classId) => {
    // Open the modal and handle sending feedback to the instructor
  };

  return (
    <div>
      <h1 className="text-center text-5xl p-5 m-8">
        <u>Manage Classes</u>
      </h1>
      {classes.map((cls) => (
        <div key={cls._id} className="bg-green-200 m-4 p-4">
          <div className="flex">
            <img src={cls.image} alt="Class Image" className="w-1/4" />
            <div className="ml-4">
              <p className="font-bold">Class Name: {cls.name}</p>
              <p>Instructor Name: {cls.instructorName}</p>
              <p>Instructor Email: {cls.instructorEmail}</p>
              <p>Available Seats: {cls.availableSeats}</p>
              <p>Price: {cls.price}</p>
              <p>Status: {cls.status}</p>
            </div>
          </div>
          <div className="flex mt-4">
            <button
              className="btn bg-green-700 p-4 m-4 text-white"
              disabled={cls.status !== "pending"}
              onClick={() => handleApprove(cls._id)}
            >
              Approve
            </button>
            <button
              className="btn bg-red-700 p-4 m-4 text-white"
              disabled={cls.status !== "pending"}
              onClick={() => handleDeny(cls._id)}
            >
              Deny
            </button>
            <button
              className="btn bg-blue-700 p-4 m-4 text-white"
              onClick={() => handleSendFeedback(cls._id)}
            >
              Send Feedback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageClasses;
