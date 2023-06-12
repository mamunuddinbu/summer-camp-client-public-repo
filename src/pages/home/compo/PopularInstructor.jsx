import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

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
    <motion.div
      className="p-8 bg-gray-100"
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation on component mount
      transition={{ duration: 0.5 }} // Animation duration
    >
      <h2 className="text-2xl font-bold m-8">Popular Instructors</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation on component mount
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
      >
        {instructors.map((instructor) => (
          <motion.div
            key={instructor._id}
            className="bg-white rounded-lg shadow-md p-4"
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation on tap/click
          >
            <motion.img
              src={instructor.photo}
              alt={instructor.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <motion.h3
              className="text-lg font-semibold"
              initial={{ opacity: 0 }} // Initial animation state
              animate={{ opacity: 1 }} // Animation on component mount
              transition={{ duration: 0.5, delay: 0.3 }} // Animation duration with delay
            >
              {instructor.name}
            </motion.h3>
            <motion.p
              className="text-gray-500"
              initial={{ opacity: 0 }} // Initial animation state
              animate={{ opacity: 1 }} // Animation on component mount
              transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with delay
            >
              {instructor.email}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PopularInstructors;
