import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const SendFeedbackModal = ({ classId, onClose }) => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSendFeedback = async () => {
    try {
      await axios.post("http://localhost:5000/classes/feedback", {
        classId,
        feedback,
      });
      onClose();
      // Show success message or perform any other action
    } catch (error) {
      console.error("Failed to send feedback:", error);
      // Show error message or perform any other action
    }
  };

  return (
    <div>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Enter your feedback"
      />
      <button onClick={handleSendFeedback}>Send Feedback</button>
    </div>
  );
};

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState("");

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
    setSelectedClassId(classId);
    setShowFeedbackModal(true);
  };

  const handleCloseFeedbackModal = () => {
    setShowFeedbackModal(false);
    setSelectedClassId("");
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
              <p>Class Name: {cls.name}</p>
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

      {showFeedbackModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8">
            <h2 className="text-xl mb-4">Send Feedback</h2>
            <SendFeedbackModal
              classId={selectedClassId}
              onClose={handleCloseFeedbackModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
