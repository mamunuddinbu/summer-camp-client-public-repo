import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const Classes = () => {
  const {user} = useContext(AuthContext);
  const email = user?.email;
  useTitle("Classes")
  const [classes, setClasses] = useState([]);
  const [classSelected, setClassSelected] = useState();

  const [isAdmin] = useAdmin(user?.email);
  const [isInstructor] = useInstructor(user?.email);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const selectedClassesHandler = async (selectedClass) => {
    setClassSelected(selectedClass);

    try {
      delete selectedClass._id
      await axios.post('http://localhost:5000/selectedClasses', {...selectedClass, email});
      console.log('Selected class sent to the server');
    } catch (error) {
      console.error('Error sending selected class to the server:', error);
    }
  };

  console.log(classSelected);

  return (
    <div className='grid grid-cols-3 gap-3 mt-4'>
      {classes.map((classItem) => (
        <div key={classItem._id} className={`card ${classItem.availableSeats === 0 ? 'bg-red-500 p-3' : 'bg-green-200 p-3'}`}>
          {/* <img src={classItem.image} alt={classItem.name} className="rounded-xl" /> */}
          <img src="https://media.gettyimages.com/id/1128725181/photo/senior-teacher-talking-to-large-group-of-college-students-in-amphitheater.jpg?s=1024x1024&w=gi&k=20&c=X7c7R5RB8CIK84JIeaMC_SuAznEHs2tjiCNamrpc7Ts=" alt="" />
          <div className="card-body">
            <h2 className="card-title">{classItem.name}</h2>
            <p>Instructor: {classItem.instructor}</p>
            <p>Available Seats: {classItem.availableSeats}</p>
            <p>Price: {classItem.price}</p>
            {classItem.availableSeats === 0 ? (
              <p>Class is full</p>
            ) : (
              <button onClick={() => selectedClassesHandler(classItem)} disabled={isAdmin || isInstructor} className="btn btn-primary">
                Select
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
