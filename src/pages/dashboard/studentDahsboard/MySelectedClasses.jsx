import React, { useState } from "react";

const MySelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleDelete = (classId) => {
    setSelectedClasses((prevClasses) =>
      prevClasses.filter((classItem) => classItem.id !== classId)
    );
  };

  return (
    <div className="bg-yellow-50 m-3">
      <h2 className="bg-green-300 text-3xl p-3">My Selected Classes</h2>
      {selectedClasses.length === 0 ? (
        <p>No classes selected.</p>
      ) : (
        <ul>
          {selectedClasses.map((classItem) => (
            <li key={classItem.id}>
              <p>Class Name: {classItem.name}</p>
              <p>Class Description: {classItem.description}</p>
              <button onClick={() => handleDelete(classItem.id)}>
                Delete
              </button>
              <button>Pay</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MySelectedClasses;
