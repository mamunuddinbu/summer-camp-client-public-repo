import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users?role=instructor');
        setInstructors(response.data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className='grid grid-cols-3 m-3'>
      {instructors.map((instructor) => (
        <div key={instructor._id} className="card w-80 m-3 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={instructor.photo_url} alt={instructor.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Profile</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
