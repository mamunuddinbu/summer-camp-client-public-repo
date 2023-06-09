import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
  useTitle("Instructor")
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
            {/* <img src={instructor.photo_url} alt={instructor.name} className="rounded-xl" /> */}
            <img src="https://img.freepik.com/free-photo/young-handsome-man-holding-notebooks-concept-e-learning-courses_1258-26588.jpg?w=996&t=st=1686208320~exp=1686208920~hmac=6888ec78127889c322d9fa95dab4606b3fcc4d15678b4e5f656f79e22733b46d" alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{instructor.name}</h2>
            <p>Email: {instructor.email}</p>
            <p>Role: {instructor.role}</p>
            
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
