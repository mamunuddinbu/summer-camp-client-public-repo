import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/instructor');
      setInstructors(response.data);
    } catch (error) {
      console.error('Failed to fetch instructors:', error);
    }
  };
  console.log(instructors);

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold m-8">Popular Instructors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="bg-white rounded-lg shadow-md p-4">
            <img src={instructor.photo} alt={instructor.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{instructor.name}</h3>
            <p className="text-gray-500">{instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
