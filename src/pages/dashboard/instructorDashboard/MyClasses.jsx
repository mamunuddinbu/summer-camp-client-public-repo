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
   
      const response = await axios.get(`/myclasses?email=${user.email}`);
      setClasses(response.data);
    
  };

  return (
    <div>
      <h2>My Classes</h2>
      {classes.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls._id}>
                <td>{cls.className}</td>
                <td>{cls.status}</td>
                <td>{cls.totalEnrolledStudents}</td>
                <td>{cls.status === "denied" ? cls.feedback : "-"}</td>
                <td>
                  <button>Edit</button>
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

