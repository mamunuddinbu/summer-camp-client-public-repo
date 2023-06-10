import React, { useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Yoga Class",
      image: "yoga.jpg",
      instructorName: "John Doe",
      instructorEmail: "john@example.com",
      availableSeats: 10,
      price: 20,
      status: "Pending",
    },
    // Add more class objects here
  ]);

  const approveClass = (classId) => {
    setClasses((prevClasses) =>
      prevClasses.map((classItem) => {
        if (classItem.id === classId) {
          return { ...classItem, status: "Approved" };
        }
        return classItem;
      })
    );
  };

  const denyClass = (classId) => {
    setClasses((prevClasses) =>
      prevClasses.map((classItem) => {
        if (classItem.id === classId) {
          return { ...classItem, status: "Denied" };
        }
        return classItem;
      })
    );
  };

  const sendFeedback = (classId, feedback) => {
    // Send feedback to the instructor
    console.log(`Sending feedback for class ${classId}: ${feedback}`);
  };

  return (
    <div className="container mx-auto p-4 bg-red-200 my-10">
      <h2 className="text-xl font-bold mb-4">Manage Classes</h2>
      {classes.length === 0 ? (
        <p className="bg-red-500">No classes found.</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Class Image</th>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Instructor Name</th>
              <th className="px-4 py-2">Instructor Email</th>
              <th className="px-4 py-2">Available Seats</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td className="px-4 py-2">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{classItem.name}</td>
                <td className="px-4 py-2">{classItem.instructorName}</td>
                <td className="px-4 py-2">{classItem.instructorEmail}</td>
                <td className="px-4 py-2">{classItem.availableSeats}</td>
                <td className="px-4 py-2">{classItem.price}</td>
                <td className="px-4 py-2">{classItem.status}</td>
                <td className="px-4 py-2">
                  {classItem.status === "Pending" && (
                    <div className="py-8 ">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => approveClass(classItem.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                        onClick={() => denyClass(classItem.id)}
                      >
                        Deny
                      </button>
                    </div>
                  )}
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                    onClick={() => {
                      // Open modal to send feedback
                    }}
                  >
                    Send Feedback
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

export default ManageClasses;
