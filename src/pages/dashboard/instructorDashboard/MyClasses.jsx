import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import axios from "axios";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {   
    try {
      const response = await axios.get(`http://localhost:5000/myclasses?email=${user.email}`);
      setClasses(response.data);
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    }
  };




  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      {classes.length > 0 ? (
        <table className="table-auto table w-full">
          <thead>
            <tr className="bg-gray-400 text-white">
              <th className="w-1/5 px-4 py-2">Class Name</th>
              <th className="w-1/5 px-4 py-2">Status</th>
              <th className="w-1/5 px-4 py-2">Total Enrolled Students</th>
              <th className="w-1/5 px-4 py-2">Feedback</th>
              <th className="w-1/5 px-4 py-2">Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls._id}>
                <td className="w-1/5 px-4 py-2">{cls.name}</td>
                <td className="w-1/5 px-4 py-2">{cls.status}</td>
                <td className="w-1/5 px-4 py-2">{cls.totalEnrolledStudents}</td>
                <td className="w-1/5 px-4 py-2">{cls.feedback}</td>
                {/* <td className="w-1/5 px-4 py-2">{cls.status === "denied" ? cls.feedback : "-"}</td> */}
                <td className="w-1/5 px-4 py-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes found.</p>
      )}
    </div>
  );
};

export default MyClasses;
