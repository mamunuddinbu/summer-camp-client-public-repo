import React, { useState } from "react";

const MyClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Yoga Class",
      status: "Pending",
      totalEnrolledStudents: 0,
      feedback: "",
    },
    {
      id: 2,
      name: "Pilates Class",
      status: "Approved",
      totalEnrolledStudents: 5,
      feedback: "",
    },
    {
      id: 3,
      name: "Zumba Class",
      status: "Denied",
      totalEnrolledStudents: 0,
      feedback: "Not enough space available.",
    },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Classes</h2>
      {classes.length === 0 ? (
        <p>No classes added.</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Total Enrolled Students</th>
              <th className="px-4 py-2">Feedback</th>
              <th className="px-4 py-2">Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td className="px-4 py-2">{classItem.name}</td>
                <td className="px-4 py-2">{classItem.status}</td>
                <td className="px-4 py-2">{classItem.totalEnrolledStudents}</td>
                <td className="px-4 py-2">{classItem.feedback}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyClasses;
