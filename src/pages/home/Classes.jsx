import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Classes = () => {
  const [classes, setClasses] = useState([]);

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

  return (
    <div className='grid grid-cols-3 gap-3 mt-4'>
      {classes.map((classItem) => (
        <div key={classItem.id} className={`card ${classItem.availableSeats === 0 ? 'bg-red-500 p-3' : 'bg-green-200 p-3'}`}>
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
              <button disabled={false} className="btn btn-primary">
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
