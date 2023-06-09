import React, { useState } from "react";

const MyEnrolledClasses = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);

  return (
    <div className="bg-yellow-50 m-3">
      <h2 className="bg-green-300 text-3xl p-3">My Enrolled Classes</h2>
      {enrolledClasses.length === 0 ? (
        <p>No classes enrolled.</p>
      ) : (
        <ul>
          {enrolledClasses.map((classItem) => (
            <li key={classItem.id}>
              <p>Class Name: {classItem.name}</p>
              <p>Class Description: {classItem.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyEnrolledClasses;
