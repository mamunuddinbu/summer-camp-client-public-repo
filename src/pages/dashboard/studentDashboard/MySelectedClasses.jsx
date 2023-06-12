import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/selectedClasses")
      .then((response) => {
        setSelectedClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching selected classes:", error);
      });
  }, []);

  const handleDeleteClass = (classId) => {
    fetch(`http://localhost:5000/deleteClass/${classId}`, {
      method: "DELETE"
    })
      .then((res) => {
        console.log(res);
        setSelectedClasses((prevClasses) =>
          prevClasses.filter((classItem) => classItem._id !== classId)
        );
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Deleted Successfully',
        showConfirmButton: false,
        timer: 1500
      });
  };
  
  
  
  return (
    <div className=" m-3">
      <h2 className="bg-green-300 text-3xl p-3">My Selected Classes</h2>
      {selectedClasses.length === 0 ? (
        <p className="p-3">No classes selected.</p>
      ) : (
        <ul className="space-y-4">
          {selectedClasses.map((classItem) => (
            <li key={classItem._id} className="p-4 border bg-green-100 rounded-lg">
              <p className="text-xl font-semibold">
                Class Name: {classItem.name}
              </p>
              <p className="text-xl font-semibold">
                Class Name: {classItem.instructor}
              </p>
              <p className="text-xl font-semibold">Price: ${classItem.price}</p>
              <p className="text-xl font-semibold">
                Enrolled Student: {classItem.enrolledStudents}
              </p>
              <div>
                <Link to='payment'>
                  <button className="px-4 w-20 py-2 m-5 bg-blue-500 text-white rounded-lg">
                    Pay
                  </button>
                </Link>
                <button
                  className="px-4 w-20 py-2 m-5 bg-red-600 text-white rounded-lg"
                  onClick={() => handleDeleteClass(classItem._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MySelectedClasses;
